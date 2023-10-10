import { useState } from 'react';
import './Navbar.css'
import { Outlet, Link } from 'react-router-dom';


function Navbar() {

   const [isActive, setIsActive] = useState('false');

   const toggleActiveClass = () => {
      setIsActive(!isActive);
   };

   const removeActive = () => {
      setIsActive(false)
   }
  
        return(
            <>
                <nav className='navbar'>
                   < Link className='home-link' to='/'>
                      <h1 className='logo'> E~D~B~N</h1> 
                    </Link>


                   <div className= {isActive ? 'navMenu active' : 'navMenu'}>
                       
                         <Link className='navlink' to='About' onClick={removeActive} >
                            About us
                        </Link>
                           <Link className='navlink' to='training' onClick={removeActive} >
                                Training
                           </Link>
                          
                       <Link className='navlink' to='data' onClick={removeActive} >
                           Data
                        </Link> 
                   </div>
                   <div className={isActive ? 'hamburger active' : ' hamburger'} onClick={toggleActiveClass}>
                           <span className="bar"></span>
                           <span className="bar"></span>
                           <span className="bar"></span>
                        </div>
                   </nav>




                   <Outlet />
         
                </>   
           )
      }



export default Navbar;