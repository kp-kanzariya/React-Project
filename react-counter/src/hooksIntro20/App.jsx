import { useState } from 'react'
import UseEffectHookEx1 from './UseEffectHookEx1'
import UseRefHoosEx from './UseRefHoosEx'
import Dadaji from './Dadaji'
import UseReducerHook from './UseReducerHook'

function AppHook() {
//  usestate : to manage state 
//useEffect : 
// to work on function's side effects
// 1. Fetching data from Ext. Resource 
// 2. Subscription 
// 3. DOM manipulation

//useRef : to eliminate  dom METHOD 

// useContext : 
// ==> to pass data from one central component 
// (parent to child data passing)

// useReducer:
// ==>to manage state (it can handle multiple state and functions)




  return (
    <div className='App'>
     <h1>HOOKS INTRODUCTIONS</h1>
     {/* <UseEffectHookEx1/> */}
     {/* <UseRefHoosEx/> */}
     {/* <Dadaji/> */}
     <UseReducerHook/>
    </div>
  )
}

export default AppHook
