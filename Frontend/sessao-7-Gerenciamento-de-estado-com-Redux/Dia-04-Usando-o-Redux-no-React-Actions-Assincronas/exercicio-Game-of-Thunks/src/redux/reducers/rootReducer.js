import { combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  gameReducer: reducer,
});

export default rootReducer;
