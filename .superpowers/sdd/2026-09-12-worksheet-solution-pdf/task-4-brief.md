# Task 4 Brief: HTML 템플릿 및 CSS 해설지 모드 조판 엔진 구현

## 1. Goal
`template/worksheet.html`과 `template/style.css`를 수정하여 `mode=solution` 또는 `solution=1` 파라미터가 주어졌을 때 카드의 모눈 공간(`.card__work`)에 단계별 풀이 박스(`.card__solution-box`)를 조판하고, 정답란(`.card__answer`)을 채점 완료 강조 스타일로 표시한다.

## 2. Requirements & CSS Specifications
- **Target Files**:
  - `template/style.css`
  - `template/worksheet.html`
- **CSS 규칙 (`template/style.css`)**:
  ```css
  /* 해설 모드 카드 */
  .card--solution .card__work {
    display: flex;
    flex-direction: column;
    background-image: radial-gradient(rgba(148, 163, 184, 0.28) var(--dot-r), transparent var(--dot-r));
    padding: 1.5mm;
  }

  .card__solution-box {
    flex: 1 1 auto;
    min-height: 0;
    padding: 2mm 2.5mm;
    background: rgba(255, 255, 255, 0.92);
    border: 1px solid rgba(59, 130, 246, 0.25);
    border-radius: 4px;
    font-size: 9.3px;
    line-height: 1.42;
    color: var(--c-charcoal);
    overflow: hidden;
    word-break: keep-all;
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
    padding: 0.5px 3.5px;
    margin-right: 4px;
    line-height: 1.2;
    vertical-align: middle;
  }

  .sol-step__content {
    display: inline;
  }

  .sol-step__content .katex {
    font-size: 0.98em;
  }

  /* 해설 모드 시 정답 기입란 강조 채움 */
  .card__answer--filled {
    border: 1.5px solid #2563eb !important;
    background-color: #eff6ff !important;
    color: #1d4ed8 !important;
    font-weight: 700 !important;
    border-style: solid !important;
  }

  .card__answer--filled .card__answer-val {
    color: #1d4ed8;
    font-weight: 700;
    margin-left: 4px;
  }
  ```
- **HTML/JS 로직 (`template/worksheet.html`)**:
  - `params.get('mode') === 'solution' || params.get('solution') === '1'` 감지.
  - 해설 모드 시:
    - 헤더 과목 칩: `t.subject` 옆에 `· 해설` 칩 결합 (`ws-subject--solution`).
    - `buildCard(p)`:
      - 카드 엘리먼트에 `card--solution` 클래스 추가.
      - `p.solution && p.solution.steps`가 있을 경우 `buildSolutionBox(p.solution)`를 생성하여 `.card__work` 안에 append.
      - `.card__answer`에 `card__answer--filled` 클래스 추가 및 `p.answer` 텍스트/수식 렌더링.
    - 온스크린 플로팅 툴바(`.ws-toolbar`):
      - `[📄 문제지]`, `[📝 해설지]` 토글 링크 지원.

## 3. Verification Command
- Node.js 또는 Python HTTP 서버, 브라우저 콘솔 및 문법 오류 없음 확인.
- `python3 tests/test_problems_data.py data/sample_problems.js` 통과.

## 4. Deliverable & Reporting
- 변경 사항 구현 후 git commit (`feat: implement solution mode in worksheet template and styles`).
- 완료 보고서를 `.superpowers/sdd/2026-09-12-worksheet-solution-pdf/task-4-report.md`에 작성.
