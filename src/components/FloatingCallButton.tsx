import React from 'react';
import { Phone } from 'lucide-react';
import { locationsData } from '../data/locationsData';
import { trackEvent } from '../utils/analytics';
import { FLOATING_BTN_CLASS } from './BackToTopButton';

export const FloatingCallButton: React.FC = () => {
  const phone = locationsData[0].phone;
  const label = `Call HyperTune Garage (${phone})`;

  return (
    <a
      href={`tel:${phone.replace(/\s+/g, '')}`}
      onClick={() =>
        trackEvent('phone_call_click', {
          event_category: 'Engagement',
          click_source: 'floating_call_button',
          phone_number: phone,
        })
      }
      aria-label={label}
      title={label}
      className={`pointer-events-auto text-cyan-400 ${FLOATING_BTN_CLASS}`}
    >
      <Phone className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" aria-hidden="true" />
    </a>
  );
};
