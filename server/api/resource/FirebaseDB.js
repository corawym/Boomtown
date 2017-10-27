import * as firebase from 'firebase'

// export default function (app) {
//   firebase.initializeApp({
    
//   })
// }
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