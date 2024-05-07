import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Heading from '../../../utilities/heading/Heading'
import image from '../../../images/servicebanerimg.png'
import './Servicebaner.css'

const Servicebaner = () => {
  return (
    <section id="servicebaner">
      <img src={image} alt="not found" />
        <div className='container'>
            <div className='servicebaner_contant_wrapper'>
                <Nanoheading text="Home / About" style="servicebaner_contant_nanohead"/>
                <Heading text="Our Services" style= "servicebaner_contant_head"/>
            </div>
        </div>
    </section>
  )
}

export default Servicebaner