import React, { Component } from 'react'

import { ItemCard } from '../../components/Card'

class Leftside extends Component {
  state = {  }
  render() {
    return (

      <div className="shareLeftside">
        <ItemCard 
          data={{
            imageurl: "?",
            title: "?",
            available: true,
            itemowner: "?",
            created: "?",
            description: "?",
            tags: [],
            borrower: null
          }}
        />
      </div>  

    )
  }
}

export default Leftside