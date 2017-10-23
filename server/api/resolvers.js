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
    item(root, { id }, context) {
      // return getItem(id)
      return context.loaders.Item.load(id)
    },
    users(){
      return getUsers()
    },
    user(root, { id }, context) {
      // return getUser(id)
      return context.loaders.User.load(id)
    } 
  },
  Item: {
    itemowner(item, args, context){
      if (!item.itemowner) return null
      return context.loaders.User.load(item.itemowner)
      // return getUser(item.itemowner)
    },
    borrower(item, args, context){
      if (!item.borrower) return null
      // return getUser(item.borrower)
      return context.loaders.User.load(item.borrower)
    }
  },
  User: {
    owneditems(user, args, context){
      if (!user.id) return null
      return context.loaders.UserOwnedItems.load(user.id)
      // return getUserOwnedItems(user.id)
    },
    borroweditems(user, args, context){
      if (!user.id) return null
      // return getUserBorrowedItems(user.id)
      return context.loaders.UserBorrowedItems.load(user.id)
    }
  },
  Mutation: {
    addItem(root, {title, description, imageurl, tags, itemowner}) {
      return createNewItem(title, description, imageurl, tags, itemowner)
    }
  }
}

export default resolveFunctions