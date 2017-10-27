import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { CardList } from './index'
import { ButtonAddItem } from '../../components/common'

import './styles.css'

class CardsContainer extends Component {


  // componentDidMount(){
  //   this.props.dispatch(getCardItems());
  // }
  
  render() {
    const { items, loading } = this.props.data
    const { filterSelected } = this.props
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
  }
`

// const mapStateToProps = (store) => {
//   return {
//     items: store.users.items
//   }
// }

CardsContainer.propTypes = {
  data: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>{
  return{
    filterSelected: state.filter.filteredTags
  }
}

const CardData = graphql(fetchItems)(CardsContainer)

// export default connect(mapStateToProps)(CardsContainer)
export default connect(mapStateToProps)(CardData);