# Modular PDF Scripts & Skill Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Monolithic `generate_pdf.py`를 공통 엔진(`scripts/pdf/core.py`), 메타 레지스트리(`scripts/pdf/config.py`), 출판사/교재별 독립 실행 스크립트(`scripts/pdf/build_<출판사>.py`)로 분할하고, 향후 신규 교재 추가 시에도 독립 빌드 스크립트를 생성하도록 `math-worksheet-generator` 스킬을 업데이트한다.

**Architecture:** 
- Core 엔진(`scripts/pdf/core.py`)이 Chrome Headless 탐색, PDF 인쇄, CLI 인자 파싱 및 빌드 루프를 전담.
- Config 레지스트리(`scripts/pdf/config.py`)가 21개 단원의 메타데이터와 출판사 그룹 매핑을 단일 진실 공급원(Single Source of Truth)으로 관리.
- 출판사별 엔트리포인트(`scripts/pdf/build_<name>.py`)는 20~30줄의 독립 스크립트로 구성되어 직관적으로 개별 실행 가능.
- 루트 `generate_pdf.py`는 하위 호환 래퍼로 축소 유지.
- `math-worksheet-generator` 스킬의 Step 1, Step 6 및 에셋에 신규 교재용 독립 빌더 스크립트 생성 규칙 반영.

**Tech Stack:** Python 3.9+, Headless Google Chrome, unittest, KaTeX / HTML5 A4 조판 템플릿.

**Spec:** Chat design confirmed on 2026-09-20 (Grill-yourself design: Option B, scripts/pdf/ directory, default all parts build).

## Global Constraints

- **Python Compatibility**: Python 3.9+ 표준 라이브러리 기반 (`pathlib`, `subprocess`, `argparse`, `shutil`, `re`).
- **Template Contract**: `template/worksheet.html?part=<key>&mode=solution&answers=1&nostudent=1` URL 쿼리 규격 100% 보존.
- **Output Filename Rules**: 기존 파일명 규칙(`<학생명>_<과목>_<단원명>.pdf`, `..._해설지.pdf`, `..._정답포함.pdf`) 엄격 유지.
- **Backward Compatibility**: `python3 generate_pdf.py all`, `python3 generate_pdf.py donga`, `python3 generate_pdf.py 1` 등 기존 커맨드 동작 보존.
- **Zero Naked LaTeX**: 스킬 및 데이터 파일 내의 모든 수식 명령어는 `$..$` 필수.

---

### Task 1: Create `scripts/pdf/config.py` & Test Suite

**Files:**
- Create: `scripts/pdf/__init__.py`
- Create: `scripts/pdf/config.py`
- Create: `tests/test_pdf_modules.py`

**Interfaces:**
- Produces:
  - `PARTS_CONFIG`: dict mapping part_key (str/int) -> metadata dict (`part_key`, `title`, `data_file`, `base_filename`)
  - `PUBLISHER_GROUPS`: dict mapping publisher code (e.g. `'donga'`, `'miraen'`) -> list of part_keys
  - `PRINT_PARTS`, `TB_PARTS`, `DONGA_PARTS`, `MIRAEN_PARTS`, `VISANG_PARTS`, `JIHAKSA_PARTS`, `YBM_PARTS`: subset dicts for each publisher

- [ ] **Step 1: Write the failing test**

```python
# tests/test_pdf_modules.py
import unittest
from pathlib import Path

class TestPdfConfig(unittest.TestCase):
    def setUp(self):
        self.project_root = Path(__file__).resolve().parent.parent

    def test_config_registry_contains_all_21_parts(self):
        from scripts.pdf.config import PARTS_CONFIG, PUBLISHER_GROUPS
        self.assertEqual(len(PARTS_CONFIG), 21)
        expected_groups = {"print", "tb", "donga", "miraen", "visang", "jihaksa", "ybm"}
        self.assertEqual(set(PUBLISHER_GROUPS.keys()), expected_groups)

    def test_all_data_files_exist(self):
        from scripts.pdf.config import PARTS_CONFIG
        for key, cfg in PARTS_CONFIG.items():
            data_path = self.project_root / cfg["data_file"]
            self.assertTrue(data_path.exists(), f"Missing data file for {key}: {data_path}")

    def test_publisher_subsets_match(self):
        from scripts.pdf.config import DONGA_PARTS, MIRAEN_PARTS, PARTS_CONFIG
        self.assertEqual(len(DONGA_PARTS), 4)
        self.assertEqual(len(MIRAEN_PARTS), 3)
        for k in DONGA_PARTS:
            self.assertIn(k, PARTS_CONFIG)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest tests/test_pdf_modules.py`
Expected: FAIL with `ModuleNotFoundError: No module named 'scripts.pdf'`

- [ ] **Step 3: Implement `scripts/pdf/config.py`**

Create `scripts/pdf/__init__.py` (empty) and `scripts/pdf/config.py` extracting all 21 parts and publisher groupings from `generate_pdf.py`.

- [ ] **Step 4: Run test to verify it passes**

Run: `python3 -m unittest tests/test_pdf_modules.py`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add scripts/pdf/__init__.py scripts/pdf/config.py tests/test_pdf_modules.py
git commit -m "feat(pdf): extract PARTS_CONFIG and publisher groups into scripts/pdf/config.py"
```

---

### Task 2: Implement `scripts/pdf/core.py` (Engine & CLI Runner)

**Files:**
- Create: `scripts/pdf/core.py`
- Modify: `tests/test_pdf_modules.py`

**Interfaces:**
- Consumes:
  - `PARTS_CONFIG` from `scripts.pdf.config`
- Produces:
  - `get_chrome_path() -> str`
  - `get_pdf_page_count(pdf_path: Path) -> Optional[str]`
  - `format_bytes(size: int) -> str`
  - `extract_student_from_file(data_path: Path) -> str`
  - `get_part_filenames(cfg: dict, base_dir: Path, student_arg=None, no_student=False) -> dict`
  - `build_pdf(...) -> dict`
  - `create_base_argparser(description: str) -> argparse.ArgumentParser`
  - `run_group_builder(group_name: str, parts_config: dict, base_dir: Path, default_choices=None)`

- [ ] **Step 1: Write tests for core module functions**

Add tests to `tests/test_pdf_modules.py`:
- `test_get_part_filenames`: checks student name prefixing and suffixes (`_해설지.pdf`, `_정답포함.pdf`).
- `test_create_base_argparser`: checks `--with-answers`, `--solution`, `--no-answers`, `--student`, `--no-student` flags.

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest tests/test_pdf_modules.py`
Expected: FAIL with `ModuleNotFoundError: No module named 'scripts.pdf.core'`

- [ ] **Step 3: Implement `scripts/pdf/core.py`**

Extract core engine logic from `generate_pdf.py`:
- Chrome executable detection
- Headless execution subprocess
- CLI argument parsing helper
- Builder batch loop (`run_group_builder`)

- [ ] **Step 4: Run test to verify it passes**

Run: `python3 -m unittest tests/test_pdf_modules.py`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add scripts/pdf/core.py tests/test_pdf_modules.py
git commit -m "feat(pdf): implement headless chrome rendering core in scripts/pdf/core.py"
```

---

### Task 3: Create Publisher-Specific Runners in `scripts/pdf/`

**Files:**
- Create: `scripts/pdf/build_print.py` (학교 프린트 Part 1, 2)
- Create: `scripts/pdf/build_tb.py` (천재 교과서 Part 1, 2, 3)
- Create: `scripts/pdf/build_donga.py` (동아 교과서 Part 1, 2, 3, 4)
- Create: `scripts/pdf/build_miraen.py` (미래엔 교과서 Part 1, 2, 3)
- Create: `scripts/pdf/build_visang.py` (비상 교과서 Part 1, 2, 3)
- Create: `scripts/pdf/build_jihaksa.py` (지학사 교과서 Part 1, 2, 3)
- Create: `scripts/pdf/build_ybm.py` (YBM 교과서 Part 1, 2, 3)
- Create: `scripts/pdf/build_all.py` (전체 42종 일괄 빌더)
- Modify: `tests/test_pdf_modules.py`

**Interfaces:**
- Consumes:
  - `core.run_group_builder` from `scripts.pdf.core`
  - Group configs from `scripts.pdf.config`
- Produces:
  - Executable CLI scripts with standard argument handling:
    `python3 scripts/pdf/build_<publisher>.py [part_num] [--solution] [--no-answers] [--student NAME]`

- [ ] **Step 1: Write test to verify all runner scripts exist and can parse `--help`**

Add tests to `tests/test_pdf_modules.py`:
- Check that all 8 runner files exist in `scripts/pdf/`.
- Run subprocess check `python3 scripts/pdf/build_donga.py --help` exit code 0.

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest tests/test_pdf_modules.py`
Expected: FAIL with `FileNotFoundError` for missing runner scripts.

- [ ] **Step 3: Implement all 8 runner scripts**

Each runner script uses `run_group_builder`:
- `scripts/pdf/build_print.py`
- `scripts/pdf/build_tb.py`
- `scripts/pdf/build_donga.py`
- `scripts/pdf/build_miraen.py`
- `scripts/pdf/build_visang.py`
- `scripts/pdf/build_jihaksa.py`
- `scripts/pdf/build_ybm.py`
- `scripts/pdf/build_all.py`

- [ ] **Step 4: Run test to verify it passes**

Run: `python3 -m unittest tests/test_pdf_modules.py`
Expected: PASS

- [ ] **Step 5: Smoke test with actual PDF generation (e.g. single part)**

Run: `python3 scripts/pdf/build_print.py 1 --no-answers`
Expected: Generates `output/서영이_수학II_Part1_함수의극한과연속.pdf` successfully with exit code 0.

- [ ] **Step 6: Commit**

```bash
git add scripts/pdf/build_*.py tests/test_pdf_modules.py
git commit -m "feat(pdf): add publisher-specific PDF builders and build_all in scripts/pdf/"
```

---

### Task 4: Refactor Root `generate_pdf.py` as Thin Compatibility Wrapper

**Files:**
- Modify: `generate_pdf.py`
- Modify: `tests/test_pdf_modules.py`

**Interfaces:**
- Consumes:
  - `scripts.pdf.core`
  - `scripts.pdf.config`
- Produces:
  - 100% backward-compatible CLI interface for `python3 generate_pdf.py [target] [options]`

- [ ] **Step 1: Write test for root CLI backward compatibility**

Add tests to `tests/test_pdf_modules.py`:
- Run `python3 generate_pdf.py --help` exit code 0.
- Verify target choices include all existing targets (`part1`, `tb`, `donga`, `miraen`, `all`, etc.).

- [ ] **Step 2: Refactor `generate_pdf.py`**

Replace monolithic 500-line implementation with a thin delegating wrapper (~60 lines) importing from `scripts.pdf.config` and `scripts.pdf.core`.

- [ ] **Step 3: Run test to verify it passes**

Run: `python3 -m unittest tests/test_pdf_modules.py`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add generate_pdf.py tests/test_pdf_modules.py
git commit -m "refactor(pdf): reduce generate_pdf.py to thin backward-compatible wrapper"
```

---

### Task 5: Update `math-worksheet-generator` Skill and Assets

**Files:**
- Modify: `.agents/skills/math-worksheet-generator/SKILL.md`
- Create/Sync: `.agents/skills/math-worksheet-generator/assets/scripts/pdf/`
- Modify: `.agents/skills/math-worksheet-generator/assets/scripts/generate_pdf.py`

- [x] **Step 1: Update `SKILL.md`**

1. **Step 1 (Scaffold Workspace & Assets)**: Document `scripts/pdf/` directory structure and publisher-specific builders.
2. **Step 6 (Compile Dual PDFs & Visual Verification)**:
   - Introduce rule: **"신규 교재/학습지 추가 시 `scripts/pdf/build_<새교재>.py` 독립 스크립트를 별도 파일로 반드시 생성하고 `scripts/pdf/config.py`에 등록"**.
   - Provide standard runner template snippet in SKILL.md.
   - Update execution instructions:
     - Specific publisher: `python3 scripts/pdf/build_<name>.py`
     - Single chapter: `python3 scripts/pdf/build_<name>.py <part_num>`
     - All textbooks: `python3 scripts/pdf/build_all.py` (or `python3 generate_pdf.py all`)

- [x] **Step 2: Sync skill assets**

Mirror updated `generate_pdf.py` and `scripts/pdf/` into `.agents/skills/math-worksheet-generator/assets/scripts/`.

- [x] **Step 3: Run all unit tests**

Run: `python3 -m unittest discover tests`
Expected: All tests pass (including `test_problems_data.py` and `test_pdf_modules.py`).

- [x] **Step 4: Commit**

```bash
git add .agents/skills/math-worksheet-generator/ README.md
git commit -m "docs(skill): update math-worksheet-generator skill with modular PDF runner rules"
```

---

## Verification Plan

### Automated Tests
- `python3 -m unittest discover tests`: All unit tests for data integrity and PDF module structure must pass with exit code 0.
- `python3 scripts/pdf/build_print.py --help`: Help message renders without errors.
- `python3 scripts/pdf/build_donga.py --help`: Help message renders without errors.
- `python3 generate_pdf.py --help`: Root wrapper help renders with full choices.

### Integration Smoke Test
- Run single part build: `python3 scripts/pdf/build_donga.py 1 --no-answers`
  - Output: `output/동아_미적분I_동아_Part1_함수의극한과연속.pdf` (valid size, correct page count).
- Run root compatibility wrapper: `python3 generate_pdf.py donga1 --no-answers`
  - Output: Verified identical behavior.
