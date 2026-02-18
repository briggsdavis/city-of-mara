
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface ScrollContentProps {
  onOpenStory: () => void;
  onOpenResidences?: () => void;
}

const LocationSection: React.FC<{ setView: (v: any) => void }> = ({ setView }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  const benefits = [
    {
      title: "Connectivity",
      description: "Located at the nexus of the city's future transit hub. Mara residents enjoy a 10-minute commute to the financial center and exclusive access to the private air-taxi terminal.",
      img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2400&auto=format&fit=crop",
      metric: "10 Min Transit"
    },
    {
      title: "Greenery",
      description: "Directly adjacent to the Mara Botanical Gardens, offering five acres of meticulously curated vertical forests and oxygen-rich walking trails at your doorstep.",
      img: "https://images.unsplash.com/photo-1542601906970-14197b4c1970?q=80&w=2400&auto=format&fit=crop",
      metric: "5-Acre Park"
    },
    {
      title: "Culture",
      description: "Immerse yourself in the Museum of Modern Silence and the Mara Opera House, both located within the complex's cultural plaza.",
      img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=2400&auto=format&fit=crop",
      metric: "Cultural Plaza"
    },
    {
      title: "Privacy",
      description: "A gated ecosystem with multi-layered biometric security and dedicated private access roads, ensuring absolute discretion for our residents.",
      img: "https://images.unsplash.com/photo-1449156003053-c3ca24237f81?q=80&w=2670&auto=format&fit=crop",
      metric: "Gated Hub"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 mb-60">
      <div className="mb-24">
        <span className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 mb-6 block font-bold">The District / 01</span>
        <h2 className="text-5xl font-serif mb-10 tracking-tight">In the Heart <br/>of Silence</h2>
        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
          Mara is positioned in a unique topological pocket of the city where natural sound dampening and high elevation converge to create a permanent oasis of tranquility.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3 flex flex-col space-y-2">
          {benefits.map((b, i) => (
            <button
              key={b.title}
              onClick={() => setActiveTab(i)}
              className={`group flex items-center justify-between text-left py-8 border-b border-neutral-100 transition-all ${activeTab === i ? 'opacity-100' : 'opacity-30 hover:opacity-60'}`}
            >
              <div>
                <span className="text-[9px] uppercase tracking-widest font-bold mb-2 block">0{i+1}</span>
                <span className="text-3xl font-serif">{b.title}</span>
              </div>
              <motion.div 
                animate={{ x: activeTab === i ? 0 : -10, opacity: activeTab === i ? 1 : 0 }}
                className="w-8 h-[1px] bg-black"
              />
            </button>
          ))}
          <div className="pt-12">
             <button 
              onClick={() => setView('lifestyle')}
              className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black pb-2 hover:opacity-50 transition-all"
             >
               Explore Lifestyle Page
             </button>
          </div>
        </div>

        <div className="lg:w-2/3 h-[500px] relative overflow-hidden bg-neutral-100 rounded-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0"
            >
              <img src={benefits[activeTab].img} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-10 h-[1px] bg-white/40" />
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">{benefits[activeTab].metric}</span>
                </div>
                <p className="text-lg font-light leading-relaxed max-w-lg opacity-90">
                  {benefits[activeTab].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const ExpandingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const width = useTransform(scrollYProgress, [0, 0.6], ["80%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 0.6], ["80vh", "100vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["40px", "0px"]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={sectionRef} className="relative h-[150vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            width,
            height,
            borderRadius,
            scale,
            opacity
          }}
          className="relative overflow-hidden bg-neutral-900"
        >
          <img 
            src="https://images.unsplash.com/photo-1510673398445-94f476ef2cbc?q=80&w=2670&auto=format&fit=crop" 
            alt="City of Mara Landmark" 
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
          
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]) }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6"
          >
            <h3 className="text-4xl md:text-7xl font-serif mb-6">Unrivaled Horizon</h3>
            <p className="text-sm uppercase tracking-[0.8em] font-light max-w-lg leading-relaxed">Defining the skyline of tomorrow, one residence at a time.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const ScrollContent: React.FC<ScrollContentProps> = ({ onOpenStory, onOpenResidences }) => {
  const residences = [
    { id: 1, title: 'The Penthouse Suite', price: 'From $4.2M', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop' },
    { id: 2, title: 'Sky Loft Residence', price: 'From $1.8M', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop' },
    { id: 3, title: 'Garden Duplex', price: 'From $2.5M', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2570&auto=format&fit=crop' },
    { id: 4, title: 'Artist Atelier', price: 'From $1.2M', img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2670&auto=format&fit=crop' },
    { id: 5, title: 'Observatory Loft', price: 'From $3.1M', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2560&auto=format&fit=crop' },
    { id: 6, title: 'Terrace Haven', price: 'From $2.2M', img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2674&auto=format&fit=crop' },
    { id: 7, title: 'Linear Suite', price: 'From $1.5M', img: 'https://images.unsplash.com/photo-1512915922686-57c11f9ad6b3?q=80&w=2670&auto=format&fit=crop' },
    { id: 8, title: 'Heritage Manor', price: 'From $5.5M', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2570&auto=format&fit=crop' },
  ];

  const sharedTransition = {
    duration: 1.2,
    ease: [0.76, 0, 0.24, 1]
  };

  return (
    <div className="py-32 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center mb-60">
        <motion.div 
          layoutId="story-image-container"
          transition={sharedTransition}
          className="aspect-[4/5] bg-gray-200 overflow-hidden rounded-sm shadow-2xl"
        >
          <motion.img 
            layoutId="story-image"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" 
            alt="Interior Lounge" 
            className="w-full h-full object-cover"
            transition={sharedTransition}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <h2 className="text-5xl font-serif mb-10 tracking-tight leading-tight">Mastering the Art <br/>of Living</h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
            City of Mara is more than an address. It is a curated lifestyle designed for those who seek the extraordinary. Every detail is chosen to provide absolute serenity.
          </p>
          <button 
            onClick={onOpenStory}
            className="border-b-2 border-black pb-2 text-xs uppercase tracking-widest font-bold hover:opacity-50 transition-all cursor-pointer"
          >
            Explore the Heritage
          </button>
        </motion.div>
      </div>

      <LocationSection setView={(v) => {
        if (window && (window as any).setAppView) (window as any).setAppView(v);
      }} />

      <ExpandingSection />

      <div className="max-w-7xl mx-auto px-8 mb-60">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
          <h3 className="text-5xl font-serif tracking-tight mb-4 md:mb-0">Select Residences</h3>
          <p className="text-xs uppercase tracking-[0.4em] opacity-50 font-medium">Swipe to Explore / 2024</p>
        </div>
        
        <div className="flex overflow-x-auto space-x-12 pb-16 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
          {residences.map((item) => (
            <motion.div 
              key={item.id}
              className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-neutral-100 mb-8 rounded-sm">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
              </div>
              <div className="flex justify-between items-baseline px-1 border-t border-black/10 pt-6">
                <h4 className="text-xl font-light tracking-wide">{item.title}</h4>
                <p className="text-xs font-semibold tracking-widest">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button 
            onClick={() => {
               if (window && (window as any).setAppView) (window as any).setAppView('apartments');
            }}
            className="px-12 py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-neutral-800 transition-all shadow-xl"
          >
            Explore Buildings Portfolio
          </button>
        </div>
      </div>

      <div className="px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative h-[800px] flex items-center justify-center text-center p-12 bg-black text-white overflow-hidden rounded-2xl mx-auto max-w-[1600px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" 
            alt="Eternal Design Detail" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-6xl md:text-8xl font-serif mb-10 tracking-tight">Eternal Design</h2>
            <p className="text-xl font-light opacity-70 mb-14 leading-relaxed">
              We don't build for seasons; we build for centuries. Experience the longevity of quality materials and timeless architectural principles.
            </p>
            <button className="px-16 py-7 border border-white/40 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white hover:text-black transition-all">
              Schedule Private Viewing
            </button>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ScrollContent;
