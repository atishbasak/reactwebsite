import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import {
    Link,
} from "react-router-dom";

import Sectioncopyright from './Sectioncopyright';

export default function Skills() {
    const articles = [
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
            "title": "CSS",
            "urlToImage": "./images/css logo.png"
        },
        {
            "title": "JavaScript",
            "urlToImage": "./images/javascript logo.png"
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
            "title": "SQL",
            "urlToImage": "./images/sql logo.png"
        },
        {
            "title": "Kotlin",
            "urlToImage": "./images/kotlin logo.png"
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
            "title": "Terminal",
            "urlToImage": "./images/terminal logo.png"
        }
    ]

    return (
        <>
            <Navbar />

            <div className='total-page'>
                <div className='skills-main-box'>
                    <div className='heading'>My Skills</div>

                    <div className='card-box'>
                        {articles.map((element) => {
                            return <Card title={element.title} imgurl={element.urlToImage} />
                        })}

                    </div>
                </div>


                <div className='web-dev-skills-main-div'>
                    <div className='skills-web-dev-section-heading'>Website Development</div>
                    <div className='skills-web-dev-img-text-section'>
                        <div><img src="./images/web dev skills.png" alt="" className='web-dev-skills-img' /></div>
                        <div className='skills-web-dev-text-section'>
                            <p className='web-dev-text-heading web-dev-text-heading-positioning'>Frontend Technologies</p>
                            <p className='web-dev-text-description web-dev-desc'>Skilled in HTML for structured markup and CSS for responsive layouts and animations. Proficient in JavaScript for dynamic web apps, React for reusable UI components, Vue.js for reactive interfaces, and AngularJS for scalable applications, showcasing versatility in frontend development.</p>

                            <p className='web-dev-text-heading web-dev-text-heading-positioning'>Backend Technologies</p>
                            <p className='web-dev-text-description web-dev-desc'>Proficient in Node.js for server-side development: handling HTTP requests, building APIs, and implementing backend logic. Skilled in MERN Stack for full-stack apps, ensuring seamless integration of MongoDB, Express.js, React, and Node.js components for robust web solutions.</p>

                            <p className='web-dev-text-heading web-dev-text-heading-positioning web-dev-text-heading-non-responsive'>Databases</p>
                            <p className='web-dev-text-description web-dev-desc web-dev-desc-non-responsive'>Experienced in MongoDB for flexible data management. Proficient in PHP for server-side scripting, database integration, and logic implementation. Competent in SQL databases, covering design, querying, and management, ensuring robust backend solutions for diverse projects.</p>

                            <p className='web-dev-text-heading web-dev-text-heading-positioning web-dev-text-heading-non-responsive'>Additional Skills</p>
                            <p className='web-dev-text-description web-dev-desc web-dev-desc-non-responsive'>Proficient in Git for version control, including collaboration on platforms like GitHub. Knowledgeable in responsive design, crafting adaptable web apps. Skilled in testing and debugging for functionality and reliability. Strong problem-solving abilities ensure effective troubleshooting and solution implementation for seamless development experiences.</p>

                        </div>
                    </div>

                    <div className='web-dev-responsive-positioning'>
                        <p className='web-dev-text-heading-responsive'>Databases</p>
                        <p className='web-dev-desc-responsive'>Experienced in MongoDB for flexible data management. Proficient in PHP for server-side scripting, database integration, and logic implementation. Competent in SQL databases, covering design, querying, and management, ensuring robust backend solutions for diverse projects.</p>

                        <p className='web-dev-text-heading-responsive'>Additional Skills</p>
                        <p className='web-dev-desc-responsive'>Proficient in Git for version control, including collaboration on platforms like GitHub. Knowledgeable in responsive design, crafting adaptable web apps. Skilled in testing and debugging for functionality and reliability. Strong problem-solving abilities ensure effective troubleshooting and solution implementation for seamless development experiences.</p>
                    </div>
                    <div className='show-project-btn-main-div'>
                        <div className='show-project-btn blue-sq-filter'><Link to="/Projects">Show Projects</Link></div>
                    </div>
                </div>

                <div className='skills-web-dev-section-main-div'>
                    <div className='skills-web-dev-section-heading'>Android Development</div>
                    <div className='skills-web-dev-img-text-section'>
                        <div><img src="./images/android dev skills 3.png" alt="" className='web-dev-skills-img android-dev-skills-img' /></div>
                        <div className='skills-web-dev-text-section skills-android-dev-text-section'>
                            <p className='web-dev-text-heading'>Frontend Technologies</p>
                            <p className='web-dev-text-description'>Proficient in Java/Kotlin for Android development, C++ integration for performance, and Apache Cordova, Flutter, Dart for cross-platform apps. Expertise in cloud computing platforms like AWS, GCP, or Azure ensures scalable, resilient websites. Crafting robust backend systems, dynamic frontend interfaces, and seamless interactions, I deliver modern, high-performing websites.</p>

                            <p className='web-dev-text-heading'>Backend Technologies</p>
                            <p className='web-dev-text-description'>My backend development expertise complements Android app development, employing frameworks like Spring Boot, Django, or Node.js. Crafting robust RESTful APIs and microservices, I seamlessly integrate backend services with frontend interfaces, ensuring dynamic, data-driven Android applications that offer personalized experiences, real-time updates, and seamless interactions across devices.</p>

                            <p className='web-dev-text-heading web-dev-text-heading-non-responsive'>Security</p>
                            <p className='web-dev-text-description web-dev-desc-non-responsive'>My focus on security and compliance in Android development guarantees robust data protection. Through secure coding practices, encryption algorithms, and adherence to compliance standards, I implement HTTPS, OAuth, and encryption techniques, fostering user trust and safeguarding sensitive information from cyber threats.</p>

                        </div>
                    </div>

                    <div className='web-dev-responsive-positioning'>
                        <p className='web-dev-text-heading-responsive'>Security</p>
                        <p className='web-dev-desc-responsive'>My focus on security and compliance in Android development guarantees robust data protection. Through secure coding practices, encryption algorithms, and adherence to compliance standards, I implement HTTPS, OAuth, and encryption techniques, fostering user trust and safeguarding sensitive information from cyber threats.</p>
                    </div>


                    <div className='show-project-btn-main-div'>
                        <div className='show-project-btn blue-sq-filter'><Link>Show Projects</Link></div>
                    </div>
                </div>

                <Sectioncopyright />
            </div>
        </>
    )
}
