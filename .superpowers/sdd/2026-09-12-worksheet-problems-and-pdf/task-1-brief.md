# Task 1 Brief: 데이터 무결성 및 교수법 힌트 검증기 작성

## Files
- Create: tests/test_problems_data.py

## Requirements
1. `tests/` 디렉토리를 생성하고 `tests/test_problems_data.py`를 구현한다.
2. 검증기 요구사항:
   - JavaScript 파일(`data/*.js`)에서 `window.WORKSHEET_DATA = { ... };` 패턴을 정규식으로 안전하게 추출하여 JSON 객체로 파싱할 수 있어야 한다.
   - `meta` (title, subtitle, student, date) 필드 유효성 검증.
   - `problems` 배열 검증:
     - 빈 배열이 아니어야 함.
     - 2x2 A4 인쇄 규칙을 위해 `len(problems) % 4 == 0` (4의 배수) 필수 검증.
     - 필수 키 누락 여부 검사: `{"id", "source", "tag", "question", "formula", "subQuestions", "tip", "answer"}`.
     - **서영이 전용 교수법 힌트 검증**: 만약 `tip`이 비어있지 않다면, 사용자가 지정한 핵심 교수법 키워드(`대입`, `인수분해`, `유리화`, `나누`, `공식`, `미분`, `좌극한`, `우극한`, `연속`, `성질`) 중 최소 1개 이상을 포함해야 함.
   - CLI 인자로 파일 경로를 받아 검증 (`python3 tests/test_problems_data.py [filepath]`), 성공 시 0 종료 및 "PASS", 실패 시 assert/오류 출력 및 비정상 종료.
3. 테스트 실행:
   - `data/sample_problems.js`를 대상으로 실행하여 기존 샘플 데이터가 성공하는지 확인.
   - 존재하지 않는 파일 실행 시 에러 발생하는지 확인.

## Report File
Write your report to: `.superpowers/sdd/2026-09-12-worksheet-problems-and-pdf/task-1-report.md`
