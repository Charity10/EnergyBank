import { Component } from 'react'
import './Navbar.css'
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';


class Navbar extends Component {
  
      render() {
        return(
                <Fragment>
                <div className='nav'>
                   < Link className='home-link' to='/'>
                      <h1 className='logo'> Energy Data Bank for Nigeria</h1> 
                    </Link>


                   <div className="nav-links">
                       
                         <Link className='about-link' to='About'>
                            About us
                        </Link>
                           <Link className='training-link' to='training'>
                                Training
                           </Link>
                          
                       <Link className='data-link' to='data'>
                           Data
                        </Link>

                       
                    

                        <Link className='signup' to='signUp'>Sign up</Link>
                       <Link className='login' to='logIn'>Login</Link>

                  
                       
                   </div>
                   </div>
                   <Outlet />
         
                </Fragment>   
           )
      }
}


export default Navbar;