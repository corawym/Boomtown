import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class ButtonAddItem extends Component {

  render() {
    return (
      <FloatingActionButton secondary>
        <ContentAdd />
      </FloatingActionButton>
    )
  }
}

export default ButtonAddItem

