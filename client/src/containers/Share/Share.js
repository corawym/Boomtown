import React, { Component } from 'react'
import { Leftside, Rightside } from './index'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { formValueSelector } from 'redux-form'
import { setSelectedTags } from '../../redux/modules/share';

import './styles.css'

class Share extends Component {
  handleChange = (event, index, value) => {
     this.props.dispatch(setSelectedTags(value))
   }
  render() {
    console.log(this.props.itemsInput)
    return (
      <div className="shareContainer">
        <Leftside itemTitle={this.props.itemsInput.itemTitle} itemDescription={this.props.itemsInput.itemDescription} shareCreated={this.props.shareCreated} filterSelected={this.props.filterSelected}/>
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
  const values = formValueSelector('newItemForm');
  return{
    itemsInput: values(state, 'itemTitle', 'itemDescription'),
    stepIndex: state.share.stepIndex,
    filterSelected: state.share.selectedTags,
    shareCreated: state.share.shareCreated
  }
}

const ShareData = graphql(fetchTags)(Share)

export default connect(mapStateToProps)(ShareData)