import { notFound } from "next/navigation";
import { services } from "@/lib/mock-data";
import ServiceCard from "@/components/services/ServiceCard";

type Props = {
  params: {
    slug: string;
  };
};

export default function CategoryDetailPage({ params }: Props) {
  const { slug } = params;

  // Filter services matching this category slug
  const filteredServices = services.filter(
    (service) => service.category.slug === slug
  );

  // If no services found → show 404
  if (filteredServices.length === 0) {
    return notFound();
  }

  // Get category name from first matching service
  const categoryName = filteredServices[0].category.name;

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-16">
      {/* Header Section */}
      <section className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {categoryName}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse available services under this category and find the support
          that fits your needs in your region.
        </p>
      </section>

      {/* Services Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}