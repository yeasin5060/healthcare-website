import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import './Navbar.css'
import { useNavrouteQuery } from '../../counter/docprofileSlice';

const Navbar = () => {
    const {data} = useNavrouteQuery()
    console.log(data)
  return (
    <nav id='navbar'>
        <div className='container'>
            <div className='navbar_wrapper_flex'>
                <div className='navbar_menu_box'>
                    <ul className='navbar_link_box_flex'>
                        {
                            data && 
                            data.map((item)=>(
                                <li key={item.id}>
                                    <Link to ={item.route}>{item.pagesname}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='navbar_btn_box'>
                    <IoSearch className='navbar_search_icon'/>
                    <Link to ="appointment">Appointment</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar