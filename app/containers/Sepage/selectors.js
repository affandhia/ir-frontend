import { createSelector } from 'reselect';

/**
 * Direct selector to the sepage state domain
 */
const selectSepageDomain = (state) => state.get('sepage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Sepage
 */

const makeSelectSepage = () => createSelector(
  selectSepageDomain,
  (substate) => substate.toJS()
);

export default makeSelectSepage;
export {
  selectSepageDomain,
};
