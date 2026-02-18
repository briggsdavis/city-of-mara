
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Phone, Mail } from 'lucide-react';
import { ViewMode } from '../App';

interface ApartmentDetailPageProps {
  buildingId: string;
  apartmentId: string;
  setView: (v: ViewMode, b?: string, a?: string) => void;
}

const APT_DATA: Record<string, any> = {
  '1br': { name: '1 Bedroom Residence', intro: 'A sanctuary of light and volume. This one-bedroom residence is designed for the modern individual who values spatial intelligence and absolute tranquility.' },
  '1br-off': { name: '1 Bedroom + Office', intro: 'The ultimate professional retreat. Perfectly balancing productivity with personal restoration, this residence features a dedicated executive office with panoramic skyline views.' },
  '2br': { name: '2 Bedroom Residence', intro: 'Elevated family living. Expansive social areas meet intimate private quarters in a residence crafted with natural textures and sophisticated acoustic engineering.' },
  '2br-off': { name: '2 Bedrooms + Office', intro: 'A masterclass in functional luxury. Offering dual suites and a central creative studio, this residence provides ample space for both lifestyle and legacy.' },
  '3br': { name: '3 Bedroom Residence', intro: 'Palatial heights. With triple-aspect views and grand proportions, this three-bedroom home is a testament to architectural heritage and contemporary grace.' },
  '3br-off': { name: '3 Bedrooms + Office', intro: 'The definitive Mara residence. An unparalleled footprint featuring a private library, formal dining, and a suite of spaces tailored for the discerning collector.' },
};

const BUILDING_NAMES: Record<string, string> = {
  'm12': 'Building M12',
  'm11': 'Building M11',
  'm10': 'Building M10',
  'm9': 'Building M9',
  'm8': 'Building M8',
  'm7': 'Building M7',
  'm6': 'Building M6',
  'm5': 'Building M5',
};

const ApartmentDetailPage: React.FC<ApartmentDetailPageProps> = ({ buildingId, apartmentId, setView }) => {
  const apt = APT_DATA[apartmentId] || APT_DATA['1br'];
  const buildingName = BUILDING_NAMES[buildingId] || `Building ${buildingId.toUpperCase()}`;

  // 6 Large Gallery Images for a cleaner Bento Box
  const gallery = [
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop', span: 'md:col-span-2 md:row-span-2' },
    { src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2670&auto=format&fit=crop', span: 'md:col-span-2 md:row-span-1' },
    { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop', span: 'md:col-span-1 md:row-span-1' },
    { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2670&auto=format&fit=crop', span: 'md:col-span-1 md:row-span-1' },
    { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop', span: 'md:col-span-3 md:row-span-2' },
    { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2670&auto=format&fit=crop', span: 'md:col-span-1 md:row-span-2' },
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-8 py-10">
        <button 
          onClick={() => setView('building-detail', buildingId)}
          className="group flex items-center space-x-3 text-[10px] uppercase tracking-[0.4em] font-bold hover:opacity-50 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to {buildingName}</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600607687937-45732800d074?q=80&w=2670&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt={apt.name} 
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
          <div className="px-8">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] uppercase tracking-[0.8em] font-bold text-white mb-6 block">
              {buildingName} / Private Residence
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-6xl md:text-8xl font-serif text-white tracking-tighter leading-none">
              {apt.name}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-32 px-8 max-w-4xl mx-auto text-center">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-light text-neutral-600 leading-relaxed italic font-serif">
          "{apt.intro}"
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 mb-10">Location Features</h3>
            <div className="flex flex-wrap gap-4">
              {['Riverside View', 'Morning Light', 'Elevated Floor', 'Private Entry'].map(p => (
                <span key={p} className="px-6 py-3 bg-white border border-neutral-200 rounded-full text-[10px] uppercase tracking-widest font-bold text-neutral-600">{p}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 mb-10">Building Infrastructure</h3>
            <div className="flex flex-wrap gap-4">
              {['Smart Elevator', 'Biometric Lobby', 'Filtered Air', '24h Concierge'].map(p => (
                <span key={p} className="px-6 py-3 bg-white border border-neutral-200 rounded-full text-[10px] uppercase tracking-widest font-bold text-neutral-600">{p}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-20">
          <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 mb-10">Residence Specifics</h3>
          <div className="flex flex-wrap gap-4">
            {['Marble Countertops', 'Oak Flooring', 'Bose Sound System', 'Smart Climate Control', 'Floor-to-Ceiling Windows'].map(p => (
              <span key={p} className="px-6 py-3 bg-white border border-neutral-200 rounded-full text-[10px] uppercase tracking-widest font-bold text-neutral-600">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto text-center border-b border-neutral-100">
        <h2 className="text-4xl font-serif mb-12 tracking-tight">Interested in this Residence?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="flex items-center space-x-4 px-12 py-6 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-neutral-800 transition-all shadow-xl">
            <Mail className="w-4 h-4" />
            <span>Request Private Meeting</span>
          </button>
          <button className="flex items-center space-x-4 px-12 py-6 border border-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black hover:text-white transition-all">
            <Phone className="w-4 h-4" />
            <span>Speak with Advisor</span>
          </button>
        </div>
      </section>

      {/* Bento Gallery */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 block mb-4">Gallery</span>
          <h2 className="text-5xl font-serif tracking-tighter">Inside the Living Space.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {gallery.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`${img.span} overflow-hidden rounded-sm bg-neutral-100 group`}
            >
              <img 
                src={img.src} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                alt={`Interior Detail ${i+1}`} 
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ApartmentDetailPage;
