# Task 1 Completion Report: 테스트 스위트에 `solution` 스키마 및 수식 무결성 검증 추가

## 1. 개요
- **태스크 ID**: Task 1
- **목표**: `tests/test_problems_data.py`를 확장하여 각 문항의 선택적 `solution` 객체에 대한 스키마 구조(`steps`, `label`, `content`) 및 KaTeX 수식 기호(`$`) 짝 일치 무결성을 자동 검증하고, `data/sample_problems.js`에 샘플 데이터를 반영하여 단위 테스트 13개를 모두 통과시킨다.
- **상태**: **DONE**

---

## 2. 작업 내역

### 1) `tests/test_problems_data.py` 확장
- `validate_solution(sol: dict, pid: int, source_name: str = "<data>")` 함수 구현:
  - `solution` 필드가 `dict` 타입인지 검증.
  - `steps` 필드가 존재하고 비어있지 않은 `list`인지 검증.
  - 각 step의 `label`이 비어있지 않은 문자열인지 검증.
  - 각 step의 `content`가 비어있지 않은 문자열인지 검증.
  - `content` 내 KaTeX 인라인 수식 구분자인 `$`의 개수가 짝수(even)인지 검증 (`dollar_count % 2 == 0`).
- `validate_data` 함수에 `if "solution" in p: validate_solution(p["solution"], pid, source_name)` 로직 추가.
- `TestProblemsData` 클래스에 `test_solution_schema_validation` 단위 테스트 메서드 추가:
  - 정상적인 `solution` 객체 및 `validate_data` 연동 검증.
  - 잘못된 타입, 누락된 필드, 빈 steps, 비어있는 content/label, $ 기호 홀수 개수 등 예외 상황 전수 검증.

### 2) `data/sample_problems.js` 샘플 해설 데이터 추가
- 1번 문항 (핵심유형): 3단계 알고리즘 (`[1단계: 선 대입]`, `[2단계: 식 변형]`, `[3단계: 재대입]`) 풀이 객체 추가.
- 2번 문항 (기본/소문항): `(1)`, `(2)` 라벨 기반 풀이 객체 추가.

### 3) Git Commit
- 커밋 해시: `a86c681`
- 커밋 메시지: `test: add solution schema and formula validation`

---

## 3. 검증 결과

### 단위 테스트 실행 결과
```bash
$ python3 -m unittest tests/test_problems_data.py
.............
----------------------------------------------------------------------
Ran 13 tests in 0.000s

OK
```

### CLI 데이터셋 유효성 검사 결과
```bash
$ python3 tests/test_problems_data.py data/sample_problems.js data/problems_part1.js data/problems_part2.js
PASS: data/sample_problems.js is valid.
PASS: data/problems_part1.js is valid.
PASS: data/problems_part2.js is valid.
```

모든 검증 요건을 100% 만족하며 완료되었습니다.
