import React from 'react'
import TextField from 'material-ui/TextField';

export const TextTitle = field => (
  <TextField 
    hintText="Title"
    floatingLabelText="Title"
    id="itemTitle"
    floatingLabelFocusStyle={{color: 'white'}}
    underlineFocusStyle={{borderBottom: '1px solid black'}}
    style={{width: '100%'}}
    {...field.input}
  />
)
  
export const TextDescription = field => (
  <TextField 
    hintText="Description"
    floatingLabelText="Description"
    id="itemDescription"
    multiLine={true}
    rows={2}
    floatingLabelFocusStyle={{color: 'white'}}
    underlineFocusStyle={{borderBottom: '1px solid black'}}
    style={{width: '100%'}}
    {...field.input}
  />
)

