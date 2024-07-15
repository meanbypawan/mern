import { useState } from "react";

function App(){
  const [counter,setCounter] =  useState(100);
  const [evenCounter, setEvenCounter] = useState(2);
  const [oddCounter,setOddCounter] = useState(1);
  const incrementCounter = ()=>{
    setCounter(counter + 1);
  }
  return <>
     <h1>App Component...</h1>
     <button onClick={incrementCounter}>{counter}</button>
     <button onClick={()=>setOddCounter(oddCounter+2)}>Odd Counter {oddCounter} </button>
     <button onClick={()=>setEvenCounter(evenCounter+2)}>Even Counter {evenCounter}</button>
  </>
}
export default App;
