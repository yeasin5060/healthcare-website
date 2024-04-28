import React from 'react'
import './Doctorprofile.css'
import Pera from '../../utilities/pera/Pera'
import Nanoheading from '../../utilities/nanohead/Nanoheading'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Doctorprofile = ({image ,peratext,perastyle,headtext ,headstyle }) => {
  return (
    <div className='doctorprofile_contant_wrapper'>
        <div className='doctorprofile_image_box'>
            <img src={image} alt="" />
        </div>
        <div className='doctorprofile_contant_box'>
            <div className='doctorprofile_contant'>
                <Pera text={peratext} style={perastyle}/>
                <Nanoheading text={headtext} style={headstyle}/>
            </div>
            <div className='doctorprofile_icon_flex'>
                <div className='doctorprofile_icon_box'>
                    <FaFacebookF className='doctorprofile_icon' />
                </div>
                <div className='doctorprofile_icon_box'>
                    <FaLinkedinIn className='doctorprofile_icon' />
                </div>
                <div className='doctorprofile_icon_box'>
                    <FaInstagram className='doctorprofile_icon' />
                </div>
            </div>
        </div>
        <div className='doctorprofile_btn_box'>
            <button className='doctorprofile_btn'>View Profile</button>
        </div>
    </div>
  )
}

export default Doctorprofile