import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading'
import Heading from '../../../utilities/heading/Heading'
import './Banar.css'
import { Link } from 'react-router-dom'
import { useHomebanerQuery } from '../../../counter/docprofileSlice'

const Banar = () => {
              //home baner server data
    const {data} = useHomebanerQuery()
    console.log(data)
  return (
    <section id='home_banar'>
        <div className='container'>
            {
              data &&
              data.map((item)=>(
                <div key={item.id} className='home_banar_contant_wrapper'>
                  <Nanoheading text={item.nanohead} style="home_banar_contant_nanohead"/>
                  <Heading text={item.head} style="home_banar_contant_head"/>
                  <div className='home_banar_btn_box_wrapper'>
                    <Link className='home_banar_btn' to = "ourservice">{item.btn}</Link>
                  </div>
                </div>
              ))
            }
        </div>
    </section>
  )
}

export default Banar