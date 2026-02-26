import SearchBar from "@/components/ui/SearchBar";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 space-y-8">
      
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold">
        Find Trusted Services Near You
      </h1>

      {/* Subheadline */}
      <p className="text-gray-600 max-w-xl">
        Discover reliable professionals for your everyday needs — fast,
        simple, and secure.
      </p>

      {/* Search Bar */}
      <SearchBar />

      {/* Browse Categories CTA */}
      <button className="mt-4 px-6 py-3 border rounded-md hover:bg-gray-100 transition cursor-pointer">
        Browse Categories
      </button>

    </section>
  );
}