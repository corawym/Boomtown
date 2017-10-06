import React, { Component } from 'react'
import { Card } from 'material-ui'

import { ItemPhoto, ItemContext, User, ButtonBorrow } from './CardElements'

class ItemCard extends Component {
  state = {  }
  render() {
    return (
      <Card style={{ width: '100%', flexBasis: '32%'}}>
        <ItemPhoto />
        <User />
        <ItemContext />
        <ButtonBorrow />
      </Card>
    )
  }
}

export default ItemCard