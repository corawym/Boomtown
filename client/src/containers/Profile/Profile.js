import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { getCardItems } from '../../redux/actions'

import { UserInfo, UserItems } from './index'
import { ButtonAddItem } from '../../components/common'

import './styles.css'

class Profile extends Component {

  componentDidMount(){
    this.props.dispatch(getCardItems());
  }

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

Profile.propTypes = {
  users: PropTypes.object,
  items: PropTypes.array.isRequired,
  itemsBorrowed: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(Profile)