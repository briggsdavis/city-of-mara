
import React from 'react';
import { motion } from 'framer-motion';

interface RightNavProps {
  activeId: string;
  onSelect: (id: string) => void;
}

const RightNav: React.FC<RightNavProps> = ({ activeId, onSelect }) => {
  const dots = [
    { id: 'm12', label: 'Building M12' },
    { id: 'm11', label: 'Building M11' },
    { id: 'm10', label: 'Building M10' },
    { id: 'm9', label: 'Building M9' },
    { id: 'm8', label: 'Building M8' },
    { id: 'm7', label: 'Building M7' },
    { id: 'm6', label: 'Building M6' },
    { id: 'm5', label: 'Building M5' },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[80] hidden xl:flex flex-col items-end space-y-6">
      {dots.map((dot) => (
        <button
          key={dot.id}
          onClick={() => onSelect(dot.id)}
          className="group flex items-center space-x-4 outline-none"
        >
          <span className={`text-[8px] uppercase tracking-[0.4em] font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 text-black`}>
            {dot.label}
          </span>
          <div className="w-12 h-[1px] bg-black/40 group-hover:bg-black transition-all" />
        </button>
      ))}
    </div>
  );
};

export default RightNav;
