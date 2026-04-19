import Image from "next/image";
import Link from "next/link";
import { Plant } from "@/types/plant";

export function Card({ plant }: { plant: Plant }) {
    return (
        <Link href={`/details/${encodeURIComponent(plant.commonName.toLowerCase().replace(/\s+/g, '-'))}`} className='plant-card'>
            <Image src={plant.image} alt={plant.commonName} width={1050} height={1050} />

            <div className="content">
                <h3>{plant.commonName}</h3>
                <p className="hidden lg:block text-sm text-gray-400 mt-1 line-clamp-2">A beautiful houseplant that thrives indoors and brings life to any space.</p>
            </div>
        </Link>
    )
}