import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector} from 'react-redux'
import { auth } from '../../firebase/fireBase'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import logo from "../../assets/logo.png"

import { selectCurrentUser } from '../../features/user/UserSlice'
import { showCart } from '../../features/cart/CartSlice'
import './Header.scss'
const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  const show = useSelector(showCart)
 
  return (
    <div className='header '>
      <Link className="logo-container  " to={'/'}>
        {/* <h2 className={`text-3xl  font-bold text-shadow  text-shadow`} >ECO BAZAAR</h2>
         */}
         <img src={logo} alt="ECO BAZAAR" title='Eco Bazaar' />
      </Link>

      <div className="options">
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
          currentUser ?
          <div className='option cursor-pointer' onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
      {
        show &&   <CartDropdown />
      }
     
    </div>
  )
}

export default Header
