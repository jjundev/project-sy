/*
 * Part 2: II. 미분계수와 도함수 문제 데이터 (28문항 완결본)
 * 농고 출제 지정(민트 마크 8제) + 학교 프린트 12p~18p 전 문항 완벽 통합
 */
window.WORKSHEET_DATA = {
  "meta": {
    "title": "수학 II - II. 미분계수와 도함수",
    "subtitle": "농고 출제 지정(민트 마크 8제) + 학교 프린트 종합 최종 완성본",
    "student": "오서영",
    "date": "2026. 09. 15 (화)",
    "cheer": "서영이의 완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "학교 프린트 12p 예제 1 / 농고 교과서 60p 예제 1",
      "tag": "교과서출제",
      "question": "함수 $f(x) = x^2$에서 $x$의 값이 다음과 같이 변할 때의 평균변화율을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$1$에서 $4$까지"
        },
        {
          "no": 2,
          "formula": "$2$에서 $2+\\Delta x$까지"
        }
      ],
      "tip": "1단계: 평균변화율 공식 $\\frac{f(b)-f(a)}{b-a}$에 대입하기! 2단계: 대입 후 바로 계산이 되면 그 값이 곧 정답입니다.",
      "answer": "(1) 5, (2) $4 + \\Delta x$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 대입] $\\frac{f(4)-f(1)}{4-1} = \\frac{4^2-1^2}{3} = \\frac{15}{3} = 5$ $\\therefore$ **5**"
          },
          {
            "label": "(2)",
            "content": "[공식 대입] $\\frac{f(2+\\Delta x)-f(2)}{\\Delta x} = \\frac{(2+\\Delta x)^2-2^2}{\\Delta x} = \\frac{4\\Delta x+(\\Delta x)^2}{\\Delta x} = 4+\\Delta x$ $\\therefore$ **$4+\\Delta x$**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "학교 프린트 12p 스스로 해보기",
      "tag": "기본",
      "question": "함수 $f(x) = 2x+1$에서 $x$의 값이 다음과 같이 변할 때의 평균변화율을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$0$에서 $3$까지"
        },
        {
          "no": 2,
          "formula": "$1$에서 $1+\\Delta x$까지"
        }
      ],
      "tip": "1단계: 공식 $\\frac{f(b)-f(a)}{b-a}$에 대입! 2단계: 바로 계산하면 그 값이 정답! 일차함수의 평균변화율은 항상 기울기와 같습니다.",
      "answer": "(1) 2, (2) 2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 대입] $\\frac{f(3)-f(0)}{3-0} = \\frac{7-1}{3} = \\frac{6}{3} = 2$ $\\therefore$ **2**"
          },
          {
            "label": "(2)",
            "content": "[공식 대입] $\\frac{f(1+\\Delta x)-f(1)}{\\Delta x} = \\frac{2(1+\\Delta x)+1-3}{\\Delta x} = \\frac{2\\Delta x}{\\Delta x} = 2$ $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "학교 프린트 12p 문제 1",
      "tag": "기본",
      "question": "함수 $f(x) = x^2-2x$에서 $x$의 값이 다음과 같이 변할 때의 평균변화율을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$-2$에서 $3$까지"
        },
        {
          "no": 2,
          "formula": "$a$에서 $a+\\Delta x$까지"
        }
      ],
      "tip": "1단계: 공식 $\\frac{f(b)-f(a)}{b-a}$에 $a, b$ 대입! 2단계: 분자를 전개한 뒤 $\\Delta x$를 약분하세요.",
      "answer": "(1) -1, (2) $2a - 2 + \\Delta x$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 대입] $\\frac{f(3)-f(-2)}{3-(-2)} = \\frac{(9-6)-(4+4)}{5} = \\frac{3-8}{5} = \\frac{-5}{5} = -1$ $\\therefore$ **-1**"
          },
          {
            "label": "(2)",
            "content": "[식 변형 및 약분] $\\frac{(a+\\Delta x)^2-2(a+\\Delta x)-(a^2-2a)}{\\Delta x} = \\frac{2a\\Delta x+(\\Delta x)^2-2\\Delta x}{\\Delta x} = 2a-2+\\Delta x$ $\\therefore$ **$2a-2+\\Delta x$**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "AI 숫자 변형 (03번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "함수 $f(x) = 2x^2+3x$에서 $x$의 값이 다음과 같이 변할 때의 평균변화율을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$1$에서 $3$까지"
        },
        {
          "no": 2,
          "formula": "$1$에서 $1+\\Delta x$까지"
        }
      ],
      "tip": "1단계: 평균변화율 공식 $\\frac{f(b)-f(a)}{b-a}$에 대입하기! 2단계: 분자를 전개한 뒤 $\\Delta x$로 묶어 약분하세요.",
      "answer": "(1) 11, (2) $2\\Delta x + 7$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 대입] $f(3)=2(9)+9=27, f(1)=5$. $\\frac{27-5}{3-1} = \\frac{22}{2} = 11$ $\\therefore$ **11**"
          },
          {
            "label": "(2)",
            "content": "[식 변형 및 약분] $\\frac{2(1+\\Delta x)^2+3(1+\\Delta x)-5}{\\Delta x} = \\frac{7\\Delta x+2(\\Delta x)^2}{\\Delta x} = 7+2\\Delta x$ $\\therefore$ **$2\\Delta x+7$**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "학교 프린트 13p 예제 2 / 농고 교과서 62p 예제 2",
      "tag": "교과서출제",
      "question": "미분계수의 정의를 이용하여 함수 $f(x) = 2x^2$의 $x=1$에서의 미분계수 $f'(1)$을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "미분계수 정의: $f'(1) = \\lim_{x \\to 1} \\frac{f(x)-f(1)}{x-1}$ 대입! $\\frac{0}{0}$ 꼴이므로 인수분해 후 약분하세요.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정의식 대입]",
            "content": "$f'(1) = \\lim_{x \\to 1} \\frac{2x^2-2}{x-1}$ ($x=1$ 대입 시 $\\frac{0}{0}$ 꼴)"
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "분자 인수분해: $\\frac{2(x-1)(x+1)}{x-1} = 2(x+1)$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x=1$ 대입: $2(1+1) = 4$ (또는 $f'(x)=4x \\implies f'(1)=4$) $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "학교 프린트 13p 문제 3",
      "tag": "핵심유형",
      "question": "다음 함수의 $x=2$에서의 미분계수를 구하시오. (정의 또는 공식 활용)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = 5x+1"
        },
        {
          "no": 2,
          "formula": "f(x) = -3x^2+4x"
        }
      ],
      "tip": "정의 $f'(2) = \\lim_{x \\to 2} \\frac{f(x)-f(2)}{x-2}$ 또는 도함수 공식 $f'(x)$를 구한 뒤 $x=2$ 대입!",
      "answer": "(1) 5, (2) -8",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$\\lim_{x \\to 2} \\frac{(5x+1)-11}{x-2} = \\lim_{x \\to 2} \\frac{5(x-2)}{x-2} = 5$ (공식: $f'(x)=5 \\implies f'(2)=5$) $\\therefore$ **5**"
          },
          {
            "label": "(2)",
            "content": "$f(2)=-4$. $\\lim_{x \\to 2} \\frac{-3x^2+4x-(-4)}{x-2} = \\lim_{x \\to 2} (-3x-2) = -8$ (공식: $f'(x)=-6x+4 \\implies -8$) $\\therefore$ **-8**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "AI 숫자 변형 (05번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "미분계수의 정의를 이용하여 함수 $f(x) = 3x^2-2x$의 $x=2$에서의 미분계수 $f'(2)$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $f'(2) = \\lim_{x \\to 2} \\frac{f(x)-f(2)}{x-2}$! 2단계: $\\frac{0}{0}$ 인수분해 후 약분하여 대입하세요.",
      "answer": "10",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정의식 대입]",
            "content": "$f(2) = 3(4)-4 = 8$. $f'(2) = \\lim_{x \\to 2} \\frac{3x^2-2x-8}{x-2}$"
          },
          {
            "label": "[2단계: 식 변형]",
            "content": "분자 인수분해: $\\frac{(x-2)(3x+4)}{x-2} = 3x+4$"
          },
          {
            "label": "[3단계: 재대입]",
            "content": "$x=2$ 대입: $3(2)+4 = 10$ $\\therefore$ **10**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "AI 숫자 변형 (06번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "다음 함수의 $x=1$에서의 미분계수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = -2x+7"
        },
        {
          "no": 2,
          "formula": "f(x) = x^2-4x+3"
        }
      ],
      "tip": "공식 활용: (1) $f'(x)=-2$, (2) $f'(x)=2x-4$에 $x=1$ 대입하여 바로 계산!",
      "answer": "(1) -2, (2) -2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "일차함수의 도함수는 기울기: $f'(x) = -2 \\implies f'(1) = -2$ $\\therefore$ **-2**"
          },
          {
            "label": "(2)",
            "content": "도함수 $f'(x) = 2x-4$. $x=1$ 대입 시 $2(1)-4 = -2$ $\\therefore$ **-2**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "학교 프린트 14p 예제 3 / 농고 교과서 64p 예제 3",
      "tag": "교과서출제",
      "question": "곡선 $y = x^2-3x$ 위의 점 $(2, -2)$에서의 접선의 기울기를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "기하학적 의미: 곡선 위의 점 $(a, f(a))$에서의 접선의 기울기는 미분계수 $f'(a)$와 같습니다!",
      "answer": "1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 구하기]",
            "content": "$f(x) = x^2-3x$이므로 $f'(x) = 2x-3$"
          },
          {
            "label": "[2단계: 접선의 기울기 계산]",
            "content": "점 $(2, -2)$에서의 접선의 기울기는 $f'(2)$이므로 $f'(2) = 2(2)-3 = 4-3 = 1$"
          },
          {
            "label": "[3단계: 결론]",
            "content": "구하는 접선의 기울기는 1입니다. $\\therefore$ **1**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "학교 프린트 14p 문제 6",
      "tag": "핵심유형",
      "question": "다음 곡선 위의 주어진 점에서의 접선의 기울기를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "y = -2x^2+x \\quad (-1, -3)"
        },
        {
          "no": 2,
          "formula": "y = x^3-2 \\quad (1, -1)"
        }
      ],
      "tip": "접선의 기울기 = 미분계수 $f'(a)$! (1)은 $y'=-4x+1$에 $x=-1$, (2)는 $y'=3x^2$에 $x=1$ 대입!",
      "answer": "(1) 5, (2) 3",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$y' = -4x+1$. $x=-1$ 대입: $-4(-1)+1 = 4+1 = 5$ $\\therefore$ **5**"
          },
          {
            "label": "(2)",
            "content": "$y' = 3x^2$. $x=1$ 대입: $3(1^2) = 3$ $\\therefore$ **3**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "학교 프린트 14p 선생님 필기",
      "tag": "필기",
      "question": "곡선 $y = x^2$ 위의 점 $(2, 4)$에서의 접선의 기울기를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "선생님 필기 강조: 접·기 = 순·변 = 미분계수! $f'(x)=2x$에 $x=2$를 바로 대입하세요.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수]",
            "content": "$f(x) = x^2$에서 도함수는 $f'(x) = 2x$입니다."
          },
          {
            "label": "[2단계: 접선 기울기]",
            "content": "$x=2$에서의 접선의 기울기는 $f'(2) = 2(2) = 4$"
          },
          {
            "label": "[3단계: 결론]",
            "content": "접선의 기울기는 4입니다. $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "AI 숫자 변형 (09번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "곡선 $y = 2x^2-5x$ 위의 점 $(1, -3)$에서의 접선의 기울기를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "접선의 기울기는 미분계수 $f'(1)$! 도함수 $y'=4x-5$를 구한 뒤 $x=1$을 대입하세요.",
      "answer": "-1",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수]",
            "content": "$f(x) = 2x^2-5x$에서 $f'(x) = 4x-5$"
          },
          {
            "label": "[2단계: 접선 기울기]",
            "content": "$x=1$에서의 접선의 기울기는 $f'(1) = 4(1)-5 = -1$"
          },
          {
            "label": "[3단계: 결론]",
            "content": "구하는 접선의 기울기는 -1입니다. $\\therefore$ **-1**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "학교 프린트 15p 예제 4 / 농고 교과서 66p 예제 4",
      "tag": "교과서출제",
      "question": "함수 $f(x) = |x|$는 $x=0$에서 연속이지만 미분가능하지 않음을 보이시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "연속성: $\\lim_{x \\to 0} |x| = f(0) = 0$ 성립! 미분가능성: 우미분계수(+1)와 좌미분계수(-1)가 다름을 보이세요.",
      "answer": "연속이지만 미분가능하지 않음 (해설 참조)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성]",
            "content": "$\\lim_{x \\to 0} |x| = 0 = f(0)$이므로 $x=0$에서 연속입니다."
          },
          {
            "label": "[2단계: 우미분계수]",
            "content": "$\\lim_{x \\to 0+} \\frac{|x|-0}{x-0} = \\lim_{x \\to 0+} \\frac{x}{x} = 1$"
          },
          {
            "label": "[3단계: 좌미분계수]",
            "content": "$\\lim_{x \\to 0-} \\frac{|x|-0}{x-0} = \\lim_{x \\to 0-} \\frac{-x}{x} = -1$"
          },
          {
            "label": "[4단계: 결론]",
            "content": "우미분계수(1) $\\ne$ 좌미분계수(-1)이므로 $x=0$에서 미분가능하지 않습니다."
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "스스로 해보기 변형 (15p)",
      "tag": "핵심유형",
      "question": "함수 $f(x) = |x-1|$의 $x=1$에서의 연속성과 미분가능성을 조사하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "꺾인 점(첨점)은 연속이지만 미분 불가능! 우미분계수와 좌미분계수를 각각 계산해 비교하세요.",
      "answer": "연속이지만 미분가능하지 않음 (해설 참조)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성 조사]",
            "content": "$\\lim_{x \\to 1} |x-1| = 0 = f(1)$이므로 $x=1$에서 연속입니다."
          },
          {
            "label": "[2단계: 우미분계수]",
            "content": "$\\lim_{x \\to 1+} \\frac{|x-1|-0}{x-1} = \\lim_{x \\to 1+} \\frac{x-1}{x-1} = 1$"
          },
          {
            "label": "[3단계: 좌미분계수]",
            "content": "$\\lim_{x \\to 1-} \\frac{|x-1|-0}{x-1} = \\lim_{x \\to 1-} \\frac{-(x-1)}{x-1} = -1$"
          },
          {
            "label": "[4단계: 결론]",
            "content": "우미분계수(1) $\\ne$ 좌미분계수(-1)이므로 연속이지만 미분가능하지 않습니다. $\\therefore$ **연속이지만 미분불가**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "학교 프린트 15p 문제 7 / 농고 교과서 66p 문제 7",
      "tag": "교과서출제",
      "question": "다음 함수의 $x=1$에서의 연속성과 미분가능성을 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = x^2+x"
        },
        {
          "no": 2,
          "formula": "f(x) = |x^2-x|"
        }
      ],
      "tip": "(1) 다항함수는 항상 연속이고 미분가능! (2) 절댓값 식은 $x=1$ 전후로 부호를 나누어 좌우 미분계수를 구하세요.",
      "answer": "(1) 연속이고 미분가능하다, (2) 연속이지만 미분가능하지 않다",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "다항함수이므로 $x=1$에서 극한값 $f(1)=2$, 도함수 $f'(1)=3$ 존재 $\\implies$ **연속이고 미분가능**"
          },
          {
            "label": "(2)",
            "content": "연속성: $\\lim_{x \\to 1} |x(x-1)| = 0 = f(1)$ (연속). 우미분: $\\lim_{x \\to 1+} \\frac{x(x-1)}{x-1} = 1$. 좌미분: $\\lim_{x \\to 1-} \\frac{-x(x-1)}{x-1} = -1$. 우미분 $\\ne$ 좌미분이므로 **연속이지만 미분불가**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "AI 숫자 변형 (15번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "함수 $f(x) = |x^2-4|$의 $x=2$에서의 연속성과 미분가능성을 조사하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $x=2$ 대입 시 0으로 연속! 2단계: $x>2$일 때와 $x<2$일 때의 미분계수를 각각 구하세요.",
      "answer": "연속이지만 미분가능하지 않다 (우미분계수 $4 \\ne$ 좌미분계수 $-4$)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연속성]",
            "content": "$\\lim_{x \\to 2} |x^2-4| = 0 = f(2)$이므로 $x=2$에서 연속입니다."
          },
          {
            "label": "[2단계: 우미분계수]",
            "content": "$x > 2$일 때 $x^2-4 > 0$: $\\lim_{x \\to 2+} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2+} (x+2) = 4$"
          },
          {
            "label": "[3단계: 좌미분계수]",
            "content": "$x < 2$일 때 $x^2-4 < 0$: $\\lim_{x \\to 2-} \\frac{-(x-2)(x+2)}{x-2} = \\lim_{x \\to 2-} -(x+2) = -4$"
          },
          {
            "label": "[4단계: 결론]",
            "content": "우미분계수(4) $\\ne$ 좌미분계수(-4)이므로 연속이지만 미분가능하지 않습니다. $\\therefore$ **연속이지만 미분불가**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "학교 프린트 16p 예제 1 / 농고 교과서 68p 예제 1",
      "tag": "교과서출제",
      "question": "도함수의 정의를 이용하여 함수 $f(x) = x^2+3x$의 도함수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "도함수 정의: $f'(x) = \\lim_{\\Delta x \\to 0} \\frac{f(x+\\Delta x)-f(x)}{\\Delta x}$ 대입! $\\frac{0}{0}$ 인수분해 후 $\\Delta x$를 약분하세요.",
      "answer": "f'(x) = 2x+3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정의식 대입]",
            "content": "$f'(x) = \\lim_{\\Delta x \\to 0} \\frac{\\{(x+\\Delta x)^2+3(x+\\Delta x)\\} - (x^2+3x)}{\\Delta x}$"
          },
          {
            "label": "[2단계: 식 전개 및 약분]",
            "content": "$\\lim_{\\Delta x \\to 0} \\frac{2x\\Delta x+(\\Delta x)^2+3\\Delta x}{\\Delta x} = \\lim_{\\Delta x \\to 0} (2x+\\Delta x+3)$"
          },
          {
            "label": "[3단계: 대입]",
            "content": "$\\Delta x = 0$을 대입하면 $2x+0+3 = 2x+3$ $\\therefore$ **$f'(x) = 2x+3$**"
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "학교 프린트 16p 스스로 해보기",
      "tag": "기본",
      "question": "도함수의 정의를 이용하여 함수 $f(x) = -2x^2+3x$의 도함수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "도함수 정의 공식에 $f(x+\\Delta x)$를 대입하고, 전개하여 $\\Delta x$를 묶어 약분하세요.",
      "answer": "f'(x) = -4x+3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정의식 대입]",
            "content": "$f'(x) = \\lim_{\\Delta x \\to 0} \\frac{\\{-2(x+\\Delta x)^2+3(x+\\Delta x)\\} - (-2x^2+3x)}{\\Delta x}$"
          },
          {
            "label": "[2단계: 식 전개 및 약분]",
            "content": "$\\lim_{\\Delta x \\to 0} \\frac{-4x\\Delta x-2(\\Delta x)^2+3\\Delta x}{\\Delta x} = \\lim_{\\Delta x \\to 0} (-4x-2\\Delta x+3)$"
          },
          {
            "label": "[3단계: 대입]",
            "content": "$\\Delta x = 0$ 대입: $-4x+3$ $\\therefore$ **$f'(x) = -4x+3$**"
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "학교 프린트 16p 문제 1",
      "tag": "기본",
      "question": "도함수 공식을 이용하여 다음 함수의 도함수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = 5x+7"
        },
        {
          "no": 2,
          "formula": "f(x) = -x^2+2x+3"
        }
      ],
      "tip": "도함수 기본 공식: $(c)'=0$, $(x^n)'=nx^{n-1}$ 대입! 각 항마다 차수를 1 낮추어 바로 계산하세요.",
      "answer": "(1) f'(x) = 5, (2) f'(x) = -2x+2",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[공식 대입] $(5x)'=5$, $(7)'=0$이므로 $f'(x) = 5$ $\\therefore$ **$f'(x) = 5$**"
          },
          {
            "label": "(2)",
            "content": "[공식 대입] $(-x^2)'=-2x$, $(2x)'=2$, $(3)'=0$이므로 $f'(x) = -2x+2$ $\\therefore$ **$f'(x) = -2x+2$**"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "AI 숫자 변형 (19번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "도함수 공식을 이용하여 다음 함수의 도함수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x) = -3x+8"
        },
        {
          "no": 2,
          "formula": "f(x) = 2x^3-4x^2+5x-1"
        }
      ],
      "tip": "도함수 공식 $(x^n)'=nx^{n-1}$에 대입! 각 항별로 지수를 계수에 곱하고 차수를 1 낮추세요.",
      "answer": "(1) $f'(x) = -3$, (2) $f'(x) = 6x^2-8x+5$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$f'(x) = -3$ $\\therefore$ **$f'(x) = -3$**"
          },
          {
            "label": "(2)",
            "content": "$f'(x) = 2(3x^2)-4(2x)+5 = 6x^2-8x+5$ $\\therefore$ **$f'(x) = 6x^2-8x+5$**"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "학교 프린트 17p 문제 2",
      "tag": "기본",
      "question": "다음 함수의 도함수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "y = x^{20}"
        },
        {
          "no": 2,
          "formula": "y = x^{99}"
        },
        {
          "no": 3,
          "formula": "y = -5"
        },
        {
          "no": 4,
          "formula": "y = 2^{10}"
        }
      ],
      "tip": "$(x^n)' = nx^{n-1}$과 상수함수의 미분 $(c)' = 0$! (3)과 (4)는 모두 상수이므로 도함수는 0입니다.",
      "answer": "(1) $y' = 20x^{19}$, (2) $y' = 99x^{98}$, (3) $y' = 0$, (4) $y' = 0$",
      "solution": {
        "steps": [
          {
            "label": "(1), (2)",
            "content": "(1) $(x^{20})' = 20x^{19}$ $\\therefore$ **$y' = 20x^{19}$**, (2) $(x^{99})' = 99x^{98}$ $\\therefore$ **$y' = 99x^{98}$**"
          },
          {
            "label": "(3), (4)",
            "content": "(3) 상수의 미분은 0: $y'=0$ $\\therefore$ **$y' = 0$**, (4) $2^{10}=1024$ 역시 상수이므로 미분하면 0: $y'=0$ $\\therefore$ **$y' = 0$**"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "학교 프린트 17p 예제 2",
      "tag": "핵심유형",
      "question": "함수 $y = x^4+2x^3-3x+4$를 미분하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "함수의 실수배, 합, 차의 미분법! 각 항을 독립적으로 $(x^n)'=nx^{n-1}$ 공식을 적용해 미분하세요.",
      "answer": "$y' = 4x^3+6x^2-3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 항별 미분]",
            "content": "$(x^4)' = 4x^3$, $(2x^3)' = 2(3x^2) = 6x^2$, $(-3x)' = -3$, $(4)' = 0$"
          },
          {
            "label": "[2단계: 결론]",
            "content": "$y' = 4x^3+6x^2-3$ $\\therefore$ **$y' = 4x^3+6x^2-3$**"
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "학교 프린트 17p 스스로 해보기",
      "tag": "기본",
      "question": "함수 $y = 6x^3-4x^2+2x-1$을 미분하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "각 항마다 지수를 계수에 곱하고 차수를 1씩 줄여주세요. 상수는 미분하면 0이 됩니다.",
      "answer": "$y' = 18x^2-8x+2$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 항별 미분]",
            "content": "$(6x^3)' = 18x^2$, $(-4x^2)' = -8x$, $(2x)' = 2$, $(-1)' = 0$"
          },
          {
            "label": "[2단계: 도함수 정리]",
            "content": "$y' = 18x^2-8x+2$ $\\therefore$ **$y' = 18x^2-8x+2$**"
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "학교 프린트 17p 문제 3 (1), (2)",
      "tag": "기본",
      "question": "다음 함수를 미분하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "y = 3x^2-2x+1"
        },
        {
          "no": 2,
          "formula": "y = -2x^3-3x^2+5x"
        }
      ],
      "tip": "미분 공식 적용: 각 항의 계수와 지수를 곱하고 차수를 1 낮추어 바로 계산하세요.",
      "answer": "(1) $y' = 6x-2$, (2) $y' = -6x^2-6x+5$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$y' = 3(2x)-2 = 6x-2$ $\\therefore$ **$y' = 6x-2$**"
          },
          {
            "label": "(2)",
            "content": "$y' = -2(3x^2)-3(2x)+5 = -6x^2-6x+5$ $\\therefore$ **$y' = -6x^2-6x+5$**"
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "학교 프린트 17p 문제 3 (3), (4)",
      "tag": "핵심유형",
      "question": "다음 함수를 미분하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "y = 2x^4+3x^2-3x-2"
        },
        {
          "no": 2,
          "formula": "y = x^5-2x^4+4x^2+7"
        }
      ],
      "tip": "고차 다항식 미분: $(x^n)'=nx^{n-1}$ 공식을 항마다 차분하게 적용하세요.",
      "answer": "(1) $y' = 8x^3+6x-3$, (2) $y' = 5x^4-8x^3+8x$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$y' = 2(4x^3)+3(2x)-3 = 8x^3+6x-3$ $\\therefore$ **$y' = 8x^3+6x-3$**"
          },
          {
            "label": "(2)",
            "content": "$y' = 5x^4-2(4x^3)+4(2x) = 5x^4-8x^3+8x$ $\\therefore$ **$y' = 5x^4-8x^3+8x$**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "학교 프린트 17p 선생님 필기",
      "tag": "필기",
      "question": "함수 $f(x) = x^2$의 $x=1$에서의 접선의 기울기를 도함수를 이용하여 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "선생님 핵심 필기: 미분계수 = 순간변화율 = 접선의 기울기! $f'(x)=2x$에 $x=1$ 대입!",
      "answer": "2",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 구하기]",
            "content": "$f(x) = x^2$에서 도함수는 $f'(x) = 2x$입니다."
          },
          {
            "label": "[2단계: 미분계수 = 접선 기울기]",
            "content": "$x=1$에서의 접선의 기울기는 $f'(1)$이므로 $f'(1) = 2(1) = 2$"
          },
          {
            "label": "[3단계: 결론]",
            "content": "접선의 기울기는 2입니다. $\\therefore$ **2**"
          }
        ]
      }
    },
    {
      "id": 27,
      "source": "학교 프린트 18p 예제 3 / 농고 교과서 72p 예제 3",
      "tag": "교과서출제",
      "question": "함수 $y = (x^2-3x)(2x+5)$를 미분하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "곱의 미분법 공식: $\\{f(x)g(x)\\}' = f'(x)g(x) + f(x)g'(x)$! 앞 미분 뒤 그대로 + 앞 그대로 뒤 미분!",
      "answer": "$y' = 6x^2-2x-15$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 곱의 미분 공식 적용]",
            "content": "$y' = (x^2-3x)'(2x+5) + (x^2-3x)(2x+5)' = (2x-3)(2x+5) + (x^2-3x)(2)$"
          },
          {
            "label": "[2단계: 식 전개]",
            "content": "$(4x^2+10x-6x-15) + (2x^2-6x) = (4x^2+4x-15) + (2x^2-6x)$"
          },
          {
            "label": "[3단계: 동류항 정리]",
            "content": "$(4x^2+2x^2) + (4x-6x) - 15 = 6x^2-2x-15$ $\\therefore$ **$y' = 6x^2-2x-15$**"
          }
        ]
      }
    },
    {
      "id": 28,
      "source": "학교 프린트 18p 문제 4 / 농고 교과서 72p 문제 4",
      "tag": "교과서출제",
      "question": "다음 함수를 미분하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "y = (x-4)(3x+2)"
        },
        {
          "no": 2,
          "formula": "y = (x^2+x+4)(2x^2-5)"
        }
      ],
      "tip": "곱의 미분법 $\\{f(x)g(x)\\}' = f'g + fg'$ 적용! 전개하여 동류항을 깔끔하게 묶어주세요.",
      "answer": "(1) $y' = 6x-10$, (2) $y' = 8x^3+6x^2+6x-5$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$y' = 1\\cdot(3x+2) + (x-4)\\cdot 3 = 3x+2+3x-12 = 6x-10$ $\\therefore$ **$y' = 6x-10$**"
          },
          {
            "label": "(2)",
            "content": "$y' = (2x+1)(2x^2-5) + (x^2+x+4)(4x) = (4x^3+2x^2-10x-5) + (4x^3+4x^2+16x) = 8x^3+6x^2+6x-5$ $\\therefore$ **$y' = 8x^3+6x^2+6x-5$**"
          }
        ]
      }
    }
  ]
};
