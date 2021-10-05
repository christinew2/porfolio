import React from 'react'
import './About.css'

import email from '../../assets/icons/email.png'
import GHLogo from '../../assets/icons/GitHub-Mark-64px.png'
import LILogo from '../../assets/icons/LI-In-Bug.png'
import christine from '../../assets/images/christine.jpeg'

const About = () => {
    return (
        <section className="about-me">
            <div className="about-me-img" >
                <img src={christine} alt="christine"/>
            </div>
            <div className="about-me-content">
                <p>I am a full stack developer with a passion for connecting with others and building tools and services that have lasting impact on my community, particularly in the healthcare industry. My background in biomedical engineering not only refined my ability to quickly tackle complex problems through systematic approaches, but also equipped me for cross-functional, multi-disciplinary roles. I love independent work, and especially thrive in team settings that challenge me and give me opportunities to explore different creative solutions.</p>
                <div className="links">
                    <a href="christinewei2@gmail.com">
                        <img src={email} alt="email" />
                    </a>
                    <a href="https://www.linkedin.com/in/christinew2/">
                        <img src={LILogo} alt="linkedin" />
                    </a>
                    <a href="https://github.com/christinew2">
                        <img src={GHLogo} alt="github" />
                    </a>
                </div>
            </div>
        </section>
    );
}
 
export default About;