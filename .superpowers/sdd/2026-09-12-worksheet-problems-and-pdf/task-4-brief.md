# Task 4 Brief: 템플릿 다중 데이터셋 전환 및 빠른 정답표(Answer Key) 부록 지원

## Files to Modify
- Modify: `template/worksheet.html`
- Modify: `template/style.css`

## Requirements
1. **동적 데이터셋 로딩 (`?part=1`, `?part=2`)**:
   - `worksheet.html` 상단에서 URL 쿼리 파라미터 `part`를 확인:
     - `part=1` 또는 `part=part1`: `../data/problems_part1.js` 로드
     - `part=2` 또는 `part=part2`: `../data/problems_part2.js` 로드
     - 지정되지 않은 경우 기본값: `../data/sample_problems.js` 로드
   - `document.write('<script src="' + scriptSrc + '"><\/script>');` 방식으로 동기 로딩하여 `window.WORKSHEET_DATA`를 정상 공급.
2. **상단 툴바 (화면 전용, 인쇄 시 숨김)**:
   - 화면 상단에 플로팅 툴바(`ws-toolbar`)를 배치:
     - `[샘플]`, `[Part 1 (함수의 극한)]`, `[Part 2 (미분계수)]` 링크 버튼
     - `[정답표 토글]` 체크박스 또는 링크 버튼 (`&answers=1`)
     - `[인쇄 / PDF 저장 (Cmd+P)]` 버튼
   - `@media print { .ws-toolbar { display: none !important; } }` 처리로 인쇄 시에는 절대 출력되지 않도록 보장.
3. **빠른 정답표(Quick Answer Key) 부록 렌더링**:
   - URL 파라미터 `answers=1`이 설정되어 있거나 정답표가 활성화된 경우:
     - 문제지의 모든 문제 시트(`.page-sheet`) 뒤에 별도의 정답표 시트(`.page-sheet.ws-sheet--answers`)를 1장 추가 렌더링.
     - 헤더: `[정답표] 과목명 - 빠른 정답 및 채점표`
     - 그리드: 문제 번호(`01`, `02`, ...)와 정답(`answer`), 배점/정답률 체크란을 4열 또는 5열 콤팩트 테이블 형태로 인쇄 조판.
     - `break-before: page;`로 반드시 새 페이지에서 시작.
4. **검증**:
   - `template/worksheet.html?part=1` 브라우저 렌더링 정상 동작 확인
   - `template/worksheet.html?part=2` 브라우저 렌더링 정상 동작 확인
   - `template/worksheet.html?part=1&answers=1` 정답표 시트 렌더링 확인

## Report File
Write your report to: `.superpowers/sdd/2026-09-12-worksheet-problems-and-pdf/task-4-report.md`
