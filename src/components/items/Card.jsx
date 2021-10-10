import {
  card,
  cardImage,
  cardTitle,
  cardDescription,
  favoriteCard,
} from "./Items.module.css"; // TODO: Change style file name
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function Card({ source, changeFavorite }) {
  const { id, image, tag, title, description } = source;

  const [isFavorite, setIsFavorite] = useState(false);
  const addFavorite = () => {
    let favorite = isFavorite;
    favorite = !favorite;
    setIsFavorite(favorite);
    changeFavorite(source, favorite);
  };
  const location = useLocation();
  const showButton = location.pathname.includes("favoritos");
  const colorButton = { color: isFavorite ? "#18c6ca" : "#6c6c6c" };
  return (
    <li className={card}>
      <Link to={`/resource/${id}`}>
        <div>
          <img src={image} alt={("image", tag)} className={cardImage} />
          <h4 className={cardTitle}>{title}</h4>
          <p className={cardDescription}>{description}</p>
        </div>
      </Link>
      {!showButton && (
        <div>
          <button onClick={addFavorite}>
            <p className={favoriteCard} style={colorButton}>
              <span>{isFavorite ? <IoIosHeart /> : <IoIosHeartEmpty />}</span>{" "}
              Favorito
            </p>
          </button>
        </div>
      )}
    </li>
  );
}
