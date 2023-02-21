import React, { useEffect } from 'react'
import './landing.scss';
import ProfileIcon from '../../assets/icons/group-profile.png';
import starIcon from '../../assets/icons/star.svg';
import WertschätzungSection from './wertschätzungSection';
import ClientSection from './clientSection';
import TextSection from './textSection';
import FinanceGmbh from './financeGmbh';
import JetztSection from './jetztSection/index,';
import { useParams } from "react-router-dom";

export default function Landing() {
    let { id } = useParams();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
  return (
    <>
        <div className='landing-first-section'>
            <div className='container'>
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
                    {id === "value1" && (

                    <h6>
                    Auf ständiges Ausfüllen von Überweisungen, haben wir auch echt keinen Bock... umso besser, dass Du Dich für uns entscheidest ;)
                    </h6>
                    )}
                    {id === "value3" && (

                    <h6>
                    Stell Dir vor, dass es auch Unternehmen gibt, die ohne einen Schalter oder Service- Points auskommen... Sachen gibt’s, oder? Bei uns gibt’s sie jedenfalls nicht und es läuft trotzdem😊!

                    </h6>
                    )}
                    {id === "value5" && (
                        <> 
                    <h6>
                   Wir haben zwar auch schöne Kalender, diese pflegen wir aber digital und müssen diese nicht an Kunden austeilen oder an die Wand hängen...
                    </h6>
                    </>
                    )}
                    {id === "value2" && (
                    <h6>
                  SCHe*ß LAnger DOnnerstag oder kurz SchLaDo funktioniert bei uns anders... Feierabendbier und das Geld fließt in die eigene Tasche – nicht in die der Vorstände ;)!
                    </h6>
                    )}
                    {id === "value4" && (
                    <h6>
                 Nie wieder Büromaterial oder Billig-Kullis von der Bank mitgehen lassen müssen, mit uns hast Du genug Kohle und kaufst es Dir einfach selbst ;)!

                    </h6>
                    )}
                    {id === "value6" && (
                    <h6>
              P(remium)-Kunden aka. Pfändungskunden sind die anstrengendsten... wissen wir. Zum Glück gibt’s die bei uns nicht und Du kannst Dir das Erklären vom Pfändungs- Freibetrag definitiv sparen :D

                    </h6>
                    )}
                </div>
            </div>
        </div>
        <WertschätzungSection/>
        <ClientSection/>
        <TextSection/>
        <FinanceGmbh/>
                        
        <JetztSection/>
    </>
  )
}
