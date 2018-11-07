import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'; 

/* eslint-disable no-underscore-dangle */
const configureStore = () => {
  return createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
};
/* eslint-enable */

export default configureStore;