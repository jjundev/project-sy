import math
import os
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
os.chdir(PROJECT_ROOT)
os.makedirs('assets/figures', exist_ok=True)

def header(width=220, height=155, defs=''):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Pretendard', sans-serif;">
  <defs>
    <marker id="arr-x" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#18181b"/>
    </marker>
    <marker id="arr-y" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#18181b"/>
    </marker>
    {defs}
  </defs>
'''

# 1. Part 4 #16 (p.129 6번): 삼차함수 그래프
def gen_part4_p16():
    ox, oy = 105, 95
    sx, sy = 28, 8.5
    
    def to_svg(xm, ym):
        return ox + xm * sx, oy - ym * sy

    pts = []
    for i in range(120):
        xm = -3.2 + i * (2.2 - (-3.2)) / 119
        ym = -xm**3 - 1.5*xm**2 + 6*xm + 2
        pts.append(to_svg(xm, ym))

    path_d = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts))
    x_min, y_min = to_svg(-2, -8)
    x_max, y_max = to_svg(1, 5.5)

    svg = header(220, 165) + f'''
  <line x1="15" y1="{oy}" x2="200" y2="{oy}" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-x)"/>
  <line x1="{ox}" y1="155" x2="{ox}" y2="15" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-y)"/>
  <text x="204" y="{oy+4}" font-size="11" font-style="italic" fill="#18181b">x</text>
  <text x="{ox-8}" y="12" font-size="11" font-style="italic" fill="#18181b">y</text>
  <text x="{ox-9}" y="{oy+12}" font-size="10" fill="#18181b">O</text>

  <line x1="{x_min}" y1="{oy}" x2="{x_min}" y2="{y_min}" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="{x_min}" y1="{y_min}" x2="{ox}" y2="{y_min}" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>
  <circle cx="{x_min}" cy="{y_min}" r="2" fill="#18181b"/>

  <line x1="{x_max}" y1="{oy}" x2="{x_max}" y2="{y_max}" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="{ox}" y1="{y_max}" x2="{x_max}" y2="{y_max}" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>
  <circle cx="{x_max}" cy="{y_max}" r="2" fill="#18181b"/>

  <path d="{path_d}" fill="none" stroke="#09090b" stroke-width="1.8" stroke-linecap="round"/>

  <text x="{x_min-5}" y="{oy-4}" font-size="10" fill="#18181b">-2</text>
  <text x="{ox+4}" y="{y_min+4}" font-size="10" fill="#18181b">-8</text>
  <text x="{x_max-2}" y="{oy+13}" font-size="10" fill="#18181b">1</text>
  <text x="{ox-25}" y="{y_max+4}" font-size="10" fill="#18181b">11/2</text>
  <text x="{x_max+8}" y="{y_max-3}" font-size="11" font-style="italic" font-weight="500" fill="#09090b">y=f(x)</text>
</svg>'''
    with open('assets/figures/part4_p16.svg', 'w') as f:
        f.write(svg)

# 2. Part 4 #25 (p.140 3번): 비닐하우스 단면
def gen_part4_p25():
    ox, oy = 110, 115
    sx, sy = 15, 17

    def to_svg(xm, ym):
        return ox + xm * sx, oy - ym * sy

    pts = [to_svg(-5, 0)]
    for i in range(80):
        xm = -5 + i * 10 / 79
        ym = -0.2 * xm**2 + 5
        pts.append(to_svg(xm, ym))
    pts.append(to_svg(5, 0))

    poly_d = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts)) + ' Z'
    curve_d = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts[1:-1]))

    svg = header(230, 155) + f'''
  <line x1="15" y1="{oy}" x2="208" y2="{oy}" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-x)"/>
  <line x1="{ox}" y1="{oy+15}" x2="{ox}" y2="15" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-y)"/>
  <text x="212" y="{oy+4}" font-size="11" font-style="italic" fill="#18181b">x</text>
  <text x="{ox-8}" y="12" font-size="11" font-style="italic" fill="#18181b">y</text>
  <text x="{ox-9}" y="{oy+12}" font-size="10" fill="#18181b">O</text>

  <path d="{poly_d}" fill="#f1f5f9" stroke="none"/>
  <line x1="{ox-sx*2.5}" y1="{oy}" x2="{ox-sx*2.5}" y2="{oy-sy*3.75}" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="{ox+sx*2.5}" y1="{oy}" x2="{ox+sx*2.5}" y2="{oy-sy*3.75}" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="2,2"/>

  <path d="{curve_d}" fill="none" stroke="#09090b" stroke-width="1.8" stroke-linecap="round"/>

  <circle cx="{ox}" cy="{oy-sy*5}" r="2" fill="#18181b"/>
  <text x="{ox-10}" y="{oy-sy*5+4}" font-size="10" fill="#18181b">5</text>
  <text x="{ox-sx*5-5}" y="{oy+13}" font-size="10" fill="#18181b">-5</text>
  <text x="{ox+sx*5-2}" y="{oy+13}" font-size="10" fill="#18181b">5</text>

  <line x1="{ox-sx*5}" y1="{oy+24}" x2="{ox+sx*5}" y2="{oy+24}" stroke="#475569" stroke-width="0.9"/>
  <line x1="{ox-sx*5}" y1="{oy+20}" x2="{ox-sx*5}" y2="{oy+28}" stroke="#475569" stroke-width="0.9"/>
  <line x1="{ox+sx*5}" y1="{oy+20}" x2="{ox+sx*5}" y2="{oy+28}" stroke="#475569" stroke-width="0.9"/>
  <text x="{ox-11}" y="{oy+22}" font-size="9.5" fill="#334155">10 m</text>
</svg>'''
    with open('assets/figures/part4_p25.svg', 'w') as f:
        f.write(svg)

# 3. Part 4 #26 (p.140 4번): y=ax^2 와 y=a, x=0 둘러싸인 도형 S
def gen_part4_p26():
    ox, oy = 75, 115
    sx, sy = 60, 45

    def to_svg(xm, ym):
        return ox + xm * sx, oy - ym * sy

    pts_s = [to_svg(0, 1.6), to_svg(1, 1.6)]
    for i in range(50):
        xm = 1.0 - i * 1.0 / 49
        ym = 1.6 * xm**2
        pts_s.append(to_svg(xm, ym))
    poly_s = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_s)) + ' Z'

    pts_curve = []
    for i in range(80):
        xm = -0.8 + i * 2.05 / 79
        ym = 1.6 * xm**2
        pts_curve.append(to_svg(xm, ym))
    curve_d = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_curve))

    x1, ya = to_svg(1, 1.6)

    svg = header(220, 155) + f'''
  <line x1="20" y1="{oy}" x2="195" y2="{oy}" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-x)"/>
  <line x1="{ox}" y1="{oy+15}" x2="{ox}" y2="15" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-y)"/>
  <text x="198" y="{oy+4}" font-size="11" font-style="italic" fill="#18181b">x</text>
  <text x="{ox-8}" y="12" font-size="11" font-style="italic" fill="#18181b">y</text>
  <text x="{ox-9}" y="{oy+12}" font-size="10" fill="#18181b">O</text>

  <path d="{poly_s}" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.8"/>
  <text x="{ox+sx*0.4}" y="{oy-sy*1.1}" font-size="12" font-weight="600" font-style="italic" fill="#1e293b">S</text>

  <line x1="{ox}" y1="{ya}" x2="{x1+20}" y2="{ya}" stroke="#18181b" stroke-width="1.1"/>
  <line x1="{x1}" y1="{oy}" x2="{x1}" y2="{ya}" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>

  <path d="{curve_d}" fill="none" stroke="#09090b" stroke-width="1.8" stroke-linecap="round"/>

  <text x="{ox-9}" y="{ya+4}" font-size="10" font-style="italic" fill="#18181b">a</text>
  <text x="{x1-2}" y="{oy+12}" font-size="10" fill="#18181b">1</text>
  <text x="{x1-5}" y="{ya-18}" font-size="11" font-style="italic" fill="#09090b">y=ax²</text>
</svg>'''
    with open('assets/figures/part4_p26.svg', 'w') as f:
        f.write(svg)

# 4. Part 4 #27 (p.140 5번): y=-x^2+6x 와 y=ax 둘러싸인 도형
def gen_part4_p27():
    ox, oy = 45, 120
    sx, sy = 21, 9.5

    def to_svg(xm, ym):
        return ox + xm * sx, oy - ym * sy

    pts_s = [to_svg(0, 0)]
    for i in range(50):
        xm = i * 4.0 / 49
        ym = -xm**2 + 6*xm
        pts_s.append(to_svg(xm, ym))
    pts_s.append(to_svg(4, 8))
    pts_s.append(to_svg(0, 0))
    poly_s = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_s)) + ' Z'

    pts_p = []
    for i in range(80):
        xm = -0.5 + i * 6.9 / 79
        ym = -xm**2 + 6*xm
        pts_p.append(to_svg(xm, ym))
    curve_p = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_p))

    lx1, ly1 = to_svg(-0.4, -0.8)
    lx2, ly2 = to_svg(5.0, 10.0)

    svg = header(220, 155) + f'''
  <line x1="15" y1="{oy}" x2="195" y2="{oy}" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-x)"/>
  <line x1="{ox}" y1="{oy+15}" x2="{ox}" y2="15" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-y)"/>
  <text x="198" y="{oy+4}" font-size="11" font-style="italic" fill="#18181b">x</text>
  <text x="{ox-8}" y="12" font-size="11" font-style="italic" fill="#18181b">y</text>
  <text x="{ox+3}" y="{oy+12}" font-size="10" fill="#18181b">O</text>

  <path d="{poly_s}" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.8"/>
  <line x1="{lx1:.1f}" y1="{ly1:.1f}" x2="{lx2:.1f}" y2="{ly2:.1f}" stroke="#18181b" stroke-width="1.4"/>
  <text x="{lx2-8:.1f}" y="{ly2-5:.1f}" font-size="10.5" font-style="italic" fill="#18181b">y=ax</text>

  <path d="{curve_p}" fill="none" stroke="#09090b" stroke-width="1.8" stroke-linecap="round"/>
  <text x="{ox+sx*4.8:.1f}" y="{oy-sy*4.2:.1f}" font-size="10.5" font-style="italic" fill="#09090b">y=-x²+6x</text>
</svg>'''
    with open('assets/figures/part4_p27.svg', 'w') as f:
        f.write(svg)

# 5. Part 4 #28 (p.140 6번): y=x^2 와 두 접선 둘러싸인 도형 A
def gen_part4_p28():
    ox, oy = 100, 80
    s = 18

    def to_svg(xm, ym):
        return ox + xm * s, oy - ym * s

    grid_lines = []
    for xi in range(-4, 5):
        gx = ox + xi * s
        grid_lines.append(f'<line x1="{gx}" y1="12" x2="{gx}" y2="135" stroke="#e2e8f0" stroke-width="0.7"/>')
    for yi in range(-2, 4):
        gy = oy - yi * s
        grid_lines.append(f'<line x1="20" y1="{gy}" x2="180" y2="{gy}" stroke="#e2e8f0" stroke-width="0.7"/>')

    pts_a = [to_svg(-1, 1), to_svg(0, -1), to_svg(1, 1)]
    for i in range(40):
        xm = 1.0 - i * 2.0 / 39
        ym = xm**2
        pts_a.append(to_svg(xm, ym))
    poly_a = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_a)) + ' Z'

    pts_p = []
    for i in range(60):
        xm = -1.7 + i * 3.4 / 59
        ym = xm**2
        pts_p.append(to_svg(xm, ym))
    curve_p = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_p))

    t1_p1 = to_svg(-0.3, -1.6)
    t1_p2 = to_svg(1.5, 2.0)
    t2_p1 = to_svg(0.3, -1.6)
    t2_p2 = to_svg(-1.5, 2.0)

    svg = header(220, 155) + f'''
  {''.join(grid_lines)}
  <line x1="15" y1="{oy}" x2="195" y2="{oy}" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-x)"/>
  <line x1="{ox}" y1="142" x2="{ox}" y2="10" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-y)"/>

  <text x="198" y="{oy+4}" font-size="11" font-style="italic" fill="#18181b">x</text>
  <text x="{ox-8}" y="10" font-size="11" font-style="italic" fill="#18181b">y</text>
  <text x="{ox-9}" y="{oy+11}" font-size="9.5" fill="#18181b">O</text>

  <path d="{poly_a}" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.8"/>
  <text x="{ox-4}" y="{oy+3}" font-size="11" font-weight="600" font-style="italic" fill="#1e293b">A</text>

  <line x1="{t1_p1[0]:.1f}" y1="{t1_p1[1]:.1f}" x2="{t1_p2[0]:.1f}" y2="{t1_p2[1]:.1f}" stroke="#475569" stroke-width="1.2"/>
  <line x1="{t2_p1[0]:.1f}" y1="{t2_p1[1]:.1f}" x2="{t2_p2[0]:.1f}" y2="{t2_p2[1]:.1f}" stroke="#475569" stroke-width="1.2"/>

  <path d="{curve_p}" fill="none" stroke="#09090b" stroke-width="1.8" stroke-linecap="round"/>

  <text x="{ox+s*2-2}" y="{oy+11}" font-size="9" fill="#18181b">2</text>
  <text x="{ox-s*2-4}" y="{oy+11}" font-size="9" fill="#18181b">-2</text>
  <text x="{ox+s*4-2}" y="{oy+11}" font-size="9" fill="#18181b">4</text>
  <text x="{ox-s*4-4}" y="{oy+11}" font-size="9" fill="#18181b">-4</text>
  <text x="{ox+4}" y="{oy-s*2+3}" font-size="9" fill="#18181b">2</text>
  <text x="{ox+4}" y="{oy+s*1+3}" font-size="9" fill="#18181b">-1</text>
  <circle cx="{ox}" cy="{oy+s*1}" r="2" fill="#18181b"/>
  <text x="{ox+s*1.2}" y="{oy-s*2.7}" font-size="10.5" font-style="italic" fill="#09090b">y=x²</text>
</svg>'''
    with open('assets/figures/part4_p28.svg', 'w') as f:
        f.write(svg)

# 6. Part 4 #32 (p.146 4번): 속도 v(t) 그래프 (0, 2, 4, 6)
def gen_part4_p32():
    ox, oy = 35, 75
    st, sv = 23, 24

    def to_svg(tm, vm):
        return ox + tm * st, oy - vm * sv

    pts = []
    for i in range(120):
        tm = -0.3 + i * 6.7 / 119
        vm = 1.3 * math.sin(tm * math.pi / 2.0)
        pts.append(to_svg(tm, vm))

    path_d = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts))

    svg = header(230, 150) + f'''
  <line x1="15" y1="{oy}" x2="208" y2="{oy}" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-x)"/>
  <line x1="{ox}" y1="125" x2="{ox}" y2="15" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-y)"/>
  <text x="212" y="{oy+4}" font-size="11" font-style="italic" fill="#18181b">t</text>
  <text x="{ox-8}" y="12" font-size="11" font-style="italic" fill="#18181b">y</text>
  <text x="{ox-9}" y="{oy+12}" font-size="10" fill="#18181b">O</text>

  <path d="{path_d}" fill="none" stroke="#09090b" stroke-width="1.8" stroke-linecap="round"/>

  <text x="{ox+st*2-2}" y="{oy+12}" font-size="10" fill="#18181b">2</text>
  <text x="{ox+st*4-2}" y="{oy+12}" font-size="10" fill="#18181b">4</text>
  <text x="{ox+st*6-2}" y="{oy+12}" font-size="10" fill="#18181b">6</text>
  <text x="{ox+st*4.7}" y="{oy-sv*1.4}" font-size="11" font-style="italic" font-weight="500" fill="#09090b">y=v(t)</text>
</svg>'''
    with open('assets/figures/part4_p32.svg', 'w') as f:
        f.write(svg)

# 7. Part 4 #41 (p.149 8번): y=-x^2+4x+k 와 S1, S2
def gen_part4_p41():
    ox, oy = 35, 75
    sx, sy = 30, 18

    def to_svg(xm, ym):
        return ox + xm * sx, oy - ym * sy

    pts_s1 = [to_svg(0, 0)]
    for i in range(30):
        xm = i * 0.65 / 29
        ym = -xm**2 + 4*xm - 2.2
        pts_s1.append(to_svg(xm, ym))
    pts_s1.append(to_svg(0, 0))
    poly_s1 = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_s1)) + ' Z'

    pts_s2 = [to_svg(0.65, 0)]
    for i in range(40):
        xm = 0.65 + i * (3.35 - 0.65) / 39
        ym = -xm**2 + 4*xm - 2.2
        pts_s2.append(to_svg(xm, ym))
    pts_s2.append(to_svg(3.35, 0))
    poly_s2 = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_s2)) + ' Z'

    pts_p = []
    for i in range(80):
        xm = -0.2 + i * 4.2 / 79
        ym = -xm**2 + 4*xm - 2.2
        pts_p.append(to_svg(xm, ym))
    curve_p = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_p))

    svg = header(220, 150) + f'''
  <line x1="12" y1="{oy}" x2="195" y2="{oy}" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-x)"/>
  <line x1="{ox}" y1="135" x2="{ox}" y2="15" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-y)"/>
  <text x="198" y="{oy+4}" font-size="11" font-style="italic" fill="#18181b">x</text>
  <text x="{ox-8}" y="12" font-size="11" font-style="italic" fill="#18181b">y</text>
  <text x="{ox-9}" y="{oy+11}" font-size="10" fill="#18181b">O</text>

  <path d="{poly_s1}" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.8"/>
  <path d="{poly_s2}" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.8"/>

  <text x="{ox+sx*0.28}" y="{oy+sy*0.8}" font-size="10.5" font-weight="600" fill="#1e293b">S₁</text>
  <text x="{ox+sx*1.85}" y="{oy-sy*0.6}" font-size="10.5" font-weight="600" fill="#1e293b">S₂</text>

  <path d="{curve_p}" fill="none" stroke="#09090b" stroke-width="1.8" stroke-linecap="round"/>
  <text x="{ox+sx*1.1}" y="{oy-sy*1.9}" font-size="10.5" font-style="italic" fill="#09090b">y=-x²+4x+k</text>
</svg>'''
    with open('assets/figures/part4_p41.svg', 'w') as f:
        f.write(svg)

# 8. Part 4 #42 (p.150 9번): y=x(x-1)(x+2) 와 x=-1, 1
def gen_part4_p42():
    ox, oy = 95, 80
    sx, sy = 33, 19

    def to_svg(xm, ym):
        return ox + xm * sx, oy - ym * sy

    pts_s1 = [to_svg(-1, 0)]
    for i in range(30):
        xm = -1.0 + i * 1.0 / 29
        ym = xm * (xm - 1) * (xm + 2)
        pts_s1.append(to_svg(xm, ym))
    pts_s1.append(to_svg(0, 0))
    poly_s1 = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_s1)) + ' Z'

    pts_s2 = [to_svg(0, 0)]
    for i in range(30):
        xm = i * 1.0 / 29
        ym = xm * (xm - 1) * (xm + 2)
        pts_s2.append(to_svg(xm, ym))
    pts_s2.append(to_svg(1, 0))
    poly_s2 = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_s2)) + ' Z'

    pts_c = []
    for i in range(80):
        xm = -2.2 + i * 3.6 / 79
        ym = xm * (xm - 1) * (xm + 2)
        pts_c.append(to_svg(xm, ym))
    curve_c = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_c))

    x_m1 = to_svg(-1, 0)[0]
    x_p1 = to_svg(1, 0)[0]

    svg = header(220, 150) + f'''
  <line x1="15" y1="{oy}" x2="195" y2="{oy}" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-x)"/>
  <line x1="{ox}" y1="135" x2="{ox}" y2="15" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-y)"/>
  <text x="198" y="{oy+4}" font-size="11" font-style="italic" fill="#18181b">x</text>
  <text x="{ox-8}" y="12" font-size="11" font-style="italic" fill="#18181b">y</text>
  <text x="{ox+3}" y="{oy+11}" font-size="10" fill="#18181b">O</text>

  <path d="{poly_s1}" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.8"/>
  <path d="{poly_s2}" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.8"/>

  <line x1="{x_m1}" y1="{oy-sy*2.3}" x2="{x_m1}" y2="{oy}" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="{x_p1}" y1="{oy}" x2="{x_p1}" y2="{oy+sy*2.3}" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>

  <path d="{curve_c}" fill="none" stroke="#09090b" stroke-width="1.8" stroke-linecap="round"/>

  <text x="{ox-sx*2-6}" y="{oy+12}" font-size="9.5" fill="#18181b">-2</text>
  <text x="{x_m1-4}" y="{oy+12}" font-size="9.5" fill="#18181b">-1</text>
  <text x="{x_p1-1}" y="{oy+12}" font-size="9.5" fill="#18181b">1</text>
  <text x="{ox+sx*0.1}" y="{oy-sy*2.4}" font-size="10.5" font-style="italic" fill="#09090b">y=x(x-1)(x+2)</text>
</svg>'''
    with open('assets/figures/part4_p42.svg', 'w') as f:
        f.write(svg)

# 9. Part 4 #43 (p.150 10번): y=f(x), y=g(x) 와 S1, S2, S3
def gen_part4_p43():
    ox, oy = 25, 115
    sx, sy = 26, 15

    def to_svg(xm, ym):
        return ox + (xm - 1.5) * sx, oy - ym * sy

    pts_f = []
    pts_g = []
    for i in range(100):
        xm = 1.7 + i * 4.6 / 99
        yf = 3.5 + 1.8 * math.sin((xm - 2.0) * math.pi / 1.35)
        yg = 3.5 - 0.45 * (xm - 4.0)
        pts_f.append(to_svg(xm, yf))
        pts_g.append(to_svg(xm, yg))

    pts_s1 = []
    for i in range(30):
        xm = 2.0 + i * 1.2 / 29
        pts_s1.append(to_svg(xm, 3.5 + 1.8 * math.sin((xm - 2.0) * math.pi / 1.35)))
    for i in range(30):
        xm = 3.2 - i * 1.2 / 29
        pts_s1.append(to_svg(xm, 3.5 - 0.45 * (xm - 4.0)))
    poly_s1 = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_s1)) + ' Z'

    pts_s2 = []
    for i in range(30):
        xm = 3.2 + i * 1.5 / 29
        pts_s2.append(to_svg(xm, 3.5 - 0.45 * (xm - 4.0)))
    for i in range(30):
        xm = 4.7 - i * 1.5 / 29
        pts_s2.append(to_svg(xm, 3.5 + 1.8 * math.sin((xm - 2.0) * math.pi / 1.35)))
    poly_s2 = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_s2)) + ' Z'

    pts_s3 = []
    for i in range(30):
        xm = 4.7 + i * 1.3 / 29
        pts_s3.append(to_svg(xm, 3.5 + 1.8 * math.sin((xm - 2.0) * math.pi / 1.35)))
    for i in range(30):
        xm = 6.0 - i * 1.3 / 29
        pts_s3.append(to_svg(xm, 3.5 - 0.45 * (xm - 4.0)))
    poly_s3 = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_s3)) + ' Z'

    curve_f = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_f))
    curve_g = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_g))

    x2 = to_svg(2.0, 0)[0]
    x6 = to_svg(6.0, 0)[0]

    svg = header(220, 150) + f'''
  <line x1="15" y1="{oy}" x2="195" y2="{oy}" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-x)"/>
  <text x="198" y="{oy+4}" font-size="11" font-style="italic" fill="#18181b">x</text>

  <path d="{poly_s1}" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.8"/>
  <path d="{poly_s2}" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.8"/>
  <path d="{poly_s3}" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.8"/>

  <text x="{to_svg(2.6, 3.7)[0]}" y="{to_svg(2.6, 3.7)[1]}" font-size="10.5" font-weight="600" fill="#1e293b">S₁</text>
  <text x="{to_svg(3.9, 3.2)[0]}" y="{to_svg(3.9, 3.2)[1]}" font-size="10.5" font-weight="600" fill="#1e293b">S₂</text>
  <text x="{to_svg(5.3, 3.8)[0]}" y="{to_svg(5.3, 3.8)[1]}" font-size="10.5" font-weight="600" fill="#1e293b">S₃</text>

  <line x1="{x2}" y1="{to_svg(2, 3.5)[1]}" x2="{x2}" y2="{oy}" stroke="#18181b" stroke-width="1"/>
  <line x1="{x6}" y1="{to_svg(6, 2.6)[1]}" x2="{x6}" y2="{oy}" stroke="#18181b" stroke-width="1"/>

  <path d="{curve_f}" fill="none" stroke="#09090b" stroke-width="1.8" stroke-linecap="round"/>
  <path d="{curve_g}" fill="none" stroke="#475569" stroke-width="1.6" stroke-linecap="round"/>

  <text x="{x2-2}" y="{oy+12}" font-size="10" fill="#18181b">2</text>
  <text x="{x6-2}" y="{oy+12}" font-size="10" fill="#18181b">6</text>
  <text x="{to_svg(5.6, 5.5)[0]}" y="{to_svg(5.6, 5.5)[1]}" font-size="10.5" font-style="italic" fill="#09090b">y=f(x)</text>
  <text x="{to_svg(1.7, 2.0)[0]}" y="{to_svg(1.7, 2.0)[1]}" font-size="10.5" font-style="italic" fill="#475569">y=g(x)</text>
</svg>'''
    with open('assets/figures/part4_p43.svg', 'w') as f:
        f.write(svg)

# 10. Part 3 #43 (p.108 7번): y=f'(x) 도함수 그래프
def gen_part3_p43():
    ox, oy = 45, 85
    sx, sy = 19, 22

    def to_svg(xm, ym):
        return ox + xm * sx, oy - ym * sy

    pts = []
    for i in range(120):
        xm = -1.5 + i * 8.2 / 119
        if xm <= 3.0:
            ym = - (8.0/9.0) * (xm + 1.0) * (xm - 2.0)
            if xm > 2.0:
                ym = -1.5 * math.sin((xm - 2.0) * math.pi / 2.0)
        else:
            if xm <= 4.0:
                ym = -1.5 * math.sin((xm - 2.0) * math.pi / 2.0)
            else:
                ym = -2.0 * (xm - 4.0) * (xm - 6.0)
        pts.append(to_svg(xm, ym))

    path_d = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts))
    y2 = to_svg(0, 2)[1]

    svg = header(220, 150) + f'''
  <line x1="12" y1="{oy}" x2="200" y2="{oy}" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-x)"/>
  <line x1="{ox}" y1="140" x2="{ox}" y2="15" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-y)"/>
  <text x="204" y="{oy+4}" font-size="11" font-style="italic" fill="#18181b">x</text>
  <text x="{ox-8}" y="12" font-size="11" font-style="italic" fill="#18181b">y</text>
  <text x="{ox-9}" y="{oy+11}" font-size="10" fill="#18181b">O</text>

  <line x1="{ox}" y1="{y2}" x2="{to_svg(5, 2)[0]}" y2="{y2}" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="{ox-9}" y="{y2+4}" font-size="10" fill="#18181b">2</text>

  <path d="{path_d}" fill="none" stroke="#09090b" stroke-width="1.8" stroke-linecap="round"/>

  <text x="{to_svg(-1, 0)[0]-6}" y="{oy+12}" font-size="9.5" fill="#18181b">-1</text>
  <text x="{to_svg(2, 0)[0]-2}" y="{oy+12}" font-size="9.5" fill="#18181b">2</text>
  <text x="{to_svg(3, 0)[0]-2}" y="{oy-4}" font-size="9.5" fill="#18181b">3</text>
  <text x="{to_svg(4, 0)[0]-2}" y="{oy+12}" font-size="9.5" fill="#18181b">4</text>
  <text x="{to_svg(5, 0)[0]-2}" y="{oy+12}" font-size="9.5" fill="#18181b">5</text>
  <text x="{to_svg(6, 0)[0]-2}" y="{oy+12}" font-size="9.5" fill="#18181b">6</text>
  <text x="{to_svg(4.2, 2.5)[0]}" y="{to_svg(4.2, 2.5)[1]}" font-size="10.5" font-style="italic" fill="#09090b">y=f'(x)</text>
</svg>'''
    with open('assets/figures/part3_p43.svg', 'w') as f:
        f.write(svg)

# 11. Part 3 #44 (p.109 8번): 도함수 y=f'(x) 이차곡선 (0, 4)
def gen_part3_p44():
    ox, oy = 55, 65
    sx, sy = 22, 18

    def to_svg(xm, ym):
        return ox + xm * sx, oy - ym * sy

    pts = []
    for i in range(80):
        xm = -0.8 + i * 5.6 / 79
        ym = xm * (xm - 4.0)
        pts.append(to_svg(xm, ym))

    path_d = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts))

    svg = header(220, 150) + f'''
  <line x1="15" y1="{oy}" x2="195" y2="{oy}" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-x)"/>
  <line x1="{ox}" y1="140" x2="{ox}" y2="15" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-y)"/>
  <text x="198" y="{oy+4}" font-size="11" font-style="italic" fill="#18181b">x</text>
  <text x="{ox-8}" y="12" font-size="11" font-style="italic" fill="#18181b">y</text>
  <text x="{ox-9}" y="{oy+12}" font-size="10" fill="#18181b">O</text>

  <path d="{path_d}" fill="none" stroke="#09090b" stroke-width="1.8" stroke-linecap="round"/>

  <text x="{to_svg(4, 0)[0]-2}" y="{oy+12}" font-size="10" fill="#18181b">4</text>
  <text x="{to_svg(3.2, 3.8)[0]}" y="{to_svg(3.2, 3.8)[1]}" font-size="11" font-style="italic" fill="#09090b">y=f'(x)</text>
</svg>'''
    with open('assets/figures/part3_p44.svg', 'w') as f:
        f.write(svg)

# 12. Part 3 #48 (p.109 12번): 정사각뿔에 내접하는 직육면체
def gen_part3_p48():
    svg = header(220, 160) + '''
  <line x1="35" y1="110" x2="110" y2="85" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2.5"/>
  <line x1="185" y1="110" x2="110" y2="85" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2.5"/>
  <line x1="110" y1="20" x2="110" y2="85" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2.5"/>

  <polygon points="110,95 68,77 68,107 110,125" fill="#fbcfe8" fill-opacity="0.6" stroke="#db2777" stroke-width="1.1"/>
  <polygon points="110,95 152,77 152,107 110,125" fill="#f472b6" fill-opacity="0.6" stroke="#db2777" stroke-width="1.1"/>
  <polygon points="110,95 68,77 110,60 152,77" fill="#fdf2f8" fill-opacity="0.8" stroke="#db2777" stroke-width="1.1"/>

  <line x1="35" y1="110" x2="110" y2="140" stroke="#0f172a" stroke-width="1.6"/>
  <line x1="185" y1="110" x2="110" y2="140" stroke="#0f172a" stroke-width="1.6"/>
  <line x1="110" y1="20" x2="35" y2="110" stroke="#0f172a" stroke-width="1.6"/>
  <line x1="110" y1="20" x2="110" y2="140" stroke="#0f172a" stroke-width="1.6"/>
  <line x1="110" y1="20" x2="185" y2="110" stroke="#0f172a" stroke-width="1.6"/>

  <text x="55" y="60" font-size="11" font-style="italic" fill="#0f172a" font-weight="600">12</text>
</svg>'''
    with open('assets/figures/part3_p48.svg', 'w') as f:
        f.write(svg)

# 13. Part 3 #49 (p.109 13번): y=f'(x), y=g'(x) 교점 a, b
def gen_part3_p49():
    ox, oy = 45, 60
    sx, sy = 24, 15

    def to_svg(xm, ym):
        return ox + xm * sx, oy - ym * sy

    pts_f = []
    for i in range(80):
        xm = -0.3 + i * 5.5 / 79
        ym = 1.2 * (xm - 2.5)**2 - 3.5
        pts_f.append(to_svg(xm, ym))
    curve_f = 'M ' + ' '.join(f'{x:.1f},{y:.1f}' if idx==0 else f'L {x:.1f},{y:.1f}' for idx, (x, y) in enumerate(pts_f))

    l_p1 = to_svg(0.0, -2.5)
    l_p2 = to_svg(4.8, 1.5)
    xa = to_svg(0.9, 0)[0]
    xb = to_svg(4.1, 0)[0]

    svg = header(220, 150) + f'''
  <line x1="15" y1="{oy}" x2="195" y2="{oy}" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-x)"/>
  <line x1="{ox}" y1="140" x2="{ox}" y2="15" stroke="#18181b" stroke-width="1.2" marker-end="url(#arr-y)"/>
  <text x="198" y="{oy+4}" font-size="11" font-style="italic" fill="#18181b">x</text>
  <text x="{ox-8}" y="12" font-size="11" font-style="italic" fill="#18181b">y</text>
  <text x="{ox-9}" y="{oy+12}" font-size="10" fill="#18181b">O</text>

  <line x1="{xa}" y1="{oy}" x2="{xa}" y2="{to_svg(0.9, -1.8)[1]}" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="{xb}" y1="{oy}" x2="{xb}" y2="{to_svg(4.1, 0.9)[1]}" stroke="#64748b" stroke-width="1" stroke-dasharray="3,2"/>

  <path d="{curve_f}" fill="none" stroke="#09090b" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="{l_p1[0]:.1f}" y1="{l_p1[1]:.1f}" x2="{l_p2[0]:.1f}" y2="{l_p2[1]:.1f}" stroke="#475569" stroke-width="1.5"/>

  <text x="{xa-2}" y="{oy-4}" font-size="10" font-style="italic" fill="#18181b">a</text>
  <text x="{xb-2}" y="{oy+12}" font-size="10" font-style="italic" fill="#18181b">b</text>
  <text x="{to_svg(0.1, 3.5)[0]}" y="{to_svg(0.1, 3.5)[1]}" font-size="10.5" font-style="italic" fill="#09090b">y=f'(x)</text>
  <text x="{to_svg(3.5, 3.2)[0]}" y="{to_svg(3.5, 3.2)[1]}" font-size="10.5" font-style="italic" fill="#475569">y=g'(x)</text>
</svg>'''
    with open('assets/figures/part3_p49.svg', 'w') as f:
        f.write(svg)

if __name__ == '__main__':
    gen_part4_p16()
    gen_part4_p25()
    gen_part4_p26()
    gen_part4_p27()
    gen_part4_p28()
    gen_part4_p32()
    gen_part4_p41()
    gen_part4_p42()
    gen_part4_p43()
    gen_part3_p43()
    gen_part3_p44()
    gen_part3_p48()
    gen_part3_p49()
    print("All 13 figures regenerated cleanly!")
