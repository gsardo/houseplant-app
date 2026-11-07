"use client"
import { useState } from 'react';
import { Header } from '../../components/header/header';
import { PlantOfTheDay, FavouritePlants } from '../../components/plant-of-the-day/plant-of-the-day';

const content = [
    [
        "Help with choosing the right plant for your home and environment",
        "Free and informative content",
        "A place to share the awesomeness of plants!"
    ],
    [
        "Search and filter through the library based on your preferences",
        "Find a recommended plant for your home and situation with Plant Matcher",
        "Care tips and articles",
        "Create an account to keep a diary of your green friends"
    ],
    [
        "Gardening Australia, ABC website",
        "Local plant nursery"
    ],
    [
        "Created by GS in Sydney as a passion project"
    ]
]



const tabs = ["Why HousePlant?", "Core features", "Recommended resources", "Acknowledgements"];

export default function About() {
    const [activeContextIndex, setActiveContextIndex] = useState(0);

    return (
        <>
            <Header />
            <PlantOfTheDay />
            <section>
                <h2>My Favourite Plants</h2>
                <ul id="favourites-grid">
                    <FavouritePlants title='Monsterra' description='Huge green leafs' />
                    <FavouritePlants title='Boston fern' description='Bushy and wild' />
                    <FavouritePlants title='Boston fern' description='Bushy and wild' />
                    <FavouritePlants title='Boston fern' description='Bushy and wild' />
                </ul>
            </section>
            <section>
                <menu id="about-tabs">
                    {tabs.map((label, index) => (
                        <button
                            key={label}
                            className={activeContextIndex === index ? "active" : ""}
                            onClick={() => setActiveContextIndex(index)}
                        >
                            {label}
                        </button>
                    ))}
                </menu>
                <ul id="about-content">
                    {content[activeContextIndex].map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </section>
        </>
    )
}
