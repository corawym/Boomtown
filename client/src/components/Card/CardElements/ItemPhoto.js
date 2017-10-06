import React, { Component } from 'react'
import { CardMedia, CardTitle } from 'material-ui/Card'

class ItemPhoto extends Component {
  state = {  }
  render() {
    return (
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
        <img src="images/nature-600-337.jpg" alt="" />
      </CardMedia>
    )
  }
}

export default ItemPhoto