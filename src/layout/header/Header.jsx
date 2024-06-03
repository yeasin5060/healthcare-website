import React from 'react'
import './Header.css'
import { FaPhoneVolume } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import meddicallogo from '../../images/Meddicallogo.png'
import Nanoheading from '../../utilities/nanohead/Nanoheading';
import { useHedardataQuery } from '../../counter/docprofileSlice';
const Header = () => {
    const {data} = useHedardataQuery()
  return (
    <section id='header'>
        <div className='container'>
            <div className='header_box_flex'>
                <div className='header_logo_box'>
                    <img src={meddicallogo} alt="not found" />
                </div>
                {
                    data &&
                    data.map((item)=>(
                        <div key={item.id} className='header_contact_service_box'>
                            <div className='header_icon_contact_flex'>
                                <div className='header_icon_box'>
                                    <FaPhoneVolume className='header_icon' />
                                </div>
                                <div className='header_contact_box'>
                                    <Nanoheading text={item.contact} style="header_contact_box_head"/>
                                    <span className='header_contact_box_number'>{item.number}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Header