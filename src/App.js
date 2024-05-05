import React, { useEffect } from 'react'

import './App.css';
import './component _css/Navbar.css'
import './component _css/HomePageBody.css'
import './component _css/ContactPage.css'
import './component _css/Skills.css'
import './component _css/Education.css'
// import './component _css/Hambarger.css'
import './component _css/Preloader.css'
import './component _css/Login.css'
import './component _css/Projects.css'
import './component _css/ProjectCard.css'
import './component _css/Page404custom.css'
import './component _css/Sectioncopyright.css'
import './component _css/Resume.css'
import './component _css/ResumeCardImg.css'
import './component _css/About.css'
import './component _css/EducationCard.css'
import './component _css/Experiencecard.css'
import './component _css/Blog.css'
import './component _css/Blogcard.css'
import './component _css/BlogcardFlex.css'
import './component _css/Footer.css'
import './component _css/AboutFooter.css'


// import Navbar from './components/Navbar';
import Homepagebody from './components/Homepagebody';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Resume from './components/Resume';
import About from './components/About'                    
import ContactPage from './components/ContactPage';
import Login from './components/Login';
import Page404custom from './components/Page404custom';
import Blog from './components/Blog';
// import ProjectsCard from './components/ProjectsCard';
// import Preloader from './components/Preloader';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  // useEffect(() => {
  //   const handleContextmenu = e.1 => {
  //     e.preventDefault()
  //   }
  //   document.addEventListener('contextmenu', handleContextmenu)
  //   return function cleanup() {
  //     document.removeEventListener('contextmenu', handleContextmenu)
  //   }
  // }, [])


  return (
    <>
      <BrowserRouter basename='/PortfolioWebsite'>
        {/* <Navbar /> */}
        {/* <HambargarMenu/> */}
        <Routes>
          <Route exact path='/PortfolioWebsite' element={<Homepagebody />} />
          <Route exact path='/Home' element={<Homepagebody />} />
          <Route exact path='/Education' element={<Education />} />
          <Route exact path='/Resume' element={<Resume />} />
          <Route exact path='/Skills' element={<Skills />} />
          <Route exact path='/Projects' element={<Projects />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Contact' element={<ContactPage />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Blog' element={<Blog />} />
          <Route exact path='*' element={<Page404custom />} />
        </Routes>
        {/* <Login/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
