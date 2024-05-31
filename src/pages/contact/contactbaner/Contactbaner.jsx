import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading';
import Heading from '../../../utilities/heading/Heading';
import banerimg from '../../../images/contactbaner.png';
import './Contactbaner.css';
const Contactbaner = () => {
  return (
    <section id="contactbaner">
    <img src={banerimg} alt="not found" />
      <div className="container">
          <div className='contactbaner_contant_wrapper'>
              <Nanoheading text="Home / Contact" style="contactbaner_contant_nanohead"/>
              <Heading text="Blog Posts" style= "contactbaner_contant_head"/>
          </div>
      </div>
  </section>
  )
}

export default Contactbaner