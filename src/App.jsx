import Home from './routes/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import { Data } from './routes/Data/Data'
import { Training } from './routes/Training/Training';



function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navbar/>} >
         <Route index element={<Home />} />  
         <Route path='about' element={<About />} />
         <Route path='data' element={<Data/>}/>
         <Route path='training' element={<Training/>}/>
      </Route>
      
    </Routes>
  )
}

export default App
