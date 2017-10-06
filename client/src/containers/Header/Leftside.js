import React, { Component } from 'react'

import { LogoBoom, FilterMenu } from '../../components/common'

class Leftside extends Component {
  render() {

    const { filterSelected, filters, handleChange } = this.props

    return (
      <div className="headerLeftWrapper">
        <LogoBoom />
        <FilterMenu filters={filters} handleChange={handleChange} filterSelected={filterSelected}/>
      </div>
    )
  }
}

export default Leftside