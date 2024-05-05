import React, { useState } from 'react'
import {
    Link,
} from "react-router-dom";


export default function Navbar() {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className='navbar-box'>

                {/* ................for max-width:800px responsive.................... */}

                <div className='navbar-logo-mail'>
                    <img src="./images/logo 2.png" alt="" className='navbar-logo magrin-logo-navbar' />
                    <img src="./images/hambargar logo.png" alt="" className='hambargar-logo-800px' onClick={() => setOpen(!isOpen)} />
                    {/* <div className={isOpen ? "hire-me-ham" : "hire-me-media"}>hire <br /> me !</div> */}
                    <div className='hire-me-media'>Hire Me !</div>
                    <div className='mail-navbar blue-sq-filter'>
                        <Link to="https://mail.google.com">sample@gmail.com</Link>
                    </div>
                </div>


                {/* ................for max-width:890px responsive.................... */}


                <div className='navbar-logo-mail-890px'>
                    <img src="./images/logo 2.png" alt="" className='navbar-logo magrin-logo-navbar' />
                    <div className='mail-navbar blue-sq-filter'>
                        <Link to="https://mail.google.com">sample@gmail.com</Link>
                    </div>
                    <ul>
                        <li className='blue-sq-filter'><Link to="/Projects" className='projects projects-ham'>Projects</Link></li>
                        <li className='blue-sq-filter'><Link to="/Resume" className='resume resume-ham'>Resume</Link></li>
                        <li className='blue-sq-filter'><Link to="/Contact" className='contact contact-ham'>Contact</Link></li>
                    </ul>
                    <div className='hire-me-media'>Hire Me !</div>
                    <img src="./images/hambargar logo.png" alt="" className='hambargar-logo-800px' onClick={() => setOpen(!isOpen)} />
                </div>
                

                {/* ................for max-width:1225px responsive.................... */}


                <div className='navbar-logo-mail-1225px'>
                    <img src="./images/logo 2.png" alt="" className='navbar-logo magrin-logo-navbar' />
                    <div className='mail-navbar blue-sq-filter'>
                        <Link to="https://mail.google.com">sample@gmail.com</Link>
                    </div>
                    <ul >
                        <li className='blue-sq-filter'><Link to="/Skills" className='skills skills-ham'>Skills</Link></li>
                        <li className='blue-sq-filter'><Link to="/Projects" className='projects projects-ham'>Projects</Link></li>
                        <li className='blue-sq-filter'><Link to="/Resume" className='resume resume-ham'>Resume</Link></li>
                        <li className='blue-sq-filter'><Link to="/Contact" className='contact contact-ham'>Contact</Link></li>
                    </ul>
                    <div className='hire-me-media'>Hire Me !</div>
                    <img src="./images/hambargar logo.png" alt="" className='hambargar-logo-800px' onClick={() => setOpen(!isOpen)} />
                    {/* <div className={isOpen ? "hire-me-ham" : "hire-me-media"}>hire <br /> me !</div> */}
                </div>


                {/* <div className='navbar-elements'>
                    <ul>
                        <li className='home'><Link to="/Home">Home</Link></li>
                        <li><Link to="/Education" className='education'>Education</Link></li>
                        <li><Link to="/Skills" className='skills'>Skills</Link></li>
                        <li><Link to="/Projects" className='projects'>Projects</Link></li>
                        <li><Link to="/Resume" className='resume'>Resume</Link></li>
                        <li><Link to="/Contact" className='contact'>Contact</Link></li>
                        <li><Link to="/About" className='about'>About</Link></li>

                        <div className='hire-me'>hire me !</div>
                        <div className='hire-me-media'>hire <br /> me !</div>

                        <div><Link to="/Login"><img src="./images/login 1.png" alt="" className='login-img' /></Link></div>

                        <div className='center' onClick={toggle_hambargar}>
                            <div></div>
                        </div>
                    </ul>
                </div> */}

                <div className={isOpen ? "navbar-hambarger-elements" : "navbar-elements"}>
                    <ul>
                        <li className='home home-ham blue-sq-filter'><Link to="/Home">Home</Link></li>
                        <li className='blue-sq-filter'><Link to="/Education" className='education education-ham'>Education</Link></li>
                        <li className='blue-sq-filter'><Link to="/Skills" className='skills skills-ham'>Skills</Link></li>
                        <li className='blue-sq-filter'><Link to="/Projects" className='projects projects-ham'>Projects</Link></li>
                        <li className='blue-sq-filter'><Link to="/Resume" className='resume resume-ham'>Resume</Link></li>
                        <li className='blue-sq-filter'><Link to="/Contact" className='contact contact-ham'>Contact</Link></li>
                        <li className='blue-sq-filter'><Link to="/About" className='about about-ham'>About</Link></li>

                        <div className='hire-me'>hire me !</div>

                        <div className='blue-sq-filter'><Link to="/Login"><img src="./images/login 1.png" alt="" className='login-img' /></Link></div>

                    </ul>
                </div>


            </div>

        </>
    )
}