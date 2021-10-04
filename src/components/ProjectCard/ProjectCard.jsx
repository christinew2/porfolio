import React from 'react';
import './ProjectCard.css'


const ProjectCard = (props) => {

    console.log(props)

    return (
        <a href={props.site} className="project-card">
            <div className="card-header">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
            <div className="card-img">
                <img src={props.image} alt="project screenshot" />
            </div>
            <div>
                <p>Check out the code: <a href={props.github}>GitHub Repo</a></p>
            </div>
        </a>
    );
}
 
export default ProjectCard;