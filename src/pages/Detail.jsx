import { useFetch } from "../hooks/useFetch";
import { useHistory, useLocation } from "react-router";
import { detailContent, detailHeader, arrowBack } from "./Detail.module.css";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Deatil() {
  const location = useLocation();
  const keyword = location.pathname;
  const history = useHistory();

  console.log("history", history);
  const { title, description, videoId } = useFetch(keyword);
  const video = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <header className={detailHeader}>
        <button onClick={() => history.goBack()}>
          <FaChevronLeft className={arrowBack} />
        </button>
        <h2>{title}</h2>
      </header>

      <main className={detailContent}>
        <iframe
          width="560"
          height="315"
          src={video}
          title={title}
          frameBorder="0"
        />
        <p>{description}</p>
      </main>
    </>
  );
}
