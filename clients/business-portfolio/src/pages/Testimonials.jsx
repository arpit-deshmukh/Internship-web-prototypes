import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, ArrowUpRight } from 'lucide-react';
import { cn } from '../utils/cn';

const testimonials = [
  {
    id: 1,
    name: "John Dovetail",
    role: "CEO, Nexa Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop",
    quote: "The strategic insights Julian provided transformed our entire marketing approach. We saw a 3x ROI within the first six months of collaboration.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Founder, Bloom Digital",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2340&auto=format&fit=crop",
    quote: "Julian Vance is professional, efficient, and highly creative. The systems he developed for us are still praised by our board of advisors daily.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO, CloudScale",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop",
    quote: "Rarely do you find someone like Alexander who understands both the KPIs and the technical architecture. Highly recommended.",
    rating: 5
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section id="testimonials" className="py-12 container mx-auto px-6 overflow-hidden">
      <div className="section-card bg-muted/20">
        <div className="flex flex-col items-center text-center space-y-6 mb-16 max-w-2xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-primary-100/50 dark:bg-primary-900/40 border border-border/50 text-[10px] font-black uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
            Advisory Reviews
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
            Validated by <br />
            <span className="text-primary-600 dark:text-primary-400"> Industry Leaders.</span>
          </h2>
        </div>

        <div className="relative h-[550px] md:h-[450px] flex items-center justify-center -mx-4 md:mx-0">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: "circOut"
              }}
              className="absolute max-w-4xl w-full"
            >
              <div className="bg-card rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center border border-border/60 shadow-2xl shadow-black/5">
                <div className="w-32 h-32 md:w-56 md:h-56 rounded-[2rem] overflow-hidden border-4 border-muted flex-shrink-0 shadow-lg relative bg-muted group">
                  <img src={testimonials[index].image} alt={testimonials[index].name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary-500/10 mix-blend-multiply" />
                </div>
                
                <div className="flex-1 space-y-8 text-center md:text-left">
                  <div className="flex justify-center md:justify-start space-x-1.5">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <Star key={i} className="fill-primary-500 text-primary-500" size={18} />
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-foreground/80 italic">
                    "{testimonials[index].quote}"
                  </p>
                  <div className="space-y-1">
                    <h4 className="text-2xl font-black tracking-tighter">{testimonials[index].name}</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-black uppercase tracking-[0.2em] text-[10px]">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 -left-6 md:-left-10 flex items-center z-10">
            <button 
              onClick={() => paginate(-1)}
              className="p-5 rounded-3xl bg-card border border-border/60 hover:bg-primary-500 hover:text-white transition-all text-foreground/40 shadow-xl"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute inset-y-0 -right-6 md:-right-10 flex items-center z-10">
            <button 
              onClick={() => paginate(1)}
              className="p-5 rounded-3xl bg-card border border-border/60 hover:bg-primary-500 hover:text-white transition-all text-foreground/40 shadow-xl"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 space-x-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 transition-all duration-500 rounded-full",
                index === i ? "w-12 bg-primary-600" : "w-2 bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
