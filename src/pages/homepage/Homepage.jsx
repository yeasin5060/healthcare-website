import React from 'react'
import Banar from './banar/Banar'
import Appointment from './appointment/Appointment'
import Wlcmeddical from './wlcmeddical/Wlcmeddical'
import Homeservice from './homeservice/Homeservice'
import Specialties from './specialties/Specialties'

const Homepage = () => {
  return (
   <>
      <Banar/>
      <Appointment/>
      <Wlcmeddical/>
      <Homeservice/>
      <Specialties/>
   </>
  )
}

export default Homepage