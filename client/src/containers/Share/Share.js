import React, { Component } from 'react'
import { Leftside, Rightside } from './index'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { formValueSelector } from 'redux-form'
import { setSelectedTags, setImageFile, setImageData, resetShare } from '../../redux/modules/share';
import * as firebase from 'firebase'
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
      // console.log(input.target.files[0])
      this.props.dispatch(setImageFile(input.target.files[0]));
      reader.onload = (e) => {
        // console.log(e.target.result)
        this.props.dispatch(setImageData(e.target.result))
      }
    reader.readAsDataURL(input.target.files[0]);
    }
  }
  handleSubmitItem = async (e) => {
    e.preventDefault();
    // console.log(this.props.imageFile);
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
      // console.log('success');
      this.props.dispatch(resetShare());
      this.props.history.push('/')
    })
  }
  render() {
    // console.log(this.props.itemsInput)
    // console.log(this.props);
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