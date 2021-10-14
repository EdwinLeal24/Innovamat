import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import SectionHeader from "../../components/header/SectionHeader";
import Items from "../../components/items/Items";
import Dialog from "../../components/dialog/Dialog";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export default function Rincones() {
  const location = useLocation();
  const { items, loading, error } = useFetch(location.pathname);
  const message = error
    ? "Parece que ha habido un error!"
    : "Buscando Rincones...";

  const isMobileWindow = useWindowWidth();

  return (
    <>
      {isMobileWindow && <SectionHeader heading="Rincones" />}
      <main>
        {isMobileWindow ? (
          <h2>Rincones</h2>
        ) : (
          <SectionHeader heading="Rincones" />
        )}
        {loading ? <Dialog message={message} /> : <Items items={items} />}
      </main>
    </>
  );
}
