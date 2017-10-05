import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const FilterDropDownMenu = (props) => (
  <SelectField value={props.filterTags} onChange={this.handleChange} hintText="Filter by Tag" hintStyle={{opacity:'0.6'}}>
    {props.filterTags.map(tags => <MenuItem key={tags.id} value={tags.id} primaryText={tags.tag} />)}
  </SelectField>


)

export default FilterDropDownMenu;