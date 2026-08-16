import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { servicesData } from '../data/servicesData';
import {
  X,
  Phone,
  MessageCircle,
  Wrench,
  ChevronRight,
  ChevronDown,
  Clock,
  MapPin,
  Sparkles,
  HelpCircle,
  FileText,
  Image,
  Info,
  Home,
  ShieldCheck,
  Star
} from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageId;
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const mainLinks: { id: PageId; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'locations', label: 'Workshop Locations', icon: MapPin },
    { id: 'gallery', label: 'Restoration Gallery', icon: Image },
    { id: 'blog', label: 'Car Care Guides & Blog', icon: FileText },
    { id: 'about', label: 'About HyperTune Garage', icon: Info },
    { id: 'faq', label: 'FAQ & Questions', icon: HelpCircle },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ];

  const handleNav = (page: PageId, slug?: string) => {
    onClose();
    onNavigate(page, slug);
  };

  const handleBooking = () => {
    onClose();
    onOpenBooking();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex justify-start items-stretch">
      {/* Dark Backdrop with Click to Dismiss */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Left-Side Slide-Over Menu Drawer */}
      <aside
        className="relative w-[85vw] max-w-[340px] bg-slate-950 text-white h-full shadow-2xl flex flex-col justify-between border-r border-cyan-500/25 z-10 overflow-y-auto overscroll-contain animate-in slide-in-from-left duration-250 ease-out"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        {/* Header with Logo and Close Button */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between gap-3 bg-[#070b12] sticky top-0 z-20">
          <div onClick={() => handleNav('home')} className="cursor-pointer">
            <Logo variant="dark" scale={0.9} />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-red-400 hover:bg-slate-800 border border-slate-700/80 active:scale-95 transition-all cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Action Buttons Section */}
        <div className="p-3.5 bg-slate-900/60 border-b border-slate-800 space-y-2">
          <button
            onClick={handleBooking}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-black text-xs sm:text-sm text-slate-950 shadow-md shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer"
          >
            <Wrench className="w-4 h-4 text-slate-950 shrink-0" />
            <span>Book Service Appointment</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:+923330177717"
              className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 font-bold text-xs hover:bg-slate-800 active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>0333-0177717</span>
            </a>
            <a
              href="https://wa.me/923330177717"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-bold text-xs hover:bg-emerald-600/30 active:scale-95 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Navigation Links Scroll Area */}
        <div className="p-3.5 space-y-1.5 flex-1 overflow-y-auto">
          {/* Home Link */}
          <button
            onClick={() => handleNav('home')}
            className={`w-full flex items-center justify-between p-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
              currentPage === 'home'
                ? 'bg-cyan-950/50 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-200 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <Home className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Home</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </button>

          {/* Expandable Services Catalogue */}
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden">
            <button
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
              className={`w-full flex items-center justify-between p-3 font-bold text-sm transition-all cursor-pointer ${
                currentPage === 'services' || currentPage === 'service-detail'
                  ? 'bg-cyan-950/40 text-cyan-400'
                  : 'text-slate-200 hover:bg-slate-900 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Wrench className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Services Catalogue (12)</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  isServicesExpanded ? 'rotate-180 text-cyan-400' : ''
                }`}
              />
            </button>

            {/* Sub-services list */}
            {isServicesExpanded && (
              <div className="p-2 space-y-1 bg-slate-950/90 border-t border-slate-800">
                <button
                  onClick={() => handleNav('services')}
                  className="w-full text-left px-3 py-2 rounded-lg bg-cyan-950/30 text-cyan-400 font-bold text-xs flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>View All 12 Services Overview</span>
                </button>
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleNav('service-detail', service.id)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-900 text-slate-300 hover:text-cyan-400 font-semibold text-xs flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <Wrench className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{service.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Remaining Main Navigation Links */}
          {mainLinks.slice(1).map((link) => {
            const isActive = currentPage === link.id;
            const IconComp = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-950/50 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-200 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComp className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{link.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
              </button>
            );
          })}
        </div>

        {/* Bottom Workshop Info */}
        <div className="p-3.5 bg-slate-900/90 border-t border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Sat - Thu: 10:00 AM - 10:00 PM</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-tight">
            Hub: Police Foundation, Islamabad • Branch: Sector I-9/3, Rawalpindi
          </p>
        </div>
      </aside>
    </div>
  );
};
