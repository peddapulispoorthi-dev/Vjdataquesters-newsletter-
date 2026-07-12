// src/components/events/RegistrationModal.jsx
export const RegistrationModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#12161e] border border-cyan/30 p-8 rounded-2xl w-full max-w-md shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
        
        <h2 className="text-2xl font-bold text-white mb-4">Register for {event.title}</h2>
        
        {/* Simple Form Fields */}
        <div className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full bg-black/50 border border-slate-700 p-3 rounded-lg text-white" />
          <input type="email" placeholder="Email" className="w-full bg-black/50 border border-slate-700 p-3 rounded-lg text-white" />
          <button className="w-full bg-cyan text-black font-bold py-3 rounded-lg hover:bg-white transition-colors">
            SUBMIT REGISTRATION
          </button>
        </div>
      </div>
    </div>
  );
};