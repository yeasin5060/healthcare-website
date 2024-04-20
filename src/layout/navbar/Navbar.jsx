import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
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
                            <Link to ="about">about us</Link>
                        </li>
                        <li>
                            <Link to ="service">service</Link>
                        </li>
                        <li>
                            <Link to ="doctor">doctors</Link>
                        </li>
                        <li>
                            <Link to ="news">news</Link>
                        </li>
                        <li>
                            <Link to ="contact">contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar_btn_box'>
                    <IoSearch className='navbar_search_icon'/>
                    <Link to ="contact">Appointment</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar