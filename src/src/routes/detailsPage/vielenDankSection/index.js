import React from 'react'
import './vielenDankSection.scss';
import ChatIcon from '../../../assets/icons/chat.svg';
import NoteIcon from '../../../assets/icons/note.svg';
import StatesIcon from '../../../assets/icons/states.svg';
export default function VielenDankSection() {
    return (
        <div>
            <div className='vilen-dank-section-all-content-alignment'>
                <div className='container-md '>
                    <div className='section-title'>
                        <h1>Vielen Dank für deine Bewerbung!</h1>
                        <p>
                            Wir kümmern uns schnellstöglich um Deine Bewerbung.<br />
                            Ein Manager in Deiner Nähe wird Dir weitere Infomationen und Terminvorschäge auf <br />
                            Deinem bevorzugtem Kontaktweg mitteilen.
                        </p>
                    </div>
                    <div className='sec-title'>
                        <h4>Was passiert nun?</h4>
                        <p>Zum FE Finance Berater in wenigen Schritten</p>
                    </div>
                    <div className='box-center-alignment'>
                        <div className='new-box'>
                            <div className='box-items'>
                                <div className='icon'>
                                    <img src={ChatIcon} alt="ChatIcon"/>
                                </div>
                                <p>On-boarding</p>
                                <div className='line'></div>
                            </div>
                            <div className='box-items'>
                                <div className='icon'>
                                    <img src={NoteIcon} alt="NoteIcon"/>
                                </div>
                                <p>Coaching Schulungen</p>
                                <div className='line'></div>

                            </div>
                            <div className='box-items'>
                                <div className='icon'>
                                    <img src={StatesIcon} alt="StatesIcon"/>
                                </div>
                                <p>FE Finance Beraterstatus</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
