import React from 'react'

import { Link } from "react-router-dom"

const UnicornTile = (props) => {
  // const { unicornName, description, id } = props
  return(
    <div>
      <h4> <Link to={`/unicorns/${props.unicornObject.id}`}> {props.unicornObject.unicornName} </Link> </h4>
    </div>
  )
}

export default UnicornTile
