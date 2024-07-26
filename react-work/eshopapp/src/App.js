import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategory } from "./redux-config/CategorySlice";
import Product from "./components/Product";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import ViewCart from "./components/ViewCart";
import axios from "axios";

function App(){
  const dispatch = useDispatch();
  const {token} = useSelector((store)=>store.User);
  useEffect(()=>{
    dispatch(fetchCategory());
    axios.interceptors.request.use((config)=>{
      console.log("Request Interceptor Executed...."+token);
      config.headers.Authorization = token;
      return config;
    });
  },[token]);
  
  return <>
    <Header/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/view-cart" element={<ViewCart/>}/>
      </Routes>
    </div>
  </>
}
export default App;
