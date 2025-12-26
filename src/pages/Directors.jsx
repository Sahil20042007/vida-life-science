import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, TrendingUp, Users } from 'lucide-react';

const Directors = () => {

  // --- 1. UPDATE YOUR DIRECTORS DATA HERE ---
  // Upload photos to: src/assets/directors/
  const directors = [
    {
      name: "Name of Director 1",
      role: "Managing Director",
      bio: "With over 15 years of experience in healthcare infrastructure, they lead the strategic vision of Vida Life Sciences, focusing on long-term institutional partnerships and regulatory compliance.",
      expertise: "Strategic Planning, Regulatory Affairs",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format" // Replace with local import
    },
    {
      name: "Name of Director 2",
      role: "Technical Director",
      bio: "An expert in biomedical engineering and sterilization technologies. Responsible for overseeing the R&D division and ensuring all equipment meets global safety standards (ISO/IEC).",
      expertise: "R&D, Product Design, CSSD Engineering",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format"
    },
    {
      name: "Name of Director 3",
      role: "Operations Director",
      bio: "Oversees the manufacturing and supply chain operations, ensuring that the 'Zero Tolerance for Error' policy is maintained across all production lines.",
      expertise: "Manufacturing, Supply Chain, Quality Control",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format"
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-24 lg:pt-32 pb-24">
      
      {/* 1. HERO SECTION */}
      <div className="container mx-auto px-6 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-sky-600"></div>
            <span className="text-sky-700 font-bold uppercase tracking-widest text-xs">
              Leadership & Governance
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
            Guided by <br/>
            <span className="text-slate-400">Experience & Discipline.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl border-l-4 border-slate-300 pl-6">
            Vida Life Sciences benefits from a multidisciplinary leadership structure that integrates clinical understanding, CSSD operational expertise, and manufacturing precision.
          </p>
        </motion.div>
      </div>

      {/* 2. DIRECTORS GRID */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500"
            >
              {/* Image Area */}
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">{leader.role}</div>
                  <h3 className="text-xl font-bold">{leader.name}</h3>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {leader.bio}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.split(', ').map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex gap-4 pt-6 border-t border-slate-100">
                  <button className="text-slate-400 hover:text-sky-600 transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="text-slate-400 hover:text-sky-600 transition-colors">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. GOVERNANCE PHILOSOPHY */}
      <section className="w-full bg-slate-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">A Framework of Accountability</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              Our governance framework supports evidence-based decision-making, long-term stability, and accountable healthcare partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-800/50 rounded-xl border border-slate-700">
              <Award className="text-sky-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Clinical Integrity</h3>
              <p className="text-slate-400 text-sm">Decisions are driven by patient safety data and infection control protocols, not just profitability.</p>
            </div>
            <div className="p-8 bg-slate-800/50 rounded-xl border border-slate-700">
              <TrendingUp className="text-emerald-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Sustainable Growth</h3>
              <p className="text-slate-400 text-sm">We focus on long-term infrastructure planning rather than short-term market trends.</p>
            </div>
            <div className="p-8 bg-slate-800/50 rounded-xl border border-slate-700">
              <Users className="text-purple-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Unified Oversight</h3>
              <p className="text-slate-400 text-sm">Leadership is directly involved in quality audits, ensuring top-to-bottom compliance.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Directors;