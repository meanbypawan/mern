import { useContext } from "react";
import Third from "./Third";
import { CounterContext } from "../App";

export default function Second(){
    let {counter} = useContext(CounterContext);
    return <>
      <h2>Second Component...{counter}</h2>
      <Third/>
    </>
}