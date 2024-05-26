import React from 'react'
import Miniheading from '../../utilities/miniheading/Miniheading'
import './Categoriescard.css'
import Categorieslink from '../categorieslinks/Categorieslink'

const Categoriescard = ({text , style , contety}) => {
  return (
    <div className='categories-card-container'>
        <Miniheading text='Categories' style='categories-card-head'/>
        <Categorieslink text='Surgery' contety='4'/>
        <Categorieslink text='Health Care' contety='14'/>
        <Categorieslink text='Medical' contety='24'/>
        <Categorieslink text='Professional' contety='34'/>
    </div>
  )
}

export default Categoriescard