import { Link } from "react-router-dom";
import { appHeader, navButton, activeButton } from "./Header.module.css";
import { TALLERES_PATH, RINCONES_PATH } from "../routing/paths";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(true);
  const handleToggle = () => setActive(!active);
  const NORMAL_BUTTON = navButton;
  const ACTIVE_BUTTON = `${navButton} ${activeButton}`;

  return (
    <header className={appHeader}>
      <nav>
        <Link to={TALLERES_PATH}>
          <button
            className={active ? `${ACTIVE_BUTTON}` : `${NORMAL_BUTTON}`}
            onClick={handleToggle}
          >
            Talleres
          </button>
        </Link>
        <Link to={RINCONES_PATH}>
          <button
            className={active ? `${NORMAL_BUTTON}` : `${ACTIVE_BUTTON}`}
            onClick={handleToggle}
          >
            Rincones
          </button>
        </Link>
      </nav>
    </header>
  );
}
