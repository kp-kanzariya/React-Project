import React, { useContext } from 'react'
import { xyz } from './Dadaji'

function Child3() {
   const y =  useContext(xyz)
  return (
    <div>
      <h1>CHILD 3 {y}</h1>
    </div>
  )
}

export default Child3
