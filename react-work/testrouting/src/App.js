import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import UseEffectDemo from './components/UseEffectDemo';
import Category from './components/Category';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CategoryContext = createContext();
function App() {
  const [categoryList,setCategoryList] = useState([]);
  useEffect(()=>{
    loadCategories();
  },[]);
  const loadCategories = ()=>{
    axios.get("https://dummyjson.com/products/categories")
    .then(response=>{
       setCategoryList(response.data);
     })
    .catch(err=>{
        console.log(err);
    });
  }
  return <>
    <Header/>
    <CategoryContext.Provider value={{categoryList,setCategoryList}}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/useEffectDemo' element={<UseEffectDemo/>}/>
      <Route path='/categories' element={<Category/>}/>
    </Routes>
   </CategoryContext.Provider> 
  </>
}

export default App;
