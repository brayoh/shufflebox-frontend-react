import {combineReducers} from 'redux';
import {
  brownbagReducer,
  previousCandidatesReducer,
  nextBrownbagReducer,
  ongoingCandidatesReducer
} from './brownbagReducer';
import {
  modalReducer
} from './modalReducer';

const rootReducer = combineReducers({
  brownbagReducer,
  previousCandidatesReducer,
  nextBrownbagReducer,
  ongoingCandidatesReducer,
  modalReducer
});

export default rootReducer;
