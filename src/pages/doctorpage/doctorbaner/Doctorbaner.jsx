import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Heading from '../../../utilities/heading/Heading'
import image from '../../../images/meddicalbaner.png'
import './Doctorbaner.css'

const Doctorbaner = () => {
  return (
    <section id="doctorbaner">
      <img src={image} alt="not found" />
        <div className='container'>
            <div className='doctorbaner_contant_wrapper'>
                <Nanoheading text="Home / About" style="doctorbaner_contant_nanohead"/>
                <Heading text="Our Doctors" style= "doctorbaner_contant_head"/>
            </div>
        </div>
    </section>
  )
}

export default Doctorbaner