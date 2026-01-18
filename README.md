# rezV.me — Cybersecurity & Network Engineering Portfolio

This repository contains the source code for **rezV.me**, my personal cybersecurity and network engineering portfolio website.  
The site is designed to showcase **hands-on lab projects**, **technical reports**, and **practical skills** across networking, cybersecurity, and local AI experimentation.

🔗 **Live Site:** https://rezv.me  
📂 **Reports & Evidence:** Available directly on the site  
🧪 **All work conducted in authorized lab environments**

---

## 📌 Purpose of This Portfolio

The goal of this portfolio is to demonstrate **practical, applied skills** rather than theoretical knowledge alone.  
All showcased projects are based on **structured lab environments**, simulating real-world scenarios such as:

- Enterprise network design
- Secure WAN routing
- Network troubleshooting
- Web application vulnerability assessment
- Local AI server testing

This site serves as a **technical showcase** for roles such as:
- SOC Analyst (Junior)
- Network Engineer (Junior)
- Security Analyst / Pentester (Entry-Level)

---

## 🧩 Featured Projects

### 1️⃣ Enterprise Network Design (VLAN & Inter-VLAN Routing)
- Designed a segmented enterprise LAN using VLANs
- Implemented 802.1Q trunking and router-on-a-stick routing
- Validated gateway reachability and end-to-end connectivity  
📄 **Report included**

### 2️⃣ Secure WAN Connectivity (OSPF + ACL)
- Built a multi-site WAN topology using OSPF
- Applied ACLs for controlled inter-site communication
- Verified routing convergence and security enforcement  
📄 **Report included**

### 3️⃣ Network Troubleshooting & Performance Validation
- Simulated real-world network failures
- Diagnosed issues using structured troubleshooting methodology
- Documented root cause → fix mapping

### 4️⃣ Web Application VAPT (OWASP Top 10) — DVWA
- Conducted vulnerability assessment on DVWA
- Tested OWASP Top 10 categories
- Documented findings with impact and remediation  
📄 **Report included**

### 5️⃣ Local AI Server Testing (Ollama + Open WebUI)
- Deployed a local AI stack using Docker
- Tested multiple local LLMs
- Evaluated performance and stability for daily usage

### 6️⃣ Portfolio Website (This Project)
- Built using Vite + React + TypeScript
- Customized UI, branding, favicon, and SEO metadata
- Deployed via GitHub Pages (`gh-pages`) with a custom domain

---

## 🛠️ Technologies Used

### Frontend & Deployment
- **Vite**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **GitHub Pages (gh-pages)**
- **Custom Domain + DNS**

### Networking & Security Labs
- **Cisco Packet Tracer**
- **OSPF**
- **VLAN / Inter-VLAN Routing**
- **Access Control Lists (ACLs)**
- **Kali Linux**
- **DVWA**
- **Burp Suite**

### AI / Home Lab
- **Docker**
- **Ollama**
- **Open WebUI**
- **Local LLMs**
- **WSL / Linux**

---

## 📂 Repository Structure

```text
.
├── public/
│   ├── reports/                 # PDF reports linked from the site
│   ├── favicon.ico
│   ├── site.webmanifest
│   ├── CNAME                    # Custom domain configuration
│
├── src/
│   ├── components/              # Reusable UI components
│   ├── pages/                   # Pages (Home, Projects, Reports, Contact)
│   ├── assets/                  # Images & branding
│   └── main.tsx
│
├── index.html
├── vite.config.ts
└── package.json
