import { mainURL } from '../constants'
import { getUsers } from './userAction'

// action creators
const getCardItemsBegin = () => {
  return { type: 'GET_CARD_ITEMS_BEGIN' }
}

const getCardItemsSuccess = (items, users) => {
  return { type: 'GET_CARD_ITEMS_SUCCESS', items, users }
}

const getCardItemsError = (error) => {
  return { type: 'GET_CARD_ITEMS_ERROR', error }
}


// functions
export const getCardItems = () => {
  return (dispatch) => {
    dispatch(getCardItemsBegin())

    // fetch data from items endpoint
    return fetch(`${mainURL}/items`)
      // below is when promise is succeed
      .then(resp => resp.json()) 
      .then(items => { 
        return getUsers(dispatch).then(users => {
          dispatch(getCardItemsSuccess(items, users))
        })
      })
      // below is when promise is failed
      .catch(err => { 
        dispatch(getCardItemsError(err))
      })
  }
}