import React, { Component } from 'react'

import { CardList } from './index'

class CardsContainer extends Component {
  state = { cardData:[] }
  componentDidMount(){
    this.fetchData();
  }
  fetchData = () => {
    const urls = [ 'http://localhost:3001/items', 'http://localhost:3001/users' ]
    Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    )).then(data => {
      
      console.log (data)
    })
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