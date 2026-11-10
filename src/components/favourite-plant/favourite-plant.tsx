import "./favourite-plant.css";

export function FavouritePlant(props: { title: string; description: string }) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
