import {
  card,
  cardImage,
  cardTitle,
  cardDescription,
  favoriteCard,
} from "./Items.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { DETAIL_PATH } from "../../routing/paths";

export default function Card({ source, addFavorites, removeFavorite }) {
  const { id, image, tag, title, description } = source;

  const [isFavorite, setIsFavorite] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const addFavorite = () => {
    setIsFavorite(!isFavorite);
    addFavorites(source);
  };

  const location = useLocation();
  const showButton = !location.pathname.includes("favoritos");
  const colorButton = { color: isFavorite ? "#18c6ca" : "#6c6c6c" };

  const showFavorite = isFavorite || isHover;

  return (
    <li
      className={card}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={`${DETAIL_PATH}/${id}`}>
        <div>
          <img src={image} alt={("image", tag)} className={cardImage} />
          <h4 className={cardTitle}>{title}</h4>
          <p className={cardDescription}>{description}</p>
        </div>
      </Link>

      {showFavorite && showButton && (
        <div>
          <button onClick={addFavorite}>
            <p className={favoriteCard} style={colorButton}>
              <span>{isFavorite ? <IoIosHeart /> : <IoIosHeartEmpty />}</span>{" "}
              Favorito
            </p>
          </button>
        </div>
      )}

      {!showButton && (
        <div>
          <button onClick={() => removeFavorite(id)}>
            <p className={favoriteCard} style={{ color: "#18c6ca" }}>
              <span>
                <IoIosHeart />
              </span>{" "}
              Favorito
            </p>
          </button>
        </div>
      )}
    </li>
  );
}
