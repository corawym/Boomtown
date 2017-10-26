import { combineReducers } from 'redux'
import cardReducer from './cardReducer'
import client from '../../config/apolloClient';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  apollo: client.reducer(),
  users: cardReducer,
  form: formReducer
});
