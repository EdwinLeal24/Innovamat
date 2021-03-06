import { getFavorites } from "../../services/favorite/handleFavorites";
import { useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { TALLERES_PATH } from "../../routing/paths";
import { buttonBack } from "./Favorite.module.css";
import GridCards from "../../components/items/GridCards";
import Dialog from "../../components/dialog/Dialog";

export default function Favorites() {
  const history = useHistory();
  const favorites = getFavorites();
  const message = "Aún no has añadido recursos a tus favoritos ¿añadimos?";

  return (
    <main>
      <h1>
        <button onClick={() => history.goBack()} className={buttonBack}>
          <FaArrowLeft />
        </button>
        <span>Favoritos</span>
      </h1>
      {favorites && favorites.length ? (
        <GridCards resources={favorites} />
      ) : (
        <Dialog message={message} link={TALLERES_PATH} />
      )}
    </main>
  );
}
