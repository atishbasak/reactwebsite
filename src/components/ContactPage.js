import React from 'react'
import Navbar from './Navbar'
import {
  Link
} from "react-router-dom";
import Sectioncopyright from './Sectioncopyright';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className='total-page contact-total-page'>
        <div className='contact-page-main-box'>
          <div className='heading-text'>
            <div className='glow-box'>
              <div className='main-heading'>Let's &nbsp;Contact</div>
            </div>

            <div className='gmail-div'>
              <div>
                <img src="./images/gmail logo.webp" alt="" className='logo' />
              </div>
              <div className='contact-text'>sample@gmail.com</div>
            </div>

            <div className='gmail-div phone-div'>
              <div>
                <img src="./images/phone logo.png" alt="" className='logo phone-logo' />
              </div>
              <div className='contact-text'>91+ &nbsp;**********</div>
            </div>

            <div className='contact-text address-text'>Address : *************************</div>

            {/* links  */}

            <div className='contact-page-links-main-div links-main-prev'>

              <div className='contact-page-links-outer blue-sq-filter'>
                <Link to=""><img src="./images/linked in.png" alt="" className='contact-page-links' /></Link>
              </div>
              <div className='contact-page-links-outer blue-sq-filter'>
                <Link to="https://www.facebook.com/atish.basak.7?mibextid=ZbWKwL" ><img src="./images/facebook.png" alt="" className='contact-page-links' /></Link>
              </div>

            </div>
          </div>

          <div>
            <img src="./images/contact page hero.png" alt="" className='contact-page-hero' />
          </div>

          <div className='contact-page-links-main-div extra-for-responsive'>

            <div className='contact-page-links-outer blue-sq-filter'>
              <Link to=""><img src="./images/linked in.png" alt="" className='contact-page-links' /></Link>
            </div>
            <div className='contact-page-links-outer blue-sq-filter'>
              <Link to="" ><img src="./images/facebook.png" alt="" className='contact-page-links' /></Link>
            </div>

          </div>

        </div>

        <Sectioncopyright />
      </div>
    </>
  )
}
