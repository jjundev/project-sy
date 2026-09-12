# Task 5 Completion Report: PDF 빌더 확장 및 최종 해설지 PDF 일괄 컴파일 & 시각 검증

## 1. 개요
- **태스크 ID**: Task 5
- **목표**: `generate_pdf.py`를 확장하여 `solution` 및 `all` 명령어로 해설지 PDF(`Part 1 해설지`, `Part 2 해설지`)를 생성하도록 지원하고, Headless Google Chrome으로 6종 전체 PDF를 빌드한 뒤 `pdftoppm`을 통해 생성된 페이지 이미지를 시각적으로 전수 검증한다.
- **상태**: **DONE**

---

## 2. 작업 내역

### 1) PDF 빌더 스크립트 확장 (`generate_pdf.py`)
- **`PARTS_CONFIG`에 해설지 파일명 매핑 추가**:
  - Part 1: `서영이_수학II_Part1_함수의극한과연속_해설지.pdf`
  - Part 2: `서영이_수학II_Part2_미분계수와도함수_해설지.pdf`
- **`build_pdf()` 함수 파라미터 및 쿼리 확장**:
  - `is_solution=True` 인자 추가.
  - URL 파라미터: `mode=solution` 및 `answers=1` 결합 (`worksheet.html?part={N}&mode=solution&answers=1`).
  - 태그 및 로깅 분기: `해설지` / `정답포함` / `문제지`.
  - 싱글톤 락 방지를 위해 `--user-data-dir`는 지정하지 않고, 필수 headless 플래그 유지 (`--headless`, `--disable-gpu`, `--allow-file-access-from-files`, `--no-pdf-header-footer`, `--run-all-compositor-stages-before-draw`, `--virtual-time-budget=4000`).
- **CLI 타깃 및 옵션 확장 (`main()`)**:
  - `python3 generate_pdf.py solution`: Part 1, Part 2 해설지 2종 빌드 지원.
  - `python3 generate_pdf.py all`: 문제지 2종, 정답포함 2종, 해설지 2종 등 총 6종 일괄 빌드.
  - 개별 실행 지원: `--solution` 옵션 추가 (`python3 generate_pdf.py part1 --solution` 등).

### 2) 조판 결함 발견 및 레이아웃 안정화 (`template/style.css`, `template/worksheet.html`)
- **발견된 문제**:
  - `pdftoppm`으로 1차 렌더링된 PNG 이미지를 전수 검사한 결과, 정답 텍스트가 긴 문항(Part 1의 06, 10, 11, 27번, Part 2의 09, 10, 11, 12, 16번)에서 하단 액션바(`.card__actions`)의 정답 뱃지(`.card__answer`)가 `od-fixed od-nowrap` 속성으로 인해 가로 80mm 이상을 독점.
  - 그 결과 동일 행의 팁(`.card__tip`)에 할당된 가로폭이 2~5mm로 극단적으로 축소되어 팁 텍스트가 1~2글자 단위로 30줄 이상의 세로 기둥 형태로 줄바꿈됨.
  - 이로 인해 액션바가 90mm 이상의 수직 공간을 차지하며 위의 풀이 공간(`.card__work`)과 단계별 풀이 박스(`.card__solution-box`)가 0px로 압축되거나 밀려나는 심각한 조판 결함 확인.
- **수정 및 개선**:
  - `worksheet.html`: 해설 모드(`isSolution`)일 때 `.card__answer`에서 경직된 `od-fixed od-nowrap` 클래스를 제거하고 `.card__tip`의 `od-fill` 강제(min-width: 0) 해제.
  - `style.css`:
    - `.card__actions`에 `flex-wrap: wrap; align-items: flex-end; --od-gap: 1.5mm 3mm;` 적용.
    - `.card__tip`에 `flex: 1 1 36mm; min-width: 32mm;`를 부여하여 짧은 정답 시 1행 병렬 배치 유지.
    - 정답이 긴 경우 flex-wrap에 의해 팁이 1행 전체 폭(83mm)을 차지하고, 정답 뱃지는 2행 우측 정렬(`margin-left: auto`)로 자연스럽게 배치되도록 분기.
    - `.card__answer--filled`: `max-width: 100%; white-space: normal; word-break: keep-all; overflow-wrap: anywhere;` 적용.
- **개선 결과**:
  - 모든 문항에서 풀이 박스가 카드 고정 높이 120.5mm 내에 온전히 조판되고, 팁과 정답 뱃지가 시각적으로 균형 있게 배치됨.

---

## 3. 검증 결과

### 1) 빌드 실행 결과
- `python3 generate_pdf.py solution`:
  - `서영이_수학II_Part1_함수의극한과연속_해설지.pdf`: 8쪽, 1.9 MB 생성 완료.
  - `서영이_수학II_Part2_미분계수와도함수_해설지.pdf`: 5쪽, 1.5 MB 생성 완료.
- `python3 generate_pdf.py all`:
  - Part 1 문제지: 7쪽 (1.2 MB)
  - Part 1 정답포함: 8쪽 (1.6 MB)
  - Part 1 해설지: 8쪽 (1.9 MB)
  - Part 2 문제지: 4쪽 (865.7 KB)
  - Part 2 정답포함: 5쪽 (1.2 MB)
  - Part 2 해설지: 5쪽 (1.5 MB)
  - 총 6종 PDF 빌드 100% 성공.

### 2) `pdfinfo` 페이지 수 및 규격 검증
- `output/서영이_수학II_Part1_함수의극한과연속_해설지.pdf`:
  - `Pages: 8` (본문 7쪽 + 빠른 정답표 1쪽)
  - `Page size: 594.96 x 841.92 pts (A4)`
- `output/서영이_수학II_Part2_미분계수와도함수_해설지.pdf`:
  - `Pages: 5` (본문 4쪽 + 빠른 정답표 1쪽)
  - `Page size: 594.96 x 841.92 pts (A4)`

### 3) `pdftoppm` 전 페이지 시각 검증
- Part 1 해설지 (p1_sol-1 ~ p1_sol-8):
  - 1~7쪽 28개 전 문항 2x2 카드(120.5mm) 내 풀이 박스 정규 조판, 수식 잘림 0건.
  - 8쪽: 28문항 빠른 정답표 부록 정상 출력.
- Part 2 해설지 (p2_sol-1 ~ p2_sol-5):
  - 1~4쪽 16개 전 문항 미분계수 정의/도함수 공식 풀이 박스 정상 조판, 수식 잘림 0건.
  - 5쪽: 16문항 빠른 정답표 부록 정상 출력.

### 4) 단위 테스트
- `python3 -m unittest discover tests`: Ran 13 tests, OK (13/13 통과)

---

## 4. 결론
Task 5의 모든 요구사항(PDF 빌더 해설지 타깃 추가, 6종 전체 빌드 지원, Headless Chrome 컴파일, 시각적 전수 검증 및 레이아웃 안정화)이 완벽히 완수되었습니다.
