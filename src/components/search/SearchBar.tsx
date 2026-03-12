'use client';

import { Mic, X } from 'lucide-react';
import { useState } from 'react';
import LocationSelector from './LocationSelector';
import { useSearchStore } from '@/store/searchStore';

export default function SearchBar() {
  const { query, setQuery, recentSearches, addRecentSearch } = useSearchStore();
  const [input, setInput] = useState(query);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(input);
    addRecentSearch(input);
    console.log('Search submitted:', input);
  };

  const clearInput = () => setInput('');

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        {/* Location Dropdown */}
        <LocationSelector />

        {/* Input */}
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for services..."
            className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Clear button */}
          {input && (
            <button
              type="button"
              onClick={clearInput}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
            >
              <X size={16} />
            </button>
          )}
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

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="mt-3">
          <p className="text-sm text-gray-500 mb-2">Recent searches</p>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((item: string, index: number) => (
              <button
                key={index}
                onClick={() => setInput(item)}
                className="text-sm bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
