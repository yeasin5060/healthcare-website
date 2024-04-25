import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Subheading from '../../../utilities/subheading/Subheading'
import './Specialties.css'
import Medicaltest from '../../../components/medicaltest/Medicaltest'
import { BsHeartPulse } from "react-icons/bs";

const Specialties = () => {
  return (
   <section id='specialties'>
    <div className='container'>
        <div className='specialties_contant_box'>
            <div className='specialties_heading_contant_box'>
                <Nanoheading text="Always Caring" style="specialties_contant_nenohead"/>
                <Subheading text="Our Specialties" style="specialties_contant_heading"/>
            </div>
            <div className='specialties_care_box_flex'>
                <Medicaltest style="specialties_care_box" iconbox="specialties_care_icon_box" icon={<BsHeartPulse />} pera="Neurology" peratyle="specialties_care_box_pera"/>
                <Medicaltest style="specialties_care_box" iconbox="specialties_care_icon_box" icon={<BsHeartPulse />} pera="Bones" peratyle="specialties_care_box_pera"/>
                <Medicaltest style="specialties_care_box" iconbox="specialties_care_icon_box" icon={<BsHeartPulse />} pera="Oncology" peratyle="specialties_care_box_pera"/>
                <Medicaltest style="specialties_care_box" iconbox="specialties_care_icon_box" icon={<BsHeartPulse />} pera="Otorhinolaryngology" peratyle="specialties_care_box_pera"/>
                <Medicaltest style="specialties_care_box" iconbox="specialties_care_icon_box" icon={<BsHeartPulse />} pera="Ophthalmology" peratyle="specialties_care_box_pera"/>
                <Medicaltest style="specialties_care_box" iconbox="specialties_care_icon_box" icon={<BsHeartPulse />} pera="Cardiovascular" peratyle="specialties_care_box_pera"/>
                <Medicaltest style="specialties_care_box" iconbox="specialties_care_icon_box" icon={<BsHeartPulse />} pera="Pulmonology" peratyle="specialties_care_box_pera"/>
                <Medicaltest style="specialties_care_box" iconbox="specialties_care_icon_box" icon={<BsHeartPulse />} pera="Renal Medicine" peratyle="specialties_care_box_pera"/>
                <Medicaltest style="specialties_care_box" iconbox="specialties_care_icon_box" icon={<BsHeartPulse />} pera="Gastroenterology" peratyle="specialties_care_box_pera"/>
                <Medicaltest style="specialties_care_box" iconbox="specialties_care_icon_box" icon={<BsHeartPulse />} pera="Urology" peratyle="specialties_care_box_pera"/>
                <Medicaltest style="specialties_care_box" iconbox="specialties_care_icon_box" icon={<BsHeartPulse />} pera="Dermatology" peratyle="specialties_care_box_pera"/>
                <Medicaltest style="specialties_care_box" iconbox="specialties_care_icon_box" icon={<BsHeartPulse />} pera="Gynaecology" peratyle="specialties_care_box_pera"/>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Specialties