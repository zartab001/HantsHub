// src/app/services/[id]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/mock-data";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ServiceDetailPage({ params }: Props) {

  const { id } = await params;   // ✅ FIX HERE

  const service = services.find((s) => s.id === id);

  if (!service) return notFound();

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-16">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex gap-2">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>

        <span>→</span>

        <Link
          href={`/categories/${service.category.slug}`}
          className="hover:text-blue-600"
        >
          {service.category.name}
        </Link>

        <span>→</span>

        <span className="text-gray-900 font-medium">
          {service.title}
        </span>
      </nav>

      {/* Header */}
      <section className="mb-8">

        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded mb-3">
          {service.category.name}
        </span>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {service.title}
        </h1>

        <div className="flex gap-4 text-sm text-gray-600">
          <span>📍 {service.location}</span>
          <span>⭐ {service.rating}</span>
          <span>💰 Rs. {service.price}</span>
        </div>

      </section>

      {/* Image */}
      <section className="mb-10">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[350px] object-cover rounded-xl"
        />
      </section>

      {/* Description */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">
          About this service
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {service.description}
        </p>
      </section>

      {/* Service Info */}
      <section className="border-t pt-8">
        <h2 className="text-xl font-semibold mb-4">
          Service Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">

          {service.phone && (
            <div>
              <p className="font-medium text-gray-800">Phone</p>
              <p className="text-gray-600">{service.phone}</p>
            </div>
          )}

          {service.email && (
            <div>
              <p className="font-medium text-gray-800">Email</p>
              <p className="text-gray-600">{service.email}</p>
            </div>
          )}

          <div>
            <p className="font-medium text-gray-800">Location</p>
            <p className="text-gray-600">{service.location}</p>
          </div>

          <div>
            <p className="font-medium text-gray-800">Price</p>
            <p className="text-gray-600">Rs. {service.price}</p>
          </div>

        </div>

      </section>

    </main>
  );
}