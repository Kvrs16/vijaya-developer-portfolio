"""Generate private application PDFs/DOCX files and a public HTML resume.

Install pypdf, reportlab and python-docx into .resume-tools before running.
Private contact data and application copies stay in ignored resume-drafts/.
"""
from pathlib import Path
import sys
import json
import html
import shutil

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / '.resume-tools'))
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from docx import Document
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor
from pypdf import PdfReader

OUTPUT = ROOT / 'resume-drafts'
OUTPUT.mkdir(exist_ok=True)
profile = json.loads((OUTPUT / 'profile.json').read_text(encoding='utf-8'))

COMMON = {
 'territory': 'Built bulkified Apex territory-assignment workflows with trigger handlers, Batch Apex, and division-based Queueable Apex; propagated account changes to opportunities and updated account teams and role-specific fields.',
 'lwc': 'Built interconnected LWC forms and quote builders; debugged browser issues and traced Apex test failures to memory consumption from multiple Salesforce Flows.',
 'stripe': 'Implemented a Stripe invoice endpoint using Apex REST and Salesforce Sites; configured and tested the data flow through receipt creation and client email delivery.',
 'documents': 'Configured PandaDoc templates and bidirectional synchronization across opportunities, quotes, quote line items, and custom objects; implemented DocuSign document generation, merge fields, signature tracking, and record updates.',
 'mule': 'Built, tested, and deployed MuleSoft APIs and integration flows connecting Salesforce, SFTP channels, and third-party applications; implemented transformations and authentication and configured API catalog entries.',
 'mule_debug': 'Diagnosed Mule application failures using Anypoint Studio, application logs, and Anypoint Platform; separated complex flows and tested Clay table imports, exports, and Salesforce synchronization.',
 'agent': 'Delivered an Agentforce Service Agent with Flow-based email verification, embedded messaging, Omni-Channel routing, multiple subagents, and case creation linked to Messaging Sessions.',
 'data': 'Mapped Data Lake Object (DLO) fields to Data Model Objects (DMOs), built audience segments, and connected them to Marketing Cloud Advanced campaigns, emails, and campaign flows.',
 'access': 'Built Experience Cloud user-provisioning and contact-matching workflows; configured profiles, permission sets, sharing rules, field-level security, Named Credentials, External Credentials, and OAuth 2.0.',
 'quality': 'Implemented Nebula Logger in Apex and Flows; tested callouts and asynchronous Apex and deployed dependency-based metadata packages using Salesforce CLI, Git, and change sets.',
 'teamwork': 'Collaborated with other developers on LWC component testing, Flow investigations, and permission-set troubleshooting while independently delivering assigned implementations.',
}

ROLES = {
 'salesforce-developer': {
  'professional_focus': True,
  'title': 'Salesforce Developer',
  'summary': 'Associate Technical Consultant delivering Salesforce development, enterprise integrations, and service automation. Hands-on experience with bulkified Apex, Lightning Web Components, MuleSoft, and Agentforce, including independent implementation and collaborative testing and troubleshooting.',
  'skills': [
   ('Development', 'Apex, Lightning Web Components (LWC), JavaScript, SOQL, SOSL, triggers, Batch Apex, Queueable Apex, Salesforce Flow'),
   ('Platforms', 'Sales Cloud, Service Cloud, Experience Cloud, Agentforce, Data Cloud, Marketing Cloud Advanced'),
   ('Integration', 'MuleSoft, Anypoint Studio/Platform, REST APIs, SFTP, OAuth 2.0, Named/External Credentials'),
   ('Tools and delivery', 'Apex testing, Nebula Logger, Salesforce CLI, Git, change sets, metadata deployments'),
  ],
  'bullets': ['territory','lwc','agent','documents','access','data','quality','teamwork'],
 },
 'salesforce-integration': {
  'title': 'Salesforce Integration / MuleSoft Developer',
  'summary': 'Salesforce integration developer building and deploying MuleSoft APIs, Apex REST endpoints, and connected business workflows. Hands-on experience with Salesforce-to-SFTP connectivity, authenticated integrations, document automation, and end-to-end troubleshooting.',
  'skills': [
   ('Integration development', 'MuleSoft, Anypoint Studio, Anypoint Platform, REST APIs, SFTP, data transformations'),
   ('Authentication', 'OAuth 2.0, Named Credentials, External Credentials, access controls'),
   ('Salesforce', 'Apex, Lightning Web Components (LWC), JavaScript, SOQL, Salesforce Flow, Batch Apex, Queueable Apex'),
   ('Systems and delivery', 'Stripe, PandaDoc, DocuSign, Clay, Nebula Logger, Git, Salesforce CLI, API testing'),
  ],
  'bullets': ['mule','mule_debug','stripe','documents','territory','access','quality','teamwork'],
 },
}

def lines_for(role, public=False):
    contacts = [] if public and not profile.get('public_contacts') else [profile['email'], profile['phone']]
    contacts += ['github.com/Kvrs16', profile['linkedin'].removeprefix('https://')]
    return ' | '.join(contacts)

def sections(role):
    if role.get('professional_focus'):
        return [
          ('SUMMARY', [('p',role['summary'])]),
          ('TECHNICAL SKILLS', [('skill',f'{label}: {value}') for label,value in role['skills']]),
          ('PROFESSIONAL EXPERIENCE', [
            ('job',profile['employment_heading']),
            ('p','Initial training from July 2025; Salesforce/MuleSoft implementation work since December 2025.'),
            ('bullet','Built and enhanced LWC forms and quote builders; debugged component behavior with browser developer tools and investigated Flow-related Apex test failures.'),
            ('bullet','Configured access controls and authenticated integrations; tested callouts and asynchronous Apex, added Nebula Logger to Apex/Flows, and deployed dependency-based metadata changes.'),
            ('bullet','Independently delivered assigned implementations and collaborated with other developers on LWC testing, Flow investigations, and permission-set troubleshooting.'),
          ]),
          ('SELECTED PROFESSIONAL IMPLEMENTATIONS', [
            ('job','Territory Assignment and Division-Based Automation'),
            ('bullet','Extended territory assignment using supporting custom objects, bulkified trigger handlers, Batch Apex, and Queueable Apex; enabled manual entry through Screen Flow.'),
            ('bullet','Propagated account changes to opportunities, updated account teams, and populated role-specific fields using territory membership and division-based logic.'),
            ('job','Enterprise Integrations and Document Workflows'),
            ('bullet','Built, tested, and deployed MuleSoft flows connecting Salesforce, SFTP, and external applications; implemented transformations/authentication and diagnosed failures using Anypoint logs.'),
            ('bullet','Implemented a Stripe invoice REST handler and receipt workflow; configured PandaDoc template synchronization, DocuSign document/signature workflows, and Clay data exchange.'),
            ('job','Agentforce Service Agent and Case Automation'),
            ('bullet','Built and tested a service agent with Flow-based email verification, embedded messaging, Omni-Channel routing, and multiple subagents for different support use cases.'),
            ('bullet','Implemented case creation for verified and unverified users and linked Messaging Sessions to related cases.'),
          ]),
          ('EDUCATION', [('p','B.Tech., Computer Science and Engineering | Noida Institute of Engineering and Technology | 2025')]),
        ]
    return [
      ('SUMMARY', [('p',role['summary'])]),
      ('TECHNICAL SKILLS', [('skill', f'{label}: {value}') for label,value in role['skills']]),
      ('PROFESSIONAL EXPERIENCE', [
        ('job',profile['employment_heading']),
        ('p','Training from July 2025; Salesforce/MuleSoft implementation work since December 2025.'),
        *[('bullet', COMMON[key]) for key in role['bullets']],
        ('job','Backend Developer Intern | Celebal Technologies | July 2024 - September 2024'),
        ('bullet','Built backend services and REST APIs for an employee management application; developed a WebSocket chat application with token-based authentication and Node.js task automation.'),
      ]),
      ('EDUCATION', [('p','Bachelor of Technology, Computer Science and Engineering | 2025'),('p','Noida Institute of Engineering and Technology')]),
      ('ADDITIONAL KNOWLEDGE', [('p','Academic experience: Java, Spring Boot, and full-stack application development; currently refreshing these skills.')]),
    ]

fonts = Path('C:/Windows/Fonts')
pdfmetrics.registerFont(TTFont('Resume',str(fonts/'arial.ttf')))
pdfmetrics.registerFont(TTFont('ResumeBold',str(fonts/'arialbd.ttf')))
styles = {
 'name': ParagraphStyle('name',fontName='ResumeBold',fontSize=22,leading=25,spaceAfter=4),
 'target': ParagraphStyle('target',fontName='ResumeBold',fontSize=11,leading=14,spaceAfter=5),
 'contact': ParagraphStyle('contact',fontName='Resume',fontSize=8.7,leading=12,spaceAfter=5),
 'heading': ParagraphStyle('heading',fontName='ResumeBold',fontSize=10.5,leading=13,spaceBefore=8,spaceAfter=4,keepWithNext=True),
 'skill': ParagraphStyle('skill',fontName='Resume',fontSize=10.5,leading=14,spaceAfter=3),
 'p': ParagraphStyle('body',fontName='Resume',fontSize=10.5,leading=14,spaceAfter=3),
 'job': ParagraphStyle('job',fontName='ResumeBold',fontSize=10.5,leading=14,spaceBefore=3,spaceAfter=4,keepWithNext=True),
 'bullet': ParagraphStyle('bullet',fontName='Resume',fontSize=10.5,leading=13.5,leftIndent=9,firstLineIndent=-7,spaceAfter=3),
}

css = '''
@page { size:A4; margin:15mm; }
* { box-sizing:border-box; }
body { margin:0; background:linear-gradient(145deg,#f4f1fa,#e9edf4); color:#252336; font:11pt/1.6 Arial,Helvetica,sans-serif; }
.workspace { max-width:1100px; margin:0 auto; padding:32px 24px 56px; }
.back-link { color:#625776; font-size:13px; text-decoration:none; }
.page-intro { margin:24px 0; }
.page-intro .eyebrow { color:#7159bb; text-transform:uppercase; letter-spacing:2px; font-size:11px; font-weight:bold; }
.page-intro h1 { font-size:30px; margin:6px 0; letter-spacing:-.8px; }
.page-intro p { color:#6b6479; max-width:680px; margin:0; font-size:14px; }
.toolbar { display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; background:#ffffffc9; padding:16px; border:1px solid #e0dae9; border-radius:14px; margin-bottom:24px; box-shadow:0 5px 20px #31234406; }
.role-options,.downloads { display:flex; gap:8px; flex-wrap:wrap; }
.toolbar a { padding:10px 14px; border:1px solid transparent; border-radius:8px; text-decoration:none; font-size:13px; font-weight:bold; color:#625776; }
.toolbar a[aria-current="page"] { background:#eee8fa; border-color:#d9cdef; color:#59428f; }
.downloads a { background:white; border-color:#ded7e8; }
.downloads a:first-child { background:#654ca3; color:white; border-color:#654ca3; }
a:focus-visible { outline:3px solid #7159bb; outline-offset:4px; }
main { max-width:850px; margin:0 auto; padding:48px 54px; background:white; border:1px solid #e3dfea; box-shadow:0 18px 55px #33234312,0 2px 8px #33234305; border-radius:3px; }
.resume-header { border-bottom:2px solid #292538; padding-bottom:19px; margin-bottom:24px; }
.resume-header h1 { font-size:28pt; margin:0 0 4px; letter-spacing:-.8px; line-height:1.2; }
.target { font-weight:bold; font-size:12pt; color:#544367; margin:0 0 12px; }
.contacts { display:flex; flex-wrap:wrap; column-gap:16px; row-gap:3px; font-size:9.5pt; overflow-wrap:anywhere; color:#5b5663; }
.contacts a { color:inherit; text-decoration:none; }
.contacts a:hover { text-decoration:underline; }
section { margin-top:24px; }
h2 { font-size:11pt; text-transform:uppercase; letter-spacing:1.1px; margin:0 0 12px; border-bottom:1px solid #d9d4df; padding-bottom:6px; }
h3 { font-size:10.8pt; margin:17px 0 7px; line-height:1.5; }
p { margin:0 0 8px; }
ul { padding-left:19px; margin:8px 0 0; }
li { margin-bottom:10px; padding-left:3px; }
.skills-list { margin:0; }
.skill-row { display:grid; grid-template-columns:150px minmax(0,1fr); gap:10px; padding:9px 0; border-bottom:1px solid #efedf2; font-size:10.5pt; }
.skill-row:last-child { border-bottom:0; }
dt { font-weight:bold; } dd { margin:0; color:#4b4653; }
.page-note { max-width:850px; margin:16px auto 0; color:#716a7c; font-size:12px; }
@media print { body{background:white;color:#111;font-size:10pt;line-height:1.4}.workspace{padding:0;max-width:none}.page-intro,.back-link,.toolbar,.page-note{display:none}main{margin:0;padding:0;max-width:none;box-shadow:none;border:0}.resume-header{padding-bottom:12px;margin-bottom:12px}.resume-header h1{font-size:23pt}.target{font-size:11pt}.contacts{font-size:8.5pt}section{margin-top:12px}h2{font-size:10pt;margin-bottom:6px;padding-bottom:3px}h2,h3{break-after:avoid}h3{font-size:10pt;margin-top:10px}li{break-inside:avoid;margin-bottom:5px}.skill-row{display:block;padding:3px 0;border:0;font-size:10pt}.skill-row dt,.skill-row dd{display:inline}.skill-row dt::after{content:': '}}
@media(max-width:600px) { .workspace{padding:20px 12px 32px}main{padding:28px 22px}.resume-header h1{font-size:25pt}.skill-row{grid-template-columns:1fr;gap:2px}.toolbar{padding:10px}.toolbar a{font-size:12px;padding:9px 11px}.page-intro h1{font-size:26px} }
.classic-resume { font-family: Georgia, 'Times New Roman', serif; color:#161616; }
.classic-resume .resume-header { text-align:center; border-bottom:0; padding-bottom:0; }
.classic-resume .contacts { justify-content:center; }
.classic-resume .target { color:#161616; }
.classic-resume h2 { font-variant:small-caps; letter-spacing:.7px; border-bottom:1px solid #222; }
.classic-resume .skill-row { grid-template-columns:130px minmax(0,1fr); }
@media(max-width:600px) { .classic-resume .skill-row { grid-template-columns:1fr; } }
'''

def tex_escape(text):
    replacements={'\\':r'\textbackslash{}','&':r'\&','%':r'\%','$':r'\$','#':r'\#','_':r'\_','{':r'\{','}':r'\}','~':r'\textasciitilde{}','^':r'\textasciicircum{}'}
    return ''.join(replacements.get(char,char) for char in text)

def overleaf_resume(role):
    # Preserve the supplied template attribution while keeping text in reading order.
    preamble=r'''% Format adapted from the supplied Jitin Nair resume template.
% MIT License
% Copyright (c) 2021 Jitin Nair
% Permission is hereby granted, free of charge, to any person obtaining a copy
% of this software and associated documentation files (the "Software"), to deal
% in the Software without restriction, including without limitation the rights
% to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
% copies of the Software, and to permit persons to whom the Software is
% furnished to do so, subject to the following conditions:
% The above copyright notice and this permission notice shall be included in
% all copies or substantial portions of the Software.
% THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
% IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
% FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
% AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
% LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
% OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
\documentclass[a4paper,11pt]{article}
\usepackage[margin=0.55in]{geometry}
\usepackage[T1]{fontenc}
\usepackage[utf8]{inputenc}
\usepackage{lmodern}
\usepackage{microtype}
\usepackage{enumitem}
\usepackage{titlesec}
\usepackage{xcolor}
\usepackage[unicode,hidelinks]{hyperref}
\input{glyphtounicode}
\pdfgentounicode=1
\pagestyle{empty}
\setlength{\parindent}{0pt}
\setlength{\parskip}{2pt}
\setlist[itemize]{leftmargin=1.15em,itemsep=1pt,topsep=2pt,parsep=0pt}
\titleformat{\section}{\large\scshape\raggedright}{}{0em}{}[\titlerule]
\titlespacing{\section}{0pt}{7pt}{4pt}
\begin{document}
\begin{center}
{\LARGE\bfseries Vijaya Rani}\\[3pt]
'''
    esc=tex_escape
    header=(r'{\normalsize '+esc(role['title'])+r'}\\[3pt]'+'\n'+
        r'\small \href{mailto:'+profile['email']+'}{'+esc(profile['email'])+r'} \enspace|\enspace '+esc(profile['phone'])+r'\\[2pt]'+'\n'+
        r'\href{https://github.com/Kvrs16}{github.com/Kvrs16} \enspace|\enspace '+
        r'\href{'+profile['linkedin']+'}{'+esc(profile['linkedin'].removeprefix('https://'))+'}\n'+r'\end{center}'+'\n')
    body=[]
    for title,items in sections(role):
        body.append(r'\section{'+esc(title.title())+'}\n')
        listing=False
        for kind,text in items:
            if kind=='bullet' and not listing: body.append(r'\begin{itemize}'+'\n');listing=True
            if kind!='bullet' and listing: body.append(r'\end{itemize}'+'\n');listing=False
            if kind=='skill':
                label,value=text.split(': ',1)
                body.append(r'\textbf{'+esc(label)+':} '+esc(value)+r'\par'+'\n')
            elif kind=='job': body.append(r'\textbf{'+esc(text)+r'}\par'+'\n')
            elif kind=='bullet': body.append(r'\item '+esc(text)+'\n')
            else: body.append(esc(text)+r'\par'+'\n')
        if listing:body.append(r'\end{itemize}'+'\n')
    return preamble+header+''.join(body)+r'\end{document}'+'\n'

def html_resume(role, slug, public=False):
    esc=html.escape
    contact_items=[]
    if not public or profile.get('public_contacts'):
        contact_items += [f'<a href="mailto:{esc(profile["email"])}">{esc(profile["email"])}</a>', f'<a href="tel:{esc(profile["phone"].replace(" ",""))}">{esc(profile["phone"])}</a>']
    contact_items += ['<a href="https://github.com/Kvrs16">github.com/Kvrs16</a>',f'<a href="{esc(profile["linkedin"])}">{esc(profile["linkedin"].removeprefix("https://"))}</a>']
    parts=[f'<header class="resume-header"><h1>Vijaya Rani</h1><p class="target">{esc(role["title"])}</p><div class="contacts">'+''.join(contact_items)+'</div></header>']
    for title,items in sections(role):
        parts.append(f'<section><h2>{title}</h2>')
        if title=='TECHNICAL SKILLS':
            parts.append('<dl class="skills-list">')
            for label,value in role['skills']:
                parts.append(f'<div class="skill-row"><dt>{esc(label)}</dt><dd>{esc(value)}</dd></div>')
            parts.append('</dl></section>')
            continue
        listing=False
        for kind,text in items:
            if kind=='bullet' and not listing: parts.append('<ul>'); listing=True
            if kind!='bullet' and listing: parts.append('</ul>'); listing=False
            tag={'p':'p','job':'h3','bullet':'li'}[kind]
            parts.append(f'<{tag}>{esc(text)}</{tag}>')
        if listing: parts.append('</ul>')
        parts.append('</section>')
    nav=''
    if public:
        sales_current=' aria-current="page"' if slug=='salesforce-developer' else ''
        integration_current=' aria-current="page"' if slug=='salesforce-integration' else ''
        nav=f'<a class="back-link" href="./">← Back to portfolio</a><div class="page-intro"><span class="eyebrow">Experience & expertise</span><h1>Résumé</h1><p>Explore my experience by role, then download a PDF or an editable Word copy.</p></div><nav class="toolbar" aria-label="Résumé versions"><div class="role-options"><a href="resume.html"{sales_current}>Salesforce Developer</a><a href="resume-integration.html"{integration_current}>Integration / MuleSoft</a></div><div class="downloads"><a href="resumes/Vijaya-Rani-{slug}.pdf" download>Download PDF</a><a href="resumes/Vijaya-Rani-{slug}.docx" download>Word version</a></div></nav>'
        if role.get('professional_focus'):
            nav=nav.replace('</div></nav>',f'<a href="resumes/Vijaya-Rani-{slug}.tex" download>Overleaf source</a></div></nav>')
    note='<p class="page-note">The downloadable files contain the same role-specific experience shown above.</p>' if public else ''
    classic=' classic-resume' if role.get('professional_focus') else ''
    return f'<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Vijaya Rani | {esc(role["title"])} Résumé</title><style>{css}</style></head><body><div class="workspace">{nav}<main class="resume-document{classic}">'+''.join(parts)+f'</main>{note}</div></body></html>'

for slug,role in ROLES.items():
    if '--role' in sys.argv and slug != sys.argv[sys.argv.index('--role')+1]:
        continue
    role_styles={key: value.clone(key+'-'+slug) for key,value in styles.items()}
    if role.get('professional_focus'):
        for key,style in role_styles.items():
            style.fontName='Times-Bold' if key in ['name','target','heading','job'] else 'Times-Roman'
        for key in ['name','target','contact']:
            role_styles[key].alignment=TA_CENTER
        role_styles['heading'].spaceBefore=7
        role_styles['heading'].spaceAfter=2
        role_styles['job'].spaceBefore=2
        role_styles['bullet'].leading=12.5
        role_styles['bullet'].spaceAfter=2
    stem=OUTPUT/f'Vijaya-Rani-{slug}'
    contact_line=html.escape(lines_for(role))
    for text,url in [(profile['email'],'mailto:'+profile['email']),('github.com/Kvrs16','https://github.com/Kvrs16'),(profile['linkedin'].removeprefix('https://'),profile['linkedin'])]:
        contact_line=contact_line.replace(html.escape(text),f'<link href="{html.escape(url,quote=True)}">{html.escape(text)}</link>')
    story=[Paragraph('Vijaya Rani',role_styles['name']),Paragraph(html.escape(role['title']),role_styles['target']),Paragraph(contact_line,role_styles['contact'])]
    for title,items in sections(role):
        story.append(Paragraph(title,role_styles['heading']))
        if role.get('professional_focus'):
            story.append(HRFlowable(width='100%',thickness=.5,color=colors.black,spaceAfter=4))
        for kind,text in items:
            formatted=html.escape(text)
            if kind=='skill':
                label, value=text.split(': ',1)
                bold_font='Times-Bold' if role.get('professional_focus') else 'ResumeBold'
                formatted=f'<font name="{bold_font}">{html.escape(label)}:</font> {html.escape(value)}'
            story.append(Paragraph(('&#8226; ' if kind=='bullet' else '')+formatted,role_styles[kind]))
    SimpleDocTemplate(str(stem.with_suffix('.pdf')),pagesize=A4,rightMargin=39,leftMargin=39,topMargin=32,bottomMargin=32,title=f'Vijaya Rani - {role["title"]}',author='Vijaya Rani').build(story)
    doc=Document()
    sec=doc.sections[0]; sec.page_height=Inches(11.69);sec.page_width=Inches(8.27)
    sec.top_margin=sec.bottom_margin=Inches(.45);sec.left_margin=sec.right_margin=Inches(.55)
    normal=doc.styles['Normal'];normal.font.name='Times New Roman' if role.get('professional_focus') else 'Arial';normal.font.size=Pt(10.5);normal.paragraph_format.space_after=Pt(3);normal.paragraph_format.line_spacing=1.05
    for heading in ['Title','Heading 1','Heading 2']:
        doc.styles[heading].font.name='Times New Roman' if role.get('professional_focus') else 'Arial';doc.styles[heading].font.color.rgb=RGBColor(23,23,23)
    p=doc.add_paragraph();r=p.add_run('Vijaya Rani');r.bold=True;r.font.size=Pt(22)
    p=doc.add_paragraph(role['title']);p.runs[0].bold=True
    doc.add_paragraph(lines_for(role))
    if role.get('professional_focus'):
        for paragraph in doc.paragraphs:
            paragraph.alignment=1
    for title,items in sections(role):
        p=doc.add_paragraph();p.paragraph_format.space_before=Pt(8);p.paragraph_format.keep_with_next=True
        r=p.add_run(title);r.bold=True;r.font.size=Pt(10)
        if role.get('professional_focus'):
            borders=OxmlElement('w:pBdr');bottom=OxmlElement('w:bottom')
            for key,value in [('val','single'),('sz','4'),('space','3'),('color','333333')]:
                bottom.set(qn('w:'+key),value)
            borders.append(bottom);p._p.get_or_add_pPr().append(borders)
        for kind,text in items:
            if kind=='skill':
                label,value=text.split(': ',1)
                p=doc.add_paragraph();p.add_run(label+': ').bold=True;p.add_run(value)
            else:
                p=doc.add_paragraph(text,style='List Bullet' if kind=='bullet' else None)
            if kind=='job':
                p.runs[0].bold=True;p.paragraph_format.keep_with_next=True
    doc.save(stem.with_suffix('.docx'))
    stem.with_suffix('.html').write_text(html_resume(role,slug),encoding='utf-8')
    if role.get('professional_focus'):
        stem.with_suffix('.tex').write_text(overleaf_resume(role),encoding='utf-8')
    pdf=PdfReader(stem.with_suffix('.pdf'))
    text='\n'.join(p.extract_text() for p in pdf.pages)
    stem.with_suffix('.txt').write_text(text,encoding='utf-8')
    assert len(pdf.pages)==1, f'{slug}: expected one page, got {len(pdf.pages)}'
    for expected in ['Vijaya Rani','SUMMARY','TECHNICAL SKILLS','PROFESSIONAL EXPERIENCE','EDUCATION',profile['email'],'Blueflame','2025']:
        assert expected.lower() in text.lower(), f'Missing extracted content: {expected}'
    print(f'{slug}: {len(pdf.pages)} page; {len(text.split())} extracted words; PDF and DOCX generated.')
    if '--update-public' in sys.argv:
        downloads=ROOT/'public'/'resumes'
        downloads.mkdir(exist_ok=True)
        extensions=['.pdf','.docx','.tex'] if role.get('professional_focus') else ['.pdf','.docx']
        for extension in extensions:
            shutil.copyfile(stem.with_suffix(extension), downloads/stem.with_suffix(extension).name)
        filename='resume.html' if slug=='salesforce-developer' else 'resume-integration.html'
        (ROOT/'public'/filename).write_text(html_resume(role,slug,public=True),encoding='utf-8')
