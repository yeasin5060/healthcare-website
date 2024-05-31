import React from 'react'
import Appointmentbaners from './appointmentbaner/Appointmentbaners'
import Appointmentlocation from './appointmentlocation/Appointmentlocation'
import Appointmentcontact from './appointmentcontact/Appointmentcontact'
import Appointmentbooking from './appointmentbooking/Appointmentbooking'


const Appointments = () => {
  return (
    <>
       <Appointmentbaners/>
       <Appointmentbooking/>
       <Appointmentlocation/>
       <Appointmentcontact/>
    </>
  )
}

export default Appointments