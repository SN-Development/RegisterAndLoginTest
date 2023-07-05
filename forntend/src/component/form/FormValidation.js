//import React from 'react'

export default function FormValidation(userName,password) {
  let error = {
    user:'',
    pwd :''
  } 
  const userName_pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  const password_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
  
  if(userName==='')
  {
    error.user = 'Plese provide the username'
  }
  else if(!userName_pattern.test(userName)){
    error.user = "This username is invalid"
  }
  else{
    error.user = 'No error'
  }

  if(password==='')
  {
    error.pwd = 'Plese provide the password'
  }
  else if(!password_pattern.test(password)){
    error.pwd = "This password is invalid"
  }
  else{
    error.pwd = 'No error'
  }
  
  return (
    error
  )
}
