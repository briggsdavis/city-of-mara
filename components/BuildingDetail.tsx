
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Maximize2, Bed, Bath } from 'lucide-react';

interface BuildingDetailProps {
  building: {
    id: string;
    name: string;
    location: string;
    brief: string;
    img: string;
  };
  onBack: () => void;
}

const BuildingDetail: React.FC<BuildingDetailProps> = ({ building, onBack }) => {
  const units = [
    { id: 1, type: 'Gallery Studio', size: '720 SQFT', bed: 1, bath: 1, price: '$890,000' },
    { id: 2, type: 'Executive Suite', size: '1,450 SQFT', bed: 2, bath: 2, price: '$1,850,000' },
    { id: 3, type: 'Sky Residence', size: '2,100 SQFT', bed: 3, bath: 3, price: '$2,900,000' },
    { id: 4, type: 'Grand Penthouse', size: '5,800 SQFT', bed: 6, bath: 6, price: '$12,400,000' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto px-8 py-20">
        <button 
          onClick={onBack}
          className="flex items-center space-x-4 mb-16 text-xs uppercase tracking-widest font-bold hover:opacity-50 transition-all text-neutral-400"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-32 mb-32">
          <div className="sticky top-40 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-300 mb-6 block font-bold">{building.id} / Landmark</span>
            <h1 className="text-7xl md:text-9xl font-serif mb-10 tracking-tighter leading-none">{building.name}</h1>
            
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-[1px] bg-black"></div>
              <p className="text-[11px] uppercase tracking-[0.4em] font-bold">{building.location}</p>
            </div>

            <p className="text-xl text-neutral-500 font-light leading-relaxed mb-16 max-w-lg">
              {building.brief}
            </p>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-neutral-100">
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-3 font-bold">Availability</p>
                <p className="text-xl font-serif">Limited Release</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest opacity-40 mb-3 font-bold">Architect</p>
                <p className="text-xl font-serif">Elena Voss Atelier</p>
              </div>
            </div>
            
            <button className="mt-20 w-full md:w-auto px-16 py-6 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-neutral-800 transition-colors shadow-2xl">
              Request Brochure
            </button>
          </div>

          <div>
            <div className="aspect-[3/4] bg-neutral-100 mb-24 overflow-hidden shadow-2xl transition-all duration-1000">
              <img src={building.img} alt={building.name} className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3s]" />
            </div>
            
            <h3 className="text-3xl font-serif mb-12">Select Units</h3>
            <div className="space-y-6">
              {units.map((u) => (
                <div key={u.id} className="group p-10 border border-neutral-100 hover:shadow-xl transition-all duration-500 cursor-pointer bg-white">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <h4 className="text-2xl font-serif mb-2">{u.type}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-neutral-300 font-bold">{u.size}</p>
                    </div>
                    <span className="text-xl font-light">{u.price}</span>
                  </div>
                  <div className="flex space-x-12 pt-8 border-t border-neutral-50">
                    <div className="flex items-center space-x-3 text-neutral-400">
                      <Bed className="w-4 h-4 stroke-[1px]" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">{u.bed} Beds</span>
                    </div>
                    <div className="flex items-center space-x-3 text-neutral-400">
                      <Bath className="w-4 h-4 stroke-[1px]" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">{u.bath} Baths</span>
                    </div>
                    <div className="flex items-center space-x-3 text-neutral-400">
                      <Maximize2 className="w-4 h-4 stroke-[1px]" />
                      <span className="text-[10px] uppercase tracking-widest font-bold">{u.size}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BuildingDetail;
