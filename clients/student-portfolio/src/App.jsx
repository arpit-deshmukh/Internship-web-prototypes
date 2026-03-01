import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun,
  Menu,
  X,
  Globe,
  ArrowUpRight,
  Send
} from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#hero' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'nav-blur py-4' : 'py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-black tracking-tighter hover:opacity-70 transition-opacity">
          AD<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-semibold text-soft hover:text-main transition-all hover:translate-y-[-1px]">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 pl-8 border-l border-border">
            <button onClick={toggleTheme} className="p-2.5 btn-ghost rounded-xl">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="#contact" className="btn btn-primary px-6 shadow-sm">Start a Project</a>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleTheme} className="p-2 btn-ghost rounded-xl">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 btn-ghost rounded-xl">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden p-8 flex flex-col gap-6 nav-blur border-b border-border overflow-hidden"
          >
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary py-4 justify-center text-lg">Start a Project</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="hero" className="min-h-[90vh] flex items-center pt-40 pb-20 px-6 md:px-12">
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center w-full max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Open to collaborate
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.9]">Digital <span className="text-soft">Craftsman</span> & Developer.</h1>
        <p className="text-lg md:text-xl text-soft mb-14 max-w-xl leading-relaxed">
          Creating meaningful digital experiences through clean code and thoughtful design. Focus on performance, accessibility and user delight.
        </p>
        <div className="flex flex-wrap gap-8 text-sm font-bold">
          <a href="#projects" className="group flex items-center gap-3 p-1 transition-transform hover:translate-y-[-2px]">
            Explore Work <div className="p-2.5 bg-main border border-border rounded-full group-hover:bg-primary group-hover:text-white transition-all"><ArrowUpRight size={18} /></div>
          </a>
          <a href="#contact" className="group flex items-center gap-3 p-1 transition-transform hover:translate-y-[-2px]">
            Get in Touch <div className="p-2.5 bg-main border border-border rounded-full group-hover:bg-primary group-hover:text-white transition-all"><ArrowUpRight size={18} /></div>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] bg-border overflow-hidden relative group shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop" 
            alt="AD Profile" 
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-x-0 bottom-0 p-10 md:p-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">Based in New York</p>
            <h3 className="text-white text-3xl md:text-4xl font-bold">Designing for the future.</h3>
          </div>
        </div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-[80px]" />
      </motion.div>
    </div>
  </section>
);

const ProjectCard = ({ title, desc, tags, github, live, image }) => (
  <motion.div 
    whileHover={{ y: -20, scale: 1.02 }}
    className="flex flex-col gap-10 group p-10 rounded-[4rem] border-2 border-white/10 bg-main/5 shadow-2xl backdrop-blur-sm transition-all"
  >
    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden relative shadow-inner">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
        <a href={live} target="_blank" rel="noreferrer" className="p-5 bg-white rounded-full text-black hover:scale-110 transition-transform shadow-2xl"><ArrowUpRight size={24} /></a>
        <a href={github} target="_blank" rel="noreferrer" className="p-5 bg-white rounded-full text-black hover:scale-110 transition-transform shadow-2xl"><Github size={24} /></a>
      </div>
    </div>
    <div className="px-2">
      <div className="flex flex-wrap gap-4 mb-6">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-black text-soft uppercase tracking-[0.2em] border border-white/20 px-4 py-1.5 rounded-full">{tag}</span>
        ))}
      </div>
      <h3 className="text-4xl font-black mb-6 tracking-tighter group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-soft text-xl leading-relaxed opacity-80">{desc}</p>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Vortex Data Engine",
      desc: "Real-time analytics processing engine for high-traffic applications with embedded visualization tools.",
      tags: ["PostgreSQL", "React", "D3.js"],
      github: "#", live: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    },
    {
      title: "Aura Health App",
      desc: "Wellness tracking platform that uses biometric data to suggest personalized mindfulness routines.",
      tags: ["Swift", "Firebase", "HealthKit"],
      github: "#", live: "#",
      image: "https://images.unsplash.com/photo-1576091160550-2173599211d0?w=800"
    },
    {
      title: "Nexus Commerce",
      desc: "Global e-commerce solution with multi-currency support and AI-driven inventory management.",
      tags: ["Shopify", "Node.js", "GPT-4"],
      github: "#", live: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
    },
    {
      title: "Zenith Studio",
      desc: "Advanced content management system designed specifically for creative production studios.",
      tags: ["Next.js", "Sanity", "Tailwind"],
      github: "#", live: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
    },
    {
      title: "Echo Social",
      desc: "Privacy-focused social networking platform built on decentralized ledger technology.",
      tags: ["Solidity", "React", "Web3"],
      github: "#", live: "#",
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800"
    },
    {
      title: "Skyline Analytics",
      desc: "Predictive traffic and urban planning dashboard for modern smart city infrastructures.",
      tags: ["Python", "AWS", "Mapbox"],
      github: "#", live: "#",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-main/30 border-y border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Selected Works</h2>
            <p className="text-xl text-soft leading-relaxed">A curated collection of projects where design meets functionality. Focused on solving complex problems with simple solutions.</p>
          </div>
          <a href="#" className="btn btn-ghost px-10 py-5 border-2 rounded-2xl hover:scale-105 transition-transform">View All Work</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 lg:gap-x-40 gap-y-48 lg:gap-y-80">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 px-6 md:px-12">
    <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-20 lg:gap-32">
      <div className="lg:col-span-12 xl:col-span-5">
        <h2 className="text-6xl md:text-7xl font-black mb-10 leading-tight">Let's build something <span className="text-soft">great</span> together.</h2>
        <p className="text-xl text-soft mb-16 leading-relaxed">I am currently available for high-impact opportunities and collaborations worldwide.</p>
        <div className="space-y-8">
          <a href="mailto:hello@ad.dev" className="group flex items-center justify-between p-8 rounded-3xl border border-border bg-main hover:border-primary transition-all shadow-sm hover:shadow-xl">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-soft uppercase tracking-widest px-1">Email me</span>
              <span className="text-2xl font-bold px-1 tracking-tight">hello@ad.dev</span>
            </div>
            <div className="p-4 bg-border rounded-full group-hover:bg-primary group-hover:text-white transition-all"><ArrowUpRight size={24} /></div>
          </a>
          <div className="flex gap-6">
            <a href="#" className="flex-1 p-8 rounded-3xl border border-border bg-main flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-xl group">
              <Linkedin className="transition-transform group-hover:scale-110" />
            </a>
            <a href="#" className="flex-1 p-8 rounded-3xl border border-border bg-main flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-xl group">
              <Github className="transition-transform group-hover:scale-110" />
            </a>
            <a href="#" className="flex-1 p-8 rounded-3xl border border-border bg-main flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-xl group">
              <Globe className="transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:col-span-12 xl:col-span-7">
        <form className="p-10 md:p-16 rounded-[3rem] border border-border bg-main/50 space-y-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-soft ml-1">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-transparent border-border border-b-2 border-x-0 border-t-0 py-4 outline-none focus:border-primary transition-all placeholder:text-soft/20 text-xl font-medium" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-soft ml-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-border border-b-2 border-x-0 border-t-0 py-4 outline-none focus:border-primary transition-all placeholder:text-soft/20 text-xl font-medium" />
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-widest text-soft ml-1">Project Message</label>
            <textarea placeholder="How can I help you?" rows="4" className="w-full bg-transparent border-border border-b-2 border-x-0 border-t-0 py-4 outline-none focus:border-primary transition-all placeholder:text-soft/20 text-xl font-medium resize-none leading-relaxed" />
          </div>
          <button type="button" className="btn btn-primary w-full py-6 text-2xl justify-center gap-4 rounded-3xl shadow-2xl hover:scale-[1.02] active:scale-[0.98]">
            Send Inquiry <Send size={26} />
          </button>
        </form>
      </div>
    </div>
  </section>
);

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="app-root selection:bg-primary selection:text-white">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Projects />
      <Contact />
      <footer className="py-24 px-6 md:px-12 border-t border-border bg-main">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-4xl font-black tracking-tighter hover:opacity-70 transition-opacity cursor-pointer">AD<span className="text-primary">.</span></div>
          <div className="flex gap-10 md:gap-14">
            <a href="#" className="p-4 rounded-2xl border border-border bg-card hover:border-primary hover:translate-y-[-4px] transition-all"><Linkedin size={20} /></a>
            <a href="#" className="p-4 rounded-2xl border border-border bg-card hover:border-primary hover:translate-y-[-4px] transition-all"><Github size={20} /></a>
            <a href="#" className="p-4 rounded-2xl border border-border bg-card hover:border-primary hover:translate-y-[-4px] transition-all"><Moon size={20} /></a>
          </div>
          <div className="text-sm font-bold text-soft uppercase tracking-widest">© {new Date().getFullYear()} Studio Portfolio</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
