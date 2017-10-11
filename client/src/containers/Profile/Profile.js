import React, { Component } from 'react'

import { UserInfo, UserItems } from './index'

import './styles.css'

class Profile extends Component {
  state = { cardData:[], userSelect:[], itemsShared:0, itemsBorrowed:0 }

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
      }).filter((item) => {
        if( this.props.match.params.id === item.itemOwner ){
          return items
        }
      })
      const userSelect = users.filter((user)=>{
        if ( this.props.match.params.id === user.id){
          return user
        }
      })
      const itemsBorrowed = items.filter((item)=>{
        if( this.props.match.params.id === item.borrower ){
          return items
        }
      }).length;
      this.setState({cardData, userSelect, itemsShared:cardData.length, itemsBorrowed})

    })
  }
  
  render() {
    return (
      <div>
        <UserInfo userSelect={this.state.userSelect} itemsShared={this.state.itemsShared} itemsBorrowed={this.state.itemsBorrowed}/>
        <UserItems cardData={this.state.cardData}/>
      </div>
    )
  }
}

export default Profile