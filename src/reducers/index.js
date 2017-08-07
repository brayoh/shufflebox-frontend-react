import {combineReducers} from 'redux';
import {
  brownbagReducer, 
  previousCandidatesReducer, 
  skippedCandidatesReducer,
  ongoingCandidatesReducer
} from './brownbagReducer';
import {
  confirmModalReducer
} from './confirmModalReducer';

const rootReducer = combineReducers({
  brownbagReducer,
  previousCandidatesReducer,
  skippedCandidatesReducer,
  ongoingCandidatesReducer,
  confirmModalReducer
});

export default rootReducer;
