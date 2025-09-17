import Image from "next/image";

export function Card({ name }: { name: string }) {
    return (
        <div className='plant-card'>
            <Image src="/plant-image.png" alt="Plant" width={1050} height={1050} />

            <div className="content">
                <h3>{name}</h3>
                <span>•</span>
                <h5>Plant botanical name</h5>
            </div>
        </div>
    )
}