import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle2, FileCheck, X, ZoomIn, Award, Globe, Leaf } from 'lucide-react';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // --- 1. IMAGE CONFIGURATION (REPLACE THESE PATHS) ---
  // Upload your 17 images to: src/assets/certificates/
  // Then update these paths. For now, I used placeholders.
  const certImages = {
    mdr: "https://via.placeholder.com/600x800?text=MDR+License+Scan", // Replace with actual MDR License image
    iso13485: "https://via.placeholder.com/600x800?text=ISO+13485+Certificate",
    iso9001: "https://via.placeholder.com/600x800?text=ISO+9001+Certificate",
    ce: "https://via.placeholder.com/600x800?text=CE+Certificate",
    who: "https://via.placeholder.com/600x800?text=WHO+GMP+Certificate",
    iso14001: "https://via.placeholder.com/600x800?text=ISO+14001",
    iso45001: "https://via.placeholder.com/600x800?text=ISO+45001",
    patent: "https://via.placeholder.com/600x800?text=Patent+Certificate",
  };

  // Animation Helper
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-24 lg:pt-32 pb-24">
      
      {/* --- LIGHTBOX MODAL (Pop-up when clicking an image) --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-sky-400">
              <X size={48} />
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate Full View" 
              className="max-h-[90vh] max-w-full rounded shadow-2xl" 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <div className="container mx-auto px-6 mb-20">
        <motion.div {...fadeUp} className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-sky-600"></div>
            <span className="text-sky-700 font-bold uppercase tracking-widest text-xs">
              Regulatory Authorization
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
            Certifications & <br/>
            <span className="text-slate-400">Global Compliance.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl border-l-4 border-sky-600 pl-6 bg-white py-4 pr-4 shadow-sm rounded-r-lg">
            Vida Life Sciences operates within a regulated healthcare framework, authorized to manufacture medical devices under applicable 
            <strong className="text-slate-900"> Indian Medical Devices Rules</strong> and international standards.
          </p>
        </motion.div>
      </div>

      {/* --- TIER 1: GOVERNMENT AUTHORIZATION (MDR) --- */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-slate-200">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="text-sky-600" size={28} />
              <h2 className="text-2xl font-bold text-slate-900">Medical Device Manufacturing Authorization</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Vida Life Sciences holds authorization from the Central Licensing Authority, Government of India, under the 
              <strong className="text-slate-900"> Medical Devices Rules, 2017</strong>.
            </p>
            
            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Authorized Device Classes:</h4>
              <ul className="space-y-3">
                {[
                  "Fully Automatic Autoclave (Class C)",
                  "Ethylene Oxide (ETO) Sterilizer (Class C)",
                  "Automatic Bed Pan Washer (Class A)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-slate-500 italic">
              *Confirming compliance with statutory requirements for manufacturing and regulatory oversight.
            </p>
          </div>

          {/* Image Slot: MDR License */}
          <div className="relative group cursor-pointer bg-slate-100 rounded-xl overflow-hidden border border-slate-200" onClick={() => setSelectedImage(certImages.mdr)}>
             <img src={certImages.mdr} alt="MDR License" className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
             <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
               <span className="opacity-0 group-hover:opacity-100 bg-white/90 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                 <ZoomIn size={16} /> View License
               </span>
             </div>
          </div>

        </div>
      </section>

      {/* --- TIER 2: CORE QUALITY (ISO) --- */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Quality Management Systems</h2>
          <p className="text-slate-600 max-w-2xl">
            We follow established quality management frameworks to ensure consistency, traceability, and risk control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "ISO 13485:2016", 
              desc: "QMS for Medical Devices", 
              img: certImages.iso13485,
              color: "text-sky-600",
              bg: "bg-sky-50"
            },
            { 
              title: "ISO 9001:2015", 
              desc: "General Quality Management", 
              img: certImages.iso9001,
              color: "text-blue-600",
              bg: "bg-blue-50"
            },
            { 
              title: "WHO GMP Compliant", 
              desc: "Good Manufacturing Practices", 
              img: certImages.who,
              color: "text-emerald-600",
              bg: "bg-emerald-50"
            },
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow group"
            >
              <div className={`w-12 h-12 ${card.bg} ${card.color} rounded-lg flex items-center justify-center mb-4`}>
                <Award size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{card.desc}</p>
              
              {/* Thumbnail */}
              <div 
                className="h-48 bg-slate-50 border border-slate-100 rounded-lg overflow-hidden relative cursor-pointer"
                onClick={() => setSelectedImage(card.img)}
              >
                <img src={card.img} alt={card.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="text-slate-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TIER 3: SAFETY, GLOBAL & GREEN (Grid) --- */}
      <section className="w-full bg-slate-900 py-24 text-slate-300">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Global & Safety Standards */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-sky-500" size={24} />
                <h3 className="text-2xl font-bold text-white">Global & Safety Standards</h3>
              </div>
              <p className="leading-relaxed mb-8">
                Sterilization processes aligned with internationally recognized standards for infection prevention.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "CE Certified", desc: "Conformity with European health, safety, and environmental protection standards.", img: certImages.ce },
                  { title: "EN ISO 15883 Series", desc: "Standard for Washer-disinfectors and sterilization systems.", img: null }, // Placeholder if no image
                  { title: "IEC 61010 Series", desc: "Safety requirements for electrical equipment in medical environments.", img: null },
                  { title: "US FDA Registration", desc: "Registered facility for applicable medical device exports.", img: null }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-sky-500/50 transition-colors">
                    <FileCheck className="text-sky-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                      {item.img && (
                        <button onClick={() => setSelectedImage(item.img)} className="text-xs text-sky-400 mt-2 hover:underline flex items-center gap-1">
                          <ZoomIn size={12} /> View Certificate
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Environment & Safety */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="text-emerald-500" size={24} />
                <h3 className="text-2xl font-bold text-white">EHS Commitment</h3>
              </div>
              <p className="leading-relaxed mb-8">
                Aligned with WHO principles for safe manufacturing environments and environmental responsibility.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-2 rounded-lg cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage(certImages.iso14001)}>
                  <img src={certImages.iso14001} alt="ISO 14001" className="w-full h-40 object-cover rounded mb-2" />
                  <div className="text-center">
                    <div className="text-slate-900 font-bold text-sm">ISO 14001</div>
                    <div className="text-slate-500 text-xs">Environmental Mgmt</div>
                  </div>
                </div>

                <div className="bg-white p-2 rounded-lg cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage(certImages.iso45001)}>
                  <img src={certImages.iso45001} alt="ISO 45001" className="w-full h-40 object-cover rounded mb-2" />
                  <div className="text-center">
                    <div className="text-slate-900 font-bold text-sm">ISO 45001</div>
                    <div className="text-slate-500 text-xs">Occupational Health</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-emerald-900/20 border border-emerald-800 rounded-xl">
                 <h4 className="font-bold text-emerald-400 mb-2">Compliance Governance</h4>
                 <p className="text-sm">
                   Our compliance is not a one-time event. We undergo periodic audits, process validation, and regulatory reviews to maintain these certifications.
                 </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TIER 4: INNOVATION (PATENT) --- */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          <div className="p-12 lg:w-1/2 flex flex-col justify-center">
            <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs tracking-widest uppercase mb-6 w-fit">
              Innovation
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Design Registration & <br/>Patent Protection.
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8 text-lg">
              We don't just follow standards; we set them. Vida Life Sciences has received its first patent, recognizing innovation in automated instrument care and sterilization equipment.
            </p>
            <p className="text-slate-400 text-sm">
              *Select equipment is supported by Government of India design registration, protecting original product designs.
            </p>
          </div>

          <div className="lg:w-1/2 bg-slate-100 p-8 flex items-center justify-center relative cursor-pointer group" onClick={() => setSelectedImage(certImages.patent)}>
             {/* Patent Certificate Placeholder */}
             <img src={certImages.patent} alt="Patent Certificate" className="max-w-[80%] shadow-2xl border-4 border-white rotate-2 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105" />
             <div className="absolute bottom-12 bg-white/90 backdrop-blur px-6 py-3 rounded-full text-slate-900 font-bold shadow-lg flex items-center gap-2">
               <ZoomIn size={18} /> View Patent
             </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Certificates;