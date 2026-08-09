import Layout from '../components/Layout';
import { Card, Stat } from '../components/UI';

export default function Profile() {
  const sessions = [
    ['Today, 11:20 AM', 'High friction', 'Adapted'],
    ['Yesterday, 4:10 PM', 'Medium friction', 'Adapted'],
    ['Monday, 10:05 AM', 'Low friction', 'No adaptation'],
  ];

  return (
    <Layout>
      <Card title="Profile" sub="AuraGen workspace identity">
        <div className="profile">
          <div className="avatar">U</div>
          <div>
            <h2>User</h2>
            <p>user@auragen.ai · AuraGen Workspace</p>
            <button className="btn">Edit profile</button>
          </div>
        </div>
      </Card>

      <div className="stats">
        <Stat label="Sessions" value="12" delta="this month" />
        <Stat label="Adaptations" value="23" delta="AI-assisted" />
        <Stat label="Total time" value="14h 32m" delta="active monitoring" />
        <Stat label="Success rate" value="91%" delta="excellent" tone="green" />
      </div>

      <Card title="Recent sessions" sub="Recent adaptive experiences">
        <div className="session-table">
          {sessions.map((row) => (
            <div key={row.join('-')}>
              {row.map((value, index) => (
                <span key={value} className={index === 2 ? 'status' : ''}>{value}</span>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </Layout>
  );
}
