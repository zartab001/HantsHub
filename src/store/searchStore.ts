import { create } from 'zustand';

type SearchState = {
  query: string;
  location: string;
  recentSearches: string[];
  setQuery: (q: string) => void;
  setLocation: (loc: string) => void;
  addRecentSearch: (q: string) => void;
};

export const useSearchStore = create<SearchState>(
  (set: (state: Partial<SearchState>) => void, get: () => SearchState) => ({
    query: '',
    location:
      typeof window !== 'undefined'
        ? localStorage.getItem('selectedLocation') || 'All Hampshire'
        : 'All Hampshire',
    recentSearches:
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('recentSearches') || '[]')
        : [],

    setQuery: (q: string) => set({ query: q }),

    setLocation: (loc: string) => {
      set({ location: loc });
      if (typeof window !== 'undefined') {
        localStorage.setItem('selectedLocation', loc);
      }
    },

    addRecentSearch: (q: string) => {
      const { recentSearches } = get();
      if (!q.trim()) return;
      let updated = [q, ...recentSearches.filter((item: string) => item !== q)];
      updated = updated.slice(0, 5);
      set({ recentSearches: updated });
      if (typeof window !== 'undefined') {
        localStorage.setItem('recentSearches', JSON.stringify(updated));
      }
    },
  }),
);
