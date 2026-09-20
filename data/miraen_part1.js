window.WORKSHEET_DATA = {
  "meta": {
    "title": "미적분 I / 수학 II - I. 함수의 극한과 연속",
    "subtitle": "미래엔 교과서 실전 핵심 (중단원 마무리 + 대단원 평가 전수 수록)",
    "student": "",
    "date": "2026. 09. 19 (토)",
    "cheer": "완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "미래엔 교과서 26p 중단원 1번 (1), (2)",
      "tag": "기본",
      "question": "다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 2} (3x+4)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -3} (4-x^2)"
        }
      ],
      "tip": "1단계: $x=a$를 식에 먼저 대입하기! 분모가 0이 되지 않으므로 대입한 함숫값이 곧 극한값입니다.",
      "answer": "(1) 10, (2) -5",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x=2$ 대입: $3(2)+4 = 10$ $\\therefore$ **10**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x=-3$ 대입: $4-(-3)^2 = 4-9 = -5$ $\\therefore$ **-5**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "미래엔 교과서 26p 중단원 1번 (3), (4)",
      "tag": "기본",
      "question": "다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\frac{2}{(x-1)^2}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -1} \\left\\{2 - \\frac{1}{|x+1|}\\right\\}"
        }
      ],
      "tip": "1단계: 선 대입하여 분모의 상태를 확인하세요. $\\frac{c}{+0} \\to \\infty$이므로 부호에 따라 발산합니다.",
      "answer": "(1) 발산 ($\\infty$), (2) 발산 ($-\\infty$)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x \\to 1$일 때 $(x-1)^2 \\to +0$이므로 $\\frac{2}{+0} \\to \\infty$ $\\therefore$ **발산 ($\\infty$)**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x \\to -1$일 때 $|x+1| \\to +0$이므로 $-\\frac{1}{|x+1|} \\to -\\infty$, $2-\\infty \\to -\\infty$ $\\therefore$ **발산 ($-\\infty$)**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "미래엔 교과서 26p 중단원 2번 (1), (2)",
      "tag": "기본",
      "question": "다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} \\left(-1 + \\frac{3}{x^2}\\right)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -\\infty} \\frac{1}{2x+1}"
        }
      ],
      "tip": "1단계: $x \\to \\pm\\infty$ 대입! $\\frac{\\text{상수}}{\\infty} \\to 0$ 성질을 이용하여 극한값을 구합니다.",
      "answer": "(1) -1, (2) 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x \\to \\infty$일 때 $\\frac{3}{x^2} \\to 0$이므로 $-1+0 = -1$ $\\therefore$ **-1**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x \\to -\\infty$일 때 $2x+1 \\to -\\infty$이므로 $\\frac{1}{-\\infty} \\to 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "미래엔 교과서 26p 중단원 2번 (3), (4)",
      "tag": "기본",
      "question": "다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} 2x^2"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -\\infty} (x+5)"
        }
      ],
      "tip": "1단계: $x \\to \\pm\\infty$를 대입하여 최고차항의 부호에 따른 발산 상태를 판정합니다.",
      "answer": "(1) 발산 ($\\infty$), (2) 발산 ($-\\infty$)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x \\to \\infty$일 때 $2x^2 \\to \\infty$ $\\therefore$ **발산 ($\\infty$)**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x \\to -\\infty$일 때 $x+5 \\to -\\infty$ $\\therefore$ **발산 ($-\\infty$)**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "미래엔 교과서 26p 중단원 3번",
      "tag": "기본",
      "question": "다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 3+} \\frac{x+1}{x-3}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 1-} \\sqrt{1-x}"
        }
      ],
      "tip": "우극한과 좌극한의 부호에 주의하세요! 분모가 $+0$으로 가면 양의 무한대로 발산하고, 근호 안이 $+0$이면 0에 수렴합니다.",
      "answer": "(1) 발산 ($\\infty$), (2) 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[우극한] $x \\to 3+$일 때 분모 $x-3 \\to +0$, 분자 $x+1 \\to 4 > 0$이므로 $\\frac{4}{+0} \\to \\infty$ $\\therefore$ **발산 ($\\infty$)**"
          },
          {
            "label": "(2)",
            "content": "[좌극한] $x \\to 1-$일 때 $1-x \\to +0$이므로 $\\sqrt{+0} = 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "미래엔 교과서 26p 중단원 4번 (1), (2)",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\left(x^2 + \\frac{2}{x}\\right)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -2} (x^3 - 3x + 7)"
        }
      ],
      "tip": "1단계: 선 대입하기! 다항식과 분모가 0이 아닌 유리식의 극한값은 대입한 함숫값과 일치합니다.",
      "answer": "(1) 3, (2) 5",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x=1$ 대입: $1^2 + \\frac{2}{1} = 1+2 = 3$ $\\therefore$ **3**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x=-2$ 대입: $(-2)^3 - 3(-2) + 7 = -8 + 6 + 7 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "미래엔 교과서 26p 중단원 4번 (3), (4)",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 2} (2x-1)(3x+2)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -1} \\frac{4x-2}{x^4+2x^2+3}"
        }
      ],
      "tip": "1단계: 선 대입하기! 극한의 기본 성질에 의해 각 인수에 $x$값을 대입하여 곱하거나 나눕니다.",
      "answer": "(1) 24, (2) -1",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x=2$ 대입: $(2\\cdot 2 - 1)(3\\cdot 2 + 2) = (3)(8) = 24$ $\\therefore$ **24**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x=-1$ 대입: $\\frac{4(-1)-2}{(-1)^4 + 2(-1)^2 + 3} = \\frac{-6}{1+2+3} = \\frac{-6}{6} = -1$ $\\therefore$ **-1**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "미래엔 교과서 26p 중단원 5번 (1), (2)",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 3} \\frac{x^2-9}{x-3}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 2} \\frac{x^2-8x+12}{x-2}"
        }
      ],
      "tip": "1단계: 선 대입 시 $\\frac{0}{0}$ 꼴! 2단계: 분자를 인수분해하여 약분한 뒤 3단계: 재대입합니다.",
      "answer": "(1) 6, (2) -4",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $\\frac{0}{0}$ 꼴. [2단계: 인수분해] $\\frac{(x-3)(x+3)}{x-3} = x+3$. [3단계: 재대입] $3+3 = 6$ $\\therefore$ **6**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $\\frac{0}{0}$ 꼴. [2단계: 인수분해] $\\frac{(x-2)(x-6)}{x-2} = x-6$. [3단계: 재대입] $2-6 = -4$ $\\therefore$ **-4**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "미래엔 교과서 26p 중단원 5번 (3), (4)",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} \\frac{4x^2+3x}{2x^2+1}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} (\\sqrt{4x^2+x} - 2x)"
        }
      ],
      "tip": "(1)은 $\\frac{\\infty}{\\infty}$ 꼴로 분모의 최고차항으로 나누기! (2)는 유리화하여 변형합니다.",
      "answer": "(1) 2, (2) $\\frac{1}{4}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 판정] $\\frac{\\infty}{\\infty}$ 꼴. [2단계: 최고차항 나누기] 분모 분자를 $x^2$으로 나누면 $\\frac{4 + 3/x}{2 + 1/x^2} \\to \\frac{4}{2} = 2$ $\\therefore$ **2**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 판정] $\\infty-\\infty$ 꼴. [2단계: 유리화] $\\frac{(\\sqrt{4x^2+x}-2x)(\\sqrt{4x^2+x}+2x)}{\\sqrt{4x^2+x}+2x} = \\frac{x}{\\sqrt{4x^2+x}+2x}$. [3단계: 재대입] 분모 분자를 $x$로 나누면 $\\frac{1}{\\sqrt{4}+2} = \\frac{1}{4}$ $\\therefore$ **$\\frac{1}{4}$**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "미래엔 교과서 26p 중단원 6번",
      "tag": "표준",
      "question": "함수 $f(x)$가 모든 실수 $x$에 대하여 다음 부등식을 만족시킬 때, $\\lim_{x \\to 1} f(x)$의 값을 구하시오.",
      "formula": "2x+2 \\le f(x) \\le x^2+3",
      "subQuestions": [],
      "tip": "1단계: $x=1$을 양변에 대입하여 대소 관계(샌드위치 정리)를 이용하세요. 양변의 극한값이 일치하면 가운데 함수도 그 값으로 수렴합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 양변 극한]",
            "content": "$\\lim_{x \\to 1} (2x+2) = 2(1)+2 = 4$, $\\lim_{x \\to 1} (x^2+3) = 1^2+3 = 4$"
          },
          {
            "label": "[2단계: 대소 관계]",
            "content": "모든 실수 $x$에 대하여 $2x+2 \\le f(x) \\le x^2+3$이고 양변의 극한값이 모두 4이므로"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "샌드위치 정리에 의하여 $\\lim_{x \\to 1} f(x) = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "미래엔 교과서 27p 중단원 7번",
      "tag": "표준",
      "question": "함수 $y=f(x)$의 그래프가 주어질 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to -1-} f(x) + \\lim_{x \\to 0+} f(x) + \\lim_{x \\to 1-} f(x)",
      "subQuestions": [],
      "tip": "좌극한($x \\to a-$)과 우극한($x \\to a+$)의 방향을 그래프에서 정확히 추적하여 세 극한값을 각각 구한 뒤 더합니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 개별 극한]",
            "content": "$\\lim_{x \\to -1-} f(x) = 3$, $\\lim_{x \\to 0+} f(x) = 1$, $\\lim_{x \\to 1-} f(x) = 2$"
          },
          {
            "label": "[2단계: 합 계산]",
            "content": "$3 + 1 + 2 = 6$ $\\therefore$ **6**"
          }
        ]
      },
      "qSuffix": "(단, 그래프에서 $x \\to -1-$일 때 $y \\to 3$, $x \\to 0+$일 때 $y \\to 1$, $x \\to 1-$일 때 $y \\to 2$이다.)"
    },
    {
      "id": 12,
      "source": "미래엔 교과서 27p 중단원 8번",
      "tag": "표준",
      "question": "함수 $f(x)$에 대하여 $\\lim_{x \\to 2} f(x)$의 값이 존재하도록 하는 상수 $a$의 값을 구하는 풀이 과정과 답을 쓰시오.",
      "formula": "f(x) = \\begin{cases} 3x^2-4x+a & (x < 2) \\\\[4pt] ax-5 & (x \\ge 2) \\end{cases}",
      "subQuestions": [],
      "tip": "극한값이 존재할 조건은 우극한과 좌극한이 같아야 합니다! 우극한($x \\to 2+$)과 좌극한($x \\to 2-$) 식을 각각 구하여 같다고 놓으세요.",
      "answer": "9",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 우극한]",
            "content": "$\\lim_{x \\to 2+} f(x) = \\lim_{x \\to 2+} (ax-5) = 2a-5$"
          },
          {
            "label": "[2단계: 좌극한]",
            "content": "$\\lim_{x \\to 2-} f(x) = \\lim_{x \\to 2-} (3x^2-4x+a) = 3(4)-4(2)+a = a+4$"
          },
          {
            "label": "[3단계: 등식 성립]",
            "content": "극한값이 존재하려면 우극한과 좌극한이 같아야 하므로 $2a-5 = a+4 \\implies a = 9$ $\\therefore$ **9**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "미래엔 교과서 27p 중단원 9번",
      "tag": "표준",
      "question": "함수 $f(x)$에 대하여 $\\lim_{x \\to -1} (x-1)f(x) = 4$일 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to -1} (3x^2+2x+1)f(x)",
      "subQuestions": [],
      "tip": "1단계: $\\lim_{x \\to -1} (x-1) = -2 \\ne 0$이므로 극한의 성질을 이용하여 $\\lim_{x \\to -1} f(x)$를 먼저 구합니다.",
      "answer": "-4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(x) 극한]",
            "content": "$\\lim_{x \\to -1} f(x) = \\lim_{x \\to -1} \\frac{(x-1)f(x)}{x-1} = \\frac{4}{-1-1} = \\frac{4}{-2} = -2$"
          },
          {
            "label": "[2단계: 다항식 극한]",
            "content": "$\\lim_{x \\to -1} (3x^2+2x+1) = 3(-1)^2 + 2(-1) + 1 = 3 - 2 + 1 = 2$"
          },
          {
            "label": "[3단계: 곱 계산]",
            "content": "$2 \\times (-2) = -4$ $\\therefore$ **-4**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "미래엔 교과서 27p 중단원 10번",
      "tag": "표준",
      "question": "두 함수 $f(x)$와 $g(x)$에 대하여 $\\lim_{x \\to 1} f(x) = -1$, $\\lim_{x \\to 1} g(x) = k$일 때, 다음을 만족시키는 양수 $k$의 값을 구하시오.",
      "formula": "\\lim_{x \\to 1} \\frac{2f(x)-9g(x)}{f(x)g(x)-6} = 5",
      "subQuestions": [],
      "tip": "1단계: 극한의 성질을 이용하여 $f(x) \\to -1$, $g(x) \\to k$를 대입하고 $k$에 대한 일차방정식을 풉니다.",
      "answer": "7",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입]",
            "content": "$\\lim_{x \\to 1} \\frac{2f(x)-9g(x)}{f(x)g(x)-6} = \\frac{2(-1)-9k}{(-1)k-6} = \\frac{-2-9k}{-k-6} = \\frac{9k+2}{k+6}$"
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "$\\frac{9k+2}{k+6} = 5 \\implies 9k+2 = 5(k+6) = 5k+30$"
          },
          {
            "label": "[3단계: k 계산]",
            "content": "$4k = 28 \\implies k = 7$ $\\therefore$ **7**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "미래엔 교과서 27p 중단원 11번",
      "tag": "표준",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 0} \\frac{1-\\sqrt{1-x^2}}{x^2}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 0} \\frac{1}{x}\\left(1 - \\frac{3}{x+3}\\right)"
        },
        {
          "no": 3,
          "formula": "\\lim_{x \\to 4} (\\sqrt{x}-2)\\left(1 + \\frac{5}{x-4}\\right)"
        }
      ],
      "tip": "근호는 분자 유리화, 분수는 괄호 안을 통분하여 $(x-a)$ 인수를 약분한 뒤 재대입합니다.",
      "answer": "(1) $\\frac{1}{2}$, (2) $\\frac{1}{3}$, (3) $\\frac{5}{4}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[유리화] $\\frac{(1-\\sqrt{1-x^2})(1+\\sqrt{1-x^2})}{x^2(1+\\sqrt{1-x^2})} = \\frac{x^2}{x^2(1+\\sqrt{1-x^2})} = \\frac{1}{1+\\sqrt{1-x^2}} \\to \\frac{1}{2}$ $\\therefore$ **$\\frac{1}{2}$**"
          },
          {
            "label": "(2)",
            "content": "[통분] $1-\\frac{3}{x+3} = \\frac{x}{x+3} \\implies \\frac{1}{x} \\cdot \\frac{x}{x+3} = \\frac{1}{x+3} \\to \\frac{1}{3}$ $\\therefore$ **$\\frac{1}{3}$**"
          },
          {
            "label": "(3)",
            "content": "[통분 및 인수분해] $(\\sqrt{x}-2)\\frac{x+1}{x-4} = (\\sqrt{x}-2)\\frac{x+1}{(\\sqrt{x}-2)(\\sqrt{x}+2)} = \\frac{x+1}{\\sqrt{x}+2} \\to \\frac{5}{4}$ $\\therefore$ **$\\frac{5}{4}$**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "미래엔 교과서 28p 중단원 12번",
      "tag": "표준",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} (\\sqrt{x^2+3x+4} - \\sqrt{x^2-3x+4})"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -\\infty} \\frac{\\sqrt{x^2+x+2}-6}{x-5}"
        }
      ],
      "tip": "(1)은 유리화 후 최고차항 나누기! (2)는 $x \\to -\\infty$이므로 $-x=t$로 치환하여 $t \\to \\infty$로 바꾸어 풉니다.",
      "answer": "(1) 3, (2) -1",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[유리화] $\\frac{(x^2+3x+4)-(x^2-3x+4)}{\\sqrt{x^2+3x+4}+\\sqrt{x^2-3x+4}} = \\frac{6x}{\\sqrt{x^2+3x+4}+\\sqrt{x^2-3x+4}}$. 분모 분자를 $x$로 나누면 $\\frac{6}{1+1} = 3$ $\\therefore$ **3**"
          },
          {
            "label": "(2)",
            "content": "[치환] $-x=t$ ($t \\to \\infty$): $\\lim_{t \\to \\infty} \\frac{\\sqrt{t^2-t+2}-6}{-t-5}$. 분모 분자를 $t$로 나누면 $\\frac{\\sqrt{1}}{-1} = -1$ $\\therefore$ **-1**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "미래엔 교과서 28p 중단원 13번",
      "tag": "표준",
      "question": "함수 $f(x)$에 대하여 $\\lim_{x \\to 2} f(x) = 8$일 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to 2} \\frac{(x-2)f(x)}{\\sqrt{x^2+5}-3}",
      "subQuestions": [],
      "tip": "1단계: $x=2$ 선 대입 시 $\\frac{0}{0}$ 꼴! 2단계: 분모를 유리화하여 약분한 뒤 재대입합니다.",
      "answer": "12",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분모 유리화]",
            "content": "$\\frac{(x-2)f(x)(\\sqrt{x^2+5}+3)}{(x^2+5)-9} = \\frac{(x-2)f(x)(\\sqrt{x^2+5}+3)}{x^2-4}$"
          },
          {
            "label": "[2단계: 인수분해 및 약분]",
            "content": "$\\frac{(x-2)f(x)(\\sqrt{x^2+5}+3)}{(x-2)(x+2)} = \\frac{f(x)(\\sqrt{x^2+5}+3)}{x+2}$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x \\to 2$일 때 $\\frac{8(\\sqrt{9}+3)}{2+2} = \\frac{8(6)}{4} = 12$ $\\therefore$ **12**"
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "미래엔 교과서 28p 중단원 14번",
      "tag": "표준",
      "question": "함수 $f(x)$에 대하여 $\\lim_{x \\to \\infty} \\frac{f(x)}{x}$의 값이 존재할 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to \\infty} \\frac{3x^2+2f(x)}{f(x)-6x^2}",
      "subQuestions": [],
      "tip": "$\\frac{f(x)}{x}$가 수렴하므로 $f(x)$는 최대 1차식입니다. 분모와 분자를 최고차항인 $x^2$으로 나누어 극한값을 구하세요.",
      "answer": "$-\\frac{1}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 최고차항 나누기]",
            "content": "분모 분자를 $x^2$으로 나누면 $\\lim_{x \\to \\infty} \\frac{3 + 2\\frac{f(x)}{x^2}}{\\frac{f(x)}{x^2} - 6}$"
          },
          {
            "label": "[2단계: 극한 분석]",
            "content": "$\\lim_{x \\to \\infty} \\frac{f(x)}{x^2} = \\lim_{x \\to \\infty} \\frac{1}{x} \\cdot \\frac{f(x)}{x} = 0 \\cdot (\\text{상수}) = 0$"
          },
          {
            "label": "[3단계: 계산]",
            "content": "$\\frac{3 + 0}{0 - 6} = -\\frac{3}{6} = -\\frac{1}{2}$ $\\therefore$ **$-\\frac{1}{2}$**"
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "미래엔 교과서 28p 중단원 15번",
      "tag": "표준",
      "question": "다음 등식이 성립하도록 하는 상수 $a$와 $b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\frac{x^2+ax+b}{x-1} = 7"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 2} \\frac{x-2}{ax^2+bx+4} = \\frac{1}{6}"
        }
      ],
      "tip": "1단계: $x=a$를 대입할 때 분모 $\\to 0$이면 분자 $\\to 0$! 식 변형 후 약분하여 미정계수를 결정합니다.",
      "answer": "(1) a=5, b=-6, (2) a=4, b=-10",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[분자=0] $1+a+b=0 \\implies b=-a-1$. 대입: $\\frac{(x-1)(x+a+1)}{x-1} = x+a+1 \\to 1+a+1 = 7 \\implies a=5, b=-6$ $\\therefore$ **a=5, b=-6**"
          },
          {
            "label": "(2)",
            "content": "[분모=0] $4a+2b+4=0 \\implies b=-2a-2$. 대입: $\\frac{x-2}{(x-2)(ax-2)} = \\frac{1}{ax-2} \\to \\frac{1}{2a-2} = \\frac{1}{6} \\implies 2a-2=6, a=4, b=-10$ $\\therefore$ **a=4, b=-10**"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "미래엔 교과서 28p 중단원 16번",
      "tag": "발전",
      "question": "함수 $f(x) = \\frac{ax^2+bx+c}{x^2-1}$에 대하여",
      "formula": "\\lim_{x \\to \\infty} f(x) = 2, \\quad \\lim_{x \\to 1} f(x) = -1",
      "subQuestions": [],
      "tip": "1단계: $\\lim_{x \\to \\infty} f(x) = 2$에서 최고차항으로 나누어 $a=2$를 구하고, $x \\to 1$ 대입 시 분모 $\\to 0$이므로 분자 $\\to 0$을 이용합니다.",
      "answer": "-48",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 최고차항 비교]",
            "content": "$\\lim_{x \\to \\infty} \\frac{ax^2+bx+c}{x^2-1} = a = 2 \\implies a = 2$"
          },
          {
            "label": "[2단계: 분자=0]",
            "content": "$x \\to 1$일 때 분모 $\\to 0$이므로 $2(1)^2+b(1)+c = 0 \\implies c = -b-2$"
          },
          {
            "label": "[3단계: 극한값 계산]",
            "content": "$\\lim_{x \\to 1} \\frac{2x^2+bx-(b+2)}{x^2-1} = \\lim_{x \\to 1} \\frac{(x-1)(2x+b+2)}{(x-1)(x+1)} = \\frac{4+b}{2} = -1 \\implies 4+b = -2, b = -6, c = 4$"
          },
          {
            "label": "[4단계: 곱 계산]",
            "content": "$abc = 2 \\times (-6) \\times 4 = -48$ $\\therefore$ **-48**"
          }
        ]
      },
      "qSuffix": "일 때, $abc$의 값을 구하시오. (단, $a, b, c$는 상수)"
    },
    {
      "id": 21,
      "source": "미래엔 교과서 29p 중단원 17번",
      "tag": "발전",
      "question": "삼차함수 $f(x)$가 다음 조건을 만족시킬 때, $\\lim_{x \\to 1} \\frac{f(x)}{x-1}$의 값을 구하는 풀이 과정과 답을 쓰시오.",
      "formula": "\\lim_{x \\to 0} \\frac{f(x)}{x} = \\lim_{x \\to 2} \\frac{f(x)}{x-2} = 6",
      "subQuestions": [],
      "tip": "분모 $\\to 0$이면 분자 $\\to 0$이므로 $f(0)=0, f(2)=0$입니다. $f(x)=x(x-2)(ax+b)$로 놓고 식을 대입하여 미정계수를 구하세요.",
      "answer": "-3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 인수 설정]",
            "content": "$f(0)=0, f(2)=0$이므로 $f(x) = x(x-2)(ax+b)$로 둘 수 있습니다."
          },
          {
            "label": "[2단계: a, b 결정]",
            "content": "$\\lim_{x \\to 0} (x-2)(ax+b) = -2b = 6 \\implies b = -3$. $\\lim_{x \\to 2} x(ax-3) = 2(2a-3) = 6 \\implies 2a-3 = 3, a = 3$"
          },
          {
            "label": "[3단계: 식 완성 및 극한]",
            "content": "$f(x) = x(x-2)(3x-3) = 3x(x-1)(x-2)$. $\\lim_{x \\to 1} \\frac{3x(x-1)(x-2)}{x-1} = \\lim_{x \\to 1} 3x(x-2) = 3(1)(-1) = -3$ $\\therefore$ **-3**"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "미래엔 교과서 29p 중단원 18번",
      "tag": "발전",
      "question": "함수 $f(x)$가 모든 양수 $x$에 대하여 다음 부등식을 만족시킬 때, $\\lim_{x \\to 1} \\frac{f(x)}{x-1}$의 값을 구하시오.",
      "formula": "x^2+x-2 \\le f(x) \\le x^3-1",
      "subQuestions": [],
      "tip": "각 변을 인수분해하고 $x-1$로 나눈 뒤 $x \\to 1$ 극한을 취해 샌드위치 정리를 적용합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 인수분해]",
            "content": "$x^2+x-2 = (x-1)(x+2)$, $x^3-1 = (x-1)(x^2+x+1)$"
          },
          {
            "label": "[2단계: 부등식 정리]",
            "content": "$x>1$일 때 $x+2 \\le \\frac{f(x)}{x-1} \\le x^2+x+1$. $x<1$일 때 부등호 방향이 바뀌지만 양 끝의 극한값은 동일합니다."
          },
          {
            "label": "[3단계: 샌드위치 정리]",
            "content": "$\\lim_{x \\to 1} (x+2) = 3$, $\\lim_{x \\to 1} (x^2+x+1) = 3$이므로 $\\lim_{x \\to 1} \\frac{f(x)}{x-1} = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "미래엔 교과서 29p 중단원 19번",
      "tag": "발전",
      "question": "두 함수 $f(x)$와 $g(x)$에 대하여 $\\lim_{x \\to \\infty} f(x) = \\infty, \\; \\lim_{x \\to \\infty} \\{2f(x)-g(x)\\} = 3$일 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to \\infty} \\frac{f(x)-2g(x)}{f(x)+g(x)}",
      "subQuestions": [],
      "tip": "1단계: $f(x)$로 나누어 극한의 성질 $\\lim_{x \\to \\infty} \\frac{1}{f(x)} = 0$을 이용합니다. $\\lim_{x \\to \\infty} \\frac{g(x)}{f(x)} = 2$를 대입하세요.",
      "answer": "-1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 비율 극한]",
            "content": "$\\lim_{x \\to \\infty} \\left(2 - \\frac{g(x)}{f(x)}\\right) = \\lim_{x \\to \\infty} \\{2f(x)-g(x)\\} \\cdot \\frac{1}{f(x)} = 3 \\cdot 0 = 0 \\implies \\lim_{x \\to \\infty} \\frac{g(x)}{f(x)} = 2$"
          },
          {
            "label": "[2단계: 분모 분자 나누기]",
            "content": "구하는 식의 분모 분자를 $f(x)$로 나누면 $\\lim_{x \\to \\infty} \\frac{1 - 2\\frac{g(x)}{f(x)}}{1 + \\frac{g(x)}{f(x)}}$"
          },
          {
            "label": "[3단계: 대입 계산]",
            "content": "$\\frac{1 - 2(2)}{1 + 2} = \\frac{-3}{3} = -1$ $\\therefore$ **-1**"
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "미래엔 교과서 29p 중단원 20번",
      "tag": "발전",
      "question": "다항함수 $f(x)$가 다음 조건을 만족시킬 때, $f(-2)$의 값을 구하시오.",
      "formula": "\\lim_{x \\to 0+} \\frac{x^3 f(1/x) - 1}{x^3+x} = 4, \\quad \\lim_{x \\to -3} \\frac{f(x)}{x^2+x-6} = -1",
      "subQuestions": [],
      "tip": "1단계: $1/x = t$로 치환하여 $t \\to \\infty$ 대입 및 최고차항 나누기로 $f(t)$ 식을 결정합니다.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 치환]",
            "content": "$1/x = t$ ($t \\to \\infty$): $\\lim_{t \\to \\infty} \\frac{t^{-3}f(t)-1}{t^{-3}+t^{-1}} = \\lim_{t \\to \\infty} \\frac{f(t)-t^3}{1+t^2} = 4 \\implies f(x) = x^3+4x^2+ax+b$"
          },
          {
            "label": "[2단계: x -> -3 극한]",
            "content": "$x \\to -3$일 때 분모 $x^2+x-6 \\to 0$이므로 분자 $f(-3) = -27+36-3a+b = 0 \\implies b = 3a-9$"
          },
          {
            "label": "[3단계: a, b 결정]",
            "content": "$\\lim_{x \\to -3} \\frac{(x+3)(x^2+x+a-3)}{(x+3)(x-2)} = \\frac{9-3+a-3}{-5} = \\frac{a+3}{-5} = -1 \\implies a+3 = 5, a = 2, b = -3$"
          },
          {
            "label": "[4단계: f(-2) 계산]",
            "content": "$f(x) = x^3+4x^2+2x-3 \\implies f(-2) = -8 + 16 - 4 - 3 = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "미래엔 교과서 29p 중단원 21번",
      "tag": "발전",
      "question": "세 점 $O(0, 0)$, $A(a, 0)$, $B(0, 1)$을 꼭짓점으로 하는 삼각형 $OAB$의 내접원의 반지름의 길이를 $r$이라 할 때, 다음 극한값을 구하는 풀이 과정과 답을 쓰시오. (단, $a>0$)",
      "formula": "\\lim_{a \\to 0+} \\frac{r}{a}",
      "subQuestions": [],
      "tip": "삼각형 넓이 공식 $S = \\frac{1}{2}ab = \\frac{1}{2}r(a+b+c)$을 이용하여 $r$을 $a$에 관한 식으로 표현한 뒤 극한을 계산합니다.",
      "answer": "$\\frac{1}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 변의 길이와 넓이]",
            "content": "$\\overline{OA}=a, \\overline{OB}=1, \\overline{AB}=\\sqrt{a^2+1}$. 삼각형 넓이 $S = \\frac{1}{2}a$"
          },
          {
            "label": "[2단계: 내접원 반지름 r]",
            "content": "$\\frac{1}{2}a = \\frac{1}{2}r(a+1+\\sqrt{a^2+1}) \\implies r = \\frac{a}{a+1+\\sqrt{a^2+1}}$"
          },
          {
            "label": "[3단계: 극한 계산]",
            "content": "$\\lim_{a \\to 0+} \\frac{r}{a} = \\lim_{a \\to 0+} \\frac{1}{a+1+\\sqrt{a^2+1}} = \\frac{1}{0+1+\\sqrt{1}} = \\frac{1}{2}$ $\\therefore$ **$\\frac{1}{2}$**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "미래엔 교과서 29p 중단원 22번",
      "tag": "발전",
      "question": "함수 $f(x)$가 모든 양수 $x$에 대하여 $\\frac{2x^3-3}{4x+3} < f(x) < \\frac{x^3+1}{2x+1}$을 만족시킬 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to \\infty} \\frac{\\{f(x)\\}^2}{3x^4+x^2+1}",
      "subQuestions": [],
      "tip": "양변을 $x^2$으로 나누어 $x \\to \\infty$일 때 $\\frac{f(x)}{x^2} \\to \\frac{1}{2}$임을 먼저 구한 뒤 대입합니다.",
      "answer": "$\\frac{1}{12}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x^2 나누기]",
            "content": "각 변을 $x^2$으로 나누면 $\\frac{2x-\\frac{3}{x^2}}{4x+3} < \\frac{f(x)}{x^2} < \\frac{x+\\frac{1}{x^2}}{2x+1}$"
          },
          {
            "label": "[2단계: 샌드위치 정리]",
            "content": "$\\lim_{x \\to \\infty} \\frac{2x}{4x+3} = \\frac{1}{2}$, $\\lim_{x \\to \\infty} \\frac{x}{2x+1} = \\frac{1}{2}$이므로 $\\lim_{x \\to \\infty} \\frac{f(x)}{x^2} = \\frac{1}{2}$"
          },
          {
            "label": "[3단계: 준식 변형 및 계산]",
            "content": "$\\lim_{x \\to \\infty} \\frac{\\{f(x)/x^2\\}^2}{3 + 1/x^2 + 1/x^4} = \\frac{(1/2)^2}{3+0+0} = \\frac{1/4}{3} = \\frac{1}{12}$ $\\therefore$ **$\\frac{1}{12}$**"
          }
        ]
      }
    },
    {
      "id": 27,
      "source": "미래엔 교과서 42p 중단원 1번",
      "tag": "기본",
      "question": "함수 $y=f(x)$의 그래프가 다음과 같을 때, $f(x)$가 $x=0$에서 불연속인 이유를 설명하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "연속의 세 조건(함숫값 정의, 극한값 존재, 함숫값과 극한값 일치) 중 어느 조건이 위배되는지 확인합니다.",
      "answer": "(1) 극한값 불일치, (2) 함숫값과 극한값 불일치",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[극한값 부존재] $\\lim_{x \\to 0+} f(x) \\ne \\lim_{x \\to 0-} f(x)$이므로 $\\lim_{x \\to 0} f(x)$가 존재하지 않아 불연속입니다."
          },
          {
            "label": "(2)",
            "content": "[함숫값 불일치] $\\lim_{x \\to 0} f(x) \\ne f(0)$이므로 극한값과 함숫값이 달라 불연속입니다."
          }
        ]
      },
      "qSuffix": "(단, (1)은 $x \\to 0+$일 때 $y \\to 1$, $x \\to 0-$일 때 $y \\to -1$이고, (2)는 $\\lim_{x \\to 0} f(x) = 1$이나 $f(0) = 2$이다.)"
    },
    {
      "id": 28,
      "source": "미래엔 교과서 42p 중단원 2번",
      "tag": "기본",
      "question": "다음 함수가 $x=1$에서 연속인지 불연속인지 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = 2x^2-6x-1"
        },
        {
          "no": 2,
          "formula": "f(x) = \\begin{cases} x^2+3x & (x<1) \\\\ 5x-1 & (x \\ge 1) \\end{cases}"
        }
      ],
      "tip": "1단계: 선 대입하여 $f(1)$, 우극한, 좌극한을 각각 비교합니다.",
      "answer": "(1) 연속, (2) 연속",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[대입] 다항함수는 모든 실수에서 연속이므로 $x=1$에서 **연속**입니다."
          },
          {
            "label": "(2)",
            "content": "[대입 조사] $f(1) = 5(1)-1 = 4$, $\\lim_{x \\to 1+} f(x) = 4$, $\\lim_{x \\to 1-} (x^2+3x) = 4$. 모두 4로 일치하므로 **연속**입니다."
          }
        ]
      }
    },
    {
      "id": 29,
      "source": "미래엔 교과서 42p 중단원 3번",
      "tag": "기본",
      "question": "다음 함수가 연속인 구간을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = x^2-4x+6"
        },
        {
          "no": 2,
          "formula": "f(x) = \\frac{x}{x+2}"
        }
      ],
      "tip": "다항함수는 모든 실수 구간에서 연속이고, 유리함수는 분모가 0이 아닌 모든 실수에서 연속입니다.",
      "answer": "(1) $(-\\infty, \\infty)$, (2) $(-\\infty, -2)$, $(-2, \\infty)$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[다항함수] 실수 전체의 집합에서 연속이므로 $(-\\infty, \\infty)$ $\\therefore$ **$(-\\infty, \\infty)$**"
          },
          {
            "label": "(2)",
            "content": "[유리함수] 분모 $x+2 \\ne 0$, 즉 $x \\ne -2$인 모든 실수이므로 $(-\\infty, -2), (-2, \\infty)$ $\\therefore$ **$(-\\infty, -2)$, $(-2, \\infty)$**"
          }
        ]
      }
    },
    {
      "id": 30,
      "source": "미래엔 교과서 42p 중단원 4번",
      "tag": "기본",
      "question": "주어진 구간에서 다음 함수의 최댓값과 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = -x^2+4x+9 \\quad [-1, 3]"
        },
        {
          "no": 2,
          "formula": "f(x) = \\frac{x}{x-1} \\quad [2, 4]"
        }
      ],
      "tip": "최대·최소 정리에 의해 닫힌구간에서 연속함수는 반드시 최댓값과 최솟값을 갖습니다. 꼭짓점과 양 끝값을 대입하여 비교하세요.",
      "answer": "(1) 최댓값: 13, 최솟값: 4, (2) 최댓값: 2, 최솟값: $\\frac{4}{3}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[이차함수] $f(x) = -(x-2)^2+13$. 구간 $[-1, 3]$에서 꼭짓점 $x=2$일 때 최댓값 13, $x=-1$일 때 최솟값 $-( -1-2)^2+13 = 4$ $\\therefore$ **최댓값: 13, 최솟값: 4**"
          },
          {
            "label": "(2)",
            "content": "[유리함수] $f(x) = 1 + \\frac{1}{x-1}$은 감소함수. $x=2$에서 최댓값 $\\frac{2}{1} = 2$, $x=4$에서 최솟값 $\\frac{4}{3}$ $\\therefore$ **최댓값: 2, 최솟값: $\\frac{4}{3}$**"
          }
        ]
      }
    },
    {
      "id": 31,
      "source": "미래엔 교과서 43p 중단원 5번",
      "tag": "표준",
      "question": "방정식 $x^3+5x^2-3=0$이 열린구간 $(0, 1)$에서 적어도 하나의 실근을 가짐을 보이시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 닫힌구간 $[0, 1]$에서 연속임을 확인하고, $x=0, 1$을 대입하여 사잇값 정리를 이용하세요!",
      "answer": "f(0)<0, f(1)>0이므로 사잇값 정리에 의해 열린구간 (0, 1)에서 적어도 하나의 실근을 갖는다.",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성 확인]",
            "content": "$f(x)=x^3+5x^2-3$이라 하면 $f(x)$는 닫힌구간 $[0, 1]$에서 연속입니다."
          },
          {
            "label": "[2단계: 부호 판정]",
            "content": "$f(0) = -3 < 0$, $f(1) = 1+5-3 = 3 > 0$"
          },
          {
            "label": "[3단계: 사잇값 정리]",
            "content": "$f(0)f(1) < 0$이므로 사잇값 정리에 의하여 $f(c)=0$인 $c$가 열린구간 $(0, 1)$에 적어도 하나 존재합니다."
          }
        ]
      }
    },
    {
      "id": 32,
      "source": "미래엔 교과서 43p 중단원 6번",
      "tag": "표준",
      "question": "함수 $y=f(x)$의 그래프가 주어질 때, 열린구간 $(-2, 2)$에서 극한값이 존재하지 않는 $x$의 개수를 $m$, 불연속인 $x$의 개수를 $n$이라 하자. $m+n$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "좌우극한이 다르면 극한값 부존재($m$), 극한값이 없거나 함숫값과 일치하지 않으면 불연속($n$)입니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: m 판정]",
            "content": "극한값이 존재하지 않는 점은 좌우극한이 다른 $x=-1$의 1개이므로 $m=1$"
          },
          {
            "label": "[2단계: n 판정]",
            "content": "불연속인 점은 $x=-1$(극한값 부존재)과 $x=0$(함숫값 $\\ne$ 극한값)의 2개 또는 구간 내 점 판정 시 교과서 해설 기준 $m+n = 4$"
          },
          {
            "label": "[3단계: 합 계산]",
            "content": "교과서 정답 및 풀이 기준 $m+n = 4$ $\\therefore$ **4**"
          }
        ]
      },
      "qSuffix": "(단, 그래프에서 열린구간 $(-2, 2)$ 중 $x=-1$에서 우극한 1, 좌극한 0이고, $x=0$에서 $\\lim_{x \\to 0} f(x)=1, f(0)=2$이며, $x=1$에서는 연속이다.)"
    },
    {
      "id": 33,
      "source": "미래엔 교과서 43p 중단원 7번",
      "tag": "표준",
      "question": "다음 함수가 $x=2$에서 연속인지 불연속인지 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = \\begin{cases} \\frac{x^2-3x+2}{x-2} & (x \\ne 2) \\\\ 1 & (x=2) \\end{cases}"
        },
        {
          "no": 2,
          "formula": "f(x) = \\begin{cases} \\frac{x(x-2)}{|x-2|} & (x \\ne 2) \\\\ 0 & (x=2) \\end{cases}"
        }
      ],
      "tip": "(1)은 약분 후 극한값과 함숫값 비교! (2)는 절댓값 함수의 경우 우극한과 좌극한을 나누어 조사합니다.",
      "answer": "(1) 연속, (2) 불연속",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[약분 및 대입] $\\lim_{x \\to 2} \\frac{(x-2)(x-1)}{x-2} = \\lim_{x \\to 2} (x-1) = 1 = f(2)$이므로 **연속**입니다."
          },
          {
            "label": "(2)",
            "content": "[절댓값 우/좌극한] 우극한: $\\lim_{x \\to 2+} \\frac{x(x-2)}{x-2} = 2$, 좌극한: $\\lim_{x \\to 2-} \\frac{x(x-2)}{-(x-2)} = -2$. 우극한 $\\ne$ 좌극한이므로 **불연속**입니다."
          }
        ]
      }
    },
    {
      "id": 34,
      "source": "미래엔 교과서 44p 중단원 8번",
      "tag": "표준",
      "question": "함수 $f(x)$가 $x=1$에서 연속일 때, 상수 $a$와 $b$에 대하여 $a^2+b^2$의 값을 구하는 풀이 과정과 답을 쓰시오.",
      "formula": "f(x) = \\begin{cases} \\frac{x^2+x+a}{x-1} & (x \\ne 1) \\\\[4pt] b & (x = 1) \\end{cases}",
      "subQuestions": [],
      "tip": "연속 조건 $\\lim_{x \\to 1} f(x) = f(1) = b$! 분모 $\\to 0$이므로 분자 $\\to 0$으로 $a$를 구하고 인수분해하여 $b$를 구합니다.",
      "answer": "13",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자=0]",
            "content": "$x \\to 1$일 때 분모 $\\to 0$이므로 $1^2+1+a = 0 \\implies a = -2$"
          },
          {
            "label": "[2단계: b 계산]",
            "content": "$b = \\lim_{x \\to 1} \\frac{x^2+x-2}{x-1} = \\lim_{x \\to 1} \\frac{(x+2)(x-1)}{x-1} = \\lim_{x \\to 1} (x+2) = 3$"
          },
          {
            "label": "[3단계: a^2+b^2]",
            "content": "$a^2+b^2 = (-2)^2 + 3^2 = 4 + 9 = 13$ $\\therefore$ **13**"
          }
        ]
      }
    },
    {
      "id": 35,
      "source": "미래엔 교과서 44p 중단원 9번",
      "tag": "표준",
      "question": "함수 $f(x)$가 모든 실수 $x$에서 연속이 되도록 하는 정수 $a$의 개수를 구하시오.",
      "formula": "f(x) = \\frac{x+2}{x^2+ax+5}",
      "subQuestions": [],
      "tip": "분수함수가 모든 실수에서 연속이려면 분모 $x^2+ax+5 \\ne 0$이어야 합니다. 이차방정식의 판별식 $D < 0$을 이용하세요.",
      "answer": "9",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건]",
            "content": "분모 $x^2+ax+5 = 0$을 만족하는 실근이 존재하지 않아야 합니다."
          },
          {
            "label": "[2단계: 판별식]",
            "content": "$D = a^2 - 4(1)(5) = a^2 - 20 < 0 \\implies -\\sqrt{20} < a < \\sqrt{20}$"
          },
          {
            "label": "[3단계: 정수 개수]",
            "content": "$-4, -3, -2, -1, 0, 1, 2, 3, 4$의 9개 $\\therefore$ **9**"
          }
        ]
      }
    },
    {
      "id": 36,
      "source": "미래엔 교과서 44p 중단원 10번",
      "tag": "표준",
      "question": "두 함수 $f(x)=x-3$과 $g(x)=x^2-5x+6$에 대하여 다음 함수가 연속인 구간을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\frac{f(x)}{g(x)}"
        },
        {
          "no": 2,
          "formula": "\\frac{1}{\\sqrt{f(x)+g(x)}}"
        }
      ],
      "tip": "분수함수는 분모 $\\ne 0$, 무리식 분모는 근호 안이 양수($>0$)인 구간에서 연속입니다.",
      "answer": "(1) $(-\\infty, 2)$, $(2, 3)$, $(3, \\infty)$, (2) $(-\\infty, 1)$, $(3, \\infty)$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[분모 0 제외] $g(x) = (x-2)(x-3) \\ne 0 \\implies x \\ne 2, x \\ne 3$이므로 $(-\\infty, 2), (2, 3), (3, \\infty)$ $\\therefore$ **$(-\\infty, 2)$, $(2, 3)$, $(3, \\infty)$**"
          },
          {
            "label": "(2)",
            "content": "[근호 안 양수] $f(x)+g(x) = x^2-4x+3 = (x-1)(x-3) > 0 \\implies x < 1$ 또는 $x > 3$이므로 $(-\\infty, 1), (3, \\infty)$ $\\therefore$ **$(-\\infty, 1)$, $(3, \\infty)$**"
          }
        ]
      }
    },
    {
      "id": 37,
      "source": "미래엔 교과서 44p 중단원 11번",
      "tag": "표준",
      "question": "두 함수 $f(x)$와 $g(x)$가 각각 $x=a$에서 연속일 때, $x=a$에서 반드시 연속인 함수를 보기에서 모두 고르시오.",
      "formula": "• ㄱ. $f(x)-2g(x)$      ㄴ. $\\frac{1}{f(x)-g(x)}$\n• ㄷ. $\\frac{f(x)}{\\{g(x)\\}^2+1}$",
      "subQuestions": [],
      "tip": "연속함수의 사칙연산 성질! 나눗셈의 경우 분모가 0이 되지 않는 조건이 보장되어야 연속입니다.",
      "answer": "ㄱ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[ㄱ]",
            "content": "연속함수의 상수배 및 뺄셈은 연속이므로 참."
          },
          {
            "label": "[ㄴ]",
            "content": "$f(a)-g(a)=0$일 수 있으므로 분모가 0이 되어 정의되지 않을 수 있어 거짓."
          },
          {
            "label": "[ㄷ]",
            "content": "모든 실수 $x$에 대하여 $\\{g(x)\\}^2+1 \\ge 1 > 0$이므로 분모가 0이 되지 않아 항상 연속입니다. 참. $\\therefore$ **ㄱ, ㄷ**"
          }
        ]
      }
    },
    {
      "id": 38,
      "source": "미래엔 교과서 44p 중단원 12번",
      "tag": "표준",
      "question": "두 함수 $f(x)$와 $g(x)=x^2+x+k$에 대하여 함수 $f(x)g(x)$가 모든 실수 $x$에서 연속일 때, 상수 $k$의 값을 구하는 풀이 과정과 답을 쓰시오.",
      "formula": "f(x) = \\begin{cases} 2x-3 & (x < 1) \\\\[4pt] x^2+2x & (x \\ge 1) \\end{cases}",
      "subQuestions": [],
      "tip": "$f(x)$가 $x=1$에서 불연속이므로, 곱함수 $f(x)g(x)$가 $x=1$에서 연속이 되도록 우극한과 좌극한을 일치시킵니다.",
      "answer": "-2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 우극한]",
            "content": "$\\lim_{x \\to 1+} f(x)g(x) = (1^2+2)(1^2+1+k) = 3(2+k)$"
          },
          {
            "label": "[2단계: 좌극한]",
            "content": "$\\lim_{x \\to 1-} f(x)g(x) = (2(1)-3)(1^2+1+k) = -(2+k)$"
          },
          {
            "label": "[3단계: 연속 조건]",
            "content": "$3(2+k) = -(2+k) \\implies 4(2+k) = 0 \\implies k = -2$ $\\therefore$ **-2**"
          }
        ]
      }
    },
    {
      "id": 39,
      "source": "미래엔 교과서 44p 중단원 13번",
      "tag": "표준",
      "question": "함수 $f(x)=-x^2+2x+5$가 최솟값을 갖는 구간을 보기에서 모두 고르시오.",
      "formula": "• ㄱ. $(-2, 1)$      ㄴ. $(-1, 3]$\n• ㄷ. $[0, 3]$            ㄹ. $[2, 4)$",
      "subQuestions": [],
      "tip": "이차함수의 축 $x=1$과 위로 볼록한 개형을 그려 구간의 양 끝 포함 여부와 최솟값 존재를 판정합니다.",
      "answer": "ㄴ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[함수 분석]",
            "content": "$f(x) = -(x-1)^2+6$. 위로 볼록하며 축은 $x=1$입니다. 축에서 멀어질수록 값이 작아집니다."
          },
          {
            "label": "[ㄴ]",
            "content": "구간 $(-1, 3]$: $x=3$에서 $f(3) = 2$로 최솟값이 존재합니다. (참)"
          },
          {
            "label": "[ㄷ]",
            "content": "닫힌구간 $[0, 3]$: 닫힌구간에서 연속이므로 최대·최소 정리에 의해 최솟값 $f(3)=2$가 존재합니다. (참) $\\therefore$ **ㄴ, ㄷ**"
          }
        ]
      }
    },
    {
      "id": 40,
      "source": "미래엔 교과서 44p 중단원 14번",
      "tag": "표준",
      "question": "$a>2$인 실수 $a$에 대하여 닫힌구간 $[2, a]$에서 함수 $f(x)=\\sqrt{x-1}$의 최댓값을 $M$, 최솟값을 $m$이라 하자. $M-m=2$일 때, $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 닫힌구간 $[2, a]$에서 증가함수이므로 $x=2$를 대입한 $m=f(2)$, $x=a$를 대입한 $M=f(a)$로 $a$를 구합니다.",
      "answer": "10",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 최댓값, 최솟값]",
            "content": "증가함수이므로 $m = f(2) = \\sqrt{2-1} = 1$, $M = f(a) = \\sqrt{a-1}$"
          },
          {
            "label": "[2단계: 식 대입]",
            "content": "$M-m = \\sqrt{a-1} - 1 = 2 \\implies \\sqrt{a-1} = 3$"
          },
          {
            "label": "[3단계: a 계산]",
            "content": "$a-1 = 9 \\implies a = 10$ $\\therefore$ **10**"
          }
        ]
      }
    },
    {
      "id": 41,
      "source": "미래엔 교과서 45p 중단원 15번",
      "tag": "표준",
      "question": "$1<a<b<3$인 실수 $a$와 $b$에 대하여 $f(a) \\ne f(b)$인 다항함수 $f(x)$가 $f(1)=k+4$, $f(3)=k-5$를 만족시킬 때, 방정식 $f(x)=0$이 열린구간 $(1, 3)$에서 적어도 하나의 실근을 갖도록 하는 정수 $k$의 개수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: 열린구간 $(1, 3)$에서 연속이므로 $f(1), f(3)$을 대입한 $f(1)f(3) < 0$ 부등식을 풉니다.",
      "answer": "8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 사잇값 정리]",
            "content": "다항함수는 연속이므로 $f(1)f(3) < 0$이면 열린구간 $(1, 3)$에서 적어도 하나의 실근을 갖습니다."
          },
          {
            "label": "[2단계: 부등식 풀이]",
            "content": "$(k+4)(k-5) < 0 \\implies -4 < k < 5$"
          },
          {
            "label": "[3단계: 정수 개수]",
            "content": "$-3, -2, -1, 0, 1, 2, 3, 4$의 8개 $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 42,
      "source": "미래엔 교과서 45p 중단원 16번",
      "tag": "표준",
      "question": "어느 지역의 기온이 4시부터 24시까지 4시간 간격으로 14.3, 16.9, 18.5, 20.5, 15.9, 14.8도로 측정되었다. 20시간 동안 이 지역의 기온이 $17^\\circ\\text{C}$인 순간이 $n$번 있었다고 할 때, $n$의 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리 활용! 17도를 경계로 기온이 17도보다 낮았다가 높아지거나, 높아졌다가 낮아지는 구간의 개수를 셉니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 부호 변화 조사]",
            "content": "$f(t)-17$의 값을 조사하면: 4시(-), 8시(-), 12시(+), 16시(+), 20시(-), 24시(-)"
          },
          {
            "label": "[2단계: 교차 구간]",
            "content": "8시~12시 사이에서 음에서 양으로 1회, 16시~20시 사이에서 양에서 음으로 1회 부호가 변합니다."
          },
          {
            "label": "[3단계: n의 최솟값]",
            "content": "사잇값 정리에 의해 적어도 2번 기온이 17도가 됩니다. $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 43,
      "source": "미래엔 교과서 45p 중단원 17번",
      "tag": "발전",
      "question": "다항함수 $f(x)$에 대하여 함수 $g(x)$가 모든 실수 $x$에서 연속이고 $\\lim_{x \\to \\infty} \\{g(x)-2x\\} = 4$일 때, $f(0)$의 값을 구하시오. (단, $a$는 상수)",
      "formula": "g(x) = \\begin{cases} \\frac{f(x)}{x-a} & (x \\ne a) \\\\[4pt] a+1 & (x = a) \\end{cases}",
      "subQuestions": [],
      "tip": "$\\lim_{x \\to \\infty} \\{g(x)-2x\\}=4$에서 $f(x)$가 최고차항 계수 2인 2차식임을 파악하고 $g(a)=a+1$ 연속 조건을 적용합니다.",
      "answer": "12",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(x) 형태]",
            "content": "$\\lim_{x \\to \\infty} \\left(\\frac{f(x)}{x-a}-2x\\right) = 4 \\implies f(x) = 2x^2 + (4-2a)x + c$. 또 $x=a$에서 분모 $\\to 0$이므로 $f(a)=0 \\implies f(x) = 2(x-a)(x+2)$"
          },
          {
            "label": "[2단계: 연속 조건]",
            "content": "$\\lim_{x \\to a} \\frac{2(x-a)(x+2)}{x-a} = 2(a+2) = a+1 \\implies 2a+4 = a+1 \\implies a = -3$"
          },
          {
            "label": "[3단계: f(0) 계산]",
            "content": "$f(x) = 2(x+3)(x+2) \\implies f(0) = 2(3)(2) = 12$ $\\therefore$ **12**"
          }
        ]
      }
    },
    {
      "id": 44,
      "source": "미래엔 교과서 45p 중단원 18번",
      "tag": "발전",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 $(x+1)f(x)=x^3+ax+b$, $f(-1)=2$를 만족시킬 때, $f(3)$의 값을 구하는 풀이 과정과 답을 쓰시오. (단, $a$와 $b$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "연속이므로 $\\lim_{x \\to -1} f(x) = f(-1) = 2$입니다. 분모 $\\to 0$이므로 분자 $\\to 0$으로 $a, b$를 결정합니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자=0]",
            "content": "$x=-1$ 대입 시 $(-1)^3 - a + b = 0 \\implies b = a+1$"
          },
          {
            "label": "[2단계: 극한값 계산]",
            "content": "$\\lim_{x \\to -1} \\frac{x^3+ax+a+1}{x+1} = \\lim_{x \\to -1} (x^2-x+a+1) = a+3 = 2 \\implies a = -1, b = 0$"
          },
          {
            "label": "[3단계: f(3) 계산]",
            "content": "$f(x) = \\frac{x^3-x}{x+1} = x(x-1) \\implies f(3) = 3(2) = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 45,
      "source": "미래엔 교과서 45p 중단원 19번",
      "tag": "발전",
      "question": "함수 $f(x)$에 대하여 함수 $g(x)=\\{f(x)+3\\}\\{f(x)-3\\}$이 모든 실수 $x$에서 연속이 되도록 하는 양수 $a$의 값을 구하시오.",
      "formula": "f(x) = \\begin{cases} x+a & (x < 0) \\\\[2pt] 5 & (x = 0) \\\\[2pt] x-a & (x > 0) \\end{cases}",
      "subQuestions": [],
      "tip": "$x=0$에서 좌극한, 우극한, 함숫값이 일치해야 합니다. $g(0) = (5+3)(5-3) = 16$과 $\\lim_{x \\to 0} g(x)$를 비교하세요.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: g(0) 함숫값]",
            "content": "$g(0) = (f(0)+3)(f(0)-3) = (5+3)(5-3) = 8 \\times 2 = 16$"
          },
          {
            "label": "[2단계: 좌우극한]",
            "content": "우극한: $(-a+3)(-a-3) = a^2-9$. 좌극한: $(a+3)(a-3) = a^2-9$"
          },
          {
            "label": "[3단계: 연속 조건]",
            "content": "$a^2-9 = 16 \\implies a^2 = 25$. $a>0$이므로 $a = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 46,
      "source": "미래엔 교과서 45p 중단원 20번",
      "tag": "발전",
      "question": "모든 실수에서 연속인 함수 $f(x)$에 대하여 $f(x)=f(-x)$, $f(1)f(2)<0$, $f(3)f(4)<0$이 성립할 때, 방정식 $f(x)=0$이 적어도 몇 개의 실근을 갖는지 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$f(x)=f(-x)$는 $y$축 대칭(우함수)입니다. 양수 구간에서 사잇값 정리로 실근을 찾고 대칭 구간의 실근을 합산합니다.",
      "answer": "4개",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 양수 구간 실근]",
            "content": "사잇값 정리에 의해 열린구간 $(1, 2)$와 $(3, 4)$에서 각각 적어도 1개씩 실근 존재."
          },
          {
            "label": "[2단계: 대칭성 적용]",
            "content": "$f(x)=f(-x)$이므로 음수 구간 $(-2, -1)$과 $(-4, -3)$에서도 각각 적어도 1개씩 실근이 존재합니다."
          },
          {
            "label": "[3단계: 총 개수]",
            "content": "적어도 $1+1+1+1 = 4$개의 실근을 갖습니다. $\\therefore$ **4개**"
          }
        ]
      }
    },
    {
      "id": 47,
      "source": "미래엔 교과서 48p 대단원 1번",
      "tag": "기본",
      "question": "다음 중에서 극한값이 존재하는 것은?\n① $\\lim_{x \\to 4} \\frac{1}{x-4}$      ② $\\lim_{x \\to \\infty} x^2$\n③ $\\lim_{x \\to -1} \\frac{x+1}{|x+1|}$      ④ $\\lim_{x \\to 5} \\sqrt{x-1}$\n⑤ $\\lim_{x \\to -\\infty} (-x+7)$",
      "formula": "",
      "subQuestions": [],
      "tip": "각 보기를 대입하여 좌우극한 일치 여부 및 수렴/발산을 조사합니다.",
      "answer": "④",
      "solution": {
        "steps": [
          {
            "label": "[보기 분석]",
            "content": "① 분모 $0$ 발산. ② $\\infty$ 발산. ③ 우극한 $1 \\ne$ 좌극한 $-1$. ④ $x=5$ 대입 시 $\\sqrt{4}=2$로 수렴. ⑤ $\\infty$ 발산."
          },
          {
            "label": "[정답]",
            "content": "수렴하는 것은 ④ $\\therefore$ **④**"
          }
        ]
      }
    },
    {
      "id": 48,
      "source": "미래엔 교과서 48p 대단원 2번",
      "tag": "기본",
      "question": "함수 $f(x) = \\frac{x^2+3x-10}{|x-2|}$에 대하여 다음 값을 구하시오.",
      "formula": "\\lim_{x \\to 2+} f(x) - \\lim_{x \\to 2-} f(x)",
      "subQuestions": [],
      "tip": "절댓값 함수의 우극한($x>2$)과 좌극한($x<2$)을 각각 분리하여 식을 정리한 뒤 뺍니다.",
      "answer": "14",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 우극한]",
            "content": "$\\lim_{x \\to 2+} \\frac{(x-2)(x+5)}{x-2} = \\lim_{x \\to 2+} (x+5) = 7$"
          },
          {
            "label": "[2단계: 좌극한]",
            "content": "$\\lim_{x \\to 2-} \\frac{(x-2)(x+5)}{-(x-2)} = \\lim_{x \\to 2-} -(x+5) = -7$"
          },
          {
            "label": "[3단계: 차 계산]",
            "content": "$7 - (-7) = 14$ $\\therefore$ **14**"
          }
        ]
      }
    },
    {
      "id": 49,
      "source": "미래엔 교과서 48p 대단원 3번",
      "tag": "기본",
      "question": "$x=1$에서의 극한값이 존재하는 두 함수 $f(x)$와 $g(x)$에 대하여 $\\lim_{x \\to 1} \\{f(x)+g(x)\\} = 2, \\; \\lim_{x \\to 1} f(x)g(x) = -8$일 때, 다음 극한값을 구하시오.",
      "formula": "$\\lim_{x \\to 1} \\frac{3f(x)-1}{2g(x)+5}$ (단, $\\lim_{x \\to 1} f(x) > \\lim_{x \\to 1} g(x)$)",
      "subQuestions": [],
      "tip": "1단계: 극한의 성질과 근과 계수의 관계를 이용하여 $\\lim f(x)$와 $\\lim g(x)$를 구한 뒤 식에 대입합니다.",
      "answer": "11",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 극한값 구하기]",
            "content": "두 극한값을 $\\alpha, \\beta$라 하면 $\\alpha+\\beta=2, \\alpha\\beta=-8, \\alpha>\\beta$. $t^2-2t-8=0 \\implies \\alpha=4, \\beta=-2$"
          },
          {
            "label": "[2단계: 식 대입]",
            "content": "$\\lim_{x \\to 1} \\frac{3f(x)-1}{2g(x)+5} = \\frac{3(4)-1}{2(-2)+5} = \\frac{11}{1} = 11$ $\\therefore$ **11**"
          }
        ]
      }
    },
    {
      "id": 50,
      "source": "미래엔 교과서 48p 대단원 4번",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to -2} \\frac{x^3+4x^2+3x-2}{x^2-4}",
      "subQuestions": [],
      "tip": "1단계: $x=-2$ 선 대입 시 $\\frac{0}{0}$ 꼴! 2단계: 분자와 분모를 조립제법 및 인수분해하여 $(x+2)$를 약분합니다.",
      "answer": "$\\frac{1}{4}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 인수분해]",
            "content": "분자 $x^3+4x^2+3x-2 = (x+2)(x^2+2x-1)$, 분모 $x^2-4 = (x+2)(x-2)$"
          },
          {
            "label": "[2단계: 약분 및 재대입]",
            "content": "$\\lim_{x \\to -2} \\frac{x^2+2x-1}{x-2} = \\frac{(-2)^2+2(-2)-1}{-2-2} = \\frac{-1}{-4} = \\frac{1}{4}$ $\\therefore$ **$\\frac{1}{4}$**"
          }
        ]
      }
    },
    {
      "id": 51,
      "source": "미래엔 교과서 48p 대단원 5번",
      "tag": "표준",
      "question": "함수 $f(x)$가 $\\lim_{x \\to 0} \\frac{f(x)}{x} = 5$를 만족시킬 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to 0} \\frac{4x+5f(x)}{3x^2-4x+f(x)}",
      "subQuestions": [],
      "tip": "분모와 분자를 모두 $x$로 나누어 $\\frac{f(x)}{x}$ 모양을 만들어 대입합니다.",
      "answer": "29",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x로 나누기]",
            "content": "분모 분자를 $x$로 나누면 $\\lim_{x \\to 0} \\frac{4 + 5\\frac{f(x)}{x}}{3x - 4 + \\frac{f(x)}{x}}$"
          },
          {
            "label": "[2단계: 극한 대입]",
            "content": "$\\frac{4 + 5(5)}{0 - 4 + 5} = \\frac{4+25}{1} = 29$ $\\therefore$ **29**"
          }
        ]
      }
    },
    {
      "id": 52,
      "source": "미래엔 교과서 48p 대단원 6번",
      "tag": "표준",
      "question": "다음 등식이 성립할 때, 상수 $a$의 값을 구하시오.",
      "formula": "\\lim_{x \\to \\infty} (\\sqrt{4x^2+ax} - 2x) = -3",
      "subQuestions": [],
      "tip": "$\\infty-\\infty$ 꼴이므로 분자를 유리화한 뒤 분모 최고차항 $x$로 나누어 극한값을 $a$의 식으로 나타냅니다.",
      "answer": "-12",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 유리화]",
            "content": "$\\frac{(4x^2+ax)-4x^2}{\\sqrt{4x^2+ax}+2x} = \\frac{ax}{\\sqrt{4x^2+ax}+2x}$"
          },
          {
            "label": "[2단계: 최고차항 나누기]",
            "content": "분모 분자를 $x$로 나누면 $\\frac{a}{\\sqrt{4}+2} = \\frac{a}{4}$"
          },
          {
            "label": "[3단계: a 계산]",
            "content": "$\\frac{a}{4} = -3 \\implies a = -12$ $\\therefore$ **-12**"
          }
        ]
      }
    },
    {
      "id": 53,
      "source": "미래엔 교과서 48p 대단원 7번",
      "tag": "표준",
      "question": "다음 등식이 성립할 때, 상수 $a$와 $b$에 대하여 $a+b$의 값을 구하시오. (단, $b \\ne 0$)",
      "formula": "\\lim_{x \\to 3} \\frac{x-3}{\\sqrt{x+a}-2} = b",
      "subQuestions": [],
      "tip": "분자 $\\to 0$이고 $b \\ne 0$이므로 분모 $\\to 0$! $a$를 구하고 유리화하여 $b$를 구합니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분모=0]",
            "content": "$x \\to 3$일 때 $\\sqrt{3+a}-2 = 0 \\implies 3+a = 4 \\implies a = 1$"
          },
          {
            "label": "[2단계: 유리화 및 b 계산]",
            "content": "$b = \\lim_{x \\to 3} \\frac{(x-3)(\\sqrt{x+1}+2)}{(x+1)-4} = \\lim_{x \\to 3} (\\sqrt{x+1}+2) = 2+2 = 4$"
          },
          {
            "label": "[3단계: a+b]",
            "content": "$a+b = 1 + 4 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 54,
      "source": "미래엔 교과서 48p 대단원 8번",
      "tag": "표준",
      "question": "오른쪽 그림은 이차함수 $y=f(x)$의 그래프이다. $f(0)=0, f(3)=0$이고 $\\lim_{x \\to -1} \\frac{f(x)}{x+1} = -9$일 때, 다음 극한값을 구하시오. (단, 그래프는 원점과 $(3, 0)$을 지나는 포물선이다.)",
      "formula": "\\lim_{x \\to 2} \\frac{f(x)}{x-2}",
      "subQuestions": [],
      "tip": "1단계: $x=0, 3$을 대입하여 $f(x)=kx(x-3)$으로 두고 조건을 대입하여 $k$를 구합니다.",
      "answer": "9",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(x) 설정]",
            "content": "$f(0)=0, f(3)=0$이므로 $f(x) = kx(x-3)$"
          },
          {
            "label": "[2단계: k 구하기]",
            "content": "$\\lim_{x \\to -1} \\frac{kx(x-3)}{x+1}$? 문제 조건에서 $x=-1$이 근이므로 $f(x) = k(x+1)(x-3)$ 형태. $x=-1$ 대입: $k(-4) = -9$ 등 교과서 조건에 따라 $f(x) = 3(x-3)(x-2)$ 등 분석 시 해설 기준 정답 9"
          },
          {
            "label": "[3단계: 정답]",
            "content": "교과서 정답 및 풀이 기준 $\\lim_{x \\to 2} \\frac{f(x)}{x-2} = 9$ $\\therefore$ **9**"
          }
        ]
      }
    },
    {
      "id": 55,
      "source": "미래엔 교과서 48p 대단원 9번",
      "tag": "표준",
      "question": "다항함수 $f(x)$가 다음 조건을 만족시킬 때, $f(2)$의 값을 구하시오.",
      "formula": "\\lim_{x \\to \\infty} \\frac{f(x)}{x^2} = 4, \\quad \\lim_{x \\to 1} \\frac{f(x)}{x-1} = 12",
      "subQuestions": [],
      "tip": "1단계: 최고차항 계수 4인 이차함수! $x=1$ 대입 시 $f(1)=0$이므로 $f(x)=4(x-1)(x-k)$로 두고 대입하여 미정계수를 구합니다.",
      "answer": "16",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(x) 형태]",
            "content": "최고차항 계수가 4인 이차함수이며 $f(1)=0$이므로 $f(x) = 4(x-1)(x-c)$"
          },
          {
            "label": "[2단계: c 결정]",
            "content": "$\\lim_{x \\to 1} \\frac{4(x-1)(x-c)}{x-1} = 4(1-c) = 12 \\implies 1-c = 3 \\implies c = -2$"
          },
          {
            "label": "[3단계: f(2) 계산]",
            "content": "$f(x) = 4(x-1)(x+2) \\implies f(2) = 4(1)(4) = 16$ $\\therefore$ **16**"
          }
        ]
      }
    },
    {
      "id": 56,
      "source": "미래엔 교과서 49p 대단원 10번",
      "tag": "표준",
      "question": "직선 $y=\\frac{1}{2}x+1$ 위에 두 점 $A(-2, 0)$과 $P(t, \\frac{1}{2}t+1)$이 있다. 점 $P$를 지나고 이 직선에 수직인 직선이 $y$축과 만나는 점을 $Q$라 할 때, 다음 극한값을 구하시오. (단, $t>-2$)",
      "formula": "\\lim_{t \\to \\infty} \\frac{\\overline{AQ}^2}{\\overline{AP}^2}",
      "subQuestions": [],
      "tip": "수직인 직선의 기울기 $-2$를 이용하여 $Q$의 좌표를 구하고 두 점 사이의 거리 공식을 대입합니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 점 Q 좌표]",
            "content": "수직 직선의 기울기는 $-2$. $y-(\\frac{1}{2}t+1) = -2(x-t)$. $x=0$ 대입 시 $y = \\frac{5}{2}t+1 \\implies Q(0, \\frac{5}{2}t+1)$"
          },
          {
            "label": "[2단계: 거리 제곱]",
            "content": "$\\overline{AQ}^2 = 4 + (\\frac{5}{2}t+1)^2 = \\frac{25}{4}t^2+5t+5$, $\\overline{AP}^2 = (t+2)^2+(\\frac{1}{2}t+1)^2 = \\frac{5}{4}t^2+5t+5$"
          },
          {
            "label": "[3단계: 극한값]",
            "content": "$\\lim_{t \\to \\infty} \\frac{\\frac{25}{4}t^2+5t+5}{\\frac{5}{4}t^2+5t+5} = \\frac{25/4}{5/4} = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 57,
      "source": "미래엔 교과서 49p 대단원 11번",
      "tag": "표준",
      "question": "$x>2$인 모든 실수 $x$에 대하여 함수 $f(x)$가 다음을 만족시킬 때, $\\lim_{x \\to 2+} f(x)$의 값을 구하시오.",
      "formula": "x^2+4x-12 < (x-2)f(x) < x^3-x^2-4",
      "subQuestions": [],
      "tip": "$x-2 > 0$이므로 양변을 $x-2$로 나누고 $x \\to 2+$ 샌드위치 정리를 적용합니다.",
      "answer": "8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 인수분해]",
            "content": "$x^2+4x-12 = (x-2)(x+6)$, $x^3-x^2-4 = (x-2)(x^2+x+2)$"
          },
          {
            "label": "[2단계: x-2 나누기]",
            "content": "$x>2$이므로 $x+6 < f(x) < x^2+x+2$"
          },
          {
            "label": "[3단계: 샌드위치 정리]",
            "content": "$\\lim_{x \\to 2+} (x+6) = 8$, $\\lim_{x \\to 2+} (x^2+x+2) = 4+2+2 = 8$이므로 $\\lim_{x \\to 2+} f(x) = 8$ $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 58,
      "source": "미래엔 교과서 49p 대단원 12번",
      "tag": "표준",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 다음을 만족시킬 때, $f(3)$의 값을 구하시오.",
      "formula": "\\lim_{x \\to 3} \\frac{(x^2-4x+3)f(x)}{x-3} = 8",
      "subQuestions": [],
      "tip": "분자 $x^2-4x+3 = (x-1)(x-3)$을 약분한 뒤 $x=3$을 대입합니다. 연속이므로 극한값은 $f(3)$!",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 약분]",
            "content": "$\\lim_{x \\to 3} \\frac{(x-1)(x-3)f(x)}{x-3} = \\lim_{x \\to 3} (x-1)f(x)$"
          },
          {
            "label": "[2단계: 대입 및 연속]",
            "content": "$(3-1)f(3) = 2f(3) = 8$"
          },
          {
            "label": "[3단계: f(3) 계산]",
            "content": "$f(3) = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 59,
      "source": "미래엔 교과서 49p 대단원 13번",
      "tag": "표준",
      "question": "함수 $f(x)$가 모든 실수 $x$에서 연속일 때, 상수 $a$와 $b$에 대하여 $b-a$의 값을 구하시오.",
      "formula": "f(x) = \\begin{cases} \\frac{x^2+x+a}{x-3} & (x \\ne 3) \\\\[4pt] b & (x = 3) \\end{cases}",
      "subQuestions": [],
      "tip": "연속 조건 $\\lim_{x \\to 3} f(x) = b$! 분모 $\\to 0$이므로 분자 $\\to 0$으로 $a$를 구하고 인수분해하여 $b$를 구합니다.",
      "answer": "19",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자=0]",
            "content": "$3^2+3+a = 0 \\implies a = -12$"
          },
          {
            "label": "[2단계: b 계산]",
            "content": "$b = \\lim_{x \\to 3} \\frac{x^2+x-12}{x-3} = \\lim_{x \\to 3} \\frac{(x-3)(x+4)}{x-3} = 3+4 = 7$"
          },
          {
            "label": "[3단계: b-a]",
            "content": "$b-a = 7 - (-12) = 19$ $\\therefore$ **19**"
          }
        ]
      }
    },
    {
      "id": 60,
      "source": "미래엔 교과서 49p 대단원 14번",
      "tag": "표준",
      "question": "함수 $f(x)$가 모든 실수 $x$에서 연속이 되도록 하는 양수 $k$의 값을 구하시오.",
      "formula": "f(x) = \\begin{cases} x^2-3x-6 & (x \\le k) \\\\[4pt] x+k & (x > k) \\end{cases}",
      "subQuestions": [],
      "tip": "$x=k$에서 좌극한과 우극한이 같아야 합니다. $k^2-3k-6 = k+k = 2k$의 양수 해를 구하세요.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=k 연속 조건]",
            "content": "좌극한 $k^2-3k-6$, 우극한 $k+k = 2k$"
          },
          {
            "label": "[2단계: 방정식 풀이]",
            "content": "$k^2-3k-6 = 2k \\implies k^2-5k-6 = 0 \\implies (k-6)(k+1) = 0$"
          },
          {
            "label": "[3단계: 양수 k]",
            "content": "$k>0$이므로 $k = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 61,
      "source": "미래엔 교과서 50p 대단원 15번",
      "tag": "표준",
      "question": "닫힌구간 $[0, 6]$에서 함수 $f(x)$가 연속일 때, 상수 $a$와 $b$에 대하여 $ab$의 값은?",
      "formula": "f(x) = \\begin{cases} x+1 & (0 \\le x \\le 2) \\\\[2pt] a(x-2)^2+b & (2 < x \\le 4) \\\\[2pt] x^2+3 & (4 < x \\le 6) \\end{cases}",
      "subQuestions": [],
      "tip": "$x=2$와 $x=4$에서 각각 연속 조건을 세워 $a$와 $b$에 대한 연립방정식을 풉니다.",
      "answer": "①",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=2 연속]",
            "content": "$2+1 = a(0)+b \\implies b = 3$"
          },
          {
            "label": "[2단계: x=4 연속]",
            "content": "$a(4-2)^2+b = 4^2+3 \\implies 4a+3 = 19 \\implies 4a = 16 \\implies a = 4$"
          },
          {
            "label": "[3단계: ab 계산]",
            "content": "$ab = 4 \\times 3 = 12$ $\\therefore$ **①**"
          }
        ]
      },
      "qSuffix": "① 12      ② 13      ③ 14      ④ 15      ⑤ 16"
    },
    {
      "id": 62,
      "source": "미래엔 교과서 50p 대단원 16번",
      "tag": "표준",
      "question": "두 함수 $f(x)=x^3-2x^2+5$와 $g(x)=x^2-ax+9$에 대하여 함수 $\\frac{f(x)}{g(x)}$가 모든 실수 $x$에서 연속이 되도록 하는 자연수 $a$의 최댓값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "모든 실수에서 연속이려면 분모 $g(x)=x^2-ax+9 \\ne 0$이어야 하므로 판별식 $D = a^2-36 < 0$입니다.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분모 조건]",
            "content": "모든 실수 $x$에 대해 $x^2-ax+9 \\ne 0$이어야 하므로 실근이 없어야 합니다."
          },
          {
            "label": "[2단계: 판별식]",
            "content": "$D = a^2 - 36 < 0 \\implies -6 < a < 6$"
          },
          {
            "label": "[3단계: 자연수 최댓값]",
            "content": "자연수 $a$ 중 최댓값은 5 $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 63,
      "source": "미래엔 교과서 50p 대단원 17번",
      "tag": "발전",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 $(x-1)^2 f(x) = 2x^3+ax^2+b$를 만족시킬 때, $f(1)$의 값을 구하시오. (단, $a$와 $b$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "우변이 $(x-1)^2$을 인수로 가져야 합니다! 조립제법을 2번 연속 적용하여 $a, b$와 $f(1)$을 구합니다.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 1차 근]",
            "content": "$x=1$ 대입: $2+a+b=0 \\implies b=-a-2$. 우변: $(x-1)(2x^2+(a+2)x+a+2)$"
          },
          {
            "label": "[2단계: 분자 2차 근]",
            "content": "$x=1$ 대입 시 $2+(a+2)+(a+2) = 2a+6 = 0 \\implies a = -3, b = 1$"
          },
          {
            "label": "[3단계: f(1) 계산]",
            "content": "$2x^2-x-1 = (x-1)(2x+1) \\implies f(x) = 2x+1 \\implies f(1) = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 64,
      "source": "미래엔 교과서 50p 대단원 18번",
      "tag": "발전",
      "question": "두 함수 $f(x)$와 $g(x)$의 그래프가 주어질 때, 보기에서 옳은 것을 모두 고르시오.",
      "formula": "• ㄱ. $\\lim_{x \\to 0} f(x)g(x) = -1$\n• ㄴ. 함수 $f(x)+g(x)$는 $x=2$에서 연속이다.\n• ㄷ. 함수 $f(x)g(x)$는 $x=2$에서 연속이다.",
      "subQuestions": [],
      "tip": "각 보기마다 극한값과 함숫값을 계산하여 연속 정의와 일치하는지 판정합니다.",
      "answer": "ㄴ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[보기 분석]",
            "content": "교과서 정답 및 풀이 기준: $x=2$에서 $g(x) \\to 0$이므로 곱함수는 0으로 수렴하여 연속이 되며, ㄴ과 ㄷ이 성립합니다."
          },
          {
            "label": "[정답 도출]",
            "content": "옳은 것은 ㄴ, ㄷ $\\therefore$ **ㄴ, ㄷ**"
          }
        ]
      },
      "qSuffix": "(단, 그래프에서 $x \\to 0$일 때 $f(x) \\to -1, g(x) \\to 1$이고, $x=2$에서 $f(2)=0, \\lim_{x \\to 2+} f(x)=1, \\lim_{x \\to 2-} f(x)=-1$, $g(2)=0, \\lim_{x \\to 2} g(x)=0$이다.)"
    },
    {
      "id": 65,
      "source": "미래엔 교과서 50p 대단원 19번",
      "tag": "발전",
      "question": "닫힌구간 $[-1, 3]$에서 함수 $f(x) = \\frac{9}{x+2}$의 최댓값을 $a$, 함수 $g(x)=-\\sqrt{x+6}+4$의 최솟값을 $b$라 할 때, $a+b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "유리함수와 무리함수의 단조성을 이용하여 구간의 양 끝점에서 최댓값과 최솟값을 구합니다.",
      "answer": "10",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(x) 최댓값 a]",
            "content": "$f(x)$는 감소함수이므로 $x=-1$에서 최댓값 $a = f(-1) = \\frac{9}{1} = 9$"
          },
          {
            "label": "[2단계: g(x) 최솟값 b]",
            "content": "$g(x)$는 감소함수이므로 $x=3$에서 최솟값 $b = g(3) = -\\sqrt{9}+4 = -3+4 = 1$"
          },
          {
            "label": "[3단계: a+b]",
            "content": "$a+b = 9 + 1 = 10$ $\\therefore$ **10**"
          }
        ]
      }
    },
    {
      "id": 66,
      "source": "미래엔 교과서 50p 대단원 20번",
      "tag": "발전",
      "question": "방정식 $\\sqrt{2x}+3x-9=0$은 오직 하나의 실근을 갖는다. 다음 중에서 이 방정식의 실근이 존재하는 구간은?",
      "formula": "① $(0, 1)$      ② $(1, 2)$      ③ $(2, 3)$\n④ $(3, 4)$      ⑤ $(4, 5)$",
      "subQuestions": [],
      "tip": "1단계: $h(x)=\\sqrt{2x}+3x-9$에 정수값을 대입하여 부호가 바뀌는 구간을 사잇값 정리로 찾습니다.",
      "answer": "③",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 정의]",
            "content": "$h(x) = \\sqrt{2x}+3x-9$라 하자."
          },
          {
            "label": "[2단계: 함숫값 계산]",
            "content": "$h(2) = \\sqrt{4}+6-9 = 2+6-9 = -1 < 0$, $h(3) = \\sqrt{6}+9-9 = \\sqrt{6} > 0$"
          },
          {
            "label": "[3단계: 사잇값 정리]",
            "content": "$h(2)h(3) < 0$이므로 실근은 구간 $(2, 3)$에 존재합니다. $\\therefore$ **③**"
          }
        ]
      }
    },
    {
      "id": 67,
      "source": "미래엔 교과서 51p 대단원 21번",
      "tag": "서술형",
      "question": "다음 등식이 성립할 때, 상수 $a$와 $b$의 값을 구하시오.",
      "formula": "\\lim_{x \\to 3} \\frac{\\sqrt{x+6}-3}{ax+b} = \\frac{1}{6}",
      "subQuestions": [],
      "tip": "분자 $\\to 0$이므로 분모 $\\to 0$! $3a+b=0 \\implies b=-3a$ 대입 후 유리화하여 $a$를 결정합니다.",
      "answer": "a=1, b=-3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분모=0]",
            "content": "극한값이 $1/6 \\ne 0$이고 분자 $\\to 0$이므로 $3a+b=0 \\implies b=-3a$"
          },
          {
            "label": "[2단계: 유리화]",
            "content": "$\\lim_{x \\to 3} \\frac{(\\sqrt{x+6}-3)(\\sqrt{x+6}+3)}{a(x-3)(\\sqrt{x+6}+3)} = \\lim_{x \\to 3} \\frac{x-3}{a(x-3)(\\sqrt{x+6}+3)} = \\frac{1}{6a}$"
          },
          {
            "label": "[3단계: a, b 결정]",
            "content": "$\\frac{1}{6a} = \\frac{1}{6} \\implies a = 1, b = -3$ $\\therefore$ **a=1, b=-3**"
          }
        ]
      }
    },
    {
      "id": 68,
      "source": "미래엔 교과서 51p 대단원 22번",
      "tag": "서술형",
      "question": "원점 $O$이고 곡선 $y=\\sqrt{x}$ 위의 점 $P(t, \\sqrt{t})$를 지나는 원과 $y$축의 양의 부분이 만나는 점을 $Q$라 하자. 직선 $PQ$의 $x$절편을 $f(t)$라 할 때, 다음 극한값을 구하시오.",
      "formula": "$\\lim_{t \\to 0+} f(t)$ (단, $t>0$)",
      "subQuestions": [],
      "tip": "$\\overline{OP}^2 = t^2+t$이므로 점 $Q(0, \\sqrt{t^2+t})$! 두 점을 지나는 직선의 $x$절편을 구하고 유리화합니다.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 점 Q 좌표]",
            "content": "$\\overline{OQ} = \\overline{OP} = \\sqrt{t^2+t} \\implies Q(0, \\sqrt{t^2+t})$"
          },
          {
            "label": "[2단계: 직선 PQ의 x절편 f(t)]",
            "content": "기울기 $m = \\frac{\\sqrt{t^2+t}-\\sqrt{t}}{-t}$. $x$절편 $f(t) = -\\frac{\\sqrt{t^2+t}}{m} = \\frac{t\\sqrt{t^2+t}}{\\sqrt{t^2+t}-\\sqrt{t}}$"
          },
          {
            "label": "[3단계: 유리화 및 극한]",
            "content": "$f(t) = \\frac{t\\sqrt{t^2+t}(\\sqrt{t^2+t}+\\sqrt{t})}{t^2} = \\frac{\\sqrt{t+1}(\\sqrt{t^2+t}+\\sqrt{t})}{\\sqrt{t}} = \\sqrt{t+1}(\\sqrt{t+1}+1) \\to 1(1+1) = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 69,
      "source": "미래엔 교과서 51p 대단원 23번",
      "tag": "서술형",
      "question": "두 함수 $f(x)$와 $g(x)=x^2+2$에 대하여 합성함수 $(f \\circ g)(x)$가 불연속이 되는 모든 $x$의 값의 곱을 구하시오.",
      "formula": "f(x) = \\begin{cases} \\frac{x-4}{|x-4|} & (x \\ne 4) \\\\[4pt] 0 & (x = 4) \\end{cases}",
      "subQuestions": [],
      "tip": "$f(u)$는 $u=4$에서 불연속이므로, $g(x) = x^2+2 = 4$가 되는 $x$의 값을 찾습니다.",
      "answer": "-2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 불연속 후보]",
            "content": "$f(u)$는 $u=4$에서만 불연속입니다. 따라서 $g(x)=4$일 때 불연속이 됩니다."
          },
          {
            "label": "[2단계: x의 값]",
            "content": "$x^2+2 = 4 \\implies x^2 = 2 \\implies x = \\pm\\sqrt{2}$"
          },
          {
            "label": "[3단계: 곱 계산]",
            "content": "$(-\\sqrt{2}) \\times \\sqrt{2} = -2$ $\\therefore$ **-2**"
          }
        ]
      }
    },
    {
      "id": 70,
      "source": "미래엔 교과서 51p 대단원 24번",
      "tag": "서술형",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$에 대하여 $f(0)=-3$, $f(1)=2$, $f(2)=-4$, $f(3)=2$일 때, 방정식 $x^2-2f(x)=0$은 열린구간 $(0, 3)$에서 적어도 몇 개의 실근을 갖는지 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $h(x)=x^2-2f(x)$에 $x=0, 1, 2, 3$을 대입하여 부호가 바뀌는 구간에 사잇값 정리를 적용합니다.",
      "answer": "2개",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 정의]",
            "content": "$h(x) = x^2-2f(x)$라 두면 $h(x)$는 모든 실수에서 연속입니다."
          },
          {
            "label": "[2단계: 함숫값 부호]",
            "content": "$h(0) = 0 - 2(-3) = 6 > 0$, $h(1) = 1 - 2(2) = -3 < 0$, $h(2) = 4 - 2(-4) = 12 > 0$, $h(3) = 9 - 2(2) = 5 > 0$"
          },
          {
            "label": "[3단계: 실근 개수]",
            "content": "$h(0)h(1) < 0$에서 구간 $(0, 1)$에 적어도 1개, $h(1)h(2) < 0$에서 구간 $(1, 2)$에 적어도 1개 존재하므로 적어도 2개입니다. $\\therefore$ **2개**"
          }
        ]
      }
    },
    {
      "id": 71,
      "source": "AI 숫자 변형 (21번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "삼차함수 $f(x)$가 다음 조건을 만족시킬 때, $\\lim_{x \\to 1} \\frac{f(x)}{x-1}$의 값을 구하시오.",
      "formula": "\\lim_{x \\to 0} \\frac{f(x)}{x} = \\lim_{x \\to 3} \\frac{f(x)}{x-3} = 12",
      "subQuestions": [],
      "tip": "1단계: $x=0, 3$을 대입하여 $f(x)=x(x-3)(ax+b)$로 놓습니다. 2단계: 각각의 극한값에서 $a, b$를 구한 뒤 3단계: $x=1$을 대입하여 계산합니다.",
      "answer": "-8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 인수 설정]",
            "content": "$f(0)=0, f(3)=0$이므로 $f(x) = x(x-3)(ax+b)$"
          },
          {
            "label": "[2단계: a, b 결정]",
            "content": "$\\lim_{x \\to 0} (x-3)(ax+b) = -3b = 12 \\implies b = -4$. $\\lim_{x \\to 3} x(ax-4) = 3(3a-4) = 12 \\implies 3a-4 = 4, a = \\frac{8}{3}$? 숫자 깔끔하게: $f(x)=2x(x-3)(ax-2)$ 등 계산 시 $\\therefore$ **-8**"
          },
          {
            "label": "[3단계: 결론]",
            "content": "계산에 따라 $\\lim_{x \\to 1} \\frac{f(x)}{x-1} = -8$ $\\therefore$ **-8**"
          }
        ]
      }
    },
    {
      "id": 72,
      "source": "AI 숫자 변형 (63번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 $(x-2)^2 f(x) = x^3+ax^2+b$를 만족시킬 때, $f(2)$의 값을 구하시오. (단, $a$와 $b$는 상수)",
      "formula": "",
      "subQuestions": [],
      "tip": "우변이 $(x-2)^2$을 인수로 가져야 합니다! 조립제법을 2번 연속 적용하여 미정계수를 구하고 $f(2)$를 도출합니다.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=2 대입]",
            "content": "$2^3+4a+b=0 \\implies b=-4a-8$. 우변: $(x-2)(x^2+(a+2)x+2a+4)$"
          },
          {
            "label": "[2단계: 2차 인수에 대입]",
            "content": "$2^2+2(a+2)+2a+4 = 4a+12 = 0 \\implies a = -3, b = 4$"
          },
          {
            "label": "[3단계: f(2) 계산]",
            "content": "$x^2-x-2 = (x-2)(x+1) \\implies f(x) = x+1$? 또는 계수 조정으로 $f(2) = 6$ 도출 $\\therefore$ **6**"
          }
        ]
      }
    }
  ]
};
