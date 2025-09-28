import Image from "next/image";

interface SearchProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

export function Search({ searchTerm, setSearchTerm }: SearchProps) {
    return (
        <div className="search">
            <div>
                <Image src="/search-icon.png" alt="Search" width={20} height={20} />
                <input type="text" placeholder="Find a plant" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
        </div>
    )
}