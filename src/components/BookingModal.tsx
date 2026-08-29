import React, { useState } from 'react';
import { X, Wrench, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, Phone, User, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { locationsData } from '../data/locationsData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialServiceId }) => {
  const [step, setStep] = useState(1);
  const [make, setMake] = useState('Toyota');
  const [model, setModel] = useState('Fortuner');
  const [year, setYear] = useState('2023');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialServiceId ? [initialServiceId] : ['ecu-tuning']
  );
  const [customNotes, setCustomNotes] = useState('');
  const [locationId, setLocationId] = useState('islamabad-hub');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pickup, setPickup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<{
    ref: string;
    whatsappUrl: string;
  } | null>(null);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const selectedServiceTitles = servicesData
        .filter((s) => selectedServices.includes(s.id))
        .map((s) => s.title)
        .join(', ');

      const matchedLocation = locationsData.find((l) => l.id === locationId);
      const chosenBranchName = matchedLocation ? matchedLocation.branchName : 'HyperTune Garage - Islamabad Flagship Hub';

      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          vehicleMake: make,
          vehicleModel: model,
          year,
          location: chosenBranchName,
          service: selectedServiceTitles || 'Diagnostic Audit',
          date,
          time,
          notes: customNotes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setBookingResult({
          ref: data.bookingRef,
          whatsappUrl: data.whatsappUrl,
        });
        window.open(data.whatsappUrl, '_blank');
        setStep(5);
      } else {
        alert(data.error || 'Failed to submit booking.');
      }
    } catch (err) {
      console.error(err);
      // Fallback local booking generation
      const selectedServiceTitles = servicesData
        .filter((s) => selectedServices.includes(s.id))
        .map((s) => s.title)
        .join(', ');
      const matchedLocation = locationsData.find((l) => l.id === locationId);
      const chosenBranchName = matchedLocation ? matchedLocation.branchName : 'HyperTune Garage - Islamabad Flagship Hub';
      const fallbackRef = `HTG-${Math.floor(100000 + Math.random() * 900000)}`;
      const msg = encodeURIComponent(
        `*New Service Booking - HyperTune Garage*\n*Booking Ref:* #${fallbackRef}\n*Customer:* ${name} (${phone})\n*Vehicle:* ${year} ${make} ${model}\n*Services:* ${selectedServiceTitles || 'Diagnostic Audit'}\n*Branch:* ${chosenBranchName}\n*Scheduled:* ${date} at ${time}${customNotes ? `\n*Notes:* ${customNotes}` : ''}`
      );
      const waUrl = `https://wa.me/923330177717?text=${msg}`;
      setBookingResult({
        ref: fallbackRef,
        whatsappUrl: waUrl,
      });
      window.open(waUrl, '_blank');
      setStep(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05080e]/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0b121e] border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-950/50 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#070c14] p-6 border-b border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold">
              <Wrench className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Book Workshop Service</h3>
              <p className="text-xs text-slate-400">HyperTune Garage • Certified Diagnostic & Repair</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="bg-[#070c14] px-6 py-3 border-b border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800'}`}>1</span>
            <span className={step === 1 ? 'text-white font-bold' : ''}>Vehicle</span>
          </div>
          <span>→</span>
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800'}`}>2</span>
            <span className={step === 2 ? 'text-white font-bold' : ''}>Service</span>
          </div>
          <span>→</span>
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800'}`}>3</span>
            <span className={step === 3 ? 'text-white font-bold' : ''}>Schedule</span>
          </div>
          <span>→</span>
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800'}`}>4</span>
            <span className={step === 4 ? 'text-white font-bold' : ''}>Contact</span>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">Step 1: Vehicle Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Make</label>
                  <select
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                  >
                    {[
                      'Toyota', 'Honda', 'Suzuki', 'Hyundai', 'Kia', 'Changan',
                      'Haval', 'MG', 'BYD', 'Chery', 'Isuzu', 'FAW',
                      'Daihatsu', 'Nissan', 'Mitsubishi', 'Mazda', 'Subaru', 'Lexus',
                      'Land Rover', 'Range Rover', 'Jeep', 'Ford', 'Chevrolet', 'Volvo'
                    ].map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Model / Trim</label>
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="e.g. 530i / Civic Turbo / Prius"
                    className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Model Year</label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="e.g. 2022"
                    className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Custom Notes / Symptoms (Optional)</label>
                <textarea
                  rows={3}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Describe any specific noises, dashboard error codes, or performance requests..."
                  className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Next: Choose Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">Step 2: Select Workshop Services</h4>
              <p className="text-xs text-slate-400">Select one or multiple services required for your vehicle.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
                {servicesData.map((s) => {
                  const isSelected = selectedServices.includes(s.id);
                  return (
                    <div
                      key={s.id}
                      onClick={() => toggleService(s.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-500 text-white'
                          : 'bg-[#070c14] border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="font-bold text-sm leading-tight">{s.title}</h5>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {}}
                          className="w-4 h-4 accent-cyan-500 rounded"
                        />
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">{s.shortDesc}</p>
                      <span className="inline-block mt-2 text-[11px] font-semibold text-cyan-400">
                        Est: {s.priceRange}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-sm flex items-center gap-1.5 hover:bg-slate-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={selectedServices.length === 0}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-extrabold text-sm flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Next: Branch & Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-white">Step 3: Select Branch & Schedule</h4>

              {/* Branch Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {locationsData.map((loc) => {
                  if (!loc.isOperational) {
                    return (
                      <div
                        key={loc.id}
                        className="p-4 rounded-2xl border border-amber-500/30 bg-[#070c14]/80 text-slate-400 space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <div className="flex items-center gap-1.5 font-bold text-xs text-slate-300">
                            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{loc.branchName}</span>
                          </div>
                          <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded">
                            Opening Soon
                          </span>
                        </div>
                        <p className="text-[11px] text-amber-200/80 italic leading-snug">
                          {loc.statusNotice}
                        </p>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={loc.id}
                      onClick={() => setLocationId(loc.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        locationId === loc.id
                          ? 'bg-cyan-950/40 border-cyan-500 text-white'
                          : 'bg-[#070c14] border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-2 font-bold text-sm">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          <span>{loc.branchName}</span>
                        </div>
                        <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">
                          Active Hub
                        </span>
                      </div>
                      {loc.address && <p className="text-xs text-slate-400 mt-1">{loc.address}</p>}
                    </div>
                  );
                })}
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Preferred Time Slot</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                  >
                    {['10:00 AM', '12:00 PM', '02:30 PM', '05:00 PM', '07:30 PM', '09:00 PM'].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-sm flex items-center gap-1.5 hover:bg-slate-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Next: Contact Info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <h4 className="text-base font-bold text-white">Step 4: Customer Contact Details</h4>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Usman Chaudhry"
                    className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0333 0177717"
                      className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Email (Optional)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@example.com"
                      className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="p-3 bg-[#070c14] border border-slate-800 rounded-xl flex items-center justify-between">
                  <div className="text-xs">
                    <p className="font-bold text-white">Request Vehicle Pick-up & Drop-off Service?</p>
                    <p className="text-slate-400">Available across Islamabad & Rawalpindi city limits.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={pickup}
                    onChange={(e) => setPickup(e.target.checked)}
                    className="w-5 h-5 accent-cyan-500 rounded"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-sm flex items-center gap-1.5 hover:bg-slate-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/30 active:scale-95 transition-all"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-slate-950" />
                      <span>Confirm & Reserve Appointment</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 5 && bookingResult && (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mx-auto text-2xl font-bold">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl font-black text-white">Booking Confirmed!</h4>
                <p className="text-sm text-slate-400">
                  Your reference ID is{' '}
                  <span className="text-cyan-400 font-extrabold bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30">
                    {bookingResult.ref}
                  </span>
                </p>
              </div>

              <div className="bg-[#070c14] p-4 rounded-2xl border border-slate-800 max-w-md mx-auto text-xs text-left text-slate-300 space-y-2">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Customer:</span>
                  <span className="font-bold text-white">{name} ({phone})</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Vehicle:</span>
                  <span className="font-bold text-white">{year} {make} {model}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-bold text-white">
                    {locationId === 'islamabad-g8' ? 'Islamabad Flagship Hub (Police Foundation)' : 'Rawalpindi Hub (Opening Soon)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Scheduled:</span>
                  <span className="font-bold text-cyan-400">{date} at {time}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={bookingResult.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation to WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
