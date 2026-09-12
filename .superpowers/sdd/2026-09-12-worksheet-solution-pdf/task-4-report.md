# Task 4 Completion Report: HTML 템플릿 및 CSS 해설지 모드 조판 엔진 구현

## 1. 개요
- **태스크 ID**: Task 4
- **목표**: `template/style.css`와 `template/worksheet.html`을 수정하여 `mode=solution` 또는 `solution=1` 파라미터가 주어졌을 때 해설 모드를 활성화하고, 헤더 과목 칩을 `수학 II · 해설`로 변경하며, 카드 내 풀이 공간(`.card__work`)에 단계별 풀이 박스(`.card__solution-box`)를 조판하고, 정답란(`.card__answer`)을 채점 완료 강조 스타일(`.card__answer--filled`)로 표시한다.
- **상태**: **DONE**

---

## 2. 작업 내역

### 1) CSS 규칙 구현 (`template/style.css`)
- **헤더 과목 칩 스타일 (`.ws-subject--solution`)**:
  - 배경 `#eff6ff`, 테두리 `#2563eb`, 글자색 `#1d4ed8` 적용 및 인쇄 색상 유지 설정(`print-color-adjust: exact`).
- **해설 모드 카드 및 풀이 공간 (`.card--solution .card__work`)**:
  - flex column 레이아웃, `rgba(148, 163, 184, 0.28)`의 은은한 5mm 도트 모눈 배경 유지, 패딩 1.5mm 및 `overflow: hidden`.
- **단계별 풀이 박스 (`.card__solution-box`)**:
  - `background: rgba(255, 255, 255, 0.92)`, 경계선 `1px solid rgba(59, 130, 246, 0.25)`, 반경 4px, 패딩 `2mm 2.5mm`.
  - 글자 크기 `9.3px`, 행간 `1.42`, `overflow: hidden`, `word-break: keep-all`.
- **단계 뱃지 및 내용 (`.sol-step`, `.sol-step__badge`, `.sol-step__content`)**:
  - 뱃지: 폰트 8.5px bold, 파란색 계열(`color: #1d4ed8`, `background: #eff6ff`, `border: 1px solid #bfdbfe`).
  - KaTeX 인라인 수식 크기 미세 조정(`.sol-step__content .katex { font-size: 0.98em; }`).
- **정답 강조 채움 스타일 (`.card__answer--filled`, `.card__answer-val`)**:
  - 테두리 `1.5px solid #2563eb`, 배경 `#eff6ff`, 텍스트 `#1d4ed8` bold, 반경 4px, 패딩 `1px 6px`.

### 2) 템플릿 및 스크립트 로직 구현 (`template/worksheet.html`)
- **URL 파라미터 감지**:
  - `params.get('mode') === 'solution' || params.get('solution') === '1'` 감지.
- **상단 온스크린 플로팅 툴바 (`.ws-toolbar`)**:
  - `[📄 문제지]`와 `[📝 해설지]` 토글 링크 추가 및 현재 모드에 따른 `.is-active` 클래스 표시.
  - 단원 선택 링크(`샘플`, `Part 1`, `Part 2`)와 정답표 토글 체크박스가 현재 해설 모드 상태를 URL에 일관되게 보존하도록 `updateToolbarLinks` 함수 개선.
  - 모드 버튼 클릭 시 페이지 새로고침 없이 즉각 화면을 전환하는 부드러운 토글 핸들러 구현.
- **헤더 과목 칩 변경 (`buildHeader`)**:
  - 해설 모드 시 헤더 과목 칩을 `수학 II · 해설` (`ws-subject--solution`)로 렌더링.
- **단계별 풀이 박스 조판 (`buildSolutionBox`, `renderStepContent`)**:
  - 문제에 `solution.steps`가 있는 경우 `.card__solution-box`를 생성하여 `.card__work` 안에 append.
  - 단계별 뱃지(`.sol-step__badge`) 및 내용(`.sol-step__content`) 렌더링.
  - `st.content` 내 인라인 KaTeX 수식(`$...$`, `$$...$$`), 마크다운 강조(`**...**`), 줄바꿈(`\\`) 파싱 및 `renderInlineMath` 처리.
- **정답란 채점 완료 강조 표시 (`buildCard`)**:
  - 해설 모드 시 `.card__answer`에 `.card__answer--filled` 클래스 부여.
  - `.card__answer-val` 요소에 `p.answer` 텍스트/수식을 `renderAnswerCell`로 포맷하여 pre-fill.
- **카드 높이 120.5mm 절대 초과 방지 (`overflow: hidden`)**:
  - 카드 및 내부 `.card__work`, `.card__solution-box`에 `min-height: 0; overflow: hidden;`을 엄격히 적용하여 인쇄 시 페이지 밀림 현상 방지.

### 3) Git Commit
- **커밋 해시**: `f53abc1`
- **커밋 메시지**: `feat: implement solution mode in worksheet template and styles`

---

## 3. 검증 결과

1. **데이터 무결성 및 스키마 검증**:
   - `python3 tests/test_problems_data.py data/sample_problems.js`: PASS
   - `python3 tests/test_problems_data.py data/problems_part1.js`: PASS
   - `python3 tests/test_problems_data.py data/problems_part2.js`: PASS
   - `python3 -m unittest discover tests`: Ran 13 tests, OK (13/13 통과)

2. **JavaScript 문법 및 템플릿 검증**:
   - `template/worksheet.html` 내 `<script>` 태그 Node.js VM 문법 파싱: 이상 없음.
   - 문제지 모드와 해설지 모드 각각에 대한 DOM 렌더링 시뮬레이션:
     - 문제지 모드: 과목 칩 `수학 II`, 카드 기본 스타일, 빈 정답 기입란 정상 확인.
     - 해설지 모드: 과목 칩 `수학 II · 해설` (`ws-subject--solution`), `.card--solution`, 3단계 풀이 박스(`.card__solution-box`), 정답란 강조(`.card__answer--filled`) 및 정답 값 pre-fill 정상 확인.

---

## 4. 결론
Task 4의 모든 요구사항(해설 모드 감지, 헤더 칩 변경, 단계별 풀이 박스 조판, 정답 기입란 강조, 은은한 도트 모눈 유지, 툴바 해설지 링크, 카드 120.5mm 규격 준수)이 완벽히 구현되고 검증되었습니다.
