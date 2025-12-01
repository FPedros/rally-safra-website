import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HistorySection } from './components/HistorySection';
import { SponsorsSection } from './components/SponsorsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-800 bg-light-sand font-sans">
      <Navbar />
      <main>
        <Hero />
        <HistorySection />
        <SponsorsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
