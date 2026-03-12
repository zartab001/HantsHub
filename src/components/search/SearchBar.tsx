'use client';

import { Mic } from 'lucide-react';
import { useState } from 'react';
import LocationSelector from './LocationSelector';
import { useSearchStore } from '@/store/searchStore';

export default function SearchBar() {
  const { query, setQuery, addRecentSearch } = useSearchStore();
  const [input, setInput] = useState(query);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(input);
    addRecentSearch(input);
    console.log('Search submitted:', input);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        {/* Location Dropdown */}
        <LocationSelector />

        {/* Input */}
        <div className="flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for services..."
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Search button */}
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md hover:opacity-90 transition"
        >
          Search
        </button>

        {/* Voice placeholder */}
        <button
          type="button"
          aria-label="Voice search"
          className="border px-3 py-2 rounded-md hover:bg-gray-100 flex items-center justify-center"
        >
          <Mic size={18} />
        </button>
      </form>
    </div>
  );
}
