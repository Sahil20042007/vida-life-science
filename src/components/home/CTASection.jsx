import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-sky-50" id="contact">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        {/* Animated Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow Text */}
          <span className="text-sky-600 font-bold tracking-widest text-xs uppercase mb-4 block">
            Ready for Implementation?
          </span>

          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
            Elevate Your Hospital's <br/>
            <span className="text-slate-400">Sterility Standards.</span>
          </h2>

          {/* Narrative */}
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Join the network of 150+ hospitals trusting Vida with their critical instrument processing. 
            Schedule a facility tour or consult with our technical directors regarding your specific sterilization requirements.
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
            
            {/* Primary Action: Contact/Consult */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-sky-600 text-white rounded-sm font-medium tracking-wide shadow-xl shadow-sky-900/10 flex items-center gap-3 group transition-all"
            >
              <Phone size={18} />
              <span>Schedule Consultation</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary Action: Information */}
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-sm font-medium tracking-wide flex items-center gap-3 hover:border-sky-300 transition-colors"
            >
              <FileText size={18} />
              <span>Download Brochure</span>
            </motion.button>
          </div>
          
          {/* Compliance Footer Note */}
          <p className="mt-8 text-xs text-slate-400">
            Our technical team typically responds to RFPs within 24 hours.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;