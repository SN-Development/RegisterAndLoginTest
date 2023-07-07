import React,{useState} from 'react'
import './RegisterForm.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import FormValidation from './FormValidation'
import axios from 'axios'
//import Cookies from 'js-cookie';


export default function LoginForm() {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState([])
    const [isUserError, setIsUserError] = useState(false)
    const [isPasswordError, setIsPasswordError] = useState(false)
    const [userErrorPopUp,setUserErrorPopUP] = useState("")
    const [passwordErrorPopUp,setPasswordErrorPopUP] = useState("")
    const navigate = useNavigate()
    
    //to get input of the form
    const getUserName = (event)=>{
       setUserName(event.target.value)
       console.log(userName)
    }
    const getPassword = (event)=>{
      setPassword(event.target.value)
      console.log(password)
   }
  
  Axios.defaults.withCredentials = true; 
  const submitFormInputs = (event)=>{
    event.preventDefault()

    //To check for erros
    //setError(FormValidation(userName,password))
    let tempError = error;
    tempError = (FormValidation(userName,password))
    setError(tempError)
    //alert(error)
    console.log(tempError.user)
    //When username has an error
    if(tempError.user !== 'No error'){
      setIsUserError(true)
      setUserErrorPopUP("error-popup")
      setTimeout(()=>setUserErrorPopUP("hide"),3000)
      //setIsUserError(false)
      //alert("error is" + tempError.user)
    }else{
      // alert("No")
      setIsUserError(false)
    }

    // else{
    //   //alert("No error")
    //   setIsUserError(true)
    //   setUserErrorPopUP("error-popup")
    //   setTimeout(()=>setUserErrorPopUP("hide"),3000)
    // }
    
    //When password has an error
    if(tempError.pwd !== 'No error'){
      setIsPasswordError(true)
      setPasswordErrorPopUP("error-popup")
      setTimeout(()=>setPasswordErrorPopUP("hide"),3000)
      //alert("error is" + error.pwd)
    }

    else{
      //alert("No error")
      setIsPasswordError(false)
    }

    axios.post('https://reg-log-onrender-api.onrender.com/api/login',{
      userName:userName,
      password:password,
      
    }).then(response=>{
      //alert(response.data.message)
      // if (response.status === 200) {
      //   const token = response.data.tok;
      //   Cookies.set('token', token);}
      if(response.data.Status === "Success")
      {
        // const token = response.data.tok;
        // Cookies.set('token', token);
         alert("login-succcess")
         alert(response.data.tok)
         //navigate('/home')
      }
      else{
        alert(response.data.message)
      }
    }
      
    )
    setUserName("")
    setPassword("")
  }

  return (
    <div className='signup-form'>

      <p className='signup-text'>Sign In</p>

      <div className='user-input'>
        <label>Username</label>
        <input onChange={getUserName} className='input' value={userName} type='text' placeholder='Enter email'></input>
        {isUserError?(<p className={userErrorPopUp}>{error.user}</p>):(<></>)}
        
      </div>

      <div className='user-input'>
        <label>Password</label>
        <input onChange={getPassword} className='input' value={password} type='password' placeholder='Enter password'></input>
        {isPasswordError?(<p className={passwordErrorPopUp}>{error.pwd}</p>):(<></>)}
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
