import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import gallery from './reducers/gallery';
import thunk from 'redux-thunk';

const store = createStore(gallery, applyMiddleware(thunk));
export default store;
