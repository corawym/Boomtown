import React from 'react'
import Masonry from 'react-masonry-component'
import PropTypes from 'prop-types'

import { ItemCard } from '../../components/Card'

const UserItems = ({cardData}) => (
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
);

UserItems.propTypes = {
  cardData: PropTypes.array.isRequired
}

export default UserItems;