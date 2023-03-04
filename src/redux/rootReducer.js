import { combineReducers } from 'redux';
import counterReducer from './counter/counterReducer';
import dynamicCounterReducer from './dynamicCounter/dynamicCounterReducer';
import hookCounterReducer from './hookCounter/hookCounterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
  hookCounter: hookCounterReducer,
});

export default rootReducer;
