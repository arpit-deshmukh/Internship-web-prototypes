import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  asChild = false,
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm active:scale-95',
    secondary: 'bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-foreground hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm active:scale-95',
    ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground active:scale-95',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-black active:scale-95'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base font-medium',
    lg: 'px-8 py-3.5 text-lg font-semibold tracking-wide'
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center rounded-lg transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 dark:focus:ring-offset-black',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export default Button;
