import { useEffect, useState } from 'react';

const buttonStyle: React.CSSProperties = {
  background: 'linear-gradient(180deg, #f5f5f7 0%, #e5e5ea 100%)',
  border: 'none',
  borderRadius: '20px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  padding: '1px 20px',
  fontSize: '1.5rem',
  color: '#222',
  cursor: 'pointer',
  transition: 'background 0.3s, box-shadow 0.3s',
};

const darkButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: 'linear-gradient(180deg, #222 0%, #444 100%)',
  color: '#f5f5f7',
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }, [isDark]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
      <button
        style={isDark ? darkButtonStyle : buttonStyle}
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? '᮰' : '☾'}
      </button>
    </div>
  );
};

export default ThemeToggle;
