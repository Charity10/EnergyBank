
import './Contact.css';


export const Contact = () => {

  return  ( 
  <div className= 'footer'>
  <footer className="contact-section">
        <div className="edbn">
          <h3 className='contact-title'> EDBN</h3>
          <p> About us</p>
          <p>Investors</p>
          <p>Contact us</p>
          <p>Privacy policy</p>
        </div>
        <div className="sevices">
           <h3 className='contact-title'>Our services</h3>
           <p>Electricity</p>
           <p>Petroleum</p>
           <p>Gas</p>
        </div>
        
        <div className="social Media">
          <h3 className='contact-title'> Social media </h3>
             <p>Instagram</p>
             <p>Twitter</p>
             <p>Facebook</p>
             <p>Linkedin</p>
             <p>Youtube</p>
        </div>

       
        </footer>
        <div className='design'>©Designed & built by Mercy Umoh</div>
       </div>
       )
}