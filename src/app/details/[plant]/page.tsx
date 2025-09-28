interface PlantDetailsPageProps {
  params: Promise<{ plant: string }>;
}

export default async function PlantDetailsPage({ params }: PlantDetailsPageProps) {
  const { plant: plantSlug } = await params;
  
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
