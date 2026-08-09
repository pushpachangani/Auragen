import { NavLink } from 'react-router-dom';
import {
  Activity,
  BarChart3,
  BrainCircuit,
  LayoutDashboard,
  LogOut,
  Moon,
  PlayCircle,
  Settings,
  Sun,
  UserRound,
} from 'lucide-react';
import Brand from './Brand';
import CommandPalette from './CommandPalette';
import { useAura } from '../context/AuraContext';

const links = [
  ['/app', LayoutDashboard, 'Dashboard'],
  ['/app/monitor', Activity, 'Live Monitor'],
  ['/app/dynamic', BrainCircuit, 'Dynamic UI'],
  ['/app/analytics', BarChart3, 'Analytics'],
  ['/app/replay', PlayCircle, 'AI Replay'],
  ['/app/settings', Settings, 'Settings'],
  ['/app/profile', UserRound, 'Profile'],
];

export default function Layout({ children }) {
  const { theme, setTheme } = useAura();
  const isLight = theme === 'light';

  return (
    <div className="app-shell">
      <aside>
        <Brand />
        <nav>
          {links.map(([to, Icon, label]) => (
            <NavLink end={to === '/app'} to={to} key={to}>
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/" className="logout"><LogOut size={18} />Log out</NavLink>
      </aside>

      <main className="app-main">
        <header>
          <div>
            <small>Adaptive intelligence console</small>
            <h2>Good evening, User</h2>
          </div>
          <div className="header-actions">
            <CommandPalette />
            <button
              className="icon-button"
              onClick={() => setTheme(isLight ? 'midnight' : 'light')}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <div className="live-pill"><i /> System monitoring</div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
