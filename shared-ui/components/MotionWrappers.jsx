import React from 'react';
import { motion } from 'framer-motion';

/**
 * FadeIn – Smoothly fades content into view with Y-axis translation.
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation speed in seconds
 */
export const FadeIn = ({ children, delay = 0, duration = 0.8, y = 20, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration, ease: [0.25, 1, 0.5, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * ScaleIn – Gently scales content up while fading in.
 */
export const ScaleIn = ({ children, delay = 0, duration = 0.5, initialScale = 0.95, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: initialScale }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * RevealText – Sophisticated character-by-character text reveal animation.
 */
export const RevealText = ({ text = '', delay = 0, className = '' }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i + delay },
    }),
  };

  const item = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={item} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

/**
 * SlideIn – Slides content from a specified direction.
 * @param {'left' | 'right' | 'up' | 'down'} direction - Direction to slide from
 */
export const SlideIn = ({ children, direction = 'left', delay = 0, distance = 50, className = '' }) => {
  const directions = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration: 1, ease: [0.33, 1, 0.68, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
