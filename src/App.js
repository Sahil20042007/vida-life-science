import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Certificates from './pages/Certificates';
import Directors from './pages/Directors';
import History from './pages/History';
// Layouts
import Navbar from './components/layout/Navbars';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About'; // <--- MAKE SURE THIS IMPORT IS HERE

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen bg-slate-50">
        
        {/* 1. Navbar is visible on all pages */}
        <Navbar />

        {/* 2. Routes switch the main content based on URL */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* <--- THIS LINE IS CRITICAL */}
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/directors" element={<Directors />} />
            <Route path="/history" element={<History />} />
            


          </Routes>
        </div>

        {/* 3. Footer is visible on all pages */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;