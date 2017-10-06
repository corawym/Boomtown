import React, { Component } from 'react'
import { Card } from 'material-ui'

import { ItemPhoto, ItemContext, User, ButtonBorrow } from './CardElements'

class ItemCard extends Component {
  render() {
    const {data} = this.props
    return (
      <Card style={{ width: '100%', flexBasis: '32%'}}>
        <ItemPhoto imageUrl={data.imageUrl} available={data.available}/>
        <User user={data.user} date={data.createdOn}/>
        <ItemContext description={data.description} title={data.title} tags={data.tags}/>
        {data.available?<ButtonBorrow />:false}
      </Card>
    )
  }
}

export default ItemCard