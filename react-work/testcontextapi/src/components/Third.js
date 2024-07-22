import { useContext } from "react"
import { CounterContext, DataContext } from "../App"

export default function Third(){
    let message = useContext(DataContext);
    let {counter,setCounter} = useContext(CounterContext);
    return <>
      <h2>Third Component..{message}</h2>
      <button onClick={()=>setCounter(counter+1)}>Counter:  {counter}</button>
    </>
}