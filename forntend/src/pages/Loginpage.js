import React from 'react'
import Page from '../component/form_page/Page'


export default function Loginpage() {
  const img = './images/login-doctor.png' 
  const right = {
    theme: "Sign In",

  }   
  return (
    <div>
      <Page leftTheme="Welcome to S&N Care" bgImage={img} right={right}></Page>
    </div>
  )
}
