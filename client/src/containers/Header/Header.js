import React, { Component } from 'react'
import { AppBar } from 'material-ui'

import { Leftside, Rightside } from './index'

import './styles.css'


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
    filterSelected: [] 
   }

   handleChange = (event, index, value) => {
     this.setState({filterSelected: value})
   }

  render() {
    return (
      <AppBar
        title="Title"
        iconElementLeft={ <Leftside filters={this.state.filters}  handleChange={this.handleChange} filterSelected={this.state.filterSelected}/> }
        iconElementRight={ <Rightside /> }
        style={{ backgroundColor: '#fff', maxWidth: '1140px', margin: '0 auto', boxShadow: 'none', padding: '0 10px', display:'flex', alignItems:'center', flexWrap:'wrap'}}
        iconStyleLeft={{ margin: '0'}}
        iconStyleRight={{ marginRight: '0'}}
      />
    )
  }
}

export default Header
