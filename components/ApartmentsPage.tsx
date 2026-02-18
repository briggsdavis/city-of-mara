
import React from 'react';
import { motion } from 'framer-motion';
import RightNav from './RightNav';
import { ViewMode } from '../App';

interface ApartmentsPageProps {
  setView: (v: ViewMode, b?: string) => void;
}

const buildings = [
  { 
    id: 'm12', 
    name: 'Building M12', 
    status: 'Available Units',
    brief: 'The flagship of the Mara collection. Defying gravity with cantilevered balconies and panoramic sky views.',
    features: ['Triple-Height Ceilings', 'Private Sky-Deck', 'Acoustic Insulation Max'],
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop'
  },
  { 
    id: 'm11', 
    name: 'Building M11', 
    status: 'Available Units',
    brief: 'Classic elegance meeting urban pulse. Large floor-to-ceiling windows capturing the golden hour daily.',
    features: ['Floor-to-Ceiling Glass', 'Chef’s Kitchen', 'Smart Home Integration'],
    img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2670&auto=format&fit=crop'
  },
  { 
    id: 'm10', 
    name: 'Building M10', 
    status: 'Available Units',
    brief: 'A sanctuary built around a vertical garden. Perfect for those who seek tranquility amidst the city.',
    features: ['Vertical Garden Balcony', 'Open Concept Living', 'Rainwater Filtration'],
    img: 'https://images.unsplash.com/photo-1449156003053-c3ca24237f81?q=80&w=2670&auto=format&fit=crop'
  },
  { 
    id: 'm9', 
    name: 'Building M9', 
    status: 'Sold Out',
    brief: 'Exclusive residences featuring double-height ceilings and private elevator lobbies for every unit.',
    features: ['Private Elevator Access', 'Wine Cellar Room', 'Automated Shading'],
    img: 'https://images.unsplash.com/photo-1545324418-f1d3ac1ef730?q=80&w=2574&auto=format&fit=crop'
  },
  { 
    id: 'm8', 
    name: 'Building M8', 
    status: 'Sold Out',
    brief: 'Low-rise boutique living with expansive private terraces and direct access to the Mara Botanical Walk.',
    features: ['Private Terrace Space', 'Botanical Walk Access', 'Outdoor Fireplace'],
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop'
  },
  { 
    id: 'm7', 
    name: 'Building M7', 
    status: 'Sold Out',
    brief: 'Integrated into the cultural heart of the complex, featuring direct connections to fine dining.',
    features: ['Concierge Service', 'Direct Plaza Access', 'Marble Finishings'],
    img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2670&auto=format&fit=crop'
  },
  { 
    id: 'm6', 
    name: 'Building M6', 
    status: 'Sold Out',
    brief: 'Uninterrupted views of the Mara Botanical Gardens with a focus on natural materials.',
    features: ['Parkside Views', 'Sustainable Timber', 'Air Purification'],
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop'
  },
  { 
    id: 'm5', 
    name: 'Building M5', 
    status: 'Sold Out',
    brief: 'Boutique apartments directly overlooking the Mara River with private jetty access.',
    features: ['Riverfront Access', 'Private Jetty', 'Floor Heating'],
    img: 'https://images.unsplash.com/photo-1449156003053-c3ca24237f81?q=80&w=2670&auto=format&fit=crop'
  }
];

const ApartmentsPage: React.FC<ApartmentsPageProps> = ({ setView }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-24 bg-white min-h-screen">
      <RightNav activeId="" onSelect={scrollTo} />

      <div className="max-w-7xl mx-auto px-8 pt-32 mb-40">
        <span className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 mb-6 block font-bold">Architecture / Collection</span>
        <h1 className="text-6xl md:text-9xl font-serif tracking-tighter leading-none mb-12">The Buildings.</h1>
        <p className="text-xl font-light text-neutral-500 max-w-xl leading-relaxed">
          An eight-tower masterpiece designed as a single, breathing entity. Explore the unique signatures of the Mara skyline.
        </p>
      </div>

      <div className="flex flex-col">
        {buildings.map((b, i) => (
          <section 
            id={b.id} 
            key={b.id} 
            className={`py-40 px-8 border-t border-neutral-100 ${i % 2 === 1 ? 'bg-[#F9F9F7]' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
              {/* Left: Image */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="aspect-[4/3] bg-neutral-100 overflow-hidden shadow-2xl rounded-sm"
              >
                <img 
                  src={b.img} 
                  alt={b.name} 
                  className="w-full h-full object-cover transition-all duration-1000 hover:scale-105" 
                />
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <span className={`text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border ${b.status === 'Available Units' ? 'text-green-600 border-green-200 bg-green-50' : 'text-neutral-400 border-neutral-200 bg-neutral-50'}`}>
                    {b.status}
                  </span>
                </div>

                <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-8">{b.name}</h2>
                
                <p className="text-xl text-neutral-500 font-light leading-relaxed mb-10 max-w-lg">
                  {b.brief}
                </p>

                <div className="mb-12">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-6">Core Features</h4>
                  <ul className="space-y-4">
                    {b.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-4 text-neutral-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                        <span className="text-sm font-medium tracking-wide">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => setView('building-detail', b.id)}
                  className={`group flex items-center space-x-6 hover:opacity-60 transition-all`}
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-black/20 pb-2 group-hover:border-black transition-all">Find Apartments</span>
                  <div className="w-12 h-[1px] bg-black/20 group-hover:w-20 group-hover:bg-black transition-all duration-500" />
                </button>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ApartmentsPage;
