import Items from "../components/items/Items";
import { useFetch } from "../hooks/useFetch";
import SectionHeader from "../components/header/SectionHeader";
import Dialog from "../components/dialog/Dialog";
import { useWindowWidth } from "../hooks/useWindowWidth";

export default function Talleres() {
  const { items, loading, error } = useFetch();
  const message = error
    ? "Parece que ha habido un error!"
    : "Buscando talleres...";

  const isMobileWindow = useWindowWidth();

  return (
    <>
      {isMobileWindow && <SectionHeader heading="Rincones" />}
      <main>
        {isMobileWindow ? (
          <h2>Talleres</h2>
        ) : (
          <SectionHeader heading="Talleres" />
        )}
        {loading ? <Dialog message={message} /> : <Items items={items} />}
      </main>
    </>
  );
}
