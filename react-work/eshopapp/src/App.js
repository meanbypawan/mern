import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategory } from "./redux-config/CategorySlice";
import Product from "./components/Product";
import Header from "./components/Header";
import SignIn from "./components/SignIn";

function App(){
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCategory());
  },[]);
  return <>
    <Header/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
    </div>
  </>
}
export default App;
