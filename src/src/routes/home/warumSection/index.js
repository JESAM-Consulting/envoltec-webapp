import React, { useState } from 'react'
import './warumSection.scss';
import EditIcon from '../../../assets/icons/edit.svg';
import CapaIcon from '../../../assets/icons/Capa.svg';
import CallIcon from '../../../assets/icons/call.svg';
import ThumbIcon from '../../../assets/icons/thumb.svg';
import DateIcon from '../../../assets/icons/date.svg';
import VectorIcon from '../../../assets/icons/Vector.svg';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const dataArray  = 
[
    {icon: EditIcon , message: "Bei FE Finance muss ich Oma Erna nicht die Überweisung ausfüllen.",id: "value1"},
    {icon: CapaIcon , message: "Am SchLaDo geht’s auch bei FE Finance richtig ab, aber nicht nur für Vorstände, die sich die Hände reiben und ordentlich Cash machen.",id: "value2"},
    {icon: CallIcon , message: "Wir hatten noch nie Schalter oder Service-Points, die besetzt werden müssen und diese wird es auch nie geben.",id: "value3"},
    {icon: ThumbIcon , message: "Bei FE Finance verdienst Du so gut, dass Du nicht mehr auf Büromaterial & Werbegeschenke Deiner Bank angewiesen bist",id: "value4"},
    {icon: DateIcon , message: "Bei FE Finance muss ich keine Kalender mehr an Kunden austeilen und sie mit meinem Leben verteidigen.",id: "value5"},
    {icon: VectorIcon , message: "Bei FE Finance musst Du Dich nicht mit Pfändungskunden rumschlagen oder erklären, warum Rechnungen pünktlich bezahlt werden müssen.",id: "value6"}

]
export default function WarumSection() {
    const [selectValue , setSelectValue] = useState()
    console.log("selectValue",selectValue);


    let { id } = useParams();
    console.log(id,"useparams@@@");

  return (
    <div>
        <div className='warum-all-section-content-alignment'>
            <div className='container-md'>
                <div className='page-title'>
                    <p>Warum FE Finance Dein Ding wird:</p>
                </div>
                <div className='grid'>
                {dataArray?.map((data,i)=>{
                    return(
                        <>
                          <div className='grid-items' onClick={(e)=> setSelectValue(data?.id)}>
                        <NavLink to={`/landing/${data?.id}`}>
                            
                        <div className='sub-grid'>
                            <div className='sub-grid-items icon-center-alignment'>
                            <img src={data?.icon} alt="EditIcon"/>
                            </div>
                            <div className='sub-grid-items'>
                            <p>{data?.message}</p>
                            </div>
                            <div className='sub-grid-items'>
                                <div className='round'></div>
                            </div>
                        </div>
                        </NavLink>
                    </div>


                   
                        </>
                    )
                }
                )} 
                </div>
            </div>
        </div>
    </div>
  )
}
