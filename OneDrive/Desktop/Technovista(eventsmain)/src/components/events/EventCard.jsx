// src/components/events/EventCard.jsx
export const EventCard = ({ event, onClick, onRegister }) => {
  return (
    <div 
      onClick={onClick} 
      className="w-[300px] h-[450px] bg-[#12161e]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col cursor-pointer hover:border-cyan transition-all duration-300 group"
    >
      <div className="w-full h-48 mb-6 overflow-hidden rounded-2xl border border-white/5">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover" 
        />
      </div>

      <h3 className="text-xl font-bold text-white uppercase mb-2">{event.title}</h3>
      <p className="text-slate-400 text-sm flex-grow mb-6 line-clamp-3">{event.hoverDescription}</p>

      {/* ONLY the Register button remains */}
      <button 
        onClick={(e) => { 
          e.stopPropagation(); 
          onRegister(event); 
        }}
        className="w-full py-3 text-[10px] font-bold uppercase tracking-widest bg-cyan text-black rounded-full hover:bg-cyan/80 transition-colors"
      >
        Register Now
      </button>
    </div>
  );
};