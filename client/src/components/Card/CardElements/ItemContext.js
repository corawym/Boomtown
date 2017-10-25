import React, { Component } from 'react'
import { CardTitle, CardText } from 'material-ui'
import PropTypes from 'prop-types'


class ItemContext extends Component {
  render() {
    const {description, title, tags} = this.props
    return (
      <div>
        <CardTitle title={title} subtitle={tags ? tags.join(', ') : ''} />
        <CardText>
          {description}
        </CardText>
      </div>
    )
  }
}

ItemContext.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
}

export default ItemContext