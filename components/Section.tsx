import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'light' | 'dark';
}

const Section: React.FC<SectionProps> = ({ children, id, className = '', background = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-stone-50', // Warm light grey/beige
    dark: 'bg-stone-900 text-stone-100',
  };

  return (
    <section id={id} className={`py-20 px-6 md:px-12 ${bgColors[background]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;