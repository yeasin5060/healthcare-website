import React from 'react'
import Pera from '../../utilities/pera/Pera'

const Medicaltest = ({style , iconbox, pera ,peratyle ,icon,iconstyle}) => {
  return (
   <div className={style}>
        <div className={iconbox}>
           {icon}
        </div>
        <Pera text={pera} style={peratyle}/>
   </div>
  )
}

export default Medicaltest