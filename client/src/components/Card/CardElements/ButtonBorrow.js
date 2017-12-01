import React from 'react'
import { RaisedButton,CardActions } from 'material-ui'

const style = {
  padding: 16,
}

const ButtonBorrow = () => (
  <CardActions style={style} className='buttonBorrow'>
    <RaisedButton
      label="Borrow"
      secondary
    />
  </CardActions>
);

export default ButtonBorrow;
