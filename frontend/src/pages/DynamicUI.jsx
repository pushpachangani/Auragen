import { useState } from 'react';
import { ArrowRight, LoaderCircle, Sparkles } from 'lucide-react';
import Layout from '../components/Layout';
import { Card } from '../components/UI';
import { generateAdaptiveInterface } from '../services/adaptationEngine';

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

export default function DynamicUI() {
  const [adapted, setAdapted] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [step, setStep] = useState(1);
  const [result, setResult] = useState(null);

  async function toggleAdaptation() {
    if (adapted) {
      setAdapted(false);
      setResult(null);
      setStep(1);
      return;
    }

    setGenerating(true);
    const response = await generateAdaptiveInterface({ score: 78 });
    setResult(response);
    setAdapted(true);
    setGenerating(false);
  }

  return (
    <Layout>
      <div className="dynamic-head">
        <div>
          <span className="section-kicker">Adaptive workspace</span>
          <h1>Watch a complex form heal itself.</h1>
          {result && (
            <p className="adaptation-note">
              {result.reducedFields} fields removed · {result.confidence}% AI confidence
            </p>
          )}
        </div>
        <button className="btn" onClick={toggleAdaptation} disabled={generating}>
          {generating ? <LoaderCircle className="spin" size={17} /> : <Sparkles size={17} />}
          {generating ? 'Generating interface...' : adapted ? 'Restore original' : 'Trigger AI adaptation'}
        </button>
      </div>

      <div className="morph-wrap">
        <Card title="Before" sub="Traditional dense interface">
          <form className="complex-form" onSubmit={(event) => event.preventDefault()}>
            {originalFields.map((field) => (
              <label key={field}>
                {field}
                <input placeholder={`Enter ${field.toLowerCase()}`} />
              </label>
            ))}
            <button type="submit">Submit application</button>
          </form>
        </Card>

        <div className={`morph-arrow ${adapted ? 'active' : ''}`}><ArrowRight /></div>

        <Card
          title="After"
          sub="AuraGen guided experience"
          className={adapted ? 'adapted' : 'muted'}
        >
          <div className="wizard">
            <span>Step {step} of 3</span>
            <div className="progress"><i style={{ width: `${(step / 3) * 100}%` }} /></div>

            {step === 1 && (
              <>
                <h2>Let’s start with the basics</h2>
                <p>Tell us who you are. We’ll keep everything else for later.</p>
                <label>Full name<input placeholder="Your full name" /></label>
                <label>Employee ID<input placeholder="e.g. AG-2048" /></label>
              </>
            )}

            {step === 2 && (
              <>
                <h2>Now your employment</h2>
                <p>Only two details are needed at this stage.</p>
                <label>
                  Department
                  <select>
                    <option>Technology</option>
                    <option>Finance</option>
                    <option>Operations</option>
                  </select>
                </label>
                <label>
                  Employment type
                  <select>
                    <option>Permanent</option>
                    <option>Contract</option>
                  </select>
                </label>
              </>
            )}

            {step === 3 && (
              <>
                <h2>Almost finished</h2>
                <p>Add your income range. Sensitive numbers can be verified later.</p>
                <label>
                  Income range
                  <select>
                    <option>₹3–6 lakh</option>
                    <option>₹6–12 lakh</option>
                    <option>₹12 lakh+</option>
                  </select>
                </label>
              </>
            )}

            <div className="wizard-actions">
              <button disabled={step === 1} onClick={() => setStep((value) => value - 1)}>
                Back
              </button>
              <button
                className="btn"
                onClick={() => setStep((value) => (value === 3 ? 1 : value + 1))}
              >
                {step === 3 ? 'Complete' : 'Continue'}
              </button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
