import React, { useEffect } from 'react'
import './home.scss';
import ProfileIcon from '../../assets/icons/group-profile.png';
import starIcon from '../../assets/icons/star.svg';
import WarumSection from './warumSection';
export default function Home() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <div>
        <div className='home-first-section'>
            <div className='container-md'>
                <div className='profile-image-center-alignment'>
                    <img src={ProfileIcon} alt="ProfileIcon"/>
                </div>
                <div className='rating-alignment'>
                    <img src={starIcon} alt="starIcon"/>
                    <img src={starIcon} alt="starIcon"/>
                    <img src={starIcon} alt="starIcon"/>
                    <img src={starIcon} alt="starIcon"/>
                    <img src={starIcon} alt="starIcon"/>
                </div>
                <div className='text-style'>
                    <span>5 Sterne (auch auf Google)</span>
                    <p>LIEBLINGSBANKMEMES</p>
                </div>
            </div>
        </div>
        <WarumSection/>
    </div>
  )
}


