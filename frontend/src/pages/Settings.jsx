import Layout from '../components/Layout';
import { Card } from '../components/UI';
import { useAura } from '../context/AuraContext';

export default function Settings() {
  const {
    sensitivity,
    setSensitivity,
    theme,
    setTheme,
    density,
    setDensity,
  } = useAura();

  return (
    <Layout>
      <div className="settings-grid">
        <Card title="AI sensitivity" sub="Choose when AuraGen should intervene">
          <div className="segmented">
            {['Low', 'Medium', 'High'].map((level) => (
              <button
                key={level}
                className={sensitivity === level ? 'on' : ''}
                onClick={() => setSensitivity(level)}
              >
                {level}
              </button>
            ))}
          </div>
          <p className="hint">
            Current mode balances early assistance with minimal interruption.
          </p>
        </Card>

        <Card title="Notifications" sub="Control alert delivery">
          {[
            'Email session reports',
            'In-app adaptation alerts',
            'Weekly analytics digest',
          ].map((item, index) => (
            <label className="toggle-row" key={item}>
              <span>{item}</span>
              <input type="checkbox" defaultChecked={index < 2} />
              <i />
            </label>
          ))}
        </Card>

        <Card title="Appearance" sub="Interface preferences">
          <label>
            Theme
            <select value={theme} onChange={(event) => setTheme(event.target.value)}>
              <option value="midnight">Midnight</option>
              <option value="light">Light</option>
            </select>
          </label>
          <label>
            Density
            <select value={density} onChange={(event) => setDensity(event.target.value)}>
              <option value="comfortable">Comfortable</option>
              <option value="compact">Compact</option>
            </select>
          </label>
        </Card>

        <Card title="Privacy" sub="Frontend demonstration settings">
          <label className="toggle-row">
            <span>Anonymous telemetry</span>
            <input type="checkbox" defaultChecked />
            <i />
          </label>
          <label className="toggle-row">
            <span>Store replay locally</span>
            <input type="checkbox" />
            <i />
          </label>
        </Card>
      </div>
    </Layout>
  );
}
