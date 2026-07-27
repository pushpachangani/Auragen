import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Activity,
  BarChart3,
  BrainCircuit,
  LayoutDashboard,
  PlayCircle,
  Search,
  Settings,
  UserRound,
} from 'lucide-react';

const commands = [
  { label: 'Dashboard', path: '/app', icon: LayoutDashboard },
  { label: 'Live Monitor', path: '/app/monitor', icon: Activity },
  { label: 'Dynamic UI', path: '/app/dynamic', icon: BrainCircuit },
  { label: 'Analytics', path: '/app/analytics', icon: BarChart3 },
  { label: 'AI Replay', path: '/app/replay', icon: PlayCircle },
  { label: 'Settings', path: '/app/settings', icon: Settings },
  { label: 'Profile', path: '/app/profile', icon: UserRound },
];

export default function CommandPalette() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const filtered = useMemo(
    () => commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  if (!open) {
    return (
      <button className="command-trigger" onClick={() => setOpen(true)} aria-label="Open command palette">
        <Search size={16} />
        <span>Search</span>
        <kbd>Ctrl K</kbd>
      </button>
    );
  }

  return (
    <div className="command-backdrop" onMouseDown={() => setOpen(false)}>
      <div className="command-panel" onMouseDown={(event) => event.stopPropagation()}>
        <div className="command-input">
          <Search size={18} />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Go to a page..."
          />
          <kbd>Esc</kbd>
        </div>
        <div className="command-results">
          {filtered.map(({ label, path, icon: Icon }) => (
            <button
              key={path}
              onClick={() => {
                navigate(path);
                setOpen(false);
                setQuery('');
              }}
            >
              <Icon size={17} />
              <span>{label}</span>
              <small>Open</small>
            </button>
          ))}
          {!filtered.length && <p>No matching page found.</p>}
        </div>
      </div>
    </div>
  );
}
