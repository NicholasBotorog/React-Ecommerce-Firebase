import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import './nav-bar.scss'

const Navigation = () => {
  return( 
    <Fragment>
      <div className="navigation">

        <Link className='logo-container' to='/'>
          <div><Logo/></div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          <Link className="nav-link" to='/signIn'>SIGN IN</Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  )
}

export default Navigation
