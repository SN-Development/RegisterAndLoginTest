import React,{useState} from 'react'
import './RegisterForm.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function LoginForm() {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    
    //to get input of the form
    const getUserName = (event)=>{
       setUserName(event.target.value)
       console.log(userName)
    }
    const getPassword = (event)=>{
      setPassword(event.target.value)
      console.log(password)
   }
  const submitFormInputs = ()=>{
    alert(userName)
    axios.post('https://reg-log-test4.onrender.com/api/insert',{
      userName:userName,
      password:password,
    })
  }

  return (
    <div className='signup-form'>

      <p className='signup-text'>Sign In</p>

      <div className='user-input'>
        <label>Username</label>
        <input onChange={getUserName} className='input'  type='text' placeholder='Enter email'></input>
      </div>

      <div className='user-input'>
        <label>Password</label>
        <input onChange={getPassword} className='input'  type='password' placeholder='Enter password'></input>
      </div>

      <form className='login-btn' onSubmit={submitFormInputs}>
        <button className='btn'>Sign In</button>
      </form>
      <div className='already-account'>
         <p>Create an account </p>
         {/* <a href='#' className='create-account'>Sign up</a> */}
         <Link to='/register' style={{color:'blue',textDecoration:'none',marginLeft:'5%',marginTop:'-1%'}}>Sign up</Link>
      </div>
     
      
      <div className='invalid-popup'>
        
      </div>
      
         

    </div>
  )
}
