import { combineReducers } from 'redux'
import client from '../config/apolloClient';
import filterReducer from './modules/filterReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  apollo: client.reducer(),
  form: formReducer,
  filter:filterReducer
});
