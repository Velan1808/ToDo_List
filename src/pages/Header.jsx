import React from 'react'
import { FaPenToSquare } from "react-icons/fa6";
import '../App.css'

const Header = () => {
  return (
    <header className='Header'>
        <h1>
            ToDo-Lists
        </h1>
        <span><FaPenToSquare /></span>
    </header>
  )
}

export default Header