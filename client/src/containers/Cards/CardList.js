import React, { Component } from 'react'

import { ItemCard } from '../../components/Card'

import './styles.css'

class CardList extends Component {

  render() {

    const {cardData} = this.props

    return (
      <div className="cardList"> 
        {cardData.map(item => 
          <ItemCard 
            key={item.id}
            data={item}
          />
        )}
      </div>
    )
  }
}

export default CardList