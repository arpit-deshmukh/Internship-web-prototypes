import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart3, Globe, Code2, Rocket, Share2 } from 'lucide-react';
import Card from '../components/ui/Card';

const About = () => {
  const skills = [
    { name: 'Strategic Ops', percentage: 95, color: 'bg-primary-500' },
    { name: 'SaaS Growth', percentage: 88, color: 'bg-sky-500' },
    { name: 'AI Optimization', percentage: 92, color: 'bg-indigo-500' },
    { name: 'Systems Architecture', percentage: 85, color: 'bg-blue-500' },
    { name: 'Brand Authority', percentage: 98, color: 'bg-emerald-500' },
  ];

  return (
    <section id="about" className="py-12 container mx-auto px-6">
      <div className="section-card">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Summary & Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary-100/50 dark:bg-primary-900/40 border border-primary-100 dark:border-primary-800 text-xs font-black uppercase tracking-widest text-primary-600 dark:text-primary-300">
              Expertise In Detail
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
              I help founders <br />
              <span className="text-primary-600 dark:text-primary-400">master the art of scale.</span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-xl">
              I am Julian Vance, a specialized advisor for high-growth tech firms. My mission is simple: to transform operational friction into a competitive advantage.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-xl">
              I focus on the intersection of data-driven systems and creative brand strategy. Whether it's architecting a scalable workflow or identifying new market opportunities, I am dedicated to measurable impact.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-3xl bg-muted/40 border border-border/50 group">
                <Rocket className="text-primary-600 dark:text-primary-400 mb-3" size={28} />
                <p className="text-2xl font-black tracking-tighter">150+ Scale-ups</p>
                <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Optimized</p>
              </div>
              <div className="p-6 rounded-3xl bg-muted/40 border border-border/50 group">
                <Share2 className="text-sky-600 dark:text-sky-400 mb-3" size={28} />
                <p className="text-2xl font-black tracking-tighter">12+ Global Markets</p>
                <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Navigated</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills with Progress bars */}
          <div className="space-y-8 bg-muted/30 p-8 md:p-12 rounded-[2rem] border border-border/50">
            <h3 className="text-2xl font-black mb-8 tracking-tight">Technical Mastery</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <span className="font-bold text-foreground/70 tracking-tight">{skill.name}</span>
                    <span className="font-black text-sm text-primary-600 dark:text-primary-400">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-muted-foreground/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.1 + index * 0.1, ease: 'circOut' }}
                      className={`h-full ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute top-0 right-0 w-8 h-full bg-white/20 skew-x-[30deg] animate-[shine_2s_infinite]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
