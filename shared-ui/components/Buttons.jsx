import React from 'react';
import './shared-ui.css';

/**
 * ButtonGlass – A frosted glass-style button for premium UI sets.
 * @param {string} children - Inner content
 * @param {string} className - Additional CSS classes
 * @returns {JSX.Element}
 */
export const ButtonGlass = ({ children, className = '', ...props }) => (
  <button 
    className={`ui-glass px-8 py-3 ui-rounded-2xl text-white font-semibold transition-all hover:bg-white/15 active:scale-95 ${className}`} 
    {...props}
  >
    {children}
  </button>
);

/**
 * ButtonGradient – A high-impact gradient button with standard variants.
 * @param {string} children - Inner content
 * @param {'indigo' | 'blue' | 'rose'} variant - Design variant
 * @returns {JSX.Element}
 */
export const ButtonGradient = ({ children, variant = 'indigo', className = '', ...props }) => {
  const themes = {
    indigo: 'ui-gradient-indigo',
    blue: 'ui-gradient-blue',
    rose: 'ui-gradient-rose'
  };

  return (
    <button 
      className={`${themes[variant] || themes.indigo} px-10 py-4 ui-rounded-3xl text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * ButtonNeo – A "Neo-Brutalism" style button with a hard shadow.
 * @param {string} children - Inner content
 * @param {string} color - Background hex/color
 * @returns {JSX.Element}
 */
export const ButtonNeo = ({ children, color = '#6366f1', className = '', ...props }) => (
  <button 
    style={{ backgroundColor: color }}
    className={`ui-neobrutalism px-6 py-2.5 font-black uppercase tracking-wider text-black ${className}`} 
    {...props}
  >
    {children}
  </button>
);

/**
 * ButtonOutline – A simple, modular outline button for secondary actions.
 */
export const ButtonOutline = ({ children, className = '', ...props }) => (
  <button 
    className={`border-2 border-white/20 bg-transparent px-8 py-3 ui-rounded-2xl text-white font-semibold flex items-center gap-3 transition-all hover:border-white/50 hover:bg-white/5 active:scale-95 ${className}`} 
    {...props}
  >
    {children}
  </button>
);

/**
 * ButtonGlow – A vibrant pulsing button that commands user attention.
 */
export const ButtonGlow = ({ children, className = '', ...props }) => (
  <button 
    className={`ui-gradient-indigo ui-glow-primary px-8 py-3 ui-rounded-full text-white font-bold transition-all active:scale-95 ${className}`} 
    {...props}
  >
    {children}
  </button>
);
