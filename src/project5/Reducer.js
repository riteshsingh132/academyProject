import { createContext } from "react";

const initstate={
    abc:""
}

const myContext=createContext(initstate)

const reducer=(state,action)=>{
    switch (action.type){
        case "SET_DATA":
            return {...state,abc:action.payload}
            default:
                return state;
    }
}

export const MyProivder=({children})=>{
    const [state,dispatch]=useReducer(reducer,initstate)
    return (
        <myContext.Provider value={{state,dispatch}}>
        {children}
        </myContext.Provider>
    )
}