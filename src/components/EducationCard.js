import React from 'react'

export default function EducationCard() {

    const educationList = [
        {
            "year": "2023 - 2027",
            "name": "Kalyani Government Engineering College",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fugit magni."
        },
        {
            "year": "2014 - 2022",
            "name": "Fulia SikshaNiketan High School",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fugit magni."
        },
        {
            "year": "2009 - 2014",
            "name": "Ananda Niketan Sishu Bihar",
            "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, fugit magni."
        }
    ]

    return (
        <>
            {educationList.map((element) => {
                return <div className='educationcard-main-div' key={element.year}>
                    <div className='year-section'>{element.year}</div>
                    <div className='name-section'>{element.name}</div>
                    <div className='description-section'>{element.description}</div>
                </div>
            })}
        </>
    )
}
