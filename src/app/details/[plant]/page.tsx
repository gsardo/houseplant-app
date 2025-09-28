import { getPlantBySlug } from "@/data/plants";
import Image from "next/image";

interface PlantDetailsPageProps {
  params: Promise<{ plant: string }>;
}

export default async function PlantDetailsPage({ params }: PlantDetailsPageProps) {
  const { plant: plantSlug } = await params;
  
  // Find the plant using the slug
  const plant = getPlantBySlug(decodeURIComponent(plantSlug));

  if (!plant) {
    return (
      <div className="plant-detail-container">
        <h1>Plant Not Found</h1>
        <p>Sorry, we couldn&apos;t find information about this plant.</p>
      </div>
    );
  }

  return (
    <div className="plant-detail-container">
      <div className="plant-detail-header">
        <Image 
          src={plant.image} 
          alt={plant.commonName} 
          width={400} 
          height={400}
          className="plant-detail-image"
        />
        <div className="plant-detail-info">
          <h1>{plant.commonName}</h1>
          <h2 className="botanical-name">{plant.botanicalName}</h2>
          
          <div className="plant-categories">
            {plant.categories.easyCare && <span className="category-tag easy-care">Easy Care</span>}
            {plant.categories.petFriendly && <span className="category-tag pet-friendly">Pet Friendly</span>}
            {plant.categories.succulent && <span className="category-tag succulent">Succulent</span>}
            {plant.categories.lowLight && <span className="category-tag low-light">Low Light</span>}
          </div>

          <div className="plant-specs">
            <div className="spec-item">
              <strong>Care Level</strong>
              <span>{plant.careLevel}</span>
            </div>
            <div className="spec-item">
              <strong>Light Requirement</strong>
              <span>{plant.lightRequirement}</span>
            </div>
            <div className="spec-item">
              <strong>Watering</strong>
              <span>{plant.wateringFrequency}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="plant-detail-description">
        <h3>About {plant.commonName}</h3>
        <p>
          The {plant.commonName} ({plant.botanicalName}) is a {plant.careLevel}-care plant 
          that thrives in {plant.lightRequirement} light conditions. This plant requires watering 
          {plant.wateringFrequency === 'Weekly' ? ' every week' : 
           plant.wateringFrequency === 'Fortnightly' ? ' every two weeks' : 
           ' once a month'}, making it {plant.categories.easyCare ? 'perfect for beginners' : 'suitable for more experienced plant parents'}.
          {plant.categories.petFriendly && ' It&apos;s also safe for pets!'}
          {plant.categories.succulent && ' As a succulent, it stores water in its leaves and requires minimal care.'}
        </p>
      </div>
    </div>
  );
}
