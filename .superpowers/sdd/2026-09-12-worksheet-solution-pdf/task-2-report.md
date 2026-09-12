# Task 2 Completion Report: Part 1(28문항) 교수법 맞춤 단계별 상세 풀이 데이터 구축

## 1. 개요
- **태스크 ID**: Task 2
- **목표**: `data/problems_part1.js`의 모든 28문항에 서영이 맞춤형 3단계 알고리즘(선 대입 → 부정형 식 변형 → 재대입) 및 절댓값 구간별 함수 분리 원칙을 적용한 `solution` 필드를 구축하고 무결성을 검증한다.
- **상태**: **DONE**

---

## 2. 작업 내역

### 1) 서영이 전용 교수법 원칙 적용
`data/problems_part1.js` 내 총 28문항 전수에 대해 아래 원칙을 엄격히 적용하여 풀이를 작성함:
1. **선 대입**: 극한값을 구하기 전 항상 $x \to a$를 먼저 대입하여 확정형인지 부정형($\frac{0}{0}$, $\frac{\infty}{\infty}$, $\infty - \infty$)인지 명시.
2. **부정형 식 변형**:
   - $\frac{0}{0}$ 다항식: 분자·분모 인수분해 후 $0$이 되는 인수 약분 (문항 1, 2, 3(2), 4(2), 16(1), 17(1), 18, 19(1), 24, 25, 28).
   - $\frac{0}{0}$ 무리식 및 $\infty - \infty$ 무리식: 근호 유리화 후 약분 및 최고차항 나누기 (문항 16(2), 17(2), 19(2), 20(2), 22(1), 22(2)).
   - $\frac{\infty}{\infty}$ 분수식: 분모의 최고차항으로 분자·분모 나누기 (문항 20(1), 21(1), 21(2), 23).
3. **재대입**: 약분 또는 식 변형 완료 후 극한값을 다시 대입하여 최종 정답 도출.
4. **절댓값 함수 구간 분리**: $x \ge a$, $x < a$ (또는 $x \to a+$, $x \to a-$) 구간별 함수로 분리 후 각각 계산하여 극한 존재성 판정 (문항 5(2), 6(2), 11(1), 11(2)).
5. **연속성 및 미정계수 결정**: 연속 조건($\lim_{x \to a} f(x) = f(a)$)과 분모 $\to 0$ 시 분자 $\to 0$ 성질을 선 대입 단계로 연결하여 체계적 해결 (문항 24, 25, 26, 27, 28).

### 2) 소문항 및 카드 조판 규격 준수
- 소문항이 있는 문항((1), (2))은 steps의 label을 `(1)`, `(2)`로 구성하고 content 내에 단계별 풀이를 압축 수록.
- 단일 문항은 `[1단계: 선 대입]`, `[2단계: 식 변형]`, `[3단계: 재대입]` 등의 명확한 라벨 부여.
- 2x2 카드 규격(높이 120.5mm)에 최적화되도록 간결한 수식 전개 중심 구성.
- KaTeX 인라인 수식($...$) 기호의 짝(even count) 및 역슬래시 이스케이프 무결성 확보.

### 3) Git Commit
- 커밋 해시: `b657c0e`
- 커밋 메시지: `feat: add step-by-step solutions for Part 1`

---

## 3. 검증 결과

### 1) 전수 유효성 검사 실행
```bash
$ python3 tests/test_problems_data.py data/problems_part1.js
PASS: data/problems_part1.js is valid.
```

### 2) 전체 데이터셋 및 단위 테스트 스위트 통과
```bash
$ python3 tests/test_problems_data.py data/sample_problems.js data/problems_part1.js data/problems_part2.js
PASS: data/sample_problems.js is valid.
PASS: data/problems_part1.js is valid.
PASS: data/problems_part2.js is valid.

$ python3 -m unittest tests/test_problems_data.py
.............
----------------------------------------------------------------------
Ran 13 tests in 0.001s

OK
```

---

## 4. 결론
Part 1의 28개 전 문항에 대한 교수법 맞춤 단계별 상세 풀이 데이터 구축이 완료되었으며, 모든 테스트와 스키마 검증을 100% 통과하였습니다.
