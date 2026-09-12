# Task 3 Completion Report: Part 2(16문항) 교수법 맞춤 단계별 상세 풀이 데이터 구축

## 1. 개요
- **태스크 ID**: Task 3
- **목표**: `data/problems_part2.js`의 모든 16문항에 서영이 맞춤형 미분계수/도함수 교수법 원칙(평균변화율 공식 대입 및 약분, 미분계수 정의 대입 및 0/0 인수분해 약분, 절댓값 구간별 분리 및 연속/미분가능성 판별, 도함수 정의 전개 및 Delta x 약분, 도함수 공식 적용)을 적용한 `solution` 필드를 구축하고 무결성을 검증한다.
- **상태**: **DONE**

---

## 2. 작업 내역

### 1) 서영이 전용 교수법 원칙 적용
`data/problems_part2.js` 내 총 16문항 전수에 대해 아래 원칙을 엄격히 적용하여 풀이를 작성함:
1. **평균변화율 (01~04번)**:
   - $\frac{\Delta y}{\Delta x} = \frac{f(b)-f(a)}{b-a}$ 공식 대입 $\to$ 분자 전개 및 정리 $\to$ $\Delta x$ 인수분해·약분 및 최종 값 도출.
2. **미분계수의 정의 (05~08번)**:
   - $f'(a) = \lim_{x \to a} \frac{f(x)-f(a)}{x-a}$ 정의 공식 대입.
   - $x=a$ 대입 시 $\frac{0}{0}$ 부정형 확인 후 분자 인수분해로 $(x-a)$ 약분.
   - $x=a$ 재대입으로 미분계수 값 도출 및 도함수 미분 공식($(x^n)'=nx^{n-1}$)을 활용한 검산 명시.
3. **절댓값 함수의 연속성과 미분가능성 (09~12번)**:
   - 1단계: $x=a$ 대입으로 극한값 $=$ 함숫값 ($0$) 일치 확인하여 **연속** 판정.
   - 2단계: 절댓값 기호를 $x \ge a$, $x < a$ 구간별 함수로 분리.
   - 3단계: 각 구간의 미분계수 극한식에 대입하여 우미분계수와 좌미분계수를 각각 계산하고, 불일치($\ne$)를 증명하여 **미분불가** 판정.
4. **도함수의 정의 (13~14번)**:
   - $f'(x) = \lim_{\Delta x \to 0} \frac{f(x+\Delta x)-f(x)}{\Delta x}$ 정의 공식에 함수 대입.
   - 분자 전개 및 정리 $\to$ $\Delta x$로 묶어 인수분해 및 분모 약분.
   - $\Delta x = 0$ 대입으로 최종 도함수 식 도출.
5. **도함수 공식 (15~16번)**:
   - $(x^n)' = nx^{n-1}$, $(c)' = 0$ 기본 미분 공식을 항별로 적용하여 전개 및 최종 도함수 도출.

### 2) 소문항 및 카드 조판 규격 준수
- 소문항이 있는 문항((1), (2))은 steps의 label을 `(1)`, `(2)`로 구성하고 content 내에 단계별 풀이를 압축 수록.
- 단일 문항은 `[1단계: ...]`, `[2단계: ...]`, `[3단계: ...]` 등의 명확한 라벨 부여.
- 2x2 카드 규격(높이 120.5mm)에 최적화되도록 간결한 수식 전개 중심 구성.
- KaTeX 인라인 수식(`$...$`) 기호의 짝(even count) 및 역슬래시 이스케이프(`\\lim`, `\\frac`, `\\Delta` 등) 무결성 확보.

### 3) Git Commit
- 커밋 해시: `e2378d4`
- 커밋 메시지: `feat: add step-by-step solutions for Part 2`

---

## 3. 검증 결과

### 1) 전수 유효성 검사 실행
```bash
$ python3 tests/test_problems_data.py data/problems_part2.js
PASS: data/problems_part2.js is valid.
```

### 2) 전체 데이터셋 및 단위 테스트 스위트 통과
```bash
$ python3 tests/test_problems_data.py data/sample_problems.js data/problems_part1.js data/problems_part2.js
PASS: data/sample_problems.js is valid.
PASS: data/problems_part1.js is valid.
PASS: data/problems_part2.js is valid.

$ python3 -m unittest discover tests
.............
----------------------------------------------------------------------
Ran 13 tests in 0.001s

OK
```

---

## 4. 결론
Part 2의 16개 전 문항에 대한 교수법 맞춤 단계별 상세 풀이 데이터 구축이 완료되었으며, 스키마 검증 및 KaTeX 문법 검사를 100% 통과하였습니다.
