/*
 * 동아출판 교과서 실전 핵심: II. 미분 (48문항)
 */
window.WORKSHEET_DATA = {
  "meta": {
    "title": "수학 II / 미적분 I - II. 미분",
    "subtitle": "동아출판 교과서 실전 핵심 (스스로 해결하기 + 단원 마무리 전수 수록)",
    "student": "동아",
    "date": "2026. 09. 17 (목)",
    "cheer": "동아의 완벽한 미분 정복과 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "동아 교과서 52p 스스로 해결하기 1번 (1), (2)",
      "tag": "기본",
      "question": "함수 $f(x)=-x^2+3x$에서 $x$의 값이 다음과 같이 변할 때의 평균변화율을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$-1$에서 $3$까지 변할 때"
        },
        {
          "no": 2,
          "formula": "$1$에서 $1+\\Delta x$까지 변할 때"
        }
      ],
      "tip": "평균변화율 공식은 $\\frac{f(b)-f(a)}{b-a}$입니다. $x$의 증가량분에 $y$의 증가량을 대입하여 계산하세요.",
      "answer": "(1) $1$, (2) $1-\\Delta x$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 공식 대입] $\\frac{f(3)-f(-1)}{3-(-1)} = \\frac{0 - (-4)}{4} = \\frac{4}{4} = 1$ $\\therefore$ **$1$**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 식 변형] $\\frac{f(1+\\Delta x)-f(1)}{\\Delta x} = \\frac{-(1+\\Delta x)^2+3(1+\\Delta x)-2}{\\Delta x} = \\frac{-\\Delta x^2+\\Delta x}{\\Delta x} = 1-\\Delta x$ $\\therefore$ **$1-\\Delta x$**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "동아 교과서 52p 스스로 해결하기 2번 (1), (2)",
      "tag": "기본",
      "question": "다음 함수의 $x=2$에서의 미분계수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=x+5"
        },
        {
          "no": 2,
          "formula": "f(x)=x^2-4x"
        }
      ],
      "tip": "미분계수 정의 $f'(2) = \\lim_{\\Delta x \\to 0} \\frac{f(2+\\Delta x)-f(2)}{\\Delta x}$ 또는 미분 공식을 이용해 도함수를 구한 후 $x=2$를 대입하세요.",
      "answer": "(1) 1, (2) 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 미분] $f'(x)=1$이므로 $x=2$를 대입하면 $f'(2)=1$ $\\therefore$ **1**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 미분] $f'(x)=2x-4$이므로 $x=2$ 대입 시 $f'(2)=2(2)-4=0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "동아 교과서 52p 스스로 해결하기 3번 (1), (2)",
      "tag": "기본",
      "question": "다음 곡선 위의 주어진 점에서의 접선의 기울기를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=3x^2-2 \\quad (0, -2)"
        },
        {
          "no": 2,
          "formula": "f(x)=-x^2-x+2 \\quad (-1, 2)"
        }
      ],
      "tip": "곡선 위의 점 $(a, f(a))$에서의 접선의 기울기는 미분계수 $f'(a)$와 같습니다. 도함수를 구해 $x$좌표를 대입하세요.",
      "answer": "(1) 0, (2) 1",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 미분계수] $f'(x)=6x$이므로 $x=0$에서의 기울기는 $f'(0)=0$ $\\therefore$ **0**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 미분계수] $f'(x)=-2x-1$이므로 $x=-1$에서의 기울기는 $f'(-1)=-2(-1)-1=1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "동아 교과서 52p 스스로 해결하기 4번",
      "tag": "핵심유형",
      "question": "미분가능한 함수 $f(x)$에 대하여 $\\lim_{h \\to 0} \\frac{f(1+4h)-f(1)}{h}=4$일 때, $f'(1)$의 값을 구하시오.",
      "formula": "",
      "tip": "미분계수 정의 형태를 맞추기 위해 분모의 $h$를 $4h$로 변형하고 곱하기 4를 해줍니다. 식 변형 후 극한을 대입하세요.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 변형]",
            "content": "$\\lim_{h \\to 0} \\frac{f(1+4h)-f(1)}{h} = \\lim_{h \\to 0} \\left\\{ \\frac{f(1+4h)-f(1)}{4h} \\times 4 \\right\\} = 4f'(1)$"
          },
          {
            "label": "[2단계: 값 계산]",
            "content": "$4f'(1) = 4$이므로 $f'(1) = 1$ $\\therefore$ **1**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 5,
      "source": "동아 교과서 52p 스스로 해결하기 5번",
      "tag": "실생활",
      "question": "화성의 표면에서 $38\\,\\text{m/s}$의 속도로 수직 위로 던진 공의 $t$초 후 높이 $h(t)\\,\\text{m}$가 $h(t)=2+38t-1.9t^2$일 때, $t=5$에서의 순간변화율을 구하시오.",
      "formula": "",
      "tip": "순간변화율은 높이 함수의 도함수 $h'(t)$에 $t=5$를 대입한 미분계수 값입니다.",
      "answer": "19 m/s",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 구하기]",
            "content": "$h'(t) = 38 - 3.8t$"
          },
          {
            "label": "[2단계: 대입]",
            "content": "$t=5$ 대입 시 $h'(5) = 38 - 3.8(5) = 38 - 19 = 19\\,(\\text{m/s})$ $\\therefore$ **19 m/s**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 6,
      "source": "동아 교과서 52p 스스로 해결하기 6번",
      "tag": "서술형",
      "question": "이차함수 $f(x)=ax^2+b\\,(a \\ne 0)$에 대하여 $x$가 $\\alpha$에서 $\\beta$까지 변할 때의 평균변화율과 $x=\\frac{\\alpha+\\beta}{2}$에서의 순간변화율을 비교하시오. (단, $a, b$는 상수)",
      "formula": "",
      "tip": "평균변화율 공식과 미분계수 공식을 각각 계산하여 두 식의 결과가 일치함을 확인하세요.",
      "answer": "(단계1) $a(\\alpha+\\beta)$, (단계2) $a(\\alpha+\\beta)$, (단계3) 서로 같다",
      "solution": {
        "steps": [
          {
            "label": "[단계1]",
            "content": "평균변화율: $\\frac{f(\\beta)-f(\\alpha)}{\\beta-\\alpha} = \\frac{a(\\beta^2-\\alpha^2)}{\\beta-\\alpha} = a(\\alpha+\\beta)$"
          },
          {
            "label": "[단계2]",
            "content": "$f'(x)=2ax$이므로 $x=\\frac{\\alpha+\\beta}{2}$에서의 순간변화율: $f'\\left(\\frac{\\alpha+\\beta}{2}\\right) = 2a \\cdot \\frac{\\alpha+\\beta}{2} = a(\\alpha+\\beta)$"
          },
          {
            "label": "[단계3]",
            "content": "두 변화율이 $a(\\alpha+\\beta)$로 **서로 같다.**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 7,
      "source": "동아 교과서 56p 스스로 해결하기 1번",
      "tag": "핵심유형",
      "question": "함수 $f(x)=\\begin{cases} x^2 & (x \\ge 2) \\\\ -x^2+4x & (x < 2) \\end{cases}$에서 $x=2$에서의 연속성과 미분가능성을 조사하시오.",
      "formula": "",
      "tip": "먼저 좌우극한과 함숫값이 같은지 연속을 판정하고, 좌미분계수와 우미분계수가 일치하는지 미분계수의 정의로 확인하세요.",
      "answer": "x=2에서 연속이지만 미분가능하지 않다.",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성 조사]",
            "content": "$f(2)=4$, $\\lim_{x \\to 2+} x^2 = 4$, $\\lim_{x \\to 2-} (-x^2+4x) = 4$이므로 $x=2$에서 **연속**입니다."
          },
          {
            "label": "[2단계: 미분계수 조사]",
            "content": "우미분계수: $\\lim_{\\Delta x \\to 0+} \\frac{(2+\\Delta x)^2-4}{\\Delta x} = 4$, 좌미분계수: $\\lim_{\\Delta x \\to 0-} \\frac{-(2+\\Delta x)^2+4(2+\\Delta x)-4}{\\Delta x} = 0$. 우미분계수와 좌미분계수가 다르므로 **미분가능하지 않습니다.**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 8,
      "source": "동아 교과서 56p 스스로 해결하기 2번",
      "tag": "핵심유형",
      "question": "$x=1$에서 미분가능하지 않은 함수인 것만을 [보기]에서 있는 대로 고르시오.",
      "formula": "[보기] ㄱ. $f(x)=x^2-1$, ㄴ. $g(x)=|x^2-1|$, ㄷ. $h(x)=|x|-1$, ㄹ. $k(x)=|x-1|$",
      "tip": "절댓값 기호가 있는 함수는 구간별로 나누어 꺾인 점(첨점)에서 좌우 미분계수가 다름을 확인하세요.",
      "answer": "ㄴ, ㄹ",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 각 함수 분석]",
            "content": "ㄱ. 다항함수이므로 모든 실수에서 미분가능.\nㄷ. $x=1$ 근방에서 $h(x)=x-1$이므로 $h'(1)=1$로 미분가능."
          },
          {
            "label": "[2단계: 첨점 확인]",
            "content": "ㄴ. $g(x)=|x^2-1|$은 $x=1$에서 우미분계수 2, 좌미분계수 -2로 미분불가.\nㄹ. $k(x)=|x-1|$은 $x=1$에서 우미분계수 1, 좌미분계수 -1로 미분불가. $\\therefore$ **ㄴ, ㄹ**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 9,
      "source": "동아 교과서 56p 스스로 해결하기 3번",
      "tag": "심화",
      "question": "함수 $f(x)=\\begin{cases} x^2+ax-3 & (x \\ge 1) \\\\ bx^2+1 & (x < 1) \\end{cases}$이 실수 전체에서 미분가능할 때, 두 상수 $a, b$의 값을 각각 구하시오.",
      "formula": "",
      "tip": "미분가능하면 반드시 연속이어야 합니다! $x=1$에서 연속 조건으로 식 하나, 좌우 미분계수 일치 조건으로 식 하나를 세워 대입해 연립하세요.",
      "answer": "a=8, b=5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건]",
            "content": "$x=1$에서 함숫값 및 좌우극한 일치: $1+a-3 = b+1 \\implies a-b=3$ ⋯ ①"
          },
          {
            "label": "[2단계: 미분가능 조건]",
            "content": "$x=1$에서 좌우 미분계수 일치: $2(1)+a = 2b(1) \\implies a-2b=-2$ ⋯ ②"
          },
          {
            "label": "[3단계: 연립 및 정답]",
            "content": "①에서 ②를 빼면 $b=5$, 따라서 $a=8$ $\\therefore$ **a=8, b=5**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 10,
      "source": "동아 교과서 56p 스스로 해결하기 4번",
      "tag": "서술형",
      "question": "놀이기구 높이 함수 $f(t)=\\begin{cases} 10 & (0 \\le t < 10) \\\\ \\frac{1}{10}t^2-4t+40 & (10 \\le t \\le 20) \\end{cases}$의 $t=10$에서의 미분가능성을 조사하시오.",
      "formula": "",
      "tip": "단계1에서 $t=10$ 좌우극한을 비교해 연속성을 보이고, 단계2에서 좌우 미분계수가 일치하는지 미분계수를 계산하세요.",
      "answer": "(단계1) 연속이다., (단계2) 미분가능하지 않다.",
      "solution": {
        "steps": [
          {
            "label": "[단계1: 연속성]",
            "content": "$\\lim_{t \\to 10-} f(t) = 10$, $\\lim_{t \\to 10+} \\left(\\frac{1}{10}(100)-40+40\\right) = 10$, $f(10)=10$이므로 **연속이다.**"
          },
          {
            "label": "[단계2: 미분가능성]",
            "content": "좌미분계수는 $0$, 우미분계수는 $\\left[\\frac{1}{5}t-4\\right]_{t=10} = 2-4=-2$. 좌우 미분계수가 다르므로 **미분가능하지 않다.**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 11,
      "source": "동아 교과서 60p 스스로 해결하기 1번 (1)",
      "tag": "서술형",
      "question": "도함수의 정의를 이용하여 함수 $f(x)=2x+1$의 도함수를 구하시오.",
      "formula": "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x)-f(x)}{\\Delta x}",
      "tip": "도함수의 정의 식에 $f(x+\\Delta x)=2(x+\\Delta x)+1$을 대입하고 $\\Delta x$를 약분하여 극한을 구하세요.",
      "answer": "$f'(x)=2$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정의식 대입]",
            "content": "$f'(x) = \\lim_{\\Delta x \\to 0} \\frac{\\{2(x+\\Delta x)+1\\}-(2x+1)}{\\Delta x} = \\lim_{\\Delta x \\to 0} \\frac{2\\Delta x}{\\Delta x}$"
          },
          {
            "label": "[2단계: 약분 및 극한]",
            "content": "$\\lim_{\\Delta x \\to 0} 2 = 2$ $\\therefore$ **f'(x)=2**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 12,
      "source": "동아 교과서 60p 스스로 해결하기 1번 (2)",
      "tag": "서술형",
      "question": "도함수의 정의를 이용하여 함수 $f(x)=x^2-3x$의 도함수를 구하시오.",
      "formula": "f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x)-f(x)}{\\Delta x}",
      "tip": "분자를 전개하여 공통인수 $\\Delta x$로 묶고 나눈 후 $\\Delta x \\to 0$을 대입하세요.",
      "answer": "$f'(x)=2x-3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정의식 대입]",
            "content": "$f'(x) = \\lim_{\\Delta x \\to 0} \\frac{\\{(x+\\Delta x)^2-3(x+\\Delta x)\\}-(x^2-3x)}{\\Delta x}$"
          },
          {
            "label": "[2단계: 식 변형 및 약분]",
            "content": "$= \\lim_{\\Delta x \\to 0} \\frac{2x\\Delta x + (\\Delta x)^2 - 3\\Delta x}{\\Delta x} = \\lim_{\\Delta x \\to 0} (2x + \\Delta x - 3) = 2x-3$ $\\therefore$ **f'(x)=2x-3**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 13,
      "source": "동아 교과서 60p 스스로 해결하기 2번 (1), (2)",
      "tag": "기본",
      "question": "다음 함수의 도함수를 구하고, $x=1$에서의 미분계수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=x^{55}"
        },
        {
          "no": 2,
          "formula": "f(x)=2030"
        }
      ],
      "tip": "$(x^n)'=n x^{n-1}$ 및 상수함수의 미분은 0임을 공식으로 적용한 후 $x=1$을 대입하세요.",
      "answer": "(1) $f'(x)=55x^{54}$, $f'(1)=55$, (2) $f'(x)=0$, $f'(1)=0$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 미분] $f'(x)=55x^{54}$, $x=1$ 대입 시 $f'(1)=55(1)^{54}=55$ $\\therefore$ **f'(x)=55x^{54}, f'(1)=55**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 미분] 상수의 도함수는 $0$이므로 $f'(x)=0$, $f'(1)=0$ $\\therefore$ **f'(x)=0, f'(1)=0**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "동아 교과서 60p 스스로 해결하기 3번",
      "tag": "심화",
      "question": "미분가능한 함수 $f(x)$가 모든 실수 $x, y$에 대하여 $f(x+y)=f(x)+f(y)+2xy$를 만족시키고 $f'(0)=1$일 때, $f'(3)$의 값을 구하시오.",
      "formula": "",
      "tip": "$x=0, y=0$을 대입하여 $f(0)=0$을 찾고, 도함수 정의 $f'(x)=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$에 관계식을 대입해 $f'(x)$를 구하세요.",
      "answer": "(단계1) $f'(x)=2x+1$, (단계2) $7$",
      "solution": {
        "steps": [
          {
            "label": "[단계1: 도함수 구하기]",
            "content": "$x=y=0$ 대입 시 $f(0)=0$.\n$f'(x)=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h} = \\lim_{h \\to 0} \\frac{f(h)+2xh}{h} = f'(0)+2x = 2x+1$"
          },
          {
            "label": "[단계2: f'(3) 계산]",
            "content": "$f'(3) = 2(3)+1 = 7$ $\\therefore$ **7**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 15,
      "source": "동아 교과서 64p 스스로 해결하기 1번 (1), (2)",
      "tag": "기본",
      "question": "다음 함수를 미분하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=2x^2+x+4"
        },
        {
          "no": 2,
          "formula": "f(x)=\\frac{1}{3}x^3+\\frac{1}{2}x^2+x+3"
        }
      ],
      "tip": "다항함수의 거듭제곱 미분 공식 $(x^n)'=n x^{n-1}$을 각 항별로 적용해 미분하세요.",
      "answer": "(1) $f'(x)=4x+1$, (2) $f'(x)=x^2+x+1$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 미분] $f'(x)=2(2x)+1+0 = 4x+1$ $\\therefore$ **f'(x)=4x+1**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 미분] $f'(x)=\\frac{1}{3}(3x^2)+\\frac{1}{2}(2x)+1 = x^2+x+1$ $\\therefore$ **f'(x)=x^2+x+1**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "동아 교과서 64p 스스로 해결하기 1번 (3)",
      "tag": "핵심유형",
      "question": "다음 곱으로 표현된 함수를 미분하시오.",
      "formula": "f(x)=(x^2+x)(-x+3)",
      "tip": "곱의 미분법 공식 $\\{f(x)g(x)\\}'=f'(x)g(x)+f(x)g'(x)$을 적용하거나 식을 전개한 후 미분하세요.",
      "answer": "$f'(x)=-3x^2+4x+3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 곱의 미분]",
            "content": "$f'(x) = (x^2+x)'(-x+3) + (x^2+x)(-x+3)' = (2x+1)(-x+3) + (x^2+x)(-1)$"
          },
          {
            "label": "[2단계: 식 전개 정리]",
            "content": "$= (-2x^2+5x+3) - (x^2+x) = -3x^2+4x+3$ $\\therefore$ **f'(x)=-3x^2+4x+3**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 17,
      "source": "동아 교과서 64p 스스로 해결하기 2번",
      "tag": "핵심유형",
      "question": "함수 $f(x)=x^2+3x$에 대하여 $\\lim_{h \\to 0} \\frac{f(1+2h)-f(1)}{h}$의 값을 구하시오.",
      "formula": "",
      "tip": "극한식을 변형하면 $2f'(1)$이 됩니다. 도함수를 구해 $x=1$을 대입한 후 2를 곱하세요.",
      "answer": "10",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 변형]",
            "content": "$\\lim_{h \\to 0} \\frac{f(1+2h)-f(1)}{h} = \\lim_{h \\to 0} \\left\\{ \\frac{f(1+2h)-f(1)}{2h} \\times 2 \\right\\} = 2f'(1)$"
          },
          {
            "label": "[2단계: 미분 및 대입]",
            "content": "$f'(x)=2x+3$이므로 $f'(1)=2(1)+3=5$. 따라서 $2f'(1)=2(5)=10$ $\\therefore$ **10**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 18,
      "source": "동아 교과서 64p 스스로 해결하기 3번",
      "tag": "핵심유형",
      "question": "다항함수 $f(x)$가 $f(1)=2, f'(1)=1$을 만족시키고 함수 $g(x)=(x^2+1)f(x)$일 때, $g'(1)$의 값을 구하시오.",
      "formula": "",
      "tip": "곱의 미분법 공식 $g'(x) = (x^2+1)'f(x) + (x^2+1)f'(x)$에 $x=1$을 대입하세요.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 구하기]",
            "content": "$g'(x) = 2xf(x) + (x^2+1)f'(x)$"
          },
          {
            "label": "[2단계: 대입 계산]",
            "content": "$g'(1) = 2(1)f(1) + (1+1)f'(1) = 2(2) + 2(1) = 4+2=6$ $\\therefore$ **6**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 19,
      "source": "동아 교과서 64p 스스로 해결하기 4번",
      "tag": "심화",
      "question": "미분가능한 두 함수 $f(x), g(x)$가 $\\lim_{x \\to 1} \\frac{f(x)-3}{x-1}=2, \\lim_{x \\to 1} \\frac{g(x)-2}{x-1}=5$를 만족시킬 때, 함수 $f(x)g(x)$의 $x=1$에서의 미분계수를 구하시오.",
      "formula": "",
      "tip": "극한의 성질에서 $f(1)=3, f'(1)=2, g(1)=2, g'(1)=5$를 이끌어낸 뒤 곱의 미분 공식에 대입하세요.",
      "answer": "19",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수값과 미분계수 도출]",
            "content": "분모가 0으로 가므로 $f(1)=3, f'(1)=2$이고 $g(1)=2, g'(1)=5$입니다."
          },
          {
            "label": "[2단계: 곱의 미분 공식 적용]",
            "content": "$\\{f(x)g(x)\\}'_{x=1} = f'(1)g(1) + f(1)g'(1) = 2(2) + 3(5) = 4+15=19$ $\\therefore$ **19**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 20,
      "source": "동아 교과서 64p 스스로 해결하기 5번",
      "tag": "실생활",
      "question": "온라인 매출액 함수 $f(t)=\\frac{1}{3}t^3+t^2+100$만 원에 대하여, $10$시간 후 매출액의 순간변화율을 구하시오.",
      "formula": "",
      "tip": "도함수 $f'(t)$를 구한 후 $t=10$을 대입하여 미분계수 값을 구하세요.",
      "answer": "120만 원/시간",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 구하기]",
            "content": "$f'(t) = t^2 + 2t$"
          },
          {
            "label": "[2단계: 대입 계산]",
            "content": "$f'(10) = 10^2 + 2(10) = 100 + 20 = 120\\,(\\text{만 원/시간})$ $\\therefore$ **120만 원/시간**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 21,
      "source": "동아 교과서 64p 스스로 해결하기 6번",
      "tag": "심화",
      "question": "다항식 $f(x)$를 $(x-1)^2$으로 나누었을 때의 나머지가 $3x+2$일 때, $f'(1)$의 값을 구하시오.",
      "formula": "f(x)=(x-1)^2 Q(x) + 3x+2",
      "tip": "항등식의 양변을 $x$에 대하여 미분한 후 $(x-1)$ 인수가 있는 항에 $x=1$을 대입하세요.",
      "answer": "(단계1) $f'(x)=2(x-1)Q(x)+(x-1)^2 Q'(x)+3$, (단계2) $3$",
      "solution": {
        "steps": [
          {
            "label": "[단계1: 곱의 미분 적용]",
            "content": "양변을 미분하면 $f'(x) = 2(x-1)Q(x) + (x-1)^2 Q'(x) + 3$"
          },
          {
            "label": "[단계2: x=1 대입]",
            "content": "$x=1$ 대입 시 앞의 두 항은 0이 되므로 $f'(1) = 3$ $\\therefore$ **3**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 22,
      "source": "동아 교과서 68p 스스로 해결하기 1번 (1), (2)",
      "tag": "핵심유형",
      "question": "다음 접선의 방정식을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$y=x^4-x^2$ 위의 점 $(\\sqrt{2}, 2)$에서의 접선"
        },
        {
          "no": 2,
          "formula": "$y=(x-1)^3$에 접하고 기울기가 $3$인 접선"
        }
      ],
      "tip": "접선의 방정식 공식 $y-f(a)=f'(a)(x-a)$를 적용하세요. (2)는 $y'=3$을 만족하는 접점의 $x$좌표를 먼저 구합니다.",
      "answer": "(1) $y=6\\sqrt{2}x-10$, (2) $y=3x-1$ 또는 $y=3x-5$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 기울기] $y'=4x^3-2x$이므로 $x=\\sqrt{2}$에서 기울기는 $4(2\\sqrt{2})-2\\sqrt{2} = 6\\sqrt{2}$. 접선: $y-2=6\\sqrt{2}(x-\\sqrt{2}) \\implies y=6\\sqrt{2}x-10$ $\\therefore$ **$y=6\\sqrt{2}x-10$**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 접점 구하기] $y'=3(x-1)^2=3 \\implies (x-1)^2=1 \\implies x=0$ 또는 $x=2$. 접점 $(0, -1)$일 때 $y=3x-1$, 접점 $(2, 1)$일 때 $y-1=3(x-2) \\implies y=3x-5$ $\\therefore$ **$y=3x-1$ 또는 $y=3x-5$**"
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "동아 교과서 68p 스스로 해결하기 1번 (3)",
      "tag": "핵심유형",
      "question": "점 $(0, -1)$에서 곡선 $y=x^2+2x$에 그은 접선의 방정식을 구하시오.",
      "formula": "",
      "tip": "곡선 밖의 점이 주어졌을 때는 접점의 좌표를 $(t, t^2+2t)$로 놓고 접선 방정식을 세운 뒤 주어진 점을 대입하세요.",
      "answer": "$y=-1$ 또는 $y=4x-1$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 접선 식 세우기]",
            "content": "접점 $(t, t^2+2t)$, 기울기 $2t+2$이므로 접선은 $y-(t^2+2t)=(2t+2)(x-t)$"
          },
          {
            "label": "[2단계: 점 대입 및 t 구하기]",
            "content": "$(0, -1)$ 대입: $-1-t^2-2t = -2t^2-2t \\implies t^2=1 \\implies t=\\pm 1$. $t=-1$일 때 $y=-1$, $t=1$일 때 $y=4x-1$ $\\therefore$ **y=-1 또는 y=4x-1**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 24,
      "source": "동아 교과서 68p 스스로 해결하기 2번",
      "tag": "기본",
      "question": "곡선 $y=x^2+ax+b$ 위의 점 $(0, 3)$에서의 접선이 점 $(3, 0)$을 지날 때, 두 상수 $a, b$의 값을 각각 구하시오.",
      "formula": "",
      "tip": "$(0, 3)$이 곡선 위 점이므로 $b=3$을 바로 구하고, 미분한 기울기로 접선 방정식을 만들어 $(3, 0)$을 대입하세요.",
      "answer": "$a=-1$, $b=3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: b 구하기 및 기울기]",
            "content": "$(0, 3)$이 곡선 위의 점이므로 $b=3$. $y'=2x+a$이므로 $x=0$에서의 기울기는 $a$입니다."
          },
          {
            "label": "[2단계: 접선 세우기 및 a 계산]",
            "content": "접선 $y=ax+3$에 $(3, 0)$을 대입하면 $3a+3=0 \\implies a=-1$ $\\therefore$ **a=-1, b=3**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 25,
      "source": "동아 교과서 68p 스스로 해결하기 3번",
      "tag": "핵심유형",
      "question": "직선 $y=-x+2$와 수직이고 곡선 $y=-x^2+3x$에 접하는 접선의 방정식을 구하시오.",
      "formula": "",
      "tip": "수직인 두 직선의 기울기 곱은 $-1$이므로 접선의 기울기는 $1$입니다. 미분하여 $y'=1$이 되는 접점의 $x$좌표를 찾아 접선 공식에 대입하세요.",
      "answer": "$y=x+1$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 기울기 및 접점 찾기]",
            "content": "기울기가 $-(-1)=1$이어야 합니다. $y'=-2x+3=1 \\implies 2x=2 \\implies x=1$. 접점 $(1, 2)$"
          },
          {
            "label": "[2단계: 접선 방정식]",
            "content": "기울기 1, 점 $(1, 2)$를 지나므로 $y-2=1(x-1) \\implies y=x+1$ $\\therefore$ **y=x+1**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 26,
      "source": "동아 교과서 68p 스스로 해결하기 4번",
      "tag": "심화",
      "question": "직선 $y=mx-m-4$와 곡선 $y=x^3-x^2$이 접할 때, 상수 $m$의 값을 구하시오.",
      "formula": "",
      "tip": "접점의 좌표를 $(t, t^3-t^2)$로 놓고 미분한 기울기 $m=3t^2-2t$와 $y$절편 식을 연립하여 $t$를 대입해 구하세요.",
      "answer": "8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 접선 방정식 표현]",
            "content": "접점 $(t, t^3-t^2)$에서 접선: $y=(3t^2-2t)x - 2t^3+t^2$. 직선 $y=mx-(m+4)$와 일치해야 합니다."
          },
          {
            "label": "[2단계: t와 m 계산]",
            "content": "$m=3t^2-2t$를 대입: $-(3t^2-2t)-4 = -2t^3+t^2 \\implies 2t^3-4t^2+2t-4=0 \\implies 2(t-2)(t^2+1)=0 \\implies t=2$. 따라서 $m=3(4)-2(2)=8$ $\\therefore$ **8**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 27,
      "source": "동아 교과서 68p 스스로 해결하기 5번",
      "tag": "실생활",
      "question": "스키점프대의 두 구간 $y=\\begin{cases} \\frac{1}{4}(x+2)(x-4)^2+4 & (0 \\le x \\le 5) \\\\ mx+n & (5 \\le x \\le 6) \\end{cases}$이 연결 지점에서 매끄럽게 접할 때, 두 상수 $m, n$의 값을 구하시오.",
      "formula": "",
      "tip": "$x=5$에서 연속(함숫값 일치)이어야 하고, 미분계수(기울기)가 일치해야 접선이 됩니다.",
      "answer": "$m=\\frac{15}{4}, n=-13$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 접점과 기울기 계산]",
            "content": "$x=5$ 대입: $y = \\frac{1}{4}(7)(1)+4 = \\frac{23}{4}$. $y' = \\frac{1}{4}[(x-4)^2 + 2(x+2)(x-4)]$에 $x=5$ 대입 시 기울기 $m = \\frac{1}{4}(1+14) = \\frac{15}{4}$."
          },
          {
            "label": "[2단계: n 계산]",
            "content": "직선 $y=\\frac{15}{4}x+n$이 $(5, \\frac{23}{4})$를 지나므로 $\\frac{23}{4} = \\frac{75}{4}+n \\implies n = -\\frac{52}{4} = -13$ $\\therefore$ **$m=\\frac{15}{4}, n=-13$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 28,
      "source": "동아 교과서 68p 스스로 해결하기 6번",
      "tag": "심화",
      "question": "함수 $f(x)=x^3-3x^2$에 대하여 점 $(a, f(a))$에서 곡선에 그은 서로 다른 모든 접선의 접점의 $x$좌표 합을 $g(a)$라 할 때, 방정식 $\\{g(a)-1\\}\\{g(a)-4\\}=0$의 해를 구하시오.",
      "formula": "",
      "tip": "임의의 접점 $(t, f(t))$에서의 접선이 $(a, f(a))$를 지난다는 방정식에서 인수분해 $(t-a)^2(2t+a-3)=0$을 유도하세요.",
      "answer": "(단계1) $y=(3t^2-6t)x-2t^3+3t^2$, (단계2) $a=1$일 때 $g(a)=1$, $a \\ne 1$일 때 $g(a)=\\frac{3+a}{2}$, (단계3) $a=-1$ 또는 $a=1$ 또는 $a=5$",
      "solution": {
        "steps": [
          {
            "label": "[단계1: 접선의 방정식]",
            "content": "$y=(3t^2-6t)x - 2t^3+3t^2$"
          },
          {
            "label": "[단계2: g(a) 함수 도출]",
            "content": "$(a, a^3-3a^2)$ 대입 정리: $(t-a)^2(2t+a-3)=0$.\n$a=1$이면 접점 1개로 $g(1)=1$.\n$a \\ne 1$이면 접점 $a, \\frac{3-a}{2}$이므로 합은 $g(a)=a+\\frac{3-a}{2}=\\frac{3+a}{2}$."
          },
          {
            "label": "[단계3: 방정식의 해]",
            "content": "$g(a)=1 \\implies a=\\pm 1$. $g(a)=4 \\implies \\frac{3+a}{2}=4 \\implies a=5$.\n따라서 해는 **$a=-1, 1, 5$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 29,
      "source": "동아 교과서 71p 단원 마무리 01번",
      "tag": "기본",
      "question": "함수 $f(x)=x^2-ax$에서 $x$의 값이 $0$에서 $3$까지 변할 때, 평균변화율은 $3$이다. 이때 상수 $a$의 값을 구하시오.",
      "formula": "",
      "tip": "평균변화율 $\\frac{f(3)-f(0)}{3-0}=3$ 식을 세우고 대입하여 일차방정식을 푸세요.",
      "answer": "0",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 세우기]",
            "content": "$\\frac{f(3)-f(0)}{3-0} = \\frac{(9-3a)-0}{3} = 3-a$"
          },
          {
            "label": "[2단계: a 구하기]",
            "content": "$3-a = 3 \\implies a=0$ $\\therefore$ **0**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 30,
      "source": "동아 교과서 71p 단원 마무리 02번",
      "tag": "기본",
      "question": "미분가능한 함수 $f(x)$에 대하여 $f'(3)=2$일 때, $\\lim_{h \\to 0} \\frac{f(3+h)-f(3-h)}{h}$의 값을 구하시오.",
      "formula": "",
      "tip": "분자에 $-f(3)+f(3)$을 더하고 빼서 미분계수 정의 형태 두 개로 분리하세요.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 변형]",
            "content": "$\\lim_{h \\to 0} \\frac{f(3+h)-f(3)}{h} + \\lim_{h \\to 0} \\frac{f(3-h)-f(3)}{-h} = f'(3)+f'(3) = 2f'(3)$"
          },
          {
            "label": "[2단계: 값 계산]",
            "content": "$2f'(3) = 2(2) = 4$ $\\therefore$ **4**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 31,
      "source": "동아 교과서 71p 단원 마무리 03번",
      "tag": "핵심유형",
      "question": "미분가능한 함수 $f(x)$가 모든 실수 $x$에 대하여 $f(2+x)-f(2)=x^3+2x^2+11x$를 만족시킬 때, $f'(2)$의 값을 구하시오.",
      "formula": "",
      "tip": "양변을 $x$로 나누어 평균변화율 형태로 만든 후 $x \\to 0$ 극한을 취하세요.",
      "answer": "11",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x로 나누기]",
            "content": "$\\frac{f(2+x)-f(2)}{x} = x^2+2x+11$"
          },
          {
            "label": "[2단계: 극한 취하기]",
            "content": "$f'(2) = \\lim_{x \\to 0} (x^2+2x+11) = 11$ $\\therefore$ **11**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 32,
      "source": "동아 교과서 71p 단원 마무리 04번",
      "tag": "핵심유형",
      "question": "함수 $f(x)=x^{10}+x^9+x^8+\\cdots+x^2+x+1$에 대하여 $f'(1)$의 값을 구하시오.",
      "formula": "",
      "tip": "도함수 공식을 적용하여 각 항을 미분한 후 $x=1$을 대입해 등차수열의 합을 구하세요.",
      "answer": "55",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 구하기]",
            "content": "$f'(x) = 10x^9 + 9x^8 + 8x^7 + \\cdots + 2x + 1$"
          },
          {
            "label": "[2단계: x=1 대입 및 합]",
            "content": "$f'(1) = 10 + 9 + 8 + \\cdots + 1 = \\frac{10 \\times 11}{2} = 55$ $\\therefore$ **55**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 33,
      "source": "동아 교과서 71p 단원 마무리 05번",
      "tag": "핵심유형",
      "question": "다항함수 $y=f(x)$의 그래프 위의 점 $(1, f(1))$에서의 접선의 기울기가 $6$일 때, $\\lim_{x \\to 1} \\frac{f(x^2)-f(1)}{x^3-1}$의 값을 구하시오.",
      "formula": "",
      "tip": "분모를 인수분해 $(x-1)(x^2+x+1)$하고 분자 짝에 맞게 $(x+1)$을 곱해 $\\frac{f(x^2)-f(1)}{x^2-1}$ 형태로 변형하세요.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 변형]",
            "content": "$\\lim_{x \\to 1} \\frac{f(x^2)-f(1)}{x^2-1} \\times \\frac{x+1}{x^2+x+1} = f'(1) \\times \\frac{2}{3}$"
          },
          {
            "label": "[2단계: 값 대입]",
            "content": "$f'(1)=6$이므로 $6 \\times \\frac{2}{3} = 4$ $\\therefore$ **4**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 34,
      "source": "동아 교과서 71p 단원 마무리 06번",
      "tag": "심화",
      "question": "함수 $f(x)=\\begin{cases} x^3+ax+1 & (x < 1) \\\\ 2x+b & (x \\ge 1) \\end{cases}$가 실수 전체에서 미분가능할 때, 두 상수 $a, b$에 대하여 $a+b$의 값을 구하시오.",
      "formula": "",
      "tip": "$x=1$에서 연속 조건과 미분계수 일치 조건을 각각 세워 $a$와 $b$를 연립하여 구하세요.",
      "answer": "-2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건]",
            "content": "$1+a+1 = 2+b \\implies a=b$ ⋯ ①"
          },
          {
            "label": "[2단계: 미분계수 조건]",
            "content": "좌도함수 $3(1)^2+a = 3+a$, 우도함수 $2$ $\\implies 3+a=2 \\implies a=-1$"
          },
          {
            "label": "[3단계: 정답]",
            "content": "$a=-1, b=-1$이므로 $a+b = -1 + (-1) = -2$ $\\therefore$ **-2**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 35,
      "source": "동아 교과서 71p 단원 마무리 07번",
      "tag": "핵심유형",
      "question": "$x=0$에서 미분가능한 함수만을 [보기]에서 있는 대로 고르시오.",
      "formula": "[보기] ㄱ. $f(x)=|x^3|$, ㄴ. $g(x)=x|x|$, ㄷ. $k(x)=x+|x|$",
      "tip": "미분계수의 정의 $\\lim_{x \\to 0} \\frac{f(x)-f(0)}{x}$에 절댓값 함수를 대입하여 좌우 극한이 일치하는지 확인하세요.",
      "answer": "ㄱ, ㄴ",
      "solution": {
        "steps": [
          {
            "label": "[1단계: ㄱ 조사]",
            "content": "$\\lim_{x \\to 0} \\frac{|x^3|}{x} = \\lim_{x \\to 0} (\\pm x^2) = 0$이므로 미분가능."
          },
          {
            "label": "[2단계: ㄴ, ㄷ 조사]",
            "content": "ㄴ. $\\lim_{x \\to 0} \\frac{x|x|}{x} = \\lim_{x \\to 0} |x| = 0$이므로 미분가능.\nㄷ. $\\lim_{x \\to 0+} \\frac{2x}{x}=2 \\ne \\lim_{x \\to 0-} \\frac{0}{x}=0$이므로 미분불가. $\\therefore$ **ㄱ, ㄴ**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 36,
      "source": "동아 교과서 71p 단원 마무리 08번",
      "tag": "심화",
      "question": "다항식 $f(x)=x^5+4x^2-1$을 $(x-1)^2$으로 나누었을 때의 나머지를 구하시오.",
      "formula": "",
      "tip": "나눗셈 정리 $f(x)=(x-1)^2 Q(x)+ax+b$를 세우고, $x=1$ 대입과 양변 미분 후 $x=1$ 대입을 활용하세요.",
      "answer": "$13x-9$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함숫값 대입]",
            "content": "$f(1) = 1+4-1 = 4 = a+b$ ⋯ ①"
          },
          {
            "label": "[2단계: 미분 후 대입]",
            "content": "$f'(x)=5x^4+8x$이므로 $f'(1) = 5+8=13 = a$. 따라서 $b = 4-13 = -9$. 나머지: **$13x-9$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 37,
      "source": "동아 교과서 72p 단원 마무리 09번",
      "tag": "기본",
      "question": "미분가능한 함수 $f(x)$에 대하여 $g(x)=(x^3-x^2+1)f(x)$이고 $f(1)=1, f'(1)=-2$일 때, $g'(1)$의 값을 구하시오.",
      "formula": "",
      "tip": "곱의 미분법 공식 $g'(x)=(3x^2-2x)f(x)+(x^3-x^2+1)f'(x)$에 $x=1$을 대입하세요.",
      "answer": "-1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 전개]",
            "content": "$g'(x) = (3x^2-2x)f(x) + (x^3-x^2+1)f'(x)$"
          },
          {
            "label": "[2단계: x=1 대입]",
            "content": "$g'(1) = (3-2)f(1) + (1-1+1)f'(1) = 1(1) + 1(-2) = 1-2 = -1$ $\\therefore$ **-1**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 38,
      "source": "동아 교과서 72p 단원 마무리 10번",
      "tag": "핵심유형",
      "question": "두 함수 $f(x)=x^2-3x+1, g(x)=-2x^3-x^2+x+5$에 대하여 곡선 $y=f(x)g(x)$ 위의 점 $(1, -3)$에서의 접선의 기울기를 구하시오.",
      "formula": "",
      "tip": "접선의 기울기는 곱의 미분계수 $(fg)'(1)=f'(1)g(1)+f(1)g'(1)$ 공식을 사용해 계산합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 각 함수 미분계수]",
            "content": "$f(1)=-1, f'(x)=2x-3 \\implies f'(1)=-1$.\n$g(1)=3, g'(x)=-6x^2-2x+1 \\implies g'(1)=-7$."
          },
          {
            "label": "[2단계: 기울기 계산]",
            "content": "$(fg)'(1) = (-1)(3) + (-1)(-7) = -3 + 7 = 4$ $\\therefore$ **4**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 39,
      "source": "동아 교과서 72p 단원 마무리 11번",
      "tag": "핵심유형",
      "question": "곡선 $y=x^3-2x^2+4x-2$ 위의 점 $(1, 1)$에서의 접선의 방정식이 $y=mx+n$일 때, 두 상수 $m, n$의 값을 각각 구하시오.",
      "formula": "",
      "tip": "도함수 $y'=3x^2-4x+4$에 $x=1$을 대입하여 접선의 기울기 $m$을 구하고 접선 공식을 적용하세요.",
      "answer": "$m=3$, $n=-2$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 접선의 기울기]",
            "content": "$y'=3x^2-4x+4$이므로 $x=1$에서의 기울기는 $m=3(1)^2-4(1)+4=3$"
          },
          {
            "label": "[2단계: 접선 방정식]",
            "content": "$y-1 = 3(x-1) \\implies y=3x-2$. 따라서 $m=3, n=-2$ $\\therefore$ **m=3, n=-2**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 40,
      "source": "동아 교과서 72p 단원 마무리 12번",
      "tag": "심화",
      "question": "곡선 $y=\\frac{1}{3}x^3-2x^2+4$의 접선 중에서 기울기가 최소인 접선의 방정식을 구하시오.",
      "formula": "",
      "tip": "접선의 기울기 함수를 미분으로 구한 뒤 $y'=x^2-4x$를 완전제곱식으로 변형하여 최소가 되는 $x$좌표를 공식에 대입하세요.",
      "answer": "$y=-4x+\\frac{20}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 기울기 최소점]",
            "content": "기울기 $m = x^2-4x = (x-2)^2-4$. 따라서 $x=2$일 때 기울기의 최솟값은 $-4$입니다."
          },
          {
            "label": "[2단계: 접점 및 접선 방정식]",
            "content": "접점 $\\left(2, \\frac{8}{3}-8+4\\right) = \\left(2, -\\frac{4}{3}\\right)$. 접선: $y-\\left(-\\frac{4}{3}\\right) = -4(x-2) \\implies y=-4x+\\frac{20}{3}$ $\\therefore$ **$y=-4x+\\frac{20}{3}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 41,
      "source": "동아 교과서 72p 단원 마무리 13번",
      "tag": "심화",
      "question": "미분가능한 함수 $f(x)$가 모든 실수 $x, y$에 대하여 $f(x+y)=f(x)+f(y)-kxy$를 만족시키고 $f'(x)=x+1$일 때, 상수 $k$의 값을 구하시오.",
      "formula": "",
      "tip": "도함수의 정의 $f'(x)=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$에 관계식을 대입해 식을 정리하고 $f'(x)=x+1$과 계수를 비교하세요.",
      "answer": "-1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 전개]",
            "content": "$f'(x)=\\lim_{h \\to 0} \\frac{f(h)-kxh}{h} = f'(0)-kx$"
          },
          {
            "label": "[2단계: 계수 비교]",
            "content": "$f'(x) = -kx + f'(0) = x + 1$이므로 $-k=1 \\implies k=-1$ $\\therefore$ **-1**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 42,
      "source": "동아 교과서 72p 단원 마무리 14번",
      "tag": "심화",
      "question": "함수 $f(x)=(x-1)(x-2)(x-3)\\times\\cdots\\times(x-10)$에 대하여 $\\frac{f'(10)}{f'(1)}$의 값을 구하시오.",
      "formula": "",
      "tip": "$f'(a)$는 곱의 미분법에 의해 $(x-a)$ 인수를 제외한 나머지 항들에 $x=a$를 대입한 값과 같습니다.",
      "answer": "-1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 각각의 미분계수]",
            "content": "$f'(10) = 9 \\times 8 \\times \\cdots \\times 1 = 9!$\n$f'(1) = (-1)(-2)\\cdots(-9) = (-1)^9 \\times 9! = -9!$"
          },
          {
            "label": "[2단계: 비율 계산]",
            "content": "$\\frac{f'(10)}{f'(1)} = \\frac{9!}{-9!} = -1$ $\\therefore$ **-1**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 43,
      "source": "동아 교과서 72p 단원 마무리 15번",
      "tag": "심화",
      "question": "다항함수 $f(x)$와 그 도함수 $f'(x)$에 대하여 $\\{f'(x)\\}^2=2f(x), f(1)=0$이 성립할 때, 함수 $f(x)$를 구하시오.",
      "formula": "",
      "tip": "차수 비교를 통해 $f(x)$가 2차 다항함수임을 파악하고, $f(x)=ax^2+bx+c$를 대입하여 계수비교법으로 미정계수를 결정하세요.",
      "answer": "$f(x)=\\frac{1}{2}x^2-x+\\frac{1}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 차수 및 최고차항]",
            "content": "$f(x)$를 $n$차라 하면 $2(n-1)=n \\implies n=2$. $f(x)=ax^2+bx+c$에서 $(2ax+b)^2 = 2(ax^2+bx+c)$이므로 $4a^2=2a \\implies a=\\frac{1}{2}$."
          },
          {
            "label": "[2단계: 나머지 계수 결정]",
            "content": "$4ab=2b \\implies 2b=2b$, $b^2=2c \\implies c=\\frac{b^2}{2}$. $f(1)=\\frac{1}{2}+b+\\frac{b^2}{2}=0 \\implies (b+1)^2=0 \\implies b=-1, c=\\frac{1}{2}$. $\\therefore$ **$f(x)=\\frac{1}{2}x^2-x+\\frac{1}{2}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 44,
      "source": "동아 교과서 72p 단원 마무리 16번",
      "tag": "심화",
      "question": "점 $(0, 4)$에서 곡선 $y=x^3+3x^2$에 그은 접선의 접점을 P, 곡선과의 다른 교점을 Q라 할 때, 두 점 P, Q의 $x$좌표의 합을 구하시오.",
      "formula": "",
      "tip": "접점 $(t, t^3+3t^2)$에서의 접선 방정식을 세워 $(0, 4)$를 대입하고, $t$를 구한 후 삼차곡선과 다시 연립하세요.",
      "answer": "-1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 접점 P 구하기]",
            "content": "접선 $y=(3t^2+6t)x - 2t^3-3t^2$에 $(0, 4)$ 대입: $-2t^3-3t^2=4 \\implies (t+2)(2t^2-t+2)=0 \\implies t=-2$. 접점 P의 $x$좌표는 $-2$, 접선은 $y=4$."
          },
          {
            "label": "[2단계: 점 Q 구하기 및 합]",
            "content": "$x^3+3x^2=4 \\implies (x-1)(x+2)^2=0$이므로 Q의 $x$좌표는 $1$. 따라서 두 점 $x$좌표 합은 $-2+1=-1$ $\\therefore$ **-1**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 45,
      "source": "동아 교과서 73p 단원 마무리 17번 (서·논술형)",
      "tag": "서술형",
      "question": "함수 $f(x)=\\begin{cases} ax^2-x & (x < 1) \\\\ 2x^2+b & (x \\ge 1) \\end{cases}$가 $x=1$에서 미분가능할 때, 두 상수 $a, b$의 값을 각각 구하시오.",
      "formula": "",
      "tip": "1단계: $x=1$에서 연속이므로 좌우 극한 일치, 2단계: $x=1$에서 좌우 미분계수가 일치함을 단계별로 서술하세요.",
      "answer": "$a=\\frac{5}{2}, b=-\\frac{1}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건 서술]",
            "content": "$\\lim_{x \\to 1-} (ax^2-x) = a-1$, $f(1)=2+b$이므로 $a-1=2+b \\implies a-b=3$ ⋯ ①"
          },
          {
            "label": "[2단계: 미분계수 일치 서술]",
            "content": "좌도함수 $2ax-1$에 $x=1$ 대입 시 $2a-1$, 우도함수 $4x$에 $x=1$ 대입 시 $4$. $2a-1=4 \\implies a=\\frac{5}{2}$."
          },
          {
            "label": "[3단계: b 구하기]",
            "content": "①에 대입하면 $b = \\frac{5}{2}-3 = -\\frac{1}{2}$ $\\therefore$ **$a=\\frac{5}{2}, b=-\\frac{1}{2}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 46,
      "source": "동아 교과서 73p 단원 마무리 18번 (서·논술형)",
      "tag": "서술형",
      "question": "함수 $f(x)=|x(x-3)|$의 $x=3$에서의 연속성과 미분가능성을 조사하시오.",
      "formula": "",
      "tip": "1단계: $x=3$에서 함숫값과 극한값이 0으로 같음을 보이고, 2단계: $x > 3$과 $x < 3$에서 미분계수의 정의로 좌우 미분계수를 비교하세요.",
      "answer": "x=3에서 연속이지만 미분가능하지 않다.",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성 조사]",
            "content": "$\\lim_{x \\to 3} |x(x-3)| = 0 = f(3)$이므로 $x=3$에서 **연속**입니다."
          },
          {
            "label": "[2단계: 미분가능성 조사]",
            "content": "우미분계수: $\\lim_{x \\to 3+} \\frac{x(x-3)}{x-3} = 3$, 좌미분계수: $\\lim_{x \\to 3-} \\frac{-x(x-3)}{x-3} = -3$. 우미분계수와 좌미분계수가 다르므로 **미분가능하지 않습니다.**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 47,
      "source": "동아 교과서 73p 단원 마무리 19번 (서·논술형)",
      "tag": "서술형",
      "question": "함수 $f(x)=x^3+3ax^2-bx$에 대하여 $\\lim_{x \\to 2} \\frac{f(x)-f(2)}{x-2}=-3, \\lim_{x \\to -1} \\frac{x^2-1}{f(x)-f(-1)}=-\\frac{1}{3}$일 때, 두 상수 $a, b$의 값을 각각 구하시오.",
      "formula": "",
      "tip": "첫째 조건은 $f'(2)=-3$, 둘째 조건은 $\\frac{-2}{f'(-1)}=-\\frac{1}{3} \\implies f'(-1)=6$을 의미합니다. $f'(x)$에 대입해 연립하세요.",
      "answer": "$a=-1$, $b=3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 조건 해석]",
            "content": "$f'(2) = -3$이고, $\\lim_{x \\to -1} \\frac{(x-1)(x+1)}{f(x)-f(-1)} = \\frac{-2}{f'(-1)} = -\\frac{1}{3} \\implies f'(-1) = 6$"
          },
          {
            "label": "[2단계: f'(x) 식 대입 및 연립]",
            "content": "$f'(x)=3x^2+6ax-b$이므로\n$f'(2) = 12+12a-b = -3 \\implies 12a-b=-15$ ⋯ ①\n$f'(-1) = 3-6a-b = 6 \\implies 6a+b=-3$ ⋯ ②\n①+②: $18a = -18 \\implies a=-1, b=3$ $\\therefore$ **a=-1, b=3**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 48,
      "source": "동아 교과서 73p 단원 마무리 20번 (서·논술형)",
      "tag": "서술형",
      "question": "두 곡선 $y=x^3, y=\\frac{2}{3}x^3-2x^2-3x+k$가 만나는 점에서 공통인 접선을 갖도록 하는 모든 실수 $k$의 값의 합을 구하시오.",
      "formula": "",
      "tip": "공통 접점의 $x$좌표를 $t$라 하고, 도함수가 같다는 식에서 $t$를 구한 후 함숫값이 같다는 식에 대입하여 $k$의 합을 구하세요.",
      "answer": "$-\\frac{4}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 접점 t 구하기]",
            "content": "도함수 일치: $3t^2 = 2t^2-4t-3 \\implies t^2+4t+3=0 \\implies (t+1)(t+3)=0$. 따라서 $t=-1$ 또는 $t=-3$"
          },
          {
            "label": "[2단계: k의 값 계산]",
            "content": "함숫값 일치: $t^3 = \\frac{2}{3}t^3-2t^2-3t+k \\implies k = \\frac{1}{3}t^3+2t^2+3t$.\n$t=-1$일 때 $k = -\\frac{1}{3}+2-3 = -\\frac{4}{3}$,\n$t=-3$일 때 $k = -9+18-9 = 0$."
          },
          {
            "label": "[3단계: k의 합 구하기]",
            "content": "모든 $k$의 값의 합은 $-\\frac{4}{3} + 0 = -\\frac{4}{3}$ $\\therefore$ **$-\\frac{4}{3}$**"
          }
        ]
      },
      "subQuestions": []
    }
  ]
};
