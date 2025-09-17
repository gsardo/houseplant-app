'use client';

import { useParams } from 'next/navigation';

export default function PlantDetailsPage() {
  const params = useParams();
  const plantSlug = params.plant as string;
  
  // Convert slug back to readable plant name
  const plantName = decodeURIComponent(plantSlug)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (!plantName) {
    return <p>No plant selected</p>;
  }

  return (
    <div>
      <h1>{plantName} Details</h1>
      <p>Learn more about {plantName} lorem ipsum dolor sit amet</p>
    </div>
  );
}
