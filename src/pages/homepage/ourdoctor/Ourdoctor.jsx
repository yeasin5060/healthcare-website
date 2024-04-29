import React from 'react'
import './Ourdoctor.css'
import Doctorprofile from '../../../components/doctorprofile/Doctorprofile'
import imageone from '../../../images/docimageone.png'
import imagetwo from '../../../images/docimagetwo.png'
import imagethree from '../../../images/docimagethree.png'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Subheading from '../../../utilities/subheading/Subheading'

const Ourdoctor = () => {
  return (
    <section id='ourdoctor'>
        <div className='container'>
            <div className='ourdoctor_contant_wrapper'>
                <div className='ourdoctor_heading_contant_box'>
                    <Nanoheading text="Always Caring" style="ourdoctor_contant_nenohead"/>
                    <Subheading text="Our Specialties" style="ourdoctor_contant_heading"/>
                </div>
                <div className='ourdoctor_card_box_flex'>
                    <Doctorprofile image={imageone} peratext="Doctor’s Name" perastyle="ourdoctor_card_pera" headtext="Neurology" headstyle="ourdoctor_card_head"/>
                    <Doctorprofile image={imagetwo} peratext="Doctor’s Name" perastyle="ourdoctor_card_pera" headtext="Neurology" headstyle="ourdoctor_card_head"/>
                    <Doctorprofile image={imagethree} peratext="Doctor’s Name" perastyle="ourdoctor_card_pera" headtext="Neurology" headstyle="ourdoctor_card_head"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Ourdoctor