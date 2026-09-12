# SDD ledger — plan: docs/superpowers/plans/2026-09-12-worksheet-problems-and-pdf.md

## Pre-flight Plan Scan
| Tasks | Shared Interface / File | Status | Notes |
|---|---|---|---|
| Task 1 & Task 2 | tests/test_problems_data.py & data/problems_part1.js | Clean | Task 1 defines validator, Task 2 consumes and satisfies it |
| Task 1 & Task 3 | tests/test_problems_data.py & data/problems_part2.js | Clean | Task 3 satisfies validator |
| Task 2/3 & Task 4 | data/*.js & template/worksheet.html | Clean | Task 4 adds part=1/part=2 loader |
| Task 4 & Task 5 | template/worksheet.html & generate_pdf.py | Clean | Task 5 invokes headless chrome targeting worksheet.html |

Pre-flight scan is clean.

Task 1: complete (tests/test_problems_data.py implemented, 12/12 unit tests passing, data/sample_problems.js validated)
Task 2: complete (data/problems_part1.js implemented with 28 problems adhering to Seoyeong's pedagogy, validated with test_problems_data.py and KaTeX)


Task 2: complete (data/problems_part1.js created, 28 problems, 7 pages, pedagogy hints applied, teacher handwritten questions included, validated)
Task 3: complete (data/problems_part2.js created, 16 problems, 4 pages, Seoyeong's 3-step pedagogy hints applied, validated with test_problems_data.py and KaTeX)
Task 4: complete (template/worksheet.html & template/style.css updated with dynamic loader, floating toolbar, and quick answer key sheet; all node and data tests passing)
Task 5: complete (generate_pdf.py implemented, macOS Headless Chrome PDF generation verified for part1, part2, all, and --with-answers; 4 PDF artifacts verified in output/ with pdfinfo)

Task 4: complete (worksheet.html dynamic loader, on-screen floating toolbar, and quick answer key sheet implemented)
Task 5: complete (generate_pdf.py implemented with headless Chrome, 4 PDF files successfully generated in output/)
Task 6: complete (12/12 unit tests passing, data schema verified, visual inspection of PDF output confirmed)
