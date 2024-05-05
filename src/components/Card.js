import React from 'react'

export default function Card(props) {
    let{title,imgurl} = props
    return (
        <>
            <div className='total-card'>
                <div className='each-card'>
                    <div className='image-div'>
                        <img src={imgurl} alt="" className='image-div' />
                    </div>
                    <div className='title-div'>{title}</div>
                    {/* <div className='percentage-box'>{author}</div> */}
                </div>
                <div className='more-box'>more</div>
            </div>

        </>
    )
}
