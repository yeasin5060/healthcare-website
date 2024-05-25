import React from 'react';
import Miniheading from '../../utilities/miniheading/Miniheading';
import Recentpostsubcomponent from '../recentpostsubcomponent/Recentpostsubcomponent';
import image from '../../images/newsminiimg.png'
import './Rechentpostcard.css'

const Rechentpostcard = () => {
  return (
    <div className='recentpostvcard-component-container'>
        <div className='recentpostcard-search-box'>
            <input className='recentpostcard-search-input' type='search' placeholder='search'/>
        </div>
        <div className='recentpostvcard-component-post-box'>
            <Miniheading text='Recent Posts' style= 'recentpostvcard-component-post-head'/>
            <div className='recentpostvcard-posted-contant'>
                <Recentpostsubcomponent image = {image} text='Monday 05, September 2021' peratext='This Article’s Title goes Here, but not too long.' />
                <Recentpostsubcomponent image = {image} text='Monday 05, September 2021' peratext='This Article’s Title goes Here, but not too long.' />
                <Recentpostsubcomponent image = {image} text='Monday 05, September 2021' peratext='This Article’s Title goes Here, but not too long.' />
                <Recentpostsubcomponent image = {image} text='Monday 05, September 2021' peratext='This Article’s Title goes Here, but not too long.' />
                <Recentpostsubcomponent image = {image} text='Monday 05, September 2021' peratext='This Article’s Title goes Here, but not too long.' />
            </div>
        </div>
    </div>
  )
}

export default Rechentpostcard