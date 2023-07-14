import { createContext, useReducer } from "react";

export const UserContext=createContext();

export const userReducer =(state,action)=>{
    switch(action.type){
        case "SET_USER":
            return {...state,user:action.payload,};
            default:
                return state
    }
}


export const UserProvider = ({ children }) => {
    const initialState = {
      user: null,
    };
    const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};