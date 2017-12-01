import React from 'react'
import { SelectField, MenuItem } from 'material-ui'
import PropTypes from 'prop-types'

const FilterMenu = ({filterSelected, handleChange, filters}) => (
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
);

FilterMenu.propTypes = {
  filterSelected: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired
}

export default FilterMenu