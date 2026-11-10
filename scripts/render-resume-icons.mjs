// Export existing React Icons as local SVG assets; no icon CDN is required.
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const directory = new URL('../public/resume-icons/', import.meta.url);
mkdirSync(directory, { recursive: true });
for (const [name, Icon] of Object.entries({ github: FaGithub, linkedin: FaLinkedinIn, email: FaEnvelope, phone: FaPhone })) {
  const svg = renderToStaticMarkup(createElement(Icon, { size: 96, color: '#222222' }))
    .replaceAll('currentColor', '#222222')
    .replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
  writeFileSync(fileURLToPath(new URL(`${name}.svg`, directory)), svg + '\n');
}
