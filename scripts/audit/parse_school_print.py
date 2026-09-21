from pathlib import Path
import fitz
import re

ROOT = Path(__file__).resolve().parents[2]
doc = fitz.open(ROOT / '프린트/오서영 프린트 종합.pdf')

for i in range(len(doc)):
    page = doc[i]
    text = page.get_text("text")
    # find lines that start with 문제, 예제, 스스로 해보기
    lines = text.split('\n')
    problems = []
    for line in lines:
        if re.match(r'^\s*(문제|예제|스스로 해보기)', line):
            problems.append(line.strip())
    
    print(f"Page {i+1}: {problems}")

