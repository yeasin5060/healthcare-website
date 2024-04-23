import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import './Learnmore.css'


const Learnmore = ({link}) => {
  return (
    <div className='learn_more'>
        <Link className='learn_more_link' to={link}>learm more</Link>
        <FaArrowRight className='learn_more_icon' />
    </div>
  )
}

export default Learnmore