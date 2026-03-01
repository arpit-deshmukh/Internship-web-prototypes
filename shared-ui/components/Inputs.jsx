import React from 'react';
import './../shared-ui.css';

/**
 * InputFloat – Modern floating label input with focus animations.
 */
export const InputFloat = ({ label = '', placeholder = '', ...props }) => (
  <div className="relative group w-full mb-10">
    <input 
      type="text" 
      placeholder={placeholder}
      className="w-full bg-transparent border-white/10 border-b-2 border-x-0 border-t-0 py-6 outline-none focus:border-indigo-500 transition-all placeholder:text-white/20 text-2xl font-black tracking-tighter" 
      {...props}
    />
    <label className="absolute -top-4 left-0 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-focus-within:text-indigo-400 transition-colors">
      {label}
    </label>
  </div>
);

/**
 * InputGlass – Accessible glassmorphism input field with optional icon support.
 */
export const InputGlass = ({ icon: Icon, placeholder = '', ...props }) => (
  <div className="ui-glass flex items-center gap-6 px-10 py-5 ui-rounded-3xl w-full border border-white/10 focus-within:border-white/30 transition-all shadow-2xl">
    {Icon && <Icon className="text-white/40" size={24} />}
    <input 
      type="text" 
      placeholder={placeholder}
      className="bg-transparent border-none outline-none text-white text-xl font-medium placeholder:text-white/20 w-full" 
      {...props}
    />
  </div>
);

/**
 * TextareaFloat – Reusable floating label textarea for message forms.
 */
export const TextareaFloat = ({ label = '', placeholder = '', rows = 4, ...props }) => (
  <div className="relative group w-full">
    <textarea 
      placeholder={placeholder} 
      rows={rows}
      className="w-full bg-transparent border-white/10 border-b-2 border-x-0 border-t-0 py-6 outline-none focus:border-indigo-500 transition-all placeholder:text-white/20 text-2xl font-black tracking-tighter resize-none leading-relaxed" 
      {...props}
    />
    <label className="absolute -top-4 left-0 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-focus-within:text-indigo-400 transition-colors">
      {label}
    </label>
  </div>
);

/**
 * SelectGlass – Styled premium dropdown with glass styling.
 */
export const SelectGlass = ({ label = '', options = [], ...props }) => (
  <div className="relative group w-full">
    <select 
      className="w-full bg-slate-900 ui-glass appearance-none px-8 py-5 ui-rounded-2xl border border-white/10 outline-none focus:border-white/30 text-white text-xl font-bold cursor-pointer transition-all"
      {...props}
    >
      {options.map((opt, i) => (
        <option key={i} value={opt.value} className="bg-slate-900 text-white p-4 font-bold uppercase tracking-widest text-xs">
          {opt.label}
        </option>
      ))}
    </select>
    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
    </div>
    {label && <label className="absolute -top-4 left-0 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-focus-within:text-indigo-400 transition-colors">
      {label}
    </label>}
  </div>
);
