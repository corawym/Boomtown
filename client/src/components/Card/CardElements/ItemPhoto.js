import React, { Component } from 'react'
import { CardMedia, CardTitle } from 'material-ui/Card'

class ItemPhoto extends Component {
  render() {
    const {imageUrl, available} = this.props
    return (
      <CardMedia
        overlay={!available?<CardTitle subtitle="Unavailable" />:false}
        >
        <img src={imageUrl} alt="" />
      </CardMedia>
    )
  }
}

export default ItemPhoto