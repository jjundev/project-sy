/*
 * 동아출판 교과서 실전 핵심: I. 함수의 극한과 연속 (48문항)
 */
window.WORKSHEET_DATA = {
  "meta": {
    "title": "수학 II / 미적분 I - I. 함수의 극한과 연속",
    "subtitle": "동아출판 교과서 실전 핵심 (스스로 해결하기 + 단원 마무리 전수 수록)",
    "student": "동아",
    "date": "2026. 09. 17 (목)",
    "cheer": "동아의 완벽한 교과서 정복과 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "동아 교과서 17p 스스로 해결하기 1번 (1), (2)",
      "tag": "기본",
      "question": "다음 극한의 수렴, 발산을 조사하고, 수렴하면 그 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} (4x+1)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 2} \\frac{-2}{x-3}"
        }
      ],
      "tip": "1단계: $x=a$를 식에 먼저 대입하기! 분모가 0이 되지 않으면 대입한 함숫값이 곧 극한값입니다.",
      "answer": "(1) 수렴, 5, (2) 수렴, 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x=1$ 대입 시 $4(1)+1 = 5$ $\\therefore$ **수렴, 5**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x=2$ 대입 시 $\\frac{-2}{2-3} = \\frac{-2}{-1} = 2$ $\\therefore$ **수렴, 2**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "동아 교과서 17p 스스로 해결하기 1번 (3), (4)",
      "tag": "기본",
      "question": "다음 극한의 수렴, 발산을 조사하고, 수렴하면 그 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to -1} \\frac{x^2-x-2}{x-2}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -3} \\frac{5}{|3x+9|}"
        }
      ],
      "tip": "1단계: 선 대입하여 분모와 분자의 상태를 확인하세요. 분모가 $+0$으로 가면 양의 무한대로 발산합니다.",
      "answer": "(1) 수렴, 0, (2) 발산",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x=-1$ 대입 시 $\\frac{(-1)^2-(-1)-2}{-1-2} = \\frac{0}{-3} = 0$ $\\therefore$ **수렴, 0**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x \\to -3$일 때 $|3x+9| \\to +0$이므로 $\\frac{5}{+0} \\to \\infty$ $\\therefore$ **발산**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "동아 교과서 17p 스스로 해결하기 2번 (1), (2)",
      "tag": "기본",
      "question": "다음 극한의 수렴, 발산을 조사하고, 수렴하면 그 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} \\frac{4}{x+1}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} (-2x^2+3)"
        }
      ],
      "tip": "1단계: $x \\to \\infty$ 대입 시 분모만 무한대로 커지면 $\\frac{c}{\\infty} \\to 0$에 수렴하고, 음의 최고차항은 음의 무한대로 발산합니다.",
      "answer": "(1) 수렴, 0, (2) 발산",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 대입] $x \\to \\infty$일 때 $x+1 \\to \\infty$이므로 $\\frac{4}{\\infty} \\to 0$ $\\therefore$ **수렴, 0**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 대입] $x \\to \\infty$일 때 $-2x^2+3 \\to -\\infty$ $\\therefore$ **발산**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "동아 교과서 17p 스스로 해결하기 2번 (3), (4)",
      "tag": "기본",
      "question": "다음 극한의 수렴, 발산을 조사하고, 수렴하면 그 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to -\\infty} \\left(1+\\frac{2}{x}\\right)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -\\infty} \\sqrt{3-4x}"
        }
      ],
      "tip": "1단계: $x \\to -\\infty$ 대입 시 $\\frac{2}{-\\infty} \\to 0$이며, 근호 안의 $-4x \\to +\\infty$가 되므로 양의 무한대로 발산합니다.",
      "answer": "(1) 수렴, 1, (2) 발산",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 대입] $x \\to -\\infty$일 때 $\\frac{2}{x} \\to 0$이므로 $1+0=1$ $\\therefore$ **수렴, 1**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 대입] $x \\to -\\infty$일 때 $3-4x \\to \\infty$이므로 $\\sqrt{\\infty} \\to \\infty$ $\\therefore$ **발산**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "동아 교과서 17p 스스로 해결하기 3번 (1)~(3)",
      "tag": "핵심유형",
      "question": "함수 $y=f(x)$의 그래프가 주어질 때 다음 극한값을 구하시오. (단, 그래프에서 $x \\to 1+$일 때 $y \\to 2$, $x \\to 1-$일 때 $y \\to 2$이다.)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1+} f(x)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 1-} f(x)"
        }
      ],
      "tip": "우극한과 좌극한이 일치하면 극한값이 존재합니다. $x=1$의 오른쪽과 왼쪽 그래프 목표값을 확인하세요.",
      "answer": "(1) 2, (2) 2, (3) 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 우극한] $x \\to 1+$일 때 그래프를 따라가면 함숫값은 $2$에 한없이 가까워집니다. $\\therefore$ **2**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 좌극한] $x \\to 1-$일 때 그래프를 따라가면 함숫값은 $2$에 한없이 가까워집니다. $\\therefore$ **2**"
          },
          {
            "label": "(3)",
            "content": "[결론] 우극한과 좌극한이 모두 $2$로 같으므로 $\\lim_{x \\to 1} f(x) = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "동아 교과서 17p 스스로 해결하기 3번 (4)~(6)",
      "tag": "핵심유형",
      "question": "함수 $y=f(x)$의 그래프가 주어질 때 다음 극한값을 구하시오. (단, 그래프에서 $x \\to 4+$일 때 $y \\to 3$, $x \\to 4-$일 때 $y \\to 5$이다.)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 4+} f(x)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 4-} f(x)"
        }
      ],
      "tip": "우극한과 좌극한이 다르면 극한값은 '존재하지 않는다'로 판정합니다.",
      "answer": "(1) 3, (2) 5, (3) 존재하지 않는다",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 우극한] $x \\to 4+$일 때 그래프를 따라가면 $y \\to 3$ $\\therefore$ **3**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 좌극한] $x \\to 4-$일 때 그래프를 따라가면 $y \\to 5$ $\\therefore$ **5**"
          },
          {
            "label": "(3)",
            "content": "[결론] 우극한($3$)과 좌극한($5$)이 다르므로 $\\lim_{x \\to 4} f(x)$는 **존재하지 않는다.**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "동아 교과서 17p 스스로 해결하기 4번",
      "tag": "핵심유형",
      "question": "$x=2$에서 다음 각 함수의 극한값이 존재하는지 조사하고, 존재하면 그 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = \\frac{|x-2|}{x-2}"
        },
        {
          "no": 2,
          "formula": "f(x) = \\frac{x^2-4x+4}{|x-2|}"
        }
      ],
      "tip": "절댓값 함수는 반드시 우극한($x>2$)과 좌극한($x<2$)으로 구간을 나누어 식을 변경한 후 조사하세요.",
      "answer": "(1) 존재하지 않는다, (2) 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[우극한] $x>2$이면 $\\frac{x-2}{x-2}=1$ \\\\ [좌극한] $x<2$이면 $\\frac{-(x-2)}{x-2}=-1$ \\\\ 우극한과 좌극한이 다르므로 **존재하지 않는다.**"
          },
          {
            "label": "(2)",
            "content": "분자는 $(x-2)^2$ \\\\ [우극한] $\\lim_{x \\to 2+} \\frac{(x-2)^2}{x-2} = \\lim (x-2) = 0$ \\\\ [좌극한] $\\lim_{x \\to 2-} \\frac{(x-2)^2}{-(x-2)} = \\lim -(x-2) = 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "동아 교과서 17p 스스로 해결하기 5번",
      "tag": "심화",
      "question": "함수 $f(x)=\\begin{cases} x+k & (x \\ge -1) \\\\ x^2-2x+4 & (x < -1) \\end{cases}$에 대하여 $\\lim_{x \\to -1} f(x)$의 값이 존재하도록 하는 상수 $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "극한값이 존재하려면 $x \\to -1+$ 우극한과 $x \\to -1-$ 좌극한에 각각 대입한 두 결과가 일치해야 합니다.",
      "answer": "8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 우극한 대입]",
            "content": "$\\lim_{x \\to -1+} f(x) = \\lim_{x \\to -1+} (x+k) = -1+k$"
          },
          {
            "label": "[2단계: 좌극한 대입]",
            "content": "$\\lim_{x \\to -1-} f(x) = \\lim_{x \\to -1-} (x^2-2x+4) = (-1)^2-2(-1)+4 = 7$"
          },
          {
            "label": "[3단계: 식 완성 및 정답]",
            "content": "극한값이 존재하려면 $-1+k = 7$이어야 하므로 $k = 8$ $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "동아 교과서 25p 스스로 해결하기 1번 (1), (2)",
      "tag": "기본",
      "question": "두 함수 $f(x), g(x)$에 대하여 $\\lim_{x \\to 2} f(x) = -2$, $\\lim_{x \\to 2} g(x) = 3$일 때, 다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 2} \\{2f(x)+3g(x)\\}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 2} f(x)g(x)"
        }
      ],
      "tip": "극한의 기본 성질: 각각 수렴할 때는 사칙연산 기호 안으로 극한을 각각 대입하여 계산합니다.",
      "answer": "(1) 5, (2) -6",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 극한 성질 대입] $2\\lim f(x) + 3\\lim g(x) = 2(-2) + 3(3) = -4 + 9 = 5$ $\\therefore$ **5**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 곱의 극한 대입] $\\lim f(x) \\times \\lim g(x) = (-2) \\times 3 = -6$ $\\therefore$ **-6**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "동아 교과서 25p 스스로 해결하기 1번 (3)",
      "tag": "기본",
      "question": "두 함수 $f(x), g(x)$에 대하여 $\\lim_{x \\to 2} f(x) = -2$, $\\lim_{x \\to 2} g(x) = 3$일 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to 2} \\frac{f(x)-1}{g(x)+1}",
      "subQuestions": [],
      "tip": "분수식의 극한 성질: 분모의 극한이 0이 아니므로 분자와 분모에 각각 극한값을 바로 대입하세요.",
      "answer": "$-\\frac{3}{4}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분모 0 판정]",
            "content": "분모 $\\lim_{x \\to 2} (g(x)+1) = 3+1 = 4 \\ne 0$이므로 바로 대입 가능합니다."
          },
          {
            "label": "[2단계: 대입 계산]",
            "content": "$\\frac{\\lim (f(x)-1)}{\\lim (g(x)+1)} = \\frac{-2-1}{3+1} = -\\frac{3}{4}$ $\\therefore$ **$-\\frac{3}{4}$**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "동아 교과서 25p 스스로 해결하기 2번 (1), (2)",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 3} \\frac{x^2-x-6}{x-3}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} \\frac{3x^2+2x-1}{x^2+1}"
        }
      ],
      "tip": "$\\frac{0}{0}$ 꼴은 분자를 인수분해하여 약분하고, $\\frac{\\infty}{\\infty}$ 꼴은 분모의 최고차항 $x^2$으로 나누어 계산합니다.",
      "answer": "(1) 5, (2) 3",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 대입] $x=3$ 대입 시 $\\frac{0}{0}$ 꼴 \\\\ [2단계: 인수분해] $\\frac{(x-3)(x+2)}{x-3} = x+2$ \\\\ [3단계: 재대입] $3+2 = 5$ $\\therefore$ **5**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 대입] $x \\to \\infty$ 대입 시 $\\frac{\\infty}{\\infty}$ 꼴 \\\\ [2단계: 최고차항 계수비] 분모·분자가 모두 2차식이므로 최고차항 계수비 $\\frac{3}{1} = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "동아 교과서 25p 스스로 해결하기 2번 (3), (4)",
      "tag": "핵심유형",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to -2} \\frac{\\sqrt{x+6}-2}{x+2}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} (\\sqrt{x^2-3x}-x)"
        }
      ],
      "tip": "근호가 포함된 $\\frac{0}{0}$ 및 $\\infty-\\infty$ 부정형은 켤레식을 곱하여 분자 유리화를 거친 후 대입합니다.",
      "answer": "(1) $\\frac{1}{4}$, (2) $-\\frac{3}{2}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[유리화] 분자에 $(\\sqrt{x+6}+2)$ 곱: $\\frac{(x+6)-4}{(x+2)(\\sqrt{x+6}+2)} = \\frac{1}{\\sqrt{x+6}+2}$ \\\\ [재대입] $x=-2 \\implies \\frac{1}{\\sqrt{4}+2} = \\frac{1}{4}$ $\\therefore$ **$\\frac{1}{4}$**"
          },
          {
            "label": "(2)",
            "content": "[유리화] $\\frac{(x^2-3x)-x^2}{\\sqrt{x^2-3x}+x} = \\frac{-3x}{\\sqrt{x^2-3x}+x}$ \\\\ [최고차항 나누기] 분모·분자를 $x$로 나누면 $\\frac{-3}{\\sqrt{1-\\frac{3}{x}}+1} \\to \\frac{-3}{1+1} = -\\frac{3}{2}$ $\\therefore$ **$-\\frac{3}{2}$**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "동아 교과서 25p 스스로 해결하기 3번",
      "tag": "핵심유형",
      "question": "다음 등식이 성립할 때, 두 상수 $a, b$의 값을 각각 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 2} \\frac{x^2+ax-b}{x-2} = 4"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -1} \\frac{\\sqrt{x+a}-2}{x+1} = b"
        }
      ],
      "tip": "미정계수 결정: 분모 $\\to 0$인데 유한한 극한값으로 수렴하므로 (분자) $\\to 0$이어야 합니다. 대입 후 인수분해 또는 유리화하세요.",
      "answer": "(1) $a=0, b=4$, (2) $a=5, b=\\frac{1}{4}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[분자=0] $x=2$ 대입: $4+2a-b=0 \\implies b=2a+4$ \\\\ [약분] $\\frac{x^2+ax-(2a+4)}{x-2} = \\frac{(x-2)(x+a+2)}{x-2} = x+a+2$ \\\\ [재대입] $4+a=4 \\implies a=0, b=4$ $\\therefore$ **$a=0, b=4$**"
          },
          {
            "label": "(2)",
            "content": "[분자=0] $x=-1$ 대입: $\\sqrt{-1+a}-2=0 \\implies a=5$ \\\\ [유리화] $\\frac{\\sqrt{x+5}-2}{x+1} = \\frac{x+1}{(x+1)(\\sqrt{x+5}+2)} = \\frac{1}{\\sqrt{x+5}+2}$ \\\\ [재대입] $x=-1 \\implies b = \\frac{1}{\\sqrt{4}+2} = \\frac{1}{4}$ $\\therefore$ **$a=5, b=\\frac{1}{4}$**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "동아 교과서 25p 스스로 해결하기 4번",
      "tag": "기본",
      "question": "모든 실수 $x$에서 함수 $f(x)$가 다음 부등식을 만족시킬 때, $\\lim_{x \\to 3} f(x)$의 값을 구하시오.",
      "formula": "2x-2 \\le f(x) \\le x^2-4x+7",
      "subQuestions": [],
      "tip": "함수의 극한의 대소 관계 (샌드위치 정리): 양 끝 식에 $x=3$을 대입하여 극한값을 각각 구합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 양 끝 극한 대입]",
            "content": "$\\lim_{x \\to 3} (2x-2) = 2(3)-2 = 4$, $\\lim_{x \\to 3} (x^2-4x+7) = 9-12+7 = 4$"
          },
          {
            "label": "[2단계: 샌드위치 정리]",
            "content": "양 끝 식의 극한값이 모두 $4$이므로 샌드위치 정리에 의해 $\\lim_{x \\to 3} f(x) = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "동아 교과서 25p 스스로 해결하기 5번",
      "tag": "심화",
      "question": "다항함수 $f(x)$가 다음 두 조건을 만족시킬 때, $f(x)$를 구하시오.",
      "formula": "\\lim_{x \\to \\infty} \\frac{f(x)}{x^2-3x+4} = 2, \\quad \\lim_{x \\to 1} \\frac{f(x)}{x-1} = 5",
      "subQuestions": [],
      "tip": "첫 번째 무한대 극한으로 최고차항 $f(x)=2x^2+ax+b$를 결정하고, 두 번째 극한에서 분모 $\\to 0$이므로 분자 $f(1)=0$을 대입하세요.",
      "answer": "f(x) = 2x^2+x-3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 차수 및 최고차항 결정]",
            "content": "$x \\to \\infty$ 극한값이 $2$이므로 $f(x)$는 최고차항이 $2x^2$인 이차함수: $f(x) = 2x^2+ax+b$"
          },
          {
            "label": "[2단계: 인수 정리 및 대입]",
            "content": "$x \\to 1$일 때 분모 $\\to 0$이므로 $f(1) = 2+a+b = 0 \\implies b = -a-2$ \\\\ $f(x) = 2x^2+ax-(a+2) = (x-1)(2x+a+2)$"
          },
          {
            "label": "[3단계: 극한값 대입 및 식 결정]",
            "content": "$\\lim_{x \\to 1} \\frac{(x-1)(2x+a+2)}{x-1} = 4+a = 5 \\implies a=1, b=-3$ \\\\ $\\therefore$ **$f(x) = 2x^2+x-3$**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "동아 교과서 25p 스스로 해결하기 6번",
      "tag": "핵심유형",
      "question": "두 함수 $f(x), g(x)$에 대하여 $\\lim_{x \\to 3} \\{f(x)+2\\} = 3$, $\\lim_{x \\to 3} f(x)g(x) = 4$일 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to 3} \\frac{(x^2-2)g(x)}{f(x)}",
      "subQuestions": [],
      "tip": "극한의 성질을 이용하여 $\\lim_{x \\to 3} f(x)$와 $\\lim_{x \\to 3} g(x)$의 값을 각각 먼저 구한 뒤 대입하세요.",
      "answer": "28",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 각 함수 극한 도출]",
            "content": "$\\lim_{x \\to 3} f(x) = 3-2 = 1$ \\\\ $\\lim_{x \\to 3} g(x) = \\frac{\\lim f(x)g(x)}{\\lim f(x)} = \\frac{4}{1} = 4$"
          },
          {
            "label": "[2단계: 식 대입 계산]",
            "content": "$\\lim_{x \\to 3} (x^2-2) = 3^2-2 = 7$이므로 \\\\ $\\lim_{x \\to 3} \\frac{(x^2-2)g(x)}{f(x)} = \\frac{7 \\times 4}{1} = 28$ $\\therefore$ **28**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "동아 교과서 30p 스스로 해결하기 1번",
      "tag": "기본",
      "question": "함수 $y=f(x)$의 그래프가 주어질 때, $x=2$에서 불연속인 이유를 각각 말하시오. (단, (1)은 $x=2$에서 구멍이 뚫려있고, (2)는 좌극한이 1, 우극한이 2이다.)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "(1) $x=2$에서 함숫값 정의 여부"
        },
        {
          "no": 2,
          "formula": "(2) $x=2$에서 극한값 존재 여부"
        }
      ],
      "tip": "연속의 3조건: (1) 함숫값 정의, (2) 극한값 존재, (3) 함숫값=극한값 일치 여부를 점검하세요.",
      "answer": "(1) f(2)가 정의되어 있지 않다, (2) 극한값이 존재하지 않는다",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "함수 $f(x)$는 $x=2$에서 **함숫값 $f(2)$가 정의되어 있지 않으므로** 불연속입니다."
          },
          {
            "label": "(2)",
            "content": "$\\lim_{x \\to 2-} f(x)=1 \\ne \\lim_{x \\to 2+} f(x)=2$이므로 **$x=2$에서 극한값이 존재하지 않아** 불연속입니다."
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "동아 교과서 30p 스스로 해결하기 2번",
      "tag": "기본",
      "question": "다음 함수가 $x=1$에서 연속인지 불연속인지 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = \\begin{cases} x^2-2x+2 & (x \\ge 1) \\\\ -x+4 & (x < 1) \\end{cases}"
        },
        {
          "no": 2,
          "formula": "f(x) = \\begin{cases} \\frac{x^2+4x-5}{x-1} & (x \\ne 1) \\\\ 6 & (x = 1) \\end{cases}"
        }
      ],
      "tip": "$x=1$을 대입하여 함숫값, 우극한, 좌극한의 삼자 일치 여부를 확인하세요.",
      "answer": "(1) 불연속, (2) 연속",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$f(1)=1$, $\\lim_{x \\to 1+} f(x)=1$, $\\lim_{x \\to 1-} f(x)=-1+4=3$ \\\\ 좌우극한이 다르므로 **불연속**입니다."
          },
          {
            "label": "(2)",
            "content": "$\\lim_{x \\to 1} \\frac{(x-1)(x+5)}{x-1} = \\lim (x+5) = 6 = f(1)$ \\\\ 극한값과 함숫값이 같으므로 **연속**입니다."
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "동아 교과서 30p 스스로 해결하기 3번",
      "tag": "기본",
      "question": "다음 함수가 연속인 구간을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = -2x^2+1"
        },
        {
          "no": 2,
          "formula": "f(x) = \\frac{x+1}{2x-4}"
        }
      ],
      "tip": "다항함수는 모든 실수 $(-\\infty, \\infty)$에서 연속이고, 유리함수는 (분모) $\\ne 0$인 구간에서 연속입니다.",
      "answer": "(1) $(-\\infty, \\infty)$, (2) $(-\\infty, 2)$, $(2, \\infty)$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "다항함수는 모든 실수에서 연속이므로 구간은 **$(-\\infty, \\infty)$**입니다."
          },
          {
            "label": "(2)",
            "content": "분모 $2x-4=0 \\implies x=2$에서 정의되지 않으므로 구간은 **$(-\\infty, 2), (2, \\infty)$**입니다."
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "동아 교과서 30p 스스로 해결하기 4번",
      "tag": "핵심유형",
      "question": "함수 $f(x)$가 $x=-1$에서 연속이 되도록 하는 두 상수 $a, b$의 값을 각각 구하시오.",
      "formula": "f(x) = \\begin{cases} \\frac{a\\sqrt{x+2}+b}{x+1} & (x \\ne -1) \\\\ 2 & (x = -1) \\end{cases}",
      "subQuestions": [],
      "tip": "연속 조건: $\\lim_{x \\to -1} f(x) = f(-1) = 2$입니다. 분모 $\\to 0$이므로 분자 $\\to 0$을 대입하고 유리화하세요.",
      "answer": "a=4, b=-4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자=0 대입]",
            "content": "분모 $\\to 0$이므로 분자 $a\\sqrt{-1+2}+b = 0 \\implies a+b=0 \\implies b=-a$"
          },
          {
            "label": "[2단계: 유리화 및 약분]",
            "content": "$\\lim_{x \\to -1} \\frac{a(\\sqrt{x+2}-1)}{x+1} = \\lim_{x \\to -1} \\frac{a(x+1)}{(x+1)(\\sqrt{x+2}+1)} = \\frac{a}{\\sqrt{1}+1} = \\frac{a}{2}$"
          },
          {
            "label": "[3단계: 함숫값 일치 및 정답]",
            "content": "$\\frac{a}{2} = 2 \\implies a=4$, $b=-a=-4$ $\\therefore$ **$a=4, b=-4$**"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "동아 교과서 30p 스스로 해결하기 5번",
      "tag": "심화",
      "question": "함수 $f(x)$가 모든 실수 $x$에 대하여 $f(x+2)=f(x)$를 만족시키고, 구간 $[0, 2)$에서 다음과 같을 때, $f(x)$가 실수 전체의 집합에서 연속이 되도록 하는 두 상수 $a, b$의 값을 구하시오.",
      "formula": "f(x) = \\begin{cases} 2x+a & (0 \\le x < 1) \\\\ bx+1 & (1 \\le x < 2) \\end{cases}",
      "subQuestions": [],
      "tip": "주기함수의 연속: 경계점 $x=1$에서 좌우 연속이어야 하고, 주기 끝점 $f(0) = \\lim_{x \\to 2-} f(x)$가 일치해야 합니다.",
      "answer": "a=-3, b=-2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=1 연속 조건]",
            "content": "$\\lim_{x \\to 1-} (2x+a) = \\lim_{x \\to 1+} (bx+1) \\implies 2+a = b+1 \\implies b-a=1$ ... ①"
          },
          {
            "label": "[2단계: 주기 경계 연속 조건]",
            "content": "$f(0) = a$, $\\lim_{x \\to 2-} f(x) = 2b+1$이므로 $a = 2b+1 \\implies a-2b=1$ ... ②"
          },
          {
            "label": "[3단계: 연립 및 정답]",
            "content": "①과 ②를 연립하면 $-b = 2 \\implies b=-2$, $a=-3$ $\\therefore$ **$a=-3, b=-2$**"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "동아 교과서 30p 스스로 해결하기 6번",
      "tag": "심화",
      "question": "전기료 누진 제도에서 사용량 $x\\text{ kWh}$에 대한 요금을 $f(x)$원이라 할 때, 함수 $f(x)$가 구간의 경계인 $x=a$에서 불연속이 되는 $a$의 값을 모두 찾고 이유를 설명하시오. (단, 기본요금은 200 이하 900원, 200 초과 400 이하 1600원, 400 초과 7300원)",
      "formula": "",
      "subQuestions": [],
      "tip": "기본 요금이 바뀌는 구간의 경계 $x=200, 400$에서 좌극한과 우극한을 각각 계산하여 일치 여부를 확인하세요.",
      "answer": "a = 200, 400 (x=200, 400에서 극한값이 존재하지 않음)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=200 좌우극한 대입]",
            "content": "$\\lim_{x \\to 200-} f(x) = 900+100(200) = 20900$ \\\\ $\\lim_{x \\to 200+} f(x) = 1600+200(100)+200(0) = 21600$ \\\\ 두 값이 다르므로 $x=200$에서 불연속입니다."
          },
          {
            "label": "[2단계: x=400 좌우극한 대입]",
            "content": "$\\lim_{x \\to 400-} f(x) = 61600 \\ne \\lim_{x \\to 400+} f(x) = 67300$ \\\\ 두 값이 다르므로 $x=400$에서 불연속입니다."
          },
          {
            "label": "[3단계: 정답 결론]",
            "content": "불연속이 되는 $a$의 값은 **$200, 400$**입니다."
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "동아 교과서 37p 스스로 해결하기 1번",
      "tag": "기본",
      "question": "다음 함수의 연속성을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = x^3-2x+1"
        },
        {
          "no": 2,
          "formula": "f(x) = \\frac{2}{x+1}"
        }
      ],
      "tip": "다항함수는 모든 실수 구간에서 연속이며, 분수함수는 분모가 0이 되는 점을 제외한 모든 실수에서 연속입니다.",
      "answer": "(1) 모든 실수 $x$에서 연속, (2) $x \\ne -1$인 모든 실수 $x$에서 연속",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "다항함수이므로 **모든 실수 $x$에서 연속**입니다."
          },
          {
            "label": "(2)",
            "content": "분모가 $0$이 되는 $x=-1$을 제외한 **$x \\ne -1$인 모든 실수 $x$에서 연속**입니다."
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "동아 교과서 37p 스스로 해결하기 2번 (1), (2)",
      "tag": "기본",
      "question": "함수 $f(x)=x^2-2x+3$이 주어진 구간에서 최댓값 또는 최솟값을 가지면, 그 값을 각각 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "[1, 2]"
        },
        {
          "no": 2,
          "formula": "(1, 2)"
        }
      ],
      "tip": "최대·최소 정리: 닫힌구간에서 연속이면 반드시 최댓값과 최솟값을 갖습니다. 열린구간에서는 양 끝값이 포함되지 않으면 존재하지 않을 수 있습니다.",
      "answer": "(1) 최댓값: 3, 최솟값: 2, (2) 최댓값: 없다, 최솟값: 없다",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$f(x) = (x-1)^2+2$ \\\\ 닫힌구간 $[1, 2]$에서 $x=1$일 때 **최솟값 $2$**, $x=2$일 때 **최댓값 $3$**을 갖습니다."
          },
          {
            "label": "(2)",
            "content": "열린구간 $(1, 2)$에서는 $x=1, 2$가 포함되지 않으므로 **최댓값: 없다, 최솟값: 없다**."
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "동아 교과서 37p 스스로 해결하기 2번 (3), (4)",
      "tag": "기본",
      "question": "함수 $f(x)=x^2-2x+3$이 주어진 구간에서 최댓값 또는 최솟값을 가지면, 그 값을 각각 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "(1, 2]"
        },
        {
          "no": 2,
          "formula": "[1, 2)"
        }
      ],
      "tip": "구간의 경계 포함 여부를 확인하여 꼭짓점 또는 경계 대입값이 포함되는지 판정하세요.",
      "answer": "(1) 최댓값: 3, 최솟값: 없다, (2) 최댓값: 없다, 최솟값: 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "반닫힌구간 $(1, 2]$에서 $x=2$는 포함되어 **최댓값 $3$**을 갖고, 최솟값 지점 $x=1$은 미포함이므로 **최솟값: 없다**."
          },
          {
            "label": "(2)",
            "content": "반닫힌구간 $[1, 2)$에서 $x=1$은 포함되어 **최솟값 $2$**를 갖고, 최댓값 지점 $x=2$는 미포함이므로 **최댓값: 없다**."
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "동아 교과서 37p 스스로 해결하기 3번",
      "tag": "핵심유형",
      "question": "방정식 $x^3+4x+1=0$이 열린구간 $(-1, 0)$에서 적어도 하나의 실근을 가짐을 보이시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리: 구간 양 끝점의 함숫값 부호가 반대($f(a)f(b) < 0$)임을 대입하여 증명합니다.",
      "answer": "풀이 참조 (f(-1) < 0이고 f(0) > 0이므로 사잇값 정리에 의해 성립)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성 명시]",
            "content": "$f(x) = x^3+4x+1$이라 하면 다항함수이므로 닫힌구간 $[-1, 0]$에서 연속입니다."
          },
          {
            "label": "[2단계: 양 끝값 부호 대입]",
            "content": "$f(-1) = (-1)^3+4(-1)+1 = -4 < 0$, $f(0) = 1 > 0$"
          },
          {
            "label": "[3단계: 사잇값 정리 적용]",
            "content": "$f(-1)f(0) < 0$이므로 사잇값 정리에 의해 $f(c)=0$인 $c$가 열린구간 $(-1, 0)$에 적어도 하나 존재합니다."
          }
        ]
      }
    },
    {
      "id": 27,
      "source": "동아 교과서 37p 스스로 해결하기 4번",
      "tag": "핵심유형",
      "question": "두 함수 $f(x)=x^2-1$, $g(x)=x^2-ax+3$에 대하여 함수 $\\frac{f(x)}{g(x)}$가 모든 실수 $x$에서 연속이 되도록 하는 정수 $a$의 개수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "분수함수가 모든 실수에서 연속이려면 분모 $g(x)=0$이 실근을 갖지 않아야 하므로 판별식 $D < 0$을 이용하세요.",
      "answer": "7",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건과 판별식]",
            "content": "분모 $g(x)=x^2-ax+3 \\ne 0$이어야 하므로 이차방정식의 판별식 $D = a^2-12 < 0$"
          },
          {
            "label": "[2단계: 부등식 풀이]",
            "content": "$-\\sqrt{12} < a < \\sqrt{12} \\implies -3.46... < a < 3.46...$"
          },
          {
            "label": "[3단계: 정수 개수 카운트]",
            "content": "만족하는 정수 $a$는 $-3, -2, -1, 0, 1, 2, 3$의 **7개** $\\therefore$ **7**"
          }
        ]
      }
    },
    {
      "id": 28,
      "source": "동아 교과서 37p 스스로 해결하기 5번",
      "tag": "심화",
      "question": "세 실수 $a, b, c$ ($a < b < c$)에 대하여 이차방정식 $(x-a)(x-b) + (x-b)(x-c) + (x-c)(x-a) = 0$이 서로 다른 두 실근을 가짐을 보이시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "좌변을 $f(x)$라 두고 $x=a, b, c$를 각각 대입하여 함숫값 부호 $f(a)>0, f(b)<0, f(c)>0$를 사잇값 정리와 연결하세요.",
      "answer": "풀이 참조 (f(a)>0, f(b)<0, f(c)>0이므로 사잇값 정리에 의해 (a,b), (b,c)에서 각각 실근 존재)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 각 점 함숫값 대입]",
            "content": "$f(a) = (a-b)(a-c) > 0$ (음수$\\times$음수) \\\\ $f(b) = (b-c)(b-a) < 0$ (음수$\\times$양수) \\\\ $f(c) = (c-a)(c-b) > 0$ (양수$\\times$양수)"
          },
          {
            "label": "[2단계: 사잇값 정리 적용]",
            "content": "$f(a)f(b)<0$이므로 열린구간 $(a, b)$에서 적어도 하나의 실근을 갖고, $f(b)f(c)<0$이므로 열린구간 $(b, c)$에서 적어도 하나의 실근을 갖습니다."
          },
          {
            "label": "[3단계: 결론]",
            "content": "이차방정식은 최대 2개의 실근을 가지므로, 서로 다른 두 실근을 가집니다."
          }
        ]
      }
    },
    {
      "id": 29,
      "source": "동아 교과서 37p 스스로 해결하기 6번",
      "tag": "심화",
      "question": "어느 날 연수네 가족이 오전 9시에 서울역에서 출발하여 440 km 떨어진 부산역에 오전 11시 40분에 도착하였고, 다음 날 같은 시각(오전 9시)에 부산역에서 상행선 고속열차를 타고 서울역에 오전 11시 40분에 돌아왔다. 전날과 같은 시각에 같은 지점을 지나는 순간이 있었음을 사잇값 정리를 이용하여 설명하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "닫힌구간에서 두 함수가 연속이므로 $h(t) = g(t)-f(t)$로 두고 양 끝점 값을 대입하여 부호가 반대임을 확인하세요.",
      "answer": "풀이 참조 (h(0) > 0, h(8/3) < 0이므로 사잇값 정리에 의해 성립)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 정의 및 연속성]",
            "content": "서울역으로부터의 거리를 첫째 날 $f(t)$, 둘째 날 $g(t)$라 하고 $h(t)=g(t)-f(t)$라 하면 닫힌구간 $[0, \\frac{8}{3}]$에서 연속입니다."
          },
          {
            "label": "[2단계: 양 끝값 부호 판정]",
            "content": "$h(0) = g(0)-f(0) = 440-0 = 440 > 0$ \\\\ $h(\\frac{8}{3}) = g(\\frac{8}{3})-f(\\frac{8}{3}) = 0-440 = -440 < 0$"
          },
          {
            "label": "[3단계: 사잇값 정리 결론]",
            "content": "$h(0)h(\\frac{8}{3}) < 0$이므로 사잇값 정리에 의해 $h(c)=0$, 즉 $f(c)=g(c)$인 $c$가 열린구간 $(0, \\frac{8}{3})$에 적어도 하나 존재합니다."
          }
        ]
      }
    },
    {
      "id": 30,
      "source": "동아 교과서 40p 단원 마무리 01번",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} \\sqrt{a-x} & (x \\le 1) \\\\ x^2+2x & (x > 1) \\end{cases}$에 대하여 $\\lim_{x \\to 1} f(x)$의 값이 존재하도록 하는 상수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "극한값이 존재하려면 $x \\to 1+$ 우극한과 $x \\to 1-$ 좌극한에 각각 대입하여 같아져야 합니다.",
      "answer": "10",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 우극한 대입]",
            "content": "$\\lim_{x \\to 1+} f(x) = \\lim_{x \\to 1+} (x^2+2x) = 1^2+2(1) = 3$"
          },
          {
            "label": "[2단계: 좌극한 대입]",
            "content": "$\\lim_{x \\to 1-} f(x) = \\lim_{x \\to 1-} \\sqrt{a-x} = \\sqrt{a-1}$"
          },
          {
            "label": "[3단계: 식 완성 및 정답]",
            "content": "$\\sqrt{a-1} = 3 \\implies a-1 = 9 \\implies a = 10$ $\\therefore$ **10**"
          }
        ]
      }
    },
    {
      "id": 31,
      "source": "동아 교과서 40p 단원 마무리 02번",
      "tag": "기본",
      "question": "함수 $y=f(x)$의 그래프가 주어질 때 다음 식의 값을 구하시오. (단, 그래프에서 $x \\to 0+$일 때 $y \\to 1$, $x \\to 1-$일 때 $y \\to 2$이고, $f(1)=0$이다.)",
      "formula": "\\lim_{x \\to 0+} f(x) + \\lim_{x \\to 1-} f(x) + f(1)",
      "subQuestions": [],
      "tip": "우극한, 좌극한, 함숫값을 그래프에서 각각 정확히 판독하여 대입하세요.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 각 항 판독 대입]",
            "content": "$\\lim_{x \\to 0+} f(x) = 1$, $\\lim_{x \\to 1-} f(x) = 2$, $f(1) = 0$"
          },
          {
            "label": "[2단계: 합산 및 정답]",
            "content": "$1 + 2 + 0 = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 32,
      "source": "동아 교과서 40p 단원 마무리 03번",
      "tag": "핵심유형",
      "question": "보기에서 옳은 것만을 있는 대로 고르시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\text{ㄱ. } \\lim_{x \\to 1} (2x^2-x+3) = 4"
        },
        {
          "no": 2,
          "formula": "\\text{ㄴ. } \\lim_{x \\to 3} \\frac{\\sqrt{x+6}-2}{x-3} = \\frac{1}{5}"
        }
      ],
      "tip": "다항함수는 선 대입하고, 분수식은 분모가 0이 되는지 확인하세요. 분자가 0이 아니면 수렴하지 않습니다.",
      "answer": "ㄱ, ㄹ",
      "solution": {
        "steps": [
          {
            "label": "ㄱ, ㄴ 판정",
            "content": "ㄱ. $x=1$ 대입 시 $2-1+3=4$ (참) \\\\ ㄴ. $x=3$ 대입 시 분모는 $0$이지만 분자는 $\\sqrt{9}-2=1 \\ne 0$이므로 발산 (거짓)"
          },
          {
            "label": "ㄷ, ㄹ 판정",
            "content": "ㄷ. $x \\to \\infty$일 때 최고차항 계수비는 $\\frac{-3}{1} = -3 \\ne 2$ (거짓) \\\\ ㄹ. 유리화: $\\lim_{x \\to \\infty} \\frac{5x}{\\sqrt{x^2+5x}+x} = \\frac{5}{1+1} = \\frac{5}{2}$ (참) $\\therefore$ **ㄱ, ㄹ**"
          }
        ]
      }
    },
    {
      "id": 33,
      "source": "동아 교과서 40p 단원 마무리 04번",
      "tag": "기본",
      "question": "두 함수 $f(x), g(x)$가 $\\lim_{x \\to 1} \\{3f(x)+g(x)\\} = 5$, $\\lim_{x \\to 1} \\{f(x)-g(x)\\} = 3$을 만족시킬 때, $\\lim_{x \\to 1} f(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "두 극한 식을 더하여 $g(x)$를 소거하고 극한의 성질을 적용하세요.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 두 식 합산]",
            "content": "$\\lim_{x \\to 1} [\\{3f(x)+g(x)\\} + \\{f(x)-g(x)\\}] = 5+3 = 8$"
          },
          {
            "label": "[2단계: f(x) 극한 도출]",
            "content": "$\\lim_{x \\to 1} 4f(x) = 8 \\implies \\lim_{x \\to 1} f(x) = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 34,
      "source": "동아 교과서 40p 단원 마무리 05번",
      "tag": "핵심유형",
      "question": "$x>1$에서 함수 $f(x)$가 부등식 $\\frac{3x^2-2}{2x+1} \\le f(x) \\le \\frac{3x^2+5}{2x-1}$를 만족시킬 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to \\infty} \\frac{f(x)}{x}",
      "subQuestions": [],
      "tip": "부등식의 각 변을 $x$로 나누어 $\\frac{f(x)}{x}$의 범위를 구한 후, $x \\to \\infty$ 극한에 샌드위치 정리를 적용하세요.",
      "answer": "$\\frac{3}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x로 나누기]",
            "content": "$x>1$이므로 각 변을 $x$로 나누면 $\\frac{3x^2-2}{2x^2+x} \\le \\frac{f(x)}{x} \\le \\frac{3x^2+5}{2x^2-x}$"
          },
          {
            "label": "[2단계: 양 끝 극한 계산]",
            "content": "$\\lim_{x \\to \\infty} \\frac{3x^2-2}{2x^2+x} = \\frac{3}{2}$, $\\lim_{x \\to \\infty} \\frac{3x^2+5}{2x^2-x} = \\frac{3}{2}$"
          },
          {
            "label": "[3단계: 샌드위치 정리 적용]",
            "content": "양 끝의 극한값이 모두 $\\frac{3}{2}$이므로 $\\lim_{x \\to \\infty} \\frac{f(x)}{x} = \\frac{3}{2}$ $\\therefore$ **$\\frac{3}{2}$**"
          }
        ]
      }
    },
    {
      "id": 35,
      "source": "동아 교과서 40p 단원 마무리 06번",
      "tag": "핵심유형",
      "question": "다음 등식이 성립할 때, 상수 $a$의 값을 구하시오.",
      "formula": "\\lim_{x \\to \\infty} (\\sqrt{x^2+ax}-x) = 4",
      "subQuestions": [],
      "tip": "$\\infty-\\infty$ 무리식이므로 분자 유리화를 거친 후 최고차항 계수비를 비교하여 $a$를 구하세요.",
      "answer": "8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 유리화]",
            "content": "$\\lim_{x \\to \\infty} \\frac{(x^2+ax)-x^2}{\\sqrt{x^2+ax}+x} = \\lim_{x \\to \\infty} \\frac{ax}{\\sqrt{x^2+ax}+x}$"
          },
          {
            "label": "[2단계: 최고차항 나누기]",
            "content": "분모·분자를 $x$로 나누면 $\\frac{a}{\\sqrt{1+\\frac{a}{x}}+1} \\to \\frac{a}{1+1} = \\frac{a}{2}$"
          },
          {
            "label": "[3단계: 등식 일치 및 정답]",
            "content": "$\\frac{a}{2} = 4 \\implies a = 8$ $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 36,
      "source": "동아 교과서 40p 단원 마무리 07번",
      "tag": "심화",
      "question": "다항함수 $f(x)$가 다음 두 조건을 만족시킬 때, $f(1)$의 값을 구하시오.",
      "formula": "\\lim_{x \\to \\infty} \\frac{f(x)}{x^2+3x-2} = 2, \\quad \\lim_{x \\to -2} \\frac{x^2+x-2}{f(x)} = \\frac{3}{5}",
      "subQuestions": [],
      "tip": "조건 (가)로 $f(x)=2x^2+ax+b$를 세우고, 조건 (나)의 분자를 인수분해하여 약분 후 대입하세요.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 최고차항 결정]",
            "content": "(가)에 의해 $f(x)$는 최고차항이 $2x^2$인 이차함수: $f(x)=2x^2+ax+b$"
          },
          {
            "label": "[2단계: 인수 정리 대입]",
            "content": "(나)에서 $x \\to -2$일 때 분자 $x^2+x-2 = (-2)^2+(-2)-2 = 0$이므로 분모 $f(-2)=0$이어야 합니다. \\\\ $8-2a+b=0 \\implies b=2a-8$"
          },
          {
            "label": "[3단계: 식 변형 및 f(1) 계산]",
            "content": "$\\lim_{x \\to -2} \\frac{(x+2)(x-1)}{(x+2)(2x+a-4)} = \\frac{-3}{-8+a} = \\frac{3}{5} \\implies -8+a = -5 \\implies a=3, b=-2$ \\\\ $f(x)=2x^2+3x-2 \\implies f(1)=2+3-2=3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 37,
      "source": "동아 교과서 40p 단원 마무리 08번",
      "tag": "핵심유형",
      "question": "$\\lim_{x \\to 1} \\frac{f(x-1)}{x-1} = 4$일 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to 0} \\frac{3x-f(x)}{x^2+2f(x)}",
      "subQuestions": [],
      "tip": "$x-1=t$로 치환하여 $\\lim_{t \\to 0} \\frac{f(t)}{t}=4$를 얻고, 구하는 식의 분모·분자를 $x$로 나누세요.",
      "answer": "$-\\frac{1}{8}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 치환]",
            "content": "$x-1=t$로 치환하면 $x \\to 1$일 때 $t \\to 0$이므로 $\\lim_{t \\to 0} \\frac{f(t)}{t} = 4$"
          },
          {
            "label": "[2단계: x로 나누기]",
            "content": "$\\lim_{x \\to 0} \\frac{3-\\frac{f(x)}{x}}{x+2\\frac{f(x)}{x}}$"
          },
          {
            "label": "[3단계: 대입 및 정답]",
            "content": "$\\frac{3-4}{0+2(4)} = \\frac{-1}{8} = -\\frac{1}{8}$ $\\therefore$ **$-\\frac{1}{8}$**"
          }
        ]
      }
    },
    {
      "id": 38,
      "source": "동아 교과서 41p 단원 마무리 09번",
      "tag": "기본",
      "question": "$x=1$에서 연속인 함수를 보기에서 있는 대로 고르시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\text{ㄱ. } f(x) = \\frac{x-1}{|x-1|}"
        },
        {
          "no": 2,
          "formula": "\\text{ㄴ. } f(x) = \\sqrt{x+1}"
        }
      ],
      "tip": "$x=1$에서의 함숫값과 좌우 극한값을 각각 대입하여 연속성을 판정하세요.",
      "answer": "ㄴ, ㄹ",
      "solution": {
        "steps": [
          {
            "label": "ㄱ, ㄴ 판정",
            "content": "ㄱ. $x>1$이면 $1$, $x<1$이면 $-1$로 좌우극한이 다르므로 불연속 \\\\ ㄴ. $\\lim_{x \\to 1} \\sqrt{x+1} = \\sqrt{2} = f(1)$이므로 연속"
          },
          {
            "label": "ㄷ, ㄹ 판정",
            "content": "ㄷ. $\\lim_{x \\to 1} \\frac{x-1}{x(x-1)} = 1 \\ne f(1)=2$이므로 불연속 \\\\ ㄹ. $\\lim_{x \\to 1+} (x^2-1) = 0$, $\\lim_{x \\to 1-} (x-1) = 0$, $f(1)=0$으로 모두 일치하므로 연속 $\\therefore$ **ㄴ, ㄹ**"
          }
        ]
      }
    },
    {
      "id": 39,
      "source": "동아 교과서 41p 단원 마무리 10번",
      "tag": "핵심유형",
      "question": "두 함수 $y=f(x), y=g(x)$의 그래프가 주어질 때 옳은 것만을 고르시오. (단, $x \\to 0+$일 때 $f \\to 1, g \\to -1$, $x \\to 0-$일 때 $f \\to 1, g \\to -1$, $f(0)=2, g(0)=0$, $x=1$에서 $f$는 불연속, $g$는 연속이다.)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "ㄷ. $f(x)g(x)$는 $x=0$에서 연속이다."
        },
        {
          "no": 2,
          "formula": "ㄹ. $f(x)+g(x)$는 $x=1$에서 불연속이다."
        }
      ],
      "tip": "함수의 합과 곱의 연속성 판정: 각 지점에서 좌극한, 우극한, 함숫값을 각각 곱하거나 더하여 일치하는지 확인하세요.",
      "answer": "ㄷ, ㄹ",
      "solution": {
        "steps": [
          {
            "label": "ㄷ 판정",
            "content": "$x \\to 0$일 때 $\\lim f(x)g(x) = 1 \\times (-1) = -1$ ? 그래프 확인: $f(0)g(0) = 2 \\times 0 = 0$, 좌우극한 $\\lim f(x)g(x) = 0$이 되어 $x=0$에서 연속입니다. (참)"
          },
          {
            "label": "ㄹ 판정",
            "content": "$x=1$에서 $f(x)$의 좌우극한이 다르므로 $f(x)+g(x)$ 역시 $x=1$에서 불연속입니다. (참) $\\therefore$ **ㄷ, ㄹ**"
          }
        ]
      }
    },
    {
      "id": 40,
      "source": "동아 교과서 41p 단원 마무리 11번",
      "tag": "핵심유형",
      "question": "방정식 $x^3-3x^2-2x+a=0$이 열린구간 $(1, 2)$에서 적어도 한 개의 실근을 갖도록 하는 실수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "사잇값 정리에 의해 열린구간에서 $f(1)$과 $f(2)$의 부호가 달라야 하므로 $f(1)f(2) < 0$ 부등식을 푸세요.",
      "answer": "4 < a < 8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 정의 및 대입]",
            "content": "$f(x) = x^3-3x^2-2x+a$라 하면 \\\\ $f(1) = 1-3-2+a = a-4$ \\\\ $f(2) = 8-12-4+a = a-8$"
          },
          {
            "label": "[2단계: 사잇값 정리 부등식]",
            "content": "열린구간 $(1, 2)$에서 적어도 하나의 실근을 가지려면 $f(1)f(2) < 0$이어야 합니다."
          },
          {
            "label": "[3단계: 부등식 풀이 및 정답]",
            "content": "$(a-4)(a-8) < 0 \\implies 4 < a < 8$ $\\therefore$ **$4 < a < 8$**"
          }
        ]
      }
    },
    {
      "id": 41,
      "source": "동아 교과서 41p 단원 마무리 12번",
      "tag": "핵심유형",
      "question": "닫힌구간 $[-2, 3]$에서 함수 $f(x) = \\begin{cases} -x^2+4x+2 & (x \\ge 1) \\\\ 3x+2 & (x < 1) \\end{cases}$의 최댓값과 최솟값을 각각 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$x=1$에서 연속인지 먼저 확인하고, 각 구간별 이차함수 꼭짓점($x=2$) 및 양 끝점($x=-2, 3$)을 대입하세요.",
      "answer": "최댓값: 6, 최솟값: -4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=1 연속성 확인]",
            "content": "$\\lim_{x \\to 1-} (3x+2) = 5$, $f(1) = -1+4+2 = 5$이므로 $x=1$에서 연속입니다."
          },
          {
            "label": "[2단계: 각 점 함숫값 계산]",
            "content": "$x \\ge 1$: $f(x)=-(x-2)^2+6 \\implies x=2$일 때 $f(2)=6$, $x=3$일 때 $f(3)=5$ \\\\ $x < 1$: $x=-2$일 때 $f(-2)=3(-2)+2=-4$"
          },
          {
            "label": "[3단계: 최대·최소 결정]",
            "content": "가장 큰 값은 $6$, 가장 작은 값은 $-4$ $\\therefore$ **최댓값: 6, 최솟값: -4**"
          }
        ]
      }
    },
    {
      "id": 42,
      "source": "동아 교과서 41p 단원 마무리 13번",
      "tag": "심화",
      "question": "두 함수 $f(x), g(x)$가 $\\lim_{x \\to \\infty} f(x) = \\infty$, $\\lim_{x \\to \\infty} \\{f(x)-2g(x)\\} = 2$를 만족시킬 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to \\infty} \\frac{3f(x)-2g(x)}{f(x)+2g(x)}",
      "subQuestions": [],
      "tip": "조건식의 양변을 $f(x)$로 나누어 $\\lim_{x \\to \\infty} \\frac{g(x)}{f(x)} = \\frac{1}{2}$임을 도출한 뒤 구하는 식에 대입하세요.",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(x)로 나누기]",
            "content": "$\\lim_{x \\to \\infty} \\frac{f(x)-2g(x)}{f(x)} = \\lim_{x \\to \\infty} \\left(1-2\\frac{g(x)}{f(x)}\\right) = \\frac{2}{\\infty} = 0$"
          },
          {
            "label": "[2단계: g(x)/f(x) 극한 도출]",
            "content": "$1 - 2\\lim_{x \\to \\infty} \\frac{g(x)}{f(x)} = 0 \\implies \\lim_{x \\to \\infty} \\frac{g(x)}{f(x)} = \\frac{1}{2}$"
          },
          {
            "label": "[3단계: 식 변형 및 정답]",
            "content": "구하는 식의 분모·분자를 $f(x)$로 나누면 $\\frac{3-2(\\frac{1}{2})}{1+2(\\frac{1}{2})} = \\frac{3-1}{1+1} = \\frac{2}{2} = 1$ $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 43,
      "source": "동아 교과서 41p 단원 마무리 14번",
      "tag": "심화",
      "question": "함수 $f(x) = \\begin{cases} -ax^2+2x & (|x| \\ge 1) \\\\ bx-5 & (|x| < 1) \\end{cases}$가 모든 실수 $x$에서 연속이 되도록 하는 두 상수 $a, b$의 값을 각각 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "경계점 $x=1$과 $x=-1$에서 좌우 극한과 함숫값이 각각 일치하도록 연립방정식을 세워 대입하세요.",
      "answer": "a=5, b=2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: x=1 연속 조건]",
            "content": "$\\lim_{x \\to 1+} (-ax^2+2x) = \\lim_{x \\to 1-} (bx-5) \\implies -a+2 = b-5 \\implies a+b = 7$ ... ①"
          },
          {
            "label": "[2단계: x=-1 연속 조건]",
            "content": "$\\lim_{x \\to -1-} (-ax^2+2x) = \\lim_{x \\to -1+} (bx-5) \\implies -a-2 = -b-5 \\implies a-b = 3$ ... ②"
          },
          {
            "label": "[3단계: 연립 및 정답]",
            "content": "①과 ②를 더하면 $2a=10 \\implies a=5$, $b=2$ $\\therefore$ **$a=5, b=2$**"
          }
        ]
      }
    },
    {
      "id": 44,
      "source": "동아 교과서 41p 단원 마무리 15번",
      "tag": "심화",
      "question": "함수 $y=|x^2+4x|$의 그래프와 직선 $y=k$의 교점의 개수를 $f(k)$라고 할 때, 함수 $f(k)$가 불연속인 실수 $k$의 값을 모두 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "절댓값 이차함수의 그래프를 꺾어 올린 개형을 그린 뒤, 교점 개수 $f(k)$가 변하는 경계 $k$값을 찾으세요.",
      "answer": "0, 4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 절댓값 그래프 분석]",
            "content": "$y=x^2+4x=(x+2)^2-4$는 꼭짓점이 $(-2, -4)$이므로, $y=|x^2+4x|$는 $x$축 아래를 꺾어 올려 꼭짓점 $(-2, 4)$를 갖습니다."
          },
          {
            "label": "[2단계: 교점 개수 구간 분류]",
            "content": "$k<0$: $0$개 \\\\ $k=0$: $2$개 \\\\ $0<k<4$: $4$개 \\\\ $k=4$: $3$개 \\\\ $k>4$: $2$개"
          },
          {
            "label": "[3단계: 불연속점 결정]",
            "content": "교점의 개수 $f(k)$가 바뀌는 경계값은 **$0, 4$**입니다."
          }
        ]
      }
    },
    {
      "id": 45,
      "source": "동아 교과서 42p 단원 마무리 16번 (서·논술형)",
      "tag": "서술형",
      "question": "함수 $f(x) = \\frac{x-1}{x^2+ax+2}$이 모든 실수 $x$에서 연속이 되도록 하는 실수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "모든 실수에서 연속이려면 분모 이차식이 결코 0이 되지 않아야 하므로 판별식 $D < 0$을 이용하세요.",
      "answer": "$-2\\sqrt{2} < a < 2\\sqrt{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건 명시]",
            "content": "분모가 $0$이 되는 실수가 존재하지 않아야 하므로 이차방정식 $x^2+ax+2=0$이 허근을 가져야 합니다."
          },
          {
            "label": "[2단계: 판별식 부등식 풀이]",
            "content": "$D = a^2 - 4(1)(2) = a^2 - 8 < 0$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$(a+2\\sqrt{2})(a-2\\sqrt{2}) < 0 \\implies -2\\sqrt{2} < a < 2\\sqrt{2}$ $\\therefore$ **$-2\\sqrt{2} < a < 2\\sqrt{2}$**"
          }
        ]
      }
    },
    {
      "id": 46,
      "source": "동아 교과서 42p 단원 마무리 17번 (서·논술형)",
      "tag": "서술형",
      "question": "모든 실수 $x$에서 연속인 함수 $f(x)$가 $f(-1)=3$, $f(0)=2$, $f(2)=2$를 만족시킨다. 열린구간 $(-1, 2)$에서 방정식 $x^2f(x) = 2x+3$이 적어도 2개의 실근을 가짐을 보이시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$g(x)=x^2f(x)-(2x+3)$으로 두고 $x=-1, 0, 2$를 각각 대입하여 사잇값 정리로 연속성을 보이세요.",
      "answer": "풀이 참조 (g(-1)=2>0, g(0)=-3<0, g(2)=1>0으로 사잇값 정리에 의해 적어도 2개의 실근을 가짐)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 정의 및 연속성]",
            "content": "$g(x) = x^2f(x)-(2x+3)$이라 하면 $f(x)$가 연속이므로 $g(x)$도 모든 실수에서 연속입니다."
          },
          {
            "label": "[2단계: 함숫값 대입]",
            "content": "$g(-1) = (-1)^2(3)-(2(-1)+3) = 3-1 = 2 > 0$ \\\\ $g(0) = 0-(0+3) = -3 < 0$ \\\\ $g(2) = 2^2(2)-(4+3) = 8-7 = 1 > 0$"
          },
          {
            "label": "[3단계: 사잇값 정리 결론]",
            "content": "$g(-1)g(0) < 0$이므로 $(-1, 0)$에서 적어도 1개, $g(0)g(2) < 0$이므로 $(0, 2)$에서 적어도 1개 실근을 갖습니다. 따라서 열린구간 $(-1, 2)$에서 적어도 2개의 실근을 가집니다."
          }
        ]
      }
    },
    {
      "id": 47,
      "source": "동아 교과서 42p 단원 마무리 18번 (서·논술형)",
      "tag": "서술형",
      "question": "다항함수 $f(x)$가 다음 두 조건을 만족시킬 때, 함수 $f(x)$를 구하시오.",
      "formula": "\\lim_{x \\to \\infty} \\frac{f(x)-x^3}{x^2+2} = 3, \\quad \\lim_{x \\to 1} \\frac{f(x)}{x-1} = 4",
      "subQuestions": [],
      "tip": "조건 (가)에서 $f(x)-x^3=3x^2+ax+b$임을 찾아내고, 조건 (나)의 $f(1)=0$ 및 미분계수 또는 약분을 활용하세요.",
      "answer": "f(x) = x^3+3x^2-5x+1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 최고차항 식 설정]",
            "content": "(가)에 의해 $f(x)-x^3$은 최고차항이 $3x^2$인 다항식이므로 $f(x) = x^3+3x^2+ax+b$"
          },
          {
            "label": "[2단계: 인수 정리 대입]",
            "content": "(나)에서 분모 $\\to 0$이므로 분자 $f(1) = 1+3+a+b = 0 \\implies b = -a-4$ \\\\ $f(x) = x^3+3x^2+ax-(a+4) = (x-1)(x^2+4x+a+4)$"
          },
          {
            "label": "[3단계: 극한값 대입 및 식 결정]",
            "content": "$\\lim_{x \\to 1} \\frac{(x-1)(x^2+4x+a+4)}{x-1} = 1+4+a+4 = a+9 = 4 \\implies a=-5$ \\\\ $b = -(-5)-4 = 1$ \\\\ $\\therefore$ **$f(x) = x^3+3x^2-5x+1$**"
          }
        ]
      }
    },
    {
      "id": 48,
      "source": "동아 교과서 42p 단원 마무리 19번 (서·논술형)",
      "tag": "서술형",
      "question": "좌표평면 위의 점 $\\text{A}$가 점 $(10, 0)$에서 출발하여 $x$축을 따라 양의 방향으로 1초에 1만큼 움직이고 있다. 점 $\\text{A}$가 움직인 지 $t$초 후에 원점 $\\text{O}$와 점 $\\text{A}$를 지름의 양 끝 점으로 하는 원의 넓이를 $S(t)$라고 할 때, 다음 극한값을 구하시오.",
      "formula": "\\lim_{t \\to \\infty} \\frac{S(t)}{t^2}",
      "subQuestions": [],
      "tip": "$t$초 후의 점 $\\text{A}$의 좌표 $(10+t, 0)$를 구하고, 원의 넓이 공식 $S(t)=\\pi r^2$에 대입하여 극한을 계산하세요.",
      "answer": "$\\frac{\\pi}{4}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: t초 후 점 A 및 반지름]",
            "content": "$t$초 후 점 $\\text{A}$의 좌표는 $(10+t, 0)$이므로 지름의 길이는 $10+t$, 반지름은 $r = \\frac{10+t}{2}$입니다."
          },
          {
            "label": "[2단계: 원의 넓이 S(t) 식 작성]",
            "content": "$S(t) = \\pi \\left(\\frac{10+t}{2}\\right)^2 = \\frac{\\pi}{4}(t^2+20t+100)$"
          },
          {
            "label": "[3단계: 극한값 계산 및 정답]",
            "content": "$\\lim_{t \\to \\infty} \\frac{S(t)}{t^2} = \\lim_{t \\to \\infty} \\frac{\\frac{\\pi}{4}(t^2+20t+100)}{t^2} = \\frac{\\pi}{4}$ $\\therefore$ **$\\frac{\\pi}{4}$**"
          }
        ]
      }
    }
  ]
};
