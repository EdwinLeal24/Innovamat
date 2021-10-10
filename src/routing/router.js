import views from "../pages/index";
import {
  TALLERES_PATH,
  RINCONES_PATH,
  DETAIL_PATH,
  FAVORITES_PATH,
} from "./paths";

// const { Talleres, Rincones, Detail } = views;

export const TALLERES = {
  path: TALLERES_PATH,
  component: views.Talleres,
  isExact: true,
};

export const RINCONES = {
  path: RINCONES_PATH,
  component: views.Rincones,
  isExact: false,
};

export const DETAIL = {
  path: DETAIL_PATH,
  component: views.Detail,
  isExact: false,
};

export const FAVORITES = {
  path: FAVORITES_PATH,
  component: views.Favorites,
  isExact: false,
};

export default [TALLERES, RINCONES, DETAIL, FAVORITES];
