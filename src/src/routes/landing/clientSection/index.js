import React from 'react'
import './clientSection.scss';
import ProfileIcon from '../../../assets/icons/profile.png';
export default function ClientSection() {
    return (
        <div>
            <div className='all-client-section-content-alignment'>
                <div className='container-md-2'>
                    <div className='grid'>
                        <div className='grid-items'>
                            <h1>Durch FE Finance bin ich am Markt überlegen. </h1>
                            <h6>
                                <span>Michael Mues  </span>war vorher bei der tecis FDL
                                , einem der größten Finanzdienstleister
                            </h6>
                            <div className='button-design'>
                                <a href="#form">
                                <button>Jetzt bewerben <br />
                                    <span>(ohne Lebenslauf in 30 Sek.)</span>
                                </button>
                                </a>
                             
                            </div>
                        </div>
                        <div className='grid-items'>
                            <div className='image-style'>
                                <img src={ProfileIcon} alt="ProfileIcon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
