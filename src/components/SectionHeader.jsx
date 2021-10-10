import { sectionTitle, favorites, icon } from "./SectionHeader.module.css";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FAVORITES_PATH } from "../routing/paths";

export default function SectionHeader({ heading }) {
  return (
    <>
      <section className={sectionTitle}>
        <h1>{heading}</h1>
        <Link to={FAVORITES_PATH}>
          <button className={favorites}>
            <span className={icon}>
              <FaEye />
            </span>
            Ver favoritos
          </button>
        </Link>
      </section>
    </>
  );
}
