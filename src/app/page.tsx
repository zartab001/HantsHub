import SearchBar from '@/components/ui/SearchBar';
import { getServices } from '@/lib/api';
import ServiceCard from '@/components/services/ServiceCard';

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
      <section className="px-8 pb-20">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Featured Services (Mock Data)
        </h2>

        {/* Grid of ServiceCard components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
