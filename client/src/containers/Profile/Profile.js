import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { UserInfo, UserItems } from './index'
import { ButtonAddItem } from '../../components/common'

import './styles.css'

class Profile extends Component {

  // componentDidMount(){
  //   this.props.dispatch(getCardItems());
  // }

  render() {
    return (
      <div className="profileContainer">

        {/* check the return object */}
        {!this.props.data.loading
          ? <UserInfo userSelect={this.props.data.user} itemsShared={this.props.data.user.owneditems.length} itemsBorrowed={this.props.data.user.borroweditems.length}/> 
          : false}

        { !this.props.data.loading ? <UserItems cardData={this.props.data.user.owneditems}/> : false }
        
        <div className="buttonAddContainer">
            <ButtonAddItem />
        </div> 

      </div>
    )
  }
}

// const mapStateToProps = (store, ownProps) => {
  
//   return {
//     users: store.users.users.find(user =>{
//       if(ownProps.match.params.id === user.id){
//         return user
//       }
//     }),
//     items: store.users.items.filter(item =>{
//       if(ownProps.match.params.id === item.itemowner){
//         return item
//       }
//     }),
//     itemsBorrowed: store.users.items.filter(item =>{
//       if(ownProps.match.params.id === item.borrower){
//         return item
//       }
//     }).length
//   }
// }


const fetchUser = gql`
  query fetchUser($id: ID!) {
    user(id: $id) {
      id
      fullname
      email
      bio
      owneditems{
        id
        title
        imageurl
        tags{
          id
          title
        }
        description
        itemowner {
          id
          fullname
          email
        }
        created
        borrower{
          id
        }
      }
      borroweditems{
        id
        title
      }
    }
  }
`;

Profile.propTypes = {
  data: PropTypes.object.isRequired
}

export default graphql(fetchUser, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id
    }
  }),
})(Profile);