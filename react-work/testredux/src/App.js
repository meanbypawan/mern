import { useSelector } from "react-redux"
import First from "./components/First";

export default function App(){
  let {message} =  useSelector((store)=>store.MasterData);
  return <>
    <h1>App Component : {message}</h1>
    <First/>
  </>
}