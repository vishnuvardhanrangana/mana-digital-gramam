# Mana Digital Gramam (మన డిజిటల్ గ్రామం)
### Rural Internet Awareness Portal

> *"Your Village. Your Internet. Your Opportunities."*  
> *"మన గ్రామం — మన ఇంటర్నెట్ — మన అభివృద్ధి"*

**Mana Digital Gramam** is a public-awareness educational website designed specifically for rural families, farmers, students, and senior citizens in India. It demystifies essential internet-based services and empowers first-time internet users with simple, accessible, step-by-step guidance in **Telugu (తెలుగు)**, **English**, and **Hindi (हिंदी)**.

---

## 🌟 Key Features

1. **Three-Language Support with Instant Switcher**:
   - Default language: **Telugu (తెలుగు)**.
   - Also supports **English** and **Hindi (हिंदी)**.
   - User language preference automatically persisted in `localStorage`.
   - Complete localized translations for all UI, headings, guides, warnings, FAQs, and topic instructions.

2. **8 Comprehensive Rural Topics**:
   - 💳 **Digital Payments (డిజిటల్ చెల్లింపులు)**: UPI, QR code scanning, safe PIN handling, failed transaction dispute redressal, NPCI FAQs.
   - 🌾 **Digital Farming (డిజిటల్ వ్యవసాయం)**: Weather alerts, crop pest advisories, eNAM mandi prices, irrigation advice, subsidy fraud avoidance.
   - 🎓 **Online Learning (ఆన్లైన్ విద్య)**: DIKSHA QR textbooks, SWAYAM certified free courses, digital skills, safe downloads.
   - 📶 **Network & Connectivity (నెట్వర్క్ మరియు ఇంటర్నెట్)**: Mobile data vs Wi-Fi, 4G vs 5G basics, weak signal troubleshooting, official data balance checks.
   - 🩺 **Online Healthcare (ఆన్లైన్ ఆరోగ్యం)**: Telemedicine basics, free eSanjeevani consultations, digital prescriptions, emergency medical protocols.
   - 🏦 **Internet Banking & ATM Services (ఇంటర్నెట్ బ్యాంకింగ్ మరియు ATM సేవలు)**: Official banking apps, ATM fraud prevention, card blocking, missed call balance.
   - 🗑️ **Digital Waste & Grievance Services (డిజిటల్ వ్యర్థాల సేకరణ మరియు ఫిర్యాదులు)**: Gram Panchayat civic reporting, Swachhata app, tracking grievance IDs, protecting privacy.
   - 🚌 **Digital Public Transport (డిజిటల్ ప్రజా రవాణా)**: RTC bus schedules, train routes, NTES live tracking, IRCTC official reservations.

3. **Critical Digital Safety Banner**:
   - Emphasizes the **Golden UPI Rule**: *A UPI PIN is entered ONLY to debit/send money, NEVER to receive money!*
   - Warnings against remote screen-sharing tools (AnyDesk/TeamViewer).
   - Direct helpline links to **National Cyber Crime Helpline (1930)** and **Kisan Call Centre (1800-180-1551)**.

4. **Interactive Multilingual Search**:
   - Real-time search across topic titles, descriptions, and key terms in the selected language.
   - Clear empty state with quick reset action.

5. **Accessibility & Rural UX Focus**:
   - Text size booster (`A` / `A+`) for senior citizens and low-vision users.
   - Semantic HTML5 structure with accessible skip links (`#main-content`) and focus rings.
   - Deep forest green and warm earthy tones inspired by rural Indian communities.
   - High readability fonts (`Noto Sans Telugu`, `Noto Sans Devanagari`, `Plus Jakarta Sans`).
   - Zero external API dependencies, lightweight assets, and zero tracking.

---

## 🛠️ Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Routing**: React Router DOM (v7)
- **Deployment**: Static SPA architecture deployable to Netlify / Vercel / GitHub Pages

---

## 📋 Requirements

- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm**: v9.0.0 or later

---

## 🚀 Installation & Local Development

### 1. Clone or Open the Workspace
```bash
cd /path/to/mana-digital-gramam
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` to view the website.

---

## 🏗️ Production Build

To build the optimized static production bundle:
```bash
npm run build
```
The compiled static production files will be output to the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 GitHub Pages Deployment (Free & Automated)

The website is configured for 100% free hosting on GitHub Pages via **GitHub Actions**.

- **Repository**: [https://github.com/vishnuvardhanrangana/mana-digital-gramam](https://github.com/vishnuvardhanrangana/mana-digital-gramam)
- **Live Public Website**: [https://vishnuvardhanrangana.github.io/mana-digital-gramam/](https://vishnuvardhanrangana.github.io/mana-digital-gramam/)

### Enabling GitHub Pages in Repository Settings:
1. Go to the repository on GitHub: `https://github.com/vishnuvardhanrangana/mana-digital-gramam/settings/pages`
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push changes to the `main` branch. GitHub Actions will automatically build and deploy the site!

---

## 🌐 Netlify Deployment Instructions (Alternative)

This website is also fully compatible with Netlify as a Single Page Application (SPA). A `public/_redirects` file is included:

```
/*    /index.html   200
```

### Option A: Deploy via Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option B: Deploy via Netlify Web UI (Git Integration)
1. Push this repository to GitHub.
2. Log in to [Netlify](https://www.netlify.com/) and click **"Add new site"** -> **"Import an existing project"**.
3. Select this repository.
4. Set the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

---

## 🛡️ Content Quality, Safety & Disclaimers

- **Independent Educational Portal**: Mana Digital Gramam is strictly an educational initiative for public literacy. It is **NOT** an official government agency and does not process financial payments.
- **Zero Credential Collection**: This site never asks for bank account numbers, passwords, OTPs, or Aadhaar credentials.
- **Verified References**: All external resource links point directly to certified portals (NPCI, eNAM, eSanjeevani, SWAYAM, TRAI, RBI, IRCTC).
