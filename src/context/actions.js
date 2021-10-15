import { ACTION_TYPES } from "./types";

export const actions = {
  getListTalleresStart: () => ({
    type: ACTION_TYPES.GET_LIST_TALLERES_START,
  }),
  getListTalleresFinish: (talleres) => ({
    type: ACTION_TYPES.GET_LIST_TALLERES_FINISH,
    payload: talleres,
  }),
  getListTalleresFailed: (error) => ({
    type: ACTION_TYPES.GET_LIST_TALLERES_FAILED,
    payload: error,
  }),

  getListRinconesStart: () => ({
    type: ACTION_TYPES.GET_LIST_RINCONES_START,
  }),
  getListRinconesFinish: (rincones) => ({
    type: ACTION_TYPES.GET_LIST_RINCONES_FINISH,
    payload: rincones,
  }),

  getListRinconesFailed: (error) => ({
    type: ACTION_TYPES.GET_LIST_RINCONES_FAILED,
    payload: error,
  }),

  getResourceStart: () => ({
    type: ACTION_TYPES.GET_RESOURCE_START,
  }),

  getResourceFailed: (error) => ({
    type: ACTION_TYPES.GET_RESOURCE_FAILED,
    payload: error,
  }),

  getResourceFinish: (resource) => ({
    type: ACTION_TYPES.GET_RESOURCE_FINISH,
    payload: resource,
  }),
};
