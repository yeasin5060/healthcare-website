import React from 'react'
import Pera from '../../../utilities/pera/Pera'
import iamgeone from '../../../images/appointmentone.png'
import iamgetwo from '../../../images/appointmenttwo.png'
import iamgethree from '../../../images/appointmentthree.png'
import './Appointment.css'

const Appointment = () => {
  return (
    <section id='appointment'>
        <div className='container'>
            <div className='appointment_contant_wrapper_flex'>
                <div className='appointment_contant_box_flex'>
                    <div className='appointment_contant_box'>
                        <Pera text="Book an Appointment" style="appointment_contant_box_pera"/>
                    </div>
                    <div className='appointment_image_box'>
                        <img src={iamgeone} alt="not found" />
                    </div>
                </div>
                <div className='appointment_contant_box_flex_two'>
                    <div className='appointment_contant_box'>
                        <Pera text="Book an Appointment" style="appointment_contant_box_peras"/>
                    </div>
                    <div className='appointment_image_box'>
                        <img src={iamgetwo} alt="not found" />
                    </div>
                </div>
                <div className='appointment_contant_box_flex_three'>
                    <div className='appointment_contant_box'>
                        <Pera text="Book an Appointment" style="appointment_contant_box_pera"/>
                    </div>
                    <div className='appointment_image_box'>
                        <img src={iamgethree} alt="not found" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Appointment