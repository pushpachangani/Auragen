// Dashboard.jsx
import React, { useState } from 'react';
import "../styles/dashboard.css";
export default function Dashboard() {
    // =========================================================================
    // FUTURE INTEGRATION PLACEHOLDERS (COMMENTS ONLY)
    // =========================================================================
    /*
    // 1. Telemetry Hook
    const { telemetryData, activeField, isTracking } = useFormTelemetry({
      captureInterval: 100, // ms
      trackMouse: true,
      trackScroll: true
    });
  
    // 2. WebSocket Listener
    const socket = useWebSocket('wss://api.auragen.io/v1/stream', {
      onMessage: (event) => handleLiveTelemetryUpdate(JSON.parse(event.data)),
      reconnect: true
    });
  
    // 3. Backend API Service
    const triggerSelfHealingUI = async (cognitivePayload) => {
      const response = await fetch('https://api.auragen.io/v1/generate-ui', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cognitivePayload)
      });
      return await response.json();
    };
  
    // 4. Live Cognitive Score Calculator
    const currentCognitiveScore = useMemo(() => {
      return calculateLoadIndex(telemetryData);
    }, [telemetryData]);
  
    // 5. AI Trigger Condition Evaluator
    useEffect(() => {
      if (currentCognitiveScore > 75) {
        dispatch({ type: 'TRIGGER_AI_ADAPTATION', payload: currentCognitiveScore });
      }
    }, [currentCognitiveScore]);
  
    // 6. Dynamic Component Renderer
    const renderDynamicReactComponent = (rawAST) => {
      return <Suspense fallback={<Loader />}>{evaluateAST(rawAST)}</Suspense>;
    };
    */

    return (
        <div className="auragen-dashboard">

            {/* SECTION 1: HERO SECTION */}
            <section className="auragen-hero">
                <div className="hero-content">
                    <div className="badge">AI-Powered Orchestrator</div>
                    <h1>AuraGen Control Center</h1>
                    <p className="subtitle">
                        Real-time Adaptive Financial Application powered by AI
                    </p>
                    <div className="hero-meta">
                        <span className="meta-tag">Adaptive Layout Generation: Active</span>
                        <span className="meta-tag">Cognitive Engine v1.0.4</span>
                    </div>
                </div>
                <div className="hero-illustration-container">
                    <div className="illustration-card">
                        <div className="illustration-visual">
                            <div className="pulse-circle"></div>
                            <div className="pulse-circle delay-1"></div>
                            <div className="pulse-circle delay-2"></div>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-4.43c.8-.398 1.15-1.353.774-2.158L14.75 7.004M9.813 15.904L4.117 12.56a1.5 1.5 0 01-.065-2.518l5.76-3.037a1.5 1.5 0 011.537-.01l5.76 3.037a1.5 1.5 0 01-.065 2.518l-5.76 3.037a1.5 1.5 0 01-1.537.01z" />
                            </svg>
                        </div>
                        <div className="illustration-text">
                            <h4>Future AI Status</h4>
                            <p>Cognitive load triggers are loaded and ready in the user runtime.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: OVERVIEW CARDS */}
            <section className="auragen-section">
                <div className="section-header">
                    <h2>Application Performance Metrics</h2>
                    <span className="section-subtitle">Aggregated system interactions over the last 24 hours</span>
                </div>
                <div className="overview-grid">

                    <div className="overview-card">
                        <div className="card-top">
                            <div className="icon-wrapper blue-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 018.625 21c-2.23 0-4.3-.64-6.056-1.746A4.125 4.125 0 016 16.125c1.23 0 2.378.337 3.358.927M15 19.128a11.356 11.356 0 01-6.375 1.872c-2.23 0-4.3-.64-6.056-1.746A4.125 4.125 0 016 16.125c1.23 0 2.378.337 3.358.927M9 10.5a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <span className="trend positive">↑ 12%</span>
                        </div>
                        <div className="card-value">245</div>
                        <div className="card-label">Active Users</div>
                        <p className="card-desc">Currently interacting with live forms.</p>
                    </div>

                    <div className="overview-card">
                        <div className="card-top">
                            <div className="icon-wrapper green-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V6.125C3 5.504 3.504 5 4.125 5H8.25m4.5 2.5v12" />
                                </svg>
                            </div>
                            <span className="trend positive">↑ 8%</span>
                        </div>
                        <div className="card-value">132</div>
                        <div className="card-label">Applications Started</div>
                        <p className="card-desc">New form sessions initiated today.</p>
                    </div>

                    <div className="overview-card">
                        <div className="card-top">
                            <div className="icon-wrapper teal-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="trend positive">↑ 14%</span>
                        </div>
                        <div className="card-value">94</div>
                        <div className="card-label">Applications Completed</div>
                        <p className="card-desc">Users who fully finalized the form.</p>
                    </div>

                    <div className="overview-card">
                        <div className="card-top">
                            <div className="icon-wrapper purple-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="trend negative">↓ 3 min</span>
                        </div>
                        <div className="card-value">14 min</div>
                        <div className="card-label">Average Completion Time</div>
                        <p className="card-desc">Mean timeline across standard formats.</p>
                    </div>

                    <div className="overview-card">
                        <div className="card-top">
                            <div className="icon-wrapper orange-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-4.43c.8-.398 1.15-1.353.774-2.158L14.75 7.004M9.813 15.904L4.117 12.56a1.5 1.5 0 01-.065-2.518l5.76-3.037a1.5 1.5 0 011.537-.01l5.76 3.037a1.5 1.5 0 01-.065 2.518l-5.76 3.037a1.5 1.5 0 01-1.537.01z" />
                                </svg>
                            </div>
                            <span className="trend warning">Active</span>
                        </div>
                        <div className="card-value">18</div>
                        <div className="card-label">AI Interventions Today</div>
                        <p className="card-desc">Forms simplified dynamically via load score.</p>
                    </div>

                    <div className="overview-card">
                        <div className="card-top">
                            <div className="icon-wrapper green-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                </svg>
                            </div>
                            <span className="trend positive">↑ 2.1%</span>
                        </div>
                        <div className="card-value">91%</div>
                        <div className="card-label">Overall Success Rate</div>
                        <p className="card-desc">Ratio of completed sessions to starts.</p>
                    </div>

                </div>
            </section>

            {/* SECTION 3: LIVE SYSTEM STATUS */}
            <section className="auragen-section">
                <div className="status-banner">
                    <div className="status-title-group">
                        <h3>System Orchestrator Core Diagnostics</h3>
                        <p>Real-time node and microservice status signals</p>
                    </div>
                    <div className="status-grid">
                        <div className="status-item">
                            <span className="status-dot green"></span>
                            <div className="status-meta">
                                <span className="status-name">Telemetry Engine</span>
                                <span className="status-state">Connected</span>
                            </div>
                        </div>
                        <div className="status-item">
                            <span className="status-dot green"></span>
                            <div className="status-meta">
                                <span className="status-name">Backend API</span>
                                <span className="status-state">Running</span>
                            </div>
                        </div>
                        <div className="status-item">
                            <span className="status-dot green"></span>
                            <div className="status-meta">
                                <span className="status-name">WebSocket</span>
                                <span className="status-state">Connected</span>
                            </div>
                        </div>
                        <div className="status-item">
                            <span className="status-dot green"></span>
                            <div className="status-meta">
                                <span className="status-name">AI Service</span>
                                <span className="status-state">Ready</span>
                            </div>
                        </div>
                        <div className="status-item">
                            <span className="status-dot yellow"></span>
                            <div className="status-meta">
                                <span className="status-name">Dynamic Renderer</span>
                                <span className="status-state">Idle</span>
                            </div>
                        </div>
                        <div className="status-item">
                            <span className="status-dot green"></span>
                            <div className="status-meta">
                                <span className="status-name">Code Generation Engine</span>
                                <span className="status-state">Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: WORKFLOW */}
            <section className="auragen-section">
                <div className="section-header">
                    <h2>Adaptive Self-Healing Lifecycle</h2>
                    <span className="section-subtitle">AuraGen reactive loop from form interaction to dynamic UI swap</span>
                </div>
                <div className="workflow-wrapper">
                    <div className="workflow-scroller">
                        <div className="workflow-track">

                            <div className="workflow-node">
                                <div className="node-number">01</div>
                                <h4>User opens form</h4>
                                <p>Standard heavy financial layout initialized.</p>
                            </div>

                            <div className="workflow-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>

                            <div className="workflow-node active">
                                <div className="node-number">02</div>
                                <h4>Telemetry Collection</h4>
                                <p>Continuous event streams record mouse, focus, & keys.</p>
                            </div>

                            <div className="workflow-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>

                            <div className="workflow-node">
                                <div className="node-number">03</div>
                                <h4>Cognitive Score Calculation</h4>
                                <p>Real-time behavioral analysis on friction and hesitation.</p>
                            </div>

                            <div className="workflow-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>

                            <div className="workflow-node">
                                <div className="node-number">04</div>
                                <h4>AI Trigger</h4>
                                <p>Telemetry flags threshold breach (Score &gt; 75).</p>
                            </div>

                            <div className="workflow-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>

                            <div className="workflow-node">
                                <div className="node-number">05</div>
                                <h4>Generate React Component</h4>
                                <p>AI tailors simplified interface specifically for task.</p>
                            </div>

                            <div className="workflow-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>

                            <div className="workflow-node">
                                <div className="node-number">06</div>
                                <h4>Security Validation</h4>
                                <p>AST analysis ensures generated JS is perfectly safe.</p>
                            </div>

                            <div className="workflow-arrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>

                            <div className="workflow-node">
                                <div className="node-number">07</div>
                                <h4>Dynamic UI Replacement</h4>
                                <p>Self-heals form. Context and inputs preserved.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* MULTI-COLUMN CONTAINER (SECTIONS 5, 6, 7) */}
            <div className="grid-split-3-2">

                {/* LEFT COMPACTS: AI Status & Actions */}
                <div className="split-column">

                    {/* SECTION 5: CURRENT AI STATUS */}
                    <div className="dashboard-card status-box-card">
                        <div className="card-header-inner">
                            <h3>Current AI Monitoring Engine</h3>
                            <span className="live-pill animate-pulse">Live</span>
                        </div>

                        <div className="ai-state-body">
                            <div className="state-info">
                                <div className="state-row">
                                    <span className="state-lbl">Current State:</span>
                                    <span className="state-val text-blue">Monitoring User Behaviour</span>
                                </div>
                                <div className="state-row">
                                    <span className="state-lbl">Engine Status:</span>
                                    <span className="state-val text-green">Waiting for High Cognitive Load</span>
                                </div>
                            </div>

                            <div className="bar-wrapper">
                                <div className="bar-label">Live User Friction Level</div>
                                <div className="progress-track">
                                    <div className="progress-fill" style={{ width: '28%' }}></div>
                                </div>
                                <div className="progress-meta">
                                    <span>Normal Load</span>
                                    <span>28 / 100</span>
                                </div>
                            </div>

                            <div className="ai-message-notice">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>No intervention required. Current user exhibits low hesitation metrics.</span>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 6: QUICK ACTIONS */}
                    <div className="dashboard-card">
                        <h3 className="card-heading-compact">System Quick Actions</h3>
                        <div className="quick-actions-grid">
                            <button className="btn btn-primary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                                Open Financial Form
                            </button>
                            <button className="btn btn-secondary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                </svg>
                                View Analytics
                            </button>
                            <button className="btn btn-secondary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                Export Report
                            </button>
                            <button className="btn btn-secondary">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.552 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                System Settings
                            </button>
                        </div>
                    </div>

                </div>

                {/* RIGHT COMPACTS: Today's Timeline Activity */}
                <div className="split-column">

                    {/* SECTION 7: TODAY'S ACTIVITY */}
                    <div className="dashboard-card timeline-card">
                        <h3 className="card-heading-compact">Real-time Telemetry Stream</h3>
                        <div className="timeline-container">

                            <div className="timeline-item">
                                <div className="timeline-badge blue-bullet"></div>
                                <div className="timeline-content">
                                    <div className="timeline-time">09:12 AM</div>
                                    <h4 className="timeline-title">User Session Started</h4>
                                    <p className="timeline-desc">Session #usr_98831 connection verified on WebSocket.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-badge green-bullet"></div>
                                <div className="timeline-content">
                                    <div className="timeline-time">09:15 AM</div>
                                    <h4 className="timeline-title">Identity Verification Completed</h4>
                                    <p className="timeline-desc">Personal schema fields fully initialized and populated.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-badge orange-bullet"></div>
                                <div className="timeline-content">
                                    <div className="timeline-time">09:18 AM</div>
                                    <h4 className="timeline-title">High Hesitation Detected</h4>
                                    <p className="timeline-desc">Cursor hesitation index breached 7.2s on "Annual Financial Statement".</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-badge purple-bullet"></div>
                                <div className="timeline-content">
                                    <div className="timeline-time">09:19 AM</div>
                                    <h4 className="timeline-title">AI Monitoring Enabled</h4>
                                    <p className="timeline-desc">Cognitive scoring stream activated for dynamic template generation.</p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-badge gray-bullet"></div>
                                <div className="timeline-content">
                                    <div className="timeline-time">09:25 AM</div>
                                    <h4 className="timeline-title">Application Saved</h4>
                                    <p className="timeline-desc">Telemetry buffer flushed to PostgreSQL. No validation mismatches.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* SECTION 8: FUTURE AI WORKSPACE */}
            <section className="auragen-section">
                <div className="dashboard-card workspace-card">
                    <div className="workspace-header">
                        <div className="workspace-title-group">
                            <span className="workspace-tag">Interactive Environment</span>
                            <h2>Adaptive Workspace Sandbox</h2>
                        </div>
                        <div className="workspace-meta">
                            <span className="badge-outline">Ready to Render</span>
                        </div>
                    </div>

                    <div className="placeholder-container">
                        <div className="placeholder-graphics">
                            <svg className="code-svg" viewBox="0 0 100 100" fill="none">
                                <rect x="10" y="15" width="80" height="70" rx="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                                <path d="M25 35h50M25 50h30M25 65h40" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <p className="placeholder-text-primary">
                            Generative Application Sandbox
                        </p>
                        <p className="placeholder-text-secondary">
                            When user frustration levels spike, the AI-generated React component will construct, validate, and hot-reload inside this secure render frame.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 9: ARCHITECTURE DIAGRAM */}
            <section className="auragen-section">
                <div className="section-header">
                    <h2>Infrastructure Blueprint</h2>
                    <span className="section-subtitle">Information flow of telemetric evaluation and self-healing UI delivery</span>
                </div>
                <div className="blueprint-wrapper">
                    <div className="blueprint-grid">

                        <div className="blueprint-node">
                            <div className="bp-card-tag font-mono">React Client</div>
                            <h5>Financial Form</h5>
                            <p>User interactions and form elements</p>
                        </div>

                        <div className="blueprint-connector">
                            <span className="arrow-line"></span>
                        </div>

                        <div className="blueprint-node highlighted">
                            <div className="bp-card-tag font-mono">Web SDK</div>
                            <h5>Telemetry Engine</h5>
                            <p>Event hook capture matrices</p>
                        </div>

                        <div className="blueprint-connector">
                            <span className="arrow-line"></span>
                        </div>

                        <div className="blueprint-node">
                            <div className="bp-card-tag font-mono">Communication</div>
                            <h5>WebSocket Server</h5>
                            <p>State streams push packet events</p>
                        </div>

                        <div className="blueprint-connector">
                            <span className="arrow-line"></span>
                        </div>

                        <div className="blueprint-node">
                            <div className="bp-card-tag font-mono">API Server</div>
                            <h5>FastAPI Backend</h5>
                            <p>Cognitive metrics calculation layers</p>
                        </div>

                        <div className="blueprint-connector">
                            <span className="arrow-line"></span>
                        </div>

                        <div className="blueprint-node highlighted">
                            <div className="bp-card-tag font-mono">Framework</div>
                            <h5>LangChain Core</h5>
                            <p>Dynamic template configuration steps</p>
                        </div>

                        <div className="blueprint-connector">
                            <span className="arrow-line"></span>
                        </div>

                        <div className="blueprint-node">
                            <div className="bp-card-tag font-mono">Model</div>
                            <h5>GPT Instance</h5>
                            <p>Contextually generates React JSX code</p>
                        </div>

                        <div className="blueprint-connector">
                            <span className="arrow-line"></span>
                        </div>

                        <div className="blueprint-node">
                            <div className="bp-card-tag font-mono">Parser</div>
                            <h5>AST Validation</h5>
                            <p>Scans generated code for sanitization</p>
                        </div>

                        <div className="blueprint-connector">
                            <span className="arrow-line"></span>
                        </div>

                        <div className="blueprint-node highlighted">
                            <div className="bp-card-tag font-mono">Dynamic Frame</div>
                            <h5>React Component</h5>
                            <p>Secure custom form element instance</p>
                        </div>

                        <div className="blueprint-connector">
                            <span className="arrow-line"></span>
                        </div>

                        <div className="blueprint-node">
                            <div className="bp-card-tag font-mono">Runtime</div>
                            <h5>Dynamic Renderer</h5>
                            <p>Hot-swaps target container on DOM</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 10: RECENT NOTIFICATIONS */}
            <section className="auragen-section">
                <div className="dashboard-card notifications-card">
                    <div className="notification-title">
                        <h3>Recent Orchestration Events</h3>
                        <span className="log-count">5 Active Logs</span>
                    </div>
                    <div className="notification-list">

                        <div className="notification-row">
                            <div className="notif-dot green"></div>
                            <div className="notif-content">
                                <span className="notif-time">Just now</span>
                                <span className="notif-text">Application submitted successfully by user #usr_98831</span>
                            </div>
                        </div>

                        <div className="notification-row">
                            <div className="notif-dot green"></div>
                            <div className="notif-content">
                                <span className="notif-time">4 mins ago</span>
                                <span className="notif-text">Telemetry socket connection authenticated for session #usr_00912</span>
                            </div>
                        </div>

                        <div className="notification-row">
                            <div className="notif-dot green"></div>
                            <div className="notif-content">
                                <span className="notif-time">12 mins ago</span>
                                <span className="notif-text">FastAPI schema parser is fully active and synchronized</span>
                            </div>
                        </div>

                        <div className="notification-row">
                            <div className="notif-dot green"></div>
                            <div className="notif-content">
                                <span className="notif-time">22 mins ago</span>
                                <span className="notif-text">AI agent system health diagnostics report: operational</span>
                            </div>
                        </div>

                        <div className="notification-row">
                            <div className="notif-dot blue"></div>
                            <div className="notif-content">
                                <span className="notif-time">45 mins ago</span>
                                <span className="notif-text">Dynamic code renderer interface updated to schema version 1.2</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION 11: FOOTER */}
            <footer className="auragen-footer">
                <div className="footer-left">
                    <h4>AuraGen</h4>
                    <p>Self-Healing Generative UI via Cognitive Load</p>
                </div>
                <div className="footer-right">
                    <p>Powered by React • FastAPI • LangChain • WebSockets • GPT</p>
                    <span className="footer-copy">© 2026 AuraGen Technologies. All rights reserved.</span>
                </div>
            </footer>

        </div>
    );
}  