import React from 'react'
import Banar from './banar/Banar'
import Appointment from './appointment/Appointment'
import Wlcmeddical from './wlcmeddical/Wlcmeddical'
import Homeservice from './homeservice/Homeservice'
import Specialties from './specialties/Specialties'
import Bookappointment from './bookappointment/Bookappointment'

const Homepage = () => {
  return (
   <>
      <Banar/>
      <Appointment/>
      <Wlcmeddical/>
      <Homeservice/>
      <Specialties/>
      <Bookappointment/>
   </>
  )
}

export default Homepage