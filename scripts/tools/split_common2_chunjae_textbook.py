#!/usr/bin/env python3
"""
scripts/split_common2_chunjae_textbook.py
교과서 공통수학2 천재(홍).pdf를 단원별로 무손실 분할하여 output/에 저장합니다.
- Part 1: I. 도형의 방정식 (p. 1 ~ 57)
- Part 2: II. 집합과 명제 (p. 58 ~ 103)
- Part 3: III. 함수와 그래프 (p. 104 ~ 143)
- 부록: 정답 및 풀이 (p. 144 ~ 160)
"""

from pathlib import Path
import pypdf

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
INPUT_PDF = PROJECT_ROOT / "프린트" / "교과서 공통수학2 천재(홍).pdf"
OUTPUT_DIR = PROJECT_ROOT / "output"

SECTIONS = [
    {
        "filename": "공통수학2_천재홍_교과서_Part1_도형의방정식.pdf",
        "start_page": 1,
        "end_page": 57,
        "title": "I. 도형의 방정식 (p.1~57)"
    },
    {
        "filename": "공통수학2_천재홍_교과서_Part2_집합과명제.pdf",
        "start_page": 58,
        "end_page": 103,
        "title": "II. 집합과 명제 (p.58~103)"
    },
    {
        "filename": "공통수학2_천재홍_교과서_Part3_함수와그래프.pdf",
        "start_page": 104,
        "end_page": 143,
        "title": "III. 함수와 그래프 (p.104~143)"
    },
    {
        "filename": "공통수학2_천재홍_교과서_부록_정답및풀이.pdf",
        "start_page": 144,
        "end_page": 160,
        "title": "부록. 정답 및 풀이 (p.144~160)"
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
