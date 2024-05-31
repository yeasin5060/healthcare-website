import React from 'react'
import Pera from '../../../utilities/pera/Pera'
import Miniheading from '../../../utilities/miniheading/Miniheading'
import './Appointmentbooking.css'
import Shuduletimebox from '../../../components/shuduletimebox/Shuduletimebox'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'

const Appointmentbooking = () => {
  return (
    <section id="appointment_booking">
        <div className="container">
            <div className="appointment_booking_container_flex">
                <div className="appointment_booking_form_container">
                    <Miniheading text="Book an Appointment" style="appointment_booking_form_head"/>
                    <Pera text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et." style="appointment_booking_form_pera"/>
                    <form className="appointment_booking_form_box">
                        <div className="appointment_booking_form_input_box">
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div className="appointment_booking_form_input_box">
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div className="appointment_booking_form_input_box">
                            
                        </div>
                        <div className="appointment_booking_form_input_box">
                            <input type="date" placeholder="Date"/>
                        </div>
                        <div className="appointment_booking_form_input_box">
                            <input type="o" placeholder="Gerder"/>
                        </div>
                        <div className="appointment_booking_form_department_box">
                           <Pera text=" Department" style="appointment_booking_form_department"/>
                           <select >
                                <option></option>
                           </select>
                        </div>
                        <div className="appointment_booking_form_message_box">
                            <textarea type = "text" placeholder='Message'></textarea>
                        </div>
                        <div className="appointment_booking_form_btn_box">
                            <button className="appointment_booking_form_btn">Submit</button>
                        </div> 
                    </form>
                </div>
                <div className="appointment_booking_shudule_box">
                    <Miniheading text="Shedule hours" style="appointment_booking_shudule_head"/>
                    <Shuduletimebox day="Monday" time="09:00 AM - 07:00 PM"/>
                    <Shuduletimebox day="Tuesday" time="09:00 AM - 07:00 PM"/>
                    <Shuduletimebox day="Wednesday" time="09:00 AM - 07:00 PM"/>
                    <Shuduletimebox day="Thursday" time="09:00 AM - 07:00 PM"/>
                    <Shuduletimebox day="Friday" time="09:00 AM - 07:00 PM"/>
                    <Shuduletimebox day="Saturday" time="09:00 AM - 07:00 PM"/>
                    <Shuduletimebox day="Sunday" time="Closed"/>
                    <div className='appointment_booking_emergency_box'>
                        <Miniheading text="Emergency Call" style="appointment_booking_emergency_call"/>
                        <Nanoheading text="(237) 681-812-255" style="appointment_booking_emergency_number" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Appointmentbooking