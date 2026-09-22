window.WORKSHEET_DATA = {
  "meta": {
    "title": "미적분 I / 수학 II - I. 함수의 극한과 연속",
    "subtitle": "지학사 교과서 실전 핵심 (스스로 점검하기 + 대단원 마무리평가 전수 수록)",
    "student": "",
    "date": "2026. 09. 20 (일)",
    "cheer": "완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "지학사 교과서 20p 02번",
      "tag": "기본",
      "question": "함수의 그래프를 이용하여 다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 2} (x^2-x+2)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 1} \\frac{x^3-1}{x-1}"
        },
        {
          "no": 3,
          "formula": "\\lim_{x \\to \\infty} \\left(\\frac{1}{x}+1\\right)"
        },
        {
          "no": 4,
          "formula": "\\lim_{x \\to -\\infty} \\left(\\frac{1}{5}x^2-3x\\right)"
        }
      ],
      "tip": "1단계: 선 대입하기! 분모가 0이 되지 않는 다항식이나 유리식은 $x=a$를 직접 선 대입하고, $\\frac{0}{0}$ 꼴은 2단계: 식 변형으로 약분합니다.",
      "answer": "(1) 4, (2) 3, (3) 1, (4) 발산 (양의 무한대, $\\infty$)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x=2$ 대입: $2^2-2+2 = 4$ $\\therefore$ **4**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 식 변형] $\\lim_{x \\to 1} \\frac{(x-1)(x^2+x+1)}{x-1} = \\lim_{x \\to 1}(x^2+x+1) = 3$ $\\therefore$ **3**"
          },
          {
            "label": "(3)",
            "content": "[1단계: 선 대입] $x \\to \\infty$일 때 $\\frac{1}{x} \\to 0$이므로 $0+1 = 1$ $\\therefore$ **1**"
          },
          {
            "label": "(4)",
            "content": "[식 변형] $x \\to -\\infty$일 때 $\\frac{1}{5}x^2-3x = x\\left(\\frac{1}{5}x-3\\right) \\to (-\\infty)(-\\infty) = \\infty$ $\\therefore$ **발산 ($\\\\infty$)**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "지학사 교과서 20p 03번",
      "tag": "기초",
      "question": "함수 $f(x)$의 그래프가 주어진 그림과 같을 때, 다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 0+} f(x)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 0-} f(x)"
        }
      ],
      "tip": "1단계: $x=0$의 우극한($x > 0$)과 좌극한($x < 0$)에서 그래프를 따라 함숫값이 향하는 목표값을 각각 읽어냅니다.",
      "answer": "(1) 3, (2) 1",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[우극한] $x \\to 0+$일 때 그래프의 $y$좌표는 3에 한없이 가까워집니다. $\\therefore$ **3**"
          },
          {
            "label": "(2)",
            "content": "[좌극한] $x \\to 0-$일 때 그래프의 $y$좌표는 1에 한없이 가까워집니다. $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "지학사 교과서 20p 04번",
      "tag": "기본",
      "question": "함수의 그래프를 이용하여 다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 0} x|x|"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 2} \\frac{x-2}{|x-2|}"
        }
      ],
      "tip": "절댓값 함수의 경우, 반드시 구간별로 나누어 주어진 함수로 변경해서 풀기! 우극한과 좌극한을 비교합니다.",
      "answer": "(1) 0, (2) 극한값이 존재하지 않는다 (발산)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[좌우극한 점검] $\\lim_{x \\to 0+} x(x)=0$, $\\lim_{x \\to 0-} x(-x)=0$으로 일치 $\\therefore$ **0**"
          },
          {
            "label": "(2)",
            "content": "[좌우극한 점검] $\\lim_{x \\to 2+} \\frac{x-2}{x-2}=1$, $\\lim_{x \\to 2-} \\frac{x-2}{-(x-2)}=-1$이므로 우극한과 좌극한이 달라 존재하지 않음 $\\therefore$ **극한값이 존재하지 않는다**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "지학사 교과서 20p 05번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} x^2+2 & (x < 2) \\\\ -x+k & (x \\ge 2) \\end{cases}$ 에 대하여 $\\lim_{x \\to 2} f(x)$의 값이 존재할 때, 상수 $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입! $x \\to 2-$ 좌극한과 $x \\to 2+$ 우극한이 같아야 극한값이 존재합니다.",
      "answer": "8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 좌극한]",
            "content": "$\\lim_{x \\to 2-} f(x) = 2^2+2 = 6$"
          },
          {
            "label": "[2단계: 우극한]",
            "content": "$\\lim_{x \\to 2+} f(x) = -2+k$"
          },
          {
            "label": "[3단계: 일치 조건]",
            "content": "$-2+k = 6 \\implies k = 8$ $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "지학사 교과서 20p 06번",
      "tag": "도전",
      "question": "농도가 $3\\%$인 소금물 $5000\\,\\mathrm{g}$이 들어 있는 물탱크에 농도가 $6\\%$인 소금물을 $1$분에 $5000\\,\\mathrm{g}$씩 일정한 속도로 넣고 있다. $t$분 후 소금물의 농도를 $f(t)\\%$라고 할 때, 다음 물음에 답하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$t$분 후 물탱크에 들어 있는 소금물의 양과 소금의 양을 각각 구하시오."
        },
        {
          "no": 2,
          "formula": "$t$분 후 물탱크에 들어 있는 소금물의 농도 $f(t)$를 구하시오."
        },
        {
          "no": 3,
          "formula": "\\lim_{t \\to \\infty} f(t)"
        }
      ],
      "tip": "소금의 양 = $\\text{소금물의 양} \\times \\frac{\\text{농도}}{100}$ 공식을 세우고, $t \\to \\infty$ 극한을 취합니다.",
      "answer": "(1) 소금물: $5000(t+1)\\,\\mathrm{g}$, 소금: $(300t+150)\\,\\mathrm{g}$, (2) $f(t) = \\frac{6t+3}{t+1}$, (3) 6",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[소금물과 소금의 양] 소금물: $5000 + 5000t = 5000(t+1)\\,\\mathrm{g}$. 소금: $5000 \\times 0.03 + 5000t \\times 0.06 = 150 + 300t = (300t+150)\\,\\mathrm{g}$ $\\therefore$ **소금물: $5000(t+1)\\,\\mathrm{g}$, 소금: $(300t+150)\\,\\mathrm{g}$**"
          },
          {
            "label": "(2)",
            "content": "[농도 식] $f(t) = \\frac{300t+150}{5000(t+1)} \\times 100 = \\frac{300t+150}{50(t+1)} = \\frac{6t+3}{t+1}$ $\\therefore$ **$f(t) = \\frac{6t+3}{t+1}$**"
          },
          {
            "label": "(3)",
            "content": "[극한 계산] $\\lim_{t \\to \\infty} \\frac{6t+3}{t+1} = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "지학사 교과서 27p 02번",
      "tag": "기초",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} (x^2-x+4)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} 2\\left(1+\\frac{3}{x}\\right)"
        }
      ],
      "tip": "1단계: 선 대입하기! $x=1$ 대입 및 $x \\to \\infty$일 때 $\\frac{3}{x} \\to 0$을 이용합니다.",
      "answer": "(1) 4, (2) 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $1^2-1+4 = 4$ $\\therefore$ **4**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $\\frac{3}{x} \\to 0$이므로 $2(1+0) = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "지학사 교과서 27p 03번",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 3} \\frac{x^2-2x-3}{x-3}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} \\frac{-x^3+1}{3x^3+2x^2}"
        },
        {
          "no": 3,
          "formula": "\\lim_{x \\to \\infty} \\left(\\sqrt{x^2-4x}-x\\right)"
        }
      ],
      "tip": "$\\frac{0}{0}$ 꼴은 인수분해 후 약분, $\\frac{\\infty}{\\infty}$ 꼴은 최고차항 계수 비교, $\\infty-\\infty$ 꼴은 유리화를 진행합니다.",
      "answer": "(1) 4, (2) $-\\frac{1}{3}$, (3) -2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[2단계: 식 변형] $\\lim_{x \\to 3} \\frac{(x-3)(x+1)}{x-3} = \\lim_{x \\to 3} (x+1) = 4$ $\\therefore$ **4**"
          },
          {
            "label": "(2)",
            "content": "[최고차항 나누기] 최고차항 $x^3$으로 분자, 분모를 나누면 $\\frac{-1}{3} = -\\frac{1}{3}$ $\\therefore$ **$-\\frac{1}{3}$**"
          },
          {
            "label": "(3)",
            "content": "[유리화] $\\lim_{x \\to \\infty} \\frac{(x^2-4x)-x^2}{\\sqrt{x^2-4x}+x} = \\lim_{x \\to \\infty} \\frac{-4x}{\\sqrt{x^2-4x}+x} = \\frac{-4}{1+1} = -2$ $\\therefore$ **-2**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "지학사 교과서 27p 04번",
      "tag": "기본",
      "question": "다음 등식이 성립하도록 하는 상수 $a$, $b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 2} \\frac{x^2+ax+b}{x-2} = 7"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 1} \\frac{\\sqrt{x+a}-2}{x-1} = b"
        }
      ],
      "tip": "1단계: 선 대입! 분모 $\\to 0$이면 분자 $\\to 0$이어야 유한한 극한값을 가집니다. 이를 이용해 관계식을 세우고 식을 변형합니다.",
      "answer": "(1) $a=3$, $b=-10$, (2) $a=3$, $b=\\frac{1}{4}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[분자 0 조건] $x=2$ 대입 시 $4+2a+b=0 \\implies b=-2a-4$. $\\lim_{x \\to 2} \\frac{(x-2)(x+a+2)}{x-2} = 2+a+2 = a+4 = 7 \\implies a=3, b=-10$ $\\therefore$ **$a=3, b=-10$**"
          },
          {
            "label": "(2)",
            "content": "[분자 0 조건] $x=1$ 대입 시 $\\sqrt{1+a}-2=0 \\implies a=3$. 유리화하면 $\\lim_{x \\to 1} \\frac{x+3-4}{(x-1)(\\sqrt{x+3}+2)} = \\lim_{x \\to 1} \\frac{1}{\\sqrt{x+3}+2} = \\frac{1}{4} = b$ $\\therefore$ **$a=3, b=\\frac{1}{4}$**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "지학사 교과서 27p 05번",
      "tag": "기본",
      "question": "함수 $f(x)$가 모든 양의 실수 $x$에 대하여 $\\frac{3}{x+1} \\le f(x) \\le \\frac{3}{x}$ 을 만족시킬 때, $\\lim_{x \\to \\infty} x f(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 극한에 대한 대소 관계 성질! 부등식의 각 변에 $x > 0$을 곱한 후, 양 끝 함수의 $x \\to \\infty$ 극한에 샌드위치 정리를 적용합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 변형]",
            "content": "$x > 0$이므로 각 변에 $x$를 곱하면 $\\frac{3x}{x+1} \\le x f(x) \\le 3$"
          },
          {
            "label": "[2단계: 양변의 극한]",
            "content": "$\\lim_{x \\to \\infty} \\frac{3x}{x+1} = 3$, $\\lim_{x \\to \\infty} 3 = 3$"
          },
          {
            "label": "[3단계: 샌드위치 정리]",
            "content": "함수의 극한의 대소 관계에 의하여 $\\lim_{x \\to \\infty} x f(x) = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "지학사 교과서 27p 06번",
      "tag": "도전",
      "question": "곡선 $y=\\sqrt{x}$ 위의 점 $\\mathrm{P}(t, \\sqrt{t})$에서 $y$축에 내린 수선의 발을 $\\mathrm{H}$라고 할 때, 다음 물음에 답하시오. (단, $\\mathrm{O}$는 원점이다.)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$\\overline{\\mathrm{OP}}, \\overline{\\mathrm{PH}}$를 각각 $t$에 대한 식으로 나타내시오."
        },
        {
          "no": 2,
          "formula": "\\lim_{t \\to \\infty} (\\overline{\\mathrm{OP}}-\\overline{\\mathrm{PH}})"
        }
      ],
      "tip": "원점 $\\mathrm{O}(0,0)$과 $\\mathrm{P}(t, \\sqrt{t})$, $\\mathrm{H}(0, \\sqrt{t})$의 좌표를 이용하여 길이를 구한 뒤 유리화합니다.",
      "answer": "(1) $\\overline{\\mathrm{OP}} = \\sqrt{t^2+t}$, $\\overline{\\mathrm{PH}} = t$, (2) $\\frac{1}{2}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선분의 길이] $\\overline{\\mathrm{OP}} = \\sqrt{t^2+(\\sqrt{t})^2} = \\sqrt{t^2+t}$, 점 $\\mathrm{P}$에서 $y$축까지의 거리는 점 $\\mathrm{P}$의 $x$좌표이므로 $\\overline{\\mathrm{PH}} = t$ $\\therefore$ **$\\overline{\\mathrm{OP}} = \\sqrt{t^2+t}, \\overline{\\mathrm{PH}} = t$**"
          },
          {
            "label": "(2)",
            "content": "[유리화 및 계산] $\\lim_{t \\to \\infty} (\\sqrt{t^2+t}-t) = \\lim_{t \\to \\infty} \\frac{t^2+t-t^2}{\\sqrt{t^2+t}+t} = \\lim_{t \\to \\infty} \\frac{t}{\\sqrt{t^2+t}+t} = \\frac{1}{1+1} = \\frac{1}{2}$ $\\therefore$ **$\\frac{1}{2}$**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "지학사 교과서 34p 02번",
      "tag": "기본",
      "question": "다음 함수가 $x=1$에서 연속인지 불연속인지 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = \\sqrt{x+1}"
        },
        {
          "no": 2,
          "formula": "f(x) = \\begin{cases} x^2-2x+1 & (x \\ne 1) \\\\ 2 & (x = 1) \\end{cases}"
        },
        {
          "no": 3,
          "formula": "f(x) = \\frac{x+3}{x^2-1}"
        }
      ],
      "tip": "함수 $f(x)$가 $x=a$에서 연속일 3대 조건: (1) $f(a)$ 정의, (2) $\\lim_{x \\to a} f(x)$ 존재, (3) $\\lim_{x \\to a} f(x) = f(a)$",
      "answer": "(1) 연속, (2) 불연속, (3) 불연속",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[점검] $f(1) = \\sqrt{2}$, $\\lim_{x \\to 1} \\sqrt{x+1} = \\sqrt{2}$로 일치하므로 연속 $\\therefore$ **연속**"
          },
          {
            "label": "(2)",
            "content": "[점검] $f(1) = 2$이나 $\\lim_{x \\to 1} (x^2-2x+1) = 0 \\ne 2$이므로 불연속 $\\therefore$ **불연속**"
          },
          {
            "label": "(3)",
            "content": "[점검] $x=1$에서 분모가 0이 되므로 함숫값 $f(1)$이 정의되지 않아 불연속 $\\therefore$ **불연속**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "지학사 교과서 34p 03번",
      "tag": "기본",
      "question": "함수 $y=f(x)$의 그래프가 주어진 그림과 같을 때, 다음을 모두 만족시키는 실수 $a$의 값을 구하시오.\n(가) $-3 \\le a \\le 3$\n(나) 함수 $f(x)$는 $x=a$에서 불연속이다.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 연속 조건 점검! 그래프가 끊어져 있거나 좌극한, 우극한 및 함숫값이 서로 다른 $x$좌표를 찾습니다.",
      "answer": "-1, 2",
      "solution": {
        "steps": [
          {
            "label": "[불연속점 탐색]",
            "content": "$-3 \\le x \\le 3$ 범위에서 그래프를 관찰하면 $x=-1$에서 좌우극한이 일치하지 않고 끊어져 있습니다."
          },
          {
            "label": "[함숫값 불일치]",
            "content": "$x=2$에서 극한값은 1이나 함숫값은 2로 정의되어 일치하지 않습니다."
          },
          {
            "label": "[결론]",
            "content": "따라서 불연속이 되는 실수 $a$의 값은 $-1$과 $2$입니다. $\\therefore$ **-1, 2**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "지학사 교과서 34p 04번",
      "tag": "기초",
      "question": "주어진 구간에서 다음 함수가 연속인지 불연속인지 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = \\frac{3}{x+1} \\quad [0, 3]"
        },
        {
          "no": 2,
          "formula": "f(x) = \\sqrt{x+4} \\quad [-4, \\infty)"
        },
        {
          "no": 3,
          "formula": "f(x) = \\frac{x}{|x|} \\quad (-\\infty, \\infty)"
        }
      ],
      "tip": "주어진 구간 내에 분모가 0이 되는 점이나 근호 안이 음수가 되는 점이 있는지 확인합니다.",
      "answer": "(1) 연속, (2) 연속, (3) 불연속",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[점검] $x=-1$에서만 불연속인데 구간 $[0, 3]$에는 $-1$이 포함되지 않으므로 전 구간 연속 $\\therefore$ **연속**"
          },
          {
            "label": "(2)",
            "content": "[점검] $x \\ge -4$에서 근호 안이 $0$ 이상이므로 구간 $[-4, \\infty)$에서 연속 $\\therefore$ **연속**"
          },
          {
            "label": "(3)",
            "content": "[점검] $x=0$이 구간 $(-\\infty, \\infty)$에 포함되며 $x=0$에서 정의되지 않으므로 불연속 $\\therefore$ **불연속**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "지학사 교과서 34p 05번",
      "tag": "기본",
      "question": "다음 함수가 구간 $(-\\infty, \\infty)$에서 연속일 때, 상수 $a$, $b$의 값을 구하시오.",
      "formula": "f(x) = \\begin{cases} \\frac{x^2+ax+a+2}{x+2} & (x \\ne -2) \\\\ b & (x = -2) \\end{cases}",
      "subQuestions": [],
      "tip": "1단계: 선 대입! $x=-2$에서 연속이려면 $\\lim_{x \\to -2} f(x) = f(-2) = b$이어야 합니다. 분모 $\\to 0$이므로 분자 $\\to 0$이어야 합니다.",
      "answer": "$a=6, b=-2$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 0 조건]",
            "content": "$\\lim_{x \\to -2} (x^2+ax+a+2) = 4-2a+a+2 = 6-a = 0 \\implies a=6$"
          },
          {
            "label": "[2단계: 식 변형 및 약분]",
            "content": "$a=6$을 대입하면 분자는 $x^2+6x+8 = (x+2)(x+4)$입니다. $\\lim_{x \\to -2} \\frac{(x+2)(x+4)}{x+2} = \\lim_{x \\to -2} (x+4) = 2$"
          },
          {
            "label": "[3단계: $b$ 결정]",
            "content": "함숫값 $b = \\lim_{x \\to -2} f(x) = 2$이므로 $a=6, b=2$ $\\therefore$ **$a=6, b=2$**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "지학사 교과서 34p 06번",
      "tag": "도전",
      "question": "어느 주차장의 이용 요금은 30분까지 1200원이고, 30분 초과 시 10분마다 400원씩 추가된다. 주차 시간이 $x$분일 때의 요금을 $f(x)$원이라고 하자. 다음 물음에 답하시오. (단, $0 < x < 1440$)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$f(40), f(135)$의 값을 구하시오."
        },
        {
          "no": 2,
          "formula": "$30 < x < 90$일 때, 함수 $f(x)$가 불연속이 되는 $x$의 값을 모두 구하시오."
        }
      ],
      "tip": "주차 요금은 구간별로 일정한 계단형 함수(가우스 형태)이므로 요금이 증가하는 경계 시각에서 불연속이 됩니다.",
      "answer": "(1) $f(40)=1600, f(135)=5600$, (2) 40, 50, 60, 70, 80",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[요금 계산] 40분: $30$분 초과 $10$분 추가이므로 $1200+400 = 1600$원. 135분: 초과 시간 $105$분은 $10$분 단위로 $11$회 추가 적용되므로 $1200 + 400 \\times 11 = 5600$원 $\\therefore$ **$f(40)=1600, f(135)=5600$**"
          },
          {
            "label": "(2)",
            "content": "[불연속점] $30 < x < 90$에서 요금이 계단식으로 변하는 시각은 10분 단위인 $40, 50, 60, 70, 80$분입니다. $\\therefore$ **40, 50, 60, 70, 80**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "지학사 교과서 40p 02번",
      "tag": "기초",
      "question": "두 함수 $f(x)=x-2$, $g(x)=x^2-4x+3$에 대하여 다음 함수가 연속인 구간을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)+g(x)"
        },
        {
          "no": 2,
          "formula": "f(x)g(x)"
        },
        {
          "no": 3,
          "formula": "\\frac{f(x)}{g(x)}"
        },
        {
          "no": 4,
          "formula": "\\frac{g(x)}{f(x)}"
        }
      ],
      "tip": "다항함수의 합, 차, 곱은 모든 실수에서 연속이며, 분수함수는 분모가 0이 되는 점을 제외한 구간에서 연속입니다.",
      "answer": "(1) $(-\\infty, \\infty)$, (2) $(-\\infty, \\infty)$, (3) $(-\\infty, 1), (1, 3), (3, \\infty)$, (4) $(-\\infty, 2), (2, \\infty)$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[합] 다항함수의 합이므로 모든 실수에서 연속 $\\therefore$ **$(-\\infty, \\infty)$**"
          },
          {
            "label": "(2)",
            "content": "[곱] 다항함수의 곱이므로 모든 실수에서 연속 $\\therefore$ **$(-\\infty, \\infty)$**"
          },
          {
            "label": "(3)",
            "content": "[몫] 분모 $g(x)=(x-1)(x-3)=0$인 $x=1, 3$ 제외 $\\therefore$ **$(-\\infty, 1), (1, 3), (3, \\infty)$**"
          },
          {
            "label": "(4)",
            "content": "[몫] 분모 $f(x)=x-2=0$인 $x=2$ 제외 $\\therefore$ **$(-\\infty, 2), (2, \\infty)$**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "지학사 교과서 40p 03번",
      "tag": "기본",
      "question": "주어진 구간에서 다음 함수의 최댓값과 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = \\sqrt{2x+5} \\quad [-1, 3]"
        },
        {
          "no": 2,
          "formula": "f(x) = \\frac{2x}{x+3} \\quad [-2, 0]"
        }
      ],
      "tip": "최대·최소 정리! 닫힌구간에서 연속인 단조증가/감소 함수는 양 끝값에서 반드시 최댓값과 최솟값을 갖습니다.",
      "answer": "(1) 최댓값: $\\sqrt{11}$, 최솟값: $\\sqrt{3}$, (2) 최댓값: 0, 최솟값: -4",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[무리함수] $f(x)$는 증가함수이므로 $x=3$에서 최댓값 $f(3)=\\sqrt{11}$, $x=-1$에서 최솟값 $f(-1)=\\sqrt{3}$ $\\therefore$ **최댓값: $\\sqrt{11}$, 최솟값: $\\sqrt{3}$**"
          },
          {
            "label": "(2)",
            "content": "[유리함수] $f(x) = 2 - \\frac{6}{x+3}$은 구간 $[-2, 0]$에서 증가함수이므로 $x=0$에서 최댓값 $f(0)=0$, $x=-2$에서 최솟값 $f(-2)=-4$ $\\therefore$ **최댓값: 0, 최솟값: -4**"
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "지학사 교과서 40p 04번",
      "tag": "기본",
      "question": "방정식 $x^4-3x^3+1=0$이 열린구간 $(1, 3)$에서 적어도 하나의 실근을 가짐을 보이시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리! $f(x)=x^4-3x^3+1$이라 두고 닫힌구간 $[1, 3]$에서 연속성 및 $f(1)f(3) < 0$ 부호 판정을 수행합니다.",
      "answer": "사잇값 정리에 의해 $f(c)=0$인 $c \\in (1, 3)$이 적어도 하나 존재한다.",
      "solution": {
        "steps": [
          {
            "label": "[연속성 확인]",
            "content": "$f(x)=x^4-3x^3+1$이라 하면 다항함수이므로 닫힌구간 $[1, 3]$에서 연속이다."
          },
          {
            "label": "[함숫값 부호 조사]",
            "content": "$f(1) = 1-3+1 = -1 < 0$, $f(3) = 81-81+1 = 1 > 0$"
          },
          {
            "label": "[사잇값 정리 적용]",
            "content": "$f(1)f(3) < 0$이므로 사잇값 정리에 의하여 $f(c)=0$인 $c$가 열린구간 $(1, 3)$에 적어도 하나 존재한다. $\\therefore$ **적어도 하나의 실근을 가진다**"
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "지학사 교과서 40p 05번",
      "tag": "기본",
      "question": "모든 실수에서 연속인 함수 $f(x)$에 대하여 $f(0)=f(5)=-1$, $f(1)=2$, $f(2)=-2$, $f(3)=3$, $f(4)=1$일 때, 방정식 $f(x)=0$은 열린구간 $(0, 5)$에서 적어도 몇 개의 실근을 갖는지 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리 활용! 모든 실수에서 연속이므로 인접한 두 정수점 사이에서 함숫값의 부호 변화($f(a)f(b) < 0$)를 세어 실근 개수를 판정합니다.",
      "answer": "4개",
      "solution": {
        "steps": [
          {
            "label": "[부호 변화 조사]",
            "content": "$f(0)f(1) = (-1)(2) < 0 \\implies (0, 1)$에서 적어도 1개"
          },
          {
            "label": "[구간별 실근 확인]",
            "content": "$f(1)f(2) = (2)(-2) < 0 \\implies (1, 2)$에서 적어도 1개. $f(2)f(3) = (-2)(3) < 0 \\implies (2, 3)$에서 적어도 1개"
          },
          {
            "label": "[마지막 구간]",
            "content": "$f(3)f(4) = (3)(1) > 0$, $f(4)f(5) = (1)(-1) < 0 \\implies (4, 5)$에서 적어도 1개"
          },
          {
            "label": "[총합]",
            "content": "$1+1+1+1 = 4$개 $\\therefore$ **4개**"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "지학사 교과서 40p 06번",
      "tag": "도전",
      "question": "선아는 아침 7시에 해발 $100\\,\\mathrm{m}$에서 출발하여 정오(12시)에 정상($1000\\,\\mathrm{m}$)에 도착하였고, 경수는 아침 7시에 $500\\,\\mathrm{m}$ 산장에서 출발하여 정상에 올랐다가 정오에 $800\\,\\mathrm{m}$ 산장에 도착하였다. 시각 $t$에서의 두 사람의 해발 고도를 $f(t)$, $g(t)$라 하고 $h(t)=f(t)-g(t)$라 할 때, 아침 7시부터 정오까지 고도가 같은 순간이 있었는지 사잇값 정리를 이용하여 설명하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "두 사람의 이동 경로는 연속이므로 $h(t)=f(t)-g(t)$의 양 끝 시각($t=7, 12$) 함숫값 부호에 사잇값 정리를 적용합니다.",
      "answer": "$h(7)h(12) < 0$이므로 같은 순간이 적어도 한 번 존재했다.",
      "solution": {
        "steps": [
          {
            "label": "[함수 정의 및 연속성]",
            "content": "두 사람의 위치 $f(t)$, $g(t)$는 시간에 대해 연속이므로 $h(t)=f(t)-g(t)$는 닫힌구간 $[7, 12]$에서 연속이다."
          },
          {
            "label": "[함숫값 부호 계산]",
            "content": "$h(7) = f(7)-g(7) = 100-500 = -400 < 0$, $h(12) = f(12)-g(12) = 1000-800 = 200 > 0$"
          },
          {
            "label": "[사잇값 정리 결론]",
            "content": "$h(7)h(12) < 0$이므로 사잇값 정리에 의해 $h(c)=0$, 즉 $f(c)=g(c)$인 시각 $c \\in (7, 12)$가 적어도 하나 존재한다. $\\therefore$ **해발 고도가 같은 순간이 있었다**"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "지학사 교과서 43p 대단원 01번",
      "tag": "기초",
      "question": "다음 중 극한값이 존재하는 것은?",
      "formula": "",
      "subQuestions": [],
      "tip": "각 보기의 극한에 대해 선 대입 및 최고차항 계수 나누기 성질을 확인합니다.",
      "answer": "⑤ (극한값: -1)",
      "solution": {
        "steps": [
          {
            "label": "[각 보기 검토]",
            "content": "① 분모 $\\to 0$이므로 발산, ② $x \\to 2+$는 1, $x \\to 2-$는 -1로 발산, ③ $\\infty$, ④ $\\infty$"
          },
          {
            "label": "[정답 확인]",
            "content": "⑤ 최고차항의 계수 비교: $\\lim_{x \\to -\\infty} \\frac{-x+2}{x+3} = \\frac{-1}{1} = -1$로 수렴 $\\therefore$ **⑤**"
          }
        ]
      },
      "qSuffix": "① $\\lim_{x \\to 3} \\frac{3}{x-3}$   ② $\\lim_{x \\to 2} \\frac{|x-2|}{x-2}$   ③ $\\lim_{x \\to \\infty} (x^2-x)$   ④ $\\lim_{x \\to 0} \\left(\\frac{1}{x^2}-2\\right)$   ⑤ $\\lim_{x \\to -\\infty} \\frac{2-x}{x+3}$"
    },
    {
      "id": 22,
      "source": "지학사 교과서 43p 대단원 02번",
      "tag": "기초",
      "question": "함수 $y=f(x)$의 그래프에서 $\\lim_{x \\to -1+} f(x) + \\lim_{x \\to 1-} f(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "그래프에서 $x=-1$ 우극한과 $x=1$ 좌극한의 $y$좌표를 각각 읽어 더합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[우극한]",
            "content": "$\\lim_{x \\to -1+} f(x) = 0$"
          },
          {
            "label": "[좌극한]",
            "content": "$\\lim_{x \\to 1-} f(x) = 2$"
          },
          {
            "label": "[합]",
            "content": "$0 + 2 = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "지학사 교과서 43p 대단원 03번",
      "tag": "기본",
      "question": "두 함수 $f(x)$, $g(x)$에 대하여 $\\lim_{x \\to \\infty} f(x)=4$, $\\lim_{x \\to \\infty} \\{2f(x)-3g(x)\\}=6$ 일 때, $\\lim_{x \\to \\infty} g(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "극한의 기본 성질! $h(x) = 2f(x)-3g(x)$로 치환하여 $g(x) = \\frac{2f(x)-h(x)}{3}$의 극한을 구합니다.",
      "answer": "$\\frac{2}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 변형]",
            "content": "$3g(x) = 2f(x) - \\{2f(x)-3g(x)\\}$"
          },
          {
            "label": "[2단계: 극한 적용]",
            "content": "$\\lim_{x \\to \\infty} 3g(x) = 2(4) - 6 = 2$"
          },
          {
            "label": "[3단계: 정답]",
            "content": "$\\lim_{x \\to \\infty} g(x) = \\frac{2}{3}$ $\\therefore$ **$\\frac{2}{3}$**"
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "지학사 교과서 43p 대단원 04번",
      "tag": "기본",
      "question": "다항함수 $f(x)$가 $\\lim_{x \\to 1} \\frac{(x-1)f(x)}{x^3-1} = 2$ 를 만족시킬 때, $\\lim_{x \\to 1} f(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분모 $x^3-1 = (x-1)(x^2+x+1)$로 인수분해하여 약분한 뒤 $x=1$을 선 대입합니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 인수분해]",
            "content": "$\\frac{(x-1)f(x)}{x^3-1} = \\frac{(x-1)f(x)}{(x-1)(x^2+x+1)} = \\frac{f(x)}{x^2+x+1}$"
          },
          {
            "label": "[2단계: 선 대입]",
            "content": "$\\lim_{x \\to 1} \\frac{f(x)}{x^2+x+1} = \\frac{\\lim_{x \\to 1} f(x)}{1+1+1} = \\frac{\\lim_{x \\to 1} f(x)}{3} = 2$"
          },
          {
            "label": "[3단계: 정답]",
            "content": "$\\lim_{x \\to 1} f(x) = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "지학사 교과서 43p 대단원 05번",
      "tag": "기본",
      "question": "닫힌구간 $[-1, 1]$에서 함수 $f(x) = \\frac{2x+8}{x+3}$ 의 최댓값과 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "유리함수 $f(x) = \\frac{2(x+3)+2}{x+3} = 2 + \\frac{2}{x+3}$의 증감을 파악하여 양 끝값을 대입합니다.",
      "answer": "최댓값: 3, 최솟값: $\\frac{5}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 표준형 변형]",
            "content": "$f(x) = 2 + \\frac{2}{x+3}$이므로 $x > -3$에서 단조감소함수이다."
          },
          {
            "label": "[2단계: 최댓값]",
            "content": "$x=-1$에서 최댓값 $f(-1) = \\frac{-2+8}{-1+3} = \\frac{6}{2} = 3$"
          },
          {
            "label": "[3단계: 최솟값]",
            "content": "$x=1$에서 최솟값 $f(1) = \\frac{2+8}{1+3} = \\frac{10}{4} = \\frac{5}{2}$ $\\therefore$ **최댓값: 3, 최솟값: $\\frac{5}{2}$**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "지학사 교과서 43p 대단원 06번",
      "tag": "기본",
      "question": "두 함수 $f(x)$, $g(x)$에 대하여 $\\lim_{x \\to \\infty} \\{f(x)-4x^2\\}=3$, $\\lim_{x \\to \\infty} x^2 g(x)=5$ 일 때, $\\lim_{x \\to \\infty} f(x)g(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 극한 성질! $f(x)g(x) = \\frac{f(x)}{x^2} \\cdot x^2 g(x)$로 묶어 각 극한값의 곱으로 변형합니다.",
      "answer": "20",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $\\frac{f(x)}{x^2}$의 극한]",
            "content": "$\\lim_{x \\to \\infty} \\frac{f(x)-4x^2}{x^2} = \\lim_{x \\to \\infty} \\left(\\frac{f(x)}{x^2}-4\\right) = 0 \\implies \\lim_{x \\to \\infty} \\frac{f(x)}{x^2} = 4$"
          },
          {
            "label": "[2단계: 식 변형 및 곱]",
            "content": "$f(x)g(x) = \\frac{f(x)}{x^2} \\times \\{x^2 g(x)\\}$"
          },
          {
            "label": "[3단계: 극한 계산]",
            "content": "$\\lim_{x \\to \\infty} f(x)g(x) = 4 \\times 5 = 20$ $\\therefore$ **20**"
          }
        ]
      }
    },
    {
      "id": 27,
      "source": "지학사 교과서 44p 대단원 07번",
      "tag": "기본",
      "question": "$\\lim_{x \\to \\infty} \\left(\\sqrt{4x^2+3x}-ax\\right) = b$ 일 때, 상수 $a$, $b$의 값을 구하시오. (단, $a > 0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "$\\infty-\\infty$ 꼴 수렴 조건: 최고차항 계수가 일치해야 하므로 $a = \\sqrt{4} = 2$. 유리화를 통해 극한값 $b$를 구합니다.",
      "answer": "$a=2, b=\\frac{3}{4}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $a$ 결정]",
            "content": "극한값이 유한하게 존재하므로 최고차항 계수 $a = \\sqrt{4} = 2$"
          },
          {
            "label": "[2단계: 유리화]",
            "content": "$\\lim_{x \\to \\infty} \\frac{(4x^2+3x)-4x^2}{\\sqrt{4x^2+3x}+2x} = \\lim_{x \\to \\infty} \\frac{3x}{\\sqrt{4x^2+3x}+2x} = \\frac{3}{2+2} = \\frac{3}{4}$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$a=2, b=\\frac{3}{4}$ $\\therefore$ **$a=2, b=\\frac{3}{4}$**"
          }
        ]
      }
    },
    {
      "id": 28,
      "source": "지학사 교과서 44p 대단원 08번",
      "tag": "기본",
      "question": "다항함수 $f(x)$가 다음을 모두 만족시킬 때, $f(2)$의 값을 구하시오.\n(가) $\\lim_{x \\to \\infty} \\frac{f(x)}{x^2+2x} = 2$\n(나) $\\lim_{x \\to -2} \\frac{f(x)}{x^2-4} = \\frac{3}{2}$",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입! (가)에서 $f(x) = 2x^2+ax+b$ 설정 후 (나)에서 분모 $\\to 0$이므로 분자 $f(-2)=0$을 대입합니다.",
      "answer": "8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: (가) 최고차항 파악]",
            "content": "최고차항이 $2x^2$이므로 $f(x) = 2x^2+ax+b$"
          },
          {
            "label": "[2단계: (나) 분자 0 조건]",
            "content": "$x \\to -2$일 때 분모 $\\to 0$이므로 $f(-2) = 8-2a+b = 0 \\implies b = 2a-8$"
          },
          {
            "label": "[3단계: 인수분해 및 극한]",
            "content": "$f(x) = 2(x+2)(x - \\frac{4-a}{2}) = (x+2)(2x+a-4)$. $\\lim_{x \\to -2} \\frac{(x+2)(2x+a-4)}{(x+2)(x-2)} = \\frac{-4+a-4}{-4} = \\frac{8-a}{4} = \\frac{3}{2} \\implies 8-a = 6 \\implies a = 2$"
          },
          {
            "label": "[4단계: $f(2)$ 계산]",
            "content": "$b = 2(2)-8 = -4$. $f(x) = 2x^2+2x-4 \\implies f(2) = 8+4-4 = 8$ $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 29,
      "source": "지학사 교과서 44p 대단원 09번",
      "tag": "기본",
      "question": "두 함수 $f(x)$, $g(x)$에 대하여 보기 중 옳은 것만을 있는 대로 고른 것은? (단, $a$는 실수이다.)\nㄱ. $\\lim_{x \\to a} \\{f(x)\\}^2$이 존재하면 $\\lim_{x \\to a} f(x)$도 존재한다.\nㄴ. $\\lim_{x \\to \\infty} f(x)$와 $\\lim_{x \\to \\infty} \\{f(x)-g(x)\\}$가 모두 존재하면 $\\lim_{x \\to \\infty} g(x)$도 존재한다.\nㄷ. $\\lim_{x \\to a} \\frac{f(x)}{g(x)}$와 $\\lim_{x \\to a} g(x)$가 모두 존재하면 $\\lim_{x \\to a} f(x)$도 존재한다.\nㄹ. 모든 실수 $x$에 대하여 $f(x) < g(x)$이고 $\\lim_{x \\to \\infty} g(x)$가 존재하면 $\\lim_{x \\to \\infty} f(x)$도 존재한다.",
      "formula": "",
      "subQuestions": [],
      "tip": "극한의 기본 성질과 반례를 점검합니다. 덧셈, 뺄셈, 곱셈은 수렴성이 보존됩니다.",
      "answer": "ㄴ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ 반례]",
            "content": "$f(x) = \\begin{cases} 1 & (x \\ge 0) \\\\ -1 & (x < 0) \\end{cases}$이면 $f(x)^2=1$로 수렴하나 $f(x)$는 발산 (거짓)"
          },
          {
            "label": "[ㄴ 참 증명]",
            "content": "$g(x) = f(x) - \\{f(x)-g(x)\\}$이므로 두 수렴하는 함수의 차는 반드시 수렴 (참)"
          },
          {
            "label": "[ㄷ 참 증명]",
            "content": "$f(x) = \\frac{f(x)}{g(x)} \\times g(x)$이므로 두 수렴하는 함수의 곱은 반드시 수렴 (참)"
          },
          {
            "label": "[ㄹ 반례]",
            "content": "$f(x)=-x^2, g(x)=1$이면 $f(x) < g(x)$이고 $\\lim g(x)=1$이나 $\\lim f(x)=-\\infty$ (거짓)"
          },
          {
            "label": "[결론]",
            "content": "옳은 것은 ㄴ, ㄷ입니다. $\\therefore$ **ㄴ, ㄷ**"
          }
        ]
      }
    },
    {
      "id": 30,
      "source": "지학사 교과서 44p 대단원 10번",
      "tag": "도전",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 상수 $a$에 대하여 다음을 모두 만족시킬 때, $f(5)$의 값을 구하시오.\n(가) $f(2) > 0$\n(나) 모든 실수 $x$에 대하여 $(x-a)f(x) = x^2-4x+3$",
      "formula": "",
      "subQuestions": [],
      "tip": "$x=a$에서 연속이므로 분모 $\\to 0$일 때 분자 $\\to 0$이어야 합니다. $a=1$ 또는 $a=3$ 중 (가) 조건을 만족하는 $a$를 고릅니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 0 조건]",
            "content": "$a^2-4a+3=0 \\implies (a-1)(a-3)=0 \\implies a=1$ 또는 $a=3$"
          },
          {
            "label": "[2단계: (가) 조건 검증]",
            "content": "i) $a=1$이면 $(x-1)f(x)=(x-1)(x-3) \\implies f(2) = 2-3 = -1 < 0$ (모순). ii) $a=3$이면 $(x-3)f(x)=(x-1)(x-3) \\implies f(2) = 2-1 = 1 > 0$ (만족!)"
          },
          {
            "label": "[3단계: $f(5)$ 계산]",
            "content": "$a=3$이므로 $x \\ne 3$에서 $f(x) = x-1$. 따라서 $f(5) = 5-1 = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 31,
      "source": "지학사 교과서 44p 대단원 11번",
      "tag": "도전",
      "question": "함수 $y=f(x)$의 그래프가 주어진 그림과 같을 때, 함수 $f(x)g(x)$가 닫힌구간 $[-2, 2]$에서 연속이 되도록 하는 함수 $g(x)$만을 보기에서 있는 대로 고른 것은?\nㄱ. $g(x) = x^2+x$\nㄴ. $g(x) = \\frac{|x|}{x}$\nㄷ. $g(x) = \\frac{x^2-3x}{x-3}$",
      "formula": "",
      "subQuestions": [],
      "tip": "$f(x)$가 $x=0$에서 불연속(좌우극한 다름)이므로 $f(x)g(x)$가 $x=0$에서 연속이 되려면 $g(0)=0$이면서 $\\lim_{x \\to 0} g(x)=0$이어야 합니다.",
      "answer": "ㄱ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ 검토]",
            "content": "$g(x)=x^2+x$는 다항함수로 연속이고 $g(0)=0$. $\\lim_{x \\to 0} f(x)g(x) = 0 = f(0)g(0)$ 연속 (참)"
          },
          {
            "label": "[ㄴ 검토]",
            "content": "$g(x)=\\frac{|x|}{x}$는 $x=0$에서 정의조차 되지 않으므로 $f(x)g(x)$도 $x=0$에서 불연속 (거짓)"
          },
          {
            "label": "[ㄷ 검토]",
            "content": "$g(x)=\\frac{x(x-3)}{x-3}=x$ ($x \\ne 3$)이므로 $x=0$ 근방에서 연속이고 $g(0)=0$. 연속 만족 (참)"
          },
          {
            "label": "[결론]",
            "content": "따라서 옳은 것은 ㄱ, ㄷ $\\therefore$ **ㄱ, ㄷ**"
          }
        ]
      }
    },
    {
      "id": 32,
      "source": "지학사 교과서 44p 대단원 12번",
      "tag": "기본",
      "question": "방정식 $x^3+3x-10=0$이 단 하나의 실근 $\\alpha$를 가질 때, $0 < \\alpha < n$을 만족시키는 자연수 $n$의 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리! $f(x)=x^3+3x-10$은 다항함수이므로 모든 실수에서 연속입니다. 정수 $x$값을 대입하여 부호 변화 구간을 찾습니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[함숫값 계산]",
            "content": "$f(0) = -10 < 0$"
          },
          {
            "label": "[1 대입]",
            "content": "$f(1) = 1+3-10 = -6 < 0$"
          },
          {
            "label": "[2 대입]",
            "content": "$f(2) = 8+6-10 = 4 > 0$"
          },
          {
            "label": "[사잇값 정리]",
            "content": "$f(1)f(2) < 0$이므로 실근 $\\alpha$는 열린구간 $(1, 2)$에 존재한다. 따라서 $0 < \\alpha < 2$이므로 자연수 $n$의 최솟값은 2이다. $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 33,
      "source": "지학사 교과서 45p 대단원 13번",
      "tag": "도전",
      "question": "함수 $f(x)$가 모든 양의 실수 $x$에 대하여 $\\frac{x+8}{x+2} \\le f(x) \\le \\frac{3x+4}{x+1}$ 를 만족시킬 때, $\\lim_{x \\to \\infty} f\\left(\\frac{1}{x}\\right)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$x$ 대신 $\\frac{1}{x}$을 대입하여 정리하거나, $t = \\frac{1}{x} \\to 0+$ 치환을 활용하여 양변의 극한을 샌드위치 정리로 구합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 치환 또는 식 변형]",
            "content": "$t = \\frac{1}{x}$이라 두면 $x \\to \\infty$일 때 $t \\to 0+$이다. 또는 주어진 부등식의 $x$ 자리에 $\\frac{1}{x}$을 대입: $\\frac{\\frac{1}{x}+8}{\\frac{1}{x}+2} \\le f\\left(\\frac{1}{x}\\right) \\le \\frac{\\frac{3}{x}+4}{\\frac{1}{x}+1}$"
          },
          {
            "label": "[2단계: 분자·분모 $x$ 곱하기]",
            "content": "$\\frac{8x+1}{2x+1} \\le f\\left(\\frac{1}{x}\\right) \\le \\frac{4x+3}{x+1}$"
          },
          {
            "label": "[3단계: $x \\to \\infty$ 극한]",
            "content": "$\\lim_{x \\to \\infty} \\frac{8x+1}{2x+1} = 4$, $\\lim_{x \\to \\infty} \\frac{4x+3}{x+1} = 4$"
          },
          {
            "label": "[4단계: 샌드위치 정리]",
            "content": "양 끝 극한이 4로 일치하므로 $\\lim_{x \\to \\infty} f\\left(\\frac{1}{x}\\right) = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 34,
      "source": "지학사 교과서 45p 대단원 14번",
      "tag": "도전",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 $(x-2)f(x)=x^3-3x^2+ax+b$ 를 만족시키고 $f(2)=4$일 때, $f(b)$의 값을 구하시오. (단, $a, b$는 상수이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입! $x=2$ 대입 시 좌변이 0이므로 분자 $8-12+2a+b=0$. 로피탈 또는 조립제법으로 $\\lim_{x \\to 2} f(x) = f(2) = 4$를 적용합니다.",
      "answer": "22",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $x=2$ 대입]",
            "content": "$8-12+2a+b = 0 \\implies b = 4-2a$"
          },
          {
            "label": "[2단계: 식 변형 및 약분]",
            "content": "$x^3-3x^2+ax+(4-2a) = (x-2)(x^2-x+a-2)$이므로 $x \\ne 2$일 때 $f(x) = x^2-x+a-2$"
          },
          {
            "label": "[3단계: $f(2)=4$ 적용]",
            "content": "$f(2) = 2^2-2+a-2 = a = 4$. $a=4$이므로 $b = 4-2(4) = -4$"
          },
          {
            "label": "[4단계: $f(b)$ 계산]",
            "content": "$f(x) = x^2-x+2$이므로 $f(b) = f(-4) = (-4)^2-(-4)+2 = 16+4+2 = 22$ $\\therefore$ **22**"
          }
        ]
      }
    },
    {
      "id": 35,
      "source": "지학사 교과서 45p 대단원 15번",
      "tag": "도전",
      "question": "양수 $m$에 대하여 원 $C: x^2+y^2=4$와 직선 $y=mx$의 교점 중 제1사분면 위의 점을 $\\mathrm{P}$라고 하자. 원 $C$ 위의 점 $\\mathrm{P}$에서의 접선 $l$과 $x$축, $y$축으로 둘러싸인 삼각형의 넓이를 $S$라고 할 때, $\\lim_{m \\to \\infty} \\frac{S}{m}$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "접선의 방정식 공식 활용! 기울기가 $-\\frac{1}{m}$인 접선의 방정식을 구하여 삼각형의 넓이 공식을 세우고 극한을 계산합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 접선의 방정식]",
            "content": "직선 $y=mx$에 수직인 접선 $l$의 기울기는 $-\\frac{1}{m}$. 제1사분면 접선은 $y = -\\frac{1}{m}x + 2\\sqrt{1+\\frac{1}{m^2}} = -\\frac{1}{m}x + \\frac{2\\sqrt{m^2+1}}{m}$"
          },
          {
            "label": "[2단계: 절편 및 넓이]",
            "content": "$x$절편: $2\\sqrt{m^2+1}$, $y$절편: $\\frac{2\\sqrt{m^2+1}}{m}$. 넓이 $S = \\frac{1}{2} \\times 2\\sqrt{m^2+1} \\times \\frac{2\\sqrt{m^2+1}}{m} = \\frac{2(m^2+1)}{m}$"
          },
          {
            "label": "[3단계: 극한 계산]",
            "content": "$\\lim_{m \\to \\infty} \\frac{S}{m} = \\lim_{m \\to \\infty} \\frac{2(m^2+1)}{m^2} = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 36,
      "source": "지학사 교과서 45p 대단원 16번",
      "tag": "도전",
      "question": "최고차항의 계수가 1인 이차함수 $f(x)$에 대하여 두 함수 $g(x), h(x)$를 각각 $g(x) = \\begin{cases} f(x) & (x < 3) \\\\ f(x-4) & (x \\ge 3) \\end{cases}$, $h(x) = \\frac{1}{f(x)}$ 이라고 하자. 함수 $g(x)$가 모든 실수 $x$에서 연속이고 함수 $h(x)$는 $x \\ne a$인 모든 실수에서 연속일 때, $f(4)$의 값을 구하시오. (단, $a$는 상수이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "$g(x)$의 연속 조건에서 $f(3)=f(-1)$을 얻고, $h(x)$가 단 한 점 $x=a$에서만 불연속이므로 $f(x)=0$이 중근을 가짐(판별식 $D=0$)을 이용합니다.",
      "answer": "9",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $g(x)$ 연속 조건]",
            "content": "$x=3$에서 연속이므로 $\\lim_{x \\to 3-} f(x) = \\lim_{x \\to 3+} f(x-4) \\implies f(3) = f(-1)$"
          },
          {
            "label": "[2단계: $f(x)$ 식 설정]",
            "content": "$f(3)=f(-1)$이므로 대칭축은 $x = \\frac{3+(-1)}{2} = 1$이다. 따라서 $f(x) = (x-1)^2+k$"
          },
          {
            "label": "[3단계: $h(x)$ 조건]",
            "content": "$h(x) = \\frac{1}{f(x)}$이 $x \\ne a$에서만 연속이려면 $f(x)=0$이 단 하나의 실근(중근) $a$를 가져야 한다. 즉 꼭짓점의 $y$좌표 $k=0$이다. ($a=1$)"
          },
          {
            "label": "[4단계: $f(4)$ 계산]",
            "content": "$f(x) = (x-1)^2$. 따라서 $f(4) = (4-1)^2 = 9$ $\\therefore$ **9**"
          }
        ]
      }
    },
    {
      "id": 37,
      "source": "AI 숫자 변형 (04번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "함수 $f(x) = \\begin{cases} x^2+3 & (x < 1) \\\\ -2x+k & (x \\ge 1) \\end{cases}$ 에 대하여 $\\lim_{x \\to 1} f(x)$의 값이 존재할 때, 상수 $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입하기! $x \\to 1-$ 좌극한과 $x \\to 1+$ 우극한을 각각 구하여 일치시킵니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 좌극한]",
            "content": "$\\lim_{x \\to 1-} f(x) = 1^2+3 = 4$"
          },
          {
            "label": "[2단계: 우극한]",
            "content": "$\\lim_{x \\to 1+} f(x) = -2(1)+k = -2+k$"
          },
          {
            "label": "[3단계: 일치 조건]",
            "content": "$-2+k = 4 \\implies k = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 38,
      "source": "AI 숫자 변형 (08번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "다음 등식이 성립하도록 하는 상수 $a$, $b$의 값을 구하시오.",
      "formula": "\\lim_{x \\to 3} \\frac{x^2+ax+b}{x-3} = 8",
      "subQuestions": [],
      "tip": "1단계: 선 대입! 분모 $\\to 0$이므로 분자 $\\to 0$이어야 합니다. $x=3$ 대입 후 식 변형을 진행합니다.",
      "answer": "$a=2, b=-15$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 0 조건]",
            "content": "$3^2+3a+b=0 \\implies b = -3a-9$"
          },
          {
            "label": "[2단계: 인수분해]",
            "content": "$x^2+ax-3a-9 = (x-3)(x+a+3)$"
          },
          {
            "label": "[3단계: 극한 계산]",
            "content": "$\\lim_{x \\to 3} (x+a+3) = 6+a = 8 \\implies a=2$. $b = -3(2)-9 = -15$ $\\therefore$ **$a=2, b=-15$**"
          }
        ]
      }
    },
    {
      "id": 39,
      "source": "AI 숫자 변형 (14번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "다음 함수가 구간 $(-\\infty, \\infty)$에서 연속일 때, 상수 $a$, $b$의 값을 구하시오.",
      "formula": "f(x) = \\begin{cases} \\frac{x^2+ax+a+3}{x+3} & (x \\ne -3) \\\\ b & (x = -3) \\end{cases}",
      "subQuestions": [],
      "tip": "1단계: 선 대입! $x=-3$에서 연속이므로 분모 $\\to 0$일 때 분자 $\\to 0$이어야 합니다.",
      "answer": "$a=6, b=0$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 0 조건]",
            "content": "$(-3)^2-3a+a+3 = 12-2a = 0 \\implies a=6$"
          },
          {
            "label": "[2단계: 인수분해 및 약분]",
            "content": "$x^2+6x+9 = (x+3)^2$. $\\lim_{x \\to -3} \\frac{(x+3)^2}{x+3} = \\lim_{x \\to -3} (x+3) = 0$"
          },
          {
            "label": "[3단계: $b$ 결정]",
            "content": "$b = 0$이므로 $a=6, b=0$ $\\therefore$ **$a=6, b=0$**"
          }
        ]
      }
    },
    {
      "id": 40,
      "source": "AI 숫자 변형 (24번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "다항함수 $f(x)$가 $\\lim_{x \\to 2} \\frac{(x-2)f(x)}{x^3-8} = 3$ 을 만족시킬 때, $\\lim_{x \\to 2} f(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분모 $x^3-8 = (x-2)(x^2+2x+4)$로 인수분해하여 약분한 뒤 선 대입합니다.",
      "answer": "36",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 인수분해]",
            "content": "$\\frac{(x-2)f(x)}{(x-2)(x^2+2x+4)} = \\frac{f(x)}{x^2+2x+4}$"
          },
          {
            "label": "[2단계: 선 대입]",
            "content": "$\\lim_{x \\to 2} \\frac{f(x)}{x^2+2x+4} = \\frac{\\lim_{x \\to 2} f(x)}{4+4+4} = \\frac{\\lim_{x \\to 2} f(x)}{12} = 3$"
          },
          {
            "label": "[3단계: 정답]",
            "content": "$\\lim_{x \\to 2} f(x) = 36$ $\\therefore$ **36**"
          }
        ]
      }
    },
    {
      "id": 41,
      "source": "AI 숫자 변형 (26번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "두 함수 $f(x)$, $g(x)$에 대하여 $\\lim_{x \\to \\infty} \\{f(x)-3x^2\\}=2$, $\\lim_{x \\to \\infty} x^2 g(x)=4$ 일 때, $\\lim_{x \\to \\infty} f(x)g(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 극한 성질! $f(x)g(x) = \\frac{f(x)}{x^2} \\cdot x^2 g(x)$로 묶어 계산합니다.",
      "answer": "12",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $\\frac{f(x)}{x^2}$ 극한]",
            "content": "$\\lim_{x \\to \\infty} \\frac{f(x)}{x^2} = 3$"
          },
          {
            "label": "[2단계: 곱의 극한]",
            "content": "$\\lim_{x \\to \\infty} f(x)g(x) = 3 \\times 4 = 12$ $\\therefore$ **12**"
          }
        ]
      }
    },
    {
      "id": 42,
      "source": "AI 숫자 변형 (27번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "$\\lim_{x \\to \\infty} \\left(\\sqrt{9x^2+6x}-ax\\right) = b$ 일 때, 상수 $a$, $b$의 값을 구하시오. (단, $a > 0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "최고차항 계수 비교로 $a = \\sqrt{9} = 3$. 유리화를 통해 $b$를 구합니다.",
      "answer": "$a=3, b=1$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $a$ 결정]",
            "content": "수렴하므로 $a = \\sqrt{9} = 3$"
          },
          {
            "label": "[2단계: 유리화]",
            "content": "$\\lim_{x \\to \\infty} \\frac{(9x^2+6x)-9x^2}{\\sqrt{9x^2+6x}+3x} = \\lim_{x \\to \\infty} \\frac{6x}{\\sqrt{9x^2+6x}+3x} = \\frac{6}{3+3} = 1$"
          },
          {
            "label": "[3단계: 결론]",
            "content": "$a=3, b=1$ $\\therefore$ **$a=3, b=1$**"
          }
        ]
      }
    },
    {
      "id": 43,
      "source": "AI 숫자 변형 (30번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 상수 $a$에 대하여 다음을 모두 만족시킬 때, $f(6)$의 값을 구하시오.\n(가) $f(3) > 0$\n(나) 모든 실수 $x$에 대하여 $(x-a)f(x) = x^2-5x+4$",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입! 분자 $x^2-5x+4=(x-1)(x-4)=0$에서 $a=1$ 또는 $a=4$. (가) 조건을 만족하는 $a$를 골라 대입합니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $a$ 후보]",
            "content": "$a=1$ 또는 $a=4$"
          },
          {
            "label": "[2단계: (가) 검증]",
            "content": "i) $a=1$이면 $f(x)=x-4 \\implies f(3)=-1 < 0$ (모순). ii) $a=4$이면 $f(x)=x-1 \\implies f(3)=2 > 0$ (만족!)"
          },
          {
            "label": "[3단계: $f(6)$ 계산]",
            "content": "$f(x) = x-1 \\implies f(6) = 6-1 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 44,
      "source": "AI 숫자 변형 (34번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 $(x-1)f(x)=x^3-2x^2+ax+b$ 를 만족시키고 $f(1)=3$일 때, $f(b)$의 값을 구하시오. (단, $a, b$는 상수이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입! $x=1$ 대입 시 $1-2+a+b=0 \\implies b = 1-a$. 조립제법 후 $\\lim_{x \\to 1} f(x) = f(1) = 3$을 적용합니다.",
      "answer": "15",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $x=1$ 대입]",
            "content": "$1-2+a+b=0 \\implies b = 1-a$"
          },
          {
            "label": "[2단계: 약분]",
            "content": "$x^3-2x^2+ax+1-a = (x-1)(x^2-x+a-1)$. $f(x) = x^2-x+a-1$"
          },
          {
            "label": "[3단계: $f(1)=3$ 적용]",
            "content": "$f(1) = 1-1+a-1 = a-1 = 3 \\implies a=4, b=1-4=-3$"
          },
          {
            "label": "[4단계: $f(b)$ 계산]",
            "content": "$f(x) = x^2-x+3 \\implies f(-3) = (-3)^2-(-3)+3 = 9+3+3 = 15$ $\\therefore$ **15**"
          }
        ]
      }
    }
  ]
};
