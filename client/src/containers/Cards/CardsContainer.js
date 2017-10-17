import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { getCardItems } from '../../redux/actions'

import { CardList } from './index'
import { ButtonAddItem } from '../../components/common'

import './styles.css';

class CardsContainer extends Component {


  componentDidMount(){
    this.props.dispatch(getCardItems());
  }
  
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
  return {
    items: store.users.items
  }
}

CardsContainer.propTypes = {
  items: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(CardsContainer)