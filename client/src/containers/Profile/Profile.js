import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getCardItems } from '../../redux/actions'

import { UserInfo, UserItems } from './index'
import { ButtonAddItem } from '../../components/common'

import './styles.css'

class Profile extends Component {
  // state = { cardData:[], userSelect:[], itemsShared:0, itemsBorrowed:0 }

  componentDidMount(){
    this.props.dispatch(getCardItems());
    // this.fetchData();
  }

  // fetchData = () => {
    // const urls = [ 'http://localhost:3001/items', 'http://localhost:3001/users' ]
    // Promise.all(urls.map(url =>
    //   fetch(url).then(resp => resp.json())
    // )).then(data => {
    //   const [items, users] = data
    //   const cardData = items.map(item => {
    //     return {
    //       "id": item.id,
    //       "title": item.title,
    //       "description": item.description,
    //       "imageUrl": item.imageUrl,
    //       "tags": item.tags,
    //       "itemOwner": item.itemOwner,
    //       "createdOn": item.createdOn,
    //       "available": item.available,
    //       "borrower": item.borrower,
    //       "user": users.find(user => item.itemOwner === user.id)
    //     }
    //   }).filter((item) => {
    //     if( this.props.match.params.id === item.itemOwner ){
    //       return items
    //     }
    //   })
    //   const userSelect = users.filter((user)=>{
    //     if ( this.props.match.params.id === user.id){
    //       return user
    //     }
    //   })
    //   const itemsBorrowed = items.filter((item)=>{
    //     if( this.props.match.params.id === item.borrower ){
    //       return items
    //     }
    //   }).length;
    //   this.setState({cardData, userSelect, itemsShared:cardData.length, itemsBorrowed})

    // })
  // }

  
  
  render() {
    return (
      <div className="profileContainer">

        {/* check the return object */}
        {this.props.users 
          ? <UserInfo userSelect={this.props.users} itemsShared={this.props.items.length} itemsBorrowed={this.props.itemsBorrowed}/> 
          : false}

        <UserItems cardData={this.props.items}/> 
        
        <div className="buttonAddContainer">
            <ButtonAddItem />
        </div> 
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  return {
    users: store.users.users.find(user =>{
      if(ownProps.match.params.id === user.id){
        return user
      }
    }),
    items: store.users.items.filter(item =>{
      if(ownProps.match.params.id === item.itemowner){
        return item
      }
    }),
    itemsBorrowed: store.users.items.filter(item =>{
      if(ownProps.match.params.id === item.borrower){
        return item
      }
    }).length
  }
}

export default connect(mapStateToProps)(Profile)