
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { ViewMode } from '../App';

interface HeaderProps {
  currentView: ViewMode;
  setView: (v: ViewMode, b?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [residencesOpen, setResidencesOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState('https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > window.innerHeight * 0.1) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const buildings = [
    { id: 'm12', name: 'Building M12' },
    { id: 'm11', name: 'Building M11' },
    { id: 'm10', name: 'Building M10' },
    { id: 'm9', name: 'Building M9' },
    { id: 'm8', name: 'Building M8' },
    { id: 'm7', name: 'Building M7' },
    { id: 'm6', name: 'Building M6' },
    { id: 'm5', name: 'Building M5' },
  ];

  const navItems: { label: string; value: ViewMode; img: string; subItems?: boolean }[] = [
    { label: 'Residences', value: 'apartments', img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop', subItems: true },
    { label: 'About', value: 'about', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop' },
    { label: 'Lifestyle', value: 'lifestyle', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop' },
    { label: 'News', value: 'news', img: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2670&auto=format&fit=crop' },
    { label: 'Investment', value: 'investment', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop' },
    { label: 'Contact', value: 'contact', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2670&auto=format&fit=crop' },
  ];

  const handleNav = (v: ViewMode, b?: string) => {
    setView(v, b);
    setIsOpen(false);
    setResidencesOpen(false);
  };

  const effectiveScrolled = currentView !== 'homepage' || isScrolled;
  const textColorClass = effectiveScrolled ? 'text-black' : 'text-white';
  const borderColorClass = effectiveScrolled ? 'border-black/10' : 'border-white/20';
  const bgColorClass = effectiveScrolled ? 'bg-white/90' : 'bg-black/5';
  const hamburgerColorClass = effectiveScrolled ? 'bg-black' : 'bg-white';

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-10 py-6 flex justify-between items-center transition-all duration-500 backdrop-blur-md border-b ${effectiveScrolled ? 'border-black/5 shadow-sm' : 'border-white/5'} ${bgColorClass}`}
      >
        <button 
          onClick={() => setIsOpen(true)}
          className={`group flex items-center space-x-4 transition-colors duration-500 ${textColorClass} z-[110]`}
        >
          <div className="flex flex-col space-y-1.5 overflow-hidden">
            <span className={`w-5 h-[1px] transition-all duration-500 group-hover:translate-x-1 ${hamburgerColorClass}`}></span>
            <span className={`w-3.5 h-[1px] transition-all duration-500 group-hover:translate-x-0 translate-x-1.5 ${hamburgerColorClass}`}></span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold hidden md:block">Menu</span>
        </button>

        <button 
          onClick={() => handleNav('homepage')}
          className={`absolute left-1/2 -translate-x-1/2 font-serif text-lg md:text-xl tracking-tighter font-medium transition-colors duration-500 hover:opacity-50 ${textColorClass}`}
        >
          City of Mara
        </button>
        
        <button 
          onClick={() => handleNav('contact')}
          className={`text-[9px] uppercase tracking-[0.4em] font-bold transition-all duration-500 px-4 md:px-6 py-2.5 border hover:bg-black hover:text-white ${textColorClass} ${borderColorClass}`}
        >
          Contact
        </button>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-white flex flex-col md:flex-row shadow-2xl overflow-y-auto md:overflow-hidden"
          >
            <div className="hidden md:block w-1/3 h-full bg-neutral-100 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={hoveredImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  src={hoveredImage} 
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Architecture Navigation"
                />
              </AnimatePresence>
            </div>

            <div className="flex-1 flex flex-col p-8 md:p-32 relative bg-white">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 md:top-20 md:right-20 group flex items-center space-x-3 z-10"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Close</span>
                <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
              </button>

              <div className="mt-8 md:mt-16 flex flex-col space-y-6 md:space-y-8">
                {navItems.map((item, i) => (
                  <div key={item.value} className="flex flex-col">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                      className="group text-left flex items-center space-x-4 cursor-pointer"
                      onMouseEnter={() => setHoveredImage(item.img)}
                      onClick={() => {
                        if (item.subItems) {
                          setResidencesOpen(!residencesOpen);
                        } else {
                          handleNav(item.value);
                        }
                      }}
                    >
                      <span className="text-3xl md:text-5xl font-serif hover:text-neutral-400 transition-colors tracking-tighter">
                        {item.label}
                      </span>
                      {item.subItems && (
                        <ChevronDown className={`w-6 h-6 md:w-8 md:h-8 transition-transform duration-500 ${residencesOpen ? 'rotate-180' : ''}`} />
                      )}
                    </motion.div>
                    
                    {item.subItems && (
                      <AnimatePresence>
                        {residencesOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col space-y-2 md:space-y-3 mt-4 ml-4 md:ml-8 border-l border-neutral-100 pl-6"
                          >
                            {buildings.map((b, idx) => (
                              <motion.button
                                key={b.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => handleNav('building-detail', b.id)}
                                className="text-lg md:text-xl font-light text-neutral-500 hover:text-black text-left transition-colors flex items-center space-x-2 group/sub"
                              >
                                <span>{b.name}</span>
                                <ChevronRight className="w-4 h-4 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                              </motion.button>
                            ))}
                            <button 
                              onClick={() => handleNav('apartments')}
                              className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 hover:text-black text-left mt-2"
                            >
                              View All Residences
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-col md:flex-row justify-between pt-12 border-t border-neutral-100 space-y-6 md:space-y-0">
                <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-400">
                  <p>Inquiries</p>
                  <p className="text-black mt-2">atelier@mara.com</p>
                </div>
                <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-400 md:text-right">
                  <p>Follow</p>
                  <p className="text-black mt-2">Instagram / Vimeo</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
