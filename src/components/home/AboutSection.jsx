import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react'; // Icon for bullet points

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP Animation Context ensures animations are cleaned up properly
    const ctx = gsap.context(() => {
      
      // 1. Image Reveal Animation
      gsap.from(imgRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", // Starts when the section enters the view
          toggleActions: "play none none reverse"
        }
      });

      // 2. Text Content Stagger Animation
      // Note: Ensure textRef.current exists before animating
      if (textRef.current) {
        gsap.from(textRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2, // Delays each child element by 0.2s
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
          }
        });
      }
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  const highlights = [
    "Market Leadership in Sterile Processing",
    "State-of-the-Art CSSD Infrastructure",
    "Serving 150+ Hospitals & Surgical Centers",
    "End-to-End Traceability Systems"
  ];

  return (
    <section 
      ref={containerRef} 
      className="w-full py-24 lg:py-32 bg-white overflow-hidden" 
      id="about"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Text Narrative */}
          <div ref={textRef} className="order-2 lg:order-1">
            {/* Section Tag */}
            <div className="inline-block mb-4">
              <span className="text-sky-600 font-bold tracking-widest text-xs uppercase border-b-2 border-sky-100 pb-1">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-semibold text-slate-900 mb-8 leading-tight">
              The Standard for <br/>
              <span className="text-slate-400">Medical Safety.</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Vida Life Science is not just a sterilization service; we are a critical extension of your hospital’s infection control protocol. 
              We operate India's most advanced centralized sterilization hubs, ensuring that every surgical instrument entering your OT is biologically safe, legally compliant, and functionally perfect.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-sky-500 mt-1 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* "More About Us" Link */}
            <a href="/about" className="inline-flex items-center text-sky-700 font-semibold hover:text-sky-900 transition-colors group">
              Read Our Corporate Profile
              <span className="block h-[1px] w-8 bg-sky-700 ml-3 group-hover:w-12 transition-all duration-300" />
            </a>
          </div>

          {/* RIGHT COLUMN: Visual Anchor */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-slate-50 rounded-lg -z-10 transform rotate-2" />
            
            {/* Main Image Container */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-slate-200">
               <img 
                 ref={imgRef}
                 src="https://images.unsplash.com/photo-1584036561566-b45274e3e5ee?q=80&w=1000&auto=format&fit=crop" 
                 alt="Vida Life Science Sterile Facility" 
                 className="w-full h-auto object-cover transform origin-center"
               />
               
               {/* Floating Stat Card */}
               <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded shadow-lg border-l-4 border-sky-500 max-w-xs hidden md:block">
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Daily Capacity</p>
                 <p className="text-2xl font-bold text-slate-900">50,000+ Instruments</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;