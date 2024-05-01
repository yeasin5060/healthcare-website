import React from 'react'
import Banar from './banar/Banar'
import Appointment from './appointment/Appointment'
import Wlcmeddical from './wlcmeddical/Wlcmeddical'
import Homeservice from './homeservice/Homeservice'
import Specialties from './specialties/Specialties'
import Bookappointment from './bookappointment/Bookappointment'
import Ourdoctor from './ourdoctor/Ourdoctor'
import Homenews from './homenews/Homenews'

const Homepage = () => {
  return (
   <>
      <Banar/>
      <Appointment/>
      <Wlcmeddical/>
      <Homeservice/>
      <Specialties/>
      <Bookappointment/>
      <Ourdoctor/>
      <Homenews/>
   </>
  )
}

export default Homepage