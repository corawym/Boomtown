import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import Leftside from 'Leftside';

import FilterDropDownMenu from '../../components/FilterDropDownMenu';
import ButtonsCollection from '../../components/ButtonsCollection';

import './styles.css';
import logo from '../../images/boomtown-logo.svg';

class Header extends Component {
  state = {
    tags: [
      { id: 1, tag: "Electronics" },
      { id: 2, tag: "Household Items" },
      { id: 3, tag: "Musical Instruments" },
      { id: 4, tag: "Physical Media" },
      { id: 5, tag: "Recreational Equipment" },
      { id: 6, tag: "Sporting Goods" },
      { id: 7, tag: "Tools" }
    ],
    filterSelected: null,
    buttons: [
      { id: 1, name: "my profile", color: "rgb(72, 198, 239)" },
      { id: 1, name: "log out", style: {color:"rgb(72, 198, 239)"} }

    ]
  }



  render(){
    return(
    
        <AppBar
          style={{
            backgroundColor: '#fff'
          }}
          
          iconElementLeft={
            <div className="headerWrapperL">
              <a className="headerLogo" >
                <img src={logo} alt="Boomtown Logo" />
              </a>

              <FilterDropDownMenu filterTags={this.state.tags} filterSelected={this.state.filterSelected}/>

            </div>
           
          }
          iconStyleLeft={{
            height: '64px'
          }}

          iconElementRight={
            <div>
              <ButtonsCollection />
            </div>
          }
        />

          

       

        


     
    )
  }
}

export default Header;