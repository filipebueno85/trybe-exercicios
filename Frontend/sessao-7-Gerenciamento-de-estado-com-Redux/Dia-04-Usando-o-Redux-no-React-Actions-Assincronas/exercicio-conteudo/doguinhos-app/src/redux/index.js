// src/redux/index.js
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import dogReducer from './reducers/dogReducer';

const store = createStore(
  dogReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
