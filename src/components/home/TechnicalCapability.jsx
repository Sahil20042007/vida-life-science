import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Settings, Scan, Waves, Thermometer, PackageCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TechnicalCapability = () => {
  const processRef = useRef(null);
  const trackRef = useRef(null);

  // DATA: The 5-Step Cycle (Clinical Language)
  const steps = [
    {
      id: "01",
      title: "Decontamination",
      desc: "Bio-burden reduction using automated washer-disinfectors with enzymatic detergents.",
      icon: <Waves size={32} />
    },
    {
      id: "02",
      title: "Ultrasonic Cleaning",
      desc: "Cavitation technology removes microscopic debris from instrument hinges and crevices.",
      icon: <Settings size={32} />
    },
    {
      id: "03",
      title: "Visual Inspection",
      desc: "Digital magnification and illuminated testing of instrument integrity and functionality.",
      icon: <Scan size={32} />
    },
    {
      id: "04",
      title: "Sterilization Cycle",
      desc: "Steam (Autoclave) or Low-Temp Plasma sterilization validating strict kill-time parameters.",
      icon: <Thermometer size={32} />
    },
    {
      id: "05",
      title: "Sterile Storage",
      desc: "Packaging in ISO Class 8 Cleanrooms to maintain sterility until the moment of surgery.",
      icon: <PackageCheck size={32} />
    },
  ];

  // GSAP Horizontal Scroll Logic
  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const cardWidth = track.offsetWidth; 
      const amountToScroll = cardWidth - window.innerWidth;

      gsap.to(track, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: processRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + (track.offsetWidth - window.innerWidth),
          invalidateOnRefresh: true
        }
      });
    }, processRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-white overflow-hidden">
      
      {/* --- PART 1: INFRASTRUCTURE (The Machinery) --- */}
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Narrative */}
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-sky-600"></div>
              <span className="text-sky-700 font-bold tracking-widest uppercase text-xs">
                Infrastructure
              </span>
            </motion.div>

            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
              Medical-Grade <br/>
              <span className="text-slate-400">Processing Capability.</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We operate India's most advanced CSSD hubs. Our facilities are designed with segregated 
              <strong className="text-slate-900"> 'Dirty'</strong> (Decontamination) and 
              <strong className="text-slate-900"> 'Clean'</strong> (Sterile) zones to prevent cross-contamination.
            </p>

            <ul className="space-y-4 mb-10">
              {['Automated Washer Disinfectors', 'Steam & Plasma Sterilizers', 'SS 316L Furniture Standards'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 bg-sky-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Grid (Bento Style) */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-[500px]">
            {/* Image 1: Main Machinery */}
            <div className="col-span-2 h-[60%] bg-slate-100 rounded-2xl overflow-hidden relative group">
               <img 
                 src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format" 
                 alt="Autoclave Machine" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-slate-900 rounded">
                 Steam Autoclave Systems
               </div>
            </div>
            
            {/* Image 2: Clean Room */}
            <div className="bg-slate-100 rounded-2xl overflow-hidden relative group">
               <img 
                 src="https://images.unsplash.com/photo-1584036561566-b45274e3e5ee?q=80&w=600&auto=format" 
                 alt="Clean Room" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
            </div>

            {/* Image 3: Tech Detail */}
            <div className="bg-slate-100 rounded-2xl overflow-hidden relative group">
               <img 
                 src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format" 
                 alt="Inspection" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
               />
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 2: THE PROCESS (Horizontal Scroll) --- */}
      {/* Background is light grey (slate-50) to distinguish it from the white section above */}
      <div ref={processRef} className="relative bg-slate-50 border-t border-slate-200">
        
        {/* Intro Text for Process */}
        <div className="absolute top-12 left-6 lg:left-24 z-10 max-w-md pointer-events-none">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">The Vida Protocol</h3>
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">
            Horizontal Scroll &rarr;
          </p>
        </div>

        {/* The Track */}
        <div ref={trackRef} className="h-screen flex items-center w-max pl-[10vw] pr-[10vw]">
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[50vw] lg:w-[35vw] flex-shrink-0 px-12 border-l border-slate-300 group"
            >
              {/* Step Number */}
              <div className="text-8xl font-bold text-slate-200 mb-6 font-mono select-none group-hover:text-sky-100 transition-colors duration-500">
                {step.id}
              </div>
              
              {/* Animated Line */}
              <div className="h-[3px] w-12 bg-sky-500 mb-8 origin-left group-hover:w-full transition-all duration-700 ease-out" />
              
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white border border-slate-200 rounded-lg text-sky-600 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}

          {/* End Card: The Result */}
          <div className="w-[80vw] md:w-[40vw] flex-shrink-0 flex items-center justify-center pl-12">
             <div className="text-center p-12 bg-white rounded-2xl shadow-xl border border-sky-100">
               <div className="inline-block p-4 bg-green-50 rounded-full text-green-600 mb-6">
                 <PackageCheck size={48} />
               </div>
               <h4 className="text-3xl font-bold text-slate-900 mb-2">100% Sterile</h4>
               <p className="text-slate-500">Ready for Surgical Use</p>
             </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default TechnicalCapability;