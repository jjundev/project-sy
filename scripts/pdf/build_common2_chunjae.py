#!/usr/bin/env python3
"""
scripts/pdf/build_common2_chunjae.py - 천재(홍) 고등학교 공통수학2 교과서 워크시트 및 해설지 전 단원 독립 빌더.

Usage:
    python3 scripts/pdf/build_common2_chunjae.py       # Part 1~3 전체 일괄 빌드
    python3 scripts/pdf/build_common2_chunjae.py 1     # Part 1 단독 빌드
    python3 scripts/pdf/build_common2_chunjae.py 2     # Part 2 단독 빌드
    python3 scripts/pdf/build_common2_chunjae.py 3     # Part 3 단독 빌드
"""

import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from scripts.pdf.config import COMMON2_CHUNJAE_PARTS
from scripts.pdf.core import run_group_builder

if __name__ == "__main__":
    run_group_builder("공통수학2 천재(홍)", COMMON2_CHUNJAE_PARTS, PROJECT_ROOT)
