import ContactPage from '@/components/contact-info';
import { getServicesWithPackages } from '@/lib/data-fetch';
import React from 'react'


export default async function Contact() {
  const data = await getServicesWithPackages();
  const staticObject = {
    id: 999,
    url: 'special',
    icon: '⭐',
    title: 'Others',
    description: 'Personalized travel planning, destination research, and itinerary design.',
    bulletPoints: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    packages: [],
    color: "blue"
  };

  const services = [...data, staticObject];

  return (
    <div>
      <ContactPage services={services} />
    </div>
  )
}