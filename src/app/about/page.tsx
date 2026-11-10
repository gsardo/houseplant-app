"use client";
import "./about.css";
import { Header } from "../../components/header/header";
import { FavouritePlantSection } from "../../components/favourite-plant-section/favourite-plant-section";
import { AboutHousePlantSection } from "../../components/about-house-plant-section/about-house-plant-section";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <FavouritePlantSection />
        <AboutHousePlantSection />
      </main>
    </>
  );
}
