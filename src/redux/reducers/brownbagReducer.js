import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function brownbagReducer(state=initialState.brownbag_next_presenter, action) {
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

export function ongoingCandidatesReducer(state=initialState.ongoing_brownbag_list, action) {
  switch (action.type) {
    case "RECEIVE_UNPRESENTED_USERS_SUCCESS":
      return action.user;

    default:
      return state;

  }
}

export function nextBrownbagReducer(state=initialState.brownbag_next_presenter, action) {
  switch (action.type) {
    case "BROWNBAG_NEXT_PRESENTER_SUCCESS":
      return action.presenter;

    default:
    return state;
  }
}
