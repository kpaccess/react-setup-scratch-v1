import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  let active = 'underline'
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? active : 'bg-red-500 font-thi'
        }
      >
        Home
      </NavLink>
      {' | '}
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? active : 'inactive')}
      >
        About
      </NavLink>
    </nav>
  )
}

export default Header
