import React from 'react'
import Doctorprofile from '../../../components/doctorprofile/Doctorprofile'
import imageone from '../../../images/docimageone.png'
import imagetwo from '../../../images/docimagetwo.png'
import imagethree from '../../../images/docimagethree.png'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Subheading from '../../../utilities/subheading/Subheading'
import './Ourdoctor.css'
import { useHomeourdocdataQuery } from '../../../counter/docprofileSlice'

const Ourdoctor = () => {
    const {data} = useHomeourdocdataQuery()
  return (
    <section id='ourdoctor'>
        <div className='container'>
            <div className='ourdoctor_contant_wrapper'>
                <div className='ourdoctor_heading_contant_box'>
                    <Nanoheading text="Always Caring" style="ourdoctor_contant_nenohead"/>
                    <Subheading text="Our Doctors" style="ourdoctor_contant_heading"/>
                </div>
                <div className='ourdoctor_card_box_flex'>
                   
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

export default Ourdoctor