import React from 'react'
import './RightPart.css'
import RegisterForm from '../form/RegisterForm'
import LoginForm from '../form/LoginForm'

export default function RightPart({right}) {
  
  return (
    <div className='right-part'>
      {right.theme==="Sign Up"?<RegisterForm></RegisterForm>:<LoginForm></LoginForm>}
       {/* <RegisterForm></RegisterForm> */}
    </div>
  )
}
