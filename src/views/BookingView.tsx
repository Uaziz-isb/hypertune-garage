import React, { useState, useEffect, useMemo } from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import { locationsData } from '../data/locationsData';
import {
  trackAppointmentStep,
  trackAppointmentCompleted,
  trackWhatsAppClick,
  trackPhoneClick,
} from '../utils/analytics';
import {
  Wrench,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Phone,
  User,
  MessageCircle,
  Sparkles,
  Award,
  FileText,
  Check,
  Car,
  HelpCircle,
  RefreshCw,
  Search,
  Building2
} from 'lucide-react';

interface BookingViewProps {
  onNavigate: (page: PageId, slug?: string) => void;
  initialServiceId?: string;
}

const POPULAR_BRANDS = [
  'Toyota',
  'Honda',
  'Suzuki',
  'Hyundai',
  'Kia',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Porsche',
  'Haval',
  'MG',
  'Changan',
  'Lexus',
  'Nissan',
  'Range Rover',
  'Other',
];

const SYMPTOM_TAGS = [
  'Check Engine Light On',
  'Brake Squeal / Vibrations',
  'AC Not Cooling / Weak Airflow',
  'Paint Protection Film (PPF) Quote',
  'Ceramic Coating & Detailing',
  'Engine Oil & 50-Point Audit',
  'Suspension Thump / Knocking Noise',
  'Hybrid Battery Warning / P0A80',
  'Transmission Jerk / Delay',
  '3D Laser Wheel Alignment',
  'ECU Stage 1 / Stage 2 Tuning',
];

const TIME_SLOTS = [
  '10:00 AM - 11:30 AM (Morning Slot)',
  '11:30 AM - 01:00 PM (Morning Slot)',
  '02:00 PM - 03:30 PM (Afternoon Slot)',
  '03:30 PM - 05:00 PM (Afternoon Slot)',
  '05:00 PM - 06:30 PM (Evening Slot)',
  '06:30 PM - 08:00 PM (Evening Slot)',
  '08:00 PM - 09:30 PM (Night Express)',
];

const APPOINTMENT_FAQS = [
  {
    q: 'Do I need an appointment, or can I walk in directly?',
    a: 'While walk-in customers are warmly welcome at our Islamabad Flagship Hub, booking your service appointment online guarantees a reserved repair bay, dedicated diagnostic engineer, and zero waiting time upon arrival.',
  },
  {
    q: 'Which branch is the active workshop location for service appointments?',
    a: 'All service appointments, PPF installations, and mechanical overhauls are handled at the HyperTune Garage - Islamabad Flagship Hub (Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan). Our new Rawalpindi Hub is currently under development and opening soon.',
  },
  {
    q: 'Will I be informed of costs before any work begins?',
    a: 'Absolutely. We practice 100% transparent pricing. Following our comprehensive computerized scan and physical inspection, our technical team provides a detailed estimate for your approval via WhatsApp before any repairs or parts replacements commence.',
  },
  {
    q: 'What warranty is provided on parts and repair labor?',
    a: 'All mechanical repairs, engine overhauls, and replacement OEM components come with our signature 12-Month / 15,000 km Written Warranty. Paint Protection Film (PPF) installations include up to 10-year manufacturer warranties against yellowing or peeling.',
  },
  {
    q: 'What payment methods do you accept at the workshop?',
    a: 'We accept Cash, Direct Bank Online Transfers (1Link / Raast), all major Debit & Credit Cards (Visa, Mastercard, PayPak), and corporate account billing.',
  },
];

export const BookingView: React.FC<BookingViewProps> = ({
  onNavigate,
  initialServiceId,
}) => {
  // Wizard steps: 1 = Vehicle & Service, 2 = Branch & Schedule, 3 = Customer Info & Review, 4 = Success
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [make, setMake] = useState<string>('Toyota');
  const [customMake, setCustomMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [year, setYear] = useState<string>('2022');
  const [fuelType, setFuelType] = useState<string>('Petrol');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceSearch, setServiceSearch] = useState<string>('');
  const [serviceCategoryFilter, setServiceCategoryFilter] = useState<string>('all');
  const [symptoms, setSymptoms] = useState<string>('');
  
  // Location & Schedule State - Default: 'islamabad-hub' (HyperTune Garage - Islamabad Flagship Hub)
  const [locationId, setLocationId] = useState<string>('islamabad-hub');
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState<string>(TIME_SLOTS[0]);

  // Customer State
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [preferredContact, setPreferredContact] = useState<'whatsapp' | 'call'>('whatsapp');
  const [isUrgent, setIsUrgent] = useState<boolean>(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingResult, setBookingResult] = useState<{
    ref: string;
    whatsappUrl: string;
    date: string;
    time: string;
    branch: string;
    services: string;
    vehicle: string;
  } | null>(null);

  // Set initial service if passed from props or URL
  useEffect(() => {
    if (initialServiceId) {
      const match = servicesData.find(
        (s) => s.id === initialServiceId || s.slug === initialServiceId
      );
      if (match && !selectedServices.includes(match.id)) {
        setSelectedServices([match.id]);
      }
    } else if (selectedServices.length === 0) {
      setSelectedServices(['ecu-tuning']);
    }
  }, [initialServiceId]);

  // Toggle service selection
  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  // Add symptom quick tag
  const handleAddSymptomTag = (tag: string) => {
    setSymptoms((prev) => {
      if (prev.includes(tag)) return prev;
      return prev ? `${prev}, ${tag}` : tag;
    });
  };

  // Filtered services
  const filteredServices = useMemo(() => {
    return servicesData.filter((s) => {
      const matchesSearch =
        s.title.toLowerCase().includes(serviceSearch.toLowerCase()) ||
        s.shortDesc.toLowerCase().includes(serviceSearch.toLowerCase());
      
      const matchesCategory =
        serviceCategoryFilter === 'all' || s.category === serviceCategoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [serviceSearch, serviceCategoryFilter]);

  // Selected services data objects
  const selectedServiceObjects = useMemo(() => {
    return servicesData.filter((s) => selectedServices.includes(s.id));
  }, [selectedServices]);

  // Form validation before proceeding to next step
  const handleNextStep = (stepNumber: number) => {
    if (stepNumber === 2) {
      if (selectedServices.length === 0) {
        alert('Please select at least one workshop service.');
        return;
      }
      trackAppointmentStep(2, 'Branch & Schedule', {
        vehicle_make: make === 'Other' ? customMake : make,
        services_count: selectedServices.length,
      });
    }
    if (stepNumber === 3) {
      if (!date) {
        alert('Please select your preferred appointment date.');
        return;
      }
      trackAppointmentStep(3, 'Customer Details & Review', {
        workshop_branch: locationId,
        date,
        time,
      });
    }
    setCurrentStep(stepNumber);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  // Handle final submission
  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      alert('Please enter your full name.');
      return;
    }
    if (!phone.trim()) {
      alert('Please enter your WhatsApp or phone number.');
      return;
    }

    setIsSubmitting(true);

    const vehicleMakeName = make === 'Other' && customMake ? customMake : make;
    const vehicleFull = `${year} ${vehicleMakeName} ${model || ''} (${fuelType})`.trim();
    const matchedLoc = locationsData.find((l) => l.id === locationId);
    const branchName = matchedLoc ? matchedLoc.branchName : 'HyperTune Garage - Islamabad Flagship Hub';
    const selectedServiceTitles =
      selectedServiceObjects.map((s) => s.title).join(', ') || 'Diagnostic Evaluation';

    const fullNotes = [
      symptoms ? `Symptoms/Issues: ${symptoms}` : '',
      isUrgent ? 'URGENT/EXPRESS PRIORITY' : '',
      `Preferred Contact: ${preferredContact.toUpperCase()}`,
    ]
      .filter(Boolean)
      .join(' | ');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: customerName,
          phone,
          email,
          vehicleMake: vehicleMakeName,
          vehicleModel: model || 'Standard Spec',
          year,
          location: branchName,
          service: selectedServiceTitles,
          date,
          time,
          notes: fullNotes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        const resultPayload = {
          ref: data.bookingRef,
          whatsappUrl: data.whatsappUrl,
          date,
          time,
          branch: branchName,
          services: selectedServiceTitles,
          vehicle: vehicleFull,
        };
        trackAppointmentCompleted(data.bookingRef, selectedServiceTitles, branchName, vehicleFull);
        setBookingResult(resultPayload);
        setCurrentStep(4);
        window.scrollTo({ top: 100, behavior: 'smooth' });
      } else {
        throw new Error(data.error || 'Submission error');
      }
    } catch (err) {
      console.warn('Using fallback booking handler:', err);
      const fallbackRef = `HTG-${Math.floor(100000 + Math.random() * 900000)}`;
      const msg = encodeURIComponent(
        `*NEW SERVICE APPOINTMENT - HYPERTUNE GARAGE*\n` +
        `*Ref #:* ${fallbackRef}\n` +
        `*Customer:* ${customerName} (${phone})\n` +
        `*Vehicle:* ${vehicleFull}\n` +
        `*Branch:* ${branchName}\n` +
        `*Scheduled:* ${date} (${time})\n` +
        `*Services:* ${selectedServiceTitles}\n` +
        `${symptoms ? `*Notes:* ${symptoms}\n` : ''}` +
        `*Priority:* ${isUrgent ? 'URGENT / EXPRESS' : 'STANDARD'}`
      );
      const waUrl = `https://wa.me/923330177717?text=${msg}`;

      const resultPayload = {
        ref: fallbackRef,
        whatsappUrl: waUrl,
        date,
        time,
        branch: branchName,
        services: selectedServiceTitles,
        vehicle: vehicleFull,
      };
      trackAppointmentCompleted(fallbackRef, selectedServiceTitles, branchName, vehicleFull);
      setBookingResult(resultPayload);
      setCurrentStep(4);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setCurrentStep(1);
    setBookingResult(null);
    setCustomerName('');
    setPhone('');
    setEmail('');
    setSymptoms('');
  };

  return (
    <div className="pt-24 pb-20 space-y-12">
      {/* Top Breadcrumb & Page Header */}
      <section className="bg-gradient-to-b from-[#0a111c] to-[#070b12] border-b border-cyan-500/20 py-10 px-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate('services')}
              className="hover:text-cyan-400 transition-colors"
            >
              Services
            </button>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">
              Book Service Appointment
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Online Workshop Reservation</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Service Appointment</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Reserve your dedicated repair bay at our default primary workshop: <strong>HyperTune Garage - Islamabad Flagship Hub</strong> (Block E Police Foundation) or our <strong>Rawalpindi I-9 Branch</strong>. Zero waiting time, certified diagnostic engineers, and 100% genuine OEM parts.
              </p>
            </div>

            {/* Quick Emergency Assistance Hotline */}
            <div className="bg-[#0b1424] border border-cyan-500/30 p-5 rounded-2xl flex items-center gap-4 shrink-0 shadow-lg shadow-cyan-950/40">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Need Immediate Assistance?
                </span>
                <a
                  href="tel:+923330177717"
                  className="text-lg font-black text-white hover:text-cyan-400 transition-colors block"
                >
                  0333-0177717
                </a>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Workshop Team Active Now
                </span>
              </div>
            </div>
          </div>

          {/* Value Assurance Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-slate-300 bg-[#070d17] p-2.5 rounded-xl border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="font-semibold">12-Month Written Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-[#070d17] p-2.5 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">100% Genuine OEM Parts</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-[#070d17] p-2.5 rounded-xl border border-slate-800">
              <Wrench className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="font-semibold">Express Diagnostic Bays</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-[#070d17] p-2.5 rounded-xl border border-slate-800">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">Live WhatsApp Video Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Wizard Container */}
      <section className="max-w-7xl mx-auto px-4">
        {currentStep < 4 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Step-by-Step Interactive Form (8 Cols) */}
            <div className="lg:col-span-8 bg-[#0b121e] border border-cyan-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8">
              
              {/* Step Navigation Progress Header */}
              <div className="grid grid-cols-3 gap-2 border-b border-slate-800 pb-6">
                {[
                  { num: 1, label: 'Vehicle & Service' },
                  { num: 2, label: 'Branch & Schedule' },
                  { num: 3, label: 'Contact & Review' },
                ].map((s) => (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => {
                      if (s.num < currentStep) setCurrentStep(s.num);
                    }}
                    className={`flex flex-col sm:flex-row items-center sm:items-center gap-2 p-3 rounded-2xl transition-all text-center sm:text-left ${
                      currentStep === s.num
                        ? 'bg-cyan-500/15 border border-cyan-500/40 text-white font-bold'
                        : currentStep > s.num
                        ? 'bg-slate-900/60 border border-slate-800 text-slate-300 hover:border-slate-700 cursor-pointer'
                        : 'bg-slate-950/40 border border-slate-900 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                        currentStep === s.num
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                          : currentStep > s.num
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {currentStep > s.num ? <Check className="w-4 h-4 stroke-[3]" /> : s.num}
                    </span>
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase tracking-wider block text-slate-400 font-medium">
                        Step 0{s.num}
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold truncate block">
                        {s.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* STEP 1: VEHICLE & SERVICE SELECTION */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                      <Car className="w-6 h-6 text-cyan-400" />
                      <span>Step 1: Your Vehicle & Required Services</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Select your car manufacturer, model, and the services you would like performed.
                    </p>
                  </div>

                  {/* Vehicle Make Selection */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Select Vehicle Manufacturer *
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                      {POPULAR_BRANDS.map((brand) => (
                        <button
                          key={brand}
                          type="button"
                          onClick={() => setMake(brand)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                            make === brand
                              ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/25 font-extrabold scale-[1.02]'
                              : 'bg-[#070c14] text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>

                    {make === 'Other' && (
                      <div className="pt-2">
                        <input
                          type="text"
                          value={customMake}
                          onChange={(e) => setCustomMake(e.target.value)}
                          placeholder="Type your car make (e.g. Haval, Chery, Peugeot, Lexus)"
                          className="w-full bg-[#070c14] border border-cyan-500/50 rounded-xl p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                    )}
                  </div>

                  {/* Vehicle Model & Year & Engine */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Model / Variant *
                      </label>
                      <input
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="e.g. Civic RS / Fortuner / 530i / Prius"
                        className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Model Year
                      </label>
                      <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                      >
                        {Array.from({ length: 25 }, (_, i) => 2026 - i).map((y) => (
                          <option key={y} value={y.toString()}>
                            {y}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Engine / Powertrain
                      </label>
                      <select
                        value={fuelType}
                        onChange={(e) => setFuelType(e.target.value)}
                        className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
                      >
                        <option value="Petrol">Petrol / Gasoline</option>
                        <option value="Turbo Petrol">Turbocharged Petrol</option>
                        <option value="Hybrid / HEV">Hybrid (HEV / PHEV)</option>
                        <option value="Diesel">Diesel / Turbo Diesel</option>
                        <option value="Electric (EV)">Full Electric (EV)</option>
                      </select>
                    </div>
                  </div>

                  {/* Service Selection Filter & List */}
                  <div className="space-y-3 pt-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider">
                        Select Services Required ({selectedServices.length} Selected) *
                      </label>
                      <div className="relative w-full sm:w-64">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          value={serviceSearch}
                          onChange={(e) => setServiceSearch(e.target.value)}
                          placeholder="Search service..."
                          className="w-full bg-[#070c14] border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white focus:border-cyan-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
                      {[
                        { id: 'all', label: 'All Services' },
                        { id: 'protection', label: 'PPF & Wrap' },
                        { id: 'detailing', label: 'Detailing' },
                        { id: 'engine', label: 'Engine & Tuning' },
                        { id: 'maintenance', label: 'Maintenance' },
                        { id: 'suspension', label: 'Suspension & Brakes' },
                        { id: 'hybrid', label: 'Hybrid Tech' },
                        { id: 'electrical', label: 'AC & Electrical' },
                        { id: 'body', label: 'Body & Paint' },
                      ].map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setServiceCategoryFilter(cat.id)}
                          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-semibold ${
                            serviceCategoryFilter === cat.id
                              ? 'bg-cyan-500 text-slate-950 font-bold'
                              : 'bg-[#070c14] text-slate-400 hover:text-white border border-slate-800'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
                      {filteredServices.map((s) => {
                        const isSelected = selectedServices.includes(s.id);
                        return (
                          <div
                            key={s.id}
                            onClick={() => toggleService(s.id)}
                            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-cyan-950/50 border-cyan-500 text-white shadow-md shadow-cyan-950/50'
                                : 'bg-[#070c14] border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-bold text-sm leading-tight text-white">
                                {s.title}
                              </h3>
                              <div
                                className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                                  isSelected
                                    ? 'bg-cyan-500 border-cyan-400 text-slate-950'
                                    : 'border-slate-700 bg-slate-900'
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                            </div>
                            <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                              {s.shortDesc}
                            </p>
                            <div className="mt-2.5 flex items-center justify-between text-[11px] pt-2 border-t border-slate-800/60">
                              <span className="text-cyan-400 font-extrabold">
                                {s.priceRange}
                              </span>
                              <span className="text-slate-400">
                                Est: {s.estimatedTime}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Vehicle Symptoms / Notes */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Specific Symptoms / Fault Codes / Requests (Optional)
                    </label>
                    
                    {/* Quick Symptom Tags */}
                    <div className="flex flex-wrap gap-1.5 pb-1">
                      {SYMPTOM_TAGS.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => handleAddSymptomTag(tag)}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-[#070c14] border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                        >
                          + {tag}
                        </button>
                      ))}
                    </div>

                    <textarea
                      rows={3}
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      placeholder="Describe any unusual noises, dashboard warning lights, vibration under braking, or custom tuning requests..."
                      className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-cyan-500 focus:outline-none resize-none"
                    />
                  </div>

                  {/* Step 1 Actions */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleNextStep(2)}
                      className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm flex items-center gap-2 shadow-xl shadow-cyan-500/25 active:scale-95 transition-all"
                    >
                      <span>Proceed to Branch & Schedule</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: BRANCH & SCHEDULE */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] font-bold uppercase">
                      <Building2 className="w-3 h-3" />
                      <span>Default: HyperTune Garage - Islamabad Flagship Hub</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2 pt-1">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                      <span>Step 2: Workshop Location & Preferred Time Slot</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                      All active appointments are scheduled at our Islamabad Flagship Hub. (Rawalpindi Hub is opening soon).
                    </p>
                  </div>

                  {/* Branch Selector Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {locationsData.map((loc) => {
                      const isSelected = locationId === loc.id;
                      const isDefaultHub = loc.isOperational;
                      
                      if (!loc.isOperational) {
                        return (
                          <div
                            key={loc.id}
                            className="p-5 rounded-2xl border border-amber-500/30 bg-[#070c14]/80 text-slate-400 space-y-3 relative overflow-hidden"
                          >
                            <div className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black uppercase px-2 py-0.5 rounded-md">
                              ✦ Opening Soon • Under Development
                            </div>

                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-2 font-black text-sm sm:text-base text-slate-300 leading-tight">
                                <MapPin className="w-5 h-5 shrink-0 text-amber-400" />
                                <span>{loc.branchName}</span>
                              </div>
                              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 shrink-0">
                                {loc.city}
                              </span>
                            </div>

                            <p className="text-xs text-amber-200/90 italic leading-relaxed bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                              &ldquo;{loc.statusNotice || 'Opening soon — our new branch is currently under development. Stay tuned for the official opening announcement.'}&rdquo;
                            </p>

                            <p className="text-[11px] text-slate-400">
                              Appointments are currently serviced at our Islamabad Flagship Hub.
                            </p>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={loc.id}
                          onClick={() => setLocationId(loc.id)}
                          className={`p-5 rounded-2xl border cursor-pointer transition-all space-y-3 relative overflow-hidden ${
                            isSelected
                              ? 'bg-cyan-950/50 border-cyan-500 text-white shadow-xl shadow-cyan-950/50 ring-2 ring-cyan-400/80'
                              : 'bg-[#070c14] border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          {isDefaultHub && (
                            <div className="inline-flex items-center gap-1 bg-cyan-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-md mb-1">
                              ★ Active Flagship Hub
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 font-black text-sm sm:text-base leading-tight">
                              <MapPin className={`w-5 h-5 shrink-0 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                              <span>{loc.branchName}</span>
                            </div>
                            <span
                              className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shrink-0 ${
                                isSelected
                                  ? 'bg-cyan-500 text-slate-950'
                                  : 'bg-slate-800 text-slate-400'
                              }`}
                            >
                              {loc.city}
                            </span>
                          </div>

                          {loc.address && (
                            <p className="text-xs text-slate-400 leading-relaxed">
                              {loc.address}
                            </p>
                          )}

                          <div className="space-y-1 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-cyan-400" />
                              <span>Sat - Thu: 10:00 AM - 10:00 PM (Fri Off)</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5 text-cyan-400" />
                              <span>Direct: {loc.phone}</span>
                            </div>
                          </div>

                          {loc.workshopSpecs && (
                            <div className="flex flex-wrap gap-1 pt-1">
                              {loc.workshopSpecs.slice(0, 3).map((spec, i) => (
                                <span
                                  key={i}
                                  className="text-[10px] bg-slate-900/90 text-cyan-300 border border-cyan-500/20 px-2 py-0.5 rounded-md"
                                >
                                  ✓ {spec}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Date & Time Slot Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span>Preferred Appointment Date *</span>
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3.5 text-sm text-white focus:border-cyan-500 focus:outline-none"
                      />
                      <p className="text-[11px] text-amber-400 mt-1">
                        Note: Fridays are weekly maintenance off days.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span>Preferred Time Slot *</span>
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3.5 text-sm text-white focus:border-cyan-500 focus:outline-none"
                      >
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Direct workshop bay & priority slot reserved for your vehicle.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 Navigation Actions */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-3.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-bold text-sm flex items-center gap-2 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Vehicle</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNextStep(3)}
                      className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm flex items-center gap-2 shadow-xl shadow-cyan-500/25 active:scale-95 transition-all"
                    >
                      <span>Proceed to Customer Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CUSTOMER DETAILS & FINAL REVIEW */}
              {currentStep === 3 && (
                <form onSubmit={handleSubmitBooking} className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                      <User className="w-6 h-6 text-cyan-400" />
                      <span>Step 3: Contact Information & Final Confirmation</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                      We will send your digital booking voucher and appointment reminder directly to your phone.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Usman Malik"
                        className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3.5 text-sm text-white focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0333 0177717 / +92 300 1234567"
                        className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3.5 text-sm text-white focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. usman@example.com"
                        className="w-full bg-[#070c14] border border-slate-800 rounded-xl p-3.5 text-sm text-white focus:border-cyan-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase tracking-wider">
                        Preferred Contact Mode
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setPreferredContact('whatsapp')}
                          className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                            preferredContact === 'whatsapp'
                              ? 'bg-emerald-600/20 border-emerald-500 text-emerald-400 font-extrabold'
                              : 'bg-[#070c14] border-slate-800 text-slate-400'
                          }`}
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPreferredContact('call')}
                          className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                            preferredContact === 'call'
                              ? 'bg-cyan-600/20 border-cyan-500 text-cyan-400 font-extrabold'
                              : 'bg-[#070c14] border-slate-800 text-slate-400'
                          }`}
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>Phone Call</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Urgent / Express Checkbox */}
                  <div className="p-4 bg-[#070c14] border border-slate-800 rounded-2xl flex items-center justify-between">
                    <div className="text-xs space-y-0.5">
                      <span className="font-bold text-white block">
                        Mark as Urgent / Same-Day Express Service?
                      </span>
                      <span className="text-slate-400">
                        For critical breakdowns, overheating, or emergency diagnostic scans.
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={isUrgent}
                      onChange={(e) => setIsUrgent(e.target.checked)}
                      className="w-5 h-5 accent-cyan-500 rounded cursor-pointer"
                    />
                  </div>

                  {/* Step 3 Navigation Actions */}
                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-bold text-sm flex items-center gap-2 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Schedule</span>
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-9 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm flex items-center gap-2 shadow-2xl shadow-cyan-500/40 active:scale-95 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                          <span>Reserving Your Slot...</span>
                        </div>
                      ) : (
                        <>
                          <CheckCircle2 className="w-5 h-5 text-slate-950" />
                          <span>Confirm & Book Appointment</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Real-Time Sticky Order Summary Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="bg-[#0b121e] border border-cyan-500/30 rounded-3xl p-6 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                      <FileText className="w-4 h-4" />
                    </div>
                    <h3 className="font-black text-base text-white">Booking Summary</h3>
                  </div>
                  <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                    {locationId === 'islamabad-g8' ? 'Islamabad Flagship Hub' : 'Rawalpindi I-9'}
                  </span>
                </div>

                {/* Summary Items */}
                <div className="space-y-3.5 text-xs">
                  {/* Vehicle */}
                  <div className="space-y-1">
                    <span className="text-slate-400 block font-semibold">Selected Vehicle</span>
                    <div className="font-extrabold text-white bg-[#070c14] p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                      <span>{year} {make === 'Other' && customMake ? customMake : make} {model || 'Vehicle'}</span>
                      <span className="text-cyan-400 text-[11px] font-bold">{fuelType}</span>
                    </div>
                  </div>

                  {/* Selected Services */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-semibold">Services ({selectedServiceObjects.length})</span>
                      <span className="text-[11px] text-cyan-400 font-bold">Estimated Cost</span>
                    </div>
                    <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                      {selectedServiceObjects.length === 0 ? (
                        <div className="text-slate-500 italic p-2 bg-[#070c14] rounded-xl border border-slate-800">
                          No service selected yet.
                        </div>
                      ) : (
                        selectedServiceObjects.map((s) => (
                          <div
                            key={s.id}
                            className="bg-[#070c14] p-2.5 rounded-xl border border-slate-800 flex items-start justify-between gap-2"
                          >
                            <div>
                              <span className="font-bold text-white block leading-tight">{s.title}</span>
                              <span className="text-[10px] text-slate-400">Est: {s.estimatedTime}</span>
                            </div>
                            <span className="text-cyan-400 font-bold shrink-0 text-right">{s.priceRange}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Location & Time */}
                  <div className="space-y-1 pt-1 border-t border-slate-800/80">
                    <span className="text-slate-400 block font-semibold">Appointment Schedule</span>
                    <div className="bg-[#070c14] p-2.5 rounded-xl border border-slate-800 space-y-1 text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="font-bold text-white">
                          {locationId === 'islamabad-g8' ? 'HyperTune Garage - Islamabad Flagship Hub' : 'HyperTune Garage - Rawalpindi & I-9 Branch'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <span>{date} ({time.split(' ')[0]} {time.split(' ')[1]})</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HyperTune Guarantees */}
                <div className="p-3.5 bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/20 rounded-2xl space-y-2 text-xs">
                  <div className="flex items-center gap-2 font-black text-cyan-400">
                    <Award className="w-4 h-4" />
                    <span>HyperTune Service Promise</span>
                  </div>
                  <ul className="space-y-1 text-slate-300 text-[11px]">
                    <li>• Free multi-point computerized diagnostic scan</li>
                    <li>• Zero hidden charges with prior price approval</li>
                    <li>• 12-Month / 15,000 km warranty certificate</li>
                  </ul>
                </div>

                {/* Quick Call or WhatsApp Direct */}
                <div className="pt-1 flex flex-col gap-2">
                  <a
                    href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20have%20a%20question%20before%20booking%20my%20service%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* STEP 4: SUCCESS CONFIRMATION STATE */
          <div className="max-w-3xl mx-auto bg-[#0b121e] border border-cyan-500/30 rounded-3xl p-8 md:p-12 shadow-2xl text-center space-y-8 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mx-auto shadow-xl shadow-cyan-500/20">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <span className="text-cyan-400 font-extrabold text-xs uppercase tracking-widest block">
                Appointment Reserved Successfully
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Booking Confirmed!
              </h2>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Thank you, <strong>{customerName}</strong>. Your workshop service slot has been logged into our master scheduling system.
              </p>
            </div>

            {/* Reference Box */}
            {bookingResult && (
              <div className="p-4 bg-[#070c14] border border-cyan-500/40 rounded-2xl max-w-md mx-auto space-y-1">
                <span className="text-xs text-slate-400 font-semibold">Your Official Booking Reference</span>
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 tracking-wider">
                  {bookingResult.ref}
                </div>
              </div>
            )}

            {/* Booking Summary Table */}
            {bookingResult && (
              <div className="bg-[#070c14] p-6 rounded-2xl border border-slate-800 max-w-xl mx-auto text-xs text-left text-slate-300 space-y-3">
                <div className="flex justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-slate-400">Customer:</span>
                  <span className="font-bold text-white">{customerName} ({phone})</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-slate-400">Vehicle:</span>
                  <span className="font-bold text-white">{bookingResult.vehicle}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-slate-400">Workshop Location:</span>
                  <span className="font-bold text-white">{bookingResult.branch}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-slate-400">Scheduled Date & Time:</span>
                  <span className="font-bold text-cyan-400">{bookingResult.date} • {bookingResult.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Services:</span>
                  <span className="font-bold text-white text-right max-w-xs">{bookingResult.services}</span>
                </div>
              </div>
            )}

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              {bookingResult && (
                <a
                  href={bookingResult.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-600/30 transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Confirmation via WhatsApp</span>
                </a>
              )}
              <button
                type="button"
                onClick={handleResetForm}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-colors"
              >
                Book Another Appointment
              </button>
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-bold text-sm hover:bg-cyan-950 transition-colors"
              >
                Back to Home Page
              </button>
            </div>
          </div>
        )}
      </section>

      {/* APPOINTMENT FAQS */}
      <section className="max-w-7xl mx-auto px-4 pt-10 border-t border-slate-800/80 space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">
            Helpful Advice
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Appointment Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Everything you need to know about scheduling your car repair, detailing, or maintenance at HyperTune Garage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {APPOINTMENT_FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0b121e] border border-slate-800 space-y-2"
            >
              <h3 className="font-bold text-sm sm:text-base text-white flex items-start gap-2">
                <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKSHOP LOCATIONS STRIP */}
      <section className="max-w-7xl mx-auto px-4 pt-8">
        <div className="bg-gradient-to-r from-[#070e1a] via-[#0b1527] to-[#070e1a] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-cyan-400 uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Workshop Facilities</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Visiting in Person? Here is Where to Find Us
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              <strong>Islamabad Flagship Hub:</strong> Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan • <strong>Rawalpindi Hub:</strong> Opening soon — our new branch is currently under development.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('locations')}
              className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              View Branch Maps & Hours
            </button>
            <a
              href="tel:+923330177717"
              className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-bold text-xs sm:text-sm hover:border-cyan-500/40 transition-colors"
            >
              Call 0333-0177717
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
