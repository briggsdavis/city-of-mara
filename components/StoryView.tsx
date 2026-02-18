
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface StoryViewProps {
  onClose: () => void;
}

const StoryView: React.FC<StoryViewProps> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const sharedTransition = {
    duration: 1.2,
    ease: [0.76, 0, 0.24, 1]
  };

  return (
    <motion.div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="fixed top-0 left-0 w-full z-[110] px-8 py-6 flex justify-between items-center mix-blend-difference text-white"
      >
        <div className="font-serif text-2xl tracking-tighter font-semibold">City of Mara</div>
        <button 
          onClick={onClose}
          className="text-xs uppercase tracking-[0.3em] hover:opacity-50 transition-opacity"
        >
          Close [esc]
        </button>
      </motion.div>

      <div className="flex flex-col md:flex-row min-h-screen">
        <motion.div 
          layoutId="story-image-container"
          transition={sharedTransition}
          className="w-full md:w-1/2 h-[60vh] md:h-screen sticky top-0 bg-neutral-100 overflow-hidden"
        >
          <motion.img 
            layoutId="story-image"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" 
            alt="Interior Heritage" 
            className="w-full h-full object-cover"
            transition={sharedTransition}
          />
        </motion.div>

        <div className="w-full md:w-1/2 px-8 py-24 md:px-24 md:py-48 bg-white min-h-screen">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] mb-8 block text-neutral-400 font-bold">The Heritage / Vol. 01</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-16 tracking-tighter leading-tight">Legacy in <br/>the Light.</h1>
            
            <div className="space-y-10 text-xl font-light leading-relaxed text-neutral-600">
              <p>
                City of Mara was conceived as a response to the frantic pace of modern urban life. We asked ourselves: can a home be both in the center of a metropolis and a place of absolute stillness?
              </p>
              <p>
                The answer lies in our architecture. By utilizing specialized acoustic glass and the highest grade of natural stone, we have created an environment that filters the noise of the world, leaving only the beauty of the skyline.
              </p>
              <p className="font-serif text-3xl text-neutral-900 py-10 border-y border-neutral-100">
                "We don't build structures; we build sanctuaries that honor the passage of time."
              </p>
              <p>
                Every residence at Mara is a testament to quality. Our collaboration with lead architect Elena Voss ensures that every angle is considered, every shadow is intentional, and every view is a masterpiece.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-24 pt-16 border-t border-neutral-100"
            >
              <div className="flex items-center space-x-16">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-3">Architect</h4>
                  <p className="text-sm font-light">Elena Voss</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-3">Est. Completion</h4>
                  <p className="text-sm font-light">Late 2025</p>
                </div>
              </div>
            </motion.div>

            <button 
              onClick={onClose}
              className="mt-24 px-14 py-6 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-neutral-800 transition-colors"
            >
              Return to Gallery
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryView;
