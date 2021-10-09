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
            const { image, title, description } = source;
            return (
              <li key={index} className={card}>
                <div>
                  <img src={image} className={cardImage} />
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
            );
          })}
        </ul>
      </div>
    );
  });

  return <div>{sectionsItems}</div>;
}
