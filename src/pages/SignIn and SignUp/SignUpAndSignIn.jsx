import SignIn from '../../Components/sign-in/SignIn'
import SignUp from '../../Components/sign-up/SignUp'
import { SignInAndSignUpContainer } from './SignUpAndSignInStyled'

const SignUpAndSignIn = () => {
  return (
    <SignInAndSignUpContainer>
     <SignIn />
     <SignUp />
    </SignInAndSignUpContainer>
  )
}

export default SignUpAndSignIn
