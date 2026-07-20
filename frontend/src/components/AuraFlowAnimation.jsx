import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles, Brain, CheckCircle2, ArrowRight, Activity, Terminal, MessageSquare } from 'lucide-react';
import "../styles/auraFlowAnimation.css";

export default function AuraFlowAnimation() {
    // Pipeline States for the Continuous 6-Second Loop
    const [cognitiveLoad, setCognitiveLoad] = useState(42);
    const [step, setStep] = useState(1); // 1: Confusion, 2: Aura Scanning, 3: Clean UI Generated

    // Ref for 3D perspective bounding box interaction
    const containerRef = useRef(null);

    // Parallax & 3D Tilt Motion Values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Map mouse position to structural rotation matrix degrees
    const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
    const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        // Smoothly snap back to absolute equilibrium center point
        motion.animate(mouseX, 0, { type: "spring", stiffness: 200, damping: 20 });
        motion.animate(mouseY, 0, { type: "spring", stiffness: 200, damping: 20 });
    };

    // Continuous Core Animation Sequencer (5-6 Second Loop)
    useEffect(() => {
        const sequenceTimeline = () => {
            // Stage 1: Reset to standard state
            setStep(1);
            setCognitiveLoad(42);

            // Stage 2: Trigger Friction & Scanning (At 1.5 seconds)
            setTimeout(() => {
                setStep(2);
                // Linearly ramp up cognitive metrics
                let loadValue = 42;
                const loadInterval = setInterval(() => {
                    loadValue += 8;
                    if (loadValue >= 94) {
                        loadValue = 94;
                        clearInterval(loadInterval);
                    }
                    setCognitiveLoad(loadValue);
                }, 100);
            }, 1500);

            // Stage 3: Morph UI & Complete Healing Tree (At 3.5 seconds)
            setTimeout(() => {
                setStep(3);
            }, 3500);
        };

        // Initialize immediately and execute continuous loop precisely every 6 seconds
        sequenceTimeline();
        const mainLoopId = setInterval(sequenceTimeline, 6000);

        return () => clearInterval(mainLoopId);
    }, []);

    return (
        <div className="auragen-dashboard-wrapper">
            <motion.div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="auragen-card-container"
            >
                {/* Micro Ambient Glass Grids */}
                <div className="auragen-internal-grid" />
                <div className="auragen-glow-ambience" />

                {/* Technical Control Header Panel */}
                <div className="auragen-dashboard-header">
                    <div className="auragen-meta-info">
                        <span className="auragen-badge">Live System Architecture</span>
                        <h2 className="auragen-main-heading">How AuraGen Works</h2>
                        <p className="auragen-sub-heading">Detect &rarr; Analyze &rarr; Generate Simplified UI</p>
                    </div>

                    <div className="auragen-telemetry-pill">
                        <Activity className={`auragen-telemetry-icon ${step === 2 ? 'pulse-alert' : ''}`} />
                        <span className="telemetry-label">Load Scope:</span>
                        <span className={`telemetry-value ${step === 2 ? 'alert-red' : ''}`}>{cognitiveLoad}%</span>
                    </div>
                </div>

                {/* Dynamic Global Notification Space */}
                <div className="auragen-notification-node">
                    <AnimatePresence mode="wait">
                        {step === 2 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                className="status-banner banner-scanning"
                            >
                                <Terminal className="banner-icon-spin" />
                                <span>AuraGen scanning execution tree... Mitigating user cognitive overload.</span>
                            </motion.div>
                        )}
                        {step === 3 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                className="status-banner banner-healed"
                            >
                                <CheckCircle2 className="banner-icon-static" />
                                <span>Interface Optimized: Injected active clean wizard UI thread.</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Pure Flex Horizontal Workflow Row */}
                <div className="auragen-workflow-pipeline">

                    {/* STAGE 1: CONFUSION COGNITIVE LAYER */}
                    <div className="pipeline-stage-block">
                        <motion.div
                            style={{ transformStyle: "preserve-3d", translateZ: 30 }}
                            animate={{
                                y: step === 2 ? [0, -4, 4, -4, 0] : [0, -6, 0],
                                rotate: step === 1 ? [0, 2, -2, 0] : 0
                            }}
                            transition={{
                                y: { duration: step === 2 ? 0.15 : 4, repeat: Infinity, ease: "easeInOut" },
                                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className={`visual-orb-module stage-chaos ${step === 1 ? 'orb-active' : step === 2 ? 'orb-overload' : 'orb-faded'}`}
                        >
                            <svg className="chaos-scribble-svg" viewBox="0 0 100 100">
                                <motion.path
                                    d="M20,50 C20,20 80,20 80,50 C80,80 30,30 50,70 C60,90 25,75 35,45 C45,15 75,40 55,60 C40,75 65,85 75,55"
                                    fill="none"
                                    stroke={step === 2 ? "#EF4444" : "#F97316"}
                                    strokeWidth={step === 2 ? "3.5" : "2"}
                                    strokeLinecap="round"
                                    animate={{ strokeDashoffset: [0, -400] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    style={{ strokeDasharray: "120 30" }}
                                />
                            </svg>
                            <Brain className="stage-center-icon icon-orange" />
                        </motion.div>
                        <span className={`stage-text-label label-orange ${step === 1 ? 'glow-lbl' : ''}`}>Confusion</span>
                    </div>

                    {/* DYNAMIC CONNECTOR VECTOR 1 */}
                    <div className="pipeline-arrow-block">
                        <svg className="vector-connector-svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M 0 10 L 100 10" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5 5" />
                            <motion.circle
                                cx="0" cy="10" r="3.5"
                                fill={step === 2 ? "#6366F1" : "#F97316"}
                                animate={{ cx: [0, 100] }}
                                transition={{ duration: step === 2 ? 0.8 : 2, repeat: Infinity, ease: "linear" }}
                            />
                        </svg>
                    </div>

                    {/* STAGE 2: PREMIUM 3D ARTIFICIAL AI CORE */}
                    <div className="pipeline-stage-block">
                        <motion.div
                            style={{ transformStyle: "preserve-3d", translateZ: 50 }}
                            animate={{ scale: step === 2 ? 1.08 : 1 }}
                            className="visual-orb-module core-container-3d"
                        >
                            {/* Glass Sphere Core Depth Layer */}
                            <div className={`quantum-glass-sphere ${step === 2 ? 'core-bloom' : ''}`} />

                            {/* Nested Matrix Rotating Vectors */}
                            <div className="matrix-ring ring-outer" />
                            <div className="matrix-ring ring-inner" />
                            <div className="matrix-ring ring-cross" />

                            <div className={`core-identity-center ${step === 2 ? 'neon-pulse' : ''}`}>
                                <Sparkles className="stage-center-icon icon-cyan" />
                            </div>

                            {/* Orbiting Telemetry Particles */}
                            {step === 2 && (
                                <div className="quantum-particle-field">
                                    <div className="particle-node p-left" />
                                    <div className="particle-node p-right" />
                                </div>
                            )}
                        </motion.div>
                        <span className={`stage-text-label label-indigo ${step === 2 ? 'glow-lbl' : ''}`}>Aura Sensed</span>
                    </div>

                    {/* DYNAMIC CONNECTOR VECTOR 2 */}
                    <div className="pipeline-arrow-block">
                        <svg className="vector-connector-svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M 0 10 L 100 10" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5 5" />
                            <motion.circle
                                cx="0" cy="10" r="3.5"
                                fill={step === 3 ? "#10B981" : "#6366F1"}
                                animate={{ cx: [0, 100] }}
                                transition={{ duration: step === 2 ? 0.6 : 2, repeat: Infinity, ease: "linear" }}
                            />
                        </svg>
                    </div>

                    {/* STAGE 3: SYNTHESIZED SMART CONVERSATIONAL WIZARD */}
                    <div className="pipeline-stage-block structural-min-height">
                        <div className="ui-canvas-viewport">
                            <AnimatePresence mode="wait">
                                {step !== 3 ? (
                                    /* Scattered Chaos Cards State */
                                    <motion.div
                                        key="scattered-view"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 0.7, scale: 1 }}
                                        exit={{ opacity: 0, rotateX: -45, scale: 0.8 }}
                                        className="scattered-cards-layer"
                                    >
                                        <div className="mock-glass-card shadow-card-1">
                                            <div className="skeleton-node line-title" />
                                            <div className="skeleton-node line-body" />
                                        </div>
                                        <div className="mock-glass-card shadow-card-2">
                                            <div className="skeleton-node line-title-short" />
                                            <div className="skeleton-node line-body-full" />
                                        </div>
                                    </motion.div>
                                ) : (
                                    /* Healed Fully Assembled Conversational Wizard UI Context */
                                    <motion.div
                                        key="wizard-view"
                                        initial={{ opacity: 0, y: 30, scale: 0.85, rotateY: 25 }}
                                        animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                                        className="stabilized-wizard-node"
                                        style={{ transformStyle: "preserve-3d", translateZ: 40 }}
                                    >
                                        {/* Chat Message Bubble Layer Component */}
                                        <div className="wizard-chat-bubble">
                                            <MessageSquare className="bubble-chat-icon" />
                                            <span>Simplified fields for your workflow configuration.</span>
                                        </div>

                                        <div className="wizard-body-card">
                                            {/* Progress Bar Component */}
                                            <div className="wizard-progress-track">
                                                <div className="wizard-progress-fill" />
                                            </div>

                                            {/* Input Area Fields */}
                                            <div className="wizard-input-group">
                                                <span className="input-mock-label">Calculated Metrics Scope</span>
                                                <div className="input-mock-field">
                                                    <span className="input-mock-value">$75,000.00</span>
                                                    <div className="input-mock-cursor" />
                                                </div>
                                            </div>

                                            <button className="wizard-submit-action">
                                                Continue
                                                <ArrowRight className="action-arrow-icon" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <span className={`stage-text-label label-teal ${step === 3 ? 'glow-lbl' : ''}`}>Clean UI</span>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}