import { useDispatch, useSelector } from "react-redux"
import { incrementCounter, incrementEvenCounter, incrementOddCounter } from "../redux-config/CounterSlice";

export default function First(){
    let {message} =  useSelector((store)=>store.MasterData);
    let {counter,evenCounter,oddCounter} = useSelector((store)=>store.Counters);
    const dispatch = useDispatch();
    return <>
      <h3>First Component : {message}</h3>
      <button onClick={()=>dispatch(incrementCounter({value:5}))}>Counter:{counter}</button>
      <button onClick={()=>dispatch(incrementEvenCounter())}>Even Counter :{evenCounter}</button>
      <button onClick={()=>dispatch(incrementOddCounter())}>Odd Counter:{oddCounter}</button>
    </>
}