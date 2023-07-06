import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function HomePage() {
    const [auth,setAuth] = useState(false)
    const [user,setUser] = useState("")
    const navigate = useNavigate()
    //var location = useLocation()
    axios.defaults.withCredentials = true; 
    // useEffect(()=>{
    //     //  axios.get('http://localhost:3007/api/home')
    //     //  .then(res=>{
    //     //     if(res.data.valid)
    //     //     {
    //     //        setUser(res.data.user)
    //     //     }
    //     //     else{
    //     //        navigate('/')
    //     //     }
    //     //  }

    //     //  )
    //     // axios.get('http://localhost:3007/api/home').then(res=>{
    //     //   if(res.data.Status === "Success"){
    //     //       setAuth(true)
    //     //       setUser(res.data.name)
    //     //   }
    //     //   else{

    //     //   }
    //     // })
    // },[])

    useEffect(()=>{
      axios.get('https://reg-log-test4.onrender.com/api/home').then(res=>{
              if(res.data.Status === "Success"){
                  setAuth(true)
                  setUser(res.data.name)
              }
              else{
                 alert("not success")
              }
            })
      // axios.get('https://reg-log-test4.onrender.com/api/test').then(response=>{
      //   setUser(response.data)
      //   //setAuth('')
      // })
    },[])

    const handleLogOut = ()=>{
      axios.get('https://reg-log-test4.onrender.com/api/logout').then(res=>{
        if(res.data.Status === "Success"){
           navigate('/home')
           window.location.reload(true)
        }
      }).catch(err=>console.log(err))

    }
    // const testApiConnection = async () => {
    //   try {
    //     const response = await axios.get('https://reg-log-test4.onrender.com/api/test');
    //     console.log('API connection successful:', response.data);
    //   } catch (error) {
    //     console.error('API connection error:', error);
    //   }
    // }
    const testApiConnection = ()=>{
      axios.post('https://reg-log-test4.onrender.com/api/insert').then(response=>{
          //setUser(response.data.result.UserName)
          console.log(response.data)
          //setAuth('')
        })
    }
  return (
   <div>
    <button onClick={testApiConnection}>Test API</button>
     {auth?( 
     <div>
      
      {user}
      <h1>Home page {user}</h1>
      <button onClick={handleLogOut}>logout</button>
    </div>
    ):(
      <div>
      <h1>Home page</h1>
      <Link to='/'>Log in</Link>
    </div>
    )}
   </div>
  )
}
