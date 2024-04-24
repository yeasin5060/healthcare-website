import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Subheading from '../../../utilities/subheading/Subheading'
import './Homeservice.css'
import Medicaltest from '../../../components/medicaltest/Medicaltest'
import { TbCheckupList } from "react-icons/tb";
import { BsHeartPulse } from "react-icons/bs";
import { BiDna } from "react-icons/bi";
import { MdOutlineBloodtype } from "react-icons/md";

const Homeservice = () => {
  return (
    <section id='homeservice'>
        <div className='container'>
            <div className='homeservice_contant_wrapper'>
                <div className='homeservice_heading_contant_box'>
                    <Nanoheading text="Care you can believe in" style="homeservice_contant_nenohead"/>
                    <Subheading text="Our Services" style="homeservice_contant_heading"/>
                </div>
                <div className='medical_testing_contant_box_flex'>
                  <Medicaltest style="medical_testing_box" iconbox="medical_testing_icon_box" icon={<TbCheckupList />} pera="Free Checkup" peratyle="medical_testing_box_pera"/>
                  <Medicaltest style="medical_testing_box" iconbox="medical_testing_icon_box" icon={<BsHeartPulse />} pera="Cardiogram" peratyle="medical_testing_box_pera"/>
                  <Medicaltest style="medical_testing_box" iconbox="medical_testing_icon_box" icon={<BiDna />} pera="Dna Testing" peratyle="medical_testing_box_pera"/>
                  <Medicaltest style="medical_testing_box" iconbox="medical_testing_icon_box" icon={<MdOutlineBloodtype />} pera="Blood Bank" peratyle="medical_testing_box_pera"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homeservice