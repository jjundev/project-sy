# Task 5 Completion Report: Headless Chrome 기반 원클릭 PDF 자동 빌더 스크립트 작성

## 1. Overview
- **Created Files**:
  - `generate_pdf.py`: macOS Headless Google Chrome 기반 원클릭 PDF 자동 빌더 스크립트
- **Generated Artifacts (`output/`)**:
  - `output/서영이_수학II_Part1_함수의극한과연속.pdf` (문제지, 7쪽, 1.2 MB)
  - `output/서영이_수학II_Part1_함수의극한과연속_정답포함.pdf` (정답표 포함, 8쪽, 1.6 MB)
  - `output/서영이_수학II_Part2_미분계수와도함수.pdf` (문제지, 4쪽, 833.1 KB)
  - `output/서영이_수학II_Part2_미분계수와도함수_정답포함.pdf` (정답표 포함, 5쪽, 1.2 MB)
- **Status**: **DONE**

---

## 2. Implementation Details

### 2.1 Google Chrome 경로 자동 탐색 (`get_chrome_path`)
- macOS 표준 설치 경로를 최우선으로 탐색하고 다양한 Chromium 브라우저 및 환경 변수 override 지원:
  - `CHROME_PATH` 환경 변수
  - `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` (macOS 표준)
  - `/Applications/Chromium.app/Contents/MacOS/Chromium`
  - `/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary`
  - `/Applications/Brave Browser.app/Contents/MacOS/Brave Browser`
  - `shutil.which`를 통한 PATH 등록 바이너리 (`google-chrome`, `chromium` 등)

### 2.2 CLI 인터페이스 구성 (`argparse`)
- 직관적인 CLI 명령어 및 옵션 제공:
  - `python3 generate_pdf.py part1`: Part 1 문제지만 7쪽 생성
  - `python3 generate_pdf.py part1 --with-answers`: Part 1 문제지 + 정답표 총 8쪽 생성
  - `python3 generate_pdf.py part2`: Part 2 문제지만 4쪽 생성
  - `python3 generate_pdf.py part2 --with-answers`: Part 2 문제지 + 정답표 총 5쪽 생성
  - `python3 generate_pdf.py all`: Part 1, Part 2 문제지 및 정답표 포함 4종 일괄 생성
  - `python3 generate_pdf.py all --with-answers`: Part 1, Part 2 정답표 포함 2종 생성
  - `python3 generate_pdf.py all --no-answers`: Part 1, Part 2 순수 문제지 2종 생성

### 2.3 Headless Chrome 인쇄 플래그 최적화
지연 로딩 웹폰트(Pretendard Variable) 및 KaTeX 수식 렌더링이 완전히 완료된 후 캡처되도록 플래그를 정밀하게 구성:
- `--headless`: 헤드리스 모드 실행
- `--disable-gpu`: 그래픽 가속 비활성화로 일관된 인쇄 래스터라이징 보장
- `--allow-file-access-from-files`: `file://` 프로토콜을 통한 로컬 자바스크립트(`data/*.js`) 및 폰트 접근 허용
- `--no-pdf-header-footer`: 브라우저 기본 헤더/푸터(URL, 날짜 등) 제거
- `--run-all-compositor-stages-before-draw`: 컴포지터의 모든 레이아웃/스타일 계산 완료 후 인쇄
- `--virtual-time-budget=4000`: 4,000ms의 가상 시간 버짓을 부여하여 폰트 로드와 수식 조판 대기 보장
- `--print-to-pdf=<output_path>`: 인쇄 대상 PDF 파일 경로

### 2.4 실시간 빌드 정보 및 `pdfinfo` 연동
- 생성 완료 즉시 `pdfinfo`를 호출하여 실제 PDF의 페이지 수와 파일 용량을 자동으로 파싱 및 터미널 요약 출력.

---

## 3. Verification & Execution Results

### 3.1 `python3 generate_pdf.py all` 일괄 빌드 로그
```
🚀 Google Chrome 경로: /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
📂 작업 디렉토리: /Users/hyunjun_macbook_pro/Documents/Private/project-sy
총 4개 PDF 빌드 예정
--------------------------------------------------
📄 [Part 1 | 문제지] 빌드 시작 -> 서영이_수학II_Part1_함수의극한과연속.pdf ...
✅ [Part 1 | 문제지] 완료: 서영이_수학II_Part1_함수의극한과연속.pdf (1.2 MB, 7 쪽)
📄 [Part 1 | 정답포함] 빌드 시작 -> 서영이_수학II_Part1_함수의극한과연속_정답포함.pdf ...
✅ [Part 1 | 정답포함] 완료: 서영이_수학II_Part1_함수의극한과연속_정답포함.pdf (1.6 MB, 8 쪽)
📄 [Part 2 | 문제지] 빌드 시작 -> 서영이_수학II_Part2_미분계수와도함수.pdf ...
✅ [Part 2 | 문제지] 완료: 서영이_수학II_Part2_미분계수와도함수.pdf (833.1 KB, 4 쪽)
📄 [Part 2 | 정답포함] 빌드 시작 -> 서영이_수학II_Part2_미분계수와도함수_정답포함.pdf ...
✅ [Part 2 | 정답포함] 완료: 서영이_수학II_Part2_미분계수와도함수_정답포함.pdf (1.2 MB, 5 쪽)
--------------------------------------------------
🎉 모든 PDF 빌드가 성공적으로 완료되었습니다!

[생성된 산출물 요약]
 - 서영이_수학II_Part1_함수의극한과연속.pdf                | Part 1 (문제지) | 7쪽 | 1.2 MB
 - 서영이_수학II_Part1_함수의극한과연속_정답포함.pdf           | Part 1 (정답포함) | 8쪽 | 1.6 MB
 - 서영이_수학II_Part2_미분계수와도함수.pdf                | Part 2 (문제지) | 4쪽 | 833.1 KB
 - 서영이_수학II_Part2_미분계수와도함수_정답포함.pdf           | Part 2 (정답포함) | 5쪽 | 1.2 MB
```

### 3.2 파일 시스템 검증 (`ls -lh output/`)
```
total 9872
-rw-r--r--@ 1 hyunjun_macbook_pro  staff   1.2M Sep 12 02:00 서영이_수학II_Part1_함수의극한과연속.pdf
-rw-r--r--@ 1 hyunjun_macbook_pro  staff   1.6M Sep 12 02:00 서영이_수학II_Part1_함수의극한과연속_정답포함.pdf
-rw-r--r--@ 1 hyunjun_macbook_pro  staff   833K Sep 12 02:00 서영이_수학II_Part2_미분계수와도함수.pdf
-rw-r--r--@ 1 hyunjun_macbook_pro  staff   1.2M Sep 12 02:00 서영이_수학II_Part2_미분계수와도함수_정답포함.pdf
```

### 3.3 `pdfinfo` 상세 메타데이터 및 규격 검증
```
=== output/서영이_수학II_Part1_함수의극한과연속.pdf ===
Title:           수학 II - I. 함수의 극한과 연속 — 오서영
Pages:           7
Page size:       594.96 x 841.92 pts (A4)
File size:       1213168 bytes

=== output/서영이_수학II_Part1_함수의극한과연속_정답포함.pdf ===
Title:           수학 II - I. 함수의 극한과 연속 — 오서영 (정답표 포함)
Pages:           8
Page size:       594.96 x 841.92 pts (A4)
File size:       1681846 bytes

=== output/서영이_수학II_Part2_미분계수와도함수.pdf ===
Title:           수학 II - II. 미분계수와 도함수 — 오서영
Pages:           4
Page size:       594.96 x 841.92 pts (A4)
File size:       853057 bytes

=== output/서영이_수학II_Part2_미분계수와도함수_정답포함.pdf ===
Title:           수학 II - II. 미분계수와 도함수 — 오서영 (정답표 포함)
Pages:           5
Page size:       594.96 x 841.92 pts (A4)
File size:       1294389 bytes
```

- 모든 파일이 규격 표준인 A4 (`594.96 x 841.92 pts`) 규격을 완벽하게 충족.
- Part 1 (28문항)은 정확히 7장(4문항/장), 정답표 포함 버전은 8장(7장 본문 + 1장 정답표).
- Part 2 (16문항)은 정확히 4장(4문항/장), 정답표 포함 버전은 5장(4장 본문 + 1장 정답표).
- 문서 메타데이터 Title에 학생명(`오서영`) 및 정답표 포함 여부가 정확히 반영됨.

---

## 4. Next Steps Handoff
- **Next Task**: Task 6 (최종 산출물 검증 및 렌더링 품질 검사)
  - 생성된 PDF의 시각적 레이아웃(카드 크기, 5mm 도트 모눈, KaTeX 수식 정렬, 4열 빠른 정답표) 최종 육안/이미지 검사 진행.
