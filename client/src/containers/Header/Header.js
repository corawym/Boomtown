import React, { Component } from 'react'

import { AppBar } from 'material-ui'

import { Leftside, Rightside } from './index'

import './styles.css'

// import FilterDropDownMenu from '../../components/FilterDropDownMenu';
// import ButtonsCollection from '../../components/ButtonsCollection';




class Header extends Component {
  state = { 
    filters: [
      { id: 1, name: "Electronics" },
      { id: 2, name: "Household Items" },
      { id: 3, name: "Musical Instruments" },
      { id: 4, name: "Physical Media" },
      { id: 5, name: "Recreational Equipment" },
      { id: 6, name: "Sporting Goods" },
      { id: 7, name: "Tools" }
    ],
    filterSelected: null 
   }
  render() {
    return (
      <AppBar
        title="Title"
        iconElementLeft={ <Leftside filters={this.state.filters} filterSelected={this.state.filterSelected}/> }
        iconElementRight={ <Rightside /> }
        style={{ backgroundColor: '#fff' }}
      />
    );
  }
}

export default Header;
