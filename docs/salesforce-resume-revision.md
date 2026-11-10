# Salesforce résumé — professional implementation revision

The first résumé uses the supplied Overleaf format as a visual reference: centered name/contact block, serif document typography, ruled section headings, and compact bullets. The later shared-foundation revision updates all versions, including the newly added Software Engineering résumé.

## Content corrections

- Official employment remains Associate Technical Consultant at Blueflame Labs, July 2025–present; training and implementation responsibilities are distinguished without inventing a separate job title.
- Three anonymized groups under the owner's chosen **Work Experience** heading cover territory automation, enterprise integration/document workflows, and Agentforce case automation. These are implementations within that employment, not separate jobs or public GitHub projects.
- Experience highlights cover LWC work, testing, logging, deployment, independent delivery, and collaboration without claiming team leadership.
- Removed client identifiers, billable-hour/SLA filler, unconfirmed quantitative outcomes, unsupported grounding claims, and technologies not substantiated in the conversation. Nebula Logger is identified as logging tooling, not an external business-system integration.
- Used the confirmed updated Vijaya Rani LinkedIn URL. Restored Class XII (Kunwar Convent School, CBSE, 2020) and Class X (Holy Cross School, ICSE, 2018) alongside the degree, as requested.
- Public personal projects and the new planned Agentforce/MuleSoft ideas are not presented as delivered client work.
- Shared skills include JavaScript/web foundations, Java and Spring Boot, REST, and databases, with academic/internship and personal-project context. Nebula Logger stays under tooling rather than external business systems. The unelaborated Stellar item and agent data-grounding claims remain excluded pending details.
- The integration title is **Salesforce Developer/ MuleSoft Developer**. The third résumé is titled simply **Software Engineer** and combines work experience, ReliableJobs, PrakritiPal, shared skills, and complete education. Project bullets describe functionality rather than numeric test evidence.
- All three versions now share a centered header, serif body typography, ruled sections, and decorative email/phone/GitHub/LinkedIn icons alongside readable text. Only the header is centered; body content stays left-aligned for reading.

## Files and editing

- `public/resume.html`: updated Salesforce-focused web document.
- `public/resumes/Vijaya-Rani-salesforce-developer.pdf`: generated one-page PDF.
- `public/resumes/Vijaya-Rani-salesforce-developer.docx`: editable Word copy.
- `public/resumes/Vijaya-Rani-salesforce-developer.tex`: Overleaf-ready source, retaining the supplied template's MIT attribution.

The content source is `scripts/build-resumes.py`; regenerate this version only with:

```powershell
python scripts/build-resumes.py --role salesforce-developer --update-public
```

The PDF/Word/web documents and LaTeX source use the same content model. The PDF is rendered with ReportLab, not compiled from LaTeX. No local TeX compiler was available during this revision, so Overleaf compilation and its exact pagination remain unverified. In Overleaf, create a blank project, paste/upload the `.tex` file as `main.tex`, and select pdfLaTeX. It uses standard packages, including `fontawesome5` contact icons with readable text, and no table-based body content. Exact typography differs between rendering engines.

For the next content pass, strengthen one implementation at a time with the specific requirement, personal contribution, technical challenge, and observed result. Do not add precise metrics, leadership verbs, or production guarantees without supporting evidence.
