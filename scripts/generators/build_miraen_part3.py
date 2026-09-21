# -*- coding: utf-8 -*-
import json
import os
import sys

def build_data():
    problems = []

    # =========================================================================
    # Part 1: 중단원 1 (1. 부정적분과 정적분) — 134~137쪽 (21문항, id: 1 ~ 21)
    # =========================================================================

    # 1번
    problems.append({
        "id": 1,
        "source": "미래엔 교과서 134p 중단원 1번",
        "tag": "기본",
        "question": "다음 등식을 만족시키는 함수 $f(x)$를 구하시오. (단, $C$는 적분상수)",
        "formula": "",
        "subQuestions": [
            {"no": 1, "formula": "\\int f(x)\\,dx = x+C"},
            {"no": 2, "formula": "\\int f(x)\\,dx = \\frac{1}{2}x^2-3x+C"}
        ],
        "tip": "미적분의 기본정리 공식에 따라 부정적분의 양변을 $x$에 대해 미분하여 $f(x)$를 구합니다.",
        "answer": "(1) $f(x)=1$, (2) $f(x)=x-3$",
        "solution": {
            "steps": [
                {"label": "(1)", "content": "[1단계: 양변 미분] $\\frac{d}{dx}\\int f(x)\\,dx = \\frac{d}{dx}(x+C)$이므로 $f(x) = 1$ $\\therefore$ **$f(x)=1$**"},
                {"label": "(2)", "content": "[1단계: 양변 미분] $\\frac{d}{dx}\\int f(x)\\,dx = \\frac{d}{dx}\\left(\\frac{1}{2}x^2-3x+C\\right)$이므로 $f(x) = x-3$ $\\therefore$ **$f(x)=x-3$**"}
            ]
        }
    })

    # 2번
    problems.append({
        "id": 2,
        "source": "미래엔 교과서 134p 중단원 2번",
        "tag": "기본",
        "question": "다음 부정적분을 구하시오. (단, $C$는 적분상수)",
        "formula": "",
        "subQuestions": [
            {"no": 1, "formula": "\\int (-2x+1)\\,dx"},
            {"no": 2, "formula": "\\int (3x^2+4x-2)\\,dx"}
        ],
        "tip": "부정적분 공식 $\\int x^n\\,dx = \\frac{1}{n+1}x^{n+1}+C$을 대입하여 계산합니다.",
        "answer": "(1) $-x^2+x+C$, (2) $x^3+2x^2-2x+C$",
        "solution": {
            "steps": [
                {"label": "(1)", "content": "[1단계: 부정적분 계산] $\\int (-2x+1)\\,dx = -x^2+x+C$ $\\therefore$ **$-x^2+x+C$**"},
                {"label": "(2)", "content": "[1단계: 부정적분 계산] $\\int (3x^2+4x-2)\\,dx = x^3+2x^2-2x+C$ $\\therefore$ **$x^3+2x^2-2x+C$**"}
            ]
        }
    })

    # 3번
    problems.append({
        "id": 3,
        "source": "미래엔 교과서 134p 중단원 3번",
        "tag": "기본",
        "question": "다음을 구하시오.",
        "formula": "",
        "subQuestions": [
            {"no": 1, "formula": "\\frac{d}{dx}\\int_{1}^{x} (2t^2+3)\\,dt"},
            {"no": 2, "formula": "\\frac{d}{dx}\\int_{0}^{x} (t-2)^2\\,dt"}
        ],
        "tip": "미적분의 기본정리 공식 $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$를 대입합니다.",
        "answer": "(1) $2x^2+3$, (2) $(x-2)^2$",
        "solution": {
            "steps": [
                {"label": "(1)", "content": "[1단계: 공식 적용] 피적분함수의 $t$에 $x$를 대입하면 $2x^2+3$ $\\therefore$ **$2x^2+3$**"},
                {"label": "(2)", "content": "[1단계: 공식 적용] 피적분함수의 $t$에 $x$를 대입하면 $(x-2)^2$ $\\therefore$ **$(x-2)^2$**"}
            ]
        }
    })

    # 4번
    problems.append({
        "id": 4,
        "source": "미래엔 교과서 134p 중단원 4번",
        "tag": "기본",
        "question": "다음 정적분의 값을 구하시오.",
        "formula": "",
        "subQuestions": [
            {"no": 1, "formula": "\\int_{1}^{3} (x^2-3)\\,dx"},
            {"no": 2, "formula": "\\int_{0}^{2} (x^3-4x)\\,dx"}
        ],
        "tip": "부정적분을 구한 뒤 위끝과 아래끝 값을 대입하여 계산합니다.",
        "answer": "(1) $\\frac{8}{3}$, (2) $-4$",
        "solution": {
            "steps": [
                {"label": "(1)", "content": "[1단계: 정적분 계산] $\\left[\\frac{1}{3}x^3-3x\\right]_1^3 = (9-9) - \\left(\\frac{1}{3}-3\\right) = \\frac{8}{3}$ $\\therefore$ **$\\frac{8}{3}$**"},
                {"label": "(2)", "content": "[1단계: 정적분 계산] $\\left[\\frac{1}{4}x^4-2x^2\\right]_0^2 = (4-8) - 0 = -4$ $\\therefore$ **$-4$**"}
            ]
        }
    })

    # 5번
    problems.append({
        "id": 5,
        "source": "미래엔 교과서 135p 중단원 5번",
        "tag": "기본",
        "question": "다음 정적분의 값을 구하시오.",
        "formula": "",
        "subQuestions": [
            {"no": 1, "formula": "\\int_{-1}^{1} (x^2-x+1)\\,dx + \\int_{-1}^{1} (1+x-x^2)\\,dx"},
            {"no": 2, "formula": "\\int_{0}^{1} (4x^3+2x)\\,dx + \\int_{1}^{2} (4x^3+2x)\\,dx"}
        ],
        "tip": "정적분의 성질을 이용하여 (1)은 피적분함수를 합치고, (2)는 구간을 합쳐 대입합니다.",
        "answer": "(1) $4$, (2) $20$",
        "solution": {
            "steps": [
                {"label": "(1)", "content": "[1단계: 피적분함수 합치기] $\\int_{-1}^1 \\{(x^2-x+1)+(1+x-x^2)\\}\\,dx = \\int_{-1}^1 2\\,dx = [2x]_{-1}^1 = 2-(-2) = 4$ $\\therefore$ **$4$**"},
                {"label": "(2)", "content": "[1단계: 구간 합치기] $\\int_0^1 (4x^3+2x)\\,dx + \\int_1^2 (4x^3+2x)\\,dx = \\int_0^2 (4x^3+2x)\\,dx = [x^4+x^2]_0^2 = 16+4 = 20$ $\\therefore$ **$20$**"}
            ]
        }
    })

    # 6번
    problems.append({
        "id": 6,
        "source": "미래엔 교과서 135p 중단원 6번",
        "tag": "표준",
        "question": "함수 $f(x)$의 한 부정적분이 $x^3-x^2-2x+5$일 때, $f(-1)$의 값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "부정적분을 미분하면 원래 함수 $f(x)$가 됨을 이용하여 미분한 뒤 $x=-1$을 대입합니다.",
        "answer": "$3$",
        "solution": {
            "steps": [
                {"label": "[1단계: 도함수 계산]", "content": "$f(x) = \\frac{d}{dx}(x^3-x^2-2x+5) = 3x^2-2x-2$"},
                {"label": "[2단계: 값 대입]", "content": "$f(-1) = 3(-1)^2-2(-1)-2 = 3+2-2 = 3$ $\\therefore$ **$3$**"}
            ]
        }
    })

    # 7번
    problems.append({
        "id": 7,
        "source": "미래엔 교과서 135p 중단원 7번",
        "tag": "표준",
        "question": "다음을 모두 만족시키는 함수 $f(x)$를 구하시오.",
        "formula": "",
        "subQuestions": [
            {"no": 1, "formula": "f'(x)=-x^2+2x, \\quad f(1)=-2"},
            {"no": 2, "formula": "f'(x)=x^3-x^2+2, \\quad f(0)=1"}
        ],
        "tip": "도함수를 부정적분하여 적분상수를 둔 후 주어진 함숫값을 대입하여 상수를 구합니다.",
        "answer": "(1) $f(x)=-\\frac{1}{3}x^3+x^2-\\frac{8}{3}$, (2) $f(x)=\\frac{1}{4}x^4-\\frac{1}{3}x^3+2x+1$",
        "solution": {
            "steps": [
                {"label": "(1)", "content": "[1단계: 부정적분 및 상수 결정] $f(x) = -\\frac{1}{3}x^3+x^2+C$. $f(1) = -\\frac{1}{3}+1+C = -2 \\implies C = -\\frac{8}{3}$. $\\therefore$ **$f(x)=-\\frac{1}{3}x^3+x^2-\\frac{8}{3}$**"},
                {"label": "(2)", "content": "[1단계: 부정적분 및 상수 결정] $f(x) = \\frac{1}{4}x^4-\\frac{1}{3}x^3+2x+C$. $f(0) = 1 \\implies C = 1$. $\\therefore$ **$f(x)=\\frac{1}{4}x^4-\\frac{1}{3}x^3+2x+1$**"}
            ]
        }
    })

    # 8번
    problems.append({
        "id": 8,
        "source": "미래엔 교과서 135p 중단원 8번",
        "tag": "서술형",
        "question": "곡선 $y=f(x)$ 위의 점 $(x, f(x))$에서의 접선의 기울기가 $6x^2-2x$이다. 이 곡선이 점 $(-1, -4)$를 지날 때, 함수 $f(x)$를 구하는 풀이 과정과 답을 쓰시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "접선의 기울기는 $f'(x)$이므로 $f'(x)=6x^2-2x$를 부정적분한 뒤 점 $(-1, -4)$를 대입합니다.",
        "answer": "$f(x)=2x^3-x^2-1$",
        "solution": {
            "steps": [
                {"label": "[1단계: 도함수 설정]", "content": "점 $(x, f(x))$에서의 접선의 기울기가 $6x^2-2x$이므로 $f'(x) = 6x^2-2x$"},
                {"label": "[2단계: 부정적분 계산]", "content": "$f(x) = \\int (6x^2-2x)\\,dx = 2x^3-x^2+C$ ($C$는 적분상수)"},
                {"label": "[3단계: 상수 결정 및 완성]", "content": "곡선이 점 $(-1, -4)$를 지나므로 $f(-1) = 2(-1)^3-(-1)^2+C = -4 \\implies -3+C = -4 \\implies C = -1$. $\\therefore$ **$f(x)=2x^3-x^2-1$**"}
            ]
        }
    })

    # 9번
    problems.append({
        "id": 9,
        "source": "미래엔 교과서 135p 중단원 9번",
        "tag": "표준",
        "question": "삼차함수 $f(x)$의 도함수 $f'(x)$의 그래프가 점 $(-3, 0)$과 원점을 지나는 아래로 볼록한 포물선이다. 함수 $f(x)$의 극댓값이 $9$이고 극솟값이 $0$일 때, 함수 $f(x)$를 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "도함수의 부호 변화로 극대($x=-3$)와 극소($x=0$)를 찾고 부정적분 공식에 대입합니다.",
        "answer": "$f(x)=\\frac{2}{3}x^3+3x^2$",
        "solution": {
            "steps": [
                {"label": "[1단계: 도함수 식 작성]", "content": "$f'(x) = ax(x+3) = a(x^2+3x)$ ($a>0$). $x=-3$에서 극대, $x=0$에서 극소를 갖습니다."},
                {"label": "[2단계: 부정적분과 극솟값]", "content": "$f(x) = a\\left(\\frac{1}{3}x^3+\\frac{3}{2}x^2\\right)+C$. 극솟값 $f(0)=0$이므로 $C=0$."},
                {"label": "[3단계: 극댓값 대입]", "content": "극댓값 $f(-3) = a\\left(-9+\\frac{27}{2}\\right) = \\frac{9}{2}a = 9 \\implies a=2$. 따라서 $f(x) = 2\\left(\\frac{1}{3}x^3+\\frac{3}{2}x^2\\right) = \\frac{2}{3}x^3+3x^2$ $\\therefore$ **$f(x)=\\frac{2}{3}x^3+3x^2$**"}
            ]
        }
    })

    # 10번
    problems.append({
        "id": 10,
        "source": "미래엔 교과서 135p 중단원 10번",
        "tag": "표준",
        "question": "모든 실수 $x$에 대하여 등식 $\\int_{a}^{x} f(t)\\,dt = x^3+x^2-x-a$를 만족시키는 함수 $f(x)$와 양수 $a$의 값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "양변에 $x=a$를 대입하여 $a$를 구하고, 양변을 $x$에 대해 미분하여 $f(x)$를 구합니다.",
        "answer": "$f(x)=3x^2+2x-1, a=1$",
        "solution": {
            "steps": [
                {"label": "[1단계: $x=a$ 대입]", "content": "$0 = a^3+a^2-2a = a(a+2)(a-1)$. $a$가 양수이므로 $a=1$."},
                {"label": "[2단계: 양변 미분]", "content": "$\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x) = \\frac{d}{dx}(x^3+x^2-x-a) = 3x^2+2x-1$."},
                {"label": "[3단계: 결과 정리]", "content": "$f(x) = 3x^2+2x-1, a=1$ $\\therefore$ **$f(x)=3x^2+2x-1, a=1$**"}
            ]
        }
    })

    # 11번
    problems.append({
        "id": 11,
        "source": "미래엔 교과서 135p 중단원 11번",
        "tag": "표준",
        "question": "함수 $f(x)=\\begin{cases} x^2+1 & (x<1) \\\\ -x^2+3x & (x \\ge 1) \\end{cases}$일 때, 정적분 $\\int_{0}^{2} f(x)\\,dx$의 값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "적분 구간을 $x=1$을 기준으로 둘로 나누어 각 구간에 맞는 식을 대입하여 적분합니다.",
        "answer": "$\\frac{7}{2}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 구간 분할]", "content": "$\\int_0^2 f(x)\\,dx = \\int_0^1 (x^2+1)\\,dx + \\int_1^2 (-x^2+3x)\\,dx$"},
                {"label": "[2단계: 각 구간 적분]", "content": "$\\int_0^1 (x^2+1)\\,dx = \\left[\\frac{1}{3}x^3+x\\right]_0^1 = \\frac{4}{3}$, $\\int_1^2 (-x^2+3x)\\,dx = \\left[-\\frac{1}{3}x^3+\\frac{3}{2}x^2\\right]_1^2 = \\frac{10}{3} - \\frac{7}{6} = \\frac{13}{6}$"},
                {"label": "[3단계: 합 계산]", "content": "$\\frac{4}{3} + \\frac{13}{6} = \\frac{21}{6} = \\frac{7}{2}$ $\\therefore$ **$\\frac{7}{2}$**"}
            ]
        }
    })

    # 12번
    problems.append({
        "id": 12,
        "source": "미래엔 교과서 136p 중단원 12번",
        "tag": "표준",
        "question": "일차함수 $f(x)=ax+1$에 대하여 $\\int_{0}^{1} f(x)\\,dx = 0$일 때, 정적분 $\\int_{0}^{1} \\{f(x)\\}^2\\,dx$의 값을 구하시오. (단, $a$는 상수)",
        "formula": "",
        "subQuestions": [],
        "tip": "첫 번째 정적분 식에서 $a$를 구한 뒤 $\\{f(x)\\}^2$을 전개하여 정적분 공식에 대입합니다.",
        "answer": "$\\frac{1}{3}$",
        "solution": {
            "steps": [
                {"label": "[1단계: $a$의 값 구하기]", "content": "$\\int_0^1 (ax+1)\\,dx = \\left[\\frac{a}{2}x^2+x\\right]_0^1 = \\frac{a}{2}+1 = 0 \\implies a = -2$"},
                {"label": "[2단계: 제곱식 전개]", "content": "$\\{f(x)\\}^2 = (-2x+1)^2 = 4x^2-4x+1$"},
                {"label": "[3단계: 정적분 계산]", "content": "$\\int_0^1 (4x^2-4x+1)\\,dx = \\left[\\frac{4}{3}x^3-2x^2+x\\right]_0^1 = \\frac{4}{3}-2+1 = \\frac{1}{3}$ $\\therefore$ **$\\frac{1}{3}$**"}
            ]
        }
    })

    # 13번
    problems.append({
        "id": 13,
        "source": "미래엔 교과서 136p 중단원 13번",
        "tag": "표준",
        "question": "$\\int_{2}^{a} (3x^2-6x-4)\\,dx = 0$일 때, 상수 $a$의 값을 구하시오. (단, $a>2$)",
        "formula": "",
        "subQuestions": [],
        "tip": "정적분을 계산하여 $a$에 관한 삼차방정식을 얻은 뒤 인수분해하여 $a>2$인 근을 구합니다.",
        "answer": "$3$",
        "solution": {
            "steps": [
                {"label": "[1단계: 정적분 식 정리]", "content": "$[x^3-3x^2-4x]_2^a = (a^3-3a^2-4a) - (8-12-8) = a^3-3a^2-4a+12 = 0$"},
                {"label": "[2단계: 인수분해]", "content": "$a^2(a-3)-4(a-3) = (a^2-4)(a-3) = (a-2)(a+2)(a-3) = 0$"},
                {"label": "[3단계: 조건 확인]", "content": "$a>2$이므로 $a=3$ $\\therefore$ **$3$**"}
            ]
        }
    })

    # 14번
    problems.append({
        "id": 14,
        "source": "미래엔 교과서 136p 중단원 14번",
        "tag": "표준",
        "question": "연속함수 $f(x)$에 대하여 $\\int_{-3}^{2} f(x)\\,dx = 4$, $\\int_{-3}^{0} f(x)\\,dx = 1$, $\\int_{4}^{0} f(x)\\,dx = 2$일 때, 정적분 $\\int_{2}^{4} f(x)\\,dx$의 값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "정적분의 구간 쪼개기 성질 $\\int_a^c = \\int_a^b + \\int_b^c$을 적용하여 각 구간의 값을 대입합니다.",
        "answer": "$-5$",
        "solution": {
            "steps": [
                {"label": "[1단계: 구간별 정적분 도출]", "content": "$\\int_{-3}^2 f(x)\\,dx = \\int_{-3}^0 f(x)\\,dx + \\int_0^2 f(x)\\,dx \\implies 4 = 1 + \\int_0^2 f(x)\\,dx \\implies \\int_0^2 f(x)\\,dx = 3$"},
                {"label": "[2단계: 아래끝 위끝 교환]", "content": "$\\int_4^0 f(x)\\,dx = -\\int_0^4 f(x)\\,dx = 2 \\implies \\int_0^4 f(x)\\,dx = -2$"},
                {"label": "[3단계: 구하는 정적분 계산]", "content": "$\\int_2^4 f(x)\\,dx = \\int_0^4 f(x)\\,dx - \\int_0^2 f(x)\\,dx = -2 - 3 = -5$ $\\therefore$ **$-5$**"}
            ]
        }
    })

    # 15번
    problems.append({
        "id": 15,
        "source": "미래엔 교과서 136p 중단원 15번",
        "tag": "서술형",
        "question": "다항함수 $f(x)$가 모든 실수 $x$에 대하여 $f(x)=-2x^2+x+\\int_{0}^{2} f(t)\\,dt$가 성립할 때, $f(-1)$의 값을 구하는 풀이 과정과 답을 쓰시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "정적분 $\\int_0^2 f(t)\\,dt = k$ (상수)로 치환하고, 원래 식에 대입하여 $k$의 방정식을 풉니다.",
        "answer": "$\\frac{1}{3}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 상수 치환]", "content": "$\\int_0^2 f(t)\\,dt = k$ (상수)로 놓으면 $f(x) = -2x^2+x+k$"},
                {"label": "[2단계: $k$의 방정식 풀기]", "content": "$k = \\int_0^2 (-2t^2+t+k)\\,dt = \\left[-\\frac{2}{3}t^3+\\frac{1}{2}t^2+kt\\right]_0^2 = -\\frac{16}{3}+2+2k = 2k-\\frac{10}{3} \\implies k = \\frac{10}{3}$"},
                {"label": "[3단계: $f(-1)$ 계산]", "content": "$f(x) = -2x^2+x+\\frac{10}{3}$이므로 $f(-1) = -2(-1)^2+(-1)+\\frac{10}{3} = -3+\\frac{10}{3} = \\frac{1}{3}$ $\\therefore$ **$\\frac{1}{3}$**"}
            ]
        }
    })

    # 16번
    problems.append({
        "id": 16,
        "source": "미래엔 교과서 136p 중단원 16번",
        "tag": "표준",
        "question": "연속함수 $f(x)$가 다음을 모두 만족시킬 때, 정적분 $\\int_{-1}^{1} f(x)\\,dx$의 값을 구하시오.\n\n㈎ 함수 $y=f(x)$의 그래프는 $y$축에 대하여 대칭이다.\n㈏ 모든 실수 $x$에 대하여 $f(x)+f(-x)=3x^2+1$이다.",
        "formula": "",
        "subQuestions": [],
        "tip": "$y$축 대칭(우함수) 성질 $f(-x)=f(x)$을 대입하여 $f(x)$를 구하고 대칭 구간 적분 공식을 적용합니다.",
        "answer": "$2$",
        "solution": {
            "steps": [
                {"label": "[1단계: $y$축 대칭 조건 해석]", "content": "조건 ㈎에서 $f(-x) = f(x)$"},
                {"label": "[2단계: 함수식 도출]", "content": "조건 ㈏에 대입하면 $2f(x) = 3x^2+1 \\implies f(x) = \\frac{3}{2}x^2+\\frac{1}{2}$"},
                {"label": "[3단계: 우함수 정적분 계산]", "content": "$\\int_{-1}^1 f(x)\\,dx = 2\\int_0^1 \\left(\\frac{3}{2}x^2+\\frac{1}{2}\\right)\\,dx = 2\\left[\\frac{1}{2}x^3+\\frac{1}{2}x\\right]_0^1 = 2\\left(\\frac{1}{2}+\\frac{1}{2}\\right) = 2$ $\\therefore$ **$2$**"}
            ]
        }
    })

    # 17번
    problems.append({
        "id": 17,
        "source": "미래엔 교과서 136p 중단원 17번",
        "tag": "표준",
        "question": "$0 \\le a \\le 2$일 때, 함수 $f(a)=\\int_{0}^{2} |x-a|\\,dx$의 최솟값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "절댓값 기호가 0이 되는 $x=a$를 기준으로 구간을 $[0, a]$와 $[a, 2]$로 나누어 적분한 후 이차함수의 최솟값을 구합니다.",
        "answer": "$1$",
        "solution": {
            "steps": [
                {"label": "[1단계: 구간 분할 및 적분]", "content": "$f(a) = \\int_0^a (a-x)\\,dx + \\int_a^2 (x-a)\\,dx = \\left[ax-\\frac{1}{2}x^2\\right]_0^a + \\left[\\frac{1}{2}x^2-ax\\right]_a^2 = \\frac{1}{2}a^2 + \\left\\{(2-2a) - \\left(-\\frac{1}{2}a^2\\right)\\right\\} = a^2-2a+2$"},
                {"label": "[2단계: 완전제곱식 변형]", "content": "$f(a) = (a-1)^2+1$"},
                {"label": "[3단계: 최솟값 도출]", "content": "$0 \\le a \\le 2$이므로 $a=1$일 때 최솟값 $1$ $\\therefore$ **$1$**"}
            ]
        }
    })

    # 18번
    problems.append({
        "id": 18,
        "source": "미래엔 교과서 137p 중단원 18번",
        "tag": "발전",
        "question": "다항함수 $f(x)$에 대하여 $f'(x)=3x-a$, $\\lim_{x \\to 2} \\frac{f(x)}{x-2} = a+4$일 때, $a-f(1)$의 값을 구하시오. (단, $a$는 상수)",
        "formula": "",
        "subQuestions": [],
        "tip": "분모가 0으로 갈 때 수렴하므로 분자 $f(2)=0$이고 미분계수 $f'(2)=a+4$임을 이용하여 $a$를 구합니다.",
        "answer": "$\\frac{9}{2}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 극한 조건과 미분계수]", "content": "$x \\to 2$일 때 분모 $\\to 0$이므로 $f(2) = 0$. $\\lim_{x \\to 2} \\frac{f(x)-f(2)}{x-2} = f'(2) = a+4$"},
                {"label": "[2단계: $a$의 값 결정]", "content": "$f'(x) = 3x-a$이므로 $f'(2) = 6-a = a+4 \\implies 2a = 2 \\implies a = 1$. 즉 $f'(x) = 3x-1$"},
                {"label": "[3단계: $f(x)$ 부정적분 및 계산]", "content": "$f(x) = \\frac{3}{2}x^2-x+C$. $f(2) = 6-2+C = 0 \\implies C = -4$. $f(1) = \\frac{3}{2}-1-4 = -\\frac{7}{2}$. $a-f(1) = 1 - \\left(-\\frac{7}{2}\\right) = \\frac{9}{2}$ $\\therefore$ **$\\frac{9}{2}$**"}
            ]
        }
    })

    # 19번
    problems.append({
        "id": 19,
        "source": "미래엔 교과서 137p 중단원 19번",
        "tag": "발전",
        "question": "이차함수 $f(x)$에 대하여 $f(0)=2$이고 $\\int_{-1}^{1} f(x)\\,dx = \\int_{-1}^{0} f(x)\\,dx = \\int_{0}^{1} f(x)\\,dx$일 때, $f(-1)$의 값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "구간 쪼개기 성질에 의해 세 정적분 값이 모두 0임을 파악하고 $f(x)=ax^2+bx+2$를 대입합니다.",
        "answer": "$-4$",
        "solution": {
            "steps": [
                {"label": "[1단계: 정적분 값 0 확인]", "content": "$\\int_{-1}^1 f(x)\\,dx = \\int_{-1}^0 f(x)\\,dx + \\int_0^1 f(x)\\,dx$. 세 값이 모두 같으므로 각각 0이어야 합니다."},
                {"label": "[2단계: 식 설정 및 정적분]", "content": "$f(x) = ax^2+bx+2$. $\\int_0^1 f(x)\\,dx = \\frac{a}{3}+\\frac{b}{2}+2 = 0$, $\\int_{-1}^0 f(x)\\,dx = \\frac{a}{3}-\\frac{b}{2}+2 = 0$"},
                {"label": "[3단계: 연립방정식 풀이]", "content": "두 식을 빼면 $b=0$, 더하면 $\\frac{2}{3}a+4=0 \\implies a=-6$. $f(x) = -6x^2+2$이므로 $f(-1) = -6(1)+2 = -4$ $\\therefore$ **$-4$**"}
            ]
        }
    })

    # 20번
    problems.append({
        "id": 20,
        "source": "미래엔 교과서 137p 중단원 20번",
        "tag": "발전",
        "question": "연속함수 $f(x)$가 모든 실수 $x$에 대하여 $\\int_{1}^{x} (x-t)f(t)\\,dt = ax^2+2x+b$를 만족시킬 때, $ab$의 값을 구하시오. (단, $a$와 $b$는 상수)",
        "formula": "",
        "subQuestions": [],
        "tip": "$x$를 인테그럴 밖으로 분리한 후 양변 미분 공식과 $x=1$ 대입을 반복 활용합니다.",
        "answer": "$1$",
        "solution": {
            "steps": [
                {"label": "[1단계: $x=1$ 첫 번째 대입]", "content": "좌변 $= 0$이므로 $a(1)^2+2(1)+b = 0 \\implies a+b = -2$ (식 1)"},
                {"label": "[2단계: 식 전개 및 양변 미분]", "content": "$x\\int_1^x f(t)\\,dt - \\int_1^x tf(t)\\,dt = ax^2+2x+b$. 양변을 $x$에 대해 미분하면 $\\int_1^x f(t)\\,dt + xf(x) - xf(x) = 2ax+2 \\implies \\int_1^x f(t)\\,dt = 2ax+2$"},
                {"label": "[3단계: $x=1$ 두 번째 대입 및 $ab$ 계산]", "content": "$0 = 2a+2 \\implies a = -1$. 식 1에 대입하면 $b = -1$. 따라서 $ab = (-1)(-1) = 1$ $\\therefore$ **$1$**"}
            ]
        }
    })

    # 21번
    problems.append({
        "id": 21,
        "source": "미래엔 교과서 137p 중단원 21번",
        "tag": "서술형",
        "question": "두 연속함수 $f(x)$와 $g(x)$가 모든 실수 $x$에 대하여 $f(x)=20x+\\int_{0}^{1} g(x)\\,dx$, $g(x)=30x^2+x\\int_{0}^{1} f(x)\\,dx$를 만족시킬 때, 정적분 $\\int_{0}^{1} \\{f(x)+g(x)\\}\\,dx$의 값을 구하는 풀이 과정과 답을 쓰시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "두 정적분 $\\int_0^1 f(x)\\,dx = A$, $\\int_0^1 g(x)\\,dx = B$로 두고 각각의 식에 대입하여 $A, B$의 연립방정식을 풉니다.",
        "answer": "$70$",
        "solution": {
            "steps": [
                {"label": "[1단계: 상수 치환]", "content": "$\\int_0^1 f(x)\\,dx = A$, $\\int_0^1 g(x)\\,dx = B$ ($A, B$는 상수)로 놓으면 $f(x) = 20x+B$, $g(x) = 30x^2+Ax$"},
                {"label": "[2단계: 연립방정식 수립 및 풀이]", "content": "$A = \\int_0^1 (20x+B)\\,dx = [10x^2+Bx]_0^1 = 10+B$, $B = \\int_0^1 (30x^2+Ax)\\,dx = [10x^3+\\frac{1}{2}Ax^2]_0^1 = 10+\\frac{1}{2}A$. 연립하면 $B = A-10 \\implies A-10 = 10+\\frac{1}{2}A \\implies A = 40, B = 30$"},
                {"label": "[3단계: 정적분 합 도출]", "content": "$\\int_0^1 \\{f(x)+g(x)\\}\\,dx = \\int_0^1 f(x)\\,dx + \\int_0^1 g(x)\\,dx = A+B = 40+30 = 70$ $\\therefore$ **$70$**"}
            ]
        }
    })

    # =========================================================================
    # Part 2: 중단원 2 (2. 정적분의 활용) — 150~153쪽 (21문항, id: 22 ~ 42)
    # =========================================================================

    # 22번 (중단원 2 1번)
    problems.append({
        "id": 22,
        "source": "미래엔 교과서 150p 중단원 1번",
        "tag": "기본",
        "question": "다음 곡선과 $x$축으로 둘러싸인 도형의 넓이를 구하시오.",
        "formula": "",
        "subQuestions": [
            {"no": 1, "formula": "y=9-x^2"},
            {"no": 2, "formula": "y=(x-2)(x-6)"}
        ],
        "tip": "$x$절편을 구하고 포물선과 $x$축 사이의 넓이 공식 $S = \\frac{|a|}{6}(\\beta-\\alpha)^3$을 대입합니다.",
        "answer": "(1) $36$, (2) $\\frac{32}{3}$",
        "solution": {
            "steps": [
                {"label": "(1)", "content": "[1단계: 공식 대입] $9-x^2=0 \\implies x=\\pm 3$. $S = \\frac{1}{6}(3-(-3))^3 = \\frac{216}{6} = 36$ $\\therefore$ **$36$**"},
                {"label": "(2)", "content": "[1단계: 공식 대입] $(x-2)(x-6)=0 \\implies x=2, 6$. $S = \\frac{1}{6}(6-2)^3 = \\frac{64}{6} = \\frac{32}{3}$ $\\therefore$ **$\\frac{32}{3}$**"}
            ]
        }
    })

    # 23번 (중단원 2 2번)
    problems.append({
        "id": 23,
        "source": "미래엔 교과서 150p 중단원 2번",
        "tag": "기본",
        "question": "다음을 구하시오.",
        "formula": "",
        "subQuestions": [
            {"no": 1, "formula": "곡선 $y=x^2-5x+4$와 $x$축 및 두 직선 $x=0$과 $x=4$로 둘러싸인 도형의 넓이"},
            {"no": 2, "formula": "곡선 $y=x^3+x^2-2x$와 $x$축으로 둘러싸인 도형의 넓이"}
        ],
        "tip": "함수의 그래프가 $x$축 위인지 아래인지 부호를 판별하여 구간을 나누어 정적분합니다.",
        "answer": "(1) $\\frac{19}{3}$, (2) $\\frac{37}{12}$",
        "solution": {
            "steps": [
                {"label": "(1)", "content": "[1단계: 구간 분할 및 적분] $x^2-5x+4 = (x-1)(x-4)$. $[0, 1]$에서는 $\\ge 0$, $[1, 4]$에서는 $\\le 0$. $S = \\int_0^1 (x^2-5x+4)\\,dx - \\int_1^4 (x^2-5x+4)\\,dx = \\left[\\frac{1}{3}x^3-\\frac{5}{2}x^2+4x\\right]_0^1 + \\frac{1}{6}(4-1)^3 = \\frac{11}{6} + \\frac{27}{6} = \\frac{38}{6} = \\frac{19}{3}$ $\\therefore$ **$\\frac{19}{3}$**"},
                {"label": "(2)", "content": "[1단계: 구간 분할 및 적분] $x^3+x^2-2x = x(x+2)(x-1)$. $[-2, 0]$에서 $\\ge 0$, $[0, 1]$에서 $\\le 0$. $S = \\int_{-2}^0 (x^3+x^2-2x)\\,dx - \\int_0^1 (x^3+x^2-2x)\\,dx = \\left[\\frac{1}{4}x^4+\\frac{1}{3}x^3-x^2\\right]_{-2}^0 - \\left[\\frac{1}{4}x^4+\\frac{1}{3}x^3-x^2\\right]_0^1 = \\frac{8}{3} - \\left(-\\frac{5}{12}\\right) = \\frac{37}{12}$ $\\therefore$ **$\\frac{37}{12}$**"}
            ]
        }
    })

    # 24번 (중단원 2 3번)
    problems.append({
        "id": 24,
        "source": "미래엔 교과서 150p 중단원 3번",
        "tag": "기본",
        "question": "다음 곡선과 직선으로 둘러싸인 도형의 넓이를 구하시오.",
        "formula": "",
        "subQuestions": [
            {"no": 1, "formula": "y=x^2+3x-4, \\quad y=4x+2"},
            {"no": 2, "formula": "y=-x^2+5, \\quad y=-x+5"}
        ],
        "tip": "곡선과 직선의 교점의 $x$좌표를 구한 뒤 공식 $S = \\frac{|a|}{6}(\\beta-\\alpha)^3$을 대입합니다.",
        "answer": "(1) $\\frac{125}{6}$, (2) $\\frac{1}{6}$",
        "solution": {
            "steps": [
                {"label": "(1)", "content": "[1단계: 교점 및 공식] $x^2+3x-4 = 4x+2 \\implies x^2-x-6 = 0 \\implies (x+2)(x-3) = 0$. $S = \\frac{1}{6}(3-(-2))^3 = \\frac{125}{6}$ $\\therefore$ **$\\frac{125}{6}$**"},
                {"label": "(2)", "content": "[1단계: 교점 및 공식] $-x^2+5 = -x+5 \\implies x^2-x = 0 \\implies x(x-1) = 0$. $S = \\frac{1}{6}(1-0)^3 = \\frac{1}{6}$ $\\therefore$ **$\\frac{1}{6}$**"}
            ]
        }
    })

    # 25번 (중단원 2 4번)
    problems.append({
        "id": 25,
        "source": "미래엔 교과서 150p 중단원 4번",
        "tag": "기본",
        "question": "두 곡선 $y=x^2-2x-1$과 $y=-2x^2+4x-1$로 둘러싸인 도형의 넓이를 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "두 곡선을 연립하여 교점의 $x$좌표를 구하고 두 곡선 사이의 넓이 공식을 대입합니다.",
        "answer": "$4$",
        "solution": {
            "steps": [
                {"label": "[1단계: 교점 계산]", "content": "$x^2-2x-1 = -2x^2+4x-1 \\implies 3x^2-6x = 0 \\implies 3x(x-2) = 0 \\implies x=0, 2$"},
                {"label": "[2단계: 넓이 공식 적용]", "content": "$S = \\frac{3}{6}(2-0)^3 = \\frac{1}{2} \\times 8 = 4$ $\\therefore$ **$4$**"}
            ]
        }
    })

    # 26번 (중단원 2 5번)
    problems.append({
        "id": 26,
        "source": "미래엔 교과서 151p 중단원 5번",
        "tag": "기본",
        "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도가 $v(t)=6-2t$일 때, 시각 $t=3$에서 점 $\\mathrm{P}$의 위치를 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "위치 공식 $x(t) = x_0 + \\int_0^t v(s)\\,ds$에 $x_0=0$과 $t=3$을 대입합니다.",
        "answer": "$9$",
        "solution": {
            "steps": [
                {"label": "[1단계: 위치 공식 적용]", "content": "$x(3) = 0 + \\int_0^3 (6-2t)\\,dt$"},
                {"label": "[2단계: 정적분 계산]", "content": "$[6t-t^2]_0^3 = (18-9) - 0 = 9$ $\\therefore$ **$9$**"}
            ]
        }
    })

    # 27번 (중단원 2 6번)
    problems.append({
        "id": 27,
        "source": "미래엔 교과서 151p 중단원 6번",
        "tag": "표준",
        "question": "곡선 $y=x^4-4x^2$과 $x$축으로 둘러싸인 도형의 넓이를 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "$x$절편을 구하고 $y$축 대칭(우함수) 성질을 활용하여 $x \\ge 0$ 구간의 넓이를 구한 뒤 2배를 대입합니다.",
        "answer": "$\\frac{128}{15}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 교점 및 부호]", "content": "$x^4-4x^2 = x^2(x+2)(x-2) = 0 \\implies x=0, \\pm 2$. 구간 $[-2, 2]$에서 $y \\le 0$."},
                {"label": "[2단계: 대칭성 적용 및 적분]", "content": "$S = 2\\int_0^2 (-x^4+4x^2)\\,dx = 2\\left[-\\frac{1}{5}x^5+\\frac{4}{3}x^3\\right]_0^2 = 2\\left(-\\frac{32}{5}+\\frac{32}{3}\\right) = 2 \\times \\frac{64}{15} = \\frac{128}{15}$ $\\therefore$ **$\\frac{128}{15}$**"}
            ]
        }
    })

    # 28번 (중단원 2 7번)
    problems.append({
        "id": 28,
        "source": "미래엔 교과서 151p 중단원 7번",
        "tag": "표준",
        "question": "곡선 $y=-x^3$과 $x$축 및 두 직선 $x=-3$과 $x=a$로 둘러싸인 도형의 넓이가 $\\frac{81}{2}$일 때, 양수 $a$의 값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "$x=0$을 경계로 구간을 나누어 넓이 식을 세우고 양수 $a$의 값을 대입 계산합니다.",
        "answer": "$3$",
        "solution": {
            "steps": [
                {"label": "[1단계: 구간 분할 넓이 식]", "content": "$[-3, 0]$에서는 $y \\ge 0$, $[0, a]$에서는 $y \\le 0$. $S = \\int_{-3}^0 (-x^3)\\,dx + \\int_0^a x^3\\,dx$"},
                {"label": "[2단계: 정적분 계산]", "content": "$\\left[-\\frac{1}{4}x^4\\right]_{-3}^0 + \\left[\\frac{1}{4}x^4\\right]_0^a = \\frac{81}{4} + \\frac{a^4}{4} = \\frac{81}{2}$"},
                {"label": "[3단계: $a$의 값 도출]", "content": "$\\frac{a^4}{4} = \\frac{81}{4} \\implies a^4 = 81$. $a>0$이므로 $a=3$ $\\therefore$ **$3$**"}
            ]
        }
    })

    # 29번 (중단원 2 8번)
    problems.append({
        "id": 29,
        "source": "미래엔 교과서 151p 중단원 8번",
        "tag": "표준",
        "question": "삼차함수 $f(x)$의 도함수 $f'(x)$의 그래프가 점 $(0, 3)$을 지나고 $x$축과 두 점 $(1, 0), (3, 0)$에서 만나는 아래로 볼록한 포물선이다. $f(0)=0$일 때, 곡선 $y=f(x)$와 $x$축으로 둘러싸인 도형의 넓이를 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "도함수 $f'(x)$를 구한 뒤 부정적분하여 $f(x)$를 완성하고 $x$축과의 교점을 찾아 정적분 공식에 대입합니다.",
        "answer": "$\\frac{9}{4}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 도함수 및 함수식 완성]", "content": "$f'(x) = a(x-1)(x-3)$. $(0, 3)$을 지나므로 $3a=3 \\implies a=1$. $f'(x)=x^2-4x+3$. $f(x) = \\frac{1}{3}x^3-2x^2+3x+C$. $f(0)=0 \\implies C=0$. $f(x) = \\frac{1}{3}x(x-3)^2$"},
                {"label": "[2단계: 교점 및 넓이 계산]", "content": "곡선 $y=f(x)$와 $x$축의 교점은 $x=0, 3$. $[0, 3]$에서 $f(x) \\ge 0$. $S = \\int_0^3 \\left(\\frac{1}{3}x^3-2x^2+3x\\right)\\,dx = \\left[\\frac{1}{12}x^4-\\frac{2}{3}x^3+\\frac{3}{2}x^2\\right]_0^3 = \\frac{27}{4}-18+\\frac{27}{2} = \\frac{9}{4}$ $\\therefore$ **$\\frac{9}{4}$**"}
            ]
        }
    })

    # 30번 (중단원 2 9번)
    problems.append({
        "id": 30,
        "source": "미래엔 교과서 151p 중단원 9번",
        "tag": "표준",
        "question": "함수 $y=x|x-3|$의 그래프와 직선 $y=3x$로 둘러싸인 도형의 넓이를 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "절댓값 기호 안의 식 부호에 따라 $x<3$과 $x \\ge 3$으로 구간을 나누어 교점을 구합니다.",
        "answer": "$27$",
        "solution": {
            "steps": [
                {"label": "[1단계: 구간별 식과 교점]", "content": "(i) $x<3$일 때: $y = -x(x-3) = -x^2+3x$. $-x^2+3x = 3x \\implies x=0$.\n(ii) $x \\ge 3$일 때: $y = x(x-3) = x^2-3x$. $x^2-3x = 3x \\implies x(x-6) = 0 \\implies x=6$."},
                {"label": "[2단계: 넓이 식 분할 및 계산]", "content": "$[0, 3]$에서는 직선이 곡선 위에 있으므로 $S_1 = \\int_0^3 \\{3x - (-x^2+3x)\\}\\,dx = \\int_0^3 x^2\\,dx = \\left[\\frac{1}{3}x^3\\right]_0^3 = 9$.\n$[3, 6]$에서도 직선이 곡선 위에 있으므로 $S_2 = \\int_3^6 \\{3x - (x^2-3x)\\}\\,dx = \\int_3^6 (-x^2+6x)\\,dx = \\left[-\\frac{1}{3}x^3+3x^2\\right]_3^6 = 36 - 18 = 18$."},
                {"label": "[3단계: 총 넓이 도출]", "content": "$S = 9 + 18 = 27$ $\\therefore$ **$27$**"}
            ]
        }
    })

    # 31번 (중단원 2 10번)
    problems.append({
        "id": 31,
        "source": "미래엔 교과서 151p 중단원 10번",
        "tag": "서술형",
        "question": "곡선 $y=x^3+1$ 위의 점 $(1, 2)$에서의 접선과 이 곡선으로 둘러싸인 도형의 넓이를 구하는 풀이 과정과 답을 쓰시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "미분 공식으로 점 $(1, 2)$에서의 접선의 방정식을 구한 뒤 곡선과의 교점을 찾아 넓이를 적분합니다.",
        "answer": "$\\frac{27}{4}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 접선의 방정식]", "content": "$f(x)=x^3+1 \\implies f'(x)=3x^2$. $f'(1)=3$이므로 접선은 $y-2 = 3(x-1) \\implies y = 3x-1$"},
                {"label": "[2단계: 곡선과 접선의 교점]", "content": "$x^3+1 = 3x-1 \\implies x^3-3x+2 = (x-1)^2(x+2) = 0 \\implies x=-2, 1$"},
                {"label": "[3단계: 정적분 계산]", "content": "$[-2, 1]$에서 곡선이 접선 위에 있으므로 $S = \\int_{-2}^1 \\{(x^3+1)-(3x-1)\\}\\,dx = \\int_{-2}^1 (x^3-3x+2)\\,dx = \\left[\\frac{1}{4}x^4-\\frac{3}{2}x^2+2x\\right]_{-2}^1 = \\frac{3}{4} - (-6) = \\frac{27}{4}$ $\\therefore$ **$\\frac{27}{4}$**"}
            ]
        }
    })

    # 32번 (중단원 2 11번)
    problems.append({
        "id": 32,
        "source": "미래엔 교과서 151p 중단원 11번",
        "tag": "표준",
        "question": "곡선 $y=x^2$을 $x$축에 대하여 대칭이동한 후 $x$축의 방향으로 $2$만큼, $y$축의 방향으로 $10$만큼 평행이동한 곡선을 $y=f(x)$라 하자. 두 곡선 $y=x^2$과 $y=f(x)$로 둘러싸인 도형의 넓이를 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "대칭이동과 평행이동 규칙을 적용하여 $f(x)$의 식을 구하고 연립하여 교점 공식에 대입합니다.",
        "answer": "$\\frac{64}{3}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 변환된 곡선식 구하기]", "content": "$x$축 대칭: $y=-x^2$. 평행이동: $y-10 = -(x-2)^2 \\implies f(x) = -x^2+4x+6$"},
                {"label": "[2단계: 교점 계산]", "content": "$x^2 = -x^2+4x+6 \\implies 2x^2-4x-6 = 0 \\implies 2(x+1)(x-3) = 0 \\implies x=-1, 3$"},
                {"label": "[3단계: 넓이 공식 적용]", "content": "$S = \\frac{|a|}{6}(\\beta-\\alpha)^3 = \\frac{2}{6}(3-(-1))^3 = \\frac{1}{3} \\times 64 = \\frac{64}{3}$ $\\therefore$ **$\\frac{64}{3}$**"}
            ]
        }
    })

    # 33번 (중단원 2 12번)
    problems.append({
        "id": 33,
        "source": "미래엔 교과서 152p 중단원 12번",
        "tag": "표준",
        "question": "두 곡선 $y=x^2-ax$와 $y=ax-x^2$으로 둘러싸인 도형의 넓이가 $\\frac{8}{3}$일 때, 양수 $a$의 값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "두 포물선을 연립하여 교점 $0, a$를 구하고 포물선 사이의 넓이 공식에 대입합니다.",
        "answer": "$2$",
        "solution": {
            "steps": [
                {"label": "[1단계: 교점 계산]", "content": "$x^2-ax = ax-x^2 \\implies 2x^2-2ax = 0 \\implies 2x(x-a) = 0 \\implies x=0, a$ ($a>0$)"},
                {"label": "[2단계: 넓이 공식 적용]", "content": "$S = \\frac{2}{6}(a-0)^3 = \\frac{1}{3}a^3 = \\frac{8}{3}$"},
                {"label": "[3단계: $a$ 결정]", "content": "$a^3 = 8 \\implies a=2$ $\\therefore$ **$2$**"}
            ]
        }
    })

    # 34번 (중단원 2 13번)
    problems.append({
        "id": 34,
        "source": "미래엔 교과서 152p 중단원 13번",
        "tag": "표준",
        "question": "두 곡선 $y=x^2(x+4)$와 $y=ax(x+4)$로 둘러싸인 도형의 각 부분의 넓이를 $S_1, S_2$라 하자. $S_1=S_2$일 때, 상수 $a$의 값을 구하시오. (단, $-4<a<0$)",
        "formula": "",
        "subQuestions": [],
        "tip": "두 영역의 넓이가 같으면 교점 전체 구간 $[-4, 0]$에서의 정적분 값이 0임을 대입합니다.",
        "answer": "$-2$",
        "solution": {
            "steps": [
                {"label": "[1단계: 정적분 값 0의 성질]", "content": "세 교점은 $x=-4, a, 0$이며 $S_1=S_2$이므로 $\\int_{-4}^0 \\{x^2(x+4)-ax(x+4)\\}\\,dx = 0$"},
                {"label": "[2단계: 피적분함수 정리 및 적분]", "content": "$\\int_{-4}^0 (x^3+(4-a)x^2-4ax)\\,dx = \\left[\\frac{1}{4}x^4+\\frac{4-a}{3}x^3-2ax^2\\right]_{-4}^0 = 0 - \\left(64 - \\frac{64(4-a)}{3} - 32a\\right) = 0$"},
                {"label": "[3단계: $a$ 계산]", "content": "$64 - \\frac{256}{3} + \\frac{64}{3}a - 32a = -\\frac{64}{3} - \\frac{32}{3}a = 0 \\implies 32a = -64 \\implies a = -2$ $\\therefore$ **$-2$**"}
            ]
        }
    })

    # 35번 (중단원 2 14번)
    problems.append({
        "id": 35,
        "source": "미래엔 교과서 152p 중단원 14번",
        "tag": "표준",
        "question": "함수 $y=f(x)$와 그 역함수 $y=g(x)$의 그래프가 두 점 $(1, 1)$과 $(6, 6)$에서 만나고 $\\int_{1}^{6} f(x)\\,dx = 25$일 때, 두 곡선 $y=f(x)$와 $y=g(x)$로 둘러싸인 도형의 넓이를 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "역함수 그래프는 직선 $y=x$에 대하여 대칭이므로 $y=f(x)$와 $y=x$ 사이의 넓이를 구해 2배를 대입합니다.",
        "answer": "$15$",
        "solution": {
            "steps": [
                {"label": "[1단계: 직선 $y=x$ 아래의 넓이 계산]", "content": "직선 $y=x$와 $x$축 및 $x=1, 6$으로 둘러싸인 사다리꼴의 넓이는 $\\frac{1+6}{2} \\times 5 = \\frac{35}{2} = 17.5$"},
                {"label": "[2단계: $f(x)$와 $y=x$ 사이의 넓이]", "content": "$\\int_1^6 f(x)\\,dx = 25$이므로 곡선 $y=f(x)$와 직선 $y=x$ 사이의 넓이는 $25 - \\frac{35}{2} = \\frac{15}{2}$"},
                {"label": "[3단계: 대칭성 적용]", "content": "역함수와의 대칭성에 의해 두 곡선 사이의 넓이는 $2 \\times \\frac{15}{2} = 15$ $\\therefore$ **$15$**"}
            ]
        }
    })

    # 36번 (중단원 2 15번)
    problems.append({
        "id": 36,
        "source": "미래엔 교과서 152p 중단원 15번",
        "tag": "표준",
        "question": "직선 도로 위를 $18\\,\\mathrm{m/s}$의 속도로 달리는 어떤 버스가 제동한 지 $t$초 후의 속도를 $v(t)\\,\\mathrm{m/s}$라 할 때, $v(t)=18-0.9t$라고 한다. 이 버스가 제동 후 정지할 때까지 움직인 거리를 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "정지할 때의 속도는 0이므로 정지 시각을 구한 뒤 속도를 정적분 공식에 대입합니다.",
        "answer": "$180\\,\\mathrm{m}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 정지 시각 계산]", "content": "$v(t) = 18-0.9t = 0 \\implies 0.9t = 18 \\implies t = 20$초"},
                {"label": "[2단계: 이동 거리 정적분]", "content": "$s = \\int_0^{20} (18-0.9t)\\,dt = \\left[18t-0.45t^2\\right]_0^{20} = 360 - 0.45(400) = 360 - 180 = 180\\,\\mathrm{m}$ $\\therefore$ **$180\\,\\mathrm{m}$**"}
            ]
        }
    })

    # 37번 (중단원 2 16번)
    problems.append({
        "id": 37,
        "source": "미래엔 교과서 152p 중단원 16번",
        "tag": "서술형",
        "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도 $v(t)$의 그래프가 $0 \\le t \\le 2$에서 $(0, 0)$과 $(2, -a)$, $2 \\le t \\le 5$에서 $(2, -a)$와 $(5, -a)$, $5 \\le t \\le 7$에서 $(5, -a)$와 $(7, a)$ (단, $v(6)=0$), $7 \\le t \\le 8$에서 $(7, a)$와 $(8, a)$, $8 \\le t \\le 9$에서 $(8, a)$와 $(9, 0)$을 잇는 꺾은선이다. 시각 $t=6$에서 점 $\\mathrm{P}$의 위치가 $-9$일 때, 시각 $t=2$에서 $t=9$까지 점 $\\mathrm{P}$가 움직인 거리를 구하는 풀이 과정과 답을 쓰시오. (단, $0 \\le t \\le 9$)",
        "formula": "",
        "subQuestions": [],
        "tip": "시각 $t=6$에서의 위치가 넓이의 음수 값임을 이용하여 $a$를 구하고, 속도의 절댓값 정적분으로 거리를 계산합니다.",
        "answer": "$10$",
        "solution": {
            "steps": [
                {"label": "[1단계: 상수 $a$ 구하기]", "content": "$t=6$에서의 위치는 사다리꼴의 넓이에 음의 부호를 붙인 것: $-\\frac{1}{2}(3+6)a = -\\frac{9}{2}a = -9 \\implies a=2$"},
                {"label": "[2단계: 구간별 이동 거리 계산]", "content": "$t=2$부터 $t=6$까지: 윗변 3, 아랫변 4, 높이 2인 사다리꼴 넓이 $= \\frac{1}{2}(3+4) \\times 2 = 7$\n$t=6$부터 $t=7$까지: 밑변 1, 높이 2인 삼각형 넓이 $= \\frac{1}{2} \\times 1 \\times 2 = 1$\n$t=7$부터 $t=8$까지: 밑변 1, 높이 2인 직사각형 넓이 $= 1 \\times 2 = 2$\n$t=8$부터 $t=9$까지: 밑변 1, 높이 2인 삼각형 넓이 $= \\frac{1}{2} \\times 1 \\times 2 = 1$"},
                {"label": "[3단계: 총 움직인 거리 도출]", "content": "$7 + 1 + 2 + 1 = 10$ $\\therefore$ **$10$**"}
            ]
        }
    })

    # 38번 (중단원 2 17번)
    problems.append({
        "id": 38,
        "source": "미래엔 교과서 152p 중단원 17번",
        "tag": "표준",
        "question": "수평인 지면에 정지해 있던 열기구가 지면과 수직 방향으로 출발한 지 $t$분 후의 속도를 $v(t)\\,\\mathrm{m/min}$이라 할 때, $v(t)=\\begin{cases} t & (0 \\le t \\le 20) \\\\ 80-3t & (20 \\le t \\le 40) \\end{cases}$라고 한다. 이 열기구가 출발한 지 $30$분 후의 지면으로부터의 높이를 구하시오. (단, 열기구는 지면과 수직 방향으로만 움직인다.)",
        "formula": "",
        "subQuestions": [],
        "tip": "구간 $[0, 20]$과 $[20, 30]$으로 나누어 각 구간의 속도를 정적분하여 높이를 계산합니다.",
        "answer": "$250\\,\\mathrm{m}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 구간 분할 적분식]", "content": "$h = \\int_0^{30} v(t)\\,dt = \\int_0^{20} t\\,dt + \\int_{20}^{30} (80-3t)\\,dt$"},
                {"label": "[2단계: 정적분 계산]", "content": "$\\int_0^{20} t\\,dt = \\left[\\frac{1}{2}t^2\\right]_0^{20} = 200$\n$\\int_{20}^{30} (80-3t)\\,dt = \\left[80t-\\frac{3}{2}t^2\\right]_{20}^{30} = (2400-1350) - (1600-600) = 1050 - 1000 = 50$"},
                {"label": "[3단계: 높이 도출]", "content": "$200 + 50 = 250\\,\\mathrm{m}$ $\\therefore$ **$250\\,\\mathrm{m}$**"}
            ]
        }
    })

    # 39번 (중단원 2 18번)
    problems.append({
        "id": 39,
        "source": "미래엔 교과서 153p 중단원 18번",
        "tag": "발전",
        "question": "곡선 $y=1-x^2$과 이 곡선 위의 점 $(t, 1-t^2)$에서의 접선 및 두 직선 $x=0$과 $x=1$로 둘러싸인 도형의 넓이의 최솟값을 구하시오. (단, $0<t<1$)",
        "formula": "",
        "subQuestions": [],
        "tip": "미분 계수로 접선의 방정식을 $t$로 나타내고 정적분으로 넓이 $S(t)$를 구한 뒤 이차함수의 최솟값을 대입 계산합니다.",
        "answer": "$\\frac{1}{12}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 접선의 방정식]", "content": "기울기 $y' = -2t$이므로 접선은 $y-(1-t^2) = -2t(x-t) \\implies y = -2tx+t^2+1$"},
                {"label": "[2단계: 넓이 식 정적분]", "content": "접선이 곡선보다 항상 위 또는 접하므로 $S = \\int_0^1 \\{(-2tx+t^2+1)-(1-x^2)\\}\\,dx = \\int_0^1 (x^2-2tx+t^2)\\,dx = \\left[\\frac{1}{3}x^3-tx^2+t^2x\\right]_0^1 = t^2-t+\\frac{1}{3}$"},
                {"label": "[3단계: 최솟값 도출]", "content": "$S(t) = \\left(t-\\frac{1}{2}\\right)^2 + \\frac{1}{3}-\\frac{1}{4} = \\left(t-\\frac{1}{2}\\right)^2 + \\frac{1}{12}$. $0<t<1$에서 $t=\frac{1}{2}$일 때 최솟값 $\\frac{1}{12}$ $\\therefore$ **$\\frac{1}{12}$**"}
            ]
        }
    })

    # 40번 (중단원 2 19번)
    problems.append({
        "id": 40,
        "source": "미래엔 교과서 153p 중단원 19번",
        "tag": "발전",
        "question": "곡선 $y=3x^2-6x+p$와 $x$축 및 $y$축으로 둘러싸인 도형의 넓이를 $A$, 이 곡선과 $x$축으로 둘러싸인 도형의 넓이를 $B$라 하자. $A:B=1:2$일 때, 상수 $p$의 값을 구하시오. (단, $0<p<3$)",
        "formula": "",
        "subQuestions": [],
        "tip": "포물선의 대칭축이 $x=1$임을 이용하여 $x=0$부터 대칭축 $x=1$까지의 정적분이 0임을 대입합니다.",
        "answer": "$2$",
        "solution": {
            "steps": [
                {"label": "[1단계: 대칭축과 넓이 관계]", "content": "$y=3(x-1)^2+p-3$이므로 대칭축은 $x=1$. $A:B = 1:2$이고 포물선이 $x=1$에 대칭이므로 $x=0$부터 $x=1$까지 곡선 아래와 위의 넓이가 상쇄되어 $\\int_0^1 (3x^2-6x+p)\\,dx = 0$"},
                {"label": "[2단계: 정적분 계산]", "content": "$[x^3-3x^2+px]_0^1 = 1-3+p = p-2 = 0$"},
                {"label": "[3단계: $p$ 결정]", "content": "$p = 2$ $\\therefore$ **$2$**"}
            ]
        }
    })

    # 41번 (중단원 2 20번)
    problems.append({
        "id": 41,
        "source": "미래엔 교과서 153p 중단원 20번",
        "tag": "서술형",
        "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 위치를 $s(t)$라 하자. 이차함수 $y=s'(t)$의 그래프가 점 $(0, 9)$를 지나고 $t$축과 두 점 $(1, 0), (3, 0)$에서 만나는 아래로 볼록한 포물선일 때, 점 $\\mathrm{P}$가 출발한 후 처음의 운동 방향과 반대 방향으로 움직인 거리를 구하는 풀이 과정과 답을 쓰시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "속도 $s'(t)$의 부호가 음이 되는 구간 $[1, 3]$을 찾고, 절댓값 속도를 정적분 공식에 대입합니다.",
        "answer": "$4$",
        "solution": {
            "steps": [
                {"label": "[1단계: 속도 함수 완성]", "content": "$s'(t) = a(t-1)(t-3)$. $(0, 9)$를 지나므로 $3a=9 \\implies a=3$. $s'(t) = 3(t-1)(t-3) = 3t^2-12t+9$"},
                {"label": "[2단계: 운동 방향 반대 구간 파악]", "content": "$0<t<1$에서는 $s'(t)>0$ (처음 방향), $1<t<3$에서는 $s'(t)<0$ (반대 방향)"},
                {"label": "[3단계: 이동 거리 정적분]", "content": "$s = \\int_1^3 |s'(t)|\\,dt = \\int_1^3 (-3t^2+12t-9)\\,dt = \\left[-t^3+6t^2-9t\\right]_1^3 = 0 - (-4) = 4$ $\\therefore$ **$4$**"}
            ]
        }
    })

    # 42번 (중단원 2 21번)
    problems.append({
        "id": 42,
        "source": "미래엔 교과서 153p 중단원 21번",
        "tag": "발전",
        "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t\\,(0 \\le t \\le d)$에서의 속도 $v(t)$의 그래프가 $t$축과 $0, a, c$에서 만나고, $[0, a]$에서 $v(t) \\ge 0$, $[a, c]$에서 $v(t) \\le 0$, $[c, d]$에서 $v(t) \\ge 0$이다. $\\int_{0}^{a} |v(t)|\\,dt = \\int_{a}^{d} |v(t)|\\,dt$일 때, 보기에서 옳은 것을 모두 고르시오. (단, $0<a<b<c<d$이고 $t=b$는 극소점이다.)\n\n㈎ ㄱ. 점 $\\mathrm{P}$는 출발한 후 다시 원점을 지난다.\n㈏ ㄴ. $\\int_{0}^{c} v(t)\\,dt = \\int_{c}^{d} v(t)\\,dt$\n㈐ ㄷ. $\\int_{0}^{b} v(t)\\,dt = \\int_{b}^{d} |v(t)|\\,dt$",
        "formula": "",
        "subQuestions": [],
        "tip": "각 구간의 넓이를 $A, B, C, D$로 치환하고 조건 $A = B+C+D$를 대입하여 각 보기를 판정합니다.",
        "answer": "ㄴ, ㄷ",
        "solution": {
            "steps": [
                {"label": "[1단계: 넓이 문자 치환]", "content": "$[0, a]$ 넓이 $A$, $[a, b]$ 넓이 $B$, $[b, c]$ 넓이 $C$, $[c, d]$ 넓이 $D$라 두면 조건에서 $A = B+C+D$"},
                {"label": "[2단계: 보기 ㄱ 판정]", "content": "$t \\in [a, c]$에서 위치는 $A - (\\text{넓이}) \\ge A - (B+C) = D > 0$이므로 다시 원점에 도달하지 않습니다. (거짓)"},
                {"label": "[3단계: 보기 ㄴ 판정]", "content": "$\\int_0^c v(t)\\,dt = A - (B+C) = D$, $\\int_c^d v(t)\\,dt = D$이므로 두 값은 같습니다. (참)"},
                {"label": "[4단계: 보기 ㄷ 판정]", "content": "$\\int_0^b v(t)\\,dt = A - B$, $\\int_b^d |v(t)|\\,dt = C + D$. $A = B+C+D \\implies A-B = C+D$이므로 성립합니다. (참)"},
                {"label": "[5단계: 결론]", "content": "옳은 것은 ㄴ, ㄷ $\\therefore$ **ㄴ, ㄷ**"}
            ]
        }
    })

    # =========================================================================
    # Part 3: 대단원 평가 문제 (III. 적분) — 155~158쪽 (24문항, id: 43 ~ 66)
    # =========================================================================

    # 43번 (대단원 01번)
    problems.append({
        "id": 43,
        "source": "미래엔 교과서 155p 대단원 1번",
        "tag": "기본",
        "question": "다항함수 $f(x)$에 대하여 $\\int f(x)\\,dx = x^3-3x^2+C$ ($C$는 적분상수)일 때, $f(-2)$의 값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "양변을 미분하여 $f(x)$를 구한 뒤 $x=-2$를 대입합니다.",
        "answer": "$24$",
        "solution": {
            "steps": [
                {"label": "[1단계: 도함수 구하기]", "content": "$f(x) = \\frac{d}{dx}(x^3-3x^2+C) = 3x^2-6x$"},
                {"label": "[2단계: 값 대입]", "content": "$f(-2) = 3(-2)^2-6(-2) = 12+12 = 24$ $\\therefore$ **$24$**"}
            ]
        }
    })

    # 44번 (대단원 02번)
    problems.append({
        "id": 44,
        "source": "미래엔 교과서 155p 대단원 2번",
        "tag": "기본",
        "question": "함수 $f(x)=\\frac{4}{3}x^2-2x$에 대하여 $g(x)=\\frac{d}{dx}\\left[\\int x f(x)\\,dx\\right]$라 할 때, $g(3)$의 값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "미적분의 기본정리 $\\frac{d}{dx}\\int h(x)\\,dx = h(x)$ 공식에 따라 $g(x)=xf(x)$임을 이용합니다.",
        "answer": "$18$",
        "solution": {
            "steps": [
                {"label": "[1단계: $g(x)$ 식 정리]", "content": "$g(x) = x f(x) = x\\left(\\frac{4}{3}x^2-2x\\right) = \\frac{4}{3}x^3-2x^2$"},
                {"label": "[2단계: $x=3$ 대입]", "content": "$g(3) = \\frac{4}{3}(27) - 2(9) = 36 - 18 = 18$ $\\therefore$ **$18$**"}
            ]
        }
    })

    # 45번 (대단원 03번)
    problems.append({
        "id": 45,
        "source": "미래엔 교과서 155p 대단원 3번",
        "tag": "표준",
        "question": "함수 $f(x)=\\int (x^2-2x)\\,dx$에 대하여 $\\lim_{h \\to 0} \\frac{f(3+h)-f(3-h)}{h}$의 값은?\n\n① $4$  ② $6$  ③ $8$  ④ $10$  ⑤ $12$",
        "formula": "",
        "subQuestions": [],
        "tip": "미분계수의 정의 공식에 의해 주어진 극한이 $2f'(3)$임을 이용합니다.",
        "answer": "②",
        "solution": {
            "steps": [
                {"label": "[1단계: 미분계수 변형]", "content": "$\\lim_{h \\to 0} \\frac{f(3+h)-f(3-h)}{h} = 2f'(3)$"},
                {"label": "[2단계: $f'(3)$ 계산]", "content": "$f'(x) = x^2-2x \\implies f'(3) = 9-6 = 3$"},
                {"label": "[3단계: 정답 도출]", "content": "$2f'(3) = 2 \\times 3 = 6$ $\\therefore$ **②**"}
            ]
        }
    })

    # 46번 (대단원 04번)
    problems.append({
        "id": 46,
        "source": "미래엔 교과서 155p 대단원 4번",
        "tag": "표준",
        "question": "두 다항함수 $f(x)$와 $g(x)$에 대하여 $\\int \\{f(x)-g(x)\\}\\,dx = x+C$ ($C$는 적분상수)일 때, 보기에서 옳은 것을 모두 고르시오.\n\n㈎ ㄱ. $f(0)>g(0)$\n㈏ ㄴ. 두 다항식 $f(x)$와 $g(x)$의 차수를 각각 $m$과 $n$이라 하면 $m=n+1$이다.\n㈐ ㄷ. 임의의 실수 $x$에 대하여 $f'(x)=g'(x)$이다.",
        "formula": "",
        "subQuestions": [],
        "tip": "양변을 미분하여 $f(x)-g(x)=1$임을 파악하고 차수와 도함수의 성질을 분석합니다.",
        "answer": "ㄱ, ㄷ",
        "solution": {
            "steps": [
                {"label": "[1단계: 양변 미분]", "content": "$f(x)-g(x) = \\frac{d}{dx}(x+C) = 1 \\implies f(x) = g(x)+1$"},
                {"label": "[2단계: 보기 검토]", "content": "ㄱ. $f(0) = g(0)+1 > g(0)$ (참)\nㄴ. $f(x)$와 $g(x)$는 차수가 같으므로 $m=n$입니다. (거짓)\nㄷ. 양변을 미분하면 $f'(x) = g'(x)$입니다. (참)"},
                {"label": "[3단계: 결론]", "content": "옳은 것은 ㄱ, ㄷ $\\therefore$ **ㄱ, ㄷ**"}
            ]
        }
    })

    # 47번 (대단원 05번)
    problems.append({
        "id": 47,
        "source": "미래엔 교과서 155p 대단원 5번",
        "tag": "표준",
        "question": "함수 $f(x)$에 대하여 $f'(x)=3x^2+ax+1$이고 $f(0)=2, f(1)=-1$일 때, $f(-1)$의 값을 구하시오. (단, $a$는 상수)",
        "formula": "",
        "subQuestions": [],
        "tip": "부정적분을 구한 뒤 두 함숫값을 대입하여 적분상수와 $a$를 결정합니다.",
        "answer": "$-5$",
        "solution": {
            "steps": [
                {"label": "[1단계: 부정적분 식]", "content": "$f(x) = x^3+\\frac{a}{2}x^2+x+C$. $f(0)=2 \\implies C=2$"},
                {"label": "[2단계: $a$ 결정]", "content": "$f(1) = 1+\\frac{a}{2}+1+2 = 4+\\frac{a}{2} = -1 \\implies \\frac{a}{2} = -5 \\implies a = -10$"},
                {"label": "[3단계: $f(-1)$ 계산]", "content": "$f(x) = x^3-5x^2+x+2 \\implies f(-1) = -1-5-1+2 = -5$ $\\therefore$ **$-5$**"}
            ]
        }
    })

    # 48번 (대단원 06번)
    problems.append({
        "id": 48,
        "source": "미래엔 교과서 155p 대단원 6번",
        "tag": "표준",
        "question": "다음을 모두 만족시키는 다항함수 $f(x)$를 구하시오.\n\n㈎ $\\int f(x)\\,dx = x f(x) - 2x^3 + x^2 + 1$\n㈏ $f(1) = 4$",
        "formula": "",
        "subQuestions": [],
        "tip": "조건 ㈎의 양변을 $x$에 대해 미분하여 $f'(x)$를 구한 뒤 부정적분 공식에 $f(1)=4$를 대입합니다.",
        "answer": "$f(x)=3x^2-2x+3$",
        "solution": {
            "steps": [
                {"label": "[1단계: 양변 미분]", "content": "$f(x) = f(x) + x f'(x) - 6x^2 + 2x \\implies x f'(x) = 6x^2 - 2x \\implies f'(x) = 6x - 2$"},
                {"label": "[2단계: 부정적분]", "content": "$f(x) = \\int (6x-2)\\,dx = 3x^2-2x+C$"},
                {"label": "[3단계: 상수 결정]", "content": "$f(1) = 3(1)^2-2(1)+C = 1+C = 4 \\implies C = 3$. 따라서 $f(x) = 3x^2-2x+3$ $\\therefore$ **$f(x)=3x^2-2x+3$**"}
            ]
        }
    })

    # 49번 (대단원 07번)
    problems.append({
        "id": 49,
        "source": "미래엔 교과서 156p 대단원 7번",
        "tag": "표준",
        "question": "다항함수 $f(x)$가 모든 실수 $x$에 대하여 $\\int_{2}^{x} f(t)\\,dt = x^2+ax-2$를 만족시킬 때, $f(7)$의 값을 구하시오. (단, $a$는 상수)",
        "formula": "",
        "subQuestions": [],
        "tip": "$x=2$를 대입하여 $a$를 구하고, 양변을 $x$에 대하여 미분하여 $f(x)$를 구합니다.",
        "answer": "$13$",
        "solution": {
            "steps": [
                {"label": "[1단계: $x=2$ 대입]", "content": "$0 = 4+2a-2 = 2a+2 \\implies a = -1$"},
                {"label": "[2단계: 양변 미분]", "content": "$\\frac{d}{dx}\\int_2^x f(t)\\,dt = f(x) = \\frac{d}{dx}(x^2-x-2) = 2x-1$"},
                {"label": "[3단계: $f(7)$ 계산]", "content": "$f(7) = 2(7)-1 = 13$ $\\therefore$ **$13$**"}
            ]
        }
    })

    # 50번 (대단원 08번)
    problems.append({
        "id": 50,
        "source": "미래엔 교과서 156p 대단원 8번",
        "tag": "표준",
        "question": "함수 $f(x)=-3x^2+5x$에 대하여 $\\int_{1}^{4} f(x)\\,dx + \\int_{-2}^{1} f(x)\\,dx - \\int_{2}^{4} f(x)\\,dx$의 값은?\n\n① $-16$  ② $-15$  ③ $-14$  ④ $-13$  ⑤ $-12$",
        "formula": "",
        "subQuestions": [],
        "tip": "정적분의 구간 성질을 활용하여 식을 하나로 합친 후 계산합니다.",
        "answer": "①",
        "solution": {
            "steps": [
                {"label": "[1단계: 구간 합치기]", "content": "$\\int_{-2}^1 f(x)\\,dx + \\int_1^4 f(x)\\,dx - \\int_2^4 f(x)\\,dx = \\int_{-2}^4 f(x)\\,dx - \\int_2^4 f(x)\\,dx = \\int_{-2}^2 f(x)\\,dx$"},
                {"label": "[2단계: 대칭 구간 정적분 계산]", "content": "$\\int_{-2}^2 (-3x^2+5x)\\,dx = 2\\int_0^2 (-3x^2)\\,dx = 2[-x^3]_0^2 = 2(-8) = -16$ $\\therefore$ **①**"}
            ]
        }
    })

    # 51번 (대단원 09번)
    problems.append({
        "id": 51,
        "source": "미래엔 교과서 156p 대단원 9번",
        "tag": "표준",
        "question": "일차함수 $f(x)$가 $\\int_{0}^{1} f(x)\\,dx = -1$, $\\int_{0}^{1} x f(x)\\,dx = 0$을 만족시킬 때, $f(1)$의 값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "$f(x)=ax+b$로 두고 두 정적분 식에 대입하여 $a, b$의 연립방정식을 풉니다.",
        "answer": "$2$",
        "solution": {
            "steps": [
                {"label": "[1단계: 일차함수 설정 및 첫 번째 적분]", "content": "$f(x)=ax+b$. $\\int_0^1 (ax+b)\\,dx = \\frac{a}{2}+b = -1 \\implies a+2b = -2$"},
                {"label": "[2단계: 두 번째 적분]", "content": "$\\int_0^1 (ax^2+bx)\\,dx = \\frac{a}{3}+\\frac{b}{2} = 0 \\implies 2a+3b = 0$"},
                {"label": "[3단계: 연립 및 $f(1)$ 계산]", "content": "$a = -\\frac{3}{2}b \\implies -\\frac{3}{2}b+2b = \\frac{1}{2}b = -2 \\implies b = -4, a = 6$. $f(x) = 6x-4 \\implies f(1) = 6-4 = 2$ $\\therefore$ **$2$**"}
            ]
        }
    })

    # 52번 (대단원 10번)
    problems.append({
        "id": 52,
        "source": "미래엔 교과서 156p 대단원 10번",
        "tag": "표준",
        "question": "함수 $f(x)=\\begin{cases} x^2 & (x \\le 1) \\\\ -x+a & (x>1) \\end{cases}$가 모든 실수 $x$에서 연속일 때, 정적분 $\\int_{0}^{2} f(x)\\,dx$의 값을 구하시오. (단, $a$는 상수)",
        "formula": "",
        "subQuestions": [],
        "tip": "$x=1$에서 연속 조건을 이용하여 $a$를 구한 뒤 구간 $[0, 1]$과 $[1, 2]$로 나누어 적분합니다.",
        "answer": "$\\frac{5}{6}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 연속 조건으로 $a$ 구하기]", "content": "$\\lim_{x \\to 1^-} x^2 = 1$, $\\lim_{x \\to 1^+} (-x+a) = -1+a$. 연속이므로 $-1+a = 1 \\implies a = 2$"},
                {"label": "[2단계: 구간 분할 정적분]", "content": "$\\int_0^2 f(x)\\,dx = \\int_0^1 x^2\\,dx + \\int_1^2 (-x+2)\\,dx = \\left[\\frac{1}{3}x^3\\right]_0^1 + \\left[-\\frac{1}{2}x^2+2x\\right]_1^2$"},
                {"label": "[3단계: 값 계산]", "content": "$\\frac{1}{3} + \\{(-2+4) - (-\\frac{1}{2}+2)\\} = \\frac{1}{3} + \\frac{1}{2} = \\frac{5}{6}$ $\\therefore$ **$\\frac{5}{6}$**"}
            ]
        }
    })

    # 53번 (대단원 11번)
    problems.append({
        "id": 53,
        "source": "미래엔 교과서 156p 대단원 11번",
        "tag": "표준",
        "question": "닫힌구간 $[-1, 2]$에서 정의된 함수 $y=f(x)$의 그래프가 닫힌구간 $[-1, 1]$에서는 $y=2$이고, $[1, 2]$에서는 두 점 $(1, 2), (2, 0)$을 잇는 선분이다. 정적분 $\\int_{-1}^{2} x f(x)\\,dx$의 값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "구간 $[-1, 1]$과 $[1, 2]$에서 각각의 함수식을 구하여 피적분함수 $xf(x)$에 대입합니다.",
        "answer": "$\\frac{4}{3}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 구간별 식 작성]", "content": "$[-1, 1]$에서 $f(x)=2$. $[1, 2]$에서 직선은 기울기 $-2$이므로 $f(x) = -2(x-2) = -2x+4$."},
                {"label": "[2단계: 구간 분할 적분]", "content": "$\\int_{-1}^2 xf(x)\\,dx = \\int_{-1}^1 2x\\,dx + \\int_1^2 x(-2x+4)\\,dx$"},
                {"label": "[3단계: 적분 계산]", "content": "$\\int_{-1}^1 2x\\,dx = 0$ (기함수). $\\int_1^2 (-2x^2+4x)\\,dx = \\left[-\\frac{2}{3}x^3+2x^2\\right]_1^2 = \\left(-\\frac{16}{3}+8\\right) - \\left(-\\frac{2}{3}+2\\right) = \\frac{8}{3} - \\frac{4}{3} = \\frac{4}{3}$ $\\therefore$ **$\\frac{4}{3}$**"}
            ]
        }
    })

    # 54번 (대단원 12번)
    problems.append({
        "id": 54,
        "source": "미래엔 교과서 156p 대단원 12번",
        "tag": "발전",
        "question": "함수 $f(x)=(x-1)|x-a|$의 극댓값이 $1$일 때, 정적분 $\\int_{0}^{4} f(x)\\,dx$의 값을 구하시오. (단, $a>1$)",
        "formula": "",
        "subQuestions": [],
        "tip": "절댓값을 벗겨 $x<a$일 때의 이차함수 꼭짓점에서 극댓값 $1$을 가짐을 이용하여 $a$를 구합니다.",
        "answer": "$\\frac{4}{3}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 극댓값으로 $a$ 구하기]", "content": "$x<a$일 때 $f(x) = -(x-1)(x-a) = -x^2+(a+1)x-a$. 대칭축 $x = \\frac{a+1}{2}$에서 극댓값을 갖습니다. $f\\left(\\frac{a+1}{2}\\right) = \\frac{(a-1)^2}{4} = 1 \\implies a = 3$ ($a>1$)."},
                {"label": "[2단계: 함수식 정리]", "content": "$a=3$이므로 $x<3$에서 $-(x-1)(x-3) = -x^2+4x-3$, $x \\ge 3$에서 $(x-1)(x-3) = x^2-4x+3$"},
                {"label": "[3단계: 정적분 계산]", "content": "$\\int_0^4 f(x)\\,dx = \\int_0^3 (-x^2+4x-3)\\,dx + \\int_3^4 (x^2-4x+3)\\,dx = 0 + \\frac{4}{3} = \\frac{4}{3}$ $\\therefore$ **$\\frac{4}{3}$**"}
            ]
        }
    })

    # 55번 (대단원 13번)
    problems.append({
        "id": 55,
        "source": "미래엔 교과서 156p 대단원 13번",
        "tag": "표준",
        "question": "곡선 $y=-x^2+2x+2$ 및 두 직선 $y=2x+1$과 $x=-2$로 둘러싸인 도형의 넓이는?\n\n① $2$  ② $\\frac{7}{3}$  ③ $\\frac{8}{3}$  ④ $3$  ⑤ $\\frac{10}{3}$",
        "formula": "",
        "subQuestions": [],
        "tip": "곡선과 직선의 교점을 구하여 적분 구간 $[-2, 1]$에서 위 식에서 아래 식을 빼어 정적분합니다.",
        "answer": "③",
        "solution": {
            "steps": [
                {"label": "[1단계: 교점 계산]", "content": "$-x^2+2x+2 = 2x+1 \\implies x^2-1 = 0 \\implies x = \\pm 1$. 적분 구간은 $x=-2$부터 $x=1$까지입니다."},
                {"label": "[2단계: 구간 분할 및 적분]", "content": "$[-2, -1]$에서는 직선이 곡선 위: $\\int_{-2}^{-1} (x^2-1)\\,dx = \\frac{4}{3}$. $[-1, 1]$에서는 곡선이 직선 위: $\\int_{-1}^1 (-x^2+1)\\,dx = \\frac{4}{3}$."},
                {"label": "[3단계: 합 계산]", "content": "$\\frac{4}{3}+\\frac{4}{3} = \\frac{8}{3}$ $\\therefore$ **③**"}
            ]
        }
    })

    # 56번 (대단원 14번)
    problems.append({
        "id": 56,
        "source": "미래엔 교과서 157p 대단원 14번",
        "tag": "표준",
        "question": "다항함수 $f(x)$가 다음을 모두 만족시킬 때, 곡선 $y=f(x)$와 $x$축으로 둘러싸인 도형의 넓이를 구하시오.\n\n㈎ $f'(x)=3x^2-4x-4$\n㈏ 함수 $y=f(x)$의 그래프는 점 $(2, 0)$을 지난다.",
        "formula": "",
        "subQuestions": [],
        "tip": "부정적분을 구하고 $f(2)=0$으로 함수식을 완성한 뒤 $x$축과의 교점을 구하여 넓이 공식에 대입합니다.",
        "answer": "$\\frac{64}{3}$",
        "solution": {
            "steps": [
                {"label": "[1단계: $f(x)$ 완성]", "content": "$f(x) = x^3-2x^2-4x+C$. $f(2) = 8-8-8+C = 0 \\implies C = 8$. $f(x) = x^3-2x^2-4x+8$"},
                {"label": "[2단계: 인수분해]", "content": "$(x+2)(x-2)^2 = 0 \\implies x=-2, 2$ (접함)"},
                {"label": "[3단계: 넓이 공식 적용]", "content": "삼차함수와 접선 사이의 넓이 공식: $S = \\frac{|a|}{12}(\\beta-\\alpha)^4 = \\frac{1}{12}(2-(-2))^4 = \\frac{256}{12} = \\frac{64}{3}$ $\\therefore$ **$\\frac{64}{3}$**"}
            ]
        }
    })

    # 57번 (대단원 15번)
    problems.append({
        "id": 57,
        "source": "미래엔 교과서 157p 대단원 15번",
        "tag": "표준",
        "question": "곡선 $y=x^3-(a+2)x^2+2ax$와 $x$축으로 둘러싸인 도형의 두 부분의 넓이가 서로 같을 때, 상수 $a$의 값을 구하시오. (단, $0<a<2$)",
        "formula": "",
        "subQuestions": [],
        "tip": "삼차곡선과 $x$축으로 둘러싸인 두 영역의 넓이가 같으므로 $x=0$부터 $x=2$까지의 정적분 값이 0임을 대입합니다.",
        "answer": "$1$",
        "solution": {
            "steps": [
                {"label": "[1단계: 교점 확인]", "content": "$x(x-a)(x-2) = 0 \\implies x=0, a, 2$ ($0<a<2$)"},
                {"label": "[2단계: 정적분 값 0]", "content": "두 부분의 넓이가 같으므로 $\\int_0^2 \\{x^3-(a+2)x^2+2ax\\}\\,dx = 0$"},
                {"label": "[3단계: 계산 및 $a$ 도출]", "content": "$\\left[\\frac{1}{4}x^4-\\frac{a+2}{3}x^3+ax^2\\right]_0^2 = 4 - \\frac{8(a+2)}{3} + 4a = -\\frac{4}{3} + \\frac{4}{3}a = 0 \\implies a = 1$ $\\therefore$ **$1$**"}
            ]
        }
    })

    # 58번 (대단원 16번)
    problems.append({
        "id": 58,
        "source": "미래엔 교과서 157p 대단원 16번",
        "tag": "표준",
        "question": "함수 $f(x)=x^2+2$ ($x \\ge 0$)의 역함수를 $g(x)$라 할 때, $\\int_{0}^{2} f(x)\\,dx + \\int_{2}^{6} g(x)\\,dx$의 값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "역함수의 정적분은 $y$축 방향의 적분과 같으므로 직사각형 넓이 관계를 대입하여 계산합니다.",
        "answer": "$12$",
        "solution": {
            "steps": [
                {"label": "[1단계: 점의 대응 관계]", "content": "$f(0) = 2, f(2) = 2^2+2 = 6$. $g(2) = 0, g(6) = 2$."},
                {"label": "[2단계: 기하학적 넓이 해석]", "content": "$\\int_0^2 f(x)\\,dx$는 $x \\in [0, 2]$에서 곡선 아래의 넓이이고, $\\int_2^6 g(x)\\,dx$는 $y \\in [2, 6]$에서 곡선과 $y$축 사이의 넓이와 같습니다."},
                {"label": "[3단계: 직사각형 넓이 도출]", "content": "두 영역을 합치면 가로 2, 세로 6인 직사각형이 되므로 $2 \\times 6 = 12$ $\\therefore$ **$12$**"}
            ]
        }
    })

    # 59번 (대단원 17번)
    problems.append({
        "id": 59,
        "source": "미래엔 교과서 157p 대단원 17번",
        "tag": "표준",
        "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도가 $v(t)=-3t^2+12t$일 때, 점 $\\mathrm{P}$가 다시 원점으로 되돌아올 때까지 걸리는 시간을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "위치 공식 $x(t) = \\int_0^t v(s)\\,ds$를 적용하고 원점으로 돌아오는 $x(t)=0$인 양수 $t$를 대입하여 구합니다.",
        "answer": "$6$",
        "solution": {
            "steps": [
                {"label": "[1단계: 위치 함수 구하기]", "content": "$x(t) = \\int_0^t (-3s^2+12s)\\,ds = -t^3+6t^2$"},
                {"label": "[2단계: 원점 복귀 방정식]", "content": "$x(t) = -t^2(t-6) = 0$"},
                {"label": "[3단계: 시간 결정]", "content": "$t>0$이므로 $t=6$ $\\therefore$ **$6$**"}
            ]
        }
    })

    # 60번 (대단원 18번)
    problems.append({
        "id": 60,
        "source": "미래엔 교과서 157p 대단원 18번",
        "tag": "표준",
        "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도 $v(t)$의 그래프가 $0 \\le t \\le 1$에서 $(0, 0)$과 $(1, 1)$, $1 \\le t \\le 3$에서 $(1, 1)$과 $(3, 2)$, $3 \\le t \\le 4$에서 $(3, 2)$와 $(4, 0)$, $4 \\le t \\le 6$에서 $(4, 0)$과 $(6, -1)$을 잇는 꺾은선이다. 다음을 구하시오. (단, $0 \\le t \\le 6$)",
        "formula": "",
        "subQuestions": [
            {"no": 1, "formula": "점 $\\mathrm{P}$가 원점에서 가장 멀리 떨어져 있을 때의 시각과 위치"},
            {"no": 2, "formula": "시각 $t=0$에서 $t=5$까지 점 $\\mathrm{P}$가 움직인 거리"}
        ],
        "tip": "속도의 부호가 양에서 음으로 바뀌는 시각에서 원점에서 가장 멀어지며, 이동거리는 속도의 절댓값 정적분(도형의 넓이)으로 구합니다.",
        "answer": "(1) 시각: $4$, 위치: $\\frac{9}{2}$, (2) $\\frac{19}{4}$",
        "solution": {
            "steps": [
                {"label": "(1)", "content": "[1단계: 최원거리 시각과 위치] $t=0$부터 $t=4$까지 $v(t) \\ge 0$이므로 $t=4$에서 가장 멀리 떨어집니다. 위치는 $[0, 4]$ 넓이: 삼각형 $\\frac{1}{2} \\times 1 \\times 1 = \\frac{1}{2}$, 사다리꼴 $\\frac{1+2}{2} \\times 2 = 3$, 삼각형 $\\frac{1}{2} \\times 1 \\times 2 = 1$. 위치 $= \\frac{1}{2}+3+1 = \\frac{9}{2}$ $\\therefore$ **시각: $4$, 위치: $\\frac{9}{2}$**"},
                {"label": "(2)", "content": "[1단계: 이동 거리 계산] $t=0$에서 $t=4$까지 이동거리 $\\frac{9}{2}$. $t=4$에서 $t=5$까지는 밑변 1, 높이 $\\frac{1}{2}$인 삼각형 넓이 $= \\frac{1}{2} \\times 1 \\times \\frac{1}{2} = \\frac{1}{4}$. 총 움직인 거리는 $\\frac{9}{2} + \\frac{1}{4} = \\frac{19}{4}$ $\\therefore$ **$\\frac{19}{4}$**"}
            ]
        }
    })

    # 61번 (대단원 19번)
    problems.append({
        "id": 61,
        "source": "미래엔 교과서 157p 대단원 19번",
        "tag": "표준",
        "question": "원점을 출발하여 수직선 위를 움직이는 점 $\\mathrm{P}$의 시각 $t$에서의 속도가 $v(t)=-3t^2+at$이다. 시각 $t=4$에서 점 $\\mathrm{P}$의 위치가 $-16$일 때, 출발한 후 $t=4$까지 점 $\\mathrm{P}$가 움직인 거리를 구하시오. (단, $a$는 상수)",
        "formula": "",
        "subQuestions": [],
        "tip": "위치 조건으로 $a$를 구하고 속도의 부호가 바뀌는 시각을 찾아 구간별 넓이를 합산합니다.",
        "answer": "$24$",
        "solution": {
            "steps": [
                {"label": "[1단계: $a$의 값 구하기]", "content": "위치 $x(4) = \\int_0^4 (-3t^2+at)\\,dt = [-t^3+\\frac{a}{2}t^2]_0^4 = -64 + 8a = -16 \\implies 8a = 48 \\implies a = 6$"},
                {"label": "[2단계: 속도 부호 변화]", "content": "$v(t) = -3t^2+6t = -3t(t-2)$. $[0, 2]$에서 $v(t) \\ge 0$, $[2, 4]$에서 $v(t) \\le 0$"},
                {"label": "[3단계: 움직인 거리 계산]", "content": "$s = \\int_0^2 (-3t^2+6t)\\,dt + \\int_2^4 (3t^2-6t)\\,dt = [-t^3+3t^2]_0^2 + [t^3-3t^2]_2^4 = 4 + 20 = 24$ $\\therefore$ **$24$**"}
            ]
        }
    })

    # 62번 (대단원 20번)
    problems.append({
        "id": 62,
        "source": "미래엔 교과서 157p 대단원 20번",
        "tag": "표준",
        "question": "원점을 동시에 출발하여 수직선 위를 움직이는 두 점 $\\mathrm{P}$와 $\\mathrm{Q}$의 시각 $t$에서의 속도를 각각 $v_1(t)=3t^2-8t+4$, $v_2(t)=13-8t$라고 한다. 이때 두 점 $\\mathrm{P}$와 $\\mathrm{Q}$가 출발한 후 다시 만나는 시각을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "속도를 적분하여 두 점의 위치 공식에 대입하고 위치가 같아지는 시각 $t>0$의 방정식을 풉니다.",
        "answer": "$3$",
        "solution": {
            "steps": [
                {"label": "[1단계: 위치 함수 구하기]", "content": "$x_P(t) = \\int_0^t (3s^2-8s+4)\\,ds = t^3-4t^2+4t$, $x_Q(t) = \\int_0^t (13-8s)\\,ds = 13t-4t^2$"},
                {"label": "[2단계: 만나는 조건]", "content": "$x_P(t) = x_Q(t) \\implies t^3-4t^2+4t = 13t-4t^2 \\implies t^3-9t = t(t-3)(t+3) = 0$"},
                {"label": "[3단계: 시각 결정]", "content": "$t>0$이므로 다시 만나는 시각은 $t=3$ $\\therefore$ **$3$**"}
            ]
        }
    })

    # 63번 (대단원 21번)
    problems.append({
        "id": 63,
        "source": "미래엔 교과서 158p 대단원 21번",
        "tag": "서술형",
        "question": "함수 $f(x)=\\int (3x^2-2x+a)\\,dx$가 다음을 모두 만족시킬 때, $f(-1)$의 값을 구하는 풀이 과정과 답을 쓰시오. (단, $a$는 상수)\n\n㈎ $\\lim_{h \\to 0} \\frac{f(1+h)-f(1)}{h} = 3$\n㈏ $f(0) = 1$",
        "formula": "",
        "subQuestions": [],
        "tip": "미분계수의 정의로 $f'(1)=3$임을 이용하여 $a$를 구하고, $f(0)=1$로 적분상수를 결정합니다.",
        "answer": "$-3$",
        "solution": {
            "steps": [
                {"label": "[1단계: $f'(1)$ 조건 해석]", "content": "$\\lim_{h \\to 0} \\frac{f(1+h)-f(1)}{h} = f'(1) = 3$"},
                {"label": "[2단계: $a$와 부정적분 계산]", "content": "$f'(x) = 3x^2-2x+a$이므로 $f'(1) = 3-2+a = 3 \\implies a = 2$. $f(x) = \\int (3x^2-2x+2)\\,dx = x^3-x^2+2x+C$. 조건 ㈏에서 $f(0)=1 \\implies C=1$"},
                {"label": "[3단계: $f(-1)$ 계산]", "content": "$f(x) = x^3-x^2+2x+1$이므로 $f(-1) = (-1)^3-(-1)^2+2(-1)+1 = -3$ $\\therefore$ **$-3$**"}
            ]
        }
    })

    # 64번 (대단원 22번)
    problems.append({
        "id": 64,
        "source": "미래엔 교과서 158p 대단원 22번",
        "tag": "서술형",
        "question": "닫힌구간 $[-1, 2]$에서 함수 $f(x)=\\int_{-1}^{x} (1-|t|)\\,dt$의 최댓값과 최솟값을 구하는 풀이 과정과 답을 쓰시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "피적분함수의 부호 변화를 구간별로 조사하여 극대점($x=1$)과 양 끝값에서의 함숫값을 대입 비교합니다.",
        "answer": "최댓값: $1$, 최솟값: $0$",
        "solution": {
            "steps": [
                {"label": "[1단계: 도함수와 증감]", "content": "$f'(x) = 1-|x|$. $[-1, 1]$에서 $f'(x) \\ge 0$ (증가), $[1, 2]$에서 $f'(x) \\le 0$ (감소). 따라서 극댓값이자 최댓값은 $x=1$에서 발생합니다."},
                {"label": "[2단계: 최댓값 계산]", "content": "$f(1) = \\int_{-1}^1 (1-|t|)\\,dt = 2\\int_0^1 (1-t)\\,dt = 2\\left[t-\\frac{1}{2}t^2\\right]_0^1 = 1$"},
                {"label": "[3단계: 최솟값 계산]", "content": "$f(-1) = 0$. $f(2) = f(1) + \\int_1^2 (1-t)\\,dt = 1 - \\frac{1}{2} = \\frac{1}{2}$. 따라서 최솟값은 $0$, 최댓값은 $1$입니다. $\\therefore$ **최댓값: $1$, 최솟값: $0$**"}
            ]
        }
    })

    # 65번 (대단원 23번)
    problems.append({
        "id": 65,
        "source": "미래엔 교과서 158p 대단원 23번",
        "tag": "서술형",
        "question": "양수 $k$에 대하여 두 곡선 $y=8kx^3$과 $y=-\\frac{1}{2k}x^3$ 및 직선 $x=1$로 둘러싸인 도형의 넓이의 최솟값을 구하는 풀이 과정과 답을 쓰시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "정적분으로 넓이를 $k$에 대한 식으로 표현한 후 산술평균과 기하평균의 관계를 대입합니다.",
        "answer": "$1$",
        "solution": {
            "steps": [
                {"label": "[1단계: 넓이 식 정적분]", "content": "$x \\in [0, 1]$에서 $8kx^3 \\ge -\\frac{1}{2k}x^3$이므로 $S = \\int_0^1 \\left\\{8kx^3-\\left(-\\frac{1}{2k}x^3\\right)\\right\\}\\,dx = \\left(8k+\\frac{1}{2k}\\right) \\left[\\frac{1}{4}x^4\\right]_0^1 = 2k + \\frac{1}{8k}$"},
                {"label": "[2단계: 산술-기하 평균 적용]", "content": "$k>0$이므로 $2k + \\frac{1}{8k} \\ge 2\\sqrt{2k \\cdot \\frac{1}{8k}} = 2\\sqrt{\\frac{1}{4}} = 1$"},
                {"label": "[3단계: 등호 성립 조건 및 결론]", "content": "등호는 $2k = \\frac{1}{8k}$, 즉 $k = \\frac{1}{4}$일 때 성립합니다. 따라서 최솟값은 $1$ $\\therefore$ **$1$**"}
            ]
        }
    })

    # 66번 (대단원 24번)
    problems.append({
        "id": 66,
        "source": "미래엔 교과서 158p 대단원 24번",
        "tag": "서술형",
        "question": "지면으로부터 $35\\,\\mathrm{m}$의 높이에서 $30\\,\\mathrm{m/s}$의 속도로 지면과 수직으로 쏘아 올린 물체의 $t$초 후의 속도가 $v(t)=30-10t\\,(\\mathrm{m/s})$일 때, 이 물체가 지면에 떨어질 때까지 움직인 거리를 구하는 풀이 과정과 답을 쓰시오. (단, $0 \\le t \\le 7$)",
        "formula": "",
        "subQuestions": [],
        "tip": "지면에 떨어질 때의 시각을 높이 공식으로 구하고 최고점에 도달하는 시각을 기준으로 구간별 거리를 계산합니다.",
        "answer": "$125\\,\\mathrm{m}$",
        "solution": {
            "steps": [
                {"label": "[1단계: 지면 도달 시각]", "content": "$t$초 후의 높이 $x(t) = 35 + \\int_0^t (30-10s)\\,ds = 35 + 30t - 5t^2$. 지면 도달 시 $x(t) = 0 \\implies -5(t-7)(t+1) = 0 \\implies t=7$초"},
                {"label": "[2단계: 최고점 도달 시각]", "content": "$v(t) = 30-10t = 0 \\implies t=3$초. $[0, 3]$에서 상승, $[3, 7]$에서 하강."},
                {"label": "[3단계: 움직인 거리 계산]", "content": "상승 거리 $= \\int_0^3 (30-10t)\\,dt = 45\\,\\mathrm{m}$. 하강 거리 $= \\int_3^7 (10t-30)\\,dt = 80\\,\\mathrm{m}$. 총 움직인 거리 $= 45 + 80 = 125\\,\\mathrm{m}$ $\\therefore$ **$125\\,\\mathrm{m}$**"}
            ]
        }
    })

    # =========================================================================
    # Part 4: 쌍둥이 유제 (4-Grid Lock 유지) — 2문항 (id: 67 ~ 68)
    # =========================================================================

    # 67번 (AI 숫자 변형 - 대단원 06번 쌍둥이)
    problems.append({
        "id": 67,
        "source": "AI 숫자 변형 (대단원 06번 쌍둥이)",
        "tag": "쌍둥이유제",
        "question": "다음을 모두 만족시키는 다항함수 $f(x)$를 구하시오.\n\n㈎ $\\int f(x)\\,dx = x f(x) - 2x^3 + 3x^2 + 1$\n㈏ $f(1) = 5$",
        "formula": "",
        "subQuestions": [],
        "tip": "양변을 $x$에 대해 미분하여 $f'(x)$를 구한 뒤 부정적분 공식에 $f(1)=5$를 대입합니다.",
        "answer": "$f(x)=3x^2-6x+8$",
        "solution": {
            "steps": [
                {"label": "[1단계: 양변 미분]", "content": "$f(x) = f(x) + x f'(x) - 6x^2 + 6x \\implies x f'(x) = 6x^2 - 6x \\implies f'(x) = 6x - 6$"},
                {"label": "[2단계: 부정적분]", "content": "$f(x) = \\int (6x-6)\\,dx = 3x^2-6x+C$"},
                {"label": "[3단계: 상수 결정]", "content": "$f(1) = 3(1)^2-6(1)+C = -3+C = 5 \\implies C = 8$. 따라서 $f(x) = 3x^2-6x+8$ $\\therefore$ **$f(x)=3x^2-6x+8$**"}
            ]
        }
    })

    # 68번 (AI 숫자 변형 - 대단원 23번 쌍둥이)
    problems.append({
        "id": 68,
        "source": "AI 숫자 변형 (대단원 23번 쌍둥이)",
        "tag": "쌍둥이유제",
        "question": "양수 $k$에 대하여 두 곡선 $y=18kx^3$과 $y=-\\frac{2}{k}x^3$ 및 직선 $x=1$로 둘러싸인 도형의 넓이의 최솟값을 구하시오.",
        "formula": "",
        "subQuestions": [],
        "tip": "정적분으로 넓이 식을 구한 후 산술평균과 기하평균의 관계를 대입합니다.",
        "answer": "$3$",
        "solution": {
            "steps": [
                {"label": "[1단계: 정적분 계산]", "content": "$x \\in [0, 1]$에서 $18kx^3 \\ge -\\frac{2}{k}x^3$이므로 $S = \\int_0^1 \\left\\{18kx^3 - \\left(-\\frac{2}{k}x^3\\right)\\right\\}\\,dx = \\left(18k+\\frac{2}{k}\\right)\\left[\\frac{1}{4}x^4\\right]_0^1 = \\frac{9}{2}k + \\frac{1}{2k}$"},
                {"label": "[2단계: 산술-기하 평균 적용]", "content": "$k>0$이므로 $\\frac{9}{2}k + \\frac{1}{2k} \\ge 2\\sqrt{\\frac{9}{2}k \\cdot \\frac{1}{2k}} = 2\\sqrt{\\frac{9}{4}} = 2 \\times \\frac{3}{2} = 3$"},
                {"label": "[3단계: 등호 조건 및 결론]", "content": "등호는 $\\frac{9}{2}k = \\frac{1}{2k}$, 즉 $9k^2=1 \\implies k=\\frac{1}{3}$일 때 성립합니다. 따라서 최솟값은 $3$ $\\therefore$ **$3$**"}
            ]
        }
    })

    full_data = {
        "meta": {
            "title": "미적분 I / 수학 II - III. 적분",
            "subtitle": "미래엔 교과서 실전 핵심 (중단원 마무리 + 대단원 평가 전수 수록)",
            "student": "",
            "date": "2026. 09. 19 (토)",
            "cheer": "완벽한 내신 1등급을 응원합니다 ✨"
        },
        "problems": problems
    }

    out_path = "data/miraen_part3.js"
    js_content = "window.WORKSHEET_DATA = " + json.dumps(full_data, ensure_ascii=False, indent=2) + ";\n"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"Successfully generated {out_path} with {len(problems)} problems.")

if __name__ == "__main__":
    build_data()
