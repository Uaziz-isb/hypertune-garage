import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';

interface FooterServicesListProps {
  onNavigate: (page: PageId, slug?: string) => void;
}

// Split out from Footer so the 55KB servicesData file isn't loaded eagerly on every
// page (Footer itself renders on every route and previously wasn't code-split).
export const FooterServicesList: React.FC<FooterServicesListProps> = ({ onNavigate }) => {
  return (
    <ul className="space-y-2 text-xs">
      {servicesData.map((s) => (
        <li key={s.slug}>
          <a
            href={`/services/${s.slug}/`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('service-detail', s.slug);
            }}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-left"
          >
            <ChevronRight className="w-3 h-3 text-cyan-400 shrink-0" />
            <span>{s.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
