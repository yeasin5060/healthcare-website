import React from 'react'
import Nanoheading from '../../../utilities/nanohead/Nanoheading';
import Subheading from '../../../utilities/subheading/Subheading';
import Checkupnews from '../../../components/checkupnews/Checkupnews';
import image from '../../../images/checkupimage.png';
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import './Contactnews.css';

const Contactnews = () => {
  return (
    <section id='contactnews'>
        <div className='container'>
            <div className='contactnews_content_box'>
                <div className='contactnews_heading_contant_box'>
                    <Nanoheading text="Better information, Better health" style="contactnews_contant_nenohead"/>
                    <Subheading text="News" style="contactnews_contant_heading"/>
                </div>
                <div className='contactnews_box_flex'>
                    <Checkupnews img={image} text="Monday 05, September 2021 | By Author" style="contactnews_date" nanohead="This Article's Title goes Here, but not too long." nanostyle="contactnews_artical"icone={<IoEyeOutline />} iconl={<FaRegHeart />}/>
                    <Checkupnews img={image} text="Monday 05, September 2021 | By Author" style="contactnews_date" nanohead="This Article's Title goes Here, but not too long." nanostyle="contactnews_artical" icone={<IoEyeOutline />} iconl={<FaRegHeart />}/>
                    <Checkupnews img={image} text="Monday 05, September 2021 | By Author" style="contactnews_date" nanohead="This Article's Title goes Here, but not too long." nanostyle="contactnews_artical" icone={<IoEyeOutline />} iconl={<FaRegHeart />}/>
                    <Checkupnews img={image} text="Monday 05, September 2021 | By Author" style="contactnews_date" nanohead="This Article's Title goes Here, but not too long." nanostyle="contactnews_artical" icone={<IoEyeOutline />} iconl={<FaRegHeart />}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contactnews