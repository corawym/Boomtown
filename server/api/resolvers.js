import fetch from 'node-fetch';

const mainURL = 'http://localhost:3001'

const resolveFunctions = {
  Query: {
    items() {
      return fetch(`${mainURL}/items`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    },
    item(root, { id }) {
      return fetch(`${mainURL}/items/${id}`)
        .then(response => response.json())
        .catch(errors => console.log(errors));
    },
    users(){
      return fetch(`${mainURL}/users`)
      .then(response => response.json())
      .catch(errors => console.log(errors));
    },
    user(root, { id }) {
      return fetch(`${mainURL}/users/${id}`)
      .then(response => response.json())
      .catch(errors => console.log(errors));
    } 
  },
  Item: {
    itemowner(item){
      if (!item.itemowner) return null;
      return fetch(`${mainURL}/users/${item.itemowner}`)
      .then(response => response.json())
      .catch(errors => console.log(errors));
    },
    borrower(item){
      if (!item.borrower) return null;
      return fetch(`${mainURL}/users/${item.borrower}`)
      .then(response => response.json())
      .catch(errors => console.log(errors));
    }
  },
  User: {
    async owneditems(user){
      const response = await fetch(`${mainURL}/items/?item.itemowner=${user.id}`)
      const items = await response.json()
      return items
    },
    async borroweditems(user){
      const response = await fetch(`${mainURL}/items/?item.borrower=${user.id}`)
      const items = await response.json()
      return items
    }
  },
  Mutation: {
    addItem(root, args) {
      const tzOffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
      const localTime = `${(new Date(Date.now() - tzOffset)).toISOString().slice(0, -1).replace('T', ' ')}-07`;
      const newItem = {
        title: args.title,
        description: args.description,
        imageurl: args.imageurl,
        tags: args.tags,
        itemowner: args.itemowner,
        created: localTime,
        available: true,
        borrower: null
      }
      return fetch(`${mainURL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
      })
      .then(response => response.json())
      .catch(errors => console.log(errors))
    }
  }
}

export default resolveFunctions