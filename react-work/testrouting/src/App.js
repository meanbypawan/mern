import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import UseEffectDemo from './components/UseEffectDemo';
import Category from './components/Category';

function App() {
  return <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/useEffectDemo' element={<UseEffectDemo/>}/>
      <Route path='/categories' element={<Category/>}/>
    </Routes>
  </>
}

export default App;
