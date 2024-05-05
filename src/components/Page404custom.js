import React from 'react'
import {
    Link
} from "react-router-dom";
// import Sectioncopyright from './Sectioncopyright';

export default function Page404custom() {
    return (
        <>
            {/* <div className='page404' to="*"><img src="./images/page404.png" alt="" /></div> */}
            <div className='background-img-section'>
                <div className='back-to-home'><Link to="/Home">Back To Home</Link></div>
            </div>
            {/* <Sectioncopyright/> */}

        </>
    )
}
