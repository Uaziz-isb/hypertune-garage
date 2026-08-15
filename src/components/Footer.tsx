import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { servicesData } from '../data/servicesData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  Facebook,
  Instagram,
  Video
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, slug?: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-[#05080e] text-slate-400 text-sm border-t border-cyan-500/20">
      {/* Upper CTA Banner */}
      <div className="bg-gradient-to-r from-[#09111e] via-[#0d1627] to-cyan-950/40 border-b border-cyan-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 font-extrabold text-xs uppercase tracking-widest">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>PERFORMANCE • PROTECTION • PERFECTION</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Ready to Experience Peak Automotive Performance?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Book your diagnostic scan, detailing, or periodic maintenance today. 100% Genuine OEM Parts with 12-Month / 15,000 km Warranty.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/30 transition-all active:scale-95"
            >
              Book Service Online
            </button>
            <a
              href="https://wa.me/923330177717?text=Hi%20HyperTune%20Garage%2C%20I%20would%20like%20an%20instant%20repair/tuning%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/20 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Estimate</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand & Identity */}
        <div className="space-y-4">
          <Logo variant="dark" scale={1.05} onClick={() => onNavigate('home')} />
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            HyperTune Garage is Pakistan's premier precision automotive workshop specializing in popular vehicle brands (Toyota, Honda, Suzuki, Hyundai, Kia, Changan, Haval), Japanese imports, Paint Protection Film (PPF), engine rebuilding, ceramic detailing, and hybrid battery diagnostics.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold bg-[#09101d] border border-cyan-500/20 p-3 rounded-xl max-w-sm">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>100% Genuine OEM Spare Parts • 12-Month Warranty</span>
          </div>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-slate-300">Google Rating:</span>
              <div className="flex items-center gap-1 text-amber-400">
                ★★★★★ <span className="text-white font-bold">4.9 / 5.0</span>
              </div>
              <span className="text-slate-500">(340+ Reviews)</span>
            </div>

            {/* Social Media Links next to Google Rating */}
            <div className="flex items-center gap-2 border-l border-slate-800 pl-4">
              <a
                href="https://wa.me/923330177717"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 transition-all flex items-center gap-1 text-[11px] font-bold"
                title="WhatsApp +92 333 0177717"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589327521589"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-slate-900 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#1877F2]/30 transition-all flex items-center justify-center"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/hyper.tunegarage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-slate-900 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-[#E4405F] hover:text-white border border-[#E4405F]/30 hover:border-transparent transition-all flex items-center justify-center"
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.tiktok.com/@hypertune.garage"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-black text-slate-200 hover:text-white border border-slate-700 hover:border-[#00F2FE] transition-all flex items-center gap-1 text-[11px] font-bold"
                title="TikTok"
                aria-label="TikTok"
              >
                <Video className="w-3.5 h-3.5 text-[#00F2FE]" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Core Services */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('services')}
            className="text-white font-bold text-sm uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <span>Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
          </button>
          <ul className="space-y-2 text-xs">
            {servicesData.map((s) => (
              <li key={s.slug}>
                <button
                  onClick={() => onNavigate('service-detail', s.slug)}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>{s.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Site Map Navigation */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('sitemap')}
            className="text-white font-bold text-sm uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <span>Site Map</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </button>
          <ul className="space-y-2 text-xs">
            {[
              { label: 'Home Page', page: 'home' as PageId },
              { label: 'Services Catalogue', page: 'services' as PageId },
              { label: 'Workshop Locations', page: 'locations' as PageId },
              { label: 'Work Gallery & Restorations', page: 'gallery' as PageId },
              { label: 'Car Care Blog & Guides', page: 'blog' as PageId },
              { label: 'Customer Reviews & FAQ', page: 'faq' as PageId },
              { label: 'About HyperTune', page: 'about' as PageId },
              { label: 'Contact Us', page: 'contact' as PageId },
              { label: 'Privacy Policy', page: 'privacy' as PageId },
              { label: 'Terms & Conditions', page: 'terms' as PageId },
              { label: 'Warranty Specs', page: 'warranty' as PageId },
              { label: 'Site Map Directory', page: 'sitemap' as PageId },
            ].map((link) => (
              <li key={link.page}>
                <button
                  onClick={() => onNavigate(link.page)}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Locations & Contact */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider text-cyan-400">Workshop Locations</h4>
          <div className="space-y-4 text-xs">
            {/* Islamabad */}
            <div className="space-y-1">
              <button
                onClick={() => onNavigate('location-detail', 'islamabad-workshop-g8')}
                className="font-bold text-white hover:text-cyan-400 flex items-center gap-1 transition-colors text-left"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Islamabad Hub (Police Foundation)</span>
              </button>
              <p className="text-slate-400 leading-relaxed">Shop 1-G, Ground Floor, Central Ave, near Attock Petrol Pump, Block E Police Foundation, Islamabad, 44000</p>
              <a href="tel:+923330177717" className="text-cyan-400 hover:underline font-bold inline-block">
                0333-0177717
              </a>
            </div>

            {/* Rawalpindi */}
            <div className="pt-3 border-t border-slate-800 space-y-1">
              <button
                onClick={() => onNavigate('location-detail', 'rawalpindi-workshop-saddar')}
                className="font-bold text-white hover:text-cyan-400 flex items-center gap-1 transition-colors text-left"
              >
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Rawalpindi & I-9 Branch</span>
              </button>
              <p className="text-slate-400 leading-relaxed">Plot 18, Sector I-9/3 Industrial Area / Saddar Link</p>
              <a href="tel:+923330177717" className="text-cyan-400 hover:underline font-bold inline-block">
                0333-0177717
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar & Copyright */}
      <div className="bg-[#030509] border-t border-slate-900 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} HyperTune Garage. Drive Better, Drive Worry-Free. • <span className="text-slate-400 font-medium">Developed & Managed by: Umair Aziz</span> •</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('sitemap')} className="hover:text-cyan-400 text-cyan-400 font-semibold transition-colors">
              Site Map
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('privacy')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('warranty')} className="hover:text-slate-300 transition-colors">
              Warranty Specs
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
