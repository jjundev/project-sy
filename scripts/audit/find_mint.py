import fitz
import numpy as np
from PIL import Image

doc = fitz.open('프린트/농고 찍어준거.pdf')

total_mint = 0
mint_pages = []

for i in range(len(doc)):
    page = doc[i]
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # zoom x2
    img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    img_np = np.array(img)
    
    # mint color approx: R<150, G>200, B>200
    # Let's see if we can find pixels
    r = img_np[:, :, 0]
    g = img_np[:, :, 1]
    b = img_np[:, :, 2]
    
    mint_mask = (r < 180) & (g > 200) & (b > 200) & (g > r + 50) & (b > r + 50)
    
    if np.sum(mint_mask) > 100:  # arbitrary threshold
        total_mint += 1
        mint_pages.append(i+1)
        # Find coordinates to print which part
        y, x = np.where(mint_mask)
        print(f"Page {i+1} has mint mark at approx y_range: {np.min(y)} - {np.max(y)}")

print(f"Total pages with mint: {total_mint}, pages: {mint_pages}")
