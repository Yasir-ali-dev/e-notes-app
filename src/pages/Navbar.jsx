import React from 'react'

import {AiFillCopy} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className="logo">
          <Link to={"/"}>
            <AiFillCopy size={"2em"} />
          </Link>
        </div>
        <div className="links">
          <Link to={"/notes"}>Notes</Link>
          <a href="#">Blog</a>
          <Link to={"/about"}>About Us</Link>
          <a href="/contact">Contact Us</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;