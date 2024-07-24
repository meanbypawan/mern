import { useSelector } from "react-redux"
import First from "./components/First";
import Category from "./components/Category";

export default function App(){
  let {message} =  useSelector((store)=>store.MasterData);
  return <>
    {/* <h1>App Component : {message}</h1>
    <First/> */}
    <Category/>
  </>
}