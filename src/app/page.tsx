import SearchBar from "@/components/ui/SearchBar";
import { getServices } from "@/lib/api";

export default async function Home() {
  const services = await getServices(); // Fetching mock services

  return (
    <>
      {/* ================= HERO SECTION ================= */}
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

      {/* ================= MOCK SERVICES SECTION ================= */}
      {/* ⚠️ TEMPORARY: The services below are using FAKE mock data.
          This section is only for development/testing purposes.
          Remove or replace this when integrating real backend API. */}

      <section className="px-8 pb-20">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Featured Services (Mock Data)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                {service.description}
              </p>

              <p className="font-bold mb-1">
                Rs. {service.price}
              </p>

              <p className="text-sm text-gray-500">
                {service.location} • ⭐ {service.rating}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}