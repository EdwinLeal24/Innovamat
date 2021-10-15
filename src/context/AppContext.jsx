import React, { createContext, useEffect, useReducer } from "react";
import {
  getAllRincones,
  getAllTalleres,
  getResourceById,
} from "../services/service";
import { actions } from "./actions";
import { appReducer, initialState } from "./appReducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    dispatch(actions.getListRinconesStart());
    dispatch(actions.getListTalleresStart());

    const [talleresError, talleres] = await getAllTalleres();
    const [rinconesError, rincones] = await getAllRincones();
    if (talleresError) {
      dispatch(
        actions.getListTalleresFailed(
          "Ha ocurrido un error al tratar de buscar los talleres"
        )
      );
    } else {
      dispatch(actions.getListTalleresFinish(talleres));
    }

    if (rinconesError) {
      dispatch(
        actions.getListRinconesFailed(
          "Ha ocurrido un error al tratar de buscar los rincones"
        )
      );
    } else {
      dispatch(actions.getListRinconesFinish(rincones));
    }
  };

  const getSource = async (id) => {
    dispatch(actions.getResourceStart());

    const [ResourceError, resource] = await getResourceById(id);
    if (ResourceError) {
      dispatch(
        actions.getResourceFailed(
          "Ha ocurrido un error al tratar de buscar el recurso"
        )
      );
    } else {
      dispatch(actions.getResourceFinish(resource));
    }
  };

  return (
    <AppContext.Provider value={{ ...state, getSource }}>
      {children}
    </AppContext.Provider>
  );
};
