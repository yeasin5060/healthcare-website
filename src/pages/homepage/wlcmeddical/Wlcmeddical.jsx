import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Subheading from '../../../utilities/subheading/Subheading'
import Pera from '../../../utilities/pera/Pera'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import imageone from '../../../images/meddicalbaner.png'
import './Wlcmeddical.css'
import { useHomewcdataQuery } from '../../../counter/docprofileSlice'

const Wlcmeddical = () => {
    const {data} = useHomewcdataQuery()
    console.log(data)
  return (
    <section id='wlcmeddical'>
        <div className='container'>
            {
                data &&
                data.map((item)=>(
                    <div key={item.id}>
                        <div className='wlcmeddical_contant_wrapper'>
                            <Nanoheading text={item.nanohead} style="wlcmeddical_contant_nanohead"/>
                            <Subheading text={item.head}style="wlcmeddical_contant_head"/>
                            <Pera text={item.pera} style="wlcmeddical_contant_pera"/>
                            <div className='wlcmeddical_contant_link_box'>
                                <Link className='wlcmeddical_contant_link' to={item.route}>{item.link}</Link>
                                <FaArrowRight className='wlcmeddical_contant_link_icon' />
                            </div>
                        </div>
                        <div className='wlcmeddical_baner_image_box'>
                            <img src={item.img} alt="not found" />
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Wlcmeddical