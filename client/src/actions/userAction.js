import { mainURL } from '../constants'


// action creators
const getUsersBegin = () => {
  return { type: 'GET_USERS_BEGIN' }
}

const getUsersSuccess = () => {
  return { type: 'GET_USERS_SUCCESS'}
}

const getUsersError = (error) => {
  return { type: 'GET_USERS_ERROR', error }
}


// functions
export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersBegin())
    return fetch(`${mainURL}/users`)
      .then(resp => resp.json()) 
      .then(users => { dispatch(getUsersSuccess()) }) // when promise is succeed
      .catch(err => { dispatch(getUsersError(err)) }) // when promise is failed
  }
}
