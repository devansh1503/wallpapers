
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Upload from './Components/Upload';
import Dowload from './Components/Dowload';
import Searchpage from './Components/Searchpage';
import { useState } from 'react';
import Sidebar from './Components/Sidebar';

function App() {
  const[sidebar, setSide] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar toggf={setSide} currtogg={sidebar}></Navbar>
      {sidebar && <Sidebar></Sidebar>}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/upload' element={<Upload></Upload>}></Route>
        <Route path='/download' element={<Dowload></Dowload>}></Route>
        <Route path='/search' element={<Searchpage></Searchpage>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
