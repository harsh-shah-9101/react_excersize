import React from 'react'
import { ThemeContext } from '../assets/context/ThemeContext';
import { useContext } from 'react';




const Navbar = () => {

  const theme = useContext(ThemeContext);
  console.log(theme.color);
  return (
    <div>navbar  :  {theme.color}</div>
  )
}

export default Navbar;