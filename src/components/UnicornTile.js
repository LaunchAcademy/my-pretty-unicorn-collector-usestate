import React from 'react';

import { Link } from "react-router-dom"

const UnicornTile = props => {

  return(
    <div>
      <div className="callout">
        <Link to={`/unicorns/${props.unicorn.id}`}>
          {props.unicorn.unicornName}
        </Link>
      </div>
    </div>
  )
}

export default UnicornTile;
