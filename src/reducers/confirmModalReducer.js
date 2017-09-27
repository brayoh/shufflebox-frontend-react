import * as types from '../actions/actionTypes';
import initialState from './initialState';
import modalTypes from '../enums/modalTypes';

export function confirmModalReducer( state=initialState.modal, action) {
  switch (action.type) {
    case types.OPEN_REMOVE_USER_CONFIRM_MODAL:
      return {
        ...state,
        modal: modalTypes.REMOVE_USER
      };

    case types.DISMISS_REMOVE_USER_CONFIRM_MODAL:
      return {
        ...state,
        modal: modalTypes.NONE

      };
  
    default:
      return state;  
  }
}
