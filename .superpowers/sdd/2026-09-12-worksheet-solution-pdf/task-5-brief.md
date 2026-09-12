# Task 5 Brief: PDF 빌더 확장 및 최종 해설지 PDF 일괄 컴파일 & 시각 검증

## 1. Goal
`generate_pdf.py`를 수정하여 `solution` 및 `all` 명령어로 해설지 PDF(`Part 1 해설지`, `Part 2 해설지`)를 생성하도록 지원하고, Headless Chrome으로 4종 또는 6종의 전체 PDF를 빌드한 후 `pdftoppm`을 통해 생성된 페이지 이미지를 시각적으로 전수 검증한다.

## 2. Requirements
- **Target File**: `generate_pdf.py`
- **CLI 명령어 사양**:
  - `python3 generate_pdf.py solution`:
    - Part 1 해설지: `output/서영이_수학II_Part1_함수의극한과연속_해설지.pdf` (8쪽: 해설 7쪽 + 빠른정답표 1쪽, URL: `worksheet.html?part=1&mode=solution&answers=1`)
    - Part 2 해설지: `output/서영이_수학II_Part2_미분계수와도함수_해설지.pdf` (5쪽: 해설 4쪽 + 빠른정답표 1쪽, URL: `worksheet.html?part=2&mode=solution&answers=1`)
  - `python3 generate_pdf.py all`:
    - Part 1 문제지, Part 1 정답포함, Part 1 해설지
    - Part 2 문제지, Part 2 정답포함, Part 2 해설지
    - 총 6개 PDF 빌드 지원.
- **인쇄 파라미터 및 안전성**:
  - 기존 headless chrome 옵션 유지 (`--allow-file-access-from-files`, `--run-all-compositor-stages-before-draw`, `--virtual-time-budget=4000`, `--no-pdf-header-footer`).
  - `user-data-dir`는 지정하지 않음 (이전 singleton lock 이슈 방지).
- **시각적 검증 (`pdftoppm`)**:
  - `pdftoppm -png -r 150 output/서영이_수학II_Part1_함수의극한과연속_해설지.pdf scratch/inspect_sol/p1_sol`
  - `pdftoppm -png -r 150 output/서영이_수학II_Part2_미분계수와도함수_해설지.pdf scratch/inspect_sol/p2_sol`
  - 카드의 120.5mm 고정 높이 내에서 풀이 박스가 정상 배치되고 페이지 오버플로우가 없는지 확인.

## 3. Verification Command
- `python3 generate_pdf.py solution`
- `pdfinfo output/서영이_수학II_Part1_함수의극한과연속_해설지.pdf` (8쪽 확인)
- `pdfinfo output/서영이_수학II_Part2_미분계수와도함수_해설지.pdf` (5쪽 확인)

## 4. Deliverable & Reporting
- 변경 사항 구현 후 git commit (`feat: add solution target to generate_pdf.py and compile all solution PDFs`).
- 완료 보고서를 `.superpowers/sdd/2026-09-12-worksheet-solution-pdf/task-5-report.md`에 작성.
