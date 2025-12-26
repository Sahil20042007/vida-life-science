import React, { useLayoutEffect, useRef } from 'react'; // Changed to useLayoutEffect
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger outside the component
gsap.registerPlugin(ScrollTrigger);

const History = () => {
  const containerRef = useRef(null);

  // --- DATA ---
  const milestones = [
    {
      year: "2011",
      title: "The Genesis",
      desc: "Founded by three directors with a singular vision. Vida Life Sciences began operations, establishing the groundwork for a healthcare-focused entity.",
      badge: "Inception",
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format"
    },
    {
      year: "2014",
      title: "Capability Shift",
      desc: "Transitioned from supply to in-house manufacturing. We did not jump into production immediately; capabilities were built step-by-step.",
      badge: "Manufacturing",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format"
    },
    {
      year: "2016",
      title: "Research & Reach",
      desc: "Established a dedicated R&D department after field experience. Expanded geographic presence across Maharashtra and overseas.",
      badge: "Expansion",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format"
    },
    {
      year: "2019",
      title: "Global Validation",
      desc: "Recognized as 'Fastest Growing Indian Company'. Executed our first international CSSD setup in South Africa (Congo).",
      badge: "Recognition",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format"
    },
    {
      year: "2021",
      title: "Crisis Resilience",
      desc: "Demonstrated operational resilience during COVID-19. Completed critical installations in Imphal and gained government sector trust.",
      badge: "Resilience",
      img: "https://images.unsplash.com/photo-1584036561566-b45274e3e5ee?q=80&w=800&auto=format"
    },
    {
      year: "2025",
      title: "Maturity Peak",
      desc: "First patent granted and Scopus-indexed research published. Vida stands as an innovator in sterilization technology.",
      badge: "Innovation",
      img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format"
    }
  ];

  // --- ANIMATION LOGIC ---
  useLayoutEffect(() => {
    // 1. Safety Check: If container isn't ready, don't run GSAP
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      
      // HERO ANIMATIONS (Simple Fade Ups)
      const tl = gsap.timeline();
      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" })
        .from(".main-title", { y: 30, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.6")
        .from(".desc-text", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.6");

      // TIMELINE TRACK (Draws the line down as you scroll)
      gsap.to(".track-fill", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".journey-section",
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // HUGE YEAR (Parallax Effect - Moves slower than scroll)
      gsap.utils.toArray(".huge-year").forEach((year) => {
        gsap.to(year, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: year,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // CONTENT CARDS (Fade In on Scroll)
      gsap.utils.toArray(".js-reveal").forEach((card) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 50 },
          {
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // IMAGE REVEAL (Scale Effect)
      gsap.utils.toArray(".js-image-reveal img").forEach((img) => {
        gsap.fromTo(img,
          { scale: 1.2 },
          {
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen pt-24 pb-24 overflow-hidden">
      
      {/* ================= HERO ================= */}
      <header className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6 mb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f0f9ff_0%,#f8fafc_60%)] z-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="hero-badge inline-block px-6 py-2 border border-sky-600 rounded-full text-sky-700 font-bold text-sm tracking-[0.2em] uppercase mb-6 bg-white/50 backdrop-blur-sm">
            Est. 2011
          </div>
          <h1 className="main-title text-5xl lg:text-7xl font-bold text-slate-900 leading-[0.9] tracking-tighter mb-8">
            EVOLUTION OF <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-800">DISCIPLINE</span>
          </h1>
          <p className="desc-text text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Vida did not appear overnight. We are the result of 14 years of phased capability building, field-tested research, and validated maturity.
          </p>
        </div>
      </header>

      {/* ================= JOURNEY ================= */}
      <section className="journey-section relative container mx-auto px-6">
        
        {/* Timeline Track (Central Line) */}
        <div className="absolute top-0 bottom-0 left-[2rem] lg:left-1/2 lg:-translate-x-1/2 w-[2px] h-full z-0 hidden md:block">
          <div className="absolute inset-0 bg-slate-200"></div>
          <div className="track-fill absolute top-0 left-0 w-full h-0 bg-sky-600 shadow-[0_0_15px_rgba(14,165,233,0.6)]"></div>
        </div>

        <div className="relative z-10">
          {milestones.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 mb-32 lg:mb-48 relative ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* CONTENT SIDE */}
              <div className="w-full lg:w-[45%] relative">
                {/* Huge Year (Parallax Background) */}
                {/* Huge Year (Parallax Background) - UPDATED FOR VISIBILITY */}
                    <div 
                    className="huge-year absolute -top-32 left-1/2 -translate-x-1/2 text-[6rem] lg:text-[10rem] font-black text-slate-300 leading-none select-none z-[-1] opacity-60"
                    style={{ WebkitTextStroke: '2px #cbd5e1' }} // Added a slight border to make it pop
                    >
                    {item.year}
                    </div>

                {/* Text Card */}
                <div className="js-reveal bg-white/80 backdrop-blur-md p-8 lg:p-12 rounded-2xl border border-white shadow-xl shadow-slate-200/50">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* IMAGE SIDE */}
              <div className="w-full lg:w-[45%] h-[400px] relative js-image-reveal group">
                <div className={`w-full h-full rounded-3xl overflow-hidden shadow-[20px_20px_0px_#e0f2fe] ${index % 2 === 1 ? 'lg:shadow-[-20px_20px_0px_#e0f2fe]' : ''}`}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Badge */}
                <div className={`absolute -bottom-4 bg-sky-600 text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest shadow-lg shadow-sky-900/20 ${index % 2 === 1 ? 'left-8' : 'right-8'}`}>
                  {item.badge}
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
};

export default History;