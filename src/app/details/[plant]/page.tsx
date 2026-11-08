import "./details.css";
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
      <div id="plant-detail">
        <h1>Plant Not Found</h1>
        <p>Sorry, we couldn&apos;t find information about this plant.</p>
      </div>
    );
  }

  return (
    <div id="plant-detail">
      <div>
        <div id="plant-detail-info">
          <h1>{plant.commonName}</h1>
          <h2>{plant.botanicalName}</h2>
          <Image 
            src={plant.image} 
            alt={plant.commonName} 
            width={400} 
            height={400}
          />
          <h3>Traits</h3>
          <div id="plant-tags">
            {plant.categories.easyCare && <span>Easy Care</span>}
            {plant.categories.petFriendly && <span>Pet Friendly</span>}
            {plant.categories.succulent && <span>Succulent</span>}
            {plant.categories.lowLight && <span>Low Light</span>}
          </div>

          <div id="plant-specs">
            <div>
              <strong>Care Level</strong>
              <span>{plant.careLevel}</span>
            </div>
            <div>
              <strong>Light Requirement</strong>
              <span>{plant.lightRequirement}</span>
            </div>
            <div>
              <strong>Watering</strong>
              <span>{plant.wateringFrequency}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div id="plant-description">
        <p>
          The {plant.commonName} ({plant.botanicalName}) is a {plant.careLevel}-care plant 
          that thrives in {plant.lightRequirement} light conditions. This plant requires watering 
          {plant.wateringFrequency === 'Weekly' ? ' every week' : 
           plant.wateringFrequency === 'Fortnightly' ? ' every two weeks' : 
           ' once a month'}, making it {plant.categories.easyCare ? 'perfect for beginners' : 'suitable for more experienced plant parents'}.
          {plant.categories.petFriendly && ' It&apos;s also safe for pets!'}
          {plant.categories.succulent && ' As a succulent, it stores water in its leaves and requires minimal care.'}
        </p>
        <h4>Botanical information</h4>
        <p>More text to come</p>
      </div>
    </div>
  );
}
