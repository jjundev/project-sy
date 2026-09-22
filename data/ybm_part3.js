window.WORKSHEET_DATA = {
  "meta": {
    "title": "미적분 I / 수학 II - III. 적분",
    "subtitle": "YBM 교과서 실전 핵심 (본문 핵심 + 스스로 마무리하기 전수 수록)",
    "author": "수학 강사진",
    "date": "2026. 09. 20 (일)",
    "student": "",
    "cheer": "완벽한 내신 1등급을 응원합니다 ✨",
    "solutionTag": "3단계 알고리즘 점검 & 오답 노트"
  },
  "problems": [
    {
      "id": 1,
      "source": "교과서 p.119 스스로 확인하기 03",
      "tag": "부정적분의 뜻",
      "question": "함수 $(x-2)^4$의 한 부정적분이 $f(x)$일 때, $f'(3)$의 값을 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "함수 $(x-2)^4$의 한 부정적분이 $f(x)$이므로 부정적분의 정의에 따라 다음이 성립합니다.\n$f'(x) = (x-2)^4$"
          },
          {
            "label": "2단계",
            "content": "구하고자 하는 값은 $f'(3)$이므로 도함수에 $x=3$을 대입합니다."
          },
          {
            "label": "3단계",
            "content": "$f'(3) = (3-2)^4 = 1^4 = 1$\n따라서 구하는 값은 $1$입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "부정적분의 기본 정의와 성질을 이용해 미분과 적분의 역연산 관계를 파악합니다.",
      "answer": "$1$"
    },
    {
      "id": 2,
      "source": "교과서 p.123 예제 2 변형",
      "tag": "부정적분의 계산",
      "question": "다음 조건을 만족시키는 함수 $f(x)$를 구하시오.",
      "formula": "f'(x)=3x^2+4x-2,\\quad f(-1)=1",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "도함수 $f'(x)=3x^2+4x-2$의 양변을 적분하여 $f(x)$를 구합니다.\n$f(x) = \\int (3x^2+4x-2)dx = x^3+2x^2-2x+C$ (단, $C$는 적분상수)"
          },
          {
            "label": "2단계",
            "content": "초기조건 $f(-1)=1$을 식에 대입합니다.\n$f(-1) = (-1)^3+2(-1)^2-2(-1)+C = -1+2+2+C = 3+C = 1$\n따라서 $C = -2$입니다."
          },
          {
            "label": "3단계",
            "content": "구한 적분상수를 대입하면 구하는 함수는 다음과 같습니다.\n$f(x) = x^3+2x^2-2x-2$"
          }
        ]
      },
      "subQuestions": [],
      "tip": "도함수를 부정적분 공식으로 적분한 후, 초기조건의 함숫값을 대입하여 적분상수 $C$를 결정합니다.",
      "answer": "$f(x)=x^3+2x^2-2x-2$"
    },
    {
      "id": 3,
      "source": "교과서 p.124 스스로 확인하기 03",
      "tag": "부정적분의 성질",
      "question": "다항함수 $f(x)$에 대하여 $\\int f(x)dx = 4x^3-3x^2+2x+C$ (단, $C$는 적분상수)이다. 함수 $xf(x)$의 한 부정적분을 $G(x)$라 할 때, $G(2)-G(1)$의 값을 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "주어진 부정적분 등식의 양변을 $x$에 대하여 미분하면 $f(x)$를 얻을 수 있습니다.\n$f(x) = \\frac{d}{dx}(4x^3-3x^2+2x+C) = 12x^2-6x+2$"
          },
          {
            "label": "2단계",
            "content": "피적분함수 $xf(x)$를 구하면 다음과 같습니다.\n$xf(x) = x(12x^2-6x+2) = 12x^3-6x^2+2x$"
          },
          {
            "label": "3단계",
            "content": "미적분의 기본정리에 따라 $G(2)-G(1) = \\int_1^2 xf(x)dx$이므로 정적분을 계산합니다.\n$\\int_1^2 (12x^3-6x^2+2x)dx = [3x^4-2x^3+x^2]_1^2$\n$= (3\\times 16 - 2\\times 8 + 4) - (3 - 2 + 1) = (48 - 16 + 4) - 2 = 36 - 2 = 34$"
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "적분식의 양변을 미분하여 $f(x)$를 구하고, $G(2)-G(1) = \\int_1^2 xf(x)dx$ 공식을 이용해 계산합니다.",
      "answer": "$34$"
    },
    {
      "id": 4,
      "source": "교과서 p.124 스스로 확인하기 05",
      "tag": "부정적분과 극값",
      "question": "다항함수 $f(x)$가 다음 조건을 모두 만족시킬 때, 함수 $f(x)$를 구하시오.",
      "formula": "(가) $f'(x)=3x^2-12$\n(나) $f(x)$의 극댓값은 $4$이다.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "도함수를 부정적분하여 $f(x)$의 일반형을 구합니다.\n$f(x) = \\int (3x^2-12)dx = x^3-12x+C$ (단, $C$는 적분상수)"
          },
          {
            "label": "2단계",
            "content": "$f'(x) = 3(x+2)(x-2) = 0$에서 $x=-2$ 또는 $x=2$입니다.\n$f'(x)$의 부호 변화를 살펴보면 $x=-2$의 좌우에서 부호가 양에서 음으로 바뀌므로 $x=-2$에서 극댓값을 갖습니다."
          },
          {
            "label": "3단계",
            "content": "극댓값이 $4$이므로 $f(-2)=4$를 대입합니다.\n$f(-2) = (-2)^3-12(-2)+C = -8+24+C = 16+C = 4 \\implies C = -12$\n따라서 구하는 함수는 $f(x) = x^3-12x-12$입니다."
          }
        ]
      },
      "subQuestions": [],
      "tip": "도함수 $f'(x)=0$이 되는 $x$를 찾아 증가·감소 구간을 조사하고, 극댓값 조건을 대입하여 적분상수를 구합니다.",
      "answer": "$f(x)=x^3-12x-12$"
    },
    {
      "id": 5,
      "source": "교과서 p.134 스스로 확인하기 02",
      "tag": "정적분으로 정의된 함수",
      "question": "임의의 실수 $x$에 대하여 다음 등식을 만족시키는 연속함수 $f(x)$와 상수 $a$의 값을 구하시오.",
      "formula": "\\int_a^x f(t)dt = x^2-3x+2",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "주어진 등식의 양변을 $x$에 대하여 미분합니다.\n$\\frac{d}{dx}\\left(\\int_a^x f(t)dt\\right) = f(x) = \\frac{d}{dx}(x^2-3x+2) = 2x-3$"
          },
          {
            "label": "2단계",
            "content": "정적분의 성질에 의해 $\\int_a^a f(t)dt = 0$이므로 양변에 $x=a$를 대입합니다.\n$a^2-3a+2 = 0$"
          },
          {
            "label": "3단계",
            "content": "이차방정식을 인수분해하면 $(a-1)(a-2)=0$이므로 $a=1$ 또는 $a=2$입니다.\n따라서 $f(x)=2x-3$, $a=1$ 또는 $a=2$입니다."
          }
        ]
      },
      "subQuestions": [],
      "tip": "양변을 $x$에 대하여 미분하여 $f(x)$를 구하고, 위끝과 아래끝이 같아지도록 $x=a$를 대입합니다.",
      "answer": "$f(x)=2x-3,\\; a=1\\text{ 또는 }a=2$"
    },
    {
      "id": 6,
      "source": "교과서 p.134 스스로 확인하기 03-(1)",
      "tag": "절댓값 기호가 있는 정적분",
      "question": "다음 정적분의 값을 구하시오.",
      "formula": "\\int_{-2}^1 |2x-1|dx",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$2x-1=0$에서 $x=\\frac{1}{2}$이므로 적분 구간 $[-2, 1]$을 $[-2, \\frac{1}{2}]$과 $[\\frac{1}{2}, 1]$로 나눕니다.\n$-2 \\le x \\le \\frac{1}{2}$일 때 $|2x-1| = -(2x-1) = -2x+1$,\n$\\frac{1}{2} \\le x \\le 1$일 때 $|2x-1| = 2x-1$입니다."
          },
          {
            "label": "2단계",
            "content": "각 구간별로 정적분을 계산합니다.\n$\\int_{-2}^{1/2} (-2x+1)dx = [-x^2+x]_{-2}^{1/2} = \\left(-\\frac{1}{4}+\\frac{1}{2}\\right) - (-4-2) = \\frac{1}{4} - (-6) = \\frac{25}{4}$\n$\\int_{1/2}^1 (2x-1)dx = [x^2-x]_{1/2}^1 = (1-1) - \\left(\\frac{1}{4}-\\frac{1}{2}\\right) = 0 - \\left(-\\frac{1}{4}\\right) = \\frac{1}{4}$"
          },
          {
            "label": "3단계",
            "content": "두 정적분의 값을 합합니다.\n$\\frac{25}{4} + \\frac{1}{4} = \\frac{26}{4} = \\frac{13}{2}$"
          }
        ]
      },
      "subQuestions": [],
      "tip": "절댓값 안의 식이 $0$이 되는 $x=\\frac{1}{2}$을 기준으로 구간을 나누어 정적분을 계산합니다.",
      "answer": "$\\frac{13}{2}$"
    },
    {
      "id": 7,
      "source": "교과서 p.134 스스로 확인하기 04",
      "tag": "정적분을 포함한 함수",
      "question": "함수 $f(x)$가 다음을 만족시킬 때, $f(1)$의 값을 구하시오.",
      "formula": "f(x)=2x^3-x+\\int_0^2 f(t)dt",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "정적분 $\\int_0^2 f(t)dt = k$ ($k$는 상수)로 놓으면 $f(x) = 2x^3-x+k$입니다."
          },
          {
            "label": "2단계",
            "content": "이 식을 치환한 정적분 정의에 대입합니다.\n$\\int_0^2 (2t^3-t+k)dt = \\left[\\frac{1}{2}t^4-\\frac{1}{2}t^2+kt\\right]_0^2 = (8-2+2k) - 0 = 6+2k = k$\n$2k-k = -6 \\implies k = -6$"
          },
          {
            "label": "3단계",
            "content": "따라서 $f(x) = 2x^3-x-6$이므로 $x=1$을 대입합니다.\n$f(1) = 2(1)^3 - 1 - 6 = 2 - 1 - 6 = -5$"
          }
        ]
      },
      "subQuestions": [],
      "tip": "상수 구간의 정적분 $\\int_0^2 f(t)dt$를 상수 $k$로 치환하여 $f(x)$를 표현한 뒤 대입하여 $k$를 구합니다.",
      "answer": "$-5$"
    },
    {
      "id": 8,
      "source": "교과서 p.134 스스로 확인하기 05",
      "tag": "우함수의 정적분",
      "question": "다항함수 $f(x)$가 모든 실수 $x$에 대하여 $f(-x)=f(x)$를 만족시키고 $\\int_{-4}^1 f(x)dx=3$, $\\int_1^4 f(x)dx=5$일 때, $\\int_{-1}^0 f(x)dx$의 값을 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "정적분의 연결 성질에 의해 다음이 성립합니다.\n$\\int_{-4}^4 f(x)dx = \\int_{-4}^1 f(x)dx + \\int_1^4 f(x)dx = 3 + 5 = 8$"
          },
          {
            "label": "2단계",
            "content": "$f(x)$는 우함수이므로 $y$축 대칭입니다.\n따라서 $\\int_{-4}^4 f(x)dx = 2\\int_0^4 f(x)dx = 8 \\implies \\int_0^4 f(x)dx = 4$입니다.\n이때 $\\int_0^1 f(x)dx = \\int_0^4 f(x)dx - \\int_1^4 f(x)dx = 4 - 5 = -1$입니다."
          },
          {
            "label": "3단계",
            "content": "$y$축 대칭 성질에 의해 $\\int_{-1}^0 f(x)dx = \\int_0^1 f(x)dx$이므로\n구하는 값은 $\\int_{-1}^0 f(x)dx = -1$입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "우함수(짝함수)의 대칭 성질 $\\int_{-a}^a f(x)dx = 2\\int_0^a f(x)dx$ 및 구간 분할 성질을 활용합니다.",
      "answer": "$-1$"
    },
    {
      "id": 9,
      "source": "교과서 p.141 스스로 확인하기 01",
      "tag": "곡선과 x축 사이의 넓이",
      "question": "곡선 $y=x(x-3)^2$과 $x$축으로 둘러싸인 도형의 넓이를 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "곡선과 $x$축의 교점의 $x$좌표는 $x(x-3)^2=0$에서 $x=0$ 또는 $x=3$입니다.\n닫힌구간 $[0, 3]$에서 $x \\ge 0$, $(x-3)^2 \\ge 0$이므로 $x(x-3)^2 \\ge 0$입니다."
          },
          {
            "label": "2단계",
            "content": "식 전개를 수행합니다.\n$x(x-3)^2 = x(x^2-6x+9) = x^3-6x^2+9x$"
          },
          {
            "label": "3단계",
            "content": "구하는 도형의 넓이 $S$는 정적분으로 계산합니다.\n$S = \\int_0^3 (x^3-6x^2+9x)dx = \\left[\\frac{1}{4}x^4-2x^3+\\frac{9}{2}x^2\\right]_0^3$\n$= \\frac{81}{4} - 2(27) + \\frac{9}{2}(9) = \\frac{81}{4} - 54 + \\frac{81}{2} = \\frac{81 - 216 + 162}{4} = \\frac{27}{4}$"
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "곡선과 $x$축의 교점을 구하고, 닫힌구간 $[0, 3]$에서 함수가 $0$ 이상임을 확인하여 정적분 공식으로 계산합니다.",
      "answer": "$\\frac{27}{4}$"
    },
    {
      "id": 10,
      "source": "교과서 p.141 스스로 확인하기 02-(1)",
      "tag": "곡선과 직선 사이의 넓이",
      "question": "곡선 $y=x^2-6x+4$와 직선 $y=4$로 둘러싸인 도형의 넓이를 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "곡선과 직선의 교점의 $x$좌표를 구합니다.\n$x^2-6x+4 = 4 \\implies x^2-6x = 0 \\implies x(x-6) = 0$\n따라서 두 교점은 $x=0$과 $x=6$입니다."
          },
          {
            "label": "2단계",
            "content": "구간 $[0, 6]$에서 직선이 곡선보다 위쪽에 있으므로 넓이 식을 세웁니다.\n$S = \\int_0^6 \\{4 - (x^2-6x+4)\\}dx = \\int_0^6 (-x^2+6x)dx$"
          },
          {
            "label": "3단계",
            "content": "정적분을 계산합니다.\n$S = \\left[-\\frac{1}{3}x^3+3x^2\\right]_0^6 = -\\frac{216}{3} + 3(36) = -72 + 108 = 36$\n(또는 공식 $\\frac{1}{6}(6-0)^3 = 36$)"
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "교점의 $x$좌표를 구한 뒤, 위쪽 함수에서 아래쪽 함수를 뺀 식을 적분하거나 포물선 넓이 공식 $\\frac{|a|}{6}(\\beta-\\alpha)^3$을 이용합니다.",
      "answer": "$36$"
    },
    {
      "id": 11,
      "source": "교과서 p.141 스스로 확인하기 03",
      "tag": "곡선과 접선 사이의 넓이",
      "question": "곡선 $y=x^3-2x^2-6x+9$와 이 곡선 위의 점 $(2, -3)$에서의 접선으로 둘러싸인 도형의 넓이를 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$y' = 3x^2-4x-6$이므로 점 $(2, -3)$에서의 접선의 기울기는\n$y'(2) = 3(4)-4(2)-6 = 12-8-6 = -2$입니다.\n접선의 방정식은 $y - (-3) = -2(x-2) \\implies y = -2x+1$입니다."
          },
          {
            "label": "2단계",
            "content": "곡선과 접선의 교점의 $x$좌표를 구합니다.\n$x^3-2x^2-6x+9 = -2x+1 \\implies x^3-2x^2-4x+8 = 0$\n$x^2(x-2)-4(x-2) = (x-2)(x^2-4) = (x-2)^2(x+2) = 0$\n따라서 접점 $x=2$ 외의 다른 교점은 $x=-2$입니다."
          },
          {
            "label": "3단계",
            "content": "구간 $[-2, 2]$에서 곡선이 접선보다 위쪽에 있으므로 넓이는 다음과 같습니다.\n$S = \\int_{-2}^2 (x^3-2x^2-4x+8)dx$\n기함수 항은 $0$이 되므로 우함수 항만 계산하면\n$S = 2\\int_0^2 (-2x^2+8)dx = 2\\left[-\\frac{2}{3}x^3+8x\\right]_0^2 = 2\\left(-\\frac{16}{3}+16\\right) = 2\\times \\frac{32}{3} = \\frac{64}{3}$"
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "접점에서의 미분계수로 접선의 방정식을 구하고, 삼차곡선과의 또 다른 교점을 찾아 구간 적분합니다.",
      "answer": "$\\frac{64}{3}$"
    },
    {
      "id": 12,
      "source": "교과서 p.141 스스로 확인하기 05",
      "tag": "도함수와 넓이",
      "question": "다항함수 $f(x)$가 다음 조건을 만족시킬 때, 곡선 $y=f(x)$와 $x$축으로 둘러싸인 부분의 넓이를 구하시오.",
      "formula": "(가) $f'(x)=2x^3-4x$\n(나) 곡선 $y=f(x)$는 $x$축과 서로 다른 세 점에서 만난다.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$f(x) = \\int (2x^3-4x)dx = \\frac{1}{2}x^4-2x^2+C$ (단, $C$는 적분상수)입니다.\n$f'(x) = 2x(x^2-2) = 0$에서 $x=0$ 또는 $x=\\pm\\sqrt{2}$입니다."
          },
          {
            "label": "2단계",
            "content": "$f(x)$는 $y$축 대칭(우함수)이며, $x=0$에서 극댓값 $C$, $x=\\pm\\sqrt{2}$에서 극솟값 $C-2$를 갖습니다.\n곡선이 $x$축과 서로 다른 세 점에서 만나려면 극댓값이 $0$이어야 하므로 $C=0$입니다.\n따라서 $f(x) = \\frac{1}{2}x^4-2x^2 = \\frac{1}{2}x^2(x^2-4)$이며, $x$축과의 교점은 $x=-2, 0, 2$입니다."
          },
          {
            "label": "3단계",
            "content": "구간 $[-2, 2]$에서 $f(x) \\le 0$이므로 구하는 넓이는 우함수 성질을 이용해 다음과 같이 계산합니다.\n$S = 2\\int_0^2 \\left(-\\frac{1}{2}x^4+2x^2\\right)dx = 2\\left[-\\frac{1}{10}x^5+\\frac{2}{3}x^3\\right]_0^2$\n$= 2\\left(-\\frac{32}{10}+\\frac{16}{3}\\right) = 2\\left(-\\frac{16}{5}+\\frac{16}{3}\\right) = 2\\times \\frac{32}{15} = \\frac{64}{15}$"
          }
        ]
      },
      "subQuestions": [],
      "tip": "도함수를 적분하여 $f(x)$를 구하고, $x$축과 서로 다른 세 점에서 만난다는 조건으로 극값을 대입해 $C$를 구합니다.",
      "answer": "$\\frac{64}{15}$"
    },
    {
      "id": 13,
      "source": "교과서 p.146 스스로 확인하기 01",
      "tag": "속도와 위치",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도가 $v(t)=2t-6t^2$일 때, 시각 $t=3$에서의 점 $\\mathrm{P}$의 위치를 구하시오. (단, $t\\ge 0$)",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "원점을 출발하였으므로 초기 위치는 $x(0)=0$입니다.\n시각 $t$에서의 점 $\\mathrm{P}$의 위치 $x(t)$는 $x(t) = x(0) + \\int_0^t v(u)du$입니다."
          },
          {
            "label": "2단계",
            "content": "시각 $t=3$에서의 위치는 다음과 같이 정적분으로 계산합니다.\n$x(3) = 0 + \\int_0^3 (2t-6t^2)dt$"
          },
          {
            "label": "3단계",
            "content": "적분을 계산합니다.\n$x(3) = [t^2-2t^3]_0^3 = (3^2 - 2\\times 3^3) - 0 = 9 - 54 = -45$\n따라서 시각 $t=3$에서의 위치는 $-45$입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "위치 공식 $x(t) = x(0) + \\int_0^t v(u)du$에 시각 $t=3$을 대입하여 위치를 계산합니다.",
      "answer": "$-45$"
    },
    {
      "id": 14,
      "source": "교과서 p.146 스스로 확인하기 03",
      "tag": "움직인 거리",
      "question": "수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도가 $v(t)=2t-t^2$일 때, $t=0$에서 $t=3$까지 점 $\\mathrm{P}$가 움직인 거리를 구하시오. (단, $t\\ge 0$)",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$v(t) = t(2-t) = 0$에서 $t=0$ 또는 $t=2$입니다.\n따라서 $0 \\le t \\le 2$에서는 $v(t) \\ge 0$이고, $2 \\le t \\le 3$에서는 $v(t) \\le 0$입니다."
          },
          {
            "label": "2단계",
            "content": "움직인 거리 $s$는 $s = \\int_0^3 |v(t)|dt = \\int_0^2 (2t-t^2)dt + \\int_2^3 (t^2-2t)dt$입니다."
          },
          {
            "label": "3단계",
            "content": "각 구간의 정적분을 계산합니다.\n$\\int_0^2 (2t-t^2)dt = \\left[t^2-\\frac{1}{3}t^3\\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$\n$\\int_2^3 (t^2-2t)dt = \\left[\\frac{1}{3}t^3-t^2\\right]_2^3 = (9-9) - \\left(\\frac{8}{3}-4\\right) = 0 - \\left(-\\frac{4}{3}\\right) = \\frac{4}{3}$\n따라서 움직인 거리는 $\\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "움직인 거리는 속도의 절댓값의 정적분 $\\int_0^3 |v(t)|dt$이므로 속도의 부호가 바뀌는 구간을 나누어 계산합니다.",
      "answer": "$\\frac{8}{3}$"
    },
    {
      "id": 15,
      "source": "교과서 p.146 스스로 확인하기 04",
      "tag": "속도와 거리의 실생활 활용",
      "question": "어느 놀이공원에서 수직방향으로 낙하하다가 어느 지점부터는 속도를 줄여 지면에 안전하게 착지하는 놀이기구가 있다. 이 기구가 낙하한 지 $t$초 후의 속도를 $v(t)\\text{ m/s}$라 하면 다음과 같다.",
      "formula": "v(t) = \\begin{cases} -10t & (0 \\le t \\le 2) \\\\ \\frac{20}{3}t-\\frac{100}{3} & (2 < t \\le 5) \\end{cases}",
      "qSuffix": "수직으로 낙하한 지 $5$초 후에 지면에 착지한다고 할 때, 낙하대의 높이를 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "낙하대의 높이는 놀이기구가 낙하하여 움직인 총 거리 $\\int_0^5 |v(t)|dt$와 같습니다.\n$0 \\le t \\le 5$에서 $v(t) \\le 0$이므로 $|v(t)| = -v(t)$입니다."
          },
          {
            "label": "2단계",
            "content": "구간별로 정적분을 계산합니다.\n$0 \\le t \\le 2$: $\\int_0^2 10t dt = [5t^2]_0^2 = 20$\n$2 < t \\le 5$: $\\int_2^5 \\left(-\\frac{20}{3}t+\\frac{100}{3}\\right)dt = \\left[-\\frac{10}{3}t^2+\\frac{100}{3}t\\right]_2^5$\n$= \\left(-\\frac{250}{3}+\\frac{500}{3}\\right) - \\left(-\\frac{40}{3}+\\frac{200}{3}\\right) = \\frac{250}{3} - \\frac{160}{3} = \\frac{90}{3} = 30$"
          },
          {
            "label": "3단계",
            "content": "두 구간의 낙하 거리를 합산하면 $20 + 30 = 50\\text{ m}$입니다.\n따라서 낙하대의 높이는 $50\\text{ m}$입니다."
          }
        ]
      },
      "subQuestions": [],
      "tip": "낙하대의 높이는 놀이기구가 $5$초 동안 실제로 낙하한 거리와 같으므로 속도의 절댓값을 구간별로 적분합니다.",
      "answer": "$50\\text{ m}$"
    },
    {
      "id": 16,
      "source": "교과서 p.149 스스로 마무리하기 01",
      "tag": "부정적분 기초",
      "question": "다항함수 $f(x)$가 $f'(x)=3x^2-2$, $f(0)=4$를 만족시킬 때, $f(3)$의 값은?",
      "choices": [
        "$21$",
        "$23$",
        "$25$",
        "$27$",
        "$29$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$f(x) = \\int (3x^2-2)dx = x^3-2x+C$ (단, $C$는 적분상수)"
          },
          {
            "label": "2단계",
            "content": "$f(0)=4$이므로 $C=4$입니다.\n따라서 $f(x) = x^3-2x+4$입니다."
          },
          {
            "label": "3단계",
            "content": "$f(3) = 3^3-2(3)+4 = 27-6+4 = 25$\n따라서 정답은 ③입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "도함수를 부정적분하여 $f(x)$의 식을 세우고, $f(0)=4$를 대입하여 $f(3)$을 계산합니다.",
      "answer": "③"
    },
    {
      "id": 17,
      "source": "교과서 p.149 스스로 마무리하기 02",
      "tag": "접선의 기울기와 부정적분",
      "question": "원점을 지나는 곡선 $y=f(x)$ 위의 임의의 점 $(x, f(x))$에서의 접선의 기울기가 $3x^2+8x$일 때, $f(-2)$의 값은?",
      "choices": [
        "$4$",
        "$5$",
        "$6$",
        "$7$",
        "$8$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "접선의 기울기가 $f'(x) = 3x^2+8x$입니다.\n양변을 부정적분하면 $f(x) = \\int (3x^2+8x)dx = x^3+4x^2+C$ (단, $C$는 적분상수)"
          },
          {
            "label": "2단계",
            "content": "곡선이 원점을 지나므로 $f(0)=0$에서 $C=0$입니다.\n따라서 $f(x) = x^3+4x^2$입니다."
          },
          {
            "label": "3단계",
            "content": "$f(-2) = (-2)^3+4(-2)^2 = -8 + 16 = 8$\n따라서 정답은 ⑤입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "접선의 기울기는 도함수 $f'(x)$이므로 부정적분 공식을 적용하고 원점 $(0,0)$ 조건을 대입합니다.",
      "answer": "⑤"
    },
    {
      "id": 18,
      "source": "교과서 p.149 스스로 마무리하기 03",
      "tag": "도함수와 극값",
      "question": "다항함수 $f(x)$의 도함수 $f'(x)$가 $f'(x)=3(x-1)(x-2)$이고, 함수 $f(x)$는 극댓값 $\\frac{3}{2}$을 갖는다. 함수 $f(x)$의 극솟값은?",
      "choices": [
        "$\\frac{1}{4}$",
        "$\\frac{1}{2}$",
        "$\\frac{3}{4}$",
        "$1$",
        "$\\frac{5}{4}$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$f'(x) = 3(x^2-3x+2) = 3x^2-9x+6$이므로\n$f(x) = \\int (3x^2-9x+6)dx = x^3-\\frac{9}{2}x^2+6x+C$ (단, $C$는 적분상수)"
          },
          {
            "label": "2단계",
            "content": "$f'(x)=0$에서 $x=1$ 또는 $x=2$입니다.\n$f'(x)$의 부호가 $x=1$에서 양에서 음으로 바뀌므로 극댓값은 $f(1)$입니다.\n$f(1) = 1-\\frac{9}{2}+6+C = \\frac{5}{2}+C = \\frac{3}{2} \\implies C = -1$"
          },
          {
            "label": "3단계",
            "content": "극솟값은 $x=2$에서 가지므로\n$f(2) = 2^3-\\frac{9}{2}(4)+6(2)-1 = 8-18+12-1 = 1$\n따라서 정답은 ④입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "도함수의 부호 변화로부터 극대·극소 위치를 결정하고, 극댓값을 대입하여 적분상수를 구합니다.",
      "answer": "④"
    },
    {
      "id": 19,
      "source": "교과서 p.149 스스로 마무리하기 04",
      "tag": "미분과 적분의 관계",
      "question": "다항함수 $f(x)$가 다음을 만족시킬 때, $f(4)$의 값은?",
      "formula": "f(x) = \\frac{d}{dx}\\int \\{3f(x)-2x^3\\}dx",
      "choices": [
        "$61$",
        "$62$",
        "$63$",
        "$64$",
        "$65$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "부정적분을 한 후 미분하면 피적분함수 자신이 되므로\n$\\frac{d}{dx}\\int \\{3f(x)-2x^3\\}dx = 3f(x)-2x^3$입니다."
          },
          {
            "label": "2단계",
            "content": "따라서 주어진 식은 $f(x) = 3f(x)-2x^3$이 됩니다.\n이항하여 정리하면 $2f(x) = 2x^3 \\implies f(x) = x^3$입니다."
          },
          {
            "label": "3단계",
            "content": "$f(4) = 4^3 = 64$\n따라서 정답은 ④입니다."
          }
        ]
      },
      "subQuestions": [],
      "tip": "$\\frac{d}{dx}\\int g(x)dx = g(x)$ 성질을 활용하여 $f(x)$에 대한 방정식을 풉니다.",
      "answer": "④"
    },
    {
      "id": 20,
      "source": "교과서 p.149 스스로 마무리하기 05",
      "tag": "부정적분 항등식",
      "question": "다항함수 $f(x)$의 부정적분 중 하나를 $F(x)$라 할 때, 함수 $F(x)$가 다음 조건을 만족시킨다. $f(0)$의 값은?",
      "formula": "(가) $F(x)=xf(x)+x^4-2x^2$\n(나) $F(1)=1$",
      "choices": [
        "$-\\frac{5}{3}$",
        "$-\\frac{4}{3}$",
        "$-1$",
        "$-\\frac{2}{3}$",
        "$-\\frac{1}{3}$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "조건 (가) $F(x)=xf(x)+x^4-2x^2$의 양변을 $x$에 대하여 미분하면\n$f(x) = f(x) + xf'(x) + 4x^3-4x$\n$xf'(x) = -4x^3+4x$에서 $f'(x) = -4x^2+4$입니다."
          },
          {
            "label": "2단계",
            "content": "$f(x) = \\int (-4x^2+4)dx = -\\frac{4}{3}x^3+4x+C$ (단, $C$는 적분상수)\n조건 (가)에 $x=1$을 대입하면 $F(1) = f(1)+1-2 = f(1)-1$입니다.\n조건 (나)에서 $F(1)=1$이므로 $f(1)-1=1 \\implies f(1)=2$입니다."
          },
          {
            "label": "3단계",
            "content": "$f(1) = -\\frac{4}{3}+4+C = \\frac{8}{3}+C = 2 \\implies C = -\\frac{2}{3}$\n따라서 $f(0) = C = -\\frac{2}{3}$이므로 정답은 ④입니다."
          }
        ]
      },
      "subQuestions": [],
      "tip": "조건 (가)의 양변을 $x$에 대해 미분하여 $f'(x)$를 구하고, $F(1)=1$을 대입하여 $f(0)$을 구합니다.",
      "answer": "④"
    },
    {
      "id": 21,
      "source": "교과서 p.149 스스로 마무리하기 06",
      "tag": "정적분의 성질",
      "question": "정적분 다음의 값은?",
      "formula": "\\int_{-2}^1 (3x^2+x)dx - \\int_2^1 (3x^2+x)dx",
      "choices": [
        "$16$",
        "$17$",
        "$18$",
        "$19$",
        "$20$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$-\\int_2^1 (3x^2+x)dx = \\int_1^2 (3x^2+x)dx$이므로 주어진 식은 다음과 같습니다.\n$\\int_{-2}^1 (3x^2+x)dx + \\int_1^2 (3x^2+x)dx = \\int_{-2}^2 (3x^2+x)dx$"
          },
          {
            "label": "2단계",
            "content": "적분 구간이 $[-2, 2]$로 대칭이므로 기함수 $x$는 $0$이 되고, 우함수 $3x^2$만 남습니다.\n$\\int_{-2}^2 (3x^2+x)dx = 2\\int_0^2 3x^2 dx$"
          },
          {
            "label": "3단계",
            "content": "$2\\int_0^2 3x^2 dx = 2[x^3]_0^2 = 2\\times 8 = 16$\n따라서 정답은 ①입니다."
          }
        ]
      },
      "subQuestions": [],
      "tip": "위끝과 아래끝을 바꾸면 정적분의 부호가 반대가 되는 성질 $-\\int_2^1 = \\int_1^2$을 이용해 구간을 합칩니다.",
      "answer": "①"
    },
    {
      "id": 22,
      "source": "교과서 p.150 스스로 마무리하기 07",
      "tag": "구간별 정의된 함수의 정적분",
      "question": "함수 $f(x) = \\begin{cases} 3x+2 & (x\\le 0) \\\\ 4 & (x>0) \\end{cases}$에 대하여 $\\int_{-1}^1 xf(x)dx$의 값은?",
      "choices": [
        "$1$",
        "$2$",
        "$3$",
        "$4$",
        "$5$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "적분 구간 $[-1, 1]$을 $[-1, 0]$과 $[0, 1]$로 나눕니다.\n$x \\le 0$일 때 $xf(x) = x(3x+2) = 3x^2+2x$\n$x > 0$일 때 $xf(x) = x\\times 4 = 4x$"
          },
          {
            "label": "2단계",
            "content": "각각의 정적분을 계산합니다.\n$\\int_{-1}^0 (3x^2+2x)dx = [x^3+x^2]_{-1}^0 = 0 - (-1+1) = 0$\n$\\int_0^1 4x dx = [2x^2]_0^1 = 2 - 0 = 2$"
          },
          {
            "label": "3단계",
            "content": "두 정적분의 값을 더하면 $0 + 2 = 2$입니다.\n따라서 정답은 ②입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "피적분함수 $xf(x)$를 $x=0$을 기준으로 구간을 나누어 각각 정적분합니다.",
      "answer": "②"
    },
    {
      "id": 23,
      "source": "교과서 p.150 스스로 마무리하기 08",
      "tag": "정적분과 미분계수",
      "question": "함수 $f(x)=2x^3+6x^2-5$에 대하여 다음 극한의 값은?",
      "formula": "\\lim_{x\\to 1}\\frac{1}{x-1}\\int_1^x f(t)dt",
      "choices": [
        "$1$",
        "$2$",
        "$3$",
        "$4$",
        "$5$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$f(t)$의 한 부정적분을 $F(t)$라 하면 $\\int_1^x f(t)dt = F(x)-F(1)$입니다."
          },
          {
            "label": "2단계",
            "content": "미분계수의 정의에 의해 다음이 성립합니다.\n$\\lim_{x\\to 1}\\frac{1}{x-1}\\int_1^x f(t)dt = \\lim_{x\\to 1}\\frac{F(x)-F(1)}{x-1} = F'(1) = f(1)$"
          },
          {
            "label": "3단계",
            "content": "$f(1) = 2(1)^3+6(1)^2-5 = 2+6-5 = 3$\n따라서 정답은 ③입니다."
          }
        ]
      },
      "subQuestions": [],
      "tip": "정적분으로 표현된 함수의 극한은 미분계수의 정의 공식 $\\lim_{x\\to 1}\\frac{F(x)-F(1)}{x-1}=f(1)$임을 이용합니다.",
      "answer": "③"
    },
    {
      "id": 24,
      "source": "교과서 p.150 스스로 마무리하기 09",
      "tag": "정적분 방정식",
      "question": "다항함수 $f(x)$가 모든 실수 $x$에 대하여 $\\int_1^x f(t)dt = x^3-3x^2+ax$를 만족시킬 때, $a+f(1)$의 값은? (단, $a$는 상수)",
      "choices": [
        "$1$",
        "$2$",
        "$3$",
        "$4$",
        "$5$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "주어진 등식에 $x=1$을 대입하면 좌변은 $\\int_1^1 f(t)dt = 0$이므로\n$1^3-3(1)^2+a(1) = 1-3+a = 0 \\implies a = 2$입니다."
          },
          {
            "label": "2단계",
            "content": "양변을 $x$에 대하여 미분합니다.\n$\\frac{d}{dx}\\left(\\int_1^x f(t)dt\\right) = f(x) = \\frac{d}{dx}(x^3-3x^2+2x) = 3x^2-6x+2$"
          },
          {
            "label": "3단계",
            "content": "$f(1) = 3(1)^2-6(1)+2 = 3-6+2 = -1$\n따라서 $a+f(1) = 2 + (-1) = 1$이므로 정답은 ①입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "양변에 $x=1$을 대입하여 $a$를 구하고, 양변을 $x$에 대해 미분하여 $f(x)$를 구합니다.",
      "answer": "①"
    },
    {
      "id": 25,
      "source": "교과서 p.150 스스로 마무리하기 10",
      "tag": "이차함수와 절댓값 정적분",
      "question": "이차함수 $f(x)$는 $x=3$에서 극댓값 $6$을 갖는다. $\\int_0^6 |f'(x)|dx=20$일 때, $f(6)$의 값은?",
      "choices": [
        "$-4$",
        "$-5$",
        "$-6$",
        "$-7$",
        "$-8$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$f(x)$는 최고차항 계수가 음수인 이차함수이며, $x=3$에서 극댓값 $6$을 가지므로 $f'(3)=0$, $f(3)=6$입니다.\n$0 \\le x < 3$에서 $f'(x) > 0$, $3 < x \\le 6$에서 $f'(x) < 0$입니다."
          },
          {
            "label": "2단계",
            "content": "절댓값 정적분 식을 구간별로 풉니다.\n$\\int_0^6 |f'(x)|dx = \\int_0^3 f'(x)dx - \\int_3^6 f'(x)dx = [f(x)]_0^3 - [f(x)]_3^6$\n$= \\{f(3)-f(0)\\} - \\{f(6)-f(3)\\} = 2f(3) - f(0) - f(6) = 20$"
          },
          {
            "label": "3단계",
            "content": "이차함수의 대칭축이 $x=3$이므로 $f(0)=f(6)$입니다.\n따라서 $2f(3)-2f(6)=20 \\implies f(3)-f(6)=10$\n$f(3)=6$이므로 $6-f(6)=10 \\implies f(6)=-4$\n따라서 정답은 ①입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "극대조건으로 $f'(x)$의 부호 구간을 나누어 $\\int_0^6 |f'(x)|dx$를 계산하고 함숫값 차이로 연결합니다.",
      "answer": "①"
    },
    {
      "id": 26,
      "source": "교과서 p.150 스스로 마무리하기 11",
      "tag": "주기성 함수와 정적분",
      "question": "실수 전체의 집합에서 연속인 함수 $f(x)$가 다음 조건을 만족시킬 때, 정적분 $\\int_{-2}^6 f(x)dx$의 값은?",
      "formula": "(가) 모든 실수 $x$에 대하여 $f(x+2)=f(x)+2$이다.\n(나) $\\int_0^2 f(x)dx = -\\frac{2}{3}$",
      "choices": [
        "$\\frac{8}{3}$",
        "$\\frac{10}{3}$",
        "$4$",
        "$\\frac{14}{3}$",
        "$\\frac{16}{3}$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "조건 (가)에서 $f(x) = f(x-2)+2$이므로 길이 $2$인 각 구간의 정적분을 구합니다.\n$\\int_{-2}^0 f(x)dx = \\int_0^2 \\{f(x)-2\\}dx = \\int_0^2 f(x)dx - 4$\n$\\int_2^4 f(x)dx = \\int_0^2 \\{f(x)+2\\}dx = \\int_0^2 f(x)dx + 4$\n$\\int_4^6 f(x)dx = \\int_0^2 \\{f(x)+4\\}dx = \\int_0^2 f(x)dx + 8$"
          },
          {
            "label": "2단계",
            "content": "구하고자 하는 정적분을 구간별로 분할합니다.\n$\\int_{-2}^6 f(x)dx = \\int_{-2}^0 f(x)dx + \\int_0^2 f(x)dx + \\int_2^4 f(x)dx + \\int_4^6 f(x)dx$\n$= \\left(\\int_0^2 f(x)dx - 4\\right) + \\int_0^2 f(x)dx + \\left(\\int_0^2 f(x)dx + 4\\right) + \\left(\\int_0^2 f(x)dx + 8\\right)$\n$= 4\\int_0^2 f(x)dx + 8$"
          },
          {
            "label": "3단계",
            "content": "조건 (나) $\\int_0^2 f(x)dx = -\\frac{2}{3}$를 대입합니다.\n$4\\left(-\\frac{2}{3}\\right) + 8 = -\\frac{8}{3} + \\frac{24}{3} = \\frac{16}{3}$\n따라서 정답은 ⑤입니다."
          }
        ]
      },
      "subQuestions": [],
      "tip": "조건 (가)의 성질을 이용해 길이가 2인 구간별 정적분을 $\\int_0^2 f(x)dx$로 나타냅니다.",
      "answer": "⑤"
    },
    {
      "id": 27,
      "source": "교과서 p.151 스스로 마무리하기 12",
      "tag": "대칭성과 부분적분적 성질",
      "question": "다항함수 $f(x)$가 모든 실수 $x$에 대하여 $f(-x)=-f(x)$를 만족시킨다. $\\int_{-2}^2 (x+2)f'(x)dx=24$일 때, $f(2)$의 값은?",
      "choices": [
        "$5$",
        "$6$",
        "$7$",
        "$8$",
        "$9$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$f(x)$가 기함수(원점 대칭)이므로 도함수 $f'(x)$는 우함수($y$축 대칭)입니다.\n따라서 $xf'(x)$는 (기함수) $\\times$ (우함수) = 기함수입니다."
          },
          {
            "label": "2단계",
            "content": "주어진 식을 전개하여 기함수 항을 지웁니다.\n$\\int_{-2}^2 (x+2)f'(x)dx = \\int_{-2}^2 xf'(x)dx + 2\\int_{-2}^2 f'(x)dx$\n기함수의 대칭 정적분은 $0$이므로\n$= 0 + 2\\left(2\\int_0^2 f'(x)dx\\right) = 4[f(x)]_0^2 = 4\\{f(2)-f(0)\\}$"
          },
          {
            "label": "3단계",
            "content": "$f(x)$가 기함수이므로 $f(0)=0$입니다.\n따라서 $4f(2) = 24 \\implies f(2) = 6$\n따라서 정답은 ②입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "$f(x)$가 기함수이면 $f'(x)$는 우함수, $xf'(x)$는 기함수라는 대칭 성질을 이용합니다.",
      "answer": "②"
    },
    {
      "id": 28,
      "source": "교과서 p.151 스스로 마무리하기 13",
      "tag": "정적분 방정식과 함수의 최솟값",
      "question": "모든 실수 $x$에 대하여 함수 $f(x)$가 $\\int_0^x (x-t)f(t)dt = \\frac{3}{4}x^4-5x^2$을 만족시킬 때, $f(x)$의 최솟값은?",
      "choices": [
        "$-10$",
        "$-8$",
        "$-6$",
        "$-4$",
        "$-2$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "좌변을 전개하면 $x\\int_0^x f(t)dt - \\int_0^x tf(t)dt = \\frac{3}{4}x^4-5x^2$입니다.\n양변을 $x$에 대하여 미분하면\n$\\int_0^x f(t)dt + xf(x) - xf(x) = \\int_0^x f(t)dt = 3x^3-10x$입니다."
          },
          {
            "label": "2단계",
            "content": "다시 한 번 양변을 $x$에 대하여 미분하면\n$f(x) = 9x^2-10$입니다."
          },
          {
            "label": "3단계",
            "content": "$f(x) = 9x^2-10$은 아래로 볼록한 포물선이므로 $x=0$일 때 최솟값을 갖습니다.\n따라서 최솟값은 $f(0) = -10$이므로 정답은 ①입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "좌변을 $x\\int_0^x f(t)dt - \\int_0^x tf(t)dt$로 분리한 후 양변을 2번 미분하여 $f(x)$를 구합니다.",
      "answer": "①"
    },
    {
      "id": 29,
      "source": "교과서 p.151 스스로 마무리하기 14",
      "tag": "도함수 부등식과 정적분의 최댓값",
      "question": "실수 전체의 집합에서 미분가능한 함수 $f(x)$가 다음 조건을 만족시킬 때, $\\int_{-2}^2 f(x)dx$의 최댓값은?",
      "formula": "(가) $-1 \\le x \\le 0$에서 $f(x)=x^2+2x$이다.\n(나) 모든 실수 $x$에 대하여 $0 \\le f'(x) \\le 2$이다.",
      "choices": [
        "$2$",
        "$\\frac{7}{3}$",
        "$\\frac{8}{3}$",
        "$3$",
        "$\\frac{10}{3}$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "조건 (가)에서 $f(-1) = (-1)^2+2(-1) = -1$, $f(0)=0$입니다.\n또한 $f'(x) = 2x+2$이므로 $f'(-1) = 0$, $f'(0) = 2$입니다."
          },
          {
            "label": "2단계",
            "content": "정적분 $\\int_{-2}^2 f(x)dx$가 최대가 되려면 $f(x)$의 그래프가 가능한 한 위쪽에 위치해야 합니다.\n$0 \\le f'(x) \\le 2$이므로 $x \\le -1$에서는 가장 큰 값인 $f(x) = -1$ (기울기 $0$)을 유지하고,\n$x \\ge 0$에서는 가장 빠르게 증가하도록 $f'(x) = 2$, 즉 $f(x) = 2x$이어야 합니다."
          },
          {
            "label": "3단계",
            "content": "최대일 때의 정적분을 구간별로 계산합니다.\n$\\int_{-2}^{-1} (-1)dx = [-x]_{-2}^{-1} = 1 - 2 = -1$\n$\\int_{-1}^0 (x^2+2x)dx = \\left[\\frac{1}{3}x^3+x^2\\right]_{-1}^0 = 0 - \\left(-\\frac{1}{3}+1\\right) = -\\frac{2}{3}$\n$\\int_0^2 2x dx = [x^2]_0^2 = 4$\n따라서 최댓값은 $-1 - \\frac{2}{3} + 4 = 3 - \\frac{2}{3} = \\frac{7}{3}$이므로 정답은 ②입니다."
          }
        ]
      },
      "subQuestions": [],
      "tip": "정적분이 최대가 되도록 주어진 도함수 범위의 성질을 이용하여 각 구간별로 최대 기울기 공식을 적용합니다.",
      "answer": "②"
    },
    {
      "id": 30,
      "source": "교과서 p.151 스스로 마무리하기 15",
      "tag": "사차곡선과 x축 사이의 넓이",
      "question": "곡선 $y=x^3(x-1)$과 $x$축으로 둘러싸인 도형의 넓이는?",
      "choices": [
        "$\\frac{1}{20}$",
        "$\\frac{1}{10}$",
        "$\\frac{3}{20}$",
        "$\\frac{1}{5}$",
        "$\\frac{1}{4}$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "곡선과 $x$축의 교점의 $x$좌표는 $x^3(x-1)=0$에서 $x=0$ 또는 $x=1$입니다.\n구간 $[0, 1]$에서 $x^3 \\ge 0$, $x-1 \\le 0$이므로 $x^3(x-1) \\le 0$입니다."
          },
          {
            "label": "2단계",
            "content": "따라서 둘러싸인 도형의 넓이 $S$는 다음과 같습니다.\n$S = \\int_0^1 -x^3(x-1)dx = \\int_0^1 (-x^4+x^3)dx$"
          },
          {
            "label": "3단계",
            "content": "$S = \\left[-\\frac{1}{5}x^5+\\frac{1}{4}x^4\\right]_0^1 = -\\frac{1}{5}+\\frac{1}{4} = \\frac{1}{20}$\n따라서 정답은 ①입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "구간 $[0, 1]$에서 $x^3(x-1) \\le 0$이므로 부호를 반대로 하여 정적분합니다.",
      "answer": "①"
    },
    {
      "id": 31,
      "source": "교과서 p.151 스스로 마무리하기 16",
      "tag": "두 곡선 사이의 넓이",
      "question": "두 곡선 $y=x^3-x^2+1$, $y=x^2+1$로 둘러싸인 도형의 넓이는?",
      "choices": [
        "$\\frac{1}{3}$",
        "$\\frac{2}{3}$",
        "$1$",
        "$\\frac{4}{3}$",
        "$\\frac{5}{3}$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "두 곡선의 교점의 $x$좌표를 구합니다.\n$x^3-x^2+1 = x^2+1 \\implies x^3-2x^2 = 0 \\implies x^2(x-2) = 0$\n따라서 교점은 $x=0$과 $x=2$입니다."
          },
          {
            "label": "2단계",
            "content": "구간 $[0, 2]$에서 $x=1$을 대입해 보면 $x^2+1 = 2 > x^3-x^2+1 = 1$이므로\n$y=x^2+1$이 $y=x^3-x^2+1$보다 위쪽에 있습니다."
          },
          {
            "label": "3단계",
            "content": "넓이를 계산합니다.\n$S = \\int_0^2 \\{(x^2+1)-(x^3-x^2+1)\\}dx = \\int_0^2 (-x^3+2x^2)dx$\n$= \\left[-\\frac{1}{4}x^4+\\frac{2}{3}x^3\\right]_0^2 = -4 + \\frac{16}{3} = \\frac{4}{3}$\n따라서 정답은 ④입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "두 곡선의 교점을 구하고, 위쪽 곡선에서 아래쪽 곡선을 뺀 식을 구간 적분합니다.",
      "answer": "④"
    },
    {
      "id": 32,
      "source": "교과서 p.152 스스로 마무리하기 17",
      "tag": "역함수와 넓이",
      "question": "함수 $f(x)=x^3-2x^2+2x$의 역함수를 $g(x)$라 할 때, 두 곡선 $y=f(x)$, $y=g(x)$로 둘러싸인 도형의 넓이는?",
      "choices": [
        "$\\frac{1}{8}$",
        "$\\frac{1}{6}$",
        "$\\frac{1}{4}$",
        "$\\frac{1}{2}$",
        "$1$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "곡선 $y=f(x)$와 직선 $y=x$의 교점의 $x$좌표를 구합니다.\n$x^3-2x^2+2x = x \\implies x^3-2x^2+x = 0 \\implies x(x-1)^2 = 0$\n교점의 $x$좌표는 $x=0$과 $x=1$입니다."
          },
          {
            "label": "2단계",
            "content": "구간 $[0, 1]$에서 $f(x) - x = x(x-1)^2 \\ge 0$이므로 곡선이 직선 $y=x$보다 위쪽에 있습니다.\n곡선 $y=f(x)$와 직선 $y=x$로 둘러싸인 넓이는 다음과 같습니다.\n$\\int_0^1 (x^3-2x^2+x)dx = \\left[\\frac{1}{4}x^4-\\frac{2}{3}x^3+\\frac{1}{2}x^2\\right]_0^1 = \\frac{1}{4}-\\frac{2}{3}+\\frac{1}{2} = \\frac{3-8+6}{12} = \\frac{1}{12}$"
          },
          {
            "label": "3단계",
            "content": "두 곡선 $y=f(x)$와 $y=g(x)$로 둘러싸인 도형의 넓이는 대칭성에 의해 이 값의 $2$배입니다.\n$S = 2\\times \\frac{1}{12} = \\frac{1}{6}$\n따라서 정답은 ②입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "역함수의 대칭 성질을 이용하여 $y=f(x)$와 $y=x$ 사이의 넓이 공식을 적용한 뒤 2배를 합니다.",
      "answer": "②"
    },
    {
      "id": 33,
      "source": "교과서 p.152 스스로 마무리하기 18",
      "tag": "주기함수와 도형의 넓이",
      "question": "모든 실수 $x$에 대하여 함수 $f(x)$는 다음 조건을 만족시킬 때, 곡선 $y=f(x)$ ($0\\le x\\le 6$)와 $x$축으로 둘러싸인 도형의 넓이는?",
      "formula": "(가) $f(x+2)=f(x)$\n(나) $f(x) = \\begin{cases} -x^2+2x & (0\\le x < 1) \\\\ (x-2)^2 & (1\\le x\\le 2) \\end{cases}$",
      "choices": [
        "$2$",
        "$\\frac{5}{2}$",
        "$3$",
        "$\\frac{7}{2}$",
        "$4$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "조건 (가)에 의해 $f(x)$는 주기가 $2$인 주기함수입니다.\n따라서 구간 $[0, 6]$은 길이가 $2$인 주기가 $3$번 반복되므로 전체 넓이는 한 주기 넓이의 $3$배입니다."
          },
          {
            "label": "2단계",
            "content": "한 주기 $[0, 2]$에서 $f(x) \\ge 0$이므로 넓이는 다음과 같습니다.\n$\\int_0^2 f(x)dx = \\int_0^1 (-x^2+2x)dx + \\int_1^2 (x-2)^2 dx$\n$\\int_0^1 (-x^2+2x)dx = \\left[-\\frac{1}{3}x^3+x^2\\right]_0^1 = -\\frac{1}{3}+1 = \\frac{2}{3}$\n$\\int_1^2 (x^2-4x+4)dx = \\left[\\frac{1}{3}x^3-2x^2+4x\\right]_1^2 = \\left(\\frac{8}{3}-8+8\\right) - \\left(\\frac{1}{3}-2+4\\right) = \\frac{8}{3} - \\frac{7}{3} = \\frac{1}{3}$\n따라서 한 주기 넓이는 $\\frac{2}{3} + \\frac{1}{3} = 1$입니다."
          },
          {
            "label": "3단계",
            "content": "구하는 도형의 넓이는 한 주기 넓이의 $3$배이므로\n$S = 3\\times 1 = 3$\n따라서 정답은 ③입니다."
          }
        ]
      },
      "subQuestions": [],
      "tip": "주기함수의 성질을 이용해 한 주기 구간 $[0, 2]$의 넓이를 구한 뒤 3배를 합니다.",
      "answer": "③"
    },
    {
      "id": 34,
      "source": "교과서 p.152 스스로 마무리하기 19",
      "tag": "속도-시간 그래프 해석",
      "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMjAgMTIwIiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjEyMCIgc3R5bGU9ImZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ1ByZXRlbmRhcmQnLCBzYW5zLXNlcmlmOyI+CiAgPGRlZnM+CiAgICA8bWFya2VyIGlkPSJhcnIteCIgdmlld0JveD0iMCAwIDEwIDEwIiByZWZYPSI2IiByZWZZPSI1IiBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI2IiBvcmllbnQ9ImF1dG8tc3RhcnQtcmV2ZXJzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMCAxLjUgTCA4IDUgTCAwIDguNSB6IiBmaWxsPSIjMTgxODFiIi8+CiAgICA8L21hcmtlcj4KICAgIDxtYXJrZXIgaWQ9ImFyci15IiB2aWV3Qm94PSIwIDAgMTAgMTAiIHJlZlg9IjYiIHJlZlk9IjUiIG1hcmtlcldpZHRoPSI2IiBtYXJrZXJIZWlnaHQ9IjYiIG9yaWVudD0iYXV0by1zdGFydC1yZXZlcnNlIj4KICAgICAgPHBhdGggZD0iTSAwIDEuNSBMIDggNSBMIDAgOC41IHoiIGZpbGw9IiMxODE4MWIiLz4KICAgIDwvbWFya2VyPgogIDwvZGVmcz4KCiAgPCEtLSBBeGVzIC0tPgogIDxsaW5lIHgxPSIyMCIgeTE9IjYwIiB4Mj0iMjAwIiB5Mj0iNjAiIHN0cm9rZT0iIzE4MTgxYiIgc3Ryb2tlLXdpZHRoPSIxLjIiIG1hcmtlci1lbmQ9InVybCgjYXJyLXgpIi8+CiAgPGxpbmUgeDE9IjMwIiB5MT0iMTEyIiB4Mj0iMzAiIHkyPSIxMiIgc3Ryb2tlPSIjMTgxODFiIiBzdHJva2Utd2lkdGg9IjEuMiIgbWFya2VyLWVuZD0idXJsKCNhcnIteSkiLz4KICA8dGV4dCB4PSIyMDQiIHk9IjY0IiBmb250LXNpemU9IjExIiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMxODE4MWIiPnQ8L3RleHQ+CiAgPHRleHQgeD0iMTQiIHk9IjE0IiBmb250LXNpemU9IjExIiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiMxODE4MWIiPnYodCk8L3RleHQ+CiAgPHRleHQgeD0iMTgiIHk9IjczIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTgxODFiIj5PPC90ZXh0PgoKICA8IS0tIERvdHRlZCBwcm9qZWN0aW9uIGxpbmVzIC0tPgogIDxsaW5lIHgxPSIzMCIgeTE9IjIwIiB4Mj0iMTM4IiB5Mj0iMjAiIHN0cm9rZT0iIzcxNzE3YSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIzLDIiLz4KICA8bGluZSB4MT0iMTM4IiB5MT0iMjAiIHgyPSIxMzgiIHkyPSI2MCIgc3Ryb2tlPSIjNzE3MTdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMiIvPgogIDxsaW5lIHgxPSIzMCIgeTE9IjEwMCIgeDI9IjY2IiB5Mj0iMTAwIiBzdHJva2U9IiM3MTcxN2EiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMywyIi8+CiAgPGxpbmUgeDE9IjY2IiB5MT0iNjAiIHgyPSI2NiIgeTI9IjEwMCIgc3Ryb2tlPSIjNzE3MTdhIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjMsMiIvPgoKICA8IS0tIEdyYXBoIGxpbmUgLS0+CiAgPHBhdGggZD0iTSAzMCA2MCBMIDY2IDEwMCBMIDEzOCAyMCBMIDE3NCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDkwOTBiIiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CgogIDwhLS0gTGFiZWxzIC0tPgogIDx0ZXh0IHg9IjYzIiB5PSI1NSIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+MjwvdGV4dD4KICA8dGV4dCB4PSI5OSIgeT0iNzMiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiMxODE4MWIiPjQ8L3RleHQ+CiAgPHRleHQgeD0iMTM1IiB5PSI3MyIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+NjwvdGV4dD4KICA8dGV4dCB4PSIxNzEiIHk9IjczIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTgxODFiIj44PC90ZXh0PgogIDx0ZXh0IHg9IjE4IiB5PSIyNCIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzE4MTgxYiI+MjwvdGV4dD4KICA8dGV4dCB4PSIxMyIgeT0iMTA0IiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTgxODFiIj4tMjwvdGV4dD4KPC9zdmc+",
      "imageAlt": "속도-시간 그래프",
      "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$ ($0\\le t\\le 8$)에서의 속도 $v(t)$의 그래프가 오른쪽 그림과 같다. 점 $\\mathrm{P}$의 시각 $t=0$에서 $t=6$까지 위치의 변화량을 $a$, 움직인 거리를 $b$라 할 때, $a+b$의 값은?",
      "choices": [
        "$1$",
        "$2$",
        "$3$",
        "$4$",
        "$5$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "그래프에서 $0\\le t\\le 4$ 구간은 $t$축 아래에 있는 밑변 $4$, 높이 $2$인 삼각형입니다.\n그 넓이를 $S_1$이라 하면 $S_1 = \\frac{1}{2}\\times 4\\times 2 = 4$입니다.\n$4\\le t\\le 6$ 구간은 $t$축 위에 있는 밑변 $2$, 높이 $2$인 삼각형입니다.\n그 넓이를 $S_2$이라 하면 $S_2 = \\frac{1}{2}\\times 2\\times 2 = 2$입니다."
          },
          {
            "label": "2단계",
            "content": "위치의 변화량 $a$는 정적분 값이므로\n$a = -S_1 + S_2 = -4 + 2 = -2$입니다.\n움직인 거리 $b$는 총 넓이의 합이므로\n$b = S_1 + S_2 = 4 + 2 = 6$입니다."
          },
          {
            "label": "3단계",
            "content": "$a+b = (-2) + 6 = 4$\n(참고: $a+b = (-S_1+S_2)+(S_1+S_2) = 2S_2 = 2\\times 2 = 4$)\n따라서 정답은 ④입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "속도-시간 그래프에서 각 구간별 도형의 넓이 성질을 이용해 위치 변화량과 거리를 공식으로 구합니다.",
      "answer": "④"
    },
    {
      "id": 35,
      "source": "교과서 p.152 스스로 마무리하기 20",
      "tag": "두 점의 위치와 만남",
      "question": "시각 $t=0$일 때 동시에 원점을 출발하여 수직선 위를 움직이는 두 점 $\\mathrm{P, Q}$의 시각 $t$에서의 속도를 각각 $f(t), g(t)$라 할 때, $f(t)=6t^2$, $g(t)=6t+9$이다. 출발한 후 두 점 $\\mathrm{P, Q}$가 시각 $t=a$에서 다시 만날 때, 상수 $a$의 값은?",
      "choices": [
        "$1$",
        "$\\frac{3}{2}$",
        "$2$",
        "$\\frac{5}{2}$",
        "$3$"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "두 점 모두 원점을 출발하였으므로 시각 $t$에서의 위치 $x_P(t), x_Q(t)$는 속도의 정적분입니다.\n$x_P(t) = \\int_0^t 6u^2 du = [2u^3]_0^t = 2t^3$\n$x_Q(t) = \\int_0^t (6u+9) du = [3u^2+9u]_0^t = 3t^2+9t$"
          },
          {
            "label": "2단계",
            "content": "두 점이 다시 만나는 순간은 $x_P(t) = x_Q(t)$ ($t>0$)입니다.\n$2t^3 = 3t^2+9t \\implies 2t^3-3t^2-9t = 0$\n$t(2t^2-3t-9) = 0 \\implies t(2t+3)(t-3) = 0$"
          },
          {
            "label": "3단계",
            "content": "$t>0$이므로 구하는 시각은 $t=3$입니다.\n따라서 $a=3$이므로 정답은 ⑤입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "두 점의 위치 공식을 세우고 두 위치가 같아지는 시각 $t$를 대입하여 방정식을 풉니다.",
      "answer": "⑤"
    },
    {
      "id": 36,
      "source": "교과서 p.152 스스로 마무리하기 21",
      "tag": "속도와 위치의 참·거짓 판정",
      "question": "수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 위치 $x(t)$가 두 상수 $a, b$에 대하여 $x(t)=t(t-2)(at+b)$ ($a\\ne 0$)이다. 점 $\\mathrm{P}$의 시각 $t$에서의 속도 $v(t)$가 $\\int_0^2 |v(t)|dt = 4$를 만족시킬 때, 보기에서 옳은 것만을 있는 대로 고른 것은?",
      "formula": "ㄱ. $\\int_0^2 v(t)dt = 0$\nㄴ. $|x(t_1)|>2$인 $t_1$이 열린구간 $(0, 2)$에 존재한다.\nㄷ. $0\\le t\\le 2$인 모든 $t$에 대하여 $|x(t)|<2$이면 $x(t_2)=0$인 $t_2$가 열린구간 $(0, 2)$에 존재한다.",
      "choices": [
        "ㄱ",
        "ㄱ, ㄴ",
        "ㄱ, ㄷ",
        "ㄴ, ㄷ",
        "ㄱ, ㄴ, ㄷ"
      ],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$x(0)=0$, $x(2)=0$이므로 $t=0$과 $t=2$에서의 위치는 모두 원점입니다.\n따라서 위치의 변화량은 $\\int_0^2 v(t)dt = x(2)-x(0) = 0 - 0 = 0$입니다. (ㄱ 참)"
          },
          {
            "label": "2단계",
            "content": "점 $\\mathrm{P}$가 $t=0$에서 $t=2$까지 움직인 총 거리는 $\\int_0^2 |v(t)|dt = 4$입니다.\n만약 어떤 $t_1 \\in (0, 2)$에서 $|x(t_1)| > 2$라면, 원점에서 $x(t_1)$까지 갔다가 다시 $t=2$에서 원점으로 돌아와야 하므로 움직인 거리는 적어도 $2|x(t_1)| > 4$가 되어 모순입니다. 따라서 $|x(t_1)| > 2$일 수 없습니다. (ㄴ 거짓)"
          },
          {
            "label": "3단계",
            "content": "모든 $t \\in [0, 2]$에서 $|x(t)| < 2$인데 왕복 거리가 $4$가 되려면 점 $\\mathrm{P}$는 양의 방향과 음의 방향을 모두 방문해야 합니다. 즉, 양수인 위치와 음수인 위치를 모두 거치므로 사이값 정리에 의해 $x(t_2)=0$인 $t_2$가 열린구간 $(0, 2)$에 적어도 하나 존재합니다. (ㄷ 참)\n따라서 옳은 것은 ㄱ, ㄷ이므로 정답은 ③입니다."
          }
        ]
      },
      "subQuestions": [],
      "tip": "위치의 변화량과 움직인 거리의 기하학적 의미 및 연속함수의 사이값 정리 성질을 적용합니다.",
      "answer": "③"
    },
    {
      "id": 37,
      "source": "교과서 p.153 스스로 마무리하기 22 [서술형]",
      "tag": "정적분 상수 치환 [서술형]",
      "question": "다항함수 $f(x)$가 다음을 만족시킬 때, $f(3)$의 값을 구하시오.",
      "formula": "f(x) = 3x^2 + 2\\int_0^1 f(t)dt",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$\\int_0^1 f(t)dt = k$ ($k$는 상수)로 놓으면 함수는 다음과 같이 표현됩니다.\n$f(x) = 3x^2 + 2k$"
          },
          {
            "label": "2단계",
            "content": "이 식을 치환한 정적분 정의에 대입하여 $k$의 값을 구합니다.\n$\\int_0^1 (3t^2+2k)dt = [t^3+2kt]_0^1 = 1+2k$\n$1+2k = k \\implies k = -1$"
          },
          {
            "label": "3단계",
            "content": "따라서 $f(x) = 3x^2 - 2$입니다.\n$x=3$을 대입하면\n$f(3) = 3(3)^2 - 2 = 27 - 2 = 25$"
          }
        ]
      },
      "subQuestions": [],
      "tip": "상수 정적분 $\\int_0^1 f(t)dt$를 $k$로 치환하고, 식에 다시 대입하여 일차방정식을 풉니다.",
      "answer": "$25$"
    },
    {
      "id": 38,
      "source": "교과서 p.153 스스로 마무리하기 23 [서술형]",
      "tag": "곡선과 직선의 넓이 [서술형]",
      "question": "곡선 $y=x^2-2x$와 직선 $y=ax$로 둘러싸인 도형의 넓이가 $36$일 때, 양수 $a$의 값을 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "곡선 $y=x^2-2x$와 직선 $y=ax$의 교점의 $x$좌표를 구합니다.\n$x^2-2x = ax \\implies x^2-(a+2)x = 0 \\implies x(x-(a+2)) = 0$\n$a>0$이므로 두 교점은 $x=0$과 $x=a+2$입니다."
          },
          {
            "label": "2단계",
            "content": "구간 $[0, a+2]$에서 직선이 포물선보다 위쪽에 있으므로 둘러싸인 넓이 $S$는 다음과 같습니다.\n$S = \\int_0^{a+2} \\{ax-(x^2-2x)\\}dx = \\int_0^{a+2} \\{-x^2+(a+2)x\\}dx$\n$= \\left[-\\frac{1}{3}x^3+\\frac{a+2}{2}x^2\\right]_0^{a+2} = \\frac{(a+2)^3}{6}$"
          },
          {
            "label": "3단계",
            "content": "넓이가 $36$이므로 등식을 세웁니다.\n$\\frac{(a+2)^3}{6} = 36 \\implies (a+2)^3 = 216 = 6^3$\n$a+2 = 6 \\implies a = 4$\n따라서 양수 $a$의 값은 $4$입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "교점의 $x$좌표를 $a$로 나타내고 포물선과 직선으로 둘러싸인 넓이 공식 $\\frac{1}{6}(\\beta-\\alpha)^3$을 이용합니다.",
      "answer": "$4$"
    },
    {
      "id": 39,
      "source": "교과서 p.153 스스로 마무리하기 24 [서술형]",
      "tag": "삼차함수 인수 설정과 넓이 [서술형]",
      "question": "최고차항의 계수가 $1$인 삼차함수 $f(x)$와 양수 $a$에 대하여 $f(-2)=f(0)=f(a)$이고 $f'(a)=15$이다. 함수 $g(x)$를 $g(x)=f(x)-f(0)$이라 할 때, 곡선 $y=g(x)$와 $x$축으로 둘러싸인 도형의 넓이를 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$f(-2)=f(0)=f(a)=k$라 하면 삼차함수 $f(x)$는 다음과 같이 나타낼 수 있습니다.\n$f(x)-k = x(x+2)(x-a)$\n따라서 $g(x) = f(x)-f(0) = f(x)-k = x(x+2)(x-a)$입니다."
          },
          {
            "label": "2단계",
            "content": "곱의 미분법으로 $f'(x)$를 구합니다.\n$f'(x) = (x+2)(x-a) + x(x-a) + x(x+2)$\n$x=a$를 대입하면 $f'(a) = a(a+2) = 15$입니다.\n$a^2+2a-15 = 0 \\implies (a+5)(a-3) = 0$\n$a>0$이므로 $a=3$입니다.\n따라서 $g(x) = x(x+2)(x-3) = x^3-x^2-6x$입니다."
          },
          {
            "label": "3단계",
            "content": "$g(x)=0$의 근은 $x=-2, 0, 3$입니다.\n둘러싸인 넓이 $S$는 $[-2, 0]$과 $[0, 3]$으로 나누어 구합니다.\n$S_1 = \\int_{-2}^0 (x^3-x^2-6x)dx = \\left[\\frac{1}{4}x^4-\\frac{1}{3}x^3-3x^2\\right]_{-2}^0 = 0 - \\left(4+\\frac{8}{3}-12\\right) = \\frac{16}{3}$\n$S_2 = \\int_0^3 (-x^3+x^2+6x)dx = \\left[-\\frac{1}{4}x^4+\\frac{1}{3}x^3+3x^2\\right]_0^3 = -\\frac{81}{4}+9+27 = \\frac{63}{4}$\n$S = S_1 + S_2 = \\frac{16}{3} + \\frac{63}{4} = \\frac{64+189}{12} = \\frac{253}{12}$"
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "$f(-2)=f(0)=f(a)=k$로 두어 인수분해된 식을 세우고, $f'(a)=15$를 대입하여 $a$를 결정합니다.",
      "answer": "$\\frac{253}{12}$"
    },
    {
      "id": 40,
      "source": "교과서 p.153 스스로 마무리하기 25 [서술형]",
      "tag": "속도와 두 점 사이의 거리 [서술형]",
      "question": "시각 $t=0$일 때 동시에 원점을 출발하여 수직선 위를 움직이는 두 점 $\\mathrm{P, Q}$의 시각 $t$에서의 속도가 각각 다음과 같다.",
      "formula": "v_1(t)=3t^2+2t,\\quad v_2(t)=2t^2+5t",
      "qSuffix": "출발한 후 두 점 $\\mathrm{P, Q}$의 속도가 같아지는 순간 두 점 $\\mathrm{P, Q}$ 사이의 거리를 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "두 점의 속도가 같아지는 시각을 구합니다.\n$v_1(t) = v_2(t) \\implies 3t^2+2t = 2t^2+5t$\n$t^2-3t = 0 \\implies t(t-3) = 0$\n출발 후이므로 $t>0$에서 $t=3$입니다."
          },
          {
            "label": "2단계",
            "content": "시각 $t=3$에서의 각 점의 위치를 구합니다.\n점 $\\mathrm{P}$: $x_1(3) = \\int_0^3 (3t^2+2t)dt = [t^3+t^2]_0^3 = 27+9 = 36$\n점 $\\mathrm{Q}$: $x_2(3) = \\int_0^3 (2t^2+5t)dt = \\left[\\frac{2}{3}t^3+\\frac{5}{2}t^2\\right]_0^3 = 18+\\frac{45}{2} = \\frac{81}{2}$"
          },
          {
            "label": "3단계",
            "content": "두 점 사이의 거리는 위치 차의 절댓값입니다.\n$\\text{거리} = |x_1(3)-x_2(3)| = \\left|36-\\frac{81}{2}\\right| = \\left|\\frac{72-81}{2}\\right| = \\frac{9}{2}$"
          }
        ]
      },
      "subQuestions": [],
      "tip": "속도가 같아지는 조건 $v_1(t)=v_2(t)$에서 시각 $t$를 구한 후, 각 점의 위치를 적분하여 차의 절댓값을 대입합니다.",
      "answer": "$\\frac{9}{2}$"
    },
    {
      "id": 41,
      "source": "교과서 서술형 22 쌍둥이 유제",
      "tag": "정적분 상수 치환 [쌍둥이 유제]",
      "question": "다항함수 $f(x)$가 다음을 만족시킬 때, $f(2)$의 값을 구하시오.",
      "formula": "f(x) = 6x^2 + 2\\int_0^1 f(t)dt",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$\\int_0^1 f(t)dt = k$ ($k$는 상수)로 놓으면\n$f(x) = 6x^2+2k$입니다."
          },
          {
            "label": "2단계",
            "content": "치환한 식을 정적분에 대입합니다.\n$\\int_0^1 (6t^2+2k)dt = [2t^3+2kt]_0^1 = 2+2k$\n$2+2k = k \\implies k = -2$"
          },
          {
            "label": "3단계",
            "content": "따라서 $f(x) = 6x^2-4$입니다.\n$x=2$를 대입하면 $f(2) = 6(2)^2-4 = 24-4 = 20$입니다."
          }
        ]
      },
      "subQuestions": [],
      "tip": "정적분 $\\int_0^1 f(t)dt$를 상수 $k$로 치환하고 대입하여 $k$의 값을 결정합니다.",
      "answer": "$20$"
    },
    {
      "id": 42,
      "source": "교과서 서술형 23 쌍둥이 유제",
      "tag": "곡선과 직선의 넓이 [쌍둥이 유제]",
      "question": "곡선 $y=x^2-x$와 직선 $y=ax$로 둘러싸인 도형의 넓이가 $36$일 때, 양수 $a$의 값을 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "곡선과 직선의 교점의 $x$좌표를 구합니다.\n$x^2-x = ax \\implies x^2-(a+1)x = 0 \\implies x(x-(a+1)) = 0$\n$a>0$이므로 교점은 $x=0$과 $x=a+1$입니다."
          },
          {
            "label": "2단계",
            "content": "구간 $[0, a+1]$에서 직선이 곡선보다 위쪽에 있으므로 둘러싸인 넓이 $S$는 다음과 같습니다.\n$S = \\int_0^{a+1} \\{ax-(x^2-x)\\}dx = \\frac{(a+1)^3}{6}$"
          },
          {
            "label": "3단계",
            "content": "넓이가 $36$이므로 등식을 세웁니다.\n$\\frac{(a+1)^3}{6} = 36 \\implies (a+1)^3 = 216 = 6^3$\n$a+1 = 6 \\implies a = 5$\n따라서 양수 $a$의 값은 $5$입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "포물선과 직선의 두 교점을 구하고 포물선 넓이 공식 $\\frac{1}{6}(\\beta-\\alpha)^3$을 이용합니다.",
      "answer": "$5$"
    },
    {
      "id": 43,
      "source": "교과서 서술형 24 쌍둥이 유제",
      "tag": "삼차함수 인수 설정과 넓이 [쌍둥이 유제]",
      "question": "최고차항의 계수가 $1$인 삼차함수 $f(x)$와 양수 $a$에 대하여 $f(-1)=f(0)=f(a)$이고 $f'(a)=6$이다. 함수 $g(x)$를 $g(x)=f(x)-f(0)$이라 할 때, 곡선 $y=g(x)$와 $x$축으로 둘러싸인 도형의 넓이를 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "$f(-1)=f(0)=f(a)=k$라 하면\n$g(x) = f(x)-k = x(x+1)(x-a)$입니다."
          },
          {
            "label": "2단계",
            "content": "$f'(x)$를 구하면 $f'(a) = a(a+1) = 6$입니다.\n$a^2+a-6 = 0 \\implies (a+3)(a-2) = 0$\n$a>0$이므로 $a=2$입니다.\n따라서 $g(x) = x(x+1)(x-2) = x^3-x^2-2x$입니다."
          },
          {
            "label": "3단계",
            "content": "$g(x)=0$의 세 실근은 $x=-1, 0, 2$입니다.\n$[-1, 0]$에서는 $g(x) \\ge 0$, $[0, 2]$에서는 $g(x) \\le 0$이므로\n$S_1 = \\int_{-1}^0 (x^3-x^2-2x)dx = \\left[\\frac{1}{4}x^4-\\frac{1}{3}x^3-x^2\\right]_{-1}^0 = 0 - \\left(\\frac{1}{4}+\\frac{1}{3}-1\\right) = \\frac{5}{12}$\n$S_2 = \\int_0^2 (-x^3+x^2+2x)dx = \\left[-\\frac{1}{4}x^4+\\frac{1}{3}x^3+x^2\\right]_0^2 = -4+\\frac{8}{3}+4 = \\frac{8}{3} = \\frac{32}{12}$\n따라서 전체 넓이는 $S = \\frac{5}{12}+\\frac{32}{12} = \\frac{37}{12}$입니다."
          }
        ]
      },
      "formula": "",
      "subQuestions": [],
      "tip": "$f(x)-f(0)=x(x+1)(x-a)$로 인수분해하고 미분계수 조건 $f'(a)=6$을 대입하여 $a$를 결정합니다.",
      "answer": "$\\frac{37}{12}$"
    },
    {
      "id": 44,
      "source": "교과서 서술형 25 쌍둥이 유제",
      "tag": "속도와 두 점 사이의 거리 [쌍둥이 유제]",
      "question": "시각 $t=0$일 때 동시에 원점을 출발하여 수직선 위를 움직이는 두 점 $\\mathrm{P, Q}$의 시각 $t$에서의 속도가 각각 다음과 같다.",
      "formula": "v_1(t)=3t^2+t,\\quad v_2(t)=t^2+5t",
      "qSuffix": "출발한 후 두 점 $\\mathrm{P, Q}$의 속도가 같아지는 순간 두 점 $\\mathrm{P, Q}$ 사이의 거리를 구하시오.",
      "choices": [],
      "solution": {
        "steps": [
          {
            "label": "1단계",
            "content": "두 점의 속도가 같아지는 시각을 구합니다.\n$3t^2+t = t^2+5t \\implies 2t^2-4t = 0 \\implies 2t(t-2) = 0$\n출발 후이므로 $t>0$에서 $t=2$입니다."
          },
          {
            "label": "2단계",
            "content": "시각 $t=2$에서의 각 점의 위치를 구합니다.\n$x_1(2) = \\int_0^2 (3t^2+t)dt = \\left[t^3+\\frac{1}{2}t^2\\right]_0^2 = 8 + 2 = 10$\n$x_2(2) = \\int_0^2 (t^2+5t)dt = \\left[\\frac{1}{3}t^3+\\frac{5}{2}t^2\\right]_0^2 = \\frac{8}{3} + 10 = \\frac{38}{3}$"
          },
          {
            "label": "3단계",
            "content": "두 점 사이의 거리는 위치 차의 절댓값입니다.\n$\\text{거리} = |x_1(2)-x_2(2)| = \\left|10-\\frac{38}{3}\\right| = \\left|-\\frac{8}{3}\\right| = \\frac{8}{3}$"
          }
        ]
      },
      "subQuestions": [],
      "tip": "속도가 같아지는 시각 $v_1(t)=v_2(t)$를 구하고, 위치를 적분 공식으로 구해 거리(절댓값)를 계산합니다.",
      "answer": "$\\frac{8}{3}$"
    }
  ]
};
