import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Subheading from '../../../utilities/subheading/Subheading'
import './Homeservice.css'

const Homeservice = () => {
  return (
    <section id='homeservice'>
        <div className='container'>
            <div className='homeservice_contant_wrapper'>
                <div className='homeservice_heading_contant_box'>
                    <Nanoheading text="Care you can believe in" style="homeservice_contant_nenohead"/>
                    <Subheading text="Our Services" style="homeservice_contant_heading"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homeservice