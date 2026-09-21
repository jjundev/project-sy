from pathlib import Path
import fitz

ROOT = Path(__file__).resolve().parents[2]
doc = fitz.open(ROOT / '프린트/농고 찍어준거.pdf')

def is_mint(c):
    if c and len(c) >= 3:
        r, g, b = c[:3]
        if r < 0.6 and g > 0.9 and b > 0.9:
            return True
    return False

for i in range(len(doc)):
    page = doc[i]
    drawings = page.get_drawings()
    blocks = page.get_text("blocks")
    
    for path in drawings:
        fill = path.get("fill")
        color = path.get("color")
        if is_mint(fill) or is_mint(color):
            rect = path.get("rect")
            # Find the block closest to this rect
            closest_text = ""
            for b in blocks:
                # b is (x0, y0, x1, y1, "text", block_no, block_type)
                if b[6] == 0:  # text block
                    bx0, by0, bx1, by1 = b[:4]
                    # Check overlap or closeness
                    if rect.x0 <= bx1 and rect.x1 >= bx0 and rect.y0 <= by1 and rect.y1 >= by0:
                        closest_text += b[4]
            if closest_text:
                print(f"Page {i+1} mint mark at {rect}: {closest_text[:50].strip().replace(chr(10), ' ')}")

