import { createContext } from "react";
import { useReducer } from "react";
import { reducer } from "./Reducer";
export const Blogcontext = createContext();

export const Context = (props) => {
  const [state, dispatch] = useReducer(reducer, { toggle: false });
  return (
    <Blogcontext.Provider value={{ state, dispatch }}>
      {props.children}
    </Blogcontext.Provider>
  );
};
