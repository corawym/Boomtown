import React, { Component } from 'react'

import { ShareStepper } from '../../components/Share'

class Rightside extends Component {
  render() {
    return (
      <div className="shareRightside">
        <ShareStepper stepIndex={this.props.stepIndex} handleChange={this.props.handleChange} filters={this.props.filters} filterSelected={this.props.filterSelected}/>
      </div>
    )
  }
}

export default Rightside