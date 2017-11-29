import React, { Component } from 'react'
import { Leftside, Rightside } from './index'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { formValueSelector } from 'redux-form'
import { setSelectedTags, setImageFile, setImageData } from '../../redux/modules/share';

import './styles.css'

class Share extends Component {
  handleChange = (event, index, value) => {
     this.props.dispatch(setSelectedTags(value))
   }
  handleImageUpload = (input) => {
    // console.log('test');
    // console.log(input.target.files[0]);
    if (input.target.files && input.target.files[0]) {
      var reader = new FileReader();
      console.log(input.target.files[0])
      this.props.dispatch(setImageFile(input.target.files[0]));
      reader.onload = (e) => {
        console.log(e.target.result)
        this.props.dispatch(setImageData(e.target.result))
      }
    reader.readAsDataURL(input.target.files[0]);
    }
  }
  render() {
    console.log(this.props.itemsInput)
    console.log(this.props);
    return (
      <div className="shareContainer">
        <Leftside 
          itemTitle={this.props.itemsInput.itemTitle} 
          itemDescription={this.props.itemsInput.itemDescription} 
          shareCreated={this.props.shareCreated} 
          filterSelected={this.props.filterSelected}
          imageData={this.props.imageData}
          user={!this.props.data.loading ? this.props.data.user : false} 
        />
        <Rightside 
          stepIndex={this.props.stepIndex} 
          handleChange={this.handleChange} 
          filters={!this.props.data.loading ? this.props.data.tags : []} 
          filterSelected={this.props.filterSelected} 
          handleImageUpload={this.handleImageUpload}
        />
      </div>
    )
  }
}

const fetchTagsUser = gql`
  query fetchTagsUser($id: ID!){
    tags{
      id
      title
    }
    user(id: $id){
      id
      email
      fullname
    }
  }
`

const mapStateToProps = (state)=>{
  const values = formValueSelector('newItemForm');
  return{
    itemsInput: values(state, 'itemTitle', 'itemDescription'),
    stepIndex: state.share.stepIndex,
    filterSelected: state.share.selectedTags,
    shareCreated: state.share.shareCreated,
    imageFile: state.share.imageFile,
    imageData: state.share.imageData,
    user: state.login.user
  }
}

const ShareData = graphql(fetchTagsUser,{
  options: ownProps => ({
    variables: {
      id: ownProps.user.uid
    }
  })
})(Share)

export default connect(mapStateToProps)(ShareData)