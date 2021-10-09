import {
  itemTitle,
  containerCards,
  card,
  cardImage,
  cardTitle,
  cardDescription,
  favoriteCard,
} from "./Items.module.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Items({ items }) {
  const sectionsItems = items.map((item) => {
    const { sectionName, resources } = item;

    return (
      <div key={sectionName}>
        <div className={itemTitle}>
          <h3>{sectionName}</h3>
          <button>Ordenar A-Z</button>
        </div>

        <ul className={containerCards}>
          {resources.map((source, index) => {
            const { id, image, tag, title, description } = source;
            return (
              <Link to={`/resource/${id}`} className={card}>
                <li key={index}>
                  <div>
                    <img
                      src={image}
                      alt={("image", tag)}
                      className={cardImage}
                    />
                    <h4 className={cardTitle}>{title}</h4>
                    <p className={cardDescription}>{description}</p>
                  </div>
                  <div>
                    <button className={favoriteCard}>
                      <span>
                        <FaHeart />
                      </span>{" "}
                      Favorito
                    </button>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  });

  return <div>{sectionsItems}</div>;
}
