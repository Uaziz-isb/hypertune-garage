import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = () => {
    const text = encodeURIComponent(
      customMsg || 'Assalam-o-Alaikum! How can HyperTune Garage help me with my car today?'
    );
    window.open(`https://wa.me/923330177717?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popover */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden mb-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                HT
              </div>
              <div>
                <h4 className="font-bold text-sm">HyperTune Support</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  Online • Typically replies in 2 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-emerald-700 text-emerald-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-slate-950 text-xs text-slate-300 space-y-3">
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-1">
              <p className="font-bold text-white">Assalam-o-Alaikum! 👋</p>
              <p className="text-slate-400">
                How can HyperTune Garage help you with your car today in Islamabad or Rawalpindi?
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                placeholder="Type your message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={handleSend}
                className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 group relative"
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-600 border-2 border-slate-950 rounded-full flex items-center justify-center text-[8px] font-bold text-white">
          1
        </span>
      </button>
    </div>
  );
};
