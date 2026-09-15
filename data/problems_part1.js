/*
 * Part 1: I. 함수의 극한과 연속 문제 데이터 (36문항 완결본)
 * 농고 출제 지정(민트 마크 16제) + 학교 프린트 1p~11p 전 문항 완벽 통합
 */
window.WORKSHEET_DATA = {
  "meta": {
    "title": "수학 II - I. 함수의 극한과 연속",
    "subtitle": "농고 출제 지정(민트 마크) + 학교 프린트 종합 최종 완성본",
    "student": "오서영",
    "date": "2026. 09. 15 (화)",
    "cheer": "서영이의 완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "학교 프린트 1p 예제 1 / 농고 교과서 14p 예제 1",
      "tag": "교과서출제",
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
      "tip": "1단계: $x=2$ 대입 시 $\\frac{0}{0}$ 꼴! 2단계: 분자를 $(x-2)(x+3)$으로 인수분해 후 약분하세요.",
      "answer": "5",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입]",
            "content": "$x=2$ 대입 시 $\\frac{2^2+2-6}{2-2} = \\frac{0}{0}$ 부정형입니다."
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "분자 인수분해: $\\frac{(x-2)(x+3)}{x-2} = x+3$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x=2$ 대입 시 $2+3 = 5$ $\\therefore$ **5**"
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
      "tip": "(1)은 $x=5$를 바로 대입! (2)는 $x=0$ 대입 시 $\\frac{0}{0}$ 꼴이므로 분자를 $x$로 묶어 약분하세요.",
      "answer": "(1) 2, (2) -3",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] $x=5$ 대입 시 $\\sqrt{5-1} = \\sqrt{4} = 2$ $\\therefore$ **2**"
          },
          {
            "label": "(2)",
            "content": "[식 변형] 분자를 $x$로 약분: $\\lim_{x \\to 0} (2x-3) = 2(0)-3 = -3$ $\\therefore$ **-3**"
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
          "formula": "\\lim_{x \\to 7} \\sqrt{x+2}"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 0} \\frac{3x^2+5x}{x}"
        }
      ],
      "tip": "(1)은 $x=7$을 바로 대입! (2)는 $x=0$ 대입 시 $\\frac{0}{0}$이므로 $x$를 약분한 뒤 대입하세요.",
      "answer": "(1) 3, (2) 5",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[선 대입] $x=7$ 대입 시 $\\sqrt{7+2} = \\sqrt{9} = 3$ $\\therefore$ **3**"
          },
          {
            "label": "(2)",
            "content": "[식 변형] $x$ 약분: $\\lim_{x \\to 0} (3x+5) = 3(0)+5 = 5$ $\\therefore$ **5**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "학교 프린트 2p 문제 2 / 농고 교과서 15p 문제 2",
      "tag": "교과서출제",
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
      "tip": "1단계: $x \\to \\pm\\infty$ 대입! 분모가 무한히 커지면 $\\frac{1}{\\infty} \\to 0$ 임을 기억하세요.",
      "answer": "(1) 1, (2) 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$x \\to \\infty$일 때 $\\frac{1}{x} \\to 0$이므로 $0+1 = 1$ $\\therefore$ **1**"
          },
          {
            "label": "(2)",
            "content": "$x \\to -\\infty$일 때 $|x+1| \\to \\infty$이므로 $\\frac{1}{\\infty} \\to 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "학교 프린트 2p 문제 3 / 농고 교과서 16p 문제 3",
      "tag": "교과서출제",
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
      "tip": "1단계: 대입 시 $\\frac{1}{+0} = +\\infty$, $-\\frac{1}{+0} = -\\infty$! 제곱과 절댓값은 항상 양수입니다.",
      "answer": "(1) \\infty (양의 무한대로 발산), (2) -\\infty (음의 무한대로 발산)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$x \\to 1$일 때 $(x-1)^2 \\to +0$이므로 $\\frac{1}{+0} \\to \\infty$ $\\therefore$ **$\\infty$ (발산)**"
          },
          {
            "label": "(2)",
            "content": "$x \\to 0$일 때 $|x| \\to +0$이므로 $-\\frac{1}{+0} \\to -\\infty$ $\\therefore$ **$-\\infty$ (발산)**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "학교 프린트 3p 문제 4 / 농고 교과서 17p 문제 4",
      "tag": "교과서출제",
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
      "tip": "1단계: $x \\to \\infty$ 또는 $x \\to -\\infty$를 대입하여 식의 부호 변화를 관찰하세요.",
      "answer": "(1) -\\infty (발산), (2) \\infty (발산)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$x \\to \\infty$일 때 $2-x \\to 2-\\infty = -\\infty$ $\\therefore$ **$-\\infty$ (발산)**"
          },
          {
            "label": "(2)",
            "content": "$x \\to -\\infty$이면 $-x \\to +\\infty$이므로 $\\sqrt{+\\infty+1} \\to \\infty$ $\\therefore$ **$\\infty$ (발산)**"
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
      "tip": "$x \\to \\infty$ 대입! $2+\\infty = +\\infty$ 양의 무한대로 발산합니다.",
      "answer": "\\infty (발산)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 대입]",
            "content": "$x \\to \\infty$를 대입하면 $2+\\infty = +\\infty$가 됩니다."
          },
          {
            "label": "[2단계: 결론]",
            "content": "값이 한없이 커지므로 양의 무한대로 발산합니다. $\\therefore$ **$\\infty$ (발산)**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "학교 프린트 4p 문제 5 / 농고 교과서 18p 문제 5",
      "tag": "교과서출제",
      "question": "함수 $f(x) = \\begin{cases} x+1 & (x \\ge 1) \\\\ x-1 & (x < 1) \\end{cases}$ 의 그래프를 이용하여 다음 극한값을 구하시오.",
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
      "tip": "우극한($x > 1$)은 $x+1$에 대입! 좌극한($x < 1$)은 $x-1$에 대입하세요.",
      "answer": "(1) 2, (2) 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[우극한] $x > 1$이므로 $f(x)=x+1$, $\\lim_{x \\to 1+} (x+1) = 1+1 = 2$ $\\therefore$ **2**"
          },
          {
            "label": "(2)",
            "content": "[좌극한] $x < 1$이므로 $f(x)=x-1$, $\\lim_{x \\to 1-} (x-1) = 1-1 = 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "학교 프린트 4p 예제 2",
      "tag": "핵심유형",
      "question": "함수 $f(x) = \\begin{cases} x^2+1 & (x \\ge 0) \\\\ x & (x < 0) \\end{cases}$ 에 대하여 $\\lim_{x \\to 0} f(x)$를 조사하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "극한값이 존재하려면 (우극한) = (좌극한)이어야 합니다. $x \\to 0+$, $x \\to 0-$를 각각 구하세요.",
      "answer": "존재하지 않는다 (우극한 1 \\ne 좌극한 0)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 우극한]",
            "content": "$\\lim_{x \\to 0+} f(x) = \\lim_{x \\to 0+} (x^2+1) = 0^2+1 = 1$"
          },
          {
            "label": "[2단계: 좌극한]",
            "content": "$\\lim_{x \\to 0-} f(x) = \\lim_{x \\to 0-} x = 0$"
          },
          {
            "label": "[3단계: 결론]",
            "content": "우극한(1) $\\ne$ 좌극한(0)이므로 극한값은 존재하지 않습니다. $\\therefore$ **존재하지 않는다**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "학교 프린트 4p 문제 6",
      "tag": "핵심유형",
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
      "tip": "★서영이 필수 공식: 절댓값은 반드시 구간별로 분리! $x>a$이면 $+$, $x<a$이면 $-$ 부호 붙이기!",
      "answer": "(1) 존재하지 않음 (우극한 1 \\ne 좌극한 -1), (2) 0 (우극한 0 = 좌극한 0)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "우극한: $\\lim_{x \\to 0+} \\frac{x}{x}=1$, 좌극한: $\\lim_{x \\to 0-} \\frac{-x}{x}=-1$ $\\implies 1 \\ne -1$ $\\therefore$ **존재하지 않음**"
          },
          {
            "label": "(2)",
            "content": "분자 $(x+1)^2$. 우극한: $\\lim_{x \\to -1+} (x+1)=0$, 좌극한: $\\lim_{x \\to -1-} -(x+1)=0$ $\\implies 0=0$ $\\therefore$ **0**"
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
      "tip": "1단계: $x=3$을 바로 대입하기! 다항함수의 극한은 바로 대입하면 그 값이 정답입니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 대입]",
            "content": "$x=3$을 대입하면 $3+1 = 4$입니다."
          },
          {
            "label": "[2단계: 결론]",
            "content": "분모가 없으므로 계산된 값이 곧 극한값입니다. $\\therefore$ **4**"
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
      "tip": "1단계: $x=a$ 대입! 다항식의 사칙연산은 각각의 극한값을 대입하여 계산합니다.",
      "answer": "(1) 10, (2) 4",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[대입] $3(2^2)-2 = 3(4)-2 = 12-2 = 10$ $\\therefore$ **10**"
          },
          {
            "label": "(2)",
            "content": "[대입] $\\{2(-1)+1\\}\\{3(-1)-1\\} = (-1)(-4) = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "학교 프린트 5p 문제 1 (1), (2) / 농고 교과서 21p 문제 1",
      "tag": "교과서출제",
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
      "tip": "1단계: $x=a$를 바로 대입! 바로 계산이 되면 그 값이 곧 정답입니다.",
      "answer": "(1) 3, (2) -14",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[대입] $1^2-2(1)+4 = 1-2+4 = 3$ $\\therefore$ **3**"
          },
          {
            "label": "(2)",
            "content": "[대입] $(2\\cdot 2+3)(2-4) = (7)(-2) = -14$ $\\therefore$ **-14**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "학교 프린트 5p 문제 1 (3), (4) / 농고 교과서 21p 문제 1",
      "tag": "교과서출제",
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
      "tip": "(1)은 분모가 0이 아니므로 바로 대입! (2)는 $x \\to \\infty$일 때 $\\frac{1}{\\infty} \\to 0$을 적용하세요.",
      "answer": "(1) 6, (2) 0",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[대입] 분모 $2(-1)+1 = -1 \\ne 0$. $\\frac{4(-1)-2}{-1} = \\frac{-6}{-1} = 6$ $\\therefore$ **6**"
          },
          {
            "label": "(2)",
            "content": "$x \\to \\infty$일 때 $\\frac{1}{x} \\to 0$, $\\frac{1}{x^2} \\to 0$이므로 $0+0 = 0$ $\\therefore$ **0**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "학교 프린트 6p 예제 1 / 농고 교과서 22p 예제 1",
      "tag": "교과서출제",
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
      "tip": "1단계: 대입 시 모두 $\\frac{0}{0}$ 꼴! 2단계: (1)은 인수분해, (2)는 분자 유리화 $(\\sqrt{x+4}+2)$ 곱하기!",
      "answer": "(1) 4, (2) 1/4",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[인수분해] $\\frac{(x-1)(x+3)}{x-1} = x+3 \\xrightarrow{x \\to 1} 1+3 = 4$ $\\therefore$ **4**"
          },
          {
            "label": "(2)",
            "content": "[유리화] $\\frac{(x+4)-4}{x(\\sqrt{x+4}+2)} = \\frac{1}{\\sqrt{x+4}+2} \\xrightarrow{x \\to 0} \\frac{1}{2+2} = \\frac{1}{4}$ $\\therefore$ **$\\frac{1}{4}$**"
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
      "tip": "1단계: 대입 시 $\\frac{0}{0}$ 꼴! (1) 합차공식으로 인수분해, (2) 분자에 $(\\sqrt{x+6}+3)$ 곱해 유리화!",
      "answer": "(1) -6, (2) 1/6",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[인수분해] $\\frac{(x+3)(x-3)}{x+3} = x-3 \\xrightarrow{x \\to -3} -3-3 = -6$ $\\therefore$ **-6**"
          },
          {
            "label": "(2)",
            "content": "[유리화] $\\frac{(x+6)-9}{(x-3)(\\sqrt{x+6}+3)} = \\frac{1}{\\sqrt{x+6}+3} \\xrightarrow{x \\to 3} \\frac{1}{3+3} = \\frac{1}{6}$ $\\therefore$ **$\\frac{1}{6}$**"
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
      "tip": "1단계: $x=2$ 대입 시 $\\frac{0}{0}$! 2단계: 분자를 $(x-2)(x+5)$로 인수분해 후 약분하세요.",
      "answer": "7",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 선 대입]",
            "content": "$x=2$ 대입 시 $\\frac{4+6-10}{0} = \\frac{0}{0}$ 부정형입니다."
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "분자 인수분해: $\\frac{(x-2)(x+5)}{x-2} = x+5$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x=2$ 대입 시 $2+5 = 7$ $\\therefore$ **7**"
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
      "tip": "1단계: 모두 $\\frac{0}{0}$ 꼴! (1) 조립제법으로 분자 인수분해, (2) 분모를 유리화 $(\\sqrt{x+1}+1)$ 곱하기!",
      "answer": "(1) 4, (2) 8",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "분자 인수분해: $(x-1)(x^2+2x+1)$. 약분 후 $x=1$ 대입: $1+2+1 = 4$ $\\therefore$ **4**"
          },
          {
            "label": "(2)",
            "content": "분모 유리화: $\\frac{x(x+4)(\\sqrt{x+1}+1)}{x} = (x+4)(\\sqrt{x+1}+1) \\xrightarrow{x \\to 0} 4 \\times 2 = 8$ $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "학교 프린트 7p 예제 2 / 농고 교과서 23p 예제 2",
      "tag": "교과서출제",
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
      "tip": "(1) $\\frac{\\infty}{\\infty}$ 꼴은 최고차항 계수비 $\\frac{2}{3}$! (2) $\\infty-\\infty$ 꼴은 켤레식을 곱해 유리화하세요.",
      "answer": "(1) 2/3, (2) 5/2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "분모·분자 차수가 2차로 동일하므로 최고차항의 계수비: $\\frac{2}{3}$ $\\therefore$ **$\\frac{2}{3}$**"
          },
          {
            "label": "(2)",
            "content": "분자 유리화: $\\frac{x^2+5x-x^2}{\\sqrt{x^2+5x}+x} = \\frac{5x}{\\sqrt{x^2+5x}+x} \\xrightarrow{x \\to \\infty} \\frac{5}{1+1} = \\frac{5}{2}$ $\\therefore$ **$\\frac{5}{2}$**"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "학교 프린트 7p 문제 3 (1), (2)",
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
      "tip": "1단계: $\\frac{\\infty}{\\infty}$ 꼴! 분모의 최고차항으로 나누어 계산! (1) 분모 차수가 더 크면 0! (2) 차수가 같으면 최고차항 계수의 비!",
      "answer": "(1) 0, (2) 6",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "분모 2차, 분자 1차이므로 분모가 훨씬 빠르게 커집니다. $\\frac{1}{\\infty} \\to 0$ $\\therefore$ **0**"
          },
          {
            "label": "(2)",
            "content": "분자 전개 시 최고차항 $6x^2$, 분모 최고차항 $x^2$이므로 계수비 $\\frac{6}{1} = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "학교 프린트 7p 문제 3 (3), (4)",
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
      "tip": "1단계: $\\infty-\\infty$ 무리식 꼴! 2단계: 켤레식을 곱하여 유리화한 뒤 최고차항 계수비를 구하세요.",
      "answer": "(1) 1/4, (2) 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "유리화: $\\frac{(4x^2+x)-4x^2}{\\sqrt{4x^2+x}+2x} = \\frac{x}{\\sqrt{4x^2+x}+2x} \\to \\frac{1}{2+2} = \\frac{1}{4}$ $\\therefore$ **$\\frac{1}{4}$**"
          },
          {
            "label": "(2)",
            "content": "유리화: $\\frac{(x^2+2x)-(x^2-2x)}{\\sqrt{x^2+2x}+\\sqrt{x^2-2x}} = \\frac{4x}{\\sqrt{x^2}+\\sqrt{x^2}} \\to \\frac{4}{1+1} = 2$ $\\therefore$ **2**"
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
      "tip": "1단계: $\\frac{\\infty}{\\infty}$ 꼴! 분모의 최고차항으로 분자, 분모를 나누어 최고차항 계수의 비를 구하세요.",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 꼴 판정]",
            "content": "$x \\to \\infty$ 대입 시 분모 $\\to \\infty$, 분자 $\\to \\infty$인 $\\frac{\\infty}{\\infty}$ 부정형입니다."
          },
          {
            "label": "[2단계: 계수 비교]",
            "content": "분모와 분자의 차수가 모두 1차이므로 최고차항 계수의 비는 $\\frac{4}{2} = 2$입니다."
          },
          {
            "label": "[3단계: 결론]",
            "content": "$\\lim_{x \\to \\infty} \\frac{4+\\frac{1}{x}}{2+\\frac{3}{x}} = \\frac{4}{2} = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "학교 프린트 8p 예제 3 / 농고 교과서 24p 예제 3",
      "tag": "교과서출제",
      "question": "다음 등식이 성립하도록 하는 두 상수 $a, b$의 값을 구하시오.",
      "formula": "\\lim_{x \\to 2} \\frac{x^2+ax+b}{x-2} = 6",
      "subQuestions": [],
      "tip": "극한의 성질: 분모 $\\to 0$이므로 분자 $x=2$ 대입 시 0! $b$를 소거하고 분자를 인수분해하여 약분하세요.",
      "answer": "a = 2, b = -8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 극한]",
            "content": "분모 $\\to 0$이므로 (분자) $\\to 0$: $4+2a+b=0 \\implies b=-2a-4$"
          },
          {
            "label": "[2단계: 인수분해]",
            "content": "분자에 대입: $x^2+ax-2a-4 = (x-2)(x+a+2)$"
          },
          {
            "label": "[3단계: 재대입 & 계수]",
            "content": "$\\lim_{x \\to 2}(x+a+2) = 4+a = 6 \\implies a=2$, $b=-2(2)-4=-8$ $\\therefore$ **$a=2, b=-8$**"
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "학교 프린트 8p 문제 4",
      "tag": "핵심유형",
      "question": "다음 등식이 성립하도록 하는 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "\\lim_{x \\to -1} \\frac{x^2+ax+b}{x+1} = 8"
        },
        {
          "no": 2,
          "formula": "\\lim_{x \\to 4} \\frac{a\\sqrt{x}+b}{x-4} = 3"
        }
      ],
      "tip": "분모 $\\to 0$이므로 분자 $\\to 0$! (1)은 $b$ 소거 후 인수분해, (2)는 분자 유리화 후 약분하세요.",
      "answer": "(1) a = 10, b = 9, (2) a = 12, b = -24",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$x=-1$ 대입 시 $1-a+b=0 \\implies b=a-1$. 분자: $(x+1)(x+a-1)$. 약분 후 $x=-1$ 대입: $-1+a-1=8 \\implies a=10, b=9$ $\\therefore$ **$a=10, b=9$**"
          },
          {
            "label": "(2)",
            "content": "$x=4$ 대입 시 $2a+b=0 \\implies b=-2a$. 분자: $a(\\sqrt{x}-2)$. 유리화 약분: $\\frac{a}{\\sqrt{x}+2} \\to \\frac{a}{4}=3 \\implies a=12, b=-24$ $\\therefore$ **$a=12, b=-24$**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "선생님 필기 추가 (8p)",
      "tag": "필기",
      "question": "다음 등식이 성립하도록 하는 두 상수 $a, b$의 값을 구하시오.",
      "formula": "\\lim_{x \\to 2} \\frac{x^2+ax+b}{x-2} = 4",
      "subQuestions": [],
      "tip": "분모 $\\to 0$이므로 분자 $x=2$ 대입 시 0! $b=-2a-4$ 대입 후 약분하여 4가 되는 $a$를 찾으세요.",
      "answer": "a = 0, b = -4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 조건]",
            "content": "$2^2+2a+b=0 \\implies b=-2a-4$"
          },
          {
            "label": "[2단계: 약분]",
            "content": "$\\frac{(x-2)(x+a+2)}{x-2} = x+a+2$"
          },
          {
            "label": "[3단계: 계수 결정]",
            "content": "$x=2$ 대입: $4+a = 4 \\implies a=0$, $b=-4$ $\\therefore$ **$a=0, b=-4$**"
          }
        ]
      }
    },
    {
      "id": 27,
      "source": "학교 프린트 9p 예제 4 / 농고 교과서 25p 예제 4",
      "tag": "교과서출제",
      "question": "함수 $f(x)$가 모든 실수 $x$에서 $-x^2+2x+2 \\le f(x) \\le x^2-2x+4$를 만족시킬 때, $\\lim_{x \\to 1} f(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 극한의 대소 관계 (샌드위치 정리)! 좌변과 우변 식에 $x=1$을 대입하여 극한값이 같음을 확인하세요.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 좌변 극한]",
            "content": "$\\lim_{x \\to 1} (-x^2+2x+2) = -1+2+2 = 3$"
          },
          {
            "label": "[2단계: 우변 극한]",
            "content": "$\\lim_{x \\to 1} (x^2-2x+4) = 1-2+4 = 3$"
          },
          {
            "label": "[3단계: 샌드위치 정리]",
            "content": "좌변과 우변의 극한값이 모두 3이므로 대소 관계에 의해 $\\lim_{x \\to 1} f(x) = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 28,
      "source": "학교 프린트 9p 문제 5",
      "tag": "기본",
      "question": "함수 $f(x)$가 모든 양수 $x$에서 $\\frac{4x-1}{x} \\le f(x) \\le \\frac{4x+5}{x}$를 만족시킬 때, $\\lim_{x \\to \\infty} f(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 극한의 대소 관계 성질 이용! 양 끝 식의 $x \\to \\infty$ 극한이 4로 같으므로 가운데도 4입니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 좌변 극한]",
            "content": "$\\lim_{x \\to \\infty} \\frac{4x-1}{x} = \\lim_{x \\to \\infty} \\left(4-\\frac{1}{x}\\right) = 4$"
          },
          {
            "label": "[2단계: 우변 극한]",
            "content": "$\\lim_{x \\to \\infty} \\frac{4x+5}{x} = \\lim_{x \\to \\infty} \\left(4+\\frac{5}{x}\\right) = 4$"
          },
          {
            "label": "[3단계: 샌드위치 정리]",
            "content": "양변의 극한값이 모두 4로 수렴하므로 대소 관계에 의해 $\\lim_{x \\to \\infty} f(x) = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 29,
      "source": "농고 찍어준 문제 (교과서 27p 중단원 3번)",
      "tag": "교과서출제",
      "question": "두 함수 $f(x), g(x)$에 대하여 $\\lim_{x \\to 1} f(x) = 2$, $\\lim_{x \\to 1} g(x) = 3$일 때, 다음 극한값을 구하시오.",
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
      "tip": "극한의 기본 성질: 수렴하는 극한은 사칙연산 기호 안으로 각각 대입할 수 있습니다.",
      "answer": "(1) 1, (2) 4",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "각각 대입: $5(2) - 3(3) = 10 - 9 = 1$ $\\therefore$ **1**"
          },
          {
            "label": "(2)",
            "content": "분자: $5(2)+2(3) = 16$, 분모: $2^2 = 4$. 따라서 $\\frac{16}{4} = 4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 30,
      "source": "농고 찍어준 문제 (교과서 29p 중단원 11번)",
      "tag": "교과서출제",
      "question": "함수 $f(x)$가 모든 양수 $x$에서 $2x+1 \\le f(x) \\le x^3-x+3$을 만족시킬 때, $\\lim_{x \\to 1} f(x)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 극한의 대소 관계: $x \\to 1$일 때 좌변 식과 우변 식에 $x=1$을 대입하세요.",
      "answer": "3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 좌변 극한]",
            "content": "$\\lim_{x \\to 1} (2x+1) = 2(1)+1 = 3$"
          },
          {
            "label": "[2단계: 우변 극한]",
            "content": "$\\lim_{x \\to 1} (x^3-x+3) = 1-1+3 = 3$"
          },
          {
            "label": "[3단계: 샌드위치 정리]",
            "content": "양변의 극한값이 모두 3이므로 $\\lim_{x \\to 1} f(x) = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 31,
      "source": "농고 찍어준 문제 (교과서 29p 중단원 13번)",
      "tag": "교과서출제",
      "question": "다항함수 $f(x)$가 다음 조건을 만족시킬 때, $f(5)$의 값을 구하시오.",
      "formula": "(가)\\; \\lim_{x \\to \\infty} \\frac{f(x)}{x^2} = 1, \\quad (나)\\; \\lim_{x \\to 2} \\frac{f(x)}{x-2} = -1",
      "subQuestions": [],
      "tip": "1단계: 분모에 대입하면 0이므로 분자 $f(2)=0$! $f(x)=(x-2)(x-k)$로 두고 식에 대입하여 약분하세요.",
      "answer": "6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 조건(가) 차수]",
            "content": "$\\lim_{x \\to \\infty}\\frac{f(x)}{x^2}=1$이므로 $f(x)$는 최고차항 계수가 1인 2차식: $f(x)=x^2+ax+b$"
          },
          {
            "label": "[2단계: 조건(나) 인수]",
            "content": "분모 $\\to 0$이므로 $f(2)=0$. $f(x)=(x-2)(x-k)$라 두면 $\\lim_{x \\to 2}\\frac{(x-2)(x-k)}{x-2} = 2-k = -1 \\implies k=3$"
          },
          {
            "label": "[3단계: $f(5)$ 계산]",
            "content": "$f(x)=(x-2)(x-3)$이므로 $f(5)=(5-2)(5-3) = 3 \\times 2 = 6$ $\\therefore$ **6**"
          }
        ]
      }
    },
    {
      "id": 32,
      "source": "선생님 시험문제 필기 (10p)",
      "tag": "필기",
      "question": "함수 $f(x) = \\begin{cases} x+5 & (x \\ne 1) \\\\ k & (x = 1) \\end{cases}$ 가 $x=1$에서 연속이 되기 위한 상수 $k$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 연속 조건: $\\lim_{x \\to a} f(x) = f(a)$! 극한값 $1+5$와 함숫값 $k$가 같아야 합니다.",
      "answer": "k = 6",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속의 정의]",
            "content": "$x=1$에서 연속이려면 $\\lim_{x \\to 1} f(x) = f(1)$이어야 합니다."
          },
          {
            "label": "[2단계: 극한값 계산]",
            "content": "$\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} (x+5) = 1+5 = 6$"
          },
          {
            "label": "[3단계: $k$ 결정]",
            "content": "함숫값 $f(1) = k$이므로 $k = 6$ $\\therefore$ **$k = 6$**"
          }
        ]
      }
    },
    {
      "id": 33,
      "source": "학교 프린트 10p 예제 1 & 스스로 해보기",
      "tag": "핵심유형",
      "question": "다음 각 함수에 대하여 주어진 $x$의 값에서의 연속성을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = \\begin{cases} x+4 & (x \\ne 1) \\\\ 2 & (x = 1) \\end{cases} \\quad (x = 1)"
        },
        {
          "no": 2,
          "formula": "f(x) = -x^2+1 \\quad (x = -2)"
        }
      ],
      "tip": "연속 조건 3가지: (1) 함숫값 정의, (2) 극한값 존재, (3) 함숫값 = 극한값 일치 확인!",
      "answer": "(1) 불연속, (2) 연속",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$\\lim_{x \\to 1} (x+4) = 5$이지만 $f(1)=2$. 극한값 $\\ne$ 함숫값이므로 $\\therefore$ **불연속**"
          },
          {
            "label": "(2)",
            "content": "다항함수는 모든 실수에서 연속! $\\lim_{x \\to -2}(-x^2+1) = -4+1 = -3 = f(-2)$ $\\therefore$ **연속**"
          }
        ]
      }
    },
    {
      "id": 34,
      "source": "학교 프린트 10p 문제 1 / 농고 교과서 34p 문제 1",
      "tag": "교과서출제",
      "question": "다음 함수가 $x=1$에서 연속인지 불연속인지 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = x-1"
        },
        {
          "no": 2,
          "formula": "f(x) = \\frac{x+1}{x-1}"
        },
        {
          "no": 3,
          "formula": "f(x) = \\begin{cases} \\frac{x^2-4x+3}{x-1} & (x \\ne 1) \\\\ -3 & (x = 1) \\end{cases}"
        },
        {
          "no": 4,
          "formula": "f(x) = \\begin{cases} \\sqrt{x-1} & (x \\ge 1) \\\\ 2x-2 & (x < 1) \\end{cases}"
        }
      ],
      "tip": "각 함수마다 $x=1$에서의 우극한, 좌극한, 함숫값을 차례대로 비교하세요.",
      "answer": "(1) 연속, (2) 불연속, (3) 불연속, (4) 연속",
      "solution": {
        "steps": [
          {
            "label": "(1), (2)",
            "content": "(1) 다항함수이므로 $x=1$에서 **연속**. (2) $x=1$ 대입 시 분모가 0이 되어 $f(1)$이 정의되지 않으므로 **불연속**"
          },
          {
            "label": "(3), (4)",
            "content": "(3) $\\lim_{x \\to 1}\\frac{(x-1)(x-3)}{x-1}=-2 \\ne f(1)=-3$ 이므로 **불연속**. (4) 우극한 $\\sqrt{0}=0$, 좌극한 $2(1)-2=0$, $f(1)=0$ 모두 같으므로 **연속**"
          }
        ]
      }
    },
    {
      "id": 35,
      "source": "학교 프린트 11p 예제 2 & 문제 5",
      "tag": "핵심유형",
      "question": "함수 $f(x) = \\begin{cases} \\frac{x^2-x+a}{x-2} & (x \\ne 2) \\\\ b & (x = 2) \\end{cases}$ 가 $x=2$에서 연속이 되도록 하는 상수 $a, b$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "연속 조건: $\\lim_{x \\to 2} f(x) = f(2) = b$! 분모 $\\to 0$이므로 분자 $x=2$ 대입 시 0이 되어야 합니다.",
      "answer": "a = -2, b = 3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 극한]",
            "content": "$x=2$에서 분모 $\\to 0$이므로 분자 $2^2-2+a = 0 \\implies a = -2$"
          },
          {
            "label": "[2단계: 식 변형 & 약분]",
            "content": "분자 인수분해: $\\frac{x^2-x-2}{x-2} = \\frac{(x-2)(x+1)}{x-2} = x+1$"
          },
          {
            "label": "[3단계: $b$ 결정]",
            "content": "$\\lim_{x \\to 2}(x+1) = 3 = b$ $\\therefore$ **$a = -2, b = 3$**"
          }
        ]
      }
    },
    {
      "id": 36,
      "source": "농고 찍어준 문제 (교과서 47p 대단원 5번 & 48p 대단원 11번 연계)",
      "tag": "교과서출제",
      "question": "다음 극한식 및 연속 조건을 만족하는 상수 $a, b$에 대하여 $a+b$의 값을 구하시오.",
      "formula": "\\lim_{x \\to 5} \\frac{\\sqrt{x+a}-b}{x-5} = \\frac{1}{6}",
      "subQuestions": [],
      "tip": "1단계: 분모 $\\to 0$이므로 분자 $x=5$ 대입 시 0! $b=\\sqrt{5+a}$ 대입 후 유리화하여 $a, b$를 구하세요.",
      "answer": "7",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 분자 극한]",
            "content": "$x \\to 5$일 때 분모 $\\to 0$이므로 $\\sqrt{5+a}-b = 0 \\implies b = \\sqrt{5+a}$"
          },
          {
            "label": "[2단계: 유리화]",
            "content": "$\\lim_{x \\to 5}\\frac{(x+a)-b^2}{(x-5)(\\sqrt{x+a}+b)} = \\lim_{x \\to 5}\\frac{x-5}{(x-5)(\\sqrt{x+a}+b)} = \\frac{1}{2b} = \\frac{1}{6}$"
          },
          {
            "label": "[3단계: 계수 합 산출]",
            "content": "$2b = 6 \\implies b = 3$. $3 = \\sqrt{5+a} \\implies 5+a = 9 \\implies a = 4$. 따라서 $a+b = 4+3 = 7$ $\\therefore$ **7**"
          }
        ]
      }
    }
  ]
};
