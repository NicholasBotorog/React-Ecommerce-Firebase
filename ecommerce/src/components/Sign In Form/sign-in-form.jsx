import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { 
  createUserDocumentFromAuth,
  signInWithGooglePopup, 
  SignInUser
} from "../../utils/firebase/firebase.utils"

import './sign-in-form.scss'
import FormInput from "../Form Input/form-input"
import Button, { BUTTON_TYPE_CLASSES } from "../Button/button.component"


const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => { 
  const navigate = useNavigate()

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password }= formFields
  
  const resetFormFields = () => { 
    setFormFields(defaultFormFields)
  }

  const handleChange = (e) => { 
    const { name, value } = e.target
    setFormFields({...formFields, [name]: value})
  }

  // HANDLES SUBMIT FOR CREATING NEW USER 
  const handleSubmit = async(e) => { 
    e.preventDefault()
    
    try {
      const { user } = await SignInUser(email, password)
      navigate('/')
      // window.location.reload()
      resetFormFields()
    } catch (error) {
      switch(error.code) { 
        case 'auth/wrong-password':
          alert('Incorrect Password / Email')
          break
        case 'auth/user-not-found':
          alert('no user found!')
          break
        default:
          console.log(error)
      }
    }
  }
  
  // SIGN IN WITH GOOGLE
  const SignInWithGoogle = async() => { 
    await signInWithGooglePopup()
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type="email" name='email' required value={email} onChange={handleChange}/>
        <FormInput label='Password' type='password' name="password" required value={password} onChange={handleChange}/>
      
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm