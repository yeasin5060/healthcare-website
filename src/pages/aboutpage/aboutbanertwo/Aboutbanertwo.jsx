import React from 'react'
import Pera from '../../../utilities/pera/Pera';
import Nanoheading from '../../../utilities/nanohead/Nanoheading';
import imageone from '../../../images/aboutimagetwo.png';
import { FaQuoteLeft } from "react-icons/fa";
import './Aboutbanertwo.css';

const Aboutbanertwo = () => {
  return (
    <section id='aboutbanertwo'>
        <img src={imageone} alt="not found" />
        <div className='aboutbanertwo_contant_wrapper'>
            <div className='aboutbanertwo_contant_box'>
                <div className='aboutbanertwo_contant_image_box'>
                    <FaQuoteLeft className='aboutbaner_tow_icon' />
                </div>
                <div className='aboutbanertwo_contant_box'>
                    <Pera text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et." style="aboutbanertwo_contant_pera"/>
                    <Nanoheading text="John Doe" style="aboutbanertwo_contant_nanohead"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutbanertwo