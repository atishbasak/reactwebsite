import React from 'react'

export default function ResumeCardImg(props) {

    const { title, urlToImage } = props

    return (
        <>
            <div className='resume-card-main-div'>
                <div className='resume-card-total-div'>
                    <div className='coding-card-img-positioning-div'><img src={urlToImage} alt="" className='resume-card-img' /></div>
                    <div className='resume-card-title'>{title}</div>
                </div>
            </div>

        </>
    )
}
