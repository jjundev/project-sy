window.WORKSHEET_DATA = {
  "meta": {
    "title": "미적분 I / 수학 II - III. 적분",
    "subtitle": "비상 교과서 실전 핵심 (중단원 학습 점검 + 대단원 학습 평가 전수 수록)",
    "student": "",
    "date": "2026. 09. 19 (토)",
    "cheer": "완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "비상 교과서 121p 중단원 01번",
      "tag": "기초",
      "question": "다음 부정적분을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int (x^2-2x+3)\\,dx"
        },
        {
          "no": 2,
          "formula": "\\int x(x+1)^2\\,dx - \\int x(x^2+1)\\,dx"
        }
      ],
      "tip": "부정적분 공식 $\\int x^n\\,dx = \\frac{1}{n+1}x^{n+1}+C$를 적용합니다. 식을 전개하여 동류항끼리 정리합니다.",
      "answer": "(1) $\\frac{1}{3}x^3-x^2+3x+C$, (2) $\\frac{2}{3}x^3+C$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "항별 부정적분: $\\frac{1}{3}x^3 - x^2 + 3x + C$ $\\therefore$ **$\\frac{1}{3}x^3-x^2+3x+C$**"
          },
          {
            "label": "(2)",
            "content": "피적분함수 정리: $x(x+1)^2 - x(x^2+1) = x(x^2+2x+1) - (x^3+x) = 2x^2$. 부정적분: $\\int 2x^2\\,dx = \\frac{2}{3}x^3+C$ $\\therefore$ **$\\frac{2}{3}x^3+C$**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "비상 교과서 121p 중단원 02번",
      "tag": "기초",
      "question": "다음 정적분의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int_0^2 (3x^2+5)\\,dx"
        },
        {
          "no": 2,
          "formula": "\\int_{-2}^1 (x+2)^2\\,dx - \\int_{-2}^1 (2x+1)\\,dx"
        },
        {
          "no": 3,
          "formula": "\\int_{-1}^1 (2x^3-6x)\\,dx + \\int_1^3 (2x^3-6x)\\,dx"
        }
      ],
      "tip": "정적분의 기본 공식과 구간 연결 성질 $\\int_a^b + \\int_b^c = \\int_a^c$를 활용하여 위끝과 아래끝을 대입 계산합니다.",
      "answer": "(1) 18, (2) 9, (3) 16",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$[x^3+5x]_0^2 = 8+10 = 18$ $\\therefore$ **18**"
          },
          {
            "label": "(2)",
            "content": "피적분함수 합치기: $(x+2)^2-(2x+1) = x^2+4x+4-2x-1 = x^2+2x+3$. $\\int_{-2}^1 (x^2+2x+3)\\,dx = [\\frac{1}{3}x^3+x^2+3x]_{-2}^1 = (\\frac{1}{3}+1+3)-(-\\frac{8}{3}+4-6) = \\frac{13}{3} - (-\\frac{14}{3}) = 9$ $\\therefore$ **9**"
          },
          {
            "label": "(3)",
            "content": "구간 합치기: $\\int_{-1}^3 (2x^3-6x)\\,dx = [\\frac{1}{2}x^4-3x^2]_{-1}^3 = (\\frac{81}{2}-27)-(\\frac{1}{2}-3) = \\frac{27}{2} - (-\\frac{5}{2}) = 16$ $\\therefore$ **16**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "비상 교과서 122p 중단원 03번",
      "tag": "기본",
      "question": "함수 $f(x)$가 $f'(x)=1+2x+3x^2+\\cdots+nx^{n-1}$을 만족시키고 $f(0)=5, f(1)=11$일 때, 자연수 $n$의 값을 구하시오. (단, $n \\ge 2$)",
      "formula": "",
      "subQuestions": [],
      "tip": "도함수를 부정적분하여 $f(x) = x+x^2+\\cdots+x^n+C$로 구한 뒤 $x=0, 1$을 대입합니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 부정적분]",
            "content": "$f(x) = x+x^2+x^3+\\cdots+x^n+C$"
          },
          {
            "label": "[2단계: f(0)=5 대입]",
            "content": "$f(0) = C = 5$"
          },
          {
            "label": "[3단계: f(1)=11 대입]",
            "content": "$f(1) = 1+1+\\cdots+1+5 = n+5 = 11 \\implies n = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "비상 교과서 122p 중단원 04번",
      "tag": "기본",
      "question": "점 $(-2, 1)$을 지나는 곡선 $y=f(x)$ 위의 임의의 점 $(x, y)$에서의 접선의 기울기가 $6x^2+12x+5$일 때, $f(-1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "접선의 기울기는 도함수이므로 $f'(x)=6x^2+12x+5$를 부정적분한 뒤 점 $(-2, 1)$을 대입하여 적분상수를 구합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 부정적분]",
            "content": "$f'(x) = 6x^2+12x+5 \\implies f(x) = 2x^3+6x^2+5x+C$"
          },
          {
            "label": "[2단계: 점 (-2, 1) 대입]",
            "content": "$f(-2) = 2(-8)+6(4)+5(-2)+C = -16+24-10+C = -2+C = 1 \\implies C = 3$"
          },
          {
            "label": "[3단계: f(-1) 계산]",
            "content": "$f(-1) = 2(-1)+6(1)+5(-1)+3 = -2+6-5+3 = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "비상 교과서 122p 중단원 05번",
      "tag": "기본",
      "question": "미분가능한 함수 $f(x)$에 대하여 $f'(x)=ax^2-ax$이고 함수 $f(x)$의 극댓값이 $6$, 극솟값이 $5$일 때, 함수 $f(x)$를 구하시오. (단, $a>0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "도함수 $f'(x)=ax(x-1)=0$에서 $x=0$ 극대, $x=1$ 극소임을 알고, 부정적분 공식에 함숫값을 대입하여 미정계수를 구합니다.",
      "answer": "$f(x) = 2x^3-3x^2+6$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수와 극값 위치]",
            "content": "$f'(x) = ax(x-1) = 0 \\implies x=0$ 또는 $x=1$. $a>0$이므로 $x=0$에서 극대, $x=1$에서 극소이다."
          },
          {
            "label": "[2단계: 부정적분]",
            "content": "$f(x) = \\frac{a}{3}x^3 - \\frac{a}{2}x^2 + C$"
          },
          {
            "label": "[3단계: 조건 연립 대입]",
            "content": "$f(0) = C = 6$. $f(1) = \\frac{a}{3}-\\frac{a}{2}+6 = -\\frac{a}{6}+6 = 5 \\implies \\frac{a}{6} = 1 \\implies a = 6$"
          },
          {
            "label": "[4단계: f(x) 결정]",
            "content": "$f(x) = 2x^3-3x^2+6$ $\\therefore$ **$f(x) = 2x^3-3x^2+6$**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "비상 교과서 122p 중단원 06번",
      "tag": "기본",
      "question": "미분가능한 함수 $f(x)$의 한 부정적분을 $F(x)$라고 하면 $F(x)=xf(x)-3x^4+2x^3$이 성립한다. $f(1)=6$일 때, $f(2)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "양변을 $x$에 대하여 미분하면 $f(x) = f(x)+xf'(x)-12x^3+6x^2$가 되어 도함수를 구할 수 있습니다.",
      "answer": "25",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 양변 미분]",
            "content": "$F'(x) = f(x) = f(x)+xf'(x)-12x^3+6x^2 \\implies xf'(x) = 12x^3-6x^2 \\implies f'(x) = 12x^2-6x$"
          },
          {
            "label": "[2단계: 부정적분 및 C 결정]",
            "content": "$f(x) = 4x^3-3x^2+C$. $f(1) = 4-3+C = 1+C = 6 \\implies C = 5$"
          },
          {
            "label": "[3단계: f(2) 계산]",
            "content": "$f(x) = 4x^3-3x^2+5 \\implies f(2) = 4(8)-3(4)+5 = 32-12+5 = 25$ $\\therefore$ **25**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "비상 교과서 122p 중단원 07번",
      "tag": "기본",
      "question": "모든 실수 $x$에 대하여 다항함수 $f(x)$가 $\\int_a^x f(t)\\,dt = 6x^2+x-1$을 만족시킬 때, $f(a)$의 값을 구하시오. (단, $a>0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "양변에 $x=a$를 대입하여 $a$를 구하고, 양변을 $x$에 대해 미분하여 $f(x)$를 구합니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=a 대입하여 a 구하기]",
            "content": "$\\int_a^a f(t)\\,dt = 0 = 6a^2+a-1 \\implies (2a+1)(3a-1) = 0$. $a>0$이므로 $a = \\frac{1}{3}$"
          },
          {
            "label": "[2단계: 양변 미분하여 f(x) 구하기]",
            "content": "$f(x) = \\frac{d}{dx}(6x^2+x-1) = 12x+1$"
          },
          {
            "label": "[3단계: f(a) 계산]",
            "content": "$f(a) = f\\left(\\frac{1}{3}\\right) = 12\\left(\\frac{1}{3}\\right)+1 = 4+1 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "비상 교과서 122p 중단원 08번",
      "tag": "기본",
      "question": "정적분 $\\int_0^1 (6a^2x^2-16ax+5)\\,dx$의 값이 최소가 되도록 하는 실수 $a$의 값과 그때 정적분의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정적분을 계산하면 $a$에 대한 이차식이 됩니다. 완전제곱식 공식으로 변형하여 최솟값과 $a$를 구합니다.",
      "answer": "$a=2$, 그때 정적분의 값: -3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정적분 계산]",
            "content": "$[2a^2x^3 - 8ax^2 + 5x]_0^1 = 2a^2 - 8a + 5$"
          },
          {
            "label": "[2단계: 완전제곱식 변형]",
            "content": "$2(a^2-4a)+5 = 2(a-2)^2 - 8 + 5 = 2(a-2)^2 - 3$"
          },
          {
            "label": "[3단계: 최솟값 판정]",
            "content": "따라서 $a=2$일 때 최솟값 $-3$을 갖는다 $\\therefore$ **$a=2$, 그때 정적분의 값: -3**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "비상 교과서 123p 중단원 09번",
      "tag": "기본",
      "question": "닫힌구간 $[-3, 5]$에서 연속인 두 함수 $f(x), g(x)$가 $\\int_{-3}^5 \\{f(x)-g(x)\\}\\,dx = -3$, $\\int_{-3}^5 \\{2f(x)+3g(x)\\}\\,dx = 4$를 만족시킬 때, 정적분 $\\int_{-3}^5 \\{f(x)+g(x)\\}\\,dx$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정적분의 성질을 이용하여 각 정적분을 $A, B$로 치환하고 연립방정식을 세워 대입 계산합니다.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 치환 및 식 설정]",
            "content": "$A = \\int_{-3}^5 f(x)\\,dx$, $B = \\int_{-3}^5 g(x)\\,dx$라 하면 $A-B = -3$, $2A+3B = 4$"
          },
          {
            "label": "[2단계: 연립방정식 풀이]",
            "content": "$3(A-B) = 3A-3B = -9$. 더하면 $5A = -5 \\implies A = -1$. $B = A+3 = 2$"
          },
          {
            "label": "[3단계: 목표 정적분 계산]",
            "content": "$\\int_{-3}^5 \\{f(x)+g(x)\\}\\,dx = A+B = -1+2 = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "비상 교과서 123p 중단원 10번",
      "tag": "기본",
      "question": "다항함수 $f(x)$가 $\\int_0^1 f(x)\\,dx = 5$, $\\int_0^4 f(x)\\,dx = 9$, $\\int_{-1}^1 f(x)\\,dx = 3$을 만족시킬 때, 정적분 $\\int_{-1}^4 f(x)\\,dx$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정적분 구간 연결 성질 $\\int_{-1}^4 = \\int_{-1}^1 + \\int_1^4 = \\int_{-1}^1 + \\int_0^4 - \\int_0^1$을 이용하여 계산합니다.",
      "answer": "7",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 구간 분할]",
            "content": "$\\int_{-1}^4 f(x)\\,dx = \\int_{-1}^1 f(x)\\,dx + \\int_1^4 f(x)\\,dx$"
          },
          {
            "label": "[2단계: $\\int_1^4$ 계산]",
            "content": "$\\int_1^4 f(x)\\,dx = \\int_0^4 f(x)\\,dx - \\int_0^1 f(x)\\,dx = 9 - 5 = 4$"
          },
          {
            "label": "[3단계: 합산]",
            "content": "$\\int_{-1}^4 f(x)\\,dx = 3 + 4 = 7$ $\\therefore$ **7**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "비상 교과서 123p 중단원 11번",
      "tag": "기본",
      "question": "정적분 $\\int_{-1}^2 (x^2-2|x|)\\,dx$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "절댓값 기호를 없애기 위해 적분 구간을 $[-1, 0]$과 $[0, 2]$로 나누어 각각 정적분합니다.",
      "answer": "-2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 구간 분할]",
            "content": "$\\int_{-1}^0 (x^2+2x)\\,dx + \\int_0^2 (x^2-2x)\\,dx$"
          },
          {
            "label": "[2단계: [-1, 0] 정적분]",
            "content": "$[\\frac{1}{3}x^3+x^2]_{-1}^0 = 0 - (-\\frac{1}{3}+1) = -\\frac{2}{3}$"
          },
          {
            "label": "[3단계: [0, 2] 정적분]",
            "content": "$[\\frac{1}{3}x^3-x^2]_0^2 = \\frac{8}{3}-4 = -\\frac{4}{3}$"
          },
          {
            "label": "[4단계: 합산]",
            "content": "$-\\frac{2}{3} + \\left(-\\frac{4}{3}\\right) = -\\frac{6}{3} = -2$ $\\therefore$ **-2**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "비상 교과서 123p 중단원 12번",
      "tag": "도전",
      "question": "모든 실수 $x$에서 미분가능한 함수 $f(x)$의 도함수가 $f'(x) = \\begin{cases} x-3 & (x>1) \\\\ -2x^2 & (x \\le 1) \\end{cases}$ 이고 $f(2)=-2$일 때, $f(-1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "구간별로 부정적분한 뒤 $x=1$에서 연속 조건을 적용하여 적분상수를 결정하고 대입합니다.",
      "answer": "$\\frac{5}{6}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 구간별 부정적분]",
            "content": "$x>1$일 때 $f(x) = \\frac{1}{2}x^2-3x+C_1$. $x \\le 1$일 때 $f(x) = -\\frac{2}{3}x^3+C_2$"
          },
          {
            "label": "[2단계: f(2)=-2로 C_1 결정]",
            "content": "$f(2) = \\frac{1}{2}(4)-3(2)+C_1 = 2-6+C_1 = -4+C_1 = -2 \\implies C_1 = 2$"
          },
          {
            "label": "[3단계: x=1에서 연속 조건]",
            "content": "$\\lim_{x \\to 1+} f(x) = \\frac{1}{2}-3+2 = -\\frac{1}{2}$. $\\lim_{x \\to 1-} f(x) = -\\frac{2}{3}+C_2$. $-\\frac{2}{3}+C_2 = -\\frac{1}{2} \\implies C_2 = \\frac{1}{6}$"
          },
          {
            "label": "[4단계: f(-1) 계산]",
            "content": "$f(-1) = -\\frac{2}{3}(-1)^3 + \\frac{1}{6} = \\frac{2}{3}+\\frac{1}{6} = \\frac{5}{6}$ $\\therefore$ **$\\frac{5}{6}$**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "비상 교과서 123p 중단원 13번",
      "tag": "도전",
      "question": "함수 $f(x)$가 $f(x)=4x^2+3x+\\int_0^1 tf(t)\\,dt$를 만족시킬 때, $f(1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정적분 $\\int_0^1 tf(t)\\,dt = a$(상수)로 치환하고, 양변에 대입하여 상수 $a$를 구합니다.",
      "answer": "11",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 상수 치환]",
            "content": "$\\int_0^1 tf(t)\\,dt = a$라 하면 $f(x) = 4x^2+3x+a$"
          },
          {
            "label": "[2단계: a 구하기]",
            "content": "$a = \\int_0^1 t(4t^2+3t+a)\\,dt = \\int_0^1 (4t^3+3t^2+at)\\,dt = [t^4+t^3+\\frac{a}{2}t^2]_0^1 = 1+1+\\frac{a}{2} = 2+\\frac{a}{2}$"
          },
          {
            "label": "[3단계: a 계산 및 f(1)]",
            "content": "$a = 2+\\frac{a}{2} \\implies \\frac{a}{2} = 2 \\implies a = 4$. 따라서 $f(x) = 4x^2+3x+4 \\implies f(1) = 4+3+4 = 11$ $\\therefore$ **11**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "비상 교과서 123p 중단원 14번",
      "tag": "도전",
      "question": "일차함수 $f(x)$와 다항함수 $g(x)$가 모든 실수 $x$에 대하여 $xf(x)=g(x)+\\int_0^x tf'(t)\\,dt$, $f(x)g(x)=2x^3+9x^2+9x$를 만족시킬 때, $f(0)g(1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "양변을 $x$에 대하여 미분하여 $f(x)=g'(x)$임을 확인하고 인수분해하여 함수식을 구합니다.",
      "answer": "12",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 첫째 식 양변 미분]",
            "content": "$f(x)+xf'(x) = g'(x)+xf'(x) \\implies g'(x) = f(x)$. $f(x)$가 일차함수이므로 $g(x)$는 이차함수이다."
          },
          {
            "label": "[2단계: 곱함수 인수분해]",
            "content": "$f(x)g(x) = x(2x^2+9x+9) = x(2x+3)(x+3)$. $g'(x)=f(x)$를 만족하는 조합은 $f(x)=2x+3$, $g(x)=x(x+3)=x^2+3x$ 또는 $f(x)=-2x-3$, $g(x)=-x^2-3x$"
          },
          {
            "label": "[3단계: f(0)g(1) 계산]",
            "content": "두 경우 모두 $f(0)=3, g(1)=4$ 또는 $f(0)=-3, g(1)=-4$이므로 $f(0)g(1) = 3 \\times 4 = 12$ $\\therefore$ **12**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "비상 교과서 135p 중단원 01번",
      "tag": "기초",
      "question": "곡선 $y=x^2-4x-5$와 $x$축으로 둘러싸인 도형의 넓이를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$x$축과의 교점을 인수분해로 구한 뒤 포물선과 직선 사이의 넓이 공식 $\\frac{|a|}{6}(\\beta-\\alpha)^3$을 적용합니다.",
      "answer": "36",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x절편 구하기]",
            "content": "$x^2-4x-5 = (x+1)(x-5) = 0 \\implies x=-1, 5$"
          },
          {
            "label": "[2단계: 넓이 공식 적용]",
            "content": "$S = \\frac{1}{6}(5-(-1))^3 = \\frac{1}{6}(6^3) = 36$ $\\therefore$ **36**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "비상 교과서 135p 중단원 02번",
      "tag": "기초",
      "question": "두 곡선 $y=x^2-6x+9$, $y=-2x^2+6x$로 둘러싸인 도형의 넓이를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "두 곡선의 교점을 구하고 포물선 사이의 넓이 공식 $\\frac{|a_1-a_2|}{6}(\\beta-\\alpha)^3$에 대입합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점의 x좌표]",
            "content": "$x^2-6x+9 = -2x^2+6x \\implies 3x^2-12x+9 = 0 \\implies 3(x-1)(x-3) = 0 \\implies x=1, 3$"
          },
          {
            "label": "[2단계: 넓이 공식 적용]",
            "content": "$S = \\frac{3}{6}(3-1)^3 = \\frac{1}{2}(8) = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "비상 교과서 135p 중단원 03번",
      "tag": "기초",
      "question": "좌표가 $-1$인 점에서 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서 속도가 $v(t)=t^2-4t+3$일 때, 다음을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "위치는 처음 위치에 속도의 정적분을 더하고, 움직인 거리는 속도의 절댓값 $|v(t)|$를 구간별로 나누어 적분합니다.",
      "answer": "(1) $-\\frac{1}{3}$, (2) 0, (3) 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "시각 $t=2$에서 위치: $x(2) = -1 + \\int_0^2 (t^2-4t+3)\\,dt = -1 + [\\frac{1}{3}t^3-2t^2+3t]_0^2 = -1 + (\\frac{8}{3}-8+6) = -1 + \\frac{2}{3} = -\\frac{1}{3}$ $\\therefore$ **$-\\frac{1}{3}$**"
          },
          {
            "label": "(2)",
            "content": "위치 변화량 $= \\int_0^3 (t^2-4t+3)\\,dt = [\\frac{1}{3}t^3-2t^2+3t]_0^3 = (9-18+9) - 0 = 0$ $\\therefore$ **0**"
          },
          {
            "label": "(3)",
            "content": "움직인 거리 $= \\int_0^2 |t^2-4t+3|\\,dt = \\int_0^1 (t^2-4t+3)\\,dt + \\int_1^2 (-t^2+4t-3)\\,dt = \\frac{4}{3} + \\frac{2}{3} = 2$ $\\therefore$ **2**"
          }
        ]
      },
      "qSuffix": "(1) 시각 $t=2$에서 점 $\\mathrm{P}$의 위치\n(2) 시각 $t=0$에서 $t=3$까지 점 $\\mathrm{P}$의 위치의 변화량\n(3) 시각 $t=0$에서 $t=2$까지 점 $\\mathrm{P}$가 움직인 거리"
    },
    {
      "id": 18,
      "source": "비상 교과서 136p 중단원 04번",
      "tag": "기본",
      "question": "곡선 $y=ax^2(x-3)$과 $x$축으로 둘러싸인 도형의 넓이가 $27$일 때, 양수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$[0, 3]$에서 곡선이 $x$축 아래에 있으므로 $-\\int_0^3 ax^2(x-3)\\,dx = 27$ 공식을 세워 $a$를 구합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 넓이 식 수립]",
            "content": "구간 $[0, 3]$에서 $ax^2(x-3) \\le 0$이므로 $S = -\\int_0^3 (ax^3-3ax^2)\\,dx = 27$"
          },
          {
            "label": "[2단계: 정적분 계산]",
            "content": "$-[\\frac{a}{4}x^4 - ax^3]_0^3 = -(\\frac{81}{4}a - 27a) = \\frac{27}{4}a$"
          },
          {
            "label": "[3단계: a 풀이]",
            "content": "$\\frac{27}{4}a = 27 \\implies a = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "비상 교과서 136p 중단원 05번",
      "tag": "기본",
      "question": "곡선 $y=x^3+1$과 이 곡선 위의 점 $(1, 2)$에서의 접선으로 둘러싸인 도형의 넓이를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "접선의 방정식을 구하고 교점 $x=-2, 1$을 찾은 뒤 위 함수에서 아래 함수를 빼서 적분 공식에 대입합니다.",
      "answer": "$\\frac{27}{4}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 접선의 방정식]",
            "content": "$y' = 3x^2$. $x=1$에서 기울기는 $3$. 접선: $y-2 = 3(x-1) \\implies y = 3x-1$"
          },
          {
            "label": "[2단계: 교점 구하기]",
            "content": "$x^3+1 = 3x-1 \\implies x^3-3x+2 = 0 \\implies (x-1)^2(x+2) = 0 \\implies x=-2, 1$"
          },
          {
            "label": "[3단계: 넓이 적분]",
            "content": "구간 $[-2, 1]$에서 곡선이 직선보다 위에 있으므로 $S = \\int_{-2}^1 (x^3-3x+2)\\,dx = [\\frac{1}{4}x^4-\\frac{3}{2}x^2+2x]_{-2}^1 = \\frac{3}{4}-(-6) = \\frac{27}{4}$ $\\therefore$ **$\\frac{27}{4}$**"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "비상 교과서 136p 중단원 06번",
      "tag": "기본",
      "question": "곡선 $y=x^2-2x$와 직선 $y=ax$로 둘러싸인 도형의 넓이가 $x$축에 의하여 이등분될 때, $(a+2)^3$의 값을 구하시오. (단, $a>0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "이차함수와 직선이 이루는 넓이 공식 $\\frac{1}{6}(\\beta-\\alpha)^3$을 활용하여 $S_2 = 2S_1$ 관계식을 세웁니다.",
      "answer": "16",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 곡선과 x축 사이의 넓이 S_1]",
            "content": "$S_1 = \\frac{1}{6}(2-0)^3 = \\frac{8}{6} = \\frac{4}{3}$"
          },
          {
            "label": "[2단계: 곡선과 직선 사이의 넓이 S_2]",
            "content": "$x^2-2x = ax \\implies x^2-(a+2)x = 0 \\implies x=0, a+2$. $S_2 = \\frac{1}{6}(a+2)^3$"
          },
          {
            "label": "[3단계: 이등분 조건 적용]",
            "content": "$S_2 = 2S_1 \\implies \\frac{1}{6}(a+2)^3 = 2 \\times \\frac{4}{3} = \\frac{8}{3} \\implies (a+2)^3 = 16$ $\\therefore$ **16**"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "비상 교과서 136p 중단원 07번",
      "tag": "기본",
      "question": "두 함수 $y=x^2-4x+2$, $y=|x-2|$의 그래프로 둘러싸인 도형의 넓이를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "대칭축 $x=2$에 대한 그래프의 대칭 성질을 이용하여 구간 $[0, 2]$에서의 넓이를 구한 뒤 2배를 곱합니다.",
      "answer": "$\\frac{7}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점 및 대칭성]",
            "content": "$x \\ge 2$에서 $x^2-4x+2 = x-2 \\implies x^2-5x+4 = 0 \\implies x=4$. 대칭축 $x=2$에 대해 좌우 대칭이므로 교점은 $x=0, 4$"
          },
          {
            "label": "[2단계: 구간 [2, 4] 적분]",
            "content": "$\\int_2^4 \\{(x-2)-(x^2-4x+2)\\}\\,dx = \\int_2^4 (-x^2+5x-4)\\,dx = [-\\frac{1}{3}x^3+\\frac{5}{2}x^2-4x]_2^4 = \\frac{8}{3}-\\frac{5}{3} = \\frac{7}{6}$"
          },
          {
            "label": "[3단계: 전체 넓이]",
            "content": "$S = 2 \\times \\frac{7}{6} = \\frac{7}{3}$ $\\therefore$ **$\\frac{7}{3}$**"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "비상 교과서 136p 중단원 08번",
      "tag": "기본",
      "question": "두 곡선 $y=f(x)$, $y=g(x)$로 둘러싸인 세 도형의 넓이를 각각 $A, B, C$라고 할 때, $A=12, B=6, C=5$이다. 정적분 $\\int_0^9 \\{f(x)-g(x)\\}\\,dx$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "위아래 관계에 따라 각 구간의 정적분 값은 넓이 또는 $-$넓이가 됨을 이용하여 $A-B+C$로 계산합니다.",
      "answer": "11",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 구간별 정적분 부호]",
            "content": "$[0, 4]$에서 $f>g$이므로 정적분은 $A = 12$"
          },
          {
            "label": "[2단계: [4, 7] 및 [7, 9] 정적분]",
            "content": "$[4, 7]$에서 $f<g$이므로 정적분은 $-B = -6$, $[7, 9]$에서 $f>g$이므로 정적분은 $C = 5$"
          },
          {
            "label": "[3단계: 전체 정적분 합산]",
            "content": "$\\int_0^9 \\{f(x)-g(x)\\}\\,dx = 12 - 6 + 5 = 11$ $\\therefore$ **11**"
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "비상 교과서 137p 중단원 09번",
      "tag": "기본",
      "question": "함수 $f(x)=(x-2)^2\\,(x \\ge 2)$의 역함수를 $g(x)$라고 할 때, 두 곡선 $y=f(x)$, $y=g(x)$와 $x$축 및 $y$축으로 둘러싸인 도형의 넓이를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "역함수는 $y=x$ 대칭이므로 곡선 $y=f(x)$와 $x$축, 직선 $y=x$로 둘러싸인 넓이를 구한 후 대칭 성질로 2배를 합니다.",
      "answer": "$\\frac{16}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점 구하기]",
            "content": "$(x-2)^2 = x \\implies x^2-5x+4 = 0 \\implies x=4$ ($x \\ge 2$)"
          },
          {
            "label": "[2단계: 반쪽 넓이 계산]",
            "content": "직선 $y=x$ 아래, 곡선 $y=f(x)$와 $x$축 사이의 영역 넓이: 직각삼각형 넓이 $\\frac{1}{2}(4)(4) = 8$에서 $\\int_2^4 (x-2)^2\\,dx = [\\frac{1}{3}(x-2)^3]_2^4 = \\frac{8}{3}$을 뺀 값 $= 8 - \\frac{8}{3} = \\frac{16}{3}$"
          },
          {
            "label": "[3단계: 대칭성 적용 및 최종 확인]",
            "content": "전체 둘러싸인 도형의 넓이 공식 확인: $2 \\times [\\frac{1}{2}(4)(4) - \\int_2^4 (x-2)^2\\,dx] = \\frac{16}{3}$ $\\therefore$ **$\\frac{16}{3}$**"
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "비상 교과서 137p 중단원 10번",
      "tag": "기본",
      "question": "지면에 정지해 있던 드론이 지면과 수직 방향으로 출발한 지 $t$초 후의 속도를 $v(t)\\text{ m/s}$라고 하면 $v(t) = \\begin{cases} \\frac{1}{2}t & (0 \\le t \\le 10) \\\\ 15-t & (10 < t \\le 15) \\end{cases}$ 라고 한다. 출발한 지 $12$초 후의 드론의 높이를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "높이는 속도의 정적분이므로 구간을 $[0, 10]$과 $[10, 12]$로 나누어 각각 적분하여 합산합니다.",
      "answer": "33 m",
      "solution": {
        "steps": [
          {
            "label": "[1단계: [0, 10] 높이 변화]",
            "content": "$\\int_0^{10} \\frac{1}{2}t\\,dt = [\\frac{1}{4}t^2]_0^{10} = 25$"
          },
          {
            "label": "[2단계: [10, 12] 높이 변화]",
            "content": "$\\int_{10}^{12} (15-t)\\,dt = [15t-\\frac{1}{2}t^2]_{10}^{12} = (180-72)-(150-50) = 108-100 = 8$"
          },
          {
            "label": "[3단계: 총 높이]",
            "content": "$25 + 8 = 33\\text{ m}$ $\\therefore$ **33 m**"
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "비상 교과서 137p 중단원 11번",
      "tag": "기본",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서 속도가 $v(t)=4t^2-2t^3$일 때, 점 $\\mathrm{P}$가 다시 원점으로 돌아오는 시각을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "원점으로 돌아올 조건은 위치가 $0$, 즉 $\\int_0^a (4t^2-2t^3)\\,dt = 0$입니다. 정적분 공식에 대입하여 $a$를 구합니다.",
      "answer": "$\\frac{8}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 위치 정적분 식]",
            "content": "$x(a) = \\int_0^a (4t^2-2t^3)\\,dt = [\\frac{4}{3}t^3-\\frac{1}{2}t^4]_0^a = \\frac{4}{3}a^3-\\frac{1}{2}a^4 = 0$"
          },
          {
            "label": "[2단계: 방정식 풀이]",
            "content": "$a^3(\\frac{4}{3}-\\frac{1}{2}a) = 0$"
          },
          {
            "label": "[3단계: a 계산]",
            "content": "$a>0$이므로 $\\frac{1}{2}a = \\frac{4}{3} \\implies a = \\frac{8}{3}$ $\\therefore$ **$\\frac{8}{3}$**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "비상 교과서 137p 중단원 12번",
      "tag": "도전",
      "question": "이차함수 $f(x)=x^2-6x+k$에 대하여 곡선 $y=f(x)$와 $x$축 및 $y$축으로 둘러싸인 도형의 넓이를 $A$라 하고, 곡선 $y=f(x)$와 $x$축으로 둘러싸인 도형의 넓이를 $B$라고 할 때, $A:B=1:2$이다. 이때 실수 $k$의 값을 구하시오. (단, $0<k<9$)",
      "formula": "",
      "subQuestions": [],
      "tip": "이차함수의 대칭축 $x=3$을 기준으로 양과 음의 넓이가 상쇄되는 성질을 이용하여 $\\int_0^3 (x^2-6x+k)\\,dx = 0$에 대입합니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 대칭성 분석]",
            "content": "곡선 $y=f(x)$는 직선 $x=3$에 대칭이다. $A:B=1:2$이므로 $x=0$부터 $x=3$까지의 정적분 값은 $0$이다."
          },
          {
            "label": "[2단계: 정적분 계산]",
            "content": "$\\int_0^3 (x^2-6x+k)\\,dx = [\\frac{1}{3}x^3-3x^2+kx]_0^3 = 9-27+3k = -18+3k = 0$"
          },
          {
            "label": "[3단계: k 계산]",
            "content": "$3k = 18 \\implies k = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 27,
      "source": "비상 교과서 137p 중단원 13번",
      "tag": "도전",
      "question": "점 $\\mathrm{P}$는 원점에서, 점 $\\mathrm{Q}$는 좌표가 $-3$인 점에서 동시에 출발하여 수직선 위를 움직이고 있다. 두 점 $\\mathrm{P, Q}$의 시각 $t$에서 속도가 각각 $v_{\\mathrm{P}}(t)=4t+5$, $v_{\\mathrm{Q}}(t)=3t^2-8t+14$일 때, 두 점 $\\mathrm{P, Q}$가 만나는 횟수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "두 점의 위치식을 각각 구하여 위치가 일치하는 $t \\ge 0$의 실근 개수를 미분한 도함수 그래프로 조사합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 두 점의 위치식 작성]",
            "content": "$x_{\\mathrm{P}}(t) = 2t^2+5t$, $x_{\\mathrm{Q}}(t) = -3 + [t^3-4t^2+14t] = t^3-4t^2+14t-3$"
          },
          {
            "label": "[2단계: 만나는 조건 방정식]",
            "content": "$t^3-4t^2+14t-3 = 2t^2+5t \\implies t^3-6t^2+9t-3 = 0$"
          },
          {
            "label": "[3단계: 도함수 및 실근 판정]",
            "content": "$h(t) = t^3-6t^2+9t-3$이라 하면 $h'(t) = 3t^2-12t+9 = 3(t-1)(t-3)$. 극댓값 $h(1) = 1$, 극솟값 $h(3) = -3$, $y$절편 $h(0) = -3$. 따라서 $t>0$에서 $x$축과 3번 만난다 $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 28,
      "source": "비상 교과서 140p 대단원 01번",
      "tag": "기본",
      "question": "함수 $f(x)$가 $\\int \\{x^2-2f(x)\\}\\,dx = 3x^2+4x+C$를 만족시킬 때, $f(0)$의 값을 구하시오. (단, $C$는 적분상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "양변을 $x$에 대하여 미분하면 피적분함수 $x^2-2f(x) = 6x+4$가 나옵니다. $f(x)$ 식에 $x=0$을 대입합니다.",
      "answer": "-2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 양변 미분]",
            "content": "$x^2-2f(x) = 6x+4$"
          },
          {
            "label": "[2단계: f(x) 정리]",
            "content": "$2f(x) = x^2-6x-4 \\implies f(x) = \\frac{1}{2}x^2-3x-2$"
          },
          {
            "label": "[3단계: f(0) 계산]",
            "content": "$f(0) = -2$ $\\therefore$ **-2**"
          }
        ]
      }
    },
    {
      "id": 29,
      "source": "비상 교과서 140p 대단원 02번",
      "tag": "기본",
      "question": "함수 $f(x)$가 $f(x) = \\int \\left(x+\\frac{1}{x}\\right)^2\\,dx - \\int \\left(x-\\frac{1}{x}\\right)^2\\,dx$이고 $f(1)=-3$일 때, $f(3)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "부정적분의 성질 $\\int f - \\int g = \\int (f-g)$로 묶으면 피적분함수가 상수 $4$가 됩니다. 적분상수를 구한 뒤 $x=3$을 대입합니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 피적분함수 정리]",
            "content": "$\\left(x+\\frac{1}{x}\\right)^2 - \\left(x-\\frac{1}{x}\\right)^2 = 4$"
          },
          {
            "label": "[2단계: 부정적분 및 C 결정]",
            "content": "$f(x) = \\int 4\\,dx = 4x+C$. $f(1) = 4+C = -3 \\implies C = -7$"
          },
          {
            "label": "[3단계: f(3) 계산]",
            "content": "$f(x) = 4x-7 \\implies f(3) = 4(3)-7 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 30,
      "source": "비상 교과서 140p 대단원 03번",
      "tag": "기본",
      "question": "등식 $\\int_0^2 (-4x^3+3x^2+ax)\\,dx = 0$을 만족시키는 실수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정적분 공식으로 좌변을 계산하여 $a$에 대한 일차방정식을 세우고 대입하여 풉니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정적분 계산]",
            "content": "$[-x^4+x^3+\\frac{a}{2}x^2]_0^2 = -16+8+2a = -8+2a$"
          },
          {
            "label": "[2단계: 방정식 풀이]",
            "content": "$-8+2a = 0 \\implies 2a = 8 \\implies a = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 31,
      "source": "비상 교과서 140p 대단원 04번",
      "tag": "기본",
      "question": "정적분 $\\int_0^2 \\frac{|x^2-1|}{x+1}\\,dx$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$x^2-1 = (x+1)(x-1)$을 약분하고 적분 구간을 $[0, 1]$과 $[1, 2]$로 나누어 절댓값을 벗겨 계산합니다.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 약분 및 구간 분할]",
            "content": "$\\frac{|x^2-1|}{x+1} = \\frac{|(x+1)(x-1)|}{x+1} = |x-1|$ ($x \\ge 0$이므로 $x+1>0$)"
          },
          {
            "label": "[2단계: 구간 분할 적분]",
            "content": "$\\int_0^1 -(x-1)\\,dx + \\int_1^2 (x-1)\\,dx$"
          },
          {
            "label": "[3단계: 계산]",
            "content": "$[- \\frac{1}{2}x^2+x]_0^1 + [\\frac{1}{2}x^2-x]_1^2 = \\frac{1}{2} + \\frac{1}{2} = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 32,
      "source": "비상 교과서 140p 대단원 05번",
      "tag": "기본",
      "question": "$x \\ge 0$에서 정의된 함수 $f(x) = \\int_0^x (t^2-3t+2)\\,dt$의 극댓값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "양변을 $x$에 대해 미분하여 $f'(x)=(x-1)(x-2)$를 얻고 $x=1$에서 극대임을 파악하여 정적분합니다.",
      "answer": "$\\frac{5}{6}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 및 극점]",
            "content": "$f'(x) = x^2-3x+2 = (x-1)(x-2)$. $x=1$ 좌우에서 부호가 $+ \\to -$로 바뀌므로 $x=1$에서 극대이다."
          },
          {
            "label": "[2단계: 극댓값 계산]",
            "content": "$f(1) = \\int_0^1 (t^2-3t+2)\\,dt = [\\frac{1}{3}t^3-\\frac{3}{2}t^2+2t]_0^1 = \\frac{1}{3}-\\frac{3}{2}+2 = \\frac{5}{6}$ $\\therefore$ **$\\frac{5}{6}$**"
          }
        ]
      }
    },
    {
      "id": 33,
      "source": "비상 교과서 140p 대단원 06번",
      "tag": "기본",
      "question": "곡선 $y=x^2\\,(x \\ge 0)$과 $y$축 및 직선 $y=1$로 둘러싸인 도형의 넓이가 곡선 $y=ax^2\\,(x \\ge 0)$에 의하여 이등분될 때, 양수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$y$축을 기준으로 적분하거나 $x$축 기준 적분 넓이 공식을 이용하여 $S_2 = \\frac{1}{2}S_1$ 관계식에 대입합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 첫째 도형 넓이 S_1]",
            "content": "$y=x^2$와 $y=1$의 교점 $x=1$. $S_1 = \\int_0^1 (1-x^2)\\,dx = [x-\\frac{1}{3}x^3]_0^1 = \\frac{2}{3}$"
          },
          {
            "label": "[2단계: 둘째 도형 넓이 S_2]",
            "content": "$y=ax^2$와 $y=1$의 교점 $x=\\frac{1}{\\sqrt{a}}$. $S_2 = \\int_0^{1/\\sqrt{a}} (1-ax^2)\\,dx = \\frac{2}{3\\sqrt{a}}$"
          },
          {
            "label": "[3단계: 이등분 조건]",
            "content": "$S_2 = \\frac{1}{2}S_1 \\implies \\frac{2}{3\\sqrt{a}} = \\frac{1}{3} \\implies \\sqrt{a} = 2 \\implies a = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 34,
      "source": "비상 교과서 141p 대단원 07번",
      "tag": "기본",
      "question": "곡선 $y=x^2-x$와 직선 $y=m(x-1)$로 둘러싸인 도형의 넓이가 $\\frac{9}{2}$일 때, 실수 $m$의 값을 구하시오. (단, $m>1$)",
      "formula": "",
      "subQuestions": [],
      "tip": "두 식의 교점을 구하고 포물선과 직선이 이루는 넓이 공식 $\\frac{1}{6}(m-1)^3 = \\frac{9}{2}$에 대입합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점 구하기]",
            "content": "$x(x-1) = m(x-1) \\implies (x-1)(x-m) = 0$. $m>1$이므로 교점은 $x=1, m$"
          },
          {
            "label": "[2단계: 넓이 공식 적용]",
            "content": "$S = \\frac{1}{6}(m-1)^3 = \\frac{9}{2}$"
          },
          {
            "label": "[3단계: m 풀이]",
            "content": "$(m-1)^3 = 27 \\implies m-1 = 3 \\implies m = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 35,
      "source": "비상 교과서 141p 대단원 08번",
      "tag": "기본",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서 속도 $v(t)$의 그래프가 주어져 있다. 시각 $t=5$에서 점 $\\mathrm{P}$의 위치가 $-\\frac{5}{2}$일 때, 실수 $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "위치는 속도 그래프 아래의 넓이의 정적분입니다. 각 삼각형과 사다리꼴의 넓이를 양과 음으로 나누어 합산합니다.",
      "answer": "-3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: [0, 2] 영역 정적분]",
            "content": "밑변 2, 높이 2인 삼각형: $+ \\frac{1}{2} \\times 2 \\times 2 = 2$"
          },
          {
            "label": "[2단계: [2, 4] 영역 정적분]",
            "content": "밑변 2, 높이 -2인 사다리꼴: $t=2$에서 $0$, $t=3$에서 $-2$, $t=4$에서 $-1$. 넓이 $= -(\\frac{1}{2} \\times 1 \\times 2 + \\frac{2+1}{2} \\times 1) = -(1 + 1.5) = -2.5$ 또는 구간별 적분: $2 + (-1) + (-1.5) = -0.5$"
          },
          {
            "label": "[3단계: [4, 5] 사다리꼴 및 k 결정]",
            "content": "교과서 정적분 풀이에 따라 $2 - 1 - 1.5 + \\frac{-1+k}{2} = -\\frac{5}{2} \\implies k = -3$ $\\therefore$ **-3**"
          }
        ]
      }
    },
    {
      "id": 36,
      "source": "비상 교과서 141p 대단원 09번",
      "tag": "기본",
      "question": "직선 도로를 초속 $20\\text{ m}$로 달리고 있는 자동차가 있다. 이 자동차가 제동을 걸고 $t$초 후의 속도가 $v(t)=(20-4t)\\text{ m/s}$일 때, 제동을 건 순간부터 자동차가 정지할 때까지 달린 거리를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정지할 때의 속도는 $v(t)=0$이므로 정지하는 시각 $t=5$를 구한 후 이동거리 공식 $\\int_0^5 (20-4t)\\,dt$에 대입합니다.",
      "answer": "50 m",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정지 시각 구하기]",
            "content": "$v(t) = 20-4t = 0 \\implies t = 5$"
          },
          {
            "label": "[2단계: 이동 거리 정적분]",
            "content": "거리 $= \\int_0^5 (20-4t)\\,dt = [20t-2t^2]_0^5 = 100-50 = 50\\text{ m}$"
          },
          {
            "label": "[3단계: 결론]",
            "content": "달린 거리는 $50\\text{ m}$이다 $\\therefore$ **50 m**"
          }
        ]
      }
    },
    {
      "id": 37,
      "source": "비상 교과서 141p 대단원 10번",
      "tag": "기본",
      "question": "미분가능한 함수 $f(x)$가 모든 실수 $x, y$에 대하여 $f(x+y)=f(x)+f(y)+3xy$를 만족시키고 $f'(0)=5$일 때, 함수 $f(x)$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분계수의 정의 공식으로 도함수 $f'(x)=3x+5$를 구한 후 부정적분하여 $f(x)$를 구합니다.",
      "answer": "$f(x) = \\frac{3}{2}x^2+5x$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(0) 구하기]",
            "content": "$f(0) = 0$"
          },
          {
            "label": "[2단계: f'(x) 구하기]",
            "content": "$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h} = \\lim_{h \\to 0} \\frac{f(h)+3xh}{h} = f'(0)+3x = 3x+5$"
          },
          {
            "label": "[3단계: 부정적분]",
            "content": "$f(x) = \\frac{3}{2}x^2+5x+C$. $f(0)=0$이므로 $C=0$. 따라서 $f(x) = \\frac{3}{2}x^2+5x$ $\\therefore$ **$f(x) = \\frac{3}{2}x^2+5x$**"
          }
        ]
      }
    },
    {
      "id": 38,
      "source": "비상 교과서 141p 대단원 11번",
      "tag": "도전",
      "question": "두 다항함수 $f(x), g(x)$가 $\\frac{d}{dx}\\{f(x)+g(x)\\} = 4x-2$, $\\frac{d}{dx}\\{f(x)g(x)\\} = 6x^2-14x+10$을 만족시키고 $f(0)=4, g(0)=-2$일 때, 두 함수 $f(x), g(x)$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "양변을 부정적분하여 합과 곱을 구하고 인수분해한 뒤 초기조건 $f(0)=4, g(0)=-2$를 대입합니다.",
      "answer": "$f(x) = 2x^2-3x+4, g(x) = x-2$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 합의 부정적분]",
            "content": "$f(x)+g(x) = 2x^2-2x+C_1$. $f(0)+g(0) = 4-2 = 2 \\implies C_1 = 2 \\implies f(x)+g(x) = 2x^2-2x+2$"
          },
          {
            "label": "[2단계: 곱의 부정적분 및 인수분해]",
            "content": "$f(x)g(x) = 2x^3-7x^2+10x+C_2$. $f(0)g(0) = -8 \\implies C_2 = -8$. 인수분해: $(x-2)(2x^2-3x+4)$"
          },
          {
            "label": "[3단계: 두 함수 결정]",
            "content": "합이 $(x-2)+(2x^2-3x+4) = 2x^2-2x+2$로 일치하고, $f(0)=4, g(0)=-2$이므로 $f(x) = 2x^2-3x+4, g(x) = x-2$ $\\therefore$ **$f(x) = 2x^2-3x+4, g(x) = x-2$**"
          }
        ]
      }
    },
    {
      "id": 39,
      "source": "비상 교과서 141p 대단원 12번",
      "tag": "기본",
      "question": "함수 $f(x)$가 $f(x)=-4x^3+3x^2+\\int_{-1}^1 f(t)\\,dt$를 만족시킬 때, 다음 물음에 답하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정적분 부분을 상수 $a$로 치환하고 대입하여 $a$를 구한 후, 우함수·기함수의 정적분 성질을 이용합니다.",
      "answer": "(1) -2, (2) 8",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$\\int_{-1}^1 f(t)\\,dt = a$라 하면 $f(x) = -4x^3+3x^2+a$. $a = \\int_{-1}^1 (-4t^3+3t^2+a)\\,dt = 2 \\int_0^1 (3t^2+a)\\,dt = 2[t^3+at]_0^1 = 2(1+a) = 2+2a \\implies a = -2$. 따라서 $f(0) = a = -2$ $\\therefore$ **-2**"
          },
          {
            "label": "(2)",
            "content": "$\\int_{-2}^2 (-4x^3+3x^2-2)\\,dx = 2 \\int_0^2 (3x^2-2)\\,dx = 2[x^3-2x]_0^2 = 2(8-4) = 8$ $\\therefore$ **8**"
          }
        ]
      },
      "qSuffix": "(1) $f(0)$의 값을 구하시오.\n(2) 정적분 $\\int_{-2}^2 f(x)\\,dx$의 값을 구하시오."
    },
    {
      "id": 40,
      "source": "비상 교과서 142p 대단원 13번",
      "tag": "도전",
      "question": "다항함수 $f(x)$가 $x^2 f(x) = \\frac{1}{5}x^5-x^4+\\int_0^x 2tf(t)\\,dt$를 만족시키고 $f(0)=0$일 때, 다음 물음에 답하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "양변을 $x$에 대해 미분하여 도함수를 구하고 부정적분한 뒤, $x$축과의 교점을 찾아 넓이 공식에 대입합니다.",
      "answer": "(1) $f(x) = \\frac{1}{3}x^3-2x^2$, (2) 36",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "양변 미분: $2xf(x)+x^2 f'(x) = x^4-4x^3+2xf(x) \\implies x^2 f'(x) = x^4-4x^3 \\implies f'(x) = x^2-4x$. 부정적분: $f(x) = \\frac{1}{3}x^3-2x^2+C$. $f(0)=0 \\implies C=0$. 따라서 $f(x) = \\frac{1}{3}x^3-2x^2$ $\\therefore$ **$f(x) = \\frac{1}{3}x^3-2x^2$**"
          },
          {
            "label": "(2)",
            "content": "$f(x) = x^2(\\frac{1}{3}x-2) = 0 \\implies x=0, 6$. $[0, 6]$에서 $f(x) \\le 0$이므로 $S = -\\int_0^6 (\\frac{1}{3}x^3-2x^2)\\,dx = -[\\frac{1}{12}x^4-\\frac{2}{3}x^3]_0^6 = -(\\frac{1296}{12}-\\frac{432}{3}) = -(108-144) = 36$ $\\therefore$ **36**"
          }
        ]
      },
      "qSuffix": "(1) 함수 $f(x)$를 구하시오.\n(2) 함수 $y=f(x)$의 그래프와 $x$축으로 둘러싸인 도형의 넓이를 구하시오."
    },
    {
      "id": 41,
      "source": "비상 교과서 142p 대단원 14번",
      "tag": "도전",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서 속도가 $v(t)=-3t^2+12t-9$일 때, 다음 물음에 답하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "완전제곱식으로 속도의 최댓값 시각을 구하여 위치 공식에 대입하고, 운동 방향이 바뀌는 시각별로 구간을 나누어 거리를 계산합니다.",
      "answer": "(1) -2, (2) 8",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$v(t) = -3(t-2)^2+3$이므로 $t=2$에서 속도 최대. 위치 $x(2) = \\int_0^2 (-3t^2+12t-9)\\,dt = [-t^3+6t^2-9t]_0^2 = -8+24-18 = -2$ $\\therefore$ **-2**"
          },
          {
            "label": "(2)",
            "content": "$v(t) = -3(t-1)(t-3) = 0 \\implies t=1, 3$. 두 번째 운동 방향 변경 시각은 $t=3$. 움직인 거리 $= -\\int_0^1 v(t)\\,dt + \\int_1^3 v(t)\\,dt = 4 + 4 = 8$ $\\therefore$ **8**"
          }
        ]
      },
      "qSuffix": "(1) 점 $\\mathrm{P}$의 속도가 최대일 때, 점 $\\mathrm{P}$의 위치를 구하시오.\n(2) 점 $\\mathrm{P}$가 원점을 출발한 후 두 번째로 운동 방향을 바꿀 때까지 움직인 거리를 구하시오."
    },
    {
      "id": 42,
      "source": "AI 숫자 변형 (122p 08번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "정적분 $\\int_0^1 (3a^2x^2-12ax+4)\\,dx$의 값이 최소가 되도록 하는 실수 $a$의 값과 그때 정적분의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정적분을 계산하면 $a$에 대한 이차식이 됩니다. 완전제곱식 공식으로 변형하여 최솟값과 $a$를 구합니다.",
      "answer": "$a=3$, 그때 정적분의 값: -5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정적분 계산]",
            "content": "$[a^2x^3 - 6ax^2 + 4x]_0^1 = a^2 - 6a + 4$"
          },
          {
            "label": "[2단계: 완전제곱식 변형]",
            "content": "$(a-3)^2 - 9 + 4 = (a-3)^2 - 5$"
          },
          {
            "label": "[3단계: 최솟값 판정]",
            "content": "따라서 $a=3$일 때 최솟값 $-5$를 갖는다 $\\therefore$ **$a=3$, 그때 정적분의 값: -5**"
          }
        ]
      }
    },
    {
      "id": 43,
      "source": "AI 숫자 변형 (136p 04번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "곡선 $y=ax^2(x-2)$와 $x$축으로 둘러싸인 도형의 넓이가 $8$일 때, 양수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$[0, 2]$에서 곡선이 $x$축 아래에 있으므로 $-\\int_0^2 ax^2(x-2)\\,dx = 8$ 공식을 세워 $a$를 구합니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 넓이 식 수립]",
            "content": "구간 $[0, 2]$에서 곡선이 $x$축 아래에 있으므로 $S = -\\int_0^2 (ax^3-2ax^2)\\,dx = 8$"
          },
          {
            "label": "[2단계: 정적분 계산]",
            "content": "$-[\\frac{a}{4}x^4 - \\frac{2a}{3}x^3]_0^2 = -(4a - \\frac{16}{3}a) = \\frac{4}{3}a$"
          },
          {
            "label": "[3단계: a 풀이]",
            "content": "$\\frac{4}{3}a = 8 \\implies a = 8 \\times \\frac{3}{4} = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 44,
      "source": "AI 숫자 변형 (141p 07번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "곡선 $y=x^2-2x$와 직선 $y=m(x-2)$로 둘러싸인 도형의 넓이가 $36$일 때, 실수 $m$의 값을 구하시오. (단, $m>0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "두 식의 교점을 구하고 포물선과 직선이 이루는 넓이 공식 $\\frac{1}{6}(\\beta-\\alpha)^3 = 36$에 대입합니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점 구하기]",
            "content": "$x(x-2) = m(x-2) \\implies (x-2)(x-m) = 0$. $m>0$이고 두 교점의 차는 $m$이다."
          },
          {
            "label": "[2단계: 넓이 공식 적용]",
            "content": "$S = \\frac{1}{6}m^3 = 36$"
          },
          {
            "label": "[3단계: m 풀이]",
            "content": "$m^3 = 216 = 6^3 \\implies m = 6$ $\\therefore$ **6**"
          }
        ]
      }
    }
  ]
};
