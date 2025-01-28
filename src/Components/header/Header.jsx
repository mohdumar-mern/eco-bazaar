import React from 'react'
import {Link} from 'react-router-dom'

import './Header.scss'
import { auth } from '../../firebase/fireBase'
const Header = ({currentUser}) => {
  return (
    <div className='header '>
      <Link className="logo-container  " to={'/'}>
        <h2 className={`text-3xl  font-bold text-shadow  text-shadow`} >ECO BAZAAR</h2>
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
      </div>
    </div>
  )
}

export default Header
