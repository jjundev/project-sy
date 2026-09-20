#!/usr/bin/env python3
"""
scripts/pdf/build_all.py - 전체 21개 단원 (42종 PDF) 일괄 빌더 스크립트.
"""

import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from scripts.pdf.config import PARTS_CONFIG
from scripts.pdf.core import run_group_builder


def main():
    run_group_builder(
        group_name="전체 교재",
        parts_config=PARTS_CONFIG,
        base_dir=PROJECT_ROOT,
        default_choices=list(PARTS_CONFIG.keys()) + ["all"],
    )


if __name__ == "__main__":
    main()
