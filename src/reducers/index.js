import {combineReducers} from 'redux';
import {
  brownbagReducer,
  previousCandidatesReducer,
  nextBrownbagReducer,
  ongoingCandidatesReducer
} from './brownbagReducer';
import {
  confirmModalReducer
} from './confirmModalReducer';

const rootReducer = combineReducers({
  brownbagReducer,
  previousCandidatesReducer,
  nextBrownbagReducer,
  ongoingCandidatesReducer,
  confirmModalReducer
});

export default rootReducer;
