import { FavouritePlant } from "../favourite-plant/favourite-plant";

const favouritePlants = [
  { title: "Monsterra", description: "Huge green leaves" },
  { title: "Boston fern", description: "Bushy and wild" },
  { title: "Pothos", description: "Hangs and very chill" },
  { title: "Peace lily", description: "Contrasting leaves and flower" },
];

export function FavouritePlantSection() {
  return (
    <section>
      <h2>My Favourite Plants</h2>
      <ul id="favourites-grid">
        {favouritePlants.map((plant) => (
          <FavouritePlant key={plant.title} {...plant} />
        ))}
      </ul>
    </section>
  );
}
