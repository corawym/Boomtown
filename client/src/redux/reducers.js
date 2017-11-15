import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import client from '../config/apolloClient';
import filterReducer from './modules/filter';
import shareReducer from './modules/share';
import loginReducer from './modules/login';

export default combineReducers({
  apollo: client.reducer(),
  form: formReducer,
  filter: filterReducer,
  share: shareReducer,
  login: loginReducer
});


