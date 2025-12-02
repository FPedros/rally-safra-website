import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HistorySection } from './components/HistorySection';
import { SponsorsSection } from './components/SponsorsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BlogPage } from './components/BlogPage';

type View = 'home' | 'blog';

const LandingPage: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  return (
    <>
      <Hero />
      <HistorySection />
      <SponsorsSection />
      <BlogSection onNavigate={onNavigate} />
      <ContactSection />
    </>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const handleNavigate = (view: View, sectionId?: string) => {
    setCurrentView(view);
    
    if (view === 'home') {
      if (sectionId) {
        // If navigating to a section, wait for render then scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="antialiased text-gray-800 bg-light-sand font-sans">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      <main>
        {currentView === 'home' ? (
          <LandingPage onNavigate={setCurrentView} />
        ) : (
          <BlogPage />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;