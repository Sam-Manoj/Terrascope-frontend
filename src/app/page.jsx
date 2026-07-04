"use client";

import { useEffect, useState } from "react";
import { 
  ArrowRight, ScanLine, ActivitySquare, 
  BookOpen, Leaf, Sun, Beaker 
} from "lucide-react";
import Link from "next/link";
import styles from "./Home.module.css";
import "./flowers.css"; 

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      
      {/* 1. HERO BOX */}
      <section className={styles.heroBox}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            TERRASCOPE <br /><span className={styles.highlight}>DIAGNOSTICS</span>
          </h1>
          <p className={styles.subtitle}>
            Chromatic health diagnostics and algorithmic remediation for urban botanists. We don't just tell you your plant is sick—we analyze the exact hex profile to save it.
          </p>
          <Link href="/dashboard" className={styles.enterBtn}>
            Initiate Scan <ArrowRight size={20} color="#000" />
          </Link>
        </div>
        
        {/* CSS FLOWER ANIMATION */}
        <div className={styles.heroVisual}>
          <div className="flower-container">
            <div className="night"></div>
            <div className="flowers">
              
              <div className="flower flower--1">
                <div className="flower__leafs flower__leafs--1">
                  <div className="flower__leaf flower__leaf--1"></div>
                  <div className="flower__leaf flower__leaf--2"></div>
                  <div className="flower__leaf flower__leaf--3"></div>
                  <div className="flower__leaf flower__leaf--4"></div>
                  <div className="flower__white-circle"></div>
                  <div className="flower__light flower__light--1"></div>
                  <div className="flower__light flower__light--2"></div>
                  <div className="flower__light flower__light--3"></div>
                  <div className="flower__light flower__light--4"></div>
                  <div className="flower__light flower__light--5"></div>
                  <div className="flower__light flower__light--6"></div>
                  <div className="flower__light flower__light--7"></div>
                  <div className="flower__light flower__light--8"></div>
                </div>
                <div className="flower__line">
                  <div className="flower__line__leaf flower__line__leaf--1"></div>
                  <div className="flower__line__leaf flower__line__leaf--2"></div>
                  <div className="flower__line__leaf flower__line__leaf--3"></div>
                  <div className="flower__line__leaf flower__line__leaf--4"></div>
                  <div className="flower__line__leaf flower__line__leaf--5"></div>
                  <div className="flower__line__leaf flower__line__leaf--6"></div>
                </div>
              </div>
          
              <div className="flower flower--2">
                <div className="flower__leafs flower__leafs--2">
                  <div className="flower__leaf flower__leaf--1"></div>
                  <div className="flower__leaf flower__leaf--2"></div>
                  <div className="flower__leaf flower__leaf--3"></div>
                  <div className="flower__leaf flower__leaf--4"></div>
                  <div className="flower__white-circle"></div>
                  <div className="flower__light flower__light--1"></div>
                  <div className="flower__light flower__light--2"></div>
                  <div className="flower__light flower__light--3"></div>
                  <div className="flower__light flower__light--4"></div>
                  <div className="flower__light flower__light--5"></div>
                  <div className="flower__light flower__light--6"></div>
                  <div className="flower__light flower__light--7"></div>
                  <div className="flower__light flower__light--8"></div>
                </div>
                <div className="flower__line">
                  <div className="flower__line__leaf flower__line__leaf--1"></div>
                  <div className="flower__line__leaf flower__line__leaf--2"></div>
                  <div className="flower__line__leaf flower__line__leaf--3"></div>
                  <div className="flower__line__leaf flower__line__leaf--4"></div>
                </div>
              </div>
          
              <div className="flower flower--3">
                <div className="flower__leafs flower__leafs--3">
                  <div className="flower__leaf flower__leaf--1"></div>
                  <div className="flower__leaf flower__leaf--2"></div>
                  <div className="flower__leaf flower__leaf--3"></div>
                  <div className="flower__leaf flower__leaf--4"></div>
                  <div className="flower__white-circle"></div>
                  <div className="flower__light flower__light--1"></div>
                  <div className="flower__light flower__light--2"></div>
                  <div className="flower__light flower__light--3"></div>
                  <div className="flower__light flower__light--4"></div>
                  <div className="flower__light flower__light--5"></div>
                  <div className="flower__light flower__light--6"></div>
                  <div className="flower__light flower__light--7"></div>
                  <div className="flower__light flower__light--8"></div>
                </div>
                <div className="flower__line">
                  <div className="flower__line__leaf flower__line__leaf--1"></div>
                  <div className="flower__line__leaf flower__line__leaf--2"></div>
                  <div className="flower__line__leaf flower__line__leaf--3"></div>
                  <div className="flower__line__leaf flower__line__leaf--4"></div>
                </div>
              </div>
          
              <div className="grow-ans" style={{ '--d': '1.2s' }}>
                <div className="flower__g-long">
                  <div className="flower__g-long__top"></div>
                  <div className="flower__g-long__bottom"></div>
                </div>
              </div>
          
              <div className="growing-grass">
                <div className="flower__grass flower__grass--1">
                  <div className="flower__grass--top"></div>
                  <div className="flower__grass--bottom"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                  <div className="flower__grass__overlay"></div>
                </div>
              </div>
          
              <div className="growing-grass">
                <div className="flower__grass flower__grass--2">
                  <div className="flower__grass--top"></div>
                  <div className="flower__grass--bottom"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--1"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--2"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--3"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--4"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--5"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--6"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--7"></div>
                  <div className="flower__grass__leaf flower__grass__leaf--8"></div>
                  <div className="flower__grass__overlay"></div>
                </div>
              </div>
          
              <div className="grow-ans" style={{ '--d': '2.4s' }}>
                <div className="flower__g-right flower__g-right--1">
                  <div className="leaf"></div>
                </div>
              </div>
          
              <div className="grow-ans" style={{ '--d': '2.8s' }}>
                <div className="flower__g-right flower__g-right--2">
                  <div className="leaf"></div>
                </div>
              </div>
          
              <div className="grow-ans" style={{ '--d': '2.8s' }}>
                <div className="flower__g-front">
                  <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                    <div className="flower__g-front__leaf"></div>
                  </div>
                  <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                    <div className="flower__g-front__leaf"></div>
                  </div>
                  <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                    <div className="flower__g-front__leaf"></div>
                  </div>
                  <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                    <div className="flower__g-front__leaf"></div>
                  </div>
                  <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                    <div className="flower__g-front__leaf"></div>
                  </div>
                  <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                    <div className="flower__g-front__leaf"></div>
                  </div>
                  <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                    <div className="flower__g-front__leaf"></div>
                  </div>
                  <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                    <div className="flower__g-front__leaf"></div>
                  </div>
                  <div className="flower__g-front__line"></div>
                </div>
              </div>
          
              <div className="grow-ans" style={{ '--d': '3.2s' }}>
                <div className="flower__g-fr">
                  <div className="leaf"></div>
                  <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
                  <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
                  <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
                  <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
                  <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
                  <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
                  <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
                  <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
                </div>
              </div>
          
              <div className="long-g long-g--0">
                <div className="grow-ans" style={{ '--d': '3s' }}>
                  <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '2.2s' }}>
                  <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3.4s' }}>
                  <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3.6s' }}>
                  <div className="leaf leaf--3"></div>
                </div>
              </div>
          
              <div className="long-g long-g--1">
                <div className="grow-ans" style={{ '--d': '3.6s' }}>
                  <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3.8s' }}>
                  <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '4s' }}>
                  <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '4.2s' }}>
                  <div className="leaf leaf--3"></div>
                </div>
              </div>
          
              <div className="long-g long-g--2">
                <div className="grow-ans" style={{ '--d': '4s' }}>
                  <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '4.2s' }}>
                  <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '4.4s' }}>
                  <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '4.6s' }}>
                  <div className="leaf leaf--3"></div>
                </div>
              </div>
          
              <div className="long-g long-g--3">
                <div className="grow-ans" style={{ '--d': '4s' }}>
                  <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '4.2s' }}>
                  <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3s' }}>
                  <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3.6s' }}>
                  <div className="leaf leaf--3"></div>
                </div>
              </div>
          
              <div className="long-g long-g--4">
                <div className="grow-ans" style={{ '--d': '4s' }}>
                  <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '4.2s' }}>
                  <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3s' }}>
                  <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3.6s' }}>
                  <div className="leaf leaf--3"></div>
                </div>
              </div>
          
              <div className="long-g long-g--5">
                <div className="grow-ans" style={{ '--d': '4s' }}>
                  <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '4.2s' }}>
                  <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3s' }}>
                  <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3.6s' }}>
                  <div className="leaf leaf--3"></div>
                </div>
              </div>
          
              <div className="long-g long-g--6">
                <div className="grow-ans" style={{ '--d': '4.2s' }}>
                  <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '4.4s' }}>
                  <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '4.6s' }}>
                  <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '4.8s' }}>
                  <div className="leaf leaf--3"></div>
                </div>
              </div>
          
              <div className="long-g long-g--7">
                <div className="grow-ans" style={{ '--d': '3s' }}>
                  <div className="leaf leaf--0"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3.2s' }}>
                  <div className="leaf leaf--1"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3.5s' }}>
                  <div className="leaf leaf--2"></div>
                </div>
                <div className="grow-ans" style={{ '--d': '3.6s' }}>
                  <div className="leaf leaf--3"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES (12-Column Bento Box Grid) */}
      <section>
        <h2 className={styles.sectionTitle}>Engine Architecture</h2>
        
        <div className={styles.bentoGrid}>
          
          <div className={`${styles.bentoCard} ${styles.bentoLarge}`}>
            <div className={styles.cardIcon}><ScanLine size={32} /></div>
            <h3 className={styles.cardTitle}>1. The Diagnostic Uploader</h3>
            <p className={styles.cardDesc}>
              Powered by the Python TerraScope Engine. Upload a JPG or PNG of your leaf. The engine processes the imagery, extracts the exact live hex color of the biological damage, and computes the diagnosis, severity, and remediation steps.
            </p>
          </div>

          <div className={`${styles.bentoCard} ${styles.bentoSmall}`}>
            <div className={styles.cardIcon}><Beaker size={32} /></div>
            <h3 className={styles.cardTitle}>2. Results Dashboard</h3>
            <p className={styles.cardDesc}>
              Visually renders the exact biological color marker extracted from the leaf alongside its raw Hex code. Outlines the severity of the issue and provides organic steps to save the plant.
            </p>
          </div>

        </div>
      </section>

      {/* 3. KNOWLEDGE BASE (3-Column Grid) */}
      <section>
        <h2 className={styles.sectionTitle}>Botanical Knowledge Base</h2>
        
        <div className={styles.bentoGrid}>
          
          <div className={`${styles.bentoCard} ${styles.bentoThird}`}>
            <div className={styles.cardIcon}><Leaf size={32} /></div>
            <h3 className={styles.cardTitle}>Pet & Vastu Flora</h3>
            <p className={styles.cardDesc}>
              Curated guides on safe plants for pets and positive energy positioning.
            </p>
          </div>

          <div className={`${styles.bentoCard} ${styles.bentoThird}`}>
            <div className={styles.cardIcon}><ActivitySquare size={32} /></div>
            <h3 className={styles.cardTitle}>Complexity Matrix</h3>
            <p className={styles.cardDesc}>
              Understand the exact time commitment and care required for different species.
            </p>
          </div>

          <div className={`${styles.bentoCard} ${styles.bentoThird}`}>
            <div className={styles.cardIcon}><Sun size={32} /></div>
            <h3 className={styles.cardTitle}>Indoor vs. Outdoor</h3>
            <p className={styles.cardDesc}>
              Navigate sunlight requirements, ambient humidity, and ideal air circulation.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}