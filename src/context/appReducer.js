import { ACTION_TYPES } from "./types";

export const initialState = {
  listTalleres: [],
  errorTalleres: null,

  listRincones: [],
  errorRincones: null,

  resource: "",
  errorResource: null,

  isLoading: false,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case ACTION_TYPES.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case ACTION_TYPES.GET_LIST_RINCONES_START:
    case ACTION_TYPES.GET_LIST_TALLERES_START:
    case ACTION_TYPES.GET_RESOURCE_START:
      return {
        ...state,
        isLoading: true,
      };

    case ACTION_TYPES.GET_LIST_RINCONES_FINISH:
      return {
        ...state,
        isLoading: false,
        listRincones: action.payload,
      };

    case ACTION_TYPES.GET_LIST_TALLERES_FAILED:
      return {
        ...state,
        errorTalleres: action.payload,
        isLoading: false,
      };

    case ACTION_TYPES.GET_LIST_RINCONES_FAILED:
      return {
        ...state,
        errorRincones: action.payload,
        isLoading: false,
      };

    case ACTION_TYPES.GET_LIST_TALLERES_FINISH:
      return {
        ...state,
        listTalleres: action.payload,
      };

    case ACTION_TYPES.GET_RESOURCE_FAILED:
      return {
        ...state,
        errorResource: action.payload,
        isLoading: false,
      };

    case ACTION_TYPES.GET_RESOURCE_FINISH:
      return {
        ...state,
        resource: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
