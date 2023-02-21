import React from 'react'
import './textSection.scss';
import UnionIcon from '../../../assets/icons/Union.svg';
import UnionIcon1 from '../../../assets/icons/Union1.svg';
import UnionIcon2 from '../../../assets/icons/Union2.svg';
export default function TextSection() {
    return (
        <div>
            <div className='all-text-section-content-alignment'>
                <div className='container-md-3'>
                    <div className='grid'>
                        <div className='grid-items'>
                            <div className='sub-grid'>
                                <div className='sub-grid-items'>
                                    <div className='icon'>
                                        <img src={UnionIcon} alt="UnionIcon" />
                                    </div>
                                </div>
                                <div className='sub-grid-items'>
                                    <p>Unser Netzwerk wird Dein Unternehmen</p>
                                    <span>Du profitierst von unserem Unternehmernetzwerk, welches seines Gleichen sucht. </span>
                                    <span>Du bist nicht nur dein eigener Chef und bestimmst, wann und von wo du arbeitest, sondern hast auch die Möglichkeit dir dein eigenes Unternehmen aufzubauen.</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid-items'>
                            <div className='sub-grid'>
                                <div className='sub-grid-items'>
                                    <div className='icon'>
                                        <img src={UnionIcon1} alt="UnionIcon1" />
                                    </div>
                                </div>
                                <div className='sub-grid-items'>
                                    <p>Miteinander und füreinander</p>
                                    <span>Monetäre Leistungen sind nicht unwichtig, aber definitiv nicht Alles! Darüber hinaus wird auch die Anerkennung & Wertschätzung deiner unternehmerischen Leistungen auf persönlicher Ebene honoriert!</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid-items'>
                            <div className='sub-grid'>
                                <div className='sub-grid-items'>
                                    <div className='icon'>
                                        <img src={UnionIcon2} alt="UnionIcon2" />
                                    </div>
                                </div>
                                <div className='sub-grid-items'>
                                    <p>Engagement wird finanzieller Erfolg</p>
                                    <span>Leistungsgerechte Bezahlung?
                                        Für jeden?</span>
                                    <span>  Ja, denn Du bestimmst mit deinem Engagement deine Karriere, unabhängig deines bisherigen Werdegangs.
                                        Auf diesem Weg begleiten wir Dich nicht nur, sondern qualifizieren Dich in allen Bereichen, wie z.B. Führung, Standortleitung, Aus-und Weiterbildung deiner Partner. </span>
                                </div>
                            </div>
                        </div>
                        <div className='grid-items'>
                            <div className='sub-grid'>
                                <div className='sub-grid-items'>
                                    <div className='icon'>
                                        <img src={UnionIcon2} alt="UnionIcon2" />
                                    </div>
                                </div>
                                <div className='sub-grid-items'>
                                    <p>Dein Erfolg ist der Deiner Mandanten</p>
                                    <span>
                                        Unser Beratungsansatz ist nicht nur auf die Finanzdienstleistung limitiert, sondern bildet unseren Mandanten auch beispielsweise im Bereich Karriereentwicklung, Jobvermittlung und
                                        Energieberatung einen absoluten Mehrwert. Das Ganze wird unsererseits durch Premiumpartner am Markt sichergestellt.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
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
