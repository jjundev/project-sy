# 서영이 맞춤 수학 II 2×2 해설지(풀이지) PDF 자동 생성 시스템 구현 계획서

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 서영이가 문제지에서 학습했던 동일한 2×2 A4 모눈 서식 상의 빈 풀이 공간에 선생님의 맞춤 교수법(선 대입 → 부정형 식 변형 → 재대입, 절댓값 구간별 함수 분리)에 기반한 단계별 실제 풀이와 정답이 깔끔하게 조판된 독립 해설지 PDF 2종(`Part 1 해설지`, `Part 2 해설지`)을 자동 생성하는 시스템을 구축한다.

**Architecture:** 기존 단일 데이터 소스(`problems_part1.js`, `problems_part2.js`)에 `solution` 객체 계층을 추가하고, `template/worksheet.html`의 URL 쿼리 파라미터(`mode=solution`)를 통해 카드의 모눈 영역(`.card__work`)에 KaTeX 수식 기반 단계별 풀이 박스를 동적으로 조판하며, Headless Chrome 빌더(`generate_pdf.py`)를 확장하여 고화질 인쇄용 해설지 PDF를 일괄 컴파일한다.

**Tech Stack:** JavaScript (ES6), HTML5/CSS Paged Media, KaTeX 0.16.11, Python 3, Headless Google Chrome, pdftoppm (검증용)

**Spec:** [WORKSHEET_DESIGN_SPEC.md](file:///Users/hyunjun_macbook_pro/Documents/Private/project-sy/docs/WORKSHEET_DESIGN_SPEC.md), 이전 회차 `/grill-yourself` 확정 설계안

## Global Constraints

- **교수법 알고리즘 100% 반영**: 모든 문항의 해설은 사용자가 지도한 3단계 프로세스를 엄격히 준수한다:
  1. `[1단계: 선 대입]` — 주어진 $x$값을 식에 직접 대입하여 수렴 형태 또는 부정형 형태($\frac{0}{0}, \frac{\infty}{\infty}, \infty-\infty$) 판별.
  2. `[2단계: 식 변형]` — 부정형일 경우 인수분해·약분, 유리화, 최고차항 나누기 적용. 절댓값 함수는 반드시 구간별 함수($x \ge a, x < a$)로 변경.
  3. `[3단계: 재대입 및 정답]` — 변형된 식에 다시 대입하여 최종 수치 도출.
- **카드 높이 절대 불변**: 2×2 그리드 A4 1장당 4문항 레이아웃(카드 높이 120.5mm)을 절대 초과하지 않도록 콤팩트 타이포그래피(9.3px, line-height 1.4, 압축형 KaTeX 수식)를 적용하여 페이지 밀림을 원천 차단한다.
- **정답 기입란 자동 완성**: 해설지 모드에서는 우측 하단 정답란(`.card__answer`)에 최종 정답이 강조 인디고 텍스트 및 실선 박스로 채워져 채점과 대조가 즉각 이루어지도록 한다.
- **빠른 정답표 부록 첨부**: 해설지 PDF 맨 마지막 페이지에도 4열 빠른 정답 및 오답 분석란(Part 1: 8쪽, Part 2: 5쪽)을 함께 묶어 인쇄 완성도를 보장한다.

---

## File Structure

```
project-sy/
├── template/
│   ├── worksheet.html          # ?mode=solution 파라미터 처리 및 풀이 박스 조판 엔진, 툴바 토글 버튼
│   └── style.css               # .card--solution, .card__solution-box, 3단계 뱃지 및 인디고 정답란 스타일
├── data/
│   ├── sample_problems.js      # 샘플 데이터 (solution 스키마 예시 포함)
│   ├── problems_part1.js       # Part 1 전 28문항 단계별 상세 풀이 데이터 추가
│   └── problems_part2.js       # Part 2 전 16문항 단계별 상세 풀이 데이터 추가
├── tests/
│   └── test_problems_data.py   # solution 스키마, 단계별 키워드, KaTeX 문법 자동 검증 테스트 확장
├── generate_pdf.py             # solution CLI 타깃 추가 (해설지 2종 및 all 6종 일괄 빌드)
└── output/                     # 생성될 최종 해설지 PDF
    ├── 서영이_수학II_Part1_함수의극한과연속_해설지.pdf (8쪽)
    └── 서영이_수학II_Part2_미분계수와도함수_해설지.pdf (5쪽)
```

---

### Task 1: 테스트 스위트에 `solution` 스키마 및 수식 무결성 검증 추가

**Files:**
- Modify: `tests/test_problems_data.py`

**Interfaces:**
- Consumes: `data/problems_part1.js`, `data/problems_part2.js`, `data/sample_problems.js`
- Produces: CLI 유효성 검사 및 `unittest` 테스트 케이스 통과

- [ ] **Step 1: `tests/test_problems_data.py`에 solution 스키마 검증 로직 작성**

```python
# tests/test_problems_data.py 에 추가
def validate_solution(sol: dict, pid: int, source_name: str):
    """문항의 solution 필드 구조 및 KaTeX 수식 기호 검증"""
    assert isinstance(sol, dict), f"{source_name}: Problem {pid} 'solution' must be an object."
    assert "steps" in sol and isinstance(sol["steps"], list), (
        f"{source_name}: Problem {pid} 'solution.steps' must be a list."
    )
    assert len(sol["steps"]) > 0, f"{source_name}: Problem {pid} 'solution.steps' cannot be empty."
    for s_idx, step in enumerate(sol["steps"]):
        assert "label" in step and isinstance(step["label"], str), (
            f"{source_name}: Problem {pid} step {s_idx} missing 'label'."
        )
        assert "content" in step and isinstance(step["content"], str) and step["content"].strip(), (
            f"{source_name}: Problem {pid} step {s_idx} missing 'content'."
        )
        # KaTeX $ 기호 짝이 맞는지 검사
        dollar_count = step["content"].count("$")
        assert dollar_count % 2 == 0, (
            f"{source_name}: Problem {pid} step {s_idx} has unmatched $ math delimiters: {step['content']}"
        )
```

- [ ] **Step 2: `validate_data` 함수에 solution 검증 호출 추가**
- [ ] **Step 3: `data/sample_problems.js`에 샘플 solution을 추가하고 단위 테스트 실행**
  Run: `python3 -m unittest tests/test_problems_data.py`
  Expected: PASS (13 tests OK)

---

### Task 2: Part 1(28문항) 교수법 맞춤 단계별 상세 풀이 데이터 구축

**Files:**
- Modify: `data/problems_part1.js`
- Test: `tests/test_problems_data.py`

**Interfaces:**
- Consumes: `학교 프린트 1~11p` 문제 및 선생님 필기 문제 28문항
- Produces: `data/problems_part1.js` 각 문항의 `solution` 필드 (전 28문항)

- [ ] **Step 1: Part 1의 28개 전 문항에 3단계 알고리즘 풀이 작성**
  - **기본 극한(01~09번)**: 대입 후 바로 수치 계산 또는 $\frac{1}{\pm\infty} \to 0$, $\frac{1}{+0} \to \infty$ 발산 과정 명시.
  - **절댓값 극한(05, 06, 11번)**: $x \ge a, x < a$ 구간별 함수 분리 식 전개 및 우극한·좌극한 일치 여부 비교.
  - **0/0 부정형(16~20번)**: 분자·분모 인수분해 및 약분 과정, 무리식 유리화 단계 명시.
  - **$\infty/\infty$, $\infty-\infty$ 부정형(20~23번)**: 분모 최고차항 나누기 및 분자 유리화 과정 명시.
  - **미정계수 및 연속성(24~28번)**: 분모 $\to 0$일 때 분자 $\to 0$ 대입 성질, 연속 조건($\lim f(x) = f(a)$) 단계별 서술.
- [ ] **Step 2: 데이터셋 유효성 검증기 실행**
  Run: `python3 tests/test_problems_data.py data/problems_part1.js`
  Expected: `PASS: data/problems_part1.js is valid.`

---

### Task 3: Part 2(16문항) 교수법 맞춤 단계별 상세 풀이 데이터 구축

**Files:**
- Modify: `data/problems_part2.js`
- Test: `tests/test_problems_data.py`

**Interfaces:**
- Consumes: `학교 프린트 12~15p` 미분계수와 도함수 16문항
- Produces: `data/problems_part2.js` 각 문항의 `solution` 필드 (전 16문항)

- [ ] **Step 1: Part 2의 16개 전 문항에 3단계 알고리즘 풀이 작성**
  - **평균변화율(01~04번)**: $\frac{\Delta y}{\Delta x} = \frac{f(b)-f(a)}{b-a}$ 공식 대입 및 약분.
  - **미분계수 정의(05~08번)**: $f'(a) = \lim_{x \to a} \frac{f(x)-f(a)}{x-a}$ 식 대입 $\to$ 인수분해·약분 $\to$ 재대입.
  - **절댓값 함수의 연속성과 미분가능성(09~12번)**:
    - 1단계: $x=a$ 대입으로 극한값=함숫값 연속 증명.
    - 2단계: 절댓값을 구간별 함수로 분리하여 우미분계수와 좌미분계수를 각각 대입 계산 후 불일치 증명.
  - **도함수 정의(13~14번)**: $f'(x) = \lim_{\Delta x \to 0} \frac{f(x+\Delta x)-f(x)}{\Delta x}$ 대입 $\to$ 전개 $\to$ $\Delta x$ 약분 $\to$ $\Delta x=0$ 대입.
  - **도함수 공식(15~16번)**: $(x^n)' = n x^{n-1}$, $(c)'=0$ 각 항별 적용.
- [ ] **Step 2: 데이터셋 유효성 검증기 실행**
  Run: `python3 tests/test_problems_data.py data/problems_part2.js`
  Expected: `PASS: data/problems_part2.js is valid.`

---

### Task 4: HTML 템플릿 및 CSS 해설지 모드 조판 엔진 구현

**Files:**
- Modify: `template/worksheet.html`
- Modify: `template/style.css`

**Interfaces:**
- Consumes: URL query `?part=1&mode=solution` or `?part=2&mode=solution`
- Produces: 2×2 카드 그리드 내부 `.card__solution-box` 및 인디고 정답란 렌더링

- [ ] **Step 1: `template/style.css`에 해설 모드 스타일 추가**
  - `.card--solution`: 해설 카드 기본 스타일.
  - `.card__solution-box`:
    ```css
    .card__solution-box {
      flex: 1 1 auto;
      min-height: 0;
      margin-top: 1.5mm;
      padding: 2mm 2.5mm;
      background: rgba(255, 255, 255, 0.88);
      border: 1px solid rgba(59, 130, 246, 0.25);
      border-radius: 4px;
      font-size: 9.3px;
      line-height: 1.42;
      color: #1e293b;
      overflow: hidden;
    }
    .sol-step {
      margin-bottom: 1.5mm;
    }
    .sol-step:last-child {
      margin-bottom: 0;
    }
    .sol-step__badge {
      display: inline-block;
      font-size: 8.5px;
      font-weight: 700;
      color: #1d4ed8;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 3px;
      padding: 0 3px;
      margin-right: 4px;
    }
    .sol-step__content {
      display: inline;
    }
    .card__answer--filled {
      border: 1px solid #2563eb !important;
      background-color: #eff6ff !important;
      color: #1d4ed8 !important;
      font-weight: 700 !important;
    }
    ```
  - `.card__work`: 해설지 모드에서도 연한 5mm 모눈을 배경으로 유지하여 워크시트 감성 보존.
- [ ] **Step 2: `template/worksheet.html`에 해설 렌더링 로직 추가**
  - `URLSearchParams`에서 `mode === 'solution'` 또는 `solution === '1'` 감지.
  - 헤더 과목 칩에 `해설` 뱃지 결합 (`수학 II · 해설`).
  - `buildSolutionBox(solution)` 함수 구현:
    - 각 step 순회하며 `.sol-step__badge`와 `.sol-step__content` 생성.
    - KaTeX 수식(`renderInlineMath`) 렌더링.
  - 해설 모드일 때 `.card__answer`에 `card__answer--filled` 클래스 부여 및 최종 `p.answer` 삽입.
  - 온스크린 툴바(`.ws-toolbar`)에 `[📝 해설 모드]` 토글 링크 추가.
- [ ] **Step 3: 브라우저 및 Headless Chrome으로 렌더링 및 페이지 밀림(오버플로우) 검사**

---

### Task 5: PDF 빌더 확장 및 최종 해설지 PDF 일괄 컴파일 & 시각 검증

**Files:**
- Modify: `generate_pdf.py`
- Test: `pdftoppm`, `view_file`

**Interfaces:**
- Consumes: `template/worksheet.html?part=1&mode=solution&answers=1`, `template/worksheet.html?part=2&mode=solution&answers=1`
- Produces: `output/서영이_수학II_Part1_함수의극한과연속_해설지.pdf` (8쪽), `output/서영이_수학II_Part2_미분계수와도함수_해설지.pdf` (5쪽)

- [ ] **Step 1: `generate_pdf.py`에 해설지 빌드 타깃 추가**
  - `python3 generate_pdf.py solution`: Part 1 해설지, Part 2 해설지 빌드.
  - `python3 generate_pdf.py all`: 문제지 2종 + 문제지(정답포함) 2종 + 해설지 2종 (총 6종) 일괄 빌드.
- [ ] **Step 2: 해설지 PDF 빌드 실행**
  Run: `python3 generate_pdf.py solution`
  Expected: Part 1(8쪽, 약 1.5MB), Part 2(5쪽, 약 1.1MB) 생성 완료.
- [ ] **Step 3: `pdftoppm`을 통해 생성된 해설지 페이지를 PNG로 렌더링**
  Run: `pdftoppm -png -r 150 output/서영이_수학II_Part1_함수의극한과연속_해설지.pdf scratch/inspect_sol/p1_sol && pdftoppm -png -r 150 output/서영이_수학II_Part2_미분계수와도함수_해설지.pdf scratch/inspect_sol/p2_sol`
- [ ] **Step 4: `view_file`로 소문항이 많은 페이지(Part 1 p.3, p.5, p.6 / Part 2 p.3, p.4) 육안 검사**
  - 모든 3단계 풀이가 카드 높이 내에 쏙 들어가는지 확인.
  - KaTeX 수식이 잘리거나 개행이 부자연스럽지 않은지 확인.
  - 하단 정답란에 인디고 강조 정답이 정상 표시되는지 확인.
  - 마지막 페이지 빠른 정답표가 정상 첨부되었는지 확인.

---

## Plan Self-Review Checklist

1. **Spec Coverage**: /grill-yourself에서 결정된 Option A(단일 데이터셋 확장), 모눈 내부 풀이 조판, 3단계 뱃지형 풀이, 소문항 세로 순차 배치, 인디고 정답란 자동 기입, 부록 빠른정답표 첨부가 5개 태스크에 빠짐없이 매핑되었는가? -> **Yes**
2. **No Placeholders**: "나중에 구현", "TODO", "적절한 에러 처리" 등 모호한 표현이 없는가? 모든 파일 경로와 CLI 명령어가 명시되었는가? -> **Yes**
3. **Type Consistency**: `solution.steps[].label`, `solution.steps[].content` 구조가 테스트, 데이터, 템플릿 전반에 걸쳐 일치하는가? -> **Yes**
