import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import client from '../config/apolloClient';

import rootReducer from './reducers';

const configStore = ( initialState ) => {
  const middleware = process.env.NODE_ENV !== 'production' ? [thunk, client.middleware(), createLogger()] : [ thunk, client.middleware() ]
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  const store = createStoreWithMiddleware(rootReducer, initialState) 
  return store
}

export default configStore;



