import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import {
  Phone,
  Clock,
  Search,
  ChevronDown,
  Menu,
  Wrench,
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
  MessageCircle,
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
      setIsScrolled(window.scrollY > 25);
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
    <header className="w-full relative transition-all duration-300">
      {/* Top Utility Announcement Bar (Mobile + Tablet + Desktop + Horizontal View) */}
      <div className="bg-[#05080e] text-slate-300 text-[11px] sm:text-xs py-1 sm:py-1.5 px-2.5 sm:px-4 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <a
              href="tel:+923330177717"
              className="flex items-center gap-1 sm:gap-1.5 hover:text-cyan-400 transition-colors font-semibold shrink-0"
              title="Call HyperTune Garage at 0333-0177717"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">
                Call Now:{' '}
                <strong className="text-white font-extrabold tracking-wide">
                  0333-0177717
                </strong>
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 text-slate-400 shrink-0">
              <Clock className="w-3.5 h-3.5 text-cyan-400/70" />
              <span>Sat - Thu: 10:00 AM - 10:00 PM <strong className="text-amber-400 font-bold ml-1">(Friday Off)</strong></span>
            </div>
          </div>

          {/* Right: Social Media Links */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="hidden sm:inline text-[11px] text-slate-400 font-semibold mr-0.5">Follow:</span>
            <a
              href="https://wa.me/923330177717"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg bg-slate-900 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 transition-all flex items-center gap-1 text-[10px] sm:text-[11px] font-bold"
              title="WhatsApp +92 333 0177717"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61589327521589"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-slate-900 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#1877F2]/30 transition-all flex items-center justify-center"
              title="Facebook"
              aria-label="Facebook"
            >
              <Facebook className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <a
              href="https://www.instagram.com/hyper.tunegarage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-slate-900 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-[#E4405F] hover:text-white border border-[#E4405F]/30 hover:border-transparent transition-all flex items-center justify-center"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
            <a
              href="https://www.tiktok.com/@hypertune.garage"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg bg-slate-900 hover:bg-black text-slate-200 hover:text-white border border-slate-700 hover:border-[#00F2FE] transition-all flex items-center gap-1 text-[10px] sm:text-[11px] font-bold"
              title="TikTok"
              aria-label="TikTok"
            >
              <Video className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00F2FE]" />
              <span className="hidden xs:inline">TikTok</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 relative z-30 ${
          isScrolled
            ? 'bg-[#070b12]/98 backdrop-blur-md shadow-2xl border-b border-cyan-500/20 py-2 sm:py-2.5'
            : 'bg-[#070b12]/95 backdrop-blur-sm border-b border-slate-800/80 py-2 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-2.5 sm:px-4 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left Side: Mobile Menu Button on the LEFT + Logo */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mobile / Tablet Menu Button - 3 Lines Icon, Half Size, No Text */}
            <button
              onClick={onOpenMobileMenu}
              className="flex xl:hidden items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/25 active:scale-95 transition-all border border-cyan-400/50 cursor-pointer shrink-0"
              aria-label="Open Navigation Menu"
              title="Open Navigation Menu"
            >
              <Menu className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-950 stroke-[2.5]" />
            </button>

            {/* Brand Logo */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="shrink-0 cursor-pointer"
              title="HyperTune Garage Home"
            >
              <Logo variant="dark" scale={0.92} className="sm:hidden" />
              <Logo variant="dark" scale={1.08} className="hidden sm:flex" />
            </a>
          </div>

          {/* Desktop Nav Items (xl and above) */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const itemHref = item.id === 'home' ? '/' : `/${item.id}/`;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <a
                      href={itemHref}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('services');
                      }}
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
                    </a>

                    {/* Services Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-[580px] bg-[#0c1322] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 p-4 grid grid-cols-2 gap-2 mt-1 z-50 animate-in fade-in duration-150">
                        {serviceCategories.map((cat) => {
                          const IconComp = cat.icon;
                          return (
                            <a
                              key={cat.id}
                              href={`/services/${cat.id}/`}
                              onClick={(e) => {
                                e.preventDefault();
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
                            </a>
                          );
                        })}

                        <div className="col-span-2 mt-2 pt-3 border-t border-slate-800 flex items-center justify-between px-2 text-xs text-slate-400">
                          <span>Need customized performance upgrade?</span>
                          <a
                            href="/services/"
                            onClick={(e) => {
                              e.preventDefault();
                              setServicesDropdownOpen(false);
                              onNavigate('services');
                            }}
                            className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                          >
                            View All 12 Services →
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.id}
                  href={itemHref}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                  className={`px-3 py-2 rounded-lg text-[15px] font-bold transition-all ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30'
                      : 'text-slate-200 hover:text-cyan-400 hover:bg-slate-900/80'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Side Header Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors active:scale-95"
              title="Search Services, Brands & Advice"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* WhatsApp Quick Chat */}
            <a
              href="https://wa.me/923330177717"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xs:flex items-center justify-center p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-bold text-xs active:scale-95 transition-all"
              aria-label="WhatsApp"
              title="WhatsApp +92 333 0177717"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline ml-1.5">WhatsApp</span>
            </a>

            {/* Mobile Quick Call CTA */}
            <a
              href="tel:+923330177717"
              className="flex sm:hidden items-center justify-center p-2 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 active:scale-95 transition-all"
              aria-label="Call HyperTune Garage"
              title="Call HyperTune Garage"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
            </a>

            {/* Book Appointment CTA (Tablet/Desktop) */}
            <a
              href="/book-appointment/"
              onClick={(e) => {
                e.preventDefault();
                onOpenBooking();
              }}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md shadow-cyan-500/20 active:scale-95 transition-all"
            >
              <Wrench className="w-4 h-4 text-slate-950" />
              <span>Book Service</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
