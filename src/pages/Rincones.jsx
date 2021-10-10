import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import SectionHeader from "../components/SectionHeader";
import Items from "../components/items/Items";

export default function Rincones() {
  const location = useLocation();
  const rincones = useFetch(location.pathname);

  return (
    <>
      <SectionHeader heading="Rincones" />
      <Items items={rincones} />
    </>
  );
}
