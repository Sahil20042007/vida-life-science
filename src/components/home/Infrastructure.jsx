import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Layers } from 'lucide-react';

const Infrastructure = () => {
  
  // Technical Highlights Data
  const features = [
    {
      icon: <Layers size={20} />,
      title: "Automated Washer-Disinfectors",
      desc: "High-throughput cleaning ensuring consistent bio-burden removal."
    },
    {
      icon: <Cpu size={20} />,
      title: "Low-Temp Plasma Sterilizers",
      desc: "Advanced cycling for heat-sensitive endoscopic equipment."
    },
    {
      icon: <Server size={20} />,
      title: "AI-Driven Traceability",
      desc: "Real-time digital tracking of every instrument set via QR/RFID."
    }
  ];

  return (
    <section className="w-full py-24 bg-slate-50" id="infrastructure">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT COLUMN: Technical Narrative */}
          <div className="w-full lg:w-1/3 sticky top-24">
            <div className="inline-block mb-4">
              <span className="text-sky-600 font-bold tracking-widest text-xs uppercase border-b-2 border-sky-100 pb-1">
                Our Facility
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
              Engineered for <br/>
              <span className="text-sky-600">Zero-Error</span> Performance.
            </h2>
            
            <p className="text-slate-600 leading-relaxed mb-10">
              Our Central Sterile Services Department (CSSD) is designed to international cleanroom standards. We invest in the world's best machinery to guarantee that your surgical schedule is never compromised by equipment failure.
            </p>

            {/* Feature List */}
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-sky-600 shadow-sm group-hover:border-sky-500 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: The "Bento" Image Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 h-auto lg:h-[600px]">
             
             {/* Image 1: The Hero Shot (Clean Room) - Spans full height on left */}
             <div className="md:row-span-2 relative rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=800&auto=format" 
                  alt="Sterile Clean Room Corridor" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-slate-800 rounded">ISO Class 8 Cleanroom</span>
                </div>
             </div>

             {/* Image 2: Machinery Detail (Top Right) */}
             <div className="relative rounded-2xl overflow-hidden group h-64 md:h-auto">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format" 
                  alt="Autoclave Machine Interface" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 z-20">
                   <span className="text-white text-xs font-bold tracking-wider shadow-black drop-shadow-md">DIGITAL MONITORING</span>
                </div>
             </div>

             {/* Image 3: Staff/Human Element (Bottom Right) */}
             <div className="relative rounded-2xl overflow-hidden group h-64 md:h-auto">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=600&auto=format" 
                  alt="Technician inspecting instruments" 
                  className="w-full h-full object-cover"
                />
                 <div className="absolute bottom-4 left-4 z-20">
                   <span className="text-white text-xs font-bold tracking-wider shadow-black drop-shadow-md">EXPERT INSPECTION</span>
                </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Infrastructure;