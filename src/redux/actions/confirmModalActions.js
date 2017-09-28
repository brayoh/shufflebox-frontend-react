import * as actions from './actionTypes';

export function showModal(){
  // Modal is an object that contains isShowing (boolean) and message (string )
  return {
    type: actions.OPEN_REMOVE_USER_CONFIRM_MODAL
  };
}

export function hideModal(){
  return {
    type: actions.DISMISS_REMOVE_USER_CONFIRM_MODAL
  };
}
