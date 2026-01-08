import ContactPage from '@/components/contact-info';
import { getServicesWithPackages } from '@/lib/data-fetch';
import { cookies } from 'next/headers';
import React from 'react'


export default async function Contact() {
  await cookies();
  const data = await getServicesWithPackages();
  const services = data || [];
  return (
    <div>
      <ContactPage services={services} />
    </div>
  )
}