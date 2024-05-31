import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading';
import Heading from '../../../utilities/heading/Heading';
import banerimg from '../../../images/appointmentbaner.png';
import './Appointmentbaners.css'

const Appointmentbaners = () => {
  return (
    <section id="appointmentbaners">
      <img src={banerimg} alt="not found" />
      <div className="container">
          <div className='appointmentbaners_contant_wrapper'>
              <Nanoheading text="Home / Appointment" style="appointmentbaners_contant_nanohead"/>
              <Heading text="Blog Posts" style= "appointmentbaners_contant_head"/>
          </div>
      </div>
    </section>
  )
}

export default Appointmentbaners
