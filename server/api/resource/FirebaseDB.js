import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCeCPwIZYs_4omqZcolYjsRzJ7F5Z4wV58",
    authDomain: "boomtown-6d207.firebaseapp.com",
    databaseURL: "https://boomtown-6d207.firebaseio.com",
    projectId: "boomtown-6d207",
    storageBucket: "boomtown-6d207.appspot.com",
    messagingSenderId: "816574523629"
  };
firebase.initializeApp(config);

const firebaseDB = firebase.database()

export const getUser = id =>{
  return new Promise((resolve, reject)=>{
    firebaseDB.ref(`/users/${id}`)
              .once('value')
              .then((snapshot)=>{
                resolve({
                  ...snapshot.val(),
                  id
                })
              })
              .catch(error => {
                console.log(error);
              })

  });
};

export const getUsers = () =>{
  return new Promise((resolve, reject)=>{
    firebaseDB.ref(`/users`)
              .once('value')
              .then((snapshot)=>{
                console.log('test',snapshot.val());
              })
              .catch(error => {
                console.log(error);
              })
  })
};