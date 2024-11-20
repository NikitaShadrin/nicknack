'use client';

import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        onClick={toggleTheme}
        className="relative w-8 h-16 flex items-center bg-dark rounded-full transition-colors"
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-accent shadow transform transition-transform duration-300 ${
            theme === 'dark' ? 'translate-y-full' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
