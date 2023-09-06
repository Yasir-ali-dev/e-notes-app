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
          <Link className='a-link' to={"/notes"}>Notes</Link>
          <a href="#" className='a-link'>Blog</a>
          <Link className='a-link' to={"/about"}>About Us</Link>
          <a className='a-link' href="/contact">Contact Us</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;