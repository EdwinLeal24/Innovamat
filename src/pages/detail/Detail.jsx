import { useHistory } from "react-router";
import {
  detailContent,
  detailHeader,
  arrowBack,
  mediaResource,
  mediaContainer,
  descriptionResource,
} from "./Detail.module.css";
import { FaChevronLeft } from "react-icons/fa";
import Dialog from "../../components/dialog/Dialog";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Deatil() {
  const { resource, isLoading, errorResource } = useContext(AppContext);

  const history = useHistory();

  const { title, description, videoId } = resource;

  const message = "Cargando recurso...";

  if (errorResource) return <Dialog message={errorResource} />;

  const video = `https://www.youtube.com/embed/${videoId}`;

  const isMobileWindow = useWindowWidth();
  return (
    <>
      {isLoading ? (
        <Dialog message={message} />
      ) : (
        <div>
          <header className={detailHeader}>
            <button onClick={() => history.goBack()}>
              <FaChevronLeft className={arrowBack} />
            </button>
            {isMobileWindow ? <h4>{title}</h4> : <h2>{title}</h2>}
          </header>

          <div className={detailContent}>
            <div className={mediaContainer}>
              <iframe
                className={mediaResource}
                src={video}
                title={title}
                frameBorder="0"
              />
            </div>

            <p className={descriptionResource}>{description}</p>
          </div>
        </div>
      )}
    </>
  );
}
