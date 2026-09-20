import fitz

doc = fitz.open('프린트/농고 찍어준거.pdf')
print(f"Total pages in 농고 찍어준거: {len(doc)}")

mint_pages = []
for i in range(len(doc)):
    page = doc[i]
    drawings = page.get_drawings()
    has_mint = False
    for path in drawings:
        fill = path.get("fill")
        color = path.get("color")
        # Check if color or fill is close to mint (R~0.5, G~1.0, B~1.0 in 0-1 scale)
        def is_mint(c):
            if c and len(c) == 3:
                r, g, b = c
                if r < 0.6 and g > 0.9 and b > 0.9:
                    return True
            return False
        
        if is_mint(fill) or is_mint(color):
            has_mint = True
            break
            
    if has_mint:
        mint_pages.append(i+1)
    else:
        # maybe it's an image or annotation
        pass

print(f"Pages with mint drawings: {mint_pages}")
