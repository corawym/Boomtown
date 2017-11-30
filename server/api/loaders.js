import DataLoader from 'dataloader';
// import { getItem, getUser, getUserOwnedItems, getUserBorrowedItems } from './resource/jsonHelper';
import { getUser } from './resource/FirebaseDB';
import { database } from '../index.js';

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => database.getUserOwnedItems(id))
    ))),
    User: new DataLoader(ids => (
      Promise.all(ids.map(id => getUser(id))
    ))),
    Item: new DataLoader(ids => (
      Promise.all(ids.map(id => database.getItem(id))
    ))),
    UserBorrowedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => database.getUserBorrowedItems(id))
    )))
  }
};