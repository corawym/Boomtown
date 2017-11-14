import React, { Component } from 'react'
import { SelectField, MenuItem } from 'material-ui'
import PropTypes from 'prop-types'

class FilterMenu extends Component {

  render() {

    const { filterSelected, handleChange, filters } = this.props
    console.log(filters);
    return (
      <div className="filterMenuWrapper">
        <SelectField 
          value = {filterSelected} 
          onChange = {handleChange} 
          hintText = "Filter by Tag" 
          multiple = {true}
        >

          {filters.map(items => 
            <MenuItem 
              key = {items.id} 
              value = {items} 
              primaryText ={ items.title}
              checked = { filterSelected && filterSelected.includes(items) }
            />
          )}

        </SelectField>
      </div>
    )
  }
}

FilterMenu.propTypes = {
  filterSelected: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired
}

export default FilterMenu