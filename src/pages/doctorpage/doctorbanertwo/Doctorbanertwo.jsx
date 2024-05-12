import React from 'react'
import Pera from '../../../utilities/pera/Pera'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import imageone from '../../../images/aboutimagetwo.png'
import { FaQuoteLeft } from "react-icons/fa";
import './Doctorbanertwo.css'

const Doctorbanertwo = () => {
  return (
    <section id='doctorbanertwo'>
        <img src={imageone} alt="not found" />
        <div className='doctorbanertwo_contant_wrapper'>
            <div className='doctorbanertwo_contant_box'>
                <div className='doctorbanertwo_contant_image_box'>
                    <FaQuoteLeft className='doctorbanertow_icon' />
                </div>
                <div className='doctorbanertwo_contant_box'>
                    <Pera text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et." style="doctorbanertwo_contant_pera"/>
                    <Nanoheading text="John Doe" style="doctorbanertwo_contant_nanohead"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Doctorbanertwo