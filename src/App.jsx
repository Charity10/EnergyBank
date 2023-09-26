
import Home from './routes/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { About } from './routes/About/About';
import Navbar from './components/Navbar/Navbar';
import { Data } from './routes/Data/Data';
import { Training } from './routes/Training/Training';
import { Authentication} from './routes/authentication/authentication';
import { Electricity } from './components/Electricity/Electricity';
import { Petroleum } from './components/Petroleum/Petroleum';
import { Gas } from './components/Gas/Gas';



function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Navbar/>} >
         <Route index element={<Home />} />  
         <Route path='about' element={<About />} />
         <Route path='data' element={<Data/>}/>
         <Route path='training' element={<Training/>}/>
         
         <Route path='electricity' element={<Electricity />} />
         <Route path='petroleum' element={<Petroleum />} />
         <Route path='gas' element={<Gas />} />

      </Route>
      <Route path='sign-in' element={<Authentication/>} />
    </Routes>
  )
}

export default App
