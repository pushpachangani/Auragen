import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuraContext = createContext(null);

function getSavedPreferences() {
  try {
    return JSON.parse(localStorage.getItem('auragen-preferences')) || {};
  } catch {
    return {};
  }
}

export function AuraProvider({ children }) {
  const saved = getSavedPreferences();
  const [theme, setTheme] = useState(saved.theme || 'midnight');
  const [density, setDensity] = useState(saved.density || 'comfortable');
  const [sensitivity, setSensitivity] = useState(saved.sensitivity || 'Medium');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.density = density;
    localStorage.setItem(
      'auragen-preferences',
      JSON.stringify({ theme, density, sensitivity }),
    );
  }, [theme, density, sensitivity]);

  const value = useMemo(
    () => ({ theme, setTheme, density, setDensity, sensitivity, setSensitivity }),
    [theme, density, sensitivity],
  );

  return <AuraContext.Provider value={value}>{children}</AuraContext.Provider>;
}

export function useAura() {
  const context = useContext(AuraContext);
  if (!context) throw new Error('useAura must be used inside AuraProvider');
  return context;
}
