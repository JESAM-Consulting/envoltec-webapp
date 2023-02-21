import React from 'react'
import './header.scss';
import LbmImage from '../../assets/icons/LBM.svg';
import FE_Merged from '../../assets/icons/FE_Merged.svg';
import CloseIcon from '../../assets/icons/x.svg';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div>
        <div className='header-design'>
            <div className='container-md'>
                <div className='first-logo-content-alignment'>
                    <div >
                        <NavLink to="/">
                        <img className='lbm-logo ' src={LbmImage} alt="LbmImage"/>
                        </NavLink>
                    </div>
                    <div>
                        <span>x</span>
                        <img src={CloseIcon} alt="CloseIcon"/>
                    </div>
                    <div>
                        <img src={FE_Merged} alt="FE_Merged"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


