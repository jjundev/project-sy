window.WORKSHEET_DATA = {
  "meta": {
    "title": "동아 교과서 실전 핵심 (스스로 해결하기 + 단원 마무리 전수 수록)",
    "subtitle": "수학 II / 미적분 I",
    "chapter": "IV. 적분",
    "date": "2026. 09. 17 (목)",
    "student": "동아",
    "cheer": "동아의 완벽한 적분 정복과 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "동아 교과서 116p 스스로 해결하기 1번",
      "tag": "기본",
      "question": "다음 부정적분을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int x^8 dx"
        },
        {
          "no": 2,
          "formula": "\\int (-3x^5) dx"
        }
      ],
      "tip": "부정적분 공식 $\\int x^n dx = \\frac{1}{n+1}x^{n+1}+C$ ($C$는 적분상수)를 대입하여 계산합니다.",
      "answer": "(1) $\\frac{1}{9}x^9 + C$, (2) $-\\frac{1}{2}x^6 + C$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "공식을 적용하면 $\\int x^8 dx = \\frac{1}{8+1}x^{8+1}+C = \\frac{1}{9}x^9+C$."
          },
          {
            "label": "(2)",
            "content": "상수를 밖으로 빼고 공식을 적용하면 $\\int (-3x^5) dx = -3 \\cdot \\frac{1}{5+1}x^{5+1}+C = -\\frac{1}{2}x^6+C$."
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "동아 교과서 116p 스스로 해결하기 2번",
      "tag": "기본",
      "question": "다음 등식을 만족시키는 함수 $f(x)$를 구하시오. (단, $C$는 적분상수이다.)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int f(x) dx = x + C"
        },
        {
          "no": 2,
          "formula": "\\int f(x) dx = x^3 - \\frac{1}{2}x^2 + C"
        }
      ],
      "tip": "양변을 $x$에 대하여 미분하면 $\\frac{d}{dx} \\left( \\int f(x) dx \\right) = f(x)$가 되는 성질을 이용합니다.",
      "answer": "(1) $f(x)=1$, (2) $f(x)=3x^2-x$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "양변을 $x$에 대하여 미분하면 $f(x) = (x+C)' = 1$."
          },
          {
            "label": "(2)",
            "content": "양변을 $x$에 대하여 미분하면 $f(x) = \\left(x^3 - \\frac{1}{2}x^2 + C\\right)' = 3x^2 - x$."
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "동아 교과서 116p 스스로 해결하기 3번",
      "tag": "문제해결",
      "question": "함수 $F(x)$가 $(3x+2)^5$의 부정적분일 때, $F'(-1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "부정적분의 미분 성질에 의해 $F'(x) = (3x+2)^5$입니다. 여기에 $x=-1$을 대입하세요.",
      "answer": "$-1$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 정의]",
            "content": "$F(x)$가 $(3x+2)^5$의 부정적분이므로 미분하면 $F'(x) = (3x+2)^5$입니다."
          },
          {
            "label": "[2단계: 값 대입]",
            "content": "$x=-1$을 대입하면 $F'(-1) = \\{3(-1)+2\\}^5 = (-1)^5 = -1$입니다."
          },
          {
            "label": "[3단계: 결론]",
            "content": "$\\therefore -1$"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "동아 교과서 116p 스스로 해결하기 4번",
      "tag": "발전",
      "question": "삼차함수 $F(x)=x^3+ax^2+bx+1$이 함수 $f(x)$의 부정적분이고, $f(1)=5$, $|f'(0)| \\le 6$일 때, $F(1)$의 최댓값과 최솟값을 구하시오. (단, $a, b$는 상수이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "부정적분을 미분하여 $f(x)=F'(x)=3x^2+2ax+b$로 두고 조건들을 차례로 대입하여 $a$의 구간 범위를 구하세요.",
      "answer": "(단계1) $b=2-2a$, (단계2) $-3 \\le a \\le 3$, (단계3) 최댓값: $7$, 최솟값: $1$",
      "solution": {
        "steps": [
          {
            "label": "(단계1)",
            "content": "$F'(x) = f(x) = 3x^2+2ax+b$입니다. $f(1) = 3+2a+b = 5$에서 $b = 2-2a$입니다."
          },
          {
            "label": "(단계2)",
            "content": "$f'(x) = 6x+2a$이므로 $f'(0) = 2a$입니다. $|f'(0)| = |2a| \\le 6$에서 $-3 \\le a \\le 3$입니다."
          },
          {
            "label": "(단계3)",
            "content": "$F(1) = 1+a+b+1 = 2+a+(2-2a) = 4-a$입니다. $-3 \\le a \\le 3$이므로 $a=-3$일 때 최댓값 $7$, $a=3$일 때 최솟값 $1$입니다."
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "동아 교과서 121p 스스로 해결하기 1번",
      "tag": "기본",
      "question": "함수 $f(x)$가 $\\int f(x) dx = x^2 - 2x + C$ ($C$는 적분상수)를 만족시킬 때, $f(1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "양변을 미분하여 $f(x)=2x-2$를 구한 후 $x=1$을 대입합니다.",
      "answer": "$0$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 양변 미분]",
            "content": "등식의 양변을 $x$에 대하여 미분하면 $f(x) = (x^2-2x+C)' = 2x-2$입니다."
          },
          {
            "label": "[2단계: 값 대입]",
            "content": "$x=1$을 대입하면 $f(1) = 2(1)-2 = 0$입니다."
          },
          {
            "label": "[3단계: 결론]",
            "content": "$\\therefore 0$"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "동아 교과서 121p 스스로 해결하기 2번",
      "tag": "기본",
      "question": "다음 부정적분을 구하시오. (단, $C$는 적분상수이다.)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int 3 dx"
        },
        {
          "no": 2,
          "formula": "\\int (2-x) dx"
        },
        {
          "no": 3,
          "formula": "\\int (x^2+8x-3) dx"
        },
        {
          "no": 4,
          "formula": "\\int (2x+1)(3x-2) dx"
        }
      ],
      "tip": "각 항별로 적분 공식 $\\int x^n dx = \\frac{1}{n+1}x^{n+1}+C$을 적용하고 식을 전개하여 계산합니다.",
      "answer": "(1) $3x+C$, (2) $-\\frac{1}{2}x^2+2x+C$, (3) $\\frac{1}{3}x^3+4x^2-3x+C$, (4) $2x^3-\\frac{1}{2}x^2-2x+C$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$\\int 3 dx = 3x+C$."
          },
          {
            "label": "(2)",
            "content": "$\\int (2-x) dx = 2x - \\frac{1}{2}x^2 + C = -\\frac{1}{2}x^2+2x+C$."
          },
          {
            "label": "(3)",
            "content": "$\\int (x^2+8x-3) dx = \\frac{1}{3}x^3 + 4x^2 - 3x + C$."
          },
          {
            "label": "(4)",
            "content": "피적분함수를 전개하면 $(2x+1)(3x-2) = 6x^2-x-2$이므로 $\\int (6x^2-x-2) dx = 2x^3 - \\frac{1}{2}x^2 - 2x + C$."
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "동아 교과서 121p 스스로 해결하기 3번",
      "tag": "기본",
      "question": "다음 부정적분을 구하시오. (단, $C$는 적분상수이다.)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int (x+1) dx + \\int (x-1) dx"
        },
        {
          "no": 2,
          "formula": "\\int (5x^3+x^2-x+1) dx - \\int (x^3+x^2-3x+1) dx"
        }
      ],
      "tip": "부정적분의 합과 차 성질을 이용하여 피적분함수를 먼저 합친 뒤 적분 공식으로 계산합니다.",
      "answer": "(1) $x^2+C$, (2) $x^4+x^2+C$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$\\int \\{(x+1)+(x-1)\\} dx = \\int 2x dx = x^2+C$."
          },
          {
            "label": "(2)",
            "content": "$\\int \\{(5x^3+x^2-x+1)-(x^3+x^2-3x+1)\\} dx = \\int (4x^3+2x) dx = x^4+x^2+C$."
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "동아 교과서 121p 스스로 해결하기 4번",
      "tag": "기본",
      "question": "함수 $f(x) = \\int (x^3+x+1) dx$에 대하여 $\\lim_{x \\to 2} \\frac{f(x)-f(2)}{x-2}$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분계수의 정의 공식에 의해 구하는 극한값은 $f'(2)$입니다. $f'(x)$에 $x=2$를 대입하세요.",
      "answer": "$11$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 미분계수 정의]",
            "content": "$\\lim_{x \\to 2} \\frac{f(x)-f(2)}{x-2} = f'(2)$입니다."
          },
          {
            "label": "[2단계: 도함수 구하기]",
            "content": "$f(x) = \\int (x^3+x+1) dx$이므로 양변을 미분하면 $f'(x) = x^3+x+1$입니다."
          },
          {
            "label": "[3단계: 값 대입]",
            "content": "$f'(2) = 2^3+2+1 = 8+2+1 = 11$입니다. $\\therefore 11$"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "동아 교과서 121p 스스로 해결하기 5번",
      "tag": "문제해결",
      "question": "점 $(0, 2)$를 지나는 곡선 $y=f(x)$ 위의 임의의 점 $(x, f(x))$에서의 접선의 기울기가 $2x+3$이다. 곡선 $y=f(x)$가 $x$축과 만나는 점의 $x$좌표의 합을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "접선의 기울기 $f'(x)=2x+3$을 적분하고 $f(0)=2$를 대입하여 $f(x)$를 구한 뒤, 이차방정식 근과 계수의 관계 공식을 적용하세요.",
      "answer": "$-3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 $f(x)$ 도출]",
            "content": "접선의 기울기가 $f'(x) = 2x+3$이므로 $f(x) = \\int (2x+3) dx = x^2+3x+C$입니다. 점 $(0, 2)$를 지나므로 $f(0) = C = 2$, 즉 $f(x) = x^2+3x+2$입니다."
          },
          {
            "label": "[2단계: 교점의 $x$좌표 구하기]",
            "content": "$x$축과 만나는 점은 $x^2+3x+2 = (x+1)(x+2) = 0$에서 $x=-1$ 또는 $x=-2$입니다."
          },
          {
            "label": "[3단계: 합 계산]",
            "content": "$x$좌표의 합은 $(-1)+(-2) = -3$입니다. $\\therefore -3$"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "동아 교과서 121p 스스로 해결하기 6번",
      "tag": "서술형",
      "question": "미분가능한 함수 $f(x)$의 도함수 $f'(x)$가 $f'(x) = \\begin{cases} 4x+1 & (x \\le 1) \\\\ 3x^2+2x & (x > 1) \\end{cases}$ 이다. $f(0)=2$일 때, $f(-1)+f(3)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "구간별로 부정적분을 구하고 $x=1$에서 연속 조건을 대입하여 적분상수를 결정합니다.",
      "answer": "(단계1) $f(x)=2x^2+x+2$, (단계2) $f(x)=x^3+x^2+3$, (단계3) $42$",
      "solution": {
        "steps": [
          {
            "label": "(단계1)",
            "content": "$x \\le 1$일 때 $f(x) = \\int (4x+1) dx = 2x^2+x+C_1$. $f(0) = C_1 = 2$이므로 $f(x) = 2x^2+x+2$입니다."
          },
          {
            "label": "(단계2)",
            "content": "$x > 1$일 때 $f(x) = \\int (3x^2+2x) dx = x^3+x^2+C_2$. 함수 $f(x)$가 $x=1$에서 연속이므로 $f(1) = 2(1)^2+1+2 = 5 = 1^3+1^2+C_2 \\implies C_2 = 3$. 따라서 $f(x) = x^3+x^2+3$입니다."
          },
          {
            "label": "(단계3)",
            "content": "$f(-1) = 2(-1)^2+(-1)+2 = 3$, $f(3) = 3^3+3^2+3 = 39$이므로 $f(-1)+f(3) = 3+39 = 42$입니다."
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "동아 교과서 129p 스스로 해결하기 1번",
      "tag": "기본",
      "question": "다음 정적분의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int_1^3 (2x+1) dx"
        },
        {
          "no": 2,
          "formula": "\\int_0^1 (t^3+2t-1) dt"
        },
        {
          "no": 3,
          "formula": "\\int_1^1 (x^2+x+1) dx"
        },
        {
          "no": 4,
          "formula": "\\int_2^{-1} (3t^2+4t-1) dt"
        }
      ],
      "tip": "정적분의 기본정리 $\\int_a^b f(x) dx = [F(x)]_a^b = F(b)-F(a)$ 공식을 대입하여 계산합니다.",
      "answer": "(1) $10$, (2) $\\frac{1}{4}$, (3) $0$, (4) $-12$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$[x^2+x]_1^3 = (9+3)-(1+1) = 10$."
          },
          {
            "label": "(2)",
            "content": "$[\\frac{1}{4}t^4+t^2-t]_0^1 = (\\frac{1}{4}+1-1)-0 = \\frac{1}{4}$."
          },
          {
            "label": "(3)",
            "content": "위끝과 아래끝이 같으므로 정적분의 성질에 의해 $0$."
          },
          {
            "label": "(4)",
            "content": "$[t^3+2t^2-t]_2^{-1} = (-1+2+1)-(8+8-2) = 2-14 = -12$."
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "동아 교과서 129p 스스로 해결하기 2번",
      "tag": "기본",
      "question": "다음 식을 $x$에 대하여 미분하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int_1^x (t^2+1) dt"
        },
        {
          "no": 2,
          "formula": "\\int_0^x (t+1)(t^2-2) dt"
        }
      ],
      "tip": "정적분으로 정의된 함수의 미분 공식 $\\frac{d}{dx}\\int_a^x f(t)dt = f(x)$를 적용합니다.",
      "answer": "(1) $x^2+1$, (2) $(x+1)(x^2-2)$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "피적분함수 $t^2+1$에 $t=x$를 대입하므로 $x^2+1$입니다."
          },
          {
            "label": "(2)",
            "content": "피적분함수 $(t+1)(t^2-2)$에 $t=x$를 대입하므로 $(x+1)(x^2-2)$ (또는 $x^3+x^2-2x-2$)입니다."
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "동아 교과서 129p 스스로 해결하기 3번",
      "tag": "기본",
      "question": "임의의 실수 $x$에 대하여 함수 $f(x)$가 $\\int_a^x f(t) dt = x^3 + 8$을 만족시킬 때, 상수 $a$에 대하여 $f(a)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "양변에 $x=a$를 대입하여 $a^3+8=0$에서 $a$를 구하고, 양변을 미분하여 $f(x)$를 구합니다.",
      "answer": "$12$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 상수 $a$ 구하기]",
            "content": "양변에 $x=a$를 대입하면 $\\int_a^a f(t) dt = 0 = a^3+8 \\implies a^3 = -8 \\implies a = -2$입니다."
          },
          {
            "label": "[2단계: 도함수 $f(x)$ 구하기]",
            "content": "양변을 $x$에 대하여 미분하면 $f(x) = 3x^2$입니다."
          },
          {
            "label": "[3단계: $f(a)$ 계산]",
            "content": "$f(a) = f(-2) = 3(-2)^2 = 12$입니다. $\\therefore 12$"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "동아 교과서 129p 스스로 해결하기 4번",
      "tag": "기본",
      "question": "$\\lim_{x \\to 2} \\frac{1}{x-2} \\int_2^x (2t^3+1) dt$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$g(t)=2t^3+1$로 두고 정적분과 미분계수의 관계 공식 $\\lim_{x \\to a} \\frac{1}{x-a}\\int_a^x g(t)dt = g(a)$를 대입합니다.",
      "answer": "$17$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 미분계수 변형]",
            "content": "$g(t) = 2t^3+1$이라 하고 $g(t)$의 한 부정적분을 $G(t)$라 하면, 준식은 $\\lim_{x \\to 2} \\frac{G(x)-G(2)}{x-2} = G'(2) = g(2)$입니다."
          },
          {
            "label": "[2단계: 값 계산]",
            "content": "$g(2) = 2(2^3)+1 = 2(8)+1 = 17$입니다."
          },
          {
            "label": "[3단계: 결론]",
            "content": "$\\therefore 17$"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "동아 교과서 129p 스스로 해결하기 5번",
      "tag": "문제해결",
      "question": "다항함수 $f(x)$가 다음 조건을 만족시킬 때, $f(2)$의 값을 구하시오.",
      "formula": "(가) $\\lim_{x \\to \\infty} \\frac{f(x)}{2x^2+1} = 1$\n(나) $\\int_{-1}^1 f(x) dx = \\int_1^3 f(x) dx = 2$",
      "subQuestions": [],
      "tip": "(가)에서 $f(x)=2x^2+ax+b$로 두고, 정적분 식에 대입하여 $a, b$를 연립방정식으로 구합니다.",
      "answer": "$\\frac{1}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $f(x)$ 형태 결정]",
            "content": "(가)에 의해 $f(x)$는 최고차항의 계수가 $2$인 이차함수이므로 $f(x) = 2x^2+ax+b$ ($a, b$는 상수)로 둘 수 있습니다."
          },
          {
            "label": "[2단계: 정적분으로 계수 결정]",
            "content": "$\\int_{-1}^1 (2x^2+ax+b) dx = 2\\int_0^1 (2x^2+b) dx = 2(\\frac{2}{3}+b) = 2 \\implies b = \\frac{1}{3}$. 또한 $\\int_1^3 (2x^2+ax+\\frac{1}{3}) dx = [\\frac{2}{3}x^3+\\frac{a}{2}x^2+\\frac{1}{3}x]_1^3 = 18+4a = 2 \\implies a = -4$. 즉 $f(x) = 2x^2-4x+\\frac{1}{3}$입니다."
          },
          {
            "label": "[3단계: $f(2)$ 계산]",
            "content": "$f(2) = 2(2)^2-4(2)+\\frac{1}{3} = \\frac{1}{3}$입니다. $\\therefore \\frac{1}{3}$"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "동아 교과서 129p 스스로 해결하기 6번",
      "tag": "서술형",
      "question": "삼차함수 $y=f(x)$가 $x=-2$에서 극솟값 $-8$, $x=1$에서 극댓값 $\\frac{11}{2}$을 가질 때, $\\int_0^1 f(x) dx$의 값을 구하시오. (단, $f'(-2)=0, f'(1)=0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "극값 조건을 미분과 부정적분에 대입하여 $f'(x)$와 $f(x)$의 계수를 구한 뒤 구간 $[0, 1]$에서 정적분을 계산하세요.",
      "answer": "(단계1) $f'(x)=ax^2+ax-2a$, (단계2) $f(x)=-x^3-\\frac{3}{2}x^2+6x+2$, (단계3) $\\frac{17}{4}$",
      "solution": {
        "steps": [
          {
            "label": "(단계1)",
            "content": "$f'(x) = a(x+2)(x-1) = ax^2+ax-2a$입니다."
          },
          {
            "label": "(단계2)",
            "content": "$f(x) = \\int (ax^2+ax-2a) dx = \\frac{a}{3}x^3+\\frac{a}{2}x^2-2ax+C$입니다. $f(-2) = \\frac{10}{3}a+C = -8$, $f(1) = -\\frac{7}{6}a+C = \\frac{11}{2}$을 연립하면 $a=-3, C=2$입니다. 따라서 $f(x) = -x^3-\\frac{3}{2}x^2+6x+2$입니다."
          },
          {
            "label": "(단계3)",
            "content": "$\\int_0^1 (-x^3-\\frac{3}{2}x^2+6x+2) dx = [-\\frac{1}{4}x^4-\\frac{1}{2}x^3+3x^2+2x]_0^1 = -\\frac{1}{4}-\\frac{1}{2}+3+2 = \\frac{17}{4}$입니다."
          }
        ]
      },
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAgMTY1IiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE2NSIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMTUiIHkxPSI5NSIgeDI9IjIwMCIgeTI9Ijk1IiBzdHJva2U9IiMxODE4MWIiIHN0cm9rZS13aWR0aD0iMS4yIiBtYXJrZXItZW5kPSJ1cmwoI2Fyci14KSIvPgogIDxsaW5lIHgxPSIxMDUiIHkxPSIxNTUiIHgyPSIxMDUiIHkyPSIxNSIgc3Ryb2tlPSIjMTgxODFiIiBzdHJva2Utd2lkdGg9IjEuMiIgbWFya2VyLWVuZD0idXJsKCNhcnIteSkiLz4KICA8dGV4dCB4PSIyMDQiIHk9Ijk5IiBmb250LXNpemU9IjExIiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMxODE4MWIiPng8L3RleHQ+CiAgPHRleHQgeD0iOTciIHk9IjEyIiBmb250LXNpemU9IjExIiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMxODE4MWIiPnk8L3RleHQ+CiAgPHRleHQgeD0iOTYiIHk9IjEwNyIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+TzwvdGV4dD4KCiAgPGxpbmUgeDE9IjQ5IiB5MT0iOTUiIHgyPSI0OSIgeTI9IjE2My4wIiBzdHJva2U9IiM2NDc0OGIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMywyIi8+CiAgPGxpbmUgeDE9IjQ5IiB5MT0iMTYzLjAiIHgyPSIxMDUiIHkyPSIxNjMuMCIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMiIvPgogIDxjaXJjbGUgY3g9IjQ5IiBjeT0iMTYzLjAiIHI9IjIiIGZpbGw9IiMxODE4MWIiLz4KCiAgPGxpbmUgeDE9IjEzMyIgeTE9Ijk1IiB4Mj0iMTMzIiB5Mj0iNDguMjUiIHN0cm9rZT0iIzY0NzQ4YiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIzLDIiLz4KICA8bGluZSB4MT0iMTA1IiB5MT0iNDguMjUiIHgyPSIxMzMiIHkyPSI0OC4yNSIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMiIvPgogIDxjaXJjbGUgY3g9IjEzMyIgY3k9IjQ4LjI1IiByPSIyIiBmaWxsPSIjMTgxODFiIi8+CgogIDxwYXRoIGQ9Ik0gMTUuNCw5My4yIEwgMTYuNyw5OC45IEwgMTcuOSwxMDQuMyBMIDE5LjIsMTA5LjUgTCAyMC41LDExNC4zIEwgMjEuOCwxMTguOSBMIDIzLjAsMTIzLjMgTCAyNC4zLDEyNy40IEwgMjUuNiwxMzEuMiBMIDI2LjgsMTM0LjggTCAyOC4xLDEzOC4yIEwgMjkuNCwxNDEuMyBMIDMwLjYsMTQ0LjIgTCAzMS45LDE0Ni44IEwgMzMuMiwxNDkuMyBMIDM0LjUsMTUxLjUgTCAzNS43LDE1My41IEwgMzcuMCwxNTUuMyBMIDM4LjMsMTU2LjkgTCAzOS41LDE1OC4zIEwgNDAuOCwxNTkuNSBMIDQyLjEsMTYwLjUgTCA0My40LDE2MS40IEwgNDQuNiwxNjIuMCBMIDQ1LjksMTYyLjUgTCA0Ny4yLDE2Mi44IEwgNDguNCwxNjMuMCBMIDQ5LjcsMTYzLjAgTCA1MS4wLDE2Mi44IEwgNTIuMiwxNjIuNSBMIDUzLjUsMTYyLjAgTCA1NC44LDE2MS40IEwgNTYuMSwxNjAuNyBMIDU3LjMsMTU5LjggTCA1OC42LDE1OC44IEwgNTkuOSwxNTcuNyBMIDYxLjEsMTU2LjUgTCA2Mi40LDE1NS4yIEwgNjMuNywxNTMuNyBMIDY1LjAsMTUyLjIgTCA2Ni4yLDE1MC41IEwgNjcuNSwxNDguOCBMIDY4LjgsMTQ2LjkgTCA3MC4wLDE0NS4wIEwgNzEuMywxNDMuMCBMIDcyLjYsMTQxLjAgTCA3My44LDEzOC44IEwgNzUuMSwxMzYuNiBMIDc2LjQsMTM0LjQgTCA3Ny43LDEzMi4wIEwgNzguOSwxMjkuNyBMIDgwLjIsMTI3LjMgTCA4MS41LDEyNC44IEwgODIuNywxMjIuMyBMIDg0LjAsMTE5LjggTCA4NS4zLDExNy4zIEwgODYuNiwxMTQuNyBMIDg3LjgsMTEyLjEgTCA4OS4xLDEwOS41IEwgOTAuNCwxMDYuOSBMIDkxLjYsMTA0LjMgTCA5Mi45LDEwMS43IEwgOTQuMiw5OS4xIEwgOTUuNCw5Ni41IEwgOTYuNyw5NC4wIEwgOTguMCw5MS40IEwgOTkuMyw4OC45IEwgMTAwLjUsODYuNCBMIDEwMS44LDg0LjAgTCAxMDMuMSw4MS42IEwgMTA0LjMsNzkuMiBMIDEwNS42LDc2LjkgTCAxMDYuOSw3NC42IEwgMTA4LjIsNzIuNCBMIDEwOS40LDcwLjMgTCAxMTAuNyw2OC4yIEwgMTEyLjAsNjYuMiBMIDExMy4yLDY0LjMgTCAxMTQuNSw2Mi41IEwgMTE1LjgsNjAuNyBMIDExNy4wLDU5LjEgTCAxMTguMyw1Ny41IEwgMTE5LjYsNTYuMSBMIDEyMC45LDU0LjcgTCAxMjIuMSw1My41IEwgMTIzLjQsNTIuNCBMIDEyNC43LDUxLjQgTCAxMjUuOSw1MC41IEwgMTI3LjIsNDkuOCBMIDEyOC41LDQ5LjIgTCAxMjkuOCw0OC44IEwgMTMxLjAsNDguNCBMIDEzMi4zLDQ4LjMgTCAxMzMuNiw0OC4zIEwgMTM0LjgsNDguNCBMIDEzNi4xLDQ4LjcgTCAxMzcuNCw0OS4yIEwgMTM4LjYsNDkuOSBMIDEzOS45LDUwLjcgTCAxNDEuMiw1MS43IEwgMTQyLjUsNTIuOSBMIDE0My43LDU0LjMgTCAxNDUuMCw1NS45IEwgMTQ2LjMsNTcuNyBMIDE0Ny41LDU5LjggTCAxNDguOCw2Mi4wIEwgMTUwLjEsNjQuNCBMIDE1MS40LDY3LjEgTCAxNTIuNiw3MC4wIEwgMTUzLjksNzMuMSBMIDE1NS4yLDc2LjQgTCAxNTYuNCw4MC4wIEwgMTU3LjcsODMuOSBMIDE1OS4wLDg4LjAgTCAxNjAuMiw5Mi4zIEwgMTYxLjUsOTYuOSBMIDE2Mi44LDEwMS44IEwgMTY0LjEsMTA2LjkgTCAxNjUuMywxMTIuMyBMIDE2Ni42LDExOC4wIiBmaWxsPSJub25lIiBzdHJva2U9IiMwOTA5MGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KCiAgPHRleHQgeD0iNDQiIHk9IjkxIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTgxODFiIj4tMjwvdGV4dD4KICA8dGV4dCB4PSIxMDkiIHk9IjE2Ny4wIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTgxODFiIj4tODwvdGV4dD4KICA8dGV4dCB4PSIxMzEiIHk9IjEwOCIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+MTwvdGV4dD4KICA8dGV4dCB4PSI4MCIgeT0iNTIuMjUiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMxODE4MWIiPjExLzI8L3RleHQ+CiAgPHRleHQgeD0iMTQxIiB5PSI0NS4yNSIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmb250LXdlaWdodD0iNTAwIiBmaWxsPSIjMDkwOTBiIj55PWYoeCk8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
      "id": 17,
      "source": "동아 교과서 134p 스스로 해결하기 1번",
      "tag": "기본",
      "question": "다음 정적분의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int_0^1 (x^3+x+1) dx - \\int_0^1 (x^3-x+1) dx"
        },
        {
          "no": 2,
          "formula": "\\int_1^2 (x-1)^2 dx + \\int_1^2 (2x-1) dx"
        }
      ],
      "tip": "적분 구간이 같은 경우 피적분함수의 성질 $\\int_a^b f(x)dx \\pm \\int_a^b g(x)dx = \\int_a^b \\{f(x) \\pm g(x)\\}dx$ 공식을 적용합니다.",
      "answer": "(1) $1$, (2) $\\frac{7}{3}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$\\int_0^1 \\{(x^3+x+1)-(x^3-x+1)\\} dx = \\int_0^1 2x dx = [x^2]_0^1 = 1$."
          },
          {
            "label": "(2)",
            "content": "$\\int_1^2 \\{(x^2-2x+1)+(2x-1)\\} dx = \\int_1^2 x^2 dx = [\\frac{1}{3}x^3]_1^2 = \\frac{8}{3}-\\frac{1}{3} = \\frac{7}{3}$."
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "동아 교과서 134p 스스로 해결하기 2번",
      "tag": "기본",
      "question": "다음 정적분의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int_{-1}^0 (x^2+2x) dx + \\int_0^2 (x^2+2x) dx"
        },
        {
          "no": 2,
          "formula": "\\int_0^1 \\frac{x^3+1}{x+1} dx + \\int_1^3 \\frac{x^3+1}{x+1} dx"
        }
      ],
      "tip": "적분 구간의 연결 성질 $\\int_a^c f(x)dx + \\int_c^b f(x)dx = \\int_a^b f(x)dx$ 공식을 대입하여 계산합니다.",
      "answer": "(1) $6$, (2) $\\frac{15}{2}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$\\int_{-1}^2 (x^2+2x) dx = [\\frac{1}{3}x^3+x^2]_{-1}^2 = (\\frac{8}{3}+4) - (-\\frac{1}{3}+1) = \\frac{20}{3} - \\frac{2}{3} = 6$."
          },
          {
            "label": "(2)",
            "content": "$\\frac{x^3+1}{x+1} = x^2-x+1$이므로 $\\int_0^3 (x^2-x+1) dx = [\\frac{1}{3}x^3-\\frac{1}{2}x^2+x]_0^3 = 9-\\frac{9}{2}+3 = \\frac{15}{2}$."
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "동아 교과서 134p 스스로 해결하기 3번",
      "tag": "기본",
      "question": "다음 정적분의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int_1^3 |x-2| dx"
        },
        {
          "no": 2,
          "formula": "\\int_{-1}^2 |x^2-x| dx"
        }
      ],
      "tip": "절댓값 기호 안의 식의 부호가 바뀌는 경계값을 기준으로 구간을 나누어 정적분합니다.",
      "answer": "(1) $1$, (2) $\\frac{11}{6}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$\\int_1^2 -(x-2) dx + \\int_2^3 (x-2) dx = [-\\frac{1}{2}x^2+2x]_1^2 + [\\frac{1}{2}x^2-2x]_2^3 = \\frac{1}{2} + \\frac{1}{2} = 1$."
          },
          {
            "label": "(2)",
            "content": "$x(x-1)$의 부호에 따라 $[-1, 0]$에서 양, $[0, 1]$에서 음, $[1, 2]$에서 양입니다. $\\int_{-1}^0 (x^2-x)dx + \\int_0^1 -(x^2-x)dx + \\int_1^2 (x^2-x)dx = \\frac{5}{6} + \\frac{1}{6} + \\frac{5}{6} = \\frac{11}{6}$."
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "동아 교과서 134p 스스로 해결하기 4번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} x & (x < 1) \\\\ x^2 & (x \\ge 1) \\end{cases}$ 일 때, $\\int_0^2 f(x) dx$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수가 정의된 기준점 $x=1$을 중심으로 구간을 $[0, 1]$과 $[1, 2]$로 나누어 적분합니다.",
      "answer": "$\\frac{17}{6}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 구간 분할]",
            "content": "$\\int_0^2 f(x) dx = \\int_0^1 x dx + \\int_1^2 x^2 dx$입니다."
          },
          {
            "label": "[2단계: 적분 계산]",
            "content": "$[\\frac{1}{2}x^2]_0^1 + [\\frac{1}{3}x^3]_1^2 = \\frac{1}{2} + (\\frac{8}{3}-\\frac{1}{3}) = \\frac{1}{2} + \\frac{7}{3} = \\frac{17}{6}$입니다."
          },
          {
            "label": "[3단계: 결론]",
            "content": "$\\therefore \\frac{17}{6}$"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "동아 교과서 134p 스스로 해결하기 5번",
      "tag": "추론",
      "question": "다항함수 $y=f(x)$의 그래프가 $y$축에 대하여 대칭이고 $\\int_{-1}^2 f(x) dx = 5$, $\\int_{-2}^0 f(x) dx = 2$일 때, $\\int_0^1 f(x) dx - \\int_1^2 f(x) dx$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$y$축 대칭인 우함수의 성질 $\\int_{-a}^0 f(x)dx = \\int_0^a f(x)dx$를 대입하여 구간별 적분값을 구합니다.",
      "answer": "$4$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 대칭성 적용]",
            "content": "$f(x)$가 $y$축 대칭이므로 $\\int_0^2 f(x) dx = \\int_{-2}^0 f(x) dx = 2$, $\\int_{-1}^0 f(x) dx = \\int_0^1 f(x) dx$입니다."
          },
          {
            "label": "[2단계: 구간별 정적분 계산]",
            "content": "$\\int_{-1}^2 f(x) dx = \\int_{-1}^0 f(x) dx + \\int_0^2 f(x) dx = \\int_0^1 f(x) dx + 2 = 5 \\implies \\int_0^1 f(x) dx = 3$입니다. 또한 $\\int_1^2 f(x) dx = \\int_0^2 f(x) dx - \\int_0^1 f(x) dx = 2-3 = -1$입니다."
          },
          {
            "label": "[3단계: 준식 계산]",
            "content": "$\\int_0^1 f(x) dx - \\int_1^2 f(x) dx = 3 - (-1) = 4$입니다. $\\therefore 4$"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "동아 교과서 134p 스스로 해결하기 6번",
      "tag": "서술형",
      "question": "함수 $f(x)$가 다음 조건을 만족시킬 때, $\\int_1^{10} f(x) dx$의 값을 구하시오.",
      "formula": "(가) $-1 \\le x < 1$에서 $f(x)=1-x^2$\n(나) 임의의 실수 $x$에 대하여 $f(x+2)=f(x)$",
      "subQuestions": [],
      "tip": "주기함수의 성질 $f(x+2)=f(x)$을 이용하여 한 주기 구간의 정적분을 구하고 주기 배수를 대입합니다.",
      "answer": "(단계1) $f(x)=-x^2+4x-3$, (단계2) $4$, (단계3) $6$",
      "solution": {
        "steps": [
          {
            "label": "(단계1)",
            "content": "$1 \\le x < 3$일 때 $x-2 \\in [-1, 1)$이므로 $f(x) = f(x-2) = 1-(x-2)^2 = -x^2+4x-3$입니다."
          },
          {
            "label": "(단계2)",
            "content": "주기가 $2$이므로 구간 $[1, 9]$는 길이 $8$로 주기가 $4$번 반복됩니다. 따라서 $k = 4$입니다."
          },
          {
            "label": "(단계3)",
            "content": "한 주기 적분은 $\\int_1^3 (-x^2+4x-3) dx = \\frac{4}{3}$이므로 $\\int_1^9 f(x) dx = 4 \\times \\frac{4}{3} = \\frac{16}{3}$입니다. $\\int_9^{10} f(x) dx = \\int_{-1}^0 (1-x^2) dx = \\frac{2}{3}$이므로 $\\int_1^{10} f(x) dx = \\frac{16}{3}+\\frac{2}{3} = 6$입니다."
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "동아 교과서 140p 스스로 해결하기 1번",
      "tag": "기본",
      "question": "다음 곡선과 $x$축 및 두 직선 $x=-2, x=2$로 둘러싸인 도형의 넓이를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "y=-x^2+x+2"
        },
        {
          "no": 2,
          "formula": "y=x^3-x"
        }
      ],
      "tip": "$x$축과의 교점을 구하여 곡선이 $x$축의 위쪽 또는 아래쪽에 위치하는 구간으로 나누어 정적분 공식을 적용합니다.",
      "answer": "(1) $\\frac{19}{3}$, (2) $5$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$-x^2+x+2 = -(x-2)(x+1) = 0$에서 교점은 $x=-1, 2$입니다. $[-2, -1]$에서 $y \\le 0$, $[-1, 2]$에서 $y \\ge 0$이므로 넓이는 $\\int_{-2}^{-1} (x^2-x-2) dx + \\int_{-1}^2 (-x^2+x+2) dx = \\frac{11}{6} + \\frac{9}{2} = \\frac{19}{3}$."
          },
          {
            "label": "(2)",
            "content": "$x^3-x = x(x-1)(x+1)$은 기함수이므로 원점 대칭입니다. 넓이는 $2\\int_0^2 |x^3-x| dx = 2\\left(\\int_0^1 -(x^3-x)dx + \\int_1^2 (x^3-x)dx\\right) = 2(\\frac{1}{4}+\\frac{9}{4}) = 5$."
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "동아 교과서 140p 스스로 해결하기 2번",
      "tag": "기본",
      "question": "두 곡선 $y=x^3-2x^2-2x$, $y=-2x^2+2x$로 둘러싸인 도형의 넓이를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "두 식의 교점의 $x$좌표를 인수분해로 구한 뒤, 구간별로 위쪽 식에서 아래쪽 식을 빼서 정적분을 계산합니다.",
      "answer": "$8$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점 구하기]",
            "content": "$x^3-2x^2-2x = -2x^2+2x \\implies x^3-4x = x(x-2)(x+2) = 0 \\implies x=-2, 0, 2$입니다."
          },
          {
            "label": "[2단계: 넓이 식 세우기]",
            "content": "대칭성에 의해 넓이는 $S = 2\\int_0^2 \\{(-2x^2+2x) - (x^3-2x^2-2x)\\} dx = 2\\int_0^2 (-x^3+4x) dx$입니다."
          },
          {
            "label": "[3단계: 적분 계산]",
            "content": "$2[-\\frac{1}{4}x^4+2x^2]_0^2 = 2(-4+8) = 8$입니다. $\\therefore 8$"
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "동아 교과서 140p 스스로 해결하기 3번",
      "tag": "실생활",
      "question": "어느 비닐하우스 단면의 곡선 부분이 이차함수의 그래프의 일부와 같다고 한다. 비닐하우스의 바닥 폭과 높이가 각각 $10\\text{ m}, 5\\text{ m}$일 때, 비닐하우스 단면의 넓이를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "꼭짓점이 $(0, 5)$이고 $x$절편이 $\\pm 5$인 포물선 식 $y=-\\frac{1}{5}x^2+5$를 세우고 대칭성 성질을 이용해 정적분합니다.",
      "answer": "$\\frac{100}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 포물선 방정식 세우기]",
            "content": "꼭짓점을 $(0, 5)$로 잡으면 $y = ax^2+5$이고, 바닥 폭이 $10\\text{ m}$이므로 점 $(5, 0)$을 지납니다. $25a+5 = 0 \\implies a = -\\frac{1}{5}$, 즉 $y = -\\frac{1}{5}x^2+5$입니다."
          },
          {
            "label": "[2단계: 정적분 식 세우기]",
            "content": "$y$축 대칭이므로 넓이는 $S = 2\\int_0^5 (-\\frac{1}{5}x^2+5) dx = 2[-\\frac{1}{15}x^3+5x]_0^5$입니다."
          },
          {
            "label": "[3단계: 계산]",
            "content": "$2(-\\frac{25}{3}+25) = 2(\\frac{50}{3}) = \\frac{100}{3}$입니다. $\\therefore \\frac{100}{3}$"
          }
        ]
      },
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzAgMTU1IiB3aWR0aD0iMjMwIiBoZWlnaHQ9IjE1NSIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMTUiIHkxPSIxMTUiIHgyPSIyMDgiIHkyPSIxMTUiIHN0cm9rZT0iIzE4MTgxYiIgc3Ryb2tlLXdpZHRoPSIxLjIiIG1hcmtlci1lbmQ9InVybCgjYXJyLXgpIi8+CiAgPGxpbmUgeDE9IjExMCIgeTE9IjEzMCIgeDI9IjExMCIgeTI9IjE1IiBzdHJva2U9IiMxODE4MWIiIHN0cm9rZS13aWR0aD0iMS4yIiBtYXJrZXItZW5kPSJ1cmwoI2Fyci15KSIvPgogIDx0ZXh0IHg9IjIxMiIgeT0iMTE5IiBmb250LXNpemU9IjExIiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMxODE4MWIiPng8L3RleHQ+CiAgPHRleHQgeD0iMTAyIiB5PSIxMiIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj55PC90ZXh0PgogIDx0ZXh0IHg9IjEwMSIgeT0iMTI3IiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTgxODFiIj5PPC90ZXh0PgoKICA8cGF0aCBkPSJNIDM1LjAsMTE1LjAgTCAzNS4wLDExNS4wIEwgMzYuOSwxMTAuOCBMIDM4LjgsMTA2LjYgTCA0MC43LDEwMi42IEwgNDIuNiw5OC43IEwgNDQuNSw5NC44IEwgNDYuNCw5MS4xIEwgNDguMyw4Ny41IEwgNTAuMiw4NC4xIEwgNTIuMSw4MC43IEwgNTQuMCw3Ny40IEwgNTUuOSw3NC4zIEwgNTcuOCw3MS4yIEwgNTkuNyw2OC4zIEwgNjEuNiw2NS40IEwgNjMuNSw2Mi43IEwgNjUuNCw2MC4xIEwgNjcuMyw1Ny42IEwgNjkuMiw1NS4yIEwgNzEuMSw1Mi45IEwgNzMuMCw1MC43IEwgNzQuOSw0OC42IEwgNzYuOCw0Ni43IEwgNzguNyw0NC44IEwgODAuNiw0My4xIEwgODIuNSw0MS41IEwgODQuNCwzOS45IEwgODYuMywzOC41IEwgODguMiwzNy4yIEwgOTAuMSwzNi4wIEwgOTIuMCwzNC45IEwgOTMuOSwzMy45IEwgOTUuOCwzMy4xIEwgOTcuNywzMi4zIEwgOTkuNiwzMS42IEwgMTAxLjUsMzEuMSBMIDEwMy40LDMwLjcgTCAxMDUuMywzMC4zIEwgMTA3LjIsMzAuMSBMIDEwOS4xLDMwLjAgTCAxMTAuOSwzMC4wIEwgMTEyLjgsMzAuMSBMIDExNC43LDMwLjMgTCAxMTYuNiwzMC43IEwgMTE4LjUsMzEuMSBMIDEyMC40LDMxLjYgTCAxMjIuMywzMi4zIEwgMTI0LjIsMzMuMSBMIDEyNi4xLDMzLjkgTCAxMjguMCwzNC45IEwgMTI5LjksMzYuMCBMIDEzMS44LDM3LjIgTCAxMzMuNywzOC41IEwgMTM1LjYsMzkuOSBMIDEzNy41LDQxLjUgTCAxMzkuNCw0My4xIEwgMTQxLjMsNDQuOCBMIDE0My4yLDQ2LjcgTCAxNDUuMSw0OC42IEwgMTQ3LjAsNTAuNyBMIDE0OC45LDUyLjkgTCAxNTAuOCw1NS4yIEwgMTUyLjcsNTcuNiBMIDE1NC42LDYwLjEgTCAxNTYuNSw2Mi43IEwgMTU4LjQsNjUuNCBMIDE2MC4zLDY4LjMgTCAxNjIuMiw3MS4yIEwgMTY0LjEsNzQuMyBMIDE2Ni4wLDc3LjQgTCAxNjcuOSw4MC43IEwgMTY5LjgsODQuMSBMIDE3MS43LDg3LjUgTCAxNzMuNiw5MS4xIEwgMTc1LjUsOTQuOCBMIDE3Ny40LDk4LjcgTCAxNzkuMywxMDIuNiBMIDE4MS4yLDEwNi42IEwgMTgzLjEsMTEwLjggTCAxODUuMCwxMTUuMCBMIDE4NS4wLDExNS4wIFoiIGZpbGw9IiNmMWY1ZjkiIHN0cm9rZT0ibm9uZSIvPgogIDxsaW5lIHgxPSI3Mi41IiB5MT0iMTE1IiB4Mj0iNzIuNSIgeTI9IjUxLjI1IiBzdHJva2U9IiNjYmQ1ZTEiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMiwyIi8+CiAgPGxpbmUgeDE9IjE0Ny41IiB5MT0iMTE1IiB4Mj0iMTQ3LjUiIHkyPSI1MS4yNSIgc3Ryb2tlPSIjY2JkNWUxIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjIsMiIvPgoKICA8cGF0aCBkPSJNIDM1LjAsMTE1LjAgTCAzNi45LDExMC44IEwgMzguOCwxMDYuNiBMIDQwLjcsMTAyLjYgTCA0Mi42LDk4LjcgTCA0NC41LDk0LjggTCA0Ni40LDkxLjEgTCA0OC4zLDg3LjUgTCA1MC4yLDg0LjEgTCA1Mi4xLDgwLjcgTCA1NC4wLDc3LjQgTCA1NS45LDc0LjMgTCA1Ny44LDcxLjIgTCA1OS43LDY4LjMgTCA2MS42LDY1LjQgTCA2My41LDYyLjcgTCA2NS40LDYwLjEgTCA2Ny4zLDU3LjYgTCA2OS4yLDU1LjIgTCA3MS4xLDUyLjkgTCA3My4wLDUwLjcgTCA3NC45LDQ4LjYgTCA3Ni44LDQ2LjcgTCA3OC43LDQ0LjggTCA4MC42LDQzLjEgTCA4Mi41LDQxLjUgTCA4NC40LDM5LjkgTCA4Ni4zLDM4LjUgTCA4OC4yLDM3LjIgTCA5MC4xLDM2LjAgTCA5Mi4wLDM0LjkgTCA5My45LDMzLjkgTCA5NS44LDMzLjEgTCA5Ny43LDMyLjMgTCA5OS42LDMxLjYgTCAxMDEuNSwzMS4xIEwgMTAzLjQsMzAuNyBMIDEwNS4zLDMwLjMgTCAxMDcuMiwzMC4xIEwgMTA5LjEsMzAuMCBMIDExMC45LDMwLjAgTCAxMTIuOCwzMC4xIEwgMTE0LjcsMzAuMyBMIDExNi42LDMwLjcgTCAxMTguNSwzMS4xIEwgMTIwLjQsMzEuNiBMIDEyMi4zLDMyLjMgTCAxMjQuMiwzMy4xIEwgMTI2LjEsMzMuOSBMIDEyOC4wLDM0LjkgTCAxMjkuOSwzNi4wIEwgMTMxLjgsMzcuMiBMIDEzMy43LDM4LjUgTCAxMzUuNiwzOS45IEwgMTM3LjUsNDEuNSBMIDEzOS40LDQzLjEgTCAxNDEuMyw0NC44IEwgMTQzLjIsNDYuNyBMIDE0NS4xLDQ4LjYgTCAxNDcuMCw1MC43IEwgMTQ4LjksNTIuOSBMIDE1MC44LDU1LjIgTCAxNTIuNyw1Ny42IEwgMTU0LjYsNjAuMSBMIDE1Ni41LDYyLjcgTCAxNTguNCw2NS40IEwgMTYwLjMsNjguMyBMIDE2Mi4yLDcxLjIgTCAxNjQuMSw3NC4zIEwgMTY2LjAsNzcuNCBMIDE2Ny45LDgwLjcgTCAxNjkuOCw4NC4xIEwgMTcxLjcsODcuNSBMIDE3My42LDkxLjEgTCAxNzUuNSw5NC44IEwgMTc3LjQsOTguNyBMIDE3OS4zLDEwMi42IEwgMTgxLjIsMTA2LjYgTCAxODMuMSwxMTAuOCBMIDE4NS4wLDExNS4wIiBmaWxsPSJub25lIiBzdHJva2U9IiMwOTA5MGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KCiAgPGNpcmNsZSBjeD0iMTEwIiBjeT0iMzAiIHI9IjIiIGZpbGw9IiMxODE4MWIiLz4KICA8dGV4dCB4PSIxMDAiIHk9IjM0IiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTgxODFiIj41PC90ZXh0PgogIDx0ZXh0IHg9IjMwIiB5PSIxMjgiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMxODE4MWIiPi01PC90ZXh0PgogIDx0ZXh0IHg9IjE4MyIgeT0iMTI4IiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTgxODFiIj41PC90ZXh0PgoKICA8bGluZSB4MT0iMzUiIHkxPSIxMzkiIHgyPSIxODUiIHkyPSIxMzkiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIwLjkiLz4KICA8bGluZSB4MT0iMzUiIHkxPSIxMzUiIHgyPSIzNSIgeTI9IjE0MyIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjAuOSIvPgogIDxsaW5lIHgxPSIxODUiIHkxPSIxMzUiIHgyPSIxODUiIHkyPSIxNDMiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIwLjkiLz4KICA8dGV4dCB4PSI5OSIgeT0iMTM3IiBmb250LXNpemU9IjkuNSIgZmlsbD0iIzMzNDE1NSI+MTAgbTwvdGV4dD4KPC9zdmc+"
    },
    {
      "id": 26,
      "source": "동아 교과서 140p 스스로 해결하기 4번",
      "tag": "문제해결",
      "question": "닫힌구간 $[0, 1]$에서 곡선 $y=ax^2$과 두 직선 $x=0, y=a$로 둘러싸인 도형의 넓이를 $S$라고 한다. $S=1$일 때, 상수 $a$의 값을 구하시오. (단, $a>0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "위쪽 직선 $y=a$에서 아래쪽 포물선 $y=ax^2$을 뺀 식을 구간 $[0, 1]$에서 적분하여 $S=1$에 대입합니다.",
      "answer": "$\\frac{3}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 넓이 식 세우기]",
            "content": "구간 $[0, 1]$에서 직선 $y=a$가 곡선 $y=ax^2$보다 위쪽에 있으므로 $S = \\int_0^1 (a - ax^2) dx$입니다."
          },
          {
            "label": "[2단계: 정적분 계산]",
            "content": "$S = [ax - \\frac{a}{3}x^3]_0^1 = a - \\frac{a}{3} = \\frac{2}{3}a$입니다."
          },
          {
            "label": "[3단계: $a$ 구하기]",
            "content": "$\\frac{2}{3}a = 1 \\implies a = \\frac{3}{2}$입니다. $\\therefore \\frac{3}{2}$"
          }
        ]
      },
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAgMTU1IiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1NSIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMjAiIHkxPSIxMTUiIHgyPSIxOTUiIHkyPSIxMTUiIHN0cm9rZT0iIzE4MTgxYiIgc3Ryb2tlLXdpZHRoPSIxLjIiIG1hcmtlci1lbmQ9InVybCgjYXJyLXgpIi8+CiAgPGxpbmUgeDE9Ijc1IiB5MT0iMTMwIiB4Mj0iNzUiIHkyPSIxNSIgc3Ryb2tlPSIjMTgxODFiIiBzdHJva2Utd2lkdGg9IjEuMiIgbWFya2VyLWVuZD0idXJsKCNhcnIteSkiLz4KICA8dGV4dCB4PSIxOTgiIHk9IjExOSIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj54PC90ZXh0PgogIDx0ZXh0IHg9IjY3IiB5PSIxMiIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj55PC90ZXh0PgogIDx0ZXh0IHg9IjY2IiB5PSIxMjciIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMxODE4MWIiPk88L3RleHQ+CgogIDxwYXRoIGQ9Ik0gNzUuMCw0My4wIEwgMTM1LjAsNDMuMCBMIDEzNS4wLDQzLjAgTCAxMzMuOCw0NS45IEwgMTMyLjYsNDguOCBMIDEzMS4zLDUxLjUgTCAxMzAuMSw1NC4zIEwgMTI4LjksNTYuOSBMIDEyNy43LDU5LjYgTCAxMjYuNCw2Mi4xIEwgMTI1LjIsNjQuNiBMIDEyNC4wLDY3LjAgTCAxMjIuOCw2OS40IEwgMTIxLjUsNzEuNyBMIDEyMC4zLDczLjkgTCAxMTkuMSw3Ni4xIEwgMTE3LjksNzguMyBMIDExNi42LDgwLjMgTCAxMTUuNCw4Mi4zIEwgMTE0LjIsODQuMyBMIDExMy4wLDg2LjIgTCAxMTEuNyw4OC4wIEwgMTEwLjUsODkuOCBMIDEwOS4zLDkxLjUgTCAxMDguMSw5My4xIEwgMTA2LjgsOTQuNyBMIDEwNS42LDk2LjMgTCAxMDQuNCw5Ny43IEwgMTAzLjIsOTkuMSBMIDEwMS45LDEwMC41IEwgMTAwLjcsMTAxLjggTCA5OS41LDEwMy4wIEwgOTguMywxMDQuMiBMIDk3LjAsMTA1LjMgTCA5NS44LDEwNi4zIEwgOTQuNiwxMDcuMyBMIDkzLjQsMTA4LjMgTCA5Mi4xLDEwOS4xIEwgOTAuOSwxMDkuOSBMIDg5LjcsMTEwLjcgTCA4OC41LDExMS40IEwgODcuMiwxMTIuMCBMIDg2LjAsMTEyLjYgTCA4NC44LDExMy4xIEwgODMuNiwxMTMuNSBMIDgyLjMsMTEzLjkgTCA4MS4xLDExNC4zIEwgNzkuOSwxMTQuNSBMIDc4LjcsMTE0LjcgTCA3Ny40LDExNC45IEwgNzYuMiwxMTUuMCBMIDc1LjAsMTE1LjAgWiIgZmlsbD0iI2UyZThmMCIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjAuOCIvPgogIDx0ZXh0IHg9Ijk5LjAiIHk9IjY1LjUiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZmlsbD0iIzFlMjkzYiI+UzwvdGV4dD4KCiAgPGxpbmUgeDE9Ijc1IiB5MT0iNDMuMCIgeDI9IjE1NSIgeTI9IjQzLjAiIHN0cm9rZT0iIzE4MTgxYiIgc3Ryb2tlLXdpZHRoPSIxLjEiLz4KICA8bGluZSB4MT0iMTM1IiB5MT0iMTE1IiB4Mj0iMTM1IiB5Mj0iNDMuMCIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMiIvPgoKICA8cGF0aCBkPSJNIDI3LjAsNjguOSBMIDI4LjYsNzEuOSBMIDMwLjEsNzQuNyBMIDMxLjcsNzcuNSBMIDMzLjIsODAuMSBMIDM0LjgsODIuNyBMIDM2LjMsODUuMSBMIDM3LjksODcuNSBMIDM5LjUsODkuNyBMIDQxLjAsOTEuOSBMIDQyLjYsOTQuMCBMIDQ0LjEsOTUuOSBMIDQ1LjcsOTcuOCBMIDQ3LjIsOTkuNiBMIDQ4LjgsMTAxLjMgTCA1MC40LDEwMi45IEwgNTEuOSwxMDQuMyBMIDUzLjUsMTA1LjcgTCA1NS4wLDEwNy4wIEwgNTYuNiwxMDguMiBMIDU4LjEsMTA5LjMgTCA1OS43LDExMC4zIEwgNjEuMywxMTEuMiBMIDYyLjgsMTEyLjAgTCA2NC40LDExMi43IEwgNjUuOSwxMTMuNCBMIDY3LjUsMTEzLjkgTCA2OS4wLDExNC4zIEwgNzAuNiwxMTQuNiBMIDcyLjIsMTE0LjggTCA3My43LDExNS4wIEwgNzUuMywxMTUuMCBMIDc2LjgsMTE0LjkgTCA3OC40LDExNC44IEwgNzkuOSwxMTQuNSBMIDgxLjUsMTE0LjIgTCA4My4xLDExMy43IEwgODQuNiwxMTMuMiBMIDg2LjIsMTEyLjUgTCA4Ny43LDExMS44IEwgODkuMywxMTAuOSBMIDkwLjgsMTEwLjAgTCA5Mi40LDEwOS4wIEwgOTMuOSwxMDcuOCBMIDk1LjUsMTA2LjYgTCA5Ny4xLDEwNS4zIEwgOTguNiwxMDMuOCBMIDEwMC4yLDEwMi4zIEwgMTAxLjcsMTAwLjcgTCAxMDMuMyw5OS4wIEwgMTA0LjgsOTcuMiBMIDEwNi40LDk1LjMgTCAxMDguMCw5My4zIEwgMTA5LjUsOTEuMiBMIDExMS4xLDg5LjAgTCAxMTIuNiw4Ni43IEwgMTE0LjIsODQuMyBMIDExNS43LDgxLjggTCAxMTcuMyw3OS4yIEwgMTE4LjksNzYuNSBMIDEyMC40LDczLjcgTCAxMjIuMCw3MC45IEwgMTIzLjUsNjcuOSBMIDEyNS4xLDY0LjggTCAxMjYuNiw2MS43IEwgMTI4LjIsNTguNCBMIDEyOS44LDU1LjAgTCAxMzEuMyw1MS42IEwgMTMyLjksNDguMCBMIDEzNC40LDQ0LjQgTCAxMzYuMCw0MC42IEwgMTM3LjUsMzYuOCBMIDEzOS4xLDMyLjggTCAxNDAuNywyOC44IEwgMTQyLjIsMjQuNiBMIDE0My44LDIwLjQgTCAxNDUuMywxNi4xIEwgMTQ2LjksMTEuNiBMIDE0OC40LDcuMSBMIDE1MC4wLDIuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDkwOTBiIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CgogIDx0ZXh0IHg9IjY2IiB5PSI0Ny4wIiBmb250LXNpemU9IjEwIiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMxODE4MWIiPmE8L3RleHQ+CiAgPHRleHQgeD0iMTMzIiB5PSIxMjciIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMxODE4MWIiPjE8L3RleHQ+CiAgPHRleHQgeD0iMTMwIiB5PSIyNS4wIiBmb250LXNpemU9IjExIiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMwOTA5MGIiPnk9YXjCsjwvdGV4dD4KPC9zdmc+"
    },
    {
      "id": 27,
      "source": "동아 교과서 140p 스스로 해결하기 5번",
      "tag": "문제해결",
      "question": "곡선 $y=-x^2+6x$와 직선 $y=ax$로 둘러싸인 도형의 넓이가 $\\frac{32}{3}$일 때, 상수 $a$의 값을 구하시오. (단, $0<a<6$)",
      "formula": "",
      "subQuestions": [],
      "tip": "교점을 구하고 포물선과 직선으로 둘러싸인 넓이 공식 $S=\\frac{1}{6}(6-a)^3$을 대입하여 $a$를 구합니다.",
      "answer": "$2$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점 구하기]",
            "content": "$-x^2+6x = ax \\implies x^2-(6-a)x = 0$에서 교점은 $x=0$ 또는 $x=6-a$입니다."
          },
          {
            "label": "[2단계: 넓이 공식 적용]",
            "content": "이차곡선과 직선이 둘러싼 넓이 공식에 의해 $S = \\frac{1}{6}(6-a)^3 = \\frac{32}{3}$입니다."
          },
          {
            "label": "[3단계: $a$ 계산]",
            "content": "$(6-a)^3 = 64 \\implies 6-a = 4 \\implies a = 2$입니다. $\\therefore 2$"
          }
        ]
      },
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAgMTU1IiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1NSIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMTUiIHkxPSIxMjAiIHgyPSIxOTUiIHkyPSIxMjAiIHN0cm9rZT0iIzE4MTgxYiIgc3Ryb2tlLXdpZHRoPSIxLjIiIG1hcmtlci1lbmQ9InVybCgjYXJyLXgpIi8+CiAgPGxpbmUgeDE9IjQ1IiB5MT0iMTM1IiB4Mj0iNDUiIHkyPSIxNSIgc3Ryb2tlPSIjMTgxODFiIiBzdHJva2Utd2lkdGg9IjEuMiIgbWFya2VyLWVuZD0idXJsKCNhcnIteSkiLz4KICA8dGV4dCB4PSIxOTgiIHk9IjEyNCIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj54PC90ZXh0PgogIDx0ZXh0IHg9IjM3IiB5PSIxMiIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj55PC90ZXh0PgogIDx0ZXh0IHg9IjQ4IiB5PSIxMzIiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMxODE4MWIiPk88L3RleHQ+CgogIDxwYXRoIGQ9Ik0gNDUuMCwxMjAuMCBMIDQ1LjAsMTIwLjAgTCA0Ni43LDExNS40IEwgNDguNCwxMTAuOSBMIDUwLjEsMTA2LjYgTCA1MS45LDEwMi40IEwgNTMuNiw5OC4zIEwgNTUuMyw5NC40IEwgNTcuMCw5MC41IEwgNTguNyw4Ni44IEwgNjAuNCw4My4zIEwgNjIuMSw3OS44IEwgNjMuOSw3Ni41IEwgNjUuNiw3My4zIEwgNjcuMyw3MC4yIEwgNjkuMCw2Ny4zIEwgNzAuNyw2NC40IEwgNzIuNCw2MS44IEwgNzQuMSw1OS4yIEwgNzUuOSw1Ni44IEwgNzcuNiw1NC40IEwgNzkuMyw1Mi4zIEwgODEuMCw1MC4yIEwgODIuNyw0OC4zIEwgODQuNCw0Ni41IEwgODYuMSw0NC44IEwgODcuOSw0My4yIEwgODkuNiw0MS44IEwgOTEuMyw0MC41IEwgOTMuMCwzOS4zIEwgOTQuNywzOC4zIEwgOTYuNCwzNy40IEwgOTguMSwzNi42IEwgOTkuOSwzNS45IEwgMTAxLjYsMzUuNCBMIDEwMy4zLDM1LjAgTCAxMDUuMCwzNC43IEwgMTA2LjcsMzQuNSBMIDEwOC40LDM0LjUgTCAxMTAuMSwzNC42IEwgMTExLjksMzQuOCBMIDExMy42LDM1LjIgTCAxMTUuMywzNS42IEwgMTE3LjAsMzYuMiBMIDExOC43LDM3LjAgTCAxMjAuNCwzNy44IEwgMTIyLjEsMzguOCBMIDEyMy45LDM5LjkgTCAxMjUuNiw0MS4yIEwgMTI3LjMsNDIuNSBMIDEyOS4wLDQ0LjAgTCAxMjkuMCw0NC4wIEwgNDUuMCwxMjAuMCBaIiBmaWxsPSIjZTJlOGYwIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMC44Ii8+CiAgPGxpbmUgeDE9IjM2LjYiIHkxPSIxMjcuNiIgeDI9IjE1MC4wIiB5Mj0iMjUuMCIgc3Ryb2tlPSIjMTgxODFiIiBzdHJva2Utd2lkdGg9IjEuNCIvPgogIDx0ZXh0IHg9IjE0Mi4wIiB5PSIyMC4wIiBmb250LXNpemU9IjEwLjUiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZmlsbD0iIzE4MTgxYiI+eT1heDwvdGV4dD4KCiAgPHBhdGggZD0iTSAzNC41LDE1MC45IEwgMzYuMywxNDUuMSBMIDM4LjIsMTM5LjUgTCA0MC4wLDEzNC4xIEwgNDEuOCwxMjguOCBMIDQzLjcsMTIzLjYgTCA0NS41LDExOC42IEwgNDcuMywxMTMuOCBMIDQ5LjIsMTA5LjAgTCA1MS4wLDEwNC41IEwgNTIuOCwxMDAuMCBMIDU0LjcsOTUuOCBMIDU2LjUsOTEuNiBMIDU4LjMsODcuNiBMIDYwLjIsODMuOCBMIDYyLjAsODAuMSBMIDYzLjgsNzYuNSBMIDY1LjcsNzMuMSBMIDY3LjUsNjkuOCBMIDY5LjMsNjYuNyBMIDcxLjIsNjMuNyBMIDczLjAsNjAuOSBMIDc0LjksNTguMiBMIDc2LjcsNTUuNiBMIDc4LjUsNTMuMiBMIDgwLjQsNTEuMCBMIDgyLjIsNDguOSBMIDg0LjAsNDYuOSBMIDg1LjksNDUuMSBMIDg3LjcsNDMuNCBMIDg5LjUsNDEuOSBMIDkxLjQsNDAuNSBMIDkzLjIsMzkuMiBMIDk1LjAsMzguMSBMIDk2LjksMzcuMiBMIDk4LjcsMzYuNCBMIDEwMC41LDM1LjcgTCAxMDIuNCwzNS4yIEwgMTA0LjIsMzQuOCBMIDEwNi4wLDM0LjYgTCAxMDcuOSwzNC41IEwgMTA5LjcsMzQuNiBMIDExMS41LDM0LjggTCAxMTMuNCwzNS4xIEwgMTE1LjIsMzUuNiBMIDExNy4wLDM2LjMgTCAxMTguOSwzNy4wIEwgMTIwLjcsMzguMCBMIDEyMi41LDM5LjEgTCAxMjQuNCw0MC4zIEwgMTI2LjIsNDEuNiBMIDEyOC4wLDQzLjIgTCAxMjkuOSw0NC44IEwgMTMxLjcsNDYuNiBMIDEzMy41LDQ4LjYgTCAxMzUuNCw1MC42IEwgMTM3LjIsNTIuOSBMIDEzOS4wLDU1LjMgTCAxNDAuOSw1Ny44IEwgMTQyLjcsNjAuNSBMIDE0NC42LDYzLjMgTCAxNDYuNCw2Ni4yIEwgMTQ4LjIsNjkuMyBMIDE1MC4xLDcyLjYgTCAxNTEuOSw3Ni4wIEwgMTUzLjcsNzkuNSBMIDE1NS42LDgzLjIgTCAxNTcuNCw4Ny4wIEwgMTU5LjIsOTEuMCBMIDE2MS4xLDk1LjEgTCAxNjIuOSw5OS40IEwgMTY0LjcsMTAzLjggTCAxNjYuNiwxMDguNCBMIDE2OC40LDExMy4xIEwgMTcwLjIsMTE3LjkgTCAxNzIuMSwxMjIuOSBMIDE3My45LDEyOC4wIEwgMTc1LjcsMTMzLjMgTCAxNzcuNiwxMzguOCBMIDE3OS40LDE0NC4zIiBmaWxsPSJub25lIiBzdHJva2U9IiMwOTA5MGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8dGV4dCB4PSIxNDUuOCIgeT0iODAuMSIgZm9udC1zaXplPSIxMC41IiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMwOTA5MGIiPnk9LXjCsis2eDwvdGV4dD4KPC9zdmc+"
    },
    {
      "id": 28,
      "source": "동아 교과서 140p 스스로 해결하기 6번",
      "tag": "서술형",
      "question": "곡선 $y=x^2$과 점 $(0, -1)$에서 곡선 $y=x^2$에 그은 두 접선으로 둘러싸인 도형 $A$의 넓이를 적분 기호를 이용하여 나타내고, 그 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "접점 $(t, t^2)$에서의 접선 공식을 세우고 $(0, -1)$을 대입하여 접선을 구한 뒤, 좌우 대칭성을 이용해 적분합니다.",
      "answer": "(단계1) $y=2x-1$ 또는 $y=-2x-1$, (단계2) $2\\int_0^1 \\{x^2-(2x-1)\\} dx = \\frac{2}{3}$",
      "solution": {
        "steps": [
          {
            "label": "(단계1)",
            "content": "접점 $(t, t^2)$에서의 접선은 $y-t^2 = 2t(x-t)$입니다. $(0, -1)$을 대입하면 $-1-t^2 = -2t^2 \\implies t^2=1 \\implies t=\\pm 1$. 따라서 두 접선은 $y=2x-1$, $y=-2x-1$입니다."
          },
          {
            "label": "(단계2)",
            "content": "도형 $A$는 $y$축에 대하여 대칭이므로 $S = 2\\int_0^1 \\{x^2-(2x-1)\\} dx = 2[\\frac{1}{3}x^3-x^2+x]_0^1 = 2(\\frac{1}{3}-1+1) = \\frac{2}{3}$입니다."
          }
        ]
      },
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAgMTU1IiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1NSIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMjgiIHkxPSIxMiIgeDI9IjI4IiB5Mj0iMTM1IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMC43Ii8+PGxpbmUgeDE9IjQ2IiB5MT0iMTIiIHgyPSI0NiIgeTI9IjEzNSIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjAuNyIvPjxsaW5lIHgxPSI2NCIgeTE9IjEyIiB4Mj0iNjQiIHkyPSIxMzUiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIwLjciLz48bGluZSB4MT0iODIiIHkxPSIxMiIgeDI9IjgyIiB5Mj0iMTM1IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMC43Ii8+PGxpbmUgeDE9IjEwMCIgeTE9IjEyIiB4Mj0iMTAwIiB5Mj0iMTM1IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMC43Ii8+PGxpbmUgeDE9IjExOCIgeTE9IjEyIiB4Mj0iMTE4IiB5Mj0iMTM1IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMC43Ii8+PGxpbmUgeDE9IjEzNiIgeTE9IjEyIiB4Mj0iMTM2IiB5Mj0iMTM1IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMC43Ii8+PGxpbmUgeDE9IjE1NCIgeTE9IjEyIiB4Mj0iMTU0IiB5Mj0iMTM1IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMC43Ii8+PGxpbmUgeDE9IjE3MiIgeTE9IjEyIiB4Mj0iMTcyIiB5Mj0iMTM1IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMC43Ii8+PGxpbmUgeDE9IjIwIiB5MT0iMTE2IiB4Mj0iMTgwIiB5Mj0iMTE2IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMC43Ii8+PGxpbmUgeDE9IjIwIiB5MT0iOTgiIHgyPSIxODAiIHkyPSI5OCIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjAuNyIvPjxsaW5lIHgxPSIyMCIgeTE9IjgwIiB4Mj0iMTgwIiB5Mj0iODAiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIwLjciLz48bGluZSB4MT0iMjAiIHkxPSI2MiIgeDI9IjE4MCIgeTI9IjYyIiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMC43Ii8+PGxpbmUgeDE9IjIwIiB5MT0iNDQiIHgyPSIxODAiIHkyPSI0NCIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjAuNyIvPjxsaW5lIHgxPSIyMCIgeTE9IjI2IiB4Mj0iMTgwIiB5Mj0iMjYiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIwLjciLz4KICA8bGluZSB4MT0iMTUiIHkxPSI4MCIgeDI9IjE5NSIgeTI9IjgwIiBzdHJva2U9IiMxODE4MWIiIHN0cm9rZS13aWR0aD0iMS4yIiBtYXJrZXItZW5kPSJ1cmwoI2Fyci14KSIvPgogIDxsaW5lIHgxPSIxMDAiIHkxPSIxNDIiIHgyPSIxMDAiIHkyPSIxMCIgc3Ryb2tlPSIjMTgxODFiIiBzdHJva2Utd2lkdGg9IjEuMiIgbWFya2VyLWVuZD0idXJsKCNhcnIteSkiLz4KCiAgPHRleHQgeD0iMTk4IiB5PSI4NCIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj54PC90ZXh0PgogIDx0ZXh0IHg9IjkyIiB5PSIxMCIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj55PC90ZXh0PgogIDx0ZXh0IHg9IjkxIiB5PSI5MSIgZm9udC1zaXplPSI5LjUiIGZpbGw9IiMxODE4MWIiPk88L3RleHQ+CgogIDxwYXRoIGQ9Ik0gODIuMCw2Mi4wIEwgMTAwLjAsOTguMCBMIDExOC4wLDYyLjAgTCAxMTguMCw2Mi4wIEwgMTE3LjEsNjMuOCBMIDExNi4yLDY1LjUgTCAxMTUuMiw2Ny4xIEwgMTE0LjMsNjguNiBMIDExMy40LDcwLjAgTCAxMTIuNSw3MS40IEwgMTExLjUsNzIuNiBMIDExMC42LDczLjcgTCAxMDkuNyw3NC44IEwgMTA4LjgsNzUuNyBMIDEwNy44LDc2LjYgTCAxMDYuOSw3Ny4zIEwgMTA2LjAsNzguMCBMIDEwNS4xLDc4LjYgTCAxMDQuMiw3OS4wIEwgMTAzLjIsNzkuNCBMIDEwMi4zLDc5LjcgTCAxMDEuNCw3OS45IEwgMTAwLjUsODAuMCBMIDk5LjUsODAuMCBMIDk4LjYsNzkuOSBMIDk3LjcsNzkuNyBMIDk2LjgsNzkuNCBMIDk1LjgsNzkuMCBMIDk0LjksNzguNiBMIDk0LjAsNzguMCBMIDkzLjEsNzcuMyBMIDkyLjIsNzYuNiBMIDkxLjIsNzUuNyBMIDkwLjMsNzQuOCBMIDg5LjQsNzMuNyBMIDg4LjUsNzIuNiBMIDg3LjUsNzEuNCBMIDg2LjYsNzAuMCBMIDg1LjcsNjguNiBMIDg0LjgsNjcuMSBMIDgzLjgsNjUuNSBMIDgyLjksNjMuOCBMIDgyLjAsNjIuMCBaIiBmaWxsPSIjZTJlOGYwIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMC44Ii8+CiAgPHRleHQgeD0iOTYiIHk9IjgzIiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iNjAwIiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMxZTI5M2IiPkE8L3RleHQ+CgogIDxsaW5lIHgxPSI5NC42IiB5MT0iMTA4LjgiIHgyPSIxMjcuMCIgeTI9IjQ0LjAiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIxLjIiLz4KICA8bGluZSB4MT0iMTA1LjQiIHkxPSIxMDguOCIgeDI9IjczLjAiIHkyPSI0NC4wIiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iMS4yIi8+CgogIDxwYXRoIGQ9Ik0gNjkuNCwyOC4wIEwgNzAuNCwzMS40IEwgNzEuNSwzNC44IEwgNzIuNSwzOC4wIEwgNzMuNSw0MS4xIEwgNzQuNiw0NC4xIEwgNzUuNiw0Ny4wIEwgNzYuNyw0OS43IEwgNzcuNyw1Mi40IEwgNzguNyw1NC45IEwgNzkuOCw1Ny4zIEwgODAuOCw1OS41IEwgODEuOCw2MS43IEwgODIuOSw2My43IEwgODMuOSw2NS42IEwgODUuMCw2Ny40IEwgODYuMCw2OS4xIEwgODcuMCw3MC43IEwgODguMSw3Mi4xIEwgODkuMSw3My40IEwgOTAuMSw3NC42IEwgOTEuMiw3NS43IEwgOTIuMiw3Ni42IEwgOTMuMyw3Ny41IEwgOTQuMyw3OC4yIEwgOTUuMyw3OC44IEwgOTYuNCw3OS4zIEwgOTcuNCw3OS42IEwgOTguNCw3OS45IEwgOTkuNSw4MC4wIEwgMTAwLjUsODAuMCBMIDEwMS42LDc5LjkgTCAxMDIuNiw3OS42IEwgMTAzLjYsNzkuMyBMIDEwNC43LDc4LjggTCAxMDUuNyw3OC4yIEwgMTA2LjcsNzcuNSBMIDEwNy44LDc2LjYgTCAxMDguOCw3NS43IEwgMTA5LjksNzQuNiBMIDExMC45LDczLjQgTCAxMTEuOSw3Mi4xIEwgMTEzLjAsNzAuNyBMIDExNC4wLDY5LjEgTCAxMTUuMCw2Ny40IEwgMTE2LjEsNjUuNiBMIDExNy4xLDYzLjcgTCAxMTguMiw2MS43IEwgMTE5LjIsNTkuNSBMIDEyMC4yLDU3LjMgTCAxMjEuMyw1NC45IEwgMTIyLjMsNTIuNCBMIDEyMy4zLDQ5LjcgTCAxMjQuNCw0Ny4wIEwgMTI1LjQsNDQuMSBMIDEyNi41LDQxLjEgTCAxMjcuNSwzOC4wIEwgMTI4LjUsMzQuOCBMIDEyOS42LDMxLjQgTCAxMzAuNiwyOC4wIiBmaWxsPSJub25lIiBzdHJva2U9IiMwOTA5MGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KCiAgPHRleHQgeD0iMTM0IiB5PSI5MSIgZm9udC1zaXplPSI5IiBmaWxsPSIjMTgxODFiIj4yPC90ZXh0PgogIDx0ZXh0IHg9IjYwIiB5PSI5MSIgZm9udC1zaXplPSI5IiBmaWxsPSIjMTgxODFiIj4tMjwvdGV4dD4KICA8dGV4dCB4PSIxNzAiIHk9IjkxIiBmb250LXNpemU9IjkiIGZpbGw9IiMxODE4MWIiPjQ8L3RleHQ+CiAgPHRleHQgeD0iMjQiIHk9IjkxIiBmb250LXNpemU9IjkiIGZpbGw9IiMxODE4MWIiPi00PC90ZXh0PgogIDx0ZXh0IHg9IjEwNCIgeT0iNDciIGZvbnQtc2l6ZT0iOSIgZmlsbD0iIzE4MTgxYiI+MjwvdGV4dD4KICA8dGV4dCB4PSIxMDQiIHk9IjEwMSIgZm9udC1zaXplPSI5IiBmaWxsPSIjMTgxODFiIj4tMTwvdGV4dD4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSI5OCIgcj0iMiIgZmlsbD0iIzE4MTgxYiIvPgogIDx0ZXh0IHg9IjEyMS42IiB5PSIzMS40IiBmb250LXNpemU9IjEwLjUiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZmlsbD0iIzA5MDkwYiI+eT14wrI8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
      "id": 29,
      "source": "동아 교과서 146p 스스로 해결하기 1번",
      "tag": "기본",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\text{P}$의 시각 $t$에서의 속도 $v(t)$가 $v(t)=-t^2+2t$일 때, 다음을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "시각 $t=3$에서의 점 $\\text{P}$의 위치"
        },
        {
          "no": 2,
          "formula": "시각 $t=0$에서 $t=3$까지 점 $\\text{P}$가 움직인 거리"
        }
      ],
      "tip": "위치는 초기위치와 속도의 정적분 공식 $x(t)=x_0+\\int_0^t v(t)dt$로 구하고, 움직인 거리는 속력 $|v(t)|$를 적분합니다.",
      "answer": "(1) $0$, (2) $\\frac{8}{3}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "위치 $x(3) = 0 + \\int_0^3 (-t^2+2t) dt = [-\\frac{1}{3}t^3+t^2]_0^3 = -9+9 = 0$."
          },
          {
            "label": "(2)",
            "content": "$v(t) = -t(t-2)$이므로 $[0, 2]$에서 $v(t) \\ge 0$, $[2, 3]$에서 $v(t) \\le 0$입니다. 거리 $= \\int_0^2 (-t^2+2t) dt + \\int_2^3 (t^2-2t) dt = \\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$."
          }
        ]
      }
    },
    {
      "id": 30,
      "source": "동아 교과서 146p 스스로 해결하기 2번",
      "tag": "기본",
      "question": "좌표가 $2$인 점에서 출발하여 수직선 위를 움직이는 점 $\\text{P}$의 시각 $t$에서의 속도 $v(t)$가 $v(t)=1-2t$일 때, 점 $\\text{P}$가 원점에 도착할 때까지 움직인 거리를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "위치 공식 $x(t)=2+\\int_0^t (1-2s)ds = 2+t-t^2=0$을 풀어 원점 도달 시각을 찾고, 속도의 부호가 바뀌는 구간별로 나누어 거리를 계산합니다.",
      "answer": "$\\frac{5}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 원점 도달 시각 구하기]",
            "content": "$x(t) = 2 + \\int_0^t (1-2s) ds = 2+t-t^2 = 0 \\implies -(t-2)(t+1) = 0 \\implies t=2$ ($t>0$)."
          },
          {
            "label": "[2단계: 방향 전환 시각]",
            "content": "$v(t) = 1-2t = 0 \\implies t = \\frac{1}{2}$에서 속도의 부호가 양에서 음으로 바뀝니다."
          },
          {
            "label": "[3단계: 거리 적분]",
            "content": "$\\int_0^{1/2} (1-2t) dt + \\int_{1/2}^2 (2t-1) dt = [t-t^2]_0^{1/2} + [t^2-t]_{1/2}^2 = \\frac{1}{4} + \\frac{9}{4} = \\frac{5}{2}$입니다. $\\therefore \\frac{5}{2}$"
          }
        ]
      }
    },
    {
      "id": 31,
      "source": "동아 교과서 146p 스스로 해결하기 3번",
      "tag": "실생활",
      "question": "지면으로부터 수직 방향으로 비행하는 드론의 $t$분 후의 속도 $v(t)\\text{ m/min}$가 $v(t) = \\begin{cases} 10t & (0 \\le t \\le 3) \\\\ 6t^2-72t+192 & (3 \\le t \\le 6) \\end{cases}$ 일 때, 다음을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "드론이 최고 지점에 도달할 때의 지면으로부터의 높이"
        },
        {
          "no": 2,
          "formula": "비행을 시작한 후 $5$분 동안 드론이 움직인 거리"
        }
      ],
      "tip": "최고 지점은 속도가 $0$이 되는 순간($v(t)=0$)이며, 높이와 이동거리는 속도의 정적분 공식을 대입하여 계산합니다.",
      "answer": "(1) $59\\text{ m}$, (2) $69\\text{ m}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$3 \\le t \\le 6$에서 $v(t) = 6(t-4)(t-8) = 0 \\implies t=4$일 때 최고 지점입니다. 높이 $= \\int_0^3 10t dt + \\int_3^4 (6t^2-72t+192) dt = 45 + 14 = 59\\text{ m}$."
          },
          {
            "label": "(2)",
            "content": "$4 \\le t \\le 5$에서 $v(t) \\le 0$이므로 하강합니다. $4$분부터 $5$분까지 이동거리는 $\\int_4^5 -(6t^2-72t+192) dt = 10\\text{ m}$입니다. 따라서 총 거리는 $59+10 = 69\\text{ m}$입니다."
          }
        ]
      }
    },
    {
      "id": 32,
      "source": "동아 교과서 146p 스스로 해결하기 4번",
      "tag": "문제해결",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\text{P}$의 시각 $t$에서의 속도 $v(t)$의 그래프가 다음 관계를 만족시킨다: $\\int_0^4 v(t) dt = \\int_2^6 v(t) dt = 0$, $\\int_0^6 v(t) dt = 10$. 점 $\\text{P}$의 움직임에 대한 설명의 세 빈칸에 알맞은 수를 순서대로 구하시오.",
      "formula": "• 점 $\\text{P}$는 원점을 출발하여 양의 방향으로 움직이며, $t=2$일 때 좌표가 [ 빈칸① ]인 점에 위치한다.\n• $2 \\le t \\le$ [ 빈칸② ]일 때 점 $\\text{P}$는 음의 방향으로 움직인다.\n• $t=0$에서 $t=6$까지 점 $\\text{P}$가 움직인 거리는 [ 빈칸③ ]이다.",
      "subQuestions": [],
      "tip": "정적분의 덧셈 성질과 구간 분할을 대입하여 각 구간의 정적분 값과 넓이를 구하세요.",
      "answer": "$10, 4, 30$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $t=2$에서의 위치]",
            "content": "$\\int_0^6 v(t) dt = \\int_0^2 v(t) dt + \\int_2^6 v(t) dt = \\int_0^2 v(t) dt + 0 = 10 \\implies \\int_0^2 v(t) dt = 10$. 따라서 좌표는 $10$입니다."
          },
          {
            "label": "[2단계: 음의 방향 구간]",
            "content": "$\\int_0^4 v(t) dt = \\int_0^2 v(t) dt + \\int_2^4 v(t) dt = 10 + \\int_2^4 v(t) dt = 0 \\implies \\int_2^4 v(t) dt = -10$. 따라서 음의 방향 구간은 $2 \\le t \\le 4$입니다."
          },
          {
            "label": "[3단계: 총 이동거리]",
            "content": "$\\int_2^6 v(t) dt = -10 + \\int_4^6 v(t) dt = 0 \\implies \\int_4^6 v(t) dt = 10$. 총 이동거리는 $|10|+|-10|+|10| = 30$입니다. $\\therefore 10, 4, 30$"
          }
        ]
      },
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzAgMTUwIiB3aWR0aD0iMjMwIiBoZWlnaHQ9IjE1MCIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMTUiIHkxPSI3NSIgeDI9IjIwOCIgeTI9Ijc1IiBzdHJva2U9IiMxODE4MWIiIHN0cm9rZS13aWR0aD0iMS4yIiBtYXJrZXItZW5kPSJ1cmwoI2Fyci14KSIvPgogIDxsaW5lIHgxPSIzNSIgeTE9IjEyNSIgeDI9IjM1IiB5Mj0iMTUiIHN0cm9rZT0iIzE4MTgxYiIgc3Ryb2tlLXdpZHRoPSIxLjIiIG1hcmtlci1lbmQ9InVybCgjYXJyLXkpIi8+CiAgPHRleHQgeD0iMjEyIiB5PSI3OSIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj50PC90ZXh0PgogIDx0ZXh0IHg9IjI3IiB5PSIxMiIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj55PC90ZXh0PgogIDx0ZXh0IHg9IjI2IiB5PSI4NyIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+TzwvdGV4dD4KCiAgPHBhdGggZD0iTSAyOC4xLDg5LjIgTCAyOS40LDg2LjcgTCAzMC43LDg0LjEgTCAzMi4wLDgxLjQgTCAzMy4zLDc4LjcgTCAzNC42LDc1LjkgTCAzNS45LDczLjEgTCAzNy4yLDcwLjQgTCAzOC41LDY3LjcgTCAzOS44LDY1LjAgTCA0MS4wLDYyLjUgTCA0Mi4zLDYwLjAgTCA0My42LDU3LjYgTCA0NC45LDU1LjQgTCA0Ni4yLDUzLjMgTCA0Ny41LDUxLjUgTCA0OC44LDQ5LjcgTCA1MC4xLDQ4LjIgTCA1MS40LDQ2LjkgTCA1Mi43LDQ1LjggTCA1NC4wLDQ1LjAgTCA1NS4zLDQ0LjMgTCA1Ni42LDQzLjkgTCA1Ny45LDQzLjggTCA1OS4yLDQzLjkgTCA2MC41LDQ0LjIgTCA2MS44LDQ0LjggTCA2My4xLDQ1LjYgTCA2NC40LDQ2LjcgTCA2NS43LDQ4LjAgTCA2Ni45LDQ5LjQgTCA2OC4yLDUxLjEgTCA2OS41LDUzLjAgTCA3MC44LDU1LjAgTCA3Mi4xLDU3LjIgTCA3My40LDU5LjYgTCA3NC43LDYyLjAgTCA3Ni4wLDY0LjYgTCA3Ny4zLDY3LjIgTCA3OC42LDY5LjkgTCA3OS45LDcyLjcgTCA4MS4yLDc1LjQgTCA4Mi41LDc4LjIgTCA4My44LDgwLjkgTCA4NS4xLDgzLjYgTCA4Ni40LDg2LjIgTCA4Ny43LDg4LjcgTCA4OS4wLDkxLjEgTCA5MC4zLDkzLjQgTCA5MS42LDk1LjYgTCA5Mi44LDk3LjYgTCA5NC4xLDk5LjQgTCA5NS40LDEwMS4wIEwgOTYuNywxMDIuNCBMIDk4LjAsMTAzLjYgTCA5OS4zLDEwNC42IEwgMTAwLjYsMTA1LjQgTCAxMDEuOSwxMDUuOSBMIDEwMy4yLDEwNi4yIEwgMTA0LjUsMTA2LjIgTCAxMDUuOCwxMDYuMCBMIDEwNy4xLDEwNS41IEwgMTA4LjQsMTA0LjggTCAxMDkuNywxMDMuOSBMIDExMS4wLDEwMi43IEwgMTEyLjMsMTAxLjQgTCAxMTMuNiw5OS44IEwgMTE0LjksOTguMCBMIDExNi4yLDk2LjAgTCAxMTcuNSw5My45IEwgMTE4LjcsOTEuNyBMIDEyMC4wLDg5LjMgTCAxMjEuMyw4Ni44IEwgMTIyLjYsODQuMiBMIDEyMy45LDgxLjUgTCAxMjUuMiw3OC44IEwgMTI2LjUsNzYuMCBMIDEyNy44LDczLjMgTCAxMjkuMSw3MC41IEwgMTMwLjQsNjcuOCBMIDEzMS43LDY1LjIgTCAxMzMuMCw2Mi42IEwgMTM0LjMsNjAuMSBMIDEzNS42LDU3LjcgTCAxMzYuOSw1NS41IEwgMTM4LjIsNTMuNCBMIDEzOS41LDUxLjUgTCAxNDAuOCw0OS44IEwgMTQyLjEsNDguMyBMIDE0My40LDQ3LjAgTCAxNDQuNiw0NS45IEwgMTQ1LjksNDUuMCBMIDE0Ny4yLDQ0LjQgTCAxNDguNSw0NC4wIEwgMTQ5LjgsNDMuOCBMIDE1MS4xLDQzLjkgTCAxNTIuNCw0NC4yIEwgMTUzLjcsNDQuOCBMIDE1NS4wLDQ1LjYgTCAxNTYuMyw0Ni42IEwgMTU3LjYsNDcuOSBMIDE1OC45LDQ5LjQgTCAxNjAuMiw1MS4wIEwgMTYxLjUsNTIuOSBMIDE2Mi44LDU0LjkgTCAxNjQuMSw1Ny4xIEwgMTY1LjQsNTkuNSBMIDE2Ni43LDYxLjkgTCAxNjguMCw2NC41IEwgMTY5LjMsNjcuMSBMIDE3MC41LDY5LjggTCAxNzEuOCw3Mi41IEwgMTczLjEsNzUuMyBMIDE3NC40LDc4LjAgTCAxNzUuNyw4MC44IEwgMTc3LjAsODMuNSBMIDE3OC4zLDg2LjEgTCAxNzkuNiw4OC42IEwgMTgwLjksOTEuMCBMIDE4Mi4yLDkzLjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA5MDkwYiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgoKICA8dGV4dCB4PSI3OSIgeT0iODciIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMxODE4MWIiPjI8L3RleHQ+CiAgPHRleHQgeD0iMTI1IiB5PSI4NyIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+NDwvdGV4dD4KICA8dGV4dCB4PSIxNzEiIHk9Ijg3IiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTgxODFiIj42PC90ZXh0PgogIDx0ZXh0IHg9IjE0My4xMDAwMDAwMDAwMDAwMiIgeT0iNDEuNDAwMDAwMDAwMDAwMDA2IiBmb250LXNpemU9IjExIiBmb250LXN0eWxlPSJpdGFsaWMiIGZvbnQtd2VpZ2h0PSI1MDAiIGZpbGw9IiMwOTA5MGIiPnk9dih0KTwvdGV4dD4KPC9zdmc+"
    },
    {
      "id": 33,
      "source": "동아 교과서 146p 스스로 해결하기 5번",
      "tag": "연결",
      "question": "직선 도로 위를 $20\\text{ m/s}$의 속도로 달리는 자동차의 제동 거리를 측정하였다. 제동이 걸린 시점으로부터 $t$초 후의 속도 $v(t)\\text{ m/s}$는 마른 도로에서 $v(t)=20-4t$, 젖은 도로에서 $v(t)=20-4t+\\frac{1}{5}t^2$이고, 젖은 도로의 제동 거리는 마른 도로의 제동 거리의 $k$배이다. $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "자동차의 정지 시각($v(t)=0$)을 구한 뒤 속도를 정적분 공식으로 적분하여 제동 거리를 계산합니다.",
      "answer": "(단계1) $50\\text{ m}$, (단계2) $\\frac{200}{3}\\text{ m}$, (단계3) $\\frac{4}{3}$",
      "solution": {
        "steps": [
          {
            "label": "(단계1)",
            "content": "$20-4t=0 \\implies t=5$. 제동 거리는 $\\int_0^5 (20-4t) dt = [20t-2t^2]_0^5 = 100-50 = 50\\text{ m}$입니다."
          },
          {
            "label": "(단계2)",
            "content": "$20-4t+\\frac{1}{5}t^2 = \\frac{1}{5}(t-10)^2 = 0 \\implies t=10$. 제동 거리는 $\\int_0^{10} (20-4t+\\frac{1}{5}t^2) dt = [20t-2t^2+\\frac{1}{15}t^3]_0^{10} = \\frac{200}{3}\\text{ m}$입니다."
          },
          {
            "label": "(단계3)",
            "content": "$50k = \\frac{200}{3} \\implies k = \\frac{200}{150} = \\frac{4}{3}$입니다."
          }
        ]
      }
    },
    {
      "id": 34,
      "source": "동아 교과서 149p 단원 마무리 1번",
      "tag": "기본",
      "question": "함수 $f(x)$가 $\\int f(x) dx = 2x^3-3x+C$일 때, $f(2)$의 값을 구하시오. (단, $C$는 적분상수이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "양변을 미분하여 $f(x)=6x^2-3$을 구한 후 $x=2$를 대입합니다.",
      "answer": "$21$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 양변 미분]",
            "content": "양변을 $x$에 대하여 미분하면 $f(x) = (2x^3-3x+C)' = 6x^2-3$입니다."
          },
          {
            "label": "[2단계: 값 대입]",
            "content": "$x=2$를 대입하면 $f(2) = 6(2^2)-3 = 24-3 = 21$입니다."
          },
          {
            "label": "[3단계: 결론]",
            "content": "$\\therefore 21$"
          }
        ]
      }
    },
    {
      "id": 35,
      "source": "동아 교과서 149p 단원 마무리 2번",
      "tag": "기본",
      "question": "다항함수 $f(x)$가 모든 실수 $x$에 대하여 $\\int_{-1}^x f(t) dt = x^3+ax+6$을 만족시킬 때, $f(a)$의 값을 구하시오. (단, $a$는 상수이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "양변에 $x=-1$을 대입하여 $a$를 구하고, 양변을 미분하여 $f(x)$를 구합니다.",
      "answer": "$80$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 상수 $a$ 구하기]",
            "content": "양변에 $x=-1$을 대입하면 $0 = (-1)^3 - a + 6 = 5-a \\implies a = 5$입니다."
          },
          {
            "label": "[2단계: 함수 $f(x)$ 구하기]",
            "content": "양변을 $x$에 대하여 미분하면 $f(x) = 3x^2+a = 3x^2+5$입니다."
          },
          {
            "label": "[3단계: $f(a)$ 계산]",
            "content": "$f(a) = f(5) = 3(5^2)+5 = 75+5 = 80$입니다. $\\therefore 80$"
          }
        ]
      }
    },
    {
      "id": 36,
      "source": "동아 교과서 149p 단원 마무리 3번",
      "tag": "기본",
      "question": "다음 도형의 넓이를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "곡선 $y=x^3-3x$와 $x$축으로 둘러싸인 도형"
        },
        {
          "no": 2,
          "formula": "곡선 $y=x^2$과 직선 $y=-2x+3$으로 둘러싸인 도형"
        },
        {
          "no": 3,
          "formula": "두 곡선 $y=x^2,\\; y=\\frac{1}{2}x^2+1$로 둘러싸인 도형"
        }
      ],
      "tip": "교점을 구한 뒤 정적분 넓이 공식과 대칭성 성질을 대입하여 계산합니다.",
      "answer": "(1) $\\frac{9}{2}$, (2) $\\frac{32}{3}$, (3) $\\frac{4\\sqrt{2}}{3}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$x(x^2-3)=0$에서 교점은 $-\\sqrt{3}, 0, \\sqrt{3}$. 기함수 대칭성에 의해 넓이는 $2\\int_0^{\\sqrt{3}} (-x^3+3x) dx = 2[-\\frac{1}{4}x^4+\\frac{3}{2}x^2]_0^{\\sqrt{3}} = \\frac{9}{2}$."
          },
          {
            "label": "(2)",
            "content": "$x^2 = -2x+3 \\implies (x+3)(x-1)=0$에서 교점은 $-3, 1$. 넓이 공식 $\\frac{1}{6}(1-(-3))^3 = \\frac{64}{6} = \\frac{32}{3}$."
          },
          {
            "label": "(3)",
            "content": "$x^2 = \\frac{1}{2}x^2+1 \\implies x = \\pm\\sqrt{2}$. $y$축 대칭성에 의해 넓이는 $2\\int_0^{\\sqrt{2}} (1-\\frac{1}{2}x^2) dx = 2[x-\\frac{1}{6}x^3]_0^{\\sqrt{2}} = \\frac{4\\sqrt{2}}{3}$."
          }
        ]
      }
    },
    {
      "id": 37,
      "source": "동아 교과서 149p 단원 마무리 4번",
      "tag": "기본",
      "question": "좌표가 $1$인 점에서 출발하여 수직선 위를 움직이는 점 $\\text{P}$의 시각 $t$에서의 속도 $v(t)$가 $v(t)=6-2t$일 때, 다음을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "시각 $t=2$에서의 점 $\\text{P}$의 위치"
        },
        {
          "no": 2,
          "formula": "시각 $t=1$에서 $t=3$까지 점 $\\text{P}$의 위치의 변화량"
        }
      ],
      "tip": "초기위치 $x_0=1$에 속도의 정적분을 더하여 위치를 구하고, 위치의 변화량은 구간 $[1, 3]$에서의 정적분 공식으로 구합니다.",
      "answer": "(1) $9$, (2) $4$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "위치 $x(2) = 1 + \\int_0^2 (6-2t) dt = 1 + [6t-t^2]_0^2 = 1 + 8 = 9$."
          },
          {
            "label": "(2)",
            "content": "위치의 변화량 $= \\int_1^3 (6-2t) dt = [6t-t^2]_1^3 = (18-9) - (6-1) = 9 - 5 = 4$."
          }
        ]
      }
    },
    {
      "id": 38,
      "source": "동아 교과서 149p 단원 마무리 5번",
      "tag": "표준",
      "question": "다항함수 $f(x)$의 한 부정적분을 $F(x)$라고 하면 $F(x)=(x+1)f(x)-x^3-4x^2-5x+1$을 만족시킨다. $f(0)=2$일 때, $f(-1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "양변을 $x$에 대해 미분하여 곱의 미분법을 적용하고, $f'(x)$를 적분한 뒤 $f(0)=2$를 대입합니다.",
      "answer": "$-\\frac{3}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 양변 미분]",
            "content": "양변을 미분하면 $f(x) = f(x) + (x+1)f'(x) - 3x^2-8x-5 \\implies (x+1)f'(x) = (x+1)(3x+5)$이므로 $f'(x) = 3x+5$입니다."
          },
          {
            "label": "[2단계: $f(x)$ 구하기]",
            "content": "$f(x) = \\int (3x+5) dx = \\frac{3}{2}x^2+5x+C$. $f(0)=C=2$이므로 $f(x) = \\frac{3}{2}x^2+5x+2$입니다."
          },
          {
            "label": "[3단계: $f(-1)$ 계산]",
            "content": "$f(-1) = \\frac{3}{2}(-1)^2+5(-1)+2 = \\frac{3}{2}-5+2 = -\\frac{3}{2}$입니다. $\\therefore -\\frac{3}{2}$"
          }
        ]
      }
    },
    {
      "id": 39,
      "source": "동아 교과서 149p 단원 마무리 6번",
      "tag": "표준",
      "question": "임의의 실수 $x$에 대하여 함수 $f(x)$가 $\\int_1^x (x-t)f(t) dt = 2x^3-3x^2+1$을 만족시킬 때, $f(1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "좌변을 $x\\int_1^x f(t)dt - \\int_1^x tf(t)dt$로 전개한 뒤 양변을 두 번 미분하고 $x=1$을 대입합니다.",
      "answer": "$6$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 1차 미분]",
            "content": "$x\\int_1^x f(t)dt - \\int_1^x tf(t)dt = 2x^3-3x^2+1$의 양변을 미분하면 $\\int_1^x f(t)dt = 6x^2-6x$입니다."
          },
          {
            "label": "[2단계: 2차 미분]",
            "content": "양변을 한 번 더 미분하면 $f(x) = 12x-6$입니다."
          },
          {
            "label": "[3단계: $f(1)$ 계산]",
            "content": "$f(1) = 12(1)-6 = 6$입니다. $\\therefore 6$"
          }
        ]
      }
    },
    {
      "id": 40,
      "source": "동아 교과서 149p 단원 마무리 7번",
      "tag": "표준",
      "question": "임의의 실수 $x$에 대하여 $f(x)=3x^2+4x+3\\int_{-1}^1 f(x) dx$를 만족시키는 함수 $f(x)$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "상수 취급 $\\int_{-1}^1 f(x)dx = k$로 치환하고, 양변을 정적분 식에 대입하여 $k$의 값을 구합니다.",
      "answer": "$f(x)=3x^2+4x-\\frac{6}{5}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 치환하기]",
            "content": "$\\int_{-1}^1 f(x) dx = k$ (상수)라 하면 $f(x) = 3x^2+4x+3k$입니다."
          },
          {
            "label": "[2단계: $k$의 값 구하기]",
            "content": "$k = \\int_{-1}^1 (3x^2+4x+3k) dx = 2\\int_0^1 (3x^2+3k) dx = 2[x^3+3kx]_0^1 = 2(1+3k) = 2+6k \\implies 5k = -2 \\implies k = -\\frac{2}{5}$입니다."
          },
          {
            "label": "[3단계: 함수 완성]",
            "content": "$f(x) = 3x^2+4x+3(-\\frac{2}{5}) = 3x^2+4x-\\frac{6}{5}$입니다."
          }
        ]
      }
    },
    {
      "id": 41,
      "source": "동아 교과서 149p 단원 마무리 8번",
      "tag": "표준",
      "question": "오른쪽 그림과 같이 곡선 $y=-x^2+4x+k$와 $x$축 및 $y$축으로 둘러싸인 도형의 넓이를 $S_1$, 이 곡선과 $x$축으로 둘러싸인 도형의 넓이를 $S_2$라고 하자. $S_1:S_2=1:2$일 때, 상수 $k$의 값을 구하시오. (단, $-4<k<0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "곡선이 대칭축 $x=2$에 대하여 대칭이므로 $S_1 = \\frac{1}{2}S_2$에서 $\\int_0^2 (-x^2+4x+k) dx = 0$ 성질을 대입합니다.",
      "answer": "$-\\frac{8}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 대칭성과 넓이 관계]",
            "content": "포물선의 대칭축이 $x=2$이므로 $x=0$부터 $x=2$까지 $x$축 위쪽 영역의 넓이는 $\\frac{1}{2}S_2$입니다. $S_1 = \\frac{1}{2}S_2$이므로 음의 넓이 $S_1$과 양의 넓이 $\\frac{1}{2}S_2$가 상쇄되어 $\\int_0^2 (-x^2+4x+k) dx = 0$이 성립합니다."
          },
          {
            "label": "[2단계: 적분 계산]",
            "content": "$[-\\frac{1}{3}x^3+2x^2+kx]_0^2 = -\\frac{8}{3}+8+2k = \\frac{16}{3}+2k = 0$입니다."
          },
          {
            "label": "[3단계: $k$ 구하기]",
            "content": "$2k = -\\frac{16}{3} \\implies k = -\\frac{8}{3}$입니다. $\\therefore -\\frac{8}{3}$"
          }
        ]
      },
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAgMTUwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1MCIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMTIiIHkxPSI3NSIgeDI9IjE5NSIgeTI9Ijc1IiBzdHJva2U9IiMxODE4MWIiIHN0cm9rZS13aWR0aD0iMS4yIiBtYXJrZXItZW5kPSJ1cmwoI2Fyci14KSIvPgogIDxsaW5lIHgxPSIzNSIgeTE9IjEzNSIgeDI9IjM1IiB5Mj0iMTUiIHN0cm9rZT0iIzE4MTgxYiIgc3Ryb2tlLXdpZHRoPSIxLjIiIG1hcmtlci1lbmQ9InVybCgjYXJyLXkpIi8+CiAgPHRleHQgeD0iMTk4IiB5PSI3OSIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj54PC90ZXh0PgogIDx0ZXh0IHg9IjI3IiB5PSIxMiIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj55PC90ZXh0PgogIDx0ZXh0IHg9IjI2IiB5PSI4NiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+TzwvdGV4dD4KCiAgPHBhdGggZD0iTSAzNS4wLDc1LjAgTCAzNS4wLDExNC42IEwgMzUuNywxMTMuMCBMIDM2LjMsMTExLjQgTCAzNy4wLDEwOS44IEwgMzcuNywxMDguMyBMIDM4LjQsMTA2LjggTCAzOS4wLDEwNS4yIEwgMzkuNywxMDMuNyBMIDQwLjQsMTAyLjMgTCA0MS4xLDEwMC44IEwgNDEuNyw5OS40IEwgNDIuNCw5Ny45IEwgNDMuMSw5Ni41IEwgNDMuNyw5NS4xIEwgNDQuNCw5My44IEwgNDUuMSw5Mi40IEwgNDUuOCw5MS4xIEwgNDYuNCw4OS44IEwgNDcuMSw4OC41IEwgNDcuOCw4Ny4yIEwgNDguNCw4NS45IEwgNDkuMSw4NC43IEwgNDkuOCw4My41IEwgNTAuNSw4Mi4zIEwgNTEuMSw4MS4xIEwgNTEuOCw3OS45IEwgNTIuNSw3OC44IEwgNTMuMiw3Ny42IEwgNTMuOCw3Ni41IEwgNTQuNSw3NS40IEwgMzUuMCw3NS4wIFoiIGZpbGw9IiNlMmU4ZjAiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIwLjgiLz4KICA8cGF0aCBkPSJNIDU0LjUsNzUuMCBMIDU0LjUsNzUuNCBMIDU2LjYsNzIuMSBMIDU4LjcsNjkuMCBMIDYwLjcsNjYuMSBMIDYyLjgsNjMuMyBMIDY0LjksNjAuNyBMIDY3LjAsNTguMyBMIDY5LjAsNTYuMSBMIDcxLjEsNTQuMCBMIDczLjIsNTIuMSBMIDc1LjMsNTAuNCBMIDc3LjMsNDguOCBMIDc5LjQsNDcuNSBMIDgxLjUsNDYuMiBMIDgzLjYsNDUuMiBMIDg1LjcsNDQuMyBMIDg3LjcsNDMuNyBMIDg5LjgsNDMuMSBMIDkxLjksNDIuOCBMIDk0LjAsNDIuNiBMIDk2LjAsNDIuNiBMIDk4LjEsNDIuOCBMIDEwMC4yLDQzLjEgTCAxMDIuMyw0My43IEwgMTA0LjMsNDQuMyBMIDEwNi40LDQ1LjIgTCAxMDguNSw0Ni4yIEwgMTEwLjYsNDcuNSBMIDExMi43LDQ4LjggTCAxMTQuNyw1MC40IEwgMTE2LjgsNTIuMSBMIDExOC45LDU0LjAgTCAxMjEuMCw1Ni4xIEwgMTIzLjAsNTguMyBMIDEyNS4xLDYwLjcgTCAxMjcuMiw2My4zIEwgMTI5LjMsNjYuMSBMIDEzMS4zLDY5LjAgTCAxMzMuNCw3Mi4xIEwgMTM1LjUsNzUuNCBMIDEzNS41LDc1LjAgWiIgZmlsbD0iI2UyZThmMCIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjAuOCIvPgoKICA8dGV4dCB4PSI0My40IiB5PSI4OS40IiBmb250LXNpemU9IjEwLjUiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiMxZTI5M2IiPlPigoE8L3RleHQ+CiAgPHRleHQgeD0iOTAuNSIgeT0iNjQuMiIgZm9udC1zaXplPSIxMC41IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMWUyOTNiIj5T4oKCPC90ZXh0PgoKICA8cGF0aCBkPSJNIDI5LjAsMTI5LjcgTCAzMC42LDEyNS42IEwgMzIuMiwxMjEuNSBMIDMzLjgsMTE3LjUgTCAzNS40LDExMy43IEwgMzcuMCwxMDkuOSBMIDM4LjYsMTA2LjMgTCA0MC4yLDEwMi43IEwgNDEuOCw5OS4zIEwgNDMuNCw5NS45IEwgNDQuOSw5Mi43IEwgNDYuNSw4OS42IEwgNDguMSw4Ni41IEwgNDkuNyw4My42IEwgNTEuMyw4MC43IEwgNTIuOSw3OC4wIEwgNTQuNSw3NS40IEwgNTYuMSw3Mi44IEwgNTcuNyw3MC40IEwgNTkuMyw2OC4xIEwgNjAuOSw2NS45IEwgNjIuNSw2My43IEwgNjQuMSw2MS43IEwgNjUuNyw1OS44IEwgNjcuMyw1OC4wIEwgNjguOSw1Ni4zIEwgNzAuNSw1NC42IEwgNzIuMSw1My4xIEwgNzMuNyw1MS43IEwgNzUuMyw1MC40IEwgNzYuOCw0OS4yIEwgNzguNCw0OC4xIEwgODAuMCw0Ny4xIEwgODEuNiw0Ni4yIEwgODMuMiw0NS40IEwgODQuOCw0NC43IEwgODYuNCw0NC4xIEwgODguMCw0My42IEwgODkuNiw0My4yIEwgOTEuMiw0Mi45IEwgOTIuOCw0Mi43IEwgOTQuNCw0Mi42IEwgOTYuMCw0Mi42IEwgOTcuNiw0Mi43IEwgOTkuMiw0Mi45IEwgMTAwLjgsNDMuMyBMIDEwMi40LDQzLjcgTCAxMDQuMCw0NC4yIEwgMTA1LjYsNDQuOCBMIDEwNy4yLDQ1LjYgTCAxMDguNyw0Ni40IEwgMTEwLjMsNDcuMyBMIDExMS45LDQ4LjMgTCAxMTMuNSw0OS41IEwgMTE1LjEsNTAuNyBMIDExNi43LDUyLjAgTCAxMTguMyw1My41IEwgMTE5LjksNTUuMCBMIDEyMS41LDU2LjcgTCAxMjMuMSw1OC40IEwgMTI0LjcsNjAuMiBMIDEyNi4zLDYyLjIgTCAxMjcuOSw2NC4yIEwgMTI5LjUsNjYuNCBMIDEzMS4xLDY4LjYgTCAxMzIuNyw3MS4wIEwgMTM0LjMsNzMuNCBMIDEzNS45LDc2LjAgTCAxMzcuNSw3OC42IEwgMTM5LjEsODEuNCBMIDE0MC42LDg0LjMgTCAxNDIuMiw4Ny4yIEwgMTQzLjgsOTAuMyBMIDE0NS40LDkzLjUgTCAxNDcuMCw5Ni43IEwgMTQ4LjYsMTAwLjEgTCAxNTAuMiwxMDMuNiBMIDE1MS44LDEwNy4xIEwgMTUzLjQsMTEwLjggTCAxNTUuMCwxMTQuNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDkwOTBiIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPHRleHQgeD0iNjguMCIgeT0iNDAuODAwMDAwMDAwMDAwMDA0IiBmb250LXNpemU9IjEwLjUiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZmlsbD0iIzA5MDkwYiI+eT0teMKyKzR4K2s8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
      "id": 42,
      "source": "동아 교과서 150p 단원 마무리 9번",
      "tag": "표준",
      "question": "곡선 $y=x(x-1)(x+2)$와 $x$축 및 두 직선 $x=-1, x=1$로 둘러싸인 도형의 넓이를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$y=x^3+x^2-2x$의 근 $x=0$을 기준으로 구간 $[-1, 0]$과 $[0, 1]$로 나누어 정적분합니다.",
      "answer": "$\\frac{3}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 부호 조사]",
            "content": "$y=x^3+x^2-2x$는 $[-1, 0]$에서 $y \\ge 0$, $[0, 1]$에서 $y \\le 0$입니다."
          },
          {
            "label": "[2단계: 넓이 식 세우기]",
            "content": "$S = \\int_{-1}^0 (x^3+x^2-2x) dx + \\int_0^1 -(x^3+x^2-2x) dx$입니다."
          },
          {
            "label": "[3단계: 계산]",
            "content": "$[\\frac{1}{4}x^4+\\frac{1}{3}x^3-x^2]_{-1}^0 + [-\\frac{1}{4}x^4-\\frac{1}{3}x^3+x^2]_0^1 = \\frac{13}{12} + \\frac{5}{12} = \\frac{18}{12} = \\frac{3}{2}$입니다. $\\therefore \\frac{3}{2}$"
          }
        ]
      },
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAgMTUwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1MCIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMTUiIHkxPSI4MCIgeDI9IjE5NSIgeTI9IjgwIiBzdHJva2U9IiMxODE4MWIiIHN0cm9rZS13aWR0aD0iMS4yIiBtYXJrZXItZW5kPSJ1cmwoI2Fyci14KSIvPgogIDxsaW5lIHgxPSI5NSIgeTE9IjEzNSIgeDI9Ijk1IiB5Mj0iMTUiIHN0cm9rZT0iIzE4MTgxYiIgc3Ryb2tlLXdpZHRoPSIxLjIiIG1hcmtlci1lbmQ9InVybCgjYXJyLXkpIi8+CiAgPHRleHQgeD0iMTk4IiB5PSI4NCIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj54PC90ZXh0PgogIDx0ZXh0IHg9Ijg3IiB5PSIxMiIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj55PC90ZXh0PgogIDx0ZXh0IHg9Ijk4IiB5PSI5MSIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+TzwvdGV4dD4KCiAgPHBhdGggZD0iTSA2Mi4wLDgwLjAgTCA2Mi4wLDQyLjAgTCA2My4xLDQyLjcgTCA2NC4zLDQzLjUgTCA2NS40LDQ0LjQgTCA2Ni42LDQ1LjMgTCA2Ny43LDQ2LjMgTCA2OC44LDQ3LjQgTCA3MC4wLDQ4LjUgTCA3MS4xLDQ5LjcgTCA3Mi4yLDUxLjAgTCA3My40LDUyLjMgTCA3NC41LDUzLjYgTCA3NS43LDU1LjAgTCA3Ni44LDU2LjQgTCA3Ny45LDU3LjkgTCA3OS4xLDU5LjQgTCA4MC4yLDYwLjkgTCA4MS4zLDYyLjQgTCA4Mi41LDYzLjkgTCA4My42LDY1LjQgTCA4NC44LDY2LjkgTCA4NS45LDY4LjUgTCA4Ny4wLDcwLjAgTCA4OC4yLDcxLjUgTCA4OS4zLDczLjAgTCA5MC40LDc0LjQgTCA5MS42LDc1LjkgTCA5Mi43LDc3LjMgTCA5My45LDc4LjcgTCA5NS4wLDgwLjAgTCA5NS4wLDgwLjAgWiIgZmlsbD0iI2UyZThmMCIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjAuOCIvPgogIDxwYXRoIGQ9Ik0gOTUuMCw4MC4wIEwgOTUuMCw4MC4wIEwgOTYuMSw4MS4zIEwgOTcuMyw4Mi41IEwgOTguNCw4My43IEwgOTkuNiw4NC44IEwgMTAwLjcsODUuOSBMIDEwMS44LDg2LjkgTCAxMDMuMCw4Ny44IEwgMTA0LjEsODguNiBMIDEwNS4yLDg5LjQgTCAxMDYuNCw5MC4xIEwgMTA3LjUsOTAuNiBMIDEwOC43LDkxLjEgTCAxMDkuOCw5MS41IEwgMTEwLjksOTEuOCBMIDExMi4xLDkxLjkgTCAxMTMuMiw5Mi4wIEwgMTE0LjMsOTEuOSBMIDExNS41LDkxLjcgTCAxMTYuNiw5MS40IEwgMTE3LjgsOTAuOSBMIDExOC45LDkwLjMgTCAxMjAuMCw4OS42IEwgMTIxLjIsODguNyBMIDEyMi4zLDg3LjcgTCAxMjMuNCw4Ni41IEwgMTI0LjYsODUuMSBMIDEyNS43LDgzLjYgTCAxMjYuOSw4MS45IEwgMTI4LjAsODAuMCBMIDEyOC4wLDgwLjAgWiIgZmlsbD0iI2UyZThmMCIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjAuOCIvPgoKICA8bGluZSB4MT0iNjIiIHkxPSIzNi4zMDAwMDAwMDAwMDAwMDQiIHgyPSI2MiIgeTI9IjgwIiBzdHJva2U9IiM2NDc0OGIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMywyIi8+CiAgPGxpbmUgeDE9IjEyOCIgeTE9IjgwIiB4Mj0iMTI4IiB5Mj0iMTIzLjY5OTk5OTk5OTk5OTk5IiBzdHJva2U9IiM2NDc0OGIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMywyIi8+CgogIDxwYXRoIGQ9Ik0gMjIuNCwxMDYuOCBMIDIzLjksOTkuOSBMIDI1LjQsOTMuNiBMIDI2LjksODcuNiBMIDI4LjQsODIuMSBMIDI5LjksNzYuOSBMIDMxLjQsNzIuMSBMIDMyLjksNjcuNyBMIDM0LjQsNjMuNyBMIDM1LjksNjAuMSBMIDM3LjQsNTYuNyBMIDM4LjksNTMuOCBMIDQwLjQsNTEuMSBMIDQxLjksNDguNyBMIDQzLjUsNDYuNyBMIDQ1LjAsNDQuOSBMIDQ2LjUsNDMuNSBMIDQ4LjAsNDIuMyBMIDQ5LjUsNDEuMyBMIDUxLjAsNDAuNiBMIDUyLjUsNDAuMSBMIDU0LjAsMzkuOSBMIDU1LjUsMzkuOSBMIDU3LjAsNDAuMSBMIDU4LjUsNDAuNCBMIDYwLjAsNDEuMCBMIDYxLjUsNDEuNyBMIDYzLjAsNDIuNiBMIDY0LjUsNDMuNyBMIDY2LjAsNDQuOCBMIDY3LjUsNDYuMSBMIDY5LjAsNDcuNiBMIDcwLjUsNDkuMSBMIDcyLjAsNTAuNyBMIDczLjUsNTIuNSBMIDc1LjAsNTQuMyBMIDc2LjUsNTYuMSBMIDc4LjAsNTguMCBMIDc5LjUsNjAuMCBMIDgxLjAsNjIuMCBMIDgyLjYsNjQuMCBMIDg0LjEsNjYuMCBMIDg1LjYsNjguMCBMIDg3LjEsNzAuMCBMIDg4LjYsNzIuMCBMIDkwLjEsNzQuMCBMIDkxLjYsNzUuOSBMIDkzLjEsNzcuNyBMIDk0LjYsNzkuNSBMIDk2LjEsODEuMiBMIDk3LjYsODIuOSBMIDk5LjEsODQuNCBMIDEwMC42LDg1LjggTCAxMDIuMSw4Ny4xIEwgMTAzLjYsODguMyBMIDEwNS4xLDg5LjMgTCAxMDYuNiw5MC4yIEwgMTA4LjEsOTAuOSBMIDEwOS42LDkxLjUgTCAxMTEuMSw5MS44IEwgMTEyLjYsOTIuMCBMIDExNC4xLDkxLjkgTCAxMTUuNiw5MS43IEwgMTE3LjEsOTEuMiBMIDExOC42LDkwLjUgTCAxMjAuMSw4OS41IEwgMTIxLjcsODguMyBMIDEyMy4yLDg2LjggTCAxMjQuNyw4NS4wIEwgMTI2LjIsODIuOSBMIDEyNy43LDgwLjYgTCAxMjkuMiw3Ny45IEwgMTMwLjcsNzQuOSBMIDEzMi4yLDcxLjUgTCAxMzMuNyw2Ny44IEwgMTM1LjIsNjMuOCBMIDEzNi43LDU5LjQgTCAxMzguMiw1NC42IEwgMTM5LjcsNDkuNCBMIDE0MS4yLDQzLjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA5MDkwYiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgoKICA8dGV4dCB4PSIyMyIgeT0iOTIiIGZvbnQtc2l6ZT0iOS41IiBmaWxsPSIjMTgxODFiIj4tMjwvdGV4dD4KICA8dGV4dCB4PSI1OCIgeT0iOTIiIGZvbnQtc2l6ZT0iOS41IiBmaWxsPSIjMTgxODFiIj4tMTwvdGV4dD4KICA8dGV4dCB4PSIxMjciIHk9IjkyIiBmb250LXNpemU9IjkuNSIgZmlsbD0iIzE4MTgxYiI+MTwvdGV4dD4KICA8dGV4dCB4PSI5OC4zIiB5PSIzNC40IiBmb250LXNpemU9IjEwLjUiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZmlsbD0iIzA5MDkwYiI+eT14KHgtMSkoeCsyKTwvdGV4dD4KPC9zdmc+"
    },
    {
      "id": 43,
      "source": "동아 교과서 150p 단원 마무리 10번",
      "tag": "표준",
      "question": "두 곡선 $y=f(x)$, $y=g(x)$로 둘러싸인 도형을 각각 $S_1, S_2, S_3$이라고 할 때, 세 도형의 넓이가 각각 $5, 3, 6$이다. $\\int_2^6 \\{f(x)-g(x)\\} dx$의 값을 구하시오. (단, 구간 $[2, 6]$에서 $S_1, S_3$은 $g(x) \\ge f(x)$, $S_2$는 $f(x) \\ge g(x)$이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "각 영역의 정적분 값은 곡선의 상하 관계에 따라 부호가 결정되는 성질을 대입합니다.",
      "answer": "$-8$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 구간별 정적분 부호]",
            "content": "$S_1$ 영역에서 $g(x) \\ge f(x)$이므로 $\\int (f-g) dx = -S_1 = -5$. $S_2$ 영역에서 $f(x) \\ge g(x)$이므로 $\\int (f-g) dx = S_2 = 3$. $S_3$ 영역에서 $g(x) \\ge f(x)$이므로 $\\int (f-g) dx = -S_3 = -6$입니다."
          },
          {
            "label": "[2단계: 정적분 합산]",
            "content": "$\\int_2^6 \\{f(x)-g(x)\\} dx = -S_1 + S_2 - S_3 = -5 + 3 - 6 = -8$입니다."
          },
          {
            "label": "[3단계: 결론]",
            "content": "$\\therefore -8$"
          }
        ]
      },
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAgMTUwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1MCIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMTUiIHkxPSIxMTUiIHgyPSIxOTUiIHkyPSIxMTUiIHN0cm9rZT0iIzE4MTgxYiIgc3Ryb2tlLXdpZHRoPSIxLjIiIG1hcmtlci1lbmQ9InVybCgjYXJyLXgpIi8+CiAgPHRleHQgeD0iMTk4IiB5PSIxMTkiIGZvbnQtc2l6ZT0iMTEiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZmlsbD0iIzE4MTgxYiI+eDwvdGV4dD4KCiAgPHBhdGggZD0iTSAzOC4wLDYyLjUgTCAzOS4xLDU5LjkgTCA0MC4yLDU3LjMgTCA0MS4yLDU0LjggTCA0Mi4zLDUyLjQgTCA0My40LDUwLjAgTCA0NC41LDQ3LjggTCA0NS41LDQ1LjYgTCA0Ni42LDQzLjcgTCA0Ny43LDQxLjkgTCA0OC44LDQwLjMgTCA0OS44LDM5LjAgTCA1MC45LDM3LjggTCA1Mi4wLDM2LjkgTCA1My4xLDM2LjIgTCA1NC4xLDM1LjcgTCA1NS4yLDM1LjUgTCA1Ni4zLDM1LjYgTCA1Ny40LDM1LjkgTCA1OC40LDM2LjQgTCA1OS41LDM3LjIgTCA2MC42LDM4LjIgTCA2MS43LDM5LjQgTCA2Mi43LDQwLjkgTCA2My44LDQyLjYgTCA2NC45LDQ0LjQgTCA2Ni4wLDQ2LjQgTCA2Ny4wLDQ4LjYgTCA2OC4xLDUwLjkgTCA2OS4yLDUzLjMgTCA2OS4yLDU3LjEgTCA2OC4xLDU2LjggTCA2Ny4wLDU2LjUgTCA2Ni4wLDU2LjMgTCA2NC45LDU2LjAgTCA2My44LDU1LjcgTCA2Mi43LDU1LjQgTCA2MS43LDU1LjEgTCA2MC42LDU0LjkgTCA1OS41LDU0LjYgTCA1OC40LDU0LjMgTCA1Ny40LDU0LjAgTCA1Ni4zLDUzLjcgTCA1NS4yLDUzLjUgTCA1NC4xLDUzLjIgTCA1My4xLDUyLjkgTCA1Mi4wLDUyLjYgTCA1MC45LDUyLjQgTCA0OS44LDUyLjEgTCA0OC44LDUxLjggTCA0Ny43LDUxLjUgTCA0Ni42LDUxLjIgTCA0NS41LDUxLjAgTCA0NC41LDUwLjcgTCA0My40LDUwLjQgTCA0Mi4zLDUwLjEgTCA0MS4yLDQ5LjggTCA0MC4yLDQ5LjYgTCAzOS4xLDQ5LjMgTCAzOC4wLDQ5LjAgWiIgZmlsbD0iI2UyZThmMCIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjAuOCIvPgogIDxwYXRoIGQ9Ik0gNjkuMiw1Ny4xIEwgNzAuNSw1Ny40IEwgNzEuOSw1Ny44IEwgNzMuMiw1OC4xIEwgNzQuNiw1OC41IEwgNzUuOSw1OC44IEwgNzcuMyw1OS4yIEwgNzguNiw1OS41IEwgODAuMCw1OS45IEwgODEuMyw2MC4yIEwgODIuNiw2MC42IEwgODQuMCw2MC45IEwgODUuMyw2MS4zIEwgODYuNyw2MS42IEwgODguMCw2Mi4wIEwgODkuNCw2Mi4zIEwgOTAuNyw2Mi43IEwgOTIuMSw2My4wIEwgOTMuNCw2My40IEwgOTQuOCw2My43IEwgOTYuMSw2NC4xIEwgOTcuNCw2NC40IEwgOTguOCw2NC44IEwgMTAwLjEsNjUuMSBMIDEwMS41LDY1LjUgTCAxMDIuOCw2NS44IEwgMTA0LjIsNjYuMiBMIDEwNS41LDY2LjUgTCAxMDYuOSw2Ni45IEwgMTA4LjIsNjcuMiBMIDEwOC4yLDYyLjUgTCAxMDYuOSw2NS43IEwgMTA1LjUsNjguOSBMIDEwNC4yLDcyLjAgTCAxMDIuOCw3NS4wIEwgMTAxLjUsNzcuOCBMIDEwMC4xLDgwLjMgTCA5OC44LDgyLjcgTCA5Ny40LDg0LjcgTCA5Ni4xLDg2LjQgTCA5NC44LDg3LjcgTCA5My40LDg4LjcgTCA5Mi4xLDg5LjMgTCA5MC43LDg5LjUgTCA4OS40LDg5LjMgTCA4OC4wLDg4LjggTCA4Ni43LDg3LjggTCA4NS4zLDg2LjUgTCA4NC4wLDg0LjggTCA4Mi42LDgyLjkgTCA4MS4zLDgwLjYgTCA4MC4wLDc4LjEgTCA3OC42LDc1LjMgTCA3Ny4zLDcyLjMgTCA3NS45LDY5LjMgTCA3NC42LDY2LjEgTCA3My4yLDYyLjggTCA3MS45LDU5LjYgTCA3MC41LDU2LjQgTCA2OS4yLDUzLjMgWiIgZmlsbD0iI2UyZThmMCIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjAuOCIvPgogIDxwYXRoIGQ9Ik0gMTA4LjIsNjIuNSBMIDEwOS40LDU5LjcgTCAxMTAuNSw1Ni45IEwgMTExLjcsNTQuMiBMIDExMi45LDUxLjYgTCAxMTQuMCw0OS4wIEwgMTE1LjIsNDYuNyBMIDExNi40LDQ0LjUgTCAxMTcuNSw0Mi41IEwgMTE4LjcsNDAuNyBMIDExOS45LDM5LjIgTCAxMjEuMCwzNy45IEwgMTIyLjIsMzYuOSBMIDEyMy40LDM2LjEgTCAxMjQuNSwzNS43IEwgMTI1LjcsMzUuNSBMIDEyNi44LDM1LjYgTCAxMjguMCwzNi4xIEwgMTI5LjIsMzYuOCBMIDEzMC4zLDM3LjggTCAxMzEuNSwzOS4wIEwgMTMyLjcsNDAuNSBMIDEzMy44LDQyLjMgTCAxMzUuMCw0NC4yIEwgMTM2LjIsNDYuNCBMIDEzNy4zLDQ4LjggTCAxMzguNSw1MS4zIEwgMTM5LjcsNTMuOSBMIDE0MC44LDU2LjYgTCAxNDIuMCw1OS40IEwgMTQyLjAsNzYuMCBMIDE0MC44LDc1LjcgTCAxMzkuNyw3NS40IEwgMTM4LjUsNzUuMSBMIDEzNy4zLDc0LjggTCAxMzYuMiw3NC41IEwgMTM1LjAsNzQuMiBMIDEzMy44LDczLjkgTCAxMzIuNyw3My42IEwgMTMxLjUsNzMuMyBMIDEzMC4zLDczLjAgTCAxMjkuMiw3Mi43IEwgMTI4LjAsNzIuNCBMIDEyNi44LDcyLjEgTCAxMjUuNyw3MS44IEwgMTI0LjUsNzEuNSBMIDEyMy40LDcxLjIgTCAxMjIuMiw3MC45IEwgMTIxLjAsNzAuNiBMIDExOS45LDcwLjMgTCAxMTguNyw2OS45IEwgMTE3LjUsNjkuNiBMIDExNi40LDY5LjMgTCAxMTUuMiw2OS4wIEwgMTE0LjAsNjguNyBMIDExMi45LDY4LjQgTCAxMTEuNyw2OC4xIEwgMTEwLjUsNjcuOCBMIDEwOS40LDY3LjUgTCAxMDguMiw2Ny4yIFoiIGZpbGw9IiNlMmU4ZjAiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIwLjgiLz4KCiAgPHRleHQgeD0iNTMuNiIgeT0iNTkuNSIgZm9udC1zaXplPSIxMC41IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMWUyOTNiIj5T4oKBPC90ZXh0PgogIDx0ZXh0IHg9Ijg3LjQiIHk9IjY3LjAiIGZvbnQtc2l6ZT0iMTAuNSIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzFlMjkzYiI+U+KCgjwvdGV4dD4KICA8dGV4dCB4PSIxMjMuOCIgeT0iNTguMCIgZm9udC1zaXplPSIxMC41IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMWUyOTNiIj5T4oKDPC90ZXh0PgoKICA8bGluZSB4MT0iMzguMCIgeTE9IjYyLjUiIHgyPSIzOC4wIiB5Mj0iMTE1IiBzdHJva2U9IiMxODE4MWIiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxsaW5lIHgxPSIxNDIuMCIgeTE9Ijc2LjAiIHgyPSIxNDIuMCIgeTI9IjExNSIgc3Ryb2tlPSIjMTgxODFiIiBzdHJva2Utd2lkdGg9IjEiLz4KCiAgPHBhdGggZD0iTSAzMC4yLDc5LjkgTCAzMS40LDc3LjUgTCAzMi42LDc1LjAgTCAzMy44LDcyLjQgTCAzNS4wLDY5LjYgTCAzNi4yLDY2LjcgTCAzNy40LDYzLjggTCAzOC43LDYwLjkgTCAzOS45LDU4LjAgTCA0MS4xLDU1LjIgTCA0Mi4zLDUyLjQgTCA0My41LDQ5LjggTCA0NC43LDQ3LjMgTCA0NS45LDQ1LjAgTCA0Ny4xLDQyLjggTCA0OC4zLDQxLjAgTCA0OS41LDM5LjMgTCA1MC43LDM4LjAgTCA1MS45LDM2LjkgTCA1My4yLDM2LjEgTCA1NC40LDM1LjcgTCA1NS42LDM1LjUgTCA1Ni44LDM1LjcgTCA1OC4wLDM2LjEgTCA1OS4yLDM2LjkgTCA2MC40LDM4LjAgTCA2MS42LDM5LjQgTCA2Mi44LDQxLjAgTCA2NC4wLDQyLjkgTCA2NS4yLDQ1LjAgTCA2Ni40LDQ3LjMgTCA2Ny43LDQ5LjggTCA2OC45LDUyLjUgTCA3MC4xLDU1LjMgTCA3MS4zLDU4LjEgTCA3Mi41LDYxLjAgTCA3My43LDYzLjkgTCA3NC45LDY2LjggTCA3Ni4xLDY5LjcgTCA3Ny4zLDcyLjQgTCA3OC41LDc1LjEgTCA3OS43LDc3LjYgTCA4MC45LDc5LjkgTCA4Mi4xLDgyLjEgTCA4My40LDgzLjkgTCA4NC42LDg1LjYgTCA4NS44LDg3LjAgTCA4Ny4wLDg4LjEgTCA4OC4yLDg4LjggTCA4OS40LDg5LjMgTCA5MC42LDg5LjUgTCA5MS44LDg5LjQgTCA5My4wLDg4LjkgTCA5NC4yLDg4LjEgTCA5NS40LDg3LjEgTCA5Ni42LDg1LjcgTCA5Ny45LDg0LjEgTCA5OS4xLDgyLjIgTCAxMDAuMyw4MC4xIEwgMTAxLjUsNzcuOCBMIDEwMi43LDc1LjMgTCAxMDMuOSw3Mi43IEwgMTA1LjEsNjkuOSBMIDEwNi4zLDY3LjAgTCAxMDcuNSw2NC4xIEwgMTA4LjcsNjEuMiBMIDEwOS45LDU4LjMgTCAxMTEuMSw1NS41IEwgMTEyLjMsNTIuNyBMIDExMy42LDUwLjAgTCAxMTQuOCw0Ny41IEwgMTE2LjAsNDUuMiBMIDExNy4yLDQzLjEgTCAxMTguNCw0MS4xIEwgMTE5LjYsMzkuNSBMIDEyMC44LDM4LjEgTCAxMjIuMCwzNy4wIEwgMTIzLjIsMzYuMiBMIDEyNC40LDM1LjcgTCAxMjUuNiwzNS41IEwgMTI2LjgsMzUuNiBMIDEyOC4xLDM2LjEgTCAxMjkuMywzNi44IEwgMTMwLjUsMzcuOSBMIDEzMS43LDM5LjIgTCAxMzIuOSw0MC44IEwgMTM0LjEsNDIuNyBMIDEzNS4zLDQ0LjggTCAxMzYuNSw0Ny4xIEwgMTM3LjcsNDkuNiBMIDEzOC45LDUyLjIgTCAxNDAuMSw1NS4wIEwgMTQxLjMsNTcuOCBMIDE0Mi42LDYwLjcgTCAxNDMuOCw2My42IEwgMTQ1LjAsNjYuNSBMIDE0Ni4yLDY5LjQgTCAxNDcuNCw3Mi4yIEwgMTQ4LjYsNzQuOCBMIDE0OS44LDc3LjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA5MDkwYiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0gMzAuMiw0Ny4wIEwgMzEuNCw0Ny4zIEwgMzIuNiw0Ny42IEwgMzMuOCw0Ny45IEwgMzUuMCw0OC4yIEwgMzYuMiw0OC41IEwgMzcuNCw0OC45IEwgMzguNyw0OS4yIEwgMzkuOSw0OS41IEwgNDEuMSw0OS44IEwgNDIuMyw1MC4xIEwgNDMuNSw1MC40IEwgNDQuNyw1MC43IEwgNDUuOSw1MS4xIEwgNDcuMSw1MS40IEwgNDguMyw1MS43IEwgNDkuNSw1Mi4wIEwgNTAuNyw1Mi4zIEwgNTEuOSw1Mi42IEwgNTMuMiw1Mi45IEwgNTQuNCw1My4yIEwgNTUuNiw1My42IEwgNTYuOCw1My45IEwgNTguMCw1NC4yIEwgNTkuMiw1NC41IEwgNjAuNCw1NC44IEwgNjEuNiw1NS4xIEwgNjIuOCw1NS40IEwgNjQuMCw1NS44IEwgNjUuMiw1Ni4xIEwgNjYuNCw1Ni40IEwgNjcuNyw1Ni43IEwgNjguOSw1Ny4wIEwgNzAuMSw1Ny4zIEwgNzEuMyw1Ny42IEwgNzIuNSw1OC4wIEwgNzMuNyw1OC4zIEwgNzQuOSw1OC42IEwgNzYuMSw1OC45IEwgNzcuMyw1OS4yIEwgNzguNSw1OS41IEwgNzkuNyw1OS44IEwgODAuOSw2MC4xIEwgODIuMSw2MC41IEwgODMuNCw2MC44IEwgODQuNiw2MS4xIEwgODUuOCw2MS40IEwgODcuMCw2MS43IEwgODguMiw2Mi4wIEwgODkuNCw2Mi4zIEwgOTAuNiw2Mi43IEwgOTEuOCw2My4wIEwgOTMuMCw2My4zIEwgOTQuMiw2My42IEwgOTUuNCw2My45IEwgOTYuNiw2NC4yIEwgOTcuOSw2NC41IEwgOTkuMSw2NC45IEwgMTAwLjMsNjUuMiBMIDEwMS41LDY1LjUgTCAxMDIuNyw2NS44IEwgMTAzLjksNjYuMSBMIDEwNS4xLDY2LjQgTCAxMDYuMyw2Ni43IEwgMTA3LjUsNjcuMCBMIDEwOC43LDY3LjQgTCAxMDkuOSw2Ny43IEwgMTExLjEsNjguMCBMIDExMi4zLDY4LjMgTCAxMTMuNiw2OC42IEwgMTE0LjgsNjguOSBMIDExNi4wLDY5LjIgTCAxMTcuMiw2OS42IEwgMTE4LjQsNjkuOSBMIDExOS42LDcwLjIgTCAxMjAuOCw3MC41IEwgMTIyLjAsNzAuOCBMIDEyMy4yLDcxLjEgTCAxMjQuNCw3MS40IEwgMTI1LjYsNzEuOCBMIDEyNi44LDcyLjEgTCAxMjguMSw3Mi40IEwgMTI5LjMsNzIuNyBMIDEzMC41LDczLjAgTCAxMzEuNyw3My4zIEwgMTMyLjksNzMuNiBMIDEzNC4xLDczLjkgTCAxMzUuMyw3NC4zIEwgMTM2LjUsNzQuNiBMIDEzNy43LDc0LjkgTCAxMzguOSw3NS4yIEwgMTQwLjEsNzUuNSBMIDE0MS4zLDc1LjggTCAxNDIuNiw3Ni4xIEwgMTQzLjgsNzYuNSBMIDE0NS4wLDc2LjggTCAxNDYuMiw3Ny4xIEwgMTQ3LjQsNzcuNCBMIDE0OC42LDc3LjcgTCAxNDkuOCw3OC4wIiBmaWxsPSJub25lIiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KCiAgPHRleHQgeD0iMzYuMCIgeT0iMTI3IiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTgxODFiIj4yPC90ZXh0PgogIDx0ZXh0IHg9IjE0MC4wIiB5PSIxMjciIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMxODE4MWIiPjY8L3RleHQ+CiAgPHRleHQgeD0iMTMxLjYiIHk9IjMyLjUiIGZvbnQtc2l6ZT0iMTAuNSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMDkwOTBiIj55PWYoeCk8L3RleHQ+CiAgPHRleHQgeD0iMzAuMiIgeT0iODUuMCIgZm9udC1zaXplPSIxMC41IiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiM0NzU1NjkiPnk9Zyh4KTwvdGV4dD4KPC9zdmc+"
    },
    {
      "id": 44,
      "source": "동아 교과서 150p 단원 마무리 11번",
      "tag": "실생활",
      "question": "$30$초 동안 지면으로부터 수직으로 올라가 멈추는 열기구가 있다. 지면을 출발한 후 $t$초 일 때의 이 열기구의 속도 $v(t)\\text{ m/s}$가 $v(t) = \\begin{cases} \\frac{t}{10} & (0 \\le t \\le 20) \\\\ k-\\frac{t}{5} & (20 \\le t \\le 30) \\end{cases}$ 일 때, 열기구가 가장 높이 올라갔을 때의 높이를 구하시오. (단, $k$는 실수이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "$30$초에 멈추므로 $v(30)=0$에서 $k$를 구하고, 구간별 속도를 적분하여 최고 높이 공식을 계산합니다.",
      "answer": "$30\\text{ m}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $k$ 구하기]",
            "content": "$30$초 후 멈추므로 $v(30) = k - \\frac{30}{5} = k-6 = 0 \\implies k = 6$입니다."
          },
          {
            "label": "[2단계: 최고 높이 조건]",
            "content": "$0 \\le t \\le 30$에서 $v(t) \\ge 0$이므로 $t=30$일 때 최고 높이에 도달합니다."
          },
          {
            "label": "[3단계: 높이 계산]",
            "content": "$\\int_0^{20} \\frac{t}{10} dt + \\int_{20}^{30} (6-\\frac{t}{5}) dt = [\\frac{t^2}{20}]_0^{20} + [6t-\\frac{t^2}{10}]_{20}^{30} = 20 + 10 = 30\\text{ m}$입니다. $\\therefore 30\\text{ m}$"
          }
        ]
      }
    },
    {
      "id": 45,
      "source": "동아 교과서 150p 단원 마무리 12번",
      "tag": "발전",
      "question": "$f(1)=3, g(1)=2$인 두 다항함수 $f(x), g(x)$가 $\\{f(x)+g(x)\\}' = 2x+2$, $\\{f(x)g(x)\\}' = 6x^2+4$이고, $\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = \\infty$를 만족시킬 때, $f(-1)+g(2)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "양변을 부정적분하고 초기조건을 대입하여 $f+g$와 $fg$를 구한 뒤, 극한 성질로 두 함수의 차수를 판별하여 결정합니다.",
      "answer": "$7$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $f+g$, $fg$ 구하기]",
            "content": "$f(x)+g(x) = x^2+2x+C_1$에서 $f(1)+g(1)=5 \\implies C_1=2$, 즉 $f(x)+g(x)=x^2+2x+2$. $f(x)g(x) = 2x^3+4x+C_2$에서 $f(1)g(1)=6 \\implies C_2=0$, 즉 $f(x)g(x) = 2x(x^2+2)$입니다."
          },
          {
            "label": "[2단계: 두 함수 판별]",
            "content": "$(x^2+2) + 2x = x^2+2x+2$이므로 두 함수는 각각 $x^2+2$와 $2x$입니다. $\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = \\infty$이므로 차수가 큰 $f(x) = x^2+2$, $g(x) = 2x$입니다."
          },
          {
            "label": "[3단계: 값 계산]",
            "content": "$f(-1) = (-1)^2+2 = 3$, $g(2) = 2(2) = 4$이므로 $f(-1)+g(2) = 3+4 = 7$입니다. $\\therefore 7$"
          }
        ]
      }
    },
    {
      "id": 46,
      "source": "동아 교과서 150p 단원 마무리 13번",
      "tag": "발전",
      "question": "최고차항의 계수가 $1$이고 계수가 모두 자연수인 삼차함수 $f(x)$가 $\\int_0^2 f(x) dx = \\frac{44}{3}$, $\\int_{-1}^1 f(x) dx = \\frac{14}{3}$를 만족시킬 때, $f(1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$f(x)=x^3+ax^2+bx+c$ ($a,b,c$ 자연수)로 두고 정적분 공식에 대입하여 자연수 부정방정식을 풉니다.",
      "answer": "$6$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정적분 관계식 유도]",
            "content": "$f(x) = x^3+ax^2+bx+c$라 하면 $\\int_{-1}^1 f(x) dx = 2(\\frac{a}{3}+c) = \\frac{14}{3} \\implies a+3c = 7$. $a, c$가 자연수이므로 $(a, c) = (4, 1)$ 또는 $(1, 2)$입니다."
          },
          {
            "label": "[2단계: 자연수 조건으로 계수 결정]",
            "content": "$\\int_0^2 f(x) dx = 4 + \\frac{8}{3}a + 2b + 2c = \\frac{44}{3} \\implies 4a+3b+3c = 16$. $(a, c)=(4, 1)$ 대입 시 $3b = -3$ (부적합), $(a, c)=(1, 2)$ 대입 시 $4+3b+6=16 \\implies b=2$ (자연수 만족)입니다. 따라서 $f(x) = x^3+x^2+2x+2$입니다."
          },
          {
            "label": "[3단계: $f(1)$ 계산]",
            "content": "$f(1) = 1+1+2+2 = 6$입니다. $\\therefore 6$"
          }
        ]
      }
    },
    {
      "id": 47,
      "source": "동아 교과서 150p 단원 마무리 14번",
      "tag": "발전",
      "question": "두 곡선 $y=x^2, y=-3x^2+4a^2$으로 둘러싸인 도형의 넓이가 $\\frac{16}{3}$일 때, 실수 $a$의 값을 구하시오. (단, $a>0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "두 곡선의 교점 $x=\\pm a$를 구하고, 대칭성 성질을 활용하여 정적분 넓이 공식을 세웁니다.",
      "answer": "$1$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점 구하기]",
            "content": "$x^2 = -3x^2+4a^2 \\implies 4x^2 = 4a^2 \\implies x = \\pm a$ ($a>0$)입니다."
          },
          {
            "label": "[2단계: 넓이 식 세우기]",
            "content": "$y$축 대칭이므로 넓이는 $S = 2\\int_0^a (-4x^2+4a^2) dx = 2[-\\frac{4}{3}x^3+4a^2x]_0^a = \\frac{16}{3}a^3$입니다."
          },
          {
            "label": "[3단계: $a$ 구하기]",
            "content": "$\\frac{16}{3}a^3 = \\frac{16}{3} \\implies a^3 = 1 \\implies a = 1$입니다. $\\therefore 1$"
          }
        ]
      }
    },
    {
      "id": 48,
      "source": "동아 교과서 150p 단원 마무리 15번",
      "tag": "발전",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\text{P}$의 시각 $t$에서의 속도 $v(t)$가 $v(t)=t(t-2)(t-5)$이다. 점 $\\text{P}$가 처음에 출발한 방향과 반대 방향으로 움직인 거리를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "속도의 부호가 양에서 음으로 바뀌는 구간 $[2, 5]$를 파악하고, $|v(t)|$를 정적분 공식으로 계산합니다.",
      "answer": "$\\frac{63}{4}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 반대 방향 구간 판정]",
            "content": "$0 < t < 2$에서 $v(t) > 0$ (처음 방향), $2 < t < 5$에서 $v(t) < 0$ (반대 방향)입니다."
          },
          {
            "label": "[2단계: 거리 식 세우기]",
            "content": "반대 방향으로 움직인 거리는 $\\int_2^5 |v(t)| dt = \\int_2^5 (-t^3+7t^2-10t) dt$입니다."
          },
          {
            "label": "[3단계: 적분 계산]",
            "content": "$[-\\frac{1}{4}t^4+\\frac{7}{3}t^3-5t^2]_2^5 = (-\\frac{625}{4}+\\frac{875}{3}-125) - (-4+\\frac{56}{3}-20) = \\frac{63}{4}$입니다. $\\therefore \\frac{63}{4}$"
          }
        ]
      }
    },
    {
      "id": 49,
      "source": "동아 교과서 151p 단원 마무리 16번",
      "tag": "서술형",
      "question": "실수 전체의 집합에서 미분가능한 함수 $f(x) = \\begin{cases} 3x^2+a & (x \\le 1) \\\\ bx+5 & (x > 1) \\end{cases}$ 에 대하여 $\\int_0^2 f(x) dx$의 값을 구하시오. (단, $a, b$는 상수이다.)",
      "formula": "",
      "subQuestions": [],
      "tip": "$x=1$에서 연속과 미분가능성 조건을 대입하여 $a, b$를 구한 뒤, 구간을 $[0, 1]$과 $[1, 2]$로 나누어 적분합니다.",
      "answer": "$23$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $a, b$ 구하기]",
            "content": "$x=1$에서 연속이므로 $3+a = b+5 \\implies b = a-2$. 미분가능하므로 좌미분계수 $6(1)=6$, 우미분계수 $b$에서 $b=6$, 따라서 $a=8$입니다."
          },
          {
            "label": "[2단계: 구간 분할 적분]",
            "content": "$\\int_0^2 f(x) dx = \\int_0^1 (3x^2+8) dx + \\int_1^2 (6x+5) dx$입니다."
          },
          {
            "label": "[3단계: 계산]",
            "content": "$[x^3+8x]_0^1 + [3x^2+5x]_1^2 = 9 + (22-8) = 9 + 14 = 23$입니다. $\\therefore 23$"
          }
        ]
      }
    },
    {
      "id": 50,
      "source": "동아 교과서 151p 단원 마무리 17번",
      "tag": "서술형",
      "question": "모든 실수 $x$에 대하여 $a x^2 f(x) = x^3 + \\int_1^x (a x^2+t)f'(t) dt$를 만족시키는 다항함수 $f(x)$에 대하여 $f(0)=\\frac{3}{2}a$이다. $a$의 값을 구하시오. (단, $a>0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "$x=1$을 대입하여 $af(1)=1$을 얻고, 식을 전개 후 양변을 미분하여 $f(x)$를 구한 뒤 조건을 적용합니다.",
      "answer": "$\\frac{2}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 정리 및 대입]",
            "content": "$x=1$ 대입 시 $a f(1) = 1$. 전개하면 $a x^2 f(x) = x^3 + a x^2(f(x)-f(1)) + \\int_1^x t f'(t) dt \\implies \\int_1^x t f'(t) dt = -x^3 + x^2$입니다."
          },
          {
            "label": "[2단계: 미분하여 $f(x)$ 구하기]",
            "content": "양변을 미분하면 $x f'(x) = -3x^2+2x \\implies f'(x) = -3x+2$. 적분하면 $f(x) = -\\frac{3}{2}x^2+2x+C$. $f(0) = \\frac{3}{2}a$에서 $C = \\frac{3}{2}a$입니다."
          },
          {
            "label": "[3단계: $a$ 구하기]",
            "content": "$f(1) = \\frac{1}{2}+\\frac{3}{2}a$이므로 $a f(1) = a(\\frac{1}{2}+\\frac{3}{2}a) = 1 \\implies 3a^2+a-2 = (3a-2)(a+1) = 0$. $a>0$이므로 $a = \\frac{2}{3}$입니다. $\\therefore \\frac{2}{3}$"
          }
        ]
      }
    },
    {
      "id": 51,
      "source": "동아 교과서 151p 단원 마무리 18번",
      "tag": "서술형",
      "question": "곡선 $y=x^2+5$와 세 직선 $y=k, x=-2, x=2$로 둘러싸인 도형의 넓이가 최소가 되는 상수 $k$의 값을 구하시오. (단, $5 \\le k \\le 9$)",
      "formula": "",
      "subQuestions": [],
      "tip": "교점 $x=\\pm\\sqrt{k-5}$를 $x=\\pm a$로 치환하여 넓이 함수 $S(a)$를 세우고, 미분을 통해 넓이가 최소가 되는 $a$와 $k$를 구합니다.",
      "answer": "$6$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 넓이 함수 식 세우기]",
            "content": "$a = \\sqrt{k-5}$ ($0 \\le a \\le 2$)라 두면 넓이는 $S(a) = 2\\int_0^a (a^2-x^2) dx + 2\\int_a^2 (x^2-a^2) dx = \\frac{4}{3}(2a^3-3a^2+4)$입니다."
          },
          {
            "label": "[2단계: 도함수로 극소 찾기]",
            "content": "$S'(a) = \\frac{4}{3}(6a^2-6a) = 8a(a-1) = 0$에서 구간 $[0, 2]$ 내의 극솟값은 $a=1$일 때입니다."
          },
          {
            "label": "[3단계: $k$ 구하기]",
            "content": "$a = \\sqrt{k-5} = 1 \\implies k-5 = 1 \\implies k = 6$입니다. $\\therefore 6$"
          }
        ]
      }
    },
    {
      "id": 52,
      "source": "동아 교과서 151p 단원 마무리 19번",
      "tag": "서술형",
      "question": "고속열차가 출발하여 $2\\text{ km}$를 달리는 동안은 시각 $t$분에서의 속도 $v(t)\\text{ km/min}$가 $v(t)=\\frac{1}{6}t^2+\\frac{1}{9}t$이고 그 이후로는 속도가 일정하다. 출발 후 $6$분 동안 이 열차가 달린 거리를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "이동거리 정적분 공식으로 $2\\text{ km}$ 달린 시각 $t=a$를 구하고, 일정해진 속도로 남은 시간 동안 달린 거리를 합산합니다.",
      "answer": "$\\frac{15}{2}\\text{ km}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: $2\\text{ km}$ 도달 시각 구하기]",
            "content": "$\\int_0^a (\\frac{1}{6}t^2+\\frac{1}{9}t) dt = [\\frac{1}{18}t^3+\\frac{1}{18}t^2]_0^a = \\frac{1}{18}(a^3+a^2) = 2 \\implies a^3+a^2-36 = (a-3)(a^2+4a+12) = 0 \\implies a = 3$분입니다."
          },
          {
            "label": "[2단계: 등속 구간 속도]",
            "content": "$t \\ge 3$일 때의 일정한 속도는 $v(3) = \\frac{1}{6}(9)+\\frac{1}{9}(3) = \\frac{3}{2}+\\frac{1}{3} = \\frac{11}{6}\\text{ km/min}$입니다."
          },
          {
            "label": "[3단계: 총 이동거리]",
            "content": "출발 후 $6$분 동안 달린 총 거리는 $2 + \\int_3^6 \\frac{11}{6} dt = 2 + \\frac{11}{6}(3) = 2 + \\frac{11}{2} = \\frac{15}{2}\\text{ km}$입니다. $\\therefore \\frac{15}{2}\\text{ km}$"
          }
        ]
      }
    }
  ]
};
