import { useEffect, useState } from "react"

export default function UseEffectDemo(){
    const [counter,setCounter] = useState(100);
    useEffect(()=>{
        console.log("First variation..");
    });
    useEffect(()=>{
        console.log("Second variation : Component Mounted");
    },[]);
    useEffect(()=>{
        console.log("Third Variation : ComponentDidUpdate");
    },[counter]);
    useEffect(()=>{
        console.log("Ignore It..");
        return ()=>{
            console.log("Fourth Variation : ComponentWillUnMount");
        }
    },[]);
    return <>
     <h1 className="container mt-5">
        To understande How useEffect is working
        Check your browser console.For better
        understanding of all variations click
        on counter button below.
     </h1>
     <div className="container">
       <button onClick={()=>setCounter(counter+1)} className="btn btn-secondary text-white">Counter : ({counter})</button>
     </div>
    </>
}