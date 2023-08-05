import { Component } from 'react'
import './Navbar.css'

class Navbar extends Component {
    state = {
        open: false,
      };
      handleButtonClick = () => {
        this.setState((state) => {
            return {
                open: !state.open,
            };
        })
      }
      render() {
        return(
                <div className='navigation'>
                    
                   <div className="right-col">
                      <h1 className='logo'> Energy Data  <br/> Bank for Nigeria</h1> 
                    </div>

                   <div className="nav-items">
                       <ul className='main-nav'>
                           <li className='nav-list'> Home</li>
                           <li className='nav-list'>About us</li>
                           <li className='nav-list'>Training</li>
                           <li onClick={this.handleButtonClick} className='nav-list'>Data</li>
                         { this.state.open && ( 

                         <div className="dropdown">
                               <ul className='Data-nav'>
                                   <li>Electricity</li>
                                   <li>Petroleum</li>
                                   <li>Gas</li>
                               </ul>
                           </div>
                           )}
                       </ul>
                   </div>
                   
                   <div className='register'>
                       <p className='signup'>Sign up</p>
                       <p className='login'>Login</p>
                   </div>
                </div>   
           )
      }
}


export default Navbar;