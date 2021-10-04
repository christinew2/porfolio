import React from 'react';
import './Landing.css'
import Animation from '../../components/misc/Animation'
import code from '../../assets/animations/animation.json'

const Landing = () => {
    return (
        <>
            <div className="landing-left">
                <h1>Hello!</h1>
                <p>My name is Christine blah</p>
            </div>
            <div className="landing-right">
                <Animation animationData={code}></Animation>
            </div>
        </>
    );
}
 
export default Landing;