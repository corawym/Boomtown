import React, { Component } from 'react'
import Masonry from 'react-masonry-component'

import { ItemCard } from '../../components/Card'

class UserItems extends Component {
  
  render() {

    const {cardData} = this.props

    return (
      <div className="cardList"> 
        <Masonry className='masonry' elementType={'ul'}>
          {cardData.map(item => 
            <li>
              <ItemCard 
                key={item.id}
                data={item}
              />
            </li>
          )}
        </Masonry>
      </div>
    )
  }
}

export default UserItems