import React from 'react'
import './Bookappointment.css'
import Subheading from '../../../utilities/subheading/Subheading'
import Pera from '../../../utilities/pera/Pera'

const Bookappointment = () => {
  return (
   <section id='book_appointment'>
    <div className='container'>
        <div className='book_appointment_contant_box_flex'>
            <div className='book_appointment_contant_box'>
                <Subheading text="Book an Appointment" style="book_appointment_contant_head"/>
                <Pera text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et." style="book_appointment_contant_pera"/>
            </div>
            <div className='book_appointment_form_box'>

            </div>
        </div>
    </div>
   </section>
  )
}

export default Bookappointment