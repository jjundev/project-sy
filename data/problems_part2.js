/*
 * Part 2: II. 미분계수와 도함수 문제 데이터 (16문항)
 */
window.WORKSHEET_DATA = {
  "meta": {
    "title": "수학 II - II. 미분계수와 도함수",
    "subtitle": "학교 프린트 핵심 유형 및 필기·쌍둥이 문제",
    "student": "오서영",
    "date": "2026. 09. 12 (토)",
    "cheer": "서영이의 완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "학교 프린트 12p 예제 1",
      "tag": "핵심유형",
      "question": "함수 $f(x) = x^2$에서 $x$의 값이 다음과 같이 변할 때의 평균변화율을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "1\\text{에서 } 4\\text{까지}"
        },
        {
          "no": 2,
          "formula": "2\\text{에서 } 2+\\Delta x\\text{까지}"
        }
      ],
      "tip": "1단계: 평균변화율 공식 $\\frac{f(b)-f(a)}{b-a}$에 대입하기! 2단계: 대입 후 바로 계산이 되면 그 값이 곧 정답입니다.",
      "answer": "(1) 5, (2) 4 + \\Delta x",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 대입] $\\frac{f(4)-f(1)}{4-1} = \\frac{4^2-1^2}{3} = \\frac{15}{3} = 5$ $\\therefore$ **5**"
          },
          {
            "label": "(2)",
            "content": "[공식 대입] $\\frac{f(2+\\Delta x)-f(2)}{\\Delta x} = \\frac{(2+\\Delta x)^2-2^2}{\\Delta x} = \\frac{4\\Delta x+(\\Delta x)^2}{\\Delta x} = 4+\\Delta x$ $\\therefore$ **$4+\\Delta x$**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "학교 프린트 12p 스스로 해보기",
      "tag": "기본",
      "question": "함수 $f(x) = 2x+1$에서 $x$의 값이 다음과 같이 변할 때의 평균변화율을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "0\\text{에서 } 3\\text{까지}"
        },
        {
          "no": 2,
          "formula": "1\\text{에서 } 1+\\Delta x\\text{까지}"
        }
      ],
      "tip": "1단계: 공식 $\\frac{f(b)-f(a)}{b-a}$에 대입! 2단계: 바로 계산하면 그 값이 정답! 일차함수의 평균변화율은 항상 기울기와 같습니다.",
      "answer": "(1) 2, (2) 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 대입] $\\frac{f(3)-f(0)}{3-0} = \\frac{7-1}{3} = \\frac{6}{3} = 2$ $\\therefore$ **2**"
          },
          {
            "label": "(2)",
            "content": "[공식 대입] $\\frac{f(1+\\Delta x)-f(1)}{\\Delta x} = \\frac{\\{2(1+\\Delta x)+1\\}-3}{\\Delta x} = \\frac{2\\Delta x}{\\Delta x} = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "학교 프린트 12p 문제 1",
      "tag": "기본",
      "question": "함수 $f(x) = x^2-2x$에서 $x$의 값이 다음과 같이 변할 때의 평균변화율을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "-2\\text{에서 } 3\\text{까지}"
        },
        {
          "no": 2,
          "formula": "a\\text{에서 } a+\\Delta x\\text{까지}"
        }
      ],
      "tip": "1단계: 공식 $\\frac{f(b)-f(a)}{b-a}$에 대입하기! (2)번은 분자를 전개해 정리한 뒤 $\\Delta x$로 약분하여 계산하세요.",
      "answer": "(1) -1, (2) 2a - 2 + \\Delta x",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 대입] $\\frac{f(3)-f(-2)}{3-(-2)} = \\frac{(9-6)-(4+4)}{5} = \\frac{3-8}{5} = -1$ $\\therefore$ **-1**"
          },
          {
            "label": "(2)",
            "content": "[공식 대입] $\\frac{f(a+\\Delta x)-f(a)}{\\Delta x} = \\frac{\\{(a+\\Delta x)^2-2(a+\\Delta x)\\}-(a^2-2a)}{\\Delta x} = \\frac{\\Delta x(2a-2+\\Delta x)}{\\Delta x} = 2a-2+\\Delta x$ $\\therefore$ **$2a-2+\\Delta x$**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "AI 숫자 변형 (03번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "함수 $f(x) = 2x^2+3x$에서 $x$의 값이 다음과 같이 변할 때의 평균변화율을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "1\\text{에서 } 3\\text{까지}"
        },
        {
          "no": 2,
          "formula": "1\\text{에서 } 1+\\Delta x\\text{까지}"
        }
      ],
      "tip": "1단계: 공식 $\\frac{f(b)-f(a)}{b-a}$에 대입하기! (2)번은 분자를 전개 후 $\\Delta x$로 묶어 인수분해·약분하여 대입하세요.",
      "answer": "(1) 11, (2) 2\\Delta x + 7",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 대입] $\\frac{f(3)-f(1)}{3-1} = \\frac{(18+9)-(2+3)}{2} = \\frac{27-5}{2} = 11$ $\\therefore$ **11**"
          },
          {
            "label": "(2)",
            "content": "[공식 대입] $\\frac{f(1+\\Delta x)-f(1)}{\\Delta x} = \\frac{\\{2(1+\\Delta x)^2+3(1+\\Delta x)\\}-5}{\\Delta x} = \\frac{2(\\Delta x)^2+7\\Delta x}{\\Delta x} = 2\\Delta x+7$ $\\therefore$ **$2\\Delta x+7$**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "학교 프린트 13p 예제 2",
      "tag": "핵심유형",
      "question": "미분계수의 정의를 이용하여 함수 $f(x) = 2x^2$의 $x=1$에서의 미분계수를 구하시오.",
      "formula": "f'(1) = \\lim_{x \\to 1} \\frac{f(x)-f(1)}{x-1}",
      "subQuestions": [],
      "tip": "1단계: $f'(1)=\\lim_{x \\to 1} \\frac{f(x)-f(1)}{x-1}$에 대입! 2단계: $\\frac{0}{0}$ 꼴이므로 인수분해 후 약분하여 다시 대입하세요. (미분 공식으로 검산!)",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정의 대입]",
            "content": "$f'(1) = \\lim_{x \\to 1} \\frac{f(x)-f(1)}{x-1} = \\lim_{x \\to 1} \\frac{2x^2-2}{x-1}$ ($x=1$ 대입 시 $\\frac{0}{0}$ 꼴)"
          },
          {
            "label": "[2단계: 인수분해·약분]",
            "content": "분자를 인수분해하여 약분: $\\lim_{x \\to 1} \\frac{2(x-1)(x+1)}{x-1} = \\lim_{x \\to 1} 2(x+1)$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x=1$을 대입하면 $2(1+1) = 4$ (검산: $(2x^2)' = 4x \\implies 4$) $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "학교 프린트 13p 문제 3 (선생님 필기 연계)",
      "tag": "필기",
      "question": "다음 함수의 $x=2$에서의 미분계수를 구하시오. (정의 또는 공식 활용)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = 5x+1"
        },
        {
          "no": 2,
          "formula": "f(x) = -3x^2+4x"
        }
      ],
      "tip": "1단계: 정의 $f'(2)=\\lim_{x \\to 2} \\frac{f(x)-f(2)}{x-2}$에 대입! $\\frac{0}{0}$ 꼴은 인수분해·약분 후 다시 대입하거나 미분 공식으로 검산하세요.",
      "answer": "(1) 5, (2) -8",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[정의 대입] $f'(2) = \\lim_{x \\to 2} \\frac{(5x+1)-11}{x-2} = \\lim_{x \\to 2} \\frac{5(x-2)}{x-2} = 5$ (검산: $f'(x)=5$) $\\therefore$ **5**"
          },
          {
            "label": "(2)",
            "content": "[정의 대입] $f'(2) = \\lim_{x \\to 2} \\frac{(-3x^2+4x)-(-4)}{x-2} = \\lim_{x \\to 2} \\frac{-(3x+2)(x-2)}{x-2} = \\lim_{x \\to 2} -(3x+2) = -8$ (검산: $f'(2) = -6(2)+4 = -8$) $\\therefore$ **-8**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "AI 숫자 변형 (05번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "미분계수의 정의를 이용하여 함수 $f(x) = 3x^2-2x$의 $x=2$에서의 미분계수를 구하시오.",
      "formula": "f'(2) = \\lim_{x \\to 2} \\frac{f(x)-f(2)}{x-2}",
      "subQuestions": [],
      "tip": "1단계: $f'(2)=\\lim_{x \\to 2} \\frac{f(x)-f(2)}{x-2}$에 식을 대입! 2단계: $\\frac{0}{0}$ 꼴이므로 분자를 인수분해하여 $(x-2)$ 약분 후 다시 대입하세요.",
      "answer": "10",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정의 대입]",
            "content": "$f(2) = 3(2)^2-2(2) = 8$이므로 $f'(2) = \\lim_{x \\to 2} \\frac{3x^2-2x-8}{x-2}$ ($x=2$ 대입 시 $\\frac{0}{0}$ 꼴)"
          },
          {
            "label": "[2단계: 인수분해·약분]",
            "content": "분자를 인수분해하여 약분: $\\lim_{x \\to 2} \\frac{(x-2)(3x+4)}{x-2} = \\lim_{x \\to 2} (3x+4)$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x=2$를 대입하면 $3(2)+4 = 10$ (검산: $f'(x) = 6x-2 \\implies f'(2)=10$) $\\therefore$ **10**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "AI 숫자 변형 (06번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "다음 함수의 $x=1$에서의 미분계수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = -2x+3"
        },
        {
          "no": 2,
          "formula": "f(x) = x^2-4x+1"
        }
      ],
      "tip": "1단계: 정의 $f'(1)=\\lim_{x \\to 1} \\frac{f(x)-f(1)}{x-1}$에 대입! 2단계: 약분 후 대입하거나 미분 공식 $(x^n)'=nx^{n-1}$을 적용하세요.",
      "answer": "(1) -2, (2) -2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[정의 대입] $f'(1) = \\lim_{x \\to 1} \\frac{(-2x+3)-1}{x-1} = \\lim_{x \\to 1} \\frac{-2(x-1)}{x-1} = -2$ (검산: $f'(x)=-2$) $\\therefore$ **-2**"
          },
          {
            "label": "(2)",
            "content": "[정의 대입] $f(1)=-2$이므로 $f'(1) = \\lim_{x \\to 1} \\frac{(x^2-4x+1)-(-2)}{x-1} = \\lim_{x \\to 1} \\frac{(x-1)(x-3)}{x-1} = \\lim_{x \\to 1} (x-3) = -2$ $\\therefore$ **-2**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "학교 프린트 14p 예제 4",
      "tag": "핵심유형",
      "question": "함수 $f(x) = |x|$는 $x=0$에서 연속이지만 미분가능하지 않음을 보이시오.",
      "formula": "f(x) = |x| \\quad (x = 0)",
      "subQuestions": [],
      "tip": "절댓값 함수의 경우, $x \\ge 0$, $x < 0$ 구간별로 주어진 함수로 변경해서 풀기! 1단계: $x=0$ 대입으로 연속 확인, 2단계: 각 구간별 미분계수 식에 대입해 우미분계수(1)와 좌미분계수(-1) 비교하기.",
      "answer": "\\lim_{x \\to 0} f(x)=f(0)=0 \\text{ (연속)}, \\text{우미분계수 } 1 \\ne \\text{좌미분계수 } -1 \\text{ (미분불가)}",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성 확인]",
            "content": "$\\lim_{x \\to 0} |x| = 0$이고 $f(0)=0$이므로 $\\lim_{x \\to 0} f(x) = f(0) = 0$ $\\implies$ **$x=0$에서 연속**"
          },
          {
            "label": "[2단계: 구간 분리]",
            "content": "절댓값 기호를 벗겨 구간별 함수로 분리: $x \\ge 0$일 때 $f(x)=x$, $x < 0$일 때 $f(x)=-x$"
          },
          {
            "label": "[3단계: 미분가능성 판정]",
            "content": "우미분계수 $\\lim_{x \\to 0^+} \\frac{x-0}{x-0} = 1$, 좌미분계수 $\\lim_{x \\to 0^-} \\frac{-x-0}{x-0} = -1$로 불일치 ($1 \\ne -1$) $\\implies$ **미분가능하지 않음**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "스스로 해보기 변형 (14p)",
      "tag": "핵심유형",
      "question": "함수 $f(x) = |x-1|$의 $x=1$에서의 연속성과 미분가능성을 조사하시오.",
      "formula": "f(x) = |x-1| \\quad (x = 1)",
      "subQuestions": [],
      "tip": "절댓값 함수의 경우, $x \\ge 1$, $x < 1$ 구간별로 주어진 함수로 변경해서 풀기! 1단계: $x=1$ 대입으로 연속 확인, 2단계: 각 구간의 미분계수 식에 대입해 우·좌미분계수 비교하기.",
      "answer": "연속이지만 미분가능하지 않다 (우미분계수 1 \\ne 좌미분계수 -1)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성 확인]",
            "content": "$\\lim_{x \\to 1} |x-1| = 0$이고 $f(1)=0$이므로 $\\lim_{x \\to 1} f(x) = f(1) = 0$ $\\implies$ **$x=1$에서 연속**"
          },
          {
            "label": "[2단계: 구간 분리]",
            "content": "절댓값 기호를 벗겨 구간별 함수로 분리: $x \\ge 1$일 때 $f(x)=x-1$, $x < 1$일 때 $f(x)=-(x-1)$"
          },
          {
            "label": "[3단계: 미분가능성 판정]",
            "content": "우미분계수 $\\lim_{x \\to 1^+} \\frac{(x-1)-0}{x-1} = 1$, 좌미분계수 $\\lim_{x \\to 1^-} \\frac{-(x-1)-0}{x-1} = -1$로 불일치 ($1 \\ne -1$) $\\therefore$ **연속이지만 미분불가**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "학교 프린트 14p 문제 7",
      "tag": "심화",
      "question": "다음 함수의 $x=1$에서의 연속성과 미분가능성을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = x^2+x"
        },
        {
          "no": 2,
          "formula": "f(x) = |x^2-x|"
        }
      ],
      "tip": "1단계: $x=1$ 대입하여 연속 확인! 2단계: (1)은 식 정리 후 대입, (2) 절댓값 함수는 $x \\ge 1, x < 1$ 구간별 함수로 변경해서 푼 뒤 우·좌미분계수 비교하기.",
      "answer": "(1) 연속이고 미분가능하다, (2) 연속이지만 미분가능하지 않다",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[연속성] $\\lim_{x \\to 1} (x^2+x) = 2 = f(1)$ (연속) \\\\ [미분계수] $\\lim_{x \\to 1} \\frac{(x^2+x)-2}{x-1} = \\lim_{x \\to 1} \\frac{(x-1)(x+2)}{x-1} = 3$ (존재) $\\therefore$ **연속이고 미분가능**"
          },
          {
            "label": "(2)",
            "content": "[연속성] $\\lim_{x \\to 1} |x^2-x| = 0 = f(1)$ (연속) \\\\ [구간 분리] $x \\ge 1$일 때 $x^2-x$, $x < 1$일 때 $-(x^2-x)$ \\\\ [미분 판정] 우미분 $\\lim_{x \\to 1^+} \\frac{x(x-1)}{x-1}=1$, 좌미분 $\\lim_{x \\to 1^-} \\frac{-x(x-1)}{x-1}=-1$ ($1 \\ne -1$) $\\therefore$ **연속이지만 미분불가**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "AI 숫자 변형 (11번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "함수 $f(x) = |x^2-4|$의 $x=2$에서의 연속성과 미분가능성을 조사하시오.",
      "formula": "f(x) = |x^2-4| \\quad (x = 2)",
      "subQuestions": [],
      "tip": "절댓값 함수의 경우, $x \\ge 2$, $x < 2$ 구간별로 주어진 함수로 변경해서 풀기! 1단계: $x=2$ 대입으로 연속 확인, 2단계: 각 구간의 미분계수 식에 대입 후 인수분해·약분하여 우·좌미분계수 판별하기.",
      "answer": "연속이지만 미분가능하지 않다 (우미분계수 4 \\ne 좌미분계수 -4)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성 확인]",
            "content": "$\\lim_{x \\to 2} |x^2-4| = 0$이고 $f(2)=0$이므로 $\\lim_{x \\to 2} f(x) = f(2) = 0$ $\\implies$ **$x=2$에서 연속**"
          },
          {
            "label": "[2단계: 구간 분리]",
            "content": "절댓값 기호를 벗겨 구간별 함수로 분리: $x \\ge 2$일 때 $f(x) = x^2-4$, $x < 2$일 때 $f(x) = -(x^2-4)$"
          },
          {
            "label": "[3단계: 미분가능성 판정]",
            "content": "우미분계수 $\\lim_{x \\to 2^+} \\frac{(x-2)(x+2)}{x-2} = 4$, 좌미분계수 $\\lim_{x \\to 2^-} \\frac{-(x-2)(x+2)}{x-2} = -4$로 불일치 ($4 \\ne -4$) $\\therefore$ **연속이지만 미분불가**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "학교 프린트 15p 예제 1",
      "tag": "핵심유형",
      "question": "도함수의 정의를 이용하여 함수 $f(x) = x^2+3x$의 도함수를 구하시오.",
      "formula": "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x)-f(x)}{\\Delta x}",
      "subQuestions": [],
      "tip": "1단계: 도함수 정의 공식에 식 대입하기! 2단계: 분자를 전개해 $\\Delta x$로 묶어 인수분해 후 약분하고 $\\Delta x=0$을 대입하세요.",
      "answer": "$f'(x) = 2x+3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 공식 대입]",
            "content": "$f'(x) = \\lim_{\\Delta x \\to 0} \\frac{\\{(x+\\Delta x)^2+3(x+\\Delta x)\\}-(x^2+3x)}{\\Delta x}$"
          },
          {
            "label": "[2단계: 전개 및 약분]",
            "content": "분자를 전개해 $\\Delta x$로 묶기: $\\lim_{\\Delta x \\to 0} \\frac{2x\\Delta x+(\\Delta x)^2+3\\Delta x}{\\Delta x} = \\lim_{\\Delta x \\to 0} (2x+\\Delta x+3)$"
          },
          {
            "label": "[3단계: 대입]",
            "content": "$\\Delta x = 0$을 대입하면 $2x+0+3 = 2x+3$ $\\therefore$ **$f'(x) = 2x+3$**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "학교 프린트 15p 스스로 해보기",
      "tag": "기본",
      "question": "도함수의 정의를 이용하여 함수 $f(x) = -2x^2+3x$의 도함수를 구하시오.",
      "formula": "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x)-f(x)}{\\Delta x}",
      "subQuestions": [],
      "tip": "1단계: 도함수 정의 공식에 식을 대입하여 전개! 2단계: $\\frac{0}{0}$ 꼴이므로 분자를 $\\Delta x$로 인수분해하여 약분 후 다시 대입하세요.",
      "answer": "$f'(x) = -4x+3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 공식 대입]",
            "content": "$f'(x) = \\lim_{\\Delta x \\to 0} \\frac{\\{-2(x+\\Delta x)^2+3(x+\\Delta x)\\}-(-2x^2+3x)}{\\Delta x}$"
          },
          {
            "label": "[2단계: 전개 및 약분]",
            "content": "분자를 전개해 $\\Delta x$로 묶기: $\\lim_{\\Delta x \\to 0} \\frac{-4x\\Delta x-2(\\Delta x)^2+3\\Delta x}{\\Delta x} = \\lim_{\\Delta x \\to 0} (-4x-2\\Delta x+3)$"
          },
          {
            "label": "[3단계: 대입]",
            "content": "$\\Delta x = 0$을 대입하면 $-4x-0+3 = -4x+3$ $\\therefore$ **$f'(x) = -4x+3$**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "학교 프린트 15p 문제 1",
      "tag": "기본",
      "question": "도함수 공식을 이용하여 다음 함수의 도함수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = 5x+7"
        },
        {
          "no": 2,
          "formula": "f(x) = -x^2+2x+3"
        }
      ],
      "tip": "도함수 기본 공식: $(c)'=0$, $(x^n)'=nx^{n-1}$에 대입! 상수는 0이 되고 차수를 1 낮추어 바로 계산하면 정답입니다.",
      "answer": "(1) $f'(x) = 5$, (2) $f'(x) = -2x+2$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 대입] $(5x)'=5$, $(7)'=0$이므로 $f'(x) = 5+0 = 5$ $\\therefore$ **$f'(x) = 5$**"
          },
          {
            "label": "(2)",
            "content": "[공식 대입] $(x^n)'=nx^{n-1}$ 적용: $(-x^2)' = -2x$, $(2x)' = 2$, $(3)' = 0$ $\\implies f'(x) = -2x+2$ $\\therefore$ **$f'(x) = -2x+2$**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "AI 숫자 변형 (15번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "도함수 공식을 이용하여 다음 함수의 도함수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = -3x+8"
        },
        {
          "no": 2,
          "formula": "f(x) = 2x^3-4x^2+5x-1"
        }
      ],
      "tip": "도함수 미분 공식 $(x^n)'=nx^{n-1}$에 대입하기! 각 항마다 지수를 곱하고 차수를 1 낮추어 바로 계산하면 정답입니다.",
      "answer": "(1) $f'(x) = -3$, (2) $f'(x) = 6x^2-8x+5$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 대입] $(-3x)'=-3$, $(8)'=0$이므로 $f'(x) = -3+0 = -3$ $\\therefore$ **$f'(x) = -3$**"
          },
          {
            "label": "(2)",
            "content": "[공식 대입] $(x^n)'=nx^{n-1}$ 적용: $(2x^3)' = 6x^2$, $(-4x^2)' = -8x$, $(5x)' = 5$, $(-1)' = 0$ $\\implies f'(x) = 6x^2-8x+5$ $\\therefore$ **$f'(x) = 6x^2-8x+5$**"
          }
        ]
      }
    }
  ]
};
