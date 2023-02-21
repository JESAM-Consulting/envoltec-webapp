import React, { useEffect } from 'react'
import './detailsPage.scss';
import ProfileIcon from '../../assets/icons/group-profile.png';
import starIcon from '../../assets/icons/star.svg';
import VielenDankSection from './vielenDankSection';
export default function DetailsPage() {
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
        <VielenDankSection/>
    </div>
  )
}
