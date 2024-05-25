import React from 'react'
import Nanoheading from '../../utilities/nanohead/Nanoheading'
import Pera from '../../utilities/pera/Pera'
import './Recentpostsubcomponent.css'

const Recentpostsubcomponent = ({ image , text , peratext}) => {
  return (
    <div className='recentpostsubcomponent-container'>
        <div className='recentpostsubcomponent-image-box'>
            <img src={image} alt="not found" />
        </div>
        <div className='recentpostsubcomponent-contant-box'>
            <Nanoheading text={text} style='recentpostsubcomponent-contant-head'/>
            <Pera text={peratext} style='recentpostsubcomponent-contant-pera' />
        </div>
    </div>
  )
}

export default Recentpostsubcomponent