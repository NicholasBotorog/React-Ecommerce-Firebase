import { Fragment, useContext } from "react"
import { Outlet, Link} from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"

import './nav-bar.scss'
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
      <div className="navigation">

        <Link className='logo-container' to='/'>
          <div><Logo/></div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          {
            currentUser ? (
              <Link className="nav-link" to='/auth' onClick={signOutUser}>SIGN OUT</Link>
              ) : (
              <Link className="nav-link" to='/auth'>SIGN IN</Link>
            )
          }
          <CartIcon />
        </div>
        {cartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
