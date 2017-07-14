import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function brownbagReducer( state=initialState.brownbag_next_presenter, action) {
  switch (action.type) {
    default:
      return state;  
  }
}

export function previousCandidatesReducer(state=initialState.previous_brownbag_list, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export function skippedCandidatesReducer(state=initialState.skipped_brown_bag, action) {
  switch (action.type) {
    default:
      return state;
  }
}
