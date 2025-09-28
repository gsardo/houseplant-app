import Image from "next/image";
import Link from "next/link";
import { Plant } from "@/types/plant";

export function Card({ plant }: { plant: Plant }) {
    return (
        <Link href={`/details/${encodeURIComponent(plant.commonName.toLowerCase().replace(/\s+/g, '-'))}`} className='plant-card'>
            <Image src={plant.image} alt={plant.commonName} width={1050} height={1050} />

            <div className="content">
                <h3>{plant.commonName}</h3>
                <h3 style={{color: "gray"}}>{plant.botanicalName}</h3>
            </div>
        </Link>
    )
}