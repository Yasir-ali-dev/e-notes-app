import React from 'react'

import {AiFillAliwangwang,AiFillCopy} from "react-icons/ai";

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className="logo">
          <a href="@#">
            <AiFillCopy size={"2em"} />
          </a>
        </div>
        <div className="links">
          <a href="##">Notes</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
          <a href="_#">Contact Us</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;