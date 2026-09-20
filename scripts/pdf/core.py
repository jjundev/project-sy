"""
scripts/pdf/core.py - Headless Google Chrome rendering engine and CLI runner for PDF worksheets.

Provides shared routines for:
- Chrome executable detection
- Student name resolution and filename generation
- Headless PDF printing via Chrome
- CLI argument parsing and batch build loops
"""

import argparse
import os
import re
import shutil
import subprocess
import sys
import urllib.parse
from pathlib import Path
from typing import Any, Dict, List, Optional, Union

CHROME_PATHS = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary",
    "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
]


def extract_student_from_file(data_path: Path) -> str:
    """JS 파일에서 meta.student 추출 (없거나 실패 시 빈 문자열 반환)"""
    if not data_path.exists():
        return ""
    try:
        content = data_path.read_text(encoding="utf-8")
        match = re.search(r'"student"\s*:\s*"([^"]*)"', content)
        if match:
            val = match.group(1).strip()
            # 하위 호환: "오서영"은 "서영이" 파일명 관례 유지
            if val == "오서영":
                return "서영이"
            return val
    except Exception:
        pass
    return ""


def get_part_filenames(
    cfg: Dict[str, Any],
    base_dir: Path,
    student_arg: Optional[str] = None,
    no_student: bool = False,
) -> Dict[str, str]:
    """학생 이름 지정 여부에 따른 산출물 파일명 생성"""
    if no_student:
        student = ""
    elif student_arg is not None:
        student = student_arg.strip()
    else:
        data_path = base_dir / cfg.get("data_file", "")
        student = extract_student_from_file(data_path)

    prefix = f"{student}_" if student else ""
    base = cfg["base_filename"]
    return {
        "without_answers": f"{prefix}{base}.pdf",
        "with_answers": f"{prefix}{base}_정답포함.pdf",
        "solution": f"{prefix}{base}_해설지.pdf",
    }


def get_chrome_path() -> str:
    """Google Chrome 실행 파일 경로 탐색 (macOS 기본 경로, PATH, 환경변수)"""
    env_path = os.environ.get("CHROME_PATH")
    if env_path and os.path.exists(env_path):
        return env_path

    for path in CHROME_PATHS:
        if os.path.exists(path):
            return path

    for binary in ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser"]:
        found = shutil.which(binary)
        if found:
            return found

    raise FileNotFoundError(
        "Google Chrome 실행 파일을 찾을 수 없습니다.\n"
        "macOS 표준 경로(/Applications/Google Chrome.app/Contents/MacOS/Google Chrome)를 확인하거나 "
        "CHROME_PATH 환경 변수를 설정해 주세요."
    )


def get_pdf_page_count(pdf_path: Union[str, Path]) -> Optional[str]:
    """pdfinfo 유틸리티를 사용하여 PDF 총 페이지 수 조회"""
    try:
        res = subprocess.run(
            ["pdfinfo", str(pdf_path)],
            capture_output=True,
            text=True,
            check=True,
        )
        for line in res.stdout.splitlines():
            if line.startswith("Pages:"):
                return line.split(":", 1)[1].strip()
    except Exception:
        pass
    return None


def format_bytes(size: Union[int, float]) -> str:
    """파일 크기를 사람이 읽기 쉬운 문자열로 변환"""
    for unit in ["B", "KB", "MB", "GB"]:
        if size < 1024.0:
            return f"{size:.1f} {unit}" if unit != "B" else f"{size} {unit}"
        size /= 1024.0
    return f"{size:.1f} TB"


def build_pdf(
    chrome_path: str,
    base_dir: Path,
    part_num: Union[int, str],
    with_answers: bool,
    output_filename: str,
    is_solution: bool = False,
    student_override: Optional[str] = None,
    no_student: bool = False,
) -> Dict[str, Any]:
    """지정된 Part 및 모드(문제지/정답표/해설지)에 따라 Headless Chrome으로 PDF 생성"""
    output_dir = base_dir / "output"
    output_dir.mkdir(parents=True, exist_ok=True)
    out_path = output_dir / output_filename

    html_path = (base_dir / "template" / "worksheet.html").resolve()
    query_parts = [f"part={part_num}"]
    if is_solution:
        query_parts.append("mode=solution")
    if with_answers:
        query_parts.append("answers=1")
    if no_student:
        query_parts.append("nostudent=1")
    elif student_override is not None:
        query_parts.append(f"student={urllib.parse.quote(student_override)}")

    query = "?" + "&".join(query_parts)
    file_url = f"file://{html_path}{query}"

    cmd = [
        chrome_path,
        "--headless",
        "--disable-gpu",
        "--allow-file-access-from-files",
        "--no-pdf-header-footer",
        "--run-all-compositor-stages-before-draw",
        "--virtual-time-budget=4000",
        f"--print-to-pdf={out_path}",
        file_url,
    ]

    if is_solution:
        tag = "해설지"
    elif with_answers:
        tag = "정답포함"
    else:
        tag = "문제지"

    print(f"📄 [Part {part_num} | {tag}] 빌드 시작 -> {output_filename} ...")

    try:
        subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            check=True,
        )
    except subprocess.CalledProcessError as e:
        print(f"❌ PDF 생성 실패: {e}", file=sys.stderr)
        if e.stderr:
            print(f"Chrome Stderr:\n{e.stderr}", file=sys.stderr)
        raise

    if not out_path.exists():
        raise RuntimeError(f"산출물 파일이 생성되지 않았습니다: {out_path}")

    file_size = out_path.stat().st_size
    pages = get_pdf_page_count(out_path)
    page_info = f"{pages} 쪽" if pages else "페이지 확인 불가"

    print(
        f"✅ [Part {part_num} | {tag}] 완료: {output_filename} "
        f"({format_bytes(file_size)}, {page_info})"
    )
    return {
        "part": part_num,
        "with_answers": with_answers,
        "is_solution": is_solution,
        "tag": tag,
        "filename": output_filename,
        "path": str(out_path),
        "size": file_size,
        "pages": pages,
    }


def create_base_argparser(description: str, epilog: str = "") -> argparse.ArgumentParser:
    """공통 CLI 인자 파서 생성 (정답표/해설지 옵션 및 학생 이름 옵션)"""
    parser = argparse.ArgumentParser(
        description=description,
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=epilog,
    )
    ans_group = parser.add_mutually_exclusive_group()
    ans_group.add_argument(
        "--with-answers",
        action="store_true",
        help="맨 뒤에 빠른 정답표를 부록으로 포함하여 생성",
    )
    ans_group.add_argument(
        "--no-answers",
        action="store_true",
        help="정답표 없이 순수 문제지만 생성",
    )
    ans_group.add_argument(
        "--solution",
        action="store_true",
        help="풀이 및 빠른 정답표가 포함된 해설지 PDF 생성",
    )

    parser.add_argument(
        "--student",
        "--name",
        dest="student",
        default=None,
        help="문제지에 표기할 학생 이름 (미지정 시 데이터 파일 설정에 따르며, 없을 경우 이름 미표기)",
    )
    parser.add_argument(
        "--no-student",
        action="store_true",
        help="학생 이름을 표기하지 않음 (데이터 파일에 이름이 있어도 제외)",
    )
    return parser


def run_group_builder(
    group_name: str,
    parts_config: Dict[Union[int, str], Dict[str, Any]],
    base_dir: Path,
    default_choices: Optional[List[str]] = None,
    argv: Optional[List[str]] = None,
) -> List[Dict[str, Any]]:
    """출판사별/그룹별 PDF 빌더 CLI 메인 루틴"""
    # 1. Map user input representations to actual parts_config keys
    key_map: Dict[str, Union[int, str]] = {}
    for k in parts_config.keys():
        key_map[str(k)] = k
        # Map trailing digit string e.g. "donga1" -> "1"
        m = re.search(r"(\d+)$", str(k))
        if m:
            digit = m.group(1)
            if digit not in key_map:
                key_map[digit] = k

    if default_choices:
        for c in default_choices:
            c_str = str(c)
            if c_str in ("all", "solution", "solutions"):
                continue
            if c_str not in key_map:
                if c in parts_config:
                    key_map[c_str] = c
                elif c_str.isdigit() and int(c_str) in parts_config:
                    key_map[c_str] = int(c_str)
                else:
                    matches = [k for k in parts_config.keys() if str(k).endswith(c_str)]
                    if len(matches) == 1:
                        key_map[c_str] = matches[0]

    if default_choices:
        choices = [str(c) for c in default_choices]
        for extra in ["all", "solution"]:
            if extra not in choices:
                choices.append(extra)
        for k_str in key_map.keys():
            if k_str not in choices:
                choices.append(k_str)
    else:
        choices = list(dict.fromkeys(list(key_map.keys()) + ["all", "solution"]))

    description = f"{group_name} Headless Chrome 기반 PDF 자동 빌더"
    epilog = f"""예시:
  python3 $0                   # {group_name} 전체 단원 문제지+해설지 생성
  python3 $0 --solution        # {group_name} 전체 단원 해설지 생성
  python3 $0 --no-answers      # {group_name} 전체 단원 문제지 생성
"""
    parser = create_base_argparser(description=description, epilog=epilog)
    parser.add_argument(
        "target",
        nargs="?",
        default="all",
        choices=choices,
        help=f"생성할 대상 단원 (기본값: all, 선택: {', '.join(choices)})",
    )

    args = parser.parse_args(argv)

    try:
        chrome_path = get_chrome_path()
    except FileNotFoundError as err:
        print(f"❌ 오류: {err}", file=sys.stderr)
        sys.exit(1)

    print(f"🚀 Google Chrome 경로: {chrome_path}")
    print(f"📂 작업 디렉토리: {base_dir}")

    # Build tasks: (part_key, with_answers, is_solution, output_filename)
    tasks = []

    def add_part_tasks(p_key):
        cfg = parts_config[p_key]
        filenames = get_part_filenames(cfg, base_dir, args.student, args.no_student)
        if args.solution:
            tasks.append((p_key, True, True, filenames["solution"]))
        elif args.with_answers:
            tasks.append((p_key, True, False, filenames["with_answers"]))
        elif args.no_answers:
            tasks.append((p_key, False, False, filenames["without_answers"]))
        else:
            tasks.append((p_key, False, False, filenames["without_answers"]))
            tasks.append((p_key, True, True, filenames["solution"]))

    if args.target in ("solution", "solutions"):
        for p_key in parts_config.keys():
            cfg = parts_config[p_key]
            filenames = get_part_filenames(cfg, base_dir, args.student, args.no_student)
            tasks.append((p_key, True, True, filenames["solution"]))
    elif args.target == "all":
        for p_key in parts_config.keys():
            add_part_tasks(p_key)
    else:
        actual_key = key_map.get(args.target, args.target)
        if actual_key in parts_config:
            add_part_tasks(actual_key)
        elif str(actual_key).isdigit() and int(actual_key) in parts_config:
            add_part_tasks(int(actual_key))
        else:
            print(f"❌ 알 수 없는 대상: {args.target}", file=sys.stderr)
            sys.exit(1)

    print(f"🎯 빌드 그룹: {group_name} (총 {len(tasks)}개 PDF 빌드 예정)\n" + "-" * 50)

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
