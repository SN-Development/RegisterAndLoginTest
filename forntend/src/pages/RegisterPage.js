import React from 'react'
import Page from '../component/form_page/Page'

export default function RegisterPage() {
  const img = './images/registerDoctor.png'
  const right = {
    theme: "Sign Up",

  }  
  return (
    <div>
      <Page  leftTheme="Join with us" bgImage={img} right={right} ></Page>
    </div>
  )
}
