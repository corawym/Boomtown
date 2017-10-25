import DataLoader from 'dataloader';
import { getItem, getUser, getUserOwnedItems, getUserBorrowedItems } from './resource/jsonHelper';

export default function() {
  return {
    UserOwnedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getUserOwnedItems(id))
    ))),
    User: new DataLoader(ids => (
      Promise.all(ids.map(id => getUser(id))
    ))),
    Item: new DataLoader(ids => (
      Promise.all(ids.map(id => getItem(id))
    ))),
    UserBorrowedItems: new DataLoader(ids => (
      Promise.all(ids.map(id => getUserBorrowedItems(id))
    )))
  }
};