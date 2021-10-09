import { sectionTitle, favorites, icon } from "./SectionHeader.module.css";
import { FaEye } from "react-icons/fa";

export default function SectionHeader({ heading }) {
  return (
    <>
      <section className={sectionTitle}>
        <h1>{heading}</h1>
        <p className={favorites}>
          <span className={icon}>
            <FaEye />
          </span>
          Ver favoritos
        </p>
      </section>
    </>
  );
}
