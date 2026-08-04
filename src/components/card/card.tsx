import Image from "next/image";
import Link from "next/link";
import { Plant } from "@/types/plant";

export function Card({ plant }: { plant: Plant }) {
    return (
        <Link className='item' href={`/details/${encodeURIComponent(plant.commonName.toLowerCase().replace(/\s+/g, '-'))}`}>
            <Image src={plant.image} alt={plant.commonName} width={1050} height={1050} />

            <div>
                <h3>{plant.commonName}</h3>
                <p> A beautiful houseplant that thrives indoors and brings life to any space.</p>
            </div>
        </Link>
    )
}