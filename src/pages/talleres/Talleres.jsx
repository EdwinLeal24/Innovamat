import Items from "../../components/items/Items";
import SectionHeader from "../../components/header/SectionHeader";
import Dialog from "../../components/dialog/Dialog";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Talleres() {
  const { listTalleres, isLoading, errorTalleres } = useContext(AppContext);

  const message = isLoading && "Buscando talleres...";

  const isMobileWindow = useWindowWidth();

  if (errorTalleres) return <Dialog message={errorTalleres} />;

  return (
    <>
      {isMobileWindow && <SectionHeader heading="Rincones" />}
      <main>
        {isMobileWindow ? (
          <h2>Talleres</h2>
        ) : (
          <SectionHeader heading="Talleres" />
        )}
        {isLoading ? (
          <Dialog message={message} />
        ) : (
          <Items items={listTalleres} />
        )}
      </main>
    </>
  );
}
