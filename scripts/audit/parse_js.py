from pathlib import Path
import re
import json

ROOT = Path(__file__).resolve().parents[2]

def extract_sources(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We will try to find all occurrences of "id": ..., "source": ...
    id_pattern = re.compile(r'"id"\s*:\s*(\d+)')
    source_pattern = re.compile(r'"source"\s*:\s*"([^"]+)"')
    tag_pattern = re.compile(r'"tag"\s*:\s*"([^"]+)"')
    
    # Let's extract by splitting on "id":
    parts = content.split('"id":')[1:]
    results = []
    for p in parts:
        id_match = re.search(r'^\s*(\d+)', p)
        source_match = source_pattern.search(p)
        tag_match = tag_pattern.search(p)
        
        id_val = id_match.group(1) if id_match else "unknown"
        source_val = source_match.group(1) if source_match else "unknown"
        tag_val = tag_match.group(1) if tag_match else "unknown"
        
        results.append((id_val, tag_val, source_val))
    return results

print("=== PART 1 ===")
p1 = extract_sources(ROOT / 'data/problems_part1.js')
for id, tag, src in p1:
    print(f"[{id}] {tag} : {src}")
print(f"Total: {len(p1)}")

print("\n=== PART 2 ===")
p2 = extract_sources(ROOT / 'data/problems_part2.js')
for id, tag, src in p2:
    print(f"[{id}] {tag} : {src}")
print(f"Total: {len(p2)}")
