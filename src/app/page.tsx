"use client";

import { Card } from "@/components/card";
import { Search } from '@/components/search';
import { useState } from "react";
import Image from "next/image";


const plantCommonName = ['Cactus', 'Fern', 'Monstera', 'Crotus', 'Aloe Vera', 'Peace Lily', 'Snake Plant', 'Pothos'];

export default function Home() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <header>
        <Image src="/hero.png" alt="Logo"  width={1000} height={2000}/>
       
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>

      <section className="all-plants">
        <ul>
          {plantCommonName.map((plantCommonName, index) => (
            <Card key={index} name={plantCommonName} />
          ))}
        </ul>
      </section>
    </>
  );
}
