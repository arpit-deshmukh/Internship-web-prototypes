import React from 'react';
import { ChevronRight, ArrowRight, User, MousePointer2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[30%] h-[30%] bg-primary-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[15%] w-[30%] h-[30%] bg-sky-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-card flex flex-col items-center text-center !py-20 bg-card/60 backdrop-blur-xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-700 dark:text-primary-300 text-xs font-bold uppercase tracking-widest mb-10"
          >
            <Sparkles size={14} className="mr-1" />
            Strategic Operations Expert
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9] max-w-4xl">
            Empowering <span className="text-gradient">Growth</span> <br />
            with Precision Strategy.
          </h1>

          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            I am Julian Vance. I help visionary founders bridge the gap between complex ideas and operational excellence. Focused on sustainable scale and brand authority.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="group rounded-2xl py-5 px-10 shadow-xl shadow-primary-500/20">
              Explore Portfolio 
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-2xl py-5 px-10 border-border bg-transparent hover:bg-muted">
              Book a Strategy Call
            </Button>
          </div>

          {/* Social Proof Mini Card */}
          <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-black text-2xl tracking-tighter">FORBES</span>
            <span className="font-black text-2xl tracking-tighter">TECHCRUNCH</span>
            <span className="font-black text-2xl tracking-tighter">WIRED</span>
            <span className="font-black text-2xl tracking-tighter">THE VERGE</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <span className="text-[10px] uppercase font-black tracking-[0.4em] mb-3">Discover</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-primary-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
