#!/usr/bin/env python3
"""
generate_pdf.py - Headless Google Chrome 기반 수학 II 문제지, 정답표 및 해설지 PDF 자동 빌더 (호환성 래퍼)

Usage:
    python3 generate_pdf.py part1               # Part 1 문제지 PDF 생성
    python3 generate_pdf.py part1 --with-answers # Part 1 정답표 포함 PDF 생성
    python3 generate_pdf.py part1 --solution    # Part 1 해설지 PDF 생성
    python3 generate_pdf.py part2               # Part 2 문제지 PDF 생성
    python3 generate_pdf.py part2 --with-answers # Part 2 정답표 포함 PDF 생성
    python3 generate_pdf.py part2 --solution    # Part 2 해설지 PDF 생성
    python3 generate_pdf.py solution            # 전체 27종 해설지 PDF 생성
    python3 generate_pdf.py all                 # 전체 27종 문제지 및 해설지 PDF 54종 일괄 생성
    python3 generate_pdf.py all --with-answers  # 전체 27종 정답표 포함 PDF 생성
    python3 generate_pdf.py all --no-answers    # 전체 27종 문제지 PDF 생성
    python3 generate_pdf.py all --solution      # 전체 27종 해설지 PDF 생성
"""

import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Union

from scripts.pdf.config import (
    CHUNJAE_PARTS,
    COMMON2_CHUNJAE_PARTS,
    DONGA_PARTS,
    JIHAKSA_PARTS,
    MIRAEN_PARTS,
    PARTS_CONFIG,
    PRINT_PARTS,
    PUBLISHER_GROUPS,
    TB_PARTS,
    VISANG_PARTS,
    YBM_PARTS,
)
from scripts.pdf.core import (
    build_pdf,
    create_base_argparser,
    format_bytes,
    get_chrome_path,
    get_part_filenames,
)

TARGET_MAP: Dict[str, List[Union[int, str]]] = {
    # Print (Part 1, 2)
    "part1": [1],
    "1": [1],
    "part2": [2],
    "2": [2],
    # Chunjae Textbook
    "tb": PUBLISHER_GROUPS["tb"],
    "textbook": PUBLISHER_GROUPS["tb"],
    # Donga Textbook
    "donga": PUBLISHER_GROUPS["donga"],
    "donga_all": PUBLISHER_GROUPS["donga"],
    # Miraen Textbook
    "miraen": PUBLISHER_GROUPS["miraen"],
    "mirae": PUBLISHER_GROUPS["miraen"],
    "miraen_all": PUBLISHER_GROUPS["miraen"],
    # Visang Textbook
    "visang": PUBLISHER_GROUPS["visang"],
    "visang_all": PUBLISHER_GROUPS["visang"],
    # Jihaksa Textbook
    "jihaksa": PUBLISHER_GROUPS["jihaksa"],
    "jihaksa_all": PUBLISHER_GROUPS["jihaksa"],
    # YBM Textbook
    "ybm": PUBLISHER_GROUPS["ybm"],
    "ybm_all": PUBLISHER_GROUPS["ybm"],
    # Chunjae (Hong) Calculus I
    "chunjae": PUBLISHER_GROUPS["chunjae"],
    "chunjae_all": PUBLISHER_GROUPS["chunjae"],
    # Common Math 2 Chunjae (Hong)
    "common2_chunjae": PUBLISHER_GROUPS["common2_chunjae"],
    "common2": PUBLISHER_GROUPS["common2_chunjae"],
    "common2_all": PUBLISHER_GROUPS["common2_chunjae"],
}

# Add individual part keys
for key in PARTS_CONFIG.keys():
    TARGET_MAP[str(key)] = [key]

# Add mirae1, mirae2, mirae3 aliases
for i in (1, 2, 3):
    TARGET_MAP[f"mirae{i}"] = [f"miraen{i}"]

TARGET_CHOICES = list(TARGET_MAP.keys()) + ["solution", "solutions", "all"]


def build_parser():
    description = "Headless Google Chrome 기반 수학 II 문제지, 정답표 및 해설지 PDF 자동 빌더"
    epilog = """예시:
  python3 generate_pdf.py part1                # Part 1 문제지 PDF 생성
  python3 generate_pdf.py part1 --with-answers  # Part 1 정답표 포함 PDF 생성
  python3 generate_pdf.py part1 --solution     # Part 1 해설지 PDF 생성
  python3 generate_pdf.py part2                # Part 2 문제지 PDF 생성
  python3 generate_pdf.py part2 --with-answers  # Part 2 정답표 포함 PDF 생성
  python3 generate_pdf.py part2 --solution     # Part 2 해설지 PDF 생성
  python3 generate_pdf.py solution             # 전체 해설지 PDF 생성
  python3 generate_pdf.py all                  # 전체 27종 문제지 및 해설지 PDF 일괄 생성
  python3 generate_pdf.py all --with-answers   # 전체 27종 정답표 포함 PDF 생성
  python3 generate_pdf.py all --no-answers     # 전체 27종 문제지 PDF 생성
  python3 generate_pdf.py all --solution       # 전체 27종 해설지 PDF 생성
"""
    parser = create_base_argparser(description=description, epilog=epilog)
    parser.add_argument(
        "target",
        nargs="?",
        default="tb",
        choices=TARGET_CHOICES,
        help="생성할 대상: part1, part2, tb, donga, miraen, visang, jihaksa, ybm, chunjae, common2_chunjae, all (기본값: tb)",
    )
    return parser


def main(argv: Optional[List[str]] = None) -> List[Dict[str, Any]]:
    parser = build_parser()
    args = parser.parse_args(argv)

    try:
        chrome_path = get_chrome_path()
    except FileNotFoundError as err:
        print(f"❌ 오류: {err}", file=sys.stderr)
        sys.exit(1)

    base_dir = Path(__file__).resolve().parent
    print(f"🚀 Google Chrome 경로: {chrome_path}")
    print(f"📂 작업 디렉토리: {base_dir}")

    # 작업 목록 구성: (part_key, with_answers, is_solution, filename)
    tasks = []

    def add_part_tasks(p_key):
        cfg = PARTS_CONFIG[p_key]
        filenames = get_part_filenames(cfg, base_dir, args.student, args.no_student)
        if args.solution:
            tasks.append((p_key, True, True, filenames["solution"]))
        elif args.with_answers:
            tasks.append((p_key, True, False, filenames["with_answers"]))
        elif args.no_answers:
            tasks.append((p_key, False, False, filenames["without_answers"]))
        else:
            # 기본 모드: 문제지 + 해설지 2종 세트 생성
            tasks.append((p_key, False, False, filenames["without_answers"]))
            tasks.append((p_key, True, True, filenames["solution"]))

    if args.target in ("solution", "solutions"):
        for part_key in PARTS_CONFIG.keys():
            cfg = PARTS_CONFIG[part_key]
            filenames = get_part_filenames(cfg, base_dir, args.student, args.no_student)
            tasks.append((part_key, True, True, filenames["solution"]))
    elif args.target == "all":
        for part_key in PARTS_CONFIG.keys():
            add_part_tasks(part_key)
    else:
        for part_key in TARGET_MAP[args.target]:
            add_part_tasks(part_key)

    print(f"총 {len(tasks)}개 PDF 빌드 예정\n" + "-" * 50)

    results = []
    for part_num, with_answers, is_solution, filename in tasks:
        res = build_pdf(
            chrome_path,
            base_dir,
            part_num,
            with_answers,
            filename,
            is_solution=is_solution,
            student_override=args.student,
            no_student=args.no_student,
        )
        results.append(res)

    print("-" * 50)
    print("🎉 모든 PDF 빌드가 성공적으로 완료되었습니다!")
    print("\n[생성된 산출물 요약]")
    for r in results:
        print(
            f" - {r['filename']:<44} | Part {r['part']} ({r['tag']}) | "
            f"{r['pages'] or '?'}쪽 | {format_bytes(r['size'])}"
        )
    return results


if __name__ == "__main__":
    main()
