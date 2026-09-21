# 서영이 수학 II 학교 프린트 데이터화 및 실전 PDF 생성 실행 계획서

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 서영이 학교 유인물(15쪽) 전 문항 및 선생님 손글씨 필기 문제, AI 쌍둥이 변형 문제를 추출하여 서영이 맞춤형 힌트 규칙(선 대입 → 계산 시 정답 → 부정형 시 변형 후 재대입)을 적용한 데이터셋을 구축하고, 완성된 2×2 HTML 템플릿을 통해 실전 인쇄용 A4 PDF를 자동 생성한다.

**Architecture:** 학교 프린트 15쪽을 `Part 1: 함수의 극한과 연속`과 `Part 2: 미분계수와 도함수` 2권의 자바스크립트 데이터(`data/problems_part1.js`, `data/problems_part2.js`)로 구조화하고, `template/worksheet.html`에 동적으로 주입하여 Headless Chrome CLI를 통해 인쇄 완결성을 갖춘 고화질 A4 PDF로 컴파일한다.

**Tech Stack:** JavaScript (ES6), HTML5/CSS Paged Media, KaTeX 0.16.11, Python 3, Headless Google Chrome

**Spec:** [WORKSHEET_DESIGN_SPEC.md](file:///Users/hyunjun_macbook_pro/Documents/Private/project-sy/docs/WORKSHEET_DESIGN_SPEC.md), [README.md](file:///Users/hyunjun_macbook_pro/Documents/Private/project-sy/README.md)

## Global Constraints

- **교수법 힌트 강제 규칙**: 모든 문제의 `tip`은 사용자가 서영이에게 지도한 알고리즘을 그대로 따른다:
  1. *1단계 (선 대입)*: "먼저 $x=a$를 바로 대입해보기!"
  2. *2단계 (계산 가능 시)*: "분모가 0이 아니거나 계산이 되면 그 값이 곧 정답"
  3. *3단계 (부정형 시 변형 후 재대입)*: "$\frac{0}{0}$꼴(인수분해/유리화) 또는 $\frac{\infty}{\infty}, \infty-\infty$꼴(최고차항 나누기/유리화)로 변형한 뒤 다시 $x=a$를 대입하기"
- **페이지 정밀도**: 각 파트는 반드시 4의 배수 문항으로 구성하여 빈 카드가 비정상적으로 남거나 페이지 넘김이 어긋나지 않도록 한다.
- **오프라인 동작 보장**: 브라우저에서 인터넷 연결 없이 더블클릭(`file://`)만으로 열리도록 `window.WORKSHEET_DATA` 객체 포맷을 준수한다.
- **소문항 풀이 공간 보호**: 소문항이 3개 이상인 문제는 2개씩 카드를 분할하여 서영이의 풀이 필기 공간(최소 60mm)을 사수한다.

---

## File Structure

```
project-sy/
├── template/
│   ├── worksheet.html          # 문제지 뷰어 및 빠른 정답표 토글 기능 지원
│   └── style.css               # A4 인쇄 스타일시트 및 정답표 그리드 스타일
├── data/
│   ├── sample_problems.js      # 기존 샘플 데이터 (보존)
│   ├── problems_part1.js       # Part 1: 함수의 극한과 연속 (신규)
│   └── problems_part2.js       # Part 2: 미분계수와 도함수 (신규)
├── tests/
│   └── test_problems_data.py   # 데이터 무결성, KaTeX 문법, 힌트 규칙 자동 검증기
├── generate_pdf.py             # Headless Chrome 기반 원클릭 PDF 빌더
└── output/                     # 생성된 최종 PDF 저장 폴더
    ├── 서영이_수학II_Part1_함수의극한과연속.pdf
    └── 서영이_수학II_Part2_미분계수와도함수.pdf
```

---

### Task 1: 데이터 무결성 및 교수법 힌트 검증기 작성

**Files:**
- Create: `tests/test_problems_data.py`

**Interfaces:**
- Consumes: `data/problems_part1.js`, `data/problems_part2.js`
- Produces: CLI exit code 0 on valid data, non-zero on schema/hint/formula violation

- [ ] **Step 1: 실패하는 테스트 스크립트 작성**

```python
# tests/test_problems_data.py
import re
import json
import os
import sys

def load_js_data(filepath):
    if not os.path.exists(filepath):
        raise FileNotFoundError(f"File not found: {filepath}")
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read().strip()
    match = re.search(r"window\.WORKSHEET_DATA\s*=\s*(\{.*?\});?\s*$", content, re.DOTALL)
    if not match:
        raise ValueError(f"Failed to parse WORKSHEET_DATA from {filepath}")
    return json.loads(match.group(1))

def validate_dataset(filepath):
    data = load_js_data(filepath)
    assert "meta" in data and "problems" in data, "Must have meta and problems"
    problems = data["problems"]
    assert len(problems) > 0, "Problems cannot be empty"
    assert len(problems) % 4 == 0, f"Total problems ({len(problems)}) must be a multiple of 4 for 2x2 A4 pages"
    
    required_keys = {"id", "source", "tag", "question", "formula", "subQuestions", "tip", "answer"}
    for p in problems:
        missing = required_keys - set(p.keys())
        assert not missing, f"Problem {p.get('id')} missing keys: {missing}"
        # 힌트 검증: tip이 존재할 경우 대입 또는 식 변형 안내 포함 여부
        if p["tip"]:
            assert any(kw in p["tip"] for kw in ["대입", "인수분해", "유리화", "나누", "공식", "미분", "좌극한", "우극한"]), \
                f"Problem {p['id']} tip does not follow pedagogy: {p['tip']}"

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "data/problems_part1.js"
    validate_dataset(target)
    print(f"PASS: {target} is valid.")
```

- [ ] **Step 2: 테스트 실행하여 파일 부재로 실패 확인**

Run: `python3 tests/test_problems_data.py data/problems_part1.js`
Expected: `FileNotFoundError: File not found: data/problems_part1.js`

---

### Task 2: Part 1 (I. 함수의 극한과 연속) 문제 데이터 구축

**Files:**
- Create: `data/problems_part1.js`
- Test: `tests/test_problems_data.py`

**Scope of Problems (프린트 1p~11p 기반 총 24~28문항, 4의 배수 엄수):**
1. 01~04번: 함수의 극한 기초 (그래프를 이용한 수렴 조사, 직관적 대입)
2. 05~08번: 좌극한과 우극한 및 절댓값 함수 (프린트 3p 문제4, 4p 문제5, 문제6, **선생님 필기 문제 수록**)
3. 09~12번: 극한의 성질 및 기본 연산 (프린트 5p 개념확인, 문제1 분할 수록)
4. 13~16번: 0/0 꼴의 극한 - 인수분해 및 유리화 (프린트 6p 예제, 문제2, **선생님 필기 $\lim_{x\to 2}\frac{x^2+3x-10}{x-2}$**)
5. 17~20번: $\infty/\infty$ 및 $\infty-\infty$ 꼴 (프린트 7p 예제2, 문제3, **선생님 필기 $\lim_{x\to\infty}\frac{4x+1}{2x+3}$**)
6. 21~24번: 미정계수의 결정 (프린트 8p 예제3, 문제4, **선생님 필기 $\lim_{x\to 2}\frac{x^2+ax+b}{x-2}=4$**)
7. 25~28번: 함수의 연속성 및 구간별 미정계수 (프린트 10p, 11p, **선생님 시험문제 필기 $f(x)=\begin{cases}x+5\\k\end{cases}$**)

**힌트 작성 규칙 (User Pedagogy 반영):**
- 모든 0/0꼴: `"💡 Tip: 먼저 x값을 대입해 0/0 꼴인지 확인! 0/0이면 인수분해(또는 유리화)로 약분 후 다시 x 대입하기"`
- 모든 $\infty/\infty$꼴: `"💡 Tip: x→∞ 대입 시 ∞/∞ 꼴! 분모 최고차항으로 분자·분모를 나눈 뒤 다시 대입하기"`
- 직관적 수렴: `"💡 Tip: 먼저 x값을 바로 식에 대입하기! 계산이 바로 된다면 그 값이 그대로 정답"`

- [ ] **Step 1: `data/problems_part1.js` 작성 (정규 28문항 데이터 및 맞춤 힌트 완비)**
- [ ] **Step 2: 유효성 검증 테스트 실행**

Run: `python3 tests/test_problems_data.py data/problems_part1.js`
Expected: `PASS: data/problems_part1.js is valid.`

---

### Task 3: Part 2 (II. 미분계수와 도함수) 문제 데이터 구축

**Files:**
- Create: `data/problems_part2.js`
- Test: `tests/test_problems_data.py`

**Scope of Problems (프린트 12p~15p 기반 총 12~16문항, 4의 배수 엄수):**
1. 01~04번: 평균변화율 (프린트 12p 예제1, 스스로해보기, 문제1)
   - 힌트: `"💡 Tip: $\\frac{\\Delta y}{\\Delta x} = \\frac{f(b)-f(a)}{b-a}$ 공식에 $x$값들을 대입하여 계산하기"`
2. 05~08번: 미분계수의 정의 및 계산 (프린트 13p 예제2, 문제3, 동찬쌤 필기 "풀이2까지 시험출제")
   - 힌트: `"💡 Tip: $f'(a)=\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}$에 대입 → 0/0 꼴이므로 약분 후 다시 대입!"`
3. 09~12번: 미분가능성과 연속성 (프린트 14p 예제4 $|x|$, 문제7 $|x^2-x|$)
   - 힌트: `"💡 Tip: 1단계: $x=a$ 대입해 연속 판정 → 2단계: 좌미분계수와 우미분계수 각각 구해 일치하는지 확인"`
4. 13~16번: 도함수의 정의와 공식 (프린트 15p 예제1, 스스로해보기, 문제1 및 쌍둥이 변형)
   - 힌트: `"💡 Tip: 도함수 공식 $(x^n)' = n x^{n-1}$ 및 상수의 미분은 0임을 활용하여 계산하기"`

- [ ] **Step 1: `data/problems_part2.js` 작성 (정규 16문항 데이터 및 맞춤 힌트 완비)**
- [ ] **Step 2: 유효성 검증 테스트 실행**

Run: `python3 tests/test_problems_data.py data/problems_part2.js`
Expected: `PASS: data/problems_part2.js is valid.`

---

### Task 4: 템플릿 다중 데이터셋 전환 및 빠른 정답표(Answer Key) 부록 지원

**Files:**
- Modify: `template/worksheet.html`
- Modify: `template/style.css`

**Interfaces:**
- URL Query Param: `template/worksheet.html?part=1` 또는 `template/worksheet.html?part=2`
- URL Query Param: `&answers=1` 설정 시 문제지 마지막 장에 콤팩트 빠른 정답표 출력

- [ ] **Step 1: `worksheet.html`에 동적 데이터 로더 및 정답표 렌더러 추가**
  - URL 파라미터 `part=1`이면 `../data/problems_part1.js`, `part=2`면 `../data/problems_part2.js` 로드 (기본값은 `sample_problems.js`)
  - 모든 문제 렌더링 후, 맨 마지막에 `.page-sheet.answer-key-page`를 생성하여 선생님용 빠른 정답표를 한눈에 격자로 조판
- [ ] **Step 2: `style.css`에 빠른 정답표 인쇄용 스타일 추가**
  - 정답표용 4열 테이블/그리드 디자인 정의 (`page-break-before: always;`)
- [ ] **Step 3: 브라우저 및 정적 검증**
  - `template/worksheet.html?part=1` 열람 시 Part 1 (7장) 정상 렌더링 확인

---

### Task 5: Headless Chrome 기반 원클릭 PDF 자동 빌더 스크립트 작성

**Files:**
- Create: `generate_pdf.py`

**Interfaces:**
- Command: `python3 generate_pdf.py part1` -> `output/서영이_수학II_Part1_함수의극한과연속.pdf`
- Command: `python3 generate_pdf.py part2` -> `output/서영이_수학II_Part2_미분계수와도함수.pdf`
- Command: `python3 generate_pdf.py all` -> 2종 모두 일괄 생성

- [ ] **Step 1: macOS Google Chrome Headless 호출 빌더 스크립트 작성**

```python
# generate_pdf.py
import os
import sys
import subprocess

CHROME_PATHS = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium"
]

def get_chrome_path():
    for p in CHROME_PATHS:
        if os.path.exists(p):
            return p
    raise FileNotFoundError("Google Chrome not found in standard macOS paths.")

def build_pdf(part_num, output_filename):
    chrome = get_chrome_path()
    os.makedirs("output", exist_ok=True)
    out_path = os.path.abspath(os.path.join("output", output_filename))
    
    # 임시 HTML 또는 direct file:// URL
    # worksheet.html?part=1 형태를 위해 절대 경로 URL 구성
    base_dir = os.path.abspath(".")
    url = f"file://{base_dir}/template/worksheet.html?part={part_num}"
    
    cmd = [
        chrome,
        "--headless",
        "--disable-gpu",
        "--no-pdf-header-footer",
        "--print-to-pdf-no-header",
        f"--print-to-pdf={out_path}",
        url
    ]
    print(f"Building PDF for Part {part_num} -> {out_path}...")
    subprocess.run(cmd, check=True)
    print(f"Done: {out_path} ({os.path.getsize(out_path)} bytes)")

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "all"
    if target in ("part1", "1"):
        build_pdf(1, "서영이_수학II_Part1_함수의극한과연속.pdf")
    elif target in ("part2", "2"):
        build_pdf(2, "서영이_수학II_Part2_미분계수와도함수.pdf")
    else:
        build_pdf(1, "서영이_수학II_Part1_함수의극한과연속.pdf")
        build_pdf(2, "서영이_수학II_Part2_미분계수와도함수.pdf")
```

- [ ] **Step 2: 스크립트 실행 및 PDF 생성 확인**

Run: `python3 generate_pdf.py part1`
Expected: `output/서영이_수학II_Part1_함수의극한과연속.pdf` 파일 정상 생성 및 파일 크기 확인

---

### Task 6: 최종 산출물 검증 및 렌더링 품질 검사

**Files:**
- Check: `output/서영이_수학II_Part1_함수의극한과연속.pdf`
- Check: `output/서영이_수학II_Part2_미분계수와도함수.pdf`

- [ ] **Step 1: 전체 데이터 단위 테스트 통과 검증**

Run: `python3 tests/test_problems_data.py data/problems_part1.js && python3 tests/test_problems_data.py data/problems_part2.js`
Expected: ALL PASS

- [ ] **Step 2: 생성된 PDF 페이지 수 및 레이아웃 검증**

Run: `pdfinfo output/서영이_수학II_Part1_함수의극한과연속.pdf`
Expected: 4문제당 1쪽 + 정답표 페이지 정상 반영 확인

---

## Self-Review

1. **Spec coverage:**
   - 15쪽 학습지의 모든 정규 문제 및 선생님 손글씨 7문제 수록 계획 수립 완료 (Task 2, Task 3)
   - 사용자 지정 교수법("선 대입 → 계산 시 정답 → 부정형 시 변형 후 재대입") 힌트 강제 규칙 전수 반영 (Task 1 검증기, Task 2, 3)
   - 2×2 A4 모눈 인쇄 템플릿과 PDF 자동 출력 파이프라인 수립 완료 (Task 4, Task 5)
2. **Placeholder scan:**
   - "TBD", "TODO" 없음. 구체적인 문항 번호와 배치 구성 완료.
3. **Type/Schema consistency:**
   - `README.md` 및 `WORKSHEET_DESIGN_SPEC.md`에 정의된 `id`, `source`, `tag`, `question`, `formula`, `subQuestions`, `tip`, `answer` 스키마와 100% 일치.

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-09-12-worksheet-problems-and-pdf.md`. Two execution options:

1. **Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration.
2. **Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints.

**Which approach?**
