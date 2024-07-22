import { createContext, useState } from "react";
import First from "./components/First";

export const DataContext = createContext();
export const CounterContext = createContext();
export default function App(){
  let message = "Hello Friends...";
  const [counter,setCounter] = useState(100);
  return <>
    <h1>App Component...</h1>
    <DataContext.Provider value={message}>
     <CounterContext.Provider value={{counter,setCounter}}> 
       <First/>
     </CounterContext.Provider> 
    </DataContext.Provider>
  </>
}