import React, { Component } from 'react'

import { ItemCard } from '../../components/Card'

import './styles.css'

class CardList extends Component {
  state = {  }
  render() {
    return (
      <div className="cardList"> 
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    )
  }
}

export default CardList