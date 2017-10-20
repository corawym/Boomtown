import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { getCardItems } from '../../redux/actions'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { CardList } from './index'
import { ButtonAddItem } from '../../components/common'

import './styles.css';

class CardsContainer extends Component {


  // componentDidMount(){
  //   this.props.dispatch(getCardItems());
  // }
  
  render() {
    console.log(this.props.data);
    return (
        <div className="cardsContainer">
          {/*{this.props.users.users.map((user)=><li>{JSON.stringify(user)}</li>)}*/}
          { !this.props.data.loading ? <CardList cardData={this.props.data.items}/> : false }
          <div className="buttonAddContainer">
            <ButtonAddItem />
          </div> 
        </div>
    )
  }
}

const fetchItems = gql`
  query fetchItems {
    items {
      id
      title
      imageurl
      tags
      itemowner {
        id
        fullname
        email
      }
      created
      available
      borrower{
        id
      }
    }
  }
`

// const mapStateToProps = (store) => {
//   return {
//     items: store.users.items
//   }
// }

CardsContainer.propTypes = {
  items: PropTypes.array.isRequired
}

// export default connect(mapStateToProps)(CardsContainer)
export default graphql(fetchItems)(CardsContainer);