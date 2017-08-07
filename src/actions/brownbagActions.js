import * as actions from './actionTypes';
import * as userApi from '../api/userApi.js';

export function getBrownbagNextPresenter(nextPresenter){
  // The nextPresenter is an object with id, name, date, email, avatar and status
  return {
    type: actions.BROWNBAG_NEXT_INLINE,
    nextPresenter: nextPresenter
  };
}

export function requestUnpresentedUsers(user) {
  return {
    type: actions.REQUEST_UNPRESENTED_USERS,
    user
  };
}

export function receiveUnprensentedUsersSuccess(user) {
  return {
    type: actions.RECEIVE_UNPRESENTED_USERS_SUCCESS,
    user
  };
}

export function getUnpresentedUsers(user) {
  return userApi.fetchUnpresentedUsers(user);
}

