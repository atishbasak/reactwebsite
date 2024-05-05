import React from 'react'
import ProjectsCard from './ProjectsCard';
import Navbar from './Navbar';

// import {
//   Link
// } from "react-router-dom";


export default function Resume() {


  const webDevprojects = [

    {
      "id": "1",
      "img": "./images/web works 1.png",
      "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    },
    {
      "id": "2",
      "img": "./images/web works 2.png",
      "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    },
    {
      "id": "3",
      "img": "./images/web works 1.png",
      "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    },
    {
      "id": "4",
      "img": "./images/web works 2.png",
      "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    },
    {
      "id": "5",
      "img": "./images/web works 1.png",
      "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    },
    {
      "id": "6",
      "img": "./images/web works 2.png",
      "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    },
    {
      "id": "7",
      "img": "./images/web works 1.png",
      "technologyUsed": "Html,Css,Node js.,React,Javascript,MongoDB"
    },
  ]



  return (
    <>
      <Navbar />

      <div className='total-page'>
        <div className='para-div'>
          <div className='p-1 web-dev-heading'>Website&nbsp; Development&nbsp; Projects</div>
          <div className='p-1 web-dev-heading-responsive-1'>Website&nbsp; Development</div>
          <div className='p-1 web-dev-heading-responsive-2'>Projects</div>
        </div>

        <div className='web-dev-projects-main-div'>
          <div className='web-dev-projects'>
            {webDevprojects.map((element) => {
              return (
                <ProjectsCard key={element.id} img={element.img} technologyUsed={element.technologyUsed} />
              )
            })}
          </div>
        </div>
      </div>

    </>
  )
}
