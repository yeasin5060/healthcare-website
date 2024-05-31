import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading';
import Miniheading from '../../../utilities/miniheading/Miniheading';
import Contant from '../../../components/contact/Contant';
import { BiPhoneCall } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import './Contactclinic.css';

const Contactclinic = () => {
  return (
    <section id="contact-clinic">
        <div className="container">
            <div className="contact_clinic_container_flex">
                <div className="contact_clinic_form_container">
                    <Nanoheading text="Get in touch" style="contact_clinic_form_nanohead"/>
                    <Miniheading text="Contact" style="contact_clinic_form_head"/>
                    <form className="contact_clinic_form_box">
                        <div className="contact_clinic_form_input_box">
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="contact_clinic_form_input_box">
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div className="contact_clinic_form_input_box">
                        <input type="text" placeholder="Subject"/>
                        </div>
                        <div className="contact_clinic_form_message_box">
                            <textarea type = "text" placeholder='Message'></textarea>
                        </div>
                        <div className="contact_clinic_form_btn_box">
                            <button className="contact_clinic_form_btn">Submit</button>
                        </div> 
                    </form>
                </div>
                <div className="contact_clinic_location_box">
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

export default Contactclinic