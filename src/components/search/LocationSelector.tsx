'use client';

import { MapPin, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useSearchStore } from '@/store/searchStore';
import { LOCATIONS } from '@/constants/locations';

export default function LocationSelector() {
  const { location, setLocation } = useSearchStore();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (loc: string) => {
    setLocation(loc);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 hover:bg-gray-100 hover:border-primary transition-all cursor-pointer group w-full sm:w-auto"
      >
        <MapPin size={18} className="text-primary shrink-0" />
        <span className="text-sm font-medium text-gray-900 hidden sm:inline">
          {location}
        </span>
        <span className="text-sm font-medium text-gray-900 sm:hidden truncate flex-1 text-left">
          {location}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-600 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {LOCATIONS.map((loc) => (
            <button
              key={loc}
              onClick={() => handleSelect(loc)}
              className={`w-full text-left px-4 py-3 text-sm flex items-center gap-2 transition-colors ${
                location === loc
                  ? 'bg-primary text-white font-medium'
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {location === loc && <MapPin size={16} className="shrink-0" />}
              {loc}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
