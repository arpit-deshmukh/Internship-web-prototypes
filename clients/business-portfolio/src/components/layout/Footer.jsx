import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-card/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-black tracking-tighter text-gradient">Julian Vance</h3>
            <p className="text-foreground/40 text-[10px] font-black uppercase tracking-[0.3em] max-w-xs">
              Strategic Advisory for High-Performance Growth.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-6">
              <a href="#" className="p-3 rounded-2xl bg-muted/60 text-foreground/40 hover:text-primary-600 transition-all border border-transparent hover:border-border/50 shadow-sm">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-3 rounded-2xl bg-muted/60 text-foreground/40 hover:text-sky-400 transition-all border border-transparent hover:border-border/50 shadow-sm">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-3 rounded-2xl bg-muted/60 text-foreground/40 hover:text-black dark:hover:text-white transition-all border border-transparent hover:border-border/50 shadow-sm">
                <Github size={18} />
              </a>
              <a href="#" className="p-3 rounded-2xl bg-muted/60 text-foreground/40 hover:text-primary-500 transition-all border border-transparent hover:border-border/50 shadow-sm">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase font-black tracking-[0.4em] text-foreground/20 space-y-4 md:space-y-0 text-center">
          <div className="flex items-center space-x-2">
            <span>© {currentYear} Julian Vance Portfolio</span>
            <span className="hidden md:inline">|</span>
            <span>Strategic Growth Advisor</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart size={10} className="text-rose-500/50 mx-1" />
            <span>for Technical Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
