import React from 'react'
import './LeftPart.css'

export default function LeftPart({lTheme, bgImg,height}) {
  return (
    <div className='left-part'>
      <div className='up-part'>
         <p className='login-welcome'>{lTheme}</p>
      </div>
      <div className='middle-part'>
          <img src={bgImg} alt='register' style={{height:height,}}></img>
      </div>
      <div className='down-part'>

      </div>
    </div>
  )
}
