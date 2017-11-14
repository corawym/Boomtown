import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { CardList } from './index'
import { ButtonAddItem } from '../../components/common'

import './styles.css'

class CardsContainer extends Component {

  
  render() {
    const { items, loading } = this.props.data
    const { filterSelected } = this.props
    let allCard = [];
    if(filterSelected.length>0 && !loading){
      allCard = items.filter(item => {
        if(item.tags.some(tag => filterSelected.findIndex(filterItem => filterItem.id === tag.id)>=0)){
          return item;
        }
      })
    }else{
      if(!loading){
        allCard = items;
      }
    }
    console.log(loading);
    console.log(items);
    console.log(allCard);
    return (
      <div className="cardsContainer">
        { !loading ? <CardList cardData={allCard}/> : false }
        <div className="buttonAddContainer">
          <ButtonAddItem />
        </div> 
      </div>
    )

  }
}

const fetchItems = gql`
  query {
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

CardsContainer.propTypes = {
  data: PropTypes.object.isRequired
}

const mapStateToProps = (state)=>{
  return{
    filterSelected: state.filter.filteredTags
  }
}

const CardData = graphql(fetchItems)(CardsContainer)

export default connect(mapStateToProps)(CardData);