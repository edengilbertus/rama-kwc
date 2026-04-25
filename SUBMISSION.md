# Kyankima Women's Cooperative Website Submission

## Live Website

Repository name: `rama-kwc`

Live URL after GitHub Pages publication: `https://edengilbertus.github.io/rama-kwc/`

## Section A, Question Two

### a) Partial Content Inventory

| Content item | Source from case study | Proposed page/section | Format | Status/action needed | Purpose |
|---|---|---|---|---|---|
| Cooperative name | Case background | Header, Home, About | Text | Ready | Identifies the organization |
| Registration status | Case background | About Us | Text | Confirm exact wording | Builds public trust |
| Founding year: 2019 | Case background | About Us | Text | Ready | Shows history and stability |
| 47 women members | Case background | About Us / Home | Text + photos | Confirm photo consent | Shows community impact |
| Mission statement | Mission/history document | Home / About Us | Text | Edit into simple language | Explains purpose |
| Cooperative history | Mission/history document | About Us | Text | Shorten for web use | Builds credibility |
| 23 products | Nalwoga Judith's notebook | Products | Text + images | Group into categories | Helps customers browse |
| Agriculture products | Product notebook | Products > Agriculture | Product cards | Add prices/availability | Supports sales |
| Handcraft products | Product notebook | Products > Handcrafts | Product cards | Add descriptions/photos | Promotes women's crafts |
| Product photographs | Smartphone photos | Products / Gallery | Images | Compress, crop, add alt text | Makes products visible |
| Member photographs | Smartphone photos | About / Gallery | Images | Get consent | Shows real cooperative members |
| Product descriptions | Notebook/member input | Product cards | Short text | Write clear descriptions | Helps buying decisions |
| Product availability | Cooperative records | Products | Text/table | Confirm regularly | Avoids customer confusion |
| Health workers' contacts | Case background | Health Tips / Contact | Text | Confirm permission | Gives health content authority |
| Monthly health tips | 3 health workers | Health Tips | Articles/posts | Create monthly update plan | Supports health awareness |
| 15 customer FAQs | FAQ list | FAQs | Q&A text | Group by topic | Reduces repeated enquiries |
| Chairperson: Nalwoga Judith | Case background | Contact Us | Text/contact link | Confirm phone/email | Main customer contact |
| Mukono District location | Case background | Contact / About | Text/map optional | Add precise address | Helps customers locate cooperative |
| Enquiry form | Website requirement | Contact Us | HTML form | Build and test | Allows customer questions |
| WhatsApp/phone/email | To be collected | Contact / Footer | Links | Confirm details | Supports easy communication |

### b) Proposed Information Architecture

The best structure is a topic-based information architecture because visitors will mostly come to the site to find products, learn about the cooperative, read health tips, ask questions, or contact Kyankima.

```text
Kyankima Women's Cooperative Website
|
|-- Home
|   |-- Brief introduction
|   |-- Featured products
|   |-- Health awareness highlight
|   `-- Contact call-to-action
|
|-- About Us
|   |-- History
|   |-- Mission
|   |-- Registration status
|   `-- Members and community impact
|
|-- Products
|   |-- Agriculture Products
|   |   |-- Product names
|   |   |-- Photos
|   |   |-- Descriptions
|   |   `-- Availability/enquiry option
|   |
|   `-- Handcraft Products
|       |-- Product names
|       |-- Photos
|       |-- Descriptions
|       `-- Availability/enquiry option
|
|-- Health Tips
|   |-- Monthly health tips
|   `-- Health worker contributors
|
|-- Gallery
|   |-- Product photos
|   `-- Member/community photos
|
|-- FAQs
|   |-- Product questions
|   |-- Ordering and delivery questions
|   `-- Health awareness questions
|
`-- Contact Us
    |-- Phone/WhatsApp
    |-- Email
    |-- Location: Mukono District
    `-- Enquiry form
```

The Home page introduces the cooperative and routes users to the main tasks. The About page builds trust using history, mission, founding year, registration status, and the 47-member story. The Products page is divided into Agriculture Products and Handcraft Products because the inventory showed that the cooperative has both types. Health Tips is separate because community health awareness is a service, not a product. Gallery supports product and member visibility. FAQs reduce repeated questions. Contact gives users phone, WhatsApp, location, and enquiry options.

### c) How the Inventory Shaped the IA

The content inventory directly shaped the website structure. The inventory showed 23 products, so the IA created a Products section instead of scattering products across the website. Because the products fall into agriculture and handcraft work, the Products section was divided into Agriculture Products and Handcraft Products.

The inventory showed smartphone product and member photographs. That led to image areas inside Products and a separate Gallery page. Product photos support selling, while member photos support trust and community storytelling.

The mission/history document became the About Us page. The health workers and monthly tips became a separate Health Tips page. The 15 customer FAQs became the FAQs page. Nalwoga Judith's contact role and the Mukono District location became the Contact Us page.

## Section B, Question Three

### Prototype Design

The website prototype includes these pages:

- `index.html` for Home
- `about.html` for About Us
- `products.html` for Agriculture and Handcraft products
- `health-tips.html` for monthly health awareness
- `gallery.html` for product and member photos
- `faqs.html` for the 15 customer FAQs
- `contact.html` for phone, location, and enquiry form
- `hosting.html` for academic hosting evaluation and SLA

Every page contains visible traceability labels such as `CI-07 23 products`, `CI-14 monthly tips`, and `IA-Products`. These show how the page content connects back to the inventory and information architecture.

### Design Deviations

The original public information architecture did not include a Hosting Plan page. It was added only because Section B requires hosting evaluation, SLA, and deployment documentation. It appears in the footer instead of the main navigation so ordinary customers are not distracted.

The prototype uses SVG placeholder illustrations instead of actual smartphone photographs because the real photos were not available in the workspace. Before public launch, Kyankima should replace them with compressed real product and member photographs after consent is confirmed.

### Hosting Evaluation

| Hosting option | Evaluation |
|---|---|
| Ugandan shared hosting at UGX 180,000/year | Affordable and may provide local support, but it can require manual uploads, manual backups, and depends heavily on the host's uptime and support quality. |
| GitHub Pages | Free for a static prototype, supports custom domains and HTTPS settings, but has no built-in form handling and requires Git knowledge. |
| Netlify or AWS pay-as-you-go | Netlify is easier for this static site because it supports Git or drag-and-drop deployment, HTTPS, deploy previews, and form handling. AWS Amplify is powerful but more complex than needed for the first version. |

Recommended option: Netlify for a real cooperative deployment, because it gives the best balance between low starting cost, mobile audience performance, future form handling, and long-term growth. For this academic submission, GitHub Pages is acceptable because the requirement allows any free hosting platform and the prototype is static.

### Draft SLA

- Availability target: 99.5% monthly, excluding major provider incidents and planned maintenance.
- Performance target: key pages remain lightweight and usable on common Android phones.
- Security: HTTPS must be enabled before public launch.
- Content updates: product availability checked weekly; health tips updated monthly.
- Support response: critical site-down issues reviewed within 24 hours; content corrections within 3 working days.
- Backup: site source stored in GitHub and exported monthly.

### Deployment Evidence Checklist

Screenshots to collect for the final report:

1. GitHub account logged in.
2. New repository named `rama-kwc`.
3. Repository visibility set to public.
4. Files pushed to the repository.
5. GitHub Pages enabled from the `main` branch.
6. Browser showing the live website at `https://edengilbertus.github.io/rama-kwc/`.

### Source Links

- GitHub Pages custom domain and HTTPS documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Netlify create deploys documentation: https://docs.netlify.com/deploy/create-deploys/
- Netlify platform documentation, including forms: https://docs.netlify.com/
- AWS Amplify Hosting pricing: https://aws.amazon.com/amplify/pricing/
- AWS Amplify Hosting overview: https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
