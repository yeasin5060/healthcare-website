import React from 'react'
import Doctorbanercard from '../../../components/doctorbaner/Doctorbanercard';
import { MdDateRange } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { IoIosEye } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import imgone from '../../../images/aboutimageone.png';
import imgtwo from '../../../images/checkupimage.png';
import imgthree from '../../../images/newsimgthree.png';
import imgfour from '../../../images/newsimgfour.png';
import Rechentpostcard from '../../../components/recentpostcard/Rechentpostcard';
import './Newsdocprofile.css';
import Categoriescard from '../../../components/categoriescard/Categoriescard';

const Newsdocprofile = () => {
  return (
    <section id='newsdocprofile'>
        <div className='container'>
            <div className="newsdocprofile-contant-box-flex">
                <div className="newsdocprofile-box">
                    <Doctorbanercard img={imgone} headtext='A passion for putting patients first' peratext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....' linktext='Read More' link='#' dateicon={<MdDateRange />} authoricon={<MdAccountBox />} eyeicon={<IoIosEye />} loveicon={<FaRegHeart />} checkupdata ='Monday 05, September 2021' author ='By Author' view='500' love='1000'/>
                    <Doctorbanercard img={imgtwo} headtext='A passion for putting patients first' peratext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....' linktext='Read More' link='#' dateicon={<MdDateRange />} authoricon={<MdAccountBox />} eyeicon={<IoIosEye />} loveicon={<FaRegHeart />} checkupdata ='Monday 05, September 2021' author ='By Author' view='500' love='1000'/>
                    <Doctorbanercard img={imgthree} headtext='A passion for putting patients first' peratext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....' linktext='Read More' link='#' dateicon={<MdDateRange />} authoricon={<MdAccountBox />} eyeicon={<IoIosEye />} loveicon={<FaRegHeart />} checkupdata ='Monday 05, September 2021' author ='By Author' view='500' love='1000'/>
                    <Doctorbanercard img={imgfour} headtext='A passion for putting patients first' peratext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....' linktext='Read More' link='#' dateicon={<MdDateRange />} authoricon={<MdAccountBox />} eyeicon={<IoIosEye />} loveicon={<FaRegHeart />} checkupdata ='Monday 05, September 2021' author ='By Author' view='500' love='1000'/>
                </div>
                <div className='newsdocprofile-recent-post-box'>
                    <Rechentpostcard/>
                    <Categoriescard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsdocprofile