import React from 'react'
import Pera from '../../utilities/pera/Pera';
import './Shuduletimebox.css';

const Shuduletimebox = ({day , time}) => {
  return (
    <div className='appointment_booking_shudule_time-flex'>
        <Pera text={day} style="appointment_booking_shudule_day"/>
        <Pera text={time} style="appointment_booking_shudule_time"/>
    </div>
  )
}

export default Shuduletimebox