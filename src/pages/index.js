import { lazy } from "react";

const Detail = lazy(() => import("./detail/Detail"));
const Talleres = lazy(() => import("./talleres/Talleres"));
const Rincones = lazy(() => import("./rincones/Rincones"));
const Favorites = lazy(() => import("./favorites/Favorites"));
const NotFound = lazy(() => import("./notFound/NotFound"));

export default { Detail, Talleres, Rincones, Favorites, NotFound };
