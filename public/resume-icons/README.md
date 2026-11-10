# Résumé contact icons

The GitHub, LinkedIn, email, and phone icons are exported from the existing
`react-icons/fa` package (Font Awesome Free 5).

Font Awesome icons are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
Attribution: [Font Awesome by Fonticons, Inc.](https://fontawesome.com/).

`scripts/render-resume-icons.mjs` exports the SVG files. Checked-in PNG copies
are used by PDF and Word generation; SVG paths are embedded into the HTML
documents. Contacts retain their full readable text, and decorative HTML
icons are hidden from assistive technology.
