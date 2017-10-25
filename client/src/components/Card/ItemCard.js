import React, { Component } from 'react'
import { Card } from 'material-ui'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { ItemPhoto, ItemContext, User, ButtonBorrow } from './CardElements'

import './styles.css'

class ItemCard extends Component {
  render() {
    const {data} = this.props
    return (
      <Card className='itemCard'>
        <ItemPhoto imageurl={data.imageurl} title={data.title} available={!data.borrower ? true : false }/>
        <div style={{padding:'16px 0'}}>
          <Link to={`/profile/${data.itemowner.id}`} className='userInfo'>
            <User user={data.itemowner} date={data.created}/>
          </Link>
          <ItemContext description={data.description} title={data.title} tags={data.tags}/>
          { !data.borrower? <ButtonBorrow /> : false }
        </div>
      </Card>
    )
  }
}

ItemCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default ItemCard