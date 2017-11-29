import React, { Component } from 'react'

import { ItemCard } from '../../components/Card'
import itemPlaceholder from '../../images/item-placeholder.jpg'
class Leftside extends Component {
  state = {  }
  render() {
    return (

      <div className="shareLeftside">
        <ItemCard 
          data={{
            imageurl: this.props.imageData ? this.props.imageData : itemPlaceholder,
            title: this.props.itemTitle ? this.props.itemTitle :'Amazing Item Title',
            available: true,
            itemowner: this.props.user,
            created: this.props.shareCreated,
            description: this.props.itemDescription ? this.props.itemDescription :'Profound item description.',
            tags: this.props.filterSelected ? this.props.filterSelected : [],
            borrower: false
          }}
        />
      </div>  

    )
  }
}

export default Leftside