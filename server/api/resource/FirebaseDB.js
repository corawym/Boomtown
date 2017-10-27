import * as firebase from 'firebase'

const firebaseDB = firebase.database()

export const getUser = id => {
  return new Promise((resolve, reject) => {
    firebaseDB
    .ref("/users/${id}")
    .once("value")
    .then((snapshot) => {
      resolve({
        ...snapshot.val(),
        id
      })
    })
    .catch(error => console.log(error))
  })
}