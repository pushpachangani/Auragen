// Settings.jsx
import React, { useState } from 'react';
import '../styles/pages/settings.css';

const Settings = () => {
    // ==========================================
    // STATE MANAGEMENT
    // ==========================================

    // AI Configuration State
    const [aiEnabled, setAiEnabled] = useState(true);
    const [autoUiTransform, setAutoUiTransform] = useState(true);
    const [aiTimeout, setAiTimeout] = useState('3 sec');
    const [preferredModel, setPreferredModel] = useState('GPT-4o');
    const [maxComponents, setMaxComponents] = useState(5);

    // Telemetry Settings State
    const [mouseTracking, setMouseTracking] = useState(true);
    const [clickTracking, setClickTracking] = useState(true);
    const [scrollTracking, setScrollTracking] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(true);
    const [idleTime, setIdleTime] = useState(true);
    const [hoverDetection, setHoverDetection] = useState(false);
    const [telemetryFrequency, setTelemetryFrequency] = useState('500 ms');

    // Cognitive Load Thresholds State
    const [cognitiveSlider, setCognitiveSlider] = useState(50); // Represents a collective mapping
    const [triggerAi, setTriggerAi] = useState(70);
    const [warningAt, setWarningAt] = useState(50);
    const [criticalAt, setCriticalAt] = useState(90);

    // Backend Configuration State
    const [backendUrl, setBackendUrl] = useState('https://api.auragen.io/v1');
    const [websocketUrl, setWebsocketUrl] = useState('wss://stream.auragen.io/v1');
    const [apiVersion, setApiVersion] = useState('v1');
    const [connectionTimeout, setConnectionTimeout] = useState(5000);
    const [connectionStatus, setConnectionStatus] = useState(null); // 'testing', 'success', 'error'

    // Dynamic UI Settings State
    const [dynamicRendering, setDynamicRendering] = useState(true);
    const [enableAnimation, setEnableAnimation] = useState(true);
    const [animationSpeed, setAnimationSpeed] = useState(50);
    const [fallbackUi, setFallbackUi] = useState('Wizard');

    // Notifications State
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [systemAlerts, setSystemAlerts] = useState(true);
    const [aiTriggerAlerts, setAiTriggerAlerts] = useState(true);
    const [backendOfflineAlerts, setBackendOfflineAlerts] = useState(false);

    // Appearance State
    const [theme, setTheme] = useState('Light');
    const [primaryColor, setPrimaryColor] = useState('Blue');
    const [fontSize, setFontSize] = useState('Medium');

    // Action Bar States
    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    // ==========================================
    // PLACEHOLDERS / FUTURE INTEGRATIONS
    // ==========================================

    /*
     * FUTURE INTEGRATION: Authentication
     * TODO: Add verification of admin credentials/roles before permitting 
     * write operations on critical threshold variables and backend endpoint URLs.
     */

    /*
     * FUTURE INTEGRATION: Backend API
     * TODO: Implement axios/fetch wrapper to push state changes to the configuration endpoint:
     * PUT /api/v1/settings
     */

    /*
     * FUTURE INTEGRATION: AI Configuration
     * TODO: Sync configured dynamic preferences with downstream LLM orchestration layer.
     * Modifies context windows and prompt templates depending on chosen 'preferredModel'.
     */

    /*
     * FUTURE INTEGRATION: Telemetry Configuration
     * TODO: Connect toggle switches to high-frequency event listeners (mousemove, click, scroll)
     * to start or pause collection engines on the client side.
     */

    /*
     * FUTURE INTEGRATION: WebSocket Connection
     * TODO: Establish long-lived connection with the specified WebSocket URL.
     * Provide fallback reconnection strategies and heartbeat intervals based on connection timeouts.
     */

    /*
     * FUTURE INTEGRATION: Theme Manager
     * TODO: Set up dynamic CSS variable updates at root level (:root) to swap
     * primary colors, fonts, and base scales for custom UI customization.
     */

    // ==========================================
    // HANDLERS
    // ==========================================

    const handleTestConnection = () => {
        setConnectionStatus('testing');
        /*
         * FUTURE INTEGRATION: Backend Connection Test
         * Send a lightweight probe packet (GET /health) to verify availability.
         */
        setTimeout(() => {
            setConnectionStatus('success');
        }, 1200);
    };

    const handleSaveChanges = (e) => {
        e.preventDefault();
        setIsSaving(true);
        /*
         * FUTURE INTEGRATION: Save Settings
         * Collect state payload, parse and validate values, then dispatch action to store/API.
         */
        setTimeout(() => {
            setIsSaving(false);
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        }, 1000);
    };

    const handleCancel = () => {
        // Revert state logic could be added here
        alert("Changes discarded.");
    };

    const handleRestoreDefaults = () => {
        if (window.confirm("Are you sure you want to restore default configurations? This resets all values.")) {
            setAiEnabled(true);
            setAutoUiTransform(true);
            setAiTimeout('3 sec');
            setPreferredModel('GPT-4o');
            setMaxComponents(5);
            setMouseTracking(true);
            setClickTracking(true);
            setScrollTracking(false);
            setTypingSpeed(true);
            setIdleTime(true);
            setHoverDetection(false);
            setTelemetryFrequency('500 ms');
            setCognitiveSlider(50);
            setTriggerAi(70);
            setWarningAt(50);
            setCriticalAt(90);
            setBackendUrl('https://api.auragen.io/v1');
            setWebsocketUrl('wss://stream.auragen.io/v1');
            setApiVersion('v1');
            setConnectionTimeout(5000);
            setDynamicRendering(true);
            setEnableAnimation(true);
            setAnimationSpeed(50);
            setFallbackUi('Wizard');
            setEmailAlerts(true);
            setSystemAlerts(true);
            setAiTriggerAlerts(true);
            setBackendOfflineAlerts(false);
            setTheme('Light');
            setPrimaryColor('Blue');
            setFontSize('Medium');
        }
    };

    const handleDangerAction = (actionType) => {
        /*
         * FUTURE INTEGRATION: Danger Zone Actions
         * Handle destructive tasks such as deleting telemetry, dropping settings database indexes, etc.
         */
        alert(`Danger action initiated: ${actionType}`);
    };

    return (
        <div className="settings-container">
            {/* SECTION 1: Page Header */}
            <header className="settings-header">
                <div className="header-badge">AuraGen Core</div>
                <h1>System Settings</h1>
                <p className="subtitle">Configure AI Behaviour, Telemetry and System Preferences</p>
            </header>

            {saveSuccess && (
                <div className="alert-toast success">
                    Settings saved successfully. Cognitive systems synchronized.
                </div>
            )}

            <form onSubmit={handleSaveChanges} className="settings-grid">

                {/* SECTION 2: AI Configuration */}
                <section className="settings-card">
                    <div className="card-header">
                        <div className="card-icon ai-icon"></div>
                        <h3>AI Configuration</h3>
                    </div>
                    <p className="card-description">Configure the reasoning capabilities and limits of the dynamic UI generation engine.</p>
                    <div className="card-body">

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="aiEnabled">Enable AI Assistance</label>
                                <span className="field-desc">Allow cognitive engines to intervene when thresholds are crossed.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="aiEnabled"
                                    checked={aiEnabled}
                                    onChange={(e) => setAiEnabled(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="autoUiTransform">Auto UI Transformation</label>
                                <span className="field-desc">Automatically refactor layouts without manual approval prompts.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="autoUiTransform"
                                    checked={autoUiTransform}
                                    onChange={(e) => setAutoUiTransform(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="aiTimeout">AI Response Timeout</label>
                            <select
                                id="aiTimeout"
                                value={aiTimeout}
                                onChange={(e) => setAiTimeout(e.target.value)}
                            >
                                <option value="1 sec">1 sec</option>
                                <option value="2 sec">2 sec</option>
                                <option value="3 sec">3 sec</option>
                                <option value="5 sec">5 sec</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="preferredModel">Preferred AI Model</label>
                            <select
                                id="preferredModel"
                                value={preferredModel}
                                onChange={(e) => setPreferredModel(e.target.value)}
                            >
                                <option value="GPT-4">GPT-4</option>
                                <option value="GPT-4o">GPT-4o</option>
                                <option value="GPT-5">GPT-5 (Sandbox)</option>
                                <option value="Local Model">Local Model (Llama-3)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="maxComponents">Maximum Generated Components</label>
                            <span className="field-desc">Hard upper bound on layout elements generated per rendering iteration.</span>
                            <input
                                type="number"
                                id="maxComponents"
                                min="1"
                                max="20"
                                value={maxComponents}
                                onChange={(e) => setMaxComponents(parseInt(e.target.value) || 1)}
                            />
                        </div>

                    </div>
                </section>

                {/* SECTION 3: Telemetry Settings */}
                <section className="settings-card">
                    <div className="card-header">
                        <div className="card-icon telemetry-icon"></div>
                        <h3>Telemetry Settings</h3>
                    </div>
                    <p className="card-description">Capture user interactions to compute real-time cognitive stress metrics.</p>
                    <div className="card-body">

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="mouseTracking">Mouse Tracking</label>
                                <span className="field-desc">Analyze speed, acceleration vectors, and erratic movements.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="mouseTracking"
                                    checked={mouseTracking}
                                    onChange={(e) => setMouseTracking(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="clickTracking">Click Tracking</label>
                                <span className="field-desc">Log mouse clicks, repetitive clicking, and miss-clicks.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="clickTracking"
                                    checked={clickTracking}
                                    onChange={(e) => setClickTracking(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="scrollTracking">Scroll Tracking</label>
                                <span className="field-desc">Track reading pacing and backtracking sequences.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="scrollTracking"
                                    checked={scrollTracking}
                                    onChange={(e) => setScrollTracking(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="typingSpeed">Typing Speed Detection</label>
                                <span className="field-desc">Examine cadence, keystroke jitter, and error-backspace density.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="typingSpeed"
                                    checked={typingSpeed}
                                    onChange={(e) => setTypingSpeed(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="idleTime">Idle Time Detection</label>
                                <span className="field-desc">Monitor complete system inactivity thresholds.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="idleTime"
                                    checked={idleTime}
                                    onChange={(e) => setIdleTime(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="hoverDetection">Hover Detection</label>
                                <span className="field-desc">Determine element hesitation times on complex interfaces.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="hoverDetection"
                                    checked={hoverDetection}
                                    onChange={(e) => setHoverDetection(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="telemetryFrequency">Telemetry Frequency</label>
                            <select
                                id="telemetryFrequency"
                                value={telemetryFrequency}
                                onChange={(e) => setTelemetryFrequency(e.target.value)}
                            >
                                <option value="250 ms">250 ms (Real-time)</option>
                                <option value="500 ms">500 ms (Standard)</option>
                                <option value="1 second">1 second (Balanced)</option>
                                <option value="2 seconds">2 seconds (Low Latency)</option>
                            </select>
                        </div>

                    </div>
                </section>

                {/* SECTION 4: Cognitive Load Thresholds */}
                <section className="settings-card">
                    <div className="card-header">
                        <div className="card-icon cognitive-icon"></div>
                        <h3>Cognitive Load Thresholds</h3>
                    </div>
                    <p className="card-description">Control state engine behaviors based on computed load scales (0 - 100).</p>
                    <div className="card-body">

                        <div className="form-group">
                            <div className="slider-info">
                                <label htmlFor="cognitiveSlider">Current Sensitivity Calibration</label>
                                <span className="badge">{cognitiveSlider} %</span>
                            </div>
                            <input
                                type="range"
                                id="cognitiveSlider"
                                min="0"
                                max="100"
                                value={cognitiveSlider}
                                onChange={(e) => setCognitiveSlider(parseInt(e.target.value))}
                                className="range-slider"
                            />
                            <div className="slider-ticks">
                                <span>Low</span>
                                <span>Medium</span>
                                <span>High</span>
                                <span>Critical</span>
                            </div>
                        </div>

                        <div className="thresholds-grid">
                            <div className="form-group">
                                <label htmlFor="warningAt">Warning at</label>
                                <input
                                    type="number"
                                    id="warningAt"
                                    value={warningAt}
                                    min="0"
                                    max="100"
                                    onChange={(e) => setWarningAt(parseInt(e.target.value) || 0)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="triggerAi">Trigger AI at</label>
                                <input
                                    type="number"
                                    id="triggerAi"
                                    value={triggerAi}
                                    min="0"
                                    max="100"
                                    onChange={(e) => setTriggerAi(parseInt(e.target.value) || 0)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="criticalAt">Critical at</label>
                                <input
                                    type="number"
                                    id="criticalAt"
                                    value={criticalAt}
                                    min="0"
                                    max="100"
                                    onChange={(e) => setCriticalAt(parseInt(e.target.value) || 0)}
                                />
                            </div>
                        </div>

                    </div>
                </section>

                {/* SECTION 5: Backend Configuration */}
                <section className="settings-card">
                    <div className="card-header">
                        <div className="card-icon backend-icon"></div>
                        <h3>Backend Configuration</h3>
                    </div>
                    <p className="card-description">Manage endpoints hosting cognitive heuristics models and execution engines.</p>
                    <div className="card-body">

                        <div className="form-group">
                            <label htmlFor="backendUrl">Backend URL</label>
                            <input
                                type="text"
                                id="backendUrl"
                                value={backendUrl}
                                placeholder="https://api.domain.com"
                                onChange={(e) => setBackendUrl(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="websocketUrl">WebSocket URL</label>
                            <input
                                type="text"
                                id="websocketUrl"
                                value={websocketUrl}
                                placeholder="wss://stream.domain.com"
                                onChange={(e) => setWebsocketUrl(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="apiVersion">API Version</label>
                            <select
                                id="apiVersion"
                                value={apiVersion}
                                onChange={(e) => setApiVersion(e.target.value)}
                            >
                                <option value="v1">v1 (LTS)</option>
                                <option value="v2">v2 (Beta)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="connectionTimeout">Connection Timeout (ms)</label>
                            <input
                                type="number"
                                id="connectionTimeout"
                                value={connectionTimeout}
                                min="500"
                                max="30000"
                                onChange={(e) => setConnectionTimeout(parseInt(e.target.value) || 1000)}
                            />
                        </div>

                        <div className="test-connection-wrapper">
                            <button
                                type="button"
                                className={`btn-secondary ${connectionStatus === 'testing' ? 'loading' : ''}`}
                                onClick={handleTestConnection}
                                disabled={connectionStatus === 'testing'}
                            >
                                {connectionStatus === 'testing' ? 'Testing Connection...' : 'Test Connection'}
                            </button>

                            {connectionStatus === 'success' && (
                                <span className="status-indicator success">
                                    <span className="status-dot"></span> Connection Healthy
                                </span>
                            )}
                            {connectionStatus === 'error' && (
                                <span className="status-indicator error">
                                    <span className="status-dot"></span> Connection Failed
                                </span>
                            )}
                        </div>

                    </div>
                </section>

                {/* SECTION 6: Dynamic UI Settings */}
                <section className="settings-card">
                    <div className="card-header">
                        <div className="card-icon ui-icon"></div>
                        <h3>Dynamic UI Settings</h3>
                    </div>
                    <p className="card-description">Control how structural UI transformations render inside user viewpoints.</p>
                    <div className="card-body">

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="dynamicRendering">Enable Dynamic Rendering</label>
                                <span className="field-desc">Allow real-time components restructuring.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="dynamicRendering"
                                    checked={dynamicRendering}
                                    onChange={(e) => setDynamicRendering(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="enableAnimation">Enable Animation</label>
                                <span className="field-desc">Animate transitions during structural layout re-flow.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="enableAnimation"
                                    checked={enableAnimation}
                                    onChange={(e) => setEnableAnimation(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group">
                            <div className="slider-info">
                                <label htmlFor="animationSpeed">Animation Speed</label>
                                <span className="badge">{animationSpeed}%</span>
                            </div>
                            <input
                                type="range"
                                id="animationSpeed"
                                min="10"
                                max="100"
                                value={animationSpeed}
                                onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
                                className="range-slider"
                                disabled={!enableAnimation}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fallbackUi">Fallback UI Mode</label>
                            <span className="field-desc">UI design state to display if AI generation crashes or reaches timeouts.</span>
                            <select
                                id="fallbackUi"
                                value={fallbackUi}
                                onChange={(e) => setFallbackUi(e.target.value)}
                            >
                                <option value="Simple Form">Simple Form</option>
                                <option value="Wizard">Wizard (Multi-Step)</option>
                                <option value="Classic Form">Classic Form (Unstructured)</option>
                            </select>
                        </div>

                    </div>
                </section>

                {/* SECTION 7: Notifications */}
                <section className="settings-card">
                    <div className="card-header">
                        <div className="card-icon notify-icon"></div>
                        <h3>Notifications</h3>
                    </div>
                    <p className="card-description">Set up rules to notify admins during extreme user frustration spikes.</p>
                    <div className="card-body">

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="emailAlerts">Email Alerts</label>
                                <span className="field-desc">Receive critical telemetry digests daily.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="emailAlerts"
                                    checked={emailAlerts}
                                    onChange={(e) => setEmailAlerts(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="systemAlerts">System Alerts</label>
                                <span className="field-desc">Receive internal logs within the central dashboard.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="systemAlerts"
                                    checked={systemAlerts}
                                    onChange={(e) => setSystemAlerts(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="aiTriggerAlerts">AI Trigger Alerts</label>
                                <span className="field-desc">Notify when cognitive AI alters interface components.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="aiTriggerAlerts"
                                    checked={aiTriggerAlerts}
                                    onChange={(e) => setAiTriggerAlerts(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                        <div className="form-group flex-row">
                            <div className="label-col">
                                <label htmlFor="backendOfflineAlerts">Backend Offline Alerts</label>
                                <span className="field-desc">Dispatch critical paging requests when nodes disconnect.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    id="backendOfflineAlerts"
                                    checked={backendOfflineAlerts}
                                    onChange={(e) => setBackendOfflineAlerts(e.target.checked)}
                                />
                                <span className="slider-switch"></span>
                            </label>
                        </div>

                    </div>
                </section>

                {/* SECTION 8: Appearance */}
                <section className="settings-card">
                    <div className="card-header">
                        <div className="card-icon theme-icon"></div>
                        <h3>Appearance</h3>
                    </div>
                    <p className="card-description">Configure the global look and feel of the executive management deck.</p>
                    <div className="card-body">

                        <div className="form-group">
                            <label htmlFor="theme">Theme Mode</label>
                            <select
                                id="theme"
                                value={theme}
                                onChange={(e) => setTheme(e.target.value)}
                            >
                                <option value="Light">Light Mode</option>
                                <option value="Dark">Dark Mode</option>
                                <option value="System">Match System Preferences</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="primaryColor">Primary Color Palette</label>
                            <select
                                id="primaryColor"
                                value={primaryColor}
                                onChange={(e) => setPrimaryColor(e.target.value)}
                            >
                                <option value="Blue">Blue (Aura-Classic)</option>
                                <option value="Green">Green (Teal-Mint)</option>
                                <option value="Purple">Purple (Nebula-Amethyst)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="fontSize">Font Scale</label>
                            <select
                                id="fontSize"
                                value={fontSize}
                                onChange={(e) => setFontSize(e.target.value)}
                            >
                                <option value="Small">Small (12px - 14px)</option>
                                <option value="Medium">Medium (14px - 16px)</option>
                                <option value="Large">Large (16px - 18px)</option>
                            </select>
                        </div>

                    </div>
                </section>

                {/* SECTION 9: System Information */}
                <section className="settings-card span-full">
                    <div className="card-header">
                        <div className="card-icon info-icon"></div>
                        <h3>System Information</h3>
                    </div>
                    <div className="info-grid">
                        <div className="info-column">
                            <span className="info-label">Application</span>
                            <span className="info-value text-bold">AuraGen Integration Control</span>
                        </div>
                        <div className="info-column">
                            <span className="info-label">Platform Core Version</span>
                            <span className="info-value">v1.0 (LTS Kernel)</span>
                        </div>
                        <div className="info-column">
                            <span className="info-label">Technologies Status</span>
                            <div className="tech-pills">
                                <span className="tech-pill">React 18</span>
                                <span className="tech-pill">FastAPI</span>
                                <span className="tech-pill">LangChain</span>
                                <span className="tech-pill">WebSocket Stack</span>
                                <span className="tech-pill">GPT Orchestration</span>
                            </div>
                        </div>
                        <div className="info-column">
                            <span className="info-label">Deployment Diagnostics</span>
                            <span className="status-indicator success">
                                <span className="status-dot animate-pulse"></span> Node Status: Healthy
                            </span>
                        </div>
                    </div>
                </section>

                {/* SECTION 10: Danger Zone */}
                <section className="settings-card danger-zone span-full">
                    <div className="card-header">
                        <div className="card-icon warning-icon"></div>
                        <h3>Danger Zone</h3>
                    </div>
                    <p className="card-description">Irreversible configurations. Executing these actions may temporarily disconnect active production services.</p>
                    <div className="danger-actions-wrapper">

                        <button
                            type="button"
                            className="btn-danger-outline"
                            onClick={() => handleDangerAction('Reset Settings')}
                        >
                            Reset All Current Settings
                        </button>

                        <button
                            type="button"
                            className="btn-danger-outline"
                            onClick={() => handleDangerAction('Restore Base Config')}
                        >
                            Restore Original Factory Configurations
                        </button>

                        <button
                            type="button"
                            className="btn-danger-solid"
                            onClick={() => handleDangerAction('Purge Telemetry Cache')}
                        >
                            Purge Telemetry Datastore Cache
                        </button>

                    </div>
                </section>

            </form>

            {/* BOTTOM: Sticky Action Bar */}
            <footer className="sticky-action-bar">
                <div className="action-bar-content">
                    <div className="unsaved-notice">
                        <span className="unsaved-dot"></span>
                        <span>You have unsaved configuration changes</span>
                    </div>
                    <div className="action-buttons-group">
                        <button type="button" className="btn-tertiary" onClick={handleRestoreDefaults}>
                            Restore Defaults
                        </button>
                        <button type="button" className="btn-secondary-flat" onClick={handleCancel}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className={`btn-primary ${isSaving ? 'loading' : ''}`}
                            onClick={handleSaveChanges}
                            disabled={isSaving}
                        >
                            {isSaving ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Settings; 