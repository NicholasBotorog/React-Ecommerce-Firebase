import './button.style.scss'

const Button_Types_Classes = { 
  google: 'google-sign-in',
  inverted: 'inverted',
}

const Button = ({ children, buttonType, ...otherProps }) => { 
  return (
    <div className={`button-container ${Button_Types_Classes[buttonType]}`} {...otherProps}>{children}</div>
  )
}

export default Button