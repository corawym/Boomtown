import React from 'react';
import PropTypes from 'prop-types';

import { ItemCard } from '../../components/Card';
import itemPlaceholder from '../../images/item-placeholder.jpg';

const Leftside = ({imageData,itemTitle,user,shareCreated,itemDescription,filterSelected}) => (
  <div className="shareLeftside">
    <ItemCard 
      data={{
        imageurl: imageData ? imageData : itemPlaceholder,
        title: itemTitle ? itemTitle :'Amazing Item Title',
        available: true,
        itemowner: user,
        created: shareCreated,
        description: itemDescription ? itemDescription :'Profound item description.',
        tags: filterSelected ? filterSelected : [],
        borrower: false
      }}
    />
  </div>  
);

Leftside.PropTypes = {
  stepIndex: PropTypes.number.isRequired,
  imageData: PropTypes.number.isRequired,
  itemTitle: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  shareCreated: PropTypes.string.isRequired,
  itemDescription: PropTypes.string.isRequired,
  filterSelected: PropTypes.array.isRequired
}


export default Leftside