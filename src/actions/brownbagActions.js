import fetch from 'isomorphic-fetch';
import * as actions from './actionTypes';
import fetchUrl from '../config';

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
  return fetchUnpresentedUsers(user);
}

export function fetchUnpresentedUsers(users) {
  return dispatch => {
    return fetch(`${fetchUrl}/api/brownbags/not_presented/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.TOKEN
      }
    })
    .then(response => response.json())
    .then(response => dispatch(receiveUnprensentedUsersSuccess(response)));
  };
}

export function requestNextPresenters(presenter) {
  return {
    type: actions.BROWNBAG_NEXT_PRESENTER,
    presenter
  };
}

export function receiveNextPresenterSUccess(presenter) {
  return {
    type: actions.BROWNBAG_NEXT_PRESENTER_SUCCESS,
    presenter
  };
}

export function getNextPresenter(presenter) {
  return fetchNextPresenter(presenter);
}

export function fetchNextPresenter(presenter) {
  return dispatch => {
    return fetch(`${fetchUrl}/api/brownbags/next`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.TOKEN
      }
    })
    .then(response => response.json())
    .then(response => dispatch(receiveNextPresenterSUccess(response)));
  };
}
