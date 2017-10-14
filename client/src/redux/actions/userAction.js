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
export const getUsers = (dispatch) => {
  dispatch(getUsersBegin())
  return fetch(`${mainURL}/users`)
    .then(resp => {
      dispatch(getUsersSuccess()) 
      return resp.json()
    }) 
    .catch(err => { dispatch(getUsersError(err)) }) // when promise is failed
}
