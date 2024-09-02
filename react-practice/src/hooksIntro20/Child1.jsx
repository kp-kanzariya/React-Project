import React, { useContext } from 'react'
import { xyz } from './Dadaji'

function Child1() {
  const x =   useContext(xyz)
  return (
    <div>
      <h1>CHILD 1 also has this {x}</h1>
    </div>
  )
}

export default Child1
