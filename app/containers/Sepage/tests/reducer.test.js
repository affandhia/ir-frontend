
import { fromJS } from 'immutable';
import sepageReducer from '../reducer';

describe('sepageReducer', () => {
  it('returns the initial state', () => {
    expect(sepageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
