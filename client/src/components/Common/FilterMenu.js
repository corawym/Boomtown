import React, { Component } from 'react'
import { SelectField, MenuItem } from 'material-ui'


class FilterMenu extends Component {

  render() {

    const { filterSelected, filters, handleChange } = this.props

    return (
      <div className="filterMenuWrapper">
        <SelectField 
          value={filterSelected} 
          onChange={handleChange} 
          hintText="Filter by Tag" 
          multiple={true}
        >

          {filters.map(items => 
            <MenuItem 
              key={items.id} 
              value={items.name} 
              primaryText={items.name}
              checked={ filterSelected && filterSelected.includes(items.name)}
            />
          )}

        </SelectField>
      </div>
    )
  }
}

export default FilterMenu