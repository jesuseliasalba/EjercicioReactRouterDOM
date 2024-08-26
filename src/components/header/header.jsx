import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <NavLink to="/"> Home 🏡</NavLink>
            <NavLink to="characters">Characters 🐼</NavLink>
            <NavLink to="contact"> Contact 🕵️‍♂️</NavLink>
        </nav>
    </header>
  )
}

export default Header