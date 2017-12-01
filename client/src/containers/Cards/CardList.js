import React from 'react'
import Masonry from 'react-masonry-component'
import PropTypes from 'prop-types'

import { ItemCard } from '../../components/Card'
import './styles.css'

const CardList = ({cardData}) => (
  <div className="cardList"> 
    <Masonry className='masonry' elementType={'ul'}>
      
      {/* check the return array */}
      { cardData.length !== 0 ? cardData.map(items => 
        <li key={items.id}>
          <ItemCard 
            data={items}
          />
        </li>
      ): '' }
    </Masonry>
  </div>
);

CardList.propTypes = {
  cardData: PropTypes.array.isRequired
}

export default CardList;