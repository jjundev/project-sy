import unittest
from pathlib import Path


class TestPdfConfig(unittest.TestCase):
    def setUp(self):
        self.project_root = Path(__file__).resolve().parent.parent

    def test_config_registry_contains_all_21_parts(self):
        from scripts.pdf.config import PARTS_CONFIG, PUBLISHER_GROUPS
        self.assertEqual(len(PARTS_CONFIG), 21)
        expected_groups = {"print", "tb", "donga", "miraen", "visang", "jihaksa", "ybm"}
        self.assertEqual(set(PUBLISHER_GROUPS.keys()), expected_groups)
        # Verify total parts across groups equals 21
        total_parts_in_groups = sum(len(parts) for parts in PUBLISHER_GROUPS.values())
        self.assertEqual(total_parts_in_groups, 21)

    def test_all_data_files_exist(self):
        from scripts.pdf.config import PARTS_CONFIG
        for key, cfg in PARTS_CONFIG.items():
            data_path = self.project_root / cfg["data_file"]
            self.assertTrue(data_path.exists(), f"Missing data file for {key}: {data_path}")

    def test_publisher_subsets_match(self):
        from scripts.pdf.config import (
            PARTS_CONFIG,
            PRINT_PARTS,
            TB_PARTS,
            DONGA_PARTS,
            MIRAEN_PARTS,
            VISANG_PARTS,
            JIHAKSA_PARTS,
            YBM_PARTS,
        )
        subsets = {
            "print": (PRINT_PARTS, 2),
            "tb": (TB_PARTS, 3),
            "donga": (DONGA_PARTS, 4),
            "miraen": (MIRAEN_PARTS, 3),
            "visang": (VISANG_PARTS, 3),
            "jihaksa": (JIHAKSA_PARTS, 3),
            "ybm": (YBM_PARTS, 3),
        }
        for group, (subset, expected_len) in subsets.items():
            self.assertEqual(len(subset), expected_len, f"Subset {group} length mismatch")
            for k, v in subset.items():
                self.assertIn(k, PARTS_CONFIG, f"Key {k} from {group} not in PARTS_CONFIG")
                self.assertEqual(v, PARTS_CONFIG[k], f"Config for {k} in {group} does not match PARTS_CONFIG")



class TestPdfCore(unittest.TestCase):
    def setUp(self):
        self.project_root = Path(__file__).resolve().parent.parent

    def test_get_part_filenames(self):
        from scripts.pdf.core import get_part_filenames
        cfg = {
            "part_key": "1",
            "title": "Part 1 (함수의 극한과 연속 - 프린트)",
            "data_file": "data/problems_part1.js",
            "base_filename": "수학II_Part1_함수의극한과연속",
        }
        # 1. student_arg provided
        res = get_part_filenames(cfg, self.project_root, student_arg="홍길동")
        self.assertEqual(res["without_answers"], "홍길동_수학II_Part1_함수의극한과연속.pdf")
        self.assertEqual(res["with_answers"], "홍길동_수학II_Part1_함수의극한과연속_정답포함.pdf")
        self.assertEqual(res["solution"], "홍길동_수학II_Part1_함수의극한과연속_해설지.pdf")

        # 2. no_student=True
        res_no_student = get_part_filenames(cfg, self.project_root, no_student=True)
        self.assertEqual(res_no_student["without_answers"], "수학II_Part1_함수의극한과연속.pdf")
        self.assertEqual(res_no_student["with_answers"], "수학II_Part1_함수의극한과연속_정답포함.pdf")
        self.assertEqual(res_no_student["solution"], "수학II_Part1_함수의극한과연속_해설지.pdf")

        # 3. Default from file (data/problems_part1.js has "오서영" -> "서영이")
        res_default = get_part_filenames(cfg, self.project_root)
        self.assertEqual(res_default["without_answers"], "서영이_수학II_Part1_함수의극한과연속.pdf")
        self.assertEqual(res_default["with_answers"], "서영이_수학II_Part1_함수의극한과연속_정답포함.pdf")
        self.assertEqual(res_default["solution"], "서영이_수학II_Part1_함수의극한과연속_해설지.pdf")

    def test_create_base_argparser(self):
        from scripts.pdf.core import create_base_argparser
        parser = create_base_argparser("Test description")

        # Mutually exclusive flags
        args = parser.parse_args(["--with-answers"])
        self.assertTrue(args.with_answers)
        self.assertFalse(args.no_answers)
        self.assertFalse(args.solution)

        args = parser.parse_args(["--no-answers"])
        self.assertTrue(args.no_answers)
        self.assertFalse(args.with_answers)
        self.assertFalse(args.solution)

        args = parser.parse_args(["--solution"])
        self.assertTrue(args.solution)
        self.assertFalse(args.with_answers)
        self.assertFalse(args.no_answers)

        # Mutually exclusive constraint
        from unittest.mock import patch
        import io
        with patch("sys.stderr", new_callable=io.StringIO):
            with self.assertRaises(SystemExit):
                parser.parse_args(["--with-answers", "--solution"])

        # Student argument
        args = parser.parse_args(["--student", "홍길동"])
        self.assertEqual(args.student, "홍길동")

        args = parser.parse_args(["--name", "이순신"])
        self.assertEqual(args.student, "이순신")

        args = parser.parse_args(["--no-student"])
        self.assertTrue(args.no_student)

    def test_format_bytes(self):
        from scripts.pdf.core import format_bytes
        self.assertEqual(format_bytes(500), "500 B")
        self.assertEqual(format_bytes(1024), "1.0 KB")
        self.assertEqual(format_bytes(1024 * 1024), "1.0 MB")
        self.assertEqual(format_bytes(1024 * 1024 * 1024), "1.0 GB")

    def test_extract_student_from_file(self):
        import tempfile
        from scripts.pdf.core import extract_student_from_file

        part1_path = self.project_root / "data" / "problems_part1.js"
        if part1_path.exists():
            self.assertEqual(extract_student_from_file(part1_path), "서영이")

        # Non-existent file
        self.assertEqual(extract_student_from_file(Path("/non/existent/file.js")), "")

        # Custom temp file
        with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as f:
            f.write('const meta = { "student": "테스트학생" };\n')
            temp_path = Path(f.name)
        try:
            self.assertEqual(extract_student_from_file(temp_path), "테스트학생")
        finally:
            temp_path.unlink()

    def test_run_group_builder(self):
        from unittest.mock import patch
        from scripts.pdf.config import DONGA_PARTS
        from scripts.pdf.core import run_group_builder

        with patch("scripts.pdf.core.build_pdf") as mock_build, patch("sys.stdout"):
            mock_build.return_value = {
                "part": "donga1",
                "with_answers": False,
                "is_solution": False,
                "tag": "문제지",
                "filename": "test.pdf",
                "path": "/fake/test.pdf",
                "size": 1024,
                "pages": "2",
            }
            results = run_group_builder(
                group_name="동아 교과서",
                parts_config=DONGA_PARTS,
                base_dir=self.project_root,
                argv=["1", "--no-answers"],
            )
            self.assertEqual(len(results), 1)
            self.assertEqual(results[0]["part"], "donga1")
            self.assertFalse(results[0]["with_answers"])
            self.assertFalse(results[0]["is_solution"])
            mock_build.assert_called_once()


class TestPdfRunners(unittest.TestCase):
    def setUp(self):
        self.project_root = Path(__file__).resolve().parent.parent
        self.pdf_scripts_dir = self.project_root / "scripts" / "pdf"
        self.runner_names = [
            "build_print.py",
            "build_tb.py",
            "build_donga.py",
            "build_miraen.py",
            "build_visang.py",
            "build_jihaksa.py",
            "build_ybm.py",
            "build_all.py",
        ]

    def test_all_runners_exist(self):
        for name in self.runner_names:
            script_path = self.pdf_scripts_dir / name
            self.assertTrue(script_path.exists(), f"Runner script missing: {script_path}")

    def test_all_runners_help_exit_zero(self):
        import subprocess
        import sys
        for name in self.runner_names:
            script_path = self.pdf_scripts_dir / name
            res = subprocess.run(
                [sys.executable, str(script_path), "--help"],
                capture_output=True,
                text=True,
                check=True,
            )
            self.assertEqual(res.returncode, 0)
            self.assertIn("usage:", res.stdout.lower())


if __name__ == "__main__":
    unittest.main()

