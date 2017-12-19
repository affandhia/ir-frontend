/*
 *
 * Sepage reducer
 *
 */

import { fromJS } from 'immutable';
import { CHANGE_SEARCHBOX } from './constants';

const initialState = fromJS({
  movies: [],
  text: '',
  error: '',
  loading: '',
  prediction: null,
});

function sepageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCHBOX:
      return state.set('text', action.payload.text);
    default:
      return state;
  }
}

export default sepageReducer;
