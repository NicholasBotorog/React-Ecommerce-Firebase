
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

import { signInWithGooglePopup, createUserDocumentFromAuth, 
  // signInWithGoogleRedirect,
  // auth 
} 
  from "../../utils/firebase/firebase.utils"
import SignUpForm from '../../components/Sign Up Form/sign-up-form';
import SignInForm from "../../components/Sign In Form/sign-in-form";
import Button from '../../components/Button/button.component';

const Authentication = () => {
  
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await getRedirectResult(auth)
  //     if(response) { 
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   }
  //   getData()
  // }, [])

  return ( 
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication