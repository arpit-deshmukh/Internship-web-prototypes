import React from 'react';
import './../shared-ui.css';

/**
 * CardGlass – Multi-purpose glassmorphism card for content display.
 * @param {string} children - Main content
 * @param {string} title - Main header
 * @param {string} footer - Bottom content or action row
 * @param {string} image - Background or featured image URL
 */
export const CardGlass = ({ children, title = '', footer = '', image = '', className = '' }) => (
  <div className={`ui-glass p-8 rounded-[3rem] text-white flex flex-col gap-6 shadow-2xl transition-all hover:translate-y-[-10px] ${className}`}>
    {image && (
      <div className="aspect-[16/10] overflow-hidden rounded-[2rem]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" 
        />
      </div>
    )}
    <div className="flex flex-col gap-2">
      {title && <h3 className="text-3xl font-black tracking-tighter">{title}</h3>}
      <div className="text-white/60 text-lg leading-relaxed">{children}</div>
    </div>
    {footer && <div className="pt-4 border-t border-white/10 mt-auto">{footer}</div>}
  </div>
);

/**
 * CardNeo – High-contrast Neo-Brutalism card design.
 * @param {string} bgColor - Background CSS color
 * @param {string} emoji - Dynamic icon or sticker
 */
export const CardNeo = ({ children, title = '', footer = '', emoji = '🚀', className = '', bgColor = '#a855f7' }) => (
  <div 
    style={{ backgroundColor: bgColor }} 
    className={`ui-neobrutalism p-10 flex flex-col gap-6 text-black ${className}`}
  >
    <div className="text-5xl">{emoji}</div>
    <div className="flex flex-col gap-3">
      {title && <h3 className="text-4xl font-black uppercase tracking-tight">{title}</h3>}
      <div className="text-xl font-bold leading-tight">{children}</div>
    </div>
    {footer && <div className="mt-auto pt-6 border-t-2 border-black font-black uppercase tracking-widest">{footer}</div>}
  </div>
);

/**
 * CardMinimal – Sleek minimalist card with progressive reveal interaction.
 */
export const CardMinimal = ({ title = '', subtitle = '', body = '', className = '' }) => (
  <div className={`group p-10 rounded-[4rem] border-2 border-white/5 bg-white/5 shadow-2xl backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 ${className}`}>
    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/30 group-hover:text-white transition-colors">
      Featured Item
    </span>
    <h3 className="text-5xl md:text-6xl font-black mt-4 mb-8 leading-tight tracking-tighter">
      {title}
    </h3>
    <p className="text-xl text-white/50 leading-relaxed max-w-lg mb-12">
      {body}
    </p>
    <div className="flex gap-4">
      <div className="w-12 h-[2px] bg-white/10 group-hover:w-24 group-hover:bg-indigo-500 transition-all self-center" />
      <span className="text-sm font-bold uppercase tracking-widest whitespace-nowrap">
        {subtitle}
      </span>
    </div>
  </div>
);

/**
 * CardFloat – Floating image card with title fade-in on hover.
 */
export const CardFloat = ({ image = '', title = '', desc = '', className = '' }) => (
  <div className={`relative group w-full aspect-[4/5] rounded-[3rem] overflow-hidden ${className}`}>
    <img 
      src={image} 
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2 grayscale-[50%] group-hover:grayscale-0" 
      alt={title} 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-12 translate-y-8 group-hover:translate-y-0 transition-all duration-500">
      <h3 className="text-4xl font-black text-white mb-2">{title}</h3>
      <p className="text-white/60 text-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-700">
        {desc}
      </p>
    </div>
  </div>
);
