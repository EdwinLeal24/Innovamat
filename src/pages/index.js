import { lazy } from "react";

const Detail = lazy(() => import("./Detail"));
const Talleres = lazy(() => import("./Talleres"));
const Rincones = lazy(() => import("./Rincones"));
const Favorites = lazy(() => import("./Favorites"));

export default { Detail, Talleres, Rincones, Favorites };
