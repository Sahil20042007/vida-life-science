import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Droplets, Waves, ScanEye, ThermometerSun, PackageCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProcessTimeline = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  // DATA: The 5 Critical Steps
  const steps = [
    {
      id: "01",
      title: "Decontamination",
      desc: "Bio-burden reduction using enzymatic cleaners and automated washers.",
      icon: <Droplets size={48} />
    },
    {
      id: "02",
      title: "Ultrasonic Cleaning",
      desc: "High-frequency sound waves remove microscopic debris from crevices.",
      icon: <Waves size={48} />
    },
    {
      id: "03",
      title: "Digital Inspection",
      desc: "Verification of instrument integrity using magnified visual systems.",
      icon: <ScanEye size={48} />
    },
    {
      id: "04",
      title: "Sterilization",
      desc: "Steam, ETO, or Plasma cycles executed within controlled chambers.",
      icon: <ThermometerSun size={48} />
    },
    {
      id: "05",
      title: "Sterile Packaging",
      desc: "ISO Class 8 cleanroom packaging ensuring long-term sterility maintenance.",
      icon: <PackageCheck size={48} />
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // THE LOGIC: 
      // 1. Select the container holding all cards (.scroll-track)
      // 2. Calculate how far it needs to move (Total Width - Viewport Width)
      // 3. Pin the section while animating x-position
      
      const track = document.querySelector(".scroll-track");
      const cardWidth = track.offsetWidth; 
      const amountToScroll = cardWidth - window.innerWidth;

      gsap.to(track, {
        x: -amountToScroll, // Move left
        ease: "none", // Linear movement for connection with scrollbar
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true, // Lock the screen
          scrub: 1, // Smooth catch-up (1s delay)
          snap: 1 / (steps.length - 1), // Optional: Snap to cards
          // The 'end' value defines how "long" the scroll feels. 
          // '+=' + cardWidth means you have to scroll the pixel equivalent of the width.
          end: () => "+=" + cardWidth, 
          invalidateOnRefresh: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [steps.length]);

  return (
    <section 
      ref={sectionRef} 
      className="bg-slate-900 text-white overflow-hidden relative"
      id="process"
    >
      {/* Intro Header (Visible initially) */}
      <div className="absolute top-12 left-6 lg:left-24 z-10 max-w-md pointer-events-none">
        <h2 className="text-3xl font-light tracking-tight text-sky-400 mb-2">
          The Vida Protocol
        </h2>
        <p className="text-slate-400 text-sm">
          Scroll to examine our 5-stage proprietary safety cycle.
        </p>
      </div>

      {/* THE HORIZONTAL TRACK */}
      <div 
        ref={triggerRef} 
        className="h-screen flex items-center scroll-track w-max pl-[10vw] pr-[10vw]"
      >
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="w-[85vw] md:w-[60vw] lg:w-[35vw] flex-shrink-0 px-8 lg:px-12 border-l border-slate-700/50 group"
          >
            {/* Step Number (Big & Industrial) */}
            <div className="text-7xl lg:text-9xl font-bold text-slate-800 mb-8 font-mono opacity-50 select-none group-hover:text-slate-700 transition-colors duration-500">
              {step.id}
            </div>
            
            {/* Visual Indicator Line */}
            <div className="h-[2px] w-16 bg-sky-500 mb-8 origin-left group-hover:w-full transition-all duration-700 ease-out" />
            
            {/* Icon */}
            <div className="text-sky-400 mb-6 opacity-80">
              {step.icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl lg:text-3xl font-medium mb-4 text-slate-100">
              {step.title}
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed font-light">
              {step.desc}
            </p>
          </div>
        ))}

        {/* Final "Quality Seal" Card */}
        <div className="w-[85vw] md:w-[60vw] lg:w-[30vw] flex-shrink-0 flex items-center justify-center pl-12">
            <div className="p-12 border border-sky-500/30 bg-sky-900/10 rounded-full text-center aspect-square flex flex-col items-center justify-center backdrop-blur-sm">
                <span className="text-sky-400 text-xl font-bold tracking-widest uppercase mb-2">Result</span>
                <span className="text-4xl text-white font-serif italic">100% Sterile</span>
            </div>
        </div>

      </div>

      {/* Progress Bar (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-slate-800">
         <div className="h-full bg-sky-600 origin-left scale-x-0 progress-bar-indicator" />
      </div>
    </section>
  );
};

export default ProcessTimeline;