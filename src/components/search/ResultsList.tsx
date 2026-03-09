'use client';
import React from 'react';
import { Service } from '@/types/service';
import ServiceCard from '@/components/services/ServiceCard';

type ResultsListProps = {
  services: Service[];
};

export default function ResultsList({ services }: ResultsListProps) {
  if (services.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        No services found for your search.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
