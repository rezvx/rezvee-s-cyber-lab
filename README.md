# rezV.me — Cybersecurity & Network Engineering Portfolio

Personal portfolio showcasing hands-on lab projects, technical reports, and practical skills in networking, cybersecurity, and home lab experimentation.

🔗 **Live Site:** [rezv.me](https://rezv.me)  
🧪 **All work conducted in authorized lab environments**

---

## Overview

This portfolio is built to demonstrate **applied, practical skills** rather than theoretical knowledge alone. Every project is based on structured lab environments simulating real-world scenarios — from enterprise network design to web application vulnerability assessment.

**Target Roles**
- SOC Analyst (Junior)
- Network Engineer (Junior)
- Security Analyst / Pentester (Entry-Level)

---

## Featured Projects

| # | Project | Report |
|---|---------|--------|
| 1 | Enterprise Network Design (VLAN & Inter-VLAN Routing) | ✅ |
| 2 | Secure WAN Connectivity (OSPF + ACL) | ✅ |
| 3 | Network Troubleshooting & Performance Validation | — |
| 4 | Web Application VAPT — DVWA (OWASP Top 10) | ✅ |
| 5 | Local AI Server Testing (Ollama + Open WebUI) | — |
| 6 | Portfolio Website (This Project) | — |

### 1. Enterprise Network Design
Designed a segmented enterprise LAN using VLANs, 802.1Q trunking, and router-on-a-stick routing. Validated gateway reachability and end-to-end connectivity.

### 2. Secure WAN Connectivity
Built a multi-site WAN topology using OSPF. Applied ACLs for controlled inter-site communication and verified routing convergence and security enforcement.

### 3. Network Troubleshooting & Performance Validation
Simulated real-world network failures, diagnosed issues using a structured methodology, and documented root cause → fix mapping.

### 4. Web Application VAPT (OWASP Top 10)
Conducted a full vulnerability assessment on DVWA covering OWASP Top 10 categories. Documented findings with impact ratings and remediation guidance.

### 5. Local AI Server Testing
Deployed a local AI stack using Docker (Ollama + Open WebUI). Tested multiple local LLMs and evaluated performance and stability for daily usage.

### 6. Portfolio Website
Built with Vite + React + TypeScript. Includes custom UI, branding, SEO metadata, and sitemap. Deployed via GitHub Pages with a custom domain.

---

## Tech Stack

**Frontend & Deployment**

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)

**Networking & Security**

![Kali Linux](https://img.shields.io/badge/Kali_Linux-557C94?style=flat&logo=kalilinux&logoColor=white)
![Cisco](https://img.shields.io/badge/Cisco_Packet_Tracer-1BA0D7?style=flat&logo=cisco&logoColor=white)
![Burp Suite](https://img.shields.io/badge/Burp_Suite-FF6633?style=flat&logo=burpsuite&logoColor=white)

**Home Lab / AI**

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black)

---

## Project Structure

```
rezv.me/
├── public/
│   ├── reports/          # PDF reports linked from the site
│   ├── favicon.ico
│   ├── site.webmanifest
│   └── CNAME             # Custom domain config
│
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Home, About, Projects, Reports, Contact
│   ├── assets/           # Images & branding
│   └── main.tsx
│
├── index.html
├── vite.config.ts
└── package.json
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/rezvx/rezv.me.git
cd rezv.me

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## License

This project is for portfolio and educational purposes.  
All lab work was conducted in authorized, isolated environments.

---

<p align="center">Built by <a href="https://rezv.me">Rezvee Parvez</a></p>