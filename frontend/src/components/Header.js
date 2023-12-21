import React from 'react'
import Logo from '../resources/Logo.png'
import '../styles/header.css'

const Header = () => {
  return (
    <div className="header">
      <img className="logo" alt="Logo" src={Logo} />
    </div>
  );
}

export default Header