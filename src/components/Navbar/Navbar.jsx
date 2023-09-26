import { Component } from 'react'
import './Navbar.css'
import { Outlet, Link } from 'react-router-dom';

import { Fragment } from 'react';


class Navbar extends Component {
  
      render() {
        return(
                <>
                <div className='nav'>
                   < Link className='home-link' to='/'>
                      <h1 className='logo'> E~D~B~N</h1> 
                    </Link>


                   <div className="nav-links">
                       
                         <Link className='about-link' to='about'>
                            About us
                        </Link>
                           <Link className='training-link' to='training'>
                                Training
                           </Link>
                          
                       <Link className='data-link' to='data'>
                           Data
                        </Link>

                       
                       <Link className='login' to='sign-in'>Sign in</Link>

                   </div>
                   </div>
                   <Outlet />
         
                </>   
           )
      }
}


export default Navbar;