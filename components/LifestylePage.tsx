
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ShoppingBag, TreePine, GraduationCap, Car, Ticket, ChevronDown, Activity, Info } from 'lucide-react';
import { ViewMode } from '../App';

interface LifestylePageProps {
  setView: (v: ViewMode) => void;
}

const LifestylePage: React.FC<LifestylePageProps> = ({ setView }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { label: "Median Price", value: "€1,850/sqm" },
    { label: "Schools Rating", value: "9.2/10" },
    { label: "Center Proximity", value: "10m Walk" },
    { label: "Walk Score", value: "98/100" }
  ];

  const categories = [
    {
      id: 'dining',
      title: "Dining & Nightlife",
      icon: <Ticket className="w-5 h-5" />,
      desc: "From Iulius Town’s gourmet food court to the artisanal cafes of Cetate.",
      items: ["Maltese Terrace", "The Drunken Rat Pub", "Iulius Food Court", "Local Artisanal Coffee", "Cetate Fine Dining"],
      img: "https://images.unsplash.com/photo-1550966841-3ee7adac1afb?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 'parks',
      title: "Parks & Recreation",
      icon: <TreePine className="w-5 h-5" />,
      desc: "Immediate access to the city’s greenest lungs for morning runs and quiet afternoons.",
      items: ["Botanical Park", "Central Park", "Onsite Vertical Gardens", "Mara River Walk", "Private Fitness Hub"],
      img: "https://images.unsplash.com/photo-1542601906970-14197b4c1970?q=80&w=2400&auto=format&fit=crop"
    },
    {
      id: 'shopping',
      title: "Shopping & Services",
      icon: <ShoppingBag className="w-5 h-5" />,
      desc: "5,000+ sqm of onsite retail meets Romania's largest mixed-use shopping district.",
      items: ["Iulius Town Retail Hub", "Onsite Central Plaza", "Mara Pharmacy", "Mara Grocery Atelier", "Beauty & Spa Center"],
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 'education',
      title: "Education & Health",
      icon: <GraduationCap className="w-5 h-5" />,
      desc: "Surrounded by academic prestige and specialized care for the modern family.",
      items: ["Politehnica University", "City Pediatrica Clinic", "Nikolaus Lenau High", "Mara Early Learning", "Regina Maria Health"],
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 'transit',
      title: "Commute & Transit",
      icon: <Car className="w-5 h-5" />,
      desc: "Effortless flow to the ring road and international connections.",
      items: ["City Ring Road Access", "15m to Int'l Airport", "Tram Line 4 & 7", "Bike Sharing Stations", "Private Secure Parking"],
      img: "https://images.unsplash.com/photo-1449156003053-c3ca24237f81?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 'culture',
      title: "Arts & Character",
      icon: <Activity className="w-5 h-5" />,
      desc: "Living in a city within a city, where history meets future-proof architecture.",
      items: ["Mara Opera Night", "Museum of Modern Silence", "Cultural Plaza Events", "Historical Cetate Square", "Mara Card Discounts"],
      img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=2400&auto=format&fit=crop"
    }
  ];

  const faqs = [
    { q: "Is City of Mara safe?", a: "Mara is a 24/7 gated community with integrated multi-layer biometric security and a dedicated onsite concierge team." },
    { q: "What's the parking situation?", a: "We offer secure multi-level underground parking with dedicated EV charging stations for every building." },
    { q: "What are the HOA fees like?", a: "As an nZEB certified building, energy costs are up to 40% lower, and HOA fees cover premium garden maintenance and healthcare access." },
    { q: "What is the City of Mara Card?", a: "An exclusive resident privilege card providing significant discounts at onsite commercial hubs and local Timișoara partners." },
    { q: "How fast is property value increasing?", a: "The Circumvalațiunii district has seen a 12% annual appreciation over the last 3 years, outperforming the city average." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2670&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-75"
            alt="Timișoara Neighborhood"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[12px] uppercase tracking-[0.8em] text-white/60 mb-8 block font-bold">The District / Timișoara</span>
            <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-tight mb-12">The Pulse <br/>of Presence.</h1>
            
            <div className="flex flex-wrap gap-8">
              <button 
                onClick={() => setView('apartments')}
                className="px-12 py-6 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-neutral-200 transition-all shadow-2xl"
              >
                View Available Homes
              </button>
              <button className="px-12 py-6 border border-white text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all">
                Schedule Neighborhood Tour
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-xl border-t border-white/20 py-8 px-8 z-20">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-white text-2xl font-serif">{s.value}</span>
                <span className="text-white/40 text-[9px] uppercase tracking-widest font-bold mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Overview */}
      <section className="py-40 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-8 block font-bold">The Vision / Overview</span>
          <h2 className="text-5xl font-serif tracking-tighter leading-tight mb-12">A City Within <br/>A City.</h2>
          <div className="space-y-8 text-xl font-light text-neutral-500 leading-relaxed max-w-lg">
            <p>
              City of Mara represents the evolution of Timișoara's urban core. Nestled on Calea Circumvalațiunii, it bridges the gap between the historic Cetate squares and the cutting-edge tech hubs of Aradului.
            </p>
            <p>
              This is a neighborhood built for corporate leaders, tech visionaries, and modern families who refuse to compromise on either efficiency or elegance.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-neutral-50 p-12 rounded-sm border border-neutral-100"
        >
          <h3 className="text-[10px] uppercase tracking-widest font-bold mb-10 text-neutral-400">Core Distinctives</h3>
          <ul className="space-y-12">
            <li className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                <Activity className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-serif mb-2">nZEB Efficiency</h4>
                <p className="text-sm text-neutral-400 font-light">Lowering utility costs by 40% through nearly Zero-Energy building standards.</p>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-serif mb-2">Iulius Town Proximity</h4>
                <p className="text-sm text-neutral-400 font-light">Immediate access to Romania's largest mixed-use retail and corporate hub.</p>
              </div>
            </li>
            <li className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                <Ticket className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-serif mb-2">Mara Resident Card</h4>
                <p className="text-sm text-neutral-400 font-light">Exclusive discounts at onsite businesses and healthcare at City Pediatrica.</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Lifestyle Bento Grid */}
      <section className="py-40 bg-neutral-50 border-y border-neutral-100 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl font-serif tracking-tighter mb-4">Life Unfolds Here.</h2>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">Curated Experiences / Selection</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-neutral-200 p-10 flex flex-col hover:border-black transition-all duration-500 overflow-hidden relative"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-neutral-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-serif">{cat.title}</h3>
                </div>
                
                <p className="text-sm text-neutral-500 font-light mb-10 leading-relaxed">
                  {cat.desc}
                </p>

                <ul className="space-y-4 mb-12 flex-1">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-sm text-neutral-400 group-hover:text-black transition-colors">
                      <div className="w-1 h-1 bg-neutral-200 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="h-48 w-full overflow-hidden mt-auto">
                  <img 
                    src={cat.img} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" 
                    alt={cat.title}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-8 block font-bold">Market Intelligence</span>
            <h2 className="text-5xl font-serif tracking-tighter leading-tight mb-12">Exponential <br/>Opportunity.</h2>
            <p className="text-xl font-light text-neutral-500 leading-relaxed mb-12">
              The Circumvalațiunii district has outperformed city averages by 18% over the last 24 months. For corporate expats and tech professionals, Mara is the definitive investment destination.
            </p>
            
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-neutral-100 pb-4">
                <span className="text-neutral-400 text-sm font-bold uppercase tracking-widest">Days on Market</span>
                <span className="text-2xl font-serif">14 Days</span>
              </div>
              <div className="flex justify-between items-end border-b border-neutral-100 pb-4">
                <span className="text-neutral-400 text-sm font-bold uppercase tracking-widest">Inventory Levels</span>
                <span className="text-2xl font-serif">Limited</span>
              </div>
              <div className="flex justify-between items-end border-b border-neutral-100 pb-4">
                <span className="text-neutral-400 text-sm font-bold uppercase tracking-widest">Annual Yield</span>
                <span className="text-2xl font-serif">6.8%</span>
              </div>
            </div>
            
            <p className="mt-12 text-[9px] uppercase tracking-widest text-neutral-300 font-bold">Source: Timișoara Real Estate Index 2024</p>
          </div>

          <div className="relative aspect-square flex items-center justify-center p-12 bg-neutral-50 rounded-full border border-neutral-100 overflow-hidden">
            <svg viewBox="0 0 400 200" className="w-full h-auto text-black">
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 20 180 Q 100 160 180 120 T 380 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <motion.circle 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                cx="380" cy="40" r="4" fill="currentColor" 
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-300">District Appreciation</span>
              <h4 className="text-6xl font-serif">+12%</h4>
              <span className="text-[9px] uppercase tracking-widest font-bold text-green-500">Since Jan 2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Comparison */}
      <section className="py-40 bg-black text-white px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tighter">Why Choose Mara?</h2>
            <p className="text-xl font-light opacity-50 max-w-2xl mx-auto">Comparing the district of tomorrow with established neighboring zones.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Cetate (Historic Center)", merit: "High charm, limited parking, older plumbing.", ideal: "Tourist interest." },
              { name: "Aradului (Tech Hub)", merit: "Modern, business-focused, less walkable to center.", ideal: "Office proximity." },
              { name: "Fabric (Heritage Hub)", merit: "Industrial charm, undergoing slow renewal.", ideal: "Artsy alternatives." }
            ].map(adj => (
              <div key={adj.name} className="p-12 border border-white/10 hover:border-white/40 transition-all rounded-sm">
                <h4 className="text-2xl font-serif mb-6">{adj.name}</h4>
                <p className="text-sm font-light opacity-60 mb-8">{adj.merit}</p>
                <div className="flex items-center space-x-3">
                  <Info className="w-4 h-4 opacity-30" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">{adj.ideal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-serif tracking-tighter">Expert Inquiries.</h2>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400 mt-4">Essential Neighborhood Knowledge</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-neutral-100">
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full flex justify-between items-center py-8 text-left group"
              >
                <span className="text-xl font-light hover:translate-x-2 transition-transform">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${activeFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-neutral-500 font-light text-lg leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 text-center px-8 border-t border-neutral-100">
        <h2 className="text-4xl md:text-6xl font-serif mb-12 tracking-tight">Become a Mara Native.</h2>
        <p className="text-xl font-light text-neutral-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          The district of the future awaits your arrival. Join the inner circle of Timișoara’s most distinguished residents.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button 
            onClick={() => setView('apartments')}
            className="px-16 py-7 bg-black text-white uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-neutral-800 transition-all"
          >
            Explore Available Floorplans
          </button>
          <button className="px-16 py-7 border border-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-black hover:text-white transition-all">
            Inquire Privately
          </button>
        </div>
      </section>
    </div>
  );
};

export default LifestylePage;
