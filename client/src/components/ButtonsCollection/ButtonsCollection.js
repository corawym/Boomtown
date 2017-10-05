import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

const ButtonsCollection = (props) => (
  <RaisedButton label={props.name} style={props.style} />
)

export default ButtonsCollection;