
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from "../../utils/firebase/firebase.utils"
import SignUpForm from '../../components/Sign Up Form/sign-up-form';

import Button from '../../components/Button/button.component';

const SignIn = () => {
  
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await getRedirectResult(auth)
  //     if(response) { 
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   }
  //   getData()
  // }, [])


  const logGoogleUser = async () => { 
    const { user }= await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return ( 
    <div>
      <h1>Sign In</h1>
      <Button buttonType={'google'} onClick={logGoogleUser}>Sign In With Google Popup</Button>
      {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}

      <SignUpForm />
    </div>
  )
}

export default SignIn