import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  </>
}

export default App;
