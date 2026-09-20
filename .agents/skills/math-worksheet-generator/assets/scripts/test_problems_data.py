"""
tests/test_problems_data.py

수학 II 문제지 데이터 검증기.
JavaScript 파일(window.WORKSHEET_DATA = { ... };)을 파싱하여
메타데이터, 2x2 A4 인쇄 규격(4의 배수), 필수 필드, 3단계 알고리즘 교수법 힌트 키워드를 검증합니다.
"""

import json
import os
import re
import sys
import unittest

PEDAGOGY_KEYWORDS = [
    "대입",
    "인수분해",
    "유리화",
    "나누",
    "공식",
    "미분",
    "좌극한",
    "우극한",
    "연속",
    "성질",
    "구간",
    "절댓값",
]

REQUIRED_META_KEYS = ["title", "subtitle", "date"]
OPTIONAL_META_KEYS = ["student", "cheer"]

REQUIRED_PROBLEM_KEYS = {
    "id",
    "source",
    "tag",
    "question",
    "formula",
    "subQuestions",
    "tip",
    "answer",
}


def load_js_data(filepath: str) -> dict:
    """JavaScript 파일에서 window.WORKSHEET_DATA 객체를 추출하여 dict로 반환."""
    if not os.path.exists(filepath):
        raise FileNotFoundError(f"File not found: {filepath}")

    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read().strip()

    # window.WORKSHEET_DATA = { ... }; 패턴 추출
    match = re.search(r"window\.WORKSHEET_DATA\s*=\s*(\{[\s\S]*\})\s*;?\s*$", content)
    if not match:
        raise ValueError(f"Failed to parse WORKSHEET_DATA from {filepath}")

    raw_json = match.group(1).strip()
    if raw_json.endswith(";"):
        raw_json = raw_json[:-1].strip()

    try:
        data = json.loads(raw_json)
    except json.JSONDecodeError as e:
        raise ValueError(f"Invalid JSON in {filepath}: {e}")

    return data


def validate_solution(sol: dict, pid: int, source_name: str = "<data>"):
    """문항의 solution 필드 구조 및 KaTeX 수식 기호 검증"""
    assert isinstance(sol, dict), f"{source_name}: Problem {pid} 'solution' must be an object."
    assert "steps" in sol and isinstance(sol["steps"], list), (
        f"{source_name}: Problem {pid} 'solution.steps' must be a list."
    )
    assert len(sol["steps"]) > 0, f"{source_name}: Problem {pid} 'solution.steps' cannot be empty."
    for s_idx, step in enumerate(sol["steps"]):
        assert isinstance(step, dict), (
            f"{source_name}: Problem {pid} step {s_idx} must be an object."
        )
        assert "label" in step and isinstance(step["label"], str) and step["label"].strip(), (
            f"{source_name}: Problem {pid} step {s_idx} missing or empty 'label'."
        )
        assert "content" in step and isinstance(step["content"], str) and step["content"].strip(), (
            f"{source_name}: Problem {pid} step {s_idx} missing or empty 'content'."
        )
        # KaTeX $ 기호 짝이 맞는지 검사
        dollar_count = step["content"].count("$")
        assert dollar_count % 2 == 0, (
            f"{source_name}: Problem {pid} step {s_idx} has unmatched $ math delimiters: {step['content']}"
        )


def validate_data(data: dict, source_name: str = "<data>") -> dict:
    """메모리 내 파싱된 데이터 딕셔너리의 유효성을 전수 검증."""
    # 1. 메타데이터 검증
    assert isinstance(data, dict), f"{source_name}: Root must be an object."
    assert "meta" in data and isinstance(data["meta"], dict), (
        f"{source_name}: 'meta' must be an object."
    )
    meta = data["meta"]
    for key in REQUIRED_META_KEYS:
        assert key in meta, f"{source_name}: 'meta.{key}' field is missing."
        assert isinstance(meta[key], str) and meta[key].strip(), (
            f"{source_name}: 'meta.{key}' must be a non-empty string."
        )

    # student 필드는 선택적 (인자로 주어지지 않은 경우 빈 문자열 또는 생략 가능)
    if "student" in meta and meta["student"] is not None:
        assert isinstance(meta["student"], str), (
            f"{source_name}: 'meta.student' must be a string."
        )

    # 2. 문제 배열 기본 검증
    assert "problems" in data and isinstance(data["problems"], list), (
        f"{source_name}: 'problems' must be a list."
    )
    problems = data["problems"]
    assert len(problems) > 0, f"{source_name}: 'problems' list cannot be empty."

    # 3. 2x2 A4 인쇄 규칙: 4의 배수 검증
    assert len(problems) % 4 == 0, (
        f"{source_name}: Total problems ({len(problems)}) must be a multiple of 4 for 2x2 A4 pages."
    )

    # 4. 개별 문제 필드 및 교수법 힌트 검증
    seen_ids = set()
    for idx, p in enumerate(problems):
        assert isinstance(p, dict), f"{source_name}: Problem #{idx + 1} must be an object."

        pid = p.get("id")
        assert pid is not None, f"{source_name}: Problem #{idx + 1} missing 'id'."
        assert pid not in seen_ids, f"{source_name}: Duplicate problem id: {pid}"
        seen_ids.add(pid)

        missing = REQUIRED_PROBLEM_KEYS - set(p.keys())
        assert not missing, f"{source_name}: Problem {pid} missing keys: {missing}"

        # subQuestions 타입 검사
        assert isinstance(p["subQuestions"], list), (
            f"{source_name}: Problem {pid} 'subQuestions' must be a list."
        )

        # 3단계 알고리즘 교수법 힌트 검증: tip이 비어있지 않다면 지정된 핵심 키워드 최소 1개 이상 포함
        tip = p.get("tip")
        if tip and isinstance(tip, str) and tip.strip():
            matched_kw = [kw for kw in PEDAGOGY_KEYWORDS if kw in tip]
            assert matched_kw, (
                f"{source_name}: Problem {pid} tip does not follow pedagogy: '{tip}'. "
                f"Must include at least one of {PEDAGOGY_KEYWORDS}."
            )

        # solution 필드가 존재할 경우 스키마 및 수식 무결성 검증
        if "solution" in p:
            validate_solution(p["solution"], pid, source_name)

        # 수식 기호($) 외부로 누출된 생 LaTeX 명령어(\mathrm, \frac, \sqrt, \pi 등) 전수 검사
        validate_no_naked_latex(p, pid, source_name)

    return data


def check_no_naked_latex(text: str, field_name: str, pid: int, source_name: str = "<data>"):
    """
    수식 구분자($...$, $$...$$, \\(...\\), \\[...\\]) 외부로 노출된 LaTeX 매크로 누출 검증.
    한국어 문장이나 소문항 등에 \\mathrm{P}, \\frac, \\sqrt 등의 LaTeX 코드가 $ 없이 노출되는 것을 원천 차단합니다.
    """
    if not text or not isinstance(text, str):
        return
    # 수식 구분자 영역($$...$$, $...$, \(...\), \[...\]) 제거 후 순수 텍스트만 추출
    outside_text = re.sub(
        r"\$\$[\s\S]*?\$\$|\$[^\$]+?\$|\\\([\s\S]*?\\\)|\s*\\\[[\s\S]*?\\\]",
        "",
        text,
    )
    # 백슬래시로 시작하는 LaTeX 명령어 탐색 (줄바꿈/탭 등의 기본 이스케이프 및 공백 매크로 \quad, \qquad 제외)
    naked_macros = re.findall(r"\\[a-zA-Z]+", outside_text)
    bad_macros = [
        m for m in naked_macros if m not in ("\\n", "\\t", "\\r", "\\qquad", "\\quad")
    ]
    if bad_macros:
        raise AssertionError(
            f"{source_name}: Problem {pid} field '{field_name}' contains naked LaTeX macro(s) {bad_macros} outside math delimiters ($...$). "
            f"Found in text: '{text}'. All LaTeX commands (e.g. \\mathrm{{P}}, \\frac, \\sqrt, \\pi) MUST be enclosed in '$...$'."
        )


def validate_no_naked_latex(p: dict, pid: int, source_name: str = "<data>"):
    """문항 내 모든 텍스트 필드에서 수식 기호($) 누락으로 인한 생 LaTeX 명령어 누출 전수 검사."""
    check_no_naked_latex(p.get("question", ""), "question", pid, source_name)

    # formula 필드는 한글이 섞여있거나 $ 구분이 있는 경우 인라인 수식이므로 검사
    f_text = p.get("formula", "")
    if f_text and (re.search(r"[가-힣]", f_text) or "$" in f_text):
        check_no_naked_latex(f_text, "formula", pid, source_name)

    for s_idx, s in enumerate(p.get("subQuestions", [])):
        sf = s.get("formula", "")
        if sf and (re.search(r"[가-힣]", sf) or "$" in sf):
            check_no_naked_latex(
                sf, f"subQuestions[{s_idx}].formula", pid, source_name
            )

    check_no_naked_latex(
        p.get("qSuffix") or p.get("questionSuffix", ""), "qSuffix", pid, source_name
    )
    check_no_naked_latex(p.get("tip", ""), "tip", pid, source_name)
    check_no_naked_latex(p.get("answer", ""), "answer", pid, source_name)

    for c_idx, c in enumerate(p.get("choices", [])):
        check_no_naked_latex(c, f"choices[{c_idx}]", pid, source_name)

    sol = p.get("solution")
    if sol and isinstance(sol, dict):
        for st_idx, st in enumerate(sol.get("steps", [])):
            check_no_naked_latex(
                st.get("label", ""), f"solution.steps[{st_idx}].label", pid, source_name
            )
            check_no_naked_latex(
                st.get("content", ""),
                f"solution.steps[{st_idx}].content",
                pid,
                source_name,
            )


def validate_dataset(filepath: str) -> dict:
    """데이터 파일(JS)을 로드하여 스키마, 4의 배수 규격, 교수법 힌트 규칙을 전수 검증."""
    data = load_js_data(filepath)
    return validate_data(data, source_name=filepath)


class TestProblemsData(unittest.TestCase):
    """검증기 단위 테스트 케이스"""

    def test_sample_problems_file(self):
        sample_path = os.path.join(
            os.path.dirname(__file__), "..", "data", "sample_problems.js"
        )
        if os.path.exists(sample_path):
            data = validate_dataset(sample_path)
            self.assertGreater(len(data["problems"]), 0)
            self.assertEqual(len(data["problems"]) % 4, 0)

    def test_nonexistent_file(self):
        with self.assertRaises(FileNotFoundError):
            validate_dataset("data/nonexistent_file_xyz.js")

    def _get_base_valid_data(self):
        return {
            "meta": {
                "title": "테스트 제목",
                "subtitle": "부제목",
                "student": "오서영",
                "date": "2026. 09. 12",
            },
            "problems": [
                {
                    "id": i,
                    "source": f"출처 {i}",
                    "tag": "기본",
                    "question": f"문제 {i}",
                    "formula": "x=1",
                    "subQuestions": [],
                    "tip": "대입하여 계산합니다.",
                    "answer": "1",
                }
                for i in range(1, 5)
            ],
        }

    def test_valid_data(self):
        data = self._get_base_valid_data()
        validated = validate_data(data)
        self.assertEqual(len(validated["problems"]), 4)

    def test_empty_problems_raises(self):
        data = self._get_base_valid_data()
        data["problems"] = []
        with self.assertRaises(AssertionError):
            validate_data(data)

    def test_non_multiple_of_four_raises(self):
        data = self._get_base_valid_data()
        data["problems"].pop()  # 3 problems
        with self.assertRaises(AssertionError):
            validate_data(data)

    def test_missing_meta_key_raises(self):
        data = self._get_base_valid_data()
        del data["meta"]["title"]
        with self.assertRaises(AssertionError):
            validate_data(data)

    def test_empty_meta_field_raises(self):
        data = self._get_base_valid_data()
        data["meta"]["title"] = "   "
        with self.assertRaises(AssertionError):
            validate_data(data)

    def test_empty_student_allowed(self):
        data = self._get_base_valid_data()
        data["meta"]["student"] = ""
        validated = validate_data(data)
        self.assertEqual(validated["meta"]["student"], "")

        data["meta"]["student"] = "   "
        validated = validate_data(data)
        self.assertEqual(validated["meta"]["student"], "   ")

        del data["meta"]["student"]
        validated = validate_data(data)
        self.assertNotIn("student", validated["meta"])

    def test_invalid_student_type_raises(self):
        data = self._get_base_valid_data()
        data["meta"]["student"] = 12345
        with self.assertRaises(AssertionError):
            validate_data(data)

    def test_missing_problem_key_raises(self):
        data = self._get_base_valid_data()
        del data["problems"][0]["tip"]
        with self.assertRaises(AssertionError):
            validate_data(data)

    def test_duplicate_problem_id_raises(self):
        data = self._get_base_valid_data()
        data["problems"][1]["id"] = data["problems"][0]["id"]
        with self.assertRaises(AssertionError):
            validate_data(data)

    def test_invalid_pedagogy_hint_raises(self):
        data = self._get_base_valid_data()
        data["problems"][0]["tip"] = "이 문제는 그냥 열심히 잘 풀어보세요."
        with self.assertRaises(AssertionError):
            validate_data(data)

    def test_empty_tip_is_allowed(self):
        data = self._get_base_valid_data()
        data["problems"][0]["tip"] = ""
        validated = validate_data(data)
        self.assertEqual(len(validated["problems"]), 4)

    def test_all_pedagogy_keywords_allowed(self):
        for kw in PEDAGOGY_KEYWORDS:
            data = self._get_base_valid_data()
            data["problems"][0]["tip"] = f"{kw}하여 문제를 해결합니다."
            validated = validate_data(data)
            self.assertEqual(len(validated["problems"]), 4)

    def test_solution_schema_validation(self):
        """solution 필드의 스키마 구조 및 KaTeX 수식 기호 무결성 단위 테스트"""
        # 1. 정상적인 solution 검증 통과
        valid_sol = {
            "steps": [
                {"label": "[1단계: 선 대입]", "content": "$x=1$ 대입 시 $\\frac{0}{0}$ 꼴"},
                {"label": "[2단계: 식 변형]", "content": "인수분해 후 약분: $(x-1)$ 소거"},
                {"label": "[3단계: 재대입]", "content": "남은 식에 $x=1$ 대입하여 $3$ 도출"},
            ]
        }
        validate_solution(valid_sol, 1, "test")

        # validate_data를 통한 통합 검증
        data = self._get_base_valid_data()
        data["problems"][0]["solution"] = valid_sol
        validated = validate_data(data)
        self.assertIn("solution", validated["problems"][0])

        # 2. solution이 dict가 아닌 경우 예외 발생
        with self.assertRaises(AssertionError):
            validate_solution("not a dict", 1, "test")

        with self.assertRaises(AssertionError):
            bad_data = self._get_base_valid_data()
            bad_data["problems"][0]["solution"] = ["not a dict"]
            validate_data(bad_data)

        # 3. steps 필드 누락 또는 타입 불일치
        with self.assertRaises(AssertionError):
            validate_solution({}, 1, "test")

        with self.assertRaises(AssertionError):
            validate_solution({"steps": "not a list"}, 1, "test")

        # 4. steps가 비어있는 경우
        with self.assertRaises(AssertionError):
            validate_solution({"steps": []}, 1, "test")

        with self.assertRaises(AssertionError):
            bad_data = self._get_base_valid_data()
            bad_data["problems"][0]["solution"] = {"steps": []}
            validate_data(bad_data)

        # 5. step 요소가 dict가 아닌 경우
        with self.assertRaises(AssertionError):
            validate_solution({"steps": [123]}, 1, "test")

        # 6. step label 누락 또는 빈 값 또는 잘못된 타입
        with self.assertRaises(AssertionError):
            validate_solution({"steps": [{"content": "$x=1$"}]}, 1, "test")

        with self.assertRaises(AssertionError):
            validate_solution({"steps": [{"label": 123, "content": "$x=1$"}]}, 1, "test")

        with self.assertRaises(AssertionError):
            validate_solution({"steps": [{"label": "   ", "content": "$x=1$"}]}, 1, "test")

        # 7. step content 누락 또는 빈 값 또는 잘못된 타입
        with self.assertRaises(AssertionError):
            validate_solution({"steps": [{"label": "[1단계]"}]}, 1, "test")

        with self.assertRaises(AssertionError):
            validate_solution({"steps": [{"label": "[1단계]", "content": "   "}]}, 1, "test")

        with self.assertRaises(AssertionError):
            validate_solution({"steps": [{"label": "[1단계]", "content": 123}]}, 1, "test")

        # 8. KaTeX $ 수식 기호 짝 불일치 (홀수 개)
        with self.assertRaises(AssertionError):
            validate_solution(
                {"steps": [{"label": "[1단계]", "content": "$x=1 대입"}]},
                1,
                "test",
            )

        with self.assertRaises(AssertionError):
            bad_data = self._get_base_valid_data()
            bad_data["problems"][0]["solution"] = {
                "steps": [{"label": "[1단계]", "content": "$x=1 대입"}]
            }
            validate_data(bad_data)

    def test_naked_latex_validation(self):
        r"""수식 기호($) 없이 노출된 생 LaTeX 명령어(\mathrm{P}, \frac 등) 탐지 단위 테스트"""
        # 1. 문제 질문 내 점 \mathrm{P} 누출 시 예외 발생
        data = self._get_base_valid_data()
        data["problems"][0]["question"] = "수직선 위를 움직이는 점 \\mathrm{P}의 위치"
        with self.assertRaises(AssertionError) as ctx:
            validate_data(data)
        self.assertIn("naked LaTeX macro", str(ctx.exception))
        self.assertIn("\\mathrm", str(ctx.exception))

        # 2. 소문항 내 점 \mathrm{P} 누출 시 예외 발생
        data = self._get_base_valid_data()
        data["problems"][0]["subQuestions"] = [
            {"formula": "t=2에서의 점 \\mathrm{P}의 속도"}
        ]
        with self.assertRaises(AssertionError) as ctx:
            validate_data(data)
        self.assertIn("naked LaTeX macro", str(ctx.exception))

        # 3. 해설 본문 내 **288\pi** 등 볼드 수식에 $ 누락 시 예외 발생
        data = self._get_base_valid_data()
        data["problems"][0]["solution"] = {
            "steps": [
                {"label": "[1단계]", "content": "$V(12) = 288\\pi$ $\\therefore$ **288\\pi**"}
            ]
        }
        with self.assertRaises(AssertionError) as ctx:
            validate_data(data)
        self.assertIn("naked LaTeX macro", str(ctx.exception))
        self.assertIn("\\pi", str(ctx.exception))

        # 4. 정답 및 팁 필드 내 생 수식 누출 시 예외 발생
        data = self._get_base_valid_data()
        data["problems"][0]["tip"] = "미분 공식 \\frac{df}{dx}를 대입하여 계산합니다."
        with self.assertRaises(AssertionError) as ctx:
            validate_data(data)
        self.assertIn("naked LaTeX macro", str(ctx.exception))

        # 5. 올바르게 $...$로 감싼 수식은 정상 통과
        valid_data = self._get_base_valid_data()
        valid_data["problems"][0]["question"] = "수직선 위를 움직이는 점 $\\mathrm{P}$의 위치"
        valid_data["problems"][0]["subQuestions"] = [
            {"formula": "$t=2$에서의 점 $\\mathrm{P}$의 속도"}
        ]
        valid_data["problems"][0]["solution"] = {
            "steps": [
                {"label": "[1단계]", "content": "$V(12) = 288\\pi$ $\\therefore$ **$288\\pi$**"}
            ]
        }
        valid_data["problems"][0]["tip"] = "미분 공식 $\\frac{df}{dx}$를 대입하여 계산합니다."
        validated = validate_data(valid_data)
        self.assertEqual(len(validated["problems"]), 4)


if __name__ == "__main__":
    target_files = sys.argv[1:] if len(sys.argv) > 1 else ["data/sample_problems.js"]

    all_passed = True
    for target in target_files:
        try:
            validate_dataset(target)
            print(f"PASS: {target} is valid.")
        except Exception as e:
            print(f"FAIL: {target} - {e}", file=sys.stderr)
            all_passed = False
            raise

    if not all_passed:
        sys.exit(1)
