import React from 'react'
import './jetztSection.scss';
export default function JetztSection() {
    return (
        <div>
            <div className='jetzt-section-all-content-alignment'>
                <div className='container'>
                    <h4>Jetzt bewerben und die Branche verändern.</h4>
                    <p>FE Finance GmbH</p>
                    <div className='button-center-alignment'>
                        <a href="#form">
                            <button>Jetzt bewerben <br />
                                <span>(ohne Lebenslauf in 30 Sek.)</span>

                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
