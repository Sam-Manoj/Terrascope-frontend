"use client";

import { 
  Activity, Cpu, Server, Code, 
  Globe, ShieldCheck, Microscope
} from "lucide-react";
import styles from "./About.module.css";

// Custom Github component that perfectly mimics Lucide's exact SVG styling
const Github = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function About() {
  return (
    <div className={styles.pageWrapper}>
      
      <div className={styles.header}>
        <h1 className={styles.title}>System <span className={styles.highlight}>Architecture</span></h1>
        <p className={styles.subtitle}>
          TerraScope is engineered on a decoupled microservices architecture, separating the graphical user interface from heavy computational machine learning tasks to ensure maximum speed, security, and accuracy.
        </p>
      </div>

      <div className={styles.bentoGrid}>
        
        {/* HOW IT WORKS (Span 8) */}
        <div className={`${styles.card} ${styles.span8}`}>
          <div className={styles.cardHeader}>
            <Microscope size={28} />
            <h2 className={styles.cardTitle}>Algorithmic Workflow</h2>
          </div>
          
          <div className={styles.phaseList}>
            <div className={styles.phaseItem}>
              <div className={styles.phaseNumber}>1</div>
              <div className={styles.phaseContent}>
                <h4>Data Acquisition (Next.js Edge)</h4>
                <p>
                  The process begins in the browser. A user uploads a high-resolution JPG or PNG of a compromised leaf. The Next.js frontend packages this imagery and securely transmits the binary payload over a stateless connection, ensuring zero local data retention.
                </p>
              </div>
            </div>

            <div className={styles.phaseItem}>
              <div className={styles.phaseNumber}>2</div>
              <div className={styles.phaseContent}>
                <h4>Chromatic Extraction (Python Engine)</h4>
                <p>
                  The dedicated Python backend receives the payload. Instead of relying solely on pattern recognition, the engine extracts the exact biological color marker (Hex code) of the localized cellular breakdown. This chromatic signature is run through our diagnostic models to identify the exact deficiency or pathogen.
                </p>
              </div>
            </div>

            <div className={styles.phaseItem}>
              <div className={styles.phaseNumber}>3</div>
              <div className={styles.phaseContent}>
                <h4>Algorithmic Remediation</h4>
                <p>
                  Once the diagnosis is locked (e.g., Nitrogen Deficiency), the engine calculates the severity based on chromatic spread. It compiles a targeted, organic remediation protocol and returns the JSON payload back to the UI for instantaneous rendering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TECH STACK (Span 4) */}
        <div className={`${styles.card} ${styles.span4}`}>
          <div className={styles.cardHeader}>
            <Server size={28} />
            <h2 className={styles.cardTitle}>Core Stack</h2>
          </div>
          
          <div className={styles.techStack}>
            <div className={styles.techItem}>
              <Code size={24} color="var(--primary)" />
              <span>Next.js (App Router)</span>
            </div>
            <div className={styles.techItem}>
              <Cpu size={24} color="var(--primary)" />
              <span>Python (AI Engine)</span>
            </div>
            <div className={styles.techItem}>
              <Activity size={24} color="var(--primary)" />
              <span>GSAP Animations</span>
            </div>
            <div className={styles.techItem}>
              <ShieldCheck size={24} color="var(--primary)" />
              <span>Stateless Execution</span>
            </div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Tailwind CSS was intentionally stripped from the frontend stack to avoid compilation conflicts and maintain absolute control over the custom CSS variables and inset shadow UI elements.
            </p>
          </div>
        </div>

        {/* DEVELOPER CREDITS (Span 12) */}
        <div className={`${styles.card} ${styles.span12}`} style={{ padding: '60px 40px' }}>
          <div className={styles.devProfile}>
            <h3 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem' }}>
              Designed & Engineered By
            </h3>
            <h2 className={styles.devName}>Sam Manoj</h2>
            <div className={styles.devRole}>Full-Stack Architect</div>
            
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '16px auto', lineHeight: 1.6 }}>
              A specialized full-stack developer dedicated to building highly optimized, decoupled architectures and immersive user interfaces.
            </p>
            
            <div className={styles.devLinks}>
              <a 
                href="https://github.com/Sam-Manoj" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                <Github size={20} />
                GitHub Profile
              </a>
              <a 
                href="https://sam-manoj-portfolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                <Globe size={20} />
                View Portfolio
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}