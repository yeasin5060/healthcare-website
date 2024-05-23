import React from 'react'
import Miniheading from '../../utilities/miniheading/Miniheading'
import Pera from '../../utilities/pera/Pera'
import './Doctorbanercard.css'
import Learnmore from '../learnmorelink/Learnmore'

const Doctorbanercard = ({headtext , peratext , dateicon , authoricon, eyeicon, loveicon ,img , linktext , link , checkupdata , author, view, love}) => {
  return (
    <div className='doctorbanercard-contant-container'>
        <div className="doctorbanercard-image-box">
            <img src={img} alt="not found" />
        </div>
        <div className="doctorbanercard-contant-box">
            <div className="doctorbanercard-all-icon-box">
                <div className='doctorbanercard-date-box'>
                    <div className='doctorbanercard-date-icon-box'>
                        {dateicon}
                    </div>
                    <span className='doctorbanercard-data-contant'>
                        {checkupdata}
                    </span>
                </div>
                <div className='doctorbanercard-author-box'>
                    <div className='doctorbanercard-author-icon-box'>
                        {authoricon}
                    </div>
                     <span className='doctorbanercard-author-contant'>
                        {author}
                     </span>
                </div>
                <div className='doctorbanercard-liker-box'>
                    <div className='doctorbanercard-eye-icon-box'>
                        {eyeicon}
                    </div>
                     <span className='doctorbanercard-eye-icon-contant'>
                        {view}
                     </span>
                </div>
                <div className='doctorbanercard-liker-box'>
                    <div className='doctorbanercard-love-icon-box'>{loveicon}</div>
                     <span className='doctorbanercard-love-icon-contant'>
                        {love}
                     </span>
                </div>
            </div>
            <div className='doctorbanercard-header-box'>
                <Miniheading text={headtext} style='doctorbanercard-header-style'/>
                <Pera text={peratext} style='doctorbanercard-header-pera'/>
                <Learnmore linktext={linktext} link={link}/>
            </div>
        </div>
    </div>
  )
}

export default Doctorbanercard