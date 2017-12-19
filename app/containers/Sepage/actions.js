/*
 *
 * Sepage actions
 *
 */

import { CHANGE_SEARCHBOX } from './constants';

export function changeSearchBox(text) {
  return {
    type: CHANGE_SEARCHBOX,
    payload: { text },
  };
}
