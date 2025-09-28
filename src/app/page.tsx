"use client";

import { Card } from "@/components/card";
import { Search } from '@/components/search';
import { QuickSearch } from '@/components/quicksearch';
import { useState } from "react";
import Image from "next/image";


const plantCommonName = ['Cactus', 'Fern', 'Monstera', 'Crotus', 'Aloe Vera', 'Peace Lily', 'Snake Plant', 'Pothos'];

export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter plants based on search term and category
  const filteredPlants = plantCommonName.filter(plant => {
    const matchesSearch = plant.toLowerCase().includes(searchTerm.toLowerCase());
    
    // For now, we'll do basic category matching based on plant names
    // This will be improved when you implement the full plant data structure
    let matchesCategory = true;
    if (activeCategory) {
      switch (activeCategory) {
        case 'easy-care':
          matchesCategory = ['Cactus', 'Snake Plant', 'Pothos', 'Aloe Vera'].includes(plant);
          break;
        case 'pet-friendly':
          matchesCategory = ['Fern', 'Peace Lily'].includes(plant);
          break;
        case 'succulents':
          matchesCategory = ['Cactus', 'Aloe Vera'].includes(plant);
          break;
        case 'low-light':
          matchesCategory = ['Snake Plant', 'Pothos', 'Peace Lily'].includes(plant);
          break;
        default:
          matchesCategory = true;
      }
    }
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <header>
        <Image src="/hero.png" alt="Logo"  width={1000} height={2000}/>
       
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <h3>Quick searches</h3>
        <QuickSearch 
          activeCategory={activeCategory} 
          onCategorySelect={setActiveCategory} 
        />
        
      </header>

      <section className="all-plants">
        <ul>
          {filteredPlants.map((plant, index) => (
            <Card key={index} name={plant} />
          ))}
        </ul>
        {filteredPlants.length === 0 && (searchTerm || activeCategory) && (
          <p className="no-results">
            Sorry, no plants found
            {searchTerm && ` matching &ldquo;${searchTerm}&rdquo;`}
            {activeCategory && ` in the selected category`}
            .
          </p>
        )}
      </section>
    </>
  );
}
