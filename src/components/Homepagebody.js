import React from 'react'
import Navbar from './Navbar'
import {
  Link
} from "react-router-dom";
import Sectioncopyright from './Sectioncopyright';
// import SampleCv from '../..iimages/SampleCv.pdf';
// import Preloader from './Preloader';


const PDF_FILE_URL = "http://localhost:3000/SampleCv.pdf";

export default function Homepagebody() {

  const downloadFileAtUrl = (url) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const fileName = url.split("/".toUpperCase());
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      })
  }

  return (
    <>
      <Navbar />

      <div className='total-page'>

        {/* Home [age hero and hero title ] */}

        <div className='home-page-body'>

          {/* <Preloader/> */}

          <div className='own-words'>
            <p className='p1'>I Am Atish</p>
            <p className='p2'>Web Developer + <br /> Android Developer</p>
            <p className='p3'>I solve complex real life problems to get smooth user <br /> experience and that connect billions of people</p>


            {/* resume download and links */}

            <div className='cv-links'>

              <div className='download-btn neon-button blue-sq-filter'>
                <Link to="" onClick={() => (downloadFileAtUrl(PDF_FILE_URL))} className='cv' >Download CV</Link></div>


              <div className='links-main-div'>
                <div className='links-outer-layer blue-sq-filter'>
                  <Link to=""><img src="./images/github logo.png" alt="" className='links ' /></Link>
                </div>
                <div className='links-outer-layer blue-sq-filter'>
                  <Link to=""><img src="./images/linked in.png" alt="" className='links linked-in-logo' /></Link>
                </div>
                <div className='links-outer-layer blue-sq-filter'>
                  <Link to="https://www.facebook.com/atish.basak.7?mibextid=ZbWKwL" ><img src="./images/facebook.png" alt="" className='links facebook-logo' /></Link>
                </div>
              </div>

            </div>
          </div>

          <div><img src="./images/hero1.png" alt="" className='hero-logo hero-logo-shadow' /></div>

        </div>


        {/* for responsive design perpose */}

        <div className='additional-p3-low-width'>

          <p className='p3-low-width'>I solve complex real life problems to get smooth user  experience and that connect billions of people</p>
        </div>


        {/* lower home pages ................................................. */}


        <div className='web-dev-workd-heading-div'>
          <div className='web-dev-works-homepage-body'>Web Dev Works</div>
        </div>
        <div className='home-page-body-second-page-main-box'>
          <div className='web-works-div-1'>
            <div><img src="./images/web works 1.png" alt="" className='web-works-div-1-img' /></div>
            <div className='web-works-div-1-text'>
              <div className='web-works-1-heading'>E - Commerce Website</div>
              <div className='web-works-1-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At repellat aliquid incidunt cupiditate minus asperiores repellendus, molestias voluptatum libero, modi tempore? Officia cumque exercitationem molestiae excepturi, ipsam earum, iste optio blanditiis quo reiciendis recusandae. Veritatis, modi illo officiis odit omnis, et eum ipsa doloremque quisquam eveniet earum distinctio in id quo quae minus consectetur ullam ex ipsum molestias explicabo labore voluptatibus odio. Temporibus porro ullam eligendi non asperiores recusandae ducimus iste! Possimus eius dolor doloribus quo sint quis quos reiciendis.</div>
              <div className='web-works-1-live-view blue-sq-filter'><Link>Live View</Link></div>
            </div>
          </div>


          <div className='web-works-div-2-responsive'>
            <div><img src="../images/web works 2.png" alt="" className='web-works-div-1-img' /></div>
            <div className='web-works-div-1-text'>
              <div className='web-works-1-heading'>Buisness Website</div>
              <div className='web-works-1-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At repellat aliquid incidunt cupiditate minus asperiores repellendus, molestias voluptatum libero, modi tempore? Officia cumque exercitationem molestiae excepturi, ipsam earum, iste optio blanditiis quo reiciendis recusandae. Veritatis, modi illo officiis odit omnis, et eum ipsa doloremque quisquam eveniet earum distinctio in id quo quae minus consectetur ullam ex ipsum molestias explicabo labore voluptatibus odio. Temporibus porro ullam eligendi non asperiores recusandae ducimus iste! Possimus eius dolor doloribus quo sint quis quos reiciendis.</div>
              <div className='web-works-1-live-view blue-sq-filter'><Link>Live View</Link></div>
            </div>
          </div>


          <div className='web-works-div-2'>
            <div className='web-works-div-1-text web-works-div-2-text'>
              <div className='web-works-1-heading web-works-2-heading'>Buisness Website</div>
              <div className='web-works-1-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At repellat aliquid incidunt cupiditate minus asperiores repellendus, molestias voluptatum libero, modi tempore? Officia cumque exercitationem molestiae excepturi, ipsam earum, iste optio blanditiis quo reiciendis recusandae. Veritatis, modi illo officiis odit omnis, et eum ipsa doloremque quisquam eveniet earum distinctio in id quo quae minus consectetur ullam ex ipsum molestias explicabo labore voluptatibus odio. Temporibus porro ullam eligendi non asperiores recusandae ducimus iste! Possimus eius dolor doloribus quo sint quis quos reiciendis.</div>
              <div className='web-works-1-live-view blue-sq-filter'><Link>Live View</Link></div>
            </div>
            <div><img src="./images/web works 2.png" alt="" className='web-works-div-1-img web-works-div-2-img' /></div>
          </div>

          <div className='view-more-button-mqin-box'>
            <div className='view-more-button blue-sq-filter'><Link to="/Projects">View more</Link></div>
          </div>

        </div>

        <Sectioncopyright />
      </div>


    </>
  )
}
