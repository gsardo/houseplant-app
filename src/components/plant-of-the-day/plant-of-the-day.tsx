import "./plant-of-the-day.css";
const plantOfTheDay = ['Fiddle leaf fig', 'Cactus', 'Calithea', 'Monsterra', 'Fern'];

function getRandomPlant(max: number) {
    return Math.floor(Math.random() * (max + 1));
}

export function PlantOfTheDay() {
    return (
        <div id="plant-of-the-day">
            <h2>Plant of the day: {plantOfTheDay[getRandomPlant(4)]}</h2>
        </div>
    )
}

export function FavouritePlants(props: { title: string; description: string }) {
    return (
        <li>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}