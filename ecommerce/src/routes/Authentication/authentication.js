
import SignUpForm from '../../components/Sign Up Form/sign-up-form';
import SignInForm from "../../components/Sign In Form/sign-in-form";

import './authentication.scss'
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
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication