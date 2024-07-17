import { useReducer } from "react"

export default function(){
    const [state,dispatch] = useReducer((state,action)=>{
        if(action.type =="evenCounter")
            state.evenCounter = state.evenCounter + 2;
        else if(action.type == "oddCounter")
            state.oddCounter =  state.oddCounter + 2;
        return {...state}; 
    },{
        evenCounter: 100, oddCounter: 101
    })
    return <>
      <h4>Multiple counter</h4>
      <button onClick={()=>dispatch({type:"evenCounter"})}>Even Counter :{state.evenCounter}</button>
      <button onClick={()=>dispatch({type: "oddCounter"})}>Odd Counter : {state.oddCounter}</button>
    </>
}