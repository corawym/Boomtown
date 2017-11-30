import React from 'react'
import { CardTitle, CardText } from 'material-ui'
import PropTypes from 'prop-types'



const ItemContext = ({description, title, tags}) => {
  const tagsArray = tags.reduce((acc,curr)=>{
    acc.push(curr.title);
    return acc
  },[])
  return (
    <div>
      <CardTitle title={title} subtitle={tagsArray ? tagsArray.join(', ') : ''} />
      <CardText>
        {description}
      </CardText>
    </div>
  )
}

ItemContext.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
}

export default ItemContext;
