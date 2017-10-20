import fetch from 'node-fetch'

const mainURL = 'http://localhost:3001'

import { 
  getItems, 
  getItem, 
  getUsers, 
  getUser, 
  getUserOwnedItems, 
  getUserBorrowedItems,
  createNewItem
} from './jsonHelper'

const resolveFunctions = {
  Query: {
    items() {
      return getItems()
    },
    item(root, { id }) {
      return getItem(id)
    },
    users(){
      return getUsers()
    },
    user(root, { id }) {
      return getUser(id)
    } 
  },
  Item: {
    itemowner(item){
      if (!item.itemowner) return null
      return getUser(item.itemowner)
    },
    borrower(item){
      if (!item.borrower) return null
      return getUser(item.borrower)
    }
  },
  User: {
    owneditems(user){
      return getUserOwnedItems(user.id)
    },
    borroweditems(user){
      return getUserBorrowedItems(user.id)
    }
  },
  Mutation: {
    addItem(root, {title, description, imageurl, tags, itemowner}) {
      return createNewItem(title, description, imageurl, tags, itemowner)
    }
  }
}

export default resolveFunctions