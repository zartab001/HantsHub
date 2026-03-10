import type { Meta, StoryObj } from "@storybook/react";
import ServiceCard from "./ServiceCard";
import { Service } from "../../types/service";

const mockService: Service = {
  id: "1",
  title: "Professional Plumbing Service",
  description:
    "We provide reliable and affordable plumbing solutions for homes and offices. Available 24/7 for emergency repairs.",
  category: {
    id: "cat1",
    name: "Home Services",
    slug: "home-services", // ✅ required by Category
  },
  price: 2500,
  rating: 4.8, // ✅ must be number
  location: "Karachi",
  image: "/images/plumbing.jpg", // ✅ required by Service
  createdAt: new Date().toISOString(), // ✅ required by Service
  phone: "+92 300 1234567", // optional
  email: "plumber@example.com", // optional
};

const meta: Meta<typeof ServiceCard> = {
  title: "Components/ServiceCard",
  component: ServiceCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: {
    service: mockService,
  },
};