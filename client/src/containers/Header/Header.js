import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import * as firebase from 'firebase';

import { Leftside, Rightside } from './index';   
import { setFilterTags } from '../../redux/modules/filter';

import './styles.css'

class Header extends Component {

   handleChange = (event, index, value) => {
     this.props.dispatch(setFilterTags(value))
   }

  logOut = (event) => {
    event.preventDefault()
    firebase.auth().signOut()
  }

  render() {
    const { loading, tags } = this.props.data
    const { filterSelected, user } = this.props
    console.log(tags);
    return (
      <AppBar
        title="Title"
        iconElementLeft={ <Leftside filters={!loading?tags:[]}  handleChange={this.handleChange} filterSelected={filterSelected}/> }
        iconElementRight={ <Rightside logOut={this.logOut} userID={user ? user.uid : false}/> }
        style={{ backgroundColor: '#fff', maxWidth: '1140px', margin: '0 auto', boxShadow: 'none', padding: '0 10px', display:'flex', alignItems:'center', flexWrap:'wrap'}}
        iconStyleLeft={{ margin: '0'}}
        iconStyleRight={{ marginRight: '0'}}
      />
    )
  }
}

const fetchTags = gql`
  query {
    tags{
      id
      title
    }
  }
`
const mapStateToProps = (state)=>{
  return{
    filterSelected: state.filter.filteredTags,
    user: state.login.user
  }
}

const HeaderData = graphql(fetchTags)(Header)

export default connect(mapStateToProps)(HeaderData)
