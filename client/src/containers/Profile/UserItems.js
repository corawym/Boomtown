import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import PropTypes from 'prop-types'

import { ItemCard } from '../../components/Card'

class UserItems extends Component {
  
  render() {

    const {cardData} = this.props

    return (
      <div className="cardList"> 
        
        <Masonry className='masonry' elementType={'ul'}>
          { cardData.map(item => 
            <li key={item.id}>
              <ItemCard 
                data={item}
              />
            </li>
          )}
        </Masonry>
      </div>
    )
  }
}

UserItems.propTypes = {
  cardData: PropTypes.array.isRequired
}

export default UserItems