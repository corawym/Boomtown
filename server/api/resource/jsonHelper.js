import fetch from 'node-fetch'

const jsonServer = 'http://localhost:3001'
// jsonServer

export const getItems = () => {
  return fetch(`${jsonServer}/items`)
  .then(response => response.json())
  .catch(errors => console.log(errors));
}

export const getItem = (id) => {
  return fetch(`${jsonServer}/items/${id}`)
  .then(response => response.json())
  .catch(errors => console.log(errors))
}

export const getUsers = () => {
  return fetch(`${jsonServer}/users`)
  .then(response => response.json())
  .catch(errors => console.log(errors))
}

export const getUser = (id) => {
  return fetch(`${jsonServer}/users/${id}`)
  .then(response => response.json())
  .catch(errors => console.log(errors))
}

export const getUserOwnedItems = (id) => {
  return fetch(`${jsonServer}/items/?itemowner=${id}`)
  .then(response => response.json())
  .catch(errors => console.log(errors))
}

export const getUserBorrowedItems = (id) => {
  return fetch(`${jsonServer}/items/?borrower=${id}`)
  .then(response => response.json())
  .catch(errors => console.log(errors))
}

export const createNewItem = (title, description, imageurl, tags, itemowner) => {
  const tzOffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
  const localTime = `${(new Date(Date.now() - tzOffset)).toISOString().slice(0, -1).replace('T', ' ')}-07`
  
  const newItem = {
    title,
    description,
    imageurl,
    tags,
    itemowner,
    created: localTime,
    available: true,
    borrower: null
  }
  return fetch(`${jsonServer}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  })
  .then(response => response.json())
  .catch(errors => console.log(errors))
}
