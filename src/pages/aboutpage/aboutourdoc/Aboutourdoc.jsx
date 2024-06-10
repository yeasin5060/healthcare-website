import React from 'react'
import Doctorprofile from '../../../components/doctorprofile/Doctorprofile';
import imageone from '../../../images/docimageone.png';
import imagetwo from '../../../images/docimagetwo.png';
import imagethree from '../../../images/docimagethree.png';
import Nanoheading from '../../../utilities/nanohead/Nanoheading';
import Subheading from '../../../utilities/subheading/Subheading';
import { useHomeourdocdataQuery } from '../../../counter/docprofileSlice';
import './Aboutourdoc.css';


const Aboutourdoc = () => {
    const {data} = useHomeourdocdataQuery()
  return (
    <section id='aboutourdoc'>
        <div className='container'>
            <div className='aboutourdoc_contant_wrapper'>
                <div className='aboutourdoc_heading_contant_box'>
                    <Nanoheading text="Trusted Care" style="aboutourdoc_contant_nenohead"/>
                    <Subheading text="Our Doctors" style="aboutourdoc_contant_heading"/>
                </div>
                <div className='aboutourdoc_card_box_flex'>
                    {
                        data &&
                        data.map((item) => (
                            <Doctorprofile key={item.id} image={item.image} peratext={item.name} perastyle="ourdoctor_card_pera" headtext={item.profession} headstyle="ourdoctor_card_head" link={item.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Aboutourdoc