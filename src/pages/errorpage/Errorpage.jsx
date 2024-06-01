import React from 'react';
import { Link } from 'react-router-dom';
import imageone from '../../images/errorimage.jpeg';
import Pera from '../../utilities/pera/Pera';
import './Errorpage.css';
import { useErrorpageQuery } from '../../counter/docprofileSlice';
const Errorpage = () => {
    const {data} = useErrorpageQuery()
    
  return (
    <section id='errorpage'>
        {   data &&
            data.map((item)=>(
                <div key={item.id} className='container'>
                    <div className='errorpage_contant_box'>
                        <div className='errorpage_image_box'>
                            <img src={item.image} alt="not found" />
                        </div>
                        <div className='errorpage_btn_box'>
                            <Pera text={item.notfound} style="errorpage_pera"/>
                            <div className='errorpage_link_box'>
                                <Link className='back_home_page_link' to="/">{item.backhome}</Link>
                            </div>
                        </div>
                </div>
            </div>
            ))
        }
    </section>
  )
}

export default Errorpage