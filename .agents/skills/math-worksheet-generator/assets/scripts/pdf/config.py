"""
scripts/pdf/config.py - Central configuration registry for PDF worksheets and textbooks.

Single source of truth for:
- PARTS_CONFIG: 21 parts across all textbooks and print handouts.
- PUBLISHER_GROUPS: mapping of publisher codes to list of part keys.
- Publisher-specific subset dictionaries (PRINT_PARTS, TB_PARTS, etc.).
"""

from typing import Any, Dict, List, Union

PartKey = Union[int, str]

PARTS_CONFIG: Dict[PartKey, Dict[str, Any]] = {
    1: {
        "part_key": "1",
        "title": "Part 1 (함수의 극한과 연속 - 프린트)",
        "data_file": "data/problems_part1.js",
        "base_filename": "수학II_Part1_함수의극한과연속",
    },
    2: {
        "part_key": "2",
        "title": "Part 2 (미분계수와 도함수 - 프린트)",
        "data_file": "data/problems_part2.js",
        "base_filename": "수학II_Part2_미분계수와도함수",
    },
    "tb1": {
        "part_key": "tb1",
        "title": "교과서 Part 1 (I. 함수의 극한과 연속)",
        "data_file": "data/textbook_part1.js",
        "base_filename": "교과서_Part1_함수의극한과연속",
    },
    "tb2": {
        "part_key": "tb2",
        "title": "교과서 Part 2 (II. 미분계수와 도함수)",
        "data_file": "data/textbook_part2.js",
        "base_filename": "교과서_Part2_미분계수와도함수",
    },
    "tb3": {
        "part_key": "tb3",
        "title": "교과서 Part 3 (II. 도함수의 활용)",
        "data_file": "data/textbook_part3.js",
        "base_filename": "교과서_Part3_도함수의활용",
    },
    "donga1": {
        "part_key": "donga1",
        "title": "동아 교과서 Part 1 (I. 함수의 극한과 연속)",
        "data_file": "data/donga_part1.js",
        "base_filename": "미적분I_동아_Part1_함수의극한과연속",
    },
    "donga2": {
        "part_key": "donga2",
        "title": "동아 교과서 Part 2 (II. 미분)",
        "data_file": "data/donga_part2.js",
        "base_filename": "미적분I_동아_Part2_미분",
    },
    "donga3": {
        "part_key": "donga3",
        "title": "동아 교과서 Part 3 (III. 미분의 활용)",
        "data_file": "data/donga_part3.js",
        "base_filename": "미적분I_동아_Part3_미분의활용",
    },
    "donga4": {
        "part_key": "donga4",
        "title": "동아 교과서 Part 4 (IV. 적분)",
        "data_file": "data/donga_part4.js",
        "base_filename": "미적분I_동아_Part4_적분",
    },
    "miraen1": {
        "part_key": "miraen1",
        "title": "미래엔 교과서 Part 1 (I. 함수의 극한과 연속)",
        "data_file": "data/miraen_part1.js",
        "base_filename": "미적분I_미래엔_Part1_함수의극한과연속",
    },
    "miraen2": {
        "part_key": "miraen2",
        "title": "미래엔 교과서 Part 2 (II. 미분)",
        "data_file": "data/miraen_part2.js",
        "base_filename": "미적분I_미래엔_Part2_미분",
    },
    "miraen3": {
        "part_key": "miraen3",
        "title": "미래엔 교과서 Part 3 (III. 적분)",
        "data_file": "data/miraen_part3.js",
        "base_filename": "미적분I_미래엔_Part3_적분",
    },
    "visang1": {
        "part_key": "visang1",
        "title": "비상 교과서 Part 1 (I. 함수의 극한과 연속)",
        "data_file": "data/visang_part1.js",
        "base_filename": "미적분I_비상_Part1_함수의극한과연속",
    },
    "visang2": {
        "part_key": "visang2",
        "title": "비상 교과서 Part 2 (II. 미분)",
        "data_file": "data/visang_part2.js",
        "base_filename": "미적분I_비상_Part2_미분",
    },
    "visang3": {
        "part_key": "visang3",
        "title": "비상 교과서 Part 3 (III. 적분)",
        "data_file": "data/visang_part3.js",
        "base_filename": "미적분I_비상_Part3_적분",
    },
    "jihaksa1": {
        "part_key": "jihaksa1",
        "title": "지학사 교과서 Part 1 (I. 함수의 극한과 연속)",
        "data_file": "data/jihaksa_part1.js",
        "base_filename": "미적분I_지학사_Part1_함수의극한과연속",
    },
    "jihaksa2": {
        "part_key": "jihaksa2",
        "title": "지학사 교과서 Part 2 (II. 미분)",
        "data_file": "data/jihaksa_part2.js",
        "base_filename": "미적분I_지학사_Part2_미분",
    },
    "jihaksa3": {
        "part_key": "jihaksa3",
        "title": "지학사 교과서 Part 3 (III. 적분)",
        "data_file": "data/jihaksa_part3.js",
        "base_filename": "미적분I_지학사_Part3_적분",
    },
    "ybm1": {
        "part_key": "ybm1",
        "title": "YBM 교과서 Part 1 (I. 함수의 극한과 연속)",
        "data_file": "data/ybm_part1.js",
        "base_filename": "미적분I_YBM_Part1_함수의극한과연속",
    },
    "ybm2": {
        "part_key": "ybm2",
        "title": "YBM 교과서 Part 2 (II. 미분)",
        "data_file": "data/ybm_part2.js",
        "base_filename": "미적분I_YBM_Part2_미분",
    },
    "ybm3": {
        "part_key": "ybm3",
        "title": "YBM 교과서 Part 3 (III. 적분)",
        "data_file": "data/ybm_part3.js",
        "base_filename": "미적분I_YBM_Part3_적분",
    },
}

PUBLISHER_GROUPS: Dict[str, List[PartKey]] = {
    "print": [1, 2],
    "tb": ["tb1", "tb2", "tb3"],
    "donga": ["donga1", "donga2", "donga3", "donga4"],
    "miraen": ["miraen1", "miraen2", "miraen3"],
    "visang": ["visang1", "visang2", "visang3"],
    "jihaksa": ["jihaksa1", "jihaksa2", "jihaksa3"],
    "ybm": ["ybm1", "ybm2", "ybm3"],
}

# Individual publisher subsets
PRINT_PARTS: Dict[PartKey, Dict[str, Any]] = {k: PARTS_CONFIG[k] for k in PUBLISHER_GROUPS["print"]}
TB_PARTS: Dict[PartKey, Dict[str, Any]] = {k: PARTS_CONFIG[k] for k in PUBLISHER_GROUPS["tb"]}
DONGA_PARTS: Dict[PartKey, Dict[str, Any]] = {k: PARTS_CONFIG[k] for k in PUBLISHER_GROUPS["donga"]}
MIRAEN_PARTS: Dict[PartKey, Dict[str, Any]] = {k: PARTS_CONFIG[k] for k in PUBLISHER_GROUPS["miraen"]}
VISANG_PARTS: Dict[PartKey, Dict[str, Any]] = {k: PARTS_CONFIG[k] for k in PUBLISHER_GROUPS["visang"]}
JIHAKSA_PARTS: Dict[PartKey, Dict[str, Any]] = {k: PARTS_CONFIG[k] for k in PUBLISHER_GROUPS["jihaksa"]}
YBM_PARTS: Dict[PartKey, Dict[str, Any]] = {k: PARTS_CONFIG[k] for k in PUBLISHER_GROUPS["ybm"]}
