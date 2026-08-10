import { useState, useEffect, useRef } from 'react';
import { ArrowRight, LoaderCircle, Sparkles, Wifi, WifiOff, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { Card } from '../components/UI';
import useCognitiveTelemetry from '../hooks/useCognitiveTelemetry';
import useAuraSocket from '../hooks/useAuraSocket';
import { scoreLabel } from '../utils/cognitiveScore';

/* The 10 original dense-form fields */
const originalFields = [
  'Full legal name',
  'Employee ID',
  'Tax identification number',
  'Annual gross income',
  'Income source',
  'Residential address',
  'Employment type',
  'Department',
  'Bank account number',
  'Supporting document reference',
];

/* Create a camelCase key from a field label */
function fieldKey(label) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/(^_|_$)/g, '');
}

export default function DynamicUI() {
  /* ── unified form state shared between dense form and wizard ── */
  const [formData, setFormData] = useState(() => {
    const init = {};
    originalFields.forEach((f) => (init[fieldKey(f)] = ''));
    return init;
  });

  const handleFieldChange = (label, value) => {
    setFormData((prev) => ({ ...prev, [fieldKey(label)]: value }));
  };

  /* ── track which field the user last interacted with ── */
  const [activeField, setActiveField] = useState('');

  /* ── adaptation / wizard state ── */
  const [adapted, setAdapted] = useState(false);
  const [schema, setSchema] = useState(null);
  const [step, setStep] = useState(1);
  const [result, setResult] = useState(null);
  const [adaptationCompleted, setAdaptationCompleted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ── hooks ── */
  const metrics = useCognitiveTelemetry();
  const {
    connected,
    lastScore,
    adaptation,
    adaptationStarted,
    sendTelemetry,
    sendReset,
  } = useAuraSocket();

  /* ── stream telemetry to backend every 500ms ── */
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      sendTelemetry(
        {
          cursor_speed: metrics.velocity,
          hesitation_time: metrics.hesitation,
          rage_clicks: metrics.rage,
          click_errors: metrics.clickErrors,
          typing_speed: metrics.typing,
        },
        {
          current_field: activeField,
          entered_data: formData,
        },
      );
    }, 500);
    return () => clearInterval(intervalRef.current);
  }, [metrics, activeField, formData, sendTelemetry]);

  /* ── when backend sends an adaptation, apply it ── */
  useEffect(() => {
    if (adaptation && adaptation.schema && !adaptationCompleted) {
      setSchema(adaptation.schema);
      setResult(adaptation);
      setAdapted(true);
      setStep(1);
    }
  }, [adaptation, adaptationCompleted]);

  /* ── manual restore ── */
  function restoreOriginal() {
    setAdaptationCompleted(false);
    setAdapted(false);
    setSchema(null);
    setResult(null);
    setStep(1);
    sendReset();
  }

  /* ── complete the wizard ── */
  function completeWizard() {
    setAdaptationCompleted(true);
    setAdapted(false);
    setSchema(null);
    setResult(null);
    setStep(1);
  }

  /* ── derive display score ── */
  const displayScore = lastScore ? lastScore.score : metrics.score;
  const displayLabel = lastScore ? lastScore.risk_level : scoreLabel(metrics.score);

  /* ── wizard steps from schema ── */
  const wizardSteps = schema ? schema.steps : [];
  const currentStep = wizardSteps.find((s) => s.step === step) || null;
  const totalSteps = wizardSteps.length || 3;

  return (
    <Layout>
      {/* ── header ── */}
      <div className="dynamic-head">
        <div>
          <span className="section-kicker">Adaptive workspace</span>
          <h1>Watch a complex form heal itself.</h1>

          {/* live telemetry bar */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginTop: 6 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                fontSize: 13,
                opacity: 0.7,
              }}
            >
              {connected ? <Wifi size={14} /> : <WifiOff size={14} />}
              {connected ? 'Connected' : 'Offline'}
            </span>
            <span style={{ fontSize: 13, opacity: 0.7 }}>
              Score: <strong>{displayScore}</strong> ({displayLabel})
            </span>
            <span style={{ fontSize: 13, opacity: 0.7 }}>Velocity: {metrics.velocity}</span>
            <span style={{ fontSize: 13, opacity: 0.7 }}>Rage: {metrics.rage}</span>
          </div>

          {result && (
            <p className="adaptation-note">
              {result.reducedFields} fields simplified · {result.confidence}% AI confidence
            </p>
          )}
        </div>

        {adapted ? (
          <button className="btn" onClick={restoreOriginal}>
            <RotateCcw size={17} /> Restore original
          </button>
        ) : adaptationStarted ? (
          <button className="btn" disabled>
            <LoaderCircle className="spin" size={17} /> Generating interface…
          </button>
        ) : (
          <span style={{ fontSize: 13, opacity: 0.5 }}>
            <Sparkles size={14} style={{ verticalAlign: -2 }} /> AI triggers automatically on high friction
          </span>
        )}
      </div>

      {/* ── morph area ── */}
      <div className="morph-wrap">
        {/* ── BEFORE card ── */}
        <AnimatePresence mode="wait">
          {!adapted && (
            <motion.div
              key="dense"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              style={{ flex: 1 }}
            >
              <Card title="Complex form" sub="Traditional dense interface">
                {submitted ? (
                  <div className="wizard" style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <Sparkles size={48} style={{ color: 'var(--accent)', marginBottom: 16 }} />
                    <h2>Application Submitted</h2>
                    <p>Thank you for submitting your details. Your application has been successfully received.</p>
                    <button className="btn" onClick={() => setSubmitted(false)} style={{ marginTop: 24 }}>
                      Submit another
                    </button>
                  </div>
                ) : (
                  <form className="complex-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    {originalFields.map((field) => (
                      <label key={field}>
                        {field}
                        <input
                          placeholder={`Enter ${field.toLowerCase()}`}
                          value={formData[fieldKey(field)]}
                          onChange={(e) => handleFieldChange(field, e.target.value)}
                          onFocus={() => setActiveField(field)}
                        />
                      </label>
                    ))}
                    <button type="submit">Submit application</button>
                  </form>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── arrow ── */}
        {!adapted && (
          <div className={`morph-arrow ${adaptationStarted ? 'active' : ''}`}>
            {adaptationStarted ? <LoaderCircle className="spin" /> : <ArrowRight />}
          </div>
        )}

        {/* ── AFTER card — schema-driven wizard ── */}
        <AnimatePresence mode="wait">
          {adapted && schema && (
            <motion.div
              key="wizard"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4 }}
              style={{ flex: 1, maxWidth: 560, margin: '0 auto' }}
            >
              <Card title="AuraGen guided experience" sub="AI-simplified wizard" className="adapted">
                <div className="wizard">
                  <span>
                    Step {step} of {totalSteps}
                  </span>
                  <div className="progress">
                    <i style={{ width: `${(step / totalSteps) * 100}%` }} />
                  </div>

                  {currentStep && (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h2>{currentStep.title}</h2>
                      <p>{currentStep.description}</p>

                      {currentStep.fields.map((field) => (
                        <label key={field}>
                          {field}
                          <input
                            placeholder={`Enter ${field.toLowerCase()}`}
                            value={formData[fieldKey(field)] || ''}
                            onChange={(e) => handleFieldChange(field, e.target.value)}
                          />
                        </label>
                      ))}
                    </motion.div>
                  )}

                  <div className="wizard-actions">
                    <button disabled={step === 1} onClick={() => setStep((v) => v - 1)}>
                      Back
                    </button>
                    <button
                      className="btn"
                      onClick={() => {
                        if (step === totalSteps) {
                          completeWizard();
                        } else {
                          setStep((v) => v + 1);
                        }
                      }}
                    >
                      {step === totalSteps ? 'Complete' : 'Continue'}
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* placeholder when waiting for adaptation and dense form still showing */}
        {!adapted && (
          <Card
            title="After"
            sub="AuraGen guided experience"
            className="muted"
          >
            <div className="wizard" style={{ opacity: 0.35, pointerEvents: 'none' }}>
              <span>Waiting for AI adaptation…</span>
              <div className="progress">
                <i style={{ width: 0 }} />
              </div>
              <h2>Interact with the form to trigger adaptation</h2>
              <p>Move your mouse, hesitate, click repeatedly — AuraGen will detect your friction.</p>
            </div>
          </Card>
        )}
      </div>
    </Layout>
  );
}
