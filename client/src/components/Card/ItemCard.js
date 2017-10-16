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
        <ItemPhoto imageurl={data.imageurl} title={data.title} available={data.available}/>
        <div style={{padding:'16px 0'}}>
          <Link to={`/profile/${data.itemowner}`} className='userInfo'>
            <User user={data.user} date={data.created}/>
          </Link>
          <ItemContext description={data.description} title={data.title} tags={data.tags}/>
          { data.available ? <ButtonBorrow /> : false }
        </div>
      </Card>
    )
  }
}

export default ItemCard