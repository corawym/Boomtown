import React, { Component } from 'react'

import { CardList } from './index'

class CardsContainer extends Component {
  state = { cardData:[] }
  componentDidMount(){
    this.fetchData();
  }
  fetchData = () => {
    const urls = [ 'http://localhost:3001/items', 'http://localhost:3001/users' ]
    
  }
  render() {
    return (
      <div className="cardsContainer">
        <CardList/>
      </div>
    )
  }
}

export default CardsContainer