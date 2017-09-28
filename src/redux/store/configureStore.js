import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(apiMiddleware, thunk, reduxImmutableStateInvariant(), logger)
  );
}
