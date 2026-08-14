import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import {
  Phone,
  Clock,
  MapPin,
  Search,
  ChevronDown,
  Menu,
  Wrench,
  Bot,
  ShieldCheck,
  Shield,
  Palette,
  Zap,
  Cpu,
  Sparkles,
  Disc,
  Activity,
  Wind,
  Facebook,
  Instagram,
  Video,
  MessageCircle
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenSearch,
  onOpenMobileMenu,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'locations', label: 'Locations' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Blog' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'faq', label: 'FAQ' },
  ];

  const serviceCategories = [
    { id: 'paint-protection-film-ppf', title: 'Paint Protection Film (PPF)', icon: ShieldCheck, desc: 'Self-Healing TPU Film (PKR 10k-250k)' },
    { id: 'car-detailing', title: 'Car Detailing & Ceramic', icon: Sparkles, desc: '9H Nano-Ceramic & Steam Clean' },
    { id: 'engine-services', title: 'Engine & Hybrid Overhaul', icon: Cpu, desc: 'Precision Rebuild & Tuning' },
    { id: 'maintenance-servicing', title: 'Maintenance & Servicing', icon: Activity, desc: 'Synthetic Oil & 50-Point Audit' },
    { id: 'brake-suspension-steering', title: 'Brakes & Suspension', icon: Disc, desc: 'Air Suspension & 3D Alignment' },
    { id: 'transmission-drivetrain', title: 'Transmission & Gearbox', icon: Wrench, desc: 'Automatic & CVT Overhauls' },
    { id: 'car-ac-repair', title: 'Air Conditioning (AC)', icon: Wind, desc: 'R134a Gas Recharge & Compressor' },
    { id: 'electrical-electronics', title: 'Electrical & Tuning', icon: Zap, desc: 'Wiring & ECU Diagnostics' },
  ];

  return (
    <header className="w-full">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#05080e] text-slate-300 text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
            <a
              href="tel:+923315008872"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-bold text-[11px] sm:text-xs truncate"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
              <span>
                <span className="hidden sm:inline">24/7 Hotline: </span>
                <strong className="text-white font-extrabold tracking-wide">0331-5008872</strong>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 text-slate-400 text-xs">
              <Clock className="w-3.5 h-3.5 text-cyan-400/70" />
              <span>Sat - Thu: 10:00 AM - 10:00 PM <strong className="text-amber-400 font-bold ml-1">(Friday Off)</strong></span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-slate-400 text-xs">
              <MapPin className="w-3.5 h-3.5 text-cyan-400/70" />
              <span>Islamabad & Rawalpindi</span>
            </div>
          </div>

          {/* Right: Instant WhatsApp & Social Links */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20need%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-emerald-950/80 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 transition-all flex items-center gap-1 text-[11px] font-extrabold"
              title="Official WhatsApp"
            >
              <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>WhatsApp</span>
            </a>

            <div className="hidden sm:flex items-center gap-1 text-slate-400">
              <a
                href="https://www.facebook.com/profile.php?id=61589327521589"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-1.5 rounded-lg bg-slate-900 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-slate-800 transition-all flex items-center justify-center"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/hyper.tunegarage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-1.5 rounded-lg bg-slate-900 hover:bg-[#E4405F] text-[#E4405F] hover:text-white border border-slate-800 transition-all flex items-center justify-center"
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.tiktok.com/@hypertune.garage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 sm:p-1.5 rounded-lg bg-slate-900 hover:bg-black text-cyan-400 hover:text-white border border-slate-800 transition-all flex items-center justify-center"
                title="TikTok"
                aria-label="TikTok"
              >
                <Video className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-[#070b12]/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20 py-2 sm:py-2.5'
            : 'bg-[#070b12]/90 backdrop-blur-sm border-b border-slate-800/80 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <div onClick={() => onNavigate('home')}>
            <Logo variant="dark" />
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => onNavigate('services')}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[15px] font-bold transition-all ${
                        isActive
                          ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30'
                          : 'text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Services Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-[580px] bg-[#0c1322] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 p-4 grid grid-cols-2 gap-2 mt-1 z-50 animate-in fade-in duration-150">
                        {serviceCategories.map((cat) => {
                          const IconComp = cat.icon;
                          return (
                            <button
                              key={cat.id}
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                onNavigate('service-detail', cat.id);
                              }}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/70 text-left transition-all group border border-transparent hover:border-cyan-500/30"
                            >
                              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                                <IconComp className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                                  {cat.title}
                                </h4>
                                <p className="text-xs text-slate-400 line-clamp-1">{cat.desc}</p>
                              </div>
                            </button>
                          );
                        })}

                        <div className="col-span-2 mt-2 pt-3 border-t border-slate-800 flex items-center justify-between px-2 text-xs text-slate-400">
                          <span>Looking for custom tuning or repair?</span>
                          <button
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              onNavigate('services');
                            }}
                            className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                          >
                            View All 13 Services →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-lg text-[15px] font-bold transition-all ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30'
                      : 'text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors flex items-center justify-center min-w-[36px] min-h-[36px]"
              title="Search Services, Locations & Advice"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-cyan-400" />
            </button>

            {/* Book Appointment CTA */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 font-extrabold text-xs sm:text-sm border border-cyan-500/30 active:scale-95 transition-all"
            >
              <Wrench className="w-4 h-4 text-cyan-400" />
              <span>Book Service</span>
            </button>

            {/* Mobile / Tablet Drawer Trigger */}
            <button
              onClick={onOpenMobileMenu}
              className="flex xl:hidden items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-cyan-500/25 active:scale-95 transition-all border border-cyan-400/50 min-h-[38px] cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 stroke-[2.5]" />
              <span className="font-black tracking-wider uppercase text-[11px] sm:text-xs">Menu</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
