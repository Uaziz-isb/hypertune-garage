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
  Star,
  ShieldCheck,
  Compass,
  AlertTriangle
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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key press to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mainLinks: { id: PageId; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Home Page', icon: Home },
    { id: 'locations', label: 'Workshop Locations', icon: MapPin },
    { id: 'gallery', label: 'Restoration Gallery', icon: Image },
    { id: 'testimonials', label: 'Customer Reviews (4.9★)', icon: Star },
    { id: 'blog', label: 'Car Care & Tech Blog', icon: FileText },
    { id: 'about', label: 'About HyperTune', icon: Info },
    { id: 'contact', label: 'Contact Us & Hubs', icon: Phone },
    { id: 'faq', label: 'Frequently Asked Questions', icon: HelpCircle },
    { id: 'warranty', label: '12-Month Warranty Specs', icon: ShieldCheck },
    { id: 'sitemap', label: 'Website Site Map', icon: Compass },
  ];

  const handleLinkClick = (page: PageId, slug?: string) => {
    onClose();
    onNavigate(page, slug);
  };

  return (
    <div className="fixed inset-0 z-50 flex animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative w-[85vw] max-w-sm bg-[#080d16] text-white h-[100dvh] shadow-2xl flex flex-col justify-between border-r border-slate-800 z-10 overflow-hidden animate-in slide-in-from-left duration-250">
        {/* Header */}
        <div className="p-4 border-b border-slate-800/90 flex items-center justify-between bg-[#05080e]">
          <Logo variant="dark" onClick={() => handleLinkClick('home')} />
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 active:scale-95 transition-all"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Action Button */}
        <div className="p-3 bg-slate-900/60 border-b border-slate-800/80">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 font-extrabold text-xs sm:text-sm text-slate-950 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all"
          >
            <Wrench className="w-4 h-4 text-slate-950" />
            <span>Book Service Appointment</span>
          </button>
        </div>

        {/* Navigation Links (Scrollable) */}
        <div className="p-3 space-y-1.5 flex-1 overflow-y-auto overscroll-contain">
          {/* Home Link */}
          <button
            onClick={() => handleLinkClick('home')}
            className={`w-full flex items-center justify-between p-3 rounded-xl font-bold text-sm transition-all ${
              currentPage === 'home'
                ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-200 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <Home className="w-4 h-4 text-cyan-400" />
              <span>Home</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </button>

          {/* Expandable Services Catalogue */}
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden">
            <button
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
              className={`w-full flex items-center justify-between p-3 font-bold text-sm transition-all ${
                currentPage === 'services' || currentPage === 'service-detail'
                  ? 'bg-cyan-950/40 text-cyan-400'
                  : 'text-slate-200 hover:bg-slate-900 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>Services Catalogue</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  isServicesExpanded ? 'rotate-180 text-cyan-400' : ''
                }`}
              />
            </button>

            {/* Sub-services list */}
            {isServicesExpanded && (
              <div className="p-2 space-y-1 bg-slate-950/90 border-t border-slate-800/80">
                <button
                  onClick={() => handleLinkClick('services')}
                  className="w-full text-left px-3 py-2 rounded-lg bg-cyan-950/40 text-cyan-400 font-bold text-xs flex items-center justify-between border border-cyan-500/20"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>View All 13 Services</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                {servicesData.map((service) => (
                  <button
                    key={service.slug || service.id}
                    onClick={() => handleLinkClick('service-detail', service.slug || service.id)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-900 text-slate-300 hover:text-cyan-400 font-semibold text-xs flex items-center justify-between transition-colors group"
                  >
                    <span className="truncate pr-2">{service.title}</span>
                    <span className="text-[10px] text-amber-400/90 font-mono shrink-0">
                      {service.priceRange.split('-')[0]}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Remaining Main Links */}
          {mainLinks.slice(1).map((link) => {
            const isActive = currentPage === link.id;
            const IconComp = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl font-bold text-sm transition-all ${
                  isActive
                    ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-200 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComp className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{link.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            );
          })}
        </div>

        {/* Branch Contact & Emergency Towing Action Footer */}
        <div className="p-3 bg-[#05080e] border-t border-slate-800 space-y-2.5 shrink-0">
          <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>Sat - Thu: 10AM - 10PM</span>
            </span>
            <span className="text-amber-400 font-bold">Friday Off</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:+923315008872"
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-800 active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>0331-5008872</span>
            </a>
            <a
              href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20need%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#25D366] text-slate-950 font-extrabold text-xs hover:bg-[#20ba59] active:scale-95 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

