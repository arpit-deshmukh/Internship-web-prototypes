import React from 'react';
import './../shared-ui.css';

/**
 * BadgeSmall – Minimalist status or tag badge.
 */
export const BadgeSmall = ({ children, className = '', color = 'indigo' }) => {
  const themes = {
    indigo: 'bg-indigo-500/20 text-indigo-400',
    rose: 'bg-rose-500/20 text-rose-400',
    emerald: 'bg-emerald-500/20 text-emerald-400'
  };

  return (
    <span className={`${themes[color] || themes.indigo} px-3 py-1 ui-rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/5 ${className}`}>
      {children}
    </span>
  );
};

/**
 * BadgeStatus – Functional status indicator with live pulse animation.
 * @param {'online' | 'away' | 'busy' | 'offline'} status - Current status type
 */
export const BadgeStatus = ({ status = 'online', text = '', className = '' }) => {
  const statusColors = {
    online: 'bg-emerald-500',
    away: 'bg-amber-500',
    busy: 'bg-rose-500',
    offline: 'bg-slate-500'
  };
  
  return (
    <div className={`inline-flex items-center gap-3 px-4 py-1.5 ui-rounded-full ui-glass border border-white/20 text-white text-[11px] font-bold uppercase tracking-widest ${className}`}>
      <span className={`w-2 h-2 ui-rounded-full ${statusColors[status] || statusColors.online} animate-pulse shadow-2xl shadow-emerald-400`} />
      {text || status.toUpperCase()}
    </div>
  );
};

/**
 * BadgeGlass – Pure glassmorphism aesthetic tag for dark backgrounds.
 */
export const BadgeGlass = ({ children, className = '' }) => (
  <span className={`ui-glass px-5 py-2 ui-rounded-xl text-white/70 text-xs font-black uppercase tracking-[0.3em] border border-white/5 hover:border-white/20 transition-all cursor-default ${className}`}>
    {children}
  </span>
);

/**
 * BadgeNeo – High-impact Neo-Brutalism badge for bold designs.
 */
export const BadgeNeo = ({ children, className = '', color = '#3b82f6' }) => (
  <span 
    style={{ backgroundColor: color }}
    className={`ui-neobrutalism px-4 py-1.5 font-black uppercase tracking-[0.1em] text-black text-xs ${className}`}
  >
    {children}
  </span>
);
