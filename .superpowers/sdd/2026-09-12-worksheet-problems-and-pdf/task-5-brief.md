# Task 5 Brief: Headless Chrome 기반 원클릭 PDF 자동 빌더 스크립트 작성

## Target File
Create: `generate_pdf.py`

## Requirements
1. **Google Chrome 경로 탐색**:
   - macOS 표준 경로 `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"` 및 fallback 경로 지원.
2. **CLI 인터페이스**:
   - `python3 generate_pdf.py part1`: Part 1 문제지 PDF 생성
   - `python3 generate_pdf.py part2`: Part 2 문제지 PDF 생성
   - `python3 generate_pdf.py all`: Part 1, Part 2 문제지 및 정답표 포함 PDF 일괄 생성
   - 옵션: `--with-answers`: 맨 뒤에 빠른 정답표 포함
3. **Chrome Headless 인쇄 플래그**:
   - `--headless`
   - `--disable-gpu`
   - `--allow-file-access-from-files`
   - `--no-pdf-header-footer`
   - `--run-all-compositor-stages-before-draw`
   - `--virtual-time-budget=4000` (KaTeX 및 폰트 로딩 대기 보장)
   - `--print-to-pdf=<output_path>`
4. **산출물 디렉토리**:
   - `output/` 디렉토리 자동 생성
   - `output/서영이_수학II_Part1_함수의극한과연속.pdf`
   - `output/서영이_수학II_Part2_미분계수와도함수.pdf`
   - `output/서영이_수학II_Part1_함수의극한과연속_정답포함.pdf`
   - `output/서영이_수학II_Part2_미분계수와도함수_정답포함.pdf`
5. **검증**:
   - `python3 generate_pdf.py all` 실행 후 `pdfinfo` 또는 `ls -lh output/`로 실제 PDF 파일 생성, 페이지 수, 파일 용량 검증.

## Report File
Write your report to: `.superpowers/sdd/2026-09-12-worksheet-problems-and-pdf/task-5-report.md`
