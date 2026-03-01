import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

const Card = ({ className, children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-500 hover:border-primary-500/50 dark:bg-card/40 dark:backdrop-blur-sm',
        className
      )}
      {...props}
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute -inset-px opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity bg-gradient-to-br from-primary-400 to-sky-500 blur-xl -z-10" />
      {children}
    </motion.div>
  );
};

export default Card;
