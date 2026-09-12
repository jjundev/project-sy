/*
 * 문제지 데이터 — WORKSHEET_DESIGN_SPEC.md 5장 스키마 (problems.json) 그대로.
 * 브라우저에서 template/worksheet.html 을 직접 열어도(file://) 읽히도록 JSON 을 전역 변수에 담는다.
 * Python 파이프라인은 JSON 본문 앞에 `window.WORKSHEET_DATA = ` 한 줄만 붙여 이 파일을 출력하면 된다.
 * 수식(formula)은 KaTeX 문법이며, question / tip 안에서는 $...$ 로 인라인 수식을 쓸 수 있다.
 */
window.WORKSHEET_DATA = {
  "meta": {
    "title": "수학 II - 함수의 극한 실전 대비",
    "subtitle": "학교 프린트 핵심 유형 및 쌍둥이 변형",
    "student": "오서영",
    "date": "2026. 09. 12 (토)",
    "cheer": "서영이의 완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "학교 프린트 1p 예제 1",
      "tag": "핵심유형",
      "question": "다음 극한값을 함수의 그래프를 이용하여 구하시오.",
      "formula": "\\lim_{x \\to 1} \\frac{x^2+x-2}{x-1}",
      "subQuestions": [],
      "tip": "분자를 인수분해하여 0이 되는 인수를 약분하세요.",
      "answer": "3",
      "solution": {
        "steps": [
          { "label": "[1단계: 선 대입]", "content": "$x=1$을 대입하면 분모 $\\to 0$, 분자 $\\to 0$인 $\\frac{0}{0}$ 부정형입니다." },
          { "label": "[2단계: 식 변형]", "content": "분자를 인수분해하면 $x^2+x-2 = (x-1)(x+2)$이므로 $0$이 되는 인수 $(x-1)$을 약분합니다." },
          { "label": "[3단계: 재대입]", "content": "약분 후 남은 식 $\\lim_{x \\to 1} (x+2)$에 $x=1$을 대입하면 $1+2=3$입니다." }
        ]
      }
    },
    {
      "id": 2,
      "source": "학교 프린트 1p 문제 1",
      "tag": "기본",
      "question": "다음 극한값을 함수의 그래프를 이용하여 구하시오.",
      "formula": "",
      "subQuestions": [
        { "no": 1, "formula": "\\lim_{x \\to 5} \\sqrt{x-1}" },
        { "no": 2, "formula": "\\lim_{x \\to 0} \\frac{2x^2-3x}{x}" }
      ],
      "tip": "",
      "answer": "(1) 2, (2) -3",
      "solution": {
        "steps": [
          { "label": "(1)", "content": "$x=5$를 대입하면 $\\sqrt{5-1} = \\sqrt{4} = 2$입니다." },
          { "label": "(2)", "content": "$x=0$ 대입 시 $\\frac{0}{0}$ 꼴이므로 분자를 $x(2x-3)$으로 묶어 $x$를 약분한 뒤 $x=0$을 대입하면 $-3$입니다." }
        ]
      }
    },
    {
      "id": 3,
      "source": "선생님 필기 추가",
      "tag": "필기",
      "question": "다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to 2} \\frac{x^2-4}{x^2-3x+2}",
      "subQuestions": [],
      "tip": "분자·분모를 각각 인수분해한 뒤 공통인수 $(x-2)$ 를 약분하세요.",
      "answer": "4"
    },
    {
      "id": 4,
      "source": "AI 숫자 변형 (01번)",
      "tag": "숫자변형",
      "question": "다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to 2} \\frac{x^2+x-6}{x-2}",
      "subQuestions": [],
      "tip": "01번과 같은 방법(인수분해) — $x^2+x-6=(x-2)(x+3)$",
      "answer": "5"
    },
    {
      "id": 5,
      "source": "쌍둥이 유제 (02번)",
      "tag": "쌍둥이유제",
      "question": "다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to 0} \\frac{\\sqrt{x+4}-2}{x}",
      "subQuestions": [],
      "tip": "근호가 있는 $\\frac{0}{0}$ 꼴은 분자를 유리화하세요.",
      "answer": "1/4"
    },
    {
      "id": 6,
      "source": "학교 프린트 2p 문제 3",
      "tag": "기본",
      "question": "함수 $f(x)=\\dfrac{|x-1|}{x-1}$ 에 대하여 다음을 구하시오.",
      "formula": "",
      "subQuestions": [
        { "no": 1, "formula": "\\lim_{x \\to 1+} f(x)" },
        { "no": 2, "formula": "\\lim_{x \\to 1-} f(x)" }
      ],
      "tip": "절댓값 함수의 경우, 구간별로 주어진 함수로 변경해서 풀기! $x > 1$이면 $f(x)=1$, $x < 1$이면 $f(x)=-1$로 바꾸어 대입하세요.",
      "answer": "(1) 1, (2) -1"
    },
    {
      "id": 7,
      "source": "학교 프린트 2p 예제 2",
      "tag": "핵심유형",
      "question": "다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to \\infty} \\frac{3x^2-x+1}{x^2+2}",
      "subQuestions": [],
      "tip": "$\\frac{\\infty}{\\infty}$ 꼴은 분모의 최고차항으로 분자·분모를 나누세요.",
      "answer": "3"
    },
    {
      "id": 8,
      "source": "선생님 필기 추가",
      "tag": "심화",
      "question": "두 상수 $a, b$ 에 대하여 다음 등식이 성립할 때, $a+b$ 의 값을 구하시오.",
      "formula": "\\lim_{x \\to 1} \\frac{x^2+ax+b}{x-1} = 5",
      "subQuestions": [],
      "tip": "극한의 성질: 분모 → 0 이면 분자 → 0 이어야 극한값이 존재합니다.",
      "answer": "-1"
    }
  ]
};
