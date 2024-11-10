import React, { useContext } from 'react'
import Child1 from './Child1'
import { xyz} from './Dadaji'
import Child2 from './Child2'
import Child3 from './Child3'

function Parent() {
    const money = useContext(xyz)
  return (
    <div>
      <h1>PARENT has this money {money}</h1>
      <Child1/>
      <Child2/>
      <Child3/>

    </div>
  )
}

export default Parent
