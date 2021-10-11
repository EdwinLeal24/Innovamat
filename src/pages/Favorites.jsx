import { getFavorites } from "../services/handleFavorites";
import GridCards from "../components/items/GridCards";
import { TALLERES_PATH } from "../routing/paths";
import Dialog from "../components/Dialog";

export default function Favorites() {
  const favorites = getFavorites();
  const message = "Aún no has añadido recursos a tus favoritos ¿añadimos?";
  return (
    <>
      <h1>Favoritos</h1>
      {favorites ? (
        <GridCards resources={favorites} />
      ) : (
        <Dialog message={message} link={TALLERES_PATH} />
      )}
    </>
  );
}
