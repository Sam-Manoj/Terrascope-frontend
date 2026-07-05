"use client";

import { useState, useRef } from "react";
import { 
  UploadCloud, ScanLine, Activity, CheckCircle2 
} from "lucide-react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);

  // Drag & Drop Handlers
  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length) handleProcess(files[0]);
  };

  // Click Handler
  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files.length) handleProcess(files[0]);
  };

  // 🚀 LIVE PYTHON ENGINE INTEGRATION
  const handleProcess = async (file) => {
    setIsProcessing(true);
    setResult(null);

    const formData = new FormData();
    // FIX 2: Changed "image" to "file" to match FastAPI's UploadFile parameter
    formData.append("file", file); 

    // FIX: Added the specific route path that FastAPI is listening on
const response = await fetch("https://terrascope-engine.onrender.com/api/v1/diagnose", {
  method: "POST",
  body: formData,
});

      if (!response.ok) {
        throw new Error(`Engine rejected the scan. Status: ${response.status}`);
      }

      const diagnosticData = await response.json();
      
      // FIX 3: Extract the 'results' object from Python's response dictionary
      const backendResults = diagnosticData.results;
      
      setResult({
        diagnosis: backendResults.diagnosis || "Unknown Anomaly",
        severity: backendResults.severity || "Medium",
        confidence: backendResults.confidence || "N/A",
        hexExtracted: backendResults.live_extracted_hex || backendResults.hexExtracted || "#808080",
        remediations: backendResults.organic_remediation || backendResults.remediations || ["Consult botanical guide."]
      });

    } catch (error) {
      console.error("Diagnostic engine error:", error);
      alert("Failed to connect to the TerraScope engine. Is the Python server running and CORS enabled?");
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div className={styles.dashboardWrapper}>
      
      <div className={styles.header}>
        <h1 className={styles.title}>Diagnostic <span className={styles.highlight}>Terminal</span></h1>
        <p className={styles.subtitle}>Upload botanical imagery for algorithmic chromatic analysis.</p>
      </div>

      <div className={styles.bentoGrid}>
        
        {/* 1. THE DIAGNOSTIC UPLOADER */}
        <div className={`${styles.card} ${styles.span12}`}>
          <div 
            className={`${styles.dropzone} ${isDragging ? styles.dropzoneActive : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => !isProcessing && fileInputRef.current?.click()}
            style={{ 
              opacity: isProcessing ? 0.7 : 1, 
              pointerEvents: isProcessing ? 'none' : 'auto' 
            }}
          >
            <input 
              type="file" 
              className={styles.hiddenInput} 
              ref={fileInputRef} 
              onChange={handleFileSelect} 
              accept="image/jpeg, image/png, image/webp"
              style={{ display: 'none' }}
            />
            {isProcessing ? (
              <>
                <ScanLine size={48} className={styles.uploadIcon} style={{ animation: 'pulse 1.5s infinite' }} />
                <h3>Engine is analyzing chromatic markers...</h3>
              </>
            ) : (
              <>
                <UploadCloud size={48} className={styles.uploadIcon} />
                <h3>Drag & Drop Leaf Imagery Here</h3>
                <p style={{ color: "var(--text-muted)" }}>Supports high-resolution JPG & PNG</p>
                <button className={styles.uploadBtn}>Browse Files</button>
              </>
            )}
          </div>
        </div>

        {/* 2. RESULTS DASHBOARD (Only visible after scan) */}
        {result && (
          <>
            {/* The Hero Card */}
            <div className={`${styles.card} ${styles.span8}`}>
              <div className={styles.resultHeader}>
                <Activity size={24} />
                <span style={{ fontWeight: 600, letterSpacing: '1px' }}>SCAN COMPLETE</span>
              </div>
              <h2 className={styles.resultTitle}>{result.diagnosis}</h2>
              <div>
                <span className={`${styles.severityBadge} ${result.severity === 'High' ? styles.severityHigh : styles.severityMedium}`}>
                  Severity: {result.severity}
                </span>
                <span style={{ marginLeft: '16px', color: 'var(--text-muted)' }}>Confidence: {result.confidence}</span>
              </div>
              
              <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
                <h4 style={{ marginBottom: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.875rem' }}>Algorithmic Remediation</h4>
                <ul className={styles.remediationList}>
                  {result.remediations.map((step, idx) => (
                    <li key={idx} className={styles.remediationItem}>
                      <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The Hex Analysis Card */}
            <div className={`${styles.card} ${styles.span4}`}>
              <div className={styles.resultHeader}>
                <ScanLine size={24} />
                <span style={{ fontWeight: 600, letterSpacing: '1px' }}>CHROMATIC MARKER</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                The engine isolated the following biological color profile indicating localized cellular breakdown.
              </p>
              
              <div className={styles.hexContainer}>
                <div 
                  className={styles.colorSwatch} 
                  style={{ backgroundColor: result.hexExtracted }}
                />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Extracted Hex</div>
                  <div className={styles.hexCode}>{result.hexExtracted}</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
