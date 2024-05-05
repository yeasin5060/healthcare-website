import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Subheading from '../../../utilities/subheading/Subheading'
import Passioncare from '../../../components/passioncare/Passioncare'
import Pera from '../../../utilities/pera/Pera'
import imageone from '../../../images/aboutimageone.png'
import './Aboutservice.css'

const Aboutservice = () => {
  return (
    <section id='aboutservice'>
        <div className='container'>
            <div className='aboutservice_contant_wrapper'>
                <div className='aboutservice_medical_contant_box_flex'>
                    <div className='aboutservice_passion_image_box'>
                        <img src={imageone} alt="not found" />
                    </div>
                    <div className='aboutservice_passion_contant_box'>
                        <Nanoheading text="A passion for putting patients first." style="aboutservice_passion_contant_box_nanohead"/>
                        <Subheading text="Best Care for Your Good Health" style="aboutservice_passion_contant_box_head"/>
                        <div className='aboutservice_passion_care_box_flex'>
                            <div className='aboutservice_passion_care_box'>
                                <Passioncare text="A Passion for Healing" style="aboutservice_passion_health_care" />
                                <Passioncare text="All our best" style="aboutservice_passion_health_care" />
                                <Passioncare text="A Legacy of Excellence" style="aboutservice_passion_health_care" />
                            </div>
                            <div className='aboutservice_passion_care_box'>
                                <Passioncare text="5-Star Care" style="aboutservice_passion_health_care" />
                                <Passioncare text="Believe in Us" style="aboutservice_passion_health_care" />
                                <Passioncare text="Always Caring" style="aboutservice_passion_health_care" />
                            </div>
                        </div>
                        <Pera text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et." style="aboutservice_passion_health_car_pera"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutservice