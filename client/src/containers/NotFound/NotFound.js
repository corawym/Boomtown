import React, { Component } from 'react'

import ErrorPic from '../../images/404error.svg'

import './styles.css'

class NotFound extends Component {
  render() {
    return (
      <div className="notFoundContainer">
        <div className="notFoundWrapper">
          <img src={ErrorPic} alt="Stop sign" className="notFoundPic"/>
          <h1>PAGE NOT FOUND</h1>
        </div>
      </div>
    )
  }
}

export default NotFound;