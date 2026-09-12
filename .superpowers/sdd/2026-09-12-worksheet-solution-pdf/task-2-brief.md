# Task 2 Brief: Part 1(28문항) 교수법 맞춤 단계별 상세 풀이 데이터 구축

## 1. Goal
`data/problems_part1.js`의 모든 28문항에 `solution` 필드를 추가한다.
각 풀이는 서영이에게 지도한 **3단계 알고리즘**(선 대입 → 부정형 식 변형 → 재대입) 및 **절댓값 구간별 함수 분리** 원칙을 엄격하게 적용하여 단계별(`steps`)로 작성한다.

## 2. Requirements & Formats
- **Target File**: `data/problems_part1.js`
- **구조 규격**:
  ```javascript
  "solution": {
    "steps": [
      {
        "label": "[1단계: 대입]",
        "content": "$x=1$을 대입하면 $\\frac{0}{0}$ 꼴(부정형)입니다."
      },
      {
        "label": "[2단계: 식 변형]",
        "content": "분자를 인수분해하여 약분: $\\frac{(x-1)(x+2)}{x-1} = x+2$"
      },
      {
        "label": "[3단계: 재대입]",
        "content": "$x=1$을 다시 대입하면 $1+2 = 3$ $\\therefore$ **3**"
      }
    ]
  }
  ```
- **소문항이 있는 문항 (예: (1), (2))**:
  - 레이아웃 특성상 소문항별로 단계를 묶거나 라벨을 `"(1)"`, `"(2)"`로 구분하여 서술:
    ```javascript
    "solution": {
      "steps": [
        {
          "label": "(1)",
          "content": "[1단계] $x \\to \\infty$ 대입 시 $\\frac{1}{\\infty} \\to 0$이므로 $0 + 1 = 1$ $\\therefore$ **1**"
        },
        {
          "label": "(2)",
          "content": "[1단계] 절댓값 함수는 $x < -1$ 구간 함수 $-(x+1)$로 변경: $\\frac{1}{-(x+1)}$ \\\\ [2단계] $x \\to -\\infty$ 대입 시 $\\frac{1}{\\infty} \\to 0$ $\\therefore$ **0**"
        }
      ]
    }
    ```
- **핵심 주의사항**:
  - 카드 높이(120.5mm) 내에 맞아야 하므로 각 step의 `content`는 불필요한 사족 없이 핵심 식 전개 위주로 콤팩트하게 작성 (수식은 KaTeX `$...$`로 감싸기).
  - KaTeX `$` 기호 개수가 짝수여야 함.
  - 역슬래시 이스케이프 주의 (JSON 문자열이므로 `\\lim`, `\\frac`, `\\infty` 등 2개 역슬래시 사용).

## 3. Verification Command
- `python3 tests/test_problems_data.py data/problems_part1.js`
  - Expected: `PASS: data/problems_part1.js is valid.`

## 4. Deliverable & Reporting
- 변경 사항 구현 후 git commit (`feat: add step-by-step solutions for Part 1`).
- 완료 보고서를 `.superpowers/sdd/2026-09-12-worksheet-solution-pdf/task-2-report.md`에 작성.
