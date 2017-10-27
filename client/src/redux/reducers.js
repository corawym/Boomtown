import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import client from '../config/apolloClient';
import filterReducer from './modules/filter';

export default combineReducers({
  apollo: client.reducer(),
  form: formReducer,
  filter: filterReducer
});
