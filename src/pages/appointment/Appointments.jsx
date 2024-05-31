import React from 'react'
import Appointmentbaners from './appointmentbaner/Appointmentbaners'
import Appointmentlocation from './appointmentlocation/Appointmentlocation'
import Appointmentcontact from './appointmentcontact/Appointmentcontact'


const Appointments = () => {
  return (
    <>
       <Appointmentbaners/>
       <Appointmentlocation/>
       <Appointmentcontact/>
    </>
  )
}

export default Appointments