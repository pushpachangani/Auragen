import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import Brand from '../components/Brand';
import landingLoginPreview from '../assets/images/landing-login-preview.png';
import heroBrain from '../assets/images/hero-brain.svg';

const features = [
  [MousePointer2, 'Behavior sensing', 'Tracks cursor speed, hesitation, clicks and typing signals.'],
  [BrainCircuit, 'Cognitive scoring', 'Turns user interactions into a continuously updated load score.'],
  [Zap, 'Adaptive morphing', 'Transforms dense forms into a guided step-by-step wizard.'],
  [ShieldCheck, 'Safe by design', 'Uses controlled components and graceful fallback states.'],
];

export default function Landing() {
  return (
    <div className="landing">
      <div className="orb o1" />
      <div className="orb o2" />

      <nav className="topnav">
        <Brand />
        <div className="navlinks">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#preview">Preview</a>
        </div>
        <div>
          <Link className="ghost" to="/login">Log in</Link>
          <Link className="btn" to="/app">Open demo</Link>
        </div>
      </nav>

      <main>
        <section className="hero">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="eyebrow"><Sparkles size={15} /> Cognitive adaptive interface</div>
            <h1>The interface that <span>heals itself</span> around every user.</h1>
            <p>
              AuraGen observes cognitive friction, detects hesitation and rage clicks,
              then transforms complex workflows into clear, personalised experiences in real time.
            </p>
            <div className="hero-actions">
              <Link className="btn big" to="/app">
                Launch live experience <ArrowRight size={18} />
              </Link>
              <a className="ghost big" href="#preview">Explore product</a>
            </div>
            <div className="trust">
              <span>● Live telemetry</span>
              <span>● Frontend simulation</span>
              <span>● Responsive design</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img className="hero-image" src={heroBrain} alt="AuraGen cognitive AI network" />
          </motion.div>
        </section>

        <section id="features" className="feature-grid">
          {features.map(([Icon, title, description]) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </section>

        <section id="workflow" className="workflow">
          <div>
            <span className="section-kicker">How it works</span>
            <h2>From confusion to completion in seconds.</h2>
          </div>
          <div className="steps">
            {[
              'Observe interaction signals',
              'Calculate cognitive friction',
              'Select an adaptive pattern',
              'Morph the interface safely',
            ].map((item, index) => (
              <div key={item}>
                <b>0{index + 1}</b>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="preview" className="preview">
          <span className="section-kicker">Interface preview</span>
          <h2>Explore the AuraGen landing and login experience.</h2>
          <img src={landingLoginPreview} alt="AuraGen landing and login page preview" />
        </section>
      </main>

      <footer>
        <Brand />
        <span>Human-centred intelligence, built for clearer digital experiences.</span>
      </footer>
    </div>
  );
}
