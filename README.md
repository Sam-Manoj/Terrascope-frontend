# 🌿 TerraScope: Web Client

> **Chromatic health diagnostics and algorithmic remediation for urban botanists.**

TerraScope is an AI-powered diagnostic tool. Instead of relying solely on standard pattern recognition, TerraScope analyzes the exact biological color profile (Hex code) of a compromised leaf, diagnoses the deficiency or pathogen, and computes actionable, organic remediation steps.

This repository contains the **Frontend Web Client**, engineered with Next.js and pure CSS. The heavy computational machine learning tasks are handled by a decoupled Python microservice.

---

## 🏗️ System Architecture

TerraScope operates on a strict decoupled microservices architecture to ensure maximum speed, security, and accuracy:

1. **Data Acquisition (This Repository):** Built on the Next.js Edge. The user uploads a high-resolution JPG/PNG. The frontend packages this imagery and securely transmits the binary payload over a stateless connection, ensuring zero local data retention.
2. **Chromatic Extraction (Python Engine):** The dedicated backend isolates the localized cellular breakdown and extracts the chromatic signature.
3. **Algorithmic Remediation:** The backend calculates severity and returns a targeted JSON remediation protocol back to this UI for instantaneous rendering.

---

## 💻 Tech Stack & UI Philosophy

* **Framework:** Next.js (App Router) + React
* **Styling:** Pure CSS Modules + CSS Variables
* **Animation:** GSAP (GreenSock) + Native CSS Keyframes
* **Icons:** Lucide React
---

## ⚙️ Core Features

* **The Diagnostic Uploader:** A stateless, drag-and-drop zone engineered to accept high-resolution botanical imagery.
* **Results Dashboard:** Dynamically generates upon receiving the Python engine's payload. 
  * **Hex Analysis Card:** Visually renders the exact biological color marker extracted from the leaf alongside its raw Hex code.
  * **Remediation Zone:** Outlines the severity of the issue and provides organic, step-by-step recovery tactics.
* **GSAP "PillNav":** A smooth, hardware-accelerated, dynamic-island-style navigation bar.
* **Ambient Botanical Animations:** Features complex, mathematically generated 3D CSS glowing flower animations that scale to the hero container.

---

## 🚀 Getting Started

To run the TerraScope Web Client locally:

### 1. Clone the repository
```bash
git clone [https://github.com/Sam-Manoj/terrascope-web.git](https://github.com/Sam-Manoj/terrascope-web.git)
cd terrascope-web

```

### 2. Install dependencies

```bash
npm install

```

### 3. Run the development server

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

*Note: To fully utilize the diagnostic features, this client must be run in tandem with the TerraScope Python Engine.*

---

## 👨‍💻 Developer Credits

**Designed & Engineered by Sam Manoj**

*A specialized full-stack developer dedicated to building highly optimized, decoupled architectures and immersive user interfaces.*

* **GitHub:** [@Sam-Manoj](https://github.com/Sam-Manoj)
* **Portfolio:** [View Portfolio](https://sam-manoj-portfolio.vercel.app/)

```

```
