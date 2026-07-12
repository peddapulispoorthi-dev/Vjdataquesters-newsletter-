import React from 'react';

export const EventCard3D = React.memo(({ event, onClick, onRegister }) => {
  return (
    <div
      onClick={onClick}
      className="w-[400px] h-[550px] bg-[#12161e] border border-white/10 rounded-[32px] p-8 flex flex-col items-center cursor-pointer transition-all duration-300 hover:border-cyan hover:shadow-2xl"
    >
      <div className="relative group w-full h-[250px] mb-8 overflow-hidden rounded-2xl border border-white/5 bg-black/20">
        <img
          src={event.image || event.imageURL || '/poster.png'}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="text-xs uppercase tracking-widest border-b border-cyan pb-1">
            View Details
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center text-center flex-grow w-full">
        <h3 className="text-2xl font-bold text-white uppercase mb-2">{event.title}</h3>
        <p className="text-cyan text-sm uppercase tracking-widest font-mono mb-4">{event.category}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {event.hoverDescription}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onRegister(event);
        }}
        className="w-full py-4 mt-auto text-xs font-bold uppercase bg-cyan/10 text-cyan border border-cyan/30 rounded-full hover:bg-cyan hover:text-black transition-all"
      >
        Register Now
      </button>
    </div>
  );
});

EventCard3D.displayName = 'EventCard3D';
