import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Subheading from '../../../utilities/subheading/Subheading'
import './Homeservice.css'
import Medicaltest from '../../../components/medicaltest/Medicaltest'
import { TbCheckupList } from "react-icons/tb";
import { BsHeartPulse } from "react-icons/bs";
import { BiDna } from "react-icons/bi";
import { MdOutlineBloodtype } from "react-icons/md";
import Passioncare from '../../../components/passioncare/Passioncare'
import imageone from '../../../images/passionimage_one.png'
import imagetwo from '../../../images/passionimage_two.png'
import Pera from '../../../utilities/pera/Pera'

const Homeservice = () => {
  return (
    <section id='homeservice'>
        <div className='container'>
            <div className='homeservice_contant_wrapper'>
                <div className='homeservice_heading_contant_box'>
                    <Nanoheading text="Care you can believe in" style="homeservice_contant_nenohead"/>
                    <Subheading text="Our Services" style="homeservice_contant_heading"/>
                </div>
                <div className='homeservice_medical_contant_box_flex'>
                  <div className='medical_testing_contant_box_flex'>
                    <Medicaltest style="medical_testing_box" iconbox="medical_testing_icon_box" icon={<TbCheckupList />} pera="Free Checkup" peratyle="medical_testing_box_pera"/>
                    <Medicaltest style="medical_testing_box" iconbox="medical_testing_icon_box" icon={<BsHeartPulse />} pera="Cardiogram" peratyle="medical_testing_box_pera"/>
                    <Medicaltest style="medical_testing_box" iconbox="medical_testing_icon_box" icon={<BiDna />} pera="Dna Testing" peratyle="medical_testing_box_pera"/>
                    <Medicaltest style="medical_testing_box" iconbox="medical_testing_icon_box" icon={<MdOutlineBloodtype />} pera="Blood Bank" peratyle="medical_testing_box_pera"/>
                  </div>
                  <div className='homeservice_passion_contant_box'>
                    <Nanoheading text="A passion for putting patients first." style="homeservice_passion_contant_box_nanohead"/>
                    <div className='homeservice_passion_care_box_flex'>
                      <div className='homeservice_passion_care_box'>
                        <Passioncare text="A Passion for Healing" style="homeservice_passion_health_care" />
                        <Passioncare text="All our best" style="homeservice_passion_health_care" />
                        <Passioncare text="A Legacy of Excellence" style="homeservice_passion_health_care" />
                      </div>
                      <div className='homeservice_passion_care_box'>
                        <Passioncare text="5-Star Care" style="homeservice_passion_health_care" />
                        <Passioncare text="Believe in Us" style="homeservice_passion_health_care" />
                        <Passioncare text="Always Caring" style="homeservice_passion_health_care" />
                      </div>
                    </div>
                    <Pera text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et." style="homeservice_passion_health_car_pera"/>
                  </div>
                  <div className='homeservice_passion_image_box_flex'>
                      <div className='homeservice_passion_image_box'>
                        <img src={imageone} alt="not found" />
                      </div>
                      <div className='homeservice_passion_image_box'>
                        <img src={imagetwo} alt="not found" />
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homeservice