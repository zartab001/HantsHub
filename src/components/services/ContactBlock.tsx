import { Service } from '@/types/service';

type ContactBlockProps = {
  service: Service;
};

export default function ContactBlock({ service }: ContactBlockProps) {
  // Google Maps link
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    service.address || service.location,
  )}`;

  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm space-y-4">
      <h3 className="text-lg font-semibold">Contact Information</h3>

      {/* Phone */}
      {service.phone && (
        <div className="text-sm">
          <span className="font-medium">Phone:</span>{' '}
          <a
            href={`tel:${service.phone}`}
            className="text-blue-600 hover:underline"
          >
            {service.phone}
          </a>
        </div>
      )}

      {/* Email */}
      {service.email && (
        <div className="text-sm">
          <span className="font-medium">Email:</span>{' '}
          <a
            href={`mailto:${service.email}`}
            className="text-blue-600 hover:underline"
          >
            {service.email}
          </a>
        </div>
      )}

      {/* Website */}
      {service.website && (
        <div className="text-sm">
          <span className="font-medium">Website:</span>{' '}
          <a
            href={service.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Website
          </a>
        </div>
      )}

      {/* Address */}
      {service.address && (
        <div className="text-sm">
          <span className="font-medium">Address:</span> {service.address}
        </div>
      )}

      {/* Opening Hours */}
      {service.openingHours && (
        <div className="text-sm">
          <span className="font-medium">Opening Hours:</span>{' '}
          {service.openingHours}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-4">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center"
        >
          Get Directions
        </a>

        {service.website && (
          <a
            href={service.website}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition text-center"
          >
            Visit Website
          </a>
        )}

        {service.bookingUrl && (
          <a
            href={service.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition text-center"
          >
            Book
          </a>
        )}
      </div>
    </div>
  );
}
