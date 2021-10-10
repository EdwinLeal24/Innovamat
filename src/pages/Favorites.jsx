import { getFavorites } from "../services/handleFavorites";
import { addFavorite } from "./Favorites.module.css";
import GridCards from "../components/items/GridCards";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TALLERES_PATH } from "../routing/paths";

export default function Favorites() {
  const favorites = getFavorites();
  return (
    <>
      <h1>Favoritos</h1>
      {favorites ? (
        <GridCards resources={favorites} />
      ) : (
        <section className={addFavorite}>
          <h3>Aún no has añadido recursos a tus favoritos ¿añadimos?</h3>
          <Link to={TALLERES_PATH}>
            <p>
              <FaArrowLeft />
            </p>
          </Link>
        </section>
      )}
    </>
  );
}
