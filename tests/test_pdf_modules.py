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


if __name__ == "__main__":
    unittest.main()
