import { useReducer } from "react"
import MultipleCounter from "./MultipleCounter";

export default function(){
  const [counter,dispatch] = useReducer((state,action)=>{
    // action : {type:"",payload: input}
    if(action.type == "increment"){
      state = state + action.payload;
    }
    else if(action.type == "decrement"){
      state = state - action.payload;
    }
    return state;
  },100);
  return <>
     <h1>App component</h1>
     <button onClick={()=>dispatch({type:'increment',payload: 5})}>Counter : {counter}</button>
     <button onClick={()=>dispatch({type:'decrement',payload:3})}>Counter : {counter}</button>
     <MultipleCounter/> 
  </>
}