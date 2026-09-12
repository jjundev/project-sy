# Task 1 Brief: 테스트 스위트에 `solution` 스키마 및 수식 무결성 검증 추가

## 1. Goal
`tests/test_problems_data.py`를 확장하여 각 문제 객체에 선택적/필수적으로 포함되는 `solution` 객체의 스키마 및 수식 기호 무결성을 자동으로 검증하는 로직을 추가하고, 단위 테스트를 통과시킨다.

## 2. Requirements & Interfaces
- **Target File**: `tests/test_problems_data.py`
- **검증 규칙 (`validate_solution`)**:
  - `solution` 필드가 존재할 경우:
    - 반드시 `dict` 타입이어야 함.
    - `steps` 필드를 포함해야 하며, `steps`는 1개 이상의 원소를 가진 `list`여야 함.
    - 각 step은 `label` (`str`, 예: `"[1단계: 대입]"`, `"(1)"`)과 `content` (비어있지 않은 `str`)를 포함해야 함.
    - `content` 내의 KaTeX 인라인 수식 기호인 `$`의 개수가 짝수여야 함 (닫히지 않은 수식 방지).
- **단위 테스트 추가**:
  - `TestProblemsData` 클래스에 `test_solution_schema_validation` 테스트 메서드를 추가하여 유효한 `solution` 객체와 잘못된 `solution` 객체(비어있는 steps, 잘못된 타입, $ 짝 불일치)를 검증.
- `data/sample_problems.js`의 샘플 문항 1개 이상에 `solution` 객체를 예시로 추가하여 회귀 검증.

## 3. Verification Command
- `python3 -m unittest tests/test_problems_data.py`
  - Expected: 모든 단위 테스트 통과 (13 tests OK)

## 4. Deliverable & Reporting
- 변경 사항 구현 후 git commit (`test: add solution schema and formula validation`).
- 완료 보고서를 `.superpowers/sdd/2026-09-12-worksheet-solution-pdf/task-1-report.md`에 작성.
