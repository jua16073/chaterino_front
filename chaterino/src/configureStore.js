import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';

import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import mainsaga from './sagas';
const sagaMiddleware = createSagaMiddleware();


export const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);



/* eslint-disable no-underscore-dangle */
const configureStore = () => {
  const store = createStore(
    reducer,
    enhancer
  );
  //sagaMiddleware.run(mainsaga);
  return store;
};
/* eslint-enable */

export default configureStore;