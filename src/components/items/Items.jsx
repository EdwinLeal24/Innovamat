import { itemTitle } from "./Items.module.css";
import GridCards from "./GridCards";

export default function Items({ items }) {
  const sectionsItems = items.map((item) => {
    const { sectionName, resources } = item;

    return (
      <div key={sectionName}>
        <div className={itemTitle}>
          <h3>{sectionName}</h3>
          <button>Ordenar A-Z</button>
        </div>
        <GridCards resources={resources} />
      </div>
    );
  });

  return <div>{sectionsItems}</div>;
}
