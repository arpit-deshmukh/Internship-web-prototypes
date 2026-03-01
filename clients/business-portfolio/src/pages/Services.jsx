import React from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, 
  Palette, 
  BarChart, 
  ShieldCheck, 
  Zap, 
  Cpu 
} from 'lucide-react';
import Card from '../components/ui/Card';
import { cn } from '../utils/cn';

const services = [
  {
    icon: <Megaphone className="text-primary-600 dark:text-primary-400" size={28} />,
    title: 'Consultative Marketing',
    description: 'Grow your reach with targeted campaigns and high-integrity brand management.',
    gradient: 'from-primary-500/10 to-primary-600/5'
  },
  {
    icon: <Palette className="text-sky-600 dark:text-sky-400" size={28} />,
    title: 'Brand Systems',
    description: 'Establish a resilient identity that resonates with mission-aligned customers.',
    gradient: 'from-sky-500/10 to-sky-600/5'
  },
  {
    icon: <BarChart className="text-indigo-600 dark:text-indigo-400" size={28} />,
    title: 'Growth Strategy',
    description: 'Implement scalable frameworks for acquisition and long-term retention metrics.',
    gradient: 'from-indigo-500/10 to-indigo-600/5'
  },
  {
    icon: <Cpu className="text-emerald-600 dark:text-emerald-400" size={28} />,
    title: 'AI Ops Automation',
    description: 'Leverage generative AI to streamline internal operations and reduce technical debt.',
    gradient: 'from-emerald-500/10 to-emerald-600/5'
  },
  {
    icon: <Zap className="text-orange-600 dark:text-orange-400" size={28} />,
    title: 'Web Performance',
    description: 'Build fast, accessible, and high-converting web experiences for high-stakes brands.',
    gradient: 'from-orange-500/10 to-orange-600/5'
  },
  {
    icon: <ShieldCheck className="text-rose-600 dark:text-rose-400" size={28} />,
    title: 'System Security',
    description: 'Ensure your digital infrastructure is resilient against modern security threats.',
    gradient: 'from-rose-500/10 to-rose-600/5'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-12 px-6">
      <div className="container mx-auto">
        <div className="section-card">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-primary-100/50 dark:bg-primary-900/40 border border-border/50 text-[10px] font-black uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
              Core Capabilities
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
              Strategic Solutions <br />
              <span className="text-gradient">Engineered for Success.</span>
            </h2>
            <p className="text-foreground/60 text-lg">
              High-impact strategies designed for founders who value technical excellence and business integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={service.title} className="p-8 group hover:scale-[1.03] transition-transform duration-500">
                <div className={cn(
                  "p-4 rounded-xl mb-6 inline-block bg-gradient-to-br transition-all duration-500",
                  service.gradient
                )}>
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black tracking-tight">{service.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="mt-6 flex items-center text-xs font-black uppercase tracking-widest text-primary-600 dark:text-primary-400"
                >
                  Learn Strategy 
                  <Zap size={14} className="ml-1 fill-current" />
                </motion.button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
