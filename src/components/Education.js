import React from 'react'
import Navbar from './Navbar'
import Sectioncopyright from './Sectioncopyright'
// import Navbar from './Navbar'
// import {
//     Link
// } from "react-router-dom";

export default function Education() {
    return (
        <>
            <Navbar />

            <div className='total-page'>
                <div className='education-main-box'>
                    <div className='education-hero'><img src="./images/education hero.png" alt="" className='education-hero' /></div>
                    <div></div>
                    <div className='education-text-div'>
                        <div className='edu-heading'>Education</div>
                        <div className='underline margin-gap-low heading-font'>Primary Level</div>
                        <div className='margin-gap-high margin-gap-moderate'>Ananda Niketan Sishu Bihar K.G School</div>
                        <div className='underline margin-gap-low heading-font'>10+2 Level Education</div>
                        <div className='margin-gap-high margin-gap-moderate'>Fulia siksha niketan High School</div>
                        <div className='underline margin-gap-low heading-font'>Undergraduate Level</div>
                        <div className='margin-gap-moderate'>I am currently studying ...... <br />
                            B.Tech In Electronics And Communication Engineering(ECE) <br /> Kalyani Government Engineering College</div>
                    </div>
                </div>

                <Sectioncopyright />
            </div>

        </>
    )
}
