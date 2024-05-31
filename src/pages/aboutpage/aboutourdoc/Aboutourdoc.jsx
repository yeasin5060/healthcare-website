import React from 'react'
import Doctorprofile from '../../../components/doctorprofile/Doctorprofile';
import imageone from '../../../images/docimageone.png';
import imagetwo from '../../../images/docimagetwo.png';
import imagethree from '../../../images/docimagethree.png';
import Nanoheading from '../../../utilities/nanohead/Nanoheading';
import Subheading from '../../../utilities/subheading/Subheading';
import './Aboutourdoc.css';


const Aboutourdoc = () => {
  return (
    <section id='aboutourdoc'>
        <div className='container'>
            <div className='aboutourdoc_contant_wrapper'>
                <div className='aboutourdoc_heading_contant_box'>
                    <Nanoheading text="Trusted Care" style="aboutourdoc_contant_nenohead"/>
                    <Subheading text="Our Doctors" style="aboutourdoc_contant_heading"/>
                </div>
                <div className='aboutourdoc_card_box_flex'>
                    <Doctorprofile image={imageone} peratext="Doctor’s Name" perastyle="aboutourdoc_card_pera" headtext="Neurology" headstyle="aboutourdoc_card_head"/>
                    <Doctorprofile image={imagetwo} peratext="Doctor’s Name" perastyle="aboutourdoc_card_pera" headtext="Neurology" headstyle="aboutourdoc_card_head"/>
                    <Doctorprofile image={imagethree} peratext="Doctor’s Name" perastyle="aboutourdoc_card_pera" headtext="Neurology" headstyle="aboutourdoc_card_head"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutourdoc