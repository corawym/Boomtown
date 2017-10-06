import React, { Component } from 'react'
import { CardTitle, CardText } from 'material-ui'


class ItemContext extends Component {
  render() {
    const {description, title, tags} = this.props
    return (
      <div>
        <CardTitle title={title} subtitle={tags.join(', ')} />
        <CardText>
          {description}
        </CardText>
      </div>
    )
  }
}

export default ItemContext