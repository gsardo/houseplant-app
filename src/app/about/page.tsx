"use client"
import { useState } from 'react';

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

export default function About() {
    const [activeContextIndex, setActiveContextIndex] = useState(0);

    return (
        <div>
            <header>
                <div>
                    <h1>About HousePlant</h1>
                    <p>Care for your plants and get some free tips</p>
                </div>
            </header>

            <div id="tabs">
                <menu>
                    <button
                        className={activeContextIndex === 0 ? "active" : ""}
                        onClick={() => setActiveContextIndex(0)}
                    >
                        Why HousePlant?
                    </button>
                    <button
                        className={activeContextIndex === 1 ? "active" : ""}
                        onClick={() => setActiveContextIndex(1)}
                    >
                        Core features
                    </button>
                    <button
                        className={activeContextIndex === 2 ? "active" : ""}
                        onClick={() => setActiveContextIndex(2)}
                    >
                        Recommended resources
                    </button>
                    <button
                        className={activeContextIndex === 3 ? "active" : ""}
                        onClick={() => setActiveContextIndex(3)}
                    >
                        Acknowledgements
                    </button>
                </menu>
                <div id="tab-content">
                    <ul>
                        {content[activeContextIndex].map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}