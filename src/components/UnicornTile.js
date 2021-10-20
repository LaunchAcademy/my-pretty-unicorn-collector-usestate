import React from 'react'

import { Link } from "react-router-dom"

const UnicornTile = (props) => {
  return(
    <div>
      <h4>
        <Link to={`/unicorns/${props.id}`} > {props.unicornName}  </Link>
          
      </h4>
    </div>
  )
}

export default UnicornTile
