// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeSelectText } from './selectors';
import { GET_GENRE_PREDICTION_REQUESTED } from './constants';
import {
  receivePredictGenreError,
  receivePredictGenreSuccess,
} from './actions';
import request from 'utils/request';

export function* postPredictGenre(action) {
  const requestURL = 'http://localhost:8000/api/v1/predict_genre_by_plot/';
  const text = yield select(makeSelectText());
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plot: text,
      }),
    });
    if (response.data.status === 'error') {
      yield put(receivePredictGenreError(response.data.message));
    } else {
      yield put(receivePredictGenreSuccess(response.data));
    }
  } catch (err) {
    yield put(receivePredictGenreError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [takeLatest(GET_GENRE_PREDICTION_REQUESTED, postPredictGenre)];
}
