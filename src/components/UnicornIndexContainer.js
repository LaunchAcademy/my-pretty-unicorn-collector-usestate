import React, { useState, useEffect } from 'react'

import UnicornTile from "./UnicornTile"

const UnicornIndexContainer = (props) => {
  const [unicorns, setUnicorns] = useState([])

  useEffect(() => {
    fetch("/api/v1/unicorns")
    .then((response) => {
      return response.json()
    })
    .then((unicornsData) => {
      setUnicorns(unicornsData)
    })
  }, [])

  const unicornComponentTiles = props.unicorns.map((unicornObject) => {
    return(
      <UnicornTile
        key={unicornObject.id}
        unicornObject={unicornObject}
      />
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
