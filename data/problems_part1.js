/*
 * Part 1: I. 함수의 극한과 연속 문제 데이터 (28문항)
 */
window.WORKSHEET_DATA = {
  "meta": {
    "title": "수학 II - I. 함수의 극한과 연속",
    "subtitle": "학교 프린트 핵심 유형 및 필기·쌍둥이 문제",
    "student": "오서영",
    "date": "2026. 09. 12 (토)",
    "cheer": "서영이의 완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "학교 프린트 1p 예제 1",
      "tag": "핵심유형",
      "question": "다음 극한값을 함수의 그래프를 이용하여 구하시오.",
      "formula": "\\lim_{x \\to 1} \\frac{x^2+x-2}{x-1}",
      "subQuestions": [],
      "tip": "1단계: 먼저 $x=1$ 대입하기! $\\frac{0}{0}$ 꼴이므로 분자를 인수분해하여 약분한 뒤 다시 대입하세요.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입]",
            "content": "$x=1$을 대입하면 분모 $\\to 0$, 분자 $\\to 0$인 $\\frac{0}{0}$ 부정형입니다."
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "분자를 인수분해하여 약분: $\\frac{(x-1)(x+2)}{x-1} = x+2$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x=1$을 다시 대입하면 $1+2 = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "학교 프린트 1p 스스로 해보기",
      "tag": "기본",
      "question": "다음 극한값을 함수의 그래프를 이용하여 구하시오.",
      "formula": "\\lim_{x \\to 2} \\frac{x^2+x-6}{x-2}",
      "subQuestions": [],
      "tip": "1단계: 먼저 $x=2$ 대입! $\\frac{0}{0}$ 꼴이므로 분자를 $(x-2)(x+3)$으로 인수분해 후 약분하여 다시 대입하세요.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입]",
            "content": "$x=2$를 대입하면 분모 $\\to 0$, 분자 $\\to 0$인 $\\frac{0}{0}$ 부정형입니다."
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "분자를 인수분해하여 약분: $\\frac{(x-2)(x+3)}{x-2} = x+3$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x=2$를 다시 대입하면 $2+3 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "학교 프린트 1p 문제 1",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 5} \\sqrt{x-1}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 0} \\frac{2x^2-3x}{x}"
        }
      ],
      "tip": "(1) $x=5$를 바로 대입하면 계산 가능! (2) $x=0$ 대입 시 $\\frac{0}{0}$ 꼴이므로 $x$로 인수분해 후 약분하여 대입하세요.",
      "answer": "(1) 2, (2) -3",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] $x=5$를 바로 대입: $\\sqrt{5-1} = \\sqrt{4} = 2$ $\\therefore$ **2**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x=0$ 대입 시 $\\frac{0}{0}$ 꼴 \\\\ [2단계: 식 변형] $x$로 약분: $\\frac{x(2x-3)}{x} = 2x-3$ \\\\ [3단계: 재대입] $x=0$ 대입 시 $0-3 = -3$ $\\therefore$ **-3**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "AI 숫자 변형 (03번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 3} \\sqrt{2x+3}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 0} \\frac{3x^2+5x}{x}"
        }
      ],
      "tip": "(1) $x=3$을 바로 대입하기! (2) $x=0$ 대입 시 $\\frac{0}{0}$ 꼴이므로 분자를 $x$로 인수분해하여 약분 후 대입하세요.",
      "answer": "(1) 3, (2) 5",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] $x=3$을 바로 대입: $\\sqrt{2(3)+3} = \\sqrt{9} = 3$ $\\therefore$ **3**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x=0$ 대입 시 $\\frac{0}{0}$ 꼴 \\\\ [2단계: 식 변형] $x$로 약분: $\\frac{x(3x+5)}{x} = 3x+5$ \\\\ [3단계: 재대입] $x=0$ 대입 시 $0+5 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "학교 프린트 2p 문제 2",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} \\left(\\frac{1}{x}+1\\right)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -\\infty} \\frac{1}{|x+1|}"
        }
      ],
      "tip": "먼저 대입하기! (2) 절댓값 함수는 $x < -1$ 구간 함수 $-(x+1)$로 변경한 후 $-\\infty$를 대입하면 $\\frac{1}{\\infty} \\to 0$으로 바로 계산됩니다.",
      "answer": "(1) 1, (2) 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] $x \\to \\infty$ 대입 시 $\\frac{1}{\\infty} \\to 0$이므로 $0+1 = 1$ $\\therefore$ **1**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 구간 분리] $x \\to -\\infty$이므로 $x < -1$, $|x+1| = -(x+1)$ \\\\ [2단계: 대입] $-(x+1) \\to \\infty$이므로 $\\frac{1}{\\infty} \\to 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "학교 프린트 2p 문제 3",
      "tag": "기본",
      "question": "다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\frac{1}{(x-1)^2}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 0} \\left(-\\frac{1}{|x|}\\right)"
        }
      ],
      "tip": "먼저 $x$값을 대입하기! (2) 절댓값 함수는 $x>0, x<0$ 구간별 함수로 변경하여 대입 후 분모가 $+0$으로 가는 발산 상태를 확인하세요.",
      "answer": "(1) \\infty (양의 무한대로 발산), (2) -\\infty (음의 무한대로 발산)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] $x \\to 1$일 때 $(x-1)^2 \\to +0$이므로 $\\frac{1}{+0} \\to \\infty$ $\\therefore$ **$\\infty$ (발산)**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 구간 분리] $x > 0$이면 $-\\frac{1}{x}$, $x < 0$이면 $-\\frac{1}{-x}$ \\\\ [2단계: 대입] $x \\to 0$일 때 $|x| \\to +0$이므로 $-\\frac{1}{+0} \\to -\\infty$ $\\therefore$ **$-\\infty$ (발산)**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "학교 프린트 3p 문제 4",
      "tag": "기본",
      "question": "다음 극한을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} (2-x)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -\\infty} \\sqrt{-x+1}"
        }
      ],
      "tip": "먼저 $x \\to \\pm\\infty$ 대입해보기! 식의 부호와 크기 변화를 관찰하여 발산 상태를 판단하세요.",
      "answer": "(1) -\\infty (발산), (2) \\infty (발산)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] $x \\to \\infty$ 대입: $2-\\infty \\to -\\infty$ $\\therefore$ **$-\\infty$ (발산)**"
          },
          {
            "label": "(2)",
            "content": "[선 대입] $x \\to -\\infty$ 대입: $-x+1 \\to \\infty$이므로 $\\sqrt{\\infty} \\to \\infty$ $\\therefore$ **$\\infty$ (발산)**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "선생님 필기 추가 (3p)",
      "tag": "필기",
      "question": "다음 극한을 조사하시오.",
      "formula": "\\lim_{x \\to \\infty} (2+x)",
      "subQuestions": [],
      "tip": "먼저 $x \\to \\infty$를 식에 바로 대입하기! $2+\\infty = \\infty$이므로 양의 무한대로 발산합니다.",
      "answer": "\\infty (발산)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입]",
            "content": "$x \\to \\infty$를 식에 바로 대입: $2+\\infty \\to \\infty$"
          },
          {
            "label": "[2단계: 극한 판정]",
            "content": "값이 한없이 커지므로 양의 무한대로 발산합니다. $\\therefore$ **$\\infty$ (발산)**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "학교 프린트 4p 문제 5",
      "tag": "핵심유형",
      "question": "함수 $f(x) = \\begin{cases} x+1 & (x \\ge 1) \\\\\\\\ x-1 & (x < 1) \\end{cases}$ 에 대하여 다음을 구하시오.",
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
      "tip": "우극한은 $x \\ge 1$인 식에 $x=1$ 대입, 좌극한은 $x < 1$인 식에 $x=1$을 바로 대입하세요.",
      "answer": "(1) 2, (2) 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] 우극한($x > 1$) 식 $f(x)=x+1$에 $x=1$ 대입: $1+1 = 2$ $\\therefore$ **2**"
          },
          {
            "label": "(2)",
            "content": "[선 대입] 좌극한($x < 1$) 식 $f(x)=x-1$에 $x=1$ 대입: $1-1 = 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "학교 프린트 4p 예제 2",
      "tag": "핵심유형",
      "question": "함수 $f(x) = \\begin{cases} x^2+1 & (x \\ge 0) \\\\\\\\ x & (x < 0) \\end{cases}$ 에 대하여 극한 $\\lim_{x \\to 0} f(x)$ 가 존재하는지 조사하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "우극한($x \\to 0+$)과 좌극한($x \\to 0-$)에 각각 $x=0$을 대입하여 두 값이 같은지 비교하세요.",
      "answer": "존재하지 않는다 (우극한 1 \\ne 좌극한 0)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 우극한 대입]",
            "content": "$x \\to 0+$일 때 $f(x)=x^2+1$이므로 $\\lim_{x \\to 0+} f(x) = 0^2+1 = 1$"
          },
          {
            "label": "[2단계: 좌극한 대입]",
            "content": "$x \\to 0-$일 때 $f(x)=x$이므로 $\\lim_{x \\to 0-} f(x) = 0$"
          },
          {
            "label": "[3단계: 극한 판정]",
            "content": "우극한($1$) $\\ne$ 좌극한($0$)이므로 극한값은 **존재하지 않는다.**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "학교 프린트 4p 문제 6",
      "tag": "심화",
      "question": "다음 극한이 존재하는지 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 0} \\frac{|x|}{x}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -1} \\frac{x^2+2x+1}{|x+1|}"
        }
      ],
      "tip": "절댓값 함수의 경우, 구간별로 주어진 함수로 변경해서 풀기! 우극한($x>a$)과 좌극한($x<a$)의 식을 각각 변경한 후 약분하고 $x$값을 대입하세요.",
      "answer": "(1) 존재하지 않음 (우극한 1 \\ne 좌극한 -1), (2) 0 (우극한 0 = 좌극한 0)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[구간 분리] 우극한($x>0$): $\\frac{x}{x}=1$, 좌극한($x<0$): $\\frac{-x}{x}=-1$ \\\\ 우극한($1$) $\\ne$ 좌극한($-1$)이므로 **존재하지 않음**"
          },
          {
            "label": "(2)",
            "content": "[식 변형 & 구간 분리] 분자: $(x+1)^2$ \\\\ 우극한($x>-1$): $\\frac{(x+1)^2}{x+1}=x+1 \\to 0$ \\\\ 좌극한($x<-1$): $\\frac{(x+1)^2}{-(x+1)}=-(x+1) \\to 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "선생님 필기 추가 (4p)",
      "tag": "필기",
      "question": "다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to 3} (x+1)",
      "subQuestions": [],
      "tip": "다항함수는 모든 실수에서 연속이므로 $x=3$을 바로 식에 대입하면 그 값이 곧 정답입니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입]",
            "content": "다항함수는 모든 실수에서 연속이므로 $x=3$을 바로 대입합니다."
          },
          {
            "label": "[2단계: 계산]",
            "content": "$3+1 = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "학교 프린트 5p 개념확인",
      "tag": "기본",
      "question": "극한의 기본 성질을 이용하여 다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 2} (3x^2-x)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to -1} (2x+1)(3x-1)"
        }
      ],
      "tip": "극한의 성질: 분모가 0이 아니므로 먼저 $x$값을 바로 대입하여 사칙연산을 수행합니다.",
      "answer": "(1) 10, (2) 4",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] 다항식이므로 $x=2$ 대입: $3(2^2)-2 = 12-2 = 10$ $\\therefore$ **10**"
          },
          {
            "label": "(2)",
            "content": "[선 대입] 극한의 성질로 각각 대입: $(2(-1)+1)(3(-1)-1) = (-1)(-4) = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "학교 프린트 5p 문제 1",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} (x^2-2x+4)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 2} (2x+3)(x-4)"
        }
      ],
      "tip": "다항함수의 극한은 분모가 0이 될 수 없으므로, 먼저 $x$값을 바로 대입하면 그 값이 정답!",
      "answer": "(1) 3, (2) -14",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] 다항식이므로 $x=1$ 대입: $1^2-2(1)+4 = 3$ $\\therefore$ **3**"
          },
          {
            "label": "(2)",
            "content": "[선 대입] $x=2$ 대입: $(2\\cdot 2+3)(2-4) = (7)(-2) = -14$ $\\therefore$ **-14**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "학교 프린트 5p 문제 1",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to -1} \\frac{4x-2}{2x+1}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} \\left(\\frac{1}{x}+\\frac{1}{x^2}\\right)"
        }
      ],
      "tip": "(1) $x=-1$ 대입 시 분모가 $-1 \\ne 0$이므로 바로 대입! (2) $x \\to \\infty$ 대입 시 $\\frac{1}{\\infty} \\to 0$을 적용하세요.",
      "answer": "(1) 6, (2) 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] $x=-1$ 대입 시 분모 $2(-1)+1 = -1 \\ne 0$이므로 바로 대입: $\\frac{4(-1)-2}{2(-1)+1} = \\frac{-6}{-1} = 6$ $\\therefore$ **6**"
          },
          {
            "label": "(2)",
            "content": "[선 대입] $x \\to \\infty$ 대입 시 $\\frac{1}{\\infty} \\to 0$, $\\frac{1}{\\infty^2} \\to 0$이므로 $0+0 = 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "학교 프린트 6p 예제 1",
      "tag": "핵심유형",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\frac{x^2+2x-3}{x-1}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 0} \\frac{\\sqrt{x+4}-2}{x}"
        }
      ],
      "tip": "대입 시 $\\frac{0}{0}$ 꼴! (1) 분자를 인수분해 후 약분, (2) 분자를 유리화 후 약분한 뒤 다시 대입하세요.",
      "answer": "(1) 4, (2) 1/4",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x=1$ 대입 시 $\\frac{0}{0}$ 꼴 \\\\ [2단계: 식 변형] 분자 인수분해: $\\frac{(x-1)(x+3)}{x-1} = x+3$ \\\\ [3단계: 재대입] $x=1$ 대입: $1+3 = 4$ $\\therefore$ **4**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x=0$ 대입 시 $\\frac{0}{0}$ 꼴 \\\\ [2단계: 식 변형] 분자 유리화: $\\frac{(\\sqrt{x+4}-2)(\\sqrt{x+4}+2)}{x(\\sqrt{x+4}+2)} = \\frac{x}{x(\\sqrt{x+4}+2)} = \\frac{1}{\\sqrt{x+4}+2}$ \\\\ [3단계: 재대입] $x=0$ 대입: $\\frac{1}{2+2} = \\frac{1}{4}$ $\\therefore$ **1/4**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "학교 프린트 6p 스스로 해보기",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to -3} \\frac{x^2-9}{x+3}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 3} \\frac{\\sqrt{x+6}-3}{x-3}"
        }
      ],
      "tip": "대입 시 $\\frac{0}{0}$ 꼴! (1) 합차공식으로 인수분해, (2) 분자 유리화 후 약분하여 다시 대입하세요.",
      "answer": "(1) -6, (2) 1/6",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x=-3$ 대입 시 $\\frac{0}{0}$ 꼴 \\\\ [2단계: 식 변형] 합차공식 인수분해: $\\frac{(x+3)(x-3)}{x+3} = x-3$ \\\\ [3단계: 재대입] $x=-3$ 대입: $-3-3 = -6$ $\\therefore$ **-6**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x=3$ 대입 시 $\\frac{0}{0}$ 꼴 \\\\ [2단계: 식 변형] 분자 유리화: $\\frac{(x+6)-9}{(x-3)(\\sqrt{x+6}+3)} = \\frac{x-3}{(x-3)(\\sqrt{x+6}+3)} = \\frac{1}{\\sqrt{x+6}+3}$ \\\\ [3단계: 재대입] $x=3$ 대입: $\\frac{1}{3+3} = \\frac{1}{6}$ $\\therefore$ **1/6**"
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "선생님 필기 추가 (6p)",
      "tag": "필기",
      "question": "다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to 2} \\frac{x^2+3x-10}{x-2}",
      "subQuestions": [],
      "tip": "먼저 $x=2$를 대입하면 $\\frac{0}{0}$ 꼴! 분자를 인수분해하여 $(x-2)$ 약분 후 다시 대입하세요.",
      "answer": "7",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입]",
            "content": "$x=2$를 대입하면 분모 $\\to 0$, 분자 $\\to 0$인 $\\frac{0}{0}$ 부정형입니다."
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "분자를 인수분해하여 약분: $\\frac{(x-2)(x+5)}{x-2} = x+5$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x=2$를 다시 대입하면 $2+5 = 7$ $\\therefore$ **7**"
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "학교 프린트 6p 문제 2",
      "tag": "핵심유형",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to 1} \\frac{x^3+x^2-x-1}{x-1}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 0} \\frac{x^2+4x}{\\sqrt{x+1}-1}"
        }
      ],
      "tip": "대입 시 $\\frac{0}{0}$ 꼴! (1) 분자를 인수분해하여 약분, (2) 분모를 유리화하여 약분한 뒤 다시 대입하세요.",
      "answer": "(1) 4, (2) 8",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x=1$ 대입 시 $\\frac{0}{0}$ 꼴 \\\\ [2단계: 식 변형] 분자 인수분해: $\\frac{x^2(x+1)-(x+1)}{x-1} = \\frac{(x^2-1)(x+1)}{x-1} = (x+1)^2$ \\\\ [3단계: 재대입] $x=1$ 대입: $(1+1)^2 = 4$ $\\therefore$ **4**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x=0$ 대입 시 $\\frac{0}{0}$ 꼴 \\\\ [2단계: 식 변형] 분모 유리화: $\\frac{x(x+4)(\\sqrt{x+1}+1)}{(x+1)-1} = (x+4)(\\sqrt{x+1}+1)$ \\\\ [3단계: 재대입] $x=0$ 대입: $(4)(1+1) = 8$ $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "학교 프린트 7p 예제 2",
      "tag": "핵심유형",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} \\frac{2x^2+4x+6}{3x^2-1}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} (\\sqrt{x^2+5x}-x)"
        }
      ],
      "tip": "(1) $\\frac{\\infty}{\\infty}$ 꼴: 분모 최고차항($x^2$)으로 나누기! (2) $\\infty-\\infty$ 꼴: 분자 유리화 후 대입하세요.",
      "answer": "(1) 2/3, (2) 5/2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $x \\to \\infty$ 대입 시 $\\frac{\\infty}{\\infty}$ 부정형 \\\\ [2단계: 식 변형] 분모 최고차항 $x^2$으로 나누기: $\\frac{2+\\frac{4}{x}+\\frac{6}{x^2}}{3-\\frac{1}{x^2}}$ \\\\ [3단계: 재대입] $\\frac{1}{\\infty} \\to 0$이므로 $\\frac{2+0+0}{3-0} = \\frac{2}{3}$ $\\therefore$ **2/3**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $x \\to \\infty$ 대입 시 $\\infty - \\infty$ 부정형 \\\\ [2단계: 식 변형] 분자 유리화: $\\frac{(x^2+5x)-x^2}{\\sqrt{x^2+5x}+x} = \\frac{5x}{\\sqrt{x^2+5x}+x}$ \\\\ [3단계: 재대입] 분모·분자를 $x$로 나누면 $\\frac{5}{\\sqrt{1+\\frac{5}{x}}+1} \\to \\frac{5}{1+1} = \\frac{5}{2}$ $\\therefore$ **5/2**"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "학교 프린트 7p 문제 3",
      "tag": "기본",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} \\frac{2x+3}{5x^2+4}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} \\frac{(2x-1)(3x+5)}{x^2+x+3}"
        }
      ],
      "tip": "$\\frac{\\infty}{\\infty}$ 꼴은 분모의 최고차항으로 분자·분모를 나누어 계산! 차수를 먼저 비교해 보세요.",
      "answer": "(1) 0, (2) 6",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $\\frac{\\infty}{\\infty}$ 부정형 \\\\ [2단계: 식 변형] 분모 최고차항 $x^2$으로 나누기: $\\frac{\\frac{2}{x}+\\frac{3}{x^2}}{5+\\frac{4}{x^2}}$ \\\\ [3단계: 재대입] $x \\to \\infty$ 대입 시 $\\frac{0+0}{5+0} = 0$ $\\therefore$ **0**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $\\frac{\\infty}{\\infty}$ 부정형 \\\\ [2단계: 식 변형] 전개: $\\frac{6x^2+7x-5}{x^2+x+3}$, 최고차항 $x^2$으로 나누기: $\\frac{6+\\frac{7}{x}-\\frac{5}{x^2}}{1+\\frac{1}{x}+\\frac{3}{x^2}}$ \\\\ [3단계: 재대입] $x \\to \\infty$ 대입 시 $\\frac{6+0-0}{1+0+0} = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "학교 프린트 7p 문제 3",
      "tag": "핵심유형",
      "question": "다음 극한값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to \\infty} (\\sqrt{4x^2+x}-2x)"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to \\infty} (\\sqrt{x^2+2x}-\\sqrt{x^2-2x})"
        }
      ],
      "tip": "대입 시 $\\infty-\\infty$ 꼴! 먼저 식을 유리화하여 $\\frac{\\infty}{\\infty}$ 꼴로 만든 뒤 최고차항으로 나누세요.",
      "answer": "(1) 1/4, (2) 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 선 대입] $\\infty - \\infty$ 부정형 \\\\ [2단계: 식 변형] 분자 유리화: $\\frac{(4x^2+x)-4x^2}{\\sqrt{4x^2+x}+2x} = \\frac{x}{\\sqrt{4x^2+x}+2x}$ \\\\ [3단계: 재대입] $x$로 나누면 $\\frac{1}{\\sqrt{4+\\frac{1}{x}}+2} \\to \\frac{1}{2+2} = \\frac{1}{4}$ $\\therefore$ **1/4**"
          },
          {
            "label": "(2)",
            "content": "[1단계: 선 대입] $\\infty - \\infty$ 부정형 \\\\ [2단계: 식 변형] 분자 유리화: $\\frac{(x^2+2x)-(x^2-2x)}{\\sqrt{x^2+2x}+\\sqrt{x^2-2x}} = \\frac{4x}{\\sqrt{x^2+2x}+\\sqrt{x^2-2x}}$ \\\\ [3단계: 재대입] $x$로 나누면 $\\frac{4}{\\sqrt{1+\\frac{2}{x}}+\\sqrt{1-\\frac{2}{x}}} \\to \\frac{4}{1+1} = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "선생님 필기 추가 (7p)",
      "tag": "필기",
      "question": "다음 극한값을 구하시오.",
      "formula": "\\lim_{x \\to \\infty} \\frac{4x+1}{2x+3}",
      "subQuestions": [],
      "tip": "$x \\to \\infty$ 대입 시 $\\frac{\\infty}{\\infty}$ 꼴! 분모의 최고차항인 $x$로 분자·분모를 각각 나누어 대입하세요.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입]",
            "content": "$x \\to \\infty$ 대입 시 분모 $\\to \\infty$, 분자 $\\to \\infty$인 $\\frac{\\infty}{\\infty}$ 부정형입니다."
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "분모의 최고차항 $x$로 분자·분모를 나누면 $\\frac{4+\\frac{1}{x}}{2+\\frac{3}{x}}$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x \\to \\infty$일 때 $\\frac{1}{x} \\to 0$이므로 $\\frac{4+0}{2+0} = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "학교 프린트 8p 예제 3",
      "tag": "핵심유형",
      "question": "다음 등식이 성립하도록 하는 두 상수 $a, b$의 값을 구하시오.",
      "formula": "\\lim_{x \\to 2} \\frac{x^2+ax+b}{x-2} = 6",
      "subQuestions": [],
      "tip": "극한의 성질: 분모 $\\to 0$이므로 분자 $x=2$ 대입 시 0! $b$를 소거하고 분자를 인수분해하여 약분하세요.",
      "answer": "a = 2, b = -8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입 & 분자 극한]",
            "content": "분모 $\\to 0$이고 극한값이 존재하므로 (분자) $\\to 0$: $2^2+2a+b=0 \\implies b=-2a-4$"
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "분자에 $b$를 대입하여 인수분해: $\\frac{(x-2)(x+a+2)}{x-2} = x+a+2$"
          },
          {
            "label": "[3단계: 재대입 & 계수 결정]",
            "content": "$\\lim_{x \\to 2} (x+a+2) = 4+a = 6 \\implies a=2$, $b=-2(2)-4 = -8$ $\\therefore$ **$a=2, b=-8$**"
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "선생님 필기 추가 (8p)",
      "tag": "필기",
      "question": "다음 등식이 성립하도록 하는 두 상수 $a, b$의 값을 구하시오.",
      "formula": "\\lim_{x \\to 2} \\frac{x^2+ax+b}{x-2} = 4",
      "subQuestions": [],
      "tip": "극한의 성질: 분모 $\\to 0$이므로 분자에 $x=2$ 대입 시 0! $b=-2a-4$를 대입해 인수분해 후 약분하세요.",
      "answer": "a = 0, b = -4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입 & 분자 극한]",
            "content": "분모 $\\to 0$이고 극한값이 존재하므로 (분자) $\\to 0$: $2^2+2a+b=0 \\implies b=-2a-4$"
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "분자에 $b$를 대입하여 인수분해: $\\frac{(x-2)(x+a+2)}{x-2} = x+a+2$"
          },
          {
            "label": "[3단계: 재대입 & 계수 결정]",
            "content": "$\\lim_{x \\to 2} (x+a+2) = 4+a = 4 \\implies a=0$, $b=-2(0)-4 = -4$ $\\therefore$ **$a=0, b=-4$**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "선생님 시험문제 필기 (10p)",
      "tag": "필기",
      "question": "함수 $f(x) = \\begin{cases} x+5 & (x \\ne 1) \\\\\\\\ k & (x = 1) \\end{cases}$ 가 $x=1$에서 연속이 되도록 하는 상수 $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$x=1$에서 연속이려면 극한값과 함숫값이 같아야 합니다. $\\lim_{x \\to 1}(x+5)$에 $x=1$을 바로 대입하세요.",
      "answer": "k = 6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건 확인]",
            "content": "$x=1$에서 연속이려면 $\\lim_{x \\to 1} f(x) = f(1)$이어야 합니다."
          },
          {
            "label": "[2단계: 극한값 계산(선 대입)]",
            "content": "$\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} (x+5)$: $x=1$ 대입 시 $1+5 = 6$"
          },
          {
            "label": "[3단계: 상수 결정]",
            "content": "함숫값 $f(1)=k$이므로 $k = 6$ $\\therefore$ **$k=6$**"
          }
        ]
      }
    },
    {
      "id": 27,
      "source": "학교 프린트 10p 예제 1",
      "tag": "기본",
      "question": "함수 $f(x) = \\begin{cases} x+4 & (x \\ne 1) \\\\\\\\ 2 & (x = 1) \\end{cases}$ 의 $x=1$에서의 연속성을 조사하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "연속 조건 확인: 1단계 $f(1)=2$, 2단계 $\\lim_{x \\to 1} (x+4)$에 $x=1$ 대입하여 두 값이 같은지 판별하세요.",
      "answer": "불연속 ($\\lim_{x \\to 1} f(x) = 5 \\ne f(1) = 2$)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함숫값 확인]",
            "content": "$x=1$에서의 함숫값: $f(1) = 2$"
          },
          {
            "label": "[2단계: 극한값 계산(선 대입)]",
            "content": "$\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} (x+4)$: $x=1$ 대입 시 $1+4 = 5$"
          },
          {
            "label": "[3단계: 연속성 판정]",
            "content": "$\\lim_{x \\to 1} f(x) = 5 \\ne f(1) = 2$이므로 $x=1$에서 **불연속**"
          }
        ]
      }
    },
    {
      "id": 28,
      "source": "학교 프린트 11p 예제 2",
      "tag": "핵심유형",
      "question": "함수 $f(x) = \\begin{cases} \\dfrac{x^2-x+a}{x-2} & (x \\ne 2) \\\\\\\\[6pt] b & (x = 2) \\end{cases}$ 가 모든 실수에서 연속이 되도록 하는 두 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "$x=2$에서 연속이므로 극한값과 함숫값이 일치! 분모 $\\to 0$이므로 분자에 $x=2$ 대입 후 인수분해하세요.",
      "answer": "a = -2, b = 3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속 조건 & 분자 선 대입]",
            "content": "$x=2$에서 연속이려면 $\\lim_{x \\to 2} f(x) = b$. 분모 $\\to 0$이므로 (분자) $\\to 0$: $2^2-2+a=0 \\implies a=-2$"
          },
          {
            "label": "[2단계: 식 변형(인수분해)]",
            "content": "분자에 대입하여 인수분해: $\\frac{x^2-x-2}{x-2} = \\frac{(x-2)(x+1)}{x-2} = x+1$"
          },
          {
            "label": "[3단계: 재대입 & b 결정]",
            "content": "$\\lim_{x \\to 2} (x+1) = 2+1 = 3 = b$ $\\therefore$ **$a=-2, b=3$**"
          }
        ]
      }
    }
  ]
};
