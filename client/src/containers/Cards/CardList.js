import React, { Component } from 'react'
import Masonry from 'react-masonry-component'

import { ItemCard } from '../../components/Card'

import './styles.css'

class CardList extends Component {

  render() {

    const {cardData} = this.props

    return (
      <div className="cardList"> 
        <Masonry className='masonry' elementType={'ul'}>
          { cardData.length !== 0 ? cardData.map(items => 
            <li>
              <ItemCard 
                key={items.id}
                data={items}
              />
            </li>
          ): '' }
        </Masonry>
      </div>
    )
  }
}

export default CardList