import React, { useState } from 'react';
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
  Home
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

  if (!isOpen) return null;

  const mainLinks: { id: PageId; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'locations', label: 'Workshop Locations', icon: MapPin },
    { id: 'gallery', label: 'Workshop Gallery', icon: Image },
    { id: 'blog', label: 'Technical Maintenance Blog', icon: FileText },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'contact', label: 'Contact Us', icon: Phone },
    { id: 'faq', label: 'Customer Reviews & FAQ', icon: HelpCircle },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-xs sm:max-w-sm bg-slate-950 text-white h-full shadow-2xl flex flex-col justify-between border-r border-slate-800 z-10 overflow-y-auto">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <Logo variant="dark" onClick={() => { onNavigate('home'); onClose(); }} />
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Action Button */}
        <div className="p-4 bg-slate-900/60 border-b border-slate-800">
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-extrabold text-sm text-slate-950 shadow-md shadow-cyan-500/30 active:scale-95 transition-all"
          >
            <Wrench className="w-4 h-4 text-slate-950" />
            <span>Book Service Appointment</span>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="p-4 space-y-1.5 flex-1 overflow-y-auto">
          {/* Home Link */}
          <button
            onClick={() => {
              onNavigate('home');
              onClose();
            }}
            className={`w-full flex items-center justify-between p-3 rounded-xl font-bold text-[15px] transition-all ${
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
              className={`w-full flex items-center justify-between p-3 font-bold text-[15px] transition-all ${
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
                className={`w-4 h-4 text-slate-400 transition-transform ${
                  isServicesExpanded ? 'rotate-180 text-cyan-400' : ''
                }`}
              />
            </button>

            {/* Sub-services list */}
            {isServicesExpanded && (
              <div className="p-2 space-y-1 bg-slate-950/90 border-t border-slate-800">
                <button
                  onClick={() => {
                    onNavigate('services');
                    onClose();
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg bg-cyan-950/30 text-cyan-400 font-bold text-xs flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>View All 13 Services</span>
                </button>
                {servicesData.map((service) => {
                  return (
                    <button
                      key={service.id}
                      onClick={() => {
                        onNavigate('service-detail', service.id);
                        onClose();
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-900 text-slate-300 hover:text-cyan-400 font-semibold text-xs flex items-center gap-2.5 transition-colors"
                    >
                      <Wrench className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{service.title}</span>
                    </button>
                  );
                })}
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
                onClick={() => {
                  onNavigate(link.id);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl font-bold text-[15px] transition-all ${
                  isActive
                    ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-200 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComp className="w-4 h-4 text-cyan-400" />
                  <span>{link.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            );
          })}
        </div>

        {/* Branch Contact Details */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:+923315008872"
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-slate-800 text-white font-bold text-xs hover:bg-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>0331-5008872</span>
            </a>
            <a
              href="https://wa.me/923330177717"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500"
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
