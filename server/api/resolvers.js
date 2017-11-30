import fetch from 'node-fetch'

import { getUser, getUsers } from './resource/FirebaseDB'
import { database } from '../index.js'


const resolveFunctions = {
  Query: {
    items() {
      return database.getItems();
    },
    item(root, { id }) {
      return database.getItem(id)
    },
    users(){
      return getUsers()
    },
    user(root, { id }, context) {
      return getUser(id)
    },
    tags(root, { id }){
      return database.getTags();
    } 
  },
  Item: {
    itemowner(item, args, context){
      if (!item.itemowner) return null
      return getUser(item.itemowner)
    },
    borrower(item, args, context){
      if (!item.borrower) return null
      return getUser(item.borrower) 
    },
    tags(item, args){
      return database.getTag(item.id);
    }
  },
  User: {
    owneditems(user, args, context){
      if (!user.id) return null
      return database.getUserOwnedItems(user.id)
    },
    borroweditems(user, args, context){
      if (!user.id) return null
      return database.getUserBorrowedItems(user.id)
    }
  },
  Mutation: {
    addItem(root, {title, description, imageurl, tags, itemowner}) {
      return database.createNewItem(title, description, imageurl, tags, itemowner)
    }
  }
}

export default resolveFunctions