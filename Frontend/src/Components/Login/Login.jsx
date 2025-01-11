import React, { useState } from 'react'
import cross from '../../assets/cross.jpg'
import './Login.css'

const LogIn = ({setLogin}) => {

    const  [currstate,setcurrstate] = useState("SignUp");
  return (
    <div className='login'>
        <form className='login-container'>

            <div className="login-title">
                <h2>{currstate}</h2>
                <img onClick={()=>setLogin(false)} src={cross}  className='cross' alt="" />
            </div>

            <div className="login-input">
                {currstate==="LogIn"?<></>: <input type="text" placeholder='Your Name' required />}
                
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder=' password' required />
            </div>
            
               <button> {currstate==='SignUp'? 'Create Account':'LogIn'} </button>


            <div className="log-condition">
                <input type="checkbox" required />

                <p>By continuing, i agree to terms of use & privacy policy</p>
            </div>

            {currstate === 'LogIn'?<p>create a new account ? <span onClick={()=>setcurrstate('SignUp')}>click here</span></p>
            : <p> Alearady have an account ? <span onClick={()=>(setcurrstate('LogIn'))} >LogIn here</span ></p>}

            
            
        </form>

    </div>
  )
}

export default LogIn