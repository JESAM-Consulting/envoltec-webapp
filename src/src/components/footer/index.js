import React from 'react'
import './footer.scss';
import ClockIcon from '../../assets/icons/clock.svg'
import XmldIcon from '../../assets/icons/xmld.svg'
import { NavLink } from 'react-router-dom';
export default function Footer() {
  return (
    <div>
        <footer>
            <div className='footer-logo'>
                <span>verbraucherschutzkonform nach</span>
                <img src={XmldIcon} alt="XmldIcon"/>
            </div>
            <div className='footer-container'>
                <div className='footer-mobile-view-logo'>
                <div className='footer-logo-mobile'>
                <span>verbraucherschutzkonform nach</span>
                <div align="center">
                <img src={XmldIcon} alt="XmldIcon"/>
                </div>
            </div>
                </div>
                <div className='icon-text-style'>
                    <div>
                        <img src={ClockIcon} alt="ClockIcon"/>
                    </div>    
                    <div>
                        <p>
                        <span>10 Sekunden bis</span> <span>du</span> keinen Bock mehr auf den Job bei der Bank hast - und bei FE Finance <span>deinen Wert erkennst.</span>
                        </p>
                    </div>    
                </div> 
                <div className='last-text'>
                    <NavLink to="/impressum">Impressum</NavLink>                    
                    <NavLink to="/datenschutz">Datenschutz</NavLink>                    
                </div>   
            </div>            
        </footer>
    </div>
  )
}
