import { Nav } from "@/components/nav";
import { Card } from "@/components/card";
import Image from "next/image";

const plantCommonName = ['Cactus', 'Fern', 'Monstera', 'Crotus', 'Aloe Vera', 'Peace Lily', 'Snake Plant', 'Pothos'];

export default function Home() {
  return (
    <div>
<p>House Plant</p>
    <div className="pattern"/>
    <div className="wrapper">
    <Nav></Nav>
    <header>
      <Image src="/hero.png" alt="Logo"  width={1000} height={2000}/>
      <h1>
        <span className="text-gradient">Find plants</span>
      </h1>
    </header>

    <section className="all-plants">
      <div></div>
      <ul>
        {plantCommonName.map((plantCommonName, index) => (
          <Card key={index} name={plantCommonName} />
        ))}
      </ul>
    </section>
    </div>
    </div>
    
  );
}
