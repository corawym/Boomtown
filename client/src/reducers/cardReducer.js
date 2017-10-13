const initialState = {
  users: [],
  errorMsg: {},
  isLoading: false,
  filteredItems: {}
}

// helper
const mergeUsersItems = (users, items) => {
  return users.map(users => {
    return {
      ...users,
      items: users.filter(item => item.itemOwner === users.id)
    }
  })
}

export default (state = initialState, action) => {
  switch(action.type){
    
    case 'GET_CARD_ITEMS_BEGIN':
    case 'GET_USERS_BEGIN':
      return {
        ...state,
        isLoading: true
      }
    case 'GET_USERS_SUCCESS':
    return { 
      ...state
    }
    case 'GET_CARD_ITEMS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        users: mergeUsersItems(action.users, action.items)
      }
    case 'GET_USERS_ERROR':
    case 'GET_CARD_ITEMS_ERROR':
      return {
        ...state,
        isLoading: false,
        errorMsg: action.error
      }
    default:
      return state
  }
}