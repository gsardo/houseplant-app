"use client";

import { Card } from "@/components/card";
import { Search } from '@/components/search';
import { useState } from "react";
import Image from "next/image";


const plantCommonName = ['Cactus', 'Fern', 'Monstera', 'Crotus', 'Aloe Vera', 'Peace Lily', 'Snake Plant', 'Pothos'];

export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");

  // Filter plants based on search term
  const filteredPlants = plantCommonName.filter(plant =>
    plant.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header>
        <Image src="/hero.png" alt="Logo"  width={1000} height={2000}/>
       
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>

      <section className="all-plants">
        <ul>
          {filteredPlants.map((plant, index) => (
            <Card key={index} name={plant} />
          ))}
        </ul>
        {filteredPlants.length === 0 && searchTerm && (
          <p className="no-results">Sorry, no plants found matching &ldquo;{searchTerm}&rdquo;.</p>
        )}
      </section>
    </>
  );
}
