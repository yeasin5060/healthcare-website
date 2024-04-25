import React from 'react'
import Pera from '../../utilities/pera/Pera'
import './Passioncare.css'

const Passioncare = ({text , style }) => {
  return (
    <div className='passioncare_box_flex'>
        <div className='passioncare_round'></div>
        <Pera text={text} style={style}/>
    </div>
  )
}

export default Passioncare