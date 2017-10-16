import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import { LogoBoom, FilterMenu } from '../../components/common'

class Leftside extends Component {
  render() {

    const { filters, handleChange, filterSelected } = this.props

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

Leftside.propTypes = {
  filters: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  filterSelected: PropTypes.array.isRequired
}

export default Leftside