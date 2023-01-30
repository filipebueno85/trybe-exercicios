// Ops! A aplicação está quebrada!!
// Implemente a Store nesse arquivo e o Provider no arquivo ./src/index.js
// para a aplicação voltar a funcionar!

import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore } from 'redux';
import cosmoReducer from './reducers/cosmoReducer';

const store = createStore(cosmoReducer, composeWithDevTools());

export default store;
