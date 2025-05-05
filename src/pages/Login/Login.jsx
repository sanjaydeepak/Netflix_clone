import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {

   const [signState,setSignState]=useState("Sign In ")



  return (
    <div className='login'>
      <img src={logo}  className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
         {/* only for the Signup the Name is used to display normal singin dispaly:none; */}
         {/* The ternary Operator is used Here */}
          {signState=="Sign Up"? <input type="text" placeholder='Your name'/>:<></>}
          <input type="email" placeholder='Email'></input>
          <input type="password" placeholder='Password'></input>
        <button>Sign Up</button>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor=''>Remember Me</label>
          </div>
          <p>Need Help?</p>
        </div>
        </form>
        <div className="form-switch">
          {/* Here Also Used the Ternary Operator for the Sign In  */}
          {signState=="Sign In"? <p>New to Netflix <span onClick={()=>{setSignState("Sign Up")}}> Sign Up Now</span></p>:
          <p>Already have Account?<span on onClick={()=>{(setSignState("Sign In"))}}> Sign In Now</span></p>
          }
          
         
          
        </div>
      </div>
    </div>
  )
}

export default Login
