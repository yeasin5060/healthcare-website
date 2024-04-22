import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Miniheading from '../../../utilities/miniheading/Miniheading'
import Pera from '../../../utilities/pera/Pera'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import imageone from '../../../images/meddicalbaner.png'
import './Wlcmeddical.css'

const Wlcmeddical = () => {
  return (
    <section id='wlcmeddical'>
        <div className='container'>
            <div className='wlcmeddical_contant_wrapper'>
                <Nanoheading text="Welcome to Meddical" style="wlcmeddical_contant_nanohead"/>
                <Miniheading text="A Great Place to Receive Care" style="wlcmeddical_contant_head"/>
                <Pera text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et." style="wlcmeddical_contant_pera"/>
                <div className='wlcmeddical_contant_link_box'>
                    <Link className='wlcmeddical_contant_link' to="lm">Learn More</Link>
                    <FaArrowRight className='wlcmeddical_contant_link_icon' />
                </div>
            </div>
            <div className='wlcmeddical_baner_image_box'>
                <img src={imageone} alt="not found" />
            </div>
        </div>
    </section>
  )
}

export default Wlcmeddical