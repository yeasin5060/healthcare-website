import React from 'react'
import './Header.css'
import Miniheading from '../../utilities/miniheading/Miniheading'
import { FaPhoneVolume } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import meddicallogo from '../../images/Meddicallogo.png'
const Header = () => {
  return (
    <section id='header'>
        <div className='container'>
            <div className='header_box_flex'>
                <div className='header_logo_box'>
                    <img src={meddicallogo} alt="not found" />
                </div>
                <div className='header_contact_service_box'>
                    <div className='header_icon_contact_flex'>
                        <div className='header_icon_box'>
                            <FaPhoneVolume className='header_icon' />
                        </div>
                        <div className='header_contact_box'>
                            <Miniheading text="Emergency" style="header_contact_box_head"/>
                            <span className='header_contact_box_number'>(237) 681-812-255</span>
                        </div>
                    </div>
                    <div className='header_icon_contact_flex'>
                        <div className='header_icon_box'>
                            <FiClock className='header_icon' />
                        </div>
                        <div className='header_contact_box'>
                            <Miniheading text="Work Hour" style="header_contact_box_head"/>
                            <span className='header_contact_box_number'>09:00 - 20:00 Everyday</span>
                        </div>
                    </div>
                    <div className='header_icon_contact_flex'>
                        <div className='header_icon_box'>
                            <IoLocationOutline className='header_icon' />
                        </div>
                        <div className='header_contact_box'>
                            <Miniheading text="Location" style="header_contact_box_head"/>
                            <span className='header_contact_box_number'>0123 Some Place</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header