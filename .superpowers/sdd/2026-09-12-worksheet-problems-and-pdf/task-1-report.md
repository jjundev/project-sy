# Task 1 Completion Report: 데이터 무결성 및 교수법 힌트 검증기 작성

**Status:** DONE  
**Date:** 2026-09-12  
**Author:** Task 1 Implementer

---

## 1. Overview
서영이 수학 II 문제지 생성 파이프라인의 데이터 정합성과 교수법 힌트 규칙을 강제하기 위한 검증기 `tests/test_problems_data.py`를 구현하고, 단위 테스트 및 샘플 데이터 검증을 완료하였습니다.

---

## 2. Changes Made

### 2.1. New File: `tests/test_problems_data.py`
- **JS 데이터 로더 (`load_js_data`)**:
  - `window.WORKSHEET_DATA = { ... };` 패턴을 정규식(`re.DOTALL`)으로 추출하여 JSON 객체로 안전하게 파싱.
  - 파일 미존재 시 `FileNotFoundError` 발생.
- **데이터 정합성 검증 (`validate_data` & `validate_dataset`)**:
  - `meta` 객체 검증: `title`, `subtitle`, `student`, `date` 필수 키 존재 및 비어있지 않은 문자열 여부 확인.
  - `problems` 배열 검증:
    - 비어있지 않은 리스트 검증.
    - 2x2 A4 인쇄 레이아웃을 위한 `len(problems) % 4 == 0` (4의 배수) 검증.
    - 개별 문제 필수 키(`id`, `source`, `tag`, `question`, `formula`, `subQuestions`, `tip`, `answer`) 누락 여부 및 ID 중복 검증.
    - `subQuestions` 배열 타입 검증.
    - **서영이 전용 교수법 힌트 검증**: `tip` 필드가 존재하는 경우, 지정된 10개 핵심 교수법 키워드(`대입`, `인수분해`, `유리화`, `나누`, `공식`, `미분`, `좌극한`, `우극한`, `연속`, `성질`) 중 최소 1개 이상 포함 필수.
- **CLI 지원**:
  - `python3 tests/test_problems_data.py [filepath...]` 형태로 단일 또는 복수 파일 검증 가능.
  - 성공 시 `PASS: {filepath} is valid.` 출력 및 exit code 0.
  - 실패 시 오류 출력 및 비정상 종료 (exit code 1).
- **단위 테스트 스위트 (`TestProblemsData`)**:
  - `unittest` 기반으로 12개 테스트 케이스(정상 데이터, 빈 문제 배열, 4의 배수 위반, 필수 키 누락, 빈 메타데이터, 교수법 힌트 위반, 빈 팁 허용 여부, 10대 키워드 개별 허용 여부, 파일 미존재 예외 등)를 내장하여 테스트 자동화 지원.

### 2.2. Updated File: `data/sample_problems.js`
- 4번 문항 및 8번 문항의 `tip`에 교수법 키워드 누락 상태를 보완하여 검증기를 통과하도록 수정:
  - 4번 문항: `"01번과 같은 방법(인수분해) — $x^2+x-6=(x-2)(x+3)$"` (`인수분해` 키워드 반영)
  - 8번 문항: `"극한의 성질: 분모 → 0 이면 분자 → 0 이어야 극한값이 존재합니다."` (`성질` 키워드 반영)

---

## 3. Verification Results

| 실행 명령어 | 기대 결과 | 실제 결과 | 판정 |
|---|---|---|:---:|
| `python3 -m unittest tests/test_problems_data.py` | 12개 테스트 케이스 통과 | `Ran 12 tests in 0.000s - OK` | **PASS** |
| `python3 tests/test_problems_data.py data/sample_problems.js` | 0 종료, PASS 출력 | `PASS: data/sample_problems.js is valid.` | **PASS** |
| `python3 tests/test_problems_data.py` (기본 인자) | 0 종료, PASS 출력 | `PASS: data/sample_problems.js is valid.` | **PASS** |
| `python3 tests/test_problems_data.py nonexistent.js` | 1 종료, FileNotFoundError | `FAIL: nonexistent.js - File not found: nonexistent.js` (exit 1) | **PASS** |
| `node -c data/sample_problems.js` | JS 문법 오류 없음 | 오류 없이 0 종료 | **PASS** |
| `python3 -m py_compile tests/test_problems_data.py` | Python 문법 오류 없음 | 오류 없이 0 종료 | **PASS** |

---

## 4. Next Task Readiness
- Task 2 (`data/problems_part1.js`) 및 Task 3 (`data/problems_part2.js`) 데이터 생성 시 본 검증기를 통해 규격 및 교수법 힌트를 즉각적으로 테스트할 수 있는 기반이 마련되었습니다.
