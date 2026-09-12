# 서영이 수학 II 문제지 템플릿

`WORKSHEET_DESIGN_SPEC.md` 7장 1단계(템플릿 구현) 결과물입니다. A4 세로 한 장에 4문제(2×2)와 5mm 도트 모눈 풀이 공간을 조판합니다.

## 파일 구성

```
WORKSHEET_DESIGN_SPEC.md       설계 명세서
template/worksheet.html        문제지 본체 — 브라우저로 바로 열기
template/style.css             A4 인쇄 스타일시트 (치수·색상은 맨 위 :root 변수에서 수정)
template/vendor/katex/         KaTeX 0.16.11 — 수식 렌더러, 오프라인 동봉 (MIT)
template/vendor/pretendard/    Pretendard 가변 폰트, 오프라인 동봉 (SIL OFL 1.1)
data/sample_problems.js        문제 데이터 (명세서 5장 스키마)
프린트/                         원본 프린트 PDF
```

## 여는 법

`template/worksheet.html` 을 더블클릭하면 됩니다. 서버 없이 `file://` 로 열어도 동작하고, 인터넷 연결도 필요 없습니다.

`worksheet.html` 은 `../data/sample_problems.js` 를 읽습니다. 폴더 구조(`template/` 와 `data/` 가 나란히)를 유지해 주세요.

## 인쇄 / PDF 저장 (Chrome 권장)

1. `Cmd + P` (Windows는 `Ctrl + P`)
2. 대상: 프린터 또는 **PDF로 저장**
3. 용지 크기 **A4**, 배율 **기본값(100%)**
4. 여백 **기본값** — 여백 12/10/10/10mm 는 문서가 직접 지정합니다
5. 설정 더보기 → **배경 그래픽 체크** — 끄면 도트 모눈과 번호 뱃지가 인쇄되지 않습니다
6. 머리글/바닥글 체크 해제

4문제마다 자동으로 다음 쪽으로 넘어가고, 쪽 번호(`- 1 / 2 -`)도 자동으로 매겨집니다.

## 문제 추가하기

`data/sample_problems.js` 의 `problems` 배열에 항목을 추가합니다. 4개를 넘으면 두 번째 장이 생깁니다.

| 필드 | 설명 |
|---|---|
| `id` | 문제 번호. 카드 번호 뱃지에 `01`, `02` 형식으로 표시 |
| `source` | 출처 태그. 예: `학교 프린트 1p 예제 1`, `선생님 필기 추가`, `AI 숫자 변형 (01번)` |
| `tag` | 유형 라벨. 예: `핵심유형`, `기본`, `쌍둥이유제` |
| `question` | 문제 문장. `$...$` 로 인라인 수식 가능 |
| `formula` | 가운데 크게 들어갈 대표 수식 (KaTeX 문법). 없으면 `""` |
| `subQuestions` | 소문항 `[{ "no": 1, "formula": "..." }]`. 있으면 가로 2단으로 배치 |
| `tip` | 하단 💡 Tip 문구. 없으면 `""` (빈칸으로 둠) |
| `answer` | 정답. 학생용 문제지에는 인쇄하지 않습니다 |

`meta` 의 `title` 을 `"과목 - 제목"` 형태로 쓰면 헤더에서 과목이 테두리 칩으로 분리됩니다.

JS 문자열 안에서는 역슬래시를 두 번 씁니다: `\\lim_{x \\to 1}`.

### 작성 시 주의

- 문제 문장과 수식이 길어질수록 그 카드의 풀이 공간이 줄어듭니다. 명세서 기준은 문제부 약 25~35mm입니다.
- 소문항 한 칸의 폭은 약 40mm입니다. 이보다 긴 수식은 오른쪽이 잘리니 두 소문항으로 나누거나 `formula` 로 옮기세요.
- Tip 은 두 줄까지 표시됩니다.

## Python 파이프라인에서 출력하기

JSON 앞에 한 줄만 붙이면 됩니다.

```python
import json

with open("data/sample_problems.js", "w", encoding="utf-8") as f:
    f.write("window.WORKSHEET_DATA = ")
    json.dump(data, f, ensure_ascii=False, indent=2)
    f.write(";\n")
```

다른 이름으로 출력했다면 `template/worksheet.html` 의 `<script src="../data/sample_problems.js">` 경로도 함께 바꿔 주세요.

`.json` 이 아니라 `.js` 인 이유: 브라우저는 `file://` 로 연 페이지에서 JSON 파일을 `fetch` 로 읽는 것을 막습니다. 전역 변수로 담아 두면 더블클릭만으로 열립니다.
