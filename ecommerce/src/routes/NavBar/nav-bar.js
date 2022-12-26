import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './nav-bar-style'

import CartIcon from "../../components/Cart-Icon/cart-icon"
import CartDropdown from "../../components/Cart-Dropdown/cart-dropdown"

import { UserContext } from "../../context/users"
import { CartContex } from "../../context/cart-dropdown"

import { signOutUser } from "../../utils/firebase/firebase.utils"


const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { cartOpen } = useContext(CartContex)

  return( 
    <Fragment>
      <NavigationContainer>

        <LogoContainer to='/'>
          <div><Logo/></div>
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          {
            currentUser ? (
              <NavLink as='span' to='/auth' onClick={signOutUser}>SIGN OUT</NavLink>
              ) : (
              <NavLink to='/auth'>SIGN IN</NavLink>
            )
          }
          <CartIcon />
        </NavLinksContainer>
        {cartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
