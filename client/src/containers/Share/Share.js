import React, { Component } from 'react'
import { Leftside, Rightside } from './index'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { setSelectedTags } from '../../redux/modules/share';

import './styles.css'

class Share extends Component {
  handleChange = (event, index, value) => {
     this.props.dispatch(setSelectedTags(value))
   }
  render() {
    return (
      <div className="shareContainer">
        <Leftside />
        <Rightside stepIndex={this.props.stepIndex} handleChange={this.handleChange} filters={!this.props.data.loading ? this.props.data.tags : []} filterSelected={this.props.filterSelected}/>
      </div>
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
    stepIndex: state.share.stepIndex,
    filterSelected: state.share.selectedTags
  }
}

const ShareData = graphql(fetchTags)(Share)

export default connect(mapStateToProps)(ShareData)