import React from 'react'
import Pera from '../../utilities/pera/Pera'
import { Link } from 'react-router-dom'
import Miniheading from '../../utilities/miniheading/Miniheading'
import Nanoheading from '../../utilities/nanohead/Nanoheading'
import { BsFillSendFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import footerlogo from '../../images/footerlogo.png'
import './Footer.css'

const Footer = () => {
  let footerlinkarray = [
    {
      id : 1,
      linkname: "Appointment",
      link : "appointmentpage"
    },
    {
      id : 2,
      linkname: "Doctors",
      link : "doctorpage"
    },
    {
      id : 3,
      linkname: "Services",
      link : "servicepage"
    },
    {
      id : 4,
      linkname: "About Us",
      link : "aboutpage"
    },
  ]
  let footercontact = [
    {
      id:1,
      contact : "Call: (237) 681-812-255",
    },
    {
      id:2,
      contact : "Email: fildineesoe@gmail.com",
    },
    {
      id:3,
      contact : "Address: 0123 Some place",
    },
    {
      id:4,
      contact : "Some country",
    },
  ]
  return (
   <section id='footer'>
      <div className='container'>
        <div className='footer_contant_wrapper_flex'>
          <div className='footer_logo_contant_box'>
              <div className='footer_logo_box'>
                <img src={footerlogo} alt="not found" />
              </div>
              <Pera text="Leading the Way in Medical Execellence, Trusted Care." style="footer_logo_contant_pera"/>
          </div>
          <div className='footer_inprotent_link_box'>
              <Miniheading text="Important Links" style="footer_inprotent_link_head"/>
              <ul className='footer_inprotent_link_flex'>
                {
                  footerlinkarray.map((item,index)=>(
                    <li className='footer_link_wrapper' key={index}>
                      <Link to={item.link}>{item.linkname}</Link>
                    </li>
                  ))
                }
              </ul>
          </div>
          <div className='footer_contact_box'>
              <Miniheading text="Contact Us" style="footer_contact_box_head"/>
              <div className='footer_contact_flex'>
               {
                  footercontact.map((item,index)=>(
                    <Nanoheading text={item.contact} style="footer_contact_list"/>
                  ))
               }
              </div>
          </div>
          <div className='footer_newsletter_box'>
              <Miniheading text="Newsletter" style="footer_newsletter_box_head"/>
              <div className='footer_newsletter_email_address_box'>
                <input className='footer_input_email_address' type='email' placeholder='Enter your email address'/>
                <BsFillSendFill className='footer_input_box_sending_icon' />
              </div>
          </div>
        </div>
        <div className='footer_copyright_box_flex'>
          <div className='footer_copyright_contant_box'>
            <Pera text="© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD" style="footer_copyright_contant_pera"/>
          </div>
          <div className='footer_copyright_inco_box'>
            <div className='footer_copyright_incon_background_box'>
              <FaLinkedinIn className='footer_copyright_icon' />
            </div>
            <div className='footer_copyright_incon_background_box'>
              <FaFacebookF className='footer_copyright_icon' />
            </div>
            <div className='footer_copyright_incon_background_box'>
              <FaInstagram className='footer_copyright_icon' />
            </div>
          </div>
        </div>
      </div>
   </section>
  )
}

export default Footer