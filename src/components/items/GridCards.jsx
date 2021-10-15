import { useEffect, useState } from "react";
import { containerCards } from "./Items.module.css";
import {
  addFavorite,
  removeFavorite,
} from "../../services/favorite/handleFavorites";
import Card from "./Card";

export default function GridCards({ resources, sort }) {
  const [list, setList] = useState(resources);

  useEffect(() => {
    const sortedItems = sort
      ? resources.sort((a, b) => b.title.localeCompare(a.title))
      : resources.sort((a, b) => a.title.localeCompare(b.title));
    setList(sortedItems);
  }, [sort]);

  const addFavorites = (source) => {
    addFavorite(source);
  };

  const deleteFavorite = (id) => {
    let favorites = removeFavorite(id);
    setList(favorites);
  };

  return (
    <ul className={containerCards}>
      {list.map((source, index) => (
        <Card
          source={source}
          key={index + source.id}
          addFavorites={addFavorites}
          removeFavorite={deleteFavorite}
        />
      ))}
    </ul>
  );
}
