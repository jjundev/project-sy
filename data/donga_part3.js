window.WORKSHEET_DATA = {
  "meta": {
    "title": "수학 II / 미적분 I - III. 미분의 활용",
    "subtitle": "동아출판 교과서 실전 핵심 (스스로 해결하기 + 단원 마무리 전수 수록)",
    "student": "동아",
    "date": "2026. 09. 17 (목)",
    "cheer": "동아의 완벽한 미분 활용 정복과 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "동아 교과서 82p 스스로 해결하기 1번 (1), (2)",
      "tag": "기본",
      "question": "다음 함수에 대하여 주어진 구간에서 롤의 정리를 만족시키는 실수 $c$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=-x^2-4x \\quad [-4, 0]"
        },
        {
          "no": 2,
          "formula": "f(x)=x^3+3x^2 \\quad [-2, 1]"
        }
      ],
      "tip": "롤의 정리는 닫힌구간 $[a, b]$에서 연속이고 열린구간 $(a, b)$에서 미분가능하며 $f(a)=f(b)$일 때 $f'(c)=0$인 $c$가 $(a, b)$에 적어도 하나 존재하는 성질입니다.",
      "answer": "(1) $-2$, (2) $0$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 도함수 및 c 구하기] $f'(x)=-2x-4=0 \\implies c=-2$. $-2 \\in (-4, 0)$이므로 $\\therefore$ **$-2$**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 조건 확인 및 c 구하기] $f(-2)=4, f(1)=4$로 같고 $f'(x)=3x^2+6x=3x(x+2)=0$. 열린구간 $(-2, 1)$에 속하는 것은 $c=0$ $\\therefore$ **$0$**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "동아 교과서 82p 스스로 해결하기 2번 (1), (2)",
      "tag": "기본",
      "question": "다음 함수에 대하여 주어진 구간에서 평균값 정리를 만족시키는 실수 $c$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=-x^2+6x \\quad [-2, 0]"
        },
        {
          "no": 2,
          "formula": "f(x)=x^3-3x^2+x \\quad [0, 3]"
        }
      ],
      "tip": "평균값 정리 공식은 $\\frac{f(b)-f(a)}{b-a}=f'(c)$입니다. 두 점 사이의 평균변화율을 구한 후 도함수 $f'(x)$와 같아지는 $c$를 열린구간에서 찾으세요.",
      "answer": "(1) $-1$, (2) $2$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 평균변화율과 도함수] $\\frac{f(0)-f(-2)}{0-(-2)} = \\frac{0-(-16)}{2}=8$. $f'(x)=-2x+6=8 \\implies c=-1 \\in (-2, 0)$ $\\therefore$ **$-1$**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 평균변화율과 도함수] $\\frac{f(3)-f(0)}{3-0} = \\frac{3-0}{3}=1$. $f'(x)=3x^2-6x+1=1 \\implies 3x(x-2)=0$. 열린구간 $(0, 3)$에 속하는 것은 $c=2$ $\\therefore$ **$2$**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "동아 교과서 82p 스스로 해결하기 3번",
      "tag": "핵심유형",
      "question": "함수 $f(x)=x^3-kx^2+4$에 대하여 닫힌구간 $[0, k]$에서 롤의 정리를 만족시키는 실수 $c$의 값이 $1$일 때, 양수 $k$의 값을 구하시오.",
      "formula": "",
      "tip": "롤의 정리 조건에서 $f(0)=f(k)$이고 $f'(1)=0$이어야 합니다. 도함수에 $x=1$을 대입하여 $k$의 방정식을 세우세요.",
      "answer": "$\\frac{3}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수에 c=1 대입]",
            "content": "$f'(x)=3x^2-2kx$이므로 $f'(1)=3-2k=0 \\implies 2k=3 \\implies k=\\frac{3}{2}$."
          },
          {
            "label": "[2단계: 롤의 정리 구간 확인]",
            "content": "$k=\\frac{3}{2}$일 때 $f(0)=4, f\\left(\\frac{3}{2}\\right)=4$로 성립하며 $c=1 \\in \\left(0, \\frac{3}{2}\\right)$을 만족합니다. $\\therefore$ **$\\frac{3}{2}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 4,
      "source": "동아 교과서 82p 스스로 해결하기 4번",
      "tag": "핵심유형",
      "question": "함수 $f(x)=x^3-2x^2-4x+1$에 대하여 닫힌구간 $[-a, a]$에서 롤의 정리를 만족시키는 실수 $c$의 값을 구하시오. (단, $a>0$)",
      "formula": "",
      "tip": "롤의 정리가 성립하려면 $f(-a)=f(a)$이어야 하므로 먼저 이를 대입하여 $a$를 구하고, $f'(c)=0$인 $c \\in (-a, a)$를 찾으세요.",
      "answer": "$-\\frac{2}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f(a)=f(-a)로 a 구하기]",
            "content": "$f(a)-f(-a)=2(a^3-4a)=2a(a^2-4)=0$. $a>0$이므로 $a=2$, 구간은 $[-2, 2]$."
          },
          {
            "label": "[2단계: f'(c)=0인 c 구하기]",
            "content": "$f'(x)=3x^2-4x-4=(3x+2)(x-2)=0 \\implies x=-\\frac{2}{3}$ 또는 $x=2$. 열린구간 $(-2, 2)$에 속하는 것은 $c=-\\frac{2}{3}$ $\\therefore$ **$-\\frac{2}{3}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 5,
      "source": "동아 교과서 82p 스스로 해결하기 5번",
      "tag": "실생활",
      "question": "제한 속도가 $80\\text{ km/h}$인 직선 도로가 있다. 이 도로를 달리는 자동차가 어느 순간이라도 $80\\text{ km/h}$의 속도를 초과하면 제한 속도를 위반한 것으로 간주한다. 어떤 자동차가 $12$분 동안 이동 거리가 $18\\text{ km}$일 때, 이 자동차가 제한 속도를 준수하였는지 평균값 정리를 이용하여 판단하시오.",
      "formula": "",
      "tip": "시간을 시간(h) 단위로 환산($12$분 = $1/5$시간)하고, 평균속도 공식과 구간에서의 평균값 정리를 적용하세요.",
      "answer": "제한 속도를 지키지 않았다. (순간속도 $90\\text{ km/h}$인 시각 존재)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 평균속도 계산]",
            "content": "$12\\text{분} = \\frac{1}{5}\\text{시간}$이므로 평균속도는 $\\frac{18}{\\frac{1}{5}} = 90\\text{ km/h}$."
          },
          {
            "label": "[2단계: 평균값 정리 적용]",
            "content": "이동거리 함수 $f(t)$가 연속이고 미분가능하므로 평균값 정리에 의해 순간속도 $f'(c)=90\\text{ km/h}$인 $c$가 열린구간 $\\left(0, \\frac{1}{5}\\right)$에 적어도 하나 존재합니다."
          },
          {
            "label": "[3단계: 결론]",
            "content": "순간속도가 $90\\text{ km/h}$로 제한 속도 $80\\text{ km/h}$를 초과하는 순간이 존재하므로 **제한 속도를 지키지 않았습니다.**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 6,
      "source": "동아 교과서 82p 스스로 해결하기 6번",
      "tag": "서술형",
      "question": "다항함수 $f(x)$가 조건 (가) $f(0)=0, f(2)=4$, (나) $0<x<2$인 모든 실수 $x$에 대하여 $f'(x) \\ge 2$를 만족시킬 때, $f(1)$의 값을 구하시오.",
      "formula": "",
      "tip": "구간 $[0, t]$와 $[t, 2]$에서 각각 평균값 정리를 적용하여 부등식 $f(t) \\ge 2t$와 $f(t) \\le 2t$를 유도하세요.",
      "answer": "(단계1) $\\frac{f(t)-f(0)}{t} \\ge 2$, (단계2) $\\frac{f(2)-f(t)}{2-t} \\ge 2$, (단계3) $2$",
      "solution": {
        "steps": [
          {
            "label": "[단계1: [0, t]에서 평균값 정리]",
            "content": "닫힌구간 $[0, t]$에서 평균값 정리에 의해 $\\frac{f(t)-f(0)}{t}=f'(c_1) \\ge 2$이므로 $f(t) \\ge 2t$."
          },
          {
            "label": "[단계2: [t, 2]에서 평균값 정리]",
            "content": "닫힌구간 $[t, 2]$에서 평균값 정리에 의해 $\\frac{f(2)-f(t)}{2-t}=f'(c_2) \\ge 2$이므로 $4-f(t) \\ge 2(2-t) \\implies f(t) \\le 2t$."
          },
          {
            "label": "[단계3: f(1) 값 계산]",
            "content": "따라서 $0<t<2$에서 $f(t)=2t$이므로 $f(1)=2(1)=2$ $\\therefore$ **$2$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 7,
      "source": "동아 교과서 86p 스스로 해결하기 1번 (1), (2)",
      "tag": "기본",
      "question": "다음 함수의 증가와 감소를 조사하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=x^3-6x^2+9x"
        },
        {
          "no": 2,
          "formula": "f(x)=-x^3+3x+4"
        }
      ],
      "tip": "$f'(x)>0$이면 증가, $f'(x)<0$이면 감소입니다. 도함수를 인수분해하여 부호 변화 구간을 구하세요.",
      "answer": "(1) 구간 $(-\\infty, 1]$, $[3, \\infty)$에서 증가, $[1, 3]$에서 감소, (2) 구간 $(-\\infty, -1]$, $[1, \\infty)$에서 감소, $[-1, 1]$에서 증가",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 증감 조사] $f'(x)=3x^2-12x+9=3(x-1)(x-3)$. $x \\le 1, x \\ge 3$에서 $f'(x) \\ge 0$ (증가), $1 \\le x \\le 3$에서 $f'(x) \\le 0$ (감소) $\\therefore$ **구간 $(-\\infty, 1]$, $[3, \\infty)$에서 증가, $[1, 3]$에서 감소**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 증감 조사] $f'(x)=-3x^2+3=-3(x+1)(x-1)$. $-1 \\le x \\le 1$에서 $f'(x) \\ge 0$ (증가), $x \\le -1, x \\ge 1$에서 $f'(x) \\le 0$ (감소) $\\therefore$ **구간 $(-\\infty, -1]$, $[1, \\infty)$에서 감소, $[-1, 1]$에서 증가**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "동아 교과서 86p 스스로 해결하기 2번",
      "tag": "기본",
      "question": "함수 $f(x)=-x^3-x^2+x+2$가 증가하는 구간이 $[a, b]$일 때, $b-a$의 값을 구하시오.",
      "formula": "",
      "tip": "미분하여 도함수 $f'(x) \\ge 0$인 구간을 구하여 $a, b$를 결정하세요.",
      "answer": "$\\frac{4}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 부호 판정]",
            "content": "$f'(x)=-3x^2-2x+1=-(3x-1)(x+1) \\ge 0 \\implies (3x-1)(x+1) \\le 0$."
          },
          {
            "label": "[2단계: 구간 및 차 계산]",
            "content": "증가하는 구간은 $\\left[-1, \\frac{1}{3}\\right]$이므로 $a=-1, b=\\frac{1}{3}$. 따라서 $b-a = \\frac{1}{3}-(-1) = \\frac{4}{3}$ $\\therefore$ **$\\frac{4}{3}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 9,
      "source": "동아 교과서 86p 스스로 해결하기 3번",
      "tag": "핵심유형",
      "question": "함수 $f(x)=x^3+3ax-2$가 닫힌구간 $[-1, 3]$에서 감소하도록 하는 실수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "tip": "구간 $[-1, 3]$의 모든 $x$에 대하여 $f'(x) \\le 0$이어야 합니다. 이차함수의 최댓값이 $0$ 이하가 되도록 하세요.",
      "answer": "$a \\le -9$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 전개]",
            "content": "$f'(x)=3x^2+3a$. 아래로 볼록한 이차함수이므로 구간 $[-1, 3]$에서 최댓값은 $x=3$에서 발생합니다."
          },
          {
            "label": "[2단계: 최댓값 조건]",
            "content": "$f'(3)=3(9)+3a \\le 0 \\implies 27+3a \\le 0 \\implies a \\le -9$ $\\therefore$ **$a \\le -9$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 10,
      "source": "동아 교과서 86p 스스로 해결하기 4번",
      "tag": "핵심유형",
      "question": "함수 $f(x)=x^3+ax^2+\\left(a+\\frac{4}{3}\\right)x-1$이 임의의 두 실수 $x_1, x_2$ ($x_1 < x_2$)에 대하여 항상 $f(x_1) < f(x_2)$를 만족시키도록 하는 실수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "tip": "실수 전체에서 증가하는 함수이므로 모든 실수 $x$에 대해 미분한 도함수 $f'(x) \\ge 0$이어야 합니다. 판별식 공식 $D \\le 0$을 적용하세요.",
      "answer": "$-1 \\le a \\le 4$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 및 판별식]",
            "content": "$f'(x)=3x^2+2ax+\\left(a+\\frac{4}{3}\\right) \\ge 0$이어야 하므로 $\\frac{D}{4}=a^2-3\\left(a+\\frac{4}{3}\\right) = a^2-3a-4 \\le 0$."
          },
          {
            "label": "[2단계: 부등식 풀기]",
            "content": "$(a-4)(a+1) \\le 0 \\implies -1 \\le a \\le 4$ $\\therefore$ **$-1 \\le a \\le 4$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 11,
      "source": "동아 교과서 86p 스스로 해결하기 5번",
      "tag": "실생활",
      "question": "어느 지역의 온도를 측정한 지 $x$시간 후의 온도를 $f(x)\\,{}^\\circ\\text{C}$라고 할 때, $f(x)=\\frac{1}{96}x^4-\\frac{1}{9}x^3+\\frac{1}{4}x^2+5$ ($0 \\le x \\le 8$)를 만족시킨다고 한다. 이 지역의 온도를 측정하는 동안 온도가 감소하는 시간은 몇 시간인지 구하시오.",
      "formula": "",
      "tip": "온도가 감소하는 시간은 $f'(x)<0$인 구간의 길이를 구하는 것입니다. 도함수를 미분하고 인수분해하세요.",
      "answer": "$4$시간",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 인수분해]",
            "content": "$f'(x)=\\frac{1}{24}x^3-\\frac{1}{3}x^2+\\frac{1}{2}x = \\frac{1}{24}x(x-2)(x-6)$."
          },
          {
            "label": "[2단계: 감소 구간 및 시간]",
            "content": "$0 \\le x \\le 8$에서 $f'(x)<0$인 범위는 $2 < x < 6$이므로 감소하는 시간은 $6-2=4$시간 $\\therefore$ **$4$시간**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 12,
      "source": "동아 교과서 86p 스스로 해결하기 6번",
      "tag": "서술형",
      "question": "함수 $f(x)=x^3+ax^2+3$이 다음 조건을 만족시킬 때, $f(1)$의 최솟값을 구하시오. (단, $a$는 상수)\n(가) 닫힌구간 $[-2, 0]$에서 감소한다.\n(나) 닫힌구간 $[1, 2]$에서 증가한다.",
      "formula": "",
      "tip": "미분한 도함수에 대해 (가)에서 $f'(-2) \\le 0, f'(0) \\le 0$, (나)에서 $f'(1) \\ge 0, f'(2) \\ge 0$을 대입하여 $a$의 공통 범위를 구하세요.",
      "answer": "(단계1) $a \\ge 3$, (단계2) $a \\ge -\\frac{3}{2}$, (단계3) $7$",
      "solution": {
        "steps": [
          {
            "label": "[단계1: 조건 (가) 해석]",
            "content": "$f'(x)=3x^2+2ax$. $[-2, 0]$에서 감소하려면 $f'(-2)=12-4a \\le 0 \\implies a \\ge 3$."
          },
          {
            "label": "[단계2: 조건 (나) 해석]",
            "content": "$[1, 2]$에서 증가하려면 $f'(1)=3+2a \\ge 0 \\implies a \\ge -\\frac{3}{2}$. 공통 범위는 $a \\ge 3$."
          },
          {
            "label": "[단계3: f(1) 최솟값 계산]",
            "content": "$f(1)=1+a+3=a+4$이므로 $a=3$일 때 최솟값 $3+4=7$ $\\therefore$ **$7$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 13,
      "source": "동아 교과서 91p 스스로 해결하기 1번 (1), (2)",
      "tag": "기본",
      "question": "다음 함수의 극값을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=\\frac{1}{3}x^3-x+3"
        },
        {
          "no": 2,
          "formula": "f(x)=x^4-4x^3+4"
        }
      ],
      "tip": "미분하여 도함수 $f'(x)=0$의 실근에서 좌우 부호 변화를 조사하여 양에서 음이면 극대, 음에서 양이면 극소입니다.",
      "answer": "(1) 극댓값: $\\frac{11}{3}$, 극솟값: $\\frac{7}{3}$, (2) 극솟값: $-23$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 극값 구하기] $f'(x)=x^2-1=0 \\implies x=\\pm 1$. $x=-1$에서 극댓값 $f(-1)=\\frac{11}{3}$, $x=1$에서 극솟값 $f(1)=\\frac{7}{3}$ $\\therefore$ **극댓값: $\\frac{11}{3}$, 극솟값: $\\frac{7}{3}$**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 극값 구하기] $f'(x)=4x^2(x-3)=0$. $x=0$은 변곡점(부호변화 없음), $x=3$에서 극솟값 $f(3)=81-108+4=-23$ $\\therefore$ **극솟값: $-23$**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "동아 교과서 91p 스스로 해결하기 2번",
      "tag": "핵심유형",
      "question": "함수 $f(x)=-x^3-\\frac{9}{2}x^2+ax+b$가 $x=-1$에서 극댓값 $0$을 가질 때, 두 상수 $a, b$의 값을 각각 구하시오.",
      "formula": "",
      "tip": "$x=-1$에서 극값을 가지므로 미분계수 $f'(-1)=0$이고, 극댓값이 $0$이므로 대입한 함숫값 $f(-1)=0$입니다.",
      "answer": "$a=-6$, $b=-\\frac{5}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: f'(-1)=0으로 a 구하기]",
            "content": "$f'(x)=-3x^2-9x+a$. $f'(-1)=-3+9+a=0 \\implies a=-6$."
          },
          {
            "label": "[2단계: f(-1)=0으로 b 구하기]",
            "content": "$f(-1)=1-\\frac{9}{2}+6+b=\\frac{5}{2}+b=0 \\implies b=-\\frac{5}{2}$ $\\therefore$ **$a=-6$, $b=-\\frac{5}{2}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 15,
      "source": "동아 교과서 91p 스스로 해결하기 3번",
      "tag": "핵심유형",
      "question": "함수 $f(x)=x^3+ax^2+\\left(a-\\frac{2}{3}\\right)x$가 극값을 갖도록 하는 실수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "tip": "삼차함수가 극값을 가지려면 미분한 도함수 $f'(x)=0$이 서로 다른 두 실근을 가져야 하므로 판별식 $D>0$이어야 합니다.",
      "answer": "$a < 1$ 또는 $a > 2$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 판별식 조건]",
            "content": "$f'(x)=3x^2+2ax+\\left(a-\\frac{2}{3}\\right)=0$이 서로 다른 두 실근을 가져야 하므로 $\\frac{D}{4}=a^2-3\\left(a-\\frac{2}{3}\\right)=a^2-3a+2>0$."
          },
          {
            "label": "[2단계: 부등식 풀기]",
            "content": "$(a-1)(a-2)>0 \\implies a < 1$ 또는 $a > 2$ $\\therefore$ **$a < 1$ 또는 $a > 2$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 16,
      "source": "동아 교과서 91p 스스로 해결하기 4번",
      "tag": "핵심유형",
      "question": "함수 $f(x)=-x^3-3x^2+9x+k$의 극댓값과 극솟값의 합이 $0$이 되도록 하는 상수 $k$의 값을 구하시오.",
      "formula": "",
      "tip": "미분하여 도함수의 두 근에서 극댓값과 극솟값을 구하고 두 값의 합이 $0$이 되는 방정식을 푸세요.",
      "answer": "$11$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 극점 찾기]",
            "content": "$f'(x)=-3x^2-6x+9=-3(x+3)(x-1)=0 \\implies x=-3$ 또는 $x=1$."
          },
          {
            "label": "[2단계: 극값 합 계산]",
            "content": "극댓값 $f(1)=5+k$, 극솟값 $f(-3)=-27+k$. 합은 $(5+k)+(-27+k)=2k-22=0 \\implies k=11$ $\\therefore$ **$11$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 17,
      "source": "동아 교과서 91p 스스로 해결하기 5번",
      "tag": "실생활",
      "question": "어느 지역의 시각 $x$에서의 해수면의 높이 $f(x)\\text{ cm}$는 $f(x)=-\\frac{1}{18}x^2(x-12)^2+130$ ($0 < x < 12$)를 만족시킨다고 한다. 이 지역의 해수면의 높이는 $x=a$일 때, 극솟값 $m\\text{ cm}$를 갖는다. $a+m$의 값을 구하시오.",
      "formula": "",
      "tip": "도함수 $f'(x)=0$을 인수분해하여 $0<x<12$ 사이에서 극솟점을 찾고 극솟값을 계산하세요.",
      "answer": "$64$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 극솟점 a 찾기]",
            "content": "$f'(x)=-\\frac{2}{9}x(x-12)(x-6)=0$. $0<x<12$에서 부호가 음에서 양으로 바뀌는 극솟점은 $x=6$ ($a=6$)."
          },
          {
            "label": "[2단계: 극솟값 m 및 a+m 계산]",
            "content": "$m=f(6)=-\\frac{1}{18}(36)(36)+130=-72+130=58$. 따라서 $a+m=6+58=64$ $\\therefore$ **$64$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 18,
      "source": "동아 교과서 91p 스스로 해결하기 6번",
      "tag": "서술형",
      "question": "함수 $f(x)=x^3-3(a+1)x^2+3a(a+2)x$의 극댓값이 $0$이고 $f'(2)>0$일 때, 실수 $a$의 값과 함수 $f(x)$의 극솟값을 각각 구하시오.",
      "formula": "",
      "tip": "도함수를 인수분해하면 $f'(x)=3(x-a)(x-(a+2))$가 됩니다. $a < a+2$이므로 $x=a$에서 극대, $x=a+2$에서 극소입니다.",
      "answer": "(단계1) $x=a$ 또는 $x=a+2$, (단계2) $a=0, -3$, (단계3) $a=-3$, 극솟값: $-4$",
      "solution": {
        "steps": [
          {
            "label": "[단계1: f'(x)=0의 해]",
            "content": "$f'(x)=3(x-a)(x-(a+2))=0 \\implies x=a$ 또는 $x=a+2$."
          },
          {
            "label": "[단계2: 극댓값=0으로 a 구하기]",
            "content": "$a<a+2$이므로 $x=a$에서 극대. $f(a)=a^2(a+3)=0 \\implies a=0$ 또는 $a=-3$."
          },
          {
            "label": "[단계3: f'(2)>0 확인 및 극솟값]",
            "content": "$f'(2)=-3a(2-a)>0$을 만족하는 것은 $a=-3$. 이때 극솟값은 $x=-1$에서 $f(-1)=-4$ $\\therefore$ **$a=-3$, 극솟값: $-4$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 19,
      "source": "동아 교과서 96p 스스로 해결하기 1번 (1), (2)",
      "tag": "기본",
      "question": "다음 삼차·사차함수의 극값과 증감을 조사하여 그래프의 핵심 특징을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=x^3-6x+2"
        },
        {
          "no": 2,
          "formula": "f(x)=-2x^4+4x^2+3"
        }
      ],
      "tip": "미분하여 도함수 $f'(x)=0$을 풀어 극댓값, 극솟값 및 절편을 구하세요.",
      "answer": "(1) 극댓값: $4\\sqrt{2}+2$, 극솟값: $-4\\sqrt{2}+2$, (2) 극댓값: $5$, 극솟값: $3$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 극값] $f'(x)=3(x^2-2)=0 \\implies x=\\pm\\sqrt{2}$. $x=-\\sqrt{2}$에서 극댓값 $4\\sqrt{2}+2$, $x=\\sqrt{2}$에서 극솟값 $-4\\sqrt{2}+2$ $\\therefore$ **극댓값: $4\\sqrt{2}+2$, 극솟값: $-4\\sqrt{2}+2$**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 극값] $f'(x)=-8x(x+1)(x-1)=0$. $x=\\pm 1$에서 극댓값 $5$, $x=0$에서 극솟값 $3$ $\\therefore$ **극댓값: $5$, 극솟값: $3$**"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "동아 교과서 96p 스스로 해결하기 2번 (1), (2)",
      "tag": "기본",
      "question": "주어진 구간에서 다음 함수의 최댓값과 최솟값을 각각 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "f(x)=x^3-6x^2+9x-2 \\quad [0, 5]"
        },
        {
          "no": 2,
          "formula": "f(x)=x^4-6x^2+3 \\quad [-2, 1]"
        }
      ],
      "tip": "구간 안의 극값들과 양 끝점의 함숫값을 모두 계산하여 가장 큰 값이 최댓값, 가장 작은 값이 최솟값입니다.",
      "answer": "(1) 최댓값: $18$, 최솟값: $-2$, (2) 최댓값: $3$, 최솟값: $-6$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 값 비교] $f'(x)=3(x-1)(x-3)=0$. $f(0)=-2, f(1)=2, f(3)=-2, f(5)=18$. 최댓값 18, 최솟값 -2 $\\therefore$ **최댓값: $18$, 최솟값: $-2$**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 값 비교] $f'(x)=4x(x^2-3)=0$. 구간 $[-2, 1]$에서 $f(-2)=-5, f(-\\sqrt{3})=-6, f(0)=3, f(1)=-2$. 최댓값 3, 최솟값 -6 $\\therefore$ **최댓값: $3$, 최솟값: $-6$**"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "동아 교과서 96p 스스로 해결하기 3번",
      "tag": "핵심유형",
      "question": "닫힌구간 $[-2, 2]$에서 정의된 함수 $f(x)=x^3-3x^2+a$의 최댓값이 $24$일 때, 함수 $f(x)$의 최솟값을 구하시오. (단, $a$는 상수)",
      "formula": "",
      "tip": "미분하여 도함수 $f'(x)=3x(x-2)=0$을 구하고, 극값과 닫힌구간 끝점의 함숫값을 대입하여 비교하세요.",
      "answer": "$4$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 최댓값으로 a 구하기]",
            "content": "$f'(x)=3x(x-2)=0$. $f(-2)=a-20, f(0)=a, f(2)=a-4$ 중 최댓값은 $f(0)=a=24$."
          },
          {
            "label": "[2단계: 최솟값 계산]",
            "content": "최솟값은 $f(-2)=a-20=24-20=4$ $\\therefore$ **$4$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 22,
      "source": "동아 교과서 96p 스스로 해결하기 4번",
      "tag": "실생활",
      "question": "밑면의 반지름의 길이가 $6\\text{ cm}$이고, 높이가 $12\\text{ cm}$인 원뿔에 내접하는 원기둥 중에서 부피가 최대인 원기둥의 높이를 구하시오.",
      "formula": "",
      "tip": "원기둥 밑면 반지름 $r$에 대해 부피 공식 $V(r)=\\pi r^2(12-2r)$을 세운 뒤, 미분하여 극댓값을 구하세요.",
      "answer": "$4\\text{ cm}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 부피 식 세우기]",
            "content": "반지름 $r$ ($0<r<6$)일 때 닮음에 의해 높이는 $h=12-2r$. 부피 $V(r)=\\pi r^2(12-2r)=2\\pi(6r^2-r^3)$."
          },
          {
            "label": "[2단계: 극대 및 높이 계산]",
            "content": "$V'(r)=6\\pi r(4-r)=0 \\implies r=4$에서 최대. 높이는 $h=12-2(4)=4\\text{ cm}$ $\\therefore$ **$4\\text{ cm}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 23,
      "source": "동아 교과서 96p 스스로 해결하기 5번",
      "tag": "핵심유형",
      "question": "삼차함수 $f(x)$의 도함수 $y=f'(x)$와 사차함수 $g(x)$의 도함수 $y=g'(x)$의 그래프가 주어진다. $h(x)=f(x)-g(x)$일 때 [보기]에서 옳은 것만을 고르시오.\n[보기]\nㄱ. $h(b)=0$이면 $h(c)<0$이다.\nㄴ. 함수 $h(x)$가 $x=t$에서 극값을 갖도록 하는 실수 $t$의 개수는 $3$이다.\nㄷ. 닫힌구간 $[d, e]$에서 함수 $h(x)$의 최댓값은 $h(d)$이다.",
      "formula": "",
      "tip": "미분한 도함수들의 차 $h'(x)=f'(x)-g'(x)$의 부호를 교점 $b, d, e$를 기준으로 판정하세요.",
      "answer": "ㄱ, ㄴ",
      "solution": {
        "steps": [
          {
            "label": "[1단계: ㄱ 판정]",
            "content": "$b<x<d$에서 $g'(x)>f'(x)$이므로 $h'(x)<0$ (감소). $h(b)=0$이면 $h(c)<h(b)=0$ (참)."
          },
          {
            "label": "[2단계: ㄴ, ㄷ 판정]",
            "content": "ㄴ. $h'(x)=0$인 $b, d, e$ 좌우에서 부호가 바뀌므로 극값 개수는 3 (참).\nㄷ. $[d, e]$에서 $h'(x)>0$ (증가)하므로 최댓값은 $h(e)$ (거짓) $\therefore$ **ㄱ, ㄴ**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 24,
      "source": "동아 교과서 96p 스스로 해결하기 6번",
      "tag": "서술형",
      "question": "좌표평면 위의 두 점 $\\text{A}(0, 8), \\text{B}(18, 0)$과 곡선 $y=-x^2+1$ 위의 점 $\\text{P}$에 대하여 $\\overline{\\text{AP}}^2+\\overline{\\text{BP}}^2$의 최솟값을 구하시오.",
      "formula": "",
      "tip": "$\\text{P}(t, -t^2+1)$로 두고 거리 제곱의 합을 $t$의 4차 함수로 나타낸 뒤, 미분하여 극솟값을 구하세요.",
      "answer": "(단계1) $2t^4+14t^2-36t+374$, (단계2) $t=1$에서 극소이자 최소, (단계3) $354$",
      "solution": {
        "steps": [
          {
            "label": "[단계1: 거리 제곱의 합 식]",
            "content": "$\\overline{\\text{AP}}^2+\\overline{\\text{BP}}^2 = t^2+(-t^2-7)^2+(t-18)^2+(-t^2+1)^2 = 2t^4+14t^2-36t+374$."
          },
          {
            "label": "[단계2: 도함수와 증감표]",
            "content": "$f'(t)=8t^3+28t-36=4(t-1)(2t^2+2t+9)=0 \\implies t=1$에서 유일한 극소이자 최솟값."
          },
          {
            "label": "[단계3: 최솟값 계산]",
            "content": "$t=1$ 대입: $2(1)+14(1)-36(1)+374=354$ $\\therefore$ **$354$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 25,
      "source": "동아 교과서 101p 스스로 해결하기 1번 (1), (2)",
      "tag": "기본",
      "question": "다음 방정식의 서로 다른 실근의 개수를 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "x^3-3x+\\sqrt{2}=0"
        },
        {
          "no": 2,
          "formula": "x^4-8x^2+1=0"
        }
      ],
      "tip": "미분하여 함수 그래프의 극값의 부호를 조사하고 $x$축과의 교점 개수를 구하세요.",
      "answer": "(1) $3$, (2) $4$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[1단계: 극값 부호 판정] $f'(x)=3(x^2-1)=0$. 극댓값 $f(-1)=2+\\sqrt{2}>0$, 극솟값 $f(1)=-2+\\sqrt{2}<0$. 부호가 다르므로 실근 3개 $\\therefore$ **$3$**"
          },
          {
            "label": "(2)",
            "content": "[2단계: 극값 부호 판정] $f'(x)=4x(x^2-4)=0$. $f(0)=1>0, f(\\pm 2)=-15<0$. $W$자형으로 $x$축과 4번 만나므로 실근 4개 $\\therefore$ **$4$**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "동아 교과서 101p 스스로 해결하기 2번",
      "tag": "기본",
      "question": "방정식 $3x^3-9x-k=0$의 서로 다른 실근이 오직 2개가 되도록 하는 모든 실수 $k$의 값의 합을 구하시오.",
      "formula": "",
      "tip": "삼차방정식이 오직 2개의 실근을 가지려면 미분한 극값 중 하나가 $0$이어야 하므로 $($극댓값$)\\times($극솟값$)=0$입니다.",
      "answer": "$0$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 분리 및 극값]",
            "content": "$g(x)=3x^3-9x=k$. $g'(x)=9x^2-9=0 \\implies x=\\pm 1$. $g(-1)=6, g(1)=-6$."
          },
          {
            "label": "[2단계: k의 값 및 합]",
            "content": "실근이 2개이려면 $k=6$ 또는 $k=-6$. 모든 $k$의 합은 $6+(-6)=0$ $\\therefore$ **$0$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 27,
      "source": "동아 교과서 101p 스스로 해결하기 3번",
      "tag": "핵심유형",
      "question": "두 곡선 $y=2x^3-3ax^2+2x, y=x^3+2x-4$가 서로 다른 세 점에서 만나도록 하는 양수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "tip": "두 식을 같다고 놓고 $x^3-3ax^2+4=0$으로 정리한 뒤, 미분하여 극값을 구해 $($극댓값$)\\times($극솟값$)<0$ 조건을 적용하세요.",
      "answer": "$a > 1$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 식 정리 및 극점]",
            "content": "$x^3-3ax^2+4=0$. $f'(x)=3x(x-2a)=0 \\implies x=0, 2a$ ($a>0$)."
          },
          {
            "label": "[2단계: 극값 곱 음수 조건]",
            "content": "$f(0)=4>0$이므로 $f(2a)=-4a^3+4 < 0 \\implies a^3>1 \\implies a > 1$ $\\therefore$ **$a > 1$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 28,
      "source": "동아 교과서 101p 스스로 해결하기 4번",
      "tag": "서술형",
      "question": "모든 실수 $x$에 대하여 부등식 $3x^4+18x^2 \\ge 16x^3-27$이 성립함을 보이시오.",
      "formula": "",
      "tip": "한쪽으로 이항하여 $f(x)=3x^4-16x^3+18x^2+27$로 두고, 미분하여 $f(x)$의 최솟값이 $0$ 이상임을 보이세요.",
      "answer": "최솟값 $f(3)=0$이므로 모든 실수 $x$에 대하여 $f(x) \\ge 0$이 성립한다.",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 이항 및 미분]",
            "content": "$f(x)=3x^4-16x^3+18x^2+27$. $f'(x)=12x(x-1)(x-3)=0$."
          },
          {
            "label": "[2단계: 최솟값 확인 및 결론]",
            "content": "$f(0)=27, f(1)=32, f(3)=0$. 최솟값이 $f(3)=0$이므로 모든 실수 $x$에 대하여 $f(x) \\ge 0$이 성립합니다."
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 29,
      "source": "동아 교과서 101p 스스로 해결하기 5번",
      "tag": "심화",
      "question": "두 함수 $f(x)=3x^4-x+1, g(x)=4x^3-x+k$일 때, 모든 실수 $x$에 대하여 부등식 $f(x)>g(x)$가 항상 성립하도록 하는 정수 $k$의 최댓값을 구하시오.",
      "formula": "",
      "tip": "$h(x)=f(x)-g(x)=3x^4-4x^3+1>k$로 변형하고, 미분하여 $h(x)$의 최솟값보다 $k$가 작아야 함을 이용하세요.",
      "answer": "$-1$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: h(x) 정의 및 최솟값]",
            "content": "$h(x)=3x^4-4x^3+1$. $h'(x)=12x^2(x-1)=0 \\implies x=1$에서 극소이자 최소. $h(1)=0$."
          },
          {
            "label": "[2단계: k의 범위 및 정수 최댓값]",
            "content": "항상 성립하려면 $k < h(1)=0$. 따라서 정수 $k$의 최댓값은 $-1$ $\\therefore$ **$-1$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 30,
      "source": "동아 교과서 101p 스스로 해결하기 6번",
      "tag": "서술형",
      "question": "실수 $k$에 대하여 점 $(4, 0)$에서 곡선 $y=x^3-3x^2+k$에 그을 수 있는 접선의 개수를 $f(k)$라고 하자. 함수 $f(k)$가 $k=t$에서 불연속이 되도록 하는 모든 실수 $t$의 값의 합을 구하시오.",
      "formula": "",
      "tip": "접점 $(a, a^3-3a^2+k)$에서의 접선 공식을 세우고 $(4, 0)$을 대입한 삼차방정식에서 극값에 해당하는 $k$의 경계를 미분으로 구하세요.",
      "answer": "(단계1) $y=(3a^2-6a)(x-a)+a^3-3a^2+k$, (단계2) $k<-16, k>11$일 때 $1$, $k=-16, 11$일 때 $2$, $-16<k<11$일 때 $3$, (단계3) $-5$",
      "solution": {
        "steps": [
          {
            "label": "[단계1: 접선의 방정식]",
            "content": "$y' = 3x^2-6x$이므로 접선은 $y=(3a^2-6a)(x-a)+a^3-3a^2+k$."
          },
          {
            "label": "[단계2: 점 대입 및 f(k) 도출]",
            "content": "$(4, 0)$ 대입: $k=2a^3-15a^2+24a$. 극값은 $a=1$에서 $11$, $a=4$에서 $-16$. 접선 개수 $f(k)$는 $k<-16, k>11$일 때 $1$, $k=-16, 11$일 때 $2$, $-16<k<11$일 때 $3$."
          },
          {
            "label": "[단계3: 불연속점 합 계산]",
            "content": "불연속점은 $t=11, -16$이므로 합은 $11+(-16)=-5$ $\\therefore$ **$-5$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 31,
      "source": "동아 교과서 106p 스스로 해결하기 1번",
      "tag": "기본",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 P의 시각 $t$에서의 위치 $x$가 $x=t^3-5t$일 때, $t=1$에서의 점 P의 속도와 가속도를 각각 구하시오.",
      "formula": "",
      "tip": "속도는 위치의 1계 도함수 $v=\\frac{dx}{dt}$, 가속도는 속도의 도함수 $a=\\frac{dv}{dt}$입니다. $t=1$을 대입하세요.",
      "answer": "속도: $-2$, 가속도: $6$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 속도와 가속도 미분]",
            "content": "$v(t)=\\frac{dx}{dt}=3t^2-5$, $a(t)=\\frac{dv}{dt}=6t$."
          },
          {
            "label": "[2단계: t=1 대입]",
            "content": "$v(1)=3-5=-2$, $a(1)=6(1)=6$ $\\therefore$ **속도: $-2$, 가속도: $6$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 32,
      "source": "동아 교과서 106p 스스로 해결하기 2번",
      "tag": "기본",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 P의 시각 $t$에서의 위치 $x$가 $x=-t^3+4t^2+12t$일 때, 점 P가 출발 후 처음으로 다시 원점을 지나는 시각 $t$에서의 점 P의 속도를 구하시오.",
      "formula": "",
      "tip": "원점을 지나는 시각은 $x=0$을 만족하는 $t>0$을 찾는 것입니다. 그 시각을 속도식에 대입하세요.",
      "answer": "$-48$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 원점 통과 시각]",
            "content": "$x=-t(t-6)(t+2)=0$. 출발 후 처음으로 원점을 지나는 시각은 $t=6$."
          },
          {
            "label": "[2단계: 속도 계산]",
            "content": "$v(t)=-3t^2+8t+12$. $t=6$ 대입 시 $v(6)=-108+48+12=-48$ $\\therefore$ **$-48$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 33,
      "source": "동아 교과서 106p 스스로 해결하기 3번",
      "tag": "기본",
      "question": "어떤 물체를 지면에서 $40\\text{ m/s}$의 속도로 지면과 수직 방향으로 쏘아 올린 물체의 시각 $t$에서의 높이 $x\\text{ m}$는 $x=40t-5t^2$이라고 할 때, 지면에 다시 도달하는 순간의 속도를 구하시오.",
      "formula": "",
      "tip": "지면에 도달할 때는 높이 $x=0$입니다. 이때의 $t>0$을 구하여 $v(t)=40-10t$에 대입하세요.",
      "answer": "$-40\\text{ m/s}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 지면 도달 시각]",
            "content": "$x=5t(8-t)=0 \\implies t=8$초."
          },
          {
            "label": "[2단계: 속도 계산]",
            "content": "$v(t)=40-10t$. $t=8$ 대입 시 $v(8)=40-80=-40\\text{ m/s}$ $\\therefore$ **$-40\\text{ m/s}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 34,
      "source": "동아 교과서 106p 스스로 해결하기 4번",
      "tag": "핵심유형",
      "question": "원점을 출발하여 수직선 위를 움직이는 두 점 P, Q의 시각 $t$에서의 위치가 각각 $f(t)=t^2-4t, g(t)=\\frac{1}{3}t^3-2t^2+3t$일 때, 두 점 P, Q가 서로 반대 방향으로 움직이는 양수 $t$의 값의 범위를 구하시오.",
      "formula": "",
      "tip": "서로 반대 방향으로 움직이므로 위치를 미분한 두 속도의 곱이 $v_P(t) \\cdot v_Q(t) < 0$이어야 합니다.",
      "answer": "$0 < t < 1$ 또는 $2 < t < 3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 속도식 유도]",
            "content": "$v_P(t)=2(t-2)$, $v_Q(t)=t^2-4t+3=(t-1)(t-3)$."
          },
          {
            "label": "[2단계: 부호 조건 및 범위]",
            "content": "$v_P(t)v_Q(t)=2(t-1)(t-2)(t-3)<0$. $t>0$이므로 $0 < t < 1$ 또는 $2 < t < 3$ $\\therefore$ **$0 < t < 1$ 또는 $2 < t < 3$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 35,
      "source": "동아 교과서 106p 스스로 해결하기 5번",
      "tag": "심화",
      "question": "두 학생 A, B가 같은 지점에서 동시에 출발하여 곧게 뻗은 길을 달리고 있다. 시각 $t$에서의 위치가 각각 $f(t)=t^2-3t, g(t)=t^3-3t^2+t$일 때, 두 학생이 처음으로 다시 만난 시각 $t$에서의 두 학생의 속도의 차와 가속도의 차를 각각 구하시오.",
      "formula": "",
      "tip": "두 학생이 다시 만나는 시각은 $f(t)=g(t)$인 양수 $t$입니다. 그 시각에서 각각의 속도와 가속도를 구하여 차의 절댓값을 구하세요.",
      "answer": "속도의 차: $0$, 가속도의 차: $4$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 만나는 시각 구하기]",
            "content": "$t^2-3t = t^3-3t^2+t \\implies t(t-2)^2=0$. 처음 만나는 시각은 $t=2$."
          },
          {
            "label": "[2단계: 속도와 가속도 차 계산]",
            "content": "속도: $f'(2)=1, g'(2)=1 \\implies |1-1|=0$.\n가속도: $f''(2)=2, g''(2)=6 \\implies |2-6|=4$ $\\therefore$ **속도의 차: $0$, 가속도의 차: $4$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 36,
      "source": "동아 교과서 106p 스스로 해결하기 6번",
      "tag": "서술형",
      "question": "키가 $1.5\\text{ m}$인 지훈이가 높이 $4.5\\text{ m}$인 가로등 바로 아래에서 출발하여 일직선으로 $1.2\\text{ m/s}$의 속도로 걷고 있다. 출발한 지 $t$초 후 가로등으로부터 그림자 끝까지의 거리를 $x\\text{ m}$라고 할 때, $t=4$일 때 그림자 끝이 움직이는 속도를 구하시오.",
      "formula": "",
      "tip": "닮음비 $4.5 : 1.5 = x : (x-1.2t)$를 이용하여 $x$를 $t$의 식으로 나타낸 후 미분하세요.",
      "answer": "(단계1) $1.2t\\text{ m}$, (단계2) $x=1.8t$, $1.8\\text{ m/s}$, (단계3) $1.8\\text{ m/s}$",
      "solution": {
        "steps": [
          {
            "label": "[단계1: 걸어간 거리 식]",
            "content": "$t$초 동안 걸어간 거리는 $1.2t\\text{ m}$."
          },
          {
            "label": "[단계2: 그림자 끝 거리 x 식과 속도]",
            "content": "닮음비: $\\frac{4.5}{1.5}=\\frac{x}{x-1.2t} \\implies 3(x-1.2t)=x \\implies 2x=3.6t \\implies x=1.8t$. 속도는 $\\frac{dx}{dt}=1.8\\text{ m/s}$."
          },
          {
            "label": "[단계3: t=4일 때의 속도]",
            "content": "속도는 상수로 일정하므로 $t=4$일 때 속도는 $1.8\\text{ m/s}$ $\\therefore$ **$1.8\\text{ m/s}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 37,
      "source": "동아 교과서 108p 단원 마무리 01번",
      "tag": "기본",
      "question": "함수 $f(x)=x^3-3x+2$에 대하여 닫힌구간 $[-1, 1]$에서 평균값 정리를 만족시키는 모든 실수 $c$의 값을 구하시오.",
      "formula": "",
      "tip": "평균변화율 공식 $\\frac{f(1)-f(-1)}{1-(-1)}$을 계산하고, 미분계수 $f'(c)$와 같아지는 구간 내의 $c$를 찾으세요.",
      "answer": "$\\pm \\frac{\\sqrt{3}}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 평균변화율 계산]",
            "content": "$\\frac{f(1)-f(-1)}{1-(-1)} = \\frac{0-4}{2} = -2$."
          },
          {
            "label": "[2단계: c 구하기]",
            "content": "$f'(x)=3x^2-3=-2 \\implies 3x^2=1 \\implies c=\\pm\\frac{\\sqrt{3}}{3} \\in (-1, 1)$ $\\therefore$ **$\\pm \\frac{\\sqrt{3}}{3}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 38,
      "source": "동아 교과서 108p 단원 마무리 02번",
      "tag": "핵심유형",
      "question": "함수 $f(x)=x^3+ax^2+bx+c$가 $x=-1$에서 극댓값을 갖고 $x=2$에서 극솟값 $0$을 가질 때, 함수 $f(x)$의 극댓값과 $f(1)$의 값을 각각 구하시오. (단, $a, b, c$는 상수)",
      "formula": "",
      "tip": "미분계수 $f'(-1)=0, f'(2)=0$ 및 함숫값 $f(2)=0$을 대입하여 연립방정식을 푸세요.",
      "answer": "극댓값: $\\frac{27}{4}$, $f(1)=\\frac{7}{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 계수 a, b, c 결정]",
            "content": "$f'(x)=3(x+1)(x-2)=3x^2-3x-6 \\implies a=-\\frac{3}{2}, b=-6$. $f(2)=8-6-12+c=0 \\implies c=10$."
          },
          {
            "label": "[2단계: 극댓값 및 f(1) 계산]",
            "content": "$f(-1)=-1-\\frac{3}{2}+6+10=\\frac{27}{4}$, $f(1)=1-\\frac{3}{2}-6+10=\\frac{7}{2}$ $\\therefore$ **극댓값: $\\frac{27}{4}$, $f(1)=\\frac{7}{2}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 39,
      "source": "동아 교과서 108p 단원 마무리 03번",
      "tag": "기본",
      "question": "닫힌구간 $[-2, 2]$에서 함수 $f(x)=x^4-4x^3+4x^2-2$의 최댓값과 최솟값의 합을 구하시오.",
      "formula": "",
      "tip": "미분하여 도함수 $f'(x)=4x(x-1)(x-2)=0$의 근들과 닫힌구간 양 끝점의 함숫값을 대입하여 비교하세요.",
      "answer": "$60$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 값 비교]",
            "content": "$f'(x)=4x(x-1)(x-2)=0$. $f(-2)=62, f(0)=-2, f(1)=-1, f(2)=-2$."
          },
          {
            "label": "[2단계: 합 계산]",
            "content": "최댓값 $M=62$, 최솟값 $m=-2$. 합은 $62+(-2)=60$ $\\therefore$ **$60$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 40,
      "source": "동아 교과서 108p 단원 마무리 04번",
      "tag": "핵심유형",
      "question": "$0 \\le x \\le 2$에서 부등식 $x^3-2x^2-x+1 \\ge -2x^2+2x-a$가 성립하도록 하는 실수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "tip": "식을 정리하면 $x^3-3x+1 \\ge -a$입니다. $g(x)=x^3-3x+1$을 미분하여 구간 $[0, 2]$에서의 최솟값을 구하세요.",
      "answer": "$a \\ge 1$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 정의 및 최솟값]",
            "content": "$g(x)=x^3-3x+1 \\ge -a$. $g'(x)=3(x^2-1)=0$. $[0, 2]$에서 $g(0)=1, g(1)=-1, g(2)=3$. 최솟값은 $g(1)=-1$."
          },
          {
            "label": "[2단계: a 범위 도출]",
            "content": "$-1 \\ge -a \\implies a \\ge 1$ $\\therefore$ **$a \\ge 1$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 41,
      "source": "동아 교과서 108p 단원 마무리 05번",
      "tag": "기본",
      "question": "함수 $f(x)=-x^4+4x^3+12$가 감소하는 구간에 속하는 정수 $x$의 최솟값을 구하시오.",
      "formula": "",
      "tip": "미분하여 도함수 $f'(x) \\le 0$을 만족하는 $x$의 구간을 구하여 가장 작은 정수를 찾으세요.",
      "answer": "$3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 부호]",
            "content": "$f'(x)=-4x^2(x-3) \\le 0 \\implies x-3 \\ge 0 \\implies x \\ge 3$."
          },
          {
            "label": "[2단계: 정수 최솟값]",
            "content": "감소하는 구간 $[3, \\infty)$에 속하는 정수 $x$의 최솟값은 $3$ $\\therefore$ **$3$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 42,
      "source": "동아 교과서 108p 단원 마무리 06번",
      "tag": "실생활",
      "question": "어느 지역에서 120분 동안 측정한 미세먼지 농도 $y$는 시각 $t$ ($0 \\le t \\le 120$)에 대하여 $y=\\frac{1}{48000}\\left(\\frac{1}{3}t^3-60t^2+3200t\\right)+52$를 만족시킨다. 미세먼지 농도 $y$가 증가하는 시각 $t$의 값의 범위를 구하시오.",
      "formula": "",
      "tip": "미세먼지 농도가 증가하는 구간이므로 미분한 $y' \\ge 0$인 $t$의 범위를 구하세요.",
      "answer": "$0 \\le t \\le 40$ 또는 $80 \\le t \\le 120$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 도함수 전개 및 인수분해]",
            "content": "$y'=\\frac{1}{48000}(t^2-120t+3200)=\\frac{1}{48000}(t-40)(t-80) \\ge 0$."
          },
          {
            "label": "[2단계: 증가 구간 결정]",
            "content": "$0 \\le t \\le 120$에서 $0 \\le t \\le 40$ 또는 $80 \\le t \\le 120$ $\\therefore$ **$0 \\le t \\le 40$ 또는 $80 \\le t \\le 120$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 43,
      "source": "동아 교과서 108p 단원 마무리 07번",
      "tag": "핵심유형",
      "question": "도함수 $y=f'(x)$의 그래프가 주어진다 ($x=-1, 2, 6$에서 $f'(x)=0$). [보기]에서 옳은 것만을 있는 대로 고르시오.\n[보기]\nㄱ. 함수 $f(x)$의 극댓값은 $2$이다.\nㄴ. $f(-1)<f(2)$\nㄷ. 함수 $f(x)$가 $x=a$에서 극값을 갖도록 하는 실수 $a$의 개수는 $3$이다.",
      "formula": "",
      "tip": "도함수의 $y$좌표는 극값이 아니라 미분계수(기울기)입니다. $f'(x)$의 부호 변화로 극값을 판정하세요.",
      "answer": "ㄴ",
      "solution": {
        "steps": [
          {
            "label": "[1단계: ㄱ, ㄴ 판정]",
            "content": "ㄱ. $2$는 도함숫값 $f'(0)=2$일 뿐 함숫값이 아닙니다 (거짓).\nㄴ. $(-1, 2)$에서 $f'(x)>0$이므로 증가 함수, $f(-1)<f(2)$ (참)."
          },
          {
            "label": "[2단계: ㄷ 판정 및 결론]",
            "content": "ㄷ. $x=-1$ (극소), $x=2$ (극대)이고 $x=6$은 부호 변화가 없어 극값이 아니므로 개수는 2 (거짓) $\therefore$ **ㄴ**"
          }
        ]
      },
      "subQuestions": [],
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAgMTUwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1MCIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMTIiIHkxPSI4NSIgeDI9IjIwMCIgeTI9Ijg1IiBzdHJva2U9IiMxODE4MWIiIHN0cm9rZS13aWR0aD0iMS4yIiBtYXJrZXItZW5kPSJ1cmwoI2Fyci14KSIvPgogIDxsaW5lIHgxPSI0NSIgeTE9IjE0MCIgeDI9IjQ1IiB5Mj0iMTUiIHN0cm9rZT0iIzE4MTgxYiIgc3Ryb2tlLXdpZHRoPSIxLjIiIG1hcmtlci1lbmQ9InVybCgjYXJyLXkpIi8+CiAgPHRleHQgeD0iMjA0IiB5PSI4OSIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj54PC90ZXh0PgogIDx0ZXh0IHg9IjM3IiB5PSIxMiIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj55PC90ZXh0PgogIDx0ZXh0IHg9IjM2IiB5PSI5NiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+TzwvdGV4dD4KCiAgPGxpbmUgeDE9IjQ1IiB5MT0iNDEiIHgyPSIxNDAiIHkyPSI0MSIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMiIvPgogIDx0ZXh0IHg9IjM2IiB5PSI0NSIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+MjwvdGV4dD4KCiAgPHBhdGggZD0iTSAxNi41LDExOS4yIEwgMTcuOCwxMTMuOSBMIDE5LjEsMTA4LjggTCAyMC40LDEwMy45IEwgMjEuNyw5OS4xIEwgMjMuMCw5NC42IEwgMjQuNCw5MC4yIEwgMjUuNyw4Ni4wIEwgMjcuMCw4Mi4wIEwgMjguMyw3OC4yIEwgMjkuNiw3NC42IEwgMzAuOSw3MS4yIEwgMzIuMiw2Ny45IEwgMzMuNSw2NC44IEwgMzQuOCw2Mi4wIEwgMzYuMSw1OS4zIEwgMzcuNCw1Ni44IEwgMzguOCw1NC40IEwgNDAuMSw1Mi4zIEwgNDEuNCw1MC4zIEwgNDIuNyw0OC42IEwgNDQuMCw0Ny4wIEwgNDUuMyw0NS42IEwgNDYuNiw0NC40IEwgNDcuOSw0My4zIEwgNDkuMiw0Mi41IEwgNTAuNSw0MS44IEwgNTEuOCw0MS40IEwgNTMuMiw0MS4xIEwgNTQuNSw0MS4wIEwgNTUuOCw0MS4xIEwgNTcuMSw0MS40IEwgNTguNCw0MS44IEwgNTkuNyw0Mi41IEwgNjEuMCw0My4zIEwgNjIuMyw0NC4zIEwgNjMuNiw0NS41IEwgNjQuOSw0Ni45IEwgNjYuMyw0OC41IEwgNjcuNiw1MC4yIEwgNjguOSw1Mi4yIEwgNzAuMiw1NC4zIEwgNzEuNSw1Ni42IEwgNzIuOCw1OS4xIEwgNzQuMSw2MS44IEwgNzUuNCw2NC43IEwgNzYuNyw2Ny44IEwgNzguMCw3MS4wIEwgNzkuMyw3NC40IEwgODAuNyw3OC4xIEwgODIuMCw4MS45IEwgODMuMyw4NS43IEwgODQuNiw4OS4zIEwgODUuOSw5Mi44IEwgODcuMiw5Ni4yIEwgODguNSw5OS41IEwgODkuOCwxMDIuNiBMIDkxLjEsMTA1LjUgTCA5Mi40LDEwOC4yIEwgOTMuNywxMTAuNiBMIDk1LjEsMTEyLjcgTCA5Ni40LDExNC41IEwgOTcuNywxMTUuOSBMIDk5LjAsMTE3LjAgTCAxMDAuMywxMTcuNyBMIDEwMS42LDExOC4wIEwgMTAyLjksMTE3LjkgTCAxMDQuMiwxMTcuNCBMIDEwNS41LDExNi42IEwgMTA2LjgsMTE1LjQgTCAxMDguMSwxMTMuOCBMIDEwOS41LDExMS45IEwgMTEwLjgsMTA5LjcgTCAxMTIuMSwxMDcuMiBMIDExMy40LDEwNC40IEwgMTE0LjcsMTAxLjQgTCAxMTYuMCw5OC4yIEwgMTE3LjMsOTQuOSBMIDExOC42LDkxLjQgTCAxMTkuOSw4Ny45IEwgMTIxLjIsODMuOSBMIDEyMi41LDc4LjEgTCAxMjMuOSw3Mi44IEwgMTI1LjIsNjcuOCBMIDEyNi41LDYzLjMgTCAxMjcuOCw1OS4yIEwgMTI5LjEsNTUuNSBMIDEzMC40LDUyLjIgTCAxMzEuNyw0OS40IEwgMTMzLjAsNDYuOSBMIDEzNC4zLDQ0LjkgTCAxMzUuNiw0My4zIEwgMTM3LjAsNDIuMSBMIDEzOC4zLDQxLjQgTCAxMzkuNiw0MS4wIEwgMTQwLjksNDEuMSBMIDE0Mi4yLDQxLjYgTCAxNDMuNSw0Mi41IEwgMTQ0LjgsNDMuOCBMIDE0Ni4xLDQ1LjYgTCAxNDcuNCw0Ny43IEwgMTQ4LjcsNTAuMyBMIDE1MC4wLDUzLjMgTCAxNTEuNCw1Ni43IEwgMTUyLjcsNjAuNSBMIDE1NC4wLDY0LjggTCAxNTUuMyw2OS41IEwgMTU2LjYsNzQuNSBMIDE1Ny45LDgwLjAgTCAxNTkuMiw4Ni4wIEwgMTYwLjUsOTIuMyBMIDE2MS44LDk5LjEgTCAxNjMuMSwxMDYuMiBMIDE2NC40LDExMy44IEwgMTY1LjgsMTIxLjggTCAxNjcuMSwxMzAuMyBMIDE2OC40LDEzOS4xIEwgMTY5LjcsMTQ4LjQgTCAxNzEuMCwxNTguMSBMIDE3Mi4zLDE2OC4yIiBmaWxsPSJub25lIiBzdHJva2U9IiMwOTA5MGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KCiAgPHRleHQgeD0iMjAiIHk9Ijk3IiBmb250LXNpemU9IjkuNSIgZmlsbD0iIzE4MTgxYiI+LTE8L3RleHQ+CiAgPHRleHQgeD0iODEiIHk9Ijk3IiBmb250LXNpemU9IjkuNSIgZmlsbD0iIzE4MTgxYiI+MjwvdGV4dD4KICA8dGV4dCB4PSIxMDAiIHk9IjgxIiBmb250LXNpemU9IjkuNSIgZmlsbD0iIzE4MTgxYiI+MzwvdGV4dD4KICA8dGV4dCB4PSIxMTkiIHk9Ijk3IiBmb250LXNpemU9IjkuNSIgZmlsbD0iIzE4MTgxYiI+NDwvdGV4dD4KICA8dGV4dCB4PSIxMzgiIHk9Ijk3IiBmb250LXNpemU9IjkuNSIgZmlsbD0iIzE4MTgxYiI+NTwvdGV4dD4KICA8dGV4dCB4PSIxNTciIHk9Ijk3IiBmb250LXNpemU9IjkuNSIgZmlsbD0iIzE4MTgxYiI+NjwvdGV4dD4KICA8dGV4dCB4PSIxMjQuOCIgeT0iMzAuMCIgZm9udC1zaXplPSIxMC41IiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMwOTA5MGIiPnk9ZicoeCk8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
      "id": 44,
      "source": "동아 교과서 109p 단원 마무리 08번",
      "tag": "핵심유형",
      "question": "최고차항의 계수가 1인 삼차함수 $f(x)$에 대하여 도함수 $y=f'(x)$의 그래프가 $x=0, 4$에서 $x$축과 만나고 아래로 볼록하다. 함수 $f(x)$의 극댓값이 4일 때, 함수 $f(x)$의 극솟값을 구하시오.",
      "formula": "",
      "tip": "도함수 $f'(x)=3x^2-12x$를 부정적분 성질로 $f(x)=x^3-6x^2+C$를 세우고 $f(0)=4$를 대입하세요.",
      "answer": "$-28$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수식 및 C 결정]",
            "content": "$f'(x)=3x(x-4)=3x^2-12x \\implies f(x)=x^3-6x^2+C$. $x=0$에서 극대이므로 $f(0)=C=4$."
          },
          {
            "label": "[2단계: 극솟값 계산]",
            "content": "$x=4$에서 극솟값 $f(4)=64-96+4=-28$ $\\therefore$ **$-28$**"
          }
        ]
      },
      "subQuestions": [],
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAgMTUwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1MCIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMTUiIHkxPSI2NSIgeDI9IjE5NSIgeTI9IjY1IiBzdHJva2U9IiMxODE4MWIiIHN0cm9rZS13aWR0aD0iMS4yIiBtYXJrZXItZW5kPSJ1cmwoI2Fyci14KSIvPgogIDxsaW5lIHgxPSI1NSIgeTE9IjE0MCIgeDI9IjU1IiB5Mj0iMTUiIHN0cm9rZT0iIzE4MTgxYiIgc3Ryb2tlLXdpZHRoPSIxLjIiIG1hcmtlci1lbmQ9InVybCgjYXJyLXkpIi8+CiAgPHRleHQgeD0iMTk4IiB5PSI2OSIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj54PC90ZXh0PgogIDx0ZXh0IHg9IjQ3IiB5PSIxMiIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj55PC90ZXh0PgogIDx0ZXh0IHg9IjQ2IiB5PSI3NyIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+TzwvdGV4dD4KCiAgPHBhdGggZD0iTSAzNy40LC00LjEgTCAzOS4wLDIuOSBMIDQwLjUsOS44IEwgNDIuMSwxNi41IEwgNDMuNiwyMy4wIEwgNDUuMiwyOS4zIEwgNDYuOCwzNS41IEwgNDguMyw0MS41IEwgNDkuOSw0Ny4zIEwgNTEuNCw1Mi45IEwgNTMuMCw1OC4zIEwgNTQuNiw2My41IEwgNTYuMSw2OC42IEwgNTcuNyw3My41IEwgNTkuMiw3OC4yIEwgNjAuOCw4Mi43IEwgNjIuNCw4Ny4xIEwgNjMuOSw5MS4yIEwgNjUuNSw5NS4yIEwgNjcuMCw5OS4wIEwgNjguNiwxMDIuNiBMIDcwLjEsMTA2LjAgTCA3MS43LDEwOS4zIEwgNzMuMywxMTIuNCBMIDc0LjgsMTE1LjMgTCA3Ni40LDExOC4wIEwgNzcuOSwxMjAuNSBMIDc5LjUsMTIyLjkgTCA4MS4xLDEyNS4wIEwgODIuNiwxMjcuMCBMIDg0LjIsMTI4LjggTCA4NS43LDEzMC41IEwgODcuMywxMzEuOSBMIDg4LjksMTMzLjIgTCA5MC40LDEzNC4zIEwgOTIuMCwxMzUuMiBMIDkzLjUsMTM1LjkgTCA5NS4xLDEzNi40IEwgOTYuNywxMzYuOCBMIDk4LjIsMTM3LjAgTCA5OS44LDEzNy4wIEwgMTAxLjMsMTM2LjggTCAxMDIuOSwxMzYuNCBMIDEwNC41LDEzNS45IEwgMTA2LjAsMTM1LjIgTCAxMDcuNiwxMzQuMyBMIDEwOS4xLDEzMy4yIEwgMTEwLjcsMTMxLjkgTCAxMTIuMywxMzAuNSBMIDExMy44LDEyOC44IEwgMTE1LjQsMTI3LjAgTCAxMTYuOSwxMjUuMCBMIDExOC41LDEyMi45IEwgMTIwLjEsMTIwLjUgTCAxMjEuNiwxMTguMCBMIDEyMy4yLDExNS4zIEwgMTI0LjcsMTEyLjQgTCAxMjYuMywxMDkuMyBMIDEyNy45LDEwNi4wIEwgMTI5LjQsMTAyLjYgTCAxMzEuMCw5OS4wIEwgMTMyLjUsOTUuMiBMIDEzNC4xLDkxLjIgTCAxMzUuNiw4Ny4xIEwgMTM3LjIsODIuNyBMIDEzOC44LDc4LjIgTCAxNDAuMyw3My41IEwgMTQxLjksNjguNiBMIDE0My40LDYzLjUgTCAxNDUuMCw1OC4zIEwgMTQ2LjYsNTIuOSBMIDE0OC4xLDQ3LjMgTCAxNDkuNyw0MS41IEwgMTUxLjIsMzUuNSBMIDE1Mi44LDI5LjMgTCAxNTQuNCwyMy4wIEwgMTU1LjksMTYuNSBMIDE1Ny41LDkuOCBMIDE1OS4wLDIuOSBMIDE2MC42LC00LjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA5MDkwYiIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgoKICA8dGV4dCB4PSIxNDEiIHk9Ijc3IiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTgxODFiIj40PC90ZXh0PgogIDx0ZXh0IHg9IjEyNS40IiB5PSItMy4zOTk5OTk5OTk5OTk5OTE1IiBmb250LXNpemU9IjExIiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMwOTA5MGIiPnk9ZicoeCk8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
      "id": 45,
      "source": "동아 교과서 109p 단원 마무리 09번",
      "tag": "핵심유형",
      "question": "두 곡선 $y=2x^3-x^2-6x$와 $y=2x^2+6x+k$가 서로 다른 세 점에서 만나도록 하는 실수 $k$의 값의 범위를 구하시오.",
      "formula": "",
      "tip": "연립하여 $2x^3-3x^2-12x=k$로 두고, 좌변을 미분하여 구한 극댓값과 극솟값 사이에 $k$가 위치하도록 하세요.",
      "answer": "$-20 < k < 7$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 분리 및 극값]",
            "content": "$g(x)=2x^3-3x^2-12x=k$. $g'(x)=6(x-2)(x+1)=0$. $g(-1)=7, g(2)=-20$."
          },
          {
            "label": "[2단계: 세 실근 조건]",
            "content": "서로 다른 세 점에서 만나려면 극솟값과 극댓값 사이이어야 하므로 $-20 < k < 7$ $\\therefore$ **$-20 < k < 7$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 46,
      "source": "동아 교과서 109p 단원 마무리 10번",
      "tag": "심화",
      "question": "방정식 $2x^3-4x+3=x^3+5x+k$가 서로 다른 두 개의 양의 실근과 한 개의 음의 실근을 갖도록 하는 실수 $k$의 값의 범위를 구하시오.",
      "formula": "",
      "tip": "$x^3-9x+3=k$로 두고, 좌변을 미분하여 그래프를 그린 뒤 $y$절편과 극솟값 사이의 구간 조건을 세우세요.",
      "answer": "$3-6\\sqrt{3} < k < 3$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수 그래프 특징]",
            "content": "$h(x)=x^3-9x+3=k$. $h'(x)=3(x^2-3)=0 \\implies x=\\pm\\sqrt{3}$. $y$절편 $h(0)=3$, 극솟값 $h(\\sqrt{3})=3-6\\sqrt{3}$."
          },
          {
            "label": "[2단계: 양근 2개, 음근 1개 조건]",
            "content": "$y=k$가 극솟값과 $y$절편 사이에 위치해야 양의 실근 2개, 음의 실근 1개를 가집니다. 따라서 $3-6\\sqrt{3} < k < 3$ $\\therefore$ **$3-6\\sqrt{3} < k < 3$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 47,
      "source": "동아 교과서 109p 단원 마무리 11번",
      "tag": "기본",
      "question": "수직선 위를 움직이는 점 P의 시각 $t$에서의 위치 $x$가 $x=t^3-9t^2+15t$일 때, 출발 후 점 P가 처음으로 운동 방향을 바꾼 시각 $t$에서의 점 P의 가속도를 구하시오.",
      "formula": "",
      "tip": "운동 방향을 바꾸는 시각은 속도 $v(t)=0$인 양수 $t$ 중 가장 작은 값입니다. 그 시각을 가속도 $a(t)$에 대입하세요.",
      "answer": "$-12$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 방향 전환 시각]",
            "content": "$v(t)=3(t-1)(t-5)=0$. 처음으로 운동 방향을 바꾼 시각은 $t=1$."
          },
          {
            "label": "[2단계: 가속도 계산]",
            "content": "$a(t)=6t-18$. $t=1$ 대입 시 $a(1)=6-18=-12$ $\\therefore$ **$-12$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 48,
      "source": "동아 교과서 109p 단원 마무리 12번",
      "tag": "심화",
      "question": "모든 모서리의 길이가 $12$인 정사각뿔에 내접하는 직육면체의 부피의 최댓값을 구하시오. (단, 직육면체의 밑면은 정사각뿔의 밑면에 있다.)",
      "formula": "",
      "tip": "직육면체 밑면 한 변을 $2x$라 하고 닮음 성질을 이용해 높이 $h$를 $x$로 표현한 뒤, 부피 공식을 미분하여 극댓값을 구하세요.",
      "answer": "$128\\sqrt{2}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 정사각뿔 높이 및 부피 함수]",
            "content": "정사각뿔 높이 $6\\sqrt{2}$. 밑면 한 변을 $2x$ ($0<x<6$)라 하면 높이는 $(6-x)\\sqrt{2}$. 부피 $V(x)=4\\sqrt{2}(6x^2-x^3)$."
          },
          {
            "label": "[2단계: 극대 및 최댓값 계산]",
            "content": "$V'(x)=12\\sqrt{2}x(4-x)=0 \\implies x=4$에서 최대. $V(4)=4\\sqrt{2}(96-64)=128\\sqrt{2}$ $\\therefore$ **$128\\sqrt{2}$**"
          }
        ]
      },
      "subQuestions": [],
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAgMTYwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE2MCIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMzUiIHkxPSIxMTAiIHgyPSIxMTAiIHkyPSI4NSIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMi41Ii8+CiAgPGxpbmUgeDE9IjE4NSIgeTE9IjExMCIgeDI9IjExMCIgeTI9Ijg1IiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMywyLjUiLz4KICA8bGluZSB4MT0iMTEwIiB5MT0iMjAiIHgyPSIxMTAiIHkyPSI4NSIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMi41Ii8+CgogIDxwb2x5Z29uIHBvaW50cz0iMTEwLDk1IDY4LDc3IDY4LDEwNyAxMTAsMTI1IiBmaWxsPSIjZmJjZmU4IiBmaWxsLW9wYWNpdHk9IjAuNiIgc3Ryb2tlPSIjZGIyNzc3IiBzdHJva2Utd2lkdGg9IjEuMSIvPgogIDxwb2x5Z29uIHBvaW50cz0iMTEwLDk1IDE1Miw3NyAxNTIsMTA3IDExMCwxMjUiIGZpbGw9IiNmNDcyYjYiIGZpbGwtb3BhY2l0eT0iMC42IiBzdHJva2U9IiNkYjI3NzciIHN0cm9rZS13aWR0aD0iMS4xIi8+CiAgPHBvbHlnb24gcG9pbnRzPSIxMTAsOTUgNjgsNzcgMTEwLDYwIDE1Miw3NyIgZmlsbD0iI2ZkZjJmOCIgZmlsbC1vcGFjaXR5PSIwLjgiIHN0cm9rZT0iI2RiMjc3NyIgc3Ryb2tlLXdpZHRoPSIxLjEiLz4KCiAgPGxpbmUgeDE9IjM1IiB5MT0iMTEwIiB4Mj0iMTEwIiB5Mj0iMTQwIiBzdHJva2U9IiMwZjE3MmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+CiAgPGxpbmUgeDE9IjE4NSIgeTE9IjExMCIgeDI9IjExMCIgeTI9IjE0MCIgc3Ryb2tlPSIjMGYxNzJhIiBzdHJva2Utd2lkdGg9IjEuNiIvPgogIDxsaW5lIHgxPSIxMTAiIHkxPSIyMCIgeDI9IjM1IiB5Mj0iMTEwIiBzdHJva2U9IiMwZjE3MmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+CiAgPGxpbmUgeDE9IjExMCIgeTE9IjIwIiB4Mj0iMTEwIiB5Mj0iMTQwIiBzdHJva2U9IiMwZjE3MmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+CiAgPGxpbmUgeDE9IjExMCIgeTE9IjIwIiB4Mj0iMTg1IiB5Mj0iMTEwIiBzdHJva2U9IiMwZjE3MmEiIHN0cm9rZS13aWR0aD0iMS42Ii8+CgogIDx0ZXh0IHg9IjU1IiB5PSI2MCIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMGYxNzJhIiBmb250LXdlaWdodD0iNjAwIj4xMjwvdGV4dD4KPC9zdmc+"
    },
    {
      "id": 49,
      "source": "동아 교과서 109p 단원 마무리 13번",
      "tag": "심화",
      "question": "삼차함수 $f(x)$의 도함수 $y=f'(x)$와 이차함수 $g(x)$의 도함수 $y=g'(x)$의 그래프가 주어진다. $h(x)=f(x)-g(x)$에 대하여 [보기]에서 옳은 것만을 있는 대로 고르시오.\n[보기]\nㄱ. 열린구간 $(a, b)$에서 함수 $h(x)$는 감소한다.\nㄴ. 함수 $h(x)$는 $x=b$에서 극솟값을 갖는다.\nㄷ. $h(0) \\times h(b) > 0$이면 방정식 $h(x)=0$은 한 실근만을 갖는다.",
      "formula": "",
      "tip": "미분한 도함수 차 $h'(x)=f'(x)-g'(x)$의 부호 변화를 통해 증감과 극값을 판정하세요.",
      "answer": "ㄱ, ㄴ",
      "solution": {
        "steps": [
          {
            "label": "[1단계: ㄱ, ㄴ 판정]",
            "content": "ㄱ. $(a, b)$에서 $g'(x)>f'(x) \\implies h'(x)<0$ (감소, 참).\nㄴ. $x=b$ 좌우에서 $h'(x)$ 음$\\to$양으로 바뀌어 극솟값 (참)."
          },
          {
            "label": "[2단계: ㄷ 판정 및 결론]",
            "content": "ㄷ. $h(0)h(b)>0$이어도 $h(a)>0$이면 서로 다른 세 실근을 가질 수 있으므로 거짓 $\\therefore$ **ㄱ, ㄴ**"
          }
        ]
      },
      "subQuestions": [],
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAgMTUwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjE1MCIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogICAgCiAgPC9kZWZzPgoKICA8bGluZSB4MT0iMTUiIHkxPSI2MCIgeDI9IjE5NSIgeTI9IjYwIiBzdHJva2U9IiMxODE4MWIiIHN0cm9rZS13aWR0aD0iMS4yIiBtYXJrZXItZW5kPSJ1cmwoI2Fyci14KSIvPgogIDxsaW5lIHgxPSI0NSIgeTE9IjE0MCIgeDI9IjQ1IiB5Mj0iMTUiIHN0cm9rZT0iIzE4MTgxYiIgc3Ryb2tlLXdpZHRoPSIxLjIiIG1hcmtlci1lbmQ9InVybCgjYXJyLXkpIi8+CiAgPHRleHQgeD0iMTk4IiB5PSI2NCIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj54PC90ZXh0PgogIDx0ZXh0IHg9IjM3IiB5PSIxMiIgZm9udC1zaXplPSIxMSIgZm9udC1zdHlsZT0iaXRhbGljIiBmaWxsPSIjMTgxODFiIj55PC90ZXh0PgogIDx0ZXh0IHg9IjM2IiB5PSI3MiIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+TzwvdGV4dD4KCiAgPGxpbmUgeDE9IjY2LjYiIHkxPSI2MCIgeDI9IjY2LjYiIHkyPSI4Ny4wIiBzdHJva2U9IiM2NDc0OGIiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMywyIi8+CiAgPGxpbmUgeDE9IjE0My4zOTk5OTk5OTk5OTk5OCIgeTE9IjYwIiB4Mj0iMTQzLjM5OTk5OTk5OTk5OTk4IiB5Mj0iNDYuNSIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMiIvPgoKICA8cGF0aCBkPSJNIDM3LjgsLTI4LjYgTCAzOS41LC0yMS43IEwgNDEuMSwtMTQuOSBMIDQyLjgsLTguNCBMIDQ0LjUsLTEuOSBMIDQ2LjIsNC4zIEwgNDcuOCwxMC4zIEwgNDkuNSwxNi4yIEwgNTEuMiwyMS45IEwgNTIuOCwyNy41IEwgNTQuNSwzMi44IEwgNTYuMiwzOC4wIEwgNTcuOSw0My4wIEwgNTkuNSw0Ny45IEwgNjEuMiw1Mi41IEwgNjIuOSw1Ny4wIEwgNjQuNSw2MS4zIEwgNjYuMiw2NS41IEwgNjcuOSw2OS40IEwgNjkuNSw3My4yIEwgNzEuMiw3Ni44IEwgNzIuOSw4MC4zIEwgNzQuNiw4My41IEwgNzYuMiw4Ni42IEwgNzcuOSw4OS42IEwgNzkuNiw5Mi4zIEwgODEuMiw5NC45IEwgODIuOSw5Ny4zIEwgODQuNiw5OS41IEwgODYuMywxMDEuNSBMIDg3LjksMTAzLjQgTCA4OS42LDEwNS4xIEwgOTEuMywxMDYuNiBMIDkyLjksMTA4LjAgTCA5NC42LDEwOS4xIEwgOTYuMywxMTAuMSBMIDk4LjAsMTEwLjkgTCA5OS42LDExMS42IEwgMTAxLjMsMTEyLjEgTCAxMDMuMCwxMTIuNCBMIDEwNC42LDExMi41IEwgMTA2LjMsMTEyLjQgTCAxMDguMCwxMTIuMiBMIDEwOS42LDExMS44IEwgMTExLjMsMTExLjMgTCAxMTMuMCwxMTAuNSBMIDExNC43LDEwOS42IEwgMTE2LjMsMTA4LjUgTCAxMTguMCwxMDcuMiBMIDExOS43LDEwNS44IEwgMTIxLjMsMTA0LjIgTCAxMjMuMCwxMDIuNCBMIDEyNC43LDEwMC40IEwgMTI2LjQsOTguMiBMIDEyOC4wLDk1LjkgTCAxMjkuNyw5My40IEwgMTMxLjQsOTAuOCBMIDEzMy4wLDg3LjkgTCAxMzQuNyw4NC45IEwgMTM2LjQsODEuNyBMIDEzOC4xLDc4LjQgTCAxMzkuNyw3NC44IEwgMTQxLjQsNzEuMSBMIDE0My4xLDY3LjIgTCAxNDQuNyw2My4yIEwgMTQ2LjQsNTguOSBMIDE0OC4xLDU0LjUgTCAxNDkuNyw0OS45IEwgMTUxLjQsNDUuMiBMIDE1My4xLDQwLjIgTCAxNTQuOCwzNS4xIEwgMTU2LjQsMjkuOCBMIDE1OC4xLDI0LjQgTCAxNTkuOCwxOC43IEwgMTYxLjQsMTIuOSBMIDE2My4xLDcuMCBMIDE2NC44LDAuOCBMIDE2Ni41LC01LjUgTCAxNjguMSwtMTIuMCBMIDE2OS44LC0xOC43IiBmaWxsPSJub25lIiBzdHJva2U9IiMwOTA5MGIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8bGluZSB4MT0iNDUuMCIgeTE9Ijk3LjUiIHgyPSIxNjAuMiIgeTI9IjM3LjUiIHN0cm9rZT0iIzQ3NTU2OSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KCiAgPHRleHQgeD0iNjQuNiIgeT0iNTYiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZmlsbD0iIzE4MTgxYiI+YTwvdGV4dD4KICA8dGV4dCB4PSIxNDEuMzk5OTk5OTk5OTk5OTgiIHk9IjcyIiBmb250LXNpemU9IjEwIiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMxODE4MWIiPmI8L3RleHQ+CiAgPHRleHQgeD0iNDcuNCIgeT0iNy41IiBmb250LXNpemU9IjEwLjUiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZmlsbD0iIzA5MDkwYiI+eT1mJyh4KTwvdGV4dD4KICA8dGV4dCB4PSIxMjkuMCIgeT0iMTIuMCIgZm9udC1zaXplPSIxMC41IiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiM0NzU1NjkiPnk9ZycoeCk8L3RleHQ+Cjwvc3ZnPg=="
    },
    {
      "id": 50,
      "source": "동아 교과서 109p 단원 마무리 14번",
      "tag": "심화",
      "question": "최고차항의 계수가 1인 삼차함수 $f(x)$가 극댓값 4, 극솟값 -2를 갖는다. 방정식 $|f(x)|=t$의 서로 다른 실근의 개수가 3이 되도록 하는 모든 실수 $t$의 값의 합을 구하시오.",
      "formula": "",
      "tip": "절댓값 함수 $y=|f(x)|$의 그래프를 그리고 $y=t$와 3점에서 만나는 $t$의 값을 구하세요.",
      "answer": "$4$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: |f(x)| 그래프 개형]",
            "content": "극댓값 $4$, 극솟값 $-2$를 꺾어 올리면 $y=|f(x)|$는 높이 $4$와 $2$의 극댓값을 갖습니다."
          },
          {
            "label": "[2단계: 교점 3개 조건 및 합]",
            "content": "수평선 $y=t$와 3점에서 만나는 경우는 극대 봉우리 꼭짓점에 접할 때인 $t=4$ 및 $x$축과 접하는 극소점 접선 $t=0$입니다. 합은 $0+4=4$ $\\therefore$ **$4$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 51,
      "source": "동아 교과서 110p 단원 마무리 15번 (서·논술형)",
      "tag": "서술형",
      "question": "미분가능한 함수 $f(x)$가 닫힌구간 $[1, 4]$에 속하는 모든 $x$에 대하여 $f'(x) \\ge 4$이다. $f(1)=-3$일 때, $f(4)$의 최솟값을 구하시오.",
      "formula": "",
      "tip": "구간 $[1, 4]$에서 평균값 정리 $\\frac{f(4)-f(1)}{4-1}=f'(c) \\ge 4$를 적용하여 $f(4)$의 범위를 구하세요.",
      "answer": "$9$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 평균값 정리 적용]",
            "content": "닫힌구간 $[1, 4]$에서 평균값 정리에 의해 $\\frac{f(4)-f(1)}{4-1}=f'(c) \\ge 4$인 $c \\in (1, 4)$가 존재합니다."
          },
          {
            "label": "[2단계: f(4) 최솟값 도출]",
            "content": "$\\frac{f(4)-(-3)}{3} \\ge 4 \\implies f(4)+3 \\ge 12 \\implies f(4) \\ge 9$ $\\therefore$ **$9$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 52,
      "source": "동아 교과서 110p 단원 마무리 16번 (서·논술형)",
      "tag": "서술형",
      "question": "함수 $f(x)=\\frac{1}{2}x^3-2x^2-4x+24$ ($1 \\le x \\le 3$)의 그래프 위의 점 P에서 $x$축에 내린 수선의 발을 H라 하자. 원점 O에 대하여 삼각형 OHP의 넓이의 최댓값과 최솟값을 각각 구하시오.",
      "formula": "",
      "tip": "$\\text{P}(x, f(x))$이므로 삼각형 넓이 공식 $g(x)=\\frac{1}{2}x f(x)$를 세우고, 미분하여 극값과 끝값을 조사하세요.",
      "answer": "최솟값: $\\frac{37}{4}$, 최댓값: $12$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 넓이 함수 및 도함수]",
            "content": "삼각형 OHP 넓이 $g(x)=\\frac{1}{2}xf(x)=\\frac{1}{4}x^4-x^3-2x^2+12x$. $g'(x)=(x+2)(x-2)(x-3)=0$."
          },
          {
            "label": "[2단계: 값 비교 및 결론]",
            "content": "$1 \\le x \\le 3$에서 $g(1)=\\frac{37}{4}, g(2)=12, g(3)=\\frac{45}{4}$. 최솟값은 $\\frac{37}{4}$, 최댓값은 $12$ $\\therefore$ **최솟값: $\\frac{37}{4}$, 최댓값: $12$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 53,
      "source": "동아 교과서 110p 단원 마무리 17번 (서·논술형)",
      "tag": "서술형",
      "question": "점 $(0, a)$에서 곡선 $y=x(x-3)^2$에 그은 서로 다른 접선의 개수가 3이 되도록 하는 실수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "tip": "접점 $(t, t(t-3)^2)$에서의 접선 공식을 세워 $(0, a)$를 대입하고, 삼차방정식을 미분하여 극값을 구하세요.",
      "answer": "$0 < a < 8$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 접선 세우기 및 점 대입]",
            "content": "$y'=3x^2-12x+9$. 접선에 $(0, a)$ 대입: $a=-2t^3+6t^2$."
          },
          {
            "label": "[2단계: a의 범위 결정]",
            "content": "$g(t)=-2t^3+6t^2$의 극값은 $g(0)=0, g(2)=8$. 접선이 3개이려면 극값 사이여야 하므로 $0 < a < 8$ $\\therefore$ **$0 < a < 8$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 54,
      "source": "동아 교과서 110p 단원 마무리 18번 (서·논술형)",
      "tag": "서술형",
      "question": "원점을 출발하여 수직선 위를 움직이는 두 점 P, Q의 시각 $t$에서의 위치가 각각 $f(t)=\\frac{2}{3}t^3-9t^2+36t, g(t)=-\\frac{1}{3}t^3+3t^2-12t$일 때, 두 점 P, Q의 속도가 같아지는 순간의 두 점 사이의 거리를 구하시오.",
      "formula": "",
      "tip": "$f'(t)=g'(t)$를 풀어 시각 $t$를 구하고, 두 점 사이의 거리 $|f(t)-g(t)|$에 대입하세요.",
      "answer": "$64$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 속도가 같아지는 시각]",
            "content": "$f'(t)=2t^2-18t+36, g'(t)=-t^2+6t-12$. $f'(t)=g'(t) \\implies 3(t-4)^2=0 \\implies t=4$."
          },
          {
            "label": "[2단계: 두 점 사이의 거리 계산]",
            "content": "거리 $|f(4)-g(4)|=|4^3-12(4^2)+48(4)| = |64-192+192|=64$ $\\therefore$ **$64$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 55,
      "source": "AI 숫자 변형 (37번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "함수 $f(x)=x^3-6x+1$에 대하여 닫힌구간 $[-2, 2]$에서 평균값 정리를 만족시키는 모든 실수 $c$의 값을 구하시오.",
      "formula": "",
      "tip": "닫힌구간 $[-2, 2]$에서 평균변화율 $\\frac{f(2)-f(-2)}{2-(-2)}$를 계산하고, $f'(c)$와 같아지는 $c \\in (-2, 2)$를 구하세요.",
      "answer": "$\\pm \\frac{2\\sqrt{3}}{3}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 평균변화율 계산]",
            "content": "$f(2)=-3, f(-2)=5$. 평균변화율은 $\\frac{-3-5}{2-(-2)}=\\frac{-8}{4}=-2$."
          },
          {
            "label": "[2단계: c 구하기]",
            "content": "$f'(c)=3c^2-6=-2 \\implies 3c^2=4 \\implies c=\\pm\\frac{2\\sqrt{3}}{3} \\in (-2, 2)$ $\\therefore$ **$\\pm \\frac{2\\sqrt{3}}{3}$**"
          }
        ]
      },
      "subQuestions": []
    },
    {
      "id": 56,
      "source": "AI 숫자 변형 (44번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "최고차항의 계수가 1인 삼차함수 $f(x)$에 대하여 도함수 $y=f'(x)$의 그래프가 $x=0, 2$에서 $x$축과 만나고 아래로 볼록하다. 함수 $f(x)$의 극댓값이 5일 때, 함수 $f(x)$의 극솟값을 구하시오.",
      "formula": "",
      "tip": "도함수 $f'(x)=3x^2-6x$의 성질로 $f(x)=x^3-3x^2+C$를 세우고 $f(0)=5$를 대입하여 $C$를 구하세요.",
      "answer": "$1$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 함수식 및 C 결정]",
            "content": "$f'(x)=3x(x-2)=3x^2-6x \\implies f(x)=x^3-3x^2+C$. 극댓값 $f(0)=C=5$."
          },
          {
            "label": "[2단계: 극솟값 계산]",
            "content": "$x=2$에서 극솟값 $f(2)=8-12+5=1$ $\\therefore$ **$1$**"
          }
        ]
      },
      "subQuestions": []
    }
  ]
};
