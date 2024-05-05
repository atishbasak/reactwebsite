import React from 'react'
import Navbar from './Navbar'
import {
  Link
} from "react-router-dom";
import AboutFooter from './AboutFooter';

export default function Resume() {
  return (
    <>
      {/* <Navbar /> */}

      <div className='about-total-page-background'>

        <div className="container">
          <div className="section-1 mh">
            <div className="box  fadeIn"><img src="https://anshulgupta.in/ui/landing-page/fxi/daniel-monteiro-uGVqeh27EHE-unsplash.jpg" alt="" className='img' /></div>
            <div className="box  fadeIn duration-200 delay-100">
              <img src="https://anshulgupta.in/ui/landing-page/fxi/alex-iby-470eBDOc8bk-unsplash.jpg" alt="" className='img' />
            </div>
            <div className="box  fadeIn duration-200 delay-200"><img src="https://anshulgupta.in/ui/landing-page/fxi/ahmed-carter-tiWcNvpQF4E-unsplash.jpg" alt="" className='img' /></div>
            <div className="box  fadeIn duration-200 delay-300"><img src="https://anshulgupta.in/ui/landing-page/fxi/fezbot2000-lHtlEv850IM-unsplash.jpg" alt="" className='img' /></div>
            <div className="box  fadeIn duration-200 delay-400"><img src="https://anshulgupta.in/ui/landing-page/fxi/brantley-neal-uph_qeI7tVc-unsplash.jpg" alt="" className='img' /></div>
            <div className="navbar">
              <p><Link to="/Home">Home</Link></p>
              <p><Link to="/Contact">Contact</Link></p>
              <div className="hamburger-button hamburger-anim ">
                <Link to="">
                  <span></span>
                  <span></span>
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="section-2 mh">
            <div className="box  fadeIn duration-200 delay-200"><img src="https://anshulgupta.in/ui/landing-page/fxi/tyler-nix-ssmQJ-q4VqE-unsplash.jpg" alt="" className='img' /></div>
            <div className="box  fadeIn duration-200 delay-300"><img src="https://anshulgupta.in/ui/landing-page/fxi/connor-botts-YxKBT84-nm0-unsplash.jpg" alt="" className='img' /></div>
            <div className="box  fadeIn duration-200 delay-400"><img src="https://anshulgupta.in/ui/landing-page/fxi/ahmed-syed-ZdOSy9_DWWg-unsplash.jpg" alt="" className='img' /></div>
            <div className="company-name">
              <h1 className="h1">FXI</h1>
              <h2 className=" swoopInTop duration-400 h2">A CREATIVE COMMUNITY</h2>
            </div>
          </div>
          <div className="section-3 mh">
            <div className="box  fadeIn duration-200 delay-300"><img src="https://anshulgupta.in/ui/landing-page/fxi/daniel-rigdon-GKnZcVTIz4U-unsplash.jpg" alt="" className='img' /></div>
            <div className="box  fadeIn duration-200 delay-400"><img src="https://anshulgupta.in/ui/landing-page/fxi/david-gavi-S1r4nlhPQQs-unsplash.jpg" alt="" className='img' /></div>
            <div className="box  fadeIn duration-200 delay-500"><img src="https://anshulgupta.in/ui/landing-page/fxi/ahmed-carter-GP3-QpmTgPk-unsplash.jpg" alt="" className='img' /></div>
            <div className="box  fadeIn duration-200 delay-600"><img src="https://anshulgupta.in/ui/landing-page/fxi/drew-graham-u6E5q4gEq78-unsplash.jpg" alt="" className='img' /></div>
            <ul className="social-icons">
              <li className=" popIn ">
                <svg id="fb" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                  <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" /></svg></li>
              <li className=" popIn duration-2000 delay-100">
                <svg id="insta" enableBackground="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
                  <path d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z" />
                  <path d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z" />
                  <circle cx="18.406" cy="5.595" r="1.439" /></svg></li>
              <li className=" popIn duration-2000 delay-200">
                <svg version="1.1" id="twitter" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                  <g>
                    <g>
                      <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
			c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
			c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
			c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
			c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
			c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
			C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
			C480.224,136.96,497.728,118.496,512,97.248z" />
                    </g>
                  </g>
                </svg>
              </li>
            </ul>
          </div>
          <aside>
            <div className="navigation-icons">
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                <path style={{ fill: '#4CAF50' }} d="M263.432,3.136c-4.16-4.171-10.914-4.179-15.085-0.019c-0.006,0.006-0.013,0.013-0.019,0.019
	l-192,192c-4.093,4.237-3.975,10.99,0.262,15.083c4.134,3.992,10.687,3.992,14.82,0L245.213,36.416v464.917
	c0,5.891,4.776,10.667,10.667,10.667c5.891,0,10.667-4.776,10.667-10.667V36.416l173.781,173.781
	c4.093,4.237,10.845,4.355,15.083,0.262c4.237-4.093,4.354-10.845,0.262-15.083c-0.086-0.089-0.173-0.176-0.262-0.262L263.432,3.136
	z" />
                <path d="M447.88,213.333c-2.831,0.005-5.548-1.115-7.552-3.115L255.88,25.749L71.432,210.219c-4.237,4.093-10.99,3.975-15.083-0.262
	c-3.992-4.134-3.992-10.687,0-14.82l192-192c4.165-4.164,10.917-4.164,15.083,0l192,192c4.159,4.172,4.149,10.926-0.024,15.085
	C453.409,212.214,450.702,213.333,447.88,213.333z" />
                <path d="M255.88,512c-5.891,0-10.667-4.776-10.667-10.667V10.667C245.213,4.776,249.989,0,255.88,0
	c5.891,0,10.667,4.776,10.667,10.667v490.667C266.546,507.224,261.771,512,255.88,512z" />
              </svg>
              <div className="circle one"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                <path style={{ fill: '#FFC107' }} d="M440.437,301.781L266.656,475.584V10.667C266.656,4.776,261.88,0,255.989,0
	c-5.891,0-10.667,4.776-10.667,10.667v464.917L71.541,301.781c-4.237-4.093-10.99-3.975-15.083,0.262
	c-3.992,4.134-3.992,10.687,0,14.82l192,192c4.16,4.171,10.914,4.179,15.085,0.019c0.006-0.006,0.013-0.013,0.019-0.019l192-192
	c4.093-4.237,3.975-10.99-0.262-15.083c-4.134-3.993-10.687-3.993-14.821,0L440.437,301.781z" />
                <path d="M255.989,512c-2.831,0.005-5.548-1.115-7.552-3.115l-192-192c-4.093-4.237-3.975-10.99,0.262-15.083
	c4.134-3.992,10.687-3.992,14.82,0l184.469,184.448l184.448-184.448c4.237-4.093,10.99-3.975,15.083,0.262
	c3.993,4.134,3.993,10.687,0,14.821l-192,192C261.521,510.879,258.813,511.999,255.989,512z" />
                <path d="M255.989,512c-5.891,0-10.667-4.776-10.667-10.667V10.667C245.323,4.776,250.098,0,255.989,0
	c5.891,0,10.667,4.776,10.667,10.667v490.667C266.656,507.224,261.88,512,255.989,512z" />
              </svg>
            </div>
            <div className="slide-number">
              <p>01 / 05</p>
            </div>
          </aside>
          <div className="slide-text">
            <p><span className=" fadeIn ">Shift in Focus</span>
              <span>
                <svg className=" popInLeft duration-800" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                  <g>
                    <g>
                      <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
			c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
			l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
			c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" />
                    </g>
                  </g>
                </svg>
              </span></p>
            <span className=" fadeIn ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo accu.</span>
          </div>
        </div>


      <AboutFooter/>

      </div>



    </>
  )
}
