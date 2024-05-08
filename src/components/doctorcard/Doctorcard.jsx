import React from 'react'
import Nanoheading from '../../utilities/nanohead/Nanoheading'
import Pera from '../../utilities/pera/Pera'
import Learnmore from '../learnmorelink/Learnmore'
import './Doctorcard.css'

const Doctorcard = ({text , style , textpera , stylepera , img}) => {
  return (
    <div className='doctor_cart'>
        <div className='doc-image-box'>
            <img src={img} alt="not found" />
        </div>
        <div className='doc_contant_box'>
            <Nanoheading text={text} style={style}/>
            <Pera text={textpera} style={stylepera}/>
            <Learnmore/>
        </div>
    </div>
  )
}

export default Doctorcard