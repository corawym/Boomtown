import React, { Component } from 'react'

import { ItemCard } from '../../components/Card'

class UserItems extends Component {
  state = {  }
  render() {
    return (
      <div className="cardList"> 
        <ItemCard />
      </div>
    )
  }
}

export default UserItems