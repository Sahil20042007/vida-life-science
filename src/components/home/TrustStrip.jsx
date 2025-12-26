import React from 'react';
import { Award, ShieldCheck, FileCheck, Globe } from 'lucide-react'; 

const TrustStrip = () => {
  // DATA MOCK: In production, replace 'icon' with actual SVG logo paths
  const certifications = [
    { 
      id: 1, 
      label: "ISO 13485:2016 Certified", 
      sub: "Medical Devices Quality Mgmt",
      icon: <ShieldCheck size={32} /> 
    },
    { 
      id: 2, 
      label: "NABH Accredited", 
      sub: "National Accreditation Board",
      icon: <Award size={32} /> 
    },
    { 
      id: 3, 
      label: "WHO-GMP Compliant", 
      sub: "Good Manufacturing Practice",
      icon: <Globe size={32} /> 
    },
    { 
      id: 4, 
      label: "FDA Registered Facility", 
      sub: "US Food & Drug Administration",
      icon: <FileCheck size={32} /> 
    },
  ];

  return (
    <section className="w-full bg-white border-y border-slate-100 py-10">
      <div className="container mx-auto px-6">
        
        {/* LAYOUT STRATEGY: 
          - Flexbox for alignment.
          - Flex-wrap ensures it breaks gracefully on mobile.
          - 'justify-between' spaces them evenly across the width.
        */}
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-0">
          
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="group flex items-center gap-4 cursor-default transition-all duration-300"
            >
              {/* Icon / Logo Container */}
              {/* DESIGN NOTE: Grayscale by default, color on hover. 
                  This keeps the UI looking 'calm' until interacted with. */}
              <div className="text-slate-300 group-hover:text-sky-600 transition-colors duration-300">
                {cert.icon}
              </div>

              {/* Text Information */}
              <div className="flex flex-col">
                <span className="font-semibold text-slate-700 text-sm tracking-wide group-hover:text-slate-900 transition-colors">
                  {cert.label}
                </span>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider group-hover:text-sky-500 transition-colors">
                  {cert.sub}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrustStrip;