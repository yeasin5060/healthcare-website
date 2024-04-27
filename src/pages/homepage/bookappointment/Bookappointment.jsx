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
            <form className='book_appointment_form_box'>
                <div className='book_appointment_form_container_box'>
                    <div className='book_appointment_input_container'>
                        <div className='book_appointment_input_box'>
                            <input className='book_appointment_inputs' type="text" placeholder='Name' />
                        </div>
                        <div className='book_appointment_input_box'>
                            <input className='book_appointment_inputs' type="email" placeholder='Email' />
                        </div>
                        <div className='book_appointment_input_box'>
                            <input className='book_appointment_inputs' type="date" placeholder='Date' />
                        </div>
                        <div className='book_appointment_input_box'>
                            <input className='book_appointment_inputs' type="text" placeholder='Doctor' />
                        </div>
                    </div>
                    <div className='book_appointment_input_box'>
                    <div className='book_appointment_input_box'>
                            <input className='book_appointment_inputs' type="text" placeholder='Gender' />
                        </div>
                        <div className='book_appointment_input_box'>
                            <input className='book_appointment_inputs' type="email" placeholder='Phone' />
                        </div>
                        <div className='book_appointment_input_box'>
                            <input className='book_appointment_inputs' type="text" placeholder='Time' />
                        </div>
                        <div className='book_appointment_input_box'>
                            <input className='book_appointment_inputs' type="text" placeholder='Department' />
                        </div>
                    </div>
                </div>
                <div className='book_appointment_textarea_box'>
                    <textarea className='book_appointment_textarea' type="text" placeholder='Message' />
                </div>
                <div className='book_appointment_form_btn_box'>
                    <button className='book_appointment_form_btn'>Submit</button>
                </div>
            </form>
        </div>
    </div>
   </section>
  )
}

export default Bookappointment