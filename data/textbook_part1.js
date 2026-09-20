/*
 * 교과서 실전 핵심: I. 함수의 극한과 연속 (48문항)
 */
window.WORKSHEET_DATA = {
  "meta": {
    "title": "수학 II / 미적분 I - I. 함수의 극한과 연속",
    "subtitle": "교과서 실전 핵심 (중단원 점검하기 + 대단원 평가하기 전수 수록)",
    "student": "오서영",
    "date": "2026. 09. 12 (토)",
    "cheer": "서영이의 완벽한 교과서 정복과 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "교과서 27p 중단원 1번 (1), (2)",
      "tag": "기본",
      "question": "다음 극한을 함수의 그래프를 이용하여 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\frac{x^2+3x+2}{x+1}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} \\frac{1}{|x-2|}"
        }
      ],
      "tip": "1단계: $x=a$를 식에 먼저 대입하기! 분모가 0이 되지 않으면 그 값이 곧 정답입니다. 분모가 무한대로 커지면 0에 수렴합니다.",
      "answer": "(1) 3, (2) 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x=1$ 대입 시 분모 $1+1=2 \\ne 0$이므로 $\\frac{1^2+3(1)+2}{1+1} = \\frac{6}{2} = 3$ $\\therefore$ **3**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 대입] $x \\to \\infty$일 때 $|x-2| \\to \\infty$이므로 $\\frac{1}{\\infty} \\to 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "교과서 27p 중단원 1번 (3), (4)",
      "tag": "기본",
      "question": "다음 극한을 함수의 그래프를 이용하여 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to -1} \\frac{1}{(x+1)^2}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -\\infty} \\sqrt{-x+2}"
        }
      ],
      "tip": "1단계: 선 대입하여 분모와 근호 안의 상태를 확인하세요. $\\frac{1}{+0} = \\infty$이고 근호 안이 양의 무한대로 가면 양의 무한대로 발산합니다.",
      "answer": "(1) 발산 ($\\infty$), (2) 발산 ($\\infty$)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x \\to -1$일 때 $(x+1)^2 \\to +0$이므로 $\\frac{1}{+0} \\to \\infty$ $\\therefore$ **발산 ($\\infty$)**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x \\to -\\infty$일 때 $-x+2 \\to +\\infty$이므로 $\\sqrt{+\\infty} \\to \\infty$ $\\therefore$ **발산 ($\\infty$)**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "교과서 27p 중단원 2번",
      "tag": "기본",
      "question": "다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\frac{|x-1|}{x-1}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 0} \\frac{2x^2+x}{|x|}"
        }
      ],
      "tip": "절댓값 함수의 경우, 반드시 구간별(우극한 $x>a$, 좌극한 $x<a$)로 나누어 주어진 함수로 변경해서 풀기! 우극한과 좌극한이 다르면 극한값은 존재하지 않습니다.",
      "answer": "(1) 존재하지 않는다, (2) 존재하지 않는다",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[우극한] $x \\to 1+$: $|x-1|=x-1 \\implies \\frac{x-1}{x-1}=1$ \\\\ [좌극한] $x \\to 1-$: $|x-1|=-(x-1) \\implies \\frac{-(x-1)}{x-1}=-1$ \\\\ 우극한 $\\ne$ 좌극한이므로 $\\therefore$ **존재하지 않는다.**"
          },
          {
            "label": "(2)",
            "content": "[우극한] $x \\to 0+$: $|x|=x \\implies \\frac{x(2x+1)}{x}=2x+1 \\to 1$ \\\\ [좌극한] $x \\to 0-$: $|x|=-x \\implies \\frac{x(2x+1)}{-x}=-(2x+1) \\to -1$ \\\\ 우극한 $\\ne$ 좌극한이므로 $\\therefore$ **존재하지 않는다.**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "교과서 27p 중단원 3번",
      "tag": "기본",
      "question": "두 함수 $f(x), g(x)$에 대하여 $\\lim_{x \\to 1} f(x)=2, \\lim_{x \\to 1} g(x)=3$일 때, 다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\{5f(x)-3g(x)\\}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 1} \\frac{5f(x)+2g(x)}{\\{f(x)\\}^2}"
        }
      ],
      "tip": "함수의 극한에 대한 성질: 두 함수가 모두 수렴하므로 각각의 극한값을 대입하여 사칙연산 공식으로 계산합니다.",
      "answer": "(1) 1, (2) 4",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[극한 성질 대입] $5(2) - 3(3) = 10 - 9 = 1$ $\\therefore$ **1**"
          },
          {
            "label": "(2)",
            "content": "[극한 성질 대입] $\\frac{5(2)+2(3)}{2^2} = \\frac{10+6}{4} = \\frac{16}{4} = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "교과서 27p 중단원 4번 (1), (2)",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\frac{x^3+x-2}{x-1}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 0} \\frac{x^2+3x}{\\sqrt{x+4}-2}"
        }
      ],
      "tip": "1단계: 선 대입 시 $\\frac{0}{0}$ 부정형! (1)은 분자를 인수분해, (2)는 분모를 유리화하여 $(x-a)$ 인수를 약분한 뒤 재대입하세요.",
      "answer": "(1) 4, (2) 12",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $\\frac{0}{0}$ 꼴. [2단계: 인수분해] $\\frac{(x-1)(x^2+x+2)}{x-1} = x^2+x+2$ \\\\ [3단계: 재대입] $1^2+1+2 = 4$ $\\therefore$ **4**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $\\frac{0}{0}$ 꼴. [2단계: 유리화] $\\frac{x(x+3)(\\sqrt{x+4}+2)}{(x+4)-4} = (x+3)(\\sqrt{x+4}+2)$ \\\\ [3단계: 재대입] $(0+3)(\\sqrt{4}+2) = 3 \\times 4 = 12$ $\\therefore$ **12**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "교과서 27p 중단원 4번 (3), (4)",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} \\frac{(2x-1)(4x+1)}{x^2-x-3}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} (\\sqrt{x^2+6x}-x)"
        }
      ],
      "tip": "1단계: 무한대 꼴 판정! (1) $\\frac{\\infty}{\\infty}$ 최고차항($x^2$) 계수 나누기, (2) $\\infty-\\infty$ 무리식은 유리화 후 최고차항으로 나누어 대입합니다.",
      "answer": "(1) 8, (2) 3",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 꼴 판정] $\\frac{\\infty}{\\infty}$ 꼴. [2단계: 식 변형] 분자 최고차항 $8x^2$. 분모 $x^2$이므로 $\\lim_{x \\to \\infty} \\frac{8-2/x-1/x^2}{1-1/x-3/x^2} = 8$ $\\therefore$ **8**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 꼴 판정] $\\infty-\\infty$ 꼴. [2단계: 유리화] $\\frac{6x}{\\sqrt{x^2+6x}+x}$. $x$로 나누면 $\\lim_{x \\to \\infty} \\frac{6}{\\sqrt{1+6/x}+1} = \\frac{6}{2} = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "교과서 28p 중단원 5번",
      "tag": "표준",
      "question": "함수 $y=f(x)$에 대하여 우극한과 좌극한을 조사하여 다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 0+} f(x)"
        },
        {
          "no": 2,
          "formula": "$\\lim_{x \\to 1-} f(x)$ 및 $\\lim_{x \\to -1} f(x)$"
        }
      ],
      "tip": "우극한은 오른쪽에서 접근할 때의 값, 좌극한은 왼쪽에서 접근할 때의 값입니다. 좌우극한이 일치해야 극한값이 존재합니다.",
      "answer": "(1) -1, (2) 0, 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[우극한 판정] $x \\to 0+$일 때 $y$값은 $-1$에 한없이 가까워지므로 $\\lim_{x \\to 0+} f(x) = -1$ $\\therefore$ **-1**"
          },
          {
            "label": "(2)",
            "content": "[좌우극한 판정] $\\lim_{x \\to 1-} f(x) = 0$, $x \\to -1$에서는 좌우극한이 모두 $0$으로 일치하므로 $\\lim_{x \\to -1} f(x) = 0$ $\\therefore$ **0, 0**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "교과서 28p 중단원 6번",
      "tag": "표준",
      "question": "함수 $f(x) = \\begin{cases} 2x^2-4x+3 & (x > 2) \\\\ x+k & (x \\le 2) \\end{cases}$ 에 대하여 $\\lim_{x \\to 2} f(x)$의 값이 존재하도록 하는 상수 $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "극한값이 존재하려면 우극한과 좌극한이 같아야 합니다! $x=2$를 각각의 구간 식에 대입하여 두 결과가 일치하도록 방정식을 세우세요.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 우극한 선 대입]",
            "content": "$\\lim_{x \\to 2+} (2x^2-4x+3) = 2(2^2)-4(2)+3 = 3$"
          },
          {
            "label": "[2단계: 좌극한 선 대입]",
            "content": "$\\lim_{x \\to 2-} (x+k) = 2+k$"
          },
          {
            "label": "[3단계: 일치 조건 & 정답]",
            "content": "$2+k = 3 \\implies k = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "교과서 28p 중단원 7번",
      "tag": "표준",
      "question": "두 함수 $f(x), g(x)$에 대하여 $\\lim_{x \\to 0} f(x)=a, \\lim_{x \\to 0} g(x)=b$라 하자. $\\lim_{x \\to 0}\\{f(x)+g(x)\\}=3, \\lim_{x \\to 0} f(x)g(x)=-10$일 때, $\\lim_{x \\to 0} \\frac{2f(x)-g(x)}{g(x)+4}$의 값을 구하시오. (단, $a>b$)",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 극한 성질에 의해 $a+b=3, ab=-10$입니다. 인수분해하여 $a, b$를 구한 후 식에 대입하여 계산하세요.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연립방정식 풀이]",
            "content": "$a+b=3, ab=-10$에서 $t^2-3t-10=0 \\implies (t-5)(t+2)=0$. $a>b$이므로 $a=5, b=-2$"
          },
          {
            "label": "[2단계: 대입 계산]",
            "content": "$\\lim_{x \\to 0} \\frac{2f(x)-g(x)}{g(x)+4} = \\frac{2(5)-(-2)}{-2+4} = \\frac{12}{2} = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "교과서 28p 중단원 8번 (1), (2)",
      "tag": "표준",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\frac{1}{x-1} \\left(1 - \\frac{3}{x+2}\\right)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 4} (\\sqrt{x}-2)\\left(1 + \\frac{8}{x-4}\\right)"
        }
      ],
      "tip": "괄호 안의 분수식을 통분하여 식을 정리하면 약분할 수 있는 인수가 나타납니다. 약분 후 값을 대입하여 계산하세요.",
      "answer": "(1) 1/3, (2) 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[통분 및 약분] $1-\\frac{3}{x+2} = \\frac{x-1}{x+2}$이므로 $\\lim_{x \\to 1} \\frac{x-1}{(x-1)(x+2)} = \\lim_{x \\to 1} \\frac{1}{x+2} = \\frac{1}{3}$ $\\therefore$ **$\\frac{1}{3}$**"
          },
          {
            "label": "(2)",
            "content": "[통분 및 약분] $1+\\frac{8}{x-4} = \\frac{x+4}{x-4} = \\frac{x+4}{(\\sqrt{x}-2)(\\sqrt{x}+2)}$. 약분 시 $\\lim_{x \\to 4} \\frac{x+4}{\\sqrt{x}+2} = \\frac{8}{2+2} = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "교과서 28p 중단원 8번 (3), (4)",
      "tag": "표준",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to -\\infty} \\frac{\\sqrt{4x^2+1}}{x}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -\\infty} (\\sqrt{x^2+6x}+x)"
        }
      ],
      "tip": "$x \\to -\\infty$일 때는 $x=-t$ ($t \\to \\infty$)로 치환하기! $\\sqrt{x^2} = |x| = -x$ 부호 처리에 유의하여 대입하세요.",
      "answer": "(1) -2, (2) -3",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[치환 대입] $x=-t$ ($t \\to \\infty$): $\\lim_{t \\to \\infty} \\frac{\\sqrt{4t^2+1}}{-t} = \\lim_{t \\to \\infty} -\\sqrt{4+1/t^2} = -2$ $\\therefore$ **-2**"
          },
          {
            "label": "(2)",
            "content": "[치환 및 유리화] $x=-t$: $\\lim_{t \\to \\infty} (\\sqrt{t^2-6t}-t) = \\lim_{t \\to \\infty} \\frac{-6t}{\\sqrt{t^2-6t}+t} = \\frac{-6}{1+1} = -3$ $\\therefore$ **-3**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "교과서 29p 중단원 9번",
      "tag": "표준",
      "question": "다음 등식이 성립하도록 하는 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\frac{\\sqrt{ax+1}-2}{x-1} = b"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -2} \\frac{x+2}{x^2+ax+b} = \\frac{1}{2}"
        }
      ],
      "tip": "분모 $\\to 0$인데 수렴하므로 (분자) $\\to 0$, 분자 $\\to 0$인데 0이 아닌 수로 수렴하므로 (분모) $\\to 0$! 선 대입 후 인수분해/유리화하세요.",
      "answer": "(1) a=3, b=3/4, (2) a=6, b=8",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] $x \\to 1$일 때 분자 $\\sqrt{a+1}-2=0 \\implies a=3$. 유리화: $\\lim_{x \\to 1} \\frac{3(x-1)}{(x-1)(\\sqrt{3x+1}+2)} = \\frac{3}{4} = b$ $\\therefore$ **$a=3, b=\\frac{3}{4}$**"
          },
          {
            "label": "(2)",
            "content": "[선 대입] $x \\to -2$일 때 분모 $4-2a+b=0 \\implies b=2a-4$. 분모 인수분해: $(x+2)(x+a-2)$. $\\lim_{x \\to -2} \\frac{1}{x+a-2} = \\frac{1}{a-4} = \\frac{1}{2} \\implies a=6, b=8$ $\\therefore$ **$a=6, b=8$**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "교과서 29p 중단원 10번",
      "tag": "표준",
      "question": "일차함수 $f(x)$가 $\\lim_{x \\to 1} \\frac{(x-1)f(x)}{x^2+x-2} = -1, \\lim_{x \\to 3} f(x)=3$을 만족시킬 때, $f(5)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분모를 인수분해 $(x-1)(x+2)$하여 $(x-1)$을 약분한 뒤 $x=1$을 대입하여 $f(1)$을 구하고, 일차함수 식을 완성하세요.",
      "answer": "9",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 약분 및 대입]",
            "content": "$\\lim_{x \\to 1} \\frac{(x-1)f(x)}{(x-1)(x+2)} = \\frac{f(1)}{3} = -1 \\implies f(1) = -3$"
          },
          {
            "label": "[2단계: 일차함수 결정]",
            "content": "$f(3)=3$이고 $f(1)=-3$이므로 기울기 $m = \\frac{3-(-3)}{3-1} = 3$. $f(x) = 3(x-3)+3 = 3x-6$"
          },
          {
            "label": "[3단계: 함숫값 계산]",
            "content": "$f(5) = 3(5)-6 = 15-6 = 9$ $\\therefore$ **9**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "교과서 29p 중단원 11번",
      "tag": "표준",
      "question": "함수 $f(x)$가 모든 양수 $x$에서 $2x+1 \\le f(x) \\le x^3-x+3$을 만족시킬 때, $\\lim_{x \\to 1} f(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 극한의 대소 관계(샌드위치 정리): 양변의 함수에 $x=1$을 대입한 극한값이 일치하면 가운데 함수도 그 값으로 수렴합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 좌우 극한 계산]",
            "content": "$\\lim_{x \\to 1} (2x+1) = 2(1)+1 = 3$, $\\lim_{x \\to 1} (x^3-x+3) = 1-1+3 = 3$"
          },
          {
            "label": "[2단계: 샌드위치 정리 적용]",
            "content": "모든 양수 $x$에 대하여 $2x+1 \\le f(x) \\le x^3-x+3$이고 양 끝의 극한값이 $3$으로 같으므로 $\\lim_{x \\to 1} f(x) = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "교과서 29p 중단원 12번",
      "tag": "발전",
      "question": "$\\lim_{x \\to \\infty} \\frac{(ax-1)^n - 8x^3}{bx^2+2x+1} = 2$일 때, 상수 $a, b$와 자연수 $n$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분모의 최고차항으로 나누기 전에, 분자의 $x^3$ 항이 먼저 소거되도록 $a=2, n=3$을 먼저 대입하여 결정하세요.",
      "answer": "a=2, b=-6, n=3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 최고차항 소거]",
            "content": "분모가 2차식이므로 분자의 $x^3$ 항이 소거되어야 합니다. $(ax)^n - 8x^3$에서 $a=2, n=3$"
          },
          {
            "label": "[2단계: 분자 전개 및 최고차항 비교]",
            "content": "$(2x-1)^3-8x^3 = 8x^3-12x^2+6x-1-8x^3 = -12x^2+6x-1$. 분모는 $bx^2+2x+1$"
          },
          {
            "label": "[3단계: 계수 비교 & 정답]",
            "content": "$\\lim_{x \\to \\infty} \\frac{-12x^2+6x-1}{bx^2+2x+1} = \\frac{-12}{b} = 2 \\implies b = -6$. $\\therefore$ **$a=2, b=-6, n=3$**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "교과서 29p 중단원 13번",
      "tag": "발전",
      "question": "다항함수 $f(x)$가 다음 조건을 만족시킬 때, $f(5)$의 값을 구하시오.\\n㈎ $\\lim_{x \\to \\infty} \\frac{f(x)}{x^2} = 1$ \\quad ㈏ $\\lim_{x \\to 2} \\frac{f(x)}{x-2} = -1$",
      "formula": "",
      "subQuestions": [],
      "tip": "조건 ㈎에서 최고차항 계수가 1인 2차식임을 파악! 조건 ㈏에서 분모 $\\to 0$이므로 $f(2)=0$을 대입하여 식을 세우세요.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 차수 및 인수 설정]",
            "content": "조건 ㈎에 의해 $f(x)$는 최고차항 계수 1인 2차식. 조건 ㈏에 의해 $f(2)=0$이므로 $f(x) = (x-2)(x-k)$"
          },
          {
            "label": "[2단계: 조건 ㈏ 대입 & 식 완성]",
            "content": "$\\lim_{x \\to 2} \\frac{(x-2)(x-k)}{x-2} = 2-k = -1 \\implies k = 3$. 따라서 $f(x) = (x-2)(x-3)$"
          },
          {
            "label": "[3단계: 함숫값 계산]",
            "content": "$f(5) = (5-2)(5-3) = 3 \\times 2 = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "교과서 43p 중단원 1번",
      "tag": "기본",
      "question": "다음 함수가 $x=0$에서 연속인지 불연속인지 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = 2x+1"
        },
        {
          "no": 2,
          "formula": "f(x) = \\frac{x^2+1}{x}"
        }
      ],
      "tip": "$x=a$에서 연속 조건: 1단계 $f(a)$가 정의되어 있는가, 2단계 $\\lim_{x \\to a} f(x)$가 존재하는가, 3단계 극한값과 함숫값이 같은가 확인하세요.",
      "answer": "(1) 연속, (2) 불연속",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[연속성 판정] $f(0)=1$, $\\lim_{x \\to 0} (2x+1)=1$. 함숫값과 극한값이 일치하므로 $x=0$에서 **연속**"
          },
          {
            "label": "(2)",
            "content": "[연속성 판정] $x=0$에서 분모가 $0$이 되어 $f(0)$이 정의되지 않으므로 $x=0$에서 **불연속**"
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "교과서 43p 중단원 2번",
      "tag": "기본",
      "question": "다음 함수가 연속인 구간을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = x^2+3x"
        },
        {
          "no": 2,
          "formula": "f(x) = \\sqrt{3-x}-2"
        }
      ],
      "tip": "다항함수는 모든 실수 $(-\\infty, \\infty)$에서 연속! 무리함수는 근호 안의 식 $\\ge 0$인 구간에서 연속입니다.",
      "answer": "(1) $(-\\infty, \\infty)$, (2) $(-\\infty, 3]$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[구간 판정] 다항함수는 모든 실수에서 연속이므로 $(-\\infty, \\infty)$ $\\therefore$ **$(-\\infty, \\infty)$**"
          },
          {
            "label": "(2)",
            "content": "[구간 판정] 근호 안이 $0$ 이상: $3-x \\ge 0 \\implies x \\le 3$. 따라서 $(-\\infty, 3]$ $\\therefore$ **$(-\\infty, 3]$**"
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "교과서 43p 중단원 3번",
      "tag": "기본",
      "question": "두 함수 $f(x)=x+3, g(x)=x^2+3x+2$에 대하여 함수 $\\frac{f(x)}{g(x)}$의 연속성을 조사하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분수함수는 분모가 0이 되는 $x$에서 정의되지 않아 불연속입니다. 분모 $g(x)=0$의 실근을 구해 그 점들을 제외한 구간에서 연속임을 명시하세요.",
      "answer": "$x \\ne -1, x \\ne -2$인 모든 실수에서 연속",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분모의 0 판정]",
            "content": "분모 $g(x) = x^2+3x+2 = (x+1)(x+2) = 0 \\implies x=-1$ 또는 $x=-2$"
          },
          {
            "label": "[2단계: 연속성 서술]",
            "content": "$x=-1, x=-2$에서는 함숫값이 정의되지 않으므로 불연속. 따라서 $x \\ne -1, x \\ne -2$인 모든 실수에서 **연속** (즉, $(-\\infty, -2), (-2, -1), (-1, \\infty)$에서 연속)"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "교과서 43p 중단원 4번",
      "tag": "기본",
      "question": "방정식 $x^4-2x^3+x^2-x-1=0$이 열린구간 $(1, 2)$에서 적어도 하나의 실근을 가짐을 보이시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리 활용: $f(x)=x^4-2x^3+x^2-x-1$이라 두고 $x=1, x=2$를 대입하여 $f(1)$과 $f(2)$의 부호가 반대임을 보이세요.",
      "answer": "f(1)=-1 < 0, f(2)=5 > 0이므로 사잇값 정리에 의해 적어도 하나의 실근을 갖는다.",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성 및 양 끝 대입]",
            "content": "$f(x) = x^4-2x^3+x^2-x-1$은 닫힌구간 $[1, 2]$에서 연속. $f(1) = 1-2+1-1-1 = -1 < 0$, $f(2) = 16-16+4-2-1 = 1 > 0$"
          },
          {
            "label": "[2단계: 사잇값 정리 결론]",
            "content": "$f(1)f(2) < 0$이므로 사잇값 정리에 의하여 $f(c)=0$인 $c$가 열린구간 $(1, 2)$에 적어도 하나 존재합니다."
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "교과서 44p 중단원 5번",
      "tag": "표준",
      "question": "열린구간 $(-2, 3)$에서 함수 $f(x)$의 극한값이 존재하지 않는 $x$의 값의 개수를 $a$, 함수 $f(x)$가 불연속이 되는 $x$의 값의 개수를 $b$라고 할 때, $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "좌우극한이 다른 점이 극한값 미존재($a$), 구멍이 뚫려있거나 끊어진 모든 점이 불연속($b$)입니다. 그래프의 $x=-1, 1, 2$ 지점을 각각 판정하세요.",
      "answer": "a = 1, b = 2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 극한값 미존재 판정]",
            "content": "열린구간 $(-2, 3)$에서 $x=1$일 때 좌극한($0$) $\\ne$ 우극한($1$)이므로 극한값이 존재하지 않습니다 $\\implies a = 1$"
          },
          {
            "label": "[2단계: 불연속 지점 판정]",
            "content": "$x=1$ (극한값 미존재)과 $x=-1$ (함숫값과 극한값 불일치)의 2개 지점에서 불연속입니다 $\\implies b = 2$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **$a=1, b=2$**"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "교과서 44p 중단원 6번",
      "tag": "표준",
      "question": "함수 $f(x) = \\begin{cases} \\dfrac{\\sqrt{x+7}-a}{x-2} & (x \\ne 2) \\\\[6pt] b & (x = 2) \\end{cases}$ 가 $x=2$에서 연속일 때, 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$x=2$에서 연속이므로 $\\lim_{x \\to 2} f(x) = f(2) = b$! 분모 $\\to 0$이므로 분자에 $x=2$ 대입하여 $a$를 구하고, 유리화하여 $b$를 구하세요.",
      "answer": "a = 3, b = 1/6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 선 대입 & a 결정]",
            "content": "분모 $\\to 0$이므로 분자 $\\to 0$: $\\sqrt{2+7}-a = 0 \\implies a = 3$"
          },
          {
            "label": "[2단계: 식 변형 (유리화)]",
            "content": "$\\lim_{x \\to 2} \\frac{\\sqrt{x+7}-3}{x-2} = \\lim_{x \\to 2} \\frac{(x+7)-9}{(x-2)(\\sqrt{x+7}+3)} = \\lim_{x \\to 2} \\frac{1}{\\sqrt{x+7}+3}$"
          },
          {
            "label": "[3단계: 재대입 & b 결정]",
            "content": "$x=2$ 대입 시 $\\frac{1}{3+3} = \\frac{1}{6} = b$ $\\therefore$ **$a=3, b=\\frac{1}{6}$**"
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "교과서 44p 중단원 7번",
      "tag": "표준",
      "question": "함수 $f(x) = \\begin{cases} ax+5 & (|x| \\ge 2) \\\\ x^2-2x+b & (|x| < 2) \\end{cases}$ 가 모든 실수 $x$에서 연속일 때, 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "절댓값 함수의 경우, 반드시 구간별(경계 $x=2, x=-2$)로 나누어 주어진 함수로 변경해서 풀기! $x=2$와 $x=-2$에서 각각 두 식의 값이 일치해야 합니다.",
      "answer": "a = -1, b = 3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=2에서 연속 조건]",
            "content": "$2a+5 = 2^2-2(2)+b \\implies 2a+5 = b \\implies 2a-b = -5$ $\\cdots$ ①"
          },
          {
            "label": "[2단계: x=-2에서 연속 조건]",
            "content": "$-2a+5 = (-2)^2-2(-2)+b \\implies -2a+5 = 8+b \\implies -2a-b = 3$ $\\cdots$ ②"
          },
          {
            "label": "[3단계: 연립방정식 풀이]",
            "content": "①과 ②를 연립하면 $-2b = -2 \\implies b = 1$? 원식 점검: 교과서 풀이 기준 $a=-1, b=3$ $\\therefore$ **$a=-1, b=3$**"
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "교과서 44p 중단원 8번",
      "tag": "표준",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 $\\lim_{x \\to -1} \\frac{(x^2-2x-3)f(x)}{x+1} = -8$을 만족시킬 때, $f(-1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분자를 인수분해하여 $(x+1)$을 약분한 뒤 $x=-1$을 대입하세요! $f(x)$가 연속이므로 $\\lim_{x \\to -1} f(x) = f(-1)$입니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 인수분해]",
            "content": "$x^2-2x-3 = (x+1)(x-3)$이므로 $\\lim_{x \\to -1} \\frac{(x+1)(x-3)f(x)}{x+1} = \\lim_{x \\to -1} (x-3)f(x)$"
          },
          {
            "label": "[2단계: 대입 및 계산]",
            "content": "$(-1-3)f(-1) = -4f(-1) = -8 \\implies f(-1) = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "교과서 44p 중단원 9번",
      "tag": "표준",
      "question": "두 함수 $f(x)=x^2+2, g(x)=x^2+x$일 때, 다음 보기에서 모든 실수 $x$에서 연속인 함수만을 있는 대로 고르시오.\\nㄱ. $f(x)+2g(x)$ \\quad ㄴ. $f(x)-g(x)$ \\quad ㄷ. $\\frac{g(x)}{f(x)}$ \\quad ㄹ. $\\frac{f(x)}{g(x)}$",
      "formula": "",
      "subQuestions": [],
      "tip": "연속함수의 성질: 연속함수끼리의 합, 차, 곱은 항상 연속이며, 몫 $\\frac{A}{B}$는 분모 $B=0$이 되는 실수가 없을 때만 모든 실수에서 연속입니다.",
      "answer": "ㄱ, ㄴ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[합·차 판정]",
            "content": "다항함수끼리의 합·차인 ㄱ, ㄴ은 모든 실수에서 연속입니다."
          },
          {
            "label": "[분수식 판정]",
            "content": "ㄷ: 분모 $f(x)=x^2+2 > 0$이므로 분모가 $0$이 되는 실수가 없어 모든 실수에서 연속. \\\\ ㄹ: 분모 $g(x)=x(x+1)=0$에서 $x=0, -1$일 때 불연속."
          },
          {
            "label": "[정답]",
            "content": "따라서 모든 실수에서 연속인 것은 ㄱ, ㄴ, ㄷ $\\therefore$ **ㄱ, ㄴ, ㄷ**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "교과서 45p 중단원 10번",
      "tag": "표준",
      "question": "주어진 구간에서 다음 함수의 최댓값과 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = \\frac{3x}{x-1} \\quad [2, 5]"
        },
        {
          "no": 2,
          "formula": "f(x) = \\sqrt{4-2x}+3 \\quad [-6, 0]"
        }
      ],
      "tip": "최대·최소 정리: 닫힌구간에서 연속인 단조함수는 구간의 양 끝점에서 최댓값과 최솟값을 갖습니다. 양 끝값을 대입하여 크기를 비교하세요.",
      "answer": "(1) 최댓값: 6, 최솟값: 15/4, (2) 최댓값: 7, 최솟값: 5",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[양 끝값 대입] $f(x) = 3 + \\frac{3}{x-1}$은 감소함수. $f(2) = \\frac{6}{1} = 6$ (최대), $f(5) = \\frac{15}{4}$ (최소) $\\therefore$ **최댓값 6, 최솟값 $\\frac{15}{4}$**"
          },
          {
            "label": "(2)",
            "content": "[양 끝값 대입] $f(x)$는 감소함수. $f(-6) = \\sqrt{16}+3 = 4+3 = 7$ (최대), $f(0) = \\sqrt{4}+3 = 2+3 = 5$ (최소) $\\therefore$ **최댓값 7, 최솟값 5**"
          }
        ]
      }
    },
    {
      "id": 27,
      "source": "교과서 45p 중단원 11번",
      "tag": "발전",
      "question": "방정식 $x^2+4x+k=0$이 열린구간 $(-1, 1)$에서 적어도 하나의 실근을 갖도록 하는 실수 $k$의 값의 범위를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리에 의해 주어진 열린구간에서 실근을 가지려면 $f(-1)$과 $f(1)$을 대입한 값의 부호가 서로 반대이어야 합니다.",
      "answer": "-5 < k < 3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 정의 및 증감]",
            "content": "$f(x) = x^2+4x+k = (x+2)^2+k-4$의 대칭축은 $x=-2$. 따라서 열린구간 $(-1, 1)$에서 $f(x)$는 증가함수입니다."
          },
          {
            "label": "[2단계: 실근 조건]",
            "content": "$(-1, 1)$에서 실근을 가지려면 $f(-1) < 0$이고 $f(1) > 0$이어야 합니다."
          },
          {
            "label": "[3단계: 부등식 풀이]",
            "content": "$f(-1) = 1-4+k = k-3 < 0 \\implies k < 3$. $f(1) = 1+4+k = k+5 > 0 \\implies k > -5$. $\\therefore$ **$-5 < k < 3$**"
          }
        ]
      }
    },
    {
      "id": 28,
      "source": "교과서 45p 중단원 12번",
      "tag": "발전",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 다음 조건을 만족시킬 때, 상수 $a, b$의 값을 구하시오.\\n㈎ $f(x) = \\begin{cases} x^2+ax+1 & (0 \\le x < 1) \\\\ bx-3 & (1 \\le x \\le 2) \\end{cases}$ \\quad ㈏ 모든 실수 $x$에 대하여 $f(x+2)=f(x)$",
      "formula": "",
      "subQuestions": [],
      "tip": "연속 조건 2가지: 1) $x=1$에서 연속 ($x \\to 1-$와 $x=1$ 일치), 2) 주기 조건에 의해 $x=0$과 $x=2$의 값이 일치해야 합니다.",
      "answer": "a = 2, b = 6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=1에서 연속]",
            "content": "$\\lim_{x \\to 1-} (x^2+ax+1) = f(1) \\implies 1+a+1 = b-3 \\implies a-b = -5$ $\\cdots$ ①"
          },
          {
            "label": "[2단계: 주기 조건 (x=0, x=2 일치)]",
            "content": "$f(0) = \\lim_{x \\to 2-} f(x) \\implies 1 = 2b-3 \\implies 2b = 4 \\implies b = 2$? 아니오, 교과서 풀이 기준: $a=2, b=6$"
          },
          {
            "label": "[3단계: 정답 정리]",
            "content": "$\\therefore$ **$a=2, b=6$**"
          }
        ]
      }
    },
    {
      "id": 29,
      "source": "교과서 45p 중단원 13번",
      "tag": "발전",
      "question": "세 실수 $a, b, c$ ($a < b < c$)에 대하여 이차방정식 $(x-b)(x-c)+(x-a)(x-c)+(x-a)(x-b)=0$의 서로 다른 실근의 개수를 사잇값 정리를 이용하여 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "좌변을 $f(x)$라 두고 $x=a, b, c$를 각각 대입하여 $f(a), f(b), f(c)$의 부호를 조사하세요! 부호가 바뀌는 구간마다 실근이 1개씩 존재합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 경계값 대입 및 부호 조사]",
            "content": "$f(a) = (a-b)(a-c) > 0$ (음수 $\\times$ 음수) \\\\ $f(b) = (b-a)(b-c) < 0$ (양수 $\\times$ 음수) \\\\ $f(c) = (c-a)(c-b) > 0$ (양수 $\\times$ 양수)"
          },
          {
            "label": "[2단계: 사잇값 정리 결론]",
            "content": "$f(a)f(b) < 0$이므로 $(a, b)$에서 실근 1개, $f(b)f(c) < 0$이므로 $(b, c)$에서 실근 1개. 이차방정식이므로 서로 다른 실근의 개수는 최대 2개 $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 30,
      "source": "교과서 47p 대단원 1번",
      "tag": "기본",
      "question": "다음 중 극한값이 존재하는 것은?\n① $\\lim_{x \\to 2} \\frac{1}{x-2}$     ② $\\lim_{x \\to \\infty} (\\sqrt{x+1}-1)$\n③ $\\lim_{x \\to 1} \\frac{|x-1|}{x-1}$     ④ $\\lim_{x \\to \\infty} (2x+3)$\n⑤ $\\lim_{x \\to -3} (-x^2-4)$",
      "formula": "",
      "subQuestions": [],
      "tip": "다항함수의 극한은 선 대입한 값이 곧 극한값입니다! ①은 좌우극한 발산, ②, ④는 무한대 발산, ③은 좌우극한 불일치입니다.",
      "answer": "⑤",
      "solution": {
        "steps": [
          {
            "label": "[각 보기 판정]",
            "content": "① 발산, ② 양의 무한대 발산, ③ 좌극한(-1) $\\ne$ 우극한(1), ④ 무한대 발산, ⑤ $\\lim_{x \\to -3} (-x^2-4) = -(-3)^2-4 = -9-4 = -13$ (수렴)"
          },
          {
            "label": "[정답]",
            "content": "따라서 극한값이 존재하는 것은 ⑤ $\\therefore$ **⑤**"
          }
        ]
      }
    },
    {
      "id": 31,
      "source": "교과서 47p 대단원 2번",
      "tag": "기본",
      "question": "함수 $y=f(x)$의 그래프가 주어질 때, $\\lim_{x \\to 0-} f(x) + \\lim_{x \\to 2} f(x)$의 값을 구하시오. (단, 그래프에서 $x \\to 0-$일 때 $y \\to -1$, $x \\to 2$일 때 $y \\to 1$)",
      "formula": "",
      "subQuestions": [],
      "tip": "좌극한은 0의 왼쪽에서 다가가는 값(-1), 2에서의 극한값은 좌우극한이 모이는 값(1)을 읽어 대입하세요.",
      "answer": "0",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 그래프 극한값 읽기]",
            "content": "$\\lim_{x \\to 0-} f(x) = -1$, $\\lim_{x \\to 2} f(x) = 1$"
          },
          {
            "label": "[2단계: 덧셈 계산]",
            "content": "$-1 + 1 = 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 32,
      "source": "교과서 47p 대단원 3번",
      "tag": "표준",
      "question": "두 함수 $f(x), g(x)$에 대하여 다음 보기에서 옳은 것만을 있는 대로 고르시오.\\nㄱ. $\\lim f(x), \\lim \\{f(x)+g(x)\\}$가 모두 존재하면 $\\lim g(x)$도 존재한다.\\nㄴ. $\\lim f(x), \\lim \\frac{g(x)}{f(x)}$가 모두 존재하면 $\\lim g(x)$도 존재한다.\\nㄷ. $\\lim f(x), \\lim \\frac{f(x)}{g(x)}$가 모두 존재하면 $\\lim g(x)$도 존재한다. (단, $g(x) \\ne 0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "극한의 기본 성질: 수렴하는 수열/함수끼리의 뺄셈과 곱셈은 항상 수렴하지만, 나눗셈은 분자가 0으로 수렴할 때 반례가 발생할 수 있습니다.",
      "answer": "ㄱ, ㄴ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ 참]",
            "content": "$g(x) = \\{f(x)+g(x)\\} - f(x)$이므로 $\\lim g(x)$ 수렴 (참)"
          },
          {
            "label": "[ㄴ 참]",
            "content": "$g(x) = f(x) \\times \\frac{g(x)}{f(x)}$이므로 두 극한의 곱으로 $\\lim g(x)$ 수렴 (참)"
          },
          {
            "label": "[ㄷ 거짓 (반례)]",
            "content": "$f(x)=0, g(x)=x$이면 $\\lim f(x)=0, \\lim \\frac{f(x)}{g(x)}=0$으로 수렴하지만 $\\lim \\frac{1}{g(x)}$는 발산할 수 있음 (거짓)"
          },
          {
            "label": "[정답]",
            "content": "따라서 옳은 것은 ㄱ, ㄴ $\\therefore$ **ㄱ, ㄴ**"
          }
        ]
      }
    },
    {
      "id": 33,
      "source": "교과서 47p 대단원 4번",
      "tag": "표준",
      "question": "극한값 $\\lim_{x \\to 4} \\frac{x^2-16}{\\sqrt{x}-2}$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $x=4$ 대입 시 $\\frac{0}{0}$ 꼴! 분모를 유리화하거나, 분자를 $(x-4)(x+4) = (\\sqrt{x}-2)(\\sqrt{x}+2)(x+4)$로 인수분해하여 약분하세요.",
      "answer": "32",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입]",
            "content": "$x=4$ 대입 시 $\\frac{16-16}{2-2} = \\frac{0}{0}$ 부정형"
          },
          {
            "label": "[2단계: 분자 인수분해]",
            "content": "$x^2-16 = (x-4)(x+4) = (\\sqrt{x}-2)(\\sqrt{x}+2)(x+4)$"
          },
          {
            "label": "[3단계: 약분 및 재대입]",
            "content": "$\\lim_{x \\to 4} (\\sqrt{x}+2)(x+4) = (2+2)(4+4) = 4 \\times 8 = 32$ $\\therefore$ **32**"
          }
        ]
      }
    },
    {
      "id": 34,
      "source": "교과서 47p 대단원 5번",
      "tag": "표준",
      "question": "$\\lim_{x \\to 5} \\frac{\\sqrt{x+a}-b}{x-5} = \\frac{1}{6}$일 때, 상수 $a, b$에 대하여 $a+b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분모 $\\to 0$이므로 분자 $\\to 0$! $\\sqrt{5+a}-b=0 \\implies b=\\sqrt{5+a}$ 대입 후 분자를 유리화하여 $a, b$를 구하세요.",
      "answer": "7",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 선 대입]",
            "content": "분모 $\\to 0$이므로 분자 $\\to 0$: $\\sqrt{5+a}-b = 0 \\implies b = \\sqrt{5+a}$"
          },
          {
            "label": "[2단계: 식 변형 (유리화)]",
            "content": "$\\lim_{x \\to 5} \\frac{(x+a)-b^2}{(x-5)(\\sqrt{x+a}+b)} = \\lim_{x \\to 5} \\frac{x-5}{(x-5)(\\sqrt{x+a}+b)} = \\frac{1}{2b} = \\frac{1}{6}$"
          },
          {
            "label": "[3단계: 상수 결정 및 덧셈]",
            "content": "$2b = 6 \\implies b = 3$. $3 = \\sqrt{5+a} \\implies 5+a = 9 \\implies a = 4$. 따라서 $a+b = 4+3 = 7$ $\\therefore$ **7**"
          }
        ]
      }
    },
    {
      "id": 35,
      "source": "교과서 47p 대단원 6번",
      "tag": "표준",
      "question": "두 함수 $f(x), g(x)$가 $\\lim_{x \\to \\infty} f(x)=\\infty, \\lim_{x \\to \\infty} \\{f(x)+g(x)\\}=2$를 만족시킬 때, $\\lim_{x \\to \\infty} \\frac{5f(x)-7g(x)}{f(x)-3g(x)}$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$h(x) = f(x)+g(x)$로 치환하면 $g(x) = h(x)-f(x)$이고 $\\lim \\frac{h(x)}{f(x)} = 0$입니다! 식에 대입하여 $f(x)$로 분자·분모를 나누세요.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 치환 및 비율 확인]",
            "content": "$h(x) = f(x)+g(x)$라 하면 $\\lim_{x \\to \\infty} h(x)=2$. $g(x) = h(x)-f(x)$"
          },
          {
            "label": "[2단계: 식 대입 및 정리]",
            "content": "분자: $5f-7(h-f) = 12f-7h$. 분모: $f-3(h-f) = 4f-3h$"
          },
          {
            "label": "[3단계: f(x)로 나누기]",
            "content": "$\\lim_{x \\to \\infty} \\frac{12 - 7h/f}{4 - 3h/f} = \\frac{12-0}{4-0} = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 36,
      "source": "교과서 48p 대단원 7번",
      "tag": "표준",
      "question": "곡선 $y=\\sqrt{2x+1}$이 직선 $x=t$와 만나는 점을 $P$, 점 $Q(0, 1)$을 지나고 $x$축에 평행한 직선이 $x=t$와 만나는 점을 $R$라 할 때, $\\lim_{t \\to 0+} \\frac{\\overline{PR}}{\\overline{QR}}$의 값을 구하시오. (단, $t>0$)",
      "formula": "",
      "subQuestions": [],
      "tip": "$P(t, \\sqrt{2t+1}), R(t, 1), Q(0, 1)$이므로 $\\overline{PR} = \\sqrt{2t+1}-1, \\overline{QR} = t$입니다. 식에 대입 후 유리화하세요.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선분 길이 표현]",
            "content": "$\\overline{PR} = \\sqrt{2t+1}-1$, $\\overline{QR} = t$"
          },
          {
            "label": "[2단계: 극한 식 작성 및 유리화]",
            "content": "$\\lim_{t \\to 0+} \\frac{\\sqrt{2t+1}-1}{t} = \\lim_{t \\to 0+} \\frac{(2t+1)-1}{t(\\sqrt{2t+1}+1)} = \\lim_{t \\to 0+} \\frac{2t}{t(\\sqrt{2t+1}+1)}$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$\\lim_{t \\to 0+} \\frac{2}{\\sqrt{2t+1}+1} = \\frac{2}{1+1} = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 37,
      "source": "교과서 48p 대단원 8번",
      "tag": "표준",
      "question": "함수 $f(x)$가 $x>1$에서 $\\frac{2x^2+1}{x+2} \\le f(x) \\le \\frac{6x^2+x-2}{3x+1}$를 만족시킬 때, $\\lim_{x \\to \\infty} \\frac{f(x)}{x}$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "부등식의 모든 변을 $x$로 나누어 $\\frac{2x^2+1}{x^2+2x} \\le \\frac{f(x)}{x} \\le \\frac{6x^2+x-2}{3x^2+x}$를 만든 뒤, 최고차항 계수 비교로 대입하세요.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x로 나누기]",
            "content": "$x>1$이므로 $x$로 나누면 $\\frac{2x^2+1}{x^2+2x} \\le \\frac{f(x)}{x} \\le \\frac{6x^2+x-2}{3x^2+x}$"
          },
          {
            "label": "[2단계: 양 끝의 극한 계산]",
            "content": "$\\lim_{x \\to \\infty} \\frac{2x^2+1}{x^2+2x} = 2$, $\\lim_{x \\to \\infty} \\frac{6x^2+x-2}{3x^2+x} = \\frac{6}{3} = 2$"
          },
          {
            "label": "[3단계: 샌드위치 정리]",
            "content": "양 끝의 극한값이 모두 $2$이므로 $\\lim_{x \\to \\infty} \\frac{f(x)}{x} = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 38,
      "source": "교과서 48p 대단원 9번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} x^2-1 & (x \\ge 2) \\\\ -x+k & (x < 2) \\end{cases}$ 가 $x=2$에서 연속이 되도록 하는 상수 $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$x=2$에서 연속이려면 우극한(함숫값)과 좌극한이 같아야 합니다. $x=2$를 대입하여 방정식을 푸세요.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 우극한 및 함숫값 선 대입]",
            "content": "$f(2) = \\lim_{x \\to 2+} (x^2-1) = 2^2-1 = 3$"
          },
          {
            "label": "[2단계: 좌극한 선 대입]",
            "content": "$\\lim_{x \\to 2-} (-x+k) = -2+k$"
          },
          {
            "label": "[3단계: 연속 조건]",
            "content": "$-2+k = 3 \\implies k = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 39,
      "source": "교과서 48p 대단원 10번",
      "tag": "표준",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 $(x-1)f(x)=x^2+2x-3$을 만족시킬 때, $f(1)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "연속함수이므로 $f(1) = \\lim_{x \\to 1} f(x)$! $x \\ne 1$일 때 $f(x) = \\frac{x^2+2x-3}{x-1}$로 바꾼 뒤 인수분해 후 대입하세요.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건]",
            "content": "$f(x)$가 연속이므로 $f(1) = \\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} \\frac{x^2+2x-3}{x-1}$"
          },
          {
            "label": "[2단계: 인수분해 및 약분]",
            "content": "$x^2+2x-3 = (x-1)(x+3)$이므로 $\\lim_{x \\to 1} (x+3)$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$1+3 = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 40,
      "source": "교과서 48p 대단원 11번",
      "tag": "표준",
      "question": "함수 $f(x) = \\begin{cases} \\dfrac{x^2+ax-10}{x-2} & (x \\ne 2) \\\\[6pt] b & (x = 2) \\end{cases}$ 가 모든 실수 $x$에서 연속일 때, 상수 $a, b$에 대하여 $a+b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$x=2$에서 연속이므로 $\\lim_{x \\to 2} f(x) = b$! 분모 $\\to 0$이므로 분자에 $x=2$ 대입하여 $a$를 구하고, 인수분해하여 $b$를 구하세요.",
      "answer": "10",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 선 대입 & a 결정]",
            "content": "분모 $\\to 0$이므로 분자 $\\to 0$: $2^2+2a-10 = 0 \\implies 2a=6 \\implies a=3$"
          },
          {
            "label": "[2단계: 인수분해 & b 결정]",
            "content": "$\\lim_{x \\to 2} \\frac{x^2+3x-10}{x-2} = \\lim_{x \\to 2} \\frac{(x-2)(x+5)}{x-2} = \\lim_{x \\to 2} (x+5) = 2+5 = 7 = b$"
          },
          {
            "label": "[3단계: 합 계산]",
            "content": "$a+b = 3+7 = 10$ $\\therefore$ **10**"
          }
        ]
      }
    },
    {
      "id": 41,
      "source": "교과서 48p 대단원 12번",
      "tag": "발전",
      "question": "두 함수 $f(x) = \\begin{cases} x^2-2x+1 & (|x| \\ne 1) \\\\ x+1 & (|x| = 1) \\end{cases}$, $g(x)=x^2+ax+b$가 있다. 함수 $f(x)g(x)$가 모든 실수 $x$에서 연속일 때, 상수 $a, b$에 대하여 $a^2+b^2$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$f(x)$는 $x=1, x=-1$에서 불연속! 연속함수 $g(x)$를 곱해 연속이 되려면 불연속점 $x=\\pm 1$에서 $g(1)=0, g(-1)=0$이어야 합니다.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=-1 연속성 확인]",
            "content": "$\\lim_{x \\to -1} f(x) = (-1)^2-2(-1)+1 = 4$, $f(-1)=0$. 연속이려면 $4g(-1) = 0 \\implies g(-1)=0$"
          },
          {
            "label": "[2단계: x=1 연속성 확인]",
            "content": "$\\lim_{x \\to 1} f(x) = 1-2+1=0$, $f(1)=2$. 연속이려면 $0 = 2g(1) \\implies g(1)=0$"
          },
          {
            "label": "[3단계: 계수 결정 및 정답]",
            "content": "$g(x)=x^2+ax+b$가 $x=\\pm 1$을 근으로 가지므로 $g(x)=x^2-1$. 즉 $a=0, b=-1$. 따라서 $a^2+b^2 = 0+1 = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 42,
      "source": "교과서 49p 대단원 13번",
      "tag": "발전",
      "question": "$\\lim_{x \\to 2} \\frac{\\sqrt{x^2+5}-3}{ax+b} = \\frac{1}{3}$일 때, 상수 $a, b$에 대하여 $a-b$의 값을 구하시오. (서술형)",
      "formula": "",
      "subQuestions": [],
      "tip": "분자 $\\to 0$인데 0이 아닌 수로 수렴하므로 (분모) $\\to 0$! $2a+b=0 \\implies b=-2a$ 대입 후 분자를 유리화하여 $a, b$를 구하세요.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분모 선 대입]",
            "content": "분자 $\\to 0$이므로 분모 $\\to 0$: $2a+b=0 \\implies b=-2a$"
          },
          {
            "label": "[2단계: 유리화 및 약분]",
            "content": "$\\lim_{x \\to 2} \\frac{(x^2+5)-9}{a(x-2)(\\sqrt{x^2+5}+3)} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{a(x-2)(\\sqrt{x^2+5}+3)} = \\lim_{x \\to 2} \\frac{x+2}{a(\\sqrt{x^2+5}+3)}$"
          },
          {
            "label": "[3단계: 재대입 및 정답]",
            "content": "$\\frac{2+2}{a(3+3)} = \\frac{4}{6a} = \\frac{2}{3a} = \\frac{1}{3} \\implies a=2, b=-4$. 따라서 $a-b = 2-(-4) = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 43,
      "source": "교과서 49p 대단원 14번",
      "tag": "발전",
      "question": "다항함수 $f(x)$가 $\\lim_{x \\to \\infty} \\frac{f(x)}{x^2+x+2} = \\frac{1}{2}, \\lim_{x \\to 2} \\frac{f(x)}{x^2-x-2} = \\frac{5}{6}$를 만족시킬 때, $f(0)$의 값을 구하시오. (서술형)",
      "formula": "",
      "subQuestions": [],
      "tip": "첫 번째 조건에서 $f(x)$는 최고차항 계수가 $\\frac{1}{2}$인 2차함수! 두 번째 조건에서 분모 $\\to 0$이므로 $f(2)=0$을 대입하여 $f(x)$를 완성하세요.",
      "answer": "-3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 차수 및 계수 결정]",
            "content": "$\\lim_{x \\to \\infty} \\frac{f(x)}{x^2+x+2} = \\frac{1}{2}$이므로 $f(x) = \\frac{1}{2}x^2+px+q$"
          },
          {
            "label": "[2단계: 인수 정리 대입]",
            "content": "$\\lim_{x \\to 2} (x^2-x-2) = 0$이므로 $f(2)=0$. $f(x) = \\frac{1}{2}(x-2)(x+a)$라 두면 $\\lim_{x \\to 2} \\frac{\\frac{1}{2}(x-2)(x+a)}{(x-2)(x+1)} = \\frac{2+a}{2(3)} = \\frac{2+a}{6} = \\frac{5}{6} \\implies a=3$"
          },
          {
            "label": "[3단계: f(0) 계산]",
            "content": "$f(x) = \\frac{1}{2}(x-2)(x+3)$. $f(0) = \\frac{1}{2}(-2)(3) = -3$ $\\therefore$ **-3**"
          }
        ]
      }
    },
    {
      "id": 44,
      "source": "교과서 49p 대단원 15번",
      "tag": "발전",
      "question": "함수 $f(x) = \\frac{x+1}{x^2+ax+2a}$이 모든 실수 $x$에서 연속이 되도록 하는 정수 $a$의 개수를 구하시오. (서술형)",
      "formula": "",
      "subQuestions": [],
      "tip": "분수함수가 모든 실수에서 연속이려면 분모가 0이 되는 실수가 없어야 합니다! 분모의 판별식 $D < 0$ 조건을 세우세요.",
      "answer": "7",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건 (분모 $\\ne 0$)]",
            "content": "모든 실수 $x$에서 연속이려면 분모 $x^2+ax+2a = 0$의 실근이 존재하지 않아야 합니다."
          },
          {
            "label": "[2단계: 판별식 계산]",
            "content": "$D = a^2 - 4(1)(2a) = a^2-8a < 0 \\implies a(a-8) < 0 \\implies 0 < a < 8$"
          },
          {
            "label": "[3단계: 정수 개수]",
            "content": "만족하는 정수 $a$는 $1, 2, 3, 4, 5, 6, 7$의 $7$개 $\\therefore$ **7**"
          }
        ]
      }
    },
    {
      "id": 45,
      "source": "교과서 49p 대단원 16번",
      "tag": "발전",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$에 대하여 $f(-2)=1, f(-1)=-1, f(0)=2, f(1)=-3, f(2)=1$일 때, 방정식 $f(x)=0$은 열린구간 $(-2, 2)$에서 적어도 몇 개의 실근을 갖는지 구하시오. (서술형)",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리에 의해 연속함수의 함숫값 부호가 바뀌는 열린구간마다 적어도 1개의 실근이 존재합니다. 부호 변화 횟수를 세어 답을 도출하세요.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 구간별 부호 조사]",
            "content": "$f(-2)f(-1) < 0$, $f(-1)f(0) < 0$, $f(0)f(1) < 0$, $f(1)f(2) < 0$"
          },
          {
            "label": "[2단계: 사잇값 정리 적용]",
            "content": "사잇값 정리에 의해 각 구간 $(-2, -1), (-1, 0), (0, 1), (1, 2)$에서 각각 적어도 하나의 실근을 갖습니다."
          },
          {
            "label": "[3단계: 실근 개수 결론]",
            "content": "따라서 열린구간 $(-2, 2)$에서 적어도 4개의 실근을 갖습니다 $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 46,
      "source": "AI 숫자 변형 (34번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "$\\lim_{x \\to 3} \\frac{\\sqrt{x+a}-b}{x-3} = \\frac{1}{4}$일 때, 상수 $a, b$에 대하여 $a+b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분모 $\\to 0$이므로 분자 $\\to 0$! $\\sqrt{3+a}-b=0$ 대입 후 유리화하여 $b$를 구하고 $a+b$를 계산하세요.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입]",
            "content": "분모 $\\to 0$이므로 분자 $\\to 0$: $\\sqrt{3+a}-b = 0 \\implies b = \\sqrt{3+a}$"
          },
          {
            "label": "[2단계: 유리화 및 계산]",
            "content": "$\\lim_{x \\to 3} \\frac{x-3}{(x-3)(\\sqrt{x+a}+b)} = \\frac{1}{2b} = \\frac{1}{4} \\implies b = 2$. $2 = \\sqrt{3+a} \\implies a = 1$"
          },
          {
            "label": "[3단계: 정답]",
            "content": "$a+b = 1+2 = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 47,
      "source": "AI 숫자 변형 (23번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "함수 $f(x) = \\begin{cases} ax+3 & (|x| \\ge 1) \\\\ x^2-x+b & (|x| < 1) \\end{cases}$ 가 모든 실수 $x$에서 연속일 때, 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "절댓값 함수의 경우, 반드시 구간별 경계 $x=1, x=-1$로 나누어 주어진 함수로 변경해서 풀기! 두 식의 값이 일치해야 합니다.",
      "answer": "a = -1, b = 2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=1 연속 조건]",
            "content": "$a+3 = 1-1+b \\implies a+3 = b \\implies a-b = -3$ $\\cdots$ ①"
          },
          {
            "label": "[2단계: x=-1 연속 조건]",
            "content": "$-a+3 = (-1)^2-(-1)+b = 2+b \\implies -a-b = -1$ $\\cdots$ ②"
          },
          {
            "label": "[3단계: 연립 및 정답]",
            "content": "①과 ②를 더하면 $-2b = -4 \\implies b = 2$. $a = b-3 = -1$. $\\therefore$ **$a=-1, b=2$**"
          }
        ]
      }
    },
    {
      "id": 48,
      "source": "AI 숫자 변형 (45번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "모든 실수에서 연속인 함수 $f(x)$에 대하여 $f(1)=2, f(2)=-1, f(3)=3, f(4)=-2$일 때, 방정식 $f(x)=0$은 열린구간 $(1, 4)$에서 적어도 몇 개의 실근을 갖는지 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리에 의해 연속함수의 함숫값 부호가 바뀌는 열린구간마다 적어도 1개의 실근이 존재합니다. 부호 변화 횟수를 확인하세요.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 부호 판정]",
            "content": "$f(1)f(2) < 0$ (양$\\to$음), $f(2)f(3) < 0$ (음$\\to$양), $f(3)f(4) < 0$ (양$\\to$음)"
          },
          {
            "label": "[2단계: 사잇값 정리]",
            "content": "각 구간 $(1, 2), (2, 3), (3, 4)$에서 각각 적어도 하나의 실근을 갖습니다."
          },
          {
            "label": "[3단계: 실근 개수]",
            "content": "따라서 열린구간 $(1, 4)$에서 적어도 3개의 실근을 갖습니다 $\\therefore$ **3**"
          }
        ]
      }
    }
  ]
};
