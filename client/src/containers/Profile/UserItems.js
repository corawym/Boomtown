import React, { Component } from 'react'

import { ItemCard } from '../../components/Card'

class UserItems extends Component {
  
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

export default UserItems