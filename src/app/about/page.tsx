"use client"
import "./about.css";
import { useState } from 'react';
import { Header } from '../../components/header/header';
import { FavouritePlants } from '../../components/plant-of-the-day/plant-of-the-day';
import { TabButton } from '../../components/tab-button/tab-button';

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

const favouritePlants = [
    {title: 'Monsterra', description: 'Huge green leaves'},
    {title: 'Boston fern', description: 'Bushy and wild'},
    {title:'Pothos', description:'Hangs and very chill'},
    {title:'Peace lily', description: 'Contrasting leaves and flower'},
]

export default function About() {
    const [activeContextIndex, setActiveContextIndex] = useState(0);

    return (
        <>
            <Header />
            <section>
                <h2>My Favourite Plants</h2>
                <ul id="favourites-grid">
                   {favouritePlants.map((plant) => (
                    <FavouritePlants title={plant.title} description={plant.description}/>
                   ))}
                </ul>
            </section>
            <section id="examples">
                <h2>About House Plant</h2>
                   <menu>
                    <TabButton>Why HousePlant?</TabButton>
                    <TabButton>Features</TabButton>
                    <TabButton>References</TabButton>
                    <TabButton>Credits</TabButton>
                   </menu>
            </section>
        </>
    )
}
