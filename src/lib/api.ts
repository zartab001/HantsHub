import { services } from "./mock-data";
import { Service } from "@/types/service";

export async function getServices(): Promise<Service[]> {
  return services;
}

export async function getServiceById(id: string): Promise<Service | undefined> {
  return services.find((service) => service.id === id);
}

export async function search(query: string): Promise<Service[]> {
  return services.filter((service) =>
    service.title.toLowerCase().includes(query.toLowerCase())
  );
}