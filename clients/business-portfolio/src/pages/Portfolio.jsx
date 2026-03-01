import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Tag, Calendar, User, Eye, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';
import Button from '../components/ui/Button';

const projects = [
  {
    id: 1,
    title: 'Precision Growth Engine',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    description: 'A comprehensive growth framework for SaaS startups, resulting in 40% increased retention.',
    details: 'Leveraged deep analytics and AI-driven behavior mapping to identify drop-off points in the user journey. Developed a custom attribution model for multi-channel scaling.',
    tech: ['Systemic Ops', 'Analytics', 'Behavioral Science'],
    stats: { revenue: '+120%', users: '50k+' }
  },
  {
    id: 2,
    title: 'Modern Brand Authority',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2428&auto=format&fit=crop',
    description: 'Minimalist, luxury brand identity for a high-end fintech platform.',
    details: 'Designed a modular design system from the ground up. Focused on accessibility and high-quality micro-interactions to build trust and authority.',
    tech: ['Modular Design', 'Strategic Branding', 'UI/UX'],
    stats: { engagement: '+65%', trust: 'High' }
  },
  {
    id: 3,
    title: 'AdOptics AI Dashboard',
    category: 'AI Ads',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
    description: 'Automated ad budget allocation using machine learning for e-commerce brands.',
    details: 'Built a custom dashboard that monitors ROAS in real-time and automatically shifts budget to highest-performing assets across Meta and Google.',
    tech: ['AI Automation', 'AdTech', 'Data Ingestion'],
    stats: { ROAS: '4.5x', savings: '$20k/mo' }
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Strategy', 'Branding', 'AI Ads'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-12 px-6">
      <div className="container mx-auto">
        <div className="section-card">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
            <div className="space-y-6 max-w-xl text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-primary-100/50 dark:bg-primary-900/40 border border-border/50 text-[10px] font-black uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
                Strategic Impact
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                Selected <span className="text-gradient">Case Studies.</span>
              </h2>
              <p className="text-foreground/60 text-lg">
                View the results of our specialized consulting engagements.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 bg-muted/40 p-2 rounded-2xl border border-border/40">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    'px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300',
                    filter === cat 
                      ? 'bg-card text-primary-600 shadow-xl border border-border/50' 
                      : 'hover:bg-card/40 text-foreground/50'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group relative h-[450px] overflow-hidden rounded-[2rem] cursor-pointer border border-border/40 shadow-xl hover:shadow-2xl transition-all duration-700"
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <span className="inline-block px-4 py-1 rounded-full bg-primary-500/20 backdrop-blur-md text-white border border-white/20 text-[10px] font-black mb-4 uppercase tracking-[0.2em]">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-black text-white mb-3 tracking-tighter">{project.title}</h3>
                    <p className="text-white/60 text-sm mb-6 line-clamp-2 max-w-sm font-medium">
                      {project.description}
                    </p>
                    <div className="flex items-center text-primary-400 font-black text-xs tracking-[0.2em] uppercase">
                      View Results <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Modal Popup (Julian Vance Themed) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-5xl bg-card rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 p-3 rounded-full bg-muted/80 text-foreground z-10 hover:bg-muted transition-colors border border-border/50 shadow-lg"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-1/2 h-[350px] lg:h-auto relative overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent lg:hidden" />
                </div>
                <div className="lg:w-1/2 p-10 md:p-16 space-y-10 overflow-y-auto max-h-[70vh] lg:max-h-[90vh]">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-primary-600 dark:text-primary-400 font-black">
                      <Tag size={16} />
                      <span className="uppercase tracking-[0.3em] text-[10px]">{selectedProject.category}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">{selectedProject.title}</h2>
                  </div>

                  <p className="text-foreground/70 text-lg leading-relaxed font-medium">
                    {selectedProject.details}
                  </p>

                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
                    <div>
                      <h4 className="text-[10px] uppercase font-black text-foreground/30 tracking-[0.4em] mb-6">Expertise Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="px-4 py-1.5 bg-muted/60 rounded-xl text-[10px] font-black uppercase tracking-widest text-foreground/60 border border-border/40">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-black text-foreground/30 tracking-[0.4em] mb-6">Engagement Metrics</h4>
                      <div className="space-y-3">
                        {Object.entries(selectedProject.stats).map(([k, v]) => (
                          <div key={k} className="flex justify-between items-center text-sm font-black tracking-tight">
                            <span className="capitalize text-foreground/40">{k}</span>
                            <span className="text-primary-600 dark:text-primary-400">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full py-6 rounded-[1.5rem] text-lg font-black tracking-tighter shadow-2xl shadow-primary-500/30">
                    Schedule a Consultation <ArrowRight size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
