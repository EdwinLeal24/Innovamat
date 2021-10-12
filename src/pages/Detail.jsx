import { useFetch } from "../hooks/useFetch";
import { useHistory, useLocation } from "react-router";
import { detailContent, detailHeader, arrowBack } from "./Detail.module.css";
import { FaChevronLeft } from "react-icons/fa";
import Dialog from "../components/Dialog";
import { useWindowWidth } from "../hooks/useWindowWidth";

export default function Deatil() {
  const location = useLocation();
  const keyword = location.pathname;
  const history = useHistory();

  const { items, loading, error } = useFetch(keyword);
  const { title, description, videoId } = items;

  const message = error ? "Parece que ha habido un error!" : "Cargando...";

  const video = `https://www.youtube.com/embed/${videoId}`;

  const isMobileWindow = useWindowWidth();
  return (
    <>
      {loading ? (
        <Dialog message={message} />
      ) : (
        <div>
          <header className={detailHeader}>
            <button onClick={() => history.goBack()}>
              <FaChevronLeft className={arrowBack} />
            </button>
            {isMobileWindow ? <h4>{title}</h4> : <h2>{title}</h2>}
          </header>

          <main className={detailContent}>
            <div>
              <iframe
                width="560"
                height="315"
                src={video}
                title={title}
                frameBorder="0"
              />
            </div>

            <p>{description}</p>
          </main>
        </div>
      )}
    </>
  );
}
