import React from 'react';
import './Landing.css'
import Animation from '../../components/misc/Animation'
import code from '../../assets/animations/animation.json'

const Landing = () => {
    return (
        <>

        <h1>LANDING PAGE</h1>
        <div className="animation-container">
            <Animation animationData={code}></Animation>
        </div>
        </>
    );
}
 
export default Landing;