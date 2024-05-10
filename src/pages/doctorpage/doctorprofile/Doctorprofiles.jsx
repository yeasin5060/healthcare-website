import React from 'react'
import Doctorprofile from '../../../components/doctorprofile/Doctorprofile'
import imageone from '../../../images/docimageone.png'
import imagetwo from '../../../images/docimagetwo.png'
import imagethree from '../../../images/docimagethree.png'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Subheading from '../../../utilities/subheading/Subheading'
import './Doctorprofiles.css'

const Doctorprofiles = () => {
  return (
    <section id='doctorprofiles'>
        <div className='container'>
            <div className='doctorprofiles_contant_wrapper'>
                <div className='doctorprofiles_heading_contant_box'>
                    <Nanoheading text="Trusted Care" style="doctorprofiles_contant_nenohead"/>
                    <Subheading text="Our Doctors" style="doctorprofiles_contant_heading"/>
                </div>
                <div className='doctorprofiles_card_box_flex'>
                    <Doctorprofile image={imageone} peratext="Doctor’s Name" perastyle="doctorprofiles_card_pera" headtext="Neurology" headstyle="doctorprofiles_card_head"/>
                    <Doctorprofile image={imagetwo} peratext="Doctor’s Name" perastyle="doctorprofiles_card_pera" headtext="Neurology" headstyle="doctorprofiles_card_head"/>
                    <Doctorprofile image={imagethree} peratext="Doctor’s Name" perastyle="doctorprofiles_card_pera" headtext="Neurology" headstyle="doctorprofiles_card_head"/>
                    <Doctorprofile image={imageone} peratext="Doctor’s Name" perastyle="doctorprofiles_card_pera" headtext="Neurology" headstyle="doctorprofiles_card_head"/>
                    <Doctorprofile image={imagetwo} peratext="Doctor’s Name" perastyle="doctorprofiles_card_pera" headtext="Neurology" headstyle="doctorprofiles_card_head"/>
                    <Doctorprofile image={imagethree} peratext="Doctor’s Name" perastyle="doctorprofiles_card_pera" headtext="Neurology" headstyle="doctorprofiles_card_head"/>
                </div>
            </div>
        </div>
</section>
  )
}

export default Doctorprofiles