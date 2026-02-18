
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SequenceStep, ViewMode } from '../App';

interface HeroProps {
  currentStep: SequenceStep;
  setView: (v: ViewMode) => void;
}

const Hero: React.FC<HeroProps> = ({ currentStep, setView }) => {
  const brandName = "City of Mara";
  
  const isStepAtLeast = (target: SequenceStep) => {
    const order = Object.values(SequenceStep);
    return order.indexOf(currentStep) >= order.indexOf(target);
  };

  const metrics = [
    { label: "Buildings", value: "8" },
    { label: "Residences", value: "250+" },
    { label: "Garden Area", value: "30%" },
    { label: "Max Height", value: "150m" }
  ];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#F5F5F0]">
      {/* 1. Initial Character Fade Animation */}
      <AnimatePresence mode="wait">
        {currentStep === SequenceStep.INITIAL_TEXT && (
          <motion.div
            key="initial-text-container"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }}
            exit={{ 
              opacity: 0, 
              scale: 1.02, 
              transition: { duration: 0.8, ease: "easeInOut" } 
            }}
            className="z-10 flex text-[6vw] font-serif tracking-tighter select-none"
          >
            {brandName.split("").map((char, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={char === " " ? "mx-3" : ""}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Banner Image Reveal */}
      <AnimatePresence>
        {isStepAtLeast(SequenceStep.HERO_IMAGE) && (
          <motion.div
            key="hero-image-overlay"
            initial={{ opacity: 0, clipPath: 'inset(15% 15% 15% 15%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 z-0 bg-neutral-900"
          >
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "easeOut" }}
              className="w-full h-full bg-cover bg-center brightness-[55%]"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Container with Layout Prop to prevent jumps */}
      <AnimatePresence>
        {isStepAtLeast(SequenceStep.WELCOME_TEXT) && (
          <motion.div
            layout
            key="hero-main-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              layout: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 1.5 },
              y: { duration: 1.5 }
            }}
            className="z-20 text-center text-white px-6 max-w-4xl flex flex-col items-center"
          >
            <motion.span 
              layout
              initial={{ opacity: 0 }} 
              animate={{ opacity: 0.7 }} 
              transition={{ delay: 0.5 }}
              className="block text-[9px] uppercase tracking-[0.5em] mb-5 font-medium"
            >
              The Future of Living
            </motion.span>
            
            <motion.h1 
              layout
              className="text-4xl md:text-7xl font-serif mb-8 tracking-tighter leading-[0.9]"
            >
              Architecture <br/><span className="ml-4 md:ml-10 font-light">of Silence</span>
            </motion.h1>

            {/* Metrics Section */}
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 w-full max-w-2xl px-4"
            >
              {metrics.map((m, i) => (
                <motion.div 
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <span className="text-2xl font-serif mb-1">{m.value}</span>
                  <span className="text-[8px] uppercase tracking-[0.3em] opacity-50 font-bold">{m.label}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p 
              layout
              className="text-sm md:text-base font-light tracking-wide opacity-70 mb-10 max-w-xl mx-auto leading-relaxed"
            >
              A masterpiece of modern residence where minimalist luxury meets the pulse of the city. Discover your new sanctuary in the sky.
            </motion.p>

            <AnimatePresence>
              {isStepAtLeast(SequenceStep.BUTTONS) && (
                <motion.div
                  key="buttons-group"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="flex flex-col md:flex-row items-center justify-center gap-5"
                >
                  <button 
                    onClick={() => setView('apartments')}
                    className="bg-white text-black px-10 py-4 uppercase tracking-[0.2em] text-[9px] font-bold hover:bg-neutral-200 transition-colors"
                  >
                    Explore Residences
                  </button>
                  <button 
                    onClick={() => setView('about')}
                    className="text-white border border-white/30 px-10 py-4 uppercase tracking-[0.2em] text-[9px] font-bold hover:bg-white/10 transition-colors backdrop-blur-md"
                  >
                    Our Philosophy
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. Scroll Indicator */}
      <AnimatePresence>
        {isStepAtLeast(SequenceStep.READY) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40"
          >
            <span className="text-[7px] uppercase tracking-[0.8em] mb-4">Descend</span>
            <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
              <motion.div 
                animate={{ y: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-white/40"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
