import Items from "../components/items/Items";
import { useFetch } from "../hooks/useFetch";
import SectionHeader from "../components/SectionHeader";
import Dialog from "../components/Dialog";
export default function Talleres() {
  // const sortItems = (sectionName) => {
  //   console.log("click");

  //   const itemToSort = talleres.filter(
  //     (taller) => taller.sectionName === sectionName
  //   );
  //   const sortedItems = itemToSort[0].resources.sort((a, b) =>
  //     a.title > b.title ? 1 : a.title < b.title ? -1 : 0
  //   );
  //   setSources([...sortedItems]);
  //   setSort(!sort);
  //   console.log("sources", sources);
  //   console.log("sort", sort);
  // };

  const { items, loading, error } = useFetch();
  const message = error
    ? "Parece que ha habido un error!"
    : "Buscando talleres...";

  return (
    <>
      <SectionHeader heading="Talleres" />
      {loading ? <Dialog message={message} /> : <Items items={items} />}
    </>
  );
}
