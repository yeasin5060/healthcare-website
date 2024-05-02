import React from 'react'
import Nanoheading from '../../utilities/nanohead/Nanoheading'
import Pera from '../../utilities/pera/Pera'
import './Contact.css'

const Contant = ({headtext,contact,contacttwo,icon}) => {
  return (
    <div className='contact_box'>
        <div className="contact_contant_box">
            <div className="lacation_icon_box">{icon}</div>
            <Nanoheading text={headtext} style="contant_head"/>
            <Pera text={contact} style="contant_pera"/>
            <Pera text={contacttwo} style="contant_pera_two"/>
        </div>
    </div>
  )
}

export default Contant