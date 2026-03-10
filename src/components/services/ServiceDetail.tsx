import { Service } from "@/types/service";

type Props = {
  service: Service;
};

export default function ServiceDetail({ service }: Props) {
  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* Category */}
      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
        {service.category.name}
      </span>

      {/* Title */}
      <h1 className="text-3xl font-bold mt-2 mb-4">
        {service.title}
      </h1>

      {/* Description */}
      <p className="text-gray-700 mb-6">
        {service.description}
      </p>

      {/* Basic Info */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <p><strong>Price:</strong> Rs. {service.price}</p>
        <p><strong>Location:</strong> {service.location}</p>
        <p><strong>Phone:</strong> {service.phone}</p>
        <p><strong>Email:</strong> {service.email}</p>
      </div>

    </div>
  );
}