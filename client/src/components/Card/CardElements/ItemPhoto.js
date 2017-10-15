import React, { Component } from 'react'
import { CardMedia, CardTitle } from 'material-ui/Card'

class ItemPhoto extends Component {
  render() {
    const {imageurl, available, title} = this.props
    return (
      <CardMedia
        overlay={!available && <CardTitle subtitle="Unavailable" />}
        overlayContentStyle={{paddingTop: '0'}}
        overlayStyle={{textTransform: 'uppercase'}}
        >
        <img src={imageurl} alt={title} />
      </CardMedia>
    )
  }
}

export default ItemPhoto