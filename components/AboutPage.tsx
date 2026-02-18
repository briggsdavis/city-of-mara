
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';

const timelineData = [
  { year: '2012', title: 'The Blueprint', text: 'Elena Voss and Alber Holding collaborate to define a new era of silence-based architecture.' },
  { year: '2015', title: 'Site Selection', text: 'Securing the topological pocket of Mara, the quietest zone in the metropolis.' },
  { year: '2019', title: 'Groundbreaking', text: 'Construction begins on the eight-tower masterplan using revolutionary acoustic materials.' },
  { year: '2023', title: 'The Milestone', text: 'Completion of the structural framework for M12, the flagship residence.' },
  { year: '2025', title: 'A New Era', text: 'Handover of the first residences and opening of the Botanical Gardens.' }
];

const valuesData = [
  {
    title: "Craftsmanship",
    text: "Every surface is finished by hand. We prioritize the touch of human intent over industrial repetition.",
    img: "https://images.unsplash.com/photo-1581439645268-ad7045c4323e?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Innovation",
    text: "From self-healing concrete to acoustic filtration, we push the limits of what a home can do.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Serenity",
    text: "Noise is the ultimate pollutant. We design zones of absolute acoustic peace.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop"
  },
  {
    title: "Longevity",
    text: "Buildings that breathe with the city for centuries, not seasons. Built to endure.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Community",
    text: "A curated ecosystem of like-minded individuals who value privacy as much as connection.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2670&auto=format&fit=crop"
  }
];

const AboutPage: React.FC = () => {
  const containerRef = useRef(null);
  const parallaxRef = useRef(null);
  const valuesRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: valuesRef,
    offset: ["start start", "end end"]
  });

  const sections = [
    { id: 'hero', label: 'Legacy' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'timeline', label: 'History' },
    { id: 'values', label: 'Values' },
    { id: 'alber', label: 'Foundation' }
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const { scrollYProgress: heroProgress } = useScroll();
  const heroScale = useTransform(heroProgress, [0, 0.2], [1, 1.1]);

  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  const parallaxY = useTransform(parallaxProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={containerRef} className="relative bg-[#F5F5F0]">
      {/* Sidebar Quick Menu - Darker lines for visibility */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[80] hidden xl:flex flex-col items-end space-y-6">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group flex items-center space-x-4 outline-none"
          >
            <span className="text-[8px] uppercase tracking-[0.4em] font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 text-black">
              {s.label}
            </span>
            <div className="w-12 h-[1px] bg-black/40 group-hover:bg-black transition-all" />
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative h-[90vh] overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-75"
            alt="About Mara Hero"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12px] uppercase tracking-[0.8em] mb-8 block font-bold"
          >
            Our Origin Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-9xl font-serif tracking-tighter leading-none"
          >
            Built for <br/>Decades.
          </motion.h1>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-60 px-8 flex justify-center bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl text-center"
        >
          <span className="text-[12px] uppercase tracking-[0.5em] text-neutral-400 mb-12 block font-bold">The Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-12">
            "Silence is the bedrock of presence. We believe architectural excellence is measured by what it preserves, not just what it provides."
          </h2>
          <div className="w-20 h-[1px] bg-black/10 mx-auto" />
        </motion.div>
      </section>

      {/* Parallax */}
      <section id="parallax" ref={parallaxRef} className="h-screen w-full relative overflow-hidden">
        <motion.div style={{ y: parallaxY }} className="absolute -top-[20%] left-0 w-full h-[140%]">
          <img 
            src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=2670&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Parallax Skyline"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-60 bg-[#F5F5F0] px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-32 text-center">
            <h3 className="text-6xl font-serif mb-6">A Journey of <br/>Precision</h3>
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">Chronicle / 2012 — 2025</p>
          </div>

          <div className="relative border-l border-black/10 ml-4 md:ml-0 md:pl-20 py-20">
            {timelineData.map((item, i) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="mb-32 last:mb-0 relative"
              >
                <div className="absolute -left-[5px] md:-left-[85px] top-2 w-[10px] h-[10px] bg-black rounded-full" />
                <span className="text-4xl font-serif text-neutral-300 mb-4 block">{item.year}</span>
                <h4 className="text-2xl font-bold uppercase tracking-widest mb-6">{item.title}</h4>
                <p className="text-xl font-light text-neutral-500 leading-relaxed max-w-xl">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" ref={valuesRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-white">
          <div className="flex w-full h-full">
            <div className="w-1/2 h-full relative overflow-hidden">
              {valuesData.map((val, i) => {
                return (
                  <motion.div 
                    key={i}
                    style={{ 
                      opacity: useTransform(scrollYProgress, 
                        [ (i-0.5)/5, i/5, (i+0.5)/5, (i+1)/5 ], 
                        [ 0, 1, 1, 0 ]
                      )
                    }}
                    className="absolute inset-0"
                  >
                    <motion.img 
                      src={val.img} 
                      className="w-full h-full object-cover" 
                      alt={val.title}
                    />
                  </motion.div>
                );
              })}
            </div>

            <div className="w-1/2 h-full flex items-center justify-center p-20 bg-[#F9F9F7]">
              <div className="relative w-full max-w-lg h-64">
                {valuesData.map((val, i) => (
                  <motion.div
                    key={i}
                    style={{ 
                      opacity: useTransform(scrollYProgress, 
                        [ (i-0.5)/5, i/5, (i+0.5)/5, (i+1)/5 ], 
                        [ 0, 1, 1, 0 ]
                      ),
                      y: useTransform(scrollYProgress, 
                        [ (i-0.5)/5, i/5, (i+0.5)/5, (i+1)/5 ], 
                        [ 20, 0, 0, -20 ]
                      )
                    }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <span className="text-[12px] uppercase tracking-[0.5em] text-neutral-400 mb-6 block font-bold">Value / 0{i+1}</span>
                    <h3 className="text-6xl font-serif mb-8 tracking-tighter">{val.title}</h3>
                    <p className="text-xl font-light text-neutral-500 leading-relaxed">
                      {val.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alber Foundation Section */}
      <section id="alber" className="py-60 bg-white text-black px-8 md:px-24 overflow-hidden border-t border-neutral-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[12px] uppercase tracking-[1em] text-neutral-500 mb-10 block font-bold">Impact & Philanthropy</span>
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter mb-12">The Alber <br/>Foundation.</h2>
            
            <div className="space-y-10 text-lg font-light text-neutral-600 leading-relaxed max-w-xl">
              <p>
                As the philanthropic arm of Alber Holding, the Foundation operates with a singular focus: to improve the quality of urban life through heritage conservation and ecological innovation. Our mission transcends traditional real estate, seeking to create lasting value for the cities that host our developments.
              </p>
              <p>
                Beyond architectural preservation, the Foundation is a leader in urban reforestation. In the Mara district, we have committed to the long-term stewardship of the Vertical Botanical Gardens, ensuring they remain a public asset for generations. Our "Silent Learning" initiative has also provided acoustic treatment to twelve local primary schools, fostering environments where children can thrive away from the roar of metropolitan transit.
              </p>
              <p>
                We believe that a corporation's legacy is defined by its contribution to the common good. By integrating social responsibility into the fabric of our business, we ensure that City of Mara is not just a place to live, but a catalyst for positive urban change.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 mt-20 pt-16 border-t border-neutral-200">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-neutral-400">Philanthropic Capital</h4>
                <p className="text-3xl font-serif">$140M+</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold mb-4 text-neutral-400">Global Reach</h4>
                <p className="text-3xl font-serif">12 Cities</p>
              </div>
            </div>

            <button className="mt-20 group flex items-center space-x-6">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold border-b border-black/20 pb-2 group-hover:border-black transition-all">Download 2024 Impact Report</span>
              <div className="w-12 h-[1px] bg-black/20 group-hover:w-20 group-hover:bg-black transition-all duration-500" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="aspect-[4/5] bg-neutral-50 rounded-sm overflow-hidden relative shadow-2xl border border-neutral-100"
          >
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-80 hover:scale-105 hover:opacity-100 transition-all duration-1000"
              alt="Alber Foundation Legacy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12 text-black">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-60 mb-3">Legacy Project</p>
              <h4 className="text-2xl font-serif">The Vertigo Forest Initiative</h4>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;
