import { Fragment, useContext } from "react"
import { Outlet, Link} from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import './nav-bar.scss'

import { UserContext } from "../../context/users"
import { signOutUser } from "../../utils/firebase/firebase.utils"

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

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
        </div>
      </div>

      <Outlet />
    </Fragment>
  )
}

export default Navigation
