const initialState = {
  users: [],
  items:[],
  errorMsg: {},
  isLoading: false,
  filteredItems: {}
}

// helper
const mergeUsersItems = (users, items) => {
  return users.map(user => {
    return {
      ...user,
      items: items.filter(item => item.itemOwner === user.id)
    }
  })
}

const mergeItemsUsers = (items, users) => {
  return items.map(item => {
    return {
      ...item,
      user: users.find(user => item.itemOwner === user.id)
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
        users: mergeUsersItems(action.users, action.items),
        items: mergeItemsUsers(action.items, action.users)
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