import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategory } from "./redux-config/CategorySlice";

function App(){
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCategory());
  },[]);
  return <>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  </>
}
export default App;
