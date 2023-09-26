import { useState } from "react"
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import './sign-in.css'


export const SignIn = () => {
  const [action, setAction] = useState('Sign Up')
  const [email, setEmail] = useState();
  const [ password, setPassword] = useState();
  
  const SignIn = async () => {
    try {
     await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
       console.error(err)
    }
   }

   const SignInWithGoogle = async () => {
    try {
      await signInWithPopup (auth, googleProvider)
    } catch (err) {
      console.error(err)
    }
   }

  return(

    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === 'Log In'? <div></div> :  <div className="input">
          <input className="user-input"  type="text" placeholder="Name" required />
        </div>}
       
        <div className="input">
          <input className="user-input" type="email" placeholder="Email" required />
        </div>
        <div className="input">
          <input className="user-input" type="password" placeholder="Password" required />
        </div>
        {action === 'Log In' ? <div></div> : <div className="input">
          <input className="user-input" type="password" placeholder="Confirm Password" required />
        </div>}
        {action === 'Log In'? <div className="forgotpassword">Forgot password?</div> : <div></div>}
         
      </div>

      <div className="submit-container">
        <div className="sign-btn" onClick={SignIn}>
        {action}
        </div>
      {action === 'Sign Up' ? <div className="checkaccount">Already have an account? <span onClick={() => {setAction('Log In')}}>Log In</span></div> : <div className="checkaccount">Don't have an account? <span  onClick={() => {setAction('Sign Up')}}>Sign Up</span></div>}
        
       </div>
      

       <div className="otheropt-container">
       <div className="otherOption">Or</div>
         <div className="google-signin">
        <img src="" alt="" />
        <div className="google" onClick={SignInWithGoogle}>Login in with Google</div>
      </div>

      <div className="fb-signin">
        <img src="" alt="" />
        <div className="fb">Login in with FaceBook</div>
      </div>
       </div>
    </div>
    
    
  )
}