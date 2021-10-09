import { Link } from "react-router-dom";
import { appHeader, navButton } from "./Header.module.css";

export default function Header() {
  return (
    <header className={appHeader}>
      <nav>
        <button className={navButton}>
          <Link to="/">Talleres</Link>
        </button>
        <button className={navButton}>
          <Link to="/rincones">Rincones</Link>
        </button>
      </nav>
    </header>
  );
}
