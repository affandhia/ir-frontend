import { createSelector } from 'reselect';

/**
 * Direct selector to the sepage state domain
 */
export const selectSepageDomain = state => state.get('sepage');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Sepage
 */

export const makeSelectSepage = () =>
  createSelector(selectSepageDomain, (substate) => substate.toJS());
export const makeSelectText = () =>
  createSelector(makeSelectSepage(), (substate) => substate.text);

export default makeSelectSepage;
