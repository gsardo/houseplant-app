"use client";

import { Card } from "@/components/card";
import { Search } from '@/components/search';
import { QuickSearch } from '@/components/quicksearch';
import { plantsData } from '@/data/plants';
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter plants based on search term and category
  const filteredPlants = plantsData.filter(plant => {
    const matchesSearch = plant.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.botanicalName.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesCategory = true;
    if (activeCategory) {
      switch (activeCategory) {
        case 'easy-care':
          matchesCategory = plant.categories.easyCare;
          break;
        case 'pet-friendly':
          matchesCategory = plant.categories.petFriendly;
          break;
        case 'succulents':
          matchesCategory = plant.categories.succulent;
          break;
        case 'low-light':
          matchesCategory = plant.categories.lowLight;
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

        <h4>Popular searches</h4>
        <QuickSearch 
          activeCategory={activeCategory} 
          onCategorySelect={setActiveCategory} 
        />
        
      </header>

      <section className="all-plants">
        <ul>
          {filteredPlants.map((plant) => (
            <Card key={plant.id} plant={plant} />
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
