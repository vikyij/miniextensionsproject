import { combineReducers } from 'redux';
import { getRecordsReducer } from './recordReducer';

const rootReducer = combineReducers({
  records: getRecordsReducer
});

export default rootReducer;
