import React from 'react'


export default function ExperienceCard() {

    const certificationCard = [
        {
            "title": "Oppia Private Limited",
            "description": "Web Development Internship",
            "certtificate": "./images/oppia certificate.webp"
        },
        {
            "title": "Oppia Private Limited",
            "description": "Web Development Internship",
            "certtificate": "./images/oppia certificate.webp"
        },
        {
            "title": "Oppia Private Limited",
            "description": "Web Development Internship",
            "certtificate": "./images/oppia certificate.webp"
        }, {
            "title": "Oppia Private Limited",
            "description": "Web Development Internship",
            "certtificate": "./images/oppia certificate.webp"
        }
    ]

    return (
        <>
            <div className='experience-card-main-div'>
                <div className='slider-color-margin-top-div'></div>
                {certificationCard.map((element) => {
                    return <div className='border-div' >
                        <div>
                            <div className='title-section'>{element.title}</div>
                            <div className='description-section-experience-card'>{element.description}</div>
                        </div>
                        <div className='certificate-section'><img src={element.certtificate} alt="" /></div>
                        {/* <hr className='educationcard-horizontal-rool' /> */}
                    </div>
                })}
                {/* <div className='slider-color-margin-bottom-div'></div> */}
            </div>
        </>
    )
}
