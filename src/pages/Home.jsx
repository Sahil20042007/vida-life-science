import React from 'react';

// 1. Import all sections here
import HeroSection from '../components/home/HeroSection';
import FoundationSection from '../components/home/Foundationsection'; // Make sure the 'S' is capital if your file is named FoundationSection.jsx
import TechnicalCapability from '../components/home/TechnicalCapability';
import ScaleSection from '../components/home/ScaleSection';
const Home = () => {
  return (
    <main className="w-full bg-slate-50 selection:bg-sky-200 selection:text-sky-900">
      
      {/* 2. Render them in order */}
      <HeroSection />
      
      <FoundationSection />
      
      <TechnicalCapability />
{/* 4. Scale & CTA (New) */}
      <ScaleSection />
    </main>
  );
};

export default Home;