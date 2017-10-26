import React from 'react'
import TextField from 'material-ui/TextField';

export const TextInput = field => (
  <TextField 
     hintText="Please enter an item title"
     id="itemTitle"
     {...field.input}
  />
)
  
export const TextArea = field => (
  <TextField 
     hintText="Please enter an item description"
     id="itemDescription"
     {...field.input}
  />
)
  