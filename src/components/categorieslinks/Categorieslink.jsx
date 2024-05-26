import React from 'react'
import Pera from '../../utilities/pera/Pera'
import { Link } from 'react-router-dom'

const Categorieslink = ({text , contety}) => {
  return (
    <Link className="categories-card-contant-flex" to = 'categories'>
        <Pera  text={text} style='categories-card-items'/>
        <div className='categories-card-contety'>
            {contety}
        </div>
    </Link>
  )
}

export default Categorieslink