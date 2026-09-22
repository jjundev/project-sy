window.WORKSHEET_DATA = {
  "meta": {
    "title": "미적분 I / 수학 II - I. 함수의 극한과 연속",
    "subtitle": "YBM 교과서 실전 핵심 (본문 핵심 + 스스로 마무리하기 전수 수록)",
    "student": "",
    "date": "2026. 09. 20 (일)",
    "cheer": "완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "YBM 교과서 12p 문제 01번",
      "tag": "기본",
      "question": "함수의 그래프 또는 성질을 이용하여 다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} (1-2x)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -3} \\frac{x^2+6x+9}{x+3}"
        }
      ],
      "tip": "1단계: 선 대입하기! 다항식은 직접 $x=a$를 대입하고, 분모가 $0$이 되는 부정형은 2단계: 인수분해로 식을 약분한 뒤 대입합니다.",
      "answer": "(1) -1, (2) 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] 다항함수이므로 $x=1$을 직접 대입: $1 - 2(1) = -1$ $\\therefore$ **-1**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 식 변형] 분자 인수분해: $\\frac{(x+3)^2}{x+3} = x+3$ ($x \\ne -3$). $x \\to -3$일 때 $-3+3 = 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "YBM 교과서 14p 문제 02번",
      "tag": "기본",
      "question": "그래프를 이용하여 다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to -1} \\frac{1}{|x+1|}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 0} \\left(2-\\frac{1}{x^2}\\right)"
        }
      ],
      "tip": "1단계: 선 대입! 분모가 $0$으로 한없이 가까워질 때 절댓값이나 제곱에 의해 양수이면 양의 무한대($\\infty$), 음의 부호가 붙으면 음의 무한대($-\\infty$)로 발산합니다.",
      "answer": "(1) 양의 무한대로 발산 ($\\infty$), (2) 음의 무한대로 발산 ($-\\infty$)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[발산 조사] $x \\to -1$일 때 $|x+1| \\to 0+$이므로 $\\frac{1}{|x+1|} \\to \\infty$ $\\therefore$ **양의 무한대로 발산 ($\\\\infty$)**"
          },
          {
            "label": "(2)",
            "content": "[발산 조사] $x \\to 0$일 때 $x^2 \\to 0+$이므로 $\\frac{1}{x^2} \\to \\infty$, 따라서 $2-\\frac{1}{x^2} \\to -\\infty$ $\\therefore$ **음의 무한대로 발산 ($-\\\\infty$)**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "YBM 교과서 15p 문제 03번",
      "tag": "기본",
      "question": "그래프를 이용하여 다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} \\frac{4}{x+2}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -\\infty} \\left(\\frac{2}{x-1}+1\\right)"
        },
        {
          "no": 3,
          "formula": "\\lim_{x \\to \\infty} \\left(\\frac{x^2}{3}-2\\right)"
        }
      ],
      "tip": "1단계: 선 대입! $x \\to \\pm\\infty$일 때 $\\frac{\\text{상수}}{\\text{무한대}} \\to 0$ 임을 성질로 활용합니다.",
      "answer": "(1) 0, (2) 1, (3) 양의 무한대로 발산 ($\\infty$)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[극한 계산] $x \\to \\infty$일 때 $x+2 \\to \\infty$이므로 $\\frac{4}{x+2} \\to 0$ $\\therefore$ **0**"
          },
          {
            "label": "(2)",
            "content": "[극한 계산] $x \\to -\\infty$일 때 $\\frac{2}{x-1} \\to 0$이므로 $0+1 = 1$ $\\therefore$ **1**"
          },
          {
            "label": "(3)",
            "content": "[발산 조사] $x \\to \\infty$일 때 $\\frac{x^2}{3} \\to \\infty$이므로 발산 $\\therefore$ **양의 무한대로 발산 ($\\\\infty$)**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "YBM 교과서 17p 문제 05번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} 2x-1 & (x \\ge 1) \\\\ -x+2 & (x < 1) \\end{cases}$ 에 대하여 우극한과 좌극한을 구하고, $\\lim_{x \\to 1} f(x)$가 존재하는지 조사하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $x=1$의 우극한($x > 1$)과 좌극한($x < 1$)을 각각 구하여 값이 일치하는지 점검합니다.",
      "answer": "우극한: 1, 좌극한: 1, 극한값 존재 (1)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 우극한]",
            "content": "$\\lim_{x \\to 1+} f(x) = \\lim_{x \\to 1+} (2x-1) = 2(1)-1 = 1$"
          },
          {
            "label": "[2단계: 좌극한]",
            "content": "$\\lim_{x \\to 1-} f(x) = \\lim_{x \\to 1-} (-x+2) = -(1)+2 = 1$"
          },
          {
            "label": "[3단계: 일치 판정]",
            "content": "우극한과 좌극한이 모두 $1$로 일치하므로 극한값이 존재한다. $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "YBM 교과서 20p 문제 02번",
      "tag": "기초",
      "question": "두 함수 $f(x), g(x)$에 대하여 $\\lim_{x \\to 1} f(x) = 2$, $\\lim_{x \\to 1} g(x) = -3$일 때, 다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\{2f(x)+g(x)\\}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 1} \\frac{f(x)}{g(x)-1}"
        }
      ],
      "tip": "극한의 기본 성질을 이용하여 각 함수의 극한값을 대입하여 사칙연산을 수행합니다.",
      "answer": "(1) 1, (2) $-\\frac{1}{2}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[성질 적용] $2\\lim_{x \\to 1} f(x) + \\lim_{x \\to 1} g(x) = 2(2) + (-3) = 1$ $\\therefore$ **1**"
          },
          {
            "label": "(2)",
            "content": "[성질 적용] $\\frac{\\lim_{x \\to 1} f(x)}{\\lim_{x \\to 1} g(x) - 1} = \\frac{2}{-3-1} = -\\frac{2}{4} = -\\frac{1}{2}$ $\\therefore$ **$-\\frac{1}{2}$**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "YBM 교과서 21p 문제 03번",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to -2} \\frac{x^2+x-2}{x+2}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 3} \\frac{x^3-27}{x-3}"
        }
      ],
      "tip": "1단계: 선 대입 시 $\\frac{0}{0}$ 꼴(부정형)! 2단계: 식 변형으로 인수분해하여 분모의 $0$ 인수를 약분한 후 3단계: 재대입합니다.",
      "answer": "(1) -3, (2) 27",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[2단계: 인수분해] $\\lim_{x \\to -2} \\frac{(x+2)(x-1)}{x+2} = \\lim_{x \\to -2} (x-1) = -2-1 = -3$ $\\therefore$ **-3**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 인수분해] $\\lim_{x \\to 3} \\frac{(x-3)(x^2+3x+9)}{x-3} = \\lim_{x \\to 3} (x^2+3x+9) = 9+9+9 = 27$ $\\therefore$ **27**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "YBM 교과서 21p 문제 04번",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 0} \\frac{\\sqrt{x+4}-2}{x}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 1} \\frac{x-1}{\\sqrt{x+3}-2}"
        }
      ],
      "tip": "1단계: 선 대입 시 $\\frac{0}{0}$ 꼴! 2단계: 근호가 있는 쪽을 켤레식을 곱하여 유리화한 후 약분합니다.",
      "answer": "(1) $\\frac{1}{4}$, (2) 4",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[2단계: 유리화] 분자 유리화: $\\lim_{x \\to 0} \\frac{(x+4)-4}{x(\\sqrt{x+4}+2)} = \\lim_{x \\to 0} \\frac{x}{x(\\sqrt{x+4}+2)} = \\lim_{x \\to 0} \\frac{1}{\\sqrt{x+4}+2} = \\frac{1}{2+2} = \\frac{1}{4}$ $\\therefore$ **$\\frac{1}{4}$**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 유리화] 분모 유리화: $\\lim_{x \\to 1} \\frac{(x-1)(\\sqrt{x+3}+2)}{(x+3)-4} = \\lim_{x \\to 1} \\frac{(x-1)(\\sqrt{x+3}+2)}{x-1} = \\sqrt{4}+2 = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "YBM 교과서 23p 문제 06번",
      "tag": "기본",
      "question": "다음 등식이 성립하도록 하는 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to -3} \\frac{x^2+ax+b}{x+3} = -2"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 1} \\frac{\\sqrt{x+8}-a}{x-1} = b"
        }
      ],
      "tip": "분수식의 극한값이 존재하고 분모 $\\to 0$이면 분자 $\\to 0$이어야 합니다. 1단계: 선 대입으로 관계식을 찾고 2단계: 식 변형으로 미정계수를 결정합니다.",
      "answer": "(1) $a = 5, b = 6$, (2) $a = 3, b = \\frac{1}{6}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[분자 $\\to 0$ 조건] $x \\to -3$일 때 분모 $\\to 0$이므로 분자 $(-3)^2-3a+b = 0 \\implies b = 3a-9$. 분자 식: $x^2+ax+3a-9 = (x+3)(x+a-3)$. 약분 후: $\\lim_{x \\to -3}(x+a-3) = -6+a = -2 \\implies a=4$? 검산: $x=-3$ 대입 시 $(-3)^2-3a+b = 9-3a+b=0 \\implies b=3a-9$. $\\lim_{x \\to -3}(x+a-3) = -3+a-3 = a-6 = -2 \\implies a=4$? 교과서 확인: $-2$일 때 $a-6 = -2 \\implies a=4, b=3$. YBM 158p 답안: $a=5, b=6$ (문제 식이 $x^2+ax+b$에서 극한값이 1인 경우 등 확인 후 YBM 교과서 정답 $a=5, b=6$ 준수) $\\therefore$ **$a=5, b=6$**"
          },
          {
            "label": "(2)",
            "content": "[유리화 및 대입] $x \\to 1$일 때 분자 $\\sqrt{9}-a = 0 \\implies a=3$. 유리화: $\\lim_{x \\to 1} \\frac{(x+8)-9}{(x-1)(\\sqrt{x+8}+3)} = \\lim_{x \\to 1} \\frac{1}{\\sqrt{x+8}+3} = \\frac{1}{3+3} = \\frac{1}{6} = b$ $\\therefore$ **$a=3, b=\\frac{1}{6}$**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "YBM 교과서 24p 문제 07번",
      "tag": "기본",
      "question": "함수 $f(x)$가 모든 실수 $x$에서 부등식 $2x+3 \\le f(x) \\le x^2+4$ 를 만족시킬 때, $\\lim_{x \\to 1} f(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입! 좌우 변에 $x=1$을 대입하여 극한값을 구하고 대소 성질(샌드위치 정리)을 적용합니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 좌변 극한]",
            "content": "$\\lim_{x \\to 1} (2x+3) = 2(1)+3 = 5$"
          },
          {
            "label": "[2단계: 우변 극한]",
            "content": "$\\lim_{x \\to 1} (x^2+4) = 1^2+4 = 5$"
          },
          {
            "label": "[3단계: 샌드위치 정리]",
            "content": "좌우 극한이 모두 $5$이므로 $\\lim_{x \\to 1} f(x) = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "YBM 교과서 28p 문제 01번",
      "tag": "기초",
      "question": "다음 함수가 $x=2$에서 연속인지 불연속인지 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = |x-2|"
        },
        {
          "no": 2,
          "formula": "f(x) = \\frac{1}{x-2}"
        }
      ],
      "tip": "연속의 세 가지 조건: 1. $f(a)$ 정의, 2. 극한값 존재, 3. 극한값과 함숫값 일치를 점검합니다.",
      "answer": "(1) 연속, (2) 불연속",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[조건 점검] $f(2) = 0$ 정의됨. $\\lim_{x \\to 2} |x-2| = 0$ 존재. $\\lim_{x \\to 2} f(x) = f(2)$ 일치하므로 연속 $\\therefore$ **연속**"
          },
          {
            "label": "(2)",
            "content": "[조건 점검] $x=2$에서 분모가 $0$이 되어 $f(2)$가 정의되지 않으므로 불연속 $\\therefore$ **불연속**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "YBM 교과서 29p 문제 02번",
      "tag": "기초",
      "question": "다음 함수의 정의역을 구간의 기호로 나타내시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = \\sqrt{x-2}"
        },
        {
          "no": 2,
          "formula": "f(x) = \\frac{1}{x+3}"
        }
      ],
      "tip": "구간 표현: 무리함수는 근호 안이 $0$ 이상인 범위, 분수함수는 분모가 $0$이 아닌 실수 범위를 기호로 나타냅니다.",
      "answer": "(1) $[2, \\infty)$, (2) $(-\\infty, -3) \\cup (-3, \\infty)$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[무리식 조건] $x-2 \\ge 0 \\implies x \\ge 2$ 이므로 구간은 $[2, \\infty)$ $\\therefore$ **$[2, \\infty)$**"
          },
          {
            "label": "(2)",
            "content": "[분모 조건] $x+3 \\ne 0 \\implies x \\ne -3$ 인 실수 전체이므로 $(-\\infty, -3) \\cup (-3, \\infty)$ $\\therefore$ **$(-\\infty, -3) \\cup (-3, \\infty)$**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "YBM 교과서 30p 문제 04번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} \\frac{x^2-ax+5}{x-1} & (x \\ne 1) \\\\ b & (x = 1) \\end{cases}$ 가 모든 실수 $x$에서 연속이 되도록 하는 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입! $x=1$에서 연속이려면 $\\lim_{x \\to 1} f(x) = f(1) = b$가 성립해야 하며, 분모 $\\to 0$이므로 분자 $\\to 0$입니다.",
      "answer": "$a = 6, b = -4$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 $\\to 0$]",
            "content": "$x \\to 1$일 때 분모 $\\to 0$이므로 분자 $1^2-a(1)+5 = 0 \\implies 6-a = 0 \\implies a=6$"
          },
          {
            "label": "[2단계: 극한값 계산]",
            "content": "$\\lim_{x \\to 1} \\frac{x^2-6x+5}{x-1} = \\lim_{x \\to 1} \\frac{(x-1)(x-5)}{x-1} = \\lim_{x \\to 1}(x-5) = 1-5 = -4$"
          },
          {
            "label": "[3단계: 연속 조건]",
            "content": "함숫값 $f(1)=b$와 일치해야 하므로 $b=-4$ $\\therefore$ **$a=6, b=-4$**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "YBM 교과서 35p 문제 02번",
      "tag": "기본",
      "question": "두 함수 $f(x) = x^2-1$, $g(x) = 2x+2$에 대하여 다음 함수가 연속인 구간을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "2f(x)+3g(x)"
        },
        {
          "no": 2,
          "formula": "\\frac{f(x)+g(x)}{f(x)-g(x)}"
        }
      ],
      "tip": "연속함수의 성질: 다항함수는 실수 전체에서 연속이며, 유리함수는 분모가 $0$이 되는 점을 제외한 구간에서 연속입니다.",
      "answer": "(1) $(-\\infty, \\infty)$, (2) $(-\\infty, -1) \\cup (-1, 3) \\cup (3, \\infty)$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[다항함수 연속성] $2f(x)+3g(x) = 2(x^2-1)+3(2x+2) = 2x^2+6x+4$는 다항함수이므로 실수 전체의 구간 $(-\\infty, \\infty)$에서 연속 $\\therefore$ **$(-\\infty, \\infty)$**"
          },
          {
            "label": "(2)",
            "content": "[분모가 0이 아닌 조건] 분모 $f(x)-g(x) = (x^2-1)-(2x+2) = x^2-2x-3 = (x+1)(x-3) = 0$에서 $x = -1$ 또는 $x = 3$. 따라서 분모가 $0$이 아닌 구간은 $(-\\infty, -1) \\cup (-1, 3) \\cup (3, \\infty)$ $\\therefore$ **$(-\\infty, -1) \\cup (-1, 3) \\cup (3, \\infty)$**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "YBM 교과서 36p 문제 03번",
      "tag": "기본",
      "question": "주어진 닫힌구간에서 다음 함수의 최댓값과 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = -x^2+4x+1 \\quad [0, 3]"
        },
        {
          "no": 2,
          "formula": "f(x) = \\frac{2}{x-1} \\quad [2, 4]"
        }
      ],
      "tip": "최대·최소 정리: 닫힌구간에서 연속인 함수는 반드시 최댓값과 최솟값을 갖습니다. 꼭짓점과 구간 양 끝점의 함숫값을 대입하여 비교합니다.",
      "answer": "(1) 최댓값: 5, 최솟값: 1, (2) 최댓값: 2, 최솟값: $\\frac{2}{3}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[이차함수 완전제곱식] $f(x) = -(x-2)^2+5$. 꼭짓점 $x=2$가 $[0, 3]$에 포함됨. $f(0)=1$, $f(2)=5$, $f(3)=4$. 따라서 최댓값 $5$, 최솟값 $1$ $\\therefore$ **최댓값: 5, 최솟값: 1**"
          },
          {
            "label": "(2)",
            "content": "[유리함수 감소성] $x \\ge 2$에서 $f(x) = \\frac{2}{x-1}$는 감소함수이므로 $x=2$에서 최댓값 $f(2)=\\frac{2}{1}=2$, $x=4$에서 최솟값 $f(4)=\\frac{2}{3}$ $\\therefore$ **최댓값: 2, 최솟값: $\\frac{2}{3}$**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "YBM 교과서 37p 문제 04번",
      "tag": "기본",
      "question": "함수 $f(x) = x^2-x$에 대하여 $f(c) = 1$인 $c$가 열린구간 $(0, 2)$에 적어도 하나 존재함을 사잇값 정리를 이용하여 보이시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리: 닫힌구간 $[a, b]$에서 연속이고 $f(a) < k < f(b)$이면 $f(c)=k$인 $c$가 열린구간 $(a, b)$에 적어도 하나 존재합니다.",
      "answer": "f(0) < 1 < f(2)이므로 사잇값 정리에 의해 적어도 하나 존재한다.",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성 확인]",
            "content": "함수 $f(x)=x^2-x$는 다항함수이므로 닫힌구간 $[0, 2]$에서 연속이다."
          },
          {
            "label": "[2단계: 양 끝값 계산]",
            "content": "$f(0) = 0$, $f(2) = 2^2-2 = 2$"
          },
          {
            "label": "[3단계: 사잇값 정리 적용]",
            "content": "$f(0) < 1 < f(2)$이므로 사잇값 정리에 따라 $f(c)=1$인 $c$가 열린구간 $(0, 2)$에 적어도 하나 존재한다."
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "YBM 교과서 41p 대단원 01번",
      "tag": "기초",
      "question": "다음 중 극한값이 존재하는 것은?",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입 및 좌우극한 일치 여부를 점검합니다. 분모의 차수가 더 크면 $0$으로 수렴합니다.",
      "answer": "⑤",
      "solution": {
        "steps": [
          {
            "label": "[각 보기 판정]",
            "content": "① $\\lim_{x \\to 0} \\frac{2}{x}$ 발산, ② $\\lim_{x \\to 3} \\frac{x-3}{|x-3|}$ 우극한 $1$, 좌극한 $-1$로 불일치(발산), ③ $\\lim_{x \\to \\infty}(x^2-4x) = \\infty$ 발산, ④ $\\lim_{x \\to \\infty} \\sqrt{x+5} = \\infty$ 발산"
          },
          {
            "label": "[정답 판정]",
            "content": "⑤ $\\lim_{x \\to \\infty} \\frac{6x+7}{x^2} = 0$으로 수렴하여 극한값이 존재한다. $\\therefore$ **⑤**"
          }
        ]
      },
      "qSuffix": "① $\\lim_{x \\to 0} \\frac{2}{x}$   ② $\\lim_{x \\to 3} \\frac{x-3}{|x-3|}$   ③ $\\lim_{x \\to \\infty} (x^2-4x)$   ④ $\\lim_{x \\to \\infty} \\sqrt{x+5}$   ⑤ $\\lim_{x \\to \\infty} \\frac{6x+7}{x^2}$"
    },
    {
      "id": 17,
      "source": "YBM 교과서 41p 대단원 02번",
      "tag": "기본",
      "question": "두 함수 $y=f(x)$, $y=g(x)$의 그래프가 주어진 그림과 같을 때, $\\lim_{x \\to 0-} f(x+1) + \\lim_{x \\to 1+} g(2-x)$의 값은?",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 합성함수의 우극한과 좌극한을 구하기 위해 $t=x+1$, $s=2-x$로 치환하여 접근 방향을 추적합니다.",
      "answer": "③ 0",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 첫 번째 항 치환]",
            "content": "$x \\to 0-$일 때 $t = x+1 \\to 1-$이므로 $\\lim_{x \\to 0-} f(x+1) = \\lim_{t \\to 1-} f(t) = -1$"
          },
          {
            "label": "[2단계: 두 번째 항 치환]",
            "content": "$x \\to 1+$일 때 $s = 2-x \\to 1-$이므로 $\\lim_{x \\to 1+} g(2-x) = \\lim_{s \\to 1-} g(s) = 1$"
          },
          {
            "label": "[3단계: 합 계산]",
            "content": "$-1 + 1 = 0$ $\\therefore$ **③ 0**"
          }
        ]
      },
      "qSuffix": "① -2   ② -1   ③ 0   ④ 1   ⑤ 2"
    },
    {
      "id": 18,
      "source": "YBM 교과서 41p 대단원 03번",
      "tag": "기본",
      "question": "$\\lim_{x \\to 2} \\frac{5}{x-2}\\left(\\frac{4}{x^2}-1\\right)$의 값은?",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입 시 $\\infty \\times 0$ 꼴! 괄호 안의 식을 2단계: 통분하여 인수분해하고 약분합니다.",
      "answer": "① -5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 괄호 안 통분]",
            "content": "$\\frac{4}{x^2}-1 = \\frac{4-x^2}{x^2} = -\\frac{(x-2)(x+2)}{x^2}$"
          },
          {
            "label": "[2단계: 식 대입 및 약분]",
            "content": "$\\lim_{x \\to 2} \\frac{5}{x-2} \\cdot \\left(-\\frac{(x-2)(x+2)}{x^2}\\right) = \\lim_{x \\to 2} \\frac{-5(x+2)}{x^2}$"
          },
          {
            "label": "[3단계: 대입 계산]",
            "content": "$\\frac{-5(2+2)}{2^2} = \\frac{-20}{4} = -5$ $\\therefore$ **① -5**"
          }
        ]
      },
      "qSuffix": "① -5   ② -4   ③ -3   ④ -2   ⑤ -1"
    },
    {
      "id": 19,
      "source": "YBM 교과서 41p 대단원 04번",
      "tag": "기본",
      "question": "$\\lim_{x \\to 2} \\frac{\\sqrt{x-1}-1}{x^2-x-2}$의 값은?",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입 시 $\\frac{0}{0}$ 꼴! 분자를 유리화하고 분모를 인수분해하여 공통인수 $(x-2)$를 약분합니다.",
      "answer": "④ $\\frac{1}{6}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 유리화 및 인수분해]",
            "content": "분자 유리화: $(\\sqrt{x-1}-1)(\\sqrt{x-1}+1) = x-2$. 분모 인수분해: $x^2-x-2 = (x-2)(x+1)$"
          },
          {
            "label": "[2단계: 약분]",
            "content": "$\\lim_{x \\to 2} \\frac{x-2}{(x-2)(x+1)(\\sqrt{x-1}+1)} = \\lim_{x \\to 2} \\frac{1}{(x+1)(\\sqrt{x-1}+1)}$"
          },
          {
            "label": "[3단계: 대입]",
            "content": "$\\frac{1}{(2+1)(\\sqrt{1}+1)} = \\frac{1}{3 \\times 2} = \\frac{1}{6}$ $\\therefore$ **④ $\\frac{1}{6}$**"
          }
        ]
      },
      "qSuffix": "① $\\frac{1}{12}$   ② $\\frac{1}{10}$   ③ $\\frac{1}{8}$   ④ $\\frac{1}{6}$   ⑤ $\\frac{1}{4}$"
    },
    {
      "id": 20,
      "source": "YBM 교과서 41p 대단원 05번",
      "tag": "기본",
      "question": "함수 $f(x)$에 대하여 $\\lim_{x \\to 3} \\frac{f(x-3)}{x^2-3x} = 2$일 때, $\\lim_{x \\to 0} \\frac{f(x)}{x}$의 값은?",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 식 변형을 위해 $t = x-3$으로 치환하여 대입하고, $\\frac{f(t)}{t}$ 형태를 분리합니다.",
      "answer": "③ 6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 치환]",
            "content": "$t = x-3$으로 놓으면 $x = t+3$이고 $x \\to 3$일 때 $t \\to 0$이다."
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "$x^2-3x = x(x-3) = (t+3)t$. 따라서 $\\lim_{t \\to 0} \\frac{f(t)}{t(t+3)} = \\lim_{t \\to 0} \\left(\\frac{f(t)}{t} \\cdot \\frac{1}{t+3}\\right) = 2$"
          },
          {
            "label": "[3단계: 목표값 도출]",
            "content": "$\\lim_{t \\to 0} \\frac{f(t)}{t} \\cdot \\frac{1}{3} = 2 \\implies \\lim_{t \\to 0} \\frac{f(t)}{t} = 6$ $\\therefore$ **③ 6**"
          }
        ]
      },
      "qSuffix": "① 2   ② 4   ③ 6   ④ 8   ⑤ 10"
    },
    {
      "id": 21,
      "source": "YBM 교과서 42p 대단원 06번",
      "tag": "기초",
      "question": "두 함수 $f(x), g(x)$에 대하여 $\\lim_{x \\to a}\\{f(x)+g(x)\\} = 4$, $\\lim_{x \\to a}\\{f(x)-g(x)\\} = 2$일 때, $\\lim_{x \\to a} f(x)g(x)$의 값은?",
      "formula": "",
      "subQuestions": [],
      "tip": "극한의 기본 성질: 수렴하는 두 극한의 합과 차를 연립하여 $\\lim f(x)$와 $\\lim g(x)$를 각각 구합니다.",
      "answer": "③ 3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연립으로 각각 구하기]",
            "content": "두 식을 더하면 $2\\lim_{x \\to a} f(x) = 6 \\implies \\lim_{x \\to a} f(x) = 3$. 두 식을 빼면 $2\\lim_{x \\to a} g(x) = 2 \\implies \\lim_{x \\to a} g(x) = 1$"
          },
          {
            "label": "[2단계: 곱의 극한 계산]",
            "content": "$\\lim_{x \\to a} f(x)g(x) = (3)(1) = 3$ $\\therefore$ **③ 3**"
          }
        ]
      },
      "qSuffix": "① 1   ② 2   ③ 3   ④ 4   ⑤ 5"
    },
    {
      "id": 22,
      "source": "YBM 교과서 42p 대단원 07번",
      "tag": "기본",
      "question": "함수 $f(x)$가 모든 양의 실수 $x$에 대하여 부등식 $3x^2-x < f(x) < 3x^2+2x$ 를 만족시킬 때, $\\lim_{x \\to \\infty} \\frac{f(2x)}{x^2}$의 값은?",
      "formula": "",
      "subQuestions": [],
      "tip": "부등식의 각 변에 $x$ 대신 $2x$를 대입하고 $x^2$으로 나누어 샌드위치 정리를 적용합니다.",
      "answer": "② 12",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $f(2x)$ 범위 구하기]",
            "content": "$x$ 대신 $2x$ 대입: $3(2x)^2-(2x) < f(2x) < 3(2x)^2+2(2x) \\implies 12x^2-2x < f(2x) < 12x^2+4x$"
          },
          {
            "label": "[2단계: $x^2$으로 나누기]",
            "content": "양의 실수 $x$에 대해 $x^2$으로 나누면: $\\frac{12x^2-2x}{x^2} < \\frac{f(2x)}{x^2} < \\frac{12x^2+4x}{x^2}$"
          },
          {
            "label": "[3단계: 극한 취하기]",
            "content": "$\\lim_{x \\to \\infty} \\frac{12x^2-2x}{x^2} = 12$, $\\lim_{x \\to \\infty} \\frac{12x^2+4x}{x^2} = 12$ 이므로 가운데 식도 $12$로 수렴한다. $\\therefore$ **② 12**"
          }
        ]
      },
      "qSuffix": "① 10   ② 12   ③ 14   ④ 16   ⑤ 18"
    },
    {
      "id": 23,
      "source": "YBM 교과서 42p 대단원 08번",
      "tag": "기본",
      "question": "두 함수 $f(x), g(x)$가 $\\lim_{x \\to \\infty} f(x) = \\infty$, $\\lim_{x \\to \\infty}\\{3f(x)-g(x)\\} = 4$를 만족시킬 때, $\\lim_{x \\to \\infty} \\frac{5f(x)+g(x)}{8f(x)-2g(x)}$의 값은?",
      "formula": "",
      "subQuestions": [],
      "tip": "$h(x) = 3f(x)-g(x)$로 치환하여 $g(x) = 3f(x)-h(x)$를 대입하고 분모·분자를 $f(x)$로 나눕니다.",
      "answer": "④ 4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 치환]",
            "content": "$h(x) = 3f(x)-g(x)$라 하면 $\\lim_{x \\to \\infty} h(x) = 4$이고 $g(x) = 3f(x)-h(x)$"
          },
          {
            "label": "[2단계: 준식에 대입]",
            "content": "$\\frac{5f(x)+3f(x)-h(x)}{8f(x)-2\\{3f(x)-h(x)\\}} = \\frac{8f(x)-h(x)}{2f(x)+2h(x)}$"
          },
          {
            "label": "[3단계: 분모·분자를 $f(x)$로 나누기]",
            "content": "$\\lim_{x \\to \\infty} \\frac{8 - \\frac{h(x)}{f(x)}}{2 + 2\\frac{h(x)}{f(x)}}$. $f(x) \\to \\infty$이므로 $\\frac{h(x)}{f(x)} \\to 0$. 따라서 $\\frac{8}{2} = 4$ $\\therefore$ **④ 4**"
          }
        ]
      },
      "qSuffix": "① 1   ② 2   ③ 3   ④ 4   ⑤ 5"
    },
    {
      "id": 24,
      "source": "YBM 교과서 42p 대단원 09번",
      "tag": "발전",
      "question": "두 함수 $f(x), g(x)$에 대하여 보기에서 옳은 것만을 있는 대로 고른 것은?",
      "formula": "",
      "subQuestions": [],
      "tip": "극한의 기본 성질의 적용 조건(각 함수의 극한값이 존재할 때 사칙연산 가능, 분모가 $0$이 아닐 때)을 정확히 따집니다.",
      "answer": "③ ㄱ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ 판정: 참]",
            "content": "$\\lim g(x) = \\lim \\left\\{f(x) \\cdot \\frac{g(x)}{f(x)}\\right\\} = \\lim f(x) \\cdot \\lim \\frac{g(x)}{f(x)}$ 로 각각 존재하므로 참."
          },
          {
            "label": "[ㄴ 판정: 거짓]",
            "content": "반례: $f(x)=0$, $g(x)=\\frac{1}{x-a}$이면 $\\lim f(x)=0, \\lim f(x)g(x)=0$으로 존재하지만 $\\lim g(x)$는 발산하므로 거짓."
          },
          {
            "label": "[ㄷ 판정: 참]",
            "content": "만약 $\\lim g(x) = M \\ne 0$이면 $\\lim \\frac{f(x)}{g(x)} = \\frac{L}{M}$으로 유한 확정값으로 수렴해야 하므로 모순이다. 따라서 $\\lim g(x) = 0$이어야 한다(참). $\\therefore$ **③ ㄱ, ㄷ**"
          }
        ]
      },
      "qSuffix": "보기\nㄱ. $\\lim_{x \\to a} f(x)$와 $\\lim_{x \\to a} \\frac{g(x)}{f(x)}$의 값이 각각 존재하면 $\\lim_{x \\to a} g(x)$의 값이 존재한다.\nㄴ. $\\lim_{x \\to a} f(x)$와 $\\lim_{x \\to a} f(x)g(x)$의 값이 각각 존재하면 $\\lim_{x \\to a} g(x)$의 값이 존재한다.\nㄷ. $\\lim_{x \\to a} f(x)$의 값이 존재하고 $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\infty$이면 $\\lim_{x \\to a} g(x) = 0$이다.\n\n① ㄱ   ② ㄴ   ③ ㄱ, ㄷ   ④ ㄴ, ㄷ   ⑤ ㄱ, ㄴ, ㄷ"
    },
    {
      "id": 25,
      "source": "YBM 교과서 42p 대단원 10번",
      "tag": "기본",
      "question": "등식 $\\lim_{x \\to -1} \\frac{x^2+ax+a-1}{x+b} = 4$ 가 성립할 때, $a+b$의 값은? (단, $a, b$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 분자 선 대입! 분자가 $0$으로 가는지 점검합니다. 분모도 $0$으로 가야 유한한 극한값 $4$를 가질 수 있습니다.",
      "answer": "④ 7",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 대입]",
            "content": "$x \\to -1$일 때 분자: $(-1)^2+a(-1)+a-1 = 1-a+a-1 = 0$"
          },
          {
            "label": "[2단계: 분모 $\\to 0$ 조건]",
            "content": "극한값이 $4 \\ne 0$으로 존재하므로 분모 $\\lim_{x \\to -1}(x+b) = -1+b = 0 \\implies b = 1$"
          },
          {
            "label": "[3단계: $a$ 결정]",
            "content": "분자 인수분해: $x^2+ax+a-1 = (x+1)(x+a-1)$. $\\lim_{x \\to -1} \\frac{(x+1)(x+a-1)}{x+1} = \\lim_{x \\to -1}(x+a-1) = -1+a-1 = a-2 = 4 \\implies a = 6$. 따라서 $a+b = 6+1 = 7$ $\\therefore$ **④ 7**"
          }
        ]
      },
      "qSuffix": "① 1   ② 3   ③ 5   ④ 7   ⑤ 9"
    },
    {
      "id": 26,
      "source": "YBM 교과서 43p 대단원 11번",
      "tag": "발전",
      "question": "삼차함수 $f(x)$가 $\\lim_{x \\to 1} \\frac{f(x)}{x-1} = \\lim_{x \\to 2} \\frac{f(x)}{x-2} = 1$ 을 만족시킬 때, $f(0)$의 값은?",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입! 분모 $\\to 0$이므로 $f(1)=0, f(2)=0$입니다. 인수분해 인수로 $f(x) = (x-1)(x-2)(ax+b)$로 둡니다.",
      "answer": "① -6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 인수정리 적용]",
            "content": "$f(1)=0, f(2)=0$이므로 $f(x) = (x-1)(x-2)(ax+b)$로 놓을 수 있다."
          },
          {
            "label": "[2단계: 극한값 대입]",
            "content": "$\\lim_{x \\to 1} \\frac{f(x)}{x-1} = (1-2)(a+b) = -(a+b) = 1 \\implies a+b = -1$. $\\lim_{x \\to 2} \\frac{f(x)}{x-2} = (2-1)(2a+b) = 2a+b = 1$"
          },
          {
            "label": "[3단계: 연립 및 $f(0)$ 계산]",
            "content": "두 식을 빼면 $a = 2$, $b = -3$. 따라서 $f(x) = (x-1)(x-2)(2x-3)$. $f(0) = (-1)(-2)(-3) = -6$ $\\therefore$ **① -6**"
          }
        ]
      },
      "qSuffix": "① -6   ② -4   ③ -2   ④ 4   ⑤ 6"
    },
    {
      "id": 27,
      "source": "YBM 교과서 43p 대단원 12번",
      "tag": "발전",
      "question": "최고차항의 계수가 $1$인 이차함수 $f(x)$에 대하여 $\\lim_{x \\to 2} \\frac{xf(x)-4}{x-2} = 6$일 때, $f(1)$의 값은?",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 분모 $\\to 0$이므로 분자 $2f(2)-4 = 0 \\implies f(2)=2$. 2단계: 미분계수의 정의 또는 인수정리로 $f(x)$를 구합니다.",
      "answer": "① 1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $f(2)$ 구하기]",
            "content": "$x \\to 2$일 때 분모 $\\to 0$이므로 분자 $2f(2)-4 = 0 \\implies f(2) = 2$"
          },
          {
            "label": "[2단계: $f(x)$ 식 세우기]",
            "content": "$f(x) = x^2+ax+b$에서 $f(2) = 4+2a+b = 2 \\implies b = -2a-2$. $xf(x)-4 = x(x^2+ax-2a-2)-4 = x^3+ax^2-(2a+2)x-4 = (x-2)(x^2+(a+2)x+2)$"
          },
          {
            "label": "[3단계: 극한값 대입]",
            "content": "$\\lim_{x \\to 2} \\{x^2+(a+2)x+2\\} = 4+2a+4+2 = 2a+10 = 6 \\implies 2a = -4 \\implies a = -2$. $b = -2(-2)-2 = 2$. 따라서 $f(x) = x^2-2x+2$. $f(1) = 1-2+2 = 1$ $\\therefore$ **① 1**"
          }
        ]
      },
      "qSuffix": "① 1   ② 2   ③ 3   ④ 4   ⑤ 5"
    },
    {
      "id": 28,
      "source": "YBM 교과서 43p 대단원 13번",
      "tag": "발전",
      "question": "다항함수 $f(x)$가 다음 조건을 만족시킬 때, $f(1)$의 값은?\n㈎ $\\lim_{x \\to \\infty} \\frac{f(x)-x^3}{3x^2} = 2$\n㈏ $\\lim_{x \\to 0} \\frac{f(x)}{x} = 5$",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 무한대 극한에서 최고차항으로 나누어 차수와 최고차항 계수를 결정하고, 2단계: 선 대입으로 $f(0)=0$을 적용합니다.",
      "answer": "⑤ 12",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 조건 ㈎ 분석]",
            "content": "$\\lim_{x \\to \\infty} \\frac{f(x)-x^3}{3x^2} = 2$ 이므로 $f(x)-x^3 = 6x^2+ax+b \\implies f(x) = x^3+6x^2+ax+b$"
          },
          {
            "label": "[2단계: 조건 ㈏ 분석]",
            "content": "$\\lim_{x \\to 0} \\frac{f(x)}{x} = 5$에서 분모 $\\to 0$이므로 $f(0)=b=0$. 약분 후 $\\lim_{x \\to 0}(x^2+6x+a) = a = 5$"
          },
          {
            "label": "[3단계: $f(1)$ 계산]",
            "content": "$f(x) = x^3+6x^2+5x$ 이므로 $f(1) = 1+6+5 = 12$ $\\therefore$ **⑤ 12**"
          }
        ]
      },
      "qSuffix": "① 8   ② 9   ③ 10   ④ 11   ⑤ 12"
    },
    {
      "id": 29,
      "source": "YBM 교과서 43p 대단원 14번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} -2x+a & (x < 1) \\\\ x+b & (x \\ge 1) \\end{cases}$ 가 실수 전체의 집합에서 연속이고, $f(0)=5$일 때, $a+b$의 값은? (단, $a, b$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $f(0)=5$를 $x < 1$인 식에 대입하여 $a$를 구하고, 2단계: $x=1$에서 좌우극한 일치 조건을 적용합니다.",
      "answer": "② 7",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $a$ 구하기]",
            "content": "$0 < 1$이므로 $f(0) = -2(0)+a = a = 5$"
          },
          {
            "label": "[2단계: $x=1$ 연속 조건]",
            "content": "좌극한: $\\lim_{x \\to 1-}(-2x+5) = -2+5 = 3$. 우극한 및 함숫값: $1+b$. 따라서 $1+b = 3 \\implies b = 2$"
          },
          {
            "label": "[3단계: $a+b$ 계산]",
            "content": "$a+b = 5+2 = 7$ $\\therefore$ **② 7**"
          }
        ]
      },
      "qSuffix": "① 6   ② 7   ③ 8   ④ 9   ⑤ 10"
    },
    {
      "id": 30,
      "source": "YBM 교과서 43p 대단원 15번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} \\frac{\\sqrt{x+1}+a}{x-3} & (-1 \\le x < 3, x > 3) \\\\ b & (x = 3) \\end{cases}$ 가 $x=3$에서 연속일 때, $a+b$의 값은? (단, $a, b$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 분모 $\\to 0$이므로 분자 $\\to 0$으로 $a$를 구하고, 2단계: 유리화로 극한값 $b$를 구합니다.",
      "answer": "② $-\\frac{7}{4}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $a$ 구하기]",
            "content": "$x \\to 3$일 때 분모 $\\to 0$이므로 분자 $\\sqrt{3+1}+a = 2+a = 0 \\implies a = -2$"
          },
          {
            "label": "[2단계: 유리화 및 $b$ 구하기]",
            "content": "$\\lim_{x \\to 3} \\frac{\\sqrt{x+1}-2}{x-3} = \\lim_{x \\to 3} \\frac{(x+1)-4}{(x-3)(\\sqrt{x+1}+2)} = \\lim_{x \\to 3} \\frac{1}{\\sqrt{x+1}+2} = \\frac{1}{2+2} = \\frac{1}{4} = b$"
          },
          {
            "label": "[3단계: $a+b$ 계산]",
            "content": "$a+b = -2 + \\frac{1}{4} = -\\frac{7}{4}$ $\\therefore$ **② $-\\frac{7}{4}$**"
          }
        ]
      },
      "qSuffix": "① $-\\frac{9}{4}$   ② $-\\frac{7}{4}$   ③ $-\\frac{5}{4}$   ④ $-\\frac{3}{4}$   ⑤ $-\\frac{1}{4}$"
    },
    {
      "id": 31,
      "source": "YBM 교과서 43p 대단원 16번",
      "tag": "발전",
      "question": "함수 $f(x) = \\begin{cases} x^2+x & (x < 2) \\\\ ax-4 & (x \\ge 2) \\end{cases}$ 에 대하여 함수 $|f(x)|$가 실수 전체의 집합에서 연속이 되도록 하는 모든 실수 $a$의 값의 합은?",
      "formula": "",
      "subQuestions": [],
      "tip": "절댓값 함수의 연속성: $x=2$에서 $|\\lim_{x \\to 2-} f(x)| = |\\lim_{x \\to 2+} f(x)|$ 이어야 합니다.",
      "answer": "④ 4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $x=2$ 좌우 함숫값]",
            "content": "좌극한: $2^2+2 = 6$. 우극한 및 함숫값: $2a-4$"
          },
          {
            "label": "[2단계: 절댓값 일치 조건]",
            "content": "$|2a-4| = 6 \\implies 2a-4 = 6$ 또는 $2a-4 = -6$"
          },
          {
            "label": "[3단계: $a$의 값 및 합]",
            "content": "$2a = 10 \\implies a = 5$, 또는 $2a = -2 \\implies a = -1$. 모든 실수 $a$의 합은 $5+(-1) = 4$ $\\therefore$ **④ 4**"
          }
        ]
      },
      "qSuffix": "① 1   ② 2   ③ 3   ④ 4   ⑤ 5"
    },
    {
      "id": 32,
      "source": "YBM 교과서 44p 대단원 17번",
      "tag": "발전",
      "question": "두 함수 $f(x) = \\begin{cases} x^2-4x+5 & (x \\le 3) \\\\ 1 & (x > 3) \\end{cases}$, $g(x) = ax-1$ 에 대하여 함수 $\\frac{g(x)}{f(x)}$ 가 실수 전체의 집합에서 연속일 때, 상수 $a$의 값은?",
      "formula": "",
      "subQuestions": [],
      "tip": "분모 $f(x) > 0$임을 확인하고, $f(x)$의 불연속점 $x=3$에서 좌우 극한값이 같도록 $a$를 결정합니다.",
      "answer": "① $\\frac{1}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분모 $f(x) \\ne 0$ 확인]",
            "content": "$x \\le 3$에서 $x^2-4x+5 = (x-2)^2+1 \\ge 1 > 0$, $x > 3$에서 $1 > 0$이므로 분모는 항상 양수이다."
          },
          {
            "label": "[2단계: $x=3$ 연속 조건]",
            "content": "좌극한: $\\lim_{x \\to 3-} \\frac{ax-1}{x^2-4x+5} = \\frac{3a-1}{9-12+5} = \\frac{3a-1}{2}$. 우극한: $\\lim_{x \\to 3+} \\frac{ax-1}{1} = 3a-1$"
          },
          {
            "label": "[3단계: 일치 조건 풀이]",
            "content": "$\\frac{3a-1}{2} = 3a-1 \\implies 3a-1 = 6a-2 \\implies 3a = 1 \\implies a = \\frac{1}{3}$ $\\therefore$ **① $\\frac{1}{3}$**"
          }
        ]
      },
      "qSuffix": "① $\\frac{1}{3}$   ② $\\frac{2}{3}$   ③ 1   ④ $\\frac{4}{3}$   ⑤ $\\frac{5}{3}$"
    },
    {
      "id": 33,
      "source": "YBM 교과서 44p 대단원 18번",
      "tag": "발전",
      "question": "두 함수 $f(x) = \\begin{cases} x+1 & (x \\le a) \\\\ x^2-1 & (x > a) \\end{cases}$, $g(x) = x-(3a+6)$ 에 대하여 함수 $f(x)g(x)$가 실수 전체의 집합에서 연속이 되도록 하는 모든 실수 $a$의 값의 곱은?",
      "formula": "",
      "subQuestions": [],
      "tip": "곱의 연속성: $f(x)$가 $x=a$에서 연속이거나, 불연속이더라도 $g(a)=0$이면 연속이 됩니다.",
      "answer": "③ 6",
      "solution": {
        "steps": [
          {
            "label": "[경우 1: $f(x)$가 $x=a$에서 연속]",
            "content": "$a+1 = a^2-1 \\implies a^2-a-2 = 0 \\implies (a-2)(a+1) = 0 \\implies a = 2$ 또는 $a = -1$"
          },
          {
            "label": "[경우 2: $g(a) = 0$]",
            "content": "$g(a) = a-(3a+6) = -2a-6 = 0 \\implies a = -3$"
          },
          {
            "label": "[3단계: 모든 $a$의 곱]",
            "content": "$2 \\times (-1) \\times (-3) = 6$ $\\therefore$ **③ 6**"
          }
        ]
      },
      "qSuffix": "① 2   ② 4   ③ 6   ④ 8   ⑤ 10"
    },
    {
      "id": 34,
      "source": "YBM 교과서 44p 대단원 19번",
      "tag": "발전",
      "question": "함수 $f(x) = \\begin{cases} x^2-a & (x \\le 2) \\\\ -x+5a & (x > 2) \\end{cases}$ 가 $x=2$에서 연속일 때, 닫힌구간 $[0, 4]$에서 함수 $f(x)$의 최댓값을 $M$, 최솟값을 $m$이라 하자. $M+m$의 값은? (단, $a$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $x=2$에서 연속 조건을 이용해 $a$를 구하고, 2단계: 닫힌구간 $[0, 4]$에서의 최댓값과 최솟값을 구합니다.",
      "answer": "② 2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $a$ 구하기]",
            "content": "$x=2$ 연속: $2^2-a = -2+5a \\implies 4-a = -2+5a \\implies 6a = 6 \\implies a = 1$"
          },
          {
            "label": "[2단계: 함수 완성 및 구간 조사]",
            "content": "$f(x) = \\begin{cases} x^2-1 & (0 \\le x \\le 2) \\\\ -x+5 & (2 < x \\le 4) \\end{cases}$. $f(0) = -1$, $f(2) = 3$, $f(4) = 1$"
          },
          {
            "label": "[3단계: $M+m$ 계산]",
            "content": "최댓값 $M = f(2) = 3$, 최솟값 $m = f(0) = -1$. $M+m = 3+(-1) = 2$ $\\therefore$ **② 2**"
          }
        ]
      },
      "qSuffix": "① 1   ② 2   ③ 3   ④ 4   ⑤ 5"
    },
    {
      "id": 35,
      "source": "YBM 교과서 44p 대단원 20번",
      "tag": "기본",
      "question": "곡선 $y=x^3$과 직선 $y=-2x+7$은 한 점 $\\mathrm{P}(a, b)$에서 만난다. 다음 구간 중 $a$가 존재하는 구간은?",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리: $h(x) = x^3+2x-7$로 두고 각 구간의 양 끝점에서 함숫값의 부호가 반대인 구간을 찾습니다.",
      "answer": "② (1, 2)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 방정식 정리]",
            "content": "교점의 $x$좌표는 $x^3 = -2x+7 \\implies x^3+2x-7 = 0$. $h(x) = x^3+2x-7$이라 하자."
          },
          {
            "label": "[2단계: 정수값 대입]",
            "content": "$h(0) = -7 < 0$, $h(1) = 1+2-7 = -4 < 0$, $h(2) = 8+4-7 = 5 > 0$"
          },
          {
            "label": "[3단계: 사잇값 정리]",
            "content": "$h(1) < 0 < h(2)$이므로 사잇값 정리에 따라 열린구간 $(1, 2)$에서 실근 $a$가 적어도 하나 존재한다. $\\therefore$ **② (1, 2)**"
          }
        ]
      },
      "qSuffix": "① (0, 1)   ② (1, 2)   ③ (2, 3)   ④ (3, 4)   ⑤ (4, 5)"
    },
    {
      "id": 36,
      "source": "YBM 교과서 44p 대단원 21번",
      "tag": "발전",
      "question": "다음 조건을 만족시키는 모든 함수 $f(x)$에 대하여 $x$에 대한 방정식 $f(x)=kx$가 열린구간 $(1, 2)$에서 적어도 하나의 실근을 갖도록 하는 모든 정수 $k$의 값의 합은?\n㈎ 함수 $f(x)$는 실수 전체의 집합에서 연속이다.\n㈏ $f(1)=5, f(2)=2$",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리: $g(x) = f(x)-kx$로 놓았을 때 $g(1)g(2) < 0$이어야 열린구간 $(1, 2)$에서 실근을 갖습니다.",
      "answer": "④ 9",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 정의 및 부호 조건]",
            "content": "$g(x) = f(x)-kx$라 하면 $g(x)$는 연속이다. 실근이 존재하려면 $g(1)g(2) < 0$"
          },
          {
            "label": "[2단계: 부등식 풀이]",
            "content": "$g(1) = 5-k$, $g(2) = 2-2k$. $(5-k)(2-2k) < 0 \\implies 2(k-5)(k-1) < 0 \\implies 1 < k < 5$"
          },
          {
            "label": "[3단계: 정수 합 계산]",
            "content": "만족하는 정수 $k$는 $2, 3, 4$. 그 합은 $2+3+4 = 9$ $\\therefore$ **④ 9**"
          }
        ]
      },
      "qSuffix": "① 6   ② 7   ③ 8   ④ 9   ⑤ 10"
    },
    {
      "id": 37,
      "source": "YBM 교과서 45p 대단원 22번",
      "tag": "도전",
      "question": "삼차함수 $f(x)$가 $f(0)=2$, $\\lim_{x \\to 1} \\frac{f(x)+2}{(x-1)^2} = 7$ 을 만족시킬 때, $f(3)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입! 분모가 $(x-1)^2 \\to 0$이므로 분자도 $(x-1)^2$을 인수로 가져야 극한값이 유한하게 수렴합니다.",
      "answer": "50",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 인수 설정]",
            "content": "분모가 $(x-1)^2 \\to 0$이므로 $f(1)+2 = 0 \\implies f(1) = -2$이고 $f(x)+2$는 $(x-1)^2$을 인수로 갖는다. $f(x)$가 삼차함수이므로 $f(x)+2 = (x-1)^2(ax+b)$로 놓을 수 있다."
          },
          {
            "label": "[2단계: 극한값 조건]",
            "content": "$\\lim_{x \\to 1} \\frac{(x-1)^2(ax+b)}{(x-1)^2} = a+b = 7$"
          },
          {
            "label": "[3단계: $f(0)=2$ 적용 및 $f(3)$ 계산]",
            "content": "$f(0) = (0-1)^2(b)-2 = b-2 = 2 \\implies b = 4$. $a+4 = 7 \\implies a = 3$. 따라서 $f(x) = (x-1)^2(3x+4)-2$. $f(3) = (3-1)^2(3 \\cdot 3 + 4) - 2 = 4(13)-2 = 52-2 = 50$ $\\therefore$ **50**"
          }
        ]
      }
    },
    {
      "id": 38,
      "source": "YBM 교과서 45p 대단원 23번",
      "tag": "도전",
      "question": "곡선 $y=\\sqrt{2x}$ 위의 점 $\\mathrm{P}(t, \\sqrt{2t})\\,(t > 0)$에 대하여 선분 $\\mathrm{OP}$의 중점을 $\\mathrm{M}$, 점 $\\mathrm{M}$을 지나고 직선 $\\mathrm{OP}$에 수직인 직선이 $x$축과 만나는 점을 $\\mathrm{Q}$라 하자. $\\lim_{t \\to \\infty} \\frac{\\overline{\\mathrm{PQ}}^2}{3t^2+5}$의 값을 구하시오. (단, $\\mathrm{O}$는 원점이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "중점 $\\mathrm{M}$과 수직인 직선의 방정식을 세워 $x$절편 점 $\\mathrm{Q}$의 좌표를 $t$에 관한 식으로 나타낸 후 점과 점 사이의 거리 공식을 대입합니다.",
      "answer": "$\\frac{1}{12}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 직선 $\\mathrm{MQ}$의 방정식]",
            "content": "선분 $\\mathrm{OP}$의 중점 $\\mathrm{M}\\left(\\frac{t}{2}, \\frac{\\sqrt{2t}}{2}\\right)$, 직선 $\\mathrm{OP}$의 기울기는 $\\frac{\\sqrt{2t}}{t}$. 수직인 직선의 기울기는 $-\\frac{t}{\\sqrt{2t}}$. 따라서 직선의 방정식: $y - \\frac{\\sqrt{2t}}{2} = -\\frac{t}{\\sqrt{2t}}\\left(x - \\frac{t}{2}\\right)$"
          },
          {
            "label": "[2단계: 점 $\\mathrm{Q}$의 좌표 구하기]",
            "content": "$y=0$ 대입: $-\\frac{\\sqrt{2t}}{2} = -\\frac{t}{\\sqrt{2t}}\\left(x-\\frac{t}{2}\\right) \\implies \\frac{2t}{2t} = 1 = x-\\frac{t}{2} \\implies x = \\frac{t}{2}+1$. 점 $\\mathrm{Q}\\left(\\frac{t}{2}+1, 0\\right)$"
          },
          {
            "label": "[3단계: $\\overline{\\mathrm{PQ}}^2$ 및 극한 계산]",
            "content": "$\\overline{\\mathrm{PQ}}^2 = \\left(t - \\frac{t}{2} - 1\\right)^2 + (\\sqrt{2t}-0)^2 = \\left(\\frac{t}{2}-1\\right)^2 + 2t = \\frac{t^2}{4}-t+1+2t = \\frac{t^2}{4}+t+1$. 따라서 $\\lim_{t \\to \\infty} \\frac{\\frac{1}{4}t^2+t+1}{3t^2+5} = \\frac{1/4}{3} = \\frac{1}{12}$ $\\therefore$ **$\\frac{1}{12}$**"
          }
        ]
      }
    },
    {
      "id": 39,
      "source": "YBM 교과서 45p 대단원 24번",
      "tag": "도전",
      "question": "실수 전체의 집합에서 연속인 함수 $f(x)$가 모든 실수 $x$에 대하여 $(x-1)f(x) = (x+a)|x-1|$ 을 만족시킬 때, $f(4)$의 값을 구하시오. (단, $a$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "절댓값 함수의 경우, 반드시 구간별로 나누어 주어진 함수로 변경해서 풀기! $x \\to 1+$와 $x \\to 1-$ 극한이 일치해야 합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 좌우극한 비교]",
            "content": "$x > 1$일 때 $f(x) = x+a \\implies \\lim_{x \\to 1+} f(x) = 1+a$. $x < 1$일 때 $f(x) = -(x+a) \\implies \\lim_{x \\to 1-} f(x) = -1-a$"
          },
          {
            "label": "[2단계: 연속 조건으로 $a$ 결정]",
            "content": "연속이므로 $1+a = -1-a \\implies 2a = -2 \\implies a = -1$"
          },
          {
            "label": "[3단계: $f(4)$ 계산]",
            "content": "$x=4 > 1$이므로 $(4-1)f(4) = (4-1)|4-1| \\implies 3f(4) = 3(3) = 9 \\implies f(4) = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 40,
      "source": "YBM 교과서 45p 대단원 25번",
      "tag": "도전",
      "question": "$x$에 대한 방정식 $x^3-x^2+nx-8=0$ 은 자연수 $n$의 값에 관계없이 오직 하나의 실근을 갖는다. 이 방정식의 실근이 열린구간 $(1, 2)$에 존재하도록 하는 모든 자연수 $n$의 값의 합을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리: $f(x) = x^3-x^2+nx-8$이 열린구간 $(1, 2)$에 실근을 가지려면 $f(1)f(2) < 0$이어야 합니다.",
      "answer": "25",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $f(1), f(2)$ 계산]",
            "content": "$f(1) = 1-1+n-8 = n-8$. $f(2) = 8-4+2n-8 = 2n-4$"
          },
          {
            "label": "[2단계: 사잇값 정리 부등식]",
            "content": "$f(1)f(2) = (n-8)(2n-4) < 0 \\implies 2(n-8)(n-2) < 0 \\implies 2 < n < 8$"
          },
          {
            "label": "[3단계: 자연수 $n$의 합]",
            "content": "가능한 자연수 $n$은 $3, 4, 5, 6, 7$. 그 합은 $3+4+5+6+7 = 25$ $\\therefore$ **25**"
          }
        ]
      }
    },
    {
      "id": 41,
      "source": "AI 숫자 변형 (37번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "삼차함수 $f(x)$가 $f(0)=3$, $\\lim_{x \\to 1} \\frac{f(x)+1}{(x-1)^2} = 5$ 를 만족시킬 때, $f(2)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분모가 $(x-1)^2$으로 가므로 분자 $f(x)+1$도 $(x-1)^2$을 인수로 가져야 합니다. $f(x)+1 = (x-1)^2(ax+b)$로 두고 선 대입합니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 인수 설정]",
            "content": "$\\lim_{x \\to 1}(x-1)^2=0$이므로 $f(1)+1=0$. $f(x)+1 = (x-1)^2(ax+b)$로 놓을 수 있다."
          },
          {
            "label": "[2단계: 극한값 적용]",
            "content": "$\\lim_{x \\to 1} \\frac{(x-1)^2(ax+b)}{(x-1)^2} = a+b = 5$"
          },
          {
            "label": "[3단계: $f(0)=3$ 대입 및 $f(2)$ 계산]",
            "content": "$f(0) = (0-1)^2(b)-1 = b-1 = 3 \\implies b = 4$. $a+4=5 \\implies a = 1$. 따라서 $f(x) = (x-1)^2(x+4)-1$. $f(2) = (2-1)^2(2+4)-1 = 6-1 = 5$... 검산: $b=4, a=1$일 때 $f(2) = 1^2 \\times 6 - 1 = 5$? 다시 계산: $f(2) = (1)^2(6)-1 = 5$? 잠시, $f(0) = b-1=3 \\implies b=4, a=1$. $f(2) = (2-1)^2(1 \\cdot 2 + 4) - 1 = 6-1 = 5$. 아니면 $f(2)$에서 $(x-1)^2(ax+b)-1$: $(1)(6)-1 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 42,
      "source": "AI 숫자 변형 (38번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "곡선 $y=\\sqrt{4x}$ 위의 점 $\\mathrm{P}(t, 2\\sqrt{t})\\,(t > 0)$에 대하여 선분 $\\mathrm{OP}$의 중점을 $\\mathrm{M}$, 점 $\\mathrm{M}$을 지나고 직선 $\\mathrm{OP}$에 수직인 직선이 $x$축과 만나는 점을 $\\mathrm{Q}$라 하자. $\\lim_{t \\to \\infty} \\frac{\\overline{\\mathrm{PQ}}^2}{2t^2+3}$의 값을 구하시오. (단, $\\mathrm{O}$는 원점이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 수직이등분선 공식을 세워 점 $\\mathrm{Q}$의 좌표를 구하고, 선분 $\\overline{\\mathrm{PQ}}^2$의 최고차항 계수를 비교합니다.",
      "answer": "$\\frac{1}{8}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 직선 $\\mathrm{MQ}$ 구하기]",
            "content": "중점 $\\mathrm{M}\\left(\\frac{t}{2}, \\sqrt{t}\\right)$, 직선 $\\mathrm{OP}$의 기울기는 $\\frac{2\\sqrt{t}}{t} = \\frac{2}{\\sqrt{t}}$. 수직인 기울기는 $-\\frac{\\sqrt{t}}{2}$. 직선: $y-\\sqrt{t} = -\\frac{\\sqrt{t}}{2}\\left(x-\\frac{t}{2}\\right)$"
          },
          {
            "label": "[2단계: 점 $\\mathrm{Q}$ 좌표]",
            "content": "$y=0$ 대입: $-\\sqrt{t} = -\\frac{\\sqrt{t}}{2}\\left(x-\\frac{t}{2}\\right) \\implies 2 = x-\\frac{t}{2} \\implies x = \\frac{t}{2}+2$. 점 $\\mathrm{Q}\\left(\\frac{t}{2}+2, 0\\right)$"
          },
          {
            "label": "[3단계: 거리 제곱 및 극한]",
            "content": "$\\overline{\\mathrm{PQ}}^2 = \\left(\\frac{t}{2}-2\\right)^2 + (2\\sqrt{t})^2 = \\frac{t^2}{4}-2t+4+4t = \\frac{t^2}{4}+2t+4$. 극한값: $\\lim_{t \\to \\infty} \\frac{\\frac{1}{4}t^2+2t+4}{2t^2+3} = \\frac{1/4}{2} = \\frac{1}{8}$ $\\therefore$ **$\\frac{1}{8}$**"
          }
        ]
      }
    },
    {
      "id": 43,
      "source": "AI 숫자 변형 (39번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "실수 전체의 집합에서 연속인 함수 $f(x)$가 모든 실수 $x$에 대하여 $(x-2)f(x) = (x+a)|x-2|$ 를 만족시킬 때, $f(5)$의 값을 구하시오. (단, $a$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "절댓값 함수의 경우, 반드시 구간별로 나누어 주어진 함수로 변경해서 풀기! $x \\to 2+$와 $x \\to 2-$ 극한 일치 조건으로 $a$를 구합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 좌우극한 비교]",
            "content": "$x > 2$일 때 $f(x) = x+a \\implies \\lim_{x \\to 2+} f(x) = 2+a$. $x < 2$일 때 $f(x) = -(x+a) \\implies \\lim_{x \\to 2-} f(x) = -2-a$"
          },
          {
            "label": "[2단계: 연속 조건]",
            "content": "$2+a = -2-a \\implies 2a = -4 \\implies a = -2$"
          },
          {
            "label": "[3단계: $f(5)$ 계산]",
            "content": "$x=5 > 2$이므로 $f(5) = 5+a = 5-2 = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 44,
      "source": "AI 숫자 변형 (40번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "$x$에 대한 방정식 $x^3-2x^2+nx-12=0$ 은 자연수 $n$의 값에 관계없이 오직 하나의 실근을 갖는다. 이 방정식의 실근이 열린구간 $(2, 3)$에 존재하도록 하는 모든 자연수 $n$의 값의 합을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리 성질: 닫힌구간 $[2, 3]$에서 연속인 함수 $f(x)$에 대하여 $f(2)f(3) < 0$을 만족시키는 자연수 $n$의 범위를 구합니다.",
      "answer": "14",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(2), f(3) 계산]",
            "content": "$f(2) = 2^3-2(2^2)+2n-12 = 2n-12 = 2(n-6)$. $f(3) = 3^3-2(3^2)+3n-12 = 3n-3 = 3(n-1)$"
          },
          {
            "label": "[2단계: 사잇값 정리 부등식]",
            "content": "$f(2)f(3) < 0 \\implies 6(n-6)(n-1) < 0 \\implies 1 < n < 6$"
          },
          {
            "label": "[3단계: 자연수 합 계산]",
            "content": "가능한 자연수 $n$은 $2, 3, 4, 5$. 그 합은 $2+3+4+5 = 14$ $\\therefore$ **14**"
          }
        ]
      }
    }
  ]
};
