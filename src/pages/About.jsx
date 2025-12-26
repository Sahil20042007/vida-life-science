import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Activity, Users, Award, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  
  // Section Animation Settings
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-24 lg:pt-32 pb-24">
      
      {/* 1. HEADER / HERO */}
      <div className="container mx-auto px-6 mb-20 lg:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-sky-600"></div>
            <span className="text-sky-700 font-bold uppercase tracking-widest text-xs">Corporate Profile</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
            Precision. Discipline.<br/>
            <span className="text-slate-400">Institutional Trust.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl border-l-4 border-sky-200 pl-6">
            Vida Life Sciences Pvt. Ltd. is a healthcare-focused organization established in 2011, operating exclusively in the field of medical sterilization, CSSD solutions, and healthcare equipment manufacturing.
          </p>
        </motion.div>
      </div>

      {/* 2. OUR PURPOSE (Grid) */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div {...fadeUp} className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Our Purpose in Healthcare</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Healthcare environments demand precision, discipline, and accountability. Vida Life Sciences exists to support these requirements by providing structured sterilization solutions and medical systems that align with infection prevention and control protocols.
              </p>
              <ul className="space-y-4">
                {[
                  "Supporting patient safety through reliable sterilization practices",
                  "Enabling hospitals to maintain compliant CSSD operations",
                  "Delivering systems that are repeatable, auditable, and sustainable"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <Target size={20} className="text-sky-600 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 lg:h-full min-h-[300px] bg-slate-100 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0674f66?q=80&w=1000&auto=format" 
                alt="Medical Purpose" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. WHAT WE DO (Cards) */}
      <section className="w-full bg-white py-24 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-slate-500">
              Operating across the complete lifecycle of hospital sterilization and CSSD solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase size={32} />,
                title: "CSSD Manufacturing",
                desc: "Manufacturing of medical devices, CSSD equipment, and SS 304/316L hospital furniture."
              },
              {
                icon: <Activity size={32} />,
                title: "Turnkey Projects",
                desc: "End-to-end CSSD project planning, design, and implementation for hospitals."
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Operational Support",
                desc: "Equipment maintenance, AMC/CMC services, and healthcare staff training."
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="p-8 bg-slate-50 rounded-xl hover:bg-sky-50 transition-colors duration-300 border border-slate-100"
              >
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-sky-600 shadow-sm mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REGULATORY & SCALE */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Regulatory */}
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-sky-600" size={24} />
              <h3 className="text-2xl font-bold text-slate-900">Regulatory Commitment</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Vida Life Sciences functions within a regulated medical framework and holds authorization to manufacture specified medical devices under the <strong className="text-slate-900">Indian Medical Devices Rules</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We operate with established quality management standards that support both national and international healthcare requirements. This compliance-driven approach ensures reliability and consistency across hospital installations.
            </p>
            
            <Link to="/certificates" className="inline-block mt-8 text-sky-600 font-bold border-b-2 border-sky-100 hover:border-sky-600 transition-colors">
              View Our Certifications &rarr;
            </Link>
          </motion.div>

          {/* Scale */}
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <div className="flex items-center gap-2 mb-6">
              <Users className="text-sky-600" size={24} />
              <h3 className="text-2xl font-bold text-slate-900">Scale & Presence</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">
              Over the years, Vida Life Sciences has supported <strong className="text-slate-900">300+ healthcare institutions</strong>, including Government hospitals, medical colleges, and Trust organizations.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-slate-200 rounded text-center">
                <div className="text-3xl font-light text-slate-900 mb-1">300+</div>
                <div className="text-xs uppercase font-bold text-slate-500">Institutions</div>
              </div>
              <div className="p-4 bg-white border border-slate-200 rounded text-center">
                <div className="text-3xl font-light text-slate-900 mb-1">100%</div>
                <div className="text-xs uppercase font-bold text-slate-500">Medical Focus</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. CLOSING (The Approach) */}
      <section className="w-full bg-slate-900 text-slate-300 py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Working with Vida Life Sciences
            </h2>
            <p className="text-lg leading-relaxed mb-10 text-slate-400">
              The organization positions itself not as a short-term vendor, but as a responsible healthcare partner. 
              We offer stability, compliance-first operations, and a long-term service orientation aligned with your patient safety objectives.
            </p>
            <div className="flex justify-center gap-4">
               <a href="/contact" className="px-8 py-4 bg-sky-600 text-white font-bold rounded hover:bg-sky-500 transition-colors">
                 Start a Conversation
               </a>
               <a href="/directors" className="px-8 py-4 bg-transparent border border-slate-700 text-white font-bold rounded hover:bg-slate-800 transition-colors">
                 Meet Leadership
               </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;