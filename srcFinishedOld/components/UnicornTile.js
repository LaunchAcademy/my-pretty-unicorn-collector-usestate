import React from 'react';

const UnicornTile = props => {

  return(
    <div>
      <div className="callout">
        <h5> {props.unicorn.unicornName} </h5>
      </div>
    </div>
  )
}

export default UnicornTile;
