window.WORKSHEET_DATA = {
  "meta": {
    "title": "공통수학2 - II. 집합과 명제",
    "subtitle": "천재(홍) 교과서 실전 핵심 (본문 핵심 + 대단원 평가하기 전수 수록)",
    "student": "",
    "date": "2026. 09. 21 (월)",
    "cheer": "완벽한 내신 1등급을 응원합니다 ✨"
  },
  "problems": [
    {
      "id": 1,
      "source": "천재(홍) 교과서 62p 문제 02번",
      "tag": "기초",
      "question": "$10$보다 작은 홀수의 집합을 $A$라고 할 때, 다음 네모 안에 기호 $\\in, \\notin$ 중 알맞은 것을 써넣으시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "3 [ ] A"
        },
        {
          "no": 2,
          "formula": "6 [ ] A"
        },
        {
          "no": 3,
          "formula": "9 [ ] A"
        },
        {
          "no": 4,
          "formula": "11 [ ] A"
        }
      ],
      "tip": "집합 $A$의 원소인지 여부를 성질에 따라 판단하여 기호를 대입합니다.",
      "answer": "(1) $\\in$, (2) $\\notin$, (3) $\\in$, (4) $\\notin$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$10$보다 작은 홀수는 $1, 3, 5, 7, 9$이므로 $3 \\in A$ $\\therefore$ **$\\in$**"
          },
          {
            "label": "(2)",
            "content": "$6$은 짝수이므로 $6 \\notin A$ $\\therefore$ **$\\notin$**"
          },
          {
            "label": "(3)",
            "content": "$9$는 $10$보다 작은 홀수이므로 $9 \\in A$ $\\therefore$ **$\\in$**"
          },
          {
            "label": "(4)",
            "content": "$11$은 $10$보다 크므로 $11 \\notin A$ $\\therefore$ **$\\notin$**"
          }
        ]
      }
    },
    {
      "id": 2,
      "source": "천재(홍) 교과서 62p 문제 03번",
      "tag": "기본",
      "question": "다음 집합을 원소나열법으로 나타낸 것은 조건제시법으로, 조건제시법으로 나타낸 것은 원소나열법으로 나타내시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$\\{3, 6, 9, 12, 15\\}$"
        },
        {
          "no": 2,
          "formula": "$\\{x \\mid x$는 $12$의 양의 약수$\\}$"
        }
      ],
      "tip": "집합의 원소들이 가지는 공통 성질을 파악하여 조건제시법 또는 원소나열법으로 대입하여 표현합니다.",
      "answer": "(1) $\\{x \\mid x\\text{는 } 15\\text{ 이하의 } 3\\text{의 배수}\\}$, (2) $\\{1, 2, 3, 4, 6, 12\\}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "[조건제시법 변환] 원소들이 $15$ 이하의 $3$의 양의 배수이므로: $\\{x \\mid x\\text{는 } 15\\text{ 이하의 } 3\\text{의 배수}\\}$ $\\therefore$ **$\\{x \\mid x\\text{는 } 15\\text{ 이하의 } 3\\text{의 배수}\\}$**"
          },
          {
            "label": "(2)",
            "content": "[원소나열법 변환] $12$의 양의 약수를 모두 나열하면: $\\{1, 2, 3, 4, 6, 12\\}$ $\\therefore$ **$\\{1, 2, 3, 4, 6, 12\\}$**"
          }
        ]
      }
    },
    {
      "id": 3,
      "source": "천재(홍) 교과서 63p 문제 04번",
      "tag": "기초",
      "question": "두 집합 $A=\\{2, 4, 6, \\dots, 20\\}, B=\\{x \\mid x\\text{는 } 20\\text{ 이하의 소수}\\}$에 대하여 $n(A), n(B)$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "유한집합의 원소의 개수 공식 $n(A)$의 성질에 따라 각 집합의 원소의 개수를 세어 대입합니다.",
      "answer": "$n(A)=10, n(B)=8$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: n(A) 계산]",
            "content": "집합 $A$는 $20$ 이하의 짝수이므로 $2 \\times 1, 2 \\times 2, \\dots, 2 \\times 10$으로 총 $10$개. 즉 $n(A)=10$"
          },
          {
            "label": "[2단계: n(B) 계산]",
            "content": "$20$ 이하의 소수는 $2, 3, 5, 7, 11, 13, 17, 19$로 총 $8$개. 즉 $n(B)=8$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "따라서 $n(A)=10, n(B)=8$ $\\therefore$ **$n(A)=10, n(B)=8$**"
          }
        ]
      }
    },
    {
      "id": 4,
      "source": "천재(홍) 교과서 64p 문제 01번",
      "tag": "기초",
      "question": "다음 네모 안에 기호 $\\subset, \\not\\subset$ 중 알맞은 것을 써넣으시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$A=\\{a, b\\}, B=\\{a, b, c\\} \\implies A$ [ ] $B$"
        },
        {
          "no": 2,
          "formula": "$A=\\{1, 3, 5\\}, B=\\{x \\mid x$는 $9$의 양의 약수$\\} \\implies A$ [ ] $B$"
        }
      ],
      "tip": "부분집합의 정의와 성질에 따라 한 집합의 모든 원소가 다른 집합에 포함되는지 확인하여 대입합니다.",
      "answer": "(1) $\\subset$, (2) $\\not\\subset$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$A$의 모든 원소 $a, b$가 $B$에 속하므로 $A \\subset B$ $\\therefore$ **$\\subset$**"
          },
          {
            "label": "(2)",
            "content": "$B = \\{1, 3, 9\\}$에서 $5 \\in A$이지만 $5 \\notin B$이므로 $A \\not\\subset B$ $\\therefore$ **$\\not\\subset$**"
          }
        ]
      }
    },
    {
      "id": 5,
      "source": "천재(홍) 교과서 65p 문제 02번",
      "tag": "기본",
      "question": "집합 $\\{1, 3, 5\\}$의 부분집합을 모두 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "원소의 개수가 0개, 1개, 2개, 3개인 부분집합의 성질을 나누어 빠짐없이 나열합니다.",
      "answer": "$\\emptyset, \\{1\\}, \\{3\\}, \\{5\\}, \\{1, 3\\}, \\{1, 5\\}, \\{3, 5\\}, \\{1, 3, 5\\}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 원소 0개 및 1개]",
            "content": "원소 0개: $\\emptyset$\n원소 1개: $\\{1\\}, \\{3\\}, \\{5\\}$"
          },
          {
            "label": "[2단계: 원소 2개 및 3개]",
            "content": "원소 2개: $\\{1, 3\\}, \\{1, 5\\}, \\{3, 5\\}$\n원소 3개: $\\{1, 3, 5\\}$"
          },
          {
            "label": "[3단계: 총 개수 확인]",
            "content": "부분집합 공식 $2^3 = 8$개 일치 $\\therefore$ **$\\emptyset, \\{1\\}, \\{3\\}, \\{5\\}, \\{1, 3\\}, \\{1, 5\\}, \\{3, 5\\}, \\{1, 3, 5\\}$**"
          }
        ]
      }
    },
    {
      "id": 6,
      "source": "천재(홍) 교과서 65p 문제 04번",
      "tag": "기본",
      "question": "집합 $\\{0, 3, 6, 9\\}$의 진부분집합의 개수를 구하고, 그 중 원소의 개수가 $3$인 진부분집합을 모두 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "진부분집합의 개수 공식 $2^n - 1$에 대입하고 성질에 맞게 원소 3개인 집합을 나열합니다.",
      "answer": "개수: 15, 집합: $\\{0, 3, 6\\}, \\{0, 3, 9\\}, \\{0, 6, 9\\}, \\{3, 6, 9\\}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 진부분집합의 개수]",
            "content": "원소의 개수가 $4$이므로 공식 $2^4 - 1 = 16 - 1 = 15$개"
          },
          {
            "label": "[2단계: 원소 3개인 진부분집합]",
            "content": "원소 $4$개 중 $1$개씩 제외하여 만든 부분집합:\n$\\{0, 3, 6\\}, \\{0, 3, 9\\}, \\{0, 6, 9\\}, \\{3, 6, 9\\}$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "따라서 개수는 15개, 집합은 4개 $\\therefore$ **개수: 15, 집합: $\\{0, 3, 6\\}, \\{0, 3, 9\\}, \\{0, 6, 9\\}, \\{3, 6, 9\\}$**"
          }
        ]
      }
    },
    {
      "id": 7,
      "source": "천재(홍) 교과서 66p 문제 05번",
      "tag": "기본",
      "question": "두 집합 $A=\\{2, a+1\\}, B=\\{1, 2, 4\\}$에 대하여 $A \\subset B$를 만족시키는 상수 $a$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "부분집합의 성질에 따라 $a+1 \\in B$이어야 하므로 가능한 원소를 각각 대입하여 방정식을 풉니다.",
      "answer": "0 또는 3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 조건 분석]",
            "content": "$A \\subset B$이므로 $A$의 원소 $a+1$은 $B$의 원소이어야 합니다. 즉 $a+1 \\in \\{1, 2, 4\\}$"
          },
          {
            "label": "[2단계: 경우 나누기]",
            "content": "$a+1=1 \\implies a=0$\n$a+1=2 \\implies a=1$ (이때 $A=\\{2, 2\\}=\\{2\\} \\subset B$ 성립)\n$a+1=4 \\implies a=3$"
          },
          {
            "label": "[3단계: 집합의 표현 확인]",
            "content": "서로 다른 두 원소로 보면 $a+1 \\ne 2$이므로 $a=0$ 또는 $a=3$ $\\therefore$ **0 또는 3**"
          }
        ]
      }
    },
    {
      "id": 8,
      "source": "천재(홍) 교과서 68p 문제 01번",
      "tag": "기초",
      "question": "두 집합 $A=\\{1, 2, 3, 6\\}, B=\\{2, 4, 6, 8\\}$에 대하여 $A \\cup B$와 $A \\cap B$를 각각 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "합집합과 교집합의 연산 성질에 따라 중복 원소를 대입하여 정리합니다.",
      "answer": "$A \\cup B = \\{1, 2, 3, 4, 6, 8\\}, A \\cap B = \\{2, 6\\}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 합집합 계산]",
            "content": "$A$와 $B$의 원소를 모두 모으면: $\\{1, 2, 3, 4, 6, 8\\}$"
          },
          {
            "label": "[2단계: 교집합 계산]",
            "content": "$A$와 $B$의 공통 원소는 $2, 6$이므로: $\\{2, 6\\}$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **$A \\cup B = \\{1, 2, 3, 4, 6, 8\\}, A \\cap B = \\{2, 6\\}$**"
          }
        ]
      }
    },
    {
      "id": 9,
      "source": "천재(홍) 교과서 68p 문제 02번",
      "tag": "기본",
      "question": "두 집합 $A, B$에 대하여 $n(A)=5, n(B)=10, n(A \\cap B)=3$일 때, $n(A \\cup B)$의 값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "합집합의 원소의 개수 공식 $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$에 값을 대입합니다.",
      "answer": "12",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 공식 대입]",
            "content": "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$"
          },
          {
            "label": "[2단계: 계산]",
            "content": "$n(A \\cup B) = 5 + 10 - 3 = 12$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **12**"
          }
        ]
      }
    },
    {
      "id": 10,
      "source": "천재(홍) 교과서 70p 예제 02번",
      "tag": "기본",
      "question": "세 집합 $A, B, C$에 대하여 $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$가 성립하는 연산법칙의 이름을 말하고, $A=\\{1, 2\\}, B=\\{2, 3\\}, C=\\{3, 4\\}$일 때 양변의 집합을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "집합의 연산법칙 중 분배법칙의 성질을 적용하여 각 변에 원소를 대입하고 일치함을 확인합니다.",
      "answer": "법칙: 분배법칙, 집합: $\\{2\\}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 연산법칙]",
            "content": "교집합의 합집합에 대한 분배법칙입니다."
          },
          {
            "label": "[2단계: 좌변 계산]",
            "content": "$B \\cup C = \\{2, 3, 4\\}$, $A \\cap (B \\cup C) = \\{1, 2\\} \\cap \\{2, 3, 4\\} = \\{2\\}$"
          },
          {
            "label": "[3단계: 우변 계산]",
            "content": "$A \\cap B = \\{2\\}, A \\cap C = \\emptyset$, $(A \\cap B) \\cup (A \\cap C) = \\{2\\} \\cup \\emptyset = \\{2\\}$ $\\therefore$ **법칙: 분배법칙, 집합: $\\{2\\}$**"
          }
        ]
      }
    },
    {
      "id": 11,
      "source": "천재(홍) 교과서 72p 문제 05번",
      "tag": "기본",
      "question": "전체집합 $U=\\{x \\mid x\\text{는 } 12\\text{ 이하의 자연수}\\}$의 두 부분집합 $A=\\{1, 3, 5, 7, 9, 11\\}, B=\\{x \\mid x\\text{는 } 12\\text{의 양의 약수}\\}$에 대하여 다음을 구하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$A^c$"
        },
        {
          "no": 2,
          "formula": "$A - B$"
        }
      ],
      "tip": "여집합과 차집합의 연산 공식 $A-B = A \\cap B^c$ 성질에 따라 원소를 대입하여 구합니다.",
      "answer": "(1) $\\{2, 4, 6, 8, 10, 12\\}$, (2) $\\{5, 7, 9, 11\\}$",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$U=\\{1, 2, \\dots, 12\\}$에서 $A$의 원소를 제외하면: $A^c = \\{2, 4, 6, 8, 10, 12\\}$ $\\therefore$ **$\\{2, 4, 6, 8, 10, 12\\}$**"
          },
          {
            "label": "(2)",
            "content": "$B=\\{1, 2, 3, 4, 6, 12\\}$이므로 $A \\cap B = \\{1, 3\\}$. 따라서 $A-B = A - (A \\cap B) = \\{5, 7, 9, 11\\}$ $\\therefore$ **$\\{5, 7, 9, 11\\}$**"
          }
        ]
      }
    },
    {
      "id": 12,
      "source": "천재(홍) 교과서 74p 문제 08번",
      "tag": "기본",
      "question": "전체집합 $U=\\{1, 2, 3, 4, 5, 6\\}$의 두 부분집합 $A=\\{1, 2, 4\\}, B=\\{2, 3, 5\\}$에 대하여 드모르간 법칙을 이용하여 $(A \\cup B)^c$와 $(A \\cap B)^c$를 각각 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "드모르간 법칙 $(A \\cup B)^c = A^c \\cap B^c$ 공식을 적용하여 여집합 원소를 대입합니다.",
      "answer": "$(A \\cup B)^c = \\{6\\}, (A \\cap B)^c = \\{1, 3, 4, 5, 6\\}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: (A u B)^c 계산]",
            "content": "$A \\cup B = \\{1, 2, 3, 4, 5\\}$이므로 전체집합 $U$에서 제외하면 $(A \\cup B)^c = \\{6\\}$"
          },
          {
            "label": "[2단계: (A n B)^c 계산]",
            "content": "$A \\cap B = \\{2\\}$이므로 $(A \\cap B)^c = U - \\{2\\} = \\{1, 3, 4, 5, 6\\}$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **$(A \\cup B)^c = \\{6\\}, (A \\cap B)^c = \\{1, 3, 4, 5, 6\\}$**"
          }
        ]
      }
    },
    {
      "id": 13,
      "source": "천재(홍) 교과서 75p 중단원 04번",
      "tag": "실전",
      "question": "전체집합 $U$의 두 부분집합 $A, B$에 대하여 $A \\subset B$일 때, 항상 옳은 것만을 보기에서 있는 대로 고르시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "A \\cap B = A"
        },
        {
          "no": 2,
          "formula": "A \\cup B = U"
        },
        {
          "no": 3,
          "formula": "A - B = \\emptyset"
        },
        {
          "no": 4,
          "formula": "B^c \\subset A^c"
        }
      ],
      "tip": "포함관계 $A \\subset B$의 동치 성질들을 비교하고 반례를 찾아 대입하여 검증합니다.",
      "answer": "(1), (3), (4)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: (1) 검증]",
            "content": "$A \\subset B$이면 $A \\cap B = A$ 항상 성립 $\\therefore$ 참"
          },
          {
            "label": "[2단계: (2) 검증]",
            "content": "$A \\cup B = B$이므로 $B=U$가 아니면 거짓 $\\therefore$ 거짓"
          },
          {
            "label": "[3단계: (3), (4) 검증]",
            "content": "$A-B=\\emptyset$ 항상 성립. 대우 관계에 의해 $B^c \\subset A^c$ 항상 성립 $\\therefore$ **(1), (3), (4)**"
          }
        ]
      }
    },
    {
      "id": 14,
      "source": "천재(홍) 교과서 76p 중단원 08번",
      "tag": "실전",
      "question": "어느 학급의 학생 $30$명을 대상으로 두 포털 사이트 $\\mathrm{A}, \\mathrm{B}$의 이용 여부를 조사하였더니 $\\mathrm{A}$ 사이트를 이용하는 학생이 $18$명, $\\mathrm{B}$ 사이트를 이용하는 학생이 $15$명이었다. 두 사이트 $\\mathrm{A}, \\mathrm{B}$를 모두 이용하는 학생 수의 최댓값과 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "교집합의 원소의 개수 공식 $n(A \\cap B) = n(A)+n(B)-n(A \\cup B)$에 전체집합의 범위를 대입하여 구간을 나눕니다.",
      "answer": "최댓값: 15, 최솟값: 3",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 최댓값 계산]",
            "content": "$B \\subset A$일 때 $n(A \\cap B)$가 최대이므로 최댓값은 $\\min(18, 15) = 15$"
          },
          {
            "label": "[2단계: 최솟값 계산]",
            "content": "$A \\cup B = U$일 때 $n(A \\cap B)$가 최소이므로: $n(A \\cap B) = 18 + 15 - 30 = 3$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "따라서 최댓값은 $15$, 최솟값은 $3$ $\\therefore$ **최댓값: 15, 최솟값: 3**"
          }
        ]
      }
    },
    {
      "id": 15,
      "source": "천재(홍) 교과서 80p 문제 01번",
      "tag": "기초",
      "question": "다음 문장 중 명제인 것을 찾고, 그 명제의 참, 거짓을 판별하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$\\sqrt{4}$는 유리수이다."
        },
        {
          "no": 2,
          "formula": "$x+3 > 5$"
        },
        {
          "no": 3,
          "formula": "$6$의 양의 배수는 $3$의 양의 배수이다."
        }
      ],
      "tip": "참, 거짓을 명확히 판별할 수 있는 문장이나 식을 명제로 고르고 그 성질을 판정합니다.",
      "answer": "(1) 참인 명제, (2) 명제가 아니다 (조건), (3) 참인 명제",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$\\sqrt{4} = 2$는 유리수가 맞으므로 참인 명제 $\\therefore$ **참인 명제**"
          },
          {
            "label": "(2)",
            "content": "$x$의 값에 따라 참, 거짓이 달라지므로 명제가 아닌 조건 $\\therefore$ **명제가 아니다 (조건)**"
          },
          {
            "label": "(3)",
            "content": "$6$의 배수 $\\{6, 12, \\dots\\}$는 모두 $3$의 배수이므로 참인 명제 $\\therefore$ **참인 명제**"
          }
        ]
      }
    },
    {
      "id": 16,
      "source": "천재(홍) 교과서 81p 문제 03번",
      "tag": "기본",
      "question": "전체집합 $U=\\{1, 2, 3, 4, 5, 6, 7, 8\\}$일 때, 조건 '$p: x\\text{는 } 6\\text{의 약수이다.}$'의 부정 $\\sim p$의 진리집합을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "조건 $p$의 진리집합 $P$를 구한 후 여집합 공식 $P^c$에 대입하여 원소를 구합니다.",
      "answer": "$\\{4, 5, 7, 8\\}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 조건 p의 진리집합]",
            "content": "$P = \\{1, 2, 3, 6\\}$"
          },
          {
            "label": "[2단계: 부정 ~p의 진리집합]",
            "content": "부정 $\\sim p$의 진리집합은 $P^c = U - P = \\{4, 5, 7, 8\\}$"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **$\\{4, 5, 7, 8\\}$**"
          }
        ]
      }
    },
    {
      "id": 17,
      "source": "천재(홍) 교과서 83p 문제 05번",
      "tag": "기본",
      "question": "실수 전체의 집합에서 다음 명제의 참, 거짓을 판별하고 부정을 말하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "모든 실수 $x$에 대하여 $x^2 > 0$이다."
        },
        {
          "no": 2,
          "formula": "어떤 실수 $x$에 대하여 $x^2-2x+3 < 0$이다."
        }
      ],
      "tip": "'모든'과 '어떤'이 포함된 명제의 부정 성질을 적용하고 반례를 대입하여 참, 거짓을 판별합니다.",
      "answer": "(1) 거짓 (부정: 어떤 실수 $x$에 대하여 $x^2 \\le 0$이다.), (2) 거짓 (부정: 모든 실수 $x$에 대하여 $x^2-2x+3 \\ge 0$이다.)",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$x=0$일 때 $0^2 = 0$이므로 거짓. 부정: '어떤 실수 $x$에 대하여 $x^2 \\le 0$이다.' $\\therefore$ **거짓 (부정: 어떤 실수 $x$에 대하여 $x^2 \\le 0$이다.)**"
          },
          {
            "label": "(2)",
            "content": "$x^2-2x+3 = (x-1)^2+2 \\ge 2 > 0$이므로 항상 양수여서 거짓. 부정: '모든 실수 $x$에 대하여 $x^2-2x+3 \\ge 0$이다.' $\\therefore$ **거짓 (부정: 모든 실수 $x$에 대하여 $x^2-2x+3 \\ge 0$이다.)**"
          }
        ]
      }
    },
    {
      "id": 18,
      "source": "천재(홍) 교과서 85p 문제 02번",
      "tag": "기본",
      "question": "다음 명제의 참, 거짓을 판별하시오. (단, $x, y$는 실수)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$x=2$이면 $x^2-4=0$이다."
        },
        {
          "no": 2,
          "formula": "$x+y > 0$이면 $x > 0$이고 $y > 0$이다."
        }
      ],
      "tip": "가정과 결론의 진리집합 사이의 포함관계 성질 $P \\subset Q$를 대입하여 판정합니다.",
      "answer": "(1) 참, (2) 거짓",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$P=\\{2\\}, Q=\\{-2, 2\\}$이므로 $P \\subset Q$ 성립 $\\therefore$ **참**"
          },
          {
            "label": "(2)",
            "content": "반례: $x=3, y=-1$이면 $x+y = 2 > 0$이지만 $y \\le 0$이므로 거짓 $\\therefore$ **거짓**"
          }
        ]
      }
    },
    {
      "id": 19,
      "source": "천재(홍) 교과서 86p 문제 03번",
      "tag": "기본",
      "question": "다음 명제의 역과 대우를 말하고, 그것의 참, 거짓을 판별하시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$x \\ge 1$이면 $x^2 \\ge 1$이다."
        },
        {
          "no": 2,
          "formula": "$x^2$이 유리수이면 $x$는 유리수이다."
        }
      ],
      "tip": "명제와 그 대우는 항상 참, 거짓이 일치한다는 성질을 이용하고 반례를 대입합니다.",
      "answer": "(1) 역: 거짓, 대우: 참, (2) 역: 참, 대우: 거짓",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "역: '$x^2 \\ge 1$이면 $x \\ge 1$이다.' (반례 $x=-2$이므로 거짓)\n대우: '$x^2 < 1$이면 $x < 1$이다.' (원명제가 참이므로 대우도 참) $\\therefore$ **역: 거짓, 대우: 참**"
          },
          {
            "label": "(2)",
            "content": "역: '$x$가 유리수이면 $x^2$은 유리수이다.' (참)\n대우: '$x$가 유리수가 아니면 $x^2$은 유리수가 아니다.' (원명제에서 $x=\\sqrt{2}$이면 $x^2=2$ 유리수이지만 $x$는 무리수이므로 거짓) $\\therefore$ **역: 참, 대우: 거짓**"
          }
        ]
      }
    },
    {
      "id": 20,
      "source": "천재(홍) 교과서 88p 문제 04번",
      "tag": "기초",
      "question": "다음 두 조건 $p, q$에 대하여 $p$는 $q$이기 위한 어떤 조건인지 말하시오. (단, $x$는 실수)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "p: x > 2, \\quad q: x > 0"
        },
        {
          "no": 2,
          "formula": "p: x=0, \\quad q: x^2+x=0"
        },
        {
          "no": 3,
          "formula": "p: x=y, \\quad q: x-y=0"
        }
      ],
      "tip": "화살표 $p \\implies q$와 $q \\implies p$의 참, 거짓 성질을 진리집합에 대입하여 판정합니다.",
      "answer": "(1) 충분조건, (2) 충분조건, (3) 필요충분조건",
      "solution": {
        "steps": [
          {
            "label": "(1)",
            "content": "$x > 2 \\implies x > 0$ 참, $x > 0 \\implies x > 2$ 거짓($x=1$). 따라서 충분조건 $\\therefore$ **충분조건**"
          },
          {
            "label": "(2)",
            "content": "$P=\\{0\\}, Q=\\{-1, 0\\}$이므로 $P \\subset Q$. 따라서 충분조건 $\\therefore$ **충분조건**"
          },
          {
            "label": "(3)",
            "content": "$x=y \\iff x-y=0$ 양방향 모두 참이므로 필요충분조건 $\\therefore$ **필요충분조건**"
          }
        ]
      }
    },
    {
      "id": 21,
      "source": "천재(홍) 교과서 88p 생각 넓히기",
      "tag": "실전",
      "question": "두 조건 '$p: a-1 \\le x \\le a+2$', '$q: 1 \\le x \\le 6$'에 대하여 $p$가 $q$이기 위한 충분조건이 되도록 하는 실수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "충분조건 성질 $P \\subset Q$에 따라 수직선 위의 포함관계 부등식에 대입하여 공통 범위를 구합니다.",
      "answer": "$2 \\le a \\le 4$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 포함관계 설정]",
            "content": "$p$가 $q$이기 위한 충분조건이므로 $P \\subset Q$이어야 합니다: $[a-1, a+2] \\subset [1, 6]$"
          },
          {
            "label": "[2단계: 부등식 연립]",
            "content": "$1 \\le a-1$이고 $a+2 \\le 6$ 이어야 하므로:\n$a-1 \\ge 1 \\implies a \\ge 2$\n$a+2 \\le 6 \\implies a \\le 4$"
          },
          {
            "label": "[3단계: 공통 범위 도출]",
            "content": "따라서 $2 \\le a \\le 4$ $\\therefore$ **$2 \\le a \\le 4$**"
          }
        ]
      }
    },
    {
      "id": 22,
      "source": "천재(홍) 교과서 90p 문제 01번",
      "tag": "실전",
      "question": "자연수 $n$에 대하여 명제 '$n^2$이 짝수이면 $n$도 짝수이다.'를 대우를 이용하여 증명하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "대우인 '$n$이 홀수이면 $n^2$도 홀수이다.'를 세우고 $n=2k-1$을 대입하여 성질을 증명합니다.",
      "answer": "증명 참조 (대우가 참이므로 주어진 명제도 참)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 대우 작성]",
            "content": "주어진 명제의 대우: '자연수 $n$에 대하여 $n$이 홀수이면 $n^2$도 홀수이다.'"
          },
          {
            "label": "[2단계: 식 대입 및 전개]",
            "content": "$n$이 홀수이므로 $n=2k-1$ ($k$는 자연수)로 나타내면:\n$n^2 = (2k-1)^2 = 4k^2 - 4k + 1 = 2(2k^2-2k) + 1$\n여기서 $2k^2-2k$는 $0$ 이상의 정수이므로 $n^2$은 홀수입니다."
          },
          {
            "label": "[3단계: 결론 도출]",
            "content": "따라서 대우가 참이므로 주어진 명제 '$n^2$이 짝수이면 $n$도 짝수이다.'도 참입니다. $\\therefore$ **증명 완료**"
          }
        ]
      }
    },
    {
      "id": 23,
      "source": "천재(홍) 교과서 91p 예제 02번",
      "tag": "실전",
      "question": "명제 '$\\sqrt{2}$는 유리수가 아니다(무리수이다).'를 귀류법을 이용하여 증명하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "결론을 부정하여 $\\sqrt{2}$를 기약분수 $\\frac{m}{n}$로 가정하고 대입하여 모순 성질을 이끌어냅니다.",
      "answer": "증명 참조 (서로소 가정에 모순이므로 유리수가 아님)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 결론 부정 가정]",
            "content": "$\\sqrt{2}$가 유리수라고 가정하면 $\\sqrt{2} = \\frac{m}{n}$ ($m, n$은 서로소인 자연수)로 나타낼 수 있습니다."
          },
          {
            "label": "[2단계: 제곱 및 대입]",
            "content": "양변을 제곱하면 $2 = \\frac{m^2}{n^2} \\implies m^2 = 2n^2$. 따라서 $m^2$이 짝수이므로 $m$도 짝수입니다. $m=2k$를 대입하면 $(2k)^2 = 2n^2 \\implies 4k^2 = 2n^2 \\implies n^2 = 2k^2$. 따라서 $n^2$도 짝수이므로 $n$도 짝수입니다."
          },
          {
            "label": "[3단계: 모순 도출]",
            "content": "$m$과 $n$이 모두 짝수이므로 $m, n$이 서로소라는 가정에 모순입니다. 따라서 $\\sqrt{2}$는 유리수가 아닙니다. $\\therefore$ **증명 완료**"
          }
        ]
      }
    },
    {
      "id": 24,
      "source": "천재(홍) 교과서 93p 문제 06번",
      "tag": "기본",
      "question": "$a > 0, b > 0$일 때, 부등식 $\\frac{a}{b} + \\frac{b}{a} \\ge 2$가 성립함을 산술평균과 기하평균의 관계 공식으로 증명하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "산술기하평균 부등식 공식 $x+y \\ge 2\\sqrt{xy}$에 $x=\\frac{a}{b}, y=\\frac{b}{a}$를 대입합니다.",
      "answer": "증명 참조 (등호는 $a=b$일 때 성립)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 산술기하 공식 적용]",
            "content": "$a > 0, b > 0$이므로 $\\frac{a}{b} > 0, \\frac{b}{a} > 0$입니다."
          },
          {
            "label": "[2단계: 대입 및 계산]",
            "content": "$\\frac{a}{b} + \\frac{b}{a} \\ge 2\\sqrt{\\frac{a}{b} \\times \\frac{b}{a}} = 2\\sqrt{1} = 2$"
          },
          {
            "label": "[3단계: 등호 성립 조건]",
            "content": "등호는 $\\frac{a}{b} = \\frac{b}{a}$, 즉 $a^2 = b^2 \\implies a=b$일 때 성립합니다. $\\therefore$ **증명 완료 (등호는 $a=b$일 때 성립)**"
          }
        ]
      }
    },
    {
      "id": 25,
      "source": "천재(홍) 교과서 97p 대단원 01번",
      "tag": "대단원",
      "question": "두 집합 $A=\\{x \\mid x\\text{는 } 15\\text{ 이하의 자연수}\\}, B=\\{x \\mid x\\text{는 } 15\\text{의 약수}\\}$에 대하여 다음 중 옳지 않은 것은?",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$4 \\in A$"
        },
        {
          "no": 2,
          "formula": "$10 \\in B$"
        },
        {
          "no": 3,
          "formula": "$8 \\notin B$"
        },
        {
          "no": 4,
          "formula": "$B \\subset A$"
        },
        {
          "no": 5,
          "formula": "$\\{1, 3, 5\\} \\subset B$"
        }
      ],
      "tip": "원소의 성질과 부분집합의 포함관계를 확인하여 각 보기에 대입합니다.",
      "answer": "②",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 집합의 원소 나열]",
            "content": "$A=\\{1, 2, \\dots, 15\\}$\n$B=\\{1, 3, 5, 15\\}$"
          },
          {
            "label": "[2단계: 보기 검토]",
            "content": "① $4 \\in A$ (참)\n② $10 \\in B$: $10$은 $15$의 약수가 아니므로 거짓\n③ $8 \\notin B$ (참)\n④ $B \\subset A$ (참)\n⑤ $\\{1, 3, 5\\} \\subset B$ (참)"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "따라서 옳지 않은 것은 ② $\\therefore$ **②**"
          }
        ]
      }
    },
    {
      "id": 26,
      "source": "천재(홍) 교과서 97p 대단원 02번",
      "tag": "대단원",
      "question": "세 집합 $A=\\{-1, 0, 1\\}, B=\\{x^2 \\mid x \\in A\\}, C=\\{x+y \\mid x \\in A, y \\in A\\}$에 대하여 세 집합 사이의 포함관계로 옳은 것은?",
      "formula": "",
      "subQuestions": [],
      "tip": "각 집합의 원소를 직접 대입하여 계산한 후 포함관계 성질을 판정합니다.",
      "answer": "$B \\subset A \\subset C$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: B의 원소 구하기]",
            "content": "$x \\in \\{-1, 0, 1\\}$의 제곱이므로: $B = \\{0, 1\\}$"
          },
          {
            "label": "[2단계: C의 원소 구하기]",
            "content": "$x, y \\in \\{-1, 0, 1\\}$의 합이므로:\n$C = \\{-2, -1, 0, 1, 2\\}$"
          },
          {
            "label": "[3단계: 포함관계 비교]",
            "content": "$B=\\{0, 1\\} \\subset A=\\{-1, 0, 1\\} \\subset C=\\{-2, -1, 0, 1, 2\\}$이므로 $B \\subset A \\subset C$ $\\therefore$ **$B \\subset A \\subset C$**"
          }
        ]
      }
    },
    {
      "id": 27,
      "source": "천재(홍) 교과서 97p 대단원 03번",
      "tag": "대단원",
      "question": "세 집합 $A, B, C$에 대하여 $A \\cup B = \\{4, 5, 6, 7, 8\\}, C=\\{x \\mid x^2-7x+12=0\\}$일 때, $A \\cup (B \\cup C)$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "결합법칙 공식 $(A \\cup B) \\cup C$ 성질을 이용하여 원소를 합집합에 대입합니다.",
      "answer": "$\\{3, 4, 5, 6, 7, 8\\}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 집합 C의 원소 구하기]",
            "content": "$x^2-7x+12 = (x-3)(x-4) = 0 \\implies C = \\{3, 4\\}$"
          },
          {
            "label": "[2단계: 결합법칙 적용]",
            "content": "$A \\cup (B \\cup C) = (A \\cup B) \\cup C$"
          },
          {
            "label": "[3단계: 합집합 원소 계산]",
            "content": "$\\{4, 5, 6, 7, 8\\} \\cup \\{3, 4\\} = \\{3, 4, 5, 6, 7, 8\\}$ $\\therefore$ **$\\{3, 4, 5, 6, 7, 8\\}$**"
          }
        ]
      }
    },
    {
      "id": 28,
      "source": "천재(홍) 교과서 97p 대단원 04번",
      "tag": "대단원",
      "question": "집합 $A_n = \\{x \\mid x\\text{는 } n\\text{의 배수}\\}$에 대하여 보기 중 옳은 것만을 있는 대로 고르시오. (단, $n$은 자연수)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "A_4 \\subset A_8"
        },
        {
          "no": 2,
          "formula": "A_2 \\cap A_5 = A_{10}"
        },
        {
          "no": 3,
          "formula": "A_3 \\cup A_6 = A_6"
        }
      ],
      "tip": "배수 집합의 성질: $m$이 $n$의 약수이면 $A_n \\subset A_m$, $A_a \\cap A_b = A_{\\operatorname{lcm}(a, b)}$ 공식을 대입합니다.",
      "answer": "ㄴ",
      "solution": {
        "steps": [
          {
            "label": "[1단계: ㄱ 판별]",
            "content": "$A_8 = \\{8, 16, \\dots\\} \\subset A_4 = \\{4, 8, 12, 16, \\dots\\}$이므로 $A_8 \\subset A_4$입니다. 따라서 $A_4 \\subset A_8$은 거짓"
          },
          {
            "label": "[2단계: ㄴ 판별]",
            "content": "$2$의 배수와 $5$의 배수의 공통원소는 최소공배수인 $10$의 배수이므로 $A_2 \\cap A_5 = A_{10}$은 참"
          },
          {
            "label": "[3단계: ㄷ 판별]",
            "content": "$A_6 \\subset A_3$이므로 $A_3 \\cup A_6 = A_3$입니다. 따라서 $A_6$은 거짓 $\\therefore$ **ㄴ**"
          }
        ]
      }
    },
    {
      "id": 29,
      "source": "천재(홍) 교과서 97p 대단원 05번",
      "tag": "대단원",
      "question": "벤 다이어그램에서 집합 $A$ 중 $B$에 속하지 않는 부분과 집합 $C$ 전체가 색칠되어 있을 때, 이 영역을 나타내는 집합으로 항상 같은 것은?",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "(A^c \\cap B) \\cup C"
        },
        {
          "no": 2,
          "formula": "A \\cap (B \\cup C)"
        },
        {
          "no": 3,
          "formula": "(A \\cup B) \\cap C^c"
        },
        {
          "no": 4,
          "formula": "(A - B) \\cap C"
        },
        {
          "no": 5,
          "formula": "(A - B) \\cup C"
        }
      ],
      "tip": "색칠된 영역의 성질을 분석하여 차집합 $A-B$와 $C$의 합집합 표현을 대입하여 찾습니다.",
      "answer": "⑤",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 색칠 영역 분석]",
            "content": "색칠된 부분은 $A-B$ 영역과 집합 $C$의 영역을 합친 것입니다."
          },
          {
            "label": "[2단계: 집합 연산식 작성]",
            "content": "따라서 $(A-B) \\cup C$와 같습니다."
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "보기 ⑤와 정확히 일치 $\\therefore$ **⑤**"
          }
        ]
      }
    },
    {
      "id": 30,
      "source": "천재(홍) 교과서 97p 대단원 06번",
      "tag": "대단원",
      "question": "전체집합 $U$의 두 부분집합 $A, B$에 대하여 $n(U)=50, n(A)=28, n(B)=23, n(A \\cap B^c)=20$일 때, $n(A^c \\cap B^c)$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "드모르간 법칙 $(A \\cup B)^c = A^c \\cap B^c$과 차집합 성질 $A-B = A \\cap B^c$ 공식에 대입합니다.",
      "answer": "7",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 교집합 구하기]",
            "content": "$n(A \\cap B^c) = n(A - B) = n(A) - n(A \\cap B) = 20 \\implies 28 - n(A \\cap B) = 20 \\implies n(A \\cap B) = 8$"
          },
          {
            "label": "[2단계: 합집합 구하기]",
            "content": "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 28 + 23 - 8 = 43$"
          },
          {
            "label": "[3단계: 여집합 원소의 개수]",
            "content": "$n(A^c \\cap B^c) = n((A \\cup B)^c) = n(U) - n(A \\cup B) = 50 - 43 = 7$ $\\therefore$ **7**"
          }
        ]
      }
    },
    {
      "id": 31,
      "source": "천재(홍) 교과서 98p 대단원 07번",
      "tag": "대단원",
      "question": "전체집합이 $U=\\{1, 2, 3, 4, 5\\}$일 때, 조건 '$p: x^2-8x+7=0$'의 진리집합을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "이차방정식을 인수분해하여 해를 구한 후 전체집합 $U$에 속하는 원소만 대입합니다.",
      "answer": "$\\{1\\}$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 인수분해]",
            "content": "$x^2-8x+7 = (x-1)(x-7) = 0 \\implies x=1$ 또는 $x=7$"
          },
          {
            "label": "[2단계: 전체집합 확인]",
            "content": "$7 \\notin U=\\{1, 2, 3, 4, 5\\}$이므로 $x=1$만 가능합니다."
          },
          {
            "label": "[3단계: 진리집합 도출]",
            "content": "따라서 진리집합은 $\\{1\\}$ $\\therefore$ **$\\{1\\}$**"
          }
        ]
      }
    },
    {
      "id": 32,
      "source": "천재(홍) 교과서 98p 대단원 08번",
      "tag": "대단원",
      "question": "명제 '어떤 실수 $x$에 대하여 $x^2-6x+a < 0$이다.'의 부정이 참이 되도록 하는 실수 $a$의 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "부정인 '모든 실수 $x$에 대하여 $x^2-6x+a \\ge 0$'이 성질상 항상 성립하려면 판별식 $D/4 \\le 0$이어야 합니다.",
      "answer": "9",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 부정 명제 작성]",
            "content": "부정: '모든 실수 $x$에 대하여 $x^2-6x+a \\ge 0$이다.'"
          },
          {
            "label": "[2단계: 판별식 공식 대입]",
            "content": "이차부등식이 모든 실수에서 $0$ 이상이려면 판별식 $D/4 \\le 0$이어야 합니다:\n$D/4 = (-3)^2 - a \\le 0 \\implies 9 - a \\le 0 \\implies a \\ge 9$"
          },
          {
            "label": "[3단계: 최솟값 도출]",
            "content": "따라서 실수 $a$의 최솟값은 $9$ $\\therefore$ **9**"
          }
        ]
      }
    },
    {
      "id": 33,
      "source": "천재(홍) 교과서 98p 대단원 09번",
      "tag": "대단원",
      "question": "두 실수 $x, y$에 대하여 다음 명제 중 역이 참인 것은?",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$x^2+y^2=0$이면 $x=0$ 또는 $y=0$이다."
        },
        {
          "no": 2,
          "formula": "$x > 0$이고 $y < 0$이면 $xy < 0$이다."
        },
        {
          "no": 3,
          "formula": "$|x|=|y|$이면 $x=y$이다."
        },
        {
          "no": 4,
          "formula": "$x > 0$이고 $y > 0$이면 $x+y > 0$이다."
        },
        {
          "no": 5,
          "formula": "$x^2 > y^2$이면 $x > y$이다."
        }
      ],
      "tip": "각 명제의 역을 작성하여 반례가 존재하는지 성질을 대입하여 참, 거짓을 판별합니다.",
      "answer": "③",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 각 보기의 역 확인]",
            "content": "① 역: $x=0$ 또는 $y=0$이면 $x^2+y^2=0$이다. (거짓, $x=0, y=1$)\n② 역: $xy < 0$이면 $x > 0$이고 $y < 0$이다. (거짓, $x=-1, y=2$)\n③ 역: $x=y$이면 $|x|=|y|$이다. (참!)"
          },
          {
            "label": "[2단계: 나머지 확인]",
            "content": "④ 역: $x+y > 0$이면 $x > 0$이고 $y > 0$이다. (거짓, $x=3, y=-1$)\n⑤ 역: $x > y$이면 $x^2 > y^2$이다. (거짓, $x=1, y=-2$)"
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "따라서 역이 참인 것은 ③ $\\therefore$ **③**"
          }
        ]
      }
    },
    {
      "id": 34,
      "source": "천재(홍) 교과서 98p 대단원 10번",
      "tag": "대단원",
      "question": "두 조건 '$p: a-2 \\le x \\le a+1$', '$q: -1 \\le x \\le 5$'에 대하여 명제 $p \\to q$가 참이 되도록 하는 실수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "명제 $p \\to q$가 참이려면 진리집합의 포함관계 성질 $P \\subset Q$를 만족해야 하므로 연립부등식에 대입합니다.",
      "answer": "$1 \\le a \\le 4$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 포함관계 설정]",
            "content": "$P \\subset Q$이므로: $[a-2, a+1] \\subset [-1, 5]$"
          },
          {
            "label": "[2단계: 부등식 연립]",
            "content": "$a-2 \\ge -1 \\implies a \\ge 1$\n$a+1 \\le 5 \\implies a \\le 4$"
          },
          {
            "label": "[3단계: 공통 범위]",
            "content": "따라서 $1 \\le a \\le 4$ $\\therefore$ **$1 \\le a \\le 4$**"
          }
        ]
      }
    },
    {
      "id": 35,
      "source": "천재(홍) 교과서 98p 대단원 11번",
      "tag": "대단원",
      "question": "두 실수 $a, b$에 대하여 보기에서 $a=b=0$이기 위한 필요충분조건인 것만을 있는 대로 고르시오.",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$ab=0$"
        },
        {
          "no": 2,
          "formula": "$a^2+b^2=0$"
        },
        {
          "no": 3,
          "formula": "$|a|+|b|=0$"
        },
        {
          "no": 4,
          "formula": "$|a-b|=0$"
        }
      ],
      "tip": "실수의 성질 $a^2 \\ge 0, |a| \\ge 0$을 이용하여 $a=b=0$과 동치인 조건을 대입하여 판별합니다.",
      "answer": "ㄴ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[1단계: ㄱ 판별]",
            "content": "$ab=0 \\iff a=0$ 또는 $b=0$이므로 필요조건이지만 충분조건 아님 $\\therefore$ 거짓"
          },
          {
            "label": "[2단계: ㄴ, ㄷ 판별]",
            "content": "실수에서 $a^2+b^2=0 \\iff a=b=0$ (필요충분조건)\n$|a|+|b|=0 \\iff |a|=0$이고 $|b|=0 \\iff a=b=0$ (필요충분조건)"
          },
          {
            "label": "[3단계: ㄹ 판별]",
            "content": "$|a-b|=0 \\iff a=b$이므로 필요충분조건 아님 $\\therefore$ **ㄴ, ㄷ**"
          }
        ]
      }
    },
    {
      "id": 36,
      "source": "천재(홍) 교과서 98p 대단원 12번",
      "tag": "대단원",
      "question": "두 조건 $p, q$에 대하여 $p$는 $q$이기 위한 필요조건이지만 충분조건은 아닌 것은? (단, $x$는 실수)",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "$p: |x|=1, \\quad q: x^2=1$"
        },
        {
          "no": 2,
          "formula": "$p: x=4, \\quad q: x^2=16$"
        },
        {
          "no": 3,
          "formula": "$p: x^2-3x=0, \\quad q: x=3$"
        },
        {
          "no": 4,
          "formula": "$p: A \\cup B = B, \\quad q: A \\cap B = A$"
        },
        {
          "no": 5,
          "formula": "$p: A \\subset B$이고 $A \\subset C, \\quad q: A \\subset (B \\cup C)$"
        }
      ],
      "tip": "진리집합의 포함관계 성질 $Q \\subset P$이고 $P \\ne Q$인 관계를 찾아 대입합니다.",
      "answer": "③",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 각 보기 분석]",
            "content": "① $P=\\{-1, 1\\}, Q=\\{-1, 1\\}$ 필요충분조건\n② $P=\\{4\\}, Q=\\{-4, 4\\}$ 충분조건\n③ $P=\\{0, 3\\}, Q=\\{3\\}$이므로 $Q \\subset P$이고 $P \\ne Q$. 즉 $q \\implies p$는 참, $p \\implies q$는 거짓!"
          },
          {
            "label": "[2단계: 필요조건 확인]",
            "content": "따라서 $p$는 $q$이기 위한 필요조건이지만 충분조건은 아닙니다."
          },
          {
            "label": "[3단계: 정답 도출]",
            "content": "$\\therefore$ **③**"
          }
        ]
      }
    },
    {
      "id": 37,
      "source": "천재(홍) 교과서 99p 대단원 13번",
      "tag": "대단원",
      "question": "전체집합 $U$에 대하여 세 조건 $p, q, r$의 진리집합을 각각 $P, Q, R$라고 하자. 두 명제 $p \\to \\sim q$와 $r \\to q$가 참일 때, 보기에서 항상 옳은 것만을 고른 것은?",
      "formula": "",
      "subQuestions": [
        {
          "no": 1,
          "formula": "명제 $p \\to \\sim r$은 참이다."
        },
        {
          "no": 2,
          "formula": "$Q \\subset P$"
        },
        {
          "no": 3,
          "formula": "$(P \\cup Q^c) \\subset R^c$"
        }
      ],
      "tip": "대우 관계와 삼단논법 성질 $P \\subset Q^c \\subset R^c$를 이용하여 포함관계를 대입하여 검증합니다.",
      "answer": "ㄱ, ㄷ",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 포함관계 유도]",
            "content": "$p \\to \\sim q$ 참 $\\implies P \\subset Q^c$\n$r \\to q$ 참 $\\implies R \\subset Q \\iff Q^c \\subset R^c$"
          },
          {
            "label": "[2단계: 삼단논법]",
            "content": "따라서 $P \\subset Q^c \\subset R^c$이므로 $P \\subset R^c$, 즉 $p \\to \\sim r$ 참 (ㄱ 참)"
          },
          {
            "label": "[3단계: ㄴ, ㄷ 검증]",
            "content": "ㄴ. $Q \\subset P$는 항상 성립하지 않습니다.\nㄷ. $P \\subset Q^c$이므로 $P \\cup Q^c = Q^c$. $Q^c \\subset R^c$이므로 성립 (ㄷ 참) $\\therefore$ **ㄱ, ㄷ**"
          }
        ]
      }
    },
    {
      "id": 38,
      "source": "천재(홍) 교과서 99p 대단원 14번",
      "tag": "서술형",
      "question": "두 집합 $A=\\{x \\mid x\\text{는 } 5\\text{ 이하의 홀수}\\}, B=\\{x \\mid x^2-7x < 0\\text{인 자연수}\\}$에 대하여 $A \\cap X = A, B \\cup X = B$를 만족시키는 집합 $X$의 개수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "1단계: $A, B$ 원소 나열, 2단계: 포함관계 성질 $A \\subset X \\subset B$ 파악, 3단계: 부분집합 공식에 대입하여 개수를 구합니다.",
      "answer": "8",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 집합 A, B 구하기]",
            "content": "$A = \\{1, 3, 5\\}$\n$x(x-7) < 0 \\implies 0 < x < 7$인 자연수이므로 $B = \\{1, 2, 3, 4, 5, 6\\}$"
          },
          {
            "label": "[2단계: 포함관계 확인]",
            "content": "$A \\cap X = A \\implies A \\subset X$\n$B \\cup X = B \\implies X \\subset B$\n따라서 $A \\subset X \\subset B$"
          },
          {
            "label": "[3단계: 집합 X의 개수]",
            "content": "집합 $X$는 $B$의 원소 $6$개 중 $A$의 원소 $\\{1, 3, 5\\}$ $3$개를 반드시 포함해야 하므로: $2^{6-3} = 2^3 = 8$개 $\\therefore$ **8**"
          }
        ]
      }
    },
    {
      "id": 39,
      "source": "천재(홍) 교과서 99p 대단원 15번",
      "tag": "서술형",
      "question": "명제 '두 자연수 $m, n$에 대하여 $mn$이 짝수이면 $m$ 또는 $n$이 짝수이다.'를 대우를 이용하여 증명하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "대우인 '두 자연수 $m, n$에 대하여 $m, n$이 모두 홀수이면 $mn$은 홀수이다.'를 세우고 $2k-1, 2l-1$을 대입하여 증명합니다.",
      "answer": "증명 참조 (대우가 참이므로 주어진 명제도 참)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 대우 작성]",
            "content": "주어진 명제의 대우: '두 자연수 $m, n$에 대하여 $m$과 $n$이 모두 홀수이면 $mn$은 홀수이다.'"
          },
          {
            "label": "[2단계: 대우 증명]",
            "content": "$m, n$이 모두 홀수이므로 $m=2k-1, n=2l-1$ ($k, l$은 자연수)로 나타내면:\n$mn = (2k-1)(2l-1) = 4kl - 2k - 2l + 1 = 2(2kl-k-l) + 1$\n여기서 $2kl-k-l$은 $0$ 이상의 정수이므로 $mn$은 홀수입니다."
          },
          {
            "label": "[3단계: 결론 도출]",
            "content": "따라서 대우가 참이므로 주어진 명제도 참입니다. $\\therefore$ **증명 완료**"
          }
        ]
      }
    },
    {
      "id": 40,
      "source": "AI 숫자 변형 (06번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "전체집합 $U$의 두 부분집합 $A, B$에 대하여 $n(U)=60, n(A)=35, n(B)=28, n(A \\cap B)=15$일 때, $n(A^c \\cap B^c)$를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "합집합 공식 $n(A \\cup B) = n(A)+n(B)-n(A \\cap B)$와 드모르간 법칙에 대입합니다.",
      "answer": "12",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 합집합 계산]",
            "content": "$n(A \\cup B) = 35 + 28 - 15 = 48$"
          },
          {
            "label": "[2단계: 여집합 원소 계산]",
            "content": "$n(A^c \\cap B^c) = n((A \\cup B)^c) = n(U) - n(A \\cup B) = 60 - 48 = 12$ $\\therefore$ **12**"
          }
        ]
      }
    },
    {
      "id": 41,
      "source": "AI 숫자 변형 (08번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "명제 '어떤 실수 $x$에 대하여 $x^2-4x+a < 0$이다.'의 부정이 참이 되도록 하는 실수 $a$의 최솟값을 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "부정 명제 '모든 실수 $x$에 대하여 $x^2-4x+a \\ge 0$'이 성립하도록 판별식 공식 $D/4 \\le 0$에 대입합니다.",
      "answer": "4",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 판별식 적용]",
            "content": "$D/4 = (-2)^2 - a \\le 0 \\implies 4 - a \\le 0 \\implies a \\ge 4$"
          },
          {
            "label": "[2단계: 최솟값 도출]",
            "content": "따라서 $a$의 최솟값은 $4$ $\\therefore$ **4**"
          }
        ]
      }
    },
    {
      "id": 42,
      "source": "AI 숫자 변형 (10번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "두 조건 '$p: a-3 \\le x \\le a+2$', '$q: -2 \\le x \\le 6$'에 대하여 명제 $p \\to q$가 참이 되도록 하는 실수 $a$의 값의 범위를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "포함관계 성질 $[a-3, a+2] \\subset [-2, 6]$을 연립부등식에 대입하여 범위를 구합니다.",
      "answer": "$1 \\le a \\le 4$",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 부등식 연립]",
            "content": "$a-3 \\ge -2 \\implies a \\ge 1$\n$a+2 \\le 6 \\implies a \\le 4$"
          },
          {
            "label": "[2단계: 공통 범위]",
            "content": "따라서 $1 \\le a \\le 4$ $\\therefore$ **$1 \\le a \\le 4$**"
          }
        ]
      }
    },
    {
      "id": 43,
      "source": "AI 숫자 변형 (14번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "두 집합 $A=\\{2, 4\\}, B=\\{1, 2, 3, 4, 5, 6, 7\\}$에 대하여 $A \\cup X = X, B \\cap X = X$를 만족시키는 집합 $X$의 개수를 구하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "포함관계 성질 $A \\subset X \\subset B$를 확인하고 부분집합 개수 공식 $2^{n-k}$에 대입합니다.",
      "answer": "32",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 포함관계 확인]",
            "content": "$A \\cup X = X \\implies A \\subset X$, $B \\cap X = X \\implies X \\subset B$. 즉 $A \\subset X \\subset B$"
          },
          {
            "label": "[2단계: 부분집합 개수 공식]",
            "content": "$B$의 원소 $7$개 중 $A$의 원소 $2$개를 반드시 포함하므로: $2^{7-2} = 2^5 = 32$개 $\\therefore$ **32**"
          }
        ]
      }
    },
    {
      "id": 44,
      "source": "AI 숫자 변형 (15번 쌍둥이)",
      "tag": "쌍둥이유제",
      "question": "명제 '두 자연수 $a, b$에 대하여 $a+b$가 짝수이면 $a, b$는 모두 짝수이거나 모두 홀수이다.'를 대우를 이용하여 증명하시오.",
      "formula": "",
      "subQuestions": [],
      "tip": "대우인 '$a, b$ 중 하나가 짝수이고 다른 하나가 홀수이면 $a+b$는 홀수이다.'를 세우고 식을 대입하여 증명합니다.",
      "answer": "증명 참조 (대우가 참이므로 주어진 명제도 참)",
      "solution": {
        "steps": [
          {
            "label": "[1단계: 대우 작성]",
            "content": "주어진 명제의 대우: '$a, b$ 중 하나는 짝수이고 다른 하나는 홀수이면 $a+b$는 홀수이다.'"
          },
          {
            "label": "[2단계: 대우 증명]",
            "content": "$a=2k, b=2l-1$ ($k, l$은 자연수)로 두면: $a+b = 2k + 2l - 1 = 2(k+l-1) + 1$로 홀수입니다."
          },
          {
            "label": "[3단계: 결론 도출]",
            "content": "대우가 참이므로 원래 명제도 참입니다. $\\therefore$ **증명 완료**"
          }
        ]
      }
    }
  ]
};
