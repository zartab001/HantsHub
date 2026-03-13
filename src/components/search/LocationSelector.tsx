'use client';

import { useState, useRef, useEffect } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { useSearchStore } from '@/store/searchStore';

const locations = [
  'All Hampshire',
  'Eastleigh',
  'Southampton',
  'Winchester',
  'Portsmouth',
];

export default function LocationSelector() {
  const { location, setLocation } = useSearchStore();

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (loc: string) => {
    setLocation(loc);
    setIsOpen(false);
  };

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border px-3 py-2 rounded-md hover:bg-gray-50"
      >
        <MapPin size={16} />
        <span className="text-sm font-medium">{location}</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-44 bg-white border rounded-md shadow-md z-50">
          {locations.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => handleSelect(loc)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
            >
              {loc}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}