import { useState } from 'react';
import Home from './routes/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import { Data } from './components/Data/Data';


function App() {
  
  return (
    <Routes>
       <Route path='/' element={<Home />} />  
       <Route path='/about' element={<About />}>
       </Route>
       <Route path='data' element={<Data/>}/>
    </Routes>
  )
}

export default App
