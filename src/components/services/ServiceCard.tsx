import React from 'react';
import { Service } from '../../types/service';

type ServiceCardProps = {
  service: Service;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div
      tabIndex={0}
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                 rounded-lg p-4 shadow-sm hover:shadow-lg transform hover:scale-105
                 transition duration-200 focus:outline-none focus-visible:ring-2
                 focus-visible:ring-blue-600"
    >
      {/* Category Badge */}
      <div className="mb-2">
        <span className="inline-block bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-1 rounded">
          {service.category.name}
        </span>
      </div>

      {/* Service Title */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
        {service.title}
      </h3>

      {/* Description (2-line truncated) */}
      <p
        className="text-gray-700 dark:text-gray-300 text-sm mb-3 overflow-hidden"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {service.description}
      </p>

      {/* Price and Location */}
      <div className="flex justify-between items-center text-xs text-gray-600 dark:text-gray-400 mb-3">
        <span>Rs. {service.price}</span>
        <span>
          {service.location} • ⭐ {service.rating}
        </span>
      </div>

      {/* View Details CTA */}
      <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
        View details →
      </button>
    </div>
  );
};

export default ServiceCard;
