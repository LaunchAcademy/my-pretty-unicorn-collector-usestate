import React, { useState, useEffect } from 'react';

import UnicornTile from '../components/UnicornTile';

const UnicornIndexContainer = (props) => {

  let unicornTiles = props.unicorns.map(unicorn => {
    return(
      <UnicornTile
        key={unicorn.id}
        unicorn={unicorn}
      />
    )
  })

  return(
    <div className='page border'>
      <h1>Unicorn Index Container</h1>
      <div className='unicorn-list'>
        {unicornTiles}
      </div>
    </div>
  )
}

export default UnicornIndexContainer;
