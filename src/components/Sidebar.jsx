import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='side'>
            <Link to={"/addnote"} className="btn">
                Add Note
            </Link>
            <Link to={"/notes"} className="btn">
                All Notes
            </Link>
            <button className="btn">
                Completed 
            </button>
            <button className="btn">
                Favourite 
            </button>
            <button className='btn btn-end'>Explore!</button>
        </aside>
        
  )
}

export default Sidebar

