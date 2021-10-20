import React, { useState, useEffect } from 'react'

import UnicornTile from "./UnicornTile"

const UnicornIndexContainer = (props) => {
 

  const unicornComponentTiles = props.unicorns.map((unicornObject) => {
    return(
      <UnicornTile/>
    )
  })

  return(
    <div>
      <h1> Unicorn List </h1>
      {unicornComponentTiles}
    </div>
  )
}

export default UnicornIndexContainer
