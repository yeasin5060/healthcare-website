import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Subheading from '../../../utilities/subheading/Subheading'
import Contant from '../../../components/contact/Contant'
import { BiPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import './Newscontact.css'

const Newscontact = () => {
  return (
    <section id='newscontact'>
        <div className='container'>
            <div className='newscontact_contact_wrapper'>
                <div className='newscontact-home_contact_heading_box'>
                    <Nanoheading text="Get in touch" style="newscontact_nenohead"/>
                    <Subheading text="Contact" style="newscontact_heading"/>
                </div>
                <div className='newscontact_location_box_flex'>
                    <Contant headtext="Emergency" contact="(237) 681-812-255" contacttwo="(237) 666-331-894" icon={<BiPhoneCall />}/>
                    <Contant headtext="Location" contact="0123 Some place" contacttwo="9876 Some country" icon={<IoLocationOutline />}/>
                    <Contant headtext="Email" contact="fildineeesoe@gmil.com" contacttwo="myebstudios@gmail.com" icon={<CiMail />}/>
                    <Contant headtext="Working Hours" contact="Mon-Sat 09:00-20:00" contacttwo="Sunday Emergency only" icon={<FaRegClock />}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newscontact