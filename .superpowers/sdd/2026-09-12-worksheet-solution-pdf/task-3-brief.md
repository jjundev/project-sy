# Task 3 Brief: Part 2(16문항) 교수법 맞춤 단계별 상세 풀이 데이터 구축

## 1. Goal
`data/problems_part2.js`의 모든 16문항에 `solution` 필드를 추가한다.
각 풀이는 서영이에게 지도한 미분계수/도함수 정의 대입, 절댓값 구간별 분리, 도함수 공식 원칙을 적용하여 단계별(`steps`)로 작성한다.

## 2. Requirements & Formats
- **Target File**: `data/problems_part2.js`
- **구조 규격**:
  - **평균변화율 (01~04번)**: $\frac{\Delta y}{\Delta x} = \frac{f(b)-f(a)}{b-a}$ 공식에 식을 대입하고 인수분해·약분하여 최종 값 도출.
  - **미분계수 정의 (05~08번)**: $f'(a) = \lim_{x \to a} \frac{f(x)-f(a)}{x-a}$ 공식 대입 $\to$ $\frac{0}{0}$ 인수분해·약분 $\to$ 재대입.
  - **절댓값 연속/미분가능성 (09~12번)**:
    - 1단계: $x=a$ 대입으로 극한값=함숫값(연속) 확인.
    - 2단계: 절댓값을 $x \ge a, x < a$ 구간별 함수로 분리하여 각 구간의 미분계수 식에 대입 후 우미분계수와 좌미분계수를 각각 계산해 불일치(미분불가) 증명.
  - **도함수 정의 (13~14번)**: $f'(x) = \lim_{\Delta x \to 0} \frac{f(x+\Delta x)-f(x)}{\Delta x}$ 대입 $\to$ 분자 전개 $\to$ $\Delta x$ 약분 $\to$ $\Delta x=0$ 대입.
  - **도함수 공식 (15~16번)**: $(x^n)'=nx^{n-1}$, $(c)'=0$ 공식 대입하여 각 항별 미분.
- **소문항이 있는 문항 (예: (1), (2))**:
  - `label`: `"(1)"`, `"(2)"`를 사용하여 세로 순차 배열.
- **핵심 주의사항**:
  - 카드 높이(120.5mm) 내에 맞아야 하므로 각 step의 `content`는 불필요한 사족 없이 핵심 식 전개 위주로 콤팩트하게 작성 (수식은 KaTeX `$...$`로 감싸기).
  - KaTeX `$` 기호 개수가 짝수여야 함.
  - 역슬래시 이스케이프 주의 (`\\lim`, `\\frac`, `\\Delta` 등 2개 역슬래시 사용).

## 3. Verification Command
- `python3 tests/test_problems_data.py data/problems_part2.js`
  - Expected: `PASS: data/problems_part2.js is valid.`

## 4. Deliverable & Reporting
- 변경 사항 구현 후 git commit (`feat: add step-by-step solutions for Part 2`).
- 완료 보고서를 `.superpowers/sdd/2026-09-12-worksheet-solution-pdf/task-3-report.md`에 작성.
