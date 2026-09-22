window.WORKSHEET_DATA = {
  "meta": {
    "title": "미적분 I / 수학 II - I. 함수의 극한과 연속",
    "subtitle": "비상 교과서 실전 핵심 (중단원 학습 점검 + 대단원 학습 평가 전수 수록)",
    "student": "",
    "date": "2026. 09. 19 (토)",
    "cheer": "완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "비상 교과서 25p 중단원 01번",
      "tag": "기초",
      "question": "다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} \\left(1 + \\frac{2}{x}\\right)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -1} \\frac{3}{(x+1)^2}"
        }
      ],
      "tip": "1단계: 선 대입하기! $x \\to \\infty$일 때 $\\frac{\\text{상수}}{x} \\to 0$이고, $x \\to -1$일 때 분모는 $+0$으로 수렴합니다.",
      "answer": "(1) 1, (2) 발산 (양의 무한대, $\\infty$)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x \\to \\infty$일 때 $\\frac{2}{x} \\to 0$이므로 $1+0 = 1$ $\\therefore$ **1**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x \\to -1$일 때 $(x+1)^2 \\to +0$이므로 $\\frac{3}{+0} \\to \\infty$ $\\therefore$ **발산 ($\\\\infty$)**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "비상 교과서 25p 중단원 02번",
      "tag": "기초",
      "question": "함수 $f(x) = \\begin{cases} x^2+1 & (x \\ge 2) \\\\ -x^2+2 & (x < 2) \\end{cases}$ 에서 다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 2+} f(x)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 2-} f(x)"
        }
      ],
      "tip": "1단계: 우극한($x>2$)과 좌극한($x<2$)에 해당하는 각 구간의 식에 $x=2$를 선 대입합니다.",
      "answer": "(1) 5, (2) -2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[우극한] $x > 2$이므로 $f(x)=x^2+1$에 대입: $2^2+1 = 5$ $\\therefore$ **5**"
          },
          {
            "label": "(2)",
            "content": "[좌극한] $x < 2$이므로 $f(x)=-x^2+2$에 대입: $-2^2+2 = -2$ $\\therefore$ **-2**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "비상 교과서 25p 중단원 03번",
      "tag": "기초",
      "question": "두 함수 $f(x)$, $g(x)$가 $\\lim_{x \\to 1} f(x)=2$, $\\lim_{x \\to 1} g(x)=3$을 만족시킬 때, 다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\{3f(x)+g(x)\\}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 1} \\{f(x)-2g(x)\\}"
        },
        {
          "no": 3,
          "formula": "\\lim_{x \\to 1} 2f(x)g(x)"
        },
        {
          "no": 4,
          "formula": "\\lim_{x \\to 1} \\frac{f(x)}{g(x)}"
        }
      ],
      "tip": "함수의 극한에 대한 기본 성질을 이용하여 각 극한값의 합, 차, 곱, 몫을 대입 계산합니다.",
      "answer": "(1) 9, (2) -4, (3) 12, (4) $\\frac{2}{3}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[극한 성질] $3(2) + 3 = 9$ $\\therefore$ **9**"
          },
          {
            "label": "(2)",
            "content": "[극한 성질] $2 - 2(3) = -4$ $\\therefore$ **-4**"
          },
          {
            "label": "(3)",
            "content": "[극한 성질] $2(2)(3) = 12$ $\\therefore$ **12**"
          },
          {
            "label": "(4)",
            "content": "[극한 성질] $\\frac{2}{3}$ $\\therefore$ **$\\frac{2}{3}$**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "비상 교과서 26p 중단원 04번",
      "tag": "기본",
      "question": "다음 극한을 조사하시오.",
      "formula": "\\lim_{x \\to 2} \\frac{x^2-5x+6}{|x-2|}",
      "subQuestions": [],
      "tip": "절댓값 함수의 극한은 반드시 우극한($x>2$)과 좌극한($x<2$)으로 나누어 $|x-2|$를 벗겨내어 비교합니다.",
      "answer": "극한값이 존재하지 않는다 (발산)",
      "solution": {
        "steps": [
          {
            "label": "[우극한]",
            "content": "$x \\to 2+$일 때 $|x-2|=x-2$이므로 $\\lim_{x \\to 2+} \\frac{(x-2)(x-3)}{x-2} = \\lim_{x \\to 2+} (x-3) = -1$"
          },
          {
            "label": "[좌극한]",
            "content": "$x \\to 2-$일 때 $|x-2|=-(x-2)$이므로 $\\lim_{x \\to 2-} \\frac{(x-2)(x-3)}{-(x-2)} = \\lim_{x \\to 2-} -(x-3) = 1$"
          },
          {
            "label": "[판정]",
            "content": "우극한($-1$)과 좌극한($1$)이 일치하지 않으므로 극한값은 존재하지 않는다. $\\therefore$ **극한값이 존재하지 않는다**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "비상 교과서 26p 중단원 05번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} -x^2+4 & (x \\ge 1) \\\\ 2x+a & (x < 1) \\end{cases}$ 에서 극한값 $\\lim_{x \\to 1} f(x)$가 존재할 때, 실수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "극한값이 존재할 조건은 $\\lim_{x \\to 1+} f(x) = \\lim_{x \\to 1-} f(x)$입니다. 각각 선 대입하여 일치시킵니다.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 우극한]",
            "content": "$\\lim_{x \\to 1+} f(x) = -1^2+4 = 3$"
          },
          {
            "label": "[2단계: 좌극한]",
            "content": "$\\lim_{x \\to 1-} f(x) = 2(1)+a = 2+a$"
          },
          {
            "label": "[3단계: 일치 조건]",
            "content": "극한값이 존재하므로 $3 = 2+a$ $\\implies$ $a=1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "비상 교과서 26p 중단원 06번",
      "tag": "기본",
      "question": "두 함수 $y=f(x)$, $y=g(x)$의 그래프가 다음 그림과 같다. $x=2$에서 $\\lim_{x \\to 2} f(x)=0$이고, $\\lim_{x \\to 2+} g(x)=2$, $\\lim_{x \\to 2-} g(x)=1$일 때, 보기 중 극한값이 존재하는 것을 모두 고르시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "각 보기에 대해 $x \\to 2+$와 $x \\to 2-$의 좌우극한을 각각 계산하여 일치 여부를 점검합니다.",
      "answer": "ㄷ, ㄹ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ, ㄴ 검증]",
            "content": "ㄱ: 우극한 $0+2=2$, 좌극한 $0+1=1$로 불일치. ㄴ: 우극한 $0-2=-2$, 좌극한 $0-1=-1$로 불일치."
          },
          {
            "label": "[ㄷ 검증]",
            "content": "우극한 $0 \\times 2 = 0$, 좌극한 $0 \\times 1 = 0$으로 0으로 일치하므로 존재."
          },
          {
            "label": "[ㄹ 검증]",
            "content": "우극한 $\\frac{0}{2}=0$, 좌극한 $\\frac{0}{1}=0$으로 0으로 일치하므로 존재. $\\therefore$ **ㄷ, ㄹ**"
          }
        ]
      },
      "qSuffix": "보기: ㄱ. $\\lim_{x \\to 2} \\{f(x)+g(x)\\}$   ㄴ. $\\lim_{x \\to 2} \\{f(x)-g(x)\\}$   ㄷ. $\\lim_{x \\to 2} f(x)g(x)$   ㄹ. $\\lim_{x \\to 2} \\frac{f(x)}{g(x)}$"
    },
    {
      "id": 7,
      "source": "비상 교과서 26p 중단원 07번",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 2} \\frac{x-2}{x^2-x-2}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 9} \\frac{x-9}{\\sqrt{x}-3}"
        },
        {
          "no": 3,
          "formula": "\\lim_{x \\to -2} (x+2)\\left(1 - \\frac{3}{x+2}\\right)"
        }
      ],
      "tip": "1단계: 선 대입 시 $\\frac{0}{0}$ 꼴! 2단계: 인수분해 및 유리화를 통해 공통인수를 약분하고 3단계: 재대입합니다.",
      "answer": "(1) $\\frac{1}{3}$, (2) 6, (3) -3",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[식 변형] $\\lim_{x \\to 2} \\frac{x-2}{(x-2)(x+1)} = \\lim_{x \\to 2} \\frac{1}{x+1} = \\frac{1}{3}$ $\\therefore$ **$\\frac{1}{3}$**"
          },
          {
            "label": "(2)",
            "content": "[유리화] $\\lim_{x \\to 9} \\frac{(x-9)(\\sqrt{x}+3)}{x-9} = \\lim_{x \\to 9} (\\sqrt{x}+3) = 3+3 = 6$ $\\therefore$ **6**"
          },
          {
            "label": "(3)",
            "content": "[통분 전개] $\\lim_{x \\to -2} \\left(x+2 - 3\\right) = \\lim_{x \\to -2} (x-1) = -2-1 = -3$ $\\therefore$ **-3**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "비상 교과서 26p 중단원 08번",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to -\\infty} \\frac{x-1}{|x|+3}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} \\frac{3x+1}{\\sqrt{x^2+1}-2}"
        }
      ],
      "tip": "1단계: 선 대입 전 $x \\to -\\infty$일 때는 $x=-t$로 치환하거나 절댓값 $|x|=-x$임을 적용합니다. 2단계: 최고차항으로 나누어 계산합니다.",
      "answer": "(1) -1, (2) 3",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[치환/절댓값] $x < 0$이므로 $|x|=-x$. $\\lim_{x \\to -\\infty} \\frac{x-1}{-x+3} = \\lim_{x \\to -\\infty} \\frac{1-\\frac{1}{x}}{-1+\\frac{3}{x}} = -1$ $\\therefore$ **-1**"
          },
          {
            "label": "(2)",
            "content": "[최고차항 나누기] 분모·분자를 $x$로 나누면 $\\lim_{x \\to \\infty} \\frac{3+\\frac{1}{x}}{\\sqrt{1+\\frac{1}{x^2}}-\\frac{2}{x}} = \\frac{3}{1} = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "비상 교과서 26p 중단원 09번",
      "tag": "기본",
      "question": "등식 $\\lim_{x \\to \\infty} \\left(\\sqrt{x^2+ax+4} - \\sqrt{x^2+x+2}\\right) = 5$ 가 성립할 때, 실수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $\\infty - \\infty$ 꼴이므로 분자를 유리화합니다. 2단계: 분모·분자를 $x$로 나누어 최고차항 계수비를 구합니다.",
      "answer": "11",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 유리화]",
            "content": "$\\lim_{x \\to \\infty} \\frac{(x^2+ax+4)-(x^2+x+2)}{\\sqrt{x^2+ax+4}+\\sqrt{x^2+x+2}} = \\lim_{x \\to \\infty} \\frac{(a-1)x+2}{\\sqrt{x^2+ax+4}+\\sqrt{x^2+x+2}}$"
          },
          {
            "label": "[2단계: 최고차항 계수비]",
            "content": "분모·분자를 $x$로 나누면 $\\frac{a-1}{1+1} = \\frac{a-1}{2}$"
          },
          {
            "label": "[3단계: 방정식 풀이]",
            "content": "$\\frac{a-1}{2} = 5$ $\\implies$ $a-1 = 10$ $\\implies$ $a=11$ $\\therefore$ **11**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "비상 교과서 27p 중단원 10번",
      "tag": "기본",
      "question": "함수 $f(x)$에 대하여 $\\lim_{x \\to \\infty} \\frac{f(x)}{x}$의 값이 존재할 때, 극한값 $\\lim_{x \\to \\infty} \\frac{3x^2+2f(x)}{x^2-f(x)}$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "주어진 조건 $\\lim_{x \\to \\infty} \\frac{f(x)}{x} = L$을 활용하기 위해 구하는 식의 분모와 분자를 $x^2$으로 나누어 극한의 기본 성질을 적용해 대입합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 변형]",
            "content": "분모와 분자를 $x^2$으로 나누면: $\\frac{3 + 2\\cdot \\frac{f(x)}{x}\\cdot \\frac{1}{x}}{1 - \\frac{f(x)}{x}\\cdot \\frac{1}{x}}$"
          },
          {
            "label": "[2단계: 극한 적용]",
            "content": "$\\lim_{x \\to \\infty} \\frac{f(x)}{x} = L$이고 $\\lim_{x \\to \\infty} \\frac{1}{x} = 0$이므로 $\\lim_{x \\to \\infty} \\left(\\frac{f(x)}{x}\\cdot \\frac{1}{x}\\right) = L \\cdot 0 = 0$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\frac{3 + 2(0)}{1 - 0} = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "비상 교과서 27p 중단원 11번",
      "tag": "기본",
      "question": "다음 등식이 성립하도록 하는 실수 $a$, $b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\frac{ax^2+bx-1}{x-1} = 2"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 4} \\frac{ax+b}{\\sqrt{x+1}-\\sqrt{5}} = \\sqrt{5}"
        }
      ],
      "tip": "1단계: $x \\to c$일 때 분모 $\\to 0$이면 분자 $\\to 0$이어야 합니다. 2단계: 문자를 소거하고 인수분해·유리화하여 극한값을 맞춥니다.",
      "answer": "(1) $a=1, b=0$, (2) $a=\\frac{1}{2}, b=-2$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[조건] $x \\to 1$일 때 분모 $\\to 0$이므로 $a+b-1=0 \\implies b=1-a$. 식에 대입: $\\lim_{x \\to 1} \\frac{ax^2+(1-a)x-1}{x-1} = \\lim_{x \\to 1} \\frac{(x-1)(ax+1)}{x-1} = a+1 = 2 \\implies a=1, b=0$ $\\therefore$ **$a=1, b=0$**"
          },
          {
            "label": "(2)",
            "content": "[조건] $x \\to 4$일 때 분모 $\\to 0$이므로 $4a+b=0 \\implies b=-4a$. 유리화: $\\lim_{x \\to 4} \\frac{a(x-4)(\\sqrt{x+1}+\\sqrt{5})}{x-4} = a(2\\sqrt{5}) = \\sqrt{5} \\implies a=\\frac{1}{2}, b=-2$ $\\therefore$ **$a=\\frac{1}{2}, b=-2$**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "비상 교과서 27p 중단원 12번",
      "tag": "도전",
      "question": "함수 $f(x)$가 모든 양의 실수 $x$에 대하여 $2x^2-x < (x+1)f(x) < 2x^2+x$ 를 만족시킬 때, 극한값 $\\lim_{x \\to \\infty} \\frac{\\{f(x)\\}^2}{2x^2-x+1}$을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 극한의 대소 관계(샌드위치 정리)를 이용합니다. 양변을 $x(x+1)$로 나누어 $\\frac{f(x)}{x}$의 극한값을 먼저 구합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 샌드위치 부등식]",
            "content": "$x>0$이므로 부등식의 각 변을 $x(x+1)$로 나누면: $\\frac{2x^2-x}{x(x+1)} < \\frac{f(x)}{x} < \\frac{2x^2+x}{x(x+1)}$"
          },
          {
            "label": "[2단계: 극한 도출]",
            "content": "$\\lim_{x \\to \\infty} \\frac{2x^2-x}{x^2+x} = 2$, $\\lim_{x \\to \\infty} \\frac{2x^2+x}{x^2+x} = 2$이므로 $\\lim_{x \\to \\infty} \\frac{f(x)}{x} = 2$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$\\lim_{x \\to \\infty} \\frac{\\{f(x)\\}^2}{2x^2-x+1} = \\lim_{x \\to \\infty} \\frac{\\{\\frac{f(x)}{x}\\}^2}{2 - \\frac{1}{x} + \\frac{1}{x^2}} = \\frac{2^2}{2} = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "비상 교과서 27p 중단원 13번",
      "tag": "도전",
      "question": "두 점 $\\mathrm{A}(0, t)$ ($t>0$), $\\mathrm{B}(-1, 0)$을 지나는 직선과 원 $x^2+y^2=1$의 교점 중 $\\mathrm{B}$가 아닌 점을 $\\mathrm{P}$라고 하자. 점 $\\mathrm{P}$에서 $x$축에 내린 수선의 발을 $\\mathrm{H}$라고 할 때, 극한값 $\\lim_{t \\to \\infty} (\\overline{\\mathrm{OA}} \\times \\overline{\\mathrm{PH}})$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "두 점 $\\mathrm{A}, \\mathrm{B}$를 지나는 직선의 방정식을 세우고 원의 방정식과 연립하여 점 $\\mathrm{P}$의 $y$좌표를 구한 뒤 극한식에 대입합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 직선의 방정식]",
            "content": "기울기 $\\frac{t-0}{0-(-1)} = t$, $y$절편 $t$이므로 직선은 $y = tx+t$, 즉 $x = \\frac{y}{t}-1$"
          },
          {
            "label": "[2단계: 교점 P의 y좌표]",
            "content": "원 $x^2+y^2=1$에 대입: $\\left(\\frac{y}{t}-1\\right)^2+y^2=1 \\implies \\frac{y^2}{t^2}-\\frac{2y}{t}+1+y^2=1 \\implies y\\left(\\frac{t^2+1}{t^2}y - \\frac{2}{t}\\right)=0$. $y \\ne 0$이므로 $y = \\frac{2t}{t^2+1}$"
          },
          {
            "label": "[3단계: 극한 계산]",
            "content": "$\\overline{\\mathrm{OA}} = t$, $\\overline{\\mathrm{PH}} = \\frac{2t}{t^2+1}$이므로 $\\lim_{t \\to \\infty} (t \\times \\frac{2t}{t^2+1}) = \\lim_{t \\to \\infty} \\frac{2t^2}{t^2+1} = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "비상 교과서 27p 중단원 14번",
      "tag": "도전",
      "question": "다항함수 $g(x)$에 대하여 $\\lim_{x \\to 2} \\frac{g(x)-x^2}{x-2}$의 값이 존재하고, 다항함수 $f(x)$가 $f(x)+(x-2)^2 = (x-2)g(x)$를 만족시킬 때, 극한값 $\\lim_{x \\to 2} \\frac{f(x)g(x)}{x^2-4}$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $x \\to 2$일 때 분모 $\\to 0$이므로 선 대입하여 $g(2)-4=0 \\implies g(2)=4$. 2단계: 주어진 등식에서 $f(x)$를 대입하고 $(x-2)$를 약분합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: g(2)의 값 도출]",
            "content": "$\\lim_{x \\to 2} \\frac{g(x)-x^2}{x-2}$가 수렴하고 분모 $\\to 0$이므로 분자 $\\lim_{x \\to 2} (g(x)-x^2)=0 \\implies g(2)=4$"
          },
          {
            "label": "[2단계: f(x) 대입 및 인수분해]",
            "content": "$f(x)=(x-2)g(x)-(x-2)^2 = (x-2)\\{g(x)-(x-2)\\}$. 따라서 $\\frac{f(x)g(x)}{x^2-4} = \\frac{(x-2)\\{g(x)-(x-2)\\}g(x)}{(x-2)(x+2)} = \\frac{\\{g(x)-(x-2)\\}g(x)}{x+2}$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x=2$를 대입하면: $\\frac{\\{4-0\\}\\times 4}{2+2} = \\frac{16}{4} = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "비상 교과서 40p 중단원 01번",
      "tag": "기초",
      "question": "다음 함수가 $x=3$에서 연속인지 불연속인지 판정하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = \\frac{2}{x+1}"
        },
        {
          "no": 2,
          "formula": "f(x) = \\begin{cases} x+1 & (x \\ne 3) \\\\ -2 & (x=3) \\end{cases}"
        }
      ],
      "tip": "연속의 정의 3조건 점검: 1단계: 함숫값 $f(a)$ 정의 여부, 2단계: 극한값 $\\lim_{x \\to a} f(x)$ 존재 여부, 3단계: 극한값과 함숫값 일치 여부.",
      "answer": "(1) 연속, (2) 불연속",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$f(3) = \\frac{2}{3+1} = \\frac{1}{2}$, $\\lim_{x \\to 3} \\frac{2}{x+1} = \\frac{1}{2}$로 일치하므로 $\\therefore$ **연속**"
          },
          {
            "label": "(2)",
            "content": "$f(3) = -2$, $\\lim_{x \\to 3} (x+1) = 4$. 함숫값과 극한값이 다르므로 $\\therefore$ **불연속**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "비상 교과서 40p 중단원 02번",
      "tag": "기초",
      "question": "다음 함수가 연속인 구간을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = x^2+x+3"
        },
        {
          "no": 2,
          "formula": "f(x) = \\sqrt{2x-4}"
        }
      ],
      "tip": "다항함수는 모든 실수 구간 $(-\\infty, \\infty)$에서 연속이고, 무리함수는 근호 안이 $0$ 이상인 구간에서 연속입니다.",
      "answer": "(1) $(-\\infty, \\infty)$, (2) $[2, \\infty)$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "다항함수이므로 모든 실수 구간에서 연속 $\\therefore$ **$(-\\infty, \\infty)$**"
          },
          {
            "label": "(2)",
            "content": "근호 안 $2x-4 \\ge 0 \\implies x \\ge 2$이므로 $\\therefore$ **$[2, \\infty)$**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "비상 교과서 40p 중단원 03번",
      "tag": "기초",
      "question": "두 함수 $f(x)=x^2+1$, $g(x)=x^2-2x-3$에 대하여 다음 함수의 연속성을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\frac{f(x)}{g(x)}"
        },
        {
          "no": 2,
          "formula": "\\frac{g(x)}{f(x)}"
        }
      ],
      "tip": "유리함수 $\\frac{f(x)}{g(x)}$는 분모가 $0$이 되지 않는 모든 실수에서 연속입니다.",
      "answer": "(1) $x \\ne -1, x \\ne 3$인 모든 실수에서 연속, (2) 모든 실수에서 연속",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "분모 $g(x)=(x+1)(x-3)=0 \\implies x=-1, 3$에서 불연속 $\\therefore$ **$x \\ne -1, x \\ne 3$인 모든 실수에서 연속**"
          },
          {
            "label": "(2)",
            "content": "분모 $f(x)=x^2+1 \\ge 1 > 0$이므로 분모가 $0$이 되는 실수가 없다 $\\therefore$ **모든 실수에서 연속**"
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "비상 교과서 40p 중단원 04번",
      "tag": "기초",
      "question": "다음 구간에서 함수의 최댓값과 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = x^2+2x-5 \\quad [-4, 1]"
        },
        {
          "no": 2,
          "formula": "f(x) = \\sqrt{x-2} \\quad [3, 6]"
        }
      ],
      "tip": "최대·최소 정리: 닫힌구간에서 연속인 함수는 반드시 최댓값과 최솟값을 갖습니다. 꼭짓점 및 양 끝값을 비교합니다.",
      "answer": "(1) 최댓값: 3, 최솟값: -6, (2) 최댓값: 2, 최솟값: 1",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$f(x)=(x+1)^2-6$. 꼭짓점 $x=-1 \\in [-4, 1]$에서 최솟값 $f(-1)=-6$. 양 끝값 $f(-4)=3, f(1)=-2$이므로 최댓값은 3 $\\therefore$ **최댓값: 3, 최솟값: -6**"
          },
          {
            "label": "(2)",
            "content": "증가함수이므로 $x=6$에서 최댓값 $f(6)=\\sqrt{4}=2$, $x=3$에서 최솟값 $f(3)=\\sqrt{1}=1$ $\\therefore$ **최댓값: 2, 최솟값: 1**"
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "비상 교과서 41p 중단원 05번",
      "tag": "기본",
      "question": "함수 $y=f(x)$의 그래프가 $(0, 5)$에서 정의될 때, 다음 보기 중 옳은 것을 모두 고르시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "열린구간 $(0, 5)$ 내의 각 점에서 좌극한, 우극한, 함숫값을 그래프에서 차례로 확인하여 대입합니다.",
      "answer": "ㄱ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ 판정]",
            "content": "$x \\to 1$일 때 좌우 극한값은 모두 4이므로 $\\lim_{x \\to 1} f(x)=4$는 참."
          },
          {
            "label": "[ㄴ 판정]",
            "content": "열린구간 $(0, 5)$에서 $x=0$은 정의역 범위 밖이거나 우극한만 존재하므로 거짓."
          },
          {
            "label": "[ㄷ 판정]",
            "content": "불연속점은 $x=1$ (극한값 $4 \\ne$ 함숫값 $1$), $x=4$ (좌극한 $3 \\ne$ 함숫값 $2$)의 2개이므로 참."
          },
          {
            "label": "[ㄹ 판정]",
            "content": "$x=1$은 극한값 4 존재, $x=4$도 극한값 3 존재하여 극한값이 존재하지 않는 점은 0개이므로 거짓 $\\therefore$ **ㄱ, ㄷ**"
          }
        ]
      },
      "qSuffix": "보기: ㄱ. $\\lim_{x \\to 1} f(x)=4$   ㄴ. $\\lim_{x \\to 0} f(x)=f(0)$   ㄷ. 열린구간 $(0, 5)$에서 $f(x)$가 불연속인 $x$의 값은 2개이다.   ㄹ. 열린구간 $(0, 5)$에서 $f(x)$의 극한값이 존재하지 않는 $x$의 값은 2개이다."
    },
    {
      "id": 20,
      "source": "비상 교과서 41p 중단원 06번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} \\frac{x^2+ax+b}{x-2} & (x>2) \\\\ 3 & (x \\le 2) \\end{cases}$ 가 모든 실수 $x$에서 연속일 때, 실수 $a$, $b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $x=2$에서 연속이려면 $\\lim_{x \\to 2+} f(x) = f(2) = 3$이어야 합니다. 2단계: 분모 $\\to 0$이므로 분자 $\\to 0$을 적용합니다.",
      "answer": "$a=-1, b=-2$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 수렴 조건]",
            "content": "$x \\to 2+$일 때 분모 $\\to 0$이므로 $2^2+2a+b=0 \\implies b=-2a-4$"
          },
          {
            "label": "[2단계: 인수분해 및 약분]",
            "content": "$\\lim_{x \\to 2+} \\frac{x^2+ax-2a-4}{x-2} = \\lim_{x \\to 2+} \\frac{(x-2)(x+a+2)}{x-2} = 2+a+2 = a+4$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$a+4 = 3 \\implies a=-1$. 따라서 $b = -2(-1)-4 = -2$ $\\therefore$ **$a=-1, b=-2$**"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "비상 교과서 41p 중단원 07번",
      "tag": "기본",
      "question": "모든 실수 $x$에서 함수 $f(x) = \\begin{cases} 3x^2-1 & (x \\ge a) \\\\ 2-5x & (x < a) \\end{cases}$ 가 연속일 때, 모든 실수 $a$의 값의 곱을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "경계점 $x=a$에서 좌극한과 우극한이 일치해야 연속입니다. 즉 $3a^2-1 = 2-5a$를 만족하는 $a$에 대해 이차방정식 근과 계수의 관계를 적용합니다.",
      "answer": "-1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건]",
            "content": "$x=a$에서 $3a^2-1 = 2-5a$ $\\implies$ $3a^2+5a-3=0$"
          },
          {
            "label": "[2단계: 근의 판별]",
            "content": "판별식 $D = 5^2 - 4(3)(-3) = 25+36 = 61 > 0$이므로 서로 다른 두 실근이 존재합니다."
          },
          {
            "label": "[3단계: 두 근의 곱]",
            "content": "근과 계수의 관계에 의해 두 근의 곱은 $\\frac{-3}{3} = -1$ $\\therefore$ **-1**"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "비상 교과서 41p 중단원 08번",
      "tag": "기본",
      "question": "$x \\ge 2$인 모든 실수 $x$에서 연속인 함수 $f(x)$가 $(x-3)f(x) = \\sqrt{x+a}-1$ 을 만족시킬 때, $f(3)$의 값을 구하시오. (단, $a$는 실수)",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $f(x)$가 $x=3$에서 연속이므로 $f(3) = \\lim_{x \\to 3} f(x)$입니다. 2단계: 분모 $\\to 0$일 때 분자 $\\to 0$을 적용하여 $a$를 구합니다.",
      "answer": "$\\frac{1}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 미정계수 a 결정]",
            "content": "$x \\to 3$일 때 분모 $x-3 \\to 0$이므로 분자 $\\sqrt{3+a}-1 = 0 \\implies 3+a=1 \\implies a=-2$"
          },
          {
            "label": "[2단계: 유리화 및 극한 계산]",
            "content": "$f(3) = \\lim_{x \\to 3} \\frac{\\sqrt{x-2}-1}{x-3} = \\lim_{x \\to 3} \\frac{x-3}{(x-3)(\\sqrt{x-2}+1)} = \\lim_{x \\to 3} \\frac{1}{\\sqrt{x-2}+1}$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x=3$을 대입하면 $\\frac{1}{1+1} = \\frac{1}{2}$ $\\therefore$ **$\\frac{1}{2}$**"
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "비상 교과서 41p 중단원 09번",
      "tag": "기본",
      "question": "$x \\ge 0$인 모든 실수 $x$에서 연속인 함수 $f(x)$가 $\\lim_{x \\to 1} \\frac{(\\sqrt{x}-1)f(x)}{x^3-1} = 5$ 를 만족시킬 때, $f(1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입 시 $\\frac{0}{0}$ 꼴! 분자·분모의 0이 되는 인수 $(\\sqrt{x}-1)$을 약분하도록 인수분해합니다.",
      "answer": "30",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 인수분해]",
            "content": "$x^3-1 = (x-1)(x^2+x+1) = (\\sqrt{x}-1)(\\sqrt{x}+1)(x^2+x+1)$"
          },
          {
            "label": "[2단계: 약분 및 극한 식 정리]",
            "content": "$\\lim_{x \\to 1} \\frac{(\\sqrt{x}-1)f(x)}{(\\sqrt{x}-1)(\\sqrt{x}+1)(x^2+x+1)} = \\lim_{x \\to 1} \\frac{f(x)}{(\\sqrt{x}+1)(x^2+x+1)}$"
          },
          {
            "label": "[3단계: 재대입 및 f(1) 계산]",
            "content": "함수 $f(x)$가 연속이므로 대입: $\\frac{f(1)}{(1+1)(1+1+1)} = \\frac{f(1)}{2 \\times 3} = \\frac{f(1)}{6} = 5 \\implies f(1) = 30$ $\\therefore$ **30**"
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "비상 교과서 42p 중단원 10번",
      "tag": "기본",
      "question": "두 함수 $f(x)$, $g(x)$가 각각 $x=a$에서 연속일 때, 다음 보기 중 $x=a$에서 반드시 연속인 함수를 모두 고르시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "연속함수의 성질: 연속함수끼리의 실수배, 합, 차, 곱은 항상 연속이며, 몫은 분모가 $0$이 아닐 때만 연속입니다.",
      "answer": "ㄱ, ㄴ, ㄹ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ, ㄴ 검증]",
            "content": "ㄱ: 실수배 및 차이므로 항상 연속. ㄴ: $f(x) \\times f(x)$ 곱이므로 항상 연속."
          },
          {
            "label": "[ㄷ 검증]",
            "content": "$g(a)=0$일 수 있으므로 분모가 0이 되어 불연속일 수 있다 (반례: $f(x)=1, g(x)=x-a$)."
          },
          {
            "label": "[ㄹ 검증]",
            "content": "분모 $\\{f(x)\\}^2+1 \\ge 1 > 0$이므로 분모가 절대 0이 되지 않아 항상 연속이다. $\\therefore$ **ㄱ, ㄴ, ㄹ**"
          }
        ]
      },
      "qSuffix": "보기: ㄱ. $2f(x)-g(x)$   ㄴ. $\\{f(x)\\}^2$   ㄷ. $\\frac{f(x)}{g(x)}$   ㄹ. $\\frac{2}{\\{f(x)\\}^2+1}$"
    },
    {
      "id": 25,
      "source": "비상 교과서 42p 중단원 11번",
      "tag": "기본",
      "question": "닫힌구간 $[1, 3]$에서 함수 $f(x) = \\frac{a}{|x-4|}$의 최댓값이 8일 때, 양수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "구간 $[1, 3]$에서 $x-4 < 0$이므로 $|x-4| = -(x-4) = 4-x$입니다. 분모가 최소일 때 분수함수는 최대가 됩니다.",
      "answer": "8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 절댓값 정리]",
            "content": "$x \\in [1, 3]$에서 $|x-4|=4-x$이므로 $f(x)=\\frac{a}{4-x}$ ($a>0$)"
          },
          {
            "label": "[2단계: 최댓값 발생 지점]",
            "content": "분모 $4-x$는 $x=3$일 때 최솟값 $4-3=1$을 갖습니다. 분모가 최소일 때 $f(x)$는 최대가 됩니다."
          },
          {
            "label": "[3단계: a 계산]",
            "content": "$f(3) = \\frac{a}{4-3} = a = 8$ $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "비상 교과서 42p 중단원 12번",
      "tag": "기본",
      "question": "방정식 $2x^3-3x^2-x+1=0$은 서로 다른 세 실근을 갖는다. 다음 보기 중 이 실근이 존재하는 구간을 모두 고르시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리: 연속함수 $f(x)$에 대하여 $f(a)f(b)<0$이면 열린구간 $(a, b)$에서 적어도 하나의 실근을 갖습니다.",
      "answer": "ㄱ, ㄴ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[함숫값 계산]",
            "content": "$f(x)=2x^3-3x^2-x+1$이라 두면: $f(-1)=-3 < 0$, $f(0)=1 > 0$, $f(1)=-1 < 0$, $f(2)=3 > 0$, $f(3)=25 > 0$"
          },
          {
            "label": "[부호 판정]",
            "content": "ㄱ: $f(-1)f(0) < 0$ (실근 존재). ㄴ: $f(0)f(1) < 0$ (실근 존재). ㄷ: $f(1)f(2) < 0$ (실근 존재). ㄹ: $f(2)f(3) > 0$."
          },
          {
            "label": "[결론]",
            "content": "실근이 존재하는 구간은 ㄱ, ㄴ, ㄷ $\\therefore$ **ㄱ, ㄴ, ㄷ**"
          }
        ]
      },
      "qSuffix": "보기: ㄱ. $(-1, 0)$   ㄴ. $(0, 1)$   ㄷ. $(1, 2)$   ㄹ. $(2, 3)$"
    },
    {
      "id": 27,
      "source": "비상 교과서 42p 중단원 13번",
      "tag": "도전",
      "question": "두 함수 $f(x)=x^2+ax+b$, $g(x) = \\begin{cases} x^2 & (|x|<1) \\\\ 2 & (|x| \\ge 1) \\end{cases}$ 에 대하여 함수 $f(x)g(x)$가 모든 실수 $x$에서 연속일 때, 실수 $a$, $b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수 $g(x)$가 $x=\\pm 1$에서 불연속이므로, 곱함수 $f(x)g(x)$가 연속이 되려면 $x=1$과 $x=-1$에서 좌우극한과 함숫값이 일치해야 합니다.",
      "answer": "$a=0, b=-1$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=1에서 연속]",
            "content": "$\\lim_{x \\to 1+} f(x)g(x) = 2(1+a+b)$, $\\lim_{x \\to 1-} f(x)g(x) = 1(1+a+b)$. 일치하려면 $1+a+b=0 \\implies a+b=-1$"
          },
          {
            "label": "[2단계: x=-1에서 연속]",
            "content": "$\\lim_{x \\to -1-} f(x)g(x) = 2(1-a+b)$, $\\lim_{x \\to -1+} f(x)g(x) = 1(1-a+b)$. 일치하려면 $1-a+b=0 \\implies a-b=1$"
          },
          {
            "label": "[3단계: 연립방정식 풀이]",
            "content": "$a+b=-1$, $a-b=1$을 연립하면 $2a=0 \\implies a=0$, $b=-1$ $\\therefore$ **$a=0, b=-1$**"
          }
        ]
      }
    },
    {
      "id": 28,
      "source": "비상 교과서 42p 중단원 14번",
      "tag": "도전",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$에 대하여 $f(-3)f(-1)<0$, $f(1)f(3)<0$이고 $f(1)=-1$이다. 방정식 $f(x)=0$이 열린구간 $(-3, 3)$에서 오직 두 개의 실근을 가질 때, 두 함수 $y=f(x)$, $y=-2x^3$의 그래프는 $-1<x<1$에서 적어도 하나의 교점을 가짐을 보이시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리: 연속함수의 성질을 이용합니다. $g(x)=f(x)+2x^3$이라 두고 구간 $[-1, 1]$에서의 부호 $g(-1)g(1)<0$임을 논증합니다.",
      "answer": "풀이 참조 (사잇값 정리에 의해 적어도 하나의 교점 존재)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(-1)의 부호 판정]",
            "content": "$f(1)=-1 < 0$이고 $f(x)=0$이 $(-3, 3)$에서 오직 두 실근을 가지며 $(-3, -1)$, $(1, 3)$에서 각각 실근을 가지므로, $(-1, 1)$에는 실근이 없어야 합니다. $f(1)<0$이므로 구간 $[-1, 1]$에서 $f(x)<0$, 즉 $f(-1)<0$입니다."
          },
          {
            "label": "[2단계: 함수 g(x) 설정]",
            "content": "$g(x)=f(x)+2x^3$이라 두면 $g(x)$는 닫힌구간 $[-1, 1]$에서 연속입니다."
          },
          {
            "label": "[3단계: 양 끝값 부호 및 사잇값 정리]",
            "content": "$g(-1)=f(-1)-2 < 0$이고, $g(1)=f(1)+2 = -1+2 = 1 > 0$. 따라서 $g(-1)g(1)<0$이므로 사잇값 정리에 의해 $g(c)=0$, 즉 $f(c)=-2c^3$인 $c$가 열린구간 $(-1, 1)$에 적어도 하나 존재합니다."
          }
        ]
      }
    },
    {
      "id": 29,
      "source": "비상 교과서 44p 대단원 01번",
      "tag": "대단원",
      "question": "두 함수 $f(x)$, $g(x)$에 대하여 $\\lim_{x \\to 2} f(x)=3$, $\\lim_{x \\to 2} g(x)=\\alpha$이고 $\\lim_{x \\to 2} f(x)g(x)=-6$일 때, 극한값 $\\lim_{x \\to 2} \\{3f(x)+2g(x)\\}$를 구하시오. (단, $\\alpha$는 실수)",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 극한의 성질: $\\lim f(x)g(x) = \\lim f(x) \\times \\lim g(x)$를 이용하여 $\\alpha$를 구한 후 대입합니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: alpha 계산]",
            "content": "$\\lim_{x \\to 2} f(x)g(x) = 3\\alpha = -6 \\implies \\alpha = -2$"
          },
          {
            "label": "[2단계: 대입 계산]",
            "content": "$\\lim_{x \\to 2} \\{3f(x)+2g(x)\\} = 3(3) + 2(-2) = 9 - 4 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 30,
      "source": "비상 교과서 44p 대단원 02번",
      "tag": "대단원",
      "question": "다음 중 극한값 계산이 옳지 않은 것은?",
      "formula": "",
      "subQuestions": [],
      "tip": "각 선지의 극한값을 유리화 및 인수분해로 직접 계산하여 올바른 값을 검증합니다.",
      "answer": "⑤ (올바른 극한값은 -1)",
      "solution": {
        "steps": [
          {
            "label": "[선지 ①~④ 검증]",
            "content": "①: $1-4+1=-2$ (참). ②: $\\frac{(x-1)(3x+1)}{x-1} \\to 4$ (참). ③: 유리화 $\\frac{x}{x(1+\\sqrt{1-x})} \\to \\frac{1}{2}$ (참). ④: 최고차항 계수비 2 (참)."
          },
          {
            "label": "[선지 ⑤ 계산]",
            "content": "$\\lim_{x \\to \\infty} (\\sqrt{x^2-2x}-x) = \\lim_{x \\to \\infty} \\frac{-2x}{\\sqrt{x^2-2x}+x} = \\frac{-2}{1+1} = -1$. 1이 아니므로 옳지 않다 $\\therefore$ **⑤**"
          }
        ]
      },
      "qSuffix": "① $\\lim_{x \\to 1} (x^2-4x+1) = -2$   ② $\\lim_{x \\to 1} \\frac{3x^2-2x-1}{x-1} = 4$   ③ $\\lim_{x \\to 0} \\frac{1-\\sqrt{1-x}}{x} = \\frac{1}{2}$   ④ $\\lim_{x \\to \\infty} \\frac{2x^2-5x+7}{x^2+1} = 2$   ⑤ $\\lim_{x \\to \\infty} (\\sqrt{x^2-2x}-x) = 1$"
    },
    {
      "id": 31,
      "source": "비상 교과서 44p 대단원 03번",
      "tag": "대단원",
      "question": "함수 $f(x)=ax+b$가 $\\lim_{x \\to 1} \\frac{(x^2+1)f(x)}{x^4-1} = 2$ 를 만족시킬 때, 실수 $a$, $b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $x \\to 1$일 때 분모 $x^4-1 \\to 0$이므로 분자 $2f(1)=0 \\implies f(1)=0$. 2단계: 인수분해하여 약분합니다.",
      "answer": "$a=4, b=-4$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(1)=0]",
            "content": "$x^4-1=(x^2-1)(x^2+1)$이므로 분모 $\\to 0$에서 $f(1)=a+b=0 \\implies b=-a$"
          },
          {
            "label": "[2단계: 식 변형 및 약분]",
            "content": "$\\lim_{x \\to 1} \\frac{(x^2+1)a(x-1)}{(x-1)(x+1)(x^2+1)} = \\lim_{x \\to 1} \\frac{a}{x+1} = \\frac{a}{2} = 2$"
          },
          {
            "label": "[3단계: a, b 산출]",
            "content": "$\\frac{a}{2}=2 \\implies a=4$, $b=-4$ $\\therefore$ **$a=4, b=-4$**"
          }
        ]
      }
    },
    {
      "id": 32,
      "source": "비상 교과서 44p 대단원 04번",
      "tag": "대단원",
      "question": "양수 $a$에 대하여 원 $x^2+(y-a)^2=a^2$이 곡선 $y=-x^2+a$와 만나는 점 중 제1사분면 위의 점을 $\\mathrm{P}$라고 하자. 점 $\\mathrm{P}$에서 $y$축에 내린 수선의 발을 $\\mathrm{Q}$라 하고, 원의 중심을 $\\mathrm{C}$라고 할 때, 극한값 $\\lim_{a \\to 0+} \\frac{\\overline{\\mathrm{OQ}}}{\\overline{\\mathrm{OC}}}$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "점 $\\mathrm{P}$는 원과 포물선의 교점이므로 두 식을 연립하여 점 $\\mathrm{P}$의 $y$좌표를 $a$에 관한 식으로 나타내어 대입하고 유리화합니다.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점 P의 y좌표]",
            "content": "곡선 식에서 $x^2 = a-y$. 원에 대입: $(a-y)+(y-a)^2 = a^2 \\implies a-y+y^2-2ay+a^2=a^2 \\implies y^2-(2a+1)y+a=0$. 근의 공식에서 $0<y<a$이므로 $y = \\frac{2a+1-\\sqrt{(2a+1)^2-4a}}{2} = \\frac{2a+1-\\sqrt{4a^2+1}}{2}$"
          },
          {
            "label": "[2단계: 선분 길이 표현]",
            "content": "$\\overline{\\mathrm{OC}}=a$, $\\overline{\\mathrm{OQ}}=y = \\frac{2a+1-\\sqrt{4a^2+1}}{2}$"
          },
          {
            "label": "[3단계: 극한 계산 및 유리화]",
            "content": "$\\lim_{a \\to 0+} \\frac{\\overline{\\mathrm{OQ}}}{\\overline{\\mathrm{OC}}} = \\lim_{a \\to 0+} \\frac{2a+1-\\sqrt{4a^2+1}}{2a} = \\lim_{a \\to 0+} \\frac{(4a^2+4a+1)-(4a^2+1)}{2a(2a+1+\\sqrt{4a^2+1})} = \\lim_{a \\to 0+} \\frac{4a}{2a(2a+1+\\sqrt{4a^2+1})} = \\frac{4}{2(1+1)} = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 33,
      "source": "비상 교과서 44p 대단원 05번",
      "tag": "대단원",
      "question": "함수 $f(x)$가 모든 실수 $x$에 대하여 $-3x^2+2x \\le f(x) \\le x^2+2x$ 를 만족시킬 때, 극한값 $\\lim_{x \\to 0+} \\frac{\\{f(x)\\}^2}{3x^2-xf(x)}$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $x>0$일 때 부등식의 각 변을 $x$로 나누어 샌드위치 정리로 $\\lim_{x \\to 0+} \\frac{f(x)}{x}$를 구합니다. 2단계: 구하는 식의 분모·분자를 $x^2$으로 나눕니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(x)/x의 극한]",
            "content": "$x>0$이므로 각 변을 $x$로 나누면: $-3x+2 \\le \\frac{f(x)}{x} \\le x+2$. $x \\to 0+$일 때 양변 모두 2로 수렴하므로 $\\lim_{x \\to 0+} \\frac{f(x)}{x} = 2$"
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "구하는 식의 분모·분자를 $x^2$으로 나누면: $\\lim_{x \\to 0+} \\frac{\\{\\frac{f(x)}{x}\\}^2}{3 - \\frac{f(x)}{x}}$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$\\frac{2^2}{3-2} = \\frac{4}{1} = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 34,
      "source": "비상 교과서 45p 대단원 06번",
      "tag": "대단원",
      "question": "다음 보기 중 $x=0$에서 연속인 함수를 모두 고르시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "각 보기에 대해 $x=0$에서의 함숫값과 좌우극한이 일치하는지 확인합니다.",
      "answer": "ㄱ, ㄹ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ 검증]",
            "content": "$\\lim_{x \\to 0} |x| = 0 = f(0)$이므로 연속."
          },
          {
            "label": "[ㄴ 검증]",
            "content": "$x=0$에서 분모가 0이 되어 함숫값이 정의되지 않으므로 불연속."
          },
          {
            "label": "[ㄷ 검증]",
            "content": "$\\lim_{x \\to 0} \\frac{1}{x}$는 발산하므로 불연속."
          },
          {
            "label": "[ㄹ 검증]",
            "content": "$f(0)=0$, $\\lim_{x \\to 0+} 2x = 0$, $\\lim_{x \\to 0-} \\sqrt{-x} = 0$으로 모두 0으로 일치하므로 연속 $\\therefore$ **ㄱ, ㄹ**"
          }
        ]
      },
      "qSuffix": "보기: ㄱ. $f(x) = |x|$   ㄴ. $f(x) = \\frac{x}{x^2-x}$   ㄷ. $f(x) = \\begin{cases} \\frac{1}{x} & (x \\ne 0) \\\\ 1 & (x=0) \\end{cases}$   ㄹ. $f(x) = \\begin{cases} 2x & (x \\ge 0) \\\\ \\sqrt{-x} & (x < 0) \\end{cases}$"
    },
    {
      "id": 35,
      "source": "비상 교과서 45p 대단원 07번",
      "tag": "대단원",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 $(x^2-1)f(x) = ax^3+bx^2-ax-b$ 를 만족시키고 $f(-1)=1$, $f(1)=2$일 때, 실수 $a$, $b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 우변을 인수분해하면 $ax(x^2-1)+b(x^2-1) = (x^2-1)(ax+b)$입니다. 2단계: 연속성에 의해 $f(x)=ax+b$임을 이용합니다.",
      "answer": "$a=\\frac{1}{2}, b=\\frac{3}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 인수분해]",
            "content": "$(x^2-1)f(x) = (x^2-1)(ax+b)$"
          },
          {
            "label": "[2단계: 연속성 이용]",
            "content": "$x \\ne \\pm 1$일 때 $f(x)=ax+b$. $f(x)$가 모든 실수에서 연속이므로 $f(-1)=-a+b=1$, $f(1)=a+b=2$"
          },
          {
            "label": "[3단계: 연립방정식 풀이]",
            "content": "변끼리 더하면 $2b=3 \\implies b=\\frac{3}{2}$, 빼면 $2a=1 \\implies a=\\frac{1}{2}$ $\\therefore$ **$a=\\frac{1}{2}, b=\\frac{3}{2}$**"
          }
        ]
      }
    },
    {
      "id": 36,
      "source": "비상 교과서 45p 대단원 08번",
      "tag": "대단원",
      "question": "함수 $f(x) = \\frac{3x-2}{x+2}$에 대하여 다음 보기 중 옳은 것을 모두 고르시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "유리함수 $f(x) = \\frac{3(x+2)-8}{x+2} = 3 - \\frac{8}{x+2}$의 점근선 $x=-2$가 주어진 구간에 포함되는지 확인합니다.",
      "answer": "ㄱ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ 판정]",
            "content": "$x=-2 \\in [-4, 0]$에서 점근선을 가지므로 $x \\to -2-$일 때 $\\infty$로 발산하여 최댓값을 갖지 않는다 (참)."
          },
          {
            "label": "[ㄴ 판정]",
            "content": "$x \\to -2+$일 때 $-\\infty$로 발산하므로 최솟값을 갖지 않는다 (거짓)."
          },
          {
            "label": "[ㄷ 판정]",
            "content": "닫힌구간 $[0, 2]$에서 $f(x)$는 연속이며 증가함수이므로 $x=0$에서 최솟값 $f(0)=-1$을 갖는다 (참) $\\therefore$ **ㄱ, ㄷ**"
          }
        ]
      },
      "qSuffix": "보기: ㄱ. $f(x)$는 닫힌구간 $[-4, 0]$에서 최댓값을 갖지 않는다.   ㄴ. $f(x)$는 닫힌구간 $[-2, 0]$에서 최솟값을 갖는다.   ㄷ. $f(x)$는 닫힌구간 $[0, 2]$에서 최솟값을 갖는다."
    },
    {
      "id": 37,
      "source": "비상 교과서 45p 대단원 09번",
      "tag": "서술형",
      "question": "다항함수 $f(x)$가 $\\lim_{x \\to 1} \\frac{f(x)}{x-1}=2$, $\\lim_{x \\to \\infty} \\frac{f(x)-3x^2}{2x-1}=k$를 만족시킬 때, 다음 물음에 답하시오. (단, $k$는 실수)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "함수 f(x)를 구하시오."
        },
        {
          "no": 2,
          "formula": "실수 k의 값을 구하시오."
        }
      ],
      "tip": "1단계: 극한의 성질에 의해 $f(x)$의 최고차항이 $3x^2$임을 파악합니다. 2단계: $f(1)=0$을 대입하고 인수분해하여 식을 결정합니다.",
      "answer": "(1) $f(x)=3x^2-4x+1$, (2) $k=-2$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 차수 결정] 두 번째 식에서 $f(x)-3x^2$은 일차 이하의 다항식이므로 $f(x)=3x^2+ax+b$. 첫 번째 식에서 분모 $\\to 0$이므로 $f(1)=3+a+b=0 \\implies b=-a-3$. $\\lim_{x \\to 1} \\frac{3x^2+ax-a-3}{x-1} = \\lim_{x \\to 1} \\frac{(x-1)(3x+a+3)}{x-1} = 6+a = 2 \\implies a=-4, b=1$. 따라서 $f(x)=3x^2-4x+1$ $\\therefore$ **$f(x)=3x^2-4x+1$**"
          },
          {
            "label": "(2)",
            "content": "[2단계: k값 계산] $k = \\lim_{x \\to \\infty} \\frac{(3x^2-4x+1)-3x^2}{2x-1} = \\lim_{x \\to \\infty} \\frac{-4x+1}{2x-1} = -2$ $\\therefore$ **-2**"
          }
        ]
      }
    },
    {
      "id": 38,
      "source": "비상 교과서 45p 대단원 10번",
      "tag": "서술형",
      "question": "두 함수 $f(x)$, $g(x)$가 $\\lim_{x \\to \\infty} f(x)=\\infty$, $\\lim_{x \\to \\infty} \\{4f(x)-2g(x)\\}=1$을 만족시킬 때, 극한값 $\\lim_{x \\to \\infty} \\frac{3g(x)-f(x)}{5f(x)}$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 함수의 극한의 성질을 이용합니다. $h(x)=4f(x)-2g(x)$로 두고 양변을 $f(x)$로 나누어 $\\frac{g(x)}{f(x)}$의 극한값을 구합니다.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: g(x)/f(x)의 극한]",
            "content": "$\\lim_{x \\to \\infty} \\frac{4f(x)-2g(x)}{f(x)} = \\lim_{x \\to \\infty} \\left(4 - 2\\frac{g(x)}{f(x)}\\right) = 0 \\implies \\lim_{x \\to \\infty} \\frac{g(x)}{f(x)} = 2$"
          },
          {
            "label": "[2단계: 구하는 식 변형]",
            "content": "구하는 식의 분모와 분자를 $f(x)$로 나누면: $\\lim_{x \\to \\infty} \\frac{3\\frac{g(x)}{f(x)} - 1}{5}$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$\\frac{3(2)-1}{5} = \\frac{5}{5} = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 39,
      "source": "비상 교과서 45p 대단원 11번",
      "tag": "서술형",
      "question": "두 함수 $f(x)=3x-8$, $g(x)=x^2+ax+9$에 대하여 함수 $\\frac{f(x)}{g(x)}$가 모든 실수 $x$에서 연속일 때, 실수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분수함수가 모든 실수에서 연속이 되려면 분모 $g(x)=0$인 실근이 존재하지 않아야 합니다. 즉 판별식 $D<0$을 만족해야 합니다.",
      "answer": "$-6 < a < 6$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건]",
            "content": "분모 $g(x)=x^2+ax+9 \\ne 0$이어야 합니다."
          },
          {
            "label": "[2단계: 판별식 점검]",
            "content": "이차방정식 $x^2+ax+9=0$의 판별식 $D = a^2 - 4(1)(9) < 0$이어야 실근이 존재하지 않습니다."
          },
          {
            "label": "[3단계: 범위 산출]",
            "content": "$a^2 - 36 < 0 \\implies (a-6)(a+6) < 0 \\implies -6 < a < 6$ $\\therefore$ **$-6 < a < 6$**"
          }
        ]
      }
    },
    {
      "id": 40,
      "source": "비상 교과서 46p 대단원 12번",
      "tag": "대단원",
      "question": "함수 $y=f(x)$가 $x \\le 1$에서 $f(x)=x+1$, $x > 1$에서 $f(x)=1$이다. 모든 실수 $x$에서 함수 $g(x)=(x-a)f(x)$가 연속일 때, 실수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수 $f(x)$가 $x=1$에서 불연속이므로, $g(x)=(x-a)f(x)$가 $x=1$에서 연속이 되려면 인수 $(x-a)$가 $x=1$에서 $0$이 되어야 합니다.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(x)의 좌우극한 확인]",
            "content": "$x \\to 1-$일 때 $f(x) \\to 2$, $x \\to 1+$일 때 $f(x) \\to 1$. $f(1)=2$"
          },
          {
            "label": "[2단계: g(x)의 연속 조건]",
            "content": "$\\lim_{x \\to 1-} g(x) = (1-a) \\times 2$, $\\lim_{x \\to 1+} g(x) = (1-a) \\times 1$. 이 두 값이 일치하려면 $2(1-a) = 1-a$ $\\implies$ $1-a = 0$ $\\implies$ $a=1$"
          },
          {
            "label": "[3단계: 결론]",
            "content": "$a=1$일 때 $g(1)=0$으로 좌우극한 및 함숫값이 모두 0으로 일치합니다 $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 41,
      "source": "비상 교과서 46p 대단원 13번",
      "tag": "대단원",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 $f(-1)=a$, $f(1)=a-4$를 만족시킨다. 방정식 $f(x)=x^3$이 열린구간 $(-1, 1)$에서 반드시 실근을 갖도록 하는 정수 $a$의 개수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리: $g(x)=f(x)-x^3$이라 두고 열린구간 $(-1, 1)$에서 실근을 가질 조건 $g(-1)g(1)<0$을 풉니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: g(x) 정의]",
            "content": "$g(x)=f(x)-x^3$이라 두면 $g(x)$는 닫힌구간 $[-1, 1]$에서 연속입니다."
          },
          {
            "label": "[2단계: 양 끝값 계산]",
            "content": "$g(-1) = f(-1)-(-1)^3 = a+1$, $g(1) = f(1)-1^3 = a-4-1 = a-5$"
          },
          {
            "label": "[3단계: 사잇값 정리 및 정수 개수]",
            "content": "$g(-1)g(1) < 0 \\implies (a+1)(a-5) < 0 \\implies -1 < a < 5$. 만족하는 정수 $a$는 $0, 1, 2, 3, 4$의 5개이다 $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 42,
      "source": "AI 숫자 변형 (26p 09번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "등식 $\\lim_{x \\to \\infty} \\left(\\sqrt{x^2+ax+1} - \\sqrt{x^2+2x-3}\\right) = 3$ 이 성립할 때, 실수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 분자를 유리화합니다. 2단계: 최고차항 계수비를 비교하여 극한값이 3이 되도록 하는 $a$를 구합니다.",
      "answer": "8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 유리화]",
            "content": "$\\lim_{x \\to \\infty} \\frac{(x^2+ax+1)-(x^2+2x-3)}{\\sqrt{x^2+ax+1}+\\sqrt{x^2+2x-3}} = \\lim_{x \\to \\infty} \\frac{(a-2)x+4}{\\sqrt{x^2+ax+1}+\\sqrt{x^2+2x-3}}$"
          },
          {
            "label": "[2단계: 최고차항 계수비]",
            "content": "분모·분자를 $x$로 나누면 $\\frac{a-2}{1+1} = \\frac{a-2}{2}$"
          },
          {
            "label": "[3단계: 방정식 풀이]",
            "content": "$\\frac{a-2}{2} = 3 \\implies a-2 = 6 \\implies a = 8$ $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 43,
      "source": "AI 숫자 변형 (42p 13번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "두 함수 $f(x)=x^2+px+q$, $g(x) = \\begin{cases} x^2 & (|x|<2) \\\\ 3 & (|x| \\ge 2) \\end{cases}$ 에 대하여 함수 $f(x)g(x)$가 모든 실수 $x$에서 연속일 때, 실수 $p$, $q$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "불연속점 $x=2$와 $x=-2$에서 $f(x)=0$이 되어야 곱함수가 연속이 됩니다.",
      "answer": "$p=0, q=-4$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=2에서 연속]",
            "content": "$\\lim_{x \\to 2+} f(x)g(x) = 3f(2)$, $\\lim_{x \\to 2-} f(x)g(x) = 4f(2)$. 일치하려면 $f(2) = 4+2p+q = 0$"
          },
          {
            "label": "[2단계: x=-2에서 연속]",
            "content": "$\\lim_{x \\to -2-} f(x)g(x) = 3f(-2)$, $\\lim_{x \\to -2+} f(x)g(x) = 4f(-2)$. 일치하려면 $f(-2) = 4-2p+q = 0$"
          },
          {
            "label": "[3단계: 연립방정식 풀이]",
            "content": "$2p+q = -4$, $-2p+q = -4$ $\\implies$ $p=0, q=-4$ $\\therefore$ **$p=0, q=-4$**"
          }
        ]
      }
    },
    {
      "id": 44,
      "source": "AI 숫자 변형 (46p 13번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 $f(-1)=a+2$, $f(1)=a-3$을 만족시킨다. 방정식 $f(x)=0$이 열린구간 $(-1, 1)$에서 반드시 실근을 갖도록 하는 정수 $a$의 개수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리에 의해 $f(-1)f(1)<0$이어야 열린구간 $(-1, 1)$에서 실근을 갖습니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 사잇값 정리]",
            "content": "$f(-1)f(1) < 0 \\implies (a+2)(a-3) < 0$"
          },
          {
            "label": "[2단계: a의 범위]",
            "content": "$-2 < a < 3$"
          },
          {
            "label": "[3단계: 정수 a 개수]",
            "content": "만족하는 정수 $a$는 $-1, 0, 1, 2$의 4개이다 $\\therefore$ **4**"
          }
        ]
      }
    }
  ]
};
