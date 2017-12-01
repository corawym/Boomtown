import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { Link } from 'react-router-dom'

const ButtonAddItem = () => (
  <Link to={"/share"}>
    <FloatingActionButton secondary>
      <ContentAdd />
    </FloatingActionButton>
  </Link>
);

export default ButtonAddItem

