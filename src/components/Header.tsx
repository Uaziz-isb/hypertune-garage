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
  const [activeBranch, setActiveBranch] = useState<'Islamabad' | 'Rawalpindi'>('Islamabad');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
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
    { id: 'engine-services', title: 'Engine Services', icon: Cpu, desc: 'Engine Repair & Performance Tuning' },
    { id: 'maintenance-servicing', title: 'Maintenance & Servicing', icon: Activity, desc: 'Synthetic Oil & 50-Point Health Audit' },
    { id: 'brake-suspension-steering', title: 'Brake, Suspension & Steering', icon: Disc, desc: 'Brakes, Air Suspension & 3D Alignment' },
    { id: 'transmission-drivetrain', title: 'Transmission & Drivetrain', icon: Wrench, desc: 'Automatic & CVT Gearbox Overhaul' },
    { id: 'car-ac-repair', title: 'Air Conditioning (AC)', icon: Wind, desc: 'R134a Gas Recharge & Compressor Repair' },
    { id: 'electrical-electronics', title: 'Electrical & Electronics', icon: Zap, desc: 'Wiring Diagnostics & Battery Replacement' },
    { id: 'cooling-fuel-exhaust', title: 'Cooling, Fuel & Exhaust', icon: Cpu, desc: 'Radiator Flush, Injectors & Exhaust' },
    { id: 'inspection-diagnostics', title: 'Inspection & Diagnostics', icon: Search, desc: 'OBD2 Diagnostics & Pre-Purchase Audit' },
    { id: 'paint-protection-film-ppf', title: 'Paint Protection Film (PPF)', icon: ShieldCheck, desc: 'Self-Healing TPU Film (PKR 10k-250k)' },
    { id: 'car-detailing', title: 'Car Detailing', icon: Sparkles, desc: '9H Ceramic & Steam Clean (PKR 10k-45k)' },
    { id: 'vehicle-wrap', title: 'Vehicle Wrap', icon: Shield, desc: 'Custom Color Vinyl Wrap (PKR 1k-250k)' },
    { id: 'body-repair-paint', title: 'Body Repair & Paint', icon: Palette, desc: 'Paint Booth & Color Match (PKR 5k-100k)' },
    { id: 'body-modification', title: 'Body Modification', icon: Wrench, desc: 'Body Kits, Spoilers & Lips (PKR 5k-300k)' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#05080e] text-slate-300 text-xs py-2 px-4 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Contact Info */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+923330177717"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                {activeBranch === 'Islamabad' ? 'Islamabad Hub:' : 'Rawalpindi I-9 Branch:'}{' '}
                <strong className="text-white font-extrabold tracking-wide">
                  0333-0177717
                </strong>
              </span>
            </a>

            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-cyan-400/70" />
              <span>Sat - Thu: 10:00 AM - 10:00 PM <strong className="text-amber-400 font-bold ml-1">(Friday Off)</strong></span>
            </div>
          </div>

          {/* Right: Social Media & Branch Selector */}
          <div className="flex items-center gap-3">
            {/* Social Media Links */}
            <div className="flex items-center gap-1.5 text-slate-400">
              <span className="hidden md:inline text-[11px] text-slate-400 font-semibold mr-0.5">Follow:</span>
              <a
                href="https://wa.me/923330177717"
                target="_blank"
                rel="noopener noreferrer"
                className="px-1.5 py-0.5 rounded-md bg-slate-900 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 transition-colors border border-slate-800/80 flex items-center gap-1 text-[11px] font-bold"
                title="WhatsApp +92 333 0177717"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] font-bold text-emerald-400">WhatsApp</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589327521589"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-md bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-800/80 flex items-center justify-center"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/hyper.tunegarage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 rounded-md bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-800/80 flex items-center justify-center"
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.tiktok.com/@hypertune.garage"
                target="_blank"
                rel="noopener noreferrer"
                className="px-1.5 py-0.5 rounded-md bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-800/80 flex items-center gap-1 text-[11px] font-bold"
                title="TikTok"
                aria-label="TikTok"
              >
                <Video className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[10px] font-bold">TikTok</span>
              </a>
            </div>

            {/* Branch Switcher */}
            <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-0.5">
              <button
                onClick={() => setActiveBranch('Islamabad')}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold transition-all ${
                  activeBranch === 'Islamabad'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Islamabad Hub
              </button>
              <button
                onClick={() => setActiveBranch('Rawalpindi')}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold transition-all ${
                  activeBranch === 'Rawalpindi'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Rawalpindi I-9
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070b12]/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20 py-3'
            : 'bg-[#070b12]/90 backdrop-blur-sm border-b border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
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
                          <span>Need customized performance upgrade?</span>
                          <button
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              onNavigate('services');
                            }}
                            className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                          >
                            View All 24+ Services →
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
          <div className="flex items-center gap-2">
            {/* Search Trigger (Desktop/Tablet) */}
            <button
              onClick={onOpenSearch}
              className="hidden sm:flex p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="Search Services, Brands & Advice"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Book Appointment CTA */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 font-extrabold text-xs sm:text-sm border border-cyan-500/30 active:scale-95 transition-all"
            >
              <Wrench className="w-4 h-4 text-cyan-400" />
              <span>Book Service</span>
            </button>

            {/* Mobile / Tablet Drawer Trigger - Prominent MENU Button */}
            <button
              onClick={onOpenMobileMenu}
              className="flex xl:hidden items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-cyan-500/25 active:scale-95 transition-all border border-cyan-400/50"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              <span className="font-extrabold tracking-wide uppercase">Menu</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
