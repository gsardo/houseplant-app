import Image from "next/image";
import Link from "next/link";
import { Plant } from "@/types/plant";

export function Card({ plant }: { plant: Plant }) {
    return (
        <Link className='item' href={`/details/${encodeURIComponent(plant.commonName.toLowerCase().replace(/\s+/g, '-'))}`}>
           

            <div>
                 <Image src={plant.image} alt={plant.commonName} width={100} height={100} />
                <h3>{plant.commonName}</h3>
                <p> A beautiful houseplant that thrives indoors and brings life to any space.</p>
            </div>
        </Link>
    )
}