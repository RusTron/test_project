import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as reducers from './export-reducers.js';
import { loginReducer } from './export-reducers.js';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  visible: loginReducer,
	...reducers
});

export { createRootReducer };
