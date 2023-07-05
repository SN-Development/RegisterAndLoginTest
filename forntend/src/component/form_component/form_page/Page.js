import React from 'react'
import './Page.css'
import Window from '../window/Window'


export default function Page({leftTheme,bgImage,right}) {
  const left_Part = {
    theme:leftTheme,
    img : bgImage
  }
  console.log(right)
  return (
    <div className='page'>
      <Window left={left_Part} right={right}></Window>
    </div>
  )
}
