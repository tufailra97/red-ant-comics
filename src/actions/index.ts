import { Dispatch } from "redux";
import { IComic } from "types";
import {
  SET_DATA,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from "../constants";

export const setData = (data: Array<IComic>) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: data
  });
};

export const addToFavourites = (id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_TO_FAVOURITES,
    payload: id
  });
};

export const removeFromFavourites = (id: number) => (dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_FROM_FAVOURITES,
    payload: id
  });
};
