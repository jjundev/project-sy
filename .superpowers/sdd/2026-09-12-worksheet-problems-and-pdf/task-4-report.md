# Task 4 Completion Report: 템플릿 다중 데이터셋 전환 및 빠른 정답표(Answer Key) 부록 지원

## 1. Overview
- **Modified Files**:
  - `template/worksheet.html`: 동적 데이터셋 로더, 상단 플로팅 툴바, 빠른 정답표 조판 및 렌더러 구현
  - `template/style.css`: 툴바 스타일, 빠른 정답표 그리드/테이블 스타일, 인쇄 미디어 쿼리 최적화
- **Status**: **DONE**

---

## 2. Implementation Details

### 2.1 동적 데이터셋 로딩 (`?part=1`, `?part=2`)
- `template/worksheet.html` 상단에서 URL 파라미터 `part`를 감지하여 알맞은 데이터를 동기 로드하도록 구현:
  - `part=1` 또는 `part=part1`: `../data/problems_part1.js` (28문항, 7페이지)
  - `part=2` 또는 `part=part2`: `../data/problems_part2.js` (16문항, 4페이지)
  - 파라미터 미지정 시 기본값: `../data/sample_problems.js` (8문항, 2페이지)
- `document.write('<script src="' + scriptSrc + '"><\/script>');`를 사용하여 KaTeX 및 메인 렌더링 스크립트 실행 전 `window.WORKSHEET_DATA`가 온전히 공급되도록 보장.

### 2.2 화면 전용 플로팅 툴바 (`.ws-toolbar`)
- 상단 고정 바(`position: fixed; top: 0; left: 0; right: 0; z-index: 1000;`)로 사용자 인터랙션 지원:
  - **단원 선택 버튼**: `[샘플]`, `[Part 1 (함수의 극한)]`, `[Part 2 (미분계수)]`
  - **정답표 토글 체크박스**: `[정답표 토글 (&answers=1)]`
  - **인쇄 / PDF 저장 버튼**: `[인쇄 / PDF 저장 (Cmd+P)]` (`window.print()` 호출)
- 활성화된 파트에 따라 버튼에 `.is-active` 강조 클래스 부여.
- 정답표 체크 상태가 변경되면 `history.replaceState`로 URL을 갱신하고 화면을 즉시 재렌더링하여 깜빡임 없는 전환 제공.
- 각 파트 링크 클릭 시 현재의 `answers=1` 파라미터가 자동으로 유지되도록 동적 링크 동기화(`updateToolbarLinks`).
- **인쇄 시 은닉**: `@media print { .ws-toolbar { display: none !important; } }` 완벽 적용.

### 2.3 빠른 정답표 (Quick Answer Key) 부록 시트 (`.page-sheet.ws-sheet--answers`)
- `answers=1` 파라미터가 있거나 정답표 체크박스가 켜진 경우, 문제지 본문 시트 뒤에 별도의 A4 1장 부록 시트 렌더링:
  1. **헤더**: `[정답표]` 과목명 칩 + `과목명 - 빠른 정답 및 채점표`, 학생명, 날짜, 득점란(`/ 100`).
  2. **상단 요약 바 (`.ws-ans-summary`)**: 총 문항 수, 맞힌 문항(득점), 오답 문항 수, 성취도 진단란.
  3. **4열 콤팩트 빠른 정답 테이블 (`.ws-answers-grid`)**:
     - 4열 테이블(`ws-ans-table`)을 나란히 배치하고, 문항 수에 맞춰 열별 분할 조판(28문항은 열당 7문항, 16문항은 열당 4문항, 8문항은 열당 2문항).
     - 각 행: 문항 번호 뱃지(`ws-ans-no-badge`), 정답 표기(수식 및 특수문자 KaTeX 렌더링), 채점 체크 박스(`ws-ans-check-box`).
  4. **하단 오답 분석 & 교수법 체크리스트 (`.ws-ans-review`)**:
     - 서영이 맞춤 3단계 알고리즘(1단계 선 대입, 2단계 식 변형, 3단계 재대입) 자가진단 항목.
     - 5mm 도트 모눈(`ws-ans-memo__grid`)을 적용한 피드백 메모란 (풀이 카드와 동일한 시각적 언어 유지).
  5. **푸터**: `- 빠른 정답 및 채점표 -` 및 응원 문구.
  6. **페이지 나눔 보장**: `.ws-sheet--answers { break-before: page !important; page-break-before: always !important; }`로 반드시 새 A4 페이지에서 시작.

---

## 3. Verification & Test Results

### 3.1 렌더링 및 페이지 수 시뮬레이션 검증 (Node.js)
```
Testing Part 1 default without answers...
Part 1 script: ../data/problems_part1.js problems: 28 sheets rendered: 7 title: 수학 II - I. 함수의 극한과 연속 — 오서영

Testing Part 1 with answers=1...
Part 1+answers sheets rendered: 8 title: 수학 II - I. 함수의 극한과 연속 — 오서영 (정답표 포함)

Testing Part 2 without answers...
Part 2 script: ../data/problems_part2.js problems: 16 sheets rendered: 4 title: 수학 II - II. 미분계수와 도함수 — 오서영

Testing Part 2 with answers=1...
Part 2+answers sheets rendered: 5 title: 수학 II - II. 미분계수와 도함수 — 오서영 (정답표 포함)

Testing Sample (no query params)...
Sample script: ../data/sample_problems.js problems: 8 sheets rendered: 2

Testing Sample with answers=1...
Sample+answers sheets rendered: 3

ALL NODE RENDER TESTS PASSED SUCCESSFULLY!
```

### 3.2 데이터 무결성 재검증 (`tests/test_problems_data.py`)
```
PASS: data/problems_part1.js is valid.
PASS: data/problems_part2.js is valid.
PASS: data/sample_problems.js is valid.
```

### 3.3 CSS 규격 및 인쇄 미디어 쿼리 검증
- `.ws-toolbar`: 화면에서 fixed 표시, `@media print`에서 `display: none !important;`로 완전 은닉 확인.
- `.ws-sheet--answers`: A4 규격(`210mm x 297mm`), `break-before: page !important;` 및 `overflow: hidden;` 확인.

---

## 4. Next Steps Handoff
- **Next Task**: Task 5 (Headless Chrome 기반 원클릭 PDF 자동 빌더 스크립트 작성 - `generate_pdf.py`)
