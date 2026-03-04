// src/app/categories/[slug]/page.tsx
import { notFound } from "next/navigation";
import { services } from "@/lib/mock-data";
import ServiceCard from "@/components/services/ServiceCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryDetailPage({ params }: Props) {
  // ✅ unwrap params properly (required in Next 16)
  const { slug } = await params;

  if (!slug) return notFound();

  const filteredServices = services.filter(
    (s) => s.category?.slug?.toLowerCase() === slug.toLowerCase()
  );

  if (filteredServices.length === 0) return notFound();

  const categoryName = filteredServices[0].category.name;

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 py-16">
      <section className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {categoryName}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse available services under this category.
        </p>
      </section>

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