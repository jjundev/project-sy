/*
 * 교과서 실전 핵심: II. 미분 (미분계수와 도함수 - 20문항)
 */
window.WORKSHEET_DATA = {
  "meta": {
    "title": "수학 II / 미적분 I - II. 미분 (미분계수와 도함수)",
    "subtitle": "교과서 실전 핵심 (중단원 점검하기 + 대단원 평가하기 전수 수록)",
    "student": "오서영",
    "date": "2026. 09. 12 (토)",
    "cheer": "서영이의 완벽한 교과서 정복과 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "교과서 74p 중단원 1번",
      "tag": "기본",
      "question": "함수 $f(x)=x^2+x+1$에서 $x$의 값이 $-1$에서 $2$까지 변할 때의 평균변화율을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "평균변화율 공식 $\\frac{\\Delta y}{\\Delta x} = \\frac{f(b)-f(a)}{b-a}$에 대입하기! $f(2)$와 $f(-1)$을 각각 구하여 대입하세요.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 공식 대입]",
            "content": "평균변화율 공식: $\\frac{f(2)-f(-1)}{2-(-1)}$"
          },
          {
            "label": "[2단계: 함숫값 계산]",
            "content": "$f(2) = 2^2+2+1 = 7$, $f(-1) = (-1)^2+(-1)+1 = 1$"
          },
          {
            "label": "[3단계: 평균변화율 도출]",
            "content": "$\\frac{7-1}{3} = \\frac{6}{3} = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "교과서 74p 중단원 2번",
      "tag": "기본",
      "question": "곡선 $y=2x^2-x$ 위의 점 $(2, 6)$에서의 접선의 기울기를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분계수의 기하적 의미: 곡선 위의 점 $(a, f(a))$에서의 접선의 기울기는 곧 미분계수 $f'(a)$입니다! 도함수 공식을 이용하여 $x=2$를 대입하세요.",
      "answer": "7",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 구하기]",
            "content": "$y = 2x^2-x \\implies y' = 4x-1$"
          },
          {
            "label": "[2단계: 미분계수 대입]",
            "content": "점 $(2, 6)$에서의 접선 기울기는 $x=2$에서의 미분계수: $y'|_{x=2} = 4(2)-1 = 7$"
          },
          {
            "label": "[3단계: 정답]",
            "content": "$\\therefore$ **7**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "교과서 74p 중단원 3번",
      "tag": "표준",
      "question": "함수 $f(x) = \\begin{cases} -x^3+4 & (x \\ge 1) \\\\ x^2+2x & (x < 1) \\end{cases}$ 의 $x=1$에서의 연속성과 미분가능성을 조사하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $x=1$을 양 식에 대입하여 연속성 확인! 2단계: 우미분계수와 좌미분계수를 각각 구하여 일치하는지 미분가능성을 조사하세요.",
      "answer": "연속이지만 미분가능하지 않다.",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성 조사]",
            "content": "$f(1) = -1+4 = 3$, $\\lim_{x \\to 1+} f(x) = 3$, $\\lim_{x \\to 1-} (x^2+2x) = 1+2 = 3$. 극한값과 함숫값이 같으므로 $x=1$에서 **연속**"
          },
          {
            "label": "[2단계: 미분가능성 조사]",
            "content": "우미분계수: $(-x^3+4)'|_{x=1} = -3(1)^2 = -3$ \\\\ 좌미분계수: $(x^2+2x)'|_{x=1} = 2(1)+2 = 4$ \\\\ 우미분계수 $\\ne$ 좌미분계수이므로 $x=1$에서 **미분가능하지 않다.**"
          },
          {
            "label": "[3단계: 결론]",
            "content": "$\\therefore$ **연속이지만 미분가능하지 않다.**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "교과서 74p 중단원 4번",
      "tag": "기본",
      "question": "도함수의 정의를 이용하여 다음 함수의 도함수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = 2x-1"
        },
        {
          "no": 2,
          "formula": "f(x) = -x^2+5x"
        }
      ],
      "tip": "도함수의 정의 공식: $f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x)-f(x)}{\\Delta x}$에 대입하여 $\\Delta x$를 약분한 뒤 $\\Delta x=0$을 대입하세요.",
      "answer": "(1) f'(x) = 2, (2) f'(x) = -2x+5",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[도함수 정의] $\\lim_{\\Delta x \\to 0} \\frac{\\{2(x+\\Delta x)-1\\}-(2x-1)}{\\Delta x} = \\lim_{\\Delta x \\to 0} \\frac{2\\Delta x}{\\Delta x} = 2$ $\\therefore$ **$f'(x)=2$**"
          },
          {
            "label": "(2)",
            "content": "[도함수 정의] $\\lim_{\\Delta x \\to 0} \\frac{\\{-(x+\\Delta x)^2+5(x+\\Delta x)\\}-(-x^2+5x)}{\\Delta x} = \\lim_{\\Delta x \\to 0} (-2x-\\Delta x+5) = -2x+5$ $\\therefore$ **$f'(x)=-2x+5$**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "교과서 74p 중단원 5번",
      "tag": "기본",
      "question": "미분법 공식을 이용하여 다음 함수를 미분하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "y = (x^2+1)(x^3-2x)"
        },
        {
          "no": 2,
          "formula": "y = 3(x^2+2x)+x(x^2-1)"
        }
      ],
      "tip": "곱의 미분법 공식 $(fg)' = f'g + fg'$을 적용하거나, 식을 먼저 전개한 뒤 기본 공식 $(x^n)'=nx^{n-1}$에 대입하세요.",
      "answer": "(1) y' = 5x^4-3x^2-2, (2) y' = 3x^2+6x+5",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[곱의 미분법] $y' = (2x)(x^3-2x) + (x^2+1)(3x^2-2) = (2x^4-4x^2) + (3x^4+x^2-2) = 5x^4-3x^2-2$ $\\therefore$ **$y' = 5x^4-3x^2-2$**"
          },
          {
            "label": "(2)",
            "content": "[전개 후 미분] $y = 3x^2+6x+x^3-x = x^3+3x^2+5x \\implies y' = 3x^2+6x+5$ $\\therefore$ **$y' = 3x^2+6x+5$**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "교과서 75p 중단원 6번",
      "tag": "표준",
      "question": "함수 $f(x)=x^2-2x+3$에서 $x$의 값이 $1$에서 $a$까지 변할 때의 평균변화율과 $x=2$에서의 미분계수가 같을 때, 상수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "평균변화율 $\\frac{f(a)-f(1)}{a-1}$과 미분계수 공식 $f'(2)$를 각각 계산하여 같다고 놓고 일차방정식을 푸세요.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 평균변화율 계산]",
            "content": "$\\frac{f(a)-f(1)}{a-1} = \\frac{(a^2-2a+3)-2}{a-1} = \\frac{a^2-2a+1}{a-1} = \\frac{(a-1)^2}{a-1} = a-1$"
          },
          {
            "label": "[2단계: 미분계수 계산]",
            "content": "$f'(x) = 2x-2 \\implies f'(2) = 2(2)-2 = 2$"
          },
          {
            "label": "[3단계: 일치 조건]",
            "content": "$a-1 = 2 \\implies a = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "교과서 75p 중단원 7번",
      "tag": "표준",
      "question": "다항함수 $f(x)$에 대하여 $\\lim_{h \\to 0} \\frac{f(1+2h)-f(1)}{h} = 6$일 때, $\\lim_{x \\to 1} \\frac{f(x)-f(1)}{x^2-1}$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분계수의 정의 공식 매칭: 좌변은 $2f'(1) = 6 \\implies f'(1)=3$. 구하는 식의 분모를 $(x-1)(x+1)$로 인수분해하여 대입하세요.",
      "answer": "3/2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f'(1) 도출]",
            "content": "$\\lim_{h \\to 0} \\frac{f(1+2h)-f(1)}{2h} \\times 2 = 2f'(1) = 6 \\implies f'(1) = 3$"
          },
          {
            "label": "[2단계: 구하는 극한 식 변형]",
            "content": "$\\lim_{x \\to 1} \\frac{f(x)-f(1)}{(x-1)(x+1)} = \\lim_{x \\to 1} \\frac{f(x)-f(1)}{x-1} \\times \\lim_{x \\to 1} \\frac{1}{x+1} = f'(1) \\times \\frac{1}{2}$"
          },
          {
            "label": "[3단계: 대입 및 계산]",
            "content": "$3 \\times \\frac{1}{2} = \\frac{3}{2}$ $\\therefore$ **$\\frac{3}{2}$**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "교과서 75p 중단원 8번",
      "tag": "표준",
      "question": "미분가능한 함수 $y=f(x)$의 그래프가 주어질 때, $\\frac{f(e)}{e}$의 값보다 큰 것을 모두 고르시오. (보기: $f'(a), f'(b), f'(c), f'(d), f'(e)$)",
      "formula": "",
      "subQuestions": [],
      "tip": "기하적 의미: $\\frac{f(e)}{e}$는 평균변화율 공식과 관련되며 원점과의 기울기입니다! 미분계수(접선의 기울기) $f'(x)$가 이보다 더 가파른 점을 찾으세요.",
      "answer": "f'(a), f'(b)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 기하적 의미 해석]",
            "content": "$\\frac{f(e)}{e}$는 원점 $(0, 0)$과 점 $(e, f(e))$를 잇는 할선의 기울기입니다."
          },
          {
            "label": "[2단계: 접선 기울기 비교]",
            "content": "그래프에서 원점과 연결한 직선의 기울기보다 접선의 기울기가 더 큰 구간은 곡선의 볼록/기울기 상태에 따라 $x=a$와 $x=b$에서의 접선입니다."
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **$f'(a), f'(b)$**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "교과서 75p 중단원 9번",
      "tag": "표준",
      "question": "함수 $f(x) = \\begin{cases} ax+b & (x \\ge 1) \\\\ -x^2+x+1 & (x < 1) \\end{cases}$ 이 모든 실수 $x$에서 미분가능할 때, 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분가능하면 먼저 연속이어야 합니다! 1단계: $x=1$에서 연속 조건($x=1$ 대입값 일치), 2단계: $x=1$에서 도함수 값 일치로 $a, b$를 구하세요.",
      "answer": "a = -1, b = 2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=1 연속성 선 대입]",
            "content": "$a(1)+b = -(1)^2+1+1 \\implies a+b = 1$ $\\cdots$ ①"
          },
          {
            "label": "[2단계: x=1 미분가능성]",
            "content": "우미분: $(ax+b)' = a$ \\\\ 좌미분: $(-x^2+x+1)' = -2x+1 \\implies x=1$ 대입 시 $-2(1)+1 = -1$ \\\\ 따라서 $a = -1$"
          },
          {
            "label": "[3단계: b 결정]",
            "content": "$a=-1$을 ①에 대입: $-1+b = 1 \\implies b = 2$ $\\therefore$ **$a=-1, b=2$**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "교과서 75p 중단원 10번",
      "tag": "표준",
      "question": "미분가능한 두 함수 $f(x), g(x)$가 $\\lim_{x \\to 1} \\frac{f(x)-3}{x-1}=2, \\lim_{x \\to 1} \\frac{g(x)+2}{x-1}=3$을 만족시킬 때, 함수 $y=f(x)g(x)$의 $x=1$에서의 미분계수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분계수의 정의에 의해 $f(1)=3, f'(1)=2$이고 $g(1)=-2, g'(1)=3$입니다. 곱의 미분법 공식 $(fg)'(1) = f'(1)g(1)+f(1)g'(1)$에 대입하세요.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함숫값과 미분계수 판독]",
            "content": "$f(1)=3, f'(1)=2$ \\\\ $g(1)=-2, g'(1)=3$"
          },
          {
            "label": "[2단계: 곱의 미분 공식 적용]",
            "content": "$(f \\cdot g)'(1) = f'(1)g(1) + f(1)g'(1)$"
          },
          {
            "label": "[3단계: 대입 및 계산]",
            "content": "$2(-2) + 3(3) = -4 + 9 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "교과서 76p 중단원 11번",
      "tag": "표준",
      "question": "함수 $f(x)=x^3+ax^2+b$에 대하여 $f(1)=3, f'(1)=-1$일 때, 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "도함수 공식으로 $f'(x)=3x^2+2ax$를 구한 뒤, $x=1$을 각각 $f'(x)$와 $f(x)$에 대입하여 $a, b$ 연립방정식을 푸세요.",
      "answer": "a = -2, b = 4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 및 f'(1) 대입]",
            "content": "$f'(x) = 3x^2+2ax \\implies f'(1) = 3+2a = -1 \\implies 2a = -4 \\implies a = -2$"
          },
          {
            "label": "[2단계: f(1) 대입]",
            "content": "$f(1) = 1^3+a(1)^2+b = 1+(-2)+b = 3 \\implies b-1 = 3 \\implies b = 4$"
          },
          {
            "label": "[3단계: 정답]",
            "content": "$\\therefore$ **$a=-2, b=4$**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "교과서 76p 중단원 12번",
      "tag": "발전",
      "question": "다항함수 $f(x)$가 $f(x)=4x^3+x^2-xf'(1)$을 만족시킬 때, $f'(-1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$f'(1)$은 상수(숫자)입니다! 양변을 미분하여 $f'(x)$를 구한 뒤, $x=1$을 대입하여 $f'(1)$의 값을 먼저 구하세요.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 양변 미분]",
            "content": "$f'(x) = 12x^2+2x-f'(1)$ (단, $f'(1)$은 상수)"
          },
          {
            "label": "[2단계: x=1 대입하여 f'(1) 결정]",
            "content": "$f'(1) = 12(1)^2+2(1)-f'(1) = 14-f'(1) \\implies 2f'(1) = 14 \\implies f'(1) = 7$"
          },
          {
            "label": "[3단계: f'(-1) 계산]",
            "content": "$f'(x) = 12x^2+2x-7 \\implies f'(-1) = 12(-1)^2+2(-1)-7 = 12-2-7 = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "교과서 76p 중단원 13번",
      "tag": "발전",
      "question": "미분가능한 함수 $f(x)$가 모든 실수 $x, y$에 대하여 $f(x+y)=f(x)+f(y)-xy$를 만족시키고, $f'(0)=3$일 때, $f'(2)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분계수의 정의 공식 $f'(2) = \\lim_{h \\to 0} \\frac{f(2+h)-f(2)}{h}$에 식을 대입하여 $f(h)$와 $h$를 분리하세요.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f'(0) 정의 확인]",
            "content": "$x=y=0$ 대입 시 $f(0)=0$. $f'(0) = \\lim_{h \\to 0} \\frac{f(h)-f(0)}{h} = \\lim_{h \\to 0} \\frac{f(h)}{h} = 3$"
          },
          {
            "label": "[2단계: f'(2) 공식 전개]",
            "content": "$f'(2) = \\lim_{h \\to 0} \\frac{f(2+h)-f(2)}{h} = \\lim_{h \\to 0} \\frac{\\{f(2)+f(h)-2h\\}-f(2)}{h} = \\lim_{h \\to 0} \\frac{f(h)-2h}{h}$"
          },
          {
            "label": "[3단계: 극한값 계산]",
            "content": "$\\lim_{h \\to 0} \\frac{f(h)}{h} - \\lim_{h \\to 0} \\frac{2h}{h} = 3 - 2 = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "교과서 76p 중단원 14번",
      "tag": "발전",
      "question": "미분가능한 함수 $f(x)$에 대하여 $\\lim_{x \\to 2} \\frac{f(x^2)-1}{x-2}=-2$일 때, $\\lim_{x \\to 4} \\frac{x^2f(4)-16f(x)}{x-4}$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "첫 번째 식에서 분모 $\\to 0$이므로 $f(4)=1$, $x^2=t$ 치환 시 $4f'(4)=-2 \\implies f'(4)=-\\frac{1}{2}$! 구하는 식에 $x^2f(x)$를 더하고 빼서 대입하세요.",
      "answer": "16",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(4)와 f'(4) 도출]",
            "content": "$\\lim_{x \\to 2} (x-2)=0 \\implies f(4)=1$. $\\lim_{x \\to 2} \\frac{f(x^2)-f(4)}{x^2-4} \\times (x+2) = 4f'(4) = -2 \\implies f'(4) = -\\frac{1}{2}$"
          },
          {
            "label": "[2단계: 구하는 식 변형]",
            "content": "$\\lim_{x \\to 4} \\frac{-x^2\\{f(x)-f(4)\\} + f(4)(x^2-16)}{x-4} = -16f'(4) + 8f(4)$"
          },
          {
            "label": "[3단계: 대입 및 계산]",
            "content": "$-16\\left(-\\frac{1}{2}\\right) + 8(1) = 8 + 8 = 16$ $\\therefore$ **16**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "교과서 112p 대단원 1번",
      "tag": "기본",
      "question": "함수 $f(x)=x^2+3x$에서 $x$의 값이 $a$에서 $a+2$까지 변할 때의 평균변화율이 $3$일 때, 상수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "평균변화율 공식 $\\frac{f(a+2)-f(a)}{(a+2)-a} = 3$에 대입하여 전개 후 $a$를 구하세요.",
      "answer": "-1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 평균변화율 공식 대입]",
            "content": "$\\frac{f(a+2)-f(a)}{2} = \\frac{\\{(a+2)^2+3(a+2)\\} - (a^2+3a)}{2}$"
          },
          {
            "label": "[2단계: 식 전개 및 정리]",
            "content": "$\\frac{a^2+4a+4+3a+6 - a^2-3a}{2} = \\frac{4a+10}{2} = 2a+5$"
          },
          {
            "label": "[3단계: a 결정]",
            "content": "$2a+5 = 3 \\implies 2a = -2 \\implies a = -1$ $\\therefore$ **-1**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "교과서 112p 대단원 2번",
      "tag": "기본",
      "question": "다항함수 $f(x)$에 대하여 $f'(2)=3$일 때, $\\lim_{h \\to 0} \\frac{f(2-h)-f(2)}{h}$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분계수의 정의 공식 형태 맞추기: 분자의 증분 $-h$에 맞추어 분모를 $-h$로 바꾸고 $-1$을 곱해 대입하세요.",
      "answer": "-3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 증분 형태 맞추기]",
            "content": "$\\lim_{h \\to 0} \\frac{f(2-h)-f(2)}{-h} \\times (-1)$"
          },
          {
            "label": "[2단계: 미분계수 대입]",
            "content": "$f'(2) \\times (-1) = 3 \\times (-1) = -3$"
          },
          {
            "label": "[3단계: 정답]",
            "content": "$\\therefore$ **-3**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "교과서 112p 대단원 3번",
      "tag": "표준",
      "question": "다항함수 $f(x)$가 $f(4)=2, f'(4)=1$을 만족시킬 때, $\\lim_{x \\to 2} \\frac{4f(x^2)-x^2f(4)}{x-2}$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분자에 $4f(4)$를 빼고 더하여 미분계수 정의 공식으로 변형한 뒤 $f(4)=2, f'(4)=1$을 대입하세요.",
      "answer": "8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 변형]",
            "content": "$\\lim_{x \\to 2} \\frac{4\\{f(x^2)-f(4)\\} - f(4)(x^2-4)}{x-2}$"
          },
          {
            "label": "[2단계: 미분계수 꼴로 분리]",
            "content": "$4 \\lim_{x \\to 2} \\frac{f(x^2)-f(4)}{x^2-4} \\times (x+2) - f(4) \\lim_{x \\to 2} (x+2) = 4f'(4) \\times 4 - f(4) \\times 4 = 16f'(4)-4f(4)$"
          },
          {
            "label": "[3단계: 수치 대입]",
            "content": "$16(1) - 4(2) = 16 - 8 = 8$ $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "교과서 112p 대단원 4번",
      "tag": "표준",
      "question": "$x=0$에서 미분가능한 함수인 것만을 다음 보기에서 있는 대로 고르시오.\\nㄱ. $f(x)=x+|x|$ \\quad ㄴ. $g(x)=x|x|$ \\quad ㄷ. $h(x)=x\\sqrt{|x|}$",
      "formula": "",
      "subQuestions": [],
      "tip": "미분계수의 정의 공식 $\\lim_{x \\to 0} \\frac{f(x)-f(0)}{x}$에 대입하여 우극한과 좌극한이 일치하는지 확인하세요.",
      "answer": "ㄴ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ 판정]",
            "content": "$\\frac{f(x)-0}{x} = 1 + \\frac{|x|}{x}$. 우극한은 $2$, 좌극한은 $0$이므로 미분불가능"
          },
          {
            "label": "[ㄴ 판정]",
            "content": "$\\frac{g(x)-0}{x} = |x| \\to 0$ ($x \\to 0$). 우극한과 좌극한이 모두 $0$으로 일치하므로 미분가능"
          },
          {
            "label": "[ㄷ 판정]",
            "content": "$\\frac{h(x)-0}{x} = \\sqrt{|x|} \\to 0$ ($x \\to 0$). 극한값이 $0$으로 존재하므로 미분가능"
          },
          {
            "label": "[정답]",
            "content": "따라서 미분가능한 것은 ㄴ, ㄷ $\\therefore$ **ㄴ, ㄷ**"
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "교과서 112p 대단원 5번",
      "tag": "표준",
      "question": "미분가능한 함수 $y=f(x)$의 그래프와 직선 $y=x$에 대하여 $0<a<1<b$일 때, 다음 보기에서 옳은 것만을 있는 대로 고르시오.\\nㄱ. $\\frac{f(a)}{a} > \\frac{f(b)}{b}$ \\quad ㄴ. $f(b)-f(a) > b-a$ \\quad ㄷ. $f'(b) < 1 < f'(a)$",
      "formula": "",
      "subQuestions": [],
      "tip": "기하적 의미: $\\frac{f(x)}{x}$는 원점과의 기울기, $\\frac{f(b)-f(a)}{b-a}$는 평균변화율 공식, $f'(x)$는 미분계수(접선 기울기)입니다.",
      "answer": "ㄴ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ 판정]",
            "content": "원점과 잇는 기울기는 아래로 볼록한 그래프 특성상 $b$에서 더 큽니다 $\\implies \\frac{f(a)}{a} < \\frac{f(b)}{b}$ (거짓)"
          },
          {
            "label": "[ㄴ 판정]",
            "content": "두 점 $(a, f(a))$와 $(b, f(b))$를 잇는 직선의 기울기 $\\frac{f(b)-f(a)}{b-a} > 1$이므로 $f(b)-f(a) > b-a$ (참)"
          },
          {
            "label": "[ㄷ 판정]",
            "content": "접선의 기울기는 $x=b$에서 $1$보다 크고 $x=a$에서 $1$보다 작습니다 (거짓)"
          },
          {
            "label": "[정답]",
            "content": "따라서 옳은 것은 ㄴ $\\therefore$ **ㄴ**"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "교과서 113p 대단원 6번",
      "tag": "표준",
      "question": "미분가능한 함수 $f(x)$에 대하여 함수 $g(x)=(x^3+1)f(x)$라 하자. $f(2)=1, g'(2)=3$일 때, $f'(2)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "곱의 미분법 공식 $g'(x) = (x^3+1)'f(x) + (x^3+1)f'(x) = 3x^2f(x) + (x^3+1)f'(x)$에 $x=2$를 대입하세요.",
      "answer": "-1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: g'(x) 공식 전개]",
            "content": "$g'(x) = 3x^2f(x) + (x^3+1)f'(x)$"
          },
          {
            "label": "[2단계: x=2 대입]",
            "content": "$g'(2) = 3(2^2)f(2) + (2^3+1)f'(2) = 12f(2) + 9f'(2)$"
          },
          {
            "label": "[3단계: f'(2) 계산]",
            "content": "$12(1) + 9f'(2) = 3 \\implies 9f'(2) = -9 \\implies f'(2) = -1$ $\\therefore$ **-1**"
          }
        ]
      }
    }
  ]
};
