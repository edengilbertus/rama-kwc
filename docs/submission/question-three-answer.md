# Question Three Answer

## Prototype Design and Traceability

The prototype implements the information architecture developed in Question Two as a static website with these pages: Home, About, Products, Health Tips, Gallery, FAQs, Contact, and a supporting Hosting Plan page for the academic submission.

The published Netlify URL is: https://deft-lokum-2f20c7.netlify.app/

Every page is traceable to the content inventory:

- Home uses the cooperative name, mission summary, product highlights, health awareness highlight, and contact call-to-action.
- About uses the founding year, registration status, mission/history document, and 47 member story.
- Products uses the notebook list of 23 products, grouped into Agriculture Products and Handcraft Products.
- Health Tips uses the three health worker contributors and monthly health tip update requirement.
- Gallery uses smartphone product and member photographs, represented by placeholders in this prototype.
- FAQs uses the 15 customer questions, grouped around products, orders, delivery, and health awareness.
- Contact uses Nalwoga Judith's chairperson role, Mukono District location, communication channels, and an enquiry form.

The visible traceability pills on each page show the connection between design decisions and inventory/IA items, for example `CI-07 23 products`, `CI-14 monthly tips`, and `IA-Products`.

## Design Deviation

The original information architecture did not include a Hosting Plan page. This page was added only for the academic submission because Question Three requires hosting evaluation, SLA, and deployment documentation. It is placed in the footer instead of the main navigation so public users are not distracted from the cooperative's main tasks.

The prototype also uses stylized placeholder images because the actual smartphone photos were not available. The final public site should replace these placeholders with real compressed product and member photos after consent is confirmed.

## Hosting Evaluation and Recommendation

Ugandan shared hosting at UGX 180,000 per year is affordable and may provide local support, but it may require manual file uploads, manual backups, and more direct technical maintenance.

GitHub Pages is free for public repositories on GitHub Free and is suitable for a static student prototype. It provides custom domain configuration and an HTTPS enforcement option, but it does not provide built-in form handling and requires Git knowledge.

Netlify is recommended because it supports Git-based deployment, manual deployment, drag-and-drop deployment of folders containing HTML files, serverless form handling, global delivery, deploy previews, and a clearer growth path for forms or future CMS integration. It can start at no cost or low cost and scale as the cooperative grows. This suits Kyankima's budget, mobile audience, and long-term goal of improving digital visibility. The prototype was deployed on Netlify at https://deft-lokum-2f20c7.netlify.app/.

AWS Amplify Hosting is powerful and pay-as-you-go, with CDN delivery and public SSL certificates, but it is more complex than Kyankima needs for the first static prototype.

## Draft SLA

- Availability target: 99.5% monthly, excluding major provider incidents and planned maintenance.
- Performance target: main pages remain lightweight and usable on common Android phones.
- Security: HTTPS enabled before launch.
- Content updates: product availability checked weekly and health tips updated monthly.
- Support response: critical site-down issues reviewed within 24 hours; content corrections within 3 working days.
- Backup: website source stored in a Git repository and exported monthly.

## Deployment Evidence Required

When publishing to Netlify, capture annotated screenshots of:

1. Account creation or login.
2. New site setup.
3. Upload or repository connection.
4. Build settings showing no build command and root publish directory.
5. Successful deploy log.
6. Live website URL opened in a browser: https://deft-lokum-2f20c7.netlify.app/.

## Source Links

- GitHub Pages custom domain and HTTPS documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Netlify create deploys documentation: https://docs.netlify.com/deploy/create-deploys/
- Netlify platform documentation, including forms: https://docs.netlify.com/
- AWS Amplify Hosting pricing: https://aws.amazon.com/amplify/pricing/
- AWS Amplify Hosting overview: https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
