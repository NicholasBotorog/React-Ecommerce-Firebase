import { useState } from "react"
import { authWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup, SignInUser } from "../../utils/firebase/firebase.utils"

import FormInput from "../Form Input/form-input"

import './sign-in-form.scss'
import Button from "../Button/button.component"

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => { 

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password }= formFields

  const handleChange = (e) => { 
    const { name, value } = e.target
    setFormFields({...formFields, [name]: value})
  }

  // RESETING THE FORM FIELDS AFTER THE USER IS REGISTERED 
  const resetFormFields = () => { 
    setFormFields(defaultFormFields)
  }

  // HANDLES SUBMIT FOR CREATING NEW USER 
  const handleSubmit = async(e) => { 
    e.preventDefault()
    try {
      const response = await SignInUser(email, password)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  
  // SIGN IN WITH GOOGLE
  const SignInWithGoogle = async() => { 
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type="email" name='email' required value={email} onChange={handleChange}/>
        <FormInput label='Password' type='password' name="password" required value={password} onChange={handleChange}/>
      
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType={'google'} onClick={SignInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm