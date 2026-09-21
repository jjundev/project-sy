from pathlib import Path
import fitz

ROOT = Path(__file__).resolve().parents[2]
doc = fitz.open(ROOT / '프린트/농고 찍어준거.pdf')

for i in range(len(doc)):
    page = doc[i]
    pix = page.get_pixmap(matrix=fitz.Matrix(1, 1))
    
    samples = pix.samples
    width = pix.width
    height = pix.height
    stride = pix.stride
    n = pix.n
    
    mint_pixels = 0
    y_min, y_max = height, 0
    
    for y in range(height):
        for x in range(width):
            idx = y * stride + x * n
            r, g, b = samples[idx], samples[idx+1], samples[idx+2]
            
            # mint check
            if r < 180 and g > 200 and b > 200 and g > r + 50 and b > r + 50:
                mint_pixels += 1
                if y < y_min: y_min = y
                if y > y_max: y_max = y
                
    if mint_pixels > 100:
        print(f"Page {i+1} has mint mark at approx y_range: {y_min} - {y_max}")

