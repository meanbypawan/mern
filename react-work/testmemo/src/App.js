import { useCallback, useMemo, useState } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fouth from "./components/Fourth";

export default function App(){
  console.log("App Component Render...");
  const [counter,setCounter] = useState(100);
  let customer = {id:100,name:"ABC",age:30};// customer = 67676
  customer = useMemo(()=>customer,[]);// to memoized value[Object]
  const sayHello = useCallback(()=>()=>{
    window.alert("Hello Friends...");
  },[]);
  return <>
    <h3>App Component...</h3>
    <button onClick={()=>setCounter(counter+1)}>Counter : {counter}</button>
    <First/>
    <Second message="hello..."/>
    <Third customer={customer}/>
    <Fouth sayHello={sayHello}/>
  </>
}