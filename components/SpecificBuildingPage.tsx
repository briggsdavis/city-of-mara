
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ViewMode } from '../App';

interface BuildingPageProps {
  buildingId: string;
  setView: (v: ViewMode, b?: string, a?: string) => void;
}

const BUILDINGS_DATA: Record<string, any> = {
  'm12': {
    name: 'Building M12',
    heroImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
    tagline: 'Defying gravity. Defining sky.',
    sellText: 'Building M12 stands as the pinnacle of the Mara collection. With its iconic cantilevered silhouette, it offers residents a life suspended between the clouds and the city pulse.',
    sellImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop',
    locationPills: ['North Wing Apex', 'Sky-Taxi Accessible', 'Financial District Nexus', 'Elevated Privacy'],
    amenityPills: ['Infinity Sky Pool', 'Private Cinema M12', 'Helipad Access', '24/7 Butler Service', 'Oxygenated Gym', 'Climate Vaults'],
  },
  'm11': {
    name: 'Building M11',
    heroImg: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2670&auto=format&fit=crop',
    tagline: 'The Golden Ratio of Living.',
    sellText: 'Elegance redefined through perfect proportions. Building M11 captures the golden hour like no other, flooding every residence with warm, natural brilliance.',
    sellImg: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2670&auto=format&fit=crop',
    locationPills: ['Central Plaza Side', 'Golden Hour Facing', 'Art District Core', 'Transit Friendly'],
    amenityPills: ['Library of Silence', 'Tea Ceremony Room', 'Valet Parking', 'Concierge Atelier', 'Zen Garden', 'Sauna World'],
  },
  'm10': {
    name: 'Building M10',
    heroImg: 'https://images.unsplash.com/photo-1449156003053-c3ca24237f81?q=80&w=2670&auto=format&fit=crop',
    tagline: 'Nature, Verticalized.',
    sellText: 'A living, breathing structure. Building M10 integrates lush vertical forests into its core, providing a permanent connection to the botanical world.',
    sellImg: 'https://images.unsplash.com/photo-1542601906970-14197b4c1970?q=80&w=2400&auto=format&fit=crop',
    locationPills: ['Botanical Pocket', 'Eco-Hub Central', 'River Breeze Path', 'Quiet Zone'],
    amenityPills: ['Hydrotherapy Spa', 'Community Greenhouse', 'Filtered Air Intake', 'Pet Sanctuary', 'Yoga Atrium', 'Organic Cafe'],
  }
};

const DEFAULT_DATA = (id: string) => ({
  name: `Building ${id.toUpperCase()}`,
  heroImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
  tagline: 'Timeless Urban Excellence.',
  sellText: 'Crafted with the signature Mara commitment to silence and precision, this building offers an unparalleled urban sanctuary.',
  sellImg: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop',
  locationPills: ['District Hub', 'Heritage View', 'Culture Nexus', 'Secure Perimeter'],
  amenityPills: ['Concierge 24/7', 'Fitness Studio', 'Private Lounge', 'Secure Storage', 'Meeting Hub', 'Wine Cellar'],
});

const apartmentTypes = [
  { id: '1br', name: '1 Bedroom', size: '780 SQFT', price: 'From $1.2M', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2671&auto=format&fit=crop' },
  { id: '1br-off', name: '1 Bedroom + Office', size: '920 SQFT', price: 'From $1.5M', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2560&auto=format&fit=crop' },
  { id: '2br', name: '2 Bedrooms', size: '1,250 SQFT', price: 'From $2.1M', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop' },
  { id: '2br-off', name: '2 Bedrooms + Office', size: '1,480 SQFT', price: 'From $2.8M', img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2670&auto=format&fit=crop' },
  { id: '3br', name: '3 Bedrooms', size: '1,950 SQFT', price: 'From $3.9M', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2570&auto=format&fit=crop' },
  { id: '3br-off', name: '3 Bedrooms + Office', size: '2,400 SQFT', price: 'From $5.2M', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop' },
];

const SpecificBuildingPage: React.FC<BuildingPageProps> = ({ buildingId, setView }) => {
  const data = BUILDINGS_DATA[buildingId] || DEFAULT_DATA(buildingId);

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-8 py-10">
        <button 
          onClick={() => setView('apartments')}
          className="group flex items-center space-x-3 text-[10px] uppercase tracking-[0.4em] font-bold hover:opacity-50 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Residences</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 5, ease: "easeOut" }} className="absolute inset-0 z-0">
          <img src={data.heroImg} className="w-full h-full object-cover" alt={data.name} />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        <div className="relative z-10 text-center text-white px-8">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="block text-[10px] uppercase tracking-[0.8em] font-bold mb-6">The Collection / {data.name}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-6xl md:text-9xl font-serif tracking-tighter leading-none">{data.name}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-xl md:text-3xl font-light mt-10 tracking-wide">{data.tagline}</motion.p>
        </div>
      </section>

      {/* Sell Section */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-8 block font-bold">The Vision</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-12 tracking-tighter leading-tight">Mastering <br/>the Horizon.</h2>
            <p className="text-xl font-light text-neutral-600 leading-relaxed mb-12">{data.sellText}</p>
            <div className="w-20 h-[1px] bg-black/10" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden shadow-2xl">
            <img src={data.sellImg} className="w-full h-full object-cover" alt="Interior Detail" />
          </motion.div>
        </div>
      </section>

      {/* Pills Section */}
      <section className="bg-neutral-50 py-40 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h3 className="text-2xl font-serif mb-12">Premier Location</h3>
              <div className="flex flex-wrap gap-4">
                {data.locationPills.map((pill: string) => (
                  <span key={pill} className="px-6 py-3 border border-neutral-200 rounded-full text-[10px] uppercase tracking-widest font-bold text-neutral-500 bg-white">{pill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-12">Dedicated Amenities</h3>
              <div className="flex flex-wrap gap-4">
                {data.amenityPills.map((pill: string) => (
                  <span key={pill} className="px-6 py-3 border border-neutral-200 rounded-full text-[10px] uppercase tracking-widest font-bold text-neutral-500 bg-white">{pill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apartment Grid */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="text-5xl font-serif mb-6 tracking-tighter">Available Residences</h2>
          <p className="text-neutral-400 uppercase tracking-[0.4em] text-[10px] font-bold">Curated Floorplans / Selection</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartmentTypes.map((apt, idx) => (
            <motion.div
              key={apt.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setView('apartment-detail', buildingId, apt.id)}
              className="group border border-neutral-100 bg-white hover:border-black transition-all duration-500 flex flex-col overflow-hidden cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={apt.img} alt={apt.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-2xl font-serif mb-2 tracking-tight">{apt.name}</h4>
                <p className="text-neutral-400 text-[10px] uppercase tracking-widest font-bold mb-10">{apt.size}</p>
                <div className="mt-auto flex justify-between items-center pt-8 border-t border-neutral-50">
                  <span className="text-xl font-light tracking-tight">{apt.price}</span>
                  <button className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-black pb-1 group-hover:opacity-50 transition-all">View Residence</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-black text-white text-center px-8">
        <h2 className="text-4xl md:text-6xl font-serif mb-12 tracking-tight">Experience {data.name}</h2>
        <p className="text-xl font-light opacity-60 mb-16 max-w-2xl mx-auto leading-relaxed">Limited opportunities remain to join this exclusive vertical community. Schedule a private viewing with our lead advisors.</p>
        <button className="px-16 py-7 border border-white/40 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white hover:text-black transition-all">Book Private Tour</button>
      </section>
    </div>
  );
};

export default SpecificBuildingPage;
