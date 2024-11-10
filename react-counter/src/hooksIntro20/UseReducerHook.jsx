import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

let val = 50;
function UseReducerHook() {
  // const [state,setState] = useState(value)
  // useEffect(()=>{},[])
  // const x = useRef() : ref prop inside any tag ==> x = {current:tag}
  // createContext ==> inside main parent (App) compo useContext(context)

  // const [state,setState] = useReducer(reducerFun,value)

  const ReducerFun = (state,action) => {

    switch(action.type)
    {
        case "inc":
            return state+1;

            case "dec":
                return state-1;
                default: 
                return state;
    }

  };
  const [state, dispatch] = useReducer(ReducerFun, val);

  return (
    <div>
      <button
        onClick={() => {
            dispatch({ type: "dec" });
        }}
      >
        -
      </button>

      <h2>{state}</h2>

      <button
        onClick={() => {
            dispatch({ type: "inc" });
        }}
      >
        +
      </button>
    </div>
  );
}

export default UseReducerHook;
