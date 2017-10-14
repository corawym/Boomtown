import React, { Component } from 'react';
import { Card } from 'material-ui';
import { Link } from 'react-router-dom';

import { ItemPhoto, ItemContext, User, ButtonBorrow } from './CardElements';

import './styles.css';
class ItemCard extends Component {
  render() {
    const {data} = this.props

    return (
      <Card className='itemCard'>
        <ItemPhoto imageUrl={data.imageUrl} available={data.available}/>
        <div style={{padding:'16px 0'}}>
          <Link to={`/profile/${data.id}`} className='userInfo'>
            <User user={data.user} date={data.createdOn}/>
          </Link>
          <ItemContext description={data.description} title={data.title} tags={data.tags}/>
          {data.available?<ButtonBorrow />:false}
        </div>
      </Card>
    )
  }
}

export default ItemCard