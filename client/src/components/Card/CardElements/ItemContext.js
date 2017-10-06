import React, { Component } from 'react'
import { CardTitle, CardText } from 'material-ui'


class ItemContext extends Component {
  state = {  }
  render() {
    return (
      <div>
        <CardTitle title="Card title" subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </div>
    )
  }
}

export default ItemContext