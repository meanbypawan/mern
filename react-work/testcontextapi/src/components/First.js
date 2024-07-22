import { useContext } from "react";
import Second from "./Second";
import { CounterContext, DataContext } from "../App";

export default function First(){
    let message = useContext(DataContext);
    let {counter} = useContext(CounterContext);
    return <>
      <h2>First Component...{message} : {counter}</h2>
      <Second/>
    </>
}