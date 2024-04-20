import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id='navbar'>
        <div className='container'>
            <div className='navbar_wrapper_flex'>
                <div className='navbar_menu_box'>
                    <ul className='navbar_link_box_flex'>
                        <li>
                            <Link to ="/">home</Link>
                        </li>
                        <li>
                            <Link to ="about">about</Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar_btn_box'>
                    <Link to ="contact">contact</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar