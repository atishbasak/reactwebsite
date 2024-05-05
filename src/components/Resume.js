import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Navbar from './Navbar'
import ResumeCardImg from './ResumeCardImg'
import {
  Link
} from "react-router-dom";
import EducationCard from './EducationCard';
import ExperienceCard from './ExperienceCard';
// import Sectioncopyright from './Sectioncopyright';


const PDF_FILE_URL = "http://localhost:3000/SampleCv.pdf";

export default function Resume() {


  const aboutImgData = [
    {
      "img": "./images/about img 1.png",
      "description": "About",
      "addressLink": "/About"
    },
    {
      "img": "./images/blog icon.png",
      "description": "Blog",
      "addressLink": "/Blog"
    },
    {
      "img": "./images/paint brush.png",
      "description": "Work",
      "addressLink": "/Projects"
    },
    {
      "img": "./images/icon at.png",
      "description": "contact",
      "addressLink": "/Contact"
    }
  ]

  const coding = [
    {
      "title": "C++",
      "urlToImage": "./images/c++ logo.png"
    },
    {
      "title": "Java",
      "urlToImage": "./images/java logo.png"
    },
    {
      "title": "html",
      "urlToImage": "./images/html logo.png"
    },
    {
      "title": "JavaScript",
      "urlToImage": "./images/javascript logo.png"
    },
    {
      "title": "CSS",
      "urlToImage": "./images/css logo.png"
    },
    {
      "title": "node JS",
      "urlToImage": "./images/node js logo.png"
    },
    {
      "title": "React",
      "urlToImage": "./images/react logo.png"
    },
    {
      "title": "Angular",
      "urlToImage": "./images/angular logo.png"
    },
    {
      "title": "Python",
      "urlToImage": "./images/python logo.png"
    },
    {
      "title": "C",
      "urlToImage": "./images/c logo.png"
    },
    {
      "title": "php",
      "urlToImage": "./images/php logo.png"
    },
    {
      "title": "MongoDB",
      "urlToImage": "./images/mongodb logo.png"
    },
    {
      "title": "Kotlin",
      "urlToImage": "./images/kotlin logo.png"
    },
    {
      "title": "Terminal",
      "urlToImage": "./images/terminal logo.png"
    },
    {
      "title": "Kali",
      "urlToImage": "./images/kali linux logo.png"
    },
    {
      "title": "Parrot",
      "urlToImage": "./images/parrot logo.png"
    },
    {
      "title": "SQL",
      "urlToImage": "./images/sql logo.png"
    }
  ]

  const knowledgeItems = [
    {
      "listItems": "Frontend Development"
    },
    {
      "listItems": "Backend Development"
    },
    {
      "listItems": "Full Stack Development"
    },
    {
      "listItems": "Database"
    },
    {
      "listItems": "Android Development"
    },
    {
      "listItems": "Skilled in C++,java,Python"
    },
    {
      "listItems": "Web Hosting"
    },
    {
      "listItems": "SEO Optimization"
    },
    {
      "listItems": "DevOps"
    }

  ]

  const languages = [
    {
      "langItems": "Bengali"
    },
    {
      "langItems": "English"
    },
    {
      "langItems": "Hindi"
    }
  ]

  const resumeHeroLinks = [
    {
      "imglink": "./images/linked in.png",
      "linkPath": "https://www.linkedin.com/feed/"
    },
    {
      "imglink": "./images/github logo.png",
      "linkPath": "https://github.com/"
    },
    {
      "imglink": "./images/twitter.png",
      "linkPath": "https://twitter.com/?lang=en"
    }
  ]

  const [text] = useTypewriter({
    words: ['Web Developer', 'Abdroid Developer', 'Programmer', 'Database Expert'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60
  });

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
      <div className='total-page resume-total-page'>
        <div className='resume-main-div'>

          {/* .....................resume-sidebar............................................ */}

          <div className='resume-sidebar'>
            <div className='positioning-div'>

              {aboutImgData.map((element) => {
                return <div className='about-img-small blue-sq-filter' >
                  <Link to={element.addressLink}>
                    <img src={element.img} alt="" className='about-img-small-img' />
                    <div className='about-sidebar-descripction'>{element.description}</div>
                  </Link>
                </div>
              })}
            </div>
          </div>

          {/* .....................resume-sidebar............................................. */}


          {/* .....................resume-hero.............................................. */}

          <div className='resume-hero'>
            {/* <div className='profile-hero-main-div'> */}
            {/* <div className='rotated-div'> */}
            <div className='rotated-div-left'></div>
            <div className='rotated-div-right'></div>
            {/* </div> */}
            <div className='lower-div'>
              <div className='resume-hero-lower-div-1'>
                <div className='lower-name-div'>Atish Basak</div>
                <div className='lower-animate-description-div'>
                  <span >{text}</span>
                  <span className='cursor-typer'><Cursor cursorStyle='|' /></span>
                </div>

                <div className='lower-links-div'>
                  {resumeHeroLinks.map((element) => {
                    return <div className='blue-sq-filter'>
                      <Link to={element.linkPath}><img src={element.imglink} alt="" /></Link>
                    </div>
                  })}
                </div>
              </div>
              <div className='horizontal-rool'></div>
              <div className='resume-hero-lower-div-2 blue-sq-filter'>
                <Link to="" onClick={() => (downloadFileAtUrl(PDF_FILE_URL))}>
                  <div>DOWNLOAD&nbsp; CV</div>
                  <div><img src="./images/download logo.png" alt="" /></div>
                </Link>

              </div>
            </div>
            {/* </div> */}
          </div>


          {/* .....................resume-hero.............................................. */}


          {/* .....................resume-description........................................ */}

          <div className='resume-description-main-div'>
            <div className='resume-description'>
              <div className='resume-headings'>Resume</div>
              <div className='resume-description-down'>
                <div className='resume-description-left'>
                  <div className='resume-description-left-1'>
                    <div><img src="./images/briefcase.png" alt="" /></div>
                    <div>EXPERIENCE</div>
                  </div>
                  <div className='resume-description-left-2'>
                    <div><ExperienceCard /></div>
                  </div>
                </div>

                <div className='resume-description-right education-section'>
                  <div className='resume-description-right-1'>
                    <div><img src="./images/fa university.png" alt="" /></div>
                    <div>EDUCATION</div>
                  </div>
                  <div className='resume-description-right-2 education-div'><EducationCard /></div>
                </div>
              </div>



              <div className='resume-headings'>MY SKILLS</div>
              <div className='resume-description-down'>
                <div className='resume-description-left'>
                  <div className='resume-description-left-1'>
                    <div>&#60;/&#62; &nbsp;&nbsp;CODING</div>
                  </div>
                  <div className='resume-description-left-2 skill-div'>
                    <div div className='resume-card-grid'>
                      {coding.map((element) => {
                        return <>
                          <ResumeCardImg title={element.title} urlToImage={element.urlToImage} />
                        </>
                      })}
                    </div>
                  </div>
                </div>

                <div className='resume-description-right'>
                  <div className='resume-description-right-1'>
                    <div><img src="./images/fa list.png" alt="" /></div>
                    <div>KNOWLEDGE</div>
                  </div>
                  <div className='resume-description-right-2 resume-description-right-2-know'>
                    {knowledgeItems.map((element) => {
                      return <>
                        <div className='know-list'>
                          <div className='know-list-tick'>&#10004;</div>
                          <div>{element.listItems}</div>
                        </div>
                      </>
                    })}
                  </div>
                  <div className='resume-description-right-1'>
                    <div><img src="./images/fa flag.png" alt="" /></div>
                    <div>LANGUAGES</div>
                  </div>
                  <div className='resume-description-right-2 resume-description-right-2-know language-div'>
                    <div className='language-div-positioning'>
                      {languages.map((element) => {
                        return <>
                          <div className='lang-list'>
                            <div className='lang-list-description'>{element.langItems}</div>
                            <div className='lang-list-circle'>
                              <div className='lang-list-circle-divs'></div>
                              <div className='lang-list-circle-divs'></div>
                              <div className='lang-list-circle-divs'></div>
                              <div className='lang-list-circle-divs'></div>
                              <div className='lang-list-circle-divs'></div>
                              <div className='lang-list-circle-divs'></div>
                              <div className='lang-list-circle-divs'></div>
                              <div className='lang-list-circle-divs'></div>
                              <div className='lang-list-circle-divs'></div>
                              <div className='lang-list-circle-divs'></div>
                            </div>
                          </div>
                        </>
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className='resume-headings'>Quote</div>

              <div className='quote-section-color-div'>
                <div className='quote-section'><span>"</span>&nbsp;&nbsp;&nbsp;&nbsp;Code is the artist's brush, crafting digital worlds. In keystrokes, we </div>
                <div className='quote-section'>sculpt the future, bridging imagination with innovation.&nbsp;&nbsp;&nbsp;&nbsp;"</div>
              </div>

              <div className='quote-section-color-div-for-responsive'>
                <div className='quote-section'>"&nbsp;&nbsp;&nbsp;&nbsp;Code is the artist's brush, crafting digital</div>
                <div className='quote-section'>worlds. In keystrokes, we sculpt the</div>
                <div className='quote-section'>future, bridging imagination with</div>
                <div className='quote-section'>innovation.&nbsp;&nbsp;&nbsp;&nbsp;"</div>
              </div>
            </div>
          </div>

          {/* .....................resume-description........................................ */}
        </div>

        {/* <Sectioncopyright/> */}
      </div>

    </>
  )
}
