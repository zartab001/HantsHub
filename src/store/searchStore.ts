import { create } from 'zustand';

type SearchState = {
  query: string;
  location: string;
  recentSearches: string[];

  setQuery: (q: string) => void;
  setLocation: (loc: string) => void;
  addRecentSearch: (q: string) => void;

  loadFromStorage: () => void;
};

export const useSearchStore = create<SearchState>((set, get) => ({
  query: '',
  location: 'All Hampshire',
  recentSearches: [],

  setQuery: (q) => set({ query: q }),

  setLocation: (loc) => {
    set({ location: loc });

    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLocation', loc);
    }
  },

  addRecentSearch: (q) => {
    const { recentSearches } = get();
    if (!q.trim()) return;

    let updated = [q, ...recentSearches.filter((item) => item !== q)];
    updated = updated.slice(0, 5);

    set({ recentSearches: updated });

    if (typeof window !== 'undefined') {
      localStorage.setItem('recentSearches', JSON.stringify(updated));
    }
  },

  loadFromStorage: () => {
    if (typeof window === 'undefined') return;

    const savedLocation = localStorage.getItem('selectedLocation');
    const savedSearches = localStorage.getItem('recentSearches');

    set({
      location: savedLocation || 'All Hampshire',
      recentSearches: savedSearches ? JSON.parse(savedSearches) : [],
    });
  },
}));