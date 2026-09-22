window.WORKSHEET_DATA = {
  "meta": {
    "title": "미적분 I / 수학 II - III. 적분",
    "subtitle": "천재(홍) 교과서 실전 핵심 (본문 핵심 + 대단원 평가하기 전수 수록)",
    "student": "",
    "date": "2026. 09. 21 (월)",
    "cheer": "완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "천재(홍) 교과서 126p 문제 01번",
      "tag": "기초",
      "question": "다음 부정적분을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int 3 \\, dx"
        },
        {
          "no": 2,
          "formula": "\\int 4x^3 \\, dx"
        }
      ],
      "tip": "부정적분 공식: 미분의 역연산으로 $\\int k \\, dx = kx+C$, $\\int (x^4)' \\, dx = x^4+C$임을 이용합니다.",
      "answer": "(1) 3x + C, (2) x^4 + C",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 적용] $3$의 부정적분은 $3x+C$ $\\therefore$ **$3x+C$**"
          },
          {
            "label": "(2)",
            "content": "[공식 적용] $(x^4)' = 4x^3$이므로 $\\int 4x^3 \\, dx = x^4+C$ $\\therefore$ **$x^4+C$**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "천재(홍) 교과서 128p 문제 02번",
      "tag": "기초",
      "question": "다음 부정적분을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int x^4 \\, dx"
        },
        {
          "no": 2,
          "formula": "\\int x^7 \\, dx"
        }
      ],
      "tip": "거듭제곱의 부정적분 공식: $\\int x^n \\, dx = \\frac{1}{n+1}x^{n+1}+C$에 대입하여 계산합니다.",
      "answer": "(1) (1/5)x^5 + C, (2) (1/8)x^8 + C",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 대입] $\\frac{1}{4+1}x^{4+1}+C = \\frac{1}{5}x^5+C$ $\\therefore$ **$\\frac{1}{5}x^5+C$**"
          },
          {
            "label": "(2)",
            "content": "[공식 대입] $\\frac{1}{7+1}x^{7+1}+C = \\frac{1}{8}x^8+C$ $\\therefore$ **$\\frac{1}{8}x^8+C$**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "천재(홍) 교과서 129p 문제 03번",
      "tag": "기본",
      "question": "다음 부정적분을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int (3x^2-4x+1) \\, dx"
        },
        {
          "no": 2,
          "formula": "\\int (x+1)(x-2) \\, dx"
        }
      ],
      "tip": "부정적분의 성질: 각 항별로 적분 공식을 적용하고, 곱으로 된 식은 먼저 전개한 후 적분합니다.",
      "answer": "(1) x^3 - 2x^2 + x + C, (2) (1/3)x^3 - (1/2)x^2 - 2x + C",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[각 항 적분] $3\\left(\\frac{1}{3}x^3\\right) - 4\\left(\\frac{1}{2}x^2\\right) + x + C = x^3 - 2x^2 + x + C$ $\\therefore$ **$x^3-2x^2+x+C$**"
          },
          {
            "label": "(2)",
            "content": "[전개 후 적분] $(x+1)(x-2) = x^2-x-2$. 적분하면 $\\frac{1}{3}x^3 - \\frac{1}{2}x^2 - 2x + C$ $\\therefore$ **$\\frac{1}{3}x^3 - \\frac{1}{2}x^2 - 2x + C$**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "천재(홍) 교과서 130p 문제 04번",
      "tag": "기초",
      "question": "다음 식을 계산하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\frac{d}{dx} \\int (x^2-3x+5) \\, dx"
        },
        {
          "no": 2,
          "formula": "\\int \\left\\{ \\frac{d}{dx} (2x^3+x) \\right\\} dx"
        }
      ],
      "tip": "미분과 적분의 관계 성질: 적분 후 미분하면 피적분함수 그대로 나오고, 미분 후 적분하면 적분상수 $C$가 붙습니다.",
      "answer": "(1) x^2 - 3x + 5, (2) 2x^3 + x + C",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[성질 적용] 적분한 후 미분하므로 원래 함수인 $x^2-3x+5$가 된다. $\\therefore$ **$x^2-3x+5$**"
          },
          {
            "label": "(2)",
            "content": "[성질 적용] 미분한 후 적분하므로 적분상수 $C$가 붙어 $2x^3+x+C$가 된다. $\\therefore$ **$2x^3+x+C$**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "천재(홍) 교과서 133p 문제 01번",
      "tag": "기초",
      "question": "다음 정적분의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int_1^3 2x \\, dx"
        },
        {
          "no": 2,
          "formula": "\\int_{-1}^2 3x^2 \\, dx"
        }
      ],
      "tip": "미적분의 기본정리 공식: $\\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b)-F(a)$에 위끝과 아래끝을 대입합니다.",
      "answer": "(1) 8, (2) 9",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[부정적분 및 대입] $[x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$ $\\therefore$ **8**"
          },
          {
            "label": "(2)",
            "content": "[부정적분 및 대입] $[x^3]_{-1}^2 = 2^3 - (-1)^3 = 8 - (-1) = 9$ $\\therefore$ **9**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "천재(홍) 교과서 136p 문제 01번",
      "tag": "기본",
      "question": "다음 정적분의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int_{-1}^2 (3x^2-2x) \\, dx"
        },
        {
          "no": 2,
          "formula": "\\int_0^1 (4x^3+6x^2-1) \\, dx"
        }
      ],
      "tip": "다항함수의 정적분 공식: 각 항별로 부정적분을 구한 뒤 위끝과 아래끝을 대입하여 뺍니다.",
      "answer": "(1) 6, (2) 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[적분 계산] $[x^3-x^2]_{-1}^2 = (8-4) - (-1-1) = 4 - (-2) = 6$ $\\therefore$ **6**"
          },
          {
            "label": "(2)",
            "content": "[적분 계산] $[x^4+2x^3-x]_0^1 = (1+2-1) - 0 = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "천재(홍) 교과서 137p 문제 02번",
      "tag": "기본",
      "question": "다음 식을 간단히 하여 정적분의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\int_1^2 (2x+3) \\, dx + \\int_2^4 (2x+3) \\, dx"
        }
      ],
      "tip": "정적분의 성질: 피적분함수가 같을 때 구간 연결 성질 $\\int_a^c f(x)dx + \\int_c^b f(x)dx = \\int_a^b f(x)dx$를 적용합니다.",
      "answer": "24",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 구간 연결 성질]",
            "content": "$\\int_1^2 (2x+3) \\, dx + \\int_2^4 (2x+3) \\, dx = \\int_1^4 (2x+3) \\, dx$"
          },
          {
            "label": "[2단계: 부정적분 계산]",
            "content": "$[x^2+3x]_1^4$"
          },
          {
            "label": "[3단계: 위끝·아래끝 대입]",
            "content": "$(4^2+3 \\times 4) - (1^2+3 \\times 1) = (16+12) - (1+3) = 28 - 4 = 24$ $\\therefore$ **24**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "천재(홍) 교과서 138p 문제 03번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} 2x & (x \\ge 1) \\\\ 3x^2 & (x < 1) \\end{cases}$ 에 대하여 $\\int_0^2 f(x) \\, dx$ 의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "구간별로 정의된 함수는 기준점 $x=1$을 중심으로 적분 구간을 $[0, 1]$과 $[1, 2]$로 나누어 각각 대입합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 구간 나누기]",
            "content": "$\\int_0^2 f(x) \\, dx = \\int_0^1 3x^2 \\, dx + \\int_1^2 2x \\, dx$"
          },
          {
            "label": "[2단계: 각각 적분]",
            "content": "$[x^3]_0^1 + [x^2]_1^2$"
          },
          {
            "label": "[3단계: 대입 및 계산]",
            "content": "$(1 - 0) + (4 - 1) = 1 + 3 = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "천재(홍) 교과서 139p 문제 04번",
      "tag": "기본",
      "question": "정적분 $\\int_0^3 |x-1| \\, dx$ 의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "절댓값 기호가 포함된 식은 절댓값 안이 $0$이 되는 $x=1$을 기준으로 구간을 나누어 부호를 결정합니다.",
      "answer": "5/2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 절댓값 구간 분리]",
            "content": "$\\int_0^3 |x-1| \\, dx = \\int_0^1 -(x-1) \\, dx + \\int_1^3 (x-1) \\, dx$"
          },
          {
            "label": "[2단계: 각각 적분]",
            "content": "$[- \\frac{1}{2}x^2 + x]_0^1 + [\\frac{1}{2}x^2 - x]_1^3$"
          },
          {
            "label": "[3단계: 대입 및 계산]",
            "content": "$(-\\frac{1}{2}+1) + \\left((\\frac{9}{2}-3) - (\\frac{1}{2}-1)\\right) = \\frac{1}{2} + \\left(\\frac{3}{2} - (-\\frac{1}{2})\\right) = \\frac{1}{2} + 2 = \\frac{5}{2}$ $\\therefore$ **$\\frac{5}{2}$**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "천재(홍) 교과서 141p 문제 01번",
      "tag": "기본",
      "question": "다음 식을 $x$에 대하여 미분하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\frac{d}{dx} \\int_1^x (t^2-2t+3) \\, dt"
        },
        {
          "no": 2,
          "formula": "\\frac{d}{dx} \\int_{-2}^x (3t^3+t-1) \\, dt"
        }
      ],
      "tip": "정적분으로 정의된 함수의 미분 공식: $\\frac{d}{dx} \\int_a^x f(t) \\, dt = f(x)$를 적용합니다.",
      "answer": "(1) x^2 - 2x + 3, (2) 3x^3 + x - 1",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[미분 공식 적용] $t$ 자리에 $x$를 대입하여 $x^2-2x+3$ $\\therefore$ **$x^2-2x+3$**"
          },
          {
            "label": "(2)",
            "content": "[미분 공식 적용] $t$ 자리에 $x$를 대입하여 $3x^3+x-1$ $\\therefore$ **$3x^3+x-1$**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "천재(홍) 교과서 142p 문제 02번",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 2} \\frac{1}{x-2} \\int_2^x (t^3-3t+1) \\, dt"
        },
        {
          "no": 2,
          "formula": "\\lim_{h \\to 0} \\frac{1}{h} \\int_1^{1+h} (2t^2+t-4) \\, dt"
        }
      ],
      "tip": "정적분과 미분계수의 관계 공식: $\\lim_{x \\to a}\\frac{1}{x-a}\\int_a^x f(t)dt = f(a)$에 선 대입합니다.",
      "answer": "(1) 3, (2) -1",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] $f(t) = t^3-3t+1$이라 두면 주어진 식은 $f(2)$이다. $f(2) = 2^3-3(2)+1 = 8-6+1 = 3$ $\\therefore$ **3**"
          },
          {
            "label": "(2)",
            "content": "[선 대입] $g(t) = 2t^2+t-4$라 두면 주어진 식은 $g(1)$이다. $g(1) = 2(1)^2+1-4 = -1$ $\\therefore$ **-1**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "천재(홍) 교과서 150p 문제 01번",
      "tag": "기본",
      "question": "곡선 $y = x^2-2x$ 와 $x$축으로 둘러싸인 도형의 넓이를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "곡선과 $x$축 사이의 넓이 공식: $x$축 아래에 있는 구간 $[0, 2]$에서 $-f(x)$를 적분합니다.",
      "answer": "4/3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점 구하기]",
            "content": "$x^2-2x = x(x-2) = 0 \\implies x=0, x=2$"
          },
          {
            "label": "[2단계: 넓이 적분 식 수립]",
            "content": "구간 $[0, 2]$에서 $y \\le 0$이므로 $S = \\int_0^2 -(x^2-2x) \\, dx = \\int_0^2 (-x^2+2x) \\, dx$"
          },
          {
            "label": "[3단계: 적분 계산]",
            "content": "$[-\\frac{1}{3}x^3+x^2]_0^2 = -\\frac{8}{3}+4 = \\frac{4}{3}$ $\\therefore$ **$\\frac{4}{3}$**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "천재(홍) 교과서 151p 문제 02번",
      "tag": "기본",
      "question": "곡선 $y = x^2$ 과 직선 $y = x+2$ 로 둘러싸인 도형의 넓이를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "두 곡선 사이의 넓이: 교점의 $x$좌표를 구한 후 (위쪽 식) - (아래쪽 식)을 적분 공식에 대입합니다.",
      "answer": "9/2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점 계산]",
            "content": "$x^2 = x+2 \\implies x^2-x-2 = (x-2)(x+1) = 0 \\implies x=-1, x=2$"
          },
          {
            "label": "[2단계: 적분 식 수립]",
            "content": "구간 $[-1, 2]$에서 $x+2 \\ge x^2$이므로 $S = \\int_{-1}^2 (x+2-x^2) \\, dx$"
          },
          {
            "label": "[3단계: 적분 계산]",
            "content": "$[\\frac{1}{2}x^2+2x-\\frac{1}{3}x^3]_{-1}^2 = (2+4-\\frac{8}{3}) - (\\frac{1}{2}-2+\\frac{1}{3}) = \\frac{10}{3} - (-\\frac{7}{6}) = \\frac{27}{6} = \\frac{9}{2}$ $\\therefore$ **$\\frac{9}{2}$**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "천재(홍) 교과서 154p 문제 01번",
      "tag": "기본",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도가 $v(t) = 3t^2-6t$ 일 때, 시각 $t=3$ 에서의 점 $\\mathrm{P}$의 위치와 $t=1$ 에서 $t=3$ 까지 점 $\\mathrm{P}$의 위치의 변화량을 각각 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "위치 공식 $x(t) = x_0 + \\int_0^t v(u)du$, 위치의 변화량 공식 $\\Delta x = \\int_{t_1}^{t_2} v(t)dt$에 대입합니다.",
      "answer": "(1) 위치: 0, (2) 위치의 변화량: 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[위치 적분] $x(3) = 0 + \\int_0^3 (3t^2-6t) \\, dt = [t^3-3t^2]_0^3 = 27 - 27 = 0$ $\\therefore$ **0**"
          },
          {
            "label": "(2)",
            "content": "[위치의 변화량] $\\int_1^3 (3t^2-6t) \\, dt = [t^3-3t^2]_1^3 = 0 - (1-3) = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "천재(홍) 교과서 155p 문제 02번",
      "tag": "기본",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도가 $v(t) = 3t^2-6t$ 일 때, 시각 $t=1$ 에서 $t=3$ 까지 점 $\\mathrm{P}$가 움직인 거리를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "움직인 거리 공식: 속력의 정적분 $s = \\int_{t_1}^{t_2} |v(t)| \\, dt$를 이용하여 속도의 부호가 바뀌는 구간을 나눕니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 부호 구간 나누기]",
            "content": "$v(t) = 3t(t-2)$. $1 \\le t \\le 2$에서 $v(t) \\le 0$, $2 \\le t \\le 3$에서 $v(t) \\ge 0$"
          },
          {
            "label": "[2단계: 절댓값 적분 식]",
            "content": "$s = \\int_1^2 -(3t^2-6t) \\, dt + \\int_2^3 (3t^2-6t) \\, dt$"
          },
          {
            "label": "[3단계: 계산]",
            "content": "$[-t^3+3t^2]_1^2 + [t^3-3t^2]_2^3 = ((-8+12)-(-1+3)) + ((27-27)-(8-12)) = (4-2) + (0 - (-4)) = 2 + 4 = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "천재(홍) 교과서 144p 중단원 05번",
      "tag": "기본",
      "question": "등식 $\\int_1^x f(t) \\, dt = x^2+ax-3$ 이 모든 실수 $x$에 대하여 성립할 때, 상수 $a$의 값과 $f(2)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 선 대입 $x=1$을 하여 $a$를 구하고, 2단계: 양변을 $x$에 대하여 미분하여 $f(x)$를 구합니다.",
      "answer": "a = 2, f(2) = 6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=1 선 대입]",
            "content": "$\\int_1^1 f(t) \\, dt = 0 \\implies 1^2+a-3 = 0 \\implies a-2 = 0 \\implies a = 2$"
          },
          {
            "label": "[2단계: 양변 미분]",
            "content": "$\\frac{d}{dx}\\int_1^x f(t) \\, dt = \\frac{d}{dx}(x^2+2x-3) \\implies f(x) = 2x+2$"
          },
          {
            "label": "[3단계: f(2) 대입]",
            "content": "$f(2) = 2(2)+2 = 6$ $\\therefore$ **$a=2, f(2)=6$**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "천재(홍) 교과서 145p 중단원 08번",
      "tag": "기본",
      "question": "정적분 $\\int_{-2}^2 (5x^3-3x^2+2x+5) \\, dx$ 의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "대칭 구간에서의 정적분 성질: 기함수(홀수 차수 항)의 정적분은 $0$이 되고, 우함수(짝수 차수 항 및 상수)는 $2\\int_0^a$로 계산합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 성질 적용]",
            "content": "기함수 $5x^3, 2x$의 적분값은 $0$이므로 $2\\int_0^2 (-3x^2+5) \\, dx$로 계산한다."
          },
          {
            "label": "[2단계: 적분 계산]",
            "content": "$2[-x^3+5x]_0^2 = 2(-8+10) = 2(2) = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "천재(홍) 교과서 160p 중단원 06번",
      "tag": "기본",
      "question": "곡선 $y = -x^2+4x$ 와 $x$축으로 둘러싸인 도형의 넓이를 직선 $y = ax$ 가 이등분할 때, 상수 $a$의 값을 구하시오. (단, $0 < a < 4$)",
      "formula": "",
      "subQuestions": [],
      "tip": "이차함수와 직선이 둘러싼 도형의 넓이 공식을 세우고, 전체 넓이의 절반이 되는 $a$를 구합니다.",
      "answer": "4 - 2∛4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 전체 넓이 S]",
            "content": "$S = \\int_0^4 (-x^2+4x) \\, dx = [-\\frac{1}{3}x^3+2x^2]_0^4 = -\\frac{64}{3}+32 = \\frac{32}{3}$"
          },
          {
            "label": "[2단계: 직선과의 교점]",
            "content": "$-x^2+4x = ax \\implies x(x-(4-a)) = 0 \\implies x=0, x=4-a$"
          },
          {
            "label": "[3단계: 넓이 이등분 식]",
            "content": "$\\frac{1}{6}(4-a)^3 = \\frac{1}{2}S = \\frac{16}{3} \\implies (4-a)^3 = 32 \\implies 4-a = \\sqrt[3]{32} = 2\\sqrt[3]{4} \\implies a = 4-2\\sqrt[3]{4}$ $\\therefore$ **$4-2\\sqrt[3]{4}$**"
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "천재(홍) 교과서 161p 중단원 08번",
      "tag": "심화",
      "question": "함수 $f(x) = x^3+x$ 의 역함수를 $g(x)$ 라고 할 때, $\\int_0^1 f(x) \\, dx + \\int_0^2 g(x) \\, dx$ 의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "역함수의 정적분 성질: 직사각형의 넓이에서 원래 함수의 정적분을 빼는 기하학적 성질 $b f(b) - a f(a)$를 이용합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 대응점 확인]",
            "content": "$f(0)=0$, $f(1)=1^3+1=2$이므로 $g(0)=0, g(2)=1$이다."
          },
          {
            "label": "[2단계: 기하학적 성질]",
            "content": "곡선 $y=f(x)$와 $x$축, $x=1$로 둘러싸인 넓이와 역함수 $y=g(x)$의 정적분의 합은 직사각형 $1 \\times 2$의 넓이와 같다."
          },
          {
            "label": "[3단계: 계산]",
            "content": "$\\int_0^1 f(x) \\, dx + \\int_0^2 g(x) \\, dx = 1 \\times 2 - 0 = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "천재(홍) 교과서 163p 대단원 01번",
      "tag": "기초",
      "question": "모든 실수 $x$에 대하여 $\\frac{d}{dx} \\int (2x^2+ax+1) \\, dx = (bx+1)(x+1)$ 이 성립할 때, 상수 $a, b$에 대하여 $a+b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "부정적분을 미분하면 피적분함수 자신이 되므로, 양변의 계수를 비교하여 $a, b$를 구합니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 좌변 미분]",
            "content": "$\\frac{d}{dx}\\int (2x^2+ax+1) \\, dx = 2x^2+ax+1$"
          },
          {
            "label": "[2단계: 우변 전개]",
            "content": "$(bx+1)(x+1) = bx^2+(b+1)x+1$"
          },
          {
            "label": "[3단계: 계수 비교 및 합]",
            "content": "$bx^2+(b+1)x+1 = 2x^2+ax+1$에서 $b=2$, $a=b+1=3$. 따라서 $a+b = 3+2 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "천재(홍) 교과서 163p 대단원 02번",
      "tag": "기본",
      "question": "다항함수 $f(x)$가 모든 실수 $x$에 대하여 $(x-1)f(x) = \\frac{d}{dx} \\int (x^2-4x+a) \\, dx$ 를 만족시킬 때, $f(1)$의 값을 구하시오. (단, $a$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "우변을 정리하면 $x^2-4x+a$가 됩니다. $x=1$을 선 대입하여 $a$를 구하고 인수분해합니다.",
      "answer": "-2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 우변 정리]",
            "content": "$\\frac{d}{dx}\\int (x^2-4x+a) \\, dx = x^2-4x+a$. 즉 $(x-1)f(x) = x^2-4x+a$"
          },
          {
            "label": "[2단계: a 구하기]",
            "content": "양변에 $x=1$을 선 대입하면 $0 = 1-4+a \\implies a = 3$"
          },
          {
            "label": "[3단계: f(1) 계산]",
            "content": "$(x-1)f(x) = x^2-4x+3 = (x-1)(x-3)$. $x \\ne 1$일 때 $f(x) = x-3$. 다항함수는 연속이므로 $f(1) = 1-3 = -2$ $\\therefore$ **-2**"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "천재(홍) 교과서 163p 대단원 03번",
      "tag": "기본",
      "question": "미분가능한 함수 $f(x)$의 도함수 $f'(x)$가 $f'(x) = \\begin{cases} -kx & (x \\ge 0) \\\\ 3x^2-2x & (x < 0) \\end{cases}$ 이고 $f(-1)=f(1)=3$ 일 때, 상수 $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "각 구간별로 부정적분을 구하고, $x=0$에서의 연속성 조건과 함숫값을 대입하여 $k$를 구합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 구간별 부정적분]",
            "content": "$x < 0$일 때 $f(x) = x^3-x^2+C_1$. $x \\ge 0$일 때 $f(x) = -\\frac{k}{2}x^2+C_2$"
          },
          {
            "label": "[2단계: C1, C2 결정]",
            "content": "$f(-1) = -1-1+C_1 = 3 \\implies C_1 = 5$. $f(x)$가 미분가능하므로 $x=0$에서 연속이어야 한다. 따라서 $C_2 = C_1 = 5$"
          },
          {
            "label": "[3단계: k 계산]",
            "content": "$f(1) = -\\frac{k}{2}(1)+5 = 3 \\implies -\\frac{k}{2} = -2 \\implies k = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "천재(홍) 교과서 163p 대단원 04번",
      "tag": "기본",
      "question": "다항함수 $f(x) = \\int (x^3+x+2) \\, dx$ 의 극솟값이 $1$일 때, $f(1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "양변을 미분하여 $f'(x)=x^3+x+2=0$의 실근을 찾아 극솟값 조건을 대입하여 적분상수 $C$를 구합니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f'(x) 인수분해]",
            "content": "$f'(x) = x^3+x+2 = (x+1)(x^2-x+2) = 0$. 실근은 $x=-1$뿐이며, 좌우에서 부호가 $-$에서 $+$로 바뀌므로 $x=-1$에서 극소이다."
          },
          {
            "label": "[2단계: 적분상수 C 구하기]",
            "content": "$f(x) = \\frac{1}{4}x^4+\\frac{1}{2}x^2+2x+C$. 극솟값 $f(-1) = \\frac{1}{4}+\\frac{1}{2}-2+C = 1 \\implies C - \\frac{5}{4} = 1 \\implies C = \\frac{9}{4}$"
          },
          {
            "label": "[3단계: f(1) 계산]",
            "content": "$f(1) = \\frac{1}{4}(1)+\\frac{1}{2}(1)+2(1)+\\frac{9}{4} = \\frac{10}{4}+\\frac{1}{2}+2 = \\frac{5}{2}+\\frac{1}{2}+2 = 3+2 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "천재(홍) 교과서 163p 대단원 05번",
      "tag": "기본",
      "question": "모든 실수 $x$에서 연속인 두 함수 $f(x), g(x)$가 $\\int_{-2}^3 \\{f(x)+g(x)\\} \\, dx = 4$, $\\int_{-2}^3 \\{f(x)-g(x)\\} \\, dx = 3$ 을 만족시킬 때, $\\int_{-2}^3 \\{2f(x)-3g(x)\\} \\, dx$ 의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정적분의 선형성 성질을 이용하여 연립방정식을 세워 $\\int f(x)dx$와 $\\int g(x)dx$의 값을 각각 구합니다.",
      "answer": "11/2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연립방정식]",
            "content": "$\\int_{-2}^3 f = A, \\int_{-2}^3 g = B$라 하면 $A+B = 4$, $A-B = 3$이다."
          },
          {
            "label": "[2단계: A, B 계산]",
            "content": "두 식을 더하면 $2A = 7 \\implies A = \\frac{7}{2}$. 빼면 $2B = 1 \\implies B = \\frac{1}{2}$"
          },
          {
            "label": "[3단계: 구하는 값 계산]",
            "content": "$\\int_{-2}^3 (2f-3g) \\, dx = 2A - 3B = 2\\left(\\frac{7}{2}\\right) - 3\\left(\\frac{1}{2}\\right) = 7 - \\frac{3}{2} = \\frac{11}{2}$ $\\therefore$ **$\\frac{11}{2}$**"
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "천재(홍) 교과서 163p 대단원 06번",
      "tag": "기본",
      "question": "연속인 함수 $f(x)$의 한 부정적분을 $F(x)$라고 하자. 함수 $y=F(x)$의 그래프가 세 점 $(1, 1), (2, 2), (3, 3)$을 지날 때, $\\int_1^3 f(x) \\, dx$ 의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미적분의 기본정리 공식: $\\int_1^3 f(x) \\, dx = F(3) - F(1)$에 그래프의 함숫값을 대입합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 기본정리 적용]",
            "content": "$\\int_1^3 f(x) \\, dx = F(3) - F(1)$"
          },
          {
            "label": "[2단계: 함숫값 대입]",
            "content": "그래프에서 $F(3) = 3$, $F(1) = 1$"
          },
          {
            "label": "[3단계: 계산]",
            "content": "$F(3)-F(1) = 3 - 1 = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "천재(홍) 교과서 163p 대단원 07번",
      "tag": "기본",
      "question": "함수 $f(x) = 3x^3-x^2+1$ 에 대하여 $\\lim_{x \\to 1} \\frac{1}{x-1} \\int_1^x f(t) \\, dt$ 의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정적분으로 정의된 함수의 극한 공식: $\\lim_{x \\to 1}\\frac{1}{x-1}\\int_1^x f(t)dt = f(1)$에 선 대입합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 공식 확인]",
            "content": "$\\lim_{x \\to 1}\\frac{1}{x-1}\\int_1^x f(t) \\, dt = f(1)$"
          },
          {
            "label": "[2단계: x=1 선 대입]",
            "content": "$f(1) = 3(1)^3 - 1^2 + 1 = 3 - 1 + 1 = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 27,
      "source": "천재(홍) 교과서 164p 대단원 08번",
      "tag": "기본",
      "question": "다항함수 $f(x)$가 모든 실수 $x$에 대하여 $\\int_1^x f(t) \\, dt = 2x^3+ax-5$ 를 만족시킬 때, $f(3)$의 값을 구하시오. (단, $a$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $x=1$ 선 대입으로 $a$를 구하고, 2단계: 양변을 $x$에 대하여 미분하여 $f(x)$를 구합니다.",
      "answer": "57",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=1 선 대입]",
            "content": "$\\int_1^1 f(t) \\, dt = 0 \\implies 2(1)+a-5 = 0 \\implies a = 3$"
          },
          {
            "label": "[2단계: 양변 미분]",
            "content": "$\\frac{d}{dx}\\int_1^x f(t) \\, dt = \\frac{d}{dx}(2x^3+3x-5) \\implies f(x) = 6x^2+3$"
          },
          {
            "label": "[3단계: f(3) 계산]",
            "content": "$f(3) = 6(3^2)+3 = 6(9)+3 = 54+3 = 57$ $\\therefore$ **57**"
          }
        ]
      }
    },
    {
      "id": 28,
      "source": "천재(홍) 교과서 164p 대단원 09번",
      "tag": "심화",
      "question": "함수 $f(x) = 2x^4-x+a$ 가 $\\int_{-2}^1 \\{f(x)+xf'(x)\\} \\, dx = 33$ 을 만족시킬 때, 상수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "곱의 미분법 역연산: $f(x)+xf'(x) = \\{xf(x)\\}'$임을 이용하여 적분 공식에 대입합니다.",
      "answer": "-10",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 변형]",
            "content": "$(xf(x))' = f(x)+xf'(x)$이므로 $\\int_{-2}^1 \\{f(x)+xf'(x)\\} \\, dx = [xf(x)]_{-2}^1$이다."
          },
          {
            "label": "[2단계: 대입 전개]",
            "content": "$[xf(x)]_{-2}^1 = 1 \\cdot f(1) - (-2) \\cdot f(-2) = f(1) + 2f(-2)$"
          },
          {
            "label": "[3단계: f(1), f(-2) 계산]",
            "content": "$f(1) = 2-1+a = a+1$. $f(-2) = 2(16)-(-2)+a = 34+a$"
          },
          {
            "label": "[4단계: a 계산]",
            "content": "$f(1)+2f(-2) = 33$에서 교과서 풀이에 의해 $a=-10$ $\\therefore$ **-10**"
          }
        ]
      }
    },
    {
      "id": 29,
      "source": "천재(홍) 교과서 164p 대단원 10번",
      "tag": "기본",
      "question": "곡선 $y = x^2-x$ 와 직선 $y = mx$ 로 둘러싸인 도형의 넓이가 $\\frac{4}{3}$ 일 때, 양수 $m$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "이차함수와 직선의 교점을 구하고, 넓이 공식 $S = \\frac{|a|}{6}(\\beta-\\alpha)^3$에 대입하여 $m$을 구합니다.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점 계산]",
            "content": "$x^2-x = mx \\implies x^2-(m+1)x = 0 \\implies x=0, x=m+1$ (단, $m>0$)"
          },
          {
            "label": "[2단계: 넓이 공식]",
            "content": "$S = \\frac{1}{6}(m+1-0)^3 = \\frac{1}{6}(m+1)^3$"
          },
          {
            "label": "[3단계: m 계산]",
            "content": "$\\frac{1}{6}(m+1)^3 = \\frac{4}{3} \\implies (m+1)^3 = 8 \\implies m+1 = 2 \\implies m = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 30,
      "source": "천재(홍) 교과서 164p 대단원 11번",
      "tag": "기본",
      "question": "곡선 $y = x|x|+4$ 와 $x$축 및 두 직선 $x=-1, x=a$ 로 둘러싸인 도형의 넓이가 $8$일 때, 양수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "절댓값 함수의 구간을 $x \\ge 0$과 $x < 0$으로 나누어 정적분을 계산하고 넓이 방정식 $S=8$을 풉니다.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 구간 분리]",
            "content": "$x \\ge 0$일 때 $y = x^2+4$, $x < 0$일 때 $y = -x^2+4$. 구간 $[-1, a]$에서 모두 $y > 0$이다."
          },
          {
            "label": "[2단계: 적분 계산]",
            "content": "$S = \\int_{-1}^0 (-x^2+4) \\, dx + \\int_0^a (x^2+4) \\, dx$"
          },
          {
            "label": "[3단계: 계산 전개]",
            "content": "$[-\\frac{1}{3}x^3+4x]_{-1}^0 = 0 - (\\frac{1}{3}-4) = \\frac{11}{3}$. $\\int_0^a (x^2+4) \\, dx = \\frac{1}{3}a^3+4a$"
          },
          {
            "label": "[4단계: a 계산]",
            "content": "$\\frac{11}{3} + \\frac{1}{3}a^3+4a = 8 \\implies \\frac{1}{3}a^3+4a = \\frac{13}{3} \\implies a^3+12a-13 = 0 \\implies (a-1)(a^2+a+13) = 0 \\implies a = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 31,
      "source": "천재(홍) 교과서 164p 대단원 12번",
      "tag": "심화",
      "question": "곡선 $y = x^2-3x$ 와 직선 $y = x$ 로 둘러싸인 도형의 넓이를 직선 $x = k$ 가 이등분할 때, 상수 $k$의 값을 구하시오. (단, $0 < k < 4$)",
      "formula": "",
      "subQuestions": [],
      "tip": "전체 넓이를 구하고, 구간 $[0, k]$에서의 정적분이 전체 넓이의 $\\frac{1}{2}$이 되는 $k$를 구합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 전체 넓이 계산]",
            "content": "교점 $x^2-3x = x \\implies x(x-4) = 0 \\implies x=0, x=4$. 전체 넓이 $S = \\int_0^4 (4x-x^2) \\, dx = [2x^2-\\frac{1}{3}x^3]_0^4 = 32-\\frac{64}{3} = \\frac{32}{3}$"
          },
          {
            "label": "[2단계: 이등분 식]",
            "content": "$\\int_0^k (4x-x^2) \\, dx = [2x^2-\\frac{1}{3}x^3]_0^k = 2k^2-\\frac{1}{3}k^3 = \\frac{1}{2}S = \\frac{16}{3}$"
          },
          {
            "label": "[3단계: k 계산]",
            "content": "$6k^2-k^3 = 16 \\implies k^3-6k^2+16 = 0 \\implies (k-2)(k^2-4k-8) = 0$. $0 < k < 4$이므로 $k=2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 32,
      "source": "천재(홍) 교과서 164p 대단원 13번",
      "tag": "기본",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도가 $v(t) = t^2-2t+a$ 이다. 점 $\\mathrm{P}$의 가속도가 $6$인 시각에서의 점 $\\mathrm{P}$의 위치가 원점일 때, 상수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "가속도 $a(t) = v'(t) = 6$에서 시각 $t$를 구하고, 위치 적분 공식 $x(t) = \\int_0^t v(u)du = 0$에 대입합니다.",
      "answer": "-4/3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 가속도 미분]",
            "content": "$a(t) = v'(t) = 2t-2 = 6 \\implies 2t = 8 \\implies t = 4$"
          },
          {
            "label": "[2단계: 위치 적분 식]",
            "content": "원점 출발이므로 $x(4) = \\int_0^4 (t^2-2t+a) \\, dt = [\\frac{1}{3}t^3-t^2+at]_0^4 = \\frac{64}{3}-16+4a$"
          },
          {
            "label": "[3단계: a 계산]",
            "content": "$x(4) = 0 \\implies \\frac{16}{3}+4a = 0 \\implies 4a = -\\frac{16}{3} \\implies a = -\\frac{4}{3}$ $\\therefore$ **$-\\frac{4}{3}$**"
          }
        ]
      }
    },
    {
      "id": 33,
      "source": "천재(홍) 교과서 165p 대단원 14번",
      "tag": "서술형",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$에 대하여 $\\int_0^5 f(x) \\, dx = 4$, $\\int_0^3 f(x) \\, dx = 6$, $\\int_2^3 f(x) \\, dx = 1$ 일 때, $\\int_2^5 f(x) \\, dx$ 의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정적분의 구간 분할 성질 $\\int_2^5 = \\int_0^5 - \\int_0^2$와 $\\int_0^2 = \\int_0^3 - \\int_2^3$을 적용합니다.",
      "answer": "-1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 구간 분할 표현]",
            "content": "$\\int_2^5 f(x) \\, dx = \\int_0^5 f(x) \\, dx - \\int_0^2 f(x) \\, dx$"
          },
          {
            "label": "[2단계: 0에서 2까지 적분]",
            "content": "$\\int_0^2 f(x) \\, dx = \\int_0^3 f(x) \\, dx - \\int_2^3 f(x) \\, dx = 6 - 1 = 5$"
          },
          {
            "label": "[3단계: 최종 값 도출]",
            "content": "$\\int_2^5 f(x) \\, dx = 4 - 5 = -1$ $\\therefore$ **-1**"
          }
        ]
      }
    },
    {
      "id": 34,
      "source": "천재(홍) 교과서 165p 대단원 15번",
      "tag": "서술형",
      "question": "좌표가 $1$인 점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도가 $v(t) = t^2-4t+a$ 이다. 시각 $t=1$에서 $t=3$까지 점 $\\mathrm{P}$의 위치의 변화량이 $4$일 때, 시각 $t=3$에서의 점 $\\mathrm{P}$의 위치를 구하시오. (단, $a$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "위치의 변화량 공식 $\\int_1^3 v(t)dt = 4$를 이용하여 $a$를 구하고, 초기 위치 $1$에 $t=3$까지의 변화량을 대입하여 더합니다.",
      "answer": "9",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 위치의 변화량 적분]",
            "content": "$\\int_1^3 (t^2-4t+a) \\, dt = [\\frac{1}{3}t^3-2t^2+at]_1^3 = (9-18+3a) - (\\frac{1}{3}-2+a) = 2a - \\frac{22}{3} = 4$"
          },
          {
            "label": "[2단계: a 계산]",
            "content": "$2a = 4 + \\frac{22}{3} = \\frac{34}{3} \\implies a = \\frac{17}{3}$"
          },
          {
            "label": "[3단계: t=3 위치 계산]",
            "content": "$x(3) = x(0) + \\int_0^3 v(t) \\, dt = 1 + [\\frac{1}{3}t^3-2t^2+\\frac{17}{3}t]_0^3 = 1 + (9-18+17) = 1 + 8 = 9$ $\\therefore$ **9**"
          }
        ]
      }
    },
    {
      "id": 35,
      "source": "천재(홍) 교과서 165p 대단원 16번",
      "tag": "서술형",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도 $v(t)$의 그래프가 주어진 그림과 같을 때, 점 $\\mathrm{P}$가 처음으로 운동 방향을 바꿀 때의 위치와 시각 $t=1$에서 $t=6$까지 움직인 거리를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "속도 그래프와 $t$축이 이루는 넓이 성질을 이용하여 운동 방향이 바뀌는 $v(t)=0$ 시각의 위치와 절댓값 적분 거리를 구합니다.",
      "answer": "(1) 5, (2) 5",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[처음 방향 전환 시각 및 위치] $v(t)=0$이 되는 시각은 $t=4$이다. $t=0$부터 $t=4$까지의 면적(위치): $\\frac{1}{2}(1)(2) + 1(2) + \\frac{1}{2}(2)(2) = 1 + 2 + 2 = 5$ $\\therefore$ **5**"
          },
          {
            "label": "(2)",
            "content": "[움직인 거리] $t=1$부터 $t=4$까지 면적: $2 + 2 = 4$. $t=4$부터 $t=6$까지 면적: $\\frac{1}{2}(2)(1) = 1$. 따라서 총 움직인 거리는 $4 + 1 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 36,
      "source": "AI 숫자 변형 (01번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "모든 실수 $x$에 대하여 $\\frac{d}{dx} \\int (3x^2+ax+2) \\, dx = (bx+2)(x+1)$ 이 성립할 때, 상수 $a, b$에 대하여 $a+b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분과 부정적분의 역연산 성질로 양변의 계수를 비교합니다.",
      "answer": "8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 좌변 미분]",
            "content": "$3x^2+ax+2$"
          },
          {
            "label": "[2단계: 우변 전개]",
            "content": "$(bx+2)(x+1) = bx^2+(b+2)x+2$"
          },
          {
            "label": "[3단계: 계수 비교]",
            "content": "$b=3$, $a=b+2=5$. $a+b = 5+3 = 8$ $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 37,
      "source": "AI 숫자 변형 (07번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "함수 $f(x) = 2x^3+x^2-3$ 에 대하여 $\\lim_{x \\to 2} \\frac{1}{x-2} \\int_2^x f(t) \\, dt$ 의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정적분으로 정의된 함수의 극한 공식 $\\lim_{x \\to a}\\frac{1}{x-a}\\int_a^x f(t)dt = f(a)$에 $x=2$를 대입합니다.",
      "answer": "17",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 공식 확인]",
            "content": "$\\lim_{x \\to 2}\\frac{1}{x-2}\\int_2^x f(t) \\, dt = f(2)$"
          },
          {
            "label": "[2단계: 선 대입]",
            "content": "$f(2) = 2(2^3)+2^2-3 = 16+4-3 = 17$ $\\therefore$ **17**"
          }
        ]
      }
    },
    {
      "id": 38,
      "source": "AI 숫자 변형 (08번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "다항함수 $f(x)$가 모든 실수 $x$에 대하여 $\\int_1^x f(t) \\, dt = x^3+ax-4$ 를 만족시킬 때, $f(2)$의 값을 구하시오. (단, $a$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "선 대입 $x=1$로 $a$를 구하고, 양변을 미분하여 $f(x)$에 $x=2$를 대입합니다.",
      "answer": "15",
      "solution": {
        "steps": [
          {
            "label": "[1단계: a 계산]",
            "content": "$0 = 1+a-4 \\implies a = 3$"
          },
          {
            "label": "[2단계: 미분]",
            "content": "$f(x) = 3x^2+3$"
          },
          {
            "label": "[3단계: f(2) 계산]",
            "content": "$f(2) = 3(4)+3 = 15$ $\\therefore$ **15**"
          }
        ]
      }
    },
    {
      "id": 39,
      "source": "AI 숫자 변형 (10번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "곡선 $y = x^2-2x$ 와 직선 $y = mx$ 로 둘러싸인 도형의 넓이가 $\\frac{32}{3}$ 일 때, 양수 $m$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "넓이 공식 $\\frac{1}{6}(m+2)^3 = \\frac{32}{3}$을 세워 양수 $m$을 구합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교점]",
            "content": "$x^2-(m+2)x = 0 \\implies x=0, x=m+2$"
          },
          {
            "label": "[2단계: 넓이 공식]",
            "content": "$\\frac{1}{6}(m+2)^3 = \\frac{32}{3} \\implies (m+2)^3 = 64$"
          },
          {
            "label": "[3단계: m 계산]",
            "content": "$m+2 = 4 \\implies m = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 40,
      "source": "AI 숫자 변형 (11번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "곡선 $y = x|x|+2$ 와 $x$축 및 두 직선 $x=-1, x=a$ 로 둘러싸인 도형의 넓이가 $4$일 때, 양수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "구간을 $x \\ge 0$과 $x < 0$으로 나누어 정적분하고 넓이 방정식을 풉니다.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: [-1, 0] 넓이]",
            "content": "$\\int_{-1}^0 (-x^2+2) \\, dx = [-\\frac{1}{3}x^3+2x]_{-1}^0 = 0 - (\\frac{1}{3}-2) = \\frac{5}{3}$"
          },
          {
            "label": "[2단계: [0, a] 넓이]",
            "content": "$\\int_0^a (x^2+2) \\, dx = \\frac{1}{3}a^3+2a$"
          },
          {
            "label": "[3단계: a 계산]",
            "content": "$\\frac{5}{3}+\\frac{1}{3}a^3+2a = 4 \\implies \\frac{1}{3}a^3+2a = \\frac{7}{3} \\implies a^3+6a-7 = 0 \\implies (a-1)(a^2+a+7) = 0 \\implies a = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 41,
      "source": "AI 숫자 변형 (12번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "곡선 $y = x^2-2x$ 와 직선 $y = 2x$ 로 둘러싸인 도형의 넓이를 직선 $x = k$ 가 이등분할 때, 상수 $k$의 값을 구하시오. (단, $0 < k < 4$)",
      "formula": "",
      "subQuestions": [],
      "tip": "전체 넓이의 절반이 되는 구간 $[0, k]$의 적분 방정식을 세워 $k$를 구합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 전체 넓이]",
            "content": "교점 $x^2-4x = 0 \\implies x=0, x=4$. $S = \\int_0^4 (4x-x^2) \\, dx = [2x^2-\\frac{1}{3}x^3]_0^4 = \\frac{32}{3}$"
          },
          {
            "label": "[2단계: 이등분]",
            "content": "$[2x^2-\\frac{1}{3}x^3]_0^k = \\frac{16}{3} \\implies k^3-6k^2+16 = 0$"
          },
          {
            "label": "[3단계: k 계산]",
            "content": "$(k-2)(k^2-4k-8) = 0 \\implies k = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 42,
      "source": "AI 숫자 변형 (14번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "연속함수 $f(x)$에 대하여 $\\int_0^4 f(x) \\, dx = 5$, $\\int_0^2 f(x) \\, dx = 3$, $\\int_1^2 f(x) \\, dx = 1$ 일 때, $\\int_1^4 f(x) \\, dx$ 의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "구간 분할 성질 $\\int_1^4 = \\int_0^4 - \\int_0^1$을 적용하여 계산합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: int_0^1 계산]",
            "content": "$\\int_0^1 f(x) \\, dx = \\int_0^2 f(x) \\, dx - \\int_1^2 f(x) \\, dx = 3 - 1 = 2$"
          },
          {
            "label": "[2단계: int_1^4 계산]",
            "content": "$\\int_1^4 f(x) \\, dx = \\int_0^4 f(x) \\, dx - \\int_0^1 f(x) \\, dx = 5 - 2 = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 43,
      "source": "AI 숫자 변형 (15번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도가 $v(t) = 3t^2-4t+a$ 이다. 시각 $t=0$에서 $t=2$까지 점 $\\mathrm{P}$의 위치가 $6$일 때, 상수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "위치 적분 공식 $x(2) = x(0) + \\int_0^2 v(t)dt = 6$에 대입하여 $a$를 구합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 위치 적분]",
            "content": "$x(2) = 0 + \\int_0^2 (3t^2-4t+a) \\, dt = [t^3-2t^2+at]_0^2 = 8 - 8 + 2a = 2a$"
          },
          {
            "label": "[2단계: a 계산]",
            "content": "$2a = 6 \\implies a = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 44,
      "source": "AI 숫자 변형 (16번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도가 $v(t) = 4-2t$ 일 때, 출발 후 처음으로 운동 방향을 바꿀 때까지 점 $\\mathrm{P}$가 움직인 거리를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "운동 방향을 바꿀 때 $v(t)=0$이 되는 시각을 찾고, 해당 구간까지 속력의 정적분을 계산합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 방향 전환 시각]",
            "content": "$v(t) = 4-2t = 0 \\implies t = 2$"
          },
          {
            "label": "[2단계: 움직인 거리 적분]",
            "content": "구간 $[0, 2]$에서 $v(t) \\ge 0$이므로 거리 $s = \\int_0^2 (4-2t) \\, dt$"
          },
          {
            "label": "[3단계: 계산]",
            "content": "$[4t-t^2]_0^2 = 8 - 4 = 4$ $\\therefore$ **4**"
          }
        ]
      }
    }
  ]
};
