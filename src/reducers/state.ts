import { IState } from "types";
import {
  SET_DATA,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from "../constants";

const initialState: IState = {
  data: [],
  favourites: []
};

const reducer = (state = initialState, actions: any): any => {
  switch (actions.type) {
    case SET_DATA:
      return {
        ...state,
        data: actions.payload
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, actions.payload]
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter((id) => id !== actions.payload)
      };
    default:
      return state;
  }
};

export default reducer;
