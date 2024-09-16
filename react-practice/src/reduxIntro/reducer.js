


export const reducerfun = (state=12,action)=>{

    console.log(action.type)
    switch(action.type)
    {
        case "increment": return state+1;

        default: return state;
    }

}
