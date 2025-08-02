import { useEffect, useState } from 'react';

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
    <div>
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? '᮰' : '☾'}
      </button>
    </div>
  );
};

export default ThemeToggle;
