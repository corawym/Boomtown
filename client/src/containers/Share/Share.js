import React, { Component } from 'react'
import { Leftside, Rightside } from './index'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { formValueSelector } from 'redux-form'
import * as firebase from 'firebase'

import { setSelectedTags, setImageFile, setImageData, resetShare } from '../../redux/modules/share';
import './styles.css'

class Share extends Component {
  handleChange = (event, index, value) => {
     this.props.dispatch(setSelectedTags(value))
   }
  handleImageUpload = (input) => {
    if (input.target.files && input.target.files[0]) {
      var reader = new FileReader();
      this.props.dispatch(setImageFile(input.target.files[0]));
      reader.onload = (e) => {
        this.props.dispatch(setImageData(e.target.result))
      }
    reader.readAsDataURL(input.target.files[0]);
    }
  }
  handleSubmitItem = async (e) => {
    e.preventDefault();
    const imageURL = await firebase.storage()
            .ref()
            .child(`images/${this.props.data.user.id}/${this.props.imageFile.name}-${this.props.shareCreated}`)
            .put(this.props.imageFile)
            .then((snapshot) => {
              return snapshot.downloadURL;
            })
    const allSelectedTags = this.props.filterSelected.map((tag) => tag.id);

    this.props.mutate({
      refetchQueries: [{
        query: gql`
          query {
            items {
              id
              title
              imageurl
              tags{
                id
                title
              }
              description
              itemowner {
                id
                fullname
                email
              }
              created
              borrower{
                id
              }
            }
          }
        `
      }],
      variables: {
        title: this.props.itemsInput.itemTitle,
        description: this.props.itemsInput.itemDescription,
        imageurl: imageURL,
        tags: allSelectedTags,
        itemowner: this.props.data.user.id
      }
    })
    .then(res => {
      this.props.dispatch(resetShare());
      this.props.history.push('/')
    })
  }
  render() {
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
          handleSubmitItem = {this.handleSubmitItem}
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
const addItem = gql`
  mutation addItem(
    $title: String!
    $description: String
    $imageurl: String
    $tags: [String]
    $itemowner: ID!
  ){
    addItem(
      title: $title
      description: $description
      imageurl: $imageurl
      tags: $tags
      itemowner: $itemowner
    ){
      title
      description
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

const ShareData = compose(graphql(fetchTagsUser,{
  options: ownProps => ({
    variables: {
      id: ownProps.user.uid
    }
  })
}), graphql(addItem))(Share)

export default connect(mapStateToProps)(ShareData)