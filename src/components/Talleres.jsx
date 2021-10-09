import Items from "./Items";
import { useFetch } from "../hooks/useFetch";
import SectionHeader from "./SectionHeader";
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
  const talleres = useFetch();

  return (
    <>
      <SectionHeader heading="Talleres" />
      <Items items={talleres} />
    </>
  );
}
