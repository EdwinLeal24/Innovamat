import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import SectionHeader from "./SectionHeader";
import Items from "./Items";

export default function Rincones() {
  const location = useLocation();
  console.log(location.pathname);
  const rincones = useFetch(location.pathname);

  return (
    <>
      <SectionHeader heading="Rincones" />
      <Items items={rincones} />
    </>
  );
}
