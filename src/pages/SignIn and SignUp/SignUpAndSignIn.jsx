import React from 'react'

import './SignUpAndSignIn.scss'
import SignIn from '../../Components/sign-in/SignIn'
import SignUp from '../../Components/sign-up/SignUp'
const SignUpAndSignIn = () => {
  return (
    <div className='sign-in-and-sign-up'>
     <SignIn />
     <SignUp />
    </div>
  )
}

export default SignUpAndSignIn
