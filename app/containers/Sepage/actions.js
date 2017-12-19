/*
 *
 * Sepage actions
 *
 */

import {
  CHANGE_SEARCHBOX,
  GET_GENRE_PREDICTION_ERROR,
  GET_GENRE_PREDICTION_REQUESTED,
  GET_GENRE_PREDICTION_SUCCESS,
} from './constants';

export function changeSearchBox(text) {
  return {
    type: CHANGE_SEARCHBOX,
    payload: { text },
  };
}
export function getPredictGenre() {
  return {
    type: GET_GENRE_PREDICTION_REQUESTED,
  };
}

export function receivePredictGenreSuccess(payload) {
  return {
    type: GET_GENRE_PREDICTION_SUCCESS,
    payload,
  };
}

export function receivePredictGenreError(error) {
  return {
    type: GET_GENRE_PREDICTION_ERROR,
    payload: { error },
  };
}
