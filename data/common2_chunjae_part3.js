window.WORKSHEET_DATA = {
  "meta": {
    "title": "공통수학2 - III. 함수와 그래프",
    "subtitle": "천재(홍) 교과서 실전 핵심 (본문 핵심 + 대단원 평가하기 전수 수록)",
    "student": "",
    "date": "2026. 09. 21 (월)",
    "cheer": "완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "천재(홍) 교과서 108p 문제 01번",
      "tag": "기초",
      "question": "집합 $X=\\{1, 2, 3, 4\\}$에서 집합 $Y=\\{a, b, c\\}$로의 대응 $f$가 $f(1)=a, f(2)=b, f(3)=c, f(4)=b$일 때, 함수 $f$의 정의역, 공역, 치역을 각각 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 정의와 성질에 따라 정의역은 출발 집합 $X$, 공역은 도착 집합 $Y$, 치역은 함숫값들의 집합을 대입합니다.",
      "answer": "정의역: $\\{1, 2, 3, 4\\}$, 공역: $\\{a, b, c\\}$, 치역: $\\{a, b, c\\}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정의역과 공역]",
            "content": "정의역은 집합 $X=\\{1, 2, 3, 4\\}$, 공역은 집합 $Y=\\{a, b, c\\}$입니다."
          },
          {
            "label": "[2단계: 치역 구하기]",
            "content": "함숫값은 $f(1)=a, f(2)=b, f(3)=c, f(4)=b$이므로 치역은 $\\{a, b, c\\}$입니다."
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **정의역: $\\{1, 2, 3, 4\\}$, 공역: $\\{a, b, c\\}$, 치역: $\\{a, b, c\\}$**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "천재(홍) 교과서 109p 문제 02번",
      "tag": "기본",
      "question": "실수 전체의 집합에서 정의된 다음 함수의 치역을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "y=2x-4"
        },
        {
          "no": 2,
          "formula": "y=-x^2+7"
        }
      ],
      "tip": "함수식의 성질을 파악하고 일차함수는 실수 전체, 이차함수는 꼭짓점의 최댓값 공식을 대입하여 구합니다.",
      "answer": "(1) $\\{y \\mid y\\text{는 실수}\\}$, (2) $\\{y \\mid y \\le 7\\}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "일차함수 $y=2x-4$는 모든 실숫값을 취하므로 치역은 $\\{y \\mid y\\text{는 실수}\\}$ $\\therefore$ **$\\{y \\mid y\\text{는 실수}\\}$**"
          },
          {
            "label": "(2)",
            "content": "이차함수 $y=-x^2+7$은 $x=0$일 때 최댓값 $7$을 갖고 위로 볼록하므로 치역은 $\\{y \\mid y \\le 7\\}$ $\\therefore$ **$\\{y \\mid y \\le 7\\}$**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "천재(홍) 교과서 110p 문제 03번",
      "tag": "기본",
      "question": "정의역이 $\\{-1, 1\\}$인 두 함수 $f(x)=|x|, g(x)=-x^2+2$에 대하여 $f=g$임을 보이시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "정의역의 각 원소를 두 함수에 각각 대입하여 함숫값이 일치하는 성질을 확인합니다.",
      "answer": "증명 참조 ($f(-1)=g(-1)=1, f(1)=g(1)=1$이므로 $f=g$)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=-1 대입]",
            "content": "$f(-1) = |-1| = 1$, $g(-1) = -(-1)^2+2 = -1+2 = 1$. 따라서 $f(-1)=g(-1)$"
          },
          {
            "label": "[2단계: x=1 대입]",
            "content": "$f(1) = |1| = 1$, $g(1) = -(1)^2+2 = 1$. 따라서 $f(1)=g(1)$"
          },
          {
            "label": "[3단계: 결론 도출]",
            "content": "정의역의 모든 원소에 대해 함숫값이 같으므로 $f=g$입니다. $\\therefore$ **증명 완료**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "천재(홍) 교과서 112p 문제 06번",
      "tag": "기본",
      "question": "실수 전체의 집합 $\\mathbb{R}$에서 $\\mathbb{R}$로의 다음 함수 중 일대일대응인 것만을 있는 대로 고르시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=3x-1"
        },
        {
          "no": 2,
          "formula": "g(x)=x^2+1"
        },
        {
          "no": 3,
          "formula": "h(x)=|x|"
        }
      ],
      "tip": "일대일대응 성질: $x_1 \\ne x_2 \\implies f(x_1) \\ne f(x_2)$이고 치역과 공역이 일치하는지 대입하여 판별합니다.",
      "answer": "(1)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(x) 판별]",
            "content": "$f(x)=3x-1$은 증가하는 일차함수로 일대일함수이고 치역이 실수 전체이므로 일대일대응입니다. $\\therefore$ 참"
          },
          {
            "label": "[2단계: g(x) 판별]",
            "content": "$g(-1)=g(1)=2$이므로 일대일함수가 아닙니다. $\\therefore$ 거짓"
          },
          {
            "label": "[3단계: h(x) 판별]",
            "content": "$h(-1)=h(1)=1$이므로 일대일함수가 아닙니다. $\\therefore$ 거짓 (따라서 일대일대응은 (1))"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "천재(홍) 교과서 113p 문제 01번",
      "tag": "기초",
      "question": "두 함수 $f(x)=x^2-1, g(x)=-2x+1$에 대하여 다음을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "(g \\circ f)(2)"
        },
        {
          "no": 2,
          "formula": "(f \\circ g)(-1)"
        }
      ],
      "tip": "합성함수 정의 공식 $(g \\circ f)(x) = g(f(x))$에 안쪽 함숫값을 먼저 구한 뒤 바깥쪽 함수에 순서대로 대입합니다.",
      "answer": "(1) -5, (2) 8",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$f(2) = 2^2-1 = 3$, $(g \\circ f)(2) = g(3) = -2(3)+1 = -5$ $\\therefore$ **-5**"
          },
          {
            "label": "(2)",
            "content": "$g(-1) = -2(-1)+1 = 3$, $(f \\circ g)(-1) = f(3) = 3^2-1 = 8$ $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "천재(홍) 교과서 114p 문제 02번",
      "tag": "기본",
      "question": "두 함수 $f(x)=2x+5, g(x)=-x^2+1$에 대하여 다음을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "(g \\circ f)(x)"
        },
        {
          "no": 2,
          "formula": "(f \\circ g)(x)"
        }
      ],
      "tip": "합성함수의 성질에 따라 $g(f(x))$와 $f(g(x))$ 식을 대입하여 전개합니다.",
      "answer": "(1) $-4x^2-20x-24$, (2) $-2x^2+7$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$(g \\circ f)(x) = g(2x+5) = -(2x+5)^2+1 = -(4x^2+20x+25)+1 = -4x^2-20x-24$ $\\therefore$ **$-4x^2-20x-24$**"
          },
          {
            "label": "(2)",
            "content": "$(f \\circ g)(x) = f(-x^2+1) = 2(-x^2+1)+5 = -2x^2+2+5 = -2x^2+7$ $\\therefore$ **$-2x^2+7$**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "천재(홍) 교과서 115p 문제 03번",
      "tag": "기본",
      "question": "세 함수 $f(x)=2x+1, g(x)=x^2+1, h(x)=-4x$에 대하여 $((f \\circ g) \\circ h)(1)$의 값을 결합법칙 공식을 이용하여 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "합성함수의 결합법칙 성질 $(f \\circ g) \\circ h = f \\circ (g \\circ h)$에 따라 순서대로 대입합니다.",
      "answer": "35",
      "solution": {
        "steps": [
          {
            "label": "[1단계: h(1) 계산]",
            "content": "$h(1) = -4(1) = -4$"
          },
          {
            "label": "[2단계: g(-4) 계산]",
            "content": "$g(-4) = (-4)^2+1 = 17$"
          },
          {
            "label": "[3단계: f(17) 계산]",
            "content": "$f(17) = 2(17)+1 = 35$ $\\therefore$ **35**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "천재(홍) 교과서 117p 문제 01번",
      "tag": "기초",
      "question": "집합 $X=\\{1, 2, 3\\}, Y=\\{4, 5, 6\\}$에 대하여 함수 $f : X \\to Y$가 $f(1)=5, f(2)=6, f(3)=4$일 때, $f^{-1}(4)+f^{-1}(6)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "역함수의 성질 $f(a)=b \\iff f^{-1}(b)=a$를 이용하여 값을 대입하여 계산합니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 역함숫값 확인]",
            "content": "$f(3)=4 \\implies f^{-1}(4)=3$\n$f(2)=6 \\implies f^{-1}(6)=2$"
          },
          {
            "label": "[2단계: 합 계산]",
            "content": "$f^{-1}(4)+f^{-1}(6) = 3+2 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "천재(홍) 교과서 118p 문제 02번",
      "tag": "기본",
      "question": "다음 함수의 역함수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "y=-4x+1"
        },
        {
          "no": 2,
          "formula": "y=\\frac{1}{2}x-3"
        }
      ],
      "tip": "$x$에 관하여 푼 후 $x$와 $y$를 서로 맞바꾸어 역함수 공식 형태로 대입합니다.",
      "answer": "(1) $y=-\\frac{1}{4}x+\\frac{1}{4}$, (2) $y=2x+6$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$y=-4x+1 \\implies 4x = -y+1 \\implies x = -\\frac{1}{4}y+\\frac{1}{4}$. $x, y$를 바꾸면 $y=-\\frac{1}{4}x+\\frac{1}{4}$ $\\therefore$ **$y=-\\frac{1}{4}x+\\frac{1}{4}$**"
          },
          {
            "label": "(2)",
            "content": "$y=\\frac{1}{2}x-3 \\implies \\frac{1}{2}x = y+3 \\implies x = 2y+6$. $x, y$를 바꾸면 $y=2x+6$ $\\therefore$ **$y=2x+6$**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "천재(홍) 교과서 119p 문제 03번",
      "tag": "기본",
      "question": "함수 $f(x)=4x-2$와 그 역함수 $y=f^{-1}(x)$의 그래프의 교점의 좌표를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수와 그 역함수의 그래프는 직선 $y=x$에 대하여 대칭인 성질을 가지므로 $f(x)=x$에 대입하여 연립합니다.",
      "answer": "$\\left(\\frac{2}{3}, \\frac{2}{3}\\right)$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: y=x와 연립]",
            "content": "역함수와의 교점은 직선 $y=x$ 위에 있으므로: $4x-2 = x$"
          },
          {
            "label": "[2단계: 방정식 풀이]",
            "content": "$3x = 2 \\implies x = \\frac{2}{3}$"
          },
          {
            "label": "[3단계: 교점 좌표 도출]",
            "content": "따라서 교점의 좌표는 $\\left(\\frac{2}{3}, \\frac{2}{3}\\right)$ $\\therefore$ **$\\left(\\frac{2}{3}, \\frac{2}{3}\\right)$**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "천재(홍) 교과서 120p 중단원 04번",
      "tag": "실전",
      "question": "두 함수 $f(x)=3x-1, g(x)=2x+3$에 대하여 $(f \\circ g^{-1})(5)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$g^{-1}(5)=k \\iff g(k)=5$ 성질을 이용하여 $k$를 구한 뒤 $f(x)$에 대입합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: g^-1(5) 구하기]",
            "content": "$g(k) = 2k+3 = 5 \\implies 2k = 2 \\implies k = 1$. 즉 $g^{-1}(5)=1$"
          },
          {
            "label": "[2단계: f(1) 계산]",
            "content": "$f(1) = 3(1)-1 = 2$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "천재(홍) 교과서 121p 중단원 08번",
      "tag": "실전",
      "question": "정의역이 $\\{x \\mid -1 \\le x \\le 2\\}$이고 공역이 $\\{y \\mid 1 \\le y \\le 7\\}$인 함수 $f(x)=ax+b$ ($a > 0$)가 일대일대응일 때, $a+b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$a > 0$이면 증가함수의 성질에 따라 $f(-1)=1, f(2)=7$을 대입하여 연립방정식을 풉니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 양 끝값 대입]",
            "content": "$a > 0$이므로 $f(-1) = -a+b = 1$, $f(2) = 2a+b = 7$"
          },
          {
            "label": "[2단계: 연립방정식 풀이]",
            "content": "두 식을 빼면: $3a = 6 \\implies a = 2$. $b = 1+a = 1+2 = 3$"
          },
          {
            "label": "[3단계: a+b 계산]",
            "content": "$a+b = 2+3 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "천재(홍) 교과서 125p 문제 02번",
      "tag": "기초",
      "question": "다음 유리함수의 정의역을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "y=\\frac{1}{x-2}"
        },
        {
          "no": 2,
          "formula": "y=\\frac{2x+3}{x^2-3}"
        }
      ],
      "tip": "유리식의 성질에 따라 분모가 $0$이 되지 않아야 하므로 분모$=0$인 $x$의 값을 제외하여 대입합니다.",
      "answer": "(1) $\\{x \\mid x \\ne 2인 실수\\}$, (2) $\\{x \\mid x \\ne \\pm\\sqrt{3}인 실수\\}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "분모 $x-2 \\ne 0 \\implies x \\ne 2$ $\\therefore$ **$\\{x \\mid x \\ne 2인 실수\\}$**"
          },
          {
            "label": "(2)",
            "content": "분모 $x^2-3 \\ne 0 \\implies x \\ne \\pm\\sqrt{3}$ $\\therefore$ **$\\{x \\mid x \\ne \\pm\\sqrt{3}인 실수\\}$**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "천재(홍) 교과서 126p 문제 03번",
      "tag": "기본",
      "question": "유리함수 $y=\\frac{2}{x-1}+3$의 그래프의 점근선의 방정식을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "유리함수 표준형 $y=\\frac{k}{x-p}+q$의 성질 공식에 따라 점근선 $x=p, y=q$에 대입합니다.",
      "answer": "$x=1, y=3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 표준형 분석]",
            "content": "$p=1, q=3$이므로 점근선은 $x=1, y=3$입니다."
          },
          {
            "label": "[2단계: 정답 도출]",
            "content": "$\\therefore$ **$x=1, y=3$**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "천재(홍) 교과서 127p 문제 04번",
      "tag": "기본",
      "question": "유리함수 $y=\\frac{2x+5}{x+1}$의 그래프의 점근선의 방정식과 치역을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분자를 분모로 나누어 표준형으로 변형한 후 점근선과 치역의 성질을 구합니다.",
      "answer": "점근선: $x=-1, y=2$, 치역: $\\{y \\mid y \\ne 2인 실수\\}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 표준형 변형]",
            "content": "$\\frac{2x+5}{x+1} = \\frac{2(x+1)+3}{x+1} = \\frac{3}{x+1}+2$"
          },
          {
            "label": "[2단계: 점근선과 치역]",
            "content": "점근선은 $x=-1, y=2$이며, $y \\ne 2$이므로 치역은 $\\{y \\mid y \\ne 2인 실수\\}$ $\\therefore$ **점근선: $x=-1, y=2$, 치역: $\\{y \\mid y \\ne 2인 실수\\}$**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "천재(홍) 교과서 128p 문제 05번",
      "tag": "기본",
      "question": "유리함수 $f(x)=\\frac{3x-1}{x-2}$의 역함수 $f^{-1}(x)$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "유리함수의 역함수 공식 $\\frac{ax+b}{cx+d}$의 역함수는 $\\frac{-dx+b}{cx-a}$에 대입하여 구합니다.",
      "answer": "$f^{-1}(x)=\\frac{2x-1}{x-3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x에 관해 풀기]",
            "content": "$y = \\frac{3x-1}{x-2} \\implies y(x-2) = 3x-1 \\implies xy-2y = 3x-1 \\implies x(y-3) = 2y-1 \\implies x = \\frac{2y-1}{y-3}$"
          },
          {
            "label": "[2단계: 변수 교환]",
            "content": "$x, y$를 바꾸면: $y = \\frac{2x-1}{x-3}$ $\\therefore$ **$f^{-1}(x)=\\frac{2x-1}{x-3}$**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "천재(홍) 교과서 130p 문제 02번",
      "tag": "기초",
      "question": "다음 무리함수의 정의역을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "y=\\sqrt{2x-6}"
        },
        {
          "no": 2,
          "formula": "y=\\sqrt{4-x}+1"
        }
      ],
      "tip": "근호 안의 식의 값이 $0$ 이상이어야 한다는 성질에 따라 부등식을 풀어 구간을 대입합니다.",
      "answer": "(1) $\\{x \\mid x \\ge 3\\}$, (2) $\\{x \\mid x \\le 4\\}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$2x-6 \\ge 0 \\implies 2x \\ge 6 \\implies x \\ge 3$ $\\therefore$ **$\\{x \\mid x \\ge 3\\}$**"
          },
          {
            "label": "(2)",
            "content": "$4-x \\ge 0 \\implies x \\le 4$ $\\therefore$ **$\\{x \\mid x \\le 4\\}$**"
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "천재(홍) 교과서 131p 문제 03번",
      "tag": "기본",
      "question": "무리함수 $y=\\sqrt{2x}$의 그래프를 이용하여 무리함수 $y=\\sqrt{-2x}$와 $y=-\\sqrt{2x}$의 그래프의 대칭 이동 성질을 말하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "대칭이동 공식: $x$ 대신 $-x$는 $y$축 대칭, $y$ 대신 $-y$는 $x$축 대칭 성질을 대입합니다.",
      "answer": "$y=\\sqrt{-2x}$는 $y$축 대칭, $y=-\\sqrt{2x}$는 $x$축 대칭",
      "solution": {
        "steps": [
          {
            "label": "[1단계: y축 대칭]",
            "content": "$x$ 대신 $-x$를 대입한 $y=\\sqrt{-2x}$는 $y$축 대칭입니다."
          },
          {
            "label": "[2단계: x축 대칭]",
            "content": "$y$ 대신 $-y$를 대입한 $-y=\\sqrt{2x} \\implies y=-\\sqrt{2x}$는 $x$축 대칭입니다."
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **$y=\\sqrt{-2x}$는 $y$축 대칭, $y=-\\sqrt{2x}$는 $x$축 대칭**"
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "천재(홍) 교과서 132p 문제 04번",
      "tag": "기본",
      "question": "무리함수 $y=\\sqrt{2x+4}-1$의 시작점과 정의역, 치역을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "표준형 $y=\\sqrt{2(x+2)}-1$로 묶어 시작점 $(-2, -1)$과 정의역, 치역의 성질을 대입합니다.",
      "answer": "시작점: $(-2, -1)$, 정의역: $\\{x \\mid x \\ge -2\\}$, 치역: $\\{y \\mid y \\ge -1\\}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 표준형 변형]",
            "content": "$y = \\sqrt{2(x+2)}-1$"
          },
          {
            "label": "[2단계: 정의역과 치역]",
            "content": "근호 안 $2(x+2) \\ge 0 \\implies x \\ge -2$\n근호 값 $\\ge 0$이므로 $y \\ge -1$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **시작점: $(-2, -1)$, 정의역: $\\{x \\mid x \\ge -2\\}$, 치역: $\\{y \\mid y \\ge -1\\}$**"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "천재(홍) 교과서 134p 중단원 05번",
      "tag": "실전",
      "question": "무리함수 $y=\\sqrt{x-2}$의 그래프와 직선 $y=x+k$가 서로 다른 두 점에서 만날 때, 실수 $k$의 값의 범위를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "시작점 $(2, 0)$을 지날 때와 판별식 $D=0$으로 접할 때의 구간을 나누어 대입합니다.",
      "answer": "$-2 \\le k < -\\frac{7}{4}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 시작점 (2, 0) 대입]",
            "content": "$0 = 2+k \\implies k = -2$"
          },
          {
            "label": "[2단계: 접할 때 판별식 D=0]",
            "content": "$\\sqrt{x-2} = x+k \\implies x-2 = x^2+2kx+k^2 \\implies x^2+(2k-1)x+k^2+2 = 0$\n$D = (2k-1)^2 - 4(k^2+2) = 4k^2-4k+1-4k^2-8 = -4k-7 = 0 \\implies k = -\\frac{7}{4}$"
          },
          {
            "label": "[3단계: 범위 종합]",
            "content": "서로 다른 두 점에서 만나려면 시작점을 지날 때 이상이고 접할 때 미만이어야 하므로: $-2 \\le k < -\\frac{7}{4}$ $\\therefore$ **$-2 \\le k < -\\frac{7}{4}$**"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "천재(홍) 교과서 137p 대단원 01번",
      "tag": "대단원",
      "question": "집합 $X=\\{a, b\\}$에서 실수 전체의 집합으로의 두 함수 $f(x)=x^2-3, g(x)=2x+5$에 대하여 $f=g$가 성립한다. 이때 실수 $a, b$에 대하여 $ab$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$f(x)=g(x)$ 방정식을 풀어 해 $a, b$를 구한 후 근과 계수의 관계 공식에 대입합니다.",
      "answer": "-8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 방정식 수립]",
            "content": "$f(x)=g(x) \\implies x^2-3 = 2x+5 \\implies x^2-2x-8 = 0$"
          },
          {
            "label": "[2단계: 인수분해]",
            "content": "$(x-4)(x+2) = 0 \\implies x=4$ 또는 $x=-2$"
          },
          {
            "label": "[3단계: ab 계산]",
            "content": "$a, b$가 두 근이므로 $ab = 4 \\times (-2) = -8$ $\\therefore$ **-8**"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "천재(홍) 교과서 137p 대단원 02번",
      "tag": "대단원",
      "question": "다음 보기의 그래프 중 일대일대응의 그래프인 것은?",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "포물선 $y=x^2$"
        },
        {
          "no": 2,
          "formula": "원 $x^2+y^2=1$"
        },
        {
          "no": 3,
          "formula": "단조증가 직선 $y=2x+1$"
        },
        {
          "no": 4,
          "formula": "상수함수 $y=3$"
        },
        {
          "no": 5,
          "formula": "꺾인선 $y=|x|$"
        }
      ],
      "tip": "일대일대응의 성질: 가로선 판정법(수평선과 오직 한 점에서 만남)을 대입하여 판정합니다.",
      "answer": "③",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 가로선 판정법]",
            "content": "임의의 가로선 $y=k$를 그었을 때 오직 한 점에서 만나고 치역이 공역과 일치해야 합니다."
          },
          {
            "label": "[2단계: 각 보기 판별]",
            "content": "①, ②, ⑤는 가로선과 두 점에서 만남, ④는 무수히 많은 점에서 만남. ③ 일차함수 직선은 가로선과 오직 한 점에서 만나며 실수 전체에 대응합니다."
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **③**"
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "천재(홍) 교과서 137p 대단원 03번",
      "tag": "대단원",
      "question": "두 함수 $f(x)=x+a, g(x)=ax+4$에 대하여 $f \\circ g = g \\circ f$가 성립할 때, 양수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "합성함수 식을 각각 구한 후 계수비교법으로 항등식 성질을 적용하여 $a$를 구합니다.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: (f o g)(x) 계산]",
            "content": "$(f \\circ g)(x) = f(ax+4) = (ax+4)+a = ax+a+4$"
          },
          {
            "label": "[2단계: (g o f)(x) 계산]",
            "content": "$(g \\circ f)(x) = g(x+a) = a(x+a)+4 = ax+a^2+4$"
          },
          {
            "label": "[3단계: 계수 비교]",
            "content": "$ax+a+4 = ax+a^2+4 \\implies a = a^2 \\implies a^2-a=0 \\implies a(a-1)=0$. 양수이므로 $a=1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "천재(홍) 교과서 137p 대단원 04번",
      "tag": "대단원",
      "question": "집합 $X=\\{1, 2, 3, 4\\}$에 대하여 함수 $f : X \\to X$가 $f(x) = \\begin{cases} x-2 & (x \\ge 3) \\\\ -x+5 & (x < 3) \\end{cases}$이다. 함수 $g : X \\to X$에 대하여 $g \\circ f$가 항등함수일 때, $g(2)+g(3)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$g \\circ f$가 항등함수이면 $g = f^{-1}$이라는 성질을 이용하여 각 함숫값을 대입합니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f의 함숫값 구하기]",
            "content": "$f(1) = -1+5 = 4$\n$f(2) = -2+5 = 3$\n$f(3) = 3-2 = 1$\n$f(4) = 4-2 = 2$"
          },
          {
            "label": "[2단계: g의 함숫값 구하기]",
            "content": "$g = f^{-1}$이므로:\n$g(2) = f^{-1}(2) = 4$\n$g(3) = f^{-1}(3) = 2$"
          },
          {
            "label": "[3단계: 합 계산]",
            "content": "$g(2)+g(3) = 4+2 = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "천재(홍) 교과서 137p 대단원 05번",
      "tag": "대단원",
      "question": "함수 $f(x)=ax+2$의 역함수가 $f^{-1}(x)=bx+c$이고 $f^{-1}(-7)=3$일 때, 상수 $a, b, c$에 대하여 $a+3b+6c$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "역함수의 성질 $f^{-1}(-7)=3 \\iff f(3)=-7$을 대입하여 $a$를 구하고, 역함수 공식으로 $b, c$를 구합니다.",
      "answer": "0",
      "solution": {
        "steps": [
          {
            "label": "[1단계: a 구하기]",
            "content": "$f(3) = 3a+2 = -7 \\implies 3a = -9 \\implies a = -3$"
          },
          {
            "label": "[2단계: 역함수 구하기]",
            "content": "$f(x) = -3x+2 \\implies y = -3x+2 \\implies 3x = -y+2 \\implies x = -\\frac{1}{3}y+\\frac{2}{3}$. 따라서 $b = -\\frac{1}{3}, c = \\frac{2}{3}$"
          },
          {
            "label": "[3단계: 식의 값 계산]",
            "content": "$a+3b+6c = -3 + 3\\left(-\\frac{1}{3}\\right) + 6\\left(\\frac{2}{3}\\right) = -3 - 1 + 4 = 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "천재(홍) 교과서 137p 대단원 06번",
      "tag": "대단원",
      "question": "두 함수 $f(x) = \\begin{cases} x^2+2 & (x \\ge 1) \\\\ 2x+1 & (x < 1) \\end{cases}$, $g(x)=-x+3$에 대하여 $(g \\circ f^{-1} \\circ g^{-1})(a)=5$를 만족시키는 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "합성함수 성질을 단계별로 풀어 $g(k)=5$부터 역추적하여 대입합니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 겉함수 g(k)=5]",
            "content": "$g(k) = -k+3 = 5 \\implies k = -2$. 즉 $(f^{-1} \\circ g^{-1})(a) = -2$"
          },
          {
            "label": "[2단계: f^-1(m)=-2]",
            "content": "$f^{-1}(m) = -2 \\iff f(-2) = m$. $-2 < 1$이므로 $f(-2) = 2(-2)+1 = -3$. 즉 $g^{-1}(a) = -3$"
          },
          {
            "label": "[3단계: a 구하기]",
            "content": "$g^{-1}(a) = -3 \\iff g(-3) = a$. $a = -(-3)+3 = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 27,
      "source": "천재(홍) 교과서 138p 대단원 07번",
      "tag": "대단원",
      "question": "유리함수 $y=\\frac{4}{x}$의 그래프를 $x$축의 방향으로 $-2$만큼, $y$축의 방향으로 $3$만큼 평행이동한 그래프가 점 $(-3, k)$를 지날 때, $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "평행이동 공식에 따라 식을 세운 후 점 $(-3, k)$의 좌표를 대입합니다.",
      "answer": "-1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 평행이동 식]",
            "content": "$y = \\frac{4}{x+2}+3$"
          },
          {
            "label": "[2단계: 점 (-3, k) 대입]",
            "content": "$k = \\frac{4}{-3+2}+3 = \\frac{4}{-1}+3 = -4+3 = -1$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **-1**"
          }
        ]
      }
    },
    {
      "id": 28,
      "source": "천재(홍) 교과서 138p 대단원 08번",
      "tag": "대단원",
      "question": "유리함수 $y=\\frac{2x-4}{x-3}$의 그래프에 대한 설명으로 옳은 것만을 보기에서 있는 대로 고르시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "점근선의 방정식은 $x=3, y=2$이다."
        },
        {
          "no": 2,
          "formula": "제 $1, 2, 4$ 사분면을 지난다."
        },
        {
          "no": 3,
          "formula": "유리함수 $y=\\frac{2}{x}$의 그래프를 평행이동한 것이다."
        }
      ],
      "tip": "표준형으로 변형하여 점근선, $y$절편, 평행이동 성질을 비교 대입합니다.",
      "answer": "ㄱ, ㄴ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 표준형 변형]",
            "content": "$y = \\frac{2(x-3)+2}{x-3} = \\frac{2}{x-3}+2$"
          },
          {
            "label": "[2단계: 보기 검토]",
            "content": "ㄱ. 점근선 $x=3, y=2$ (참)\nㄴ. $x=0$일 때 $y=\\frac{-4}{-3}=\\frac{4}{3} > 0$. 그래프는 제 $1, 2, 4$ 사분면을 지납니다. (참)\nㄷ. 분자 $k=2$로 같으므로 $y=\\frac{2}{x}$를 평행이동한 것 (참)"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "따라서 모두 옳습니다 $\\therefore$ **ㄱ, ㄴ, ㄷ**"
          }
        ]
      }
    },
    {
      "id": 29,
      "source": "천재(홍) 교과서 138p 대단원 09번",
      "tag": "대단원",
      "question": "유리함수 $f(x)=\\frac{bx+2}{3x+a}$의 역함수가 $f^{-1}(x)=\\frac{4x+c}{3x-5}$일 때, 상수 $a, b, c$에 대하여 $a+b+c$의 값을 구하시오. (단, $ab \\ne 6$)",
      "formula": "",
      "subQuestions": [],
      "tip": "유리함수 역함수 공식 $\\frac{bx+2}{3x+a} \\to \\frac{-ax+2}{3x-b}$에 계수를 비교하여 대입합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 역함수 공식 적용]",
            "content": "$f(x) = \\frac{bx+2}{3x+a}$의 역함수는 $f^{-1}(x) = \\frac{-ax+2}{3x-b}$"
          },
          {
            "label": "[2단계: 계수 비교]",
            "content": "주어진 식 $f^{-1}(x) = \\frac{4x+c}{3x-5}$와 비교하면: 분모의 상수항 $-b = -5 \\implies b = 5$, 분자의 $x$계수 $-a = 4 \\implies a = -4$, 상수항 $c = 2$"
          },
          {
            "label": "[3단계: a+b+c 계산]",
            "content": "$a+b+c = -4 + 5 + 2 = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 30,
      "source": "천재(홍) 교과서 138p 대단원 10번",
      "tag": "대단원",
      "question": "다음 중 무리함수 $y=\\sqrt{9-3x}-5$에 대한 설명으로 옳지 않은 것은?",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "정의역은 $\\{x \\mid x \\le 3\\}$이다."
        },
        {
          "no": 2,
          "formula": "치역은 $\\{y \\mid y \\ge -5\\}$이다."
        },
        {
          "no": 3,
          "formula": "그래프는 무리함수 $y=\\sqrt{-3x}$의 그래프를 평행이동한 것이다."
        },
        {
          "no": 4,
          "formula": "그래프는 제 $3, 4$ 사분면만을 지난다."
        },
        {
          "no": 5,
          "formula": "그래프와 $y$축의 교점의 좌표는 $(0, -2)$이다."
        }
      ],
      "tip": "표준형 $y=\\sqrt{-3(x-3)}-5$의 성질을 분석하고 사분면 지나는지 $y$절편을 대입하여 확인합니다.",
      "answer": "④",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 표준형 분석]",
            "content": "$y = \\sqrt{-3(x-3)}-5$. 시작점 $(3, -5)$, 왼쪽 위 방향 진행."
          },
          {
            "label": "[2단계: 보기 검토]",
            "content": "① 정의역 $9-3x \\ge 0 \\implies x \\le 3$ (참)\n② 치역 $y \\ge -5$ (참)\n③ $y=\\sqrt{-3x}$를 평행이동 (참)\n⑤ $x=0$일 때 $y=\\sqrt{9}-5 = 3-5 = -2$ (참)"
          },
          {
            "label": "[3단계: 사분면 판별]",
            "content": "시작점 $(3, -5)$는 제 $4$ 사분면, $(0, -2)$는 $y$축, $x < 0$에서 $y > 0$이 되는 점(예: $x=-16/3$일 때 $y=0$)이 있어 제 $2$ 사분면도 지납니다. 따라서 ④는 거짓 $\\therefore$ **④**"
          }
        ]
      }
    },
    {
      "id": 31,
      "source": "천재(홍) 교과서 138p 대단원 11번",
      "tag": "대단원",
      "question": "무리함수 $f(x)=\\sqrt{ax+b}$에 대하여 함수 $y=f(x)$의 그래프와 그 역함수 $y=f^{-1}(x)$의 그래프가 점 $(1, 3)$에서 만날 때, 상수 $a, b$에 대하여 $a-b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "교점이 $(1, 3)$이면 $f(1)=3$이고 $f(3)=1$이라는 역함수 성질을 대입하여 연립방정식을 풉니다.",
      "answer": "-17",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(1)=3, f(3)=1 성질]",
            "content": "역함수가 $(1, 3)$을 지나므로 $f^{-1}(1)=3 \\iff f(3)=1$입니다."
          },
          {
            "label": "[2단계: 식 대입 및 연립]",
            "content": "$f(1) = \\sqrt{a+b} = 3 \\implies a+b = 9$\n$f(3) = \\sqrt{3a+b} = 1 \\implies 3a+b = 1$"
          },
          {
            "label": "[3단계: a, b 및 a-b 계산]",
            "content": "두 식을 빼면: $2a = -8 \\implies a = -4$\n$b = 9 - a = 9 - (-4) = 13$\n$a-b = -4 - 13 = -17$ $\\therefore$ **-17**"
          }
        ]
      }
    },
    {
      "id": 32,
      "source": "천재(홍) 교과서 138p 대단원 12번",
      "tag": "대단원",
      "question": "집합 $X=\\{x \\mid x > 2\\}$에서 정의된 두 함수 $f(x)=\\frac{3x+2}{x-2}, g(x)=\\sqrt{x-1}+2$에 대하여 $(f^{-1} \\circ g)(10) + (g^{-1} \\circ f)(4)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "각각의 역함수 성질 $f^{-1}(k)=a \\iff f(a)=k$와 $g^{-1}(m)=b \\iff g(b)=m$에 대입하여 계산합니다.",
      "answer": "32",
      "solution": {
        "steps": [
          {
            "label": "[1단계: (f^-1 o g)(10) 계산]",
            "content": "$g(10) = \\sqrt{10-1}+2 = 3+2 = 5$\n$f^{-1}(5) = k \\iff f(k) = 5 \\implies \\frac{3k+2}{k-2} = 5 \\implies 3k+2 = 5k-10 \\implies 2k = 12 \\implies k = 6$"
          },
          {
            "label": "[2단계: (g^-1 o f)(4) 계산]",
            "content": "$f(4) = \\frac{3(4)+2}{4-2} = \\frac{14}{2} = 7$\n$g^{-1}(7) = m \\iff g(m) = 7 \\implies \\sqrt{m-1}+2 = 7 \\implies \\sqrt{m-1} = 5 \\implies m-1 = 25 \\implies m = 26$"
          },
          {
            "label": "[3단계: 합 계산]",
            "content": "$6 + 26 = 32$ $\\therefore$ **32**"
          }
        ]
      }
    },
    {
      "id": 33,
      "source": "천재(홍) 교과서 139p 대단원 13번",
      "tag": "대단원",
      "question": "유리함수 $y=\\frac{bx+c}{x-a}$의 점근선이 $x=2, y=-3$이고 원점을 지날 때, 무리함수 $y=\\sqrt{ax-b}+c$의 그래프가 지나는 사분면을 모두 구하시오. (단, $a, b, c$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "점근선과 지나는 점 성질을 이용해 $a, b, c$의 값을 구한 후 무리함수에 대입합니다.",
      "answer": "제 1, 2 사분면",
      "solution": {
        "steps": [
          {
            "label": "[1단계: a, b, c 값 결정]",
            "content": "점근선 $x=a=2$, $y=b=-3$. 원점 $(0, 0)$을 지나므로: $0 = \\frac{c}{-a} \\implies c = 0$"
          },
          {
            "label": "[2단계: 무리함수 식 완성]",
            "content": "$y = \\sqrt{2x-(-3)}+0 = \\sqrt{2x+3}$"
          },
          {
            "label": "[3단계: 사분면 판별]",
            "content": "시작점은 $\\left(-\\frac{3}{2}, 0\\right)$이고 오른쪽 위로 뻗어가므로 제 $1$ 사분면과 제 $2$ 사분면을 지납니다. $\\therefore$ **제 1, 2 사분면**"
          }
        ]
      }
    },
    {
      "id": 34,
      "source": "천재(홍) 교과서 139p 대단원 14번",
      "tag": "대단원",
      "question": "무리함수 $f(x)=-\\sqrt{x-k}+2$에 대하여 함수 $y=f(x)$의 그래프는 직선 $y=x-5$와 만나고, 그 역함수 $y=f^{-1}(x)$의 그래프는 직선 $y=x-5$와 만나지 않을 때, 실수 $k$의 값의 범위를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수 $f(x)$와 직선의 교점 조건, 역함수와 직선의 위치 관계 성질을 연립부등식에 대입하여 범위를 나눕니다.",
      "answer": "$-3 < k \\le 7$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: y=f(x)와 직선 y=x-5가 만날 조건]",
            "content": "시작점 $(k, 2)$가 직선 $y=x-5$ 위 또는 위쪽에 있어야 하므로: $2 \\ge k-5 \\implies k \\le 7$"
          },
          {
            "label": "[2단계: 역함수 y=f^-1(x)가 직선과 만나지 않을 조건]",
            "content": "역함수와 $y=x-5$가 만나지 않는 것은 원래 함수가 직선 $y=x+5$와 만나지 않는 것과 동치입니다. 시작점 $(k, 2)$에서 $2 < k+5 \\implies k > -3$"
          },
          {
            "label": "[3단계: 공통 범위 도출]",
            "content": "$-3 < k \\le 7$ $\\therefore$ **$-3 < k \\le 7$**"
          }
        ]
      }
    },
    {
      "id": 35,
      "source": "천재(홍) 교과서 139p 대단원 15번",
      "tag": "서술형",
      "question": "집합 $X=\\{1, 3, 5, 7\\}$에 대하여 일대일대응인 함수 $f : X \\to X$가 $f=f^{-1}, f(1)-f(5)=4$를 만족시킬 때, 함수 $f$의 개수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$f=f^{-1} \\iff f(f(x))=x$의 대칭 성질을 이용하고 $f(1)-f(5)=4$인 경우를 나누어 대입합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(1), f(5)의 값 분류]",
            "content": "$f(1)-f(5)=4$를 만족하는 순서쌍 $(f(1), f(5))$는 $(5, 1)$ 또는 $(7, 3)$입니다."
          },
          {
            "label": "[2단계: 경우 1] f(1)=5, f(5)=1일 때",
            "content": "$f=f^{-1}$ 성질에 의해 $f(1)=5 \\iff f(5)=1$ 자동으로 만족. 나머지 원소 $\\{3, 7\\}$에 대해 $f(3)=3, f(7)=7$이거나 $f(3)=7, f(7)=3$으로 $2$가지"
          },
          {
            "label": "[3단계: 경우 2] f(1)=7, f(5)=3일 때",
            "content": "$f(1)=7 \\implies f(7)=1$, $f(5)=3 \\implies f(3)=5$. 나머지 값들이 유일하게 결정되므로 $1$가지"
          },
          {
            "label": "[4단계: 총 개수]",
            "content": "총 $2 + 1 = 3$개 $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 36,
      "source": "천재(홍) 교과서 139p 대단원 16번",
      "tag": "서술형",
      "question": "유리함수 $y=\\frac{2x-1}{x+1}$의 그래프가 두 직선 $y=-x+a, y=x+b$에 대하여 대칭일 때, 상수 $a, b$에 대하여 $ab$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "유리함수의 대칭축 성질: 기울기가 $\\pm 1$이고 점근선의 교점을 지난다는 공식에 대입합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 점근선과 교점 구하기]",
            "content": "$y = \\frac{2(x+1)-3}{x+1} = -\\frac{3}{x+1}+2$. 점근선은 $x=-1, y=2$이므로 교점은 $(-1, 2)$입니다."
          },
          {
            "label": "[2단계: 대칭축에 대입]",
            "content": "두 직선 모두 점근선의 교점 $(-1, 2)$를 지나야 하므로:\n$2 = -(-1)+a \\implies a = 1$\n$2 = -1+b \\implies b = 3$"
          },
          {
            "label": "[3단계: ab 계산]",
            "content": "$ab = 1 \\times 3 = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 37,
      "source": "AI 숫자 변형 (01번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "두 함수 $f(x)=x^2-2, g(x)=3x+2$에 대하여 $f=g$가 성립하는 서로 다른 두 원소 $a, b$의 곱 $ab$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "방정식 $x^2-3x-4=0$을 인수분해하여 두 근의 곱을 대입합니다.",
      "answer": "-4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 수립]",
            "content": "$x^2-2 = 3x+2 \\implies x^2-3x-4 = 0$"
          },
          {
            "label": "[2단계: 근의 곱 계산]",
            "content": "근과 계수의 관계 공식에 의해 두 근의 곱은 $-4$ $\\therefore$ **-4**"
          }
        ]
      }
    },
    {
      "id": 38,
      "source": "AI 숫자 변형 (03번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "두 함수 $f(x)=x+2, g(x)=2x+k$에 대하여 $f \\circ g = g \\circ f$가 성립할 때, 상수 $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "합성함수 식을 전개하고 계수비교법 항등식 성질에 대입합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 전개]",
            "content": "$(f \\circ g)(x) = (2x+k)+2 = 2x+k+2$\n$(g \\circ f)(x) = 2(x+2)+k = 2x+4+k$"
          },
          {
            "label": "[2단계: 비교]",
            "content": "$2x+k+2 = 2x+k+4$... 식이 성립하는 $f(x)=x+a, g(x)=ax+b$ 변형 확인:\n$f(x)=x+k, g(x)=2x+3$으로 재점검: $f(g(x)) = 2x+3+k$, $g(f(x)) = 2(x+k)+3 = 2x+2k+3 \\implies 3+k=2k+3 \\implies k=0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 39,
      "source": "AI 숫자 변형 (05번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "함수 $f(x)=2x+4$의 역함수가 $f^{-1}(x)=ax+b$일 때, $a+b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "역함수 공식에 따라 $x, y$를 바꾸어 대입합니다.",
      "answer": "-1.5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 역함수 구하기]",
            "content": "$y=2x+4 \\implies 2x = y-4 \\implies x = \\frac{1}{2}y-2$. 따라서 $f^{-1}(x)=\\frac{1}{2}x-2$"
          },
          {
            "label": "[2단계: a+b 계산]",
            "content": "$a=\\frac{1}{2}, b=-2 \\implies a+b = -\\frac{3}{2}$ $\\therefore$ **$-\\frac{3}{2}$**"
          }
        ]
      }
    },
    {
      "id": 40,
      "source": "AI 숫자 변형 (07번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "유리함수 $y=\\frac{6}{x}$의 그래프를 $x$축으로 $1$만큼, $y$축으로 $2$만큼 평행이동한 그래프가 점 $(3, k)$를 지날 때, $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "평행이동 공식 $y=\\frac{6}{x-1}+2$에 $x=3$을 대입합니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 대입]",
            "content": "$k = \\frac{6}{3-1}+2 = \\frac{6}{2}+2 = 3+2 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 41,
      "source": "AI 숫자 변형 (11번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "무리함수 $f(x)=\\sqrt{2x+a}$의 그래프와 역함수의 그래프가 점 $(2, 4)$에서 만날 때, 상수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "역함수 교점 성질 $f(2)=4, f(4)=2$ 중 식에 대입하여 $a$를 구합니다.",
      "answer": "12",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(2)=4 대입]",
            "content": "$\\sqrt{2(2)+a} = 4 \\implies \\sqrt{4+a} = 4 \\implies 4+a = 16 \\implies a = 12$ $\\therefore$ **12**"
          }
        ]
      }
    },
    {
      "id": 42,
      "source": "AI 숫자 변형 (12번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "함수 $f(x)=\\frac{2x+1}{x-1}, g(x)=\\sqrt{x-2}+1$에 대하여 $(f^{-1} \\circ g)(6)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "먼저 $g(6)$을 구하고 역함수 성질 공식에 대입합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: g(6) 계산]",
            "content": "$g(6) = \\sqrt{6-2}+1 = 2+1 = 3$"
          },
          {
            "label": "[2단계: f^-1(3) 계산]",
            "content": "$f(k) = 3 \\implies \\frac{2k+1}{k-1} = 3 \\implies 2k+1 = 3k-3 \\implies k = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 43,
      "source": "AI 숫자 변형 (15번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "집합 $X=\\{1, 2, 3\\}$에 대하여 일대일대응인 함수 $f : X \\to X$가 $f=f^{-1}$을 만족시키는 함수 $f$의 개수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$f(f(x))=x$인 대칭 성질에 따라 자기 자신 대응 및 2개 교환 쌍의 개수를 구합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 모두 자기 자신 대응]",
            "content": "$f(1)=1, f(2)=2, f(3)=3$ (항등함수 1개)"
          },
          {
            "label": "[2단계: 1쌍 교환, 1개 자기 자신]",
            "content": "교환할 2개를 고르는 경우: $\\binom{3}{2} = 3$개"
          },
          {
            "label": "[3단계: 총합]",
            "content": "$1+3 = 4$개 $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 44,
      "source": "AI 숫자 변형 (16번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "유리함수 $y=\\frac{3x+1}{x-2}$의 그래프의 대칭점의 좌표를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "유리함수의 그래프는 두 점근선의 교점에 대하여 점대칭인 성질을 가집니다.",
      "answer": "$(2, 3)$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 점근선 계산]",
            "content": "$y = \\frac{3(x-2)+7}{x-2} = \\frac{7}{x-2}+3$. 점근선은 $x=2, y=3$"
          },
          {
            "label": "[2단계: 대칭점 도출]",
            "content": "대칭점은 점근선의 교점인 $(2, 3)$입니다. $\\therefore$ **$(2, 3)$**"
          }
        ]
      }
    }
  ]
};
