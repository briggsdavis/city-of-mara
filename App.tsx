
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollContent from './components/ScrollContent';
import Footer from './components/Footer';
import StoryView from './components/StoryView';
import ApartmentsPage from './components/ApartmentsPage';
import AboutPage from './components/AboutPage';
import SpecificBuildingPage from './components/SpecificBuildingPage';
import ApartmentDetailPage from './components/ApartmentDetailPage';
import LifestylePage from './components/LifestylePage';

export enum SequenceStep {
  INITIAL_TEXT = 'initial_text',
  HERO_IMAGE = 'hero_image',
  WELCOME_TEXT = 'welcome_text',
  NAV_BAR = 'nav_bar',
  BUTTONS = 'buttons',
  READY = 'ready'
}

export type ViewMode = 'homepage' | 'neighborhood' | 'about' | 'investment' | 'news' | 'contact' | 'apartments' | 'story' | 'lifestyle' | 'building-detail' | 'apartment-detail';

const App: React.FC = () => {
  const [step, setStep] = useState<SequenceStep>(SequenceStep.INITIAL_TEXT);
  const [view, setView] = useState<ViewMode>('homepage');
  const [selectedBuildingId, setSelectedBuildingId] = useState<string | null>(null);
  const [selectedApartmentId, setSelectedApartmentId] = useState<string | null>(null);

  useEffect(() => {
    (window as any).setAppView = setPage;
    
    const timers = [
      setTimeout(() => setStep(SequenceStep.HERO_IMAGE), 1500),
      setTimeout(() => setStep(SequenceStep.WELCOME_TEXT), 3000),
      setTimeout(() => setStep(SequenceStep.NAV_BAR), 3800),
      setTimeout(() => setStep(SequenceStep.BUTTONS), 4400),
      setTimeout(() => setStep(SequenceStep.READY), 5000),
    ];
    return () => {
      timers.forEach(t => clearTimeout(t));
      delete (window as any).setAppView;
    };
  }, []);

  const handleOpenStory = () => setView('story');
  const handleCloseStory = () => setView('homepage');
  
  function setPage(v: ViewMode, buildingId?: string, apartmentId?: string) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (v === 'apartment-detail' && buildingId && apartmentId) {
      setSelectedBuildingId(buildingId);
      setSelectedApartmentId(apartmentId);
      setView('apartment-detail');
    } else if (v === 'building-detail' && buildingId) {
      setSelectedBuildingId(buildingId);
      setSelectedApartmentId(null);
      setView('building-detail');
    } else {
      setSelectedBuildingId(null);
      setSelectedApartmentId(null);
      setView(v);
    }
  };

  const isNavAtLeast = (target: SequenceStep) => {
    const order = Object.values(SequenceStep);
    return order.indexOf(step) >= order.indexOf(target);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A]">
      <AnimatePresence mode="wait">
        {view === 'homepage' && (
          <motion.div 
            key="homepage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
          >
            <AnimatePresence>
              {isNavAtLeast(SequenceStep.NAV_BAR) && <Header currentView={view} setView={setPage} />}
            </AnimatePresence>

            <main>
              <Hero currentStep={step} setView={setPage} />
              
              {isNavAtLeast(SequenceStep.READY) && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <ScrollContent onOpenStory={handleOpenStory} />
                  <Footer setView={setPage} />
                </motion.div>
              )}
            </main>
          </motion.div>
        )}

        {view === 'about' && (
          <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Header currentView={view} setView={setPage} />
            <AboutPage />
            <Footer setView={setPage} />
          </motion.div>
        )}

        {view === 'apartments' && (
          <motion.div key="apartments" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Header currentView={view} setView={setPage} />
            <ApartmentsPage setView={setPage} />
            <Footer setView={setPage} />
          </motion.div>
        )}

        {view === 'lifestyle' && (
          <motion.div key="lifestyle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Header currentView={view} setView={setPage} />
            <LifestylePage setView={setPage} />
            <Footer setView={setPage} />
          </motion.div>
        )}

        {view === 'building-detail' && selectedBuildingId && (
          <motion.div key={`building-${selectedBuildingId}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Header currentView={view} setView={setPage} />
            <SpecificBuildingPage buildingId={selectedBuildingId} setView={setPage} />
            <Footer setView={setPage} />
          </motion.div>
        )}

        {view === 'apartment-detail' && selectedBuildingId && selectedApartmentId && (
          <motion.div key={`apt-${selectedBuildingId}-${selectedApartmentId}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Header currentView={view} setView={setPage} />
            <ApartmentDetailPage buildingId={selectedBuildingId} apartmentId={selectedApartmentId} setView={setPage} />
            <Footer setView={setPage} />
          </motion.div>
        )}

        {view === 'story' && <StoryView key="story-view" onClose={handleCloseStory} />}

        {(['neighborhood', 'investment', 'news', 'contact'] as ViewMode[]).includes(view) && (
           <motion.div key={view} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-48 px-8 min-h-screen flex flex-col items-center justify-start text-center bg-white">
             <Header currentView={view} setView={setPage} />
             <div className="max-w-2xl">
               <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-8 block font-bold">Curating Content</motion.span>
               <h1 className="text-6xl md:text-8xl font-serif mb-12 capitalize tracking-tighter">{view}</h1>
               <p className="text-xl text-neutral-500 font-light leading-relaxed mb-16">The {view} experience is currently being curated for the next phase of City of Mara.</p>
               <button onClick={() => setPage('homepage')} className="px-12 py-5 border border-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-black hover:text-white transition-all">Return Home</button>
             </div>
             <div className="mt-auto w-full"><Footer setView={setPage} /></div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
