import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, Scale, ArrowRight } from 'lucide-react';

const FoundationSection = () => {
  
  // The 3 Pillars of Vida
  const pillars = [
    {
      id: 1,
      icon: <Building2 size={28} />,
      title: "Established Stability",
      desc: "Founded in 2011, we bring over a decade of operational continuity. We are not a startup; we are a long-term infrastructure partner.",
      delay: 0.2
    },
    {
      id: 2,
      icon: <Stethoscope size={28} />,
      title: "Exclusive Healthcare Focus",
      desc: "We do not service industrial or food sectors. 100% of our protocols are designed for surgical instruments and patient-critical environments.",
      delay: 0.4
    },
    {
      id: 3,
      icon: <Scale size={28} />,
      title: "Governance Driven",
      desc: "Our operations are built on a framework of legal compliance, auditable workflows, and absolute adherence to the Indian Medical Devices Rules.",
      delay: 0.6
    }
  ];

  return (
    <section className="w-full py-24 lg:py-32 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: The Manifesto (Sticky on Desktop) */}
          <div className="lg:sticky lg:top-32">
            
            {/* Section Tag */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[2px] bg-sky-600"></div>
              <span className="text-sky-700 font-bold tracking-widest uppercase text-xs">
                Our Foundation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8"
            >
              Built on the Principles of <br/>
              <span className="text-sky-600">Clinical Governance.</span>
            </motion.h2>

            {/* Editorial Text */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-600 leading-relaxed mb-10"
            >
              In an industry often driven by cost-cutting, Vida Life Sciences stands for <strong>regulatory discipline</strong>. 
              We understand that sterilization is the first line of defense in patient safety.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-slate-600 leading-relaxed mb-10"
            >
              Our infrastructure is designed not just to meet current standards, but to future-proof your hospital against evolving infection control regulations.
            </motion.p>

            {/* Read More Link */}
            <motion.a 
              href="#about"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-2 text-sky-700 font-bold hover:gap-4 transition-all duration-300 group"
            >
              Read Our Corporate Profile
              <ArrowRight size={18} className="group-hover:text-sky-500" />
            </motion.a>
          </div>

          {/* RIGHT: The Pillars (Cards) */}
          <div className="flex flex-col gap-6">
            {pillars.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
                className="bg-white p-8 lg:p-10 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-200 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  {/* Icon Box */}
                  <div className="w-14 h-14 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 shrink-0">
                    {item.icon}
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoundationSection;