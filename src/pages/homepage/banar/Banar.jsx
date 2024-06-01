import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Heading from '../../../utilities/heading/Heading'
import './Banar.css'
import { Link } from 'react-router-dom'

const Banar = () => {
  return (
    <section id='home_banar'>
        <div className='container'>
            <div className='home_banar_contant_wrapper'>
                <Nanoheading text="Caring for Life" style="home_banar_contant_nanohead"/>
                <Heading text="Leading the Way in Medical Excellence" style="home_banar_contant_head"/>
                <div className='home_banar_btn_box_wrapper'>
                    <Link className='home_banar_btn' to = "ourservice">Our Services</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banar