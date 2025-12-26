import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* 1. MAIN FOOTER CONTENT */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* COLUMN 1: Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded bg-sky-600 flex items-center justify-center font-bold text-lg">V</div>
              <span className="text-xl font-bold tracking-tight">Vida<span className="text-sky-500">Life</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              India's premier partner for sterile processing and infection control. 
              Delivering hospital-grade safety with absolute regulatory compliance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Company</h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Leadership', 'Careers', 'News & Media', 'Contact Sales'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-sky-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Services (Placeholder) */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-sky-400 transition-colors">Steam Sterilization</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">ETO Processing</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Plasma Sterilization</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors">Surgical Logistics</a></li>
            </ul>
          </div>

          {/* COLUMN 4: Contact & Compliance */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Headquarters</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sky-500 mt-0.5 shrink-0" />
                <span>
                  Unit 402, Tech Park,<br/>
                  Navi Mumbai, Maharashtra<br/>
                  India - 410210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-sky-500 shrink-0" />
                <span>+91 22 4500 8900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-sky-500 shrink-0" />
                <span>contact@vidalife.in</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 2. BOTTOM BAR (Copyright & Legal) */}
      <div className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Vida Life Science Pvt Ltd.</span>
            <span className="hidden md:inline">•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-400">
               <ShieldCheck size={14} className="text-sky-600" />
               <span>ISO 13485:2016 Certified</span>
            </div>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;