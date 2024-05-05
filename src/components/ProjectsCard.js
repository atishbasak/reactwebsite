import React from 'react'
import {
    Link
} from "react-router-dom";

export default function ProjectsCard(props) {

    const { img, technologyUsed } = props

    return (
        <>
            <div className='projects-card-total'>
                <div className='projects-card-main-div'>
                    <div className='project-card-img'><img src={img} alt="" /></div>
                    <div className='project-card-description'>Technology Used:&nbsp;&nbsp;&nbsp;{technologyUsed}</div>
                    <div className='project-card-description-responsive-1'>Technology Used:</div>
                    <div className='project-card-description-responsive-2'>{technologyUsed}</div>
                    <div className='project-card-live-view blue-sq-filter'>
                        {/* <div></div> */}
                        <Link>Live View</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
