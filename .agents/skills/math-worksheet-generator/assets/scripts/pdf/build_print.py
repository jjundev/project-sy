#!/usr/bin/env python3
"""
scripts/pdf/build_print.py - 학교 프린트 (Part 1, 2) 전용 PDF 빌더 스크립트.
"""

import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from scripts.pdf.config import PRINT_PARTS
from scripts.pdf.core import run_group_builder


def main():
    run_group_builder(
        group_name="학교 프린트",
        parts_config=PRINT_PARTS,
        base_dir=PROJECT_ROOT,
        default_choices=["1", "2", "all"],
    )


if __name__ == "__main__":
    main()
