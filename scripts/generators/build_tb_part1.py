import json

problems = [
  {
    "id": 1,
    "source": "교과서 27p 중단원 1번 (1), (2)",
    "tag": "기본",
    "question": "다음 극한을 함수의 그래프를 이용하여 조사하시오.",
    "formula": "",
    "subQuestions": [
      { "no": 1, "formula": "\\lim_{x \\to 1} \\frac{x^2+3x+2}{x+1}" },
      { "no": 2, "formula": "\\lim_{x \\to \\infty} \\frac{1}{|x-2|}" }
    ],
    "tip": "1단계: $x=a$를 식에 먼저 대입하기! 분모가 0이 되지 않으면 그 값이 곧 정답입니다. 분모가 무한대로 가면 0에 수렴합니다.",
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
      { "no": 1, "formula": "\\lim_{x \\to -1} \\frac{1}{(x+1)^2}" },
      { "no": 2, "formula": "\\lim_{x \\to -\\infty} \\sqrt{-x+2}" }
    ],
    "tip": "1단계: $x \\to a$를 대입하여 분모와 근호 안의 상태를 확인하세요. $\\frac{1}{+0} = \\infty$이고, 근호 안이 양의 무한대로 가면 양의 무한대로 발산합니다.",
    "answer": "(1) 발산 ($\\infty$), (2) 발산 ($\\infty$)",
    "solution": {
      "steps": [
        {
          "label": "(1)",
          "content": "[1단계: 선 대입] $x \\to -1$일 때 $(x+1)^2 \\to +0$이므로 $\\frac{1}{+0} \\to \\infty$ (양의 무한대로 발산) $\\therefore$ **발산 ($\\infty$)**"
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
      { "no": 1, "formula": "\\lim_{x \\to 1} \\frac{|x-1|}{x-1}" },
      { "no": 2, "formula": "\\lim_{x \\to 0} \\frac{2x^2+x}{|x|}" }
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
      { "no": 1, "formula": "\\lim_{x \\to 1} \\{5f(x)-3g(x)\\}" },
      { "no": 2, "formula": "\\lim_{x \\to 1} \\frac{5f(x)+2g(x)}{\\{f(x)\\}^2}" }
    ],
    "tip": "함수의 극한에 대한 성질: 두 함수가 모두 수렴하므로 각각의 극한값을 대입하여 사칙연산으로 바로 계산합니다.",
    "answer": "(1) 1, (2) 4",
    "solution": {
      "steps": [
        {
          "label": "(1)",
          "content": "[극한 성질 대입] $5 \\lim f(x) - 3 \\lim g(x) = 5(2) - 3(3) = 10 - 9 = 1$ $\\therefore$ **1**"
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
      { "no": 1, "formula": "\\lim_{x \\to 1} \\frac{x^3+x-2}{x-1}" },
      { "no": 2, "formula": "\\lim_{x \\to 0} \\frac{x^2+3x}{\\sqrt{x+4}-2}" }
    ],
    "tip": "1단계: 선 대입 시 $\\frac{0}{0}$ 꼴(부정형)! (1)은 분자를 조립제법으로 인수분해, (2)는 분모를 유리화하여 $(x-a)$ 인수를 약분한 뒤 재대입하세요.",
    "answer": "(1) 4, (2) 12",
    "solution": {
      "steps": [
        {
          "label": "(1)",
          "content": "[1단계: 선 대입] $\\frac{0}{0}$ 부정형. [2단계: 식 변형] $x^3+x-2 = (x-1)(x^2+x+2)$로 인수분해: $\\lim_{x \\to 1} (x^2+x+2)$ \\\\ [3단계: 재대입] $1^2+1+2 = 4$ $\\therefore$ **4**"
        },
        {
          "label": "(2)",
          "content": "[1단계: 선 대입] $\\frac{0}{0}$ 부정형. [2단계: 식 변형] 분모 유리화: $\\frac{x(x+3)(\\sqrt{x+4}+2)}{(x+4)-4} = (x+3)(\\sqrt{x+4}+2)$ \\\\ [3단계: 재대입] $(0+3)(\\sqrt{4}+2) = 3 \\times 4 = 12$ $\\therefore$ **12**"
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
      { "no": 1, "formula": "\\lim_{x \\to \\infty} \\frac{(2x-1)(4x+1)}{x^2-x-3}" },
      { "no": 2, "formula": "\\lim_{x \\to \\infty} (\\sqrt{x^2+6x}-x)" }
    ],
    "tip": "1단계: 무한대 꼴 판정! (1)은 $\\frac{\\infty}{\\infty}$ 최고차항($x^2$) 계수 비교, (2)는 $\\infty-\\infty$ 꼴이므로 분자를 유리화한 후 최고차항으로 나누어 계산합니다.",
    "answer": "(1) 8, (2) 3",
    "solution": {
      "steps": [
        {
          "label": "(1)",
          "content": "[1단계: 꼴 판정] $\\frac{\\infty}{\\infty}$ 꼴. [2단계: 식 변형] 분자 전개 시 $8x^2-2x-1$. 분모 최고차항 $x^2$으로 분자·분모 나누기: $\\lim_{x \\to \\infty} \\frac{8-2/x-1/x^2}{1-1/x-3/x^2} = \\frac{8}{1} = 8$ $\\therefore$ **8**"
        },
        {
          "label": "(2)",
          "content": "[1단계: 꼴 판정] $\\infty-\\infty$ 꼴. [2단계: 식 변형] 분자 유리화: $\\frac{(x^2+6x)-x^2}{\\sqrt{x^2+6x}+x} = \\frac{6x}{\\sqrt{x^2+6x}+x}$ \\\\ 분모·분자를 $x$로 나누면 $\\lim_{x \\to \\infty} \\frac{6}{\\sqrt{1+6/x}+1} = \\frac{6}{1+1} = 3$ $\\therefore$ **3**"
        }
      ]
    }
  },
  {
    "id": 7,
    "source": "교과서 28p 중단원 5번",
    "tag": "표준",
    "question": "함수 $y=f(x)$에 대하여 다음 극한값을 구하시오. (단, $f(x)$의 우극한, 좌극한을 조사)",
    "formula": "",
    "subQuestions": [
      { "no": 1, "formula": "\\lim_{x \\to 0+} f(x)" },
      { "no": 2, "formula": "\\lim_{x \\to 1-} f(x) \\text{ 및 } \\lim_{x \\to -1} f(x)" }
    ],
    "tip": "우극한은 주어진 값의 오른쪽에서 다가갈 때의 목표값, 좌극한은 왼쪽에서 다가갈 때의 목표값을 그래프에서 읽어 대입합니다.",
    "answer": "(1) -1, (2) 0, 0",
    "solution": {
      "steps": [
        {
          "label": "(1)",
          "content": "[그래프 우극한] $x$가 $0$보다 크면서 $0$에 한없이 가까워질 때 $y$값은 $-1$에 수렴: $\\lim_{x \\to 0+} f(x) = -1$ $\\therefore$ **-1**"
        },
        {
          "label": "(2)",
          "content": "[그래프 좌/우극한] $\\lim_{x \\to 1-} f(x) = 0$ 이고, $x \\to -1$에서는 우극한과 좌극한이 모두 $0$으로 일치하므로 $\\lim_{x \\to -1} f(x) = 0$ $\\therefore$ **0, 0**"
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
    "tip": "극한값이 존재하려면 우극한과 좌극한이 같아야 합니다! $x=2$를 각각의 구간 식에 대입하여 두 결과가 같다고 놓고 방정식을 푸세요.",
    "answer": "1",
    "solution": {
      "steps": [
        {
          "label": "[1단계: 선 대입 (우극한)]",
          "content": "$x \\to 2+$: $\\lim_{x \\to 2+} (2x^2-4x+3) = 2(2^2)-4(2)+3 = 8-8+3 = 3$"
        },
        {
          "label": "[2단계: 선 대입 (좌극한)]",
          "content": "$x \\to 2-$: $\\lim_{x \\to 2-} (x+k) = 2+k$"
        },
        {
          "label": "[3단계: 일치 조건 & k 결정]",
          "content": "극한값이 존재하므로 우극한 $=$ 좌극한: $2+k = 3 \\implies k = 1$ $\\therefore$ **1**"
        }
      ]
    }
  }
]

print("Base problems prepared:", len(problems))
