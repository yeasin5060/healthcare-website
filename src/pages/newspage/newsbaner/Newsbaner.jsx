import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Heading from '../../../utilities/heading/Heading'
import banerimage from '../../../images/newsbaner.png'
import './Newsbaner.css'

const Newsbaner = () => {
  return (
    <section id="newsbaner">
      <img src={banerimage} alt="not found" />
        <div className='container'>
            <div className='newsbaner_contant_wrapper'>
                <Nanoheading text="Home / About" style="newsbaner_contant_nanohead"/>
                <Heading text="Blog Posts" style= "newsbaner_contant_head"/>
            </div>
        </div>
    </section>
  )
}

export default Newsbaner