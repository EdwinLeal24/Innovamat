import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import SectionHeader from "../components/SectionHeader";
import Items from "../components/items/Items";
import Dialog from "../components/Dialog";

export default function Rincones() {
  const location = useLocation();
  const { items, loading, error } = useFetch(location.pathname);
  const message = error
    ? "Parece que ha habido un error!"
    : "Buscando Rincones...";

  return (
    <>
      <SectionHeader heading="Rincones" />
      {loading ? <Dialog message={message} /> : <Items items={items} />}
    </>
  );
}
