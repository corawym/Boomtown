import React, { Component } from 'react'

import { UserInfo, UserItems } from './index'

import './styles.css'

class Profile extends Component {
  state = { cardData:[] }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = () => {
    const urls = [ 'http://localhost:3001/items', 'http://localhost:3001/users' ]
    Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    )).then(data => {
      const [items, users] = data
      const cardData = items.map(item => {
        return {
          "id": item.id,
          "title": item.title,
          "description": item.description,
          "imageUrl": item.imageUrl,
          "tags": item.tags,
          "itemOwner": item.itemOwner,
          "createdOn": item.createdOn,
          "available": item.available,
          "borrower": item.borrower,
          "user": users.find(user => item.itemOwner === user.id)
        }
      })
      this.setState({cardData})
    })
  }
  
  render() {
    return (
      <div>
        <UserInfo cardData={this.state.cardData}/>
        <UserItems cardData={this.state.cardData}/>
      </div>
    )
  }
}

export default Profile