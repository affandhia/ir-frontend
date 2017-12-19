/*
 *
 * Sepage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SEARCHBOX,
  GET_GENRE_PREDICTION_REQUESTED,
  GET_GENRE_PREDICTION_ERROR,
  GET_GENRE_PREDICTION_SUCCESS,
} from './constants';

const initialState = fromJS({
  movies: [],
  text: '',
  error: '',
  loading: '',
  prediction: null,
});

function sepageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GENRE_PREDICTION_REQUESTED:
      return state.merge({
        loadingPredict: 'Meminta prediksi genre...',
        prediction: null,
      });
    case GET_GENRE_PREDICTION_SUCCESS:
      return state.merge({
        loadingPredict: '',
        error: '',
        prediction: action.payload.predicted_genre,
        movies: action.payload.recommended_movies,
      });
    case GET_GENRE_PREDICTION_ERROR:
      return state.merge({
        loadingPredict: '',
        error: action.payload.error,
        prediction: null,
      });
    case CHANGE_SEARCHBOX:
      return state.set('text', action.payload.text);
    default:
      return state;
  }
}

export default sepageReducer;
