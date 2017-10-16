import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { LogoBoom, FilterMenu } from '../../components/common'

class Leftside extends Component {
  render() {

    const { filterSelected, filters, handleChange } = this.props

    return (
      <div className="headerLeftWrapper">
        <LogoBoom />
        <Route 
          exact path='/' 
          component={()=> <FilterMenu filters={filters} handleChange={handleChange} filterSelected={filterSelected}/>}
        />
      </div>
    )
  }
}

export default Leftside