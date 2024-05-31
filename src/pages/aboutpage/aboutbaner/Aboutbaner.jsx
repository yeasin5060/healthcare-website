import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading';
import Heading from '../../../utilities/heading/Heading';
import image from '../../../images/meddicalbaner.png';
import './Aboutbaner.css';

const Aboutbaner = () => {
  return (
    <section id="aboutbaner">
      <img src={image} alt="not found" />
        <div className='container'>
            <div className='aboutpage_contant_wrapper'>
                <Nanoheading text="Home / About" style="aboutpage_contant_nanohead"/>
                <Heading text="About us" style= "aboutpage_contant_head"/>
            </div>
        </div>
    </section>
  )
}

export default Aboutbaner