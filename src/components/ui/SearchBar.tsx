"use client";
import { Mic } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto flex items-center gap-2"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for services..."
        className="flex-1 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded-md hover:opacity-90 transition"
      >
        Search
      </button>

      {/* Voice Placeholder */}
     <button
        type="button"
        aria-label="Voice search"
        className="border px-3 py-2 rounded-md hover:bg-gray-100 flex items-center justify-center"
        >
        <Mic size={18} />
        </button>
    </form>
  );
}