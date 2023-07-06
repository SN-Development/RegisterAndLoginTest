import React, { useState } from 'react'
import './RegisterForm.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function RegisterForm() {

  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  
  //to get input of the form
  const getUserName = (event)=>{
     setUserName(event.target.value)
     console.log(userName)
  }
  const getPassword = (event)=>{
    setPassword(event.target.value)
    console.log(password)
 }
 const getConfirmPassword = (event)=>{
  setConfirmPassword(event.target.value)
  console.log(confirmPassword)
}
const submitFormInputs = ()=>{
  axios.post('http://localhost:3007/api/insert',{
    userName:userName,
    password:password,
  })
}

  return (
    <div className='signup-form'>

      <p className='signup-text'>Sign Up</p>

      <div className='user-input'>
        <label>Username</label>
        <input onChange={getUserName} className='input'  type='text' placeholder='Enter email'></input>
      </div>

      <div className='user-input'>
        <label>Password</label>
        <input onChange={getPassword} className='input'  type='password' placeholder='Enter password'></input>
      </div>

      <div className='user-input'>
        <label>Confirm Password</label>
        <input onChange={getConfirmPassword} className='input'  type='password' placeholder='Re-enter password'></input>
      </div>

      <form className='login-btn' onSubmit={submitFormInputs}>
        <button className='btn'>Sign Up</button>
      </form>
      <div className='already-account'>
         <p>Already have an account </p>
         {/* <a href='' className='create-account'>Sign in</a> */}
         <Link to='/' className='create-account' style={{color:'blue',textDecoration:'none',marginLeft:'5%',marginTop:'-1%'}}>Sign in</Link>
      </div>
     
      
      <div className='invalid-popup'>
        
      </div>
      
         

    </div>
  
  )
}
