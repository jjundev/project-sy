# Task 2 Completion Report: Part 1 (I. 함수의 극한과 연속) 문제 데이터 구축

## 1. Overview
- **Target File Created**: `data/problems_part1.js`
- **Total Problems**: 28문항 (7페이지 분량, 4의 배수 A4 2x2 규격 엄수)
- **Status**: **DONE**

---

## 2. Question Lineup & Structure Verification

| 번호 | 유형 태그 | 출처 | 주요 내용 / 수식 | 소문항 | 비고 |
|:---:|:---:|:---|:---|:---:|:---|
| 01 | 핵심유형 | 학교 프린트 1p 예제 1 | $\lim_{x \to 1} \frac{x^2+x-2}{x-1}$ | - | 그래프/대입/인수분해 |
| 02 | 기본 | 학교 프린트 1p 스스로 해보기 | $\lim_{x \to 2} \frac{x^2+x-6}{x-2}$ | - | 대입/인수분해 |
| 03 | 기본 | 학교 프린트 1p 문제 1 | (1) $\lim_{x \to 5} \sqrt{x-1}$, (2) $\lim_{x \to 0} \frac{2x^2-3x}{x}$ | 2문항 | 가로 2단 분할 |
| 04 | 쌍둥이유제 | AI 숫자 변형 (03번 쌍둥이) | (1) $\lim_{x \to 3} \sqrt{2x+3}$, (2) $\lim_{x \to 0} \frac{3x^2+5x}{x}$ | 2문항 | 가로 2단 분할 |
| 05 | 기본 | 학교 프린트 2p 문제 2 | (1) $\lim_{x \to \infty} (\frac{1}{x}+1)$, (2) $\lim_{x \to -\infty} \frac{1}{\|x+1\|}$ | 2문항 | 무한대 대입 |
| 06 | 기본 | 학교 프린트 2p 문제 3 | (1) $\lim_{x \to 1} \frac{1}{(x-1)^2}$, (2) $\lim_{x \to 0} (-\frac{1}{\|x\|})$ | 2문항 | 발산 조사 |
| 07 | 기본 | 학교 프린트 3p 문제 4 | (1) $\lim_{x \to \infty} (2-x)$, (2) $\lim_{x \to -\infty} \sqrt{-x+1}$ | 2문항 | 직관적 대입 발산 |
| 08 | 필기 | 선생님 필기 추가 (3p) | $\lim_{x \to \infty} (2+x)$ | - | **선생님 필기 추가** |
| 09 | 핵심유형 | 학교 프린트 4p 문제 5 | $f(x)$ 구간별 함수 $x \to 1+, 1-$ 우극한/좌극한 | 2문항 | 우극한/좌극한 대입 |
| 10 | 핵심유형 | 학교 프린트 4p 예제 2 | $f(x)$ 구간별 함수 $x \to 0$ 극한 조사 | - | 좌우극한 일치 여부 |
| 11 | 심화 | 학교 프린트 4p 문제 6 | (1) $\lim_{x \to 0} \frac{\|x\|}{x}$, (2) $\lim_{x \to -1} \frac{x^2+2x+1}{\|x+1\|}$ | 2문항 | 절댓값 좌우극한 |
| 12 | 필기 | 선생님 필기 추가 (4p) | $\lim_{x \to 3} (x+1)$ | - | **선생님 필기 추가** |
| 13 | 기본 | 학교 프린트 5p 개념확인 | (1) $\lim_{x \to 2} (3x^2-x)$, (2) $\lim_{x \to -1} (2x+1)(3x-1)$ | 2문항 | 극한 성질/직접 대입 |
| 14 | 기본 | 학교 프린트 5p 문제 1 | (1) $\lim_{x \to 1} (x^2-2x+4)$, (2) $\lim_{x \to 2} (2x+3)(x-4)$ | 2문항 | 다항식 선대입 |
| 15 | 기본 | 학교 프린트 5p 문제 1 | (3) $\lim_{x \to -1} \frac{4x-2}{2x+1}$, (4) $\lim_{x \to \infty} (\frac{1}{x}+\frac{1}{x^2})$ | 2문항 | 분수식 대입 |
| 16 | 핵심유형 | 학교 프린트 6p 예제 1 | (1) $\lim_{x \to 1} \frac{x^2+2x-3}{x-1}$, (2) $\lim_{x \to 0} \frac{\sqrt{x+4}-2}{x}$ | 2문항 | 0/0꼴 인수분해/유리화 |
| 17 | 기본 | 학교 프린트 6p 스스로 해보기 | (1) $\lim_{x \to -3} \frac{x^2-9}{x+3}$, (2) $\lim_{x \to 3} \frac{\sqrt{x+6}-3}{x-3}$ | 2문항 | 0/0꼴 합차/유리화 |
| 18 | 필기 | 선생님 필기 추가 (6p) | $\lim_{x \to 2} \frac{x^2+3x-10}{x-2}$ | - | **선생님 필기 추가** |
| 19 | 핵심유형 | 학교 프린트 6p 문제 2 | (1) $\lim_{x \to 1} \frac{x^3+x^2-x-1}{x-1}$, (2) $\lim_{x \to 0} \frac{x^2+4x}{\sqrt{x+1}-1}$ | 2문항 | 0/0 조립제법/분모유리화 |
| 20 | 핵심유형 | 학교 프린트 7p 예제 2 | (1) $\lim_{x \to \infty} \frac{2x^2+4x+6}{3x^2-1}$, (2) $\lim_{x \to \infty} (\sqrt{x^2+5x}-x)$ | 2문항 | $\infty/\infty$ 및 $\infty-\infty$ |
| 21 | 기본 | 학교 프린트 7p 문제 3 | (1) $\lim_{x \to \infty} \frac{2x+3}{5x^2+4}$, (2) $\lim_{x \to \infty} \frac{(2x-1)(3x+5)}{x^2+x+3}$ | 2문항 | 분모 최고차항 나누기 |
| 22 | 핵심유형 | 학교 프린트 7p 문제 3 | (3) $\lim_{x \to \infty} (\sqrt{4x^2+x}-2x)$, (4) $\lim_{x \to \infty} (\sqrt{x^2+2x}-\sqrt{x^2-2x})$ | 2문항 | $\infty-\infty$ 유리화 |
| 23 | 필기 | 선생님 필기 추가 (7p) | $\lim_{x \to \infty} \frac{4x+1}{2x+3}$ | - | **선생님 필기 추가** |
| 24 | 핵심유형 | 학교 프린트 8p 예제 3 | $\lim_{x \to 2} \frac{x^2+ax+b}{x-2} = 6$ | - | 미정계수 결정 ($a=2, b=-8$) |
| 25 | 필기 | 선생님 필기 추가 (8p) | $\lim_{x \to 2} \frac{x^2+ax+b}{x-2} = 4$ | - | **선생님 필기 추가** ($a=0, b=-4$) |
| 26 | 필기 | 선생님 시험문제 필기 (10p) | $f(x) = \begin{cases} x+5 & (x \ne 1) \\ k & (x = 1) \end{cases}$ 연속 ($k=6$) | - | **선생님 시험필기** |
| 27 | 기본 | 학교 프린트 10p 예제 1 | $f(x) = \begin{cases} x+4 & (x \ne 1) \\ 2 & (x = 1) \end{cases}$ 연속성 조사 | - | 함숫값/극한값 비교 |
| 28 | 핵심유형 | 학교 프린트 11p 예제 2 | $f(x) = \begin{cases} \frac{x^2-x+a}{x-2} & (x \ne 2) \\ b & (x = 2) \end{cases}$ 연속 ($a=-2, b=3$) | - | 연속 미정계수 결정 |

---

## 3. Pedagogy Alignment (서영이 맞춤형 힌트 규칙)
- **1단계 (선 대입)**: 모든 문제에 $x=a$를 우선적으로 직접 대입하도록 명시.
- **2단계 (계산 가능 시)**: 분모가 0이 아니거나 바로 계산 가능한 경우 대입값이 곧 정답임을 명시.
- **3단계 (부정형 시 변형 후 재대입)**: $\frac{0}{0}$꼴(인수분해/유리화), $\frac{\infty}{\infty}$ 또는 $\infty-\infty$꼴(최고차항 나누기/유리화) 후 재대입하는 풀이 알고리즘을 100% 준수.
- 모든 팁(`tip`) 항목은 `PEDAGOGY_KEYWORDS`(`대입`, `인수분해`, `유리화`, `나누`, `공식`, `미분`, `좌극한`, `우극한`, `연속`, `성질`) 중 최소 1개 이상을 필수로 포함하도록 설계 및 검증 완료.

---

## 4. Test & Validation Results

1. **자동 검증기 (`tests/test_problems_data.py`)**:
   ```bash
   python3 tests/test_problems_data.py data/problems_part1.js
   # Output: PASS: data/problems_part1.js is valid.
   ```
2. **단위 테스트 (`unittest`)**:
   ```bash
   python3 -m unittest tests/test_problems_data.py
   # Output: 12 tests passed (OK)
   ```
3. **KaTeX 수식 렌더링 무결성 검증**:
   - `data/problems_part1.js` 내의 모든 대표 수식(`formula`), 소문항 수식(`subQuestions`), 본문 및 팁 인라인 수식(`question`, `tip`)에 대해 Node.js 환경의 KaTeX 0.16.11 렌더러로 전수 파싱 테스트 완료 (오류 0건).

---

## 5. Next Steps Handoff
- **Next Task**: Task 3 (Part 2: II. 미분계수와 도함수 문제 데이터 구축, `data/problems_part2.js`)
