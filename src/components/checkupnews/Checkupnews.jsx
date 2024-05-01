import React from 'react'
import Pera from '../../utilities/pera/Pera'
import Nanoheading from '../../utilities/nanohead/Nanoheading'
import './Checkupnews.css'

const Checkupnews = ({img , text , style ,nanohead,nanostyle,icone,iconl}) => {
  return (
    <div className='checkupnews_box_flex'>
        <div className='checkup_image_box'>
            <img src={img} alt="not found" />
        </div>
        <div className='checkup_news_box'>
            <Pera text={text} style={style}/>
            <Nanoheading text={nanohead} style={nanostyle}/>
            <div className='checkup_icon_container_flex'>
                <div className='icon_box_flex'>
                    <div className='checkup_icon_eye checkup_box'>{icone}</div>
                    <Pera text="160" style="pera_cound"/>
                </div>
                <div className='icon_box_flex'>
                    <div className='checkup_icon_love checkup_box'>{iconl}</div>
                    <Pera text="100" style="pera_cound"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkupnews