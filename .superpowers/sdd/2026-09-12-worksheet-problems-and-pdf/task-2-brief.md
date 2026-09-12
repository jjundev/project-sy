# Task 2 Brief: Part 1 (I. 함수의 극한과 연속) 문제 데이터 구축

## Target File
Create: `data/problems_part1.js`

## Global Constraints
- **교수법 힌트 강제 규칙**: 모든 문제의 `tip`은 사용자가 서영이에게 지도한 알고리즘을 그대로 따른다:
  1. *1단계 (선 대입)*: "먼저 $x=a$를 바로 대입해보기!"
  2. *2단계 (계산 가능 시)*: "분모가 0이 아니거나 계산이 되면 그 값이 곧 정답"
  3. *3단계 (부정형 시 변형 후 재대입)*: "$\frac{0}{0}$꼴(인수분해/유리화) 또는 $\frac{\infty}{\infty}, \infty-\infty$꼴(최고차항 나누기/유리화)로 변형한 뒤 다시 $x=a$를 대입하기"
- **28문항 (4의 배수 엄수)**: 7페이지 분량 (A4 1장에 4문제씩 정확히 7장).
- **선생님 필기 문제 전수 수록**: `[선생님 필기 추가]` 태그 사용.
- **소문항 2단 분할**: 소문항이 2개인 경우 `subQuestions: [{no: 1, formula: "..."}, {no: 2, formula: "..."}]` 사용.

## Question Lineup (28 Questions)
1. **01번** (학교 프린트 1p 예제 1): $\lim_{x \to 1} \frac{x^2+x-2}{x-1}$ (그래프 이용)
2. **02번** (학교 프린트 1p 스스로 해보기): $\lim_{x \to 2} \frac{x^2+x-6}{x-2}$ (그래프 이용)
3. **03번** (학교 프린트 1p 문제 1): (1) $\lim_{x \to 5} \sqrt{x-1}$, (2) $\lim_{x \to 0} \frac{2x^2-3x}{x}$
4. **04번** (AI 숫자 변형 - 03번 쌍둥이): (1) $\lim_{x \to 3} \sqrt{2x+3}$, (2) $\lim_{x \to 0} \frac{3x^2+5x}{x}$
5. **05번** (학교 프린트 2p 문제 2): (1) $\lim_{x \to \infty} (\frac{1}{x}+1)$, (2) $\lim_{x \to -\infty} \frac{1}{|x+1|}$
6. **06번** (학교 프린트 2p 문제 3): (1) $\lim_{x \to 1} \frac{1}{(x-1)^2}$, (2) $\lim_{x \to 0} (-\frac{1}{|x|})$
7. **07번** (학교 프린트 3p 문제 4): (1) $\lim_{x \to \infty} (2-x)$, (2) $\lim_{x \to -\infty} \sqrt{-x+1}$
8. **08번** (선생님 필기 추가 - 3p): $\lim_{x \to \infty} (2+x)$
9. **09번** (학교 프린트 4p 문제 5): $f(x) = \begin{cases} x+1 & (x \ge 1) \\ x-1 & (x < 1) \end{cases}$ 의 $x \to 1+$, $x \to 1-$ 극한
10. **10번** (학교 프린트 4p 예제 2): $f(x) = \begin{cases} x^2+1 & (x \ge 0) \\ x & (x < 0) \end{cases}$ 의 $x \to 0$ 극한 조사
11. **11번** (학교 프린트 4p 문제 6): (1) $\lim_{x \to 0} \frac{|x|}{x}$, (2) $\lim_{x \to -1} \frac{x^2+2x+1}{|x+1|}$
12. **12번** (선생님 필기 추가 - 4p): $\lim_{x \to 3} (x+1)$
13. **13번** (학교 프린트 5p 개념확인): (1) $\lim_{x \to 2} (3x^2-x)$, (2) $\lim_{x \to -1} (2x+1)(3x-1)$
14. **14번** (학교 프린트 5p 문제 1): (1) $\lim_{x \to 1} (x^2-2x+4)$, (2) $\lim_{x \to 2} (2x+3)(x-4)$
15. **15번** (학교 프린트 5p 문제 1): (3) $\lim_{x \to -1} \frac{4x-2}{2x+1}$, (4) $\lim_{x \to \infty} (\frac{1}{x}+\frac{1}{x^2})$
16. **16번** (학교 프린트 6p 예제 1): (1) $\lim_{x \to 1} \frac{x^2+2x-3}{x-1}$, (2) $\lim_{x \to 0} \frac{\sqrt{x+4}-2}{x}$
17. **17번** (학교 프린트 6p 스스로 해보기): (1) $\lim_{x \to -3} \frac{x^2-9}{x+3}$, (2) $\lim_{x \to 3} \frac{\sqrt{x+6}-3}{x-3}$
18. **18번** (선생님 필기 추가 - 6p): $\lim_{x \to 2} \frac{x^2+3x-10}{x-2}$
19. **19번** (학교 프린트 6p 문제 2): (1) $\lim_{x \to 1} \frac{x^3+x^2-x-1}{x-1}$, (2) $\lim_{x \to 0} \frac{x^2+4x}{\sqrt{x+1}-1}$
20. **20번** (학교 프린트 7p 예제 2): (1) $\lim_{x \to \infty} \frac{2x^2+4x+6}{3x^2-1}$, (2) $\lim_{x \to \infty} (\sqrt{x^2+5x}-x)$
21. **21번** (학교 프린트 7p 문제 3): (1) $\lim_{x \to \infty} \frac{2x+3}{5x^2+4}$, (2) $\lim_{x \to \infty} \frac{(2x-1)(3x+5)}{x^2+x+3}$
22. **22번** (학교 프린트 7p 문제 3): (3) $\lim_{x \to \infty} (\sqrt{4x^2+x}-2x)$, (4) $\lim_{x \to \infty} (\sqrt{x^2+2x}-\sqrt{x^2-2x})$
23. **23번** (선생님 필기 추가 - 7p): $\lim_{x \to \infty} \frac{4x+1}{2x+3}$
24. **24번** (학교 프린트 8p 예제 3 & 변형): 등식 $\lim_{x \to 2} \frac{x^2+ax+b}{x-2} = 6$ ($a, b$)
25. **25번** (선생님 필기 추가 - 8p): $\lim_{x \to 2} \frac{x^2+ax+b}{x-2} = 4$ ($a, b$)
26. **26번** (선생님 시험문제 필기 - 10p): $f(x) = \begin{cases} x+5 & (x \ne 1) \\ k & (x = 1) \end{cases}$ 이 $x=1$에서 연속이 되기 위한 $k$의 값
27. **27번** (학교 프린트 10p 예제 1 & 스스로 해보기): $f(x) = \begin{cases} x+4 & (x \ne 1) \\ 2 & (x = 1) \end{cases}$ 의 $x=1$ 연속성 판별
28. **28번** (학교 프린트 11p 예제 2): $f(x) = \begin{cases} \frac{x^2-x+a}{x-2} & (x \ne 2) \\ b & (x = 2) \end{cases}$ 가 모든 실수에서 연속이 되도록 하는 $a, b$

## Report File
Write your report to: `.superpowers/sdd/2026-09-12-worksheet-problems-and-pdf/task-2-report.md`
