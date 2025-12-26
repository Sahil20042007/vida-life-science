import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  
  const stats = [
    { id: 1, value: "12+", label: "Years of Service" },
    { id: 2, value: "150+", label: "Partner Hospitals" },
    { id: 3, value: "100%", label: "Compliance Rate" },
    { id: 4, value: "24/7", label: "Operational Capability" },
  ];

  // Placeholder for Hospital/Client Logos
  // In production, these would be grayscale SVGs of actual hospital chains
  const clients = ["Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "Manipal Hospitals", "Narayana Health"];

  return (
    <section className="w-full bg-slate-50" id="stats">
      
      {/* 1. THE IMPACT BAR (Dark Blue) */}
      <div className="bg-sky-900 text-white py-20 rounded-t-[2.5rem] lg:rounded-t-[4rem] relative z-10 -mt-12 mx-0 lg:mx-6 shadow-2xl shadow-sky-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-x-0 lg:divide-x divide-sky-800/50">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl lg:text-6xl font-bold mb-2 text-white tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-sky-200/80 text-sm font-semibold uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. THE TRUSTED PARTNERS (Light Gray) */}
      <div className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">
            Trusted by India's Leading Healthcare Institutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 items-center opacity-60">
            {clients.map((client, i) => (
              <motion.div 
                key={i}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="text-xl lg:text-2xl font-serif font-bold text-slate-400 cursor-default transition-all"
              >
                {/* Visual Placeholder for Logo */}
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default StatsSection;