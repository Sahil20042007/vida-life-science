import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">
      
      {/* --- LAYER 1: VIDEO BACKGROUND (Bright/Sterile Mode) --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80" // Higher opacity, let the white overlay handle the fade
          poster="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format"
        >
          {/* Ensure you have a video in public/hero-video.mp4 OR use this link */}
          <source src="/public" type="video/mp4" />
          {/* Fallback link for testing */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-scientist-looking-through-a-microscope-in-a-laboratory-4632-large.mp4" type="video/mp4" />
        </video>
        
        {/* THE MAGIC TRICK: White Gradient Overlay */}
        {/* Left side is solid white (for text), Right side reveals the video */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />
      </div>

      {/* --- LAYER 2: CONTENT (Dark Text) --- */}
      <div className="container mx-auto px-6 relative z-10 h-full flex items-center pt-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          
          {/* LEFT: Core Narrative */}
          <div className="lg:col-span-8">
            
            {/* Regulatory Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-8 border-l-4 border-sky-600 pl-4 bg-sky-50 py-2 pr-4 rounded-r-sm"
            >
              <span className="text-sky-700 font-bold text-sm tracking-widest uppercase">
                Licensed Manufacturer • MFG/MD/2023
              </span>
            </motion.div>

            {/* Headline - Dark Text on White */}
            <div className="overflow-hidden mb-8">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} 
                className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight"
              >
                Sterility is not a Service.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                  It is a Precision.
                </span>
              </motion.h1>
            </div>

            {/* Subtext - Dark Grey */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed mb-12 font-medium"
            >
              Vida Life Sciences is a regulated entity operating under the <strong className="text-slate-900">Indian Medical Devices Rules</strong>. 
              We don't just clean instruments; we manufacture safety for 300+ hospitals across India.
            </motion.p>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-sky-600 text-white rounded-sm font-semibold tracking-wide hover:bg-sky-700 transition-all duration-300 flex items-center gap-2 group shadow-xl shadow-sky-200">
                Verify Compliance
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white border border-slate-300 text-slate-700 rounded-sm font-semibold hover:border-sky-600 hover:text-sky-700 transition-all duration-300 flex items-center gap-2 shadow-sm">
                <ShieldCheck size={18} />
                Our Quality Policy
              </button>
            </motion.div>
          </div>

          {/* RIGHT: Stats (Dark Text) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-center items-start lg:items-end space-y-12">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 1 }}
               className="text-right"
             >
                <div className="text-6xl font-light text-slate-900 mb-1 tracking-tighter">12+</div>
                <div className="text-sm text-sky-600 uppercase tracking-widest font-bold">Years of Precision</div>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 1.2 }}
               className="text-right"
             >
                <div className="text-6xl font-light text-slate-900 mb-1 tracking-tighter">Zero</div>
                <div className="text-sm text-sky-600 uppercase tracking-widest font-bold">Tolerance for Error</div>
             </motion.div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator (Dark) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs tracking-widest uppercase font-semibold"
      >
        <span>Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
      </motion.div>

    </section>
  );
};

export default HeroSection;