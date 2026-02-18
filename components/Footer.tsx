
import React from 'react';
import { ViewMode } from '../App';

interface FooterProps {
  setView: (v: ViewMode) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-32 pb-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-serif text-4xl mb-8 tracking-tighter">City of Mara</h4>
            <p className="text-sm font-light text-gray-400 leading-relaxed max-w-xs">
              Exceptional architecture. Unparalleled serenity. The future of metropolitan luxury living.
            </p>
          </div>
          
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-neutral-800">Explore</h5>
            <ul className="space-y-5 text-sm font-light text-gray-500">
              <li><button onClick={() => setView('apartments')} className="hover:text-black transition-colors">Residences</button></li>
              <li><button onClick={() => setView('neighborhood')} className="hover:text-black transition-colors">Neighborhood</button></li>
              <li><button onClick={() => setView('about')} className="hover:text-black transition-colors">Our Vision</button></li>
              <li><button onClick={() => setView('investment')} className="hover:text-black transition-colors">Investment</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-neutral-800">Atelier</h5>
            <ul className="space-y-5 text-sm font-light text-gray-500">
              <li><button onClick={() => setView('news')} className="hover:text-black transition-colors">Press & News</button></li>
              <li><button onClick={() => setView('contact')} className="hover:text-black transition-colors">Enquire</button></li>
              <li><a href="#" className="hover:text-black transition-colors">Private Portal</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-10 text-neutral-800">Private Interest</h5>
            <p className="text-sm font-light text-gray-500 mb-8 leading-relaxed">Join our private list for exclusive updates on phase two developments.</p>
            <div className="flex border-b border-black pb-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none text-sm w-full font-light placeholder:opacity-30"
              />
              <button className="text-[10px] uppercase tracking-widest font-bold ml-6">Request Access</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-50 opacity-30 text-[9px] uppercase tracking-[0.3em] font-bold">
          <p>© 2024 Mara Development Group. Architect: Elena Voss.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Architectural Digest</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Vimeo</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
