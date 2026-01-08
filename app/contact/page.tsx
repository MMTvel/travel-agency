import ContactPage from '@/components/contact-info';
import { getServicesWithPackages } from '@/lib/data-fetch';
import React from 'react'


export default async function Contact() {
  const data = await getServicesWithPackages();
  const services = data || [];
  return (
    <div>
      <ContactPage services={services} />
    </div>
  )
}