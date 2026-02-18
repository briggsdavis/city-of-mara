import React from "react"

interface RightNavProps {
  activeId: string
  onSelect: (id: string) => void
}

const RightNav: React.FC<RightNavProps> = ({ activeId, onSelect }) => {
  const dots = [
    { id: "m12", label: "Building M12" },
    { id: "m11", label: "Building M11" },
    { id: "m10", label: "Building M10" },
    { id: "m9", label: "Building M9" },
    { id: "m8", label: "Building M8" },
    { id: "m7", label: "Building M7" },
    { id: "m6", label: "Building M6" },
    { id: "m5", label: "Building M5" },
  ]

  return (
    <div className="fixed top-1/2 right-8 z-[80] hidden -translate-y-1/2 flex-col items-end space-y-6 xl:flex">
      {dots.map((dot) => (
        <button
          key={dot.id}
          onClick={() => onSelect(dot.id)}
          className="group flex items-center space-x-4 outline-none"
        >
          <span
            className={`translate-x-4 text-[8px] font-bold tracking-[0.4em] text-black uppercase opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100`}
          >
            {dot.label}
          </span>
          <div className="h-[1px] w-12 bg-black/40 transition-all group-hover:bg-black" />
        </button>
      ))}
    </div>
  )
}

export default RightNav
