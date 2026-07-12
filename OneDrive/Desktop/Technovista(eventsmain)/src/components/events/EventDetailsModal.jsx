// src/components/events/EventDetailsModal.jsx
export const EventDetailsModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#12161e] border border-cyan/30 rounded-3xl p-10 max-w-2xl w-full shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-fade-in relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white text-2xl">✕</button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={event.imageURL} alt={event.title} className="rounded-2xl w-full h-full object-cover border border-white/10" />
          <div>
            <h2 className="text-4xl font-black text-white uppercase mb-2">{event.title}</h2>
            <p className="text-cyan font-mono mb-6">{event.category}</p>
            <p className="text-slate-300 leading-relaxed mb-8">{event.hoverDescription}</p>
            <button className="px-8 py-3 bg-cyan text-black font-bold uppercase rounded-full hover:bg-white transition-all">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};