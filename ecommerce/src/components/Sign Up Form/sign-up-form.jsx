import { useState } from "react"
import { authWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

import FormInput from "../Form Input/form-input"

import './sign-up-form.scss'
import Button from "../Button/button.component"


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => { 

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword }= formFields


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

    if(password !== confirmPassword){
      alert('Password do NOT match!')
      return 
    }

    try {
      const { user } = await authWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields()

    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('Cannot create user, email already in use')
      } else{
        console.log('USER CREATION', error)
      }
    }
  }
  
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' type="text" name='displayName' required value={displayName} onChange={handleChange}/>
        <FormInput label='Email' type="email" name='email' required value={email} onChange={handleChange}/>
        <FormInput label='Password' type='password' name="password" required value={password} onChange={handleChange}/>
        <FormInput label='Confirm Password' type='password' name='confirmPassword' required value={confirmPassword} onChange={handleChange}/>

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm