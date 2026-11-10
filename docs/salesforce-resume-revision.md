# Salesforce résumé — professional implementation revision

The first résumé now uses the supplied Overleaf format as a visual reference: centered name/contact block, serif document typography, ruled section headings, and compact bullets. The second integration résumé is intentionally unchanged for a later revision.

## Content corrections

- Official employment remains Associate Technical Consultant at Blueflame Labs, July 2025–present; training and implementation responsibilities are distinguished without inventing a separate job title.
- Three anonymized professional implementation groups cover territory automation, enterprise integration/document workflows, and Agentforce case automation. These are implementations within that employment, not separate jobs or public GitHub projects.
- Experience highlights cover LWC work, testing, logging, deployment, independent delivery, and collaboration without claiming team leadership.
- Removed client identifiers, billable-hour/SLA filler, unconfirmed quantitative outcomes, unsupported grounding claims, and technologies not substantiated in the conversation. Nebula Logger is identified as logging tooling, not an external business-system integration.
- Used the confirmed updated Vijaya Rani LinkedIn URL. Kept degree-level education; school details are omitted to prioritize relevant implementation work.
- Public personal projects and the new planned Agentforce/MuleSoft ideas are not presented as delivered client work.

## Files and editing

- `public/resume.html`: updated Salesforce-focused web document.
- `public/resumes/Vijaya-Rani-salesforce-developer.pdf`: generated one-page PDF.
- `public/resumes/Vijaya-Rani-salesforce-developer.docx`: editable Word copy.
- `public/resumes/Vijaya-Rani-salesforce-developer.tex`: Overleaf-ready source, retaining the supplied template's MIT attribution.

The content source is `scripts/build-resumes.py`; regenerate this version only with:

```powershell
python scripts/build-resumes.py --role salesforce-developer --update-public
```

The PDF/Word/web documents and LaTeX source use the same content model. The PDF is rendered with ReportLab, not compiled from LaTeX. No local TeX compiler was available during this revision, so Overleaf compilation and its exact pagination remain unverified. In Overleaf, create a blank project, paste/upload the `.tex` file as `main.tex`, and select pdfLaTeX. It uses standard packages with text links rather than icon fonts or table-based body content. Exact typography differs between rendering engines.

For the next content pass, strengthen one implementation at a time with the specific requirement, personal contribution, technical challenge, and observed result. Do not add precise metrics, leadership verbs, or production guarantees without supporting evidence.
