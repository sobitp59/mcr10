import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to={"/"}>dashboard</Link>
        <Link to={"/departments"}>departments</Link>
        <Link to={"/products"}>products</Link>
    </div>
  )
}

export default Header