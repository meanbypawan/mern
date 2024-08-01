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
import Auth from "./components/Auth";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App(){
  const dispatch = useDispatch();
  return <>
    <Header/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/view-cart" element={<Auth><ViewCart/></Auth>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </div>
    <Footer/>
  </>
}
export default App;
