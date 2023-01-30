// ./src/redux/index.js
import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';
// import { createStore } from 'redux';

import counterReducer from './reducers/counterReducer';

// const INITIAL_STATE = { count: 0 };

// const reducer = (state = INITIAL_STATE, action) => state;

// const store = createStore(counterReducer, composeWithDevTools());

const store = createStore(counterReducer, composeWithDevTools());

export default store;
