#!/usr/bin/env python3
"""
scripts/split_chunjae_textbook.py
천재홍 교과서 본문.pdf를 단원별로 분할하여 output/에 저장합니다.
- Part 1: I. 함수의 극한과 연속 (p. 1 ~ 57)
- Part 2: II. 미분 (p. 58 ~ 123)
- Part 3: III. 적분 (p. 124 ~ 169)
- 부록: 정답 및 풀이 (p. 170 ~ 192)
"""

from pathlib import Path
import pypdf

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
INPUT_PDF = PROJECT_ROOT / "프린트" / "천재홍 교과서 본문.pdf"
OUTPUT_DIR = PROJECT_ROOT / "output"

SECTIONS = [
    {
        "filename": "천재홍_교과서_Part1_함수의극한과연속.pdf",
        "start_page": 1,
        "end_page": 57,
        "title": "I. 함수의 극한과 연속 (p.1~57)"
    },
    {
        "filename": "천재홍_교과서_Part2_미분.pdf",
        "start_page": 58,
        "end_page": 123,
        "title": "II. 미분 (p.58~123)"
    },
    {
        "filename": "천재홍_교과서_Part3_적분.pdf",
        "start_page": 124,
        "end_page": 169,
        "title": "III. 적분 (p.124~169)"
    },
    {
        "filename": "천재홍_교과서_부록_정답및풀이.pdf",
        "start_page": 170,
        "end_page": 192,
        "title": "부록. 정답 및 풀이 (p.170~192)"
    }
]

def split_pdf():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Reading {INPUT_PDF}...")
    reader = pypdf.PdfReader(str(INPUT_PDF))
    total_pages = len(reader.pages)
    print(f"Total pages in source: {total_pages}")

    for sec in SECTIONS:
        writer = pypdf.PdfWriter()
        s_idx = sec["start_page"] - 1
        e_idx = sec["end_page"]  # slice end is exclusive
        for p in range(s_idx, min(e_idx, total_pages)):
            writer.add_page(reader.pages[p])
        
        out_path = OUTPUT_DIR / sec["filename"]
        with open(out_path, "wb") as f:
            writer.write(f)
        print(f"Generated: {out_path.name} ({sec['title']}, {len(writer.pages)} pages)")

if __name__ == "__main__":
    split_pdf()
