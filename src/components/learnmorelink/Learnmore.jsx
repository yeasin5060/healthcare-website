import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import './Learnmore.css'


const Learnmore = ({link , linktext}) => {
  return (
    <div className='learn_more'>
        <Link className='learn_more_link' to={link}>{linktext}
          <FaArrowRight className='learn_more_icon' />
        </Link>
    </div>
  )
}

export default Learnmore