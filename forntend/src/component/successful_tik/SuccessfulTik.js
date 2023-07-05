import React, { useEffect, useState } from 'react'
import './SuccessfulTik.css'
export default function SuccessfulTik() {
  const[checkClass, setCheckClass] = useState("old-checkmark")
  //const[name, setName] = useState('shashindu')
  const[bigCircleClass, setBigCircleClass] = useState("circle")
  useEffect(()=>{
    //  setInterval(()=>{
    //   if(bigCircleClass=='circle'){
    //     setBigCircleClass('')
    //   }
    //   else{
    //     setBigCircleClass('circle')
    //   }
    //  },1000)
     
    if(bigCircleClass==='circle'){
      setTimeout(()=>setBigCircleClass(''),3000)
      setTimeout(()=> setCheckClass('before-checkmark'),3000)
    }   
    else{
      setTimeout(()=>setBigCircleClass('circle'),400)
      setTimeout(()=> setCheckClass('checkmark'),800)
    }

    //  setTimeout(()=>{
    //   if(bigCircleClass==='circle'){
    //     setBigCircleClass('')
    //     setTimeout(()=>setCheckClass('before-checkmark'),1000)
    //     //setCheckClass('before-checkmark')
       
    //   }
    //   else{
    //     setBigCircleClass('circle')
    //     //setCheckClass('before-checkmark')
    //     //setTimeout(()=> setCheckClass('before-checkmark'),1000)
    //     setTimeout(()=> setCheckClass('checkmark'),1000)
    //   }
    //  },1700)
    //  setTimeout(()=>{
    //   if(name==='shashindu'){
    //     setName('chamika')
    //   }
    //   else{
    //     setName('shashindu')
    //   }
    // },3000)
     
  },[bigCircleClass])
  return (
     <div className='container'>
      {/* <h1>{name}</h1> */}
         <div className='box'>
           {/* <div className={}> */}
              <p className='succes-title'>Registration Successfully !</p>
              <div className={bigCircleClass}>
                <div className={checkClass}></div>
              </div>
              <p className='description-text'>Now you can use your credentials to login to the system.</p>
              <button className='ok-btn'>OK</button>
           {/* </div>
            */}
         </div>
     </div>
  )
}
