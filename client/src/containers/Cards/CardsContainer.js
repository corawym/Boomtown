import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getCardItems } from '../../redux/actions'

import { CardList } from './index'
import { ButtonAddItem } from '../../components/common'


class CardsContainer extends Component {
  state = { cardData:[] }

  componentDidMount(){
    this.props.dispatch(getCardItems());
    // this.fetchData();
  }

  // fetchData = () => {
  //   const urls = [ 'http://localhost:3001/items', 'http://localhost:3001/users' ]
  //   Promise.all(urls.map(url =>
  //     fetch(url).then(resp => resp.json())
  //   )).then(data => {
  //     const [items, users] = data
  //     const cardData = items.map(item => {
  //       return {
  //         "id": item.id,
  //         "title": item.title,
  //         "description": item.description,
  //         "imageUrl": item.imageUrl,
  //         "tags": item.tags,
  //         "itemOwner": item.itemOwner,
  //         "createdOn": item.createdOn,
  //         "available": item.available,
  //         "borrower": item.borrower,
  //         "user": users.find(user => item.itemOwner === user.id)
  //       }
  //     })
  //     this.setState({cardData})
  //   })
  // }
  
  render() {
    return (
        <div className="cardsContainer">
          {/*{this.props.users.users.map((user)=><li>{JSON.stringify(user)}</li>)}*/}
          <CardList cardData={this.props.items}/>
          <div className="buttonAddContainer">
              <ButtonAddItem />
          </div> 
        </div>
    )
  }
}

const mapStateToProps = (store) => {
  console.log(store);
  return {
    items: store.users.items
  }
}

export default connect(mapStateToProps)(CardsContainer)