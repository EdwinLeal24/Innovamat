import { containerCards } from "./Items.module.css";
import Card from "./Card";
import { addFavorite, removeFavorite } from "../../services/handleFavorites.js";

export default function GridCards({ resources }) {
  const changeFavorite = (source, isFavorite) => {
    isFavorite ? addFavorite(source) : removeFavorite(source.id);
  };
  return (
    <ul className={containerCards}>
      {resources.map((source, index) => (
        <Card
          source={source}
          key={index + source.id}
          changeFavorite={changeFavorite}
        />
      ))}
    </ul>
  );
}
