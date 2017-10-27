import React, { Component } from 'react'
import { AppBar } from 'material-ui'
import { setFilterTags } from '../../redux/modules/filterReducer'
import { Leftside, Rightside } from './index'
import { connect } from 'react-redux'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import './styles.css'


class Header extends Component {

   handleChange = (event, index, value) => {
     this.props.dispatch(setFilterTags(value))
   }

  render() {
    const { loading, tags } = this.props.data
    const { filterSelected } = this.props
    return (
      <AppBar
        title="Title"
        iconElementLeft={ <Leftside filters={!loading?tags:[]}  handleChange={this.handleChange} filterSelected={filterSelected}/> }
        iconElementRight={ <Rightside /> }
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
    filterSelected: state.filter.filteredTags
  }
}

const HeaderData = graphql(fetchTags)(Header)

export default connect(mapStateToProps)(HeaderData)
