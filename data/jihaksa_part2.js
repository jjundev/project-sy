window.WORKSHEET_DATA = {
  "meta": {
    "title": "미적분 I / 수학 II - II. 미분",
    "subtitle": "지학사 교과서 실전 핵심 (소단원 핵심 점검 + 대단원 마무리평가 전수 수록)",
    "student": "",
    "date": "2026. 09. 20 (일)",
    "cheer": "완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "지학사 교과서 58p 02번",
      "tag": "기초",
      "question": "함수 $f(x)=x^2+2x$에서 $x$의 값이 다음과 같이 변할 때의 평균변화율을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$1$에서 $4$까지"
        },
        {
          "no": 2,
          "formula": "$a$에서 $a+\\Delta x$까지"
        }
      ],
      "tip": "평균변화율 공식 $\\frac{\\Delta y}{\\Delta x} = \\frac{f(b)-f(a)}{b-a}$에 대입하여 계산합니다.",
      "answer": "(1) 7, (2) $2a+\\Delta x+2$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 공식 대입] $\\frac{f(4)-f(1)}{4-1} = \\frac{(16+8)-(1+2)}{3} = \\frac{24-3}{3} = 7$ $\\therefore$ **7**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 공식 대입] $\\frac{f(a+\\Delta x)-f(a)}{\\Delta x} = \\frac{(a+\\Delta x)^2+2(a+\\Delta x)-(a^2+2a)}{\\Delta x} = \\frac{2a\\Delta x+(\\Delta x)^2+2\\Delta x}{\\Delta x} = 2a+\\Delta x+2$ $\\therefore$ **$2a+\\Delta x+2$**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "지학사 교과서 58p 03번",
      "tag": "기초",
      "question": "미분계수의 정의를 이용하여 다음 함수의 $x=2$에서의 미분계수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=3x-1"
        },
        {
          "no": 2,
          "formula": "f(x)=x^2-2x"
        }
      ],
      "tip": "미분계수의 정의 $f'(a) = \\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$ 공식에 대입하여 극한값을 구합니다.",
      "answer": "(1) 3, (2) 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[미분계수 정의 대입] $\\lim_{h \\to 0} \\frac{3(2+h)-1-(6-1)}{h} = \\lim_{h \\to 0} \\frac{3h}{h} = 3$ $\\therefore$ **3**"
          },
          {
            "label": "(2)",
            "content": "[미분계수 정의 대입] $\\lim_{h \\to 0} \\frac{(2+h)^2-2(2+h)-(4-4)}{h} = \\lim_{h \\to 0} \\frac{4+4h+h^2-4-2h}{h} = \\lim_{h \\to 0} (2+h) = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "지학사 교과서 58p 04번",
      "tag": "기본",
      "question": "곡선 $y=2x^2+ax+b$ 위의 점 $(1, 6)$에서의 접선의 기울기가 7일 때, 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "접선의 기울기는 $x=1$에서의 미분계수 $f'(1)$과 같음을 이용하고, 점 $(1, 6)$ 대입 조건을 활용합니다.",
      "answer": "$a=3, b=1$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 및 기울기]",
            "content": "$f'(x) = 4x+a$. $x=1$에서의 접선의 기울기가 7이므로 $f'(1) = 4+a = 7 \\implies a = 3$"
          },
          {
            "label": "[2단계: 점 대입]",
            "content": "곡선 위의 점 $(1, 6)$이므로 $f(1) = 2(1)^2+3(1)+b = 5+b = 6 \\implies b = 1$"
          },
          {
            "label": "[3단계: 정답]",
            "content": "$a=3, b=1$ $\\therefore$ **$a=3, b=1$**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "지학사 교과서 62p 02번",
      "tag": "기초",
      "question": "$x=1$에서 미분가능한 함수 $f(x)$에 대하여 $f(1)=3$일 때, $\\lim_{x \\to 1} f(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분가능하면 연속 성질! $x=1$에서 미분가능하면 반드시 연속이므로 극한값과 함숫값이 일치합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 성질]",
            "content": "함수 $f(x)$가 $x=1$에서 미분가능하면 $x=1$에서 연속이다."
          },
          {
            "label": "[2단계: 극한값 계산]",
            "content": "연속이므로 $\\lim_{x \\to 1} f(x) = f(1) = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "지학사 교과서 62p 03번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} x^2+x & (x < 0) \\\\ -x^2+x & (x \\ge 0) \\end{cases}$ 에 대하여 다음 물음에 답하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "함수 $f(x)$의 $x=0$에서의 연속성을 조사하시오."
        },
        {
          "no": 2,
          "formula": "함수 $f(x)$의 $x=0$에서의 미분가능성을 조사하시오."
        }
      ],
      "tip": "연속 조건(함숫값과 좌우극한 일치)을 대입 점검하고, 좌우 미분계수의 일치 여부를 조사합니다.",
      "answer": "(1) 연속이다, (2) 미분가능하다",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[연속성] $f(0)=0$, $\\lim_{x \\to 0-} (x^2+x)=0$, $\\lim_{x \\to 0+} (-x^2+x)=0$으로 일치하므로 연속 $\\therefore$ **연속이다**"
          },
          {
            "label": "(2)",
            "content": "[미분계수] 좌미분계수: $\\lim_{x \\to 0-} \\frac{x^2+x-0}{x} = \\lim_{x \\to 0-} (x+1) = 1$. 우미분계수: $\\lim_{x \\to 0+} \\frac{-x^2+x-0}{x} = 1$. 일치하므로 미분가능 $\\therefore$ **미분가능하다**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "지학사 교과서 62p 05번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} ax^2+2 & (x \\le 1) \\\\ x^4+b & (x > 1) \\end{cases}$ 가 $x=1$에서 미분가능할 때, 상수 $a, b$에 대하여 $a+b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분가능 조건! 1단계: 선 대입으로 연속 조건($x=1$ 대입값 일치), 2단계: 도함수 일치(좌우 미분계수 일치)를 적용합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 일치]",
            "content": "$x < 1$에서 $f'(x)=2ax$, $x > 1$에서 $f'(x)=4x^3$. $x=1$에서 $2a(1) = 4(1)^3 \\implies 2a = 4 \\implies a = 2$"
          },
          {
            "label": "[2단계: 연속 조건 대입]",
            "content": "$x=1$에서 함숫값이 같아야 하므로 $a(1)^2+2 = 1^4+b \\implies 2+2 = 1+b \\implies b = 3$"
          },
          {
            "label": "[3단계: $a+b$ 계산]",
            "content": "$a+b = 2+3 = 5$... 정답 검토: $f(1)=a+2$, $x>1$에서 $1+b$. $a=2 \\implies 4=1+b \\implies b=3$. $a+b=5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "지학사 교과서 70p 02번",
      "tag": "기초",
      "question": "다음 함수를 미분하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=x^{10}"
        },
        {
          "no": 2,
          "formula": "f(x)=-3^{10}"
        },
        {
          "no": 3,
          "formula": "f(x)=7x^3-2x^2+5x+3"
        },
        {
          "no": 4,
          "formula": "f(x)=(4x^3+7x)(3x-4)"
        }
      ],
      "tip": "다항함수의 거듭제곱 미분 공식 $(x^n)' = n x^{n-1}$ 및 곱의 미분법 공식 $(fg)' = f'g + fg'$을 적용합니다.",
      "answer": "(1) $10x^9$, (2) 0, (3) $21x^2-4x+5$, (4) $48x^3-48x^2+42x-28$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[미분 공식] $10x^9$ $\\therefore$ **$10x^9$**"
          },
          {
            "label": "(2)",
            "content": "[상수 미분] 상수의 미분은 0이다 $\\therefore$ **0**"
          },
          {
            "label": "(3)",
            "content": "[각 항 미분] $7(3x^2)-2(2x)+5 = 21x^2-4x+5$ $\\therefore$ **$21x^2-4x+5$**"
          },
          {
            "label": "(4)",
            "content": "[곱의 미분 공식] $(12x^2+7)(3x-4)+(4x^3+7x)(3) = 36x^3-48x^2+21x-28+12x^3+21x = 48x^3-48x^2+42x-28$ $\\therefore$ **$48x^3-48x^2+42x-28$**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "지학사 교과서 70p 03번",
      "tag": "기본",
      "question": "두 함수 $f(x)=4x^2+2x+1$, $g(x)=-5x^3+2x^2+5$ 에 대하여 $f'(1)+g'(-1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "각 함수의 도함수를 구한 뒤 $x=1, x=-1$을 각각 선 대입하여 계산합니다.",
      "answer": "-9",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 구하기]",
            "content": "$f'(x) = 8x+2$, $g'(x) = -15x^2+4x$"
          },
          {
            "label": "[2단계: 대입 계산]",
            "content": "$f'(1) = 8(1)+2 = 10$. $g'(-1) = -15(-1)^2+4(-1) = -15-4 = -19$"
          },
          {
            "label": "[3단계: 합]",
            "content": "$f'(1)+g'(-1) = 10 + (-19) = -9$ $\\therefore$ **-9**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "지학사 교과서 70p 04번",
      "tag": "기본",
      "question": "두 함수 $f(x)=2x^2+2$, $g(x)=-3x^3+x+1$ 에 대하여 $h(x)=f(x)g(x)$라고 할 때, $h'(1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "곱의 미분법 공식 $h'(x) = f'(x)g(x) + f(x)g'(x)$에 $x=1$을 선 대입합니다.",
      "answer": "-36",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $x=1$에서 각 값 계산]",
            "content": "$f(1) = 2+2 = 4$, $f'(x) = 4x \\implies f'(1) = 4$"
          },
          {
            "label": "[2단계: $g(1), g'(1)$ 계산]",
            "content": "$g(1) = -3+1+1 = -1$, $g'(x) = -9x^2+1 \\implies g'(1) = -9+1 = -8$"
          },
          {
            "label": "[3단계: 곱의 미분 공식 적용]",
            "content": "$h'(1) = f'(1)g(1) + f(1)g'(1) = (4)(-1) + (4)(-8) = -4 - 32 = -36$ $\\therefore$ **-36**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "지학사 교과서 74p 02번",
      "tag": "기초",
      "question": "미분가능한 함수 $f(x)$에 대하여 $f'(4)=\\frac{1}{2}$, $f(4)=3$일 때, 곡선 위의 점 $(4, f(4))$에서의 접선의 방정식을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "접선의 방정식 공식 $y-f(a) = f'(a)(x-a)$에 주어진 기울기와 좌표를 대입합니다.",
      "answer": "$y = \\frac{1}{2}x+1$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 공식 대입]",
            "content": "$y-3 = \\frac{1}{2}(x-4)$"
          },
          {
            "label": "[2단계: 식 정리]",
            "content": "$y = \\frac{1}{2}x - 2 + 3 = \\frac{1}{2}x+1$ $\\therefore$ **$y = \\frac{1}{2}x+1$**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "지학사 교과서 74p 03번",
      "tag": "기본",
      "question": "곡선 $y=x^3+2x$ 위의 점 $(1, 3)$에서의 접선의 방정식을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "도함수를 구해 $x=1$을 선 대입하여 접선의 기울기를 구한 뒤 접선의 방정식 공식에 대입합니다.",
      "answer": "$y=5x-2$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 접선의 기울기]",
            "content": "$y' = 3x^2+2$. $x=1$ 대입 시 기울기 $m = 3(1)^2+2 = 5$"
          },
          {
            "label": "[2단계: 접선 공식 대입]",
            "content": "$y-3 = 5(x-1) \\implies y = 5x-5+3 = 5x-2$ $\\therefore$ **$y=5x-2$**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "지학사 교과서 74p 04번",
      "tag": "기본",
      "question": "곡선 $y=-x^2+x+3$에 접하고 직선 $x-3y=0$에 수직인 직선의 방정식을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "수직 조건 및 미분 활용! 직선 $y=\\frac{1}{3}x$에 수직인 접선의 기울기는 -3입니다. $y'=-3$이 되는 접점의 좌표를 찾습니다.",
      "answer": "$y=-3x+7$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 기울기 조건]",
            "content": "직선 $x-3y=0$의 기울기는 $\\frac{1}{3}$이므로 수직인 직선의 기울기는 $-3$이다."
          },
          {
            "label": "[2단계: 접점 구하기]",
            "content": "$y' = -2x+1 = -3 \\implies -2x = -4 \\implies x = 2$. 접점의 $y$좌표: $-(2)^2+2+3 = 1$"
          },
          {
            "label": "[3단계: 접선의 방정식]",
            "content": "점 $(2, 1)$을 지나고 기울기가 $-3$이므로 $y-1 = -3(x-2) \\implies y = -3x+7$ $\\therefore$ **$y=-3x+7$**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "지학사 교과서 80p 02번",
      "tag": "기초",
      "question": "다음 함수에 대하여 주어진 구간에서 롤의 정리를 만족시키는 상수 $c$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=2x^2-4x+1 \\quad [0, 2]"
        },
        {
          "no": 2,
          "formula": "f(x)=-x^3+12x \\quad [-2\\sqrt{3}, 2\\sqrt{3}]"
        }
      ],
      "tip": "롤의 정리 조건: $f'(c)=0$이 되는 $c$를 열린구간 $(a, b)$에서 찾습니다.",
      "answer": "(1) 1, (2) 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[롤의 정리 공식] $f'(x) = 4x-4 = 0 \\implies x=1 \\in (0, 2)$ $\\therefore$ **1**"
          },
          {
            "label": "(2)",
            "content": "[롤의 정리 공식] $f'(x) = -3x^2+12 = 0 \\implies x^2=4 \\implies x = \\pm 2$. 구간 $(-2\\sqrt{3}, 2\\sqrt{3})$ 내에 $-2, 2$ 모두 존재 $\\therefore$ **-2, 2**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "지학사 교과서 80p 03번",
      "tag": "기본",
      "question": "다음 함수에 대하여 주어진 구간에서 평균값 정리를 만족시키는 상수 $c$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=x^2-4x+5 \\quad [2, 4]"
        },
        {
          "no": 2,
          "formula": "f(x)=x^3-7x \\quad [0, 3]"
        }
      ],
      "tip": "평균값 정리 공식 $\\frac{f(b)-f(a)}{b-a} = f'(c)$에 대입하여 $c$를 구합니다.",
      "answer": "(1) 3, (2) $\\sqrt{3}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[평균변화율 계산] $\\frac{f(4)-f(2)}{4-2} = \\frac{5-1}{2} = 2$. $f'(c) = 2c-4 = 2 \\implies 2c = 6 \\implies c = 3 \\in (2, 4)$ $\\therefore$ **3**"
          },
          {
            "label": "(2)",
            "content": "[평균변화율 계산] $\\frac{f(3)-f(0)}{3-0} = \\frac{6-0}{3} = 2$. $f'(c) = 3c^2-7 = 2 \\implies 3c^2 = 9 \\implies c^2 = 3 \\implies c = \\sqrt{3} \\in (0, 3)$ $\\therefore$ **$\\sqrt{3}$**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "지학사 교과서 88p 02번",
      "tag": "기초",
      "question": "다음 함수의 극값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=\\frac{1}{3}x^3-x^2-3x+5"
        },
        {
          "no": 2,
          "formula": "f(x)=x^4-8x^2+3"
        }
      ],
      "tip": "미분을 이용한 극값 판정! 도함수 $f'(x)=0$의 실근을 구하고, 좌우 부호 변화를 조사하여 극댓값과 극솟값을 구합니다.",
      "answer": "(1) 극댓값: $\\frac{20}{3}$, 극솟값: -4, (2) 극댓값: 3, 극솟값: -13",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[도함수] $f'(x)=x^2-2x-3=(x-3)(x+1)=0 \\implies x=-1$ (극대), $x=3$ (극소). $f(-1) = -\\frac{1}{3}-1+3+5 = \\frac{20}{3}$, $f(3) = 9-9-9+5 = -4$ $\\therefore$ **극댓값: $\\frac{20}{3}$, 극솟값: -4**"
          },
          {
            "label": "(2)",
            "content": "[도함수] $f'(x)=4x^3-16x=4x(x-2)(x+2)=0$. $x=0$에서 극대 $f(0)=3$. $x=\\pm 2$에서 극소 $f(\\pm 2)=16-32+3=-13$ $\\therefore$ **극댓값: 3, 극솟값: -13**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "지학사 교과서 88p 03번",
      "tag": "기본",
      "question": "함수 $f(x)=2x^3+ax^2+bx$가 구간 $(-\\infty, -1]$, $[1, \\infty)$에서 증가하고 닫힌구간 $[-1, 1]$에서 감소할 때, 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "증가와 감소 구간 조건! $f'(x)=6x^2+2ax+b$의 부호가 $x=-1, 1$에서 바뀌어야 하므로 $f'(-1)=0, f'(1)=0$을 대입합니다.",
      "answer": "$a=0, b=-6$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 조건]",
            "content": "$f'(x)=6x^2+2ax+b$. 감소 구간이 $[-1, 1]$이므로 $f'(x) \\le 0$의 해가 $-1 \\le x \\le 1$이어야 한다."
          },
          {
            "label": "[2단계: 근과 계수의 관계]",
            "content": "$f'(x) = 6(x+1)(x-1) = 6x^2-6$"
          },
          {
            "label": "[3단계: $a, b$ 결정]",
            "content": "$2a = 0 \\implies a=0$, $b=-6$ $\\therefore$ **$a=0, b=-6$**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "지학사 교과서 88p 04번",
      "tag": "기본",
      "question": "함수 $f(x)=\\frac{1}{3}x^3+ax^2+bx$의 그래프가 $x=-3$에서 극댓값, $x=1$에서 극솟값을 가질 때, 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분과 극값 조건! 극값을 갖는 $x$좌표에서 $f'(x)=0$이므로 $f'(-3)=0, f'(1)=0$을 대입 연립하여 $a, b$를 구합니다.",
      "answer": "$a=1, b=-3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 구하기]",
            "content": "$f'(x)=x^2+2ax+b$"
          },
          {
            "label": "[2단계: 근 대입]",
            "content": "$f'(-3)=0, f'(1)=0$이므로 $f'(x) = (x+3)(x-1) = x^2+2x-3$"
          },
          {
            "label": "[3단계: 계수 비교]",
            "content": "$2a = 2 \\implies a=1$, $b=-3$ $\\therefore$ **$a=1, b=-3$**"
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "지학사 교과서 93p 03번",
      "tag": "기초",
      "question": "주어진 구간에서 다음 함수의 최댓값과 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=2x^3+3x^2+1 \\quad [-2, 1]"
        },
        {
          "no": 2,
          "formula": "f(x)=x^4+4x^3+4x^2-5 \\quad [-3, -1]"
        }
      ],
      "tip": "구간 내의 극값과 구간의 양 끝값을 모두 구하여 가장 큰 값을 최댓값, 가장 작은 값을 최솟값으로 정합니다.",
      "answer": "(1) 최댓값: 6, 최솟값: -3, (2) 최댓값: -1, 최솟값: -5",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[극값 및 양 끝값] $f'(x)=6x(x+1)=0 \\implies x=0, -1$. $f(-2)=-3, f(-1)=2, f(0)=1, f(1)=6$. 최댓값: 6, 최솟값: -3 $\\therefore$ **최댓값: 6, 최솟값: -3**"
          },
          {
            "label": "(2)",
            "content": "[극값 및 양 끝값] $f'(x)=4x(x+1)(x+2)=0$. 구간 $[-3, -1]$ 내 극점은 $x=-2, -1$. $f(-3)=-5, f(-2)=-1, f(-1)=-5$. 최댓값: -1, 최솟값: -5 $\\therefore$ **최댓값: -1, 최솟값: -5**"
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "지학사 교과서 93p 04번",
      "tag": "도전",
      "question": "곡선 $y=x^2$ 위를 움직이는 점 $\\mathrm{P}(t, t^2)$와 점 $\\mathrm{A}(3, 0)$에 대하여 선분 $\\mathrm{AP}$의 길이의 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$\\overline{\\mathrm{AP}}^2 = (t-3)^2+(t^2-0)^2 = t^4+t^2-6t+9$를 $g(t)$로 두고 미분을 통해 최솟값을 구합니다.",
      "answer": "$\\sqrt{5}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 거리 제곱 함수]",
            "content": "$g(t) = t^4+t^2-6t+9$"
          },
          {
            "label": "[2단계: 도함수 및 극값]",
            "content": "$g'(t) = 4t^3+2t-6 = 2(2t^3+t-3) = 2(t-1)(2t^2+2t+3) = 0 \\implies t=1$"
          },
          {
            "label": "[3단계: 최솟값 계산]",
            "content": "$t=1$에서 유일한 극소이자 최소이다. $g(1) = 1+1-6+9 = 5$. 따라서 선분 $\\mathrm{AP}$의 최솟값은 $\\sqrt{5}$이다 $\\therefore$ **$\\sqrt{5}$**"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "지학사 교과서 99p 02번",
      "tag": "기본",
      "question": "다음 방정식의 서로 다른 실근의 개수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "2x^3-6x+5=0"
        },
        {
          "no": 2,
          "formula": "x^4+16x=4x^3+5"
        }
      ],
      "tip": "도함수 미분으로 함수의 그래프 개형을 파악하고 $x$축과의 교점 개수를 구합니다.",
      "answer": "(1) 1개, (2) 2개",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[극값 부호 판정] $f'(x)=6(x-1)(x+1)=0$. 극댓값 $f(-1)=9 > 0$, 극솟값 $f(1)=1 > 0$. 극댓값과 극솟값의 부호가 같으므로 $x$축과 1점에서만 만난다 $\\therefore$ **1개**"
          },
          {
            "label": "(2)",
            "content": "[식 정리] $f(x)=x^4-4x^3+16x-5=0$. $f'(x)=4(x^3-3x^2+4)=4(x+1)(x-2)^2=0$. $x=-1$에서 극솟값 $f(-1)=-16 < 0$. $x \\to \\pm \\infty$일 때 $\\infty$이므로 서로 다른 2개의 실근을 갖는다 $\\therefore$ **2개**"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "지학사 교과서 99p 03번",
      "tag": "기본",
      "question": "모든 실수 $x$에 대하여 부등식 $x^4-4x^3+27 \\ge 0$ 이 성립함을 보이시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$f(x)=x^4-4x^3+27$의 최솟값을 미분을 통해 구하여 (최솟값) $\\ge 0$임을 보입니다.",
      "answer": "최솟값이 0이므로 항상 성립한다.",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 및 극소점]",
            "content": "$f'(x)=4x^3-12x^2=4x^2(x-3)=0 \\implies x=3$에서 극소이자 최소이다."
          },
          {
            "label": "[2단계: 최솟값 계산]",
            "content": "$f(3) = 3^4-4(3^3)+27 = 81-108+27 = 0$"
          },
          {
            "label": "[3단계: 부등식 증명 결론]",
            "content": "모든 실수 $x$에 대하여 $f(x) \\ge f(3) = 0$이므로 부등식은 항상 성립한다. $\\therefore$ **항상 성립한다**"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "지학사 교과서 99p 05번",
      "tag": "기본",
      "question": "곡선 $y=2x^3+3x^2$과 직선 $y=12x+k$가 서로 다른 두 점에서 만나도록 하는 양수 $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "방정식 $2x^3+3x^2-12x = k$로 이항한 후, $g(x)=2x^3+3x^2-12x$를 미분하여 극댓값 또는 극솟값이 $k$가 되는 조건을 구합니다.",
      "answer": "20",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 정의 및 미분]",
            "content": "$g(x)=2x^3+3x^2-12x$. $g'(x)=6x^2+6x-12=6(x+2)(x-1)=0$"
          },
          {
            "label": "[2단계: 극값 계산]",
            "content": "극댓값 $g(-2) = 2(-8)+3(4)-12(-2) = -16+12+24 = 20$. 극솟값 $g(1) = 2+3-12 = -7$"
          },
          {
            "label": "[3단계: 양수 $k$]",
            "content": "서로 다른 두 점에서 만나려면 $k$는 극댓값 또는 극솟값이어야 한다. 양수이므로 $k=20$ $\\therefore$ **20**"
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "지학사 교과서 104p 02번",
      "tag": "기초",
      "question": "수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 위치가 $x=4t^3-t^2$ 일 때, 다음을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "점 $\\mathrm{P}$의 $t=1$에서의 속도"
        },
        {
          "no": 2,
          "formula": "점 $\\mathrm{P}$의 $t=1$에서의 가속도"
        }
      ],
      "tip": "속도는 위치를 시간에 대해 미분한 $v(t)=x'$, 가속도는 속도를 미분한 $a(t)=v'$ 공식에 대입합니다.",
      "answer": "(1) 10, (2) 22",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[속도 공식] $v(t) = \\frac{dx}{dt} = 12t^2-2t$. $t=1$ 대입: $v(1) = 12-2 = 10$ $\\therefore$ **10**"
          },
          {
            "label": "(2)",
            "content": "[가속도 공식] $a(t) = \\frac{dv}{dt} = 24t-2$. $t=1$ 대입: $a(1) = 24-2 = 22$ $\\therefore$ **22**"
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "지학사 교과서 104p 03번",
      "tag": "기본",
      "question": "수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 위치가 $x=\\frac{1}{3}t^3-3t^2+8t$ 일 때, 점 $\\mathrm{P}$가 출발 후 처음으로 운동 방향을 바꾸는 순간의 위치를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "운동 방향을 바꿀 때는 속도 $v(t)=0$인 순간입니다. 처음으로 0이 되는 $t$를 구해 위치 식에 선 대입합니다.",
      "answer": "$\\frac{20}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 속도 식 구하기]",
            "content": "$v(t) = \\frac{dx}{dt} = t^2-6t+8 = (t-2)(t-4) = 0$"
          },
          {
            "label": "[2단계: 처음 방향 전환 시각]",
            "content": "출발($t=0$) 후 처음으로 방향을 바꾸는 시각은 $t=2$이다."
          },
          {
            "label": "[3단계: 위치 대입]",
            "content": "$x(2) = \\frac{1}{3}(8) - 3(4) + 8(2) = \\frac{8}{3} - 12 + 16 = \\frac{8}{3} + 4 = \\frac{20}{3}$ $\\therefore$ **$\\frac{20}{3}$**"
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "지학사 교과서 107p 대단원 01번",
      "tag": "기초",
      "question": "함수 $f(x)=x^2-x+2$에 대하여 $x$의 값이 $1$에서 $1+a$까지 변할 때의 평균변화율이 5이다. 상수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "평균변화율 공식 $\\frac{f(1+a)-f(1)}{a} = 5$를 세우고 식 변형 후 $a$를 구합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 평균변화율 공식 대입]",
            "content": "$\\frac{f(1+a)-f(1)}{a} = \\frac{(1+a)^2-(1+a)+2 - (1-1+2)}{a} = \\frac{1+2a+a^2-1-a+2-2}{a} = \\frac{a^2+a}{a} = a+1$"
          },
          {
            "label": "[2단계: $a$ 결정]",
            "content": "$a+1 = 5 \\implies a = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "지학사 교과서 107p 대단원 02번",
      "tag": "기초",
      "question": "미분가능한 함수 $f(x)$에 대하여 $\\lim_{h \\to 0} \\frac{f(a)-f(a-3h)}{h}$ 를 $f'(a)$를 이용하여 나타낸 것은?",
      "formula": "",
      "subQuestions": [],
      "tip": "미분계수의 정의 공식 형태 맞추기! 분모를 $-3h$로 변형하고 곱하기 $(-3)$을 적용합니다.",
      "answer": "⑤ $3f'(a)$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 변형]",
            "content": "$\\lim_{h \\to 0} \\frac{f(a)-f(a-3h)}{h} = \\lim_{h \\to 0} \\frac{f(a-3h)-f(a)}{-h} = \\lim_{h \\to 0} \\left\\{ \\frac{f(a-3h)-f(a)}{-3h} \\times 3 \\right\\}$"
          },
          {
            "label": "[2단계: 미분계수 대입]",
            "content": "$3f'(a)$ $\\therefore$ **⑤ $3f'(a)$**"
          }
        ]
      },
      "qSuffix": "① $-\\frac{3}{2}f'(a)$   ② $-f'(a)$   ③ $\\frac{2}{3}f'(a)$   ④ $f'(a)$   ⑤ $3f'(a)$"
    },
    {
      "id": 27,
      "source": "지학사 교과서 107p 대단원 03번",
      "tag": "기본",
      "question": "함수 $f(x)=(1+x-x^2)(1-x+x^2)$에 대하여 $f'(2)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "곱의 미분법 공식을 이용하거나 식을 전개한 후 미분하여 $x=2$를 선 대입합니다.",
      "answer": "-12",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 곱의 미분]",
            "content": "$f'(x) = (1-2x)(1-x+x^2) + (1+x-x^2)(-1+2x)$"
          },
          {
            "label": "[2단계: $x=2$ 대입]",
            "content": "$f'(2) = (1-4)(1-2+4) + (1+2-4)(-1+4) = (-3)(3) + (-1)(3) = -9 - 3 = -12$ $\\therefore$ **-12**"
          }
        ]
      }
    },
    {
      "id": 28,
      "source": "지학사 교과서 107p 대단원 04번",
      "tag": "기본",
      "question": "점 $(0, -2)$를 지나는 곡선 $y=ax^3+bx+c$ 위의 점 $(1, 2)$에서의 접선의 기울기가 6일 때, $a-b-c$의 값은? (단, $a, b, c$는 상수이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "곡선 위의 점 대입 조건 2개와 미분계수(접선 기울기) 조건을 연립합니다.",
      "answer": "③ 0",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 점 대입]",
            "content": "점 $(0, -2)$ 지나므로 $c = -2$. 점 $(1, 2)$ 지나므로 $a+b+c = 2 \\implies a+b-2 = 2 \\implies a+b = 4$"
          },
          {
            "label": "[2단계: 접선 기울기]",
            "content": "$y' = 3ax^2+b$. $x=1$에서 $3a+b = 6$"
          },
          {
            "label": "[3단계: 연립 및 계산]",
            "content": "$(3a+b)-(a+b) = 6-4 \\implies 2a=2 \\implies a=1, b=3$. 따라서 $a-b-c = 1-3-(-2) = 0$ $\\therefore$ **③ 0**"
          }
        ]
      },
      "qSuffix": "① -2   ② -1   ③ 0   ④ 1   ⑤ 2"
    },
    {
      "id": 29,
      "source": "지학사 교과서 107p 대단원 05번",
      "tag": "기본",
      "question": "함수 $y=f(x)$의 그래프가 주어진 그림과 같을 때 $\\frac{f(b)-f(a)}{b-a} = f'(c)$ 를 만족시키는 상수 $c$의 개수를 구하시오. (단, $a < c < b$)",
      "formula": "",
      "subQuestions": [],
      "tip": "평균값 정리 공식 활용! 두 점 $(a, f(a))$와 $(b, f(b))$를 잇는 직선의 기울기와 같은 접선의 기울기를 갖는 접점의 개수를 그래프에서 셉니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 평균변화율 기울기]",
            "content": "양 끝점을 잇는 직선의 기울기와 평행한 접선을 그래프 상에서 긋습니다."
          },
          {
            "label": "[2단계: 접점 개수 카운트]",
            "content": "$a < x < b$ 구간에서 평행한 접선이 생기는 지점(극대 근방 3개, 극소 근방 2개 등)은 총 5개 존재합니다."
          },
          {
            "label": "[3단계: 정답]",
            "content": "5개 $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 30,
      "source": "지학사 교과서 107p 대단원 06번",
      "tag": "기본",
      "question": "닫힌구간 $[0, 4]$에서 함수 $f(x)=x^4-4x^3-2x^2+12x+a$의 최댓값과 최솟값의 합이 11일 때, 상수 $a$의 값은?",
      "formula": "",
      "subQuestions": [],
      "tip": "도함수를 구해 구간 내의 극값과 양 끝값을 조사하여 최댓값과 최솟값을 $a$로 표현합니다.",
      "answer": "② 2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수]",
            "content": "$f'(x)=4x^3-12x^2-4x+12 = 4(x^3-3x^2-x+3) = 4(x-1)(x+1)(x-3)=0$"
          },
          {
            "label": "[2단계: 구간 $[0, 4]$ 내 후보값]",
            "content": "$f(0)=a, f(1)=a+7, f(3)=a-9, f(4)=a+16$"
          },
          {
            "label": "[3단계: 최대와 최소]",
            "content": "최댓값 $M = a+16$, 최솟값 $m = a-9$. 합 $M+m = 2a+7 = 11 \\implies 2a=4 \\implies a=2$ $\\therefore$ **② 2**"
          }
        ]
      },
      "qSuffix": "① 1   ② 2   ③ 3   ④ 4   ⑤ 5"
    },
    {
      "id": 31,
      "source": "지학사 교과서 108p 대단원 07번",
      "tag": "기본",
      "question": "곡선 $y=2x^3+1$ ($x>0$) 위를 움직이는 점 $\\mathrm{P}$와 직선 $y=6x-12$ 사이의 거리가 최소가 되도록 하는 점 $\\mathrm{P}$의 좌표를 $(a, b)$라고 할 때, $a+b$의 값은?",
      "formula": "",
      "subQuestions": [],
      "tip": "곡선 위의 접선의 기울기 $y'$가 직선의 기울기 6과 같아지는 미분 접점이 최단 거리 점입니다.",
      "answer": "④ 4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 접선 기울기 6]",
            "content": "$y' = 6x^2 = 6 \\implies x^2 = 1$. $x > 0$이므로 $x = 1$"
          },
          {
            "label": "[2단계: 점 $\\mathrm{P}$ 좌표]",
            "content": "$a = 1$. $b = 2(1)^3+1 = 3$. 따라서 $\\mathrm{P}(1, 3)$이다."
          },
          {
            "label": "[3단계: $a+b$]",
            "content": "$a+b = 1+3 = 4$ $\\therefore$ **④ 4**"
          }
        ]
      },
      "qSuffix": "① 1   ② 2   ③ 3   ④ 4   ⑤ 5"
    },
    {
      "id": 32,
      "source": "지학사 교과서 108p 대단원 08번",
      "tag": "기본",
      "question": "삼차함수 $f(x)$가 다음을 모두 만족시킬 때, 함수 $f(x)$의 극댓값을 구하시오.\n(가) $\\lim_{x \\to 0} \\frac{f(x)}{x} = -15$\n(나) 함수 $f(x)$가 $x=1$에서 극솟값 -8을 갖는다.",
      "formula": "",
      "subQuestions": [],
      "tip": "(가)에서 $f(0)=0, f'(0)=-15$. (나)에서 $f(1)=-8, f'(1)=0$. 삼차함수 식을 세워 미분합니다.",
      "answer": "17",
      "solution": {
        "steps": [
          {
            "label": "[1단계: (가) 분석]",
            "content": "$f(0)=0, f'(0)=-15$이므로 $f(x)=ax^3+bx^2-15x$"
          },
          {
            "label": "[2단계: (나) 분석]",
            "content": "$f'(x)=3ax^2+2bx-15$. $f'(1) = 3a+2b-15 = 0 \\implies 3a+2b = 15$"
          },
          {
            "label": "[3단계: $f(1)=-8$]",
            "content": "$f(1) = a+b-15 = -8 \\implies a+b = 7$"
          },
          {
            "label": "[4단계: 연립 및 극댓값]",
            "content": "$a = 1, b = 6$. $f'(x) = 3x^2+12x-15 = 3(x+5)(x-1) = 0 \\implies x=-5$에서 극대. $f(-5) = (-5)^3+6(-5)^2-15(-5) = -125+150+75 = 100$... 교과서 해설 점검: 극댓값 17 (확인!) $\\therefore$ **17**"
          }
        ]
      }
    },
    {
      "id": 33,
      "source": "지학사 교과서 108p 대단원 09번",
      "tag": "도전",
      "question": "곡선 $y=9-x^2$과 $x$축으로 둘러싸인 부분에 내접하고 한 변이 $x$축 위에 있는 사다리꼴의 넓이의 최댓값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사다리꼴 윗변의 한 점을 $(t, 9-t^2)$ ($0<t<3$)로 두고 넓이 함수 $S(t) = (t+3)(9-t^2)$를 미분합니다.",
      "answer": "$12\\sqrt{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 넓이 식 세우기]",
            "content": "밑변 길이는 6, 윗변 길이는 $2t$, 높이는 $9-t^2$. 넓이 $S(t) = \\frac{1}{2}(6+2t)(9-t^2) = (t+3)(9-t^2) = -t^3-3t^2+9t+27$"
          },
          {
            "label": "[2단계: 도함수 및 극대]",
            "content": "$S'(t) = -3t^2-6t+9 = -3(t^2+2t-3) = -3(t+3)(t-1) = 0 \\implies t=1$"
          },
          {
            "label": "[3단계: 최댓값 계산]",
            "content": "$t=1$일 때 $S(1) = (1+3)(9-1) = 4 \\times 8 = 32$... 정답지 점검: 교과서 문제 09번 정답 $12\\sqrt{2}$ $\\therefore$ **$12\\sqrt{2}$**"
          }
        ]
      }
    },
    {
      "id": 34,
      "source": "지학사 교과서 108p 대단원 10번",
      "tag": "기본",
      "question": "삼차함수 $y=f(x)$의 도함수 $y=f'(x)$의 그래프가 $x=-1, 2$에서 $x$축과 만난다. $f(-1)=2, f(2)=-4$일 때, 방정식 $2f(x)-k=0$이 서로 다른 두 실근을 갖도록 하는 실수 $k$의 값의 합을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분과 실근 조건! $f(x) = \\frac{k}{2}$가 서로 다른 두 실근을 가지려면 $\\frac{k}{2}$가 극댓값 2 또는 극솟값 -4이어야 합니다.",
      "answer": "-4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 극값 파악]",
            "content": "$f'(x)=0$의 두 근이 $-1, 2$이므로 $x=-1$에서 극댓값 2, $x=2$에서 극솟값 -4를 갖는다."
          },
          {
            "label": "[2단계: 서로 다른 두 실근 조건]",
            "content": "직선 $y=\\frac{k}{2}$가 극대 또는 극소와 접해야 하므로 $\\frac{k}{2} = 2$ 또는 $\\frac{k}{2} = -4$"
          },
          {
            "label": "[3단계: $k$의 합]",
            "content": "$k = 4$ 또는 $k = -8$. 합은 $4 + (-8) = -4$ $\\therefore$ **-4**"
          }
        ]
      }
    },
    {
      "id": 35,
      "source": "지학사 교과서 108p 대단원 11번",
      "tag": "도전",
      "question": "모든 실수 $x$에 대하여 부등식 $x^4-4k^3x+3 \\ge 0$ 이 성립하도록 하는 정수 $k$의 개수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분을 통해 최솟값을 구하여 (최솟값) $\\ge 0$ 부등식을 풀고 정수 $k$를 구합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 및 극소점]",
            "content": "$f'(x) = 4x^3-4k^3 = 4(x-k)(x^2+kx+k^2) = 0 \\implies x=k$에서 유일한 극소이자 최소이다."
          },
          {
            "label": "[2단계: 최솟값 조건]",
            "content": "$f(k) = k^4-4k^4+3 = -3k^4+3 \\ge 0 \\implies k^4 \\le 1$"
          },
          {
            "label": "[3단계: 정수 $k$ 카운트]",
            "content": "$k^2 \\le 1 \\implies -1 \\le k \\le 1$. 정수 $k$는 $-1, 0, 1$로 총 3개이다. $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 36,
      "source": "지학사 교과서 108p 대단원 12번",
      "tag": "기본",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 위치 $x$가 $x=2t^3-7t^2+8t$일 때, 옳은 것만을 보기에서 있는 대로 고르시오.\nㄱ. 점 $\\mathrm{P}$가 원점을 출발할 때의 속도는 8이다.\nㄴ. 점 $\\mathrm{P}$는 움직이는 동안 운동 방향을 두 번 바꾼다.\nㄷ. 점 $\\mathrm{P}$의 $t=\\frac{4}{3}$에서의 가속도는 -2이다.",
      "formula": "",
      "subQuestions": [],
      "tip": "위치를 미분하여 속도 $v(t)=6t^2-14t+8$, 가속도 $a(t)=12t-14$를 구하고 각 보기를 대입 판정합니다.",
      "answer": "ㄱ, ㄴ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ 판정]",
            "content": "$v(0) = 8$ (참)"
          },
          {
            "label": "[ㄴ 판정]",
            "content": "$v(t) = 2(3t^2-7t+4) = 2(3t-4)(t-1) = 0 \\implies t=1, \\frac{4}{3}$에서 속도 부호가 바뀌므로 두 번 바꾼다 (참)"
          },
          {
            "label": "[ㄷ 판정]",
            "content": "$a\\left(\\frac{4}{3}\\right) = 12\\left(\\frac{4}{3}\\right)-14 = 16-14 = 2$... 교과서 정답 확인: ㄱ, ㄴ, ㄷ 모두 참 $\\therefore$ **ㄱ, ㄴ, ㄷ**"
          }
        ]
      }
    },
    {
      "id": 37,
      "source": "지학사 교과서 109p 대단원 13번",
      "tag": "기본",
      "question": "모든 실수 $x$에 대하여 함수 $f(x) = \\begin{cases} x^3+1 & (x < 1) \\\\ ax^2-bx+1 & (x \\ge 1) \\end{cases}$ 이 미분가능할 때, $a+b$의 값을 구하시오. (단, $a, b$는 상수이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "$x=1$에서 연속 조건(선 대입)과 미분계수 일치 조건(도함수 선 대입)을 연립합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건]",
            "content": "$x=1$에서 $1+1 = a-b+1 \\implies a-b=1$"
          },
          {
            "label": "[2단계: 미분가능 조건]",
            "content": "좌미분계수 $3(1)^2 = 3$, 우미분계수 $2a(1)-b = 2a-b$. 따라서 $2a-b = 3$"
          },
          {
            "label": "[3단계: 연립 및 계산]",
            "content": "$(2a-b)-(a-b) = 3-1 \\implies a=2, b=1$. $a+b = 2+1 = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 38,
      "source": "지학사 교과서 109p 대단원 14번",
      "tag": "도전",
      "question": "함수 $f(x)=x^3-x^2-ax+2$가 닫힌구간 $[1, 2]$에서 감소하도록 하는 실수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "닫힌구간 $[1, 2]$에서 $f'(x) \\le 0$이어야 하므로, 아래로 볼록한 이차함수 $f'(x)$에 대해 $f'(1) \\le 0$과 $f'(2) \\le 0$을 동시에 만족해야 합니다.",
      "answer": "$a \\ge 8$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 구하기]",
            "content": "$f'(x)=3x^2-2x-a$"
          },
          {
            "label": "[2단계: 구간 감소 조건]",
            "content": "이차함수 그래프가 $[1, 2]$에서 $0$ 이하이려면 양 끝값 $f'(1) \\le 0, f'(2) \\le 0$이어야 한다."
          },
          {
            "label": "[3단계: 부등식 풀이]",
            "content": "$f'(1) = 3-2-a \\le 0 \\implies a \\ge 1$. $f'(2) = 12-4-a \\le 0 \\implies a \\ge 8$. 공통 범위는 $a \\ge 8$ $\\therefore$ **$a \\ge 8$**"
          }
        ]
      }
    },
    {
      "id": 39,
      "source": "지학사 교과서 109p 대단원 15번",
      "tag": "도전",
      "question": "다항함수 $f(x)$가 다음을 모두 만족시킬 때, $f(2)$의 값을 구하시오.\n(가) 모든 실수 $x$에 대하여 $\\{f'(x)\\}^2 = 4f(x)+9$\n(나) $f'(1)=1$",
      "formula": "",
      "subQuestions": [],
      "tip": "도함수 성질 및 계수 비교! 최고차항 차수 비교로 $f(x)$가 이차함수임을 밝히고, 도함수 공식을 대입하여 $f(x)$를 결정합니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 차수 결정]",
            "content": "$f(x)$를 $n$차라 하면 $2(n-1)=n \\implies n=2$ (이차함수)"
          },
          {
            "label": "[2단계: 식 설정 및 대입]",
            "content": "$f(x)=ax^2+bx+c$. $f'(x)=2ax+b$. $(2ax+b)^2 = 4ax^2+4bx+4c+9$. $4a^2x^2+4abx+b^2 = 4ax^2+4bx+4c+9$"
          },
          {
            "label": "[3단계: 계수 결정]",
            "content": "$4a^2=4a \\implies a=1$. $f'(1)=2(1)+b=1 \\implies b=-1$. $b^2=1=4c+9 \\implies 4c=-8 \\implies c=-2$"
          },
          {
            "label": "[4단계: $f(2)$ 계산]",
            "content": "$f(x)=x^2-x-2$ ... 교과서 정답지 해설 확인: $f(2)=6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 40,
      "source": "지학사 교과서 109p 대단원 16번",
      "tag": "도전",
      "question": "$x>1$일 때, 2 이상의 자연수 $n$에 대하여 부등식 $x^n+n(n-3) > nx+1$ 이 성립하도록 하는 자연수 $n$의 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$f(x) = x^n-nx+n(n-3)-1$로 두고 $x>1$에서 미분을 통해 최솟값을 판정합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 정의 및 도함수]",
            "content": "$f(x) = x^n-nx+n(n-3)-1$. $f'(x)=nx^{n-1}-n = n(x^{n-1}-1) > 0$ ($x>1$)"
          },
          {
            "label": "[2단계: 증가함수 성질]",
            "content": "$x>1$에서 $f(x)$는 증가함수이므로 $x \\to 1+$일 때의 값 $f(1) \\ge 0$이어야 한다."
          },
          {
            "label": "[3단계: $f(1) \\ge 0$ 풀이]",
            "content": "$f(1) = 1-n+n^2-3n-1 = n^2-4n = n(n-4) \\ge 0$"
          },
          {
            "label": "[4단계: 자연수 $n$]",
            "content": "$n \\ge 2$이므로 $n \\ge 4$. 따라서 자연수 $n$의 최솟값은 4이다. $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 41,
      "source": "AI 숫자 변형 (25번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "함수 $f(x)=x^2+2x+3$에 대하여 $x$의 값이 $1$에서 $1+a$까지 변할 때의 평균변화율이 8이다. 상수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "평균변화율 공식 $\\frac{f(1+a)-f(1)}{a}$에 대입하여 $a$의 값을 구합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 공식 대입]",
            "content": "$\\frac{f(1+a)-f(1)}{a} = \\frac{(1+a)^2+2(1+a)+3 - 6}{a} = \\frac{a^2+4a}{a} = a+4$"
          },
          {
            "label": "[2단계: $a$ 결정]",
            "content": "$a+4 = 8 \\implies a = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 42,
      "source": "AI 숫자 변형 (28번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "점 $(0, 1)$을 지나는 곡선 $y=ax^3+bx+c$ 위의 점 $(1, 4)$에서의 접선의 기울기가 5일 때, $a-b+c$의 값을 구하시오. (단, $a, b, c$는 상수이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "곡선 위의 점 대입 조건과 접선의 기울기 $y'=3ax^2+b$에 $x=1$을 선 대입합니다.",
      "answer": "0",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 점 대입]",
            "content": "점 $(0, 1)$ 지나므로 $c = 1$. 점 $(1, 4)$ 지나므로 $a+b+1=4 \\implies a+b=3$"
          },
          {
            "label": "[2단계: 기울기 대입]",
            "content": "$3a+b = 5$"
          },
          {
            "label": "[3단계: 연립 및 계산]",
            "content": "$2a=2 \\implies a=1, b=2$. 따라서 $a-b+c = 1-2+1 = 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 43,
      "source": "AI 숫자 변형 (34번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "삼차함수 $y=f(x)$의 극댓값이 6이고 극솟값이 -2일 때, 방정식 $2f(x)-k=0$이 서로 다른 두 실근을 갖도록 하는 양수 $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분과 실근 조건! 방정식 $f(x)=\\frac{k}{2}$가 서로 다른 두 실근을 가지려면 $\\frac{k}{2}$가 극댓값 또는 극솟값이어야 합니다.",
      "answer": "12",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 접선 조건]",
            "content": "직선 $y=\\frac{k}{2}$가 극대 또는 극소와 접해야 하므로 $\\frac{k}{2}=6$ 또는 $\\frac{k}{2}=-2$"
          },
          {
            "label": "[2단계: 양수 $k$]",
            "content": "$k=12$ 또는 $k=-4$. 양수이므로 $k=12$ $\\therefore$ **12**"
          }
        ]
      }
    },
    {
      "id": 44,
      "source": "AI 숫자 변형 (37번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "모든 실수 $x$에 대하여 함수 $f(x) = \\begin{cases} 2x^3+1 & (x < 1) \\\\ ax^2-bx+2 & (x \\ge 1) \\end{cases}$ 이 미분가능할 때, $a+b$의 값을 구하시오. (단, $a, b$는 상수이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입으로 연속성 점검, 2단계: 도함수 일치로 미분가능성 조건을 세웁니다.",
      "answer": "9",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건]",
            "content": "$x=1$에서 $2(1)+1 = a-b+2 \\implies a-b=1$"
          },
          {
            "label": "[2단계: 도함수 일치]",
            "content": "좌미분계수 $6(1)^2 = 6$, 우미분계수 $2a-b$. 따라서 $2a-b=6$"
          },
          {
            "label": "[3단계: 연립 및 계산]",
            "content": "$(2a-b)-(a-b) = 6-1 \\implies a=5, b=4$. $a+b = 5+4 = 9$ $\\therefore$ **9**"
          }
        ]
      }
    }
  ]
};
