import Image from "next/image";
import Link from "next/link";

export function Card({ name }: { name: string }) {
    return (
        <Link href={`/details/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'))}`} className='plant-card'>
            <Image src="/plant-image.png" alt="Plant" width={1050} height={1050} />

            <div className="content">
                <h3>{name}</h3>
                <span>•</span>
                <h5>Plant botanical name</h5>
            </div>
        </Link>
    )
}