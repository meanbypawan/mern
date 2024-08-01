import { useState } from "react";
import First from "./components/First";

export default function App(){
  console.log("App Component Render...");
  const [counter,setCounter] = useState(100);
  return <>
    <h3>App Component...</h3>
    <button onClick={()=>setCounter(counter+1)}>Counter : {counter}</button>
    <First/>
  </>
}