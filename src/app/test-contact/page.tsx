import ContactBlock from '@/components/services/ContactBlock';
import { services } from '@/lib/mock-data';

export default function TestContactPage() {
  // Pick a sample service to test
  const service = services[0]; // change index to test other services

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Test Contact Block</h1>

      <div className="w-full max-w-md">
        <ContactBlock service={service} />
      </div>
    </main>
  );
}
